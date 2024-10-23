import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositiveGratitudeComponent } from './positive-gratitude.component';


const routes: Routes = [
  { path:'', component:PositiveGratitudeComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositiveGratitudeRoutingModule { }
