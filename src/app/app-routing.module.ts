import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/security/authentification/authentification.component';
import { AcceuilComponent } from './components/mentores/acceuil/acceuil.component';
import { AproposComponent } from './components/mentores/apropos/apropos.component';
import { OrientationComponent } from './components/mentores/orientation/orientation.component';
import { ContactComponent } from './components/mentores/contact/contact.component';
import { MentorComponent } from './components/mentores/mentor/mentor.component';
import { EvenementComponent } from './components/mentores/evenement/evenement.component';
import { FaqComponent } from './components/mentores/faq/faq.component';
import { MentionLegalComponent } from './components/mentores/mention-legal/mention-legal.component';
import { ConfidentialiteComponent } from './components/mentores/confidentialite/confidentialite.component';
import { ConditionUtilisationComponent } from './components/mentores/condition-utilisation/condition-utilisation.component';
import { PageErrorComponent } from './components/layouts/page-error/page-error.component';

const routes: Routes = [
  //utilisateur simple
  { path: 'login', component: AuthentificationComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'orientation', component: OrientationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'mentioLegal', component: MentionLegalComponent },
  { path: 'confidentialite', component: ConfidentialiteComponent },
  { path: 'conditionUtilisation', component: ConditionUtilisationComponent },
  { path: 'erreur404', component: PageErrorComponent },
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },

  //admin
  { 
    path: 'dashboard-admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },

  //mentor
  {
    path: 'dashboard-mentor',
    loadChildren: () => import('./components/mentor/mentor.module').then(m => m.MentorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
