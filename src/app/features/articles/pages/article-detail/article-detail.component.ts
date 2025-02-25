import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <!-- Exemple avec Observable -->
      @if (article$ | async; as article) {
      <article class="prose lg:prose-xl">
        <h1>{{ article.title }}</h1>
        <p class="text-gray-600">Par {{ article.author }}</p>
        <div>{{ article.content }}</div>
      </article>
      }

      <!-- Exemple avec Signal -->
      @if (article(); as article) {
      <article class="prose lg:prose-xl mt-8">
        <h2>Version Signal</h2>
        <h1>{{ article.title }}</h1>
        <p class="text-gray-600">Par {{ article.author }}</p>
        <div>{{ article.content }}</div>
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
    map((params) => parseInt(params['id'])),
    switchMap((id) => this.articleService.getArticleById$(id))
  );

  // Version Signal
  private articleId = toSignal(
    this.route.params.pipe(map((params) => parseInt(params['id'])))
  );

  article = computed(() => {
    const id = this.articleId();
    return id ? this.articleService.getArticleById(id) : null;
  });
}
