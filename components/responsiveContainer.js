import { useStyleConfig, Container } from "@chakra-ui/react";

const ResponsiveContainer = ({ size, variant, ...props }) => {
  const styles = useStyleConfig("ResponsiveContainer", { size, variant });
  return (
    <Container
      sx={styles}
      {...props}
      maxWidth={["full", "30em", "48em", "62em", "80em", "96em"]}
    ></Container>
  );
};
export default ResponsiveContainer;
