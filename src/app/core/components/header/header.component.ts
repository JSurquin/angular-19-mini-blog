import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header
      class="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md"
    >
      <div class="container-custom">
        <nav class="flex h-16 items-center justify-between">
          <div class="flex items-center space-x-4">
            <a routerLink="/" class="group flex items-center space-x-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-500 text-white shadow-md transition-all duration-200 group-hover:shadow-lg"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <span
                class="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-xl font-bold text-transparent"
              >
                Blog Angular
              </span>
            </a>
          </div>

          <ul class="flex items-center space-x-6">
            <li>
              <a
                routerLink="/"
                routerLinkActive="text-blue-600 font-medium"
                [routerLinkActiveOptions]="{ exact: true }"
                class="rounded-lg px-3 py-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                routerLink="/articles"
                routerLinkActive="text-blue-600 font-medium"
                class="rounded-lg px-3 py-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600"
              >
                Articles
              </a>
            </li>
            @if (!(authService.isAuthenticated())) {
            <li>
              <a routerLink="/auth/login" class="btn btn-primary">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Connexion
              </a>
            </li>
            } @else {
            <li>
              <button
                (click)="authService.logout()"
                class="btn btn-secondary text-red-600 hover:text-red-700"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Déconnexion
              </button>
            </li>
            }
          </ul>
        </nav>
      </div>
    </header>

    <!-- Spacer pour compenser le header fixed -->
    <div class="h-16"></div>
  `,
})
export class HeaderComponent {
  protected authService = inject(AuthService);
}
