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
    <div class="container mx-auto px-4 py-12">
      <div class="mx-auto max-w-3xl">
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

        <!-- En-tête -->
        <h1
          class="mb-8 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-4xl font-bold text-transparent"
        >
          Créer un nouvel article
        </h1>

        <!-- Formulaire -->
        <form
          [formGroup]="articleForm"
          (ngSubmit)="onSubmit()"
          class="space-y-8"
        >
          <!-- Titre -->
          <div class="space-y-2">
            <label for="title" class="block text-sm font-medium text-slate-700">
              Titre de l'article
            </label>
            <input
              type="text"
              id="title"
              formControlName="title"
              class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
              placeholder="Entrez le titre de votre article"
            />
            @if (articleForm.get('title')?.errors?.['required'] &&
            articleForm.get('title')?.touched) {
            <p class="text-sm text-red-600">Le titre est requis</p>
            }
          </div>

          <!-- Contenu -->
          <div class="space-y-2">
            <label
              for="content"
              class="block text-sm font-medium text-slate-700"
            >
              Contenu de l'article
            </label>
            <textarea
              id="content"
              formControlName="content"
              rows="12"
              class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
              placeholder="Rédigez votre article ici..."
            ></textarea>
            @if (articleForm.get('content')?.errors?.['required'] &&
            articleForm.get('content')?.touched) {
            <p class="text-sm text-red-600">Le contenu est requis</p>
            }
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end gap-4">
            <button
              type="button"
              routerLink="/articles"
              class="rounded-full px-6 py-3 text-slate-600 hover:bg-slate-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              [disabled]="articleForm.invalid"
              class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl disabled:opacity-50 disabled:hover:translate-y-0"
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Publier l'article
            </button>
          </div>
        </form>
      </div>
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
