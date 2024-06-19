import { Component } from '@angular/core';
import { DefaultLayout } from './layouts/DefaultLayout/default-layout.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-wedding';
}
