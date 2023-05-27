import React, { FC } from "react";
import { SCustomInput, SInputContainer } from "./CustomInput.styles";
import { ICustomInputProps } from "./CustomInput.type";

export const CustomInput: FC<ICustomInputProps> = ({
  inputTheme = "default",
  bgColor,
  className = "",
  bordered = false,
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  height = 30,
  ...props
}) => (
  <SInputContainer>
    <SCustomInput
      className={className}
      bgColor={bgColor}
      inputTheme={inputTheme}
      bordered={bordered}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      height={height}
      {...props}
    />
  </SInputContainer>
);
