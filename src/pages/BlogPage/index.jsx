import React from 'react'
import Box from '../../components/Reuseable/Box'
import box1 from "../../assets/images/box1.jpg";
import box2 from "../../assets/images/box2.jpg";
import boxImg2 from "../../assets/images/boxImg.jpg";
import boxImg3 from "../../assets/images/boxImg2.jpg";
import boxImg4 from "../../assets/images/boxImg3.jpg";
import box3 from "../../assets/images/box3Bg.jpg";
import './index.css'
import BlogComponent from '../../components/Blog';

const Blog = () => {
  return (
    <main className='pswrapper'>
      <BlogComponent/>
      <Box imageSrc={box1} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} backgroundImage={box1}/>
      <Box imageSrc={boxImg2} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} backgroundImage={box2}/>
      <Box imageSrc={boxImg3} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} backgroundImage={box3}/>
      <Box imageSrc={boxImg4} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} backgroundImage={boxImg4}/>
    </main>
  )
}

export default Blog;