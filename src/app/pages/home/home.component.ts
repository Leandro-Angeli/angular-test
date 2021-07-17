import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
  }

}
