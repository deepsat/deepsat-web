import React from "react";
import { Box, Heading, useStyleConfig } from "@chakra-ui/react";

const Section = ({ children, heading, size, variant, ...props }) => {
  const styles = useStyleConfig("Section", { size, variant });
  return (
    <Box sx={styles} {...props}>
      {heading ? <Heading mb="8">{heading}</Heading> : null}
      {children}
    </Box>
  );
};
export default Section;
