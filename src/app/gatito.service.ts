import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GatitoService {

  constructor(
    private http:HttpClient
  ) { }

  fetchUrl = 'https://catfact.ninja/breeds';
  getKittens(){ 
    return this.http.get<any>(this.fetchUrl);
  }
}
