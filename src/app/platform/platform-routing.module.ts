import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { KanbanComponent } from './view/kanban/kanban.component';
import { MainTableComponent } from './view/main-table/main-table.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      { path: 'kanban', component: KanbanComponent },
      { path: 'main-table', component: MainTableComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  declarations: [
    PlatformComponent,
    KanbanComponent,
    MainTableComponent,
    KanbanComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
