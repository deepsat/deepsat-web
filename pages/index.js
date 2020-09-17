import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import FB from "../components/fb";

export default function IndexPage({ appId, posts }) {
  return (
    <Layout>
      <Section heading="Aktualności" id="news" className="my-48">
        <FB
          posts={posts}
          appId={appId}
          postClassName="shadow-lg"
          postWidth={350}
          className="flex flex-wrap gap-8 mb-8"
        />
        <Link href="https://www.facebook.com/deepsatpl">
          <a
            className="btn btn-outline text-lg"
            target="_blank"
            rel="noreferrer"
          >
            Przejdź do Facebooka
          </a>
        </Link>
      </Section>
      <Section heading="O nas" id="about"></Section>
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
  const post_urls = [];
  const appId = process.env.FB_APP_ID;
  return {
    props: {
      appId: appId,
      posts: post_urls,
    },
  };
}
