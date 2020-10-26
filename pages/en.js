import Index, { getContent } from "./index";

export default Index;

export async function getStaticProps(context) {
  return {
    props: {
      ...(await getContent("en")),
    },
    revalidate: 60,
  };
}
