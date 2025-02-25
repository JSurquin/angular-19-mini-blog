import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'translateY(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
  template: `
    @if (notification$ | async; as notification) {
    <div
      @slideInOut
      class="fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-4"
      [ngClass]="{
        'bg-green-100 text-green-800': notification.type === 'success',
        'bg-red-100 text-red-800': notification.type === 'error',
        'bg-blue-100 text-blue-800': notification.type === 'info'
      }"
    >
      {{ notification.message }}
      <button
        (click)="closeNotification()"
        class="ml-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
    </div>
    }
  `,
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  notification$ = this.notificationService.notifications$;

  closeNotification() {
    this.notificationService.clear();
  }
}
