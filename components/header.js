import {
  Box,
  Link,
  Flex,
  Spacer,
  Image,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import ResponsiveContainer from "./responsiveContainer";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import CustomLink from "./link";
import { useRouter } from "next/router";
import { FaGlobeAfrica } from "react-icons/fa";
const logo = require("../images/logo_web_brand.svg");

const MenuItem = ({ href, locale, children, ...props }) => {
  return (
    <CustomLink key={href} {...{ href, locale }} {...props}>
      {children}
    </CustomLink>
  );
};
MenuItem.defaultProps = {};

const LanguageSwitcher = (props) => {
  const router = useRouter();
  return router.locales.map((locale) => {
    return locale == router.locale ? null : (
      <Link
        {...props}
        href={`/${locale}`}
        display="flex"
        alignItems="center"
        locale={false}
      >
        <Icon as={FaGlobeAfrica} mr="2" /> {locale.toLocaleUpperCase()}
      </Link>
    );
  });
};

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

  return (
    <Box
      pos="fixed"
      top="0"
      insetX="0"
      bg={isTop ? "transparent" : "white"}
      shadow={isTop ? null : "lg"}
      transition="background-color ease-in-out 200ms"
      zIndex="sticky"
    >
      <ResponsiveContainer>
        <Flex px={{ base: 8, md: 16 }} align="center" h="24" pos="relative">
          <CustomLink
            href="/"
            passHref
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
          </CustomLink>
          <Spacer />
          <IconButton
            minW="auto"
            minH="auto"
            variant="link"
            onClick={toggleOpen}
            icon={<Icon as={MdMenu} w="6" h="6" />}
            display={{ md: "none" }}
            color={isTop ? "white" : "brand.default"}
            ml="4"
          ></IconButton>
          <Flex
            wrap="wrap"
            justify="flex-end"
            as="nav"
            direction={{ base: "column", md: "row" }}
            position={{ base: "absolute", md: "static" }}
            left="0"
            right="0"
            top="100%"
            bg={{ base: "white", md: "none" }}
            overflowY={{ base: "hidden", md: "unset" }}
            transform={{ base: isOpen ? null : "scaleY(0)", md: "unset" }}
            transformOrigin="top"
            aria-hidden={!isOpen}
            boxShadow={{ base: "lg", md: "none" }}
            borderRadius="base"
            transition={
              isOpen
                ? "transform ease-in-out 200ms, visibility 0s 0s"
                : "transform ease-in-out 200ms, visibility 0s 200ms"
            }
            visibility={{ base: isOpen ? "unset" : "hidden", md: "unset" }}
          >
            {menu.map(({ label, ...item }) => (
              <MenuItem
                {...item}
                mx={{ md: "4" }}
                pl={{ base: "8", md: "0" }}
                pt="4"
                pb="4"
                color={{ md: isTop ? "white" : null }}
                display="block"
              >
                {label}
              </MenuItem>
            ))}
            <LanguageSwitcher
              mx={{ md: "4" }}
              pl={{ base: "8", md: "0" }}
              pt="4"
              pb="4"
              color={{ md: isTop ? "white" : null }}
              display="block"
            />
          </Flex>
        </Flex>
      </ResponsiveContainer>
    </Box>
  );
};

export default Header;
