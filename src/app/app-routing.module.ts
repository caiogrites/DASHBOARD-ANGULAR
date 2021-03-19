import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AmchartsComponent } from './modules/amcharts/amcharts.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

//configuração de rotas
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path:'',
    component: DashboardComponent
  },{

    path: 'posts',
    component: PostsComponent
  },{

    path: 'articles',
    component: ArticlesComponent
  },{
    path: 'amcharts',
    component: AmchartsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
