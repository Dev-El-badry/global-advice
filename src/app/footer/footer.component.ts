import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  direction: 'rtl' | 'ltr';
  constructor() { }
  get lang() { return localStorage.getItem("lang"); }
  ngOnInit() {
    if(this.lang == 'ar') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }

}
