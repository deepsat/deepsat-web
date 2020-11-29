import Layout from "../components/layout";
import NextLink from "next/link";
import Section from "../components/section";
import FBPost from "../components/fb";
import { createClient } from "contentful";
import RTF from "../components/rtf";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import { MdEmail, MdExpandMore } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  keyframes,
  SimpleGrid,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import CustomLink from "../components/link";
import TeamMember from "../components/teamMember";

const logo = require("../images/logo_horizontal.png?resize");
const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -16px, 0);
}

70% {
  transform: translate3d(0, -8px, 0);
}

90% {
  transform: translate3d(0,-2px,0);
}
`;
export default function Index({ statics, sections, feed, team, menu }) {
  team = team ?? [];
  sections = sections ?? {};
  statics = statics ?? {};
  const socials = [
    {
      href: "https://facebook.com/deepsatpl",
      icon: <FaFacebook />,
      bgColor: "#1877f2",
      color: "#fff",
      text: "@deepsatpl",
    },
    {
      href: "https://linkedin.com/company/deepsat",
      text: "DeepSat",
      icon: <FaLinkedinIn />,
      bgColor: "#0e76a8",
      color: "#fff",
    },
    {
      href: "https://github.com/deepsat",
      icon: <FaGithub />,
      color: "#24292e",
      text: "deepsat",
      bgColor: "#fff",
    },
    {
      href: "https://esero.kopernik.org.pl/konkurs-cansat/",
      icon: <FaRocket />,
      text: `${statics.competition}`,
      bgColor: "#f4792b",
      color: "#fff",
    },
    {
      href: `mailto:${statics.email}`,
      icon: <MdEmail />,
      text: `${statics.email}`,
      bgColor: "#666",
      color: "#fff",
    },
  ];

  return (
    <Layout menu={menu} logoHref={statics.indexurl}>
      <DefaultSeo {...seoConfig} canonical={statics.indexurl} />
      <Flex minHeight="100vh" direction="column" align="center">
        <Box h={{ base: 24, md: 32 }} />
        <Image
          src={logo}
          srcSet={logo.srcSet}
          filter="brightness(0) invert(1)"
          mt="auto"
          w="64rem"
          transform={{ base: "scale(1.1)", md: "none" }}
        />
        <Heading
          mt="auto"
          textAlign="center"
          color="white"
          size={{ base: "sm", md: "2xl" }}
          fontSize={{ base: "sm", md: "2xl" }}
          bg="rgba(0,0,0,0.8)"
          borderRadius="full"
          px="1rem"
          py="0.5rem"
        >
          {statics["competition team"]}
        </Heading>
        <Wrap spacing="4" mt="auto" flexWrap="wrap" justify="center">
          {socials.map(({ href, icon, bgColor, color, text }) => (
            <WrapItem>
              <NextLink href={href} passHref>
                <Button
                  target="_blank"
                  as="a"
                  leftIcon={icon}
                  color={color}
                  bgColor={bgColor}
                  variant="custom"
                >
                  {text}
                </Button>
              </NextLink>
            </WrapItem>
          ))}
        </Wrap>
        <CustomLink
          display="block"
          href="#about"
          mt="auto"
          mb="16"
          transition="transform ease-in-out 200ms"
          _hover={{
            transform: "scale(1.25)",
            "& svg": { animationPlayState: "paused" },
          }}
        >
          <Icon
            as={MdExpandMore}
            w="16"
            h="16"
            color="white"
            display="block"
            animation={`${bounce} 2s ease infinite`}
          />
        </CustomLink>
      </Flex>
      <Section heading={sections.hero.title} id="about">
        <RTF>{sections.hero.content}</RTF>
      </Section>
      <Section heading={statics["news"]} id="news">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4" mb="8">
          {feed.map((post) => (
            <FBPost post={post} />
          ))}
        </SimpleGrid>
        <NextLink href="https://www.facebook.com/deepsatpl" passHref>
          <Button as="a" variant="brand" target="_blank">
            {statics["visit fb"]}
          </Button>
        </NextLink>
      </Section>
      <Section heading={statics["team"]} id="team">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
          {team.map((member) => (
            <TeamMember {...member} />
          ))}
        </SimpleGrid>
      </Section>
      <Section heading={sections.contact.title} id="contact">
        <RTF>{sections.contact.content}</RTF>
      </Section>
      <Box height="50vh" />
    </Layout>
  );
}

export async function getContent(locale) {
  // fb
  const limit = 4;
  const access_token = process.env.FB_TOKEN;
  const { data: feed } = await fetch(
    `https://graph.facebook.com/v8.0/deepsatpl/posts?fields=message%2Cattachments%7Bmedia%2Cdescription%7D%2Cpermalink_url&limit=${limit}&access_token=${access_token}`
  ).then((response) => response.json());

  // contentful
  let client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });
  const sections = await client
    .getEntries({
      content_type: "post",
      locale: locale,
    })
    .then((result) =>
      result.items.map((item) => [item.fields.slug, item.fields])
    )
    .then((result) => Object.fromEntries(result));

  const statics = await client
    .getEntries({
      content_type: "static",
      locale: locale,
    })
    .then((result) =>
      result.items.map((item) => [item.fields.key, item.fields.content])
    )
    .then((result) => Object.fromEntries(result));

  const team = await client
    .getEntries({
      content_type: "teamMember",
      order: "fields.order",
      locale: locale,
    })
    .then((result) => result.items.map((item) => item.fields));

  const menu = await client
    .getEntries({
      content_type: "menu",
      "fields.name": "Main",
      locale: locale,
    })
    .then((result) => result.items.map((item) => item.fields));

  return {
    feed,
    sections,
    statics,
    team,
    menu: menu[0].content,
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await getContent(locale)),
    },
    revalidate: 60,
  };
}
