import { CustomBlock } from "components/theme/CustomBlock/CustomBlock";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSuperhero } from "utils/hooks/useSuperhero";
import { SuperheroType } from "vars/types/superhero.type";
import {
  SCustomText,
  SMainImage,
  SImage,
  SInfoWrapper,
  SSeparatorLine,
} from "./DetailsPage.style";

export const DetailsPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  const {
    getSingleSuperheroData,
    getSingleSuperheroStatus,
    selectedSuperhero,
  } = useSuperhero();

  const [superhero, setSuperhero] = useState<SuperheroType | null>(null);

  useEffect(() => {
    getSingleSuperheroData(id || "");
  }, []);

  useEffect(() => {
    if (getSingleSuperheroStatus?.isSuccess) {
      setSuperhero(selectedSuperhero);
    }
  }, [getSingleSuperheroStatus]);

  return (
    <>
      <CustomBlock
        minHeight="507px"
        marginBottom={33}
        paddingBottom={20}
        paddingTop={20}
        paddingLeft={20}
        paddingRight={20}
      >
        <CustomContainer gap={22}>
          <CustomBlock minHeight="380px">
            <SMainImage src={superhero?.images[0]} alt={superhero?.images[0]} />
          </CustomBlock>
          <SInfoWrapper flexDirection="column" width="stretch">
            <CustomText marginBottom={10} size="xl" fontWeight="stronger">
              {superhero?.nickname}
            </CustomText>
            <CustomText marginBottom={10} size="bigger" fontWeight="stronger">
              {superhero?.real_name}
            </CustomText>
            <CustomContainer marginBottom={15} width="100%">
              <CustomText textColor="grey500">Superpowers:</CustomText>
              <SCustomText textColor="grey600">
                {superhero?.superpowers}
              </SCustomText>
            </CustomContainer>
            <CustomContainer marginBottom={15} width="100%">
              <CustomText textColor="grey500">Catch phrase:</CustomText>
              <SCustomText textColor="grey600">{`"${superhero?.catch_phrase}"`}</SCustomText>
            </CustomContainer>
            <SSeparatorLine />
            <CustomContainer marginBottom={15} gap={10} width="100%">
              {superhero?.images.slice(1).map((image) => (
                <SImage src={image} alt={image} />
              ))}
            </CustomContainer>
          </SInfoWrapper>
        </CustomContainer>
      </CustomBlock>
      <CustomBlock minHeight="285px" marginBottom={140}>
        <CustomText textColor="grey600">
          {superhero?.origin_description}
        </CustomText>
      </CustomBlock>
    </>
  );
};
