import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, CategorysResponse} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http: HttpClient) { }

  allCategories(): Observable<CategorysResponse>{
    return this.http.get<CategorysResponse>('assets/categories.json')
  }


}
