import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ModuleRoutingModule } from './module-routing.module';
import { IonicModule } from '@ionic/angular';
import { PositiveGratitudeModule } from './positive-gratitude/positive-gratitude.module';
import { PositiveGratitudeRoutingModule } from './positive-gratitude/positive-gratitude-routing.module';
import { MyDayPlanRoutingModule } from './my-day-plan/my-day-play-routing.module';



@NgModule({
  imports: [
    ModuleRoutingModule,PositiveGratitudeRoutingModule,MyDayPlanRoutingModule,
    IonicModule
  ],

  declarations: [
    HomeComponent
  ],

  exports: [] 
})
export class ModuleModule { }
