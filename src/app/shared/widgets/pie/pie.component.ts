import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any;
  @Input() data: any = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'RANDOM DATA'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
    };

  setTimeout(() => {
    window.dispatchEvent(  //Despacha um evento de evento sintético para o destino e retorna verdadeiro se o valor do atributo cancelável do evento for falso ou se seu método preventDefault () não tiver sido invocado, e falso caso contrário.
      new Event('resize')
      );
    }, 300);
  }
  }


