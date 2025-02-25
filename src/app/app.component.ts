import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@core/components/header/header.component';
import { NotificationComponent } from '@core/components/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NotificationComponent],
  template: `
    <app-header />
    <main class="container mx-auto px-4 py-8 mt-16">
      <router-outlet />
    </main>
    <app-notification />
  `,
})
export class AppComponent {
  title = 'Blog Angular';
}
