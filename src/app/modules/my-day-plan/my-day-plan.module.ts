import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDayPlanComponent } from './my-day-plan.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDayPlanRoutingModule } from './my-day-play-routing.module';



@NgModule({
  declarations: [MyDayPlanComponent],
  imports: [
    CommonModule,IonicModule,ReactiveFormsModule,MyDayPlanRoutingModule
  ]
})
export class MyDayPlanModule { }
