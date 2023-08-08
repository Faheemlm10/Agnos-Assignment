import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AbdomenSelectionProps } from "@/types";
import { useStore } from "@/app/store";

const AbdomenSelection = ({
  imageHighlight,
  imageCaption,
  topPosHighlight,
  topPosCaption,
  leftPosHighlight,
  leftPosCaption,
  widthHighlight,
  widthCaption,
}: AbdomenSelectionProps) => {
  const allOverClicked = useStore((state) => state.allOverClicked);
  const setAllOverClicked = useStore((state) => state.setAllOverClicked);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [dynamicWidthHighlight, setDynamicWidthHighlight] =
    useState(widthHighlight);

  useEffect(() => {
    if (allOverClicked) {
      setClicked(true);
    } else {
      setClicked(false);
      setHovered(false);
    }
  }, [allOverClicked]);

  // Call the updateDynamicWidthHighlight function when the component mounts and whenever the window is resized

  const containerStyle: React.CSSProperties = {
    top: topPosHighlight,
    left: leftPosHighlight,
    width: `${widthHighlight}%`,
    cursor: "pointer",
    opacity: clicked ? 1 : hovered ? 0.5 : 0,
    transition: "opacity 0.3s ease-in-out",
    position: "absolute",
  };

  return (
    <>
      {!allOverClicked && (hovered || clicked) ? (
        <div
          style={{
            top: topPosCaption,
            left: leftPosCaption,
            width: `${widthCaption}%`,
            position: "absolute",
          }}
        >
          <Image src={imageCaption} priority alt="image caption" />
        </div>
      ) : null}

      <div
        style={containerStyle}
        onClick={() => {
          setAllOverClicked(false);
          setClicked(!clicked);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="z-50"
      >
        <Image src={imageHighlight} alt="image highlight" priority />
      </div>
    </>
  );
};

export default AbdomenSelection;
