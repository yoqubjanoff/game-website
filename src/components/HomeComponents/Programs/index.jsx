import React from "react";
import { ProgStyle } from "./style";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation();

  return (
    <ProgStyle>
      <ProgStyle.Container>
        <ProgStyle.Wrapper>
          <ProgStyle.Title>{t("home.program.title")}</ProgStyle.Title>
          <ul className="main-items">
            <li className="items">
              <div className="pozitsiya1"></div>
              <p>
                {t('home.program.desc1')}
              </p>
            </li>
            <li className="items">
              <div className="pozitsiya2"></div>
              <p>
              {t('home.program.desc2')}
              </p>
            </li>
            <li className="items">
              <div className="pozitsiya3"></div>
              <p>
              {t('home.program.desc3')}
              </p>
            </li>
            <li className="items">
              <div className="pozitsiya4"></div>
              <p>
              {t('home.program.desc4')}
              </p>
            </li>
            <li className="items">
              <div className="pozitsiya5"></div>
              <p>
              {t('home.program.desc5')}
              </p>
            </li>
            <li className="items">
              <div className="pozitsiya6"></div>
              <p>
              {t('home.program.desc6')}
              </p>
            </li>
          </ul>
        </ProgStyle.Wrapper>
      </ProgStyle.Container>
    </ProgStyle>
  );
};

export default Programs;
