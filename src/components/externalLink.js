import React from "react";
import { Link } from "@chakra-ui/react";

const CustomLink = (props) => {
  return <Link as={"a"} target="_blank" {...props} />;
};
export default CustomLink;
