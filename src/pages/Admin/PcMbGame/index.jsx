import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { TalentTableHeader } from "./header";
import { useNavigate, useLocation } from "react-router-dom";
import { usePcMbContext } from "../../../context/useContext";
import useSearch from "../../../services/Search";
import { useTranslation } from "react-i18next";
import Button from "../../../components/Reuseable/Button";
import Table from "../../../components/Reuseable/CustomTable";
import Pagination from "../../../components/Reuseable/Pagination";
import request from "../../../services/request";
import Swal from "sweetalert2";

const Pcmainpage = () => {
  const column = TalentTableHeader();
  const { t } = useTranslation();
  const query = useSearch();
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const [{ pcmbGames }, dispatch] = usePcMbContext();

  const navigate = useNavigate();
  const getBlogs = async () => {
    setLoading(true);
    try {
      const res = await request.get(`/admin/games${search || ""}`);
      setPagination(res?.data?.pagination);
      dispatch({
        type: "setGames",
        payload: res?.data?.data,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Xatolik",
        text: error.message,
      });
    }
  };

  useEffect(() => {
    getBlogs();
  }, [search, localStorage.getItem("i18nextLng")]);

  return (
    <Wrapper>
      <div className="FlexBox">
        <div className="ColumnBox">
          <p className="Header">{t("adminPage.pcmbgame")}</p>
          <div className="TagBox">
            <div className="FlexBox">
              <div></div>
              <Button
                bg={"#0B3A48"}
                width={"150px"}
                height={"42px"}
                onClick={() => {
                  navigate("/admin/pcmbgame/add");
                  dispatch({
                    type: "setSelected",
                    payload: res?.data?.data,
                  });
                }}
              >
                {t("adminPage.add")}
              </Button>
            </div>
          </div>
          <Wrapper.WrapTable>
            <Table column={column} rowData={pcmbGames} loading={loading} />
          </Wrapper.WrapTable>
          <Pagination
            current={Number(query.get("page")) || 0}
            SizeAll={pagination?.totalPages || 1}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Pcmainpage;
