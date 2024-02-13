import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FooterStyle } from './style';
import logo from "../../assets/icons/logoImg.svg";
import arrow from "../../assets/icons/arrow-up.svg";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation()
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // animatsiya davomiyligi (millisekundda)
      smooth: 'easeInOutQuart', // animatsiya usuli
    });
  };

  return (
    <FooterStyle>
      <FooterStyle.Container>
        <FooterStyle.Wrapper>
          <FooterStyle.LoginNav>
            <Link to="/">
              <FooterStyle.Logo src={logo} alt="logo site" />
            </Link>
            <FooterStyle.Nav>
              <Link className='foter-link' to="home" smooth={true} duration={1000}>{t('home.header.nav.home')}</Link>
              <Link className='foter-link' to="pc-games" smooth={true} duration={1000}>{t('home.header.nav.pcGames')}</Link>
              <Link className='foter-link' to="mobile-games" smooth={true} duration={1000}>{t('home.header.nav.mobileGames')}</Link>
              <Link className='foter-link' to="blog" smooth={true} duration={1000}>{t('home.header.nav.blog')}</Link>
              <Link className='foter-link' to="contact" smooth={true} duration={1000}>{t('home.header.nav.contactUs')}</Link>
            </FooterStyle.Nav>
          </FooterStyle.LoginNav>
          <FooterStyle.ArrowImg src={arrow} onClick={scrollToTop} className={scrollPosition ? "hidden" : ""} />
        </FooterStyle.Wrapper>
      </FooterStyle.Container>
      <div className="line"></div>
      <FooterStyle.Bottom>
        <a className='soc-link' href="https://telegram.org"  target='_blank'>+998(94) 123-45-67</a>
        <a className='soc-link' href="https://telegram.org"  target='_blank'>itic@info.uz</a>
        <a className='soc-link' href="https://telegram.org"  target='_blank'>Telegram</a>
        <a className='soc-link'  href="https://telegram.org"  target='_blank'>Instagram</a>
        <a className='soc-link' href="https://telegram.org"  target='_blank'>Facebook</a>
        <a className='soc-link' href="https://telegram.org"  target='_blank'>Linkedin</a>
      </FooterStyle.Bottom>
    </FooterStyle>
  );
}

export default Footer;
