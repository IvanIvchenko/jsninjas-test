import React, { FC, useEffect } from "react";
import { useSuperhero } from "utils/hooks/useSuperhero";
import { Form } from "antd";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import { CustomInput } from "components/theme/CustomInput/CustomInput";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { SuperheroForm } from "vars/types/superhero.type";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { CustomImageUpload } from "components/theme/CustomImageUpload/CustomImageUpload";
import { EditModalProps } from "./EditModal.type";
import { SCustomMoodal, SForm } from "./EditModal.style";

export const EditModal: FC<EditModalProps> = ({
  isVisible,
  onClose,
  superheroId,
}) => {
  const [form] = Form.useForm();

  const {
    getAllSuperherosData,
    getSingleSuperheroData,
    getSingleSuperheroStatus,
    updateSuperheroData,
    updateSuperheroStatus,
    selectedSuperhero,
  } = useSuperhero();

  useEffect(() => {
    if (isVisible) {
      getSingleSuperheroData(superheroId);
    }
  }, [isVisible]);

  useEffect(() => {
    if (getSingleSuperheroStatus.isSuccess) {
      form.resetFields();
    }
  }, [getSingleSuperheroStatus]);

  useEffect(() => {
    if (updateSuperheroStatus.isSuccess && isVisible) {
      getAllSuperherosData();
      onClose();
    }
  }, [updateSuperheroStatus]);

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
    updateSuperheroData({ id: selectedSuperhero?.id || "", formData });
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
          nickname: selectedSuperhero?.nickname,
          real_name: selectedSuperhero?.real_name,
          origin_description: selectedSuperhero?.origin_description,
          superpowers: selectedSuperhero?.superpowers,
          catch_phrase: selectedSuperhero?.catch_phrase,
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
        <Form.Item name="real_name" noStyle>
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Real name:
            </CustomText>
            <CustomInput name="real_name" />
          </CustomContainer>
        </Form.Item>
        <Form.Item name="origin_description" noStyle>
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
        <Form.Item name="superpowers" noStyle>
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
        <Form.Item name="catch_phrase" noStyle>
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Catch phrase::
            </CustomText>
            <CustomInput name="catch_phrase" />
          </CustomContainer>
        </Form.Item>
        <Form.Item name="images" getValueFromEvent={getFile} noStyle>
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
