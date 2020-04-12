import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides: string[];
  constructor() { }

  ngOnInit() {
    this.slides = [
      'assets/images/slides/slide1.jpeg',
      'assets/images/slides/slide2.jpeg'
    ]
  }

}

