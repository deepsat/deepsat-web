import { chakra, Container } from "@chakra-ui/react";

const ResponsiveContainer = Container;
ResponsiveContainer.defaultProps = {
  ...Container.defaultProps,
  maxWidth: ["full", "sm", "md", "lg", "xl"],
  paddingLeft: 8,
  paddingRight: 8,
};
export default ResponsiveContainer;
