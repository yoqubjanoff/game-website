import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Logo from "../../../assets/icons/logo.svg";
import adminImg from "../../../assets/icons/user.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img
        src={Logo}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        className="logo"
        alt="IT SKILLS"
      />
      <Wrapper.LangBox>
        <Wrapper.LangItem>
          <Wrapper.LangBtn onClick={() => i18n.changeLanguage("en")}>
            En
          </Wrapper.LangBtn>
          <Wrapper.LangBtn onClick={() => i18n.changeLanguage("ru")}>
            Ru
          </Wrapper.LangBtn>
          <Wrapper.LangBtn onClick={() => i18n.changeLanguage("uz")}>
            Uz
          </Wrapper.LangBtn>
        </Wrapper.LangItem>
      </Wrapper.LangBox>
      <div className="">
        <div className="FlexBoxAdmin">
          <div className="Box">
            <img src={adminImg} alt="admin image" />
          </div>
          <p className="name-admin">Hikmat Allaberganov</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
