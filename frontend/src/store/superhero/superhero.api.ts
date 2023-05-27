import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { SuperheroShortType, SuperheroType } from "vars/types/superhero.type";

export const superheroApi = createApi({
  reducerPath: "superheroApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SUPERHEROES_API}/superhero`,
  }),
  endpoints: (builder) => ({
    getAllSuperheros: builder.mutation<
      { apiResponse: SuperheroShortType[]; totalCount: number },
      { page: number }
    >({
      query: ({ page }) => ({
        url: `/?page=${page}`,
      }),
      transformResponse(apiResponse: SuperheroShortType[], meta) {
        return {
          apiResponse,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
        };
      },
    }),
    getSingleSuperheros: builder.mutation<SuperheroType, { id: string }>({
      query: (credentials) => ({
        url: `/${credentials.id}`,
      }),
    }),
    createSuperhero: builder.mutation<SuperheroType, FormData>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
    updateSuperhero: builder.mutation<
      SuperheroType,
      { formData: FormData; id: string }
    >({
      query: (data) => ({
        url: `/${data.id}`,
        method: "PUT",
        body: data.formData,
        formData: true,
      }),
    }),
    deleteSuperhero: builder.mutation<{}, { id: string }>({
      query: (credentials) => ({
        url: `/${credentials.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllSuperherosMutation,
  useCreateSuperheroMutation,
  useDeleteSuperheroMutation,
  useGetSingleSuperherosMutation,
  useUpdateSuperheroMutation,
} = superheroApi;
