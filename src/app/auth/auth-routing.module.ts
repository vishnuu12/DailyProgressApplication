import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'modules',
    loadChildren: () => import('../modules/module.module').then( m => m.ModuleModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('../layout/layout.module').then(m => m.LayoutModule),
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
