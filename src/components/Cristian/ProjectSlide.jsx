import React from 'react';

const ProjectSlide = ({ image, title, subtitle, text }) => {
  return (
    <div className="swiper-slide">
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div className="title" data-swiper-parallax="-100">
        {title}
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        {subtitle}
      </div>
      <div
        className="text"
        data-swiper-parallax="-300"
        data-swiper-parallax-duration="600"
      >
        <p>{text}</p>
      </div>
      <div data-swiper-parallax-opacity="0.5">
        I will change opacity
      </div>
      <div data-swiper-parallax-scale="0.5">
        I will change scale
      </div>
    </div>
  );
};

export default ProjectSlide;