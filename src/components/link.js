import React from "react";

import { Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

const CustomLink = (props) => <Link as={GatsbyLink} {...props} />;
export default CustomLink;
