import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts
import HC_data from 'highcharts/modules/data';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// const Boost = require('highcharts/modules/boost')
// const noData = require('highcharts/modules/no-data-to-display')
// const More = require('highcharts/highcharts-more')

// Boost(Highcharts)
// noData(Highcharts)
// More(Highcharts)
// noData(Highcharts)

@Component({
  selector: 'app-widget-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})

export class GraphicComponent implements OnInit {
  @ViewChild('articles_highcharts', { static: true }) articles_highcharts: any
  @Input() data: any = [];

  public chartOptions: any = {
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
    series: []
  };
  value: any = 0;

  Highcharts = Highcharts;


  constructor() { }

  ngOnInit(): void {
    //this.chartOptions.series = this.data.paises
    // this.chartOptions = HC_data(Highcharts); HC_exporting(Highcharts); HC_exportData(Highcharts)
    setTimeout(() => {
      if (this.data) {
        this.chartOptions.series = this.data
        Highcharts.chart(this.articles_highcharts.nativeElement, this.chartOptions)
      }
    }, 1000)
  }
}

