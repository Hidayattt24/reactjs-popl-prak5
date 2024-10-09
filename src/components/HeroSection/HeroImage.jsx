// src/HeroImage.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroImage.css"; // Opsional untuk custom styles

const HeroImage = () => {
  const images = [
    "https://images.unsplash.com/photo-1587502536575-6dfba0a6e017",
    "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://plus.unsplash.com/premium_photo-1681152783638-5857e676a916?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="relative mx-auto mt-10 max-w-lg">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-64"> {/* Fixed height */}
            <img
              className="w-full h-full object-cover rounded-2xl border border-gray-100 shadow hover:shadow-xl transition-shadow duration-300"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImage;
