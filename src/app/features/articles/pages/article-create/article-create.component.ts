import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ArticleService } from '@features/articles/services/article.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="max-w-3xl mx-auto">
      <div class="mb-8">
        <a routerLink="/articles" class="text-blue-600 hover:text-blue-800">
          ← Retour aux articles
        </a>
      </div>

      <h1 class="text-3xl font-bold text-gray-900 mb-6">
        Créer un nouvel article
      </h1>

      <form [formGroup]="articleForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Titre
          </label>
          <input
            type="text"
            id="title"
            formControlName="title"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          @if (articleForm.get('title')?.errors?.['required'] &&
          articleForm.get('title')?.touched) {
          <p class="mt-1 text-sm text-red-600">Le titre est requis</p>
          }
        </div>

        <div>
          <label for="content" class="block text-sm font-medium text-gray-700">
            Contenu
          </label>
          <textarea
            id="content"
            formControlName="content"
            rows="8"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          ></textarea>
          @if (articleForm.get('content')?.errors?.['required'] &&
          articleForm.get('content')?.touched) {
          <p class="mt-1 text-sm text-red-600">Le contenu est requis</p>
          }
        </div>

        <div class="flex justify-end space-x-4">
          <button
            type="button"
            routerLink="/articles"
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            [disabled]="articleForm.invalid"
            class="btn btn-primary"
          >
            Publier l'article
          </button>
        </div>
      </form>
    </div>
  `,
})
export class ArticleCreateComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private articleService = inject(ArticleService);
  private notificationService = inject(NotificationService);

  // Formulaire réactif pour la création d'article
  articleForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.articleForm.valid) {
      this.articleService.createArticle$(this.articleForm.value).subscribe({
        next: () => {
          this.notificationService.success('Article créé avec succès !');
          this.router.navigate(['/articles']);
        },
        error: (error) => {
          console.error('Erreur lors de la création:', error);
          this.notificationService.error(
            "Erreur lors de la création de l'article"
          );
        },
      });
    } else {
      this.notificationService.error(
        'Veuillez corriger les erreurs du formulaire'
      );
    }
  }
}
