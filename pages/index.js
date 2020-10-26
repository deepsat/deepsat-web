import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import FBPost from "../components/fb";
import { createClient } from "contentful";
import RTF from "../components/rtf";

export default function IndexPage({ statics, sections, feed, team }) {
  return (
    <Layout>
      <Section heading={sections.hero.title} id="about" className="my-48">
        <RTF rtf={sections.hero.content} />
      </Section>
      <Section heading="Aktualności" id="news">
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
            Zobacz więcej na naszym Facebooku
          </a>
        </Link>
      </Section>
      <Section heading={statics.team}></Section>
      <Section heading={sections.contact.title} id="contact">
        <RTF rtf={sections.contact.content} />
      </Section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // fb
  const limit = 4;
  const access_token = process.env.FB_TOKEN;
  const { data: feed } = await fetch(
    `https://graph.facebook.com/v8.0/deepsatpl/feed?fields=story%2Cattachments%2Cpermalink_url&limit=${limit}&access_token=${access_token}`
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
    })
    .then((result) =>
      result.items.map((item) => [item.fields.slug, item.fields])
    )
    .then((result) => Object.fromEntries(result));

  const statics = await client
    .getEntries({
      "fields.key": ["team"],
      content_type: "static",
    })
    .then((result) =>
      result.items.map((item) => [item.fields.key, item.fields.content])
    )
    .then((result) => Object.fromEntries(result));
  console.log(statics);
  return {
    props: {
      feed,
      sections,
      statics,
    },
    revalidate: 60,
  };
}
