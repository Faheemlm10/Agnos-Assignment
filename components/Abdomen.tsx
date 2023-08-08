"use client";
import React, { useState } from "react";
import AbdomenPicture from "../images/abs/default-abs.png";
import Image from "next/image";
import top from "../images/abs/epigastrium-highlight.png";
import topLeft from "../images/abs/ruq-highlight.png";
import topLeftCaption from "../images/abs/ruq-active.png";
import topRight from "../images/abs/luq-highlight.png";
import topRightCaption from "../images/abs/luq-active.png";
import middle from "../images/abs/umbilicus-highlight.png";
import middleCaption from "../images/abs/umbilicus-active.png";
import bottom from "../images/abs/suprapubic-highlight.png";
import bottomCaption from "../images/abs/suprapubic-active.png";
import bottomRight from "../images/abs/llq-highlight.png";
import bottomRightCaption from "../images/abs/llq-active.png";
import bottomLeft from "../images/abs/rlq-highlight.png";
import bottomLeftCaption from "../images/abs/rlq-active.png";
import AbdomenSelection from "./AbdomenSelection";
import topCaption from "../images/abs/epigastrium-active.png";
import allOver from "../images/buttons/all-over-highlight.png";
import { useStore } from "@/app/store";

const Abdomen = () => {
  const allOverClicked = useStore((state) => state.allOverClicked);
  const setAllOverClicked = useStore((state) => state.setAllOverClicked);

  const handleAllOverClick = () => {
    setAllOverClicked(!allOverClicked);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-7 font-[600] text-[30px] ">
      <div className="relative flex justify-center">
        <div className="relative flex justify-center">
          <Image
            src={AbdomenPicture}
            className="object-contain  "
            height={500}
            alt="abdomen-picture"
          />
          <AbdomenSelection
            imageHighlight={top}
            imageCaption={topCaption}
            topPosHighlight="40%"
            topPosCaption="28%"
            leftPosHighlight="41%"
            leftPosCaption="24%"
            widthHighlight={15}
            widthCaption={25}
          />
          <AbdomenSelection
            imageHighlight={topRight}
            imageCaption={topRightCaption}
            topPosHighlight="47%"
            topPosCaption="49%"
            leftPosHighlight="50%"
            leftPosCaption="64%"
            widthHighlight={15}
            widthCaption={25}
          />
          <AbdomenSelection
            imageHighlight={topLeft}
            imageCaption={topLeftCaption}
            topPosHighlight="48%"
            topPosCaption="50%"
            leftPosHighlight="31.5%"
            leftPosCaption="8%"
            widthHighlight={16}
            widthCaption={26}
          />

          <AbdomenSelection
            imageHighlight={middle}
            imageCaption={middleCaption}
            topPosHighlight="56.5%"
            topPosCaption="40%"
            leftPosHighlight="43%"
            leftPosCaption="16%"
            widthHighlight={11}
            widthCaption={32}
          />
          <AbdomenSelection
            imageHighlight={bottomRight}
            imageCaption={bottomRightCaption}
            topPosHighlight="61%"
            topPosCaption="68%"
            leftPosHighlight="50%"
            leftPosCaption="61%"
            widthHighlight={14.5}
            widthCaption={26}
          />
          <AbdomenSelection
            imageHighlight={bottomLeft}
            imageCaption={bottomLeftCaption}
            topPosHighlight="61%"
            topPosCaption="68%"
            leftPosHighlight="31.7%"
            leftPosCaption="10%"
            widthHighlight={15}
            widthCaption={26}
          />

          <AbdomenSelection
            imageHighlight={bottom}
            imageCaption={bottomCaption}
            topPosHighlight="68%"
            topPosCaption="78%"
            leftPosHighlight="41.5%"
            leftPosCaption="25%"
            widthHighlight={14}
            widthCaption={26}
          />
        </div>
      </div>
      <Image
        src={allOver}
        className="object-contain hover:opacity-80 cursor-pointer lg:w-[12rem] md:w-[11rem] w-[10rem] z-50"
        alt="all button"
        onClick={handleAllOverClick}
      />
    </div>
  );
};

export default Abdomen;
