import { Box, Link } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import CustomLink from "./link";

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
        <CustomLink href={node.data.uri} target="_blank">
          {children}
        </CustomLink>
      );
    },
  },
};
const RTF = ({ children, ...props }) => {
  return <Box {...props}>{documentToReactComponents(children, options)}</Box>;
};

export default RTF;
