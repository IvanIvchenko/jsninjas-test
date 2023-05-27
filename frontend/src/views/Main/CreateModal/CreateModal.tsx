import React, { FC, useEffect } from "react";
import { useSuperhero } from "utils/hooks/useSuperhero";
import { Form } from "antd";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import { CustomInput } from "components/theme/CustomInput/CustomInput";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { SuperheroForm } from "vars/types/superhero.type";
import { CustomImageUpload } from "components/theme/CustomImageUpload/CustomImageUpload";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { CreateModalProps } from "./CreateModal.type";
import { SCustomMoodal, SForm } from "./CreateModal.style";

export const CreateModal: FC<CreateModalProps> = ({ isVisible, onClose }) => {
  const [form] = Form.useForm<SuperheroForm>();

  const { createSuperheroData, getAllSuperherosData, createSuperheroStatus } =
    useSuperhero();

  useEffect(() => {
    if (createSuperheroStatus.isSuccess && isVisible) {
      getAllSuperherosData();
      onClose();
    }
  }, [createSuperheroStatus]);

  const getFile = (e: UploadChangeParam<UploadFile>) => e.fileList;

  const handleFormCompletion = (values: SuperheroForm) => {
    const formData = new FormData();
    formData.append("nickname", values.nickname);
    formData.append("real_name", values.real_name);
    formData.append("catch_phrase", values.catch_phrase);
    formData.append("origin_description", values.origin_description);
    formData.append("superpowers", values.superpowers);
    values.images.forEach((image) =>
      formData.append("image", image?.originFileObj)
    );
    createSuperheroData(formData);
  };

  return (
    <SCustomMoodal
      open={isVisible}
      topPosition={30}
      onCancel={onClose}
      destroyOnClose
      closable
    >
      <SForm
        autoComplete="off"
        layout="vertical"
        form={form}
        requiredMark={false}
        onFinish={(values) => handleFormCompletion(values as SuperheroForm)}
        initialValues={{
          nickname: "",
          real_name: "",
          origin_description: "",
          superpowers: "",
          catch_phrase: "",
          images: [],
        }}
      >
        <Form.Item
          name="nickname"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input nickname!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            marginTop={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Nickname:
            </CustomText>
            <CustomInput name="nickname" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="real_name"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input real name!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Address:
            </CustomText>
            <CustomInput name="real_name" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="origin_description"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input origin description!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Origin description:
            </CustomText>
            <CustomInput name="origin_description" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="superpowers"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input origin superpowers!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Superpowers:
            </CustomText>
            <CustomInput name="superpowers" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="catch_phrase"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input catch phrase!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Catch phrase:
            </CustomText>
            <CustomInput name="catch_phrase" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="images"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please upload at least one image!",
            },
          ]}
          getValueFromEvent={getFile}
          noStyle
        >
          <CustomImageUpload />
        </Form.Item>
        <Form.Item noStyle>
          <CustomContainer width="100%" justifyContent="center" marginTop={15}>
            <CustomButton
              type="primary"
              htmlType="submit"
              bgColor="blue"
              borderColor="blue"
              textColor="white"
              marginBottom={50}
              disabled={false}
            >
              Confirm
            </CustomButton>
          </CustomContainer>
        </Form.Item>
      </SForm>
    </SCustomMoodal>
  );
};
