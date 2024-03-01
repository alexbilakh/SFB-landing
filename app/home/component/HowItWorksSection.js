import React from "react";
import Container from "../../../components/Container";
import classNames from "classnames";
import Image from "next/image";
import Slider from "../../../components/howItWorks/Slider";

const HowItWorksSection = () => {
  const leftSliderItems = [
    {
      url: "/image/landing/slider1.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider2.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider3.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider4.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider1.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider2.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider3.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider4.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
  ];

  const rightSliderItems = [
    {
      url: "/image/landing/slider5.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider6.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider7.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider8.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider5.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider6.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider7.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider8.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
  ];

  const mobileSliderItems = [
    {
      url: "/image/landing/slider1.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider2.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider3.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider4.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider5.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider6.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider7.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider8.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider1.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider2.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider3.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider4.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider5.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider6.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider7.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
    {
      url: "/image/landing/slider8.svg",
      size: "w-[100px] h-[100px] sm:w-[88px] sm:h-[88px] xl:w-[170px] xl:h-[170px]",
    },
  ];

  return (
    <Container>
      <div
        className={classNames(
          "pt-0 pb-10 flex-col-reverse",
          "sm:pt-[100px] sm:px-9 sm:flex-col",
          "2xl:pt-[100px] 2xl:px-[310px]"
        )}
      >
        <div
          className={classNames(
            "flex flex-col-reverse gap-10",
            "sm:flex-row sm:justify-between sm:items-center sm:gap-[115px]"
          )}
        >
          <div className="gap-[58px] sm:flex hidden">
            <Slider sliderItems={leftSliderItems} style="h-[500px] mt-20" />
            <Slider
              sliderItems={rightSliderItems}
              style={"h-[640px]"}
              delay={"animate-bounce animate-delay-600"}
            />
          </div>
          <div className="sm:hidden flex">
            <Slider sliderItems={mobileSliderItems} style="h-full" />
          </div>
          <div className="flex flex-col flex-1 font-inter px-5">
            <span
              data-aos="zoom-in"
              className="text-[#6F2268] text-[14px] leading-6 uppercase"
            >
              Integrations
            </span>
            <h2
              data-aos="zoom-in"
              className="2xl:text-[48px] 2xl:font-semibold text-[20px] font-semibold w-[110%] mt-6"
            >
              Push the limits  <br />& Connect with your favorite apps 
            </h2>
            <p
              data-aos="zoom-in"
              className="sm:text-[20px] text-[14px] leading-7 mt-10 w-full font-medium"
            >
              Get secure and easy access with integration for authentication
              verification by Nafath or WhatsApp. you can receive payments too
              for your products or reservations by connecting with any of our
              ready payment gateway
            </p>
          </div>
        </div>
        <div
          className={classNames(
            "flex flex-col font-inter px-5 py-[80px]",
            "sm:flex-row sm:justify-between sm:px-0 sm:py-[100px]"
          )}
        >
          <div className="flex flex-col flex-1">
            <span
              data-aos="zoom-in"
              className="text-[#6F2268] text-[14px] leading-6 uppercase"
            >
              Built for Teams
            </span>
            <h2
              data-aos="zoom-in"
              className="2xl:text-[48px] 2xl:font-medium mt-6 w-10/12 text-[20px] font-semibold"
            >
              Tailor Your Workspace, Simplify Organization, & Foster
              Collaboration
            </h2>
            <p
              data-aos="zoom-in"
              className="sm:text-[20px] text-[14px] leading-7 sm:w-10/12 mt-10 w-full"
            >
              Maximize Productivity with Customizable Access Controls,
              streamlined Form Management, and Unified Team Collaboration on a
              Secure Platform
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-8 gap-4 2xl:gap-8">
              <div
                data-aos="zoom-in-right"
                className={classNames(
                  "rounded-[12px] shadow-md p-4 flex flex-col flex-1",
                  "sm:rounded-[8px] sm:shadow-md sm:py-3 sm:px-4",
                  "2xl:rounded-[16px] 2xl:shadow-lg 2xl:py-8 2xl:px-6"
                )}
              >
                <h4 className="text-[16px] text-[#6F2268] leading-6">
                  Built for Organization
                </h4>
                <p className="text-[12px] sm:text-[14px] text-[#4B5563] leading-[25px] mt-2">
                  Create a custom workspace with access control, that meets
                  enterprise-grade security.
                </p>
                <Image
                  src={"/image/landing/div.framer-1718ydd.svg"}
                  alt="sub"
                  width={0}
                  height={0}
                  className="w-[220px] h-[48px] sm:w-[113px] sm:h-[24px] 2xl:w-[220px] 2xl:h-[48px] mt-10"
                />
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-delay="200"
                className={classNames(
                  "rounded-[12px] shadow-md p-4 flex flex-col flex-1",
                  "sm:rounded-[8px] sm:shadow-md sm:py-3 sm:px-4",
                  "2xl:rounded-[16px] 2xl:shadow-lg 2xl:py-8 2xl:px-6"
                )}
              >
                <h4 className="text-[16px] text-[#6F2268] leading-6">
                  Organize your workspace
                </h4>
                <p className="text-[12px] sm:text-[14px] text-[#4B5563] leading-[25px] mt-2">
                  Group-related forms into one project for quick and efficient
                  management, providing a clean and simple way to keep your
                  forms organized.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="400"
              className={classNames(
                "rounded-[12px] shadow-md p-4 flex flex-col flex-1",
                "sm:rounded-[8px] sm:shadow-md sm:py-3 sm:px-4 sm:flex-row items-end justify-between",
                "2xl:rounded-[16px] 2xl:shadow-lg 2xl:py-8 2xl:px-6"
              )}
            >
              <div className="flex flex-col gap-2 basis-[46%]">
                <h4 className="text-[16px] text-[#6F2268] leading-6">
                  Streamline Collaboration
                </h4>
                <p className="text-[12px] sm:text-[14px] text-[#4B5563] leading-[25px] mt-2">
                  Share workspaces & Projects by Bringing all teams together in
                  one secure platform.
                </p>
              </div>
              <Image
                src={"/image/landing/testimonial.svg"}
                alt="testimonial"
                width={0}
                height={0}
                className={classNames(
                  "w-[102px] h-[50px]",
                  "sm:w-[81px] sm:h-[40px]",
                  "2xl:w-[157px] 2xl:h-[77px]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorksSection;
