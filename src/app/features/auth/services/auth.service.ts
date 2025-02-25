import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'api/auth';

  // Version Observable
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  // Version Signal
  private userSignal = signal<User | null>(null);
  isAuthenticated = computed(() => this.userSignal() !== null);

  constructor(private http: HttpClient, private router: Router) {
    // Récupérer l'utilisateur du localStorage au démarrage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userSubject.next(user);
      this.userSignal.set(user);
    }
  }

  // Méthodes avec Observable
  login$(credentials: LoginCredentials): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials).pipe(
      tap((user) => {
        this.userSubject.next(user);
        this.userSignal.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  register$(credentials: RegisterCredentials): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, credentials).pipe(
      tap((user) => {
        this.userSubject.next(user);
        this.userSignal.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.userSignal.set(null);
    this.router.navigate(['/auth/login']);
  }
}
