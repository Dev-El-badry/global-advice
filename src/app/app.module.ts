import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateConfigModule } from './translate-config.module';
import {SlideshowModule} from 'ng-simple-slideshow';


//services
import { TranslateConfigService } from './shared/translate-config.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsComponent } from './footer/rights/rights.component';
import { ContactusComponent } from './footer/contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { SlideComponent } from './home/slider/slide/slide.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './services/service/service.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { OtherServiceComponent } from './other-services/other-service/other-service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { HowWorkComponent } from './how-work/how-work.component';
import { OurTeamComponent } from './home/our-team/our-team.component';
import { NavListComponent } from './navigation/nav-list/nav-list.component';
import { ContactUsBottomComponent } from './contact-us-bottom/contact-us-bottom.component';
import { JobsComponent } from './jobs/jobs.component';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    RightsComponent,
    ContactusComponent,
    HomeComponent,
    SliderComponent,
    SlideComponent,
    OurServiceComponent,
    ServicesComponent,
    ServiceComponent,
    OtherServicesComponent,
    OtherServiceComponent,
    AboutusComponent,
    ComplaintsComponent,
    HowWorkComponent,
    OurTeamComponent,
    NavListComponent,
    ContactUsBottomComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateConfigModule,
    SlideshowModule,
    FormsModule
  ],
  providers: [TranslateConfigService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
