import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts
import HC_exporting from 'highcharts/modules/exporting';

@Component({

  selector: 'app-widget-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  chartOptions: any;
  @Input() data: any = [];
  value: any = 0;

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
        chart: {
          type: 'area'
      },
      title: {
          text: 'Area chart with negative values'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
      }]
    }
  }
}

