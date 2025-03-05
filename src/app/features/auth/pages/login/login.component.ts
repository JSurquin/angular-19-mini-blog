import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div
      class="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-blue-50 to-white py-12"
    >
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-md">
          <!-- En-tête -->
          <div class="text-center">
            <h1 class="mb-2 text-3xl font-bold text-slate-900">Connexion</h1>
            <p class="mb-8 text-slate-600">
              Connectez-vous pour accéder à votre compte
            </p>
          </div>

          <!-- Version Observable -->
          <div class="mb-12">
            <h2 class="mb-6 text-xl font-semibold text-slate-900">
              Version Observable
            </h2>
            <form
              [formGroup]="loginForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <!-- Email -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">
                  Adresse email
                </label>
                <input
                  type="email"
                  formControlName="email"
                  class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  placeholder="vous@exemple.com"
                />
                @if (loginForm.get('email')?.errors?.['required'] &&
                loginForm.get('email')?.touched) {
                <p class="text-sm text-red-600">L'email est requis</p>
                }
              </div>

              <!-- Mot de passe -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">
                  Mot de passe
                </label>
                <input
                  type="password"
                  formControlName="password"
                  class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  placeholder="••••••••"
                />
                @if (loginForm.get('password')?.errors?.['required'] &&
                loginForm.get('password')?.touched) {
                <p class="text-sm text-red-600">Le mot de passe est requis</p>
                }
              </div>

              <button
                type="submit"
                [disabled]="loginForm.invalid"
                class="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Se connecter
              </button>
            </form>
          </div>

          <!-- Version Signal -->
          <div>
            <h2 class="mb-6 text-xl font-semibold text-slate-900">
              Version Signal
            </h2>
            <form (ngSubmit)="onSignalSubmit()" class="space-y-6">
              <!-- Email -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">
                  Adresse email
                </label>
                <input
                  type="email"
                  [formControl]="emailControl"
                  class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  placeholder="vous@exemple.com"
                />
                @if (emailControl.errors?.['required'] && emailControl.touched)
                {
                <p class="text-sm text-red-600">L'email est requis</p>
                }
              </div>

              <!-- Mot de passe -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">
                  Mot de passe
                </label>
                <input
                  type="password"
                  [formControl]="passwordControl"
                  class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  placeholder="••••••••"
                />
                @if (passwordControl.errors?.['required'] &&
                passwordControl.touched) {
                <p class="text-sm text-red-600">Le mot de passe est requis</p>
                }
              </div>

              <button
                type="submit"
                [disabled]="signalForm.invalid"
                class="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Se connecter (Signal)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Version Observable avec Reactive Forms
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // Version Signal Forms
  emailControl = new FormControl('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true,
  });

  passwordControl = new FormControl('', {
    validators: [Validators.required, Validators.minLength(6)],
    nonNullable: true,
  });

  signalForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService
        .login$(this.loginForm.value)
        .pipe(takeUntilDestroyed())
        .subscribe({
          next: () => this.router.navigate(['/articles']),
          error: (error) => console.error('Erreur de connexion:', error),
        });
    }
  }

  onSignalSubmit(): void {
    if (this.signalForm.valid) {
      this.authService
        .login$(this.signalForm.getRawValue())
        .pipe(takeUntilDestroyed())
        .subscribe({
          next: () => this.router.navigate(['/articles']),
          error: (error) => console.error('Erreur de connexion:', error),
        });
    }
  }
}
