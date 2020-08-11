import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: string[];
  constructor() { }

  ngOnInit() {
    this.slides = [
      'assets/images/slides/slide1.jpeg',
      'assets/images/slides/slide2.jpeg'
    ]
  }

}
