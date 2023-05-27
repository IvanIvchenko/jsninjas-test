import React, { FC } from "react";
import { CustomBlock } from "components/theme/CustomBlock/CustomBlock";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import {
  SCustomContainer,
  SIconDelete,
  SIconEdit,
  SImage,
  SImageContainer,
} from "./SuperheroBlock.style";
import { SuperheroBlockProps } from "./SuperheroBlock.type";

export const SuperheroBlock: FC<SuperheroBlockProps> = ({
  superhero,
  onDelete,
  onEdit,
  onClick,
}) => (
  <CustomBlock
    marginBottom={8}
    paddingBottom={10}
    paddingLeft={10}
    paddingRight={85}
    paddingTop={10}
    key={superhero.id}
  >
    <SIconDelete onClick={() => onDelete(superhero.id)} />
    <SIconEdit onClick={() => onEdit(superhero.id)} />
    <SCustomContainer>
      <SImageContainer>
        <SImage src={superhero.images[0]} alt={superhero.images[0]} />
      </SImageContainer>
      <CustomContainer flexDirection="column" alignItems="flex-start">
        <CustomText size="big" fontWeight="strong" marginBottom={16}>
          {superhero.nickname}
        </CustomText>
        <CustomText
          textColor="blue"
          size="big"
          fontWeight="strong"
          onClick={onClick}
          cursorPointer
        >
          View details
        </CustomText>
      </CustomContainer>
    </SCustomContainer>
  </CustomBlock>
);
