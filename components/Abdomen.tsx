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
        <div className="relative">
          <Image
            src={AbdomenPicture}
            className="object-contain"
            height={525}
            alt="abdomen-picture"
          />
          <AbdomenSelection
            imageHighlight={top}
            imageCaption={topCaption}
            topPosHighlight="39%"
            topPosCaption="25%"
            leftPosHighlight="40.5%"
            leftPosCaption="20%"
            widthHighlight={81}
            widthCaption={150}
          />
          <AbdomenSelection
            imageHighlight={topRight}
            imageCaption={topRightCaption}
            topPosHighlight="47%"
            topPosCaption="50%"
            leftPosHighlight="50%"
            leftPosCaption="64%"
            widthHighlight={80}
            widthCaption={150}
          />
          <AbdomenSelection
            imageHighlight={topLeft}
            imageCaption={topLeftCaption}
            topPosHighlight="48%"
            topPosCaption="50%"
            leftPosHighlight="31%"
            leftPosCaption="5%"
            widthHighlight={85}
            widthCaption={150}
          />

          <AbdomenSelection
            imageHighlight={middle}
            imageCaption={middleCaption}
            topPosHighlight="56.5%"
            topPosCaption="40%"
            leftPosHighlight="43%"
            leftPosCaption="14.6%"
            widthHighlight={55}
            widthCaption={180}
          />
          <AbdomenSelection
            imageHighlight={bottomRight}
            imageCaption={bottomRightCaption}
            topPosHighlight="61%"
            topPosCaption="68%"
            leftPosHighlight="50%"
            leftPosCaption="61%"
            widthHighlight={77}
            widthCaption={150}
          />
          <AbdomenSelection
            imageHighlight={bottomLeft}
            imageCaption={bottomLeftCaption}
            topPosHighlight="61%"
            topPosCaption="68%"
            leftPosHighlight="31%"
            leftPosCaption="5%"
            widthHighlight={82}
            widthCaption={150}
          />

          <AbdomenSelection
            imageHighlight={bottom}
            imageCaption={bottomCaption}
            topPosHighlight="67%"
            topPosCaption="78%"
            leftPosHighlight="41.5%"
            leftPosCaption="23%"
            widthHighlight={73}
            widthCaption={150}
          />
        </div>
      </div>
      <Image
        src={allOver}
        className="object-contain hover:opacity-80 cursor-pointer w-[180px]"
        alt="all button"
        onClick={handleAllOverClick}
      />
    </div>
  );
};

export default Abdomen;
