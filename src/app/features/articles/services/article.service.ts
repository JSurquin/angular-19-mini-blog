import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'api/articles'; // URL à adapter selon votre backend
  private http = inject(HttpClient);

  // Version Observable
  articles$ = this.http.get<Article[]>(this.apiUrl);

  // Version Signal
  articles = signal<Article[]>([]);

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
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  // Méthodes avec Signal
  getArticleById(id: number) {
    return this.articles().find((article) => article.id === id);
  }
}
