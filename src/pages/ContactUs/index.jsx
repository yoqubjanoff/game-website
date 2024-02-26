import React, { useState } from "react";
import { ContactStyle } from "./style";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import { useTranslation } from "react-i18next";
import request from "../../services/request";
import Swal from "sweetalert2";
import Toast from "../../components/Reuseable/Toast";

const Contact = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    comment: "",
  });

  const handleTitleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSave = async () => {
    if (message.comment && message.fullName && message.phoneNumber) {
      if (!isValidEmail(message.email)) {
        Toast({
          type: "error",
          message: t("adminPage.email_format"),
        });
        return;
      }
      if (message.fullName.length < 10) {
        Toast({
          type: "error",
          message: t("contactPage.nameLength"),
        });
        return;
      }
      if (message.phoneNumber.length < 7) {
        Toast({
          type: "error",
          message: t("Telefon raqamingiz juda qisqa"),
        });
        return;
      }
      if (message.comment.length < 5 || message.comment.length > 400) {
        Toast({
          type: "error",
          message: "Email kamida 5 ta va maksimum 400 ta belgidan iborat bo'lishi kerak",
        });
        return;
      }

      try {
        const res = await request.post("public/call-request", {
          data: {
            fullName: message.fullName,
            phoneNumber: `+${message.phoneNumber}`,
            email: message.email,
            comment: message.comment,
          },
        });
        if (res.status === 200) {
          Toast({
            type: "success",
            message: "Successfully",
          });
          setMessage({
            fullName: "",
            phoneNumber: "",
            email: "",
            comment: "",
          });
        } else {
          Swal.fire(t("adminPage.error"));
        }
      } catch (error) {
        console.error(error);
        Swal.fire(t("adminPage.errore"));
      }
    } else {
      Toast({
        type: "warning",
        message: t("adminPage.fill"),
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <ContactStyle>
      <ContactStyle.Container>
        <ContactStyle.Wrapper>
          <ContactStyle.InfoBox>
            <ContactStyle.MainItems>
              <ContactStyle.Items>
                <ContactStyle.Title>
                  {t("home.header.nav.contactUs")}
                </ContactStyle.Title>
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Iput1
                  type="text"
                  value={message.fullName}
                  placeholder={t("contactPage.fullName")}
                  onChange={handleTitleChange}
                  name="fullName"
                />
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Iput1
                  type="number"
                  value={message.phoneNumber}
                  placeholder={t("contactPage.phoneNumber")}
                  onChange={handleTitleChange}
                  name="phoneNumber"
                />
                <ContactStyle.Iput1
                  type="email"
                  placeholder={t("contactPage.email")}
                  onChange={handleTitleChange}
                  name="email"
                  value={message.email}
                />
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Iput4
                  type="text"
                  placeholder={t("contactPage.message")}
                  onChange={handleTitleChange}
                  name="comment"
                  value={message.comment}
                />
              </ContactStyle.Items>
              <ContactStyle.Items>
                <ContactStyle.Btn onClick={handleSave}>
                  {t("contactPage.send")}
                </ContactStyle.Btn>
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
