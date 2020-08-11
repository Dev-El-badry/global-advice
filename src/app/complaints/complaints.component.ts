import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { take, tap } from 'rxjs/operators';
import { from } from 'rxjs';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  constructor(private shareService: SharedService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {

    const formData = {
          paramlist: 
          {
            data: {
              type: 'complaints',
              name: form.value.contact_name,
                contact_name: form.value.name,
              mobile: form.value.mobile,
              email_from: form.value.email_from,
              address: form.value.address,
              policy_no: form.value.policy_no,
              description: form.value.description
            }
          } 
    };


    console.log(formData);
    this.shareService.call_odoo_function('GA-test03', 'admin', 'admin123', 'helpdesk_lite.ticket', 'create', formData)
    .pipe(take(1), tap(
      resData => {
        form.reset();
      }
    )).subscribe((res) => {
    
      this.shareService.openSnackBar('تم الارسال .. سوف يتم التواصل معك!', 'شكراً');
    },
    err => {
     
      this.shareService.openSnackBar('حدث خطأ برجاء اعد المحاولة مره اخرى', 'اغلاق');
    });
    
  }


}
