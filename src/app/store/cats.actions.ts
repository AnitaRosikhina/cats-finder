import { createAction, props } from "@ngrx/store";
import { Cat } from "../interfaces/cats";

export const GetCatsListAction = createAction(
  '[Cats] Get cats list',
  props<{ filters?: { breed?: string; limit?: string } }>()
);

export const GetCatsListSuccessAction = createAction(
  '[Cats] Get cats list Success',
  props<{ data: Cat.Entity[] }>()
);

export const GetCatsListErrorAction = createAction(
  '[Cats] Get cats list Error',
);


export const GetCatsBreedsAction = createAction(
  '[Cats] Get cats breeds',
);

export const GetCatsBreedsSuccessAction = createAction(
  '[Cats] Get cats breeds Success',
  props<{ data: Cat.Breed[] }>()
);

export const GetCatsBreedsErrorAction = createAction(
  '[Cats] Get cats breeds Error',
);
