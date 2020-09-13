import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import Post from "../components/fb_post";

export default function IndexPage(props) {
  const posts_data = props.data.data.slice(0, 3);
  console.log(props);
  return (
    <Layout>
      <Section className="flex items-center mt-32">
        <div className="w-6/12">
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            commodo ex. Proin sit amet nisl in lorem sollicitudin luctus. Etiam
            bibendum dignissim ligula, a pulvinar justo vestibulum sed. Morbi
            semper molestie libero ac pretium. In pulvinar auctor nisi. Maecenas
            id porta ex. Donec tempus tristique mattis. Praesent sit amet.
          </p>
          <Link href="/#news">
            <a className="btn btn-primary text-lg mb-4 mr-4">Aktualności</a>
          </Link>
          <Link href="/#contact">
            <a className="btn btn-outline text-lg">Kontakt</a>
          </Link>
        </div>
        <div className="text-center flex-auto">tu duże logo???</div>
      </Section>
      <Section heading="Aktualności" id="news">
        <div className="flex flex-wrap -mx-4 mb-8">
          {posts_data.map((post_data) => (
            <Post post_data={post_data} />
          ))}
        </div>
        <Link href="https://www.facebook.com/deepsatpl">
          <a
            className="btn btn-outline text-lg"
            target="_blank"
            rel="norefferer"
          >
            Przejdź do Facebooka
          </a>
        </Link>
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

export async function getServerSideProps() {
  const res = await fetch(
    `https://graph.facebook.com/v8.0/kalamburska/posts/?fields=attachments%2Cpermalink_url&limit=6&access_token=${process.env.FB_TOKEN}`
  );
  const data = await res.json();
  return { props: { data } };
}
