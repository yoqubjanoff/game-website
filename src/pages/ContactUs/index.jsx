import React from "react";
import { ContactStyle } from "./style";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactStyle>
      <ContactStyle.Container>
        <ContactStyle.Wrapper>
          <ContactStyle.InfoBox>
            <ContactStyle.MainItems>
              <ContactStyle.Items>
                <ContactStyle.Title>{t("header.nav.contactUs")}</ContactStyle.Title>
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Iput1 type="text" placeholder={t("contactPage.fullName")} />
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Iput1 type="number" placeholder={t("contactPage.phoneNumber")} />
                <ContactStyle.Iput1 type="email" placeholder={t("contactPage.email")} />
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Iput4 type="text" placeholder={t("contactPage.message")} />
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Btn>{t("contactPage.send")}</ContactStyle.Btn>
              </ContactStyle.Items>
              <ContactStyle.Items>
                <div className="socbox">
                  <img src={phone} alt="" width={"24px"} />
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    +998(94) 123-45-67
                  </a>
                </div>
                <div className="socbox">
                  <img src={email} alt="" width={"24px"} />
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    itic@info.uz
                  </a>
                </div>
                <div className="socbox">
                  <img src={telegram} alt="" width={"24px"} />
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Telegram
                  </a>
                </div>
                <div className="socbox">
                  <img src={instagram} alt="" width={"24px"} />
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
                <div className="socbox">
                  <img src={facebook} alt="" width={"24px"} />
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </div>
                <div className="socbox">
                  <img src={linkedin} alt="" width={"24px"} />
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </div>
              </ContactStyle.Items>
            </ContactStyle.MainItems>
          </ContactStyle.InfoBox>
          <ContactStyle.MapBox>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae566fa045c1dd6b0649d0e1ddf8028b02d841d4972699e0ee2093021e366f849&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </ContactStyle.MapBox>
        </ContactStyle.Wrapper>
      </ContactStyle.Container>
    </ContactStyle>
  );
};

export default Contact;


