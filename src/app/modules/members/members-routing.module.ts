import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members.component';


const routes: Routes = [
  { path:'', component:MembersComponent},
//   { path:'home', component:HomeComponent},
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule { }
