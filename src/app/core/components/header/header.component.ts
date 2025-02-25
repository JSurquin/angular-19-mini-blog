import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo et titre -->
          <div class="flex items-center space-x-4">
            <a routerLink="/" class="flex items-center space-x-2">
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span class="text-xl font-bold text-gray-900">Blog Angular</span>
            </a>
          </div>

          <!-- Navigation -->
          <ul class="flex items-center space-x-6">
            <li>
              <a
                routerLink="/"
                routerLinkActive="text-blue-600"
                [routerLinkActiveOptions]="{ exact: true }"
                class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                routerLink="/articles"
                routerLinkActive="text-blue-600"
                class="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Articles
              </a>
            </li>
            @if (!(authService.isAuthenticated())) {
            <li>
              <a
                routerLink="/auth/login"
                routerLinkActive="text-blue-600"
                class="btn btn-primary"
              >
                Connexion
              </a>
            </li>
            } @else {
            <li>
              <button
                (click)="authService.logout()"
                class="text-gray-600 hover:text-red-600 transition-colors"
              >
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
