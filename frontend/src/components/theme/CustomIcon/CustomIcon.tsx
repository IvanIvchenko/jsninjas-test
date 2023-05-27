import React from "react";
import { theme } from "styles/theme";
import {
  ICON_SIZE_MAP,
  IIconProps,
  INITIAL_SIZE_MAP,
} from "./CustomIcon.types";

export const CustomIcon: React.FC<IIconProps> = ({
  display = "block",
  className,
  name,
  size = "normal",
  color = "white",
  cursorPointer = false,
  onClick = () => {},
}) => {
  const sizeVal = ICON_SIZE_MAP[size];
  const initialWidth = INITIAL_SIZE_MAP[name]?.width ?? sizeVal;
  const initialHeight = INITIAL_SIZE_MAP[name]?.height ?? sizeVal;
  const widthRatio = sizeVal / initialWidth;
  const heightRatio = sizeVal / initialHeight;
  const classNameStr = `svg-icon icon-${name} ${className || ""}`;

  return (
    <svg
      display={display}
      color={theme[color]}
      className={classNameStr}
      viewBox={`0 0 ${initialWidth} ${initialHeight}`}
      width={initialWidth * widthRatio}
      height={initialHeight * heightRatio}
      style={{ cursor: cursorPointer ? "pointer" : "default" }}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};
