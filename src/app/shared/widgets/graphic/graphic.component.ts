import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts
import HC_data from 'highcharts/modules/data';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

@Component({
  selector: 'app-widget-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})

export class GraphicComponent implements OnInit {

  chartOptions: any;
  @Input() data: any = [];
  value: any = 0;

  Highcharts = Highcharts;


  constructor() { }

  ngOnInit(): void {
    //this.chartOptions.series = this.data.paises
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random DATA'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };
    HC_data(Highcharts);
    HC_exporting(Highcharts);
    HC_exportData(Highcharts);
  }
}

