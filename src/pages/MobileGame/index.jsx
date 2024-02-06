import React from 'react'
import Box from '../../components/Reuseable/Box'
import box1 from "../../assets/images/box1.jpg";
import box2 from "../../assets/images/box2.jpg";
import boxImg2 from "../../assets/images/boxImg.jpg";
import boxImg3 from "../../assets/images/boxImg2.jpg";
import boxImg4 from "../../assets/images/boxImg3.jpg";
import box3 from "../../assets/images/box3Bg.jpg";
import './index.css'
import MobileGame from '../../components/MobileGame';

const MobileGames = () => {
  return (
    <main className='pswrapper'>
      <MobileGame/>
      <Box imageSrc={box1} title={'Billy'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window '} backgroundImage={box1}/>
      <Box imageSrc={boxImg2} title={'The Denominator'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box2}/>
      <Box imageSrc={boxImg3} title={'AO Oni'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box3}/>
      <Box imageSrc={boxImg4} title={'Shoot Strike'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={boxImg4}/>
    </main>
  )
}

export default MobileGames;