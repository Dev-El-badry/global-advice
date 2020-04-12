import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.css']
})
export class OtherServiceComponent implements OnInit {
@Input('service') service: any;
  constructor() { }

  ngOnInit() {
  }

}
