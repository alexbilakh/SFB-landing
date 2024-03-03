import React from "react";
import Container from "../../../components/Container";
import classNames from "classnames";
import Image from "next/image";

const AboutSection1 = () => {
  return (
    <Container>
      <div
        className={classNames(
          "pt-0 pb-10 px-5",
          "sm:py-[34px] sm:px-9",
          "lg:px-[70px] lg:py-[90px]",
          "2xl:py-10 2xl:px-[310px]"
        )}
      >
        <div className="px-[50px]">
          <div
            className="bg-[url(/image/landing/background.png)] bg-no-repeat bg-center bg-cover w-full lg:py-[44px] sm:py-[18px] py-0 rounded-[20px]"
          >
            <div className="-mx-[50px]">
              <div
                className={classNames(
                  "w-full h-auto py-6 px-4 bg-[#030122] rounded-[16px] relative overflow-hidden flex flex-col gap-6",
                  "sm:py-7 sm:px-[54px] rounded-[12px] sm:gap-7",
                  "lg:px-[100px] lg:py-[56px] rounded-[24px] lg:gap-10"
                )}
              >
                <Image 
                  src={'/image/landing/circle.svg'}
                  alt="circle"
                  width={0}
                  height={0}
                  className="lg:w-[650px] lg:h-[650px] sm:w-[350px] sm:h-[350px] absolute top-0 right-0 hidden sm:block"
                />
                <Image 
                  src={'/image/landing/circle2.svg'}
                  alt="circle"
                  width={0}
                  height={0}
                  className="lg:w-[650px] lg:h-[650px] sm:w-[350px] sm:h-[350px] absolute bottom-0 left-0 hidden sm:block"
                />
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <Image
                    src={"/image/landing/lighting.svg"}
                    alt="lighting"
                    width={0}
                    height={0}
                    className={classNames(
                      "w-[11.35px] h-[15px]",
                      "sm:w-[9.5px] sm:h-3",
                      "lg:w-[18px] lg:h-6"
                    )}
                  />
                  <span
                    className={classNames(
                      "uppercase text-[12px] text-white font-inter",
                      "sm:text-[8px]",
                      "lg:text-[16px]"
                    )}
                  >
                    Insights
                  </span>
                </div>
                <h2
                  data-aos="fade-up"
                  className={classNames(
                    "text-[24px] text-white font-semibold font-inter tracking-[-2.24px]",
                    "sm:text-[26px]",
                    "lg:text-[50px]"
                  )}
                >
                  What Makes Sustainable Form Builder Insightful?
                </h2>
                <div
                  className={classNames(
                    "flex flex-col gap-4",
                    "sm:flex-row sm:justify-between sm:items-center"
                  )}
                >
                  <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col gap-2 sm:gap-3 lg:gap-6 font-inter basis-[40%]">
                    <Image
                      src={"/image/landing/icon7.svg"}
                      alt="icon"
                      width={0}
                      height={0}
                      className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
                    />
                    <h3
                      className={classNames(
                        "text-[20px] font-semibold text-white font-inter",
                        "sm:text-[25px]",
                        "lg:text-[48px]"
                      )}
                    >
                      Informed decisions
                    </h3>
                    <p
                      className={classNames(
                        "text-[12px] font-medium text-[#B3B8D0] w-11/12",
                        "sm:text-[8px]",
                        "lg:text-[16px]"
                      )}
                    >
                      Analyze data easily and make better decisions based on
                      reliable and valuable data
                    </p>
                  </div>
                  <Image
                    src={"/image/landing/informed decision.svg"}
                    alt="sub1"
                    width={0}
                    height={0}
                    data-aos-delay="300"
                    data-aos="fade-left"
                    className={classNames(
                      "w-[275px] h-[217px]",
                      "sm:w-[233px] sm:h-[183px]",
                      "lg:w-[452px] lg:h-[356px]"
                    )}
                  />
                </div>
                <div
                  className={classNames(
                    "flex gap-4 flex-col-reverse",
                    "sm:flex-row sm:items-center",
                    "lg:gap-[50px]"
                  )}
                >
                  <Image
                    src={"/image/landing/deeper insights.svg"}
                    alt="sub1"
                    width={0}
                    height={0}
                    data-aos-delay="300"
                    data-aos="fade-right"
                    className={classNames(
                      "w-[250px] h-[222px]",
                      "sm:w-[206px] sm:h-[206px]",
                      "lg:w-[400px] lg:h-[400px]"
                    )}
                  />
                  <div data-aos="fade-left" data-aos-delay="300" className="flex flex-col gap-2 sm:gap-3 lg:gap-6 font-inter basis-[40%]">
                    <Image
                      src={"/image/landing/icon8.svg"}
                      alt="icon"
                      width={0}
                      height={0}
                      className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
                    />
                    <h3
                      className={classNames(
                        "text-[20px] font-semibold text-white font-inter",
                        "sm:text-[25px]",
                        "lg:text-[48px]"
                      )}
                    >
                      Deeper insights
                    </h3>
                    <p
                      className={classNames(
                        "text-[12px] font-medium text-[#B3B8D0] w-11/12",
                        "sm:text-[8px]",
                        "lg:text-[16px]"
                      )}
                    >
                      Stay organized on top of submissions with features such as
                      marking as spam & favorite, tagging, and source mapping.
                    </p>
                  </div>
                </div>
                <div
                  className={classNames(
                    "flex flex-col gap-4",
                    "sm:flex-row sm:justify-between sm:items-center"
                  )}
                >
                  <div data-aos="fade-right" data-aos-delay="300" className="flex flex-col gap-2 sm:gap-3 lg:gap-6 font-inter basis-[45%]">
                    <Image
                      src={"/image/landing/icon8.svg"}
                      alt="icon"
                      width={0}
                      height={0}
                      className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
                    />
                    <h3
                      className={classNames(
                        "text-[20px] font-semibold text-white font-inter",
                        "sm:text-[25px]",
                        "lg:text-[48px]"
                      )}
                    >
                      Secure collaboration
                    </h3>
                    <p
                      className={classNames(
                        "text-[12px] font-medium text-[#B3B8D0] w-11/12",
                        "sm:text-[8px]",
                        "lg:text-[16px]"
                      )}
                    >
                      Share form results securely with team members and external
                      partners.
                    </p>
                  </div>
                  <Image
                    src={"/image/landing/secure collaboration.svg"}
                    alt="sub1"
                    width={0}
                    height={0}
                    data-aos-delay="300"
                    data-aos="fade-left"
                    className={classNames(
                      "w-[250px] h-[222px]",
                      "sm:w-[206px] sm:h-[206px]",
                      "lg:w-[400px] lg:h-[400px]"
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection1;
