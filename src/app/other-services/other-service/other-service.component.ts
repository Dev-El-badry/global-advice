import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.css']
})
export class OtherServiceComponent implements OnInit {
@Input('service') service: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  openContact() {
    this.sharedService.openModal.next(true);
  }



}
