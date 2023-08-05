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
      {(!fingersHurtsEverywhere && isDipClicked) || isDipHovered ? (
        <Image
          src={dipCaption}
          className="absolute object-contain top-[1%] right-[0%] w-[40%]"
          alt="dip caption"
        />
      ) : null}
      {(!fingersHurtsEverywhere && isMcpClicked) || isMcpHovered ? (
        <Image
          src={mcpCaption}
          className="absolute object-contain top-[27%] right-[0%] w-[40%]"
          alt="dip caption"
        />
      ) : null}

      {(!fingersHurtsEverywhere && isPipClicked) || isPipHovered ? (
        <Image
          src={pipCaption}
          className="absolute object-contain top-[11%] right-[0%] w-[40%]"
          alt="pip caption"
        />
      ) : null}
      <Image
        src={FingerPicture}
        className="object-contain"
        height={575}
        alt="finger-picture"
        priority
      />
      <FingerSelection
        part="dip"
        imageHighlight={dipOne}
        topPosHighlight="22%"
        leftPosHighlight="19%"
        widthHighlight={50}
      />
      <FingerSelection
        part="dip"
        imageHighlight={dipTwo}
        topPosHighlight="13%"
        leftPosHighlight="30.5%"
        widthHighlight={52}
      />
      <FingerSelection
        part="dip"
        imageHighlight={dipThree}
        topPosHighlight="7%"
        leftPosHighlight="42%"
        widthHighlight={50}
      />
      <FingerSelection
        part="dip"
        imageHighlight={dipFour}
        topPosHighlight="10%"
        leftPosHighlight="54.5%"
        widthHighlight={46}
      />
      <FingerSelection
        part="mcp"
        imageHighlight={mcpOne}
        topPosHighlight="40%"
        leftPosHighlight="27%"
        widthHighlight={49}
      />
      <FingerSelection
        part="mcp"
        imageHighlight={mcpTwo}
        topPosHighlight="36.5%"
        leftPosHighlight="35.5%"
        widthHighlight={50}
      />
      <FingerSelection
        part="mcp"
        imageHighlight={mcpThree}
        topPosHighlight="34.5%"
        leftPosHighlight="44.5%"
        widthHighlight={49}
      />
      <FingerSelection
        part="mcp"
        imageHighlight={mcpFour}
        topPosHighlight="34%"
        leftPosHighlight="53%"
        widthHighlight={53}
      />
      <FingerSelection
        part="mcp"
        imageHighlight={mcpFive}
        topPosHighlight="51%"
        leftPosHighlight="67%"
        widthHighlight={53}
      />
      <FingerSelection
        part="pip"
        imageHighlight={pipOne}
        topPosHighlight="30%"
        leftPosHighlight="22%"
        widthHighlight={51}
      />

      <FingerSelection
        part="pip"
        imageHighlight={pipTwo}
        topPosHighlight="22%"
        leftPosHighlight="33%"
        widthHighlight={51}
      />
      <FingerSelection
        part="pip"
        imageHighlight={pipThree}
        topPosHighlight="19%"
        leftPosHighlight="43%"
        widthHighlight={51}
      />
      <FingerSelection
        part="pip"
        imageHighlight={pipFour}
        topPosHighlight="20%"
        leftPosHighlight="53.5%"
        widthHighlight={53}
      />
      <FingerSelection
        part="pip"
        imageHighlight={pipFive}
        topPosHighlight="39%"
        leftPosHighlight="75%"
        widthHighlight={53}
      />

      <button
        onClick={handleHurtsEverywhereClick}
        className="mt-5 ml-[-1rem] text-white w-[250px] py-5 rounded-full gradient-button hover:opacity-80 font-[600] tracking-widest"
      >
        Hurts Everywhere
      </button>
    </div>
  );
};

export default Finger;
