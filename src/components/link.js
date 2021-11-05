import React from "react";

import { Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
// import { LocalizedLink as GatsbyLink } from "gatsby-theme-i18n";

const CustomLink = (props) => {
  return (
    <Link
      as={GatsbyLink}
      {...props}
    />
  );
};
export default CustomLink;
