import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import FBPost from "../components/fb";
import { createClient } from "contentful";
import RTF from "../components/rtf";

export default function IndexPage({ feed, hero, team }) {
  return (
    <Layout>
      <Section heading="" id="about" className="my-48">
        <RTF document={hero} />
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
      <Section heading="Zespół">
        <RTF document={team} />
      </Section>
      <Section heading="Kontakt" id="contact">
        <ul className="mb-8">
          <li>
            Email: <Obfuscate className="link" email="kontakt@deepsat.pl" />
          </li>
          <li>
            Facebook:{" "}
            <a href="https://www.facebook.com/deepsatpl" className="link">
              @deepsatpl
            </a>
          </li>
        </ul>
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
  let hero = await client
    .getEntries({
      "fields.key": "hero",
      content_type: "static",
    })
    .then((entries) => entries.items.map((entry) => entry.fields.content));
  let team = await client
    .getEntries({
      "fields.key": "team",
      content_type: "static",
    })
    .then((entries) => entries.items.map((entry) => entry.fields.content));
  return {
    props: {
      feed,
      hero: hero[0],
      team: team[0],
    },
    revalidate: 60,
  };
}
