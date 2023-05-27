export interface ICustomBlockInputProps {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  children?: React.ReactNode;
  width?: string;
  onClick?: () => void;
  cursorPointer?: boolean;
  minHeight?: string;
}