import styled from "styled-components";
import pcBg from '../../assets/images/PcGames.svg'

export const PcStyle = styled.section`
width: 100%;
padding: 208px 0 100px 0;
background-color: #041122;
`;
PcStyle.Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-image: url(${pcBg});
background-repeat: no-repeat;
background-position: center center;
`;

PcStyle.Title = styled.h2`
color: #FFF;
font-size: 60px;
font-style: normal;
font-weight: 900;
line-height: 95px; 
`;