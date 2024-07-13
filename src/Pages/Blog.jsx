import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: 'There are many variations',
      date: '11 March 2018',
      author: 'Kerri',
      content:
        'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
    },
    {
      id: 2,
      title: 'Contrary to popular belief',
      date: '18 March 2018',
      author: 'Kerri',
      content:
        'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum is not simply',
      date: '22 March 2018',
      author: 'Kerri',
      content:
        'Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div id="blog" className="w-screen container mx-auto mt-10">
      <div className="mt-10 mb-16" >
      <h1 className="flex justify-center items-center">Our Blog</h1>
      <p className=" flex justify-center items-center text-center">It is a long established fact that 
        a reader will be of a page when established fact looking at its layout.</p>
        </div>
      <Slider {...sliderSettings}>
        {blogData.map((blog) => (
          <div key={blog.id} className="px-4">
            <motion.div
              whileHover={{ backgroundColor: '#3182ce', transform: 'rotate(1deg)', transition: { duration: 0.2 } }}
              className="bg-white h-76 w-84 mt-5 rounded-lg shadow-md overflow-hidden"
              style={{ transformOrigin: 'center' }}
            >
              <img
                src={`/image${blog.id}.jpg`}
                alt={`Blog Image ${blog.id}`}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{blog.date}</p>
                <p className="text-sm text-orange-500 mb-4">By {blog.author}</p>
                <p className="text-sm text-gray-700">{blog.content}</p>
                <a href="#" className="text-blue-500 hover:text-blue-600 block mt-2">
                  Read More...
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
