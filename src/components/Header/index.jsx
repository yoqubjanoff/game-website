import React, { useEffect, useRef } from "react";
import { HeaderStyle } from "./style";
import logo from "../../assets/icons/logoImg.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Header = ({ timeline, ease }) => {
  const { t, i18n } = useTranslation();
  let logoRef = useRef(null);

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
        </HeaderStyle.Wrapper>
      </HeaderStyle.Container>
    </HeaderStyle>
  );
};

export default Header;
