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
      rewind: true,
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
      image: "/ProjectPhoto1.png",
      title: "Next.js Commerce",
      subtitle: "Tech Stack: Next.js y Tailwind.css",
      text: "Aplicación e-commerce de Next.js con App Router, de alto rendimiento y renderizado en el servidor.",
    },
    {
      image: "/ProjectPhoto2.png",
      title: "Galería de Imágenes",
      subtitle: "Tech Stack: Next.js, Cloudinary y Tailwind.css",
      text: "Sitio de galería de imágenes.",
    },
    {
      image: "/ProjectPhoto3.png",
      title: "Onelink",
      subtitle: "Tech Stack: Nuxt.js y Tailwind.css",
      text: "Link-in-bio SaaS construído con Nuxt donde la data se aloja en la URL - No requiere base de datos",
    },
    {
      image: "/ProjectPhoto4.png",
      title: "qrGPT",
      subtitle: "Tech Stack: Next.js con AppRouter, Replicate(IA), Velcel Blob, Vercel KV, Shadcn UI, Tailwind.css",
      text: "QrGPT es una herramienta de inteligencia artificial que te permite generar hermosos códigos QR usando IA con un solo clic.",
    },
  ];

  return (
    <section id='Project-Carousel'>
      <h2>Proyectos</h2>
      <div className="swiper" ref={swiperElRef}>
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
      </div>

    </section>

  );
};

export default ProjectsCarousel;
