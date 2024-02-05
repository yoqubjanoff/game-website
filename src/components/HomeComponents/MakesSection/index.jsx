import React from 'react';
import {MakeStyle} from './style'
import makeImg from '../../../assets/images/makeImg.png'

const MakesSec = () => {
  return (
    <MakeStyle>
      <MakeStyle.Container>
        <MakeStyle.Wrapper>
          <MakeStyle.TextBox>
            <MakeStyle.Title>
            What makes us stand up
            </MakeStyle.Title>
            <MakeStyle.Desc>
            Explore a world of possibilities with our forward-thinking IT strategies. Our team of experts harnesses the latest technologies to ensure your business not only keeps pace but stays ahead of the curve.
            </MakeStyle.Desc>
          </MakeStyle.TextBox>
          <MakeStyle.ImgBox>
            <MakeStyle.Img src={makeImg} alt='image heros'/>
          </MakeStyle.ImgBox>
        </MakeStyle.Wrapper>
      </MakeStyle.Container>
    </MakeStyle>
  )
}

export default MakesSec;
