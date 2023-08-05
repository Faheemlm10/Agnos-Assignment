import { useState } from "react";
import Image from "next/image";
import { FingerSelectionProps } from "@/types";
import { useStore } from "@/app/store";

const FingerSelection = ({
  part,
  imageHighlight,
  topPosHighlight,
  leftPosHighlight,
  widthHighlight,
}: FingerSelectionProps) => {
  const isDipHovered = useStore((state) => state.isDipHovered);
  const setDipHovered = useStore((state) => state.setDipHovered);
  const isDipClicked = useStore((state) => state.isDipClicked);
  const setDipClicked = useStore((state) => state.setIsDipClicked);

  const isMcpHovered = useStore((state) => state.isMcpHovered);
  const setMcpHovered = useStore((state) => state.setIsMcpHovered);
  const isMcpClicked = useStore((state) => state.isMcpClicked);
  const setMcpClicked = useStore((state) => state.setIsMcpClicked);
  const isPipHovered = useStore((state) => state.isPipHovered);
  const setPipHovered = useStore((state) => state.setIsPipHovered);
  const isPipClicked = useStore((state) => state.isPipClicked);
  const setPipClicked = useStore((state) => state.setIsPipClicked);
  const areFingersHurt = useStore((state) => state.fingerHurtsEverywhere);
  const setFingerHurtEverywhere = useStore(
    (state) => state.setFingerHurtsEverywhere
  );

  const containerStyle: React.CSSProperties = {
    top: topPosHighlight,
    left: leftPosHighlight,
    width: widthHighlight, // Use the string value directly
    cursor: "pointer",
    opacity:
      isDipClicked && part === "dip"
        ? 1
        : isMcpClicked && part === "mcp"
        ? 1
        : isPipClicked && part === "pip"
        ? 1
        : isDipHovered && part == "dip"
        ? 0.5
        : isMcpHovered && part == "mcp"
        ? 0.5
        : isPipHovered && part == "pip"
        ? 0.5
        : 0,

    transition: "opacity 0.3s ease-in-out",
    position: "absolute",
  };

  return (
    <>
      <div
        style={containerStyle}
        onClick={() => {
          if (part === "dip") {
            setDipClicked(!isDipClicked);
          } else if (part === "mcp") {
            setMcpClicked(!isMcpClicked);
          } else if (part === "pip") {
            setPipClicked(!isPipClicked);
          }
        }}
        onMouseEnter={() => {
          if (part === "dip") {
            setDipHovered(true);
          } else if (part === "mcp") {
            setMcpHovered(true);
          } else if (part === "pip") {
            setPipHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (part === "dip") {
            setDipHovered(false);
          } else if (part === "mcp") {
            setMcpHovered(false);
          } else if (part === "pip") {
            setPipHovered(false);
          }
        }}
        className="z-50"
      >
        <Image src={imageHighlight} alt={part} width={widthHighlight} />
      </div>
    </>
  );
};

export default FingerSelection;
