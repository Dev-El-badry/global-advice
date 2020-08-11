import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { take, tap } from 'rxjs/operators';

interface FileReaderEventTarget extends EventTarget {
  result:string
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage():string;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor(private shareService: SharedService) { }
  cv_file: any;
  ngOnInit() {
  }

  handleFileSelect(evt, callback) {
    let file_byte = '';
    var files = evt;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =  function(readerEvt) {
            var binaryString = readerEvt.target['result'];
            // console.log(typeof btoa(binaryString.toString()));
              file_byte = btoa(binaryString.toString());
             callback(file_byte)
            // this.cv_file = btoa(binaryString.toString());
          
          };  
        
        reader.readAsBinaryString(file);
    }
}

onChange(file) {
  var file_binary = this.handleFileSelect(file.target.files, (file) => {
    this.cv_file  = file;
  });
}


  onSubmit(form: NgForm) {
    
    // console.log(form.value);
      // console.log(this.cv_file, 'file');
      
    const formData = {
          paramlist: 
          {
            data: {
              type: 'cv',
              name: form.value.name,
              contact_name: form.value.name,
              mobile: form.value.phone,
              email_from: form.value.email,
              description: form.value.more_details,
              cv_file: this.cv_file
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
