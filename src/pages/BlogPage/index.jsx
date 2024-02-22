import React, { useEffect, useState } from "react";
import "./index.css";
import BlogComponent from "../../components/Blog";
import BoxBlog from "../../components/Reuseable/BoxBlog";
import request from "../../services/request";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const [loading , setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const res = await request.get(
        `/public/blogs?lan=${localStorage.getItem("i18nextLng")}`
      );
      setBlogData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Server bilan xatolik',
        text: 'An error occurred while loading data. Please check your internet connection and server status.',
      });
    }
  };

  useEffect(() => {
    getBlogs();
  }, [i18n.language]);

  return (
    <main className="pswrapper">
      <BlogComponent />
      { loading ? (
        <Loading />
      ) : (
        blogData?.map((blog) => (
          <BoxBlog
            key={blog.id}
            imageSrc={blog.blogPhotoUrl}
            videoId={blog.videoUrl || "no-video"}
            title={blog?.title}
            desc={blog?.content}
          />
        ))
      )}
    </main>
  );
};

export default Blog;
