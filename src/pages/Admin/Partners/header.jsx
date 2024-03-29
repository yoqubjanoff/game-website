import { Wrapper } from "./style";
import { usePartnerContext } from "../../../context/useContext";
import { useNavigate, useParams } from "react-router-dom";
import trash from "../../../assets/icons/trashIcon.svg";
import penIcon from "../../../assets/icons/pen.svg";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import request from "../../../services/request";
import Toast from "../../../components/Reuseable/Toast";
import Switch from "../../../components/Reuseable/Switch";
import Popup from "../../../components/Reuseable/Popup";

const ActionRenderer = ({ data }) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, dispatch] = usePartnerContext();

  const getAdmins = async () => {
    try {
      const res = await request.get("/admin/partners");
      dispatch({
        type: "setPartners",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const deleteF = async () => {
    try {
      const res = await request.delete(`/admin/partners/${data?.id}`);
      getAdmins();
      Toast({
        type: "success",
        message: "Successfully",
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
  const editFunc = async () => {
    const res = await request.get(`/admin/partners/${data.id}`);
    dispatch({
      type: "setSelected",
      payload: res?.data?.data,
    });

    navigate(`/admin/partner/edit/:${data?.id}`);
  };
  return (
    <Wrapper.Flex style={{ width: "100%", justifyContent: "start" }}>
      <Wrapper.Box onClick={deleteFunc}>
        <img src={trash} alt="delet icon" />
      </Wrapper.Box>
      <Wrapper.Box onClick={editFunc}>
        <img src={penIcon} alt="delet icon" />
      </Wrapper.Box>
    </Wrapper.Flex>
  );
};

const RendererPhoto = ({ data }) => {
  return (
    <Wrapper.Flex>
      <img
        className="blogImgRen"
        src={data?.partnerPhotoUrl}
        alt="image partner"
      />
    </Wrapper.Flex>
  );
};

const RendererDate = ({ data }) => {
  const slicedClock = data.createdAt?.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};

const RendererTitle = ({ data }) => {
  return (
    <Wrapper.Flex>
      <a href={data?.url} target="_blanck">{data?.url?.slice(0, 35)}...</a>
    </Wrapper.Flex>
  );
};

const RendererStatus = ({ data }) => {
  const { t } = useTranslation();
  const statusChange = async (v) => {
    try {
      const res = await request.put(`/admin/partners`, {
        data: {
          id: data.id,
          isActive: v,
        },
      });
      Toast({
        type: "success",
        message: "Successfully added",
      });
    } catch (error) {
      Swal.fire(error?.code);
      console.log(error);
    }
  };

  return (
    <Wrapper.Flex style={{ justifyContent: "center", width: "100%" }}>
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
      headerName: t("adminPage.image"),
      cellRenderer: RendererPhoto,
      flex: 0.6,
    },

    {
      headerName: t("adminPage.link"),
      cellRenderer: RendererTitle,
      flex: 1,
    },
    {
      headerName: t("adminPage.date"),
      cellRenderer: RendererDate,
      flex: 0.7,
    },
    {
      headerName: t("adminPage.action"),
      cellRenderer: ActionRenderer,
      flex: 0.6,
    },
    ,
    {
      headerName: t("adminPage.action"),
      cellRenderer: RendererStatus,
      flex: 0.6,
    },
  ];
};
