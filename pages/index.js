import Layout from "../components/layout";
import Link from "next/link";
import Obfuscate from "react-obfuscate";
import Section from "../components/section";
import FBPost from "../components/fb";

export default function IndexPage({ feed }) {
  return (
    <Layout>
      <Section heading="O projekcie" id="about" className="my-48">
        Jesteśmy grupą uczniów z XIV Liceum Ogólnokształcącego im. Stanisława
        Staszica w Warszawie. W ramach konkursu CanSat 2020/2021 budujemy
        miniaturowego „satelitę” wielkości puszki po napoju. Nasz projekt
        stanowi demonstrację oraz ma na celu zbadanie możliwości i ograniczeń
        technologii, które mogą zostać wykorzystane w misjach kosmicznych w
        odległych rejonach układu słonecznego. Wykorzystujemy uczenie maszynowe
        w celu dokonywania detekcji poszczególnych obiektów na ziemi oraz
        mapowania terenu na podstawie obrazu z kamery i danych z czujników.
      </Section>
      <Section heading="Aktualności" id="news">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {feed.map((post) => (
            <div className="w-full">
              <FBPost post={post}></FBPost>
            </div>
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
        <ul className="list-disc list-inside">
          {[
            "Jakub Bachurski",
            "Piotr Grynfelder",
            "Kajetan Knopp",
            "Krzysztof Kwiatkowski",
            "Jan Zając",
          ].map((name) => (
            <li>{name}</li>
          ))}
        </ul>
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

export async function getServerSideProps(context) {
  const limit = 4;
  const access_token = process.env.FB_TOKEN;
  const { data: feed } = await fetch(
    `https://graph.facebook.com/v8.0/deepsatpl/feed?fields=story%2Cattachments%2Cpermalink_url&limit=${limit}&access_token=${access_token}`
  ).then((response) => response.json());
  return {
    props: {
      feed,
    },
  };
}
