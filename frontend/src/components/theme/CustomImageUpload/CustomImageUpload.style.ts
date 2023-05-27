import { Upload } from "antd";
import styled from "styled-components/macro";
import { CustomIcon } from "components/theme/CustomIcon/CustomIcon";

const { Dragger } = Upload;

export const SDragger = styled(Dragger)`
  width: 100%;
  height: 50px;
  position: relative;
`;

export const SIconFiles = styled(CustomIcon).attrs(() => ({
  name: "files",
  color: "blue",
  cursorPointer: true,
  size: "normal",
}))`
  position: relative;
  margin-bottom: 20px;
`;
