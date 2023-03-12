import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { PlatformComponent } from './platform/platform.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { KanbanComponent } from './view/kanban/kanban.component';
import { MainTableComponent } from './view/main-table/main-table.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      { path: '', redirectTo: 'kanban', pathMatch: 'full' },
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
  imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
