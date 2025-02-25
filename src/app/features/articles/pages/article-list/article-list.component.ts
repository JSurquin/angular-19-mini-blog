import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-6">Articles</h2>

      <!-- Exemple avec Observable -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Liste (Observable)</h3>
        <div class="grid gap-4">
          @for (article of articles$ | async; track article.id) {
          <article
            class="border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h4 class="text-lg font-bold">{{ article.title }}</h4>
            <p class="text-gray-600">{{ article.author }}</p>
            <a
              [routerLink]="['/articles', article.id]"
              class="text-blue-600 hover:underline"
            >
              Lire la suite
            </a>
          </article>
          }
        </div>
      </section>

      <!-- Exemple avec Signal -->
      <section>
        <h3 class="text-xl font-semibold mb-4">Liste (Signal)</h3>
        <div class="grid gap-4">
          @for (article of articles(); track article.id) {
          <article
            class="border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h4 class="text-lg font-bold">{{ article.title }}</h4>
            <p class="text-gray-600">{{ article.author }}</p>
            <a
              [routerLink]="['/articles', article.id]"
              class="text-blue-600 hover:underline"
            >
              Lire la suite
            </a>
          </article>
          }
        </div>
      </section>
    </div>
  `,
})
export class ArticleListComponent {
  private articleService = inject(ArticleService);

  // Observable
  articles$ = this.articleService.articles$;

  // Signal
  articles = this.articleService.articles;
}
