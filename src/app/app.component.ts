import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListeComponent } from './components/liste/liste.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ListeComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCour';
}
