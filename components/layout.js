import { Image } from "@chakra-ui/image";
import { useEffect, useState } from "react";
import Header from "./header";
import ResponsiveContainer from "./responsiveContainer";

const background = require("../images/background_horizontal.jpg?resize&webp");
const background_vertical = require("../images/background_vertical.jpg?resize&webp");

export default function Layout({ children, menu }) {
  const [isHorizontal, setHorizontal] = useState(false);
  const bgimage = isHorizontal ? background : background_vertical;
  useEffect(() => {
    const f = () => {
      let current = window.innerHeight < window.innerWidth;
      if (isHorizontal != current) {
        setHorizontal(current);
      }
    };
    window.addEventListener("resize", f);
    f();
  });
  return (
    <>
      <Image
        position="fixed"
        bottom="0"
        insetX="0"
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
