import React, { useEffect, useRef, useState } from "react";
import { HeaderStyle } from "./style";
import logo from "../../assets/icons/logoImg.svg";
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

const Header = ({ timeline, ease }) => {
  const { t, i18n } = useTranslation();
  let logoRef = useRef(null);
  const [burgerLine, setBurgerLine] = useState("burgerBar unclicked");
  const [menuClass, setMenuCLass] = useState("menu hidden");
  const [isMenuCLicked, setIsMenuCLicked] = useState(false);

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

  let nav__text1 = useRef(null);
  let nav__text2 = useRef(null);
  let nav__text3 = useRef(null);
  let nav__text4 = useRef(null);
  let nav__text5 = useRef(null);
  let langRef = useRef(null);

  useEffect(() => {
    timeline.from(logoRef, 1, {
      scale: 1.5,
      opacity: 0,
      y: -100,
    });
  }, []);

  useEffect(() => {
    timeline.from(
      [nav__text1, nav__text2, nav__text3, nav__text4, nav__text5],
      1,
      {
        scale: 1.5,
        y: -50,
        stagger: {
          amount: 0.1,
        },
        ease: ease,
      }
    );
  }, []);

  useEffect(() => {
    timeline.from(langRef, 1, {
      scale: 1.5,
      opacity: 0,
      y: -50,
      stagger: {
        amount: 0.1,
      },
      ease: ease,
    });
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <HeaderStyle>
      <HeaderStyle.Container>
        <HeaderStyle.Wrapper>
          <Link to="/">
            <HeaderStyle.Logo
              src={logo}
              alt="logo site"
              ref={(el) => (logoRef = el)}
            />
          </Link>

          <HeaderStyle.NavLangBox>
            <HeaderStyle.Nav>
              <div>
                <Link className="link" to={"/"} ref={(el) => (nav__text1 = el)}>
                  {t("home.header.nav.home")}
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  to={"/pcgame"}
                  ref={(el) => (nav__text2 = el)}
                >
                  {t("home.header.nav.pcGames")}
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  to={"/mobilegame"}
                  ref={(el) => (nav__text3 = el)}
                >
                  {t("home.header.nav.mobileGames")}
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  to={"/blog"}
                  ref={(el) => (nav__text4 = el)}
                >
                  {t("home.header.nav.blog")}
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  to={"/contact"}
                  ref={(el) => (nav__text5 = el)}
                >
                  {t("home.header.nav.contactUs")}
                </Link>
              </div>
            </HeaderStyle.Nav>
            <HeaderStyle.LangBox>
              <HeaderStyle.LangItem ref={(el) => (langRef = el)}>
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
