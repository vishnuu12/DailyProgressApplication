import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { IonicModule } from '@ionic/angular';
import { MembersRoutingModule } from './members-routing.module';



@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    IonicModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
