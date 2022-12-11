import { Injectable } from '@angular/core';
import {Amount} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class BalanceService{
  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  get entrances(): Amount[] {
    return this._entrances;
  }

  set entrances(value: Amount[]) {
    this._entrances = value;
  }

  get spents(): Amount[] {
    return this._spents;
  }

  set spents(value: Amount[]) {
    this._spents = value;
  }

  private _balance: number = 0;
  private _entrances: Amount[] = [];

  get entrancesLimit(): Amount[] {
    return [...this._entrancesLimit];
  }

  set entrancesLimit(value: Amount[]) {
    this._entrancesLimit = value;
  }

  get spentsLimit(): Amount[] {
    return [...this._spentsLimit];
  }

  set spentsLimit(value: Amount[]) {
    this._spentsLimit = value;
  }

  get totalEntrances(): number {
    return this._totalEntrances;
  }

  set totalEntrances(value: number) {
    this._totalEntrances = value;
  }

  get totalSpent(): number {
    return this._totalSpent;
  }

  set totalSpent(value: number) {
    this._totalSpent = value;
  }

  private _entrancesLimit: Amount[] = [];
  private _spents: Amount[] = [];
  private _spentsLimit: Amount[] = [];
  private _totalEntrances = 0
  private _totalSpent = 0
  public currentDay = new Date();
  constructor() { }

  getBalance(spents: Amount[], entrances: Amount[]) {
    this._balance = 0;
    this._totalEntrances = 0;
    this._totalSpent = 0;
    this.entrances = [...entrances];

    // TODO: Llevar a funcional con algun array methods
    entrances.forEach((entrance) => {
      this._totalEntrances += entrance.quantity;
    });
    // TODO: Llevar a funcional con algun array methods

    // TODO: Llevar a funcional con algun array methods
    this.spents = [...spents];
    spents.forEach((spent) => {
      this._totalSpent += spent.quantity;
    });
    // TODO: Llevar a funcional con algun array methods

    this._balance = this._totalEntrances - this._totalSpent;
  }

  filterForLatDayNumber(quantityDays: number) {
    const dayMax = new Date();
    dayMax.setDate(this.currentDay.getDate()-quantityDays);
    this._spentsLimit = [ ...this._spents]
      .filter((spent) => {
        spent.create_at = new Date(spent.create_at);
        return spent.create_at >= dayMax
      });

    this.entrancesLimit = [...this._entrances]
      .filter((spent) => {
        spent.create_at = new Date(spent.create_at);
        return spent.create_at >= dayMax
      });
  }

}
