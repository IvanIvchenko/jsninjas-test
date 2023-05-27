import styled from "styled-components/macro";
import { Layout as LayoutLibrary } from "antd";
import { getColor } from "utils/helpers/styleHelpers";

export const SLayout = styled(LayoutLibrary)`
  min-height: 100vh;
  width: 100%;
  background: ${getColor("grey100")};
  position: relative;
`;

export const SMainLayoutHeaderWrapper = styled.div``;

export const SLayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const SLayoutContent = styled(LayoutLibrary.Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 0 auto;
  padding: 0 7%;
`;
