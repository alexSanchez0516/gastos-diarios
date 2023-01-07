import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  years: any;
  months: any;

  private currentDay: Date = new Date();

  formFilter = this.fb.group({
    'month': [this.currentDay.getMonth(), [], []],
    'year': [this.currentDay.getFullYear(), [], []]
  })

  constructor(private fb: FormBuilder) {
  }

  filter() {

  }
}
