import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogContex, usePcMbContext } from "../../../../context/useContext";
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
import Select from "../../../../components/Reuseable/Select";

const Addpcmbgame = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [{ selected }, dispatch] = usePcMbContext();
  const { id } = useParams();
  const [options, setOptions] = useState([
    { id: 1, caption: "For Pc Game", title: "PC"},
    { id: 2, caption: "For Mb Game",title: "MOBILE" },
  ]);

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    typeOfGame: selected?.typeOfGame || "",
    titleUz: selected?.titleUz || "",
    titleRu: selected?.titleRu || "",
    titleEn: selected?.titleEn || "",
    videoUrl: selected?.videoUrl || "",
    contentUz: selected?.contentUz || ``,
    contentRu: selected?.contentRu || ``,
    contentEn: selected?.contentEn || ``,
    gamePhotoUrl: selected?.gamePhotoUrl || null,
    isActive: selected?.isActive || false,
  });

  const [urlFormData, setUrlFormData] = useState();

  const {
    isActive,
    typeOfGame,
    titleUz,
    titleRu,
    titleEn,
    contentUz,
    contentEn,
    contentRu,
    videoUrl,
    gamePhotoUrl,
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
      if (resData) {
        Toast({
          type: "success",
          message: "Successfully",
        });
      }

      setUrlFormData(fileUrl);
    } catch (error) {
      console.log(error);
    }
  };


  const saveQuestion = async () => {
    setLoading(true);
    if (!id) {
      if (
        titleEn &&
        titleRu &&
        titleUz &&
        contentEn &&
        contentUz &&
        contentRu
      ) {
        try {
          const res = await request.post("/admin/games", {
            data: {
              typeOfGame: typeOfGame,
              titleUz: titleUz,
              contentUz: contentUz,
              titleRu: titleRu,
              contentRu: contentRu,
              titleEn: titleEn,
              contentEn: contentEn,
              gamePhotoUrl: urlFormData,
              videoUrl: videoUrl,
              isActive: isActive,
            },
          });
          setLoading(false);

          navigate("/admin/pcmbgame");
          Toast({
            type: "success",
            message: "Successfully",
          });
          setState({
            typeOfGame: "",
            titleUz: "",
            contentUz: "",
            titleRu: "",
            contentRu: "",
            titleEn: "",
            contentEn: "",
            gamePhotoUrl: "",
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
        typeOfGame &&
        titleEn &&
        titleRu &&
        titleUz &&
        contentEn &&
        contentUz &&
        contentRu
      ) {
        try {
          const res = await request.put(
            `/admin/games`,
            {
              data: {
                id: id.slice(1),
                typeOfGame: typeOfGame,
                titleUz: titleUz,
                contentUz: contentUz,
                titleRu: titleRu,
                contentRu: contentRu,
                titleEn: titleEn,
                contentEn: contentEn,
                gamePhotoUrl: urlFormData,
                videoUrl: videoUrl,
                isActive: isActive,
              },
            },
            Toast({
              type: "success",
              message: "Successfully",
            })
          );
          setLoading(false);
          navigate(`/admin/pcmbgame`);

          dispatch({
            type: "setSelected",
            payload: null,
          });
          setState({
            ...state,
          });
        } catch (error) {
          setLoading(false);
          console.log(error);
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
const selectTheme = (theme) => {
setState({...state,
  typeOfGame: theme.title
});
};

  return (
    <Wrapper>
      {loading && <LoadingAdmin />}
      <div className="ColumnBox">
        <p setState className="Header">
          {id ? t("adminPage.add") : t("adminPage.pcmbgame")}
        </p>
        <div className="TagBoxEnd" style={{ gap: "15px" }}>
          <Select
            width={"250px"}
            height={"40px"}
            options={options}
            value={typeOfGame}
            header={"Before choose theme"}
						onChange={(e) => selectTheme(e)}

          />
          <p>{t("adminPage.remember2")}</p>
          <div>
            {" "}
            <Wrapper.Flex>
              <Switch
                onClick={(v) => setState({ ...state, isActive: v })}
                checked={isActive ? 1 : 0}
              />{" "}
              {t("adminPage.status")}
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
                  gamePhotoUrl: null,
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
                name={"titleUz"}
                onChange={handleTitleChange}
                value={titleUz}
                margin={"0 0 25px 0"}
              />
              <TextareaComponent
                className="textarea"
                name="contentUz"
                height={"100px"}
                header="Mazmun"
                onChange={handleTitleChange}
                value={contentUz}
              />
            </div>
            <div className="image-link-box">
              <label
                htmlFor="file"
                className="Wrapper-input-f"
                style={{
                  backgroundImage: `url('${
                    urlFormData ? urlFormData : state.gamePhotoUrl
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
                  {urlFormData || state.gamePhotoUrl ? (
                    <div></div>
                  ) : (
                    t("adminPage.upload")
                  )}
                </div>
                <img
                  src={urlFormData || state.gamePhotoUrl ? "" : BgFile}
                  alt="upload img"
                />
              </label>
              <Input
                width={"100%"}
                header="You Tube havolasini kiriting"
                color={"#000"}
                hc={"#000"}
                name={"videoUrl"}
                onChange={handleTitleChange}
                value={videoUrl}
                margin={"0 0 25px 0"}
              />
            </div>
          </div>
          <div className="blogTwoInput">
            <div className="inputbox">
              <Input
                width={"100%"}
                placeholder={"title"}
                header="Введите заголовок !"
                color={"#000"}
                hc={"#000"}
                name={"titleRu"}
                onChange={handleTitleChange}
                value={titleRu}
                margin={"0 0 25px 0"}
              />
              <TextareaComponent
                className="textarea"
                name="contentRu"
                height={"100px"}
                header="Содержание"
                onChange={handleTitleChange}
                value={contentRu}
              />
            </div>
          </div>
          <div className="blogTwoInput">
            <div className="inputbox">
              <Input
                width={"100%"}
                placeholder={"title"}
                header={t("adminPage.blogPlaceholder")}
                color={"#000"}
                hc={"#000"}
                name={"titleEn"}
                onChange={handleTitleChange}
                value={titleEn}
                margin={"0 0 25px 0"}
              />
              <TextareaComponent
                className="textarea"
                name="contentEn"
                height={"100px"}
                header={t("adminPage.textBlog")}
                onChange={handleTitleChange}
                value={contentEn}
              />
            </div>
          </div>
        </Wrapper.WrapTable>
      </div>
    </Wrapper>
  );
};

export default Addpcmbgame;
