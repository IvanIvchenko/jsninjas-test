import React from 'react';
import { SCustomText, SCustomTextContainer } from './CustomText.styles';
import { ICustomText } from './CustomText.types';

export const CustomText: React.FC<ICustomText> = ({
  children,
  fontWeight = 'normal',
  size = 'normal',
  textColor = 'black',
  icon,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  className = '',
  innerClassName = '',
  textAlign = 'left',
  cursorPointer = false,
  display,
  onClick,
}) => (
  <SCustomTextContainer className={`custom-text ${className}`} display={display} onClick={onClick}>
    {icon ? <div style={{ flexGrow: 1 }}>{icon}</div> : null}
    <SCustomText
      fontWeight={fontWeight}
      size={size}
      color={textColor}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      textAlign={textAlign}
      className={`custom-text-inner ${innerClassName}`}
      display={display}
      cursorPointer={cursorPointer}
      onClick={onClick}
    >
      {children}
    </SCustomText>
  </SCustomTextContainer>
);
