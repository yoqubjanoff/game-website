import React from 'react'
import { PcStyle } from './style';
import { t } from 'i18next';

const MobileGame = () => {
  return (
    <PcStyle>
        <PcStyle.Wrapper>
            <PcStyle.Title>{t("home.header.nav.mobileGames")}</PcStyle.Title>
            <PcStyle.TitleBg>{t("home.header.nav.mobileGames")}</PcStyle.TitleBg>
        </PcStyle.Wrapper>
    </PcStyle>
  )
}

export default MobileGame;

