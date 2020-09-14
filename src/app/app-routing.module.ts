import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanban/kanban.component';
import { LearningAdventureListComponent } from './learning-adventure-list/learning-adventure-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'kanban', component: KanbanComponent },
  {
    path: 'learning-adventure-list',
    component: LearningAdventureListComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
