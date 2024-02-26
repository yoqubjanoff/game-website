import { Wrapper } from "./style";
import {useHomeContext } from "../../../context/useContext";
import { useNavigate, useParams } from "react-router-dom";
import trash from "../../../assets/icons/trashIcon.svg";
import message from "../../../assets/icons/comment.svg";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import request from "../../../services/request";
import Toast from "../../../components/Reuseable/Toast";
import Switch from "../../../components/Reuseable/Switch";
import Popup from "../../../components/Reuseable/Popup";
import { useState } from "react";

const ActionRenderer = ({ data }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [, dispatch] = useHomeContext();

  const getAdmins = async () => {
    try {
      const res = await request.get("/admin/call-request");
      dispatch({
        type: "setHome",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const deleteF = async () => {
    try {
      const res = await request.delete(`/admin/call-request/${data?.id}`);
      getAdmins();
      Toast({
        type: "success",
        message: "Succesfully",
      });
    } catch (error) {
      Swal.fire(error?.response?.data?.resultMsg);
    }
  };

  const deleteFunc = async () => {
    Popup({
      title: "Do you want to delete this blog ?",
      isConfirmedFunction: () => deleteF(),
      showCancelButton: true,
      type: "question",
    });
  };
  return (
    <Wrapper.Flex style={{ width: "100%", justifyContent: "center" }}>
      <Wrapper.Box onClick={deleteFunc}>
        <img src={trash} alt="delet icon" />
      </Wrapper.Box>
    </Wrapper.Flex>
  );
};

const RendererDate = ({ data }) => {
  const slicedClock = data.createdAt?.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};

const RendererTitle = ({ data }) => {
    return <Wrapper.Flex>{data?.fullName}</Wrapper.Flex>;
  
};
const RendererDesc = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper.BoxIcon 
      bgImage={`url(${message})`}
      type={"comment"}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Wrapper.Comment hover={hover ? 1 : 0}>
        {data?.comment}
      </Wrapper.Comment>
    </Wrapper.BoxIcon>)
};

const RendererEmail = ({ data }) => {
  return <Wrapper.Flex>{data?.email}</Wrapper.Flex>;
};

const RenderNumber = ({ data }) => {
  return <Wrapper.Flex>{data?.phoneNumber}</Wrapper.Flex>;
};

const RendererStatus = ({ data }) => {
  const { t } = useTranslation();
  const statusChange = async (v) => {
    console.log(v);
    try {
      const res = await request.put(`/admin/call-request`, {
        data: {
          id: data.id,
          isActive: v,
        },
      });

      Toast({
        type: "success",
        message: "Succesfully",
      });
    } catch (error) {
      Swal.fire(error?.code);
      console.log(error);
    }
  };

  return (
    <Wrapper.Flex>
      <Switch
        onClick={(e) => statusChange(e)}
        checked={data?.isActive ? 1 : 0}
      />{" "}
      Active
    </Wrapper.Flex>
  );
};

export const TalentTableHeader = () => {
  const { t } = useTranslation();

  return [
    {
      headerName: t("adminPage.title"),
      cellRenderer: RendererTitle,
      flex: 0.7,
    },
    {
      headerName: t("adminPage.desc"),
      cellRenderer: RendererDesc,
      flex: 0.5,
    },
    {
      headerName: t("adminPage.phoneNumber"),
      cellRenderer: RenderNumber,
      flex: 0.5,
    },
    {
      headerName: t("adminPage.date"),
      cellRenderer: RendererDate,
      flex: 0.3,
    },
    {
      headerName: t("contactPage.email"),
      cellRenderer: RendererEmail,
      flex: 0.3,
    },
    {
      headerName: t("adminPage.action"),
      cellRenderer: ActionRenderer,
      flex: 0.6,
    },
  ];
};
