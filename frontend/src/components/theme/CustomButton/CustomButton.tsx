import React from "react";
import { SCustomButton, BtnLinkWrapper } from "./CustomButton.styles";
import { ICustomButtonProps } from "./CustomButton.types";

export const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  marginBottom = 0,
  marginTop = 0,
  marginRight = 0,
  marginLeft = 0,
  uppercase = false,
  disabled = false,
  fluid = false,
  cursorPointer = true,
  type = "primary",
  textColor,
  bgColor = "white",
  borderColor = "grey300",
  linkTo = "",
  buttonSize = "average",
  className = "",
  ...props
}) => {
  const getTextColor = () => {
    if (type === "default" && !textColor) {
      return "grey300";
    }

    if (textColor) {
      return textColor;
    }

    return "black";
  };

  const BtnComponent = (
    <SCustomButton
      {...props}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      uppercase={uppercase}
      disabled={disabled}
      fluid={fluid}
      cursorPointer={cursorPointer}
      buttonSize={buttonSize}
      textColor={getTextColor()}
      bgColor={bgColor}
      borderColor={borderColor}
      type={type}
      className={`custom-btn ${className || ""}`}
    >
      {children}
    </SCustomButton>
  );

  return linkTo ? (
    <BtnLinkWrapper
      className="btn-link-wrapper"
      to={linkTo}
      marginTop={marginTop}
      marginBottom={marginBottom}
      fluid={fluid}
    >
      {BtnComponent}
    </BtnLinkWrapper>
  ) : (
    BtnComponent
  );
};
