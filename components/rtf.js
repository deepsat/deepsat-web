import { Box, Img, Link } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
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
    "embedded-asset-block": (node) => (
      <Box w={{ md: "48rem" }} mx="auto" maxW="100%">
        <Img
          src={node.data.target.fields.file.url}
          maxW="100%"
          my="8"
          mx="auto"
        />
      </Box>
    ),
  },
};
const RTF = ({ children, ...props }) => {
  return <Box {...props}>{documentToReactComponents(children, options)}</Box>;
};

export default RTF;
