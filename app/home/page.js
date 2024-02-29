"use client"
import React from 'react'
import HeroSection from './component/HeroSection';
import AboutSection1 from './component/AboutSection1';
import AboutSection2 from './component/AboutSection2';
import AboutSection3 from './component/AboutSection3';

const page = () => {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
    </div>
  )
}

export default page