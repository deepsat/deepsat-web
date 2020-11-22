import { Box, chakra, Flex, Link, Spacer, Image, Icon } from "@chakra-ui/react";
import ResponsiveContainer from "./responsiveContainer";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
const logo = require("../images/logo_horizontal.png?resize&webp");

const MenuItem = ({ href, label, locale, ...props }) => {
  return (
    <NextLink key={href} href={href} locale={locale}>
      <Link href={href} {...props}>
        {label}
      </Link>
    </NextLink>
  );
};
MenuItem.defaultProps = {
  locale: "",
  display: "block",
};

const Header = ({ menu }) => {
  const [isTop, setTop] = useState(true);

  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  useEffect(() => {
    if (window.scrollY <= 10) {
      setTop(true);
    } else {
      setTop(false);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 5) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  });

  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      right="0"
      bg={isTop ? "transparent" : "white"}
    >
      <ResponsiveContainer>
        <Flex align="center" h="24" pos="relative">
          <Image
            h="12"
            src={logo}
            srcSet={logo.srcSet}
            transition="opacity ease-in-out 200ms"
            opacity={isTop ? "0" : ""}
          />
          <Spacer />
          <Icon
            onClick={toggleOpen}
            as={MdMenu}
            w="6"
            h="6"
            display={{ base: "block", md: "none" }}
            color={isTop ? "white" : null}
          ></Icon>
          <Flex
            as="nav"
            direction={{ base: "column", md: "row" }}
            position={{ base: "absolute", md: "static" }}
            left="0"
            right="0"
            top="100%"
            bg={{ base: "white", md: "none" }}
            overflowY={{ base: "hidden", md: "initial" }}
            transform={{ base: isOpen ? null : "scaleY(0)", md: "initial" }}
            transformOrigin="top"
            aria-hidden={!isOpen}
            transition="transform ease-in-out 200ms"
          >
            {menu.map((item) => (
              <MenuItem
                {...item}
                ml={{ md: "4" }}
                pl={{ base: "8", md: "none" }}
                pt="4"
                pb="4"
                color={{ base: null, md: isTop ? "white" : null }}
              ></MenuItem>
            ))}
          </Flex>
        </Flex>
      </ResponsiveContainer>
    </Box>
  );
};

export default Header;
