import { Image } from "@chakra-ui/image";
import Header from "./header";
import ResponsiveContainer from "./responsiveContainer";

const background = require("../images/background_horizontal.jpg?resize&webp");

export default function Layout({ children, menu }) {
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
        src={background.src}
        srcSet={background.srcSet}
        className=""
        aria-hidden="true"
        alt=""
      />
      <Header menu={menu}></Header>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </>
  );
}
