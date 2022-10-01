import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { HelplessComponent } from './helpless/helpless.component';
import { ChallengesHelpComponent } from './helptool/challenges-help/challenges-help.component';
import { HelptoolComponent } from './helptool/helptool.component';
import { HomeHelpComponent } from './helptool/home-help/home-help.component';
import { InvalidHelpComponent } from './helptool/invalid-help/invalid-help.component';
import { ScheduleHelpComponent } from './helptool/schedule-help/schedule-help.component';
import { StoreHelpComponent } from './helptool/store-help/store-help.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'store', component: StoreComponent },
  { path: 'helpless', component: HelplessComponent },
  {
    path: 'help',
    component: HelptoolComponent,
    children: [
      { path: 'home', component: HomeHelpComponent },
      { path: 'challenges', component: ChallengesHelpComponent },
      { path: 'schedule', component: ScheduleHelpComponent },
      { path: 'store', component: StoreHelpComponent },
      { path: '**', component: InvalidHelpComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
