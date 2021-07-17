import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input()imagen = 'assets/beer-logo.jpg';
  @Input()categoria?:string ;
  @Input()titulo='Cerveza';
  @Input()precio = 232;
  ngOnInit(): void {
  }

}
