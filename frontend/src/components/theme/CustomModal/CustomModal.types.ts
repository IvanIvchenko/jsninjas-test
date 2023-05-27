import { ModalProps } from "antd";
import { ReactNode } from "react";

export interface ICustomModalProps extends ModalProps {
  display?: string;
  children?: ReactNode;
  maskStyle?: React.CSSProperties;
  bodyStlye?: React.CSSProperties;
  closeIcon?: React.ReactNode;
  centered?: boolean;
  destroyOnClose?: boolean;
  footer?: React.ReactNode;
  topPosition?: number;
}
