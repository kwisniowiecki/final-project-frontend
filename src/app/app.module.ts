import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LearningAdventureListComponent } from './learning-adventure-list/learning-adventure-list.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { KanbanComponent } from './kanban/kanban.component';
import { TimerComponent } from './timer/timer.component';
import { AdventureCardComponent } from './adventure-card/adventure-card.component';
import { BacklogBackpackComponent } from './backlog-backpack/backlog-backpack.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InviteBackComponent } from './invite-back/invite-back.component';
import { ShortBreakTimerComponent } from './short-break-timer/short-break-timer.component';
import { LongBreakTimerComponent } from './long-break-timer/long-break-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearningAdventureListComponent,
    AnalyticsComponent,
    KanbanComponent,
    TimerComponent,
    AdventureCardComponent,
    BacklogBackpackComponent,
    CongratulationsComponent,
    FourOhFourComponent,
    InviteBackComponent,
    ShortBreakTimerComponent,
    LongBreakTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
