import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size-selector',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})

export class FontSizeComponent implements OnInit {
  fontSize = 14;

  constructor() {
  }

  ngOnInit() {
  }

  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}


