import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

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
        <a href={node.data.uri} target="_blank" className="link">
          {children}
        </a>
      );
    },
  },
};

const RTF = ({ rtf }) => {
  return <div className="rtf">{documentToReactComponents(rtf, options)}</div>;
};
export default RTF;
