"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroSection from "./component/HeroSection";
import AboutSection1 from "./component/AboutSection1";
import AboutSection2 from "./component/AboutSection2";
import AboutSection3 from "./component/AboutSection3";
import HowItWorksSection from "./component/HowItWorksSection";
import TeamSection from "./component/TeamSection";
import LevelUpSection from "./component/LevelUpSection";
import PartnerSection from "./component/PartnerSection";

const page = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <PartnerSection />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <HowItWorksSection />
      {/* <TeamSection /> */}
      <LevelUpSection />
    </div>
  );
};

export default page;
