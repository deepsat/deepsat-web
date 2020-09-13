import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import Post from "../components/fb_post";

export default function IndexPage(props) {
  const posts_data = props.data.data ?? null;
  return (
    <Layout>
      <Section heading="Aktualności" id="news" className="my-56">
        <div className="flex flex-wrap -mx-4 mb-8">
          {posts_data
            ? posts_data.map((post_data) => (
                <div className="md:w-1/3 p-4 self-stretch">
                  <Post post_data={post_data} />
                </div>
              ))
            : null}
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

export async function getServerSideProps() {
  const data = await fetch(
    `https://graph.facebook.com/v8.0/deepsatpl/posts/?fields=attachments%2Cpermalink_url&limit=3&access_token=${process.env.FB_TOKEN}`
  )
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return;
    });
  return { props: {data} };
}
