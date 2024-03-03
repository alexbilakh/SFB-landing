import React from "react";
import Container from "../../../components/Container";
import classNames from "classnames";
import Image from "next/image";
import "../../../components/button.scss";

const LevelUpSection = () => {
  return (
    <Container>
      <div
        className={classNames(
          "pt-0 pb-10 flex-col-reverse w-[100vw]",
          "sm:pt-[100px] sm:px-9 sm:flex-col",
          "lg:px-[70px]",
          "2xl:py-[130px] 2xl:px-[310px]"
        )}
      >
        <div
          data-aos-delay="200"
          data-aos="fade-up"
          className="w-full"
        >
          <div className="sm:px-[50px] px-4">
            <div className="bg-[url(/image/landing/background.png)] bg-no-repeat bg-center bg-cover w-full 2xl:py-[44px] py-[18px] rounded-[20px]">
              <div className="sm:-mx-[50px] -mx-[30px]">
                <div
                  className={classNames(
                    "bg-white py-10 rounded-[8px] text-center flex flex-col gap-4 shadow-md font-inter items-center w-[100%]",
                    "sm:py-[31px] sm:rounded-[12.4px] sm:gap-5",
                    "xl:py-[60px] xl:rounded-[24px] xl:gap-10"
                  )}
                >
                  <h3
                    data-aos="zoom-in-up"
                    className="uppercase text-[#6F2268] text-[10px] sm:text-[8px] xl:text-[14px]"
                  >
                    LET’S GET STARTED
                  </h3>
                  <h2
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    className="font-semibold text-[20px] xl:text-[40px] xl:leading-[56px] font-inter"
                  >
                    Level-up your data quality 🚀
                  </h2>
                  <p
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    className="text-center text-[#979797] text-[12px] sm:text-[10px] xl:text-[20px]  "
                  >
                    Create Smart, Secure, Collaborative forms and start
                    revealing deeper insights{" "}
                  </p>
                  <a
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    className={classNames(
                      "rounded-[8px] bg-[#6F2268] w-[202px] h-[50px] flex items-center gap-2 justify-center hover:gap-5 transition-all duration-500",
                      "sm:rounded-[4px] sm:w-[120px] sm:h-[37px]",
                      "lg:w-[200px]",
                      "xl:rounded-[8px] xl:w-[270px] xl:h-[72px]",
                      "2xl:w-[318px]"
                    )}
                    href="https://client.sfb-app.com"
                    target="_blank"
                  >
                    <span className="font-medium text-[14px] text-white sm:text-[10px] sm:leading-[9px] xl:text-[20px] xl:leading-[18px]">
                      Create your First Form
                    </span>
                    <Image
                      src="/image/landing/arrow-right.svg"
                      alt="arrow"
                      width={0}
                      height={0}
                      className={classNames(
                        "w-4 h-4",
                        "sm:w-3 sm:h-3",
                        "xl:w-6 xl:h-6"
                      )}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LevelUpSection;
