import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[];

  breakpoint: number;
  constructor() { }

  ngOnInit() {
    this.services = [
      {
        id: 1,
        icon: 'favorite',
        title: ' برامج تأمين الحياة',
        content: `




       .المبدأ فى تأمينات الحياة هو انك تضع اسرتك كأولوية
       جلوبال أدفايس للوساطة فى التأمين توفر لك مجموعه متنوعة و مميزة من برامج تأمينات الحياة التنافسية لتساعدك على اختيار و تصميم افضل و انسب الحلول لاحتياجاتك
        `
      },

      {
        id: 2,
        icon: 'work',
        title: '  برامج تأمين المعاش والتقاعد',
        content: `
        إن الوقت المناسب للتفكير في وقت التقاعد هو اﻷن حيث تستطيع توفير الموارد الكافية
        التي تضمن لك العيش في نفس المستوى المادي عند تقاعدك 
        `
      },
      
      {
        id: 3,
        icon: 'directions_car',
        title: ' برامج تأمين السيارات',
        content: `
        يتم تعويض المؤمن له ضد فقدان أو تلف السيارة المؤمن عليها و ملحقاتها و كذلك قطع الغيار.
        `
      },
      
      {
        id: 4,
        icon: 'spa',
        title: ' برامج التأمين الطبى ',
        content: `
        برامج مميزة فى التأمين  الطبى سواء للافراد او المجموعات, من خلال برامج ثابتة و برامج متغيرة وفقا لمتطلبات كل عميل
        `
      },
      {
        id: 5,
        icon: 'flight',
        title: ' برنامج تأمين السفر',
        content: `
        هو التأمين الذي يهدف إلى تغطية النفقات الطبية، وإلغاء الرحلة، والأمتعة المفقودة، وحوادث 
الطيران وغيرها من الخسائر المتكبدة أثناء السفر، سواء دوليا أو محليا
        `
      }
    ];

    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  onResize(event) {

    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

}
