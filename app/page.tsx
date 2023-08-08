"use client";
import React, { useState } from "react";
import { Abdomen, Finger } from "@/components";

const Home = () => {
  const [nextClicked, setNextClicked] = useState(false);
  const handleNextClick = () => {
    setNextClicked(true);
  };
  return (
    <>
      <div className="gradient"></div>
      <h1 className="head_text  ">Where do you feel the most pain?</h1>
      <div className="flex justify-center flex-col items-center">
        {nextClicked ? <Finger /> : <Abdomen />}

        {!nextClicked && (
          <button
            onClick={handleNextClick}
            className="mt-3 text-white lg:w-[160px] md:w-[140px] w-[130px] lg:py-[0.7rem] md:py-[0.6rem] py-[0.6rem] rounded-full gradient-button hover:opacity-80 font-[600] tracking-widest z-50"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
