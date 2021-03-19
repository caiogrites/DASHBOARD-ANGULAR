import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DashboardService } from '.././dashboard.service';
import { Paises } from '../paises';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public column: any[] = []
  public column$: Observable<Paises[]> = new Observable<Paises[]>()
  @Input() public data: any[] = []

  constructor(private DashboardService: DashboardService) { }

  public ngOnInit(): void {
    // console.log('articles: data', this.data)
    this.DashboardService.column().subscribe(dados => this.column = dados)
    // this.column$ = this.DashboardService.column()
  }

}
