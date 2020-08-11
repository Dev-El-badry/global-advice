import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  persons: any[];
  persons2: any[];
  constructor() { }

  ngOnInit() {
    this.persons = [
      {
        name: 'الأستاذ/ يوسف النباط',
        position: ' رئيس مجلس الادارة'
      },
      {
        name: 'الأستاذ/ محمد عادل المرسي',
        position: 'نائب رئيس مجلس الادارة'
      },
      {
        name: 'الأستاذ/ جمال الدين خربوش',
        position: 'عضو مجلس الادارة'
      }
    ];

    this.persons2 = [
      
      {
        name: 'الأستاذ/ أحمد الوشاحى ',
        position: 'المحاسب القانونى'
      },
      {
        name: 'الأستاذ/ خالد حجازى',
        position: 'المستشار القانونى'
      }
    ];
  }

}
