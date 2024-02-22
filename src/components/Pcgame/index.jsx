import React from 'react'
import { PcStyle } from './style';
import { useTranslation } from "react-i18next";

const PcGame = () => {
  const { t } = useTranslation();


  return (
    <PcStyle>
        <PcStyle.Wrapper>
            <PcStyle.Title>{t("home.header.nav.pcGames")}</PcStyle.Title>
            <PcStyle.TitleBg>{t("home.header.nav.pcGames")}</PcStyle.TitleBg>
        </PcStyle.Wrapper>
    </PcStyle>
  )
}

export default PcGame;

