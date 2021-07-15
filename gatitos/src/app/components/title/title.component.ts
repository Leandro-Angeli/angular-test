import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }
  // title = 'Titulo h1';
  // subtitle = 'subtitulo del h1';
  @Input() title?:string;
  @Input() subtitle?:string;
  ngOnInit(): void {
  }

}
