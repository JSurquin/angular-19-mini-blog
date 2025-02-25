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
    <!-- Version Observable -->
    @if (article$ | async; as article) {
    <article class="max-w-3xl mx-auto">
      <div class="mb-8">
        <a routerLink="/articles" class="text-blue-600 hover:text-blue-800">
          ← Retour aux articles
        </a>
      </div>
      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
      <div class="flex items-center mb-8 text-gray-600">
        <span>Par {{ article.author }}</span>
        <span class="mx-2">•</span>
        <span>{{ article.createdAt | date }}</span>
      </div>
      <div class="prose max-w-none">
        {{ article.content }}
      </div>
    </article>
    }

    <!-- Version Signal -->
    @if (article(); as article) {
    <article class="max-w-3xl mx-auto">
      <div class="mb-8">
        <a routerLink="/articles" class="text-blue-600 hover:text-blue-800">
          ← Retour aux articles
        </a>
      </div>
      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
      <div class="flex items-center mb-8 text-gray-600">
        <span>Par {{ article.author }}</span>
        <span class="mx-2">•</span>
        <span>{{ article.createdAt | date }}</span>
      </div>
      <div class="prose max-w-none">
        {{ article.content }}
      </div>
    </article>
    }
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
