import React from "react";
import { BlogContexPovider } from "./BlogContext";
const MainContexProvider = ({ children }) => {
  return <BlogContexPovider>{children}</BlogContexPovider>;
};

export default MainContexProvider;
