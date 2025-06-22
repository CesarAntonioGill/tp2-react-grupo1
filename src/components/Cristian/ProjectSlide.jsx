import React from 'react';

const ProjectSlide = ({ image, title, subtitle, text }) => {
  return (
    <div className="swiper-slide">
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div
        className="title" data-swiper-parallax="-100"
        data-swiper-parallax-opacity="0.5"
        data-swiper-parallax-scale="0.5"
      >
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
    </div>
  );
};

export default ProjectSlide;