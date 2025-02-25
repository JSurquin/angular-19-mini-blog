import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Articles</h1>
        <button routerLink="/articles/new" class="btn btn-primary">
          Nouvel Article
        </button>
      </div>

      <!-- Version Observable -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (article of articles$ | async; track article.id) {
        <article class="card hover:shadow-lg transition-shadow duration-200">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ article.content }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">
                Par {{ article.author }}
              </span>
              <a
                [routerLink]="['/articles', article.id]"
                class="text-blue-600 hover:text-blue-800"
              >
                Lire la suite →
              </a>
            </div>
          </div>
        </article>
        }
      </div>

      <!-- Version Signal -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (article of articles(); track article.id) {
        <article class="card hover:shadow-lg transition-shadow duration-200">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ article.content }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">
                Par {{ article.author }}
              </span>
              <a
                [routerLink]="['/articles', article.id]"
                class="text-blue-600 hover:text-blue-800"
              >
                Lire la suite →
              </a>
            </div>
          </div>
        </article>
        }
      </div>
    </div>
  `,
})
export class ArticleListComponent {
  private articleService = inject(ArticleService);

  // Version Observable
  articles$ = this.articleService.articles$;

  // Version Signal
  articles = toSignal(this.articles$, { initialValue: [] });
}
