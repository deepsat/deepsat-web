import {
  AspectRatio,
  Box,
  Flex,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";
import Excerpt from "./excerpt";
import CustomLink from "./link";

const FBPost = ({ post, ...props }) => {
  const permalink = post.permalink_url ?? "";
  const src = post.attachments.data[0].media.image.src ?? "";
  const text = post.message ?? post.attachments.data[0].description ?? "";
  const id = post.id;
  return (
    <Flex
      shadow="lg"
      align="center"
      p="4"
      direction="column"
      justify="space-between"
    >
      <Text w="full" fontSize={{ base: "sm" }} mb="4">
        {text}
      </Text>
      <Image src={src} shadow="lg" maxW="full" maxH="64" mb="4" flexGrow="0" />
      <CustomLink
        href={permalink}
        textAlign="right"
        rel="noreferrer"
        target="_blank"
        ml="auto"
      >
        <Icon as={MdArrowForward} h="6" w="6" />
      </CustomLink>
    </Flex>
  );
};

export default FBPost;
