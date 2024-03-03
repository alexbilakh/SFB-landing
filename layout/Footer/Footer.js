import React from "react";
import Container from "../../components/Container";
import classNames from "classnames";
import Image from "next/image";

const Footer = () => {
  return (
    <Container>
      <div
        className={classNames(
          "px-[20px] py-6 flex flex-col gap-6 items-center",
          "sm:px-9 sm:py-3",
          "lg:px-[70px] lg:py-6",
          "2xl:px-[310px]"
        )}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-[100px] gap-6">
          <div
            className={classNames(
              "flex flex-col items-center gap-4 basis-[63%]",
              "sm:gap-3 sm:items-start",
              "lg:gap-6"
            )}
          >
            <Image
              src={"/image/landing/logo.svg"}
              alt="logo"
              width={0}
              height={0}
              className={classNames(
                "w-[150px] h-10",
                "sm:w-[115px] sm:h-[31px]",
                "lg:w-[222px] lg:h-[60px]"
              )}
            />
            <p
              className={classNames(
                "text-[10px] text-[#242424] leading-6 font-inter",
                "sm:leading-[14px]",
                "lg:text-[16px] lg:leading-6"
              )}
            >
              Sustainable Form Builder empowers teams to reveal insightful data
              through our intuitive drag-and-drop interface, with top-notch
              security standards. In a seamless flow without writing one line of
              code
            </p>
          </div>
          <div className="flex justify-between font-inter basis-[35%] sm:gap-[100px]">
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px] text-[#242424] sm:tracking-[-0.17px] lg:text-[20px] lg:tracking-[-0.32px]">
                Support
              </h3>
              <a 
                className="w-max cursor-pointer underline text-[12px] sm:text-[10px] sm:tracking-[0.17px] tracking-[-0.32px] mt-3 lg:mt-6 lg:text-[16px] lg:tracking-[-0.32px]"
                href="https://sustainablestar.com.sa/privacy-policy/"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a 
                className="cursor-pointer underline text-[12px] sm:text-[10px] sm:tracking-[0.17px] tracking-[-0.32px] mt-2 lg:mt-4 lg:text-[16px] lg:tracking-[-0.32px]"
                href="https://sustainablestar.com.sa/terms-and-conditions/"
                target="_blank"
              >
                Terms of Use
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px] text-[#242424] sm:tracking-[-0.17px] lg:text-[20px] lg:tracking-[-0.32px]">
                Contact Us
              </h3>
              <a className="cursor-pointer underline text-[12px] sm:text-[10px] sm:tracking-[0.17px] tracking-[-0.32px] mt-3 lg:mt-6 lg:text-[16px] lg:tracking-[-0.32px] flex items-center gap-[5px]">
                <Image
                  src={"/image/landing/gmail-icon.svg"}
                  alt="gmail"
                  width={0}
                  height={0}
                  className="w-6 h-6 sm:w-3 sm:h-3 lg:w-6 lg:h-6"
                />
                info@sustainablestar.com
              </a>
              <a 
                className="cursor-pointer underline text-[12px] sm:text-[10px] sm:tracking-[0.17px] tracking-[-0.32px] mt-2 lg:mt-4 lg:text-[16px] lg:tracking-[-0.32px] flex items-center gap-[5px]"
                href="https://www.linkedin.com/company/sustainable-star-sa"
                target="_blank"
              >
                <Image
                  src={"/image/landing/linkedin-icon.svg"}
                  alt="gmail"
                  width={0}
                  height={0}
                  className="w-6 h-6 sm:w-3 sm:h-3 lg:w-6 lg:h-6"
                />
                sustainable-star-sa
              </a>
              <a 
                className="cursor-pointer underline text-[12px] sm:text-[10px] sm:tracking-[0.17px] tracking-[-0.32px] mt-2 lg:mt-4 lg:text-[16px] lg:tracking-[-0.32px] flex items-center gap-[5px]"
                href="https://twitter.com/sustainableSSA"
                target="_blank"
              >
                <Image
                  src={"/image/landing/twitter-icon.svg"}
                  alt="gmail"
                  width={0}
                  height={0}
                  className="w-6 h-6 sm:w-3 sm:h-3 lg:w-6 lg:h-6"
                />
                sustainableSSA
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center font-inter text-[#666666] text-[10px] leading-2 sm:text-[8.25px] sm:leading-1 lg:text-[16px] lg:leading-2 gap-2 pt-[25px]">
          <span>© 2024 Sustainable Star</span>
          <Image
            src={"/image/landing/stick.svg"}
            alt="stick"
            width={0}
            height={0}
            className="w-[1.5px] h-[14px] sm:w-[0.77px] sm:h-[11.34px] lg:w-[1.5px] lg:h-[22px]"
          />
          <span>Powered by </span>
          <Image
            src={"/image/landing/colored-logo.svg"}
            alt="colored logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[34px] h-[14px] sm:w-[30px] sm:h-3 lg:w-[58px] lg:h-6"
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
