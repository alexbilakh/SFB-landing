import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Button from "../../../components/Button";
import ModalVideo from "react-modal-video";
import "./video.scss";

const HeroSection = () => {
  const handleClick = () => {
    console.log("first");
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={classNames(
        "px-5 py-10 flex flex-col gap-10",
        "sm:pl-9 sm:pr-0 sm:pt-[14px] sm:pb-[31px] sm:gap-[35px] sm:flex-row sm:items-center sm:justify-between",
        "lg:pl-[70px] lg:py-[60px]",
        "2xl:pl-[130px] 2xl:pr-0 2xl:pt-[95px] 2xl:pb-[60px] 2xl:gap-[50px] 2xl:flex-row"
      )}
    >
      <div
        data-aos="fade-up"
        className={classNames("flex flex-col font-inter")}
      >
        <h1
          className={classNames(
            "text-[56px] font-[900] items-center gap-3 flex-col hidden",
            "sm:text-[24px] sm:gap-1 sm:flex-row sm:inline-flex",
            "lg:text-[48px] lg:leading-[130%]",
            "2xl:text-[64px] 2xl:flex-row 2xl:gap-3"
          )}
        >
          Secure
          <Image
            src={"/image/landing/dot.svg"}
            alt="dot"
            width={0}
            height={0}
            className={classNames(
              "hidden",
              "sm:w-[6px] sm:h-[6px] sm:block",
              "2xl:w-4 2xl:h-4"
            )}
          />
          Smart
          <Image
            src={"/image/landing/dot.svg"}
            alt="dot"
            width={0}
            height={0}
            className={classNames(
              "hidden",
              "sm:w-[6px] sm:h-[6px] sm:block",
              "2xl:w-4 2xl:h-4"
            )}
          />
          Insightful
        </h1>
        <h1
          className={classNames(
            "text-[56px] font-[900] items-center gap-3 flex-col hidden",
            "sm:text-[24px] sm:gap-1 sm:flex-row sm:inline-flex",
            "2xl:text-[64px] 2xl:flex-row 2xl:gap-5"
          )}
        >
          <Image
            src={"/image/landing/logo-icon.svg"}
            alt="logo-icon"
            width={0}
            height={0}
            className={classNames(
              "sm:w-[31px] sm:h-[37px]",
              "2xl:w-[80px] 2xl:h-[96px]"
            )}
          />
          Form Builder
        </h1>
        <h1 className="text-[56px] font-[900] sm:hidden">
          Secure<span className="text-[#6F2268]">.</span>
          <br /> Smart<span className="text-[#6F2268]">.</span>
          <br /> Insightful<span className="text-[#6F2268]">.</span>
        </h1>
        <p
          className={classNames(
            "text-[16px] text-[#979797] leading-[160%] mt-4",
            "sm:text-[8px] sm:mt-3",
            "2xl:text-[22px] 2xl:mt-8"
          )}
        >
          Create outstanding forms and reveal insightful data simplicity while
          ensuring enterprise-grade security
        </p>
        <Button
          title={"Get Started. It’s Free 🚀"}
          style="2xl:rounded-lg 2xl:w-[338px] 2xl:h-[77px] 2xl:mt-[60px] 2xl:h-[50px] 2xl:text-[24px] lg:w-[254px] lg:h-[58px] lg:text-[18px] text-white font-inter bg-[#6F2268] sm:px-3 sm:h-[30px] sm:w-[130px] sm:text-[8px] sm:mt-6 h-[40px] px-4 text-[14px] rounded-2xl mt-10 h-[55px] text-[16px]"
          link="https://client.sfb-app.com"
        />
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        youtube={{ autoplay: 1, mute: 1 }}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div
        data-aos="fade-left"
        className={classNames(
          "bg-[url(/image/landing/hero-mobile.svg)] w-[335px] h-[700px] bg-cover mt-24 flex flex-col justify-center items-center pt-[60px] px-3 pb-3 m-auto",
          "sm:bg-[url(/image/landing/video-background.png)] bg-cover sm:w-full sm:h-[226px] sm:mt-0 sm:pt-[25px] sm:pb-[8px] sm:pl-[25px] sm:pr-0",
          "lg:h-[541px]",
          "2xl:bg-[url(/image/landing/video-background.png)] bg-cover 2xl:w-4/5 2xl:h-[693px] 2xl:pt-[25px] 2xl:pb-[3px] 2xl:pl-[25px]"
        )}
        style={{ borderBottomLeftRadius: "36px" }}
      >
        <div
          className={
            "w-full h-12 bg-white rounded-tl-[24px] sm:flex items-center pl-6 shadow-md font-inter 2xl:gap-[165px] lg:gap-[125px] sm:gap-[65px] hidden"
          }
        >
          <div className="flex gap-[10px]">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-[#FA85A4] md:w-1.5 md:h-1.5 xl:w-2.5 xl:h-2.5" />
            <div className="w-2.5 h-2.5 rounded-[50%] bg-[#FFE56E] md:w-1.5 md:h-1.5 xl:w-2.5 xl:h-2.5" />
            <div className="w-2.5 h-2.5 rounded-[50%] bg-[#52E282] md:w-1.5 md:h-1.5 xl:w-2.5 xl:h-2.5" />
          </div>
          <div className="bg-[#F7F9FC] rounded-2xl text-black basis-[70%] flex justify-center">
            <span className="text-[8px] xl:text-[10px] font-medium">sfb-app.com</span>
          </div>
        </div>
        <Image
          src={"/image/landing/video-preview.png"}
          alt="video"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full rounded-md"
        />
        <button className="sm:ml-10 absolute" onClick={() => setOpen(true)}>
          <Image
            src={"/image/landing/player-icon.png"}
            alt="player"
            width={100}
            height={100}
            sizes="100vw"
          />
        </button>
      </div>
      {/* <Image 
        src={'/image/landing/hero-full.svg'}
        alt="hero-full"         
        width={0}
        height={0}
        sizes="100vw"
        data-aos="fade-left"
        className="w-full h-full 2xl:block hidden"
      />
      <Image 
        src={'/image/landing/hero-tablet.svg'}
        alt="hero-tablet"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full 2xl:hidden sm:block hidden"
      />
      <Image 
        src={'/image/landing/hero-mobile.svg'}
        alt="hero-mobile"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full sm:hidden block pt-[60px]"
      /> */}
    </div>
  );
};

export default HeroSection;
