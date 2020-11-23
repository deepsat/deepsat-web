import { useStyleConfig, Container } from "@chakra-ui/react";

const ResponsiveContainer = ({ size, variant, ...props }) => {
  const styles = useStyleConfig("ResponsiveContainer", { size, variant });

  return (
    <Container
      sx={styles}
      {...props}
      maxWidth={["full", "sm", "md", "lg", "xl"]}
    ></Container>
  );
};
export default ResponsiveContainer;
