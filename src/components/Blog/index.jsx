import React from 'react'
import { PcStyle } from './style';
import { useTranslation } from 'react-i18next';

const BlogComponent = () => {
  const {t} = useTranslation()
  return (
    <PcStyle>
        <PcStyle.Wrapper>
            <PcStyle.Title>{t("home.header.nav.blog")}</PcStyle.Title>
            <PcStyle.TitleBg>{t("home.header.nav.blog")}</PcStyle.TitleBg>
        </PcStyle.Wrapper>
    </PcStyle>
  )
}

export default BlogComponent;

