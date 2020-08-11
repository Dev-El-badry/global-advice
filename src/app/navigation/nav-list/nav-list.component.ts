import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.closeSideNav.emit();
  }
  onClose2() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    this.closeSideNav.emit();
  }
}
