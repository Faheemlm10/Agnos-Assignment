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
  heightHighlight,
  heightCaption,
}: AbdomenSelectionProps) => {
  const allOverClicked = useStore((state) => state.allOverClicked);
  const setAllOverClicked = useStore((state) => state.setAllOverClicked);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (allOverClicked) {
      setClicked(true);
    } else {
      setClicked(false);
      setHovered(false); 
    }
  }, [allOverClicked]);

  const containerStyle: React.CSSProperties = {
    top: topPosHighlight,
    left: leftPosHighlight,
    width: widthHighlight !== undefined ? `${widthHighlight}px` : "77px",
    height: heightHighlight !== undefined ? `${heightHighlight}px` : "5.2rem",
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
            width: widthCaption !== undefined ? `${widthCaption}px` : "auto",
            height: heightCaption !== undefined ? `${heightCaption}px` : "auto",
            position: "absolute",
          }}
        >
          <Image src={imageCaption} alt="" />
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
        <Image
          src={imageHighlight}
          alt=""
          width={widthHighlight !== undefined ? widthHighlight : 77}
          height={heightHighlight !== undefined ? heightHighlight : 5.2}
        />
      </div>
    </>
  );
};

export default AbdomenSelection;
