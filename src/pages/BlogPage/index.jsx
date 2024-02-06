import React from 'react'
import box1 from "../../assets/images/blogimg1.jpg";
import box2 from "../../assets/images/blogimg2.jpg";
import box3 from "../../assets/images/blogimg3.jpg";
import box4 from "../../assets/images/blogimg4.jpg";
import './index.css'
import BlogComponent from '../../components/Blog';
import BoxBlog from '../../components/Reuseable/BoxBlog';

const Blog = () => {
  return (
    <main className='pswrapper'>
      <BlogComponent/>
      <BoxBlog imageSrc={box1} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} />
      <BoxBlog imageSrc={box2} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} />
      <BoxBlog imageSrc={box3} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'} />
      <BoxBlog imageSrc={box4} title={'Interview'} desc={'On 24.09.2023, the largest games exhibition in Uzbekistan was held, in which the best game developers from all over Uzbekistan took part. Most of the developers are young guys with great motivation and desire to develop the gaming industry of Uzbekistan. The exhibition featured both mobile and computer games created using Unity and Unreal engine programs.​FacebookLinkedInInstagram'}/>
    </main>
  )
}

export default Blog;