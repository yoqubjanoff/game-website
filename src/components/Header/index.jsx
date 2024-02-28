import React, { useEffect, useRef, useState } from "react";
import { HeaderStyle } from "./style";
import logo from "../../assets/icons/logo.svg";
import { gsap, Power3 } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
const pages = [
  { id: "home", path: "Home" },
  { id: "services", path: "Services" },
  { id: "about", path: "About" },
  { id: "direction", path: "Direction" },
  { id: "case-studies", path: "Case studies" },
  { id: "our-team", path: "Our team" },
  { id: "branches", path: "Branches" },
  { id: "our-partners", path: "Our partners" },
  { id: "testomonials", path: "Testomonials" },
  { id: "careers", path: "Careers" },
  { id: "contact-us", path: "Contact Us" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  let logoRef = useRef(null);
  const [burgerLine, setBurgerLine] = useState("burgerBar unclicked");
  const [menuClass, setMenuCLass] = useState("menu hidden");
  const [isMenuCLicked, setIsMenuCLicked] = useState(false);

  let timeline = new gsap.timeline();

  useEffect(() => {
    if (window.location.pathname === "/allVacancies") {
      setBurgerLine("burgerBlack");
    }
  }, []);

  const updateMenu = () => {
    if (!isMenuCLicked) {
      if (window.location.pathname === "/allVacancies") {
        setBurgerLine("burgerBlack");
      }
      setBurgerLine("burgerBar clicked");
      setMenuCLass("menu visible");
    } else {
      setBurgerLine("burgerBar unclicked");
      setMenuCLass("menu hidden");
      if (window.location.pathname === "/allVacancies") {
        setBurgerLine("burgerBlack clicked");
      }
    }
    setIsMenuCLicked(!isMenuCLicked);
  };

  useEffect(() => {
    timeline.from(logoRef.current, {
      duration: 1,
      scale: 1.5,
      opacity: 0,
      y: "-100px",
    });
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng || "EN");
  };

  return (
    <HeaderStyle ref={logoRef}>
      <HeaderStyle.Container>
        <HeaderStyle.Wrapper>
          <Link to="/">
            <HeaderStyle.Logo src={logo} alt="logo site" />
          </Link>

          <HeaderStyle.NavLangBox>
            <HeaderStyle.Nav>
              <div>
                <Link className="link" to={"/"}>
                  {t("home.header.nav.home")}
                </Link>
              </div>
              <div>
                <Link className="link" to={"/pcgame"}>
                  {t("home.header.nav.pcGames")}
                </Link>
              </div>
              <div>
                <Link className="link" to={"/mobilegame"}>
                  {t("home.header.nav.mobileGames")}
                </Link>
              </div>
              <div>
                <Link className="link" to={"/blog"}>
                  {t("home.header.nav.blog")}
                </Link>
              </div>
              <div>
                <Link className="link" to={"/contact"}>
                  {t("home.header.nav.contactUs")}
                </Link>
              </div>
            </HeaderStyle.Nav>
            <HeaderStyle.LangBox>
              <HeaderStyle.LangItem>
                <HeaderStyle.LangBtn
                  className={`${i18n.language === "EN" ? "active" : ""}`}
                  onClick={() => changeLanguage("EN")}
                >
                  En
                </HeaderStyle.LangBtn>
                <HeaderStyle.LangBtn
                  className={`${i18n.language === "RU" ? "active" : ""}`}
                  onClick={() => changeLanguage("RU")}
                >
                  Ru
                </HeaderStyle.LangBtn>
                <HeaderStyle.LangBtn
                  className={`${i18n.language === "UZ" ? "active" : ""}`}
                  onClick={() => changeLanguage("UZ")}
                >
                  Uz
                </HeaderStyle.LangBtn>
              </HeaderStyle.LangItem>
            </HeaderStyle.LangBox>
          </HeaderStyle.NavLangBox>
          <div className="burgerMenu" onClick={updateMenu}>
            <div className={burgerLine}></div>
            <div className={burgerLine}></div>
            <div className={burgerLine}></div>
          </div>
        </HeaderStyle.Wrapper>
      </HeaderStyle.Container>
    </HeaderStyle>
  );
};

export default Header;
