import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { usePartnerContext } from "../../../../context/useContext";
import BgFile from "../../../../assets/icons/upload.svg";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/Reuseable/Button";
import LoadingAdmin from "../../../../components/Loading copy";
import Toast from "../../../../components/Reuseable/Toast";
import del from "../../../../assets/icons/trashIcon.svg";
import Switch from "../../../../components/Reuseable/Switch";
import Input from "../../../../components/Reuseable/Input";
import request from "../../../../services/request";
import Popup from "../../../../components/Reuseable/Popup";

const AddPartners = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [{ selected }, dispatch] = usePartnerContext();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    url: selected?.url || "",
    attachmentId: selected?.attachmentId || "",
    partnerPhotoUrl: selected?.partnerPhotoUrl || null,
    isActive: selected?.isActive || false,
  });

  const [urlFormData, setUrlFormData] = useState();
  const [photoId, setPhotoId] = useState();

  const { isActive, url, partnerPhotoUrl, attachmentId } = state;

  const handleInputChange = async (e) => {
    const files = e.target.files[0];
  
    // Fayl mavjud emas yoki turiga mos emasligini tekshirish
    if (!files || !["image/jpeg", "image/png", "image/svg+xml"].includes(files.type)) {
      Toast({
        type: "error",
        message: "Faqat JPG, PNG yoki SVG formatidagi rasmlarni yuklashingiz mumkin",
      });
      return;
    }
  
    // Fayl hajmini tekshirish
    if (files.size > 1024 * 1024 * 5) { // 5 MB dan katta fayllarni qabul qilmaslik
      Toast({
        type: "error",
        message: "Fayl hajmi juda katta. Iltimos, kichikroq faylni yuklang",
      });
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("file", files);
  
      const resData = await request.post("/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const { fileUrl, id } = resData?.data?.data;
      if (resData) {
        Toast({
          type: "success",
          message: "Rasm muvaffaqiyatli yuklandi",
        });
      }
  
      setState({
        ...state,
        attachmentId: id,
        partnerPhotoUrl: fileUrl,
      });
      setUrlFormData(fileUrl);
    } catch (error) {
      console.log(error);
      Toast({
        type: "warning",
        message: "Xatolik yuz berdi",
      });
    }
  };
  
  

  const saveQuestion = async () => {
    setLoading(true);
    if (!id) {
      if (partnerPhotoUrl) {
        try {
          const res = await request.post("/admin/partners", {
            data: {
              url: url,
              attachmentId: photoId,
              partnerPhotoUrl: urlFormData,
              isActive: isActive,
            },
          });
          setLoading(false);

          navigate("/admin/partner");
          Toast({
            type: "success",
            message: "Successfully",
          });
          setState({
            url: "",
            blogPhotoUrl: "",
            videoUrl: "",
            isActive: false,
          });
        } catch (error) {
          setLoading(false);
          Popup({
            title: error?.response?.data?.resultMsg,
            type: "warning",
          });
        }
      } else {
        setLoading(false);

        Popup({
          title: "Please, fill the inputs",
          type: "warning",
        });
      }
    } else {
      if (partnerPhotoUrl) {
        try {
          const res = await request.put(`/admin/partners`, {
            data: {
              id: id.slice(1),
              url: url,
              attachmentId: photoId,
              partnerPhotoUrl: partnerPhotoUrl,
              isActive: isActive,
            },
            transactionTime: "2023-08-14T15:43:01.8152087",
          });
          setLoading(false);

          navigate(`/admin/partner`);
          Toast({
            type: "success",
            message: "Successfully",
          });
          dispatch({
            type: "setSelected",
            payload: null,
          });
          setState({
            ...state,
          });
        } catch (error) {
          setLoading(false);
          Popup({
            title: error?.response?.data?.resultMsg,
            type: "warning",
          });
        }
      } else {
        setLoading(false);

        Popup({
          title: "Please, fill the inputs",
          type: "warning",
        });
      }
    }
  };

  const handleTitleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  console.log(state);
  return (
    <Wrapper>
      {loading && <LoadingAdmin />}
      <div className="ColumnBox">
        <p setState className="Header">
          {id ? t("adminPage.add") : t("adminPage.partner")}
        </p>
        <div className="TagBoxEnd" style={{ gap: "15px" }}>
          <div>
            {" "}
            <Wrapper.Flex>
              <Switch
                onClick={(v) => setState({ ...state, isActive: v })}
                checked={isActive ? 1 : 0}
              />{" "}
              {t("adminPage.action")}
            </Wrapper.Flex>
            <Button
              bg={"#fff"}
              width={"120px"}
              height={"42px"}
              color="#0B3A48"
              onClick={() => {
                navigate("/admin/partner");
                dispatch({
                  type: "setSelected",
                  payload: {},
                });
              }}
            >
              {t("adminPage.cansel")}
            </Button>
            <Button
              bg={"#0B3A48"}
              width={"140px"}
              height={"42px"}
              color="#fff"
              onClick={saveQuestion}
            >
              {t("adminPage.submit")}
            </Button>
          </div>
        </div>
        <Wrapper.WrapTable urlFormData={urlFormData}>
          <div className="blogTwoInput">
            <div className="inputbox">
              <Input
                width={"100%"}
                placeholder={"title"}
                header="URL ni kiriting faqat url kirita olasiz"
                color={"#000"}
                hc={"#000"}
                name={"url"}
                onChange={handleTitleChange}
                value={url}
                margin={"0 0 25px 0"}
              />
            </div>
            <div className="image-link-box">
              <button
                className="del-img"
                onClick={() => {
                  setState({
                    ...state,
                    attachmentId: "", // Rasmning ID-sini tozalash
                    partnerPhotoUrl: "", // Rasmning URL-sini tozalash
                  });
                  setUrlFormData("");
                }}
                
              >
                <img src={del} alt="delete icon" />
              </button>
              <label
                htmlFor="file"
                className="Wrapper-input-f"
                style={{
                  backgroundImage: `url('${
                    urlFormData ? urlFormData : state.partnerPhotoUrl
                  }')`,
                  cursor: "pointer",
                }}
              >
                <input
                  style={{
                    opacity: 0,
                  }}
                  name={"blogPhotoUrl"}
                  type="file"
                  id="file"
                  onChange={handleInputChange}
                />
                <div>
                  {urlFormData || state.partnerPhotoUrl ? (
                    <div></div>
                  ) : (
                    t("adminPage.upload")
                  )}
                </div>
                <img
                  src={urlFormData || state.partnerPhotoUrl ? "" : BgFile}
                  alt="upload img"
                />
              </label>
            </div>
          </div>
        </Wrapper.WrapTable>
      </div>
    </Wrapper>
  );
};

export default AddPartners;
