import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.css']
})
export class OtherServicesComponent implements OnInit {
  services: any[];
  constructor() { }

  ngOnInit() {
    this.services = [
      {
        icon: 'fire',
        title: 'تامين الحريق و السطو واالخطار اإلضافية'
      },
      {
        icon: 'running',
        title: 'تامين نقل النقدية وخيانة االمانة'
      },
      {
        icon: 'hard-hat',
        title: 'التامين الهندسي و اخطار المقاولين'
      },
      {
        icon: 'tools',
        title: 'تامين اآلالت و المعدات'
      },
      {
        icon: 'home',
        title: 'حماية المنزل'
      },
      {
        icon: 'code',
        title: ' الحماية االلكترونية '
      },
      {
        icon: 'prescription-bottle-alt',
        title: 'تامين الصيادلة'
      },
      {
        icon: 'ship',
        title: 'التامين البحري والنقل البري'
      },
      {
        icon: 'gas-pump',
        title: 'تامين اخطار البترول'
      },
      {
        icon: 'paw',
        title: 'تامين نفوق الماشية'
      },
    ];
  }

}
