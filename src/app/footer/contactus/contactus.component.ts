import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
size;
  constructor() { }

  ngOnInit() {
    this.size = window.innerWidth <= 600 ? '100%' : '80%';
  }

  onResize(event) {

    this.size = event.target.innerWidth <= 600 ? '100%' : '80%';
  }

}
