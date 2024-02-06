import React from "react";
import { ContactStyle } from "./style";

const Contact = () => {
  return (
    <ContactStyle>
      <ContactStyle.Container>
        <ContactStyle.Wrapper>
          <ContactStyle.InfoBox>
            <ContactStyle.MainItems>
              <ContactStyle.Items>
                <ContactStyle.Bottom>
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    +998(94) 123-45-67
                  </a>
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    itic@info.uz
                  </a>
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Telegram
                  </a>
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Instagram
                  </a>
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    className="soc-link"
                    href="https://telegram.org"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </ContactStyle.Bottom>
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
