import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from '.././dashboard.service';
import { Paises } from '../paises';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  column: any [] = []
  column$!: Observable<Paises[]>
  @Input() data: any [] = []

  constructor(private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.DashboardService.column().subscribe(dados => this.column = dados)
    this.column$ = this.DashboardService.column()

  }

}
