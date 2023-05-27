import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomIcon } from "components/theme/CustomIcon/CustomIcon";
import { CustomText } from "components/theme/CustomText/CustomText";
import styled from "styled-components/macro";

export const SIconDelete = styled(CustomIcon).attrs(() => ({
  name: "delete",
  color: "blue",
  cursorPointer: true,
  size: "small",
}))`
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const SIconEdit = styled(CustomIcon).attrs(() => ({
  name: "edit",
  color: "blue",
  cursorPointer: true,
  size: "small",
}))`
  position: absolute;
  top: 30px;
  right: 10px;
`;

export const SCustomContainer = styled(CustomContainer).attrs(() => ({
  alignItems: "center",
  gap: 12,
  marginLeft: -10,
  marginTop: -10,
  marginBottom: -10,
}))`
  border-radius: 6px;
`;

export const SFieldsWrapper = styled(CustomContainer)`
  width: 200px;
`;

export const SCustomText = styled(CustomText)`
  position: absolute;
  left: 35%;
`;

export const SImageContainer = styled.div`
  width: 280px;
  height: 210px;
  flex: 0 0 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0 0 0;
`;

export const SImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
