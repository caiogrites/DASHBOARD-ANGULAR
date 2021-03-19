import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  chartOptions: any;
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'column'
      },
      data: {
          // enablePolling: true,
          csvURL: window.location.origin + '/teste.csv'
      },
      title: {
          text: 'Fruit Consumption'
      },
      yAxis: {
          title: {
              text: 'Units'
          }
      }
    }
  }
}
