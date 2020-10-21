import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="list-item">{children}</li>,
  },
};

const RTF = ({ document }) => {
  return <div className="rtf">{documentToReactComponents(document, options)}</div>;
};
export default RTF;
