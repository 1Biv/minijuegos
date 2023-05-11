import { Component,Input } from '@angular/core';

@Component({
  selector: 'ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent {
  @Input() ficha : number =0;
  constructor(){

  }
}
