import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // Subject pour émettre les notifications
  private notificationSubject = new Subject<Notification | null>();
  notifications$ = this.notificationSubject.asObservable();

  private showNotification(notification: Notification) {
    this.notificationSubject.next(notification);
    // Faire disparaître la notification après 3 secondes
    timer(3000)
      .pipe(tap(() => this.notificationSubject.next(null)))
      .subscribe();
  }

  // Méthodes pour afficher différents types de notifications
  success(message: string) {
    this.showNotification({ message, type: 'success' });
  }

  error(message: string) {
    this.showNotification({ message, type: 'error' });
  }

  info(message: string) {
    this.showNotification({ message, type: 'info' });
  }

  clear() {
    this.notificationSubject.next(null);
  }
}
