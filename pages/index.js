import Layout from "../components/layout";
import Link from "next/link";
import Section from "../components/section";
import FBPost from "../components/fb";
import { createClient } from "contentful";
import RTF from "../components/rtf";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import { MdEmail, MdExpandMore } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";
import IconButton from "../components/icon-button";

export default function IndexPage({ statics, sections, feed, team, menu }) {
  team = team ?? [];
  sections = sections ?? {};
  statics = statics ?? {};
  const socials = [
    {
      href: "https://facebook.com/deepsatpl",
      icon: <FaFacebook />,
      color: "#1877f2",
      text: "@deepsatpl",
    },
    {
      href: "https://github.com/deepsat",
      icon: <FaGithub />,
      textColor: "#24292e",
      text: "deepsat",
      color: "#fff",
    },
    {
      href: "mailto:kontakt@deepsat.pl",
      icon: <MdEmail />,
      text: "kontakt@deepsat.pl",
      color: "#666"
    },
  ];
  return (
    <Layout menu={menu} logoHref={statics.indexurl}>
      <DefaultSeo {...seoConfig} canonical={statics.indexurl} />
      <div className="min-h-screen flex flex-col">
        <Section
          heading={sections.hero.title}
          id="about"
          className="mt-48 mb-4"
        >
          <RTF rtf={sections.hero.content} />
        </Section>
        <ul className="mt-auto flex flex-wrap justify-center">
          {socials.map((item) => (
            <li className="mr-4 mb-4">
              <IconButton {...item} />
            </li>
          ))}
        </ul>
        <div className="mt-auto mb-4 flex justify-center">
          <p className="text-white text-6xl">
            <Link href="#start">
              <a className="scrolldown">
                <MdExpandMore />
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div id="start"></div>
      <Section heading={statics.news} id="news" className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {feed.map((post) => (
            <FBPost key={post.id} post={post}></FBPost>
          ))}
        </div>
        <Link href="https://www.facebook.com/deepsatpl">
          <a
            className="btn btn-outline text-lg"
            target="_blank"
            rel="noreferrer"
          >
            {statics["visit fb"]}
          </a>
        </Link>
      </Section>
      <Section heading={statics.team} id="team">
        <ul className="list-inside list-disc">
          {team.map((member) => (
            <li>{member.name}</li>
          ))}
        </ul>
      </Section>
      <Section heading={sections.contact.title} id="contact" className="mt-32 mb-64">
        <RTF rtf={sections.contact.content} />
      </Section>
    </Layout>
  );
}

export async function getContent(locale) {
  // fb
  const limit = 4;
  const access_token = process.env.FB_TOKEN;
  const { data: feed } = await fetch(
    `https://graph.facebook.com/v8.0/deepsatpl/posts?fields=message%2Cattachments%7Bmedia%2Cdescription%7D%2Cpermalink_url&limit=${limit}&access_token=${access_token}`
  ).then((response) => response.json());

  // contentful
  let client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });
  const sections = await client
    .getEntries({
      "fields.slug": ["hero", "contact"],
      content_type: "post",
      locale: locale,
    })
    .then((result) =>
      result.items.map((item) => [item.fields.slug, item.fields])
    )
    .then((result) => Object.fromEntries(result));

  const statics = await client
    .getEntries({
      "fields.key": ["team", "news", "visit fb"],
      content_type: "static",
      locale: locale,
    })
    .then((result) =>
      result.items.map((item) => [item.fields.key, item.fields.content])
    )
    .then((result) => Object.fromEntries(result));

  const team = await client
    .getEntries({
      content_type: "teamMember",
      order: "fields.order",
      locale: locale,
    })
    .then((result) => result.items.map((item) => item.fields));

  const menu = await client
    .getEntries({
      content_type: "menu",
      "fields.name": "Main",
      locale: locale,
    })
    .then((result) => result.items.map((item) => item.fields));

  return {
    feed,
    sections,
    statics,
    team,
    menu: menu[0].content,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      ...(await getContent("pl")),
    },
    revalidate: 60,
  };
}
