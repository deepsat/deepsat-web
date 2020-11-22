import { Box, Link } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import NextLink from "next/link";

const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-item">{children}</li>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <NextLink href={node.data.uri} target="_blank">
          <Link>{children}</Link>
        </NextLink>
      );
    },
  },
};
const RTF = ({ rtf, ...props }) => {
  return <Box {...props}>{documentToReactComponents(rtf, options)}</Box>;
};

export default RTF;
