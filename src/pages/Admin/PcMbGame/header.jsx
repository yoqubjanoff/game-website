import { Wrapper } from "./style";
import { usePcMbContext } from "../../../context/useContext";
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
  const [selected, dispatch] = usePcMbContext();

  const getAdmins = async () => {
    try {
      const res = await request.get("/admin/games");
      dispatch({
        type: "setGames",
        payload: res?.data?.data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const deleteF = async () => {
    try {
      const res = await request.delete(`/admin/games/${data?.id}`);
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
  const editFunc = async () => {
    const res = await request.get(`admin/games/${data.id}`);
    dispatch({
      type: "setSelected",
      payload: res?.data?.data,
    });
    navigate(`/admin/pcmbgame/edit/:${data?.id}`);
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
      <img className="blogImgRen" src={data?.blogPhotoUrl} alt="image site" />
    </Wrapper.Flex>
  );
};

const RendererDate = ({ data }) => {
  const slicedClock = data?.typeOfGame?.slice(0, 10);
  return <Wrapper.Flex>{slicedClock}</Wrapper.Flex>;
};

const RendererTitle = ({ data }) => {
  return <Wrapper.Flex>{data?.titleUz?.slice(0, 20)}...</Wrapper.Flex>;
};
const RendererDesc = ({ data }) => {
    return <Wrapper.Flex>{data?.contentUz?.slice(0,20)}...</Wrapper.Flex>;
  
};

const RendererStatus = ({ data }) => {
  const { t } = useTranslation();
  const statusChange = async (v) => {
    console.log(v);
    try {
      const res = await request.put(`/admin/games`, {
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
      headerName: t("adminPage.image"),
      cellRenderer: RendererPhoto,
      flex: 0.6,
    },

    {
      headerName: t("adminPage.title"),
      cellRenderer: RendererTitle,
      flex: 1,
    },
    {
      headerName: t("adminPage.desc"),
      cellRenderer: RendererDesc,
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
