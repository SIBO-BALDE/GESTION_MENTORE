import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MainMentorComponent } from './main-mentor/main-mentor.component';
import { SidebarMentorComponent } from './layouts/sidebar-mentor/sidebar-mentor.component';
import { HeaderMentorComponent } from './layouts/header-mentor/header-mentor.component';


@NgModule({
  declarations: [
    MainMentorComponent,
    SidebarMentorComponent,
    HeaderMentorComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }
