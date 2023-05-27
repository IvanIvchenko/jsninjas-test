import { CustomModal } from "components/theme/CustomModal/CustomModal";
import React, { FC, useEffect } from "react";
import { useSuperhero } from "utils/hooks/useSuperhero";
import { CustomText } from "components/theme/CustomText/CustomText";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { DeleteModalProps } from "./DeleteModal.type";

export const DeleteModal: FC<DeleteModalProps> = ({
  isVisible,
  onClose,
  superheroId,
}) => {
  const {
    deleteSingleSuperheroData,
    deleteSingleSuperheroStatus,
    getAllSuperherosData,
  } = useSuperhero();

  useEffect(() => {
    if (deleteSingleSuperheroStatus.isSuccess && isVisible) {
      getAllSuperherosData();
      onClose();
    }
  }, [deleteSingleSuperheroStatus]);

  return (
    <CustomModal
      open={isVisible}
      topPosition={30}
      onCancel={onClose}
      destroyOnClose
      closable
    >
      <CustomContainer
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <CustomText
          fontWeight="strong"
          size="big"
          textAlign="center"
          marginBottom={25}
          marginTop={50}
        >
          You shure you want to delete this superhero?
        </CustomText>
        <CustomButton
          bgColor="blue"
          borderColor="blue"
          textColor="white"
          marginBottom={50}
          onClick={() => deleteSingleSuperheroData(superheroId)}
        >
          Confirm
        </CustomButton>
      </CustomContainer>
    </CustomModal>
  );
};
