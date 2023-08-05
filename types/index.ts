import { StaticImageData } from "next/image";

export interface AbdomenSelectionProps {
  imageHighlight: StaticImageData;
  imageCaption: StaticImageData;
  topPosHighlight: string;
  topPosCaption: string;
  leftPosHighlight: string;
  leftPosCaption: string;
  widthHighlight?: number;
  widthCaption?: number;
  heightHighlight?: number;
  heightCaption?: number;
}
