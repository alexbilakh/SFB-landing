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
          "2xl:py-10 2xl:px-[310px]"
        )}
      >
        <div
          className={classNames(
            "w-full h-auto py-6 px-4 bg-white shadow-md rounded-[16px] relative overflow-hidden flex flex-col gap-6",
            "sm:py-7 sm:px-[54px] rounded-[12px] sm:gap-7",
            "2xl:px-[100px] 2xl:py-[56px] rounded-[24px] 2xl:gap-10"
          )}
        >
          <div className="flex items-center gap-[6px] 2xl:gap-3">
            <Image
              src={"/image/landing/lighting.svg"}
              alt="lighting"
              width={0}
              height={0}
              className={classNames(
                "w-[11.35px] h-[15px]",
                "sm:w-[9.5px] sm:h-3",
                "2xl:w-[18px] 2xl:h-6"
              )}
            />
            <span
              className={classNames(
                "uppercase text-[12px] text-[#F09A37] font-inter",
                "sm:text-[8px]",
                "2xl:text-[16px]"
              )}
            >
              Customise
            </span>
          </div>
          <h2
            className={classNames(
              "text-[24px] text-white font-semibold font-inter",
              "sm:text-[26px]",
              "2xl:text-[50px]"
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
            <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-6 font-inter basis-[35%]">
              <Image
                src={"/image/landing/icon4.svg"}
                alt="icon"
                width={0}
                height={0}
                className="w-10 h-10 2xl:w-[76px] 2xl:h-[76px]"
              />
              <h3
                className={classNames(
                  "text-[20px] font-semibold text-black font-inter",
                  "sm:text-[25px]",
                  "2xl:text-[48px]"
                )}
              >
                Auto Response
              </h3>
              <p
                className={classNames(
                  "text-[12px] font-medium text-[#979797] w-11/12",
                  "sm:text-[8px]",
                  "2xl:text-[16px]"
                )}
              >
                Ask for any data type of information, receive files, and even
                payments all in sustainable form builder
              </p>
            </div>
            <Image
              src={"/image/landing/sub-img1.svg"}
              alt="sub1"
              width={0}
              height={0}
              className={classNames(
                "w-[275px] h-[217px] shadow-md rounded-xl",
                "sm:w-[233px] sm:h-[183px]",
                "2xl:w-[452px] 2xl:h-[356px]"
              )}
            />
          </div>
          <div
            className={classNames(
              "flex gap-4 flex-col-reverse",
              "sm:flex-row sm:items-center",
              "2xl:gap-[50px]"
            )}
          >
            <Image
              src={"/image/landing/blank-img.svg"}
              alt="sub1"
              width={0}
              height={0}
              className={classNames(
                "w-[250px] h-[222px] shadow-md rounded-lg",
                "sm:w-[206px] sm:h-[206px]",
                "2xl:w-[400px] 2xl:h-[400px]"
              )}
            />
            <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-6 font-inter basis-[35%]">
              <Image
                src={"/image/landing/icon5.svg"}
                alt="icon"
                width={0}
                height={0}
                className="w-10 h-10 2xl:w-[76px] 2xl:h-[76px]"
              />
              <h3
                className={classNames(
                  "text-[20px] font-semibold text-black font-inter",
                  "sm:text-[25px]",
                  "2xl:text-[48px]"
                )}
              >
                Email Notification
              </h3>
              <p
                className={classNames(
                  "text-[12px] font-medium text-[#979797] w-11/12",
                  "sm:text-[8px]",
                  "2xl:text-[16px]"
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
            <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-6 font-inter basis-[35%]">
              <Image
                src={"/image/landing/icon6.svg"}
                alt="icon"
                width={0}
                height={0}
                className="w-10 h-10 2xl:w-[76px] 2xl:h-[76px]"
              />
              <h3
                className={classNames(
                  "text-[20px] font-semibold text-black font-inter",
                  "sm:text-[25px]",
                  "2xl:text-[48px]"
                )}
              >
                Prevent Spam
              </h3>
              <p
                className={classNames(
                  "text-[12px] font-medium text-[#979797] w-11/12",
                  "sm:text-[8px]",
                  "2xl:text-[16px]"
                )}
              >
                Stop unwanted submissions and protect your data with our
                built-in mobile, email, IPs, and more authentication
                verification.
              </p>
            </div>
            <Image
              src={"/image/landing/blank-img.svg"}
              alt="sub1"
              width={0}
              height={0}
              className={classNames(
                "w-[250px] h-[222px] shadow-md rounded-lg",
                "sm:w-[206px] sm:h-[206px]",
                "2xl:w-[400px] 2xl:h-[400px]"
              )}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection1;
