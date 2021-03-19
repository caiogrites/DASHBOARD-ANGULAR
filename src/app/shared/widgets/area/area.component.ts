import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';  //importando Highcharts
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: any;
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
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

  HC_exporting(Highcharts);

  //faz grafico ficar responsivo ao acionar sideBarToggler
  setTimeout(() => {
    window.dispatchEvent(  //Despacha um evento de evento sintético para o destino e retorna verdadeiro se o valor do atributo cancelável do evento for falso ou se seu método preventDefault () não tiver sido invocado, e falso caso contrário.
      new Event('resize')
      );
    }, 300);
  }
}
