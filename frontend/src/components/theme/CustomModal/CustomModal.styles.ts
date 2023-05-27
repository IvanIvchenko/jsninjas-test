import { Modal } from "antd";
import styled from "styled-components";
import { CustomIcon } from "components/theme/CustomIcon/CustomIcon";

export const SModal = styled(Modal)`
  position: absolute;
  height: 50%;
  top: 0%;
  left: 35%;
  .ant-modal-content {
    border-radius: 20px;
    opacity: 1;
    margin: 0 12px;
    box-shadow: none;
    padding: 15px;
  }

  .ant-modal-body {
    ::-webkit-scrollbar {
      display: none !important;
    }

    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
  }

  .ant-modal-wrap {
    top: 48% !important;
  }
`;

export const SIconClose = styled(CustomIcon).attrs((props) => ({
  name: "close",
  color: "blue",
  size: "small",
  cursorPointer: true,
  display: props.display,
}))`
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const SMaskStyle: React.CSSProperties = {
  background: "rgba(53, 49, 49, 0.8)",
  backdropFilter: "blur(4px)",
};

export const SBodyStyle: React.CSSProperties = {
  overflowY: "auto",
  maxHeight: "calc(100vh - 150px)",
  padding: 0,
};
