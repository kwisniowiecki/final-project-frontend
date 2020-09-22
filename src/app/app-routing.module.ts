import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanban/kanban.component';
import { LearningAdventureListComponent } from './learning-adventure-list/learning-adventure-list.component';
import { BacklogBackpackComponent } from './backlog-backpack/backlog-backpack.component';
import { AdventureCardComponent } from './adventure-card/adventure-card.component';
import { TimerComponent } from './timer/timer.component';
import { InviteBackComponent } from './invite-back/invite-back.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { ShortBreakTimerComponent } from './short-break-timer/short-break-timer.component';
import { LongBreakTimerComponent } from './long-break-timer/long-break-timer.component';
import { DevelopersComponent } from './developers/developers.component';
import { AboutBackpackComponent } from './about-backpack/about-backpack.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'short-break-timer', component: ShortBreakTimerComponent },
  { path: 'long-break-timer', component: LongBreakTimerComponent },
  { path: 'invite-back', component: InviteBackComponent },
  { path: 'congratulations', component: CongratulationsComponent },
  { path: 'adventure-card', component: AdventureCardComponent },
  { path: 'backlog-backpack', component: BacklogBackpackComponent },
  {
    path: 'learning-adventure-list',
    component: LearningAdventureListComponent,
  },
  { path: 'backlog-backpack', component: BacklogBackpackComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'about-backpack', component: AboutBackpackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
