import React, { useEffect, useRef } from "react";
import { HeaderStyle } from "./style";
import logo from "../../assets/icons/logoImg.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import i18n from "../../i18n";

const Header = ({ timeline, ease }) => {
  const { t } = useTranslation();
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
        opacity: 0,
        y: -50,
        stagger: {
          amount: 0.6,
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
        amount: 0.6,
      },
      ease: ease,
    });
  }, []);

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
              <Link className="link" to={"/"} ref={(el) => (nav__text1 = el)}>
                {t("header.nav.home")}
              </Link>
              <Link
                className="link"
                to={"/pcgame"}
                ref={(el) => (nav__text2 = el)}
              >
                {t("header.nav.pcGames")}
              </Link>
              <Link
                className="link"
                to={"/mobilegame"}
                ref={(el) => (nav__text3 = el)}
              >
                {t("header.nav.mobileGames")}
              </Link>
              <Link
                className="link"
                to={"/blog"}
                ref={(el) => (nav__text4 = el)}
              >
                {t("header.nav.blog")}
              </Link>
              <Link
                className="link"
                to={"/contact"}
                ref={(el) => (nav__text5 = el)}
              >
                {t("header.nav.contactUs")}
              </Link>
            </HeaderStyle.Nav>
            <HeaderStyle.LangBox>
              <HeaderStyle.LangItem ref={(el) => (langRef = el)}>
                <HeaderStyle.LangBtn onClick={() => i18n.changeLanguage('en')}>En</HeaderStyle.LangBtn>
                <HeaderStyle.LangBtn onClick={() => i18n.changeLanguage('ru')}>Ru</HeaderStyle.LangBtn>
                <HeaderStyle.LangBtn onClick={() => i18n.changeLanguage('uz')}>Uz</HeaderStyle.LangBtn>
              </HeaderStyle.LangItem>
            </HeaderStyle.LangBox>
          </HeaderStyle.NavLangBox>
        </HeaderStyle.Wrapper>
      </HeaderStyle.Container>
    </HeaderStyle>
  );
};

export default Header;
