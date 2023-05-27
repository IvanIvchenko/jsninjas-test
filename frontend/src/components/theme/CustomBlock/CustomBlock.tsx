import React from 'react'
import { SCustomBlock } from './CustomBlock.styles'
import { ICustomBlockInputProps } from './CustomBlock.types'

export const CustomBlock: React.FC<ICustomBlockInputProps> = ({
  children,
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  paddingBottom = 12,
  paddingLeft = 12,
  paddingTop = 12,
  paddingRight = 12,
  width = '',
  onClick,
  cursorPointer = false,
  minHeight = 'unset',
  ...props
}) => (
  <SCustomBlock
    {...props}
    marginBottom={marginBottom}
    marginTop={marginTop}
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
  >
    {children}
  </SCustomBlock>
);