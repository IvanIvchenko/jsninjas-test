import { TThemeColor } from "styles/theme";
import {
  FlattenInterpolation,
  DefaultTheme,
  ThemedStyledProps,
  FlattenSimpleInterpolation,
  css,
} from "styled-components";

type TIfPropVal = FlattenInterpolation<ThemedStyledProps<any, DefaultTheme>>;

export const getColor = (colorName: TThemeColor) => (props: any) =>
  props.theme[colorName];

export const getProp =
  (propName: string, fallbackVal: string | number = "") =>
  (props: any) =>
    props[propName] || fallbackVal;

export const ifProp =
  (
    propFlagName: string,
    ifVal: string | number | TIfPropVal,
    elseVal: string | number | TIfPropVal = ""
  ) =>
  (props: any) =>
    props[propFlagName] ? ifVal : elseVal;

export const mediaUpTo = (
  upTo: number,
  cssItem: string | FlattenSimpleInterpolation
) => css`
  @media only screen and (max-width: ${upTo}px) {
    ${cssItem};
  }
`;
export const getColorByProp =
  (propName: string, fallback: string = "none") =>
  (props: any) =>
    props.theme[props[propName]] || fallback;

export const getGridColumnNumber = (width: number) => {
  if (width < 1070) return 14;
  if (width < 1300) return 10;
  if (width < 1600) return 8;
  return 6;
};
