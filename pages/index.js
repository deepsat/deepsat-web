import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import FBPost from "../components/fb";
import { createClient } from "contentful";
import RTF from "../components/rtf";

export default function IndexPage({ feed, hero, team, contact }) {
  return (
    <Layout>
      <Section heading={hero.heading} id="about" className="my-48">
        <RTF rtf={hero.content} />
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
      <Section heading={team.heading}>
        <RTF rtf={team.content} />
      </Section>
      <Section heading={contact.heading} id="contact">
        <RTF rtf={contact.content} />
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
  const sections = ["hero", "team", "contact"];
  const sections_mapped = Object.fromEntries(
    await Promise.all(
      sections.map(async (section) => {
        const entries = await client.getEntries({
          "fields.key": section,
          content_type: "static",
        });
        return entries.items.map((entry) => entry.fields);
      })
    ).then((result) => result.map((entry) => [entry[0].key, entry[0]]))
  );
  console.log(sections_mapped);
  const to_return = {
    props: {
      feed,
      ...sections_mapped,
    },
    revalidate: 60,
  };
  return to_return;
}
