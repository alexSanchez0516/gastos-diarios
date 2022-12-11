import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {AmountService} from "../../services/amount.service";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges, OnInit{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['a','b','c'],
    datasets: [
      { data: [90, 150,30], label: 'Gastos' },
      { data: [70, 200, 60], label: 'Ingresos' }
    ]
  };


  constructor(private amountService: AmountService) {
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
//    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  ngOnInit(): void {
    console.log('init: ',this.barChartData);

    this.amountService.getSpentsAndEntrancesMinDay()
      .subscribe({
        next: (amounts) => {
          this.barChartData.datasets[0].data = [...amounts.spents.map((val) => val.quantity)];
          this.barChartData.datasets[1].data = [...amounts.entrances.map((val) => val.quantity)];
          console.log('final: ',this.barChartData);
        }
      })
  }

}
