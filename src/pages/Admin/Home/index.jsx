import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PlusUserIcon from "../../../assets/icons/user-plus.svg";
import { Wrapper } from "./style";
import CustomTag from "../../../components/AdminComponents/CustomTag";
import useSearch from "../../../services/Search";
import { Replace } from "../../../services/Replace";
import CardAdmin from "../../../components/AdminComponents/CardAdmin";

const Appeals = () => {
  const { t } = useTranslation();
  const { search, pathname } = useLocation();

  const query = useSearch();
  const navigate = useNavigate();


  
  return (
    <Wrapper>
      <h2>Appeals</h2>
    </Wrapper>
  );
};

export default Appeals;
