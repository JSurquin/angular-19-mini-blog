import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
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

  // Version Observable
  articles$ = this.http.get<JsonPlaceholderPost[]>(this.apiUrl).pipe(
    map((posts) =>
      posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        author: `Auteur ${post.userId}`,
        createdAt: new Date(),
      }))
    )
  );

  // Version Signal
  articles = signal<Article[]>([
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
  ]);

  // Conversion Observable vers Signal
  articlesFromObservable = toSignal(this.articles$, {
    initialValue: [] as Article[],
  });

  constructor() {
    // Initialisation du signal avec des données de test
    this.articles.set([
      {
        id: 1,
        title: 'Introduction à Angular Signals',
        content: "Les Signals sont une nouvelle façon de gérer l'état...",
        author: 'John Doe',
        createdAt: new Date(),
      },
      // ... autres articles
    ]);
  }

  // Méthodes avec Observable
  getArticleById$(id: number): Observable<Article> {
    return this.http.get<JsonPlaceholderPost>(`${this.apiUrl}/${id}`).pipe(
      map((post) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        author: `Auteur ${post.userId}`,
        createdAt: new Date(),
      }))
    );
  }

  // Méthodes avec Signal
  getArticleById(id: number): Article | undefined {
    return this.articles().find((article) => article.id === id);
  }
}
