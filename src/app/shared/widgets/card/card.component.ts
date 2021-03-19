import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label?: string;
  @Input()  total?: string;
  @Input()  percentage?: string;

  @Input() data: any = [];
  Highcharts = Highcharts;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

    chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth:0,
          margin:[2,2,2],
          height: 60,
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend:{
        enabled: false
      },
      credits:{
        enabled: false
      },
      exporting: {
        enabled:false,
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data: this.data
      }, ]
  };

  setTimeout(() => {
    window.dispatchEvent(  //Despacha um evento de evento sintético para o destino e retorna verdadeiro se o valor do atributo cancelável do evento for falso ou se seu método preventDefault () não tiver sido invocado, e falso caso contrário.
      new Event('resize')
      );
    }, 300);
  }
}

