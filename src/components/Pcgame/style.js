import styled from "styled-components";
import pcBg from '../../assets/icons/MOBILE_GAMES_En.png'

export const PcStyle = styled.section`
width: 100%;
padding: 252px 0 144px 0;
background-color: #041122;
`;
PcStyle.Wrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

PcStyle.Title = styled.h2`
position: absolute;
color: #FFF;
font-size: 60px;
font-style: normal;
font-weight: 900;
line-height: 95px; 
`;
PcStyle.TitleBg = styled.p`
color: rgba(255, 255, 255, 0.10);
text-align: center;
font-family: "Neue Machina";
font-size: 120px;
font-style: normal;
font-weight: 900;
line-height: 95px; 
text-transform: uppercase;
`;

