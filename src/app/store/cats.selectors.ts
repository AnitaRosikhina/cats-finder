import { CatState } from "./cats.reducer";
import { createSelector } from "@ngrx/store";

export interface AppState {
  cats: CatState;
}

export const selectFeatureCats = (state: AppState) => state.cats;

export const selectCatsList = createSelector(
  selectFeatureCats,
  (state: CatState) => state.list
);

export const selectCatsBreeds = createSelector(
  selectFeatureCats,
  (state: CatState) => state.breeds
);
