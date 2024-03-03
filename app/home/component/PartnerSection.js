import React from "react";
import Container from "../../../components/Container";
import classNames from "classnames";
import Image from "next/image";

const PartnerSection = () => {
  return (
    <Container>
      <div
        className={classNames(
          "px-5 flex justify-center pb-10 m-auto",
          "sm:px-0",
          "lg:px-[70px] lg:pb-[43px]",
          "2xl:px-[310px] 2xl:pb-[76px]"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="uppercase text-[10px] text-[#B2B7BE] font-medium lg:text-[14px] font-inter">
            OUR SUCCESS PARTNERS
          </h2>
          <div className="flex gap-6">
            <Image
              src={"/image/landing/dummy-logo.svg"}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[88px] h-4 sm:h-[14.8px] lg:w-[132px] lg:h-6"
            />
            <Image
              src={"/image/landing/dummy-logo.svg"}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[88px] h-4 sm:h-[14.8px] lg:w-[132px] lg:h-6"
            />
            <Image
              src={"/image/landing/dummy-logo.svg"}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[88px] h-4 sm:h-[14.8px] lg:w-[132px] lg:h-6"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PartnerSection;
