import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../interfaces/cats";

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiKey = '7bfd8f7c-fd01-448f-a66f-690c0aa4f473';

  constructor(private httpClient: HttpClient) {}

  getCatsList(filters?: { breed?: string; limit?: string }): Observable<Cat.Entity[]> {
    return this.httpClient.get<Cat.Entity[]>('https://api.thecatapi.com/v1/images/search', {
      params: {...filters},
      headers: {
        'x-api-key': this.apiKey
      }
    })
  }

  getBreedsList(): Observable<Cat.Breed[]> {
    return this.httpClient.get<Cat.Breed[]>('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': this.apiKey
      }
    })
  }
}
