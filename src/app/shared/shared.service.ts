import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()
export class SharedService {
    openModal = new Subject<boolean>()
    constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }

   showModal(mode) {
       this.openModal.next(mode);
   }


   call_odoo_function(dbName, user, pass, modelName, functionName, data): Observable<any>  {
     data = JSON.stringify(data);
     const nwData = {paramlist: data};
     const port = 8888;	
     const odooUrl = 'http://207.154.195.214:4000/call_method_global' + '/' + port + '/' + dbName + '/' +
      user + '/' + pass + '/' + modelName + '/' + functionName;
     console.log('ay kalam 5');
     return this.http.post(odooUrl, nwData);
   }


   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
}