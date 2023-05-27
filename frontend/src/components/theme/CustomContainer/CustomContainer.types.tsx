import React from 'react';

export interface ICustomContainerProps {
  alignItems?: 'center' | 'start' | 'flex-start' | 'flex-end' | 'stretch' | 'inherit';
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end' | 'center';
  flexDirection?: 'row' | 'column';
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  gap?: number | string;
  children?: React.ReactNode;
  width?: string;
  onClick?: () => void;
  cursorPointer?: boolean;
  minHeight?: string;
  horizontalScroll?: boolean;
  className?: string;
  overflowY?: string;
}
