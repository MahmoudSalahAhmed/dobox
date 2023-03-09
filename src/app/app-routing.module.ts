import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path:'', redirectTo:'platform', pathMatch:"full"},
      {
        path:'platform', 
        loadChildren: () => import('../app/platform/platform-routing.module').then(m => m.PlatformRoutingModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
