import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Amount, ResponseAllAmounts} from "../interfaces/interfaces";
import {environment} from "../../../environments/environment";
import {delay, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  private spents: Amount[] = [];
  private entrances: Amount[] = [];

  constructor(private http: HttpClient,
) { }

  getSpentsAndEntrancesMinDay(): Observable<ResponseAllAmounts> {
    let idUser = localStorage.getItem('uid') || '';
    let url = `${environment.endpoint}/app/all-amounts/${idUser}`;
    console.log(url);
    return this.http.get<ResponseAllAmounts>(url);
  }

  getSpentsAndEntrancesMaxDay() {

  }


  getSpentsFilterMinDay(graphic: boolean) {

  }

  getSpentsFilterMaxDay(graphic: boolean) {

  }

  getEntrancesFilterMinDay(graphic: boolean) {

  }

  getEntrancesFilterMaxDay(graphic: boolean) {

  }

  getEntrancesRangeDays(graphic: boolean) {

  }

  getSpentsRangeDays(graphic: boolean) {

  }


}

