import { Component, OnInit } from '@angular/core';
import { CatsService } from "./services/cats.service";
import { Observable } from "rxjs";
import { Cat } from "./interfaces/cats";
import { Store } from "@ngrx/store";
import { GetCatsBreedsAction, GetCatsListAction } from "./store/cats.actions";
import { selectCatsBreeds, selectCatsList } from "./store/cats.selectors";
import { CatState } from "./store/cats.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // @ts-ignore
  cats$: Observable<Cat.Entity[] | null>  = this.store.select(selectCatsList);
  // @ts-ignore
  breeds$: Observable<Cat.Breed[] | null>  = this.store.select(selectCatsBreeds);

  constructor(
    private catsService: CatsService,
    private store: Store<CatState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetCatsBreedsAction());
  }

  filter(filters: { breed?: string; limit?: string }): void {
    this.store.dispatch(GetCatsListAction({filters}));
  }
}
