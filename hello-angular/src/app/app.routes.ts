import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleCreationComponent } from './pages/article-creation/article-creation.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'articles/creation',
    component: ArticleCreationComponent,
  }
];
