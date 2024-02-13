import React from 'react'
import { PcStyle } from './style';
import { useTranslation } from "react-i18next";

const PcGame = () => {
  const { t } = useTranslation();


  return (
    <PcStyle>
        <PcStyle.Wrapper>
            <PcStyle.Title>{t("home.header.nav.pcGames")}</PcStyle.Title>
        </PcStyle.Wrapper>
    </PcStyle>
  )
}

export default PcGame;

// import React from 'react';
// import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// import { PcStyle } from './style';
// import pcBgEn from '../../assets/images/PcGames_en.svg';
// import pcBgRu from '../../assets/images/PcGames_ru.svg';
// import pcBgUz from '../../assets/images/PcGames_uz.svg'; // Uzbek til uchun bgimage

// const PcGame = () => {
//   const { t, i18n } = useTranslation();

//   // Tilni aniqlash
//   const lang = i18n.language;

//   // Tilga mos bgimage-ni tanlash
//   let pcBg;
//   if (lang === 'en') {
//     pcBg = pcBgEn;
//   } else if (lang === 'ru') {
//     pcBg = pcBgRu;
//   } else if (lang === 'uz') { // Uzbek til uchun bgimage
//     pcBg = pcBgUz;
//   } else {
//     pcBg = pcBgEn; // Boshqa tillar uchun standart bgimage
//   }

//   return (
//     <PcStyle bgImage={pcBg}>
//       <PcStyle.Wrapper>
//         <PcStyle.Title>{t('home.header.nav.pcGames')}</PcStyle.Title>
//       </PcStyle.Wrapper>
//     </PcStyle>
//   );
// };

// export default PcGame;
