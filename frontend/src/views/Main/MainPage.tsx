import React, { useState, FC, useEffect, SetStateAction } from "react";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { useSuperhero } from "utils/hooks/useSuperhero";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { SuperheroShortType } from "vars/types/superhero.type";
import { Pagination, PaginationProps } from "antd";
import { SuperheroBlock } from "components/general/SuperheroBlock/SuperheroBlock";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "vars/consts/ROUTES";
import { SSuperherosWrapper } from "./MainPage.styles";
import { EditModal } from "./EditModal/EditModal";
import { CreateModal } from "./CreateModal/CreateModal";
import { DeleteModal } from "./DeleteModal/DeleteModal";

export const MainPage: FC = () => {
  const navigate = useNavigate();
  const {
    superheros: fetchedSuperheros,
    superherosTotalCount,
    getAllSuperherosData,
    getAllSuperherosStatus,
  } = useSuperhero();

  const [superheros, setSuperheros] = useState<SuperheroShortType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(10);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedSuperheroId, setSelectedSuperheroId] = useState("");

  const getPageNumber = () => {
    const pageCalc = superherosTotalCount / 5;
    return pageCalc > 1 ? Math.ceil(pageCalc) * 10 : 10;
  };

  useEffect(() => {
    getAllSuperherosData();
  }, []);

  useEffect(() => {
    if (getAllSuperherosStatus?.isSuccess) {
      setSuperheros(fetchedSuperheros);
      setPagesNumber(getPageNumber());
    }
  }, [getAllSuperherosStatus]);

  const handlePageChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
    getAllSuperherosData(page);
  };

  const handleSuperheroCreate = () => {
    setIsCreateModalVisible(true);
  };

  const handleSuperheroEdit = (superheroId: string) => {
    setSelectedSuperheroId(superheroId);
    setIsEditModalVisible(true);
  };

  const handleSuperheroDelete = (superheroId: string) => {
    setSelectedSuperheroId(superheroId);
    setIsDeleteModalVisible(true);
  };

  const handleModalClose = (
    handler: (value: SetStateAction<boolean>) => void
  ) => {
    setSelectedSuperheroId("");
    handler(false);
  };

  return (
    <>
      <CustomContainer
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        gap={30}
        marginBottom={80}
      >
        <CustomContainer width="100%" justifyContent="center" marginBottom={10}>
          <CustomButton onClick={() => handleSuperheroCreate()}>
            Create Superhero
          </CustomButton>
        </CustomContainer>
        <SSuperherosWrapper>
          {superheros.map((superhero) => (
            <SuperheroBlock
              superhero={superhero}
              onDelete={handleSuperheroDelete}
              onEdit={handleSuperheroEdit}
              onClick={() => navigate(`${ROUTES.details.path}/${superhero.id}`)}
            />
          ))}
        </SSuperherosWrapper>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          onChange={handlePageChange}
          total={pagesNumber}
        />
      </CustomContainer>
      <EditModal
        isVisible={isEditModalVisible}
        onClose={() => handleModalClose(setIsEditModalVisible)}
        superheroId={selectedSuperheroId}
      />
      <CreateModal
        isVisible={isCreateModalVisible}
        onClose={() => handleModalClose(setIsCreateModalVisible)}
      />
      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={() => handleModalClose(setIsDeleteModalVisible)}
        superheroId={selectedSuperheroId}
      />
    </>
  );
};
