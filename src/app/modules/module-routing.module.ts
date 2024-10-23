import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules.component';


const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
  { path: 'positive-gratitude', loadChildren: () => import('./positive-gratitude/positive-gratitude.module').then(m => m.PositiveGratitudeModule) },
  { path: 'positive-gratitude', loadChildren: () => import('./my-day-plan/my-day-plan.module').then(m => m.MyDayPlanModule) },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule { }
