import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import styled from "styled-components/macro";
import { getColor } from "utils/helpers/styleHelpers";
import { Image } from "antd";

export const SMainImage = styled(Image).attrs(() => ({
  height: 345,
  width: 345,
}))`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const SImage = styled(Image).attrs(() => ({
  height: 120,
  width: 120,
}))`
  border-radius: 3px;
`;

export const SInfoWrapper = styled(CustomContainer)`
  min-width: 430px;
`;

export const SCustomText = styled(CustomText)`
  position: absolute;
  left: 35%;
`;

export const SSeparatorLine = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${getColor("grey300")};
  margin-bottom: 15px;
`;
