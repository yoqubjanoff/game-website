import React from 'react'
import { ProgStyle } from './style';
import progImg1 from '../../../assets/images/programs1.jpg';
import progImg2 from '../../../assets/images/programs2.png';
import progImg3 from '../../../assets/images/programs3.jpg';
import progImg4 from '../../../assets/images/programs4.jpg';
import progImg5 from '../../../assets/images/programs5.jpg';
import progImg6 from '../../../assets/images/programs6.jpg';

const Programs = () => {
  return (
    <ProgStyle>
        <ProgStyle.Container>
            <ProgStyle.Wrapper>
                <ProgStyle.Title>
                Programs we use to create games
                </ProgStyle.Title>
                <ProgStyle.ImgBox>
                    <ProgStyle.Items>
                        <ProgStyle.Img src={progImg1}/>
                    </ProgStyle.Items>
                    <ProgStyle.Items>
                        <ProgStyle.Img src={progImg2}/>
                    </ProgStyle.Items>
                    <ProgStyle.Items>
                        <ProgStyle.Img src={progImg3}/>
                    </ProgStyle.Items>
                    <ProgStyle.Items>
                        <ProgStyle.Img src={progImg4}/>
                    </ProgStyle.Items>
                    <ProgStyle.Items>
                        <ProgStyle.Img src={progImg5}/>
                    </ProgStyle.Items>
                    <ProgStyle.Items>
                        <ProgStyle.Img src={progImg6}/>
                    </ProgStyle.Items>
                </ProgStyle.ImgBox>
            </ProgStyle.Wrapper>
        </ProgStyle.Container>
    </ProgStyle>
  )
}

export default Programs;


// export const ProgStyle = styled.section`
// `;

// ProgStyle.Container = styled.div``;
// ProgStyle.Wrapper = styled.div``;
// ProgStyle.ImgBox = styled.ul``;
// ProgStyle.Items = styled.li``;
// ProgStyle.Img = styled.img``;