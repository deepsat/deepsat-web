import React from "react";

import { Box, Text } from "@chakra-ui/react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import ImgWithModal from "./imgWithModal";
import Link from "./link";

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <Link to={node.data.uri} target="_blank">
          {children}
        </Link>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <Box w="100%" mb="4">
        <ImgWithModal
          src={node.data.target.gatsbyImageData.images.fallback.src}
          srcSet={node.data.target.gatsbyImageData.images.fallback.srcSet}
          alt={node.data.target.title}
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
  // return <Box>RTF Placeholder</Box>;
  return <Box {...props}>{renderRichText(children, options)}</Box>;
};
export default RTF;
