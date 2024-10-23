import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PositiveGratitudeComponent } from './positive-gratitude.component';
import { PositiveGratitudeRoutingModule } from './positive-gratitude-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PositiveGratitudeComponent],
  imports: [
    CommonModule,PositiveGratitudeRoutingModule,ReactiveFormsModule,
    IonicModule,
  ]
})
export class PositiveGratitudeModule { }
