import React from "react";

import Header from "./header";
import ResponsiveContainer from "./responsiveContainer";

export default function Layout({ children, menu }) {
  return (
    <>
      <Header menu={menu}></Header>
      <ResponsiveContainer>{children}</ResponsiveContainer>
    </>
  );
}
