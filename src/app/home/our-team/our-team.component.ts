import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  persons: any[];
  constructor() { }

  ngOnInit() {
    this.persons = [
      {
        name: 'الأستاذ/ يوسف النباط',
        position: ' رئيس مجلس اإلدارة'
      },
      {
        name: 'الأستاذ/ محمد عادل المرسي',
        position: 'نائب رئيس مجلس اإلدارة'
      },
      {
        name: 'الأستاذ/ جمال الدين خربوش',
        position: 'عضو مجلس اإلدارة'
      },
      {
        name: 'الأستاذة/ عبير خطاب ',
        position: 'العضو المنتدب الفني'
      },
      {
        name: 'الأستاذة/ حنان محمد المرسي',
        position: 'العضو المنتدب المالي'
      },
      {
        name: 'الأستاذ/ آنيس فاروق ',
        position: ' رئيس قسم المبيعات '
      },
    ];
  }

}
