import { createGlobalStyle } from "styled-components";
import { getColor } from "utils/helpers/styleHelpers";

export const GlobalStyle = createGlobalStyle`  
  .ant-typography {
    a {
      color: ${getColor("black")};

      &:hover {
        color: ${getColor("black")};
      }
    }
  }

  #svg-icon-sprite {
    display: none;
  }
`;
