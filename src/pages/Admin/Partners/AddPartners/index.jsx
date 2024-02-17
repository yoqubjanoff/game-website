import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogContex } from "../../../../context/useContext";
import BgFile from "../../../../assets/icons/upload.svg";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/Reuseable/Button";
import LoadingAdmin from "../../../../components/Loading copy";
import Toast from "../../../../components/Reuseable/Toast";
import TextareaComponent from "../../../../components/Reuseable/Textarea";
import Switch from "../../../../components/Reuseable/Switch";
import Input from "../../../../components/Reuseable/Input";
import request from "../../../../services/request";
import Popup from "../../../../components/Reuseable/Popup";

const AddPartners = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [{ selected }, dispatch] = useBlogContex();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: selected?.title || "",
    blogPhotoUrl: selected?.blogPhotoUrl || null,
    isActive: selected?.isActive || false,
  });

  const [urlFormData, setUrlFormData] = useState();
  const [photoId, setPhotoId] = useState();

  const {
    isActive,
    title,
    blogPhotoUrl,
  } = state;

  const handleInputChange = async (e) => {
    const files = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", files);

      const resData = await request.post("/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileUrl } = resData?.data?.data;
      const { id } = resData?.data?.data;
      if (resData) {
        Toast({
          type: "success",
          message: t("w252"),
        });
      }
      setPhotoId(id);
      setUrlFormData(fileUrl);
    } catch (error) {
      console.log(error);
    }
  };
  const saveQuestion = async () => {
    setLoading(true);
    if (!id) {
      if (
        title && photoId
      ) {
        try {
          const res = await request.post("/admin/blog", {
            data: {
              title: title,
              partnerPhotoUrl: urlFormData,
              isActive: isActive,
            },
          });
          setLoading(false);

          navigate("/admin/blog");
          Toast({
            type: "success",
            message: t("w252"),
          });
          setState({
            titleUz: "",
            contentUz: "",
            titleRu: "",
            contentRu: "",
            titleEn: "",
            contentEn: "",
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
      if (
        title && photoId
      ) {
        try {
          const res = await request.put(`/admin/partner`, {
            data: {
              title: title,
              partnerPhotoUrl: urlFormData,
              isActive: isActive,
            },
            transactionTime: "2023-08-14T15:43:01.8152087",
          });
          setLoading(false);

          navigate(`/admin/partner`);
          Toast({
            type: "success",
            message: t("w252"),
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
          {id ? t("adminPage.add") : t('adminPage.partner')}
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
                navigate(-1);
                setState({
                  ...state,
                  blogPhotoUrl: null,
                  title: "",
                  content: "",
                  attachmentId: "",
                });
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
                header="Sarlavhani kiriting !"
                color={"#000"}
                hc={"#000"}
                name={"title"}
                onChange={handleTitleChange}
                value={title}
                margin={"0 0 25px 0"}
              />
            </div>
            <div className="image-link-box">
              <label
                htmlFor="file"
                className="Wrapper-input-f"
                style={{
                  backgroundImage: `url('${
                    urlFormData ? urlFormData : state.blogPhotoUrl
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
                  {urlFormData || state.blogPhotoUrl ? (
                    <div></div>
                  ) : (
                    t("adminPage.upload")
                  )}
                </div>
                <img
                  src={urlFormData || state.blogPhotoUrl ? "" : BgFile}
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
