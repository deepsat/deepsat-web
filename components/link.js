import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const CustomLink = ({
  children,
  href,
  as,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  ...props
}) => (
  <NextLink
    {...{
      href,
      as,
      passHref,
      prefetch,
      replace,
      scroll,
      shallow,
    }}
  >
    <Link {...props}>{children}</Link>
  </NextLink>
);
CustomLink.defaultProps = { ...NextLink.defaultProps, passHref: true };
CustomLink.propTypes = NextLink.propTypes;
export default CustomLink;
