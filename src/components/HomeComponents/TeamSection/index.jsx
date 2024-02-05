import React from 'react'
import { Team } from './style';
import teamImg from '../../../assets/images/teamImg.png'

const TeamSection = () => {
  return (
    <Team>
        <Team.Container>
            <Team.Wrapper>
                <Team.TexBox>
                    <Team.Title>Best Team</Team.Title>
                    <Team.Desc>
                    Explore a world of possibilities with our forward-thinking IT strategies. Our team of experts harnesses the latest technologies to ensure your business not only keeps pace but stays ahead of the curve.
                    </Team.Desc>
                </Team.TexBox>
                <Team.ImageBox>
                    <Team.Img src={teamImg} alt='image heroes game'/>
                </Team.ImageBox>
            </Team.Wrapper>
        </Team.Container>
    </Team>
  )
}

export default TeamSection;

