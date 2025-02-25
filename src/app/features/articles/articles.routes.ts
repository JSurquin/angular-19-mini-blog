import { Routes } from '@angular/router';

export const ARTICLES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/article-list/article-list.component').then(
        (m) => m.ArticleListComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/article-detail/article-detail.component').then(
        (m) => m.ArticleDetailComponent
      ),
  },
];
