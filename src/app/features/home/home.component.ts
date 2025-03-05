import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section avec animation et design moderne -->
    <div
      class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
    >
      <!-- Cercles décoratifs en arrière-plan -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-100/40"
        ></div>
        <div
          class="absolute right-0 top-0 h-60 w-60 rounded-full bg-violet-100/40"
        ></div>
        <div
          class="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-50/40"
        ></div>
      </div>

      <!-- Contenu principal -->
      <div class="relative">
        <div class="container mx-auto px-4 py-24">
          <div class="text-center">
            <div class="relative inline-block">
              <h1
                class="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl"
              >
                <span
                  class="relative inline-block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text pb-2 text-transparent"
                >
                  Blog Angular
                </span>
              </h1>
            </div>
            <p class="mx-auto mb-12 max-w-2xl text-lg text-slate-600">
              Explorez les meilleures pratiques Angular avec des exemples
              concrets. Découvrez la puissance des Signals et des Observables
              dans un blog moderne.
            </p>
            <div
              class="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                routerLink="/articles"
                class="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl"
              >
                Découvrir les articles
                <svg
                  class="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                routerLink="/auth/register"
                class="relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-slate-600 shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                Créer un compte
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Caractéristiques -->
      <div class="relative bg-white py-24">
        <div class="container mx-auto px-4">
          <h2 class="mb-12 text-center text-3xl font-bold text-slate-900">
            Fonctionnalités principales
          </h2>
          <div class="grid gap-8 md:grid-cols-3">
            <!-- Carte Signals -->
            <div
              class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 opacity-0 transition-opacity group-hover:opacity-100"
              ></div>
              <div class="relative">
                <div
                  class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600"
                >
                  <svg
                    class="h-7 w-7"
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
                <h3 class="mb-3 text-xl font-semibold text-slate-900">
                  Signals
                </h3>
                <p class="text-slate-600">
                  Découvrez la nouvelle approche de gestion d'état avec Angular
                  Signals. Plus performante et intuitive pour vos applications.
                </p>
              </div>
            </div>

            <!-- Carte Observables -->
            <div
              class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 opacity-0 transition-opacity group-hover:opacity-100"
              ></div>
              <div class="relative">
                <div
                  class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-violet-600"
                >
                  <svg
                    class="h-7 w-7"
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
                <h3 class="mb-3 text-xl font-semibold text-slate-900">
                  Observables
                </h3>
                <p class="text-slate-600">
                  Maîtrisez la programmation réactive avec RxJS. Gérez les flux
                  de données complexes efficacement.
                </p>
              </div>
            </div>

            <!-- Carte Best Practices -->
            <div
              class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 opacity-0 transition-opacity group-hover:opacity-100"
              ></div>
              <div class="relative">
                <div
                  class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600"
                >
                  <svg
                    class="h-7 w-7"
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
                <h3 class="mb-3 text-xl font-semibold text-slate-900">
                  Best Practices
                </h3>
                <p class="text-slate-600">
                  Apprenez les meilleures pratiques pour développer des
                  applications Angular performantes et maintenables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Articles Récents -->
      <div class="relative bg-slate-50 py-24">
        <div class="container mx-auto px-4">
          <h2 class="mb-12 text-center text-3xl font-bold text-slate-900">
            Articles récents
          </h2>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            @for (i of [1, 2, 3]; track i) {
            <article
              class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
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
              <div class="relative z-10 p-6">
                <div class="mb-3 flex items-center gap-4">
                  <span
                    class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                    >Angular</span
                  >
                  <span class="text-sm text-slate-500">5 min de lecture</span>
                </div>
                <h3
                  class="mb-3 text-xl font-semibold text-slate-900 group-hover:text-blue-600"
                >
                  Découvrez les nouveautés d'Angular
                </h3>
                <p class="mb-4 text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  class="relative z-20 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
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
            </article>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
