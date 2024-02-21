import React from "react";
import { BlogContexPovider } from "./BlogContext";
import { PartnerContextPovider } from "./PartnerContext";
import { PcMbContextProvider } from "./PcMbContext";
import { HomeContexPovider } from "./HomeContext";
const MainContexProvider = ({ children }) => {
  return (
    <BlogContexPovider>
      <PcMbContextProvider>
        <HomeContexPovider>
        <PartnerContextPovider>{children}</PartnerContextPovider>
        </HomeContexPovider>
      </PcMbContextProvider>
    </BlogContexPovider>
  );
};

export default MainContexProvider;
