import { Component, OnInit, Input } from '@angular/core';
import {  } from 'protractor';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
@Input('service') service: any;
panels:any[];
show: boolean = true;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.panels = [
      {
        'title': '',
        'icon': '',
        'content':''
      }
    ]



    
  }

  onClick() {}

  onShow(index: number) {
    const targetDiv = 'div'+index;
    const targetUp = 'up'+index;
    const targetDown = 'down'+index;
    const elTarget = document.getElementById(targetDiv);
    const elDown = document.getElementById(targetDown);
    const elUp = document.getElementById(targetUp);


    elTarget.style.display = 'block';
    elDown.style.display = 'none';
    elUp.style.display = 'block';



  }

  onHide(index: number) {
    const targetDiv = 'div'+index;
    const targetUp = 'up'+index;
    const targetDown = 'down'+index;
    const elTarget = document.getElementById(targetDiv);
    const elDown = document.getElementById(targetDown);
    const elUp = document.getElementById(targetUp);


    elTarget.style.display = 'none';
    elDown.style.display = 'block';
    elUp.style.display = 'none';


  }

  openContact() {
    this.sharedService.openModal.next(true);
  }



}
