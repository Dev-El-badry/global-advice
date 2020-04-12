import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HowWorkComponent } from './how-work/how-work.component';
import { ComplaintsComponent } from './complaints/complaints.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'how-we-work', component: HowWorkComponent
  },
  {
    path: 'complaints', component: ComplaintsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
