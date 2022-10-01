import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelptoolComponent } from './helptool.component';
import { HomeHelpComponent } from './home-help/home-help.component';
import { ChallengesHelpComponent } from './challenges-help/challenges-help.component';
import { ScheduleHelpComponent } from './schedule-help/schedule-help.component';
import { StoreHelpComponent } from './store-help/store-help.component';
import { RouterModule } from '@angular/router';
import { InvalidHelpComponent } from './invalid-help/invalid-help.component';



@NgModule({
  declarations: [
    HelptoolComponent,
    HomeHelpComponent,
    ChallengesHelpComponent,
    ScheduleHelpComponent,
    StoreHelpComponent,
    InvalidHelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HelptoolModule { }
