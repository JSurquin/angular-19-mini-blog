import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ArticleService,
  Article,
} from '@features/articles/services/article.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mx-auto px-4 py-12">
      <!-- En-tête -->
      <div class="mb-12 flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-bold text-slate-900">Articles</h1>
          <p class="mt-2 text-lg text-slate-600">
            Découvrez nos derniers articles sur Angular
          </p>
        </div>
        <a
          routerLink="/articles/new"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl"
        >
          <svg
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Nouvel Article
        </a>
      </div>

      <!-- Version Observable -->
      <div class="mb-16">
        <h2 class="mb-8 text-2xl font-semibold text-slate-900">
          Version Observable
        </h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (article of articles$ | async; track article.id) {
          <article
            class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center text-white"
              >
                <svg
                  class="h-12 w-12 opacity-75"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="mb-3 flex items-center gap-4">
                <span
                  class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                  >Angular</span
                >
                <span class="text-sm text-slate-500">{{
                  article.createdAt | date
                }}</span>
              </div>
              <h3
                class="mb-3 text-xl font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {{ article.title }}
              </h3>
              <p class="mb-4 line-clamp-3 text-slate-600">
                {{ article.content }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-500">
                  Par {{ article.author }}
                </span>
                <a
                  [routerLink]="['/articles', article.id]"
                  class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  Lire la suite
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          }
        </div>
      </div>

      <!-- Version Signal -->
      <div>
        <h2 class="mb-8 text-2xl font-semibold text-slate-900">
          Version Signal
        </h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          @for (article of articles(); track article.id) {
          <article
            class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center text-white"
              >
                <svg
                  class="h-12 w-12 opacity-75"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <div class="mb-3 flex items-center gap-4">
                <span
                  class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                  >Angular</span
                >
                <span class="text-sm text-slate-500">{{
                  article.createdAt | date
                }}</span>
              </div>
              <h3
                class="mb-3 text-xl font-semibold text-slate-900 group-hover:text-blue-600"
              >
                {{ article.title }}
              </h3>
              <p class="mb-4 line-clamp-3 text-slate-600">
                {{ article.content }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-500">
                  Par {{ article.author }}
                </span>
                <a
                  [routerLink]="['/articles', article.id]"
                  class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  Lire la suite
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          }
        </div>
      </div>
    </div>
  `,
})
export class ArticleListComponent {
  private articleService = inject(ArticleService);

  // Version Observable
  articles$ = this.articleService.articles$;

  // Version Signal - Correction du typage
  articles = toSignal(this.articles$, {
    initialValue: [] as Article[],
  });
}
