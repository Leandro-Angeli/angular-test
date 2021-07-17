import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gatitos';
  subtitle='Todo ok';

  cards=[{
    imagen:'/assets/beer-logo.jpg',
    categoria:'Vino',
    titulo:'Bebidas',
    precio:6000
  },
  {
    imagen:'/assets/beer-logo.jpg',
    categoria:'Cerveza',
    titulo:'Bebidas',
    precio:300
  },
  {
    imagen:'/assets/beer-logo.jpg',
    categoria:'Licor',
    titulo:'Bebidas',
    precio:6300
  },
  {
    imagen:'/assets/beer-logo.jpg',
    categoria:'whiskey',
    titulo:'Bebidas',
    precio:6760
  }
]
}
