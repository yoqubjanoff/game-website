import React from "react";
import { BlogContexPovider } from "./BlogContext";
import { PartnerContextPovider } from "./PartnerContext";
const MainContexProvider = ({ children }) => {
  return (
    <BlogContexPovider>
      <PartnerContextPovider>{children}</PartnerContextPovider>
    </BlogContexPovider>
  );
};

export default MainContexProvider;
