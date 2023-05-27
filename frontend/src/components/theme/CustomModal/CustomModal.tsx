import React from "react";
import {
  SBodyStyle,
  SMaskStyle,
  SIconClose,
  SModal,
} from "./CustomModal.styles";
import { ICustomModalProps } from "./CustomModal.types";

export const CustomModal: React.FC<ICustomModalProps> = ({
  display = "block",
  children,
  maskStyle,
  bodyStyle,
  closeIcon,
  centered = true,
  destroyOnClose = true,
  footer = null,
  topPosition = 15,
  ...props
}) => (
  <SModal
    {...props}
    maskStyle={SMaskStyle}
    bodyStyle={SBodyStyle}
    closeIcon={closeIcon || <SIconClose display={display} />}
    centered={centered}
    destroyOnClose={destroyOnClose}
    footer={footer}
    style={{ top: `${topPosition}%` }}
  >
    {children}
  </SModal>
);
