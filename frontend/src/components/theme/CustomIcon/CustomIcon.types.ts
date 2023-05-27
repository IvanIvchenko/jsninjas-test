import { TThemeColor } from 'styles/theme';
import { MouseEvent } from 'react';

export interface ISizeMap {
  [key: string]: IIconSize;
}

export interface IIconProps {
  display?: string;
  className?: string;
  color?: TThemeColor;
  size?: keyof typeof ICON_SIZE_MAP;
  name: string;
  cursorPointer?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export interface IIconSize {
  width: number;
  height: number;
}

export const ICON_SIZE_MAP = {
  smallest: 14,
  smaller: 17,
  small: 22,
  normal: 24,
  big: 26,
  bigger: 48,
  xxl: 82,
  xxxl: 144,
};
export const INITIAL_SIZE_MAP: ISizeMap = {
  earnings: {
    width: 22,
    height: 24,
  },
  creditCard: {
    width: 24,
    height: 19,
  },
  chatNofify: {
    width: 15.04,
    height: 14.48,
  },
  percapitaLong: {
    width: 114,
    height: 19,
  },
};

export type IIconSizeMap = keyof typeof ICON_SIZE_MAP;
