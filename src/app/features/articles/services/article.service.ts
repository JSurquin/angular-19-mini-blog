import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

interface JsonPlaceholderPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // Gestionnaire d'erreurs centralisé
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code d'erreur: ${error.status}, Message: ${error.message}`;
    }

    return throwError(() => errorMessage);
  }

  // Version Observable - Données dynamiques depuis l'API
  articles$ = this.http.get<JsonPlaceholderPost[]>(this.apiUrl).pipe(
    map((posts) =>
      posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        author: `Auteur ${post.userId}`,
        createdAt: new Date(),
      }))
    ),
    catchError(this.handleError)
  );

  // Version Signal - Données statiques pour démonstration
  // Utile pour montrer les différences entre Signals et Observables
  private staticArticles: Article[] = [
    {
      id: 1,
      title: 'Introduction aux Signals dans Angular',
      content: `Les Signals sont une nouvelle façon de gérer l'état dans Angular. 
                Ils offrent une approche plus performante et plus intuitive que les Observables 
                pour certains cas d'usage...`,
      author: 'Marie Dupont',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'RxJS et Observables : Les fondamentaux',
      content: `RxJS est une bibliothèque incontournable dans l'écosystème Angular. 
                Comprendre les Observables est essentiel pour maîtriser la programmation réactive...`,
      author: 'Jean Martin',
      createdAt: new Date(),
    },
    {
      id: 3,
      title: 'Comparaison : Signals vs Observables',
      content: `Quand utiliser les Signals et quand préférer les Observables ? 
                Dans cet article, nous allons comparer les deux approches...`,
      author: 'Sophie Bernard',
      createdAt: new Date(),
    },
  ];

  // Signal initialisé avec les données statiques
  articles = signal<Article[]>(this.staticArticles);

  constructor() {
    // PROBLÈME : Cette initialisation dans le constructeur écrase nos articles statiques
  }

  // Méthodes avec Observable - Récupération dynamique depuis l'API
  getArticleById$(id: number): Observable<Article> {
    return this.http.get<JsonPlaceholderPost>(`${this.apiUrl}/${id}`).pipe(
      map((post) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        author: `Auteur ${post.userId}`,
        createdAt: new Date(),
      })),
      catchError(this.handleError)
    );
  }

  // Méthodes avec Signal - Récupération depuis les données statiques
  getArticleById(id: number): Article | undefined {
    return this.articles().find((article) => article.id === id);
  }

  // Méthode pour créer un nouvel article
  createArticle$(article: Partial<Article>): Observable<Article> {
    return this.http
      .post<JsonPlaceholderPost>(this.apiUrl, {
        title: article.title,
        body: article.content,
        userId: 1,
      })
      .pipe(
        map((response) => ({
          id: response.id,
          title: response.title,
          content: response.body,
          author: `Auteur ${response.userId}`,
          createdAt: new Date(),
        })),
        catchError(this.handleError)
      );
  }
}
