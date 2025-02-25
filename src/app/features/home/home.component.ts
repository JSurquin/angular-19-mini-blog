import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-gradient-to-b from-blue-50 to-white py-16">
      <div class="container mx-auto px-4">
        <!-- Hero Section -->
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold text-primary mb-6">
            Bienvenue sur le Blog Angular
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Découvrez les meilleures pratiques Angular avec des exemples
            concrets utilisant Signals et Observables.
          </p>
          <div class="flex justify-center gap-4">
            <a routerLink="/articles" class="btn btn-primary">
              Voir les articles
            </a>
            <a routerLink="/auth/register" class="btn btn-secondary">
              S'inscrire
            </a>
          </div>
        </div>

        <!-- Features -->
        <div class="mt-24 grid md:grid-cols-3 gap-8">
          <div class="card p-6">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Signals</h3>
            <p class="text-gray-600">
              Découvrez la nouvelle approche de gestion d'état avec Angular
              Signals.
            </p>
          </div>

          <div class="card p-6">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Observables</h3>
            <p class="text-gray-600">
              Maîtrisez la programmation réactive avec RxJS et les Observables.
            </p>
          </div>

          <div class="card p-6">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Best Practices</h3>
            <p class="text-gray-600">
              Apprenez les meilleures pratiques pour développer des applications
              Angular performantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
