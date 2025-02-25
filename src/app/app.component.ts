import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="container mx-auto px-4 py-8 mt-16">
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  title = 'Blog Angular';
}
