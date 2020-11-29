import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import Excerpt from "./excerpt";
import CustomLink from "./link";

const FBPost = ({ post, ...props }) => {
  const permalink = post.permalink_url ?? "";
  const src = post.attachments.data[0].media.image.src ?? "";
  const text = post.message ?? post.attachments.data[0].description ?? "";
  const id = post.id;
  return (
    <Stack
      shadow="lg"
      align="center"
      p="4"
      spacing="4"
      direction={{ base: "column-reverse", xl: "row" }}
    >
      <Box
        w={{ base: "full", xl: 48 }}
        h={{ base: 32, xl: "full" }}
        minH={{ xl: 64 }}
        flexShrink="0"
        position="relative"
      >
        <Image
          src={src}
          shadow="lg"
          position="absolute"
          inset="0"
          maxH="full"
          maxW="full"
          m="auto"
        />
      </Box>
      <Text alignSelf="center" w="full" fontSize={{ base: "sm" }}>
        {text}
        <CustomLink
          href={permalink}
          float="right"
          rel="noreferrer"
          target="_blank"
        >
          <Icon as={MdArrowForward} h="6" w="6" />
        </CustomLink>
      </Text>
    </Stack>
  );
};

export default FBPost;
