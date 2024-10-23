import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./../modules/module.module').then(m => m.ModuleModule)
          },
          { path: 'members', loadChildren: () => import('./../modules/members/members.module').then(m => m.MembersModule) },
          { path: 'positive-gratitude', loadChildren: () => import('./../modules/positive-gratitude/positive-gratitude.module').then(m => m.PositiveGratitudeModule) },
          { path: 'my-day-plan', loadChildren: () => import('./../modules/my-day-plan/my-day-plan.module').then(m => m.MyDayPlanModule) },
        ]
        //   loadChildren: () => import('../modules/module.module').then(m => m.ModuleModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {
}
