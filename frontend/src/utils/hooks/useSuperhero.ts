import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useCreateSuperheroMutation,
  useDeleteSuperheroMutation,
  useGetAllSuperherosMutation,
  useGetSingleSuperherosMutation,
  useUpdateSuperheroMutation,
} from "store/superhero/superhero.api";
import { selectSuperheroData } from "store/superhero/superhero.slice";
import {
  SuperheroHelper,
  SuperheroStatus,
  SuperheroStatusData,
} from "vars/types/superhero.type";

const getResultData = (mutationResult: SuperheroStatus) => {
  const { isSuccess, isError, isLoading, error } = mutationResult;
  const resultData: SuperheroStatusData = {
    isSuccess,
    isLoading,
    isError,
  };

  const errorData = error?.data;

  if (errorData?.error) {
    resultData.errorMessage = errorData?.error;
  }

  if (errorData?.Error) {
    resultData.errorMessage = errorData?.Error;
  }

  return resultData;
};

export const useSuperhero = () => {
  const getAllSuperheros = useGetAllSuperherosMutation();
  const getSingleSuperhero = useGetSingleSuperherosMutation();
  const deleteSuperhero = useDeleteSuperheroMutation();
  const updateSuperhero = useUpdateSuperheroMutation();
  const createSuperhero = useCreateSuperheroMutation();
  const superherosData = useSelector(selectSuperheroData);

  return useMemo(() => {
    const [getAllSuperherosData, getAllSuperherosStatus] = getAllSuperheros;
    const [getSingleSuperheroData, getSingleSuperheroStatus] =
      getSingleSuperhero;
    const [deleteSingleSuperheroData, deleteSingleSuperheroStatus] =
      deleteSuperhero;
    const [updateSuperheroData, updateSuperheroStatus] = updateSuperhero;
    const [createSuperheroData, createSuperheroStatus] = createSuperhero;

    const helper: SuperheroHelper = {
      getAllSuperherosData: (page: number = 0) => {
        getAllSuperherosData({ page });
      },
      getSingleSuperheroData: (id: string) => {
        getSingleSuperheroData({ id });
      },
      deleteSingleSuperheroData: (id: string) => {
        deleteSingleSuperheroData({ id });
      },
      updateSuperheroData: (data: { formData: FormData; id: string }) => {
        updateSuperheroData(data);
      },
      createSuperheroData: (superhero: FormData) => {
        createSuperheroData(superhero);
      },

      getAllSuperherosStatus: getResultData(
        getAllSuperherosStatus as SuperheroStatus
      ),
      getSingleSuperheroStatus: getResultData(
        getSingleSuperheroStatus as SuperheroStatus
      ),
      deleteSingleSuperheroStatus: getResultData(
        deleteSingleSuperheroStatus as SuperheroStatus
      ),
      updateSuperheroStatus: getResultData(
        updateSuperheroStatus as SuperheroStatus
      ),
      createSuperheroStatus: getResultData(
        createSuperheroStatus as SuperheroStatus
      ),

      superheros: superherosData.superheros,
      selectedSuperhero: superherosData.selectedSuperhero,
      superherosTotalCount: superherosData.totalCount,
    };

    return helper;
  }, [
    getAllSuperheros,
    getSingleSuperhero,
    deleteSuperhero,
    updateSuperhero,
    createSuperhero,
    superherosData,
  ]);
};
