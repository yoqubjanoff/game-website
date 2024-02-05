import React from 'react'
import PcGame from '../../components/Pcgame'
import Box from '../../components/Reuseable/Box'
import box1 from "../../assets/images/box1.jpg";

const Pcgame = () => {
  return (
    <div>
      <PcGame/>
      <Box imageSrc={box1} title={'Billy'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window '}/>
    </div>
  )
}

export default Pcgame