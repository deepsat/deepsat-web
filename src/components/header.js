import React from "react";

import { Box, Flex, Spacer, Image, Icon, IconButton } from "@chakra-ui/react";
import ResponsiveContainer from "./responsiveContainer";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Link from "./link";
import { FaGlobeAfrica } from "react-icons/fa";
import logo from "../images/logo_web_brand.svg";

// TODO
const LanguageSwitcher = () => null;
// const LanguageSwitcher = (props) => {
//   const router = useRouter();
//   const locales = {
//     pl: "",
//     en: "en",
//   };
//   const curr = router.route.slice(1);
//   return Object.entries(locales).map(([locale, url]) =>
//     url == curr ? undefined : (
//       <Link
//         {...props}
//         href={`/${url}`}
//         display="flex"
//         alignItems="center"
//         locale={false}
//       >
//         <Icon as={FaGlobeAfrica} mr="2" /> {locale.toLocaleUpperCase()}
//       </Link>
//     )
//   );
// };

const Header = ({ menu }) => {
  const [isTop, setTop] = useState(true);

  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  useEffect(() => {
    let onscroll = () => {
      const current = window.scrollY < 10;
      if (current !== isTop) {
        setTop(current);
      }
    };
    document.addEventListener("scroll", onscroll);
    onscroll();
  });
  const bp = "lg";
  return (
    <Box
      pos="fixed"
      top="0"
      insetX="0"
      bg={isTop ? "transparent" : "white"}
      shadow={isTop ? undefined : "lg"}
      transition="background-color ease-in-out 200ms"
      zIndex="sticky"
    >
      <ResponsiveContainer>
        <Flex px={{ base: 8, md: 16 }} align="center" h="24" pos="relative">
          <Link
            href="/#hero"
            transition={
              isTop
                ? "opacity ease-in-out 200ms, visibility 0s 200ms"
                : "opacity ease-in-out 200ms, visibility 0s 0s"
            }
            visibility={isTop ? "hidden" : "unset"}
            opacity={isTop ? "0" : "unset"}
            flexShrink="0"
          >
            <Image h="10" src={logo} srcSet={logo.srcSet} />
          </Link>
          <Spacer />
          <IconButton
            minW="auto"
            minH="auto"
            variant="link"
            onClick={toggleOpen}
            icon={<Icon as={MdMenu} w="6" h="6" />}
            display={{ [bp]: "none" }}
            color={isTop ? "white" : "brand.default"}
            ml="4"
          ></IconButton>
          <Flex
            wrap="wrap"
            justify="flex-end"
            as="nav"
            direction={{
              base: "column",
              [bp]: "row",
            }}
            position={{ base: "absolute", [bp]: "static" }}
            left="0"
            right="0"
            top="100%"
            bg={{ base: "white", [bp]: "none" }}
            overflowY={{
              base: "hidden",
              [bp]: undefined,
            }}
            transform={{
              base: isOpen ? null : "scaleY(0)",
              [bp]: "unset",
            }}
            transformOrigin="top"
            aria-hidden={!isOpen}
            boxShadow={{ base: "lg", [bp]: "none" }}
            borderRadius="base"
            transition={
              isOpen
                ? "transform ease-in-out 200ms, visibility 0s 0s"
                : "transform ease-in-out 200ms, visibility 0s 200ms"
            }
            visibility={{
              base: isOpen ? "unset" : "hidden",
              [bp]: "unset",
            }}
          >
            {menu.map(({ label, href }) => (
              <Link
                to={href}
                mx={{ [bp]: "4" }}
                pl={{ base: "8", [bp]: "0" }}
                pt="4"
                pb="4"
                color={{ [bp]: isTop ? "white" : undefined }}
                display="block"
              >
                {label}
              </Link>
            ))}
            <LanguageSwitcher
              mx={{ [bp]: "4" }}
              pl={{ base: "8", [bp]: "0" }}
              pt="4"
              pb="4"
              color={{ [bp]: isTop ? "white" : undefined }}
              display="block"
            />
          </Flex>
        </Flex>
      </ResponsiveContainer>
    </Box>
  );
};

export default Header;