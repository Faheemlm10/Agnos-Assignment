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
      <h1 className="head_text">Where do you feel the most pain?</h1>
      <div className="flex justify-center flex-col items-center">
        {nextClicked ? <Finger /> : <Abdomen />}

        {!nextClicked && (
          <button
            onClick={handleNextClick}
            className="mt-3 text-white w-[150px] py-3 rounded-full gradient-button hover:opacity-80 font-[600] tracking-widest"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
