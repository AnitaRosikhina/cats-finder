import { createReducer, on } from "@ngrx/store";
import {
  GetCatsBreedsErrorAction,
  GetCatsBreedsSuccessAction,
  GetCatsListErrorAction,
  GetCatsListSuccessAction
} from "./cats.actions";
import { Cat } from "../interfaces/cats";

export interface CatState {
  list: Cat.Entity[] | null;
  breeds: Cat.Breed[] | null;
}

export const initialState: CatState = {
  list: null,
  breeds: null
};

export const catsReducer = createReducer(
  initialState,
  on(GetCatsListSuccessAction, (state, {data}) => ({
    ...state,
    list: data
  })),
  on(GetCatsListErrorAction, (state) => ({
    ...state,
    list: null
  })),
  on(GetCatsBreedsSuccessAction, (state, {data}) => ({
    ...state,
    breeds: data
  })),
  on(GetCatsBreedsErrorAction, (state) => ({
    ...state,
    breeds: null
  })),
);
