import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  direction: 'rtl' | 'ltr';
  constructor(private router: Router) { }

  ngOnInit() {

    if(this.lang == 'ar') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }

  get lang() { return localStorage.getItem("lang"); }

  goBottom() {
    
    
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
   
  }
}
