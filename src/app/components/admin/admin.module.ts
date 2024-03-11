import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { SidebarAdminComponent } from './layouts/sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './layouts/header-admin/header-admin.component';


@NgModule({
  declarations: [
    MainAdminComponent,
    SidebarAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
