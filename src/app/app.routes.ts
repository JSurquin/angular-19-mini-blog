import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'articles',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            '@features/articles/pages/article-list/article-list.component'
          ).then((m) => m.ArticleListComponent),
      },
      {
        path: 'new',
        loadComponent: () =>
          import(
            '@features/articles/pages/article-create/article-create.component'
          ).then((m) => m.ArticleCreateComponent),
        canActivate: [authGuard],
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            '@features/articles/pages/article-detail/article-detail.component'
          ).then((m) => m.ArticleDetailComponent),
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@features/auth/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@features/auth/pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
    ],
  },
];
