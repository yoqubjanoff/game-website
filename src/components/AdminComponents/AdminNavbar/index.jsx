import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Logo from "../../../assets/icons/logo.svg";
import adminImg from "../../../assets/icons/user.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

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
          <Wrapper.LangBtn className={`${i18n.language === "EN" ? "active" : ""}`}
                  onClick={() => changeLanguage("EN")}>
            En
          </Wrapper.LangBtn>
          <Wrapper.LangBtn  className={`${i18n.language === "RU" ? "active" : ""}`}
                  onClick={() => changeLanguage("RU")}>
            Ru
          </Wrapper.LangBtn>
          <Wrapper.LangBtn  className={`${i18n.language === "UZ" ? "active" : ""}`}
                  onClick={() => changeLanguage("UZ")}>
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
