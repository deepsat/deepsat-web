import { useStyleConfig, Container, theme, useTheme } from "@chakra-ui/react";

const ResponsiveContainer = ({ size, variant, ...props }) => {
  const styles = useStyleConfig("ResponsiveContainer", { size, variant });
  const theme = useTheme();
  return (
    <Container
      sx={styles}
      {...props}
      maxWidth={["full", ...theme.breakpoints.slice(1)]}
    ></Container>
  );
};
export default ResponsiveContainer;
