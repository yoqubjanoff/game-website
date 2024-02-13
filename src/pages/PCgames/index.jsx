import React from 'react'
import PcGame from '../../components/Pcgame'
import Box from '../../components/Reuseable/Box'
import box1 from "../../assets/images/blogimg1.jpg";
import box2 from "../../assets/images/blogimg2.jpg";
import box3 from "../../assets/images/blogimg3.jpg";
import box4 from "../../assets/images/blogimg4.jpg";
import './index.css'

const Pcgame = () => {
  return (
    <main className='pswrapper'>
      <PcGame/>
      <Box imageSrc={box1} title={'Billy'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window '} backgroundImage={box1}/>
      <Box imageSrc={box2} title={'The Denominator'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box2}/>
      <Box imageSrc={box3} title={'AO Oni'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box3}/>
      <Box imageSrc={box4} title={'Shoot Strike'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box4}/>
    </main>
  )
}

export default Pcgame