import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleService } from '@features/articles/services/article.service';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mx-auto px-4 py-12">
      <!-- Version Observable -->
      @if (article$ | async; as article) {
      <article class="mx-auto max-w-4xl">
        <!-- Navigation -->
        <div class="mb-8">
          <a
            routerLink="/articles"
            class="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <svg
              class="h-5 w-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux articles
          </a>
        </div>

        <!-- En-tête de l'article -->
        <header class="mb-12">
          <h1
            class="mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
          >
            {{ article.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-4 text-slate-600">
            <div class="flex items-center gap-2">
              <svg
                class="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{{ article.author }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{{ article.createdAt | date : 'longDate' }}</span>
            </div>
          </div>
        </header>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <div
            class="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-400 to-violet-400 shadow-lg"
          >
            <div
              class="aspect-w-16 aspect-h-9 flex items-center justify-center bg-white/10 p-8"
            >
              <svg
                class="h-24 w-24 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
          <p class="whitespace-pre-line text-lg leading-relaxed text-slate-700">
            {{ article.content }}
          </p>
        </div>
      </article>
      }

      <!-- Version Signal -->
      @if (article(); as article) {
      <article class="mx-auto max-w-4xl">
        <!-- Navigation -->
        <div class="mb-8">
          <a
            routerLink="/articles"
            class="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <svg
              class="h-5 w-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux articles
          </a>
        </div>

        <!-- En-tête de l'article -->
        <header class="mb-12">
          <h1
            class="mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
          >
            {{ article.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-4 text-slate-600">
            <div class="flex items-center gap-2">
              <svg
                class="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{{ article.author }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{{ article.createdAt | date : 'longDate' }}</span>
            </div>
          </div>
        </header>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <div
            class="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-400 to-violet-400 shadow-lg"
          >
            <div
              class="aspect-w-16 aspect-h-9 flex items-center justify-center bg-white/10 p-8"
            >
              <svg
                class="h-24 w-24 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
          <p class="whitespace-pre-line text-lg leading-relaxed text-slate-700">
            {{ article.content }}
          </p>
        </div>
      </article>
      }
    </div>
  `,
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  // Version Observable
  article$ = this.route.params.pipe(
    switchMap((params) => this.articleService.getArticleById$(+params['id']))
  );

  // Version Signal
  article = toSignal(this.article$);
}
