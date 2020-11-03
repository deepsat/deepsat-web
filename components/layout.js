import Header from "./header";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";

const background = require("../images/background_horizontal.jpg?resize");
const backgroundVertical = require("../images/background_vertical.jpg?resize");

export default function Layout({ children, menu }) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <img
        src={background.src}
        srcSet={background.srcSet}
        className="bgimage"
        aria-hidden="true"
        alt=""
      />
      <img
        src={backgroundVertical.src}
        srcSet={backgroundVertical.srcSet}
        className="bgimage vertical"
        aria-hidden="true"
        alt=""
      />
      <Header menu={menu} />
      <div className="container mx-auto px-8 lg:px-16 mt-24">{children}</div>
    </>
  );
}
