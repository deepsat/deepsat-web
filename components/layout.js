import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./header";
import ResponsiveContainer from "./responsiveContainer";

const background = require("../images/background_horizontal.jpg?resize");
const background_vertical = require("../images/background_vertical.jpg?resize");

export default function Layout({ children, menu }) {
  const [isHorizontal, setHorizontal] = useState(false);
  const bgimage = isHorizontal ? background : background_vertical;
  useEffect(() => {
    const f = () => setHorizontal(window.innerHeight < window.innerWidth);
    window.addEventListener("resize", f);
    window.addEventListener("load", f);
  });
  return (
    <>
      <Image
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        h="100vh"
        w="full"
        objectFit="cover"
        objectPosition="center"
        zIndex="-1"
        src={bgimage.src}
        srcSet={bgimage.srcSet}
        className=""
        aria-hidden="true"
        alt=""
      />
      <Header menu={menu}></Header>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </>
  );
}
