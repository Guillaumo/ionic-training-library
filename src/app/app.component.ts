import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Livres', url: '/books', icon: 'library-outline' }
  ];
  constructor() { }
}
