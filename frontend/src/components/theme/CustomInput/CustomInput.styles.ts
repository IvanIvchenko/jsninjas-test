import styled from "styled-components/macro";
import { Input } from "antd";
import { getColor, getProp } from "utils/helpers/styleHelpers";
import { ICustomInputProps } from "./CustomInput.type";

export const SInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SCustomInput = styled(Input)<ICustomInputProps>`
  background: ${({ theme, bgColor }) => (bgColor ? theme[bgColor] : "white")};
  margin-bottom: ${getProp("marginBottom")}px;
  margin-top ${getProp("marginTop")}px;
  margin-left: ${getProp("marginLeft")}px;
  margin-right: ${getProp("marginRight")}px;
  border: 1px solid ${getColor("grey")};
  border-radius: 6px !important;
  height: ${getProp("height")}px;
  width: 100%;
  font-size: 16px !important;

  :hover, :focus, :active {
    border: 1px solid ${getColor("grey")} !important;
    background: ${({ theme, bgColor }) => (bgColor ? theme[bgColor] : "white")};
  }

  .ant-input-input-wrap {
    input {
      margin-top: 4px;
    }
  }

  .ant-input {
    color: ${getColor("grey300")} !important;
    font-size: 16px !important;
  }

  .ant-input-prefix {
    margin-top: 10px;
    margin-right: 10px;
  }
    :disabled {
      background: ${getColor("grey300")};
    }
`;
