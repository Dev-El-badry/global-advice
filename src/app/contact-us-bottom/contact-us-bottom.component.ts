import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../shared/translate-config.service';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import {take, tap} from 'rxjs/operators';
@Component({
  selector: 'app-contact-us-bottom',
  templateUrl: './contact-us-bottom.component.html',
  styleUrls: ['./contact-us-bottom.component.css']
})
export class ContactUsBottomComponent implements OnInit {
  currentDir;
  isTrue: boolean = true;
  isShow: boolean = false;
  constructor(private translateService: TranslateConfigService, private shareService: SharedService) { }

  ngOnInit() {
    if(!localStorage.getItem('_global_lang')) {
      localStorage.setItem('_global_lang', 'ar');
      this.setLang();
    } else {
      this.setLang();
    }

    
    if(this.lang == 'ar') { 
      this.currentDir = 'rtl';
    } else if (this.lang == 'en') { 
      this.currentDir = 'ltr';
    }

    this.shareService.openModal.subscribe(res => {
      this.isShow = res;
      console.log(res);
    });

    
  }
  get lang() { return localStorage.getItem("_global_lang"); }

  setLang() {
    this.translateService.setLanguage(this.lang);
    this.translateService.setDefault(this.lang);
  }

  onSubmit(form: NgForm) {

    const formData = {
          paramlist: 
          {
            data: {
              type: 'contact',
              name: form.value.name,
              contact_name: form.value.name,
              mobile: form.value.phone,
              email_from: form.value.email,
              company_name: form.value.companyEmail,
              date_from: form.value.dateFrom,
              date_to: form.value.dateTo
            }
          } 
    };


    console.log(formData);
    this.shareService.call_odoo_function('GA-test03', 'admin', 'admin123', 'helpdesk_lite.ticket', 'create', formData)
    .pipe(take(1), tap(
      resData => {
        form.reset();
        this.isShow = false;

      }
    )).subscribe(() => {
      this.shareService.openSnackBar('تم الارسال .. سوف يتم التواصل معك!', 'شكراً');
    });
    
  }

  openModal() {
    const mode = !this.isShow;
    this.shareService.showModal(mode);
  }

  openWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=01022111251')
  }



}
