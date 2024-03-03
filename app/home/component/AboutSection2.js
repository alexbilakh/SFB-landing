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
        <div
          className={classNames(
            "w-full h-auto py-6 px-4 bg-white shadow-md rounded-[16px] relative overflow-hidden flex flex-col gap-6",
            "sm:py-7 sm:px-[54px] rounded-[12px] sm:gap-7",
            "lg:px-[100px] lg:py-[56px] rounded-[24px] lg:gap-10"
          )}
        >
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
                "uppercase text-[12px] text-[#F09A37] font-inter",
                "sm:text-[8px]",
                "lg:text-[16px]"
              )}
            >
              Customise
            </span>
          </div>
          <h2
            data-aos="fade-up"
            className={classNames(
              "text-[24px] font-semibold font-inter w-full tracking-[-2.24px]",
              "sm:text-[26px]",
              "lg:text-[50px]"
            )}
          >
            What Makes Sustainable Form Builder Secure?
          </h2>
          <div
            className={classNames(
              "flex flex-col gap-4",
              "sm:flex-row sm:justify-between sm:items-center"
            )}
          >
            <div data-aos="fade-right" className="flex flex-col gap-2 sm:gap-3 lg:gap-6 font-inter basis-[35%]">
              <Image
                src={"/image/landing/icon4.svg"}
                alt="icon"
                width={0}
                height={0}
                className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
              />
              <h3
                className={classNames(
                  "text-[20px] font-semibold text-black font-inter",
                  "sm:text-[25px]",
                  "lg:text-[48px]"
                )}
              >
                Auto Response
              </h3>
              <p
                className={classNames(
                  "text-[12px] font-medium text-[#979797] w-11/12",
                  "sm:text-[8px]",
                  "lg:text-[16px]"
                )}
              >
                Ask for any data type of information, receive files, and even
                payments all in sustainable form builder
              </p>
            </div>
            <Image
              src={"/image/landing/auto response.png"}
              alt="sub1"
              width={0}
              height={0}
              sizes="100vw"
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
              src={"/image/landing/email notification.png"}
              alt="sub1"
              width={0}
              height={0}
              sizes="100vw"
              data-aos-delay="300"
              data-aos="fade-right"
              className={classNames(
                "w-[250px] h-[222px]",
                "sm:w-[206px] sm:h-[206px]",
                "lg:w-[400px] lg:h-[400px]"
              )}
            />
            <div data-aos="fade-left"  data-aos-delay="300" className="flex flex-col gap-2 sm:gap-3 lg:gap-6 font-inter basis-[40%]">
              <Image
                src={"/image/landing/icon5.svg"}
                alt="icon"
                width={0}
                height={0}
                className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
              />
              <h3
                className={classNames(
                  "text-[20px] font-semibold text-black font-inter w-full",
                  "sm:text-[25px]",
                  "lg:text-[48px]"
                )}
              >
                Email Notification
              </h3>
              <p
                className={classNames(
                  "text-[12px] font-medium text-[#979797] w-11/12",
                  "sm:text-[8px]",
                  "lg:text-[16px]"
                )}
              >
                No need to check for new submissions, you will receive an email
                notification for each new submission 
              </p>
            </div>
          </div>
          <div
            className={classNames(
              "flex flex-col gap-4",
              "sm:flex-row sm:justify-between sm:items-center"
            )}
          >
            <div data-aos="fade-right"  data-aos-delay="300" className="flex flex-col gap-2 sm:gap-3 lg:gap-6 font-inter basis-[35%]">
              <Image
                src={"/image/landing/icon6.svg"}
                alt="icon"
                width={0}
                height={0}
                className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
              />
              <h3
                className={classNames(
                  "text-[20px] font-semibold text-black font-inter",
                  "sm:text-[25px]",
                  "lg:text-[48px]"
                )}
              >
                Prevent Spam
              </h3>
              <p
                className={classNames(
                  "text-[12px] font-medium text-[#979797] w-11/12",
                  "sm:text-[8px]",
                  "lg:text-[16px]"
                )}
              >
                Stop unwanted submissions and protect your data with our
                built-in mobile, email, IPs, and more authentication
                verification.
              </p>
            </div>
            <Image
              src={"/image/landing/prevent spam.png"}
              alt="sub1"
              width={0}
              height={0}
              sizes="100vw"
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
    </Container>
  );
};

export default AboutSection1;
