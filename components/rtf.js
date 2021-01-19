import { Box, Img, Link, Text } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import ImgWithModal from "./imgWithModal";
import CustomLink from "./link";

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <CustomLink href={node.data.uri} target="_blank">
          {children}
        </CustomLink>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <Box w="100%" mb="4">
        <ImgWithModal
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.file.title}
          maxW="100%"
          maxH="36"
          width="auto"
          height="auto"
          mx="auto"
        />
      </Box>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Text mb="4" whiteSpace="pre-wrap">
        {children}
      </Text>
    ),
  },
};
const RTF = ({ children, ...props }) => {
  return <Box {...props}>{documentToReactComponents(children, options)}</Box>;
};
export default RTF;
