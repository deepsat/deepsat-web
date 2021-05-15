import { getContent } from "./index";
import Index from "./index";

export default Index;

export async function getStaticProps() {
  return {
    props: await getContent("en"),
    revalidate: 60,
  };
}
