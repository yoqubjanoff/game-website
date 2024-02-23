import React, { useEffect, useState } from 'react'
import Box from '../../components/Reuseable/Box'
import './index.css'
import { useTranslation } from "react-i18next";

import MobileGame from '../../components/MobileGame';
import request from '../../services/request';
import Loading from '../../components/Loading';
import Swal from 'sweetalert2';

const MobileGames = () => {
  const { t, i18n } = useTranslation();
  const [games, setGames] = useState([]);
  const [loading , setLoading] = useState(true);

  const MOBILE = "MOBILE"
  const getMobile = async () => {
    try {
      const res = await request.get(
        `/public/games?type=${MOBILE}&lan=${localStorage.getItem("i18nextLng")}`
      );
      setGames(res?.data?.data);
      setLoading(false);  
    } catch (error) {
      console.error(error);
      setLoading(false);  
      Swal.fire({
        icon: 'error',
        title: t("adminPage.ertitle"),
        text: t("adminPage.errore"),
      });
    }
  };
  useEffect(() => {
    getMobile();
  }, [i18n.language]);
  console.log(games);
  return (
    <div className='pswrapper'>
      <MobileGame/>
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
  )
}

export default MobileGames;