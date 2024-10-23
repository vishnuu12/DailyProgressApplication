import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { AuthPageRoutingModule } from './auth-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add this
    IonicModule,
    AuthPageRoutingModule
  ],

  declarations: [
    LoginComponent,
  ],

  exports: [] 
})
export class AuthModule { }
