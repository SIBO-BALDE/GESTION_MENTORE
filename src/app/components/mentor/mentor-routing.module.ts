import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMentorComponent } from './main-mentor/main-mentor.component';
import { AcceuilMentorComponent } from './acceuil-mentor/acceuil-mentor.component';
import { GestionDesMentoresComponent } from './gestion-des-mentores/gestion-des-mentores.component';
import { GestionDesSessionsComponent } from './gestion-des-sessions/gestion-des-sessions.component';

const routes: Routes = [
  {
    path: '', component: MainMentorComponent, children: [
      { path: 'acceuil-mentor', component: AcceuilMentorComponent },
      { path: 'gestion-mentore', component: GestionDesMentoresComponent },
      { path: 'gestion-session', component: GestionDesSessionsComponent},
      { path: '', redirectTo: 'acceuil-mentor', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
