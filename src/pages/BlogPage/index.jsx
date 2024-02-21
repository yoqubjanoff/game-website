import React, { useEffect, useState } from "react";
import box1 from "../../assets/images/blogimg1.jpg";
import "./index.css";
import BlogComponent from "../../components/Blog";
import BoxBlog from "../../components/Reuseable/BoxBlog";
import request from "../../services/request";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [blogData, setBlogData] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await request.get(
        `/public/blogs?lan=${localStorage.getItem("i18nextLng")}`
      );
      setBlogData(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, [i18n.language]);

  return (
    <main className="pswrapper">
      <BlogComponent />
      {blogData?.map((blog) => (
        <BoxBlog
          key={blog.id}
          imageSrc={blog.blogPhotoUrl}
          videoId={blog.videoUrl || "no-video"}
          title={blog?.title}
          desc={blog?.content}
        />
      ))}
    </main>
  );
};

export default Blog;
