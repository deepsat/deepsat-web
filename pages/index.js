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
const logo = require("../images/logo_horizontal.png?resize");

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
      href: `mailto:${statics.email}`,
      icon: <MdEmail />,
      text: `${statics.email}`,
      color: "#666",
    },
  ];
  return (
    <Layout menu={menu} logoHref={statics.indexurl}>
      <DefaultSeo {...seoConfig} canonical={statics.indexurl} />
      <div className="min-h-screen flex flex-col">
        <div className="mt-32" />
        <div className="mt-auto">
          <img src={logo} srcSet={logo.srcSet} className="hero-logo" />
        </div>
        <ul className="mt-auto flex flex-wrap justify-center">
          {socials.map((item) => (
            <li className="mr-4 mb-4">
              <IconButton {...item} />
            </li>
          ))}
        </ul>
        <div className="mt-auto flex justify-center">
          <Link href="#about">
            <a className="btn btn-enlarge text-white text-6xl">
              <MdExpandMore className="animate-bounce" />
            </a>
          </Link>
        </div>
      </div>
      <Section heading={sections.hero.title} id="about" className="snap mt-16">
        <RTF rtf={sections.hero.content} />
      </Section>
      <Section heading={statics.news} id="news" className="snap mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {feed.map((post) => (
            <FBPost snap={true} key={post.id} post={post}></FBPost>
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
      <Section heading={statics.team} id="team" className="snap mt-32">
        <ul className="list-inside list-disc">
          {team.map((member) => (
            <li>{member.name}</li>
          ))}
        </ul>
      </Section>
      <Section
        heading={sections.contact.title}
        id="contact"
        className="snap mt-32 mb-64"
      >
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
      content_type: "post",
      locale: locale,
    })
    .then((result) =>
      result.items.map((item) => [item.fields.slug, item.fields])
    )
    .then((result) => Object.fromEntries(result));

  const statics = await client
    .getEntries({
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
