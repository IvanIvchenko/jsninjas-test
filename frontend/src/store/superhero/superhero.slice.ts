import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SuperheroShortType, SuperheroType } from "vars/types/superhero.type";
import { RootState } from "store/store";
import { superheroApi } from "./superhero.api";

interface SuperheroState {
  superheros: SuperheroShortType[];
  selectedSuperhero: SuperheroType | null;
  totalCount: number;
}

const initialSuperheroState: SuperheroState = {
  superheros: [],
  selectedSuperhero: null,
  totalCount: 0,
};

export const superheroSlice = createSlice({
  name: "superhero",
  initialState: initialSuperheroState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        superheroApi.endpoints.getAllSuperheros.matchFulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<{
            apiResponse: SuperheroShortType[];
            totalCount: number;
          }>
        ) => {
          state.superheros = payload.apiResponse;
          state.totalCount = payload.totalCount;
        }
      )
      .addMatcher(
        superheroApi.endpoints.getSingleSuperheros.matchFulfilled,
        (state, { payload }: PayloadAction<SuperheroType>) => {
          state.selectedSuperhero = payload;
        }
      );
  },
});

export const selectSuperheroData = (state: RootState) => state.superhero;
