import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Button from "../../../components/Button";

const HeroSection = () => {
  const handleClick = () => {
    console.log("first");
  };

  return (
    <div
      className={classNames(
        "px-5 py-10 flex flex-col gap-10",
        "sm:pl-9 sm:pr-0 sm:pt-[14px] sm:pb-[31px] sm:gap-[35px] sm:flex-row sm:items-center sm:justify-between",
        "2xl:pl-[130px] 2xl:pr-0 2xl:pt-[95px] 2xl:pb-[192px] 2xl:gap-[50px] 2xl:flex-row"
      )}
    >
      <div data-aos="fade-up" className={classNames("flex flex-col font-inter")}>
        <h1
          className={classNames(
            "text-[56px] font-[900] items-center gap-3 flex-col hidden",
            "sm:text-[24px] sm:gap-1 sm:flex-row sm:inline-flex",
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
          Secure.
          <br /> Smart.
          <br /> Insightful.
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
          style="2xl:rounded-lg 2xl:w-[338px] 2xl:h-[77px] 2xl:mt-[60px] 2xl:h-[50px] 2xl:text-[24px] text-white font-inter bg-[#6F2268] sm:px-3 sm:h-[30px] sm:w-[130px] sm:text-[8px] sm:mt-6 h-[40px] px-4 text-[14px] rounded-2xl mt-10 h-[55px] text-[16px]"
          onClick={handleClick}
        />
      </div>
      <Image 
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
      />
    </div>
  );
};

export default HeroSection;
