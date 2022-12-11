import {Component, OnInit} from '@angular/core';
import {BalanceService} from "../../services/balance.service";
import {Amount} from "../../interfaces/interfaces";
import {EntranceService} from "../../services/entrance.service";
import {SpentService} from "../../services/spent.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  public balance: number = 0;
  public entrances: Amount[] = [];
  public spents: Amount[] = [];
  public movements: any;
  public entrancesLimit: Amount[] = [];
  public spentsLimit: Amount[] = [];

  constructor(private balanceService: BalanceService,
              private entranceService: EntranceService,
              private spentService: SpentService
              ) {
  }

  ngOnInit(): void {
    let idUser = localStorage.getItem('uid') || '';
    this.entranceService.allByUser(idUser).subscribe({
      next: (entrances) => {
        // @ts-ignore
        this.entrances = [...entrances.entrances];
        this.spentService.allByUser(idUser).subscribe({
          next: (spents) => {
            // @ts-ignore
            this.spents = [...spents.spents];
            this.balanceService.getBalance(this.spents, this.entrances);
            this.balance = this.balanceService.balance;
            this.balanceService.filterForLatDayNumber(7);
            this.spentsLimit = this.balanceService.spentsLimit;
            this.entrancesLimit = this.balanceService.entrancesLimit;
          }
        })
      }
    })
  }
}
