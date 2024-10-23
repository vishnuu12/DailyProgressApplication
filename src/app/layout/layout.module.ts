import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthPageRoutingModule } from '../auth/auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  imports: [
    FormsModule,
    LayoutRoutingModule,
    IonicModule,
  ],

  declarations: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
