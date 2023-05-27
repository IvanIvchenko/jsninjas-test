import { TThemeColor } from 'styles/theme';

export type TTextSizeProp = 'smaller' | 'small' | 'normal' | 'big' | 'bigger' | 'xl' | 'xxl' | 'biggest';
export type TTextWeightProp = 'normal' | 'strong' | 'stronger' | 'strongest';
export type TTextMarginProp = 'none' | 'small' | 'normal' | 'big' | 'bigger';
export type TTextAlignProp = 'left' | 'center' | 'right';
export type TDisplayProp = 'flex' | 'inline';

export interface ICustomText {
  children: React.ReactNode;
  icon?: JSX.Element;
  iconSkeletonColor?: string;
  fontWeight?: TTextWeightProp;
  size?: TTextSizeProp;
  textColor?: TThemeColor;
  style?: React.CSSProperties;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  textAlign?: TTextAlignProp;
  className?: string;
  innerClassName?: string;
  display?: TDisplayProp;
  lineHeight?: number | string;
  cursorPointer?: boolean;
  onClick?: () => void;
}

export interface ICustomTextText {
  fontWeight: TTextWeightProp;
  size: TTextSizeProp;
  color: TThemeColor;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  textAlign?: TTextAlignProp;
  display?: TDisplayProp;
  lineHeight?: number | string;
  cursorPointer?: boolean;
  onClick?: () => void;
}

export interface ICustomTextSkeleton {
  width: TTextSizeProp;
}

export interface ISCustomTextContainerProps {
  display?: TDisplayProp;
}
