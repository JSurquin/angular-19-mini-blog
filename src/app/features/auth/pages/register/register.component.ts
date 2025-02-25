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
    <div class="container mx-auto p-4">
      <div class="max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-6">Inscription</h2>

        <!-- Version Observable avec Reactive Forms -->
        <form
          [formGroup]="registerForm"
          (ngSubmit)="onSubmit()"
          class="mb-8 space-y-4"
        >
          <h3 class="text-xl font-semibold">Version Observable</h3>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              formControlName="username"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            @if (registerForm.get('username')?.errors?.['required'] &&
            registerForm.get('username')?.touched) {
            <p class="text-red-500 text-sm mt-1">
              Le nom d'utilisateur est requis
            </p>
            }
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              formControlName="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            @if (registerForm.get('email')?.errors?.['required'] &&
            registerForm.get('email')?.touched) {
            <p class="text-red-500 text-sm mt-1">L'email est requis</p>
            } @if (registerForm.get('email')?.errors?.['email'] &&
            registerForm.get('email')?.touched) {
            <p class="text-red-500 text-sm mt-1">Format d'email invalide</p>
            }
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              formControlName="password"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            @if (registerForm.get('password')?.errors?.['required'] &&
            registerForm.get('password')?.touched) {
            <p class="text-red-500 text-sm mt-1">Le mot de passe est requis</p>
            } @if (registerForm.get('password')?.errors?.['minlength'] &&
            registerForm.get('password')?.touched) {
            <p class="text-red-500 text-sm mt-1">
              Le mot de passe doit contenir au moins 6 caractères
            </p>
            }
          </div>

          <button
            type="submit"
            [disabled]="registerForm.invalid"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            S'inscrire
          </button>
        </form>

        <!-- Version Signal Forms -->
        <form (ngSubmit)="onSignalSubmit()" class="space-y-4">
          <h3 class="text-xl font-semibold">Version Signal</h3>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              [formControl]="usernameControl"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            @if (usernameControl.errors?.['required'] &&
            usernameControl.touched) {
            <p class="text-red-500 text-sm mt-1">
              Le nom d'utilisateur est requis
            </p>
            }
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              [formControl]="emailControl"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            @if (emailControl.errors?.['required'] && emailControl.touched) {
            <p class="text-red-500 text-sm mt-1">L'email est requis</p>
            } @if (emailControl.errors?.['email'] && emailControl.touched) {
            <p class="text-red-500 text-sm mt-1">Format d'email invalide</p>
            }
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              [formControl]="passwordControl"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            @if (passwordControl.errors?.['required'] &&
            passwordControl.touched) {
            <p class="text-red-500 text-sm mt-1">Le mot de passe est requis</p>
            } @if (passwordControl.errors?.['minlength'] &&
            passwordControl.touched) {
            <p class="text-red-500 text-sm mt-1">
              Le mot de passe doit contenir au moins 6 caractères
            </p>
            }
          </div>

          <button
            type="submit"
            [disabled]="signalForm.invalid"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            S'inscrire (Signal)
          </button>
        </form>
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
