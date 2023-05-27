import React, { FC } from "react";
import { CustomText } from "components/theme/CustomText/CustomText";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { UploadProps } from "antd";
import { SDragger, SIconFiles } from "./CustomImageUpload.style";

export const CustomImageUpload: FC<UploadProps> = (props) => (
  <SDragger
    multiple
    listType="picture"
    progress={{ showInfo: true }}
    maxCount={5}
    accept=".jpg, .jpeg, .png"
    beforeUpload={() => false}
    {...props}
  >
    <CustomContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <SIconFiles />
      <CustomText marginBottom={20}>
        Click or drag files to this area to upload
      </CustomText>
    </CustomContainer>
  </SDragger>
);
