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
  selector: 'app-register',
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
            <h1 class="mb-2 text-3xl font-bold text-slate-900">Inscription</h1>
            <p class="mb-8 text-slate-600">
              Créez votre compte pour commencer à publier
            </p>
          </div>

          <!-- Version Observable -->
          <div class="mb-12">
            <h2 class="mb-6 text-xl font-semibold text-slate-900">
              Version Observable
            </h2>
            <form
              [formGroup]="registerForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <!-- Username -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  formControlName="username"
                  class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  placeholder="votre_nom"
                />
                @if (registerForm.get('username')?.errors?.['required'] &&
                registerForm.get('username')?.touched) {
                <p class="text-sm text-red-600">
                  Le nom d'utilisateur est requis
                </p>
                }
              </div>

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
                @if (registerForm.get('email')?.errors?.['required'] &&
                registerForm.get('email')?.touched) {
                <p class="text-sm text-red-600">L'email est requis</p>
                } @if (registerForm.get('email')?.errors?.['email'] &&
                registerForm.get('email')?.touched) {
                <p class="text-sm text-red-600">Format d'email invalide</p>
                }
              </div>

              <!-- Password -->
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
                @if (registerForm.get('password')?.errors?.['required'] &&
                registerForm.get('password')?.touched) {
                <p class="text-sm text-red-600">Le mot de passe est requis</p>
                } @if (registerForm.get('password')?.errors?.['minlength'] &&
                registerForm.get('password')?.touched) {
                <p class="text-sm text-red-600">
                  Le mot de passe doit contenir au moins 6 caractères
                </p>
                }
              </div>

              <button
                type="submit"
                [disabled]="registerForm.invalid"
                class="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Créer mon compte
              </button>
            </form>
          </div>

          <!-- Version Signal -->
          <div>
            <h2 class="mb-6 text-xl font-semibold text-slate-900">
              Version Signal
            </h2>
            <form (ngSubmit)="onSignalSubmit()" class="space-y-6">
              <!-- Username -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  [formControl]="usernameControl"
                  class="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                  placeholder="votre_nom"
                />
                @if (usernameControl.errors?.['required'] &&
                usernameControl.touched) {
                <p class="text-sm text-red-600">
                  Le nom d'utilisateur est requis
                </p>
                }
              </div>

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
                } @if (emailControl.errors?.['email'] && emailControl.touched) {
                <p class="text-sm text-red-600">Format d'email invalide</p>
                }
              </div>

              <!-- Password -->
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
                } @if (passwordControl.errors?.['minlength'] &&
                passwordControl.touched) {
                <p class="text-sm text-red-600">
                  Le mot de passe doit contenir au moins 6 caractères
                </p>
                }
              </div>

              <button
                type="submit"
                [disabled]="signalForm.invalid"
                class="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Créer mon compte (Signal)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Version Observable avec Reactive Forms
  registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // Version Signal Forms
  usernameControl = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  emailControl = new FormControl('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true,
  });

  passwordControl = new FormControl('', {
    validators: [Validators.required, Validators.minLength(6)],
    nonNullable: true,
  });

  signalForm = new FormGroup({
    username: this.usernameControl,
    email: this.emailControl,
    password: this.passwordControl,
  });

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService
        .register$(this.registerForm.value)
        .pipe(takeUntilDestroyed())
        .subscribe({
          next: () => this.router.navigate(['/articles']),
          error: (error) => console.error("Erreur d'inscription:", error),
        });
    }
  }

  onSignalSubmit(): void {
    if (this.signalForm.valid) {
      this.authService
        .register$(this.signalForm.getRawValue())
        .pipe(takeUntilDestroyed())
        .subscribe({
          next: () => this.router.navigate(['/articles']),
          error: (error) => console.error("Erreur d'inscription:", error),
        });
    }
  }
}
