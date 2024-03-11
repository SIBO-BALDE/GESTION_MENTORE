import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesEvenementsComponent } from './gestion-des-evenements/gestion-des-evenements.component';
import { GestionDesMentorComponent } from './gestion-des-mentor/gestion-des-mentor.component';
import { GestionDesMetiersComponent } from './gestion-des-metiers/gestion-des-metiers.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { GestionDesMentoresAdminComponent } from './gestion-des-mentores-admin/gestion-des-mentores-admin.component';

const routes: Routes = [
  {
    path: '', component: MainAdminComponent, children: [
      { path: 'acceuil-admin', component: AcceuilAdminComponent },
      { path: 'dashboard-admin-mentor', component: GestionDesMentorComponent },
      { path: 'dashboard-admin-metiers', component: GestionDesMetiersComponent },
      { path: 'dashboard-admin-mentores', component: GestionDesMentoresAdminComponent },
      { path: 'dashboard-admin-evenement', component: GestionDesEvenementsComponent },
      { path: '', redirectTo: 'acceuil-admin', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
