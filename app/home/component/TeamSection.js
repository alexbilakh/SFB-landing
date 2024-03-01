import React from "react";
import Container from "../../../components/Container";
import classNames from "classnames";

const TeamSection = () => {
  return (
    <Container>
      <div
        className={classNames(
          "pt-0 pb-10 px-5 bg-[url(/image/landing/vector-backgroud.svg)] bg-contain",
          "sm:py-[52px] sm:px-9",
          "xl:py-[100px] xl:px-[70px]",
          "2xl:px-[310px]"
        )}
      >
        <div className="flex flex-col gap-4 sm:gap-5 xl:gap-10">
          <h3 className="font-inter text-[#6F2268] text-[16px] leading-6 text-center">
            Trusted by
          </h3>
          <div className="flex flex-row flex-wrap justify-between gap-4">
            <div data-aos="fade-up" className="xl:w-[300px] xl:h-[300px] w-[155px] h-[155px] shadow-md rounded-[5px] sm:rounded-[10px] xl:rounded-[20px] bg-white"></div>
            <div data-aos="fade-up" data-aos-delay="300" className="xl:w-[300px] xl:h-[300px] w-[155px] h-[155px] shadow-md rounded-[5px] sm:rounded-[10px] xl:rounded-[20px] bg-white"></div>
            <div data-aos="fade-up" data-aos-delay="500" className="xl:w-[300px] xl:h-[300px] w-[155px] h-[155px] shadow-md rounded-[5px] sm:rounded-[10px] xl:rounded-[20px] bg-white"></div>
            <div data-aos="fade-up" data-aos-delay="700" className="xl:w-[300px] xl:h-[300px] w-[155px] h-[155px] shadow-md rounded-[5px] sm:rounded-[10px] xl:rounded-[20px] bg-white"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamSection;
