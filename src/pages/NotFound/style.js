import styled from "styled-components";
import notfound from '../../assets/images/notfound.jpg'


export const NotFondStyle = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${notfound});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const HeroVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  top: 0;
  object-fit: fill;
  z-index: -1;
`;