import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import { createClient } from "contentful";
import RTF from "../components/rtf";
import { MdEmail, MdExpandMore } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Wrap,
  WrapItem,
  AspectRatio,
  Grid,
  Img,
  useTheme,
  chakra,
} from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/system";
import Link from "../components/link";
import TeamMember from "../components/teamMember";
import ParticlesBase from "react-tsparticles";
import particlesConfig from "../particles-config.json";
import { graphql } from "gatsby";
import logo from "../images/logo_web.svg";
import { Helmet } from "react-helmet";

const Particles = chakra(ParticlesBase);

export const query = graphql`
  query MyQuery($locale: String = "pl") {
    menu: contentfulMenu(node_locale: { eq: $locale }) {
      content {
        href
        label
      }
    }
    partners: allContentfulPartner(
      sort: { fields: order }
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        order
        link
        title
        image {
          title
          file {
            url
          }
        }
      }
    }

    hero: contentfulPost(slug: { eq: "hero" }, content: {}) {
      title
      contentful_id
      content {
        raw
        references {
          __typename
          contentful_id
          title
          gatsbyImageData
        }
      }
    }
    contact: contentfulPost(slug: { eq: "contact" }, content: {}) {
      title
      contentful_id
      content {
        raw
        references {
          __typename
          contentful_id
          title
          gatsbyImageData
        }
      }
    }

    statics: allContentfulStatic(filter: { node_locale: { eq: $locale } }) {
      nodes {
        content {
          content
        }
        key
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Index = ({ data }) => {
  const {
    partners: { nodes: partners },
    hero,
    contact,
    menu: { content: menu },
    statics: { nodes: staticsList },
    site: { siteMetadata },
  } = data;
  const statics = Object.fromEntries(
    staticsList.map((item) => [item.key, item.content.content])
  );
  const theme = useTheme();
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
  const bounce = keyframes`${theme.animations.bounce}`;
  return (
    <Layout menu={menu}>
      <Helmet title={siteMetadata.title} />
      <Flex
        minHeight="100vh"
        direction="column"
        align="center"
        pos="relative"
        id="hero"
      >
        <Particles
          options={particlesConfig}
          pos="absolute"
          width="95vw"
          insetY="0"
          zIndex="-1"
        />
        <Box h={{ base: 24, md: 32 }} />
        <Image src={logo} mt="auto" w="64rem" />
        <Heading
          mt="auto"
          textAlign="center"
          color="white"
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
              <Button
                target="_blank"
                as="a"
                href={href}
                leftIcon={icon}
                color={color}
                bgColor={bgColor}
                variant="custom"
              >
                {text}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Link
          display="block"
          href="#partners"
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
        </Link>
      </Flex>
      <Section heading={statics["partners"]} id="partners">
        <Wrap spacing="4" justify="space-evenly">
          {partners.map(({ image, link, title }) => (
            <WrapItem>
              <Link
                title={title ?? undefined}
                href={link}
                target="_blank"
                transition="transform ease-in-out 200ms"
                _hover={{ transform: "scale(1.1)", zIndex: "docked" }}
              >
                <Img
                  alt={image.title}
                  src={image.file.url}
                  w="32"
                  h="32"
                  objectFit="contain"
                />
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Section>
      <Section heading={hero.title} id="about">
        <RTF>{hero.content}</RTF>
      </Section>
      
      {
      // TODO
      /* <Section heading={statics["team"]} id="team">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
          {team.map((member) => (
            <TeamMember {...member} />
          ))}
        </SimpleGrid>
      </Section> */}
      <Section heading={contact.title} id="contact">
        <Grid
          alignItems="center"
          gap="4"
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        >
          <RTF>{contact.content}</RTF>
          <AspectRatio
            ratio={16 / 9}
            borderRadius="base"
            overflow="hidden"
            shadow="lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.2996099716706!2d21.000510215546136!3d52.219774266187905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecceb1d68be95%3A0x4f318f2440542625!2sNowowiejska%2037A%2C%2002-010%20Warszawa!5e0!3m2!1spl!2spl!4v1606862385918!5m2!1spl!2spl"
              alt="Map"
              title="Map"
            ></iframe>
          </AspectRatio>
        </Grid>
      </Section>
    </Layout>
  );
};
export default Index;

async function getContent(locale) {
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

  const partners = await client
    .getEntries({
      content_type: "partner",
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
    sections,
    statics,
    team,
    partners,
    menu: menu[0].content,
    locale: locale,
  };
}
