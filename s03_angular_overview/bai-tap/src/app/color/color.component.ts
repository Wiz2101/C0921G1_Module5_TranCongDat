import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
   colorStyle: any;

  constructor() { }
  ngOnInit(): void {
  }

  changeColor(color){
    this.colorStyle = color;
    console.log(color);
  }
}
