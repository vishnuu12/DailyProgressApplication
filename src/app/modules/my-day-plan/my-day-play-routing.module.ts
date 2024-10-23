import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDayPlanComponent } from './my-day-plan.component';


const routes: Routes = [
  { path:'', component:MyDayPlanComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDayPlanRoutingModule { }
