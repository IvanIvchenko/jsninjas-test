import React from 'react';
import { SContainer } from './CustomContainer.styles';
import { ICustomContainerProps } from './CustomContainer.types';

export const CustomContainer: React.FC<ICustomContainerProps> = ({
  children,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexDirection = 'row',
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingTop = 0,
  paddingRight = 0,
  gap = 'unset',
  width = 'auto',
  onClick,
  cursorPointer = false,
  minHeight = 'unset',
  overflowY = 'unset',
  horizontalScroll = false,
  ...props
}) => (
  <SContainer
    {...props}
    alignItems={alignItems}
    marginBottom={marginBottom}
    marginTop={marginTop}
    justifyContent={justifyContent}
    gap={gap}
    flexDirection={flexDirection}
    width={width}
    marginLeft={marginLeft}
    marginRight={marginRight}
    paddingTop={paddingTop}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingBottom={paddingBottom}
    onClick={onClick}
    cursorPointer={cursorPointer}
    minHeight={minHeight}
    overflowY={overflowY}
    horizontalScroll={horizontalScroll}
  >
    {children}
  </SContainer>
);
