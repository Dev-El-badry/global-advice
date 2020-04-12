import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './shared/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'global-advice';
  currentDir;
  constructor(private translateService: TranslateConfigService) {}

  ngOnInit() {

    if(!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'ar');
      this.setLang();
    } else {
      this.setLang();
    }

    
    if(this.lang == 'ar') { 
      this.currentDir = 'rtl';
    } else if (this.lang == 'en') { 
      this.currentDir = 'ltr';
    }

  }
  get lang() { return localStorage.getItem("lang"); }

  setLang() {
    this.translateService.setLanguage(this.lang);
    this.translateService.setDefault(this.lang);


    
  }

}
