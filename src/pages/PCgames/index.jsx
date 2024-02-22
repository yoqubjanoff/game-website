import React, { useEffect, useState } from "react";
import PcGame from "../../components/Pcgame";
import Box from "../../components/Reuseable/Box";
import "./index.css";
import { useTranslation } from "react-i18next";
import request from "../../services/request";
import Loading from "../../components/Loading";

const Pcgame = () => {
  const { t, i18n } = useTranslation();
  const [games, setGames] = useState([]);
  const [loading , setLoading] = useState(true);
  const PC = "PC";

  useEffect(() => {
    const getMobile = async () => {
      try {
        const res = await request.get(
          `/public/games?type=${PC}&lan=${localStorage.getItem("i18nextLng")}`
        );
        setGames(res?.data?.data);
        setLoading(false);  
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getMobile();
  }, [i18n.language]);

  console.log(games);
  return (
    <div className="pswrapper">
      <PcGame />
      { loading ? (<Loading />) : ( 
        games?.map((game) => (
          <Box
            key={game?.id}
            imageSrc={game?.gamePhotoUrl}
            title={game?.title}
            videoId={game?.videoUrl}
            desc={game?.content}
            backgroundImage={game?.gamePhotoUrl}
          />
        ))
      )}
    </div>
  );
};

export default Pcgame;
