import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FooterStyle } from "./style";
import logo from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow-up.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <FooterStyle>
      <FooterStyle.Container>
        <FooterStyle.Wrapper>
          <FooterStyle.LoginNav>
            <NavLink to="/">
              <FooterStyle.Logo src={logo} alt="logo site" />
            </NavLink>
            <FooterStyle.Nav>
              <NavLink
                className="foter-link"
                to="/"
                smooth={true}
                duration={1000}
              >
                {t("home.header.nav.home")}
              </NavLink>
              <NavLink
                className="foter-link"
                to="/pcgame"
                smooth={true}
                duration={1000}
              >
                {t("home.header.nav.pcGames")}
              </NavLink>
              <NavLink
                className="foter-link"
                to="/mobilegame"
                smooth={true}
                duration={1000}
              >
                {t("home.header.nav.mobileGames")}
              </NavLink>
              <NavLink
                className="foter-link"
                to="/blog"
                smooth={true}
                duration={1000}
              >
                {t("home.header.nav.blog")}
              </NavLink>
              <NavLink
                className="foter-link"
                to="/contact"
                smooth={true}
                duration={1000}
              >
                {t("home.header.nav.contactUs")}
              </NavLink>
            </FooterStyle.Nav>
          </FooterStyle.LoginNav>
          <FooterStyle.ArrowImg
            src={arrow}
            onClick={scrollToTop}
            className={scrollPosition ? "hidden" : ""}
          />
        </FooterStyle.Wrapper>
      </FooterStyle.Container>
      <div className="line"></div>
      <FooterStyle.Bottom>
        <a className="soc-link" href="tel:+998952424242">
          +998 (95) 242-42-42
        </a>
        <a
          className="soc-link"
          href="mailto:itexprouz@gmail.com"
          target="_blank"
        >
          itic@info.uz
        </a>
        <a
          className="soc-link"
          href="https://t.me/Allaberganov2"
          target="_blank"
        >
          Telegram
        </a>
        <a
          className="soc-link"
          href="https://www.instagram.com/itic.uz?igshid=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
        >
          Instagram
        </a>
        <a
          className="soc-link"
          href="https://www.facebook.com/people/It-Investments-Center/100089783505483/?mibextid=LQQJ4d"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="soc-link"
          href="https://www.linkedin.com/company/it-investments-center/mycompany/"
          target="_blank"
        >
          Linkedin
        </a>
      </FooterStyle.Bottom>
    </FooterStyle>
  );
};

export default Footer;
