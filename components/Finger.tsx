import React from "react";
import FingerPicture from "../images/fingers/default-finger.png";
import dipOne from "../images/fingers/dipOne.png";
import dipTwo from "../images/fingers/dipTwo.png";
import dipThree from "../images/fingers/dipThree.png";
import dipFour from "../images/fingers/dipFour.png";
import Image from "next/image";
import FingerSelection from "./FingerSelection";
import dipCaption from "../images/fingers/dip-active.png";
import mcpOne from "../images/fingers/mcpOne.png";
import mcpTwo from "../images/fingers/mcpTwo.png";
import mcpThree from "../images/fingers/mcpThree.png";
import mcpFour from "../images/fingers/mcpFour.png";
import mcpFive from "../images/fingers/mcpFive.png";
import mcpCaption from "../images/fingers/mcp-active.png";
import pipCaption from "../images/fingers/pip-active.png";
import pipOne from "../images/fingers/pipOne.png";
import pipTwo from "../images/fingers/pipTwo.png";
import pipThree from "../images/fingers/pipThree.png";
import pipFour from "../images/fingers/pipFour.png";
import pipFive from "../images/fingers/pipFive.png";
import { useStore } from "@/app/store";

const Finger = () => {
  const isDipHovered = useStore((state) => state.isDipHovered);
  const isDipClicked = useStore((state) => state.isDipClicked);
  const isMcpClicked = useStore((state) => state.isMcpClicked);
  const isMcpHovered = useStore((state) => state.isMcpHovered);
  const isPipClicked = useStore((state) => state.isPipClicked);
  const isPipHovered = useStore((state) => state.isPipHovered);
  const fingersHurtsEverywhere = useStore(
    (state) => state.fingerHurtsEverywhere
  );
  const setFingerHurtsEverywhere = useStore(
    (state) => state.setFingerHurtsEverywhere
  );

  // Function to handle the "Hurts Everywhere" button click
  const handleHurtsEverywhereClick = () => {
    setFingerHurtsEverywhere(true);
  };

  // Function to handle the individual finger click
  // Only handle the click if fingersHurtsEverywhere is true
  {
    if (fingersHurtsEverywhere) {
      useStore.setState({
        isDipClicked: true,
        isMcpClicked: true,
        isPipClicked: true,
      });
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-7 font-[600] relative ">
      <div className="relative ">
        {(!fingersHurtsEverywhere && isDipClicked) || isDipHovered ? (
          <Image
            src={dipCaption}
            className="absolute object-contain top-[4%] right-[4%] w-[35%]"
            alt="dip caption"
            priority
          />
        ) : null}
        {(!fingersHurtsEverywhere && isMcpClicked) || isMcpHovered ? (
          <Image
            src={mcpCaption}
            className="absolute object-contain top-[32%] right-[4%] w-[35%]"
            alt="dip caption"
            priority
          />
        ) : null}

        {(!fingersHurtsEverywhere && isPipClicked) || isPipHovered ? (
          <Image
            src={pipCaption}
            className="absolute object-contain top-[15%] right-[4%] w-[35%]"
            alt="pip caption"
            priority
          />
        ) : null}
        <Image
          src={FingerPicture}
          className="object-contain"
          height={500}
          alt="finger-picture"
          priority
        />
        <FingerSelection
          part="dip"
          imageHighlight={dipOne}
          topPosHighlight="25%"
          leftPosHighlight="19%"
          widthHighlight={9}
        />
        <FingerSelection
          part="dip"
          imageHighlight={dipTwo}
          topPosHighlight="15%"
          leftPosHighlight="30.5%"
          widthHighlight={9}
        />
        <FingerSelection
          part="dip"
          imageHighlight={dipThree}
          topPosHighlight="8%"
          leftPosHighlight="42%"
          widthHighlight={9}
        />
        <FingerSelection
          part="dip"
          imageHighlight={dipFour}
          topPosHighlight="11%"
          leftPosHighlight="54.5%"
          widthHighlight={8}
        />
        <FingerSelection
          part="mcp"
          imageHighlight={mcpOne}
          topPosHighlight="46%"
          leftPosHighlight="27%"
          widthHighlight={8.5}
        />
        <FingerSelection
          part="mcp"
          imageHighlight={mcpTwo}
          topPosHighlight="42%"
          leftPosHighlight="35.5%"
          widthHighlight={9}
        />
        <FingerSelection
          part="mcp"
          imageHighlight={mcpThree}
          topPosHighlight="39.5%"
          leftPosHighlight="44.5%"
          widthHighlight={9}
        />
        <FingerSelection
          part="mcp"
          imageHighlight={mcpFour}
          topPosHighlight="39%"
          leftPosHighlight="53%"
          widthHighlight={10}
        />
        <FingerSelection
          part="mcp"
          imageHighlight={mcpFive}
          topPosHighlight="59%"
          leftPosHighlight="67%"
          widthHighlight={9}
        />
        <FingerSelection
          part="pip"
          imageHighlight={pipOne}
          topPosHighlight="35%"
          leftPosHighlight="22%"
          widthHighlight={9}
        />

        <FingerSelection
          part="pip"
          imageHighlight={pipTwo}
          topPosHighlight="25%"
          leftPosHighlight="33%"
          widthHighlight={9}
        />
        <FingerSelection
          part="pip"
          imageHighlight={pipThree}
          topPosHighlight="22%"
          leftPosHighlight="43%"
          widthHighlight={8}
        />
        <FingerSelection
          part="pip"
          imageHighlight={pipFour}
          topPosHighlight="23%"
          leftPosHighlight="53.5%"
          widthHighlight={10}
        />
        <FingerSelection
          part="pip"
          imageHighlight={pipFive}
          topPosHighlight="44.5%"
          leftPosHighlight="75%"
          widthHighlight={9}
        />
      </div>

      <button
        onClick={handleHurtsEverywhereClick}
        className="mt-5 ml-[-1rem] text-white lg:w-[250px] md:w-[225px] sm:w-[200px] w-[150px] lg:py-5 md:py-4 sm:py-3 py-3 rounded-full gradient-button hover:opacity-80 font-[600] tracking-widest lg:text-[1rem] md:text-[0.8rem] sm:text-[0.7rem] text-[0.7rem] "
      >
        Hurts Everywhere
      </button>
    </div>
  );
};

export default Finger;
