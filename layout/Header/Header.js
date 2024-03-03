"use client";
import React from "react";
import Container from "../../components/Container";
import Image from "next/image";
import Button from "../../components/Button";
import classNames from "classnames";

const Header = () => {
  const handleClick = () => {
    console.log("first");
  };

  return (
    <Container>
      <div
        className={classNames(
          "flex justify-between items-center px-5 py-2",
          "sm:px-9 sm:py-3",
          "md:px-[130px] md:py-[20px]"
        )}
      >
        <a>
          <Image
            src={"/image/landing/logo.svg"}
            alt="logo"
            width={165}
            height={60}
            sizes="100vw"
            className={classNames(
              "md:w-[165px] md:h-[60px]",
              "sm:w-[84px] sm:h-[31px]",
              "w-[109px] h-[40px]"
            )}
          />
        </a>
        <div className="flex md:gap-8 sm:gap-4 gap-3 items-start sm:items-end">
          <Button
            title={"Go to My Workspace"}
            style={
              "md:rounded-lg text-white font-inter bg-[#6F2268] md:h-[50px] md:text-[16px] sm:px-3 sm:h-[25px] sm:text-[8px] h-[40px] px-4 text-[10px] rounded-md"
            }
            link="https://client.sfb-app.com"
          />
          {/* <Image
            src={"/image/landing/language.svg"}
            alt="language"
            width={63}
            height={50}
            className={classNames(
              "md:w-[63px] md:h-[50px]",
              "sm:w-[33px] sm:h-[25px]",
              "w-[57px] h-[40px]"
            )}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Header;
