import React, { useEffect, useRef } from 'react';
import './ProjectsCarousel.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import ProjectSlide from './ProjectSlide';

const ProjectsCarousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      modules: [Navigation, Pagination, Mousewheel, Autoplay, Parallax],
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1600,
      parallax: true,
      mousewheel: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      pagination: {
        clickable: true,
      },
      navigation: true,
      on: {
        beforeInit: (swiper) => {
          swiper.params.navigation.nextEl = '.swiper-button-next';
          swiper.params.navigation.prevEl = '.swiper-button-prev';
        },
        init: (swiper) => {
          swiper.navigation.update();
        },
      },
    };

    const swiper = new Swiper(swiperElRef.current, swiperParams);

    swiper.on('destroy', () => {
      //swiper.destroy(true, true);
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  const slides = [
    {
      image: "/src/assets/ProjectPhoto1.png",
      title: "Slide 1",
      subtitle: "Subtitle 1",
      text: "Texto 1",
    },
    {
      image: "/src/assets/ProjectPhoto2.png",
      title: "Slide 2",
      subtitle: "Subtitle 2",
      text: "Texto 2",
    },
  ];

  return (
    <section className="swiper" ref={swiperElRef}>
      <div
        className="parallax-bg"
        data-swiper-parallax="-23%"
      ></div>
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <ProjectSlide
            key={index}
            image={slide.image}
            title={slide.title}
            subtitle={slide.subtitle}
            text={slide.text}
          />
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default ProjectsCarousel;
