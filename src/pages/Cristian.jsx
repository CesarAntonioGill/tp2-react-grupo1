import React from 'react';
import Header from '../components/Cristian/Header';
import Navbar from '../components/Cristian/Navbar';
import About from '../components/Cristian/About';
import ProjectsCarousel from '../components/Cristian/ProjectsCarousel';
import Skills from '../components/Cristian/Skills';
import Contact from '../components/Cristian/Contact';
import GamesCarousel from '../components/Cristian/GamesCarousel';
import Footer from '../components/Cristian/Footer';
import ThemeSwitcher from '../components/Cristian/ThemeSwitcher';
import '../pages/Cristian.css'; // Para las variables CSS globales


export default function Cristian() {
  return (
    <div className='cristianContainer'>
      <ThemeSwitcher />
      <Header />
      <Navbar />
      <main>
        <About />
        <ProjectsCarousel />
        <Skills />
        <Contact />
        <GamesCarousel />
      </main>
      <Footer />
    </div>
  );
}