import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
  GetCatsBreedsAction, GetCatsBreedsErrorAction, GetCatsBreedsSuccessAction,
  GetCatsListAction,
  GetCatsListErrorAction,
  GetCatsListSuccessAction
} from "./cats.actions";
import { CatsService } from "../services/cats.service";

@Injectable()
export class CatsEffects {

  getCatsList$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetCatsListAction),
      switchMap((action) => this.catsService.getCatsList(action?.filters)
        .pipe(
          map((res) => GetCatsListSuccessAction({data: res})),
          catchError(() => of(GetCatsListErrorAction()))
        )),
    )
  );

  getCatsBreeds$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetCatsBreedsAction),
      switchMap((action) => this.catsService.getBreedsList()
        .pipe(
          map((res) => GetCatsBreedsSuccessAction({data: res})),
          catchError(() => of(GetCatsBreedsErrorAction()))
        )),
    )
  );

  constructor(
    private actions$: Actions,
    private catsService: CatsService
  ) {}
}
