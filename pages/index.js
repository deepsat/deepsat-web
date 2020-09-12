import Layout from "../components/layout";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Layout>
      <div className="paper p-default my-32">
        <h1 className="text-6xl mb-8">DeepSat</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          commodo ex. Proin sit amet nisl in lorem sollicitudin luctus. Etiam
          bibendum dignissim ligula, a pulvinar justo vestibulum sed. Morbi
          semper molestie libero ac pretium. In pulvinar auctor nisi. Maecenas
          id porta ex. Donec tempus tristique mattis. Praesent sit amet.
        </p>
        <Link href="/#news">
          <a className="btn btn-primary text-lg mr-4">Aktualności</a>
        </Link>
        <Link href="/#contact">
          <a className="btn btn-outline text-lg">Kontakt</a>
        </Link>
      </div>
      <div className="paper p-default mb-32">
        <h1 className="text-3xl mb-8" id="news">Aktualności</h1>
        <p className="mb-8">
          FB feed here
        </p>
        <Link href="https://www.facebook.com/deepsatpl">
          <a className="btn btn-outline text-lg" target="_blank" rel="norefferer">Przejdź do Facebooka</a>
        </Link>
      </div>
      <div className="paper p-default mb-32">
        <h1 className="text-3xl mb-8" id="contact">Kontakt</h1>
        <ul className="mb-8">
          FB feed here
        </ul>
        <Link href="https://www.facebook.com/deepsatpl">
          <a className="btn btn-outline text-lg" target="_blank" rel="norefferer">Przejdź do Facebooka</a>
        </Link>
      </div>
    </Layout>
  );
}
