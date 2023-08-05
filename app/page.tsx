"use client";
import React, { useState } from "react";
import { Abdomen } from "@/components";

const Home = () => {
  return (
    <>
      <div className="gradient"></div>
      <div className="flex justify-center flex-col items-center">
        <Abdomen />
        <button className="mt-3  text-white w-[150px] py-3 rounded-full gradient-button hover:opacity-80 font-[600] tracking-widest ">
          Next
        </button>
        
      </div>
    </>
  );
};

export default Home;
