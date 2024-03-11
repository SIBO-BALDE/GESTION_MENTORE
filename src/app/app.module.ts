import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/security/authentification/authentification.component';
import { AcceuilAdminComponent } from './components/admin/acceuil-admin/acceuil-admin.component';
import { GestionDesMentorComponent } from './components/admin/gestion-des-mentor/gestion-des-mentor.component';
import { GestionDesMentoresAdminComponent } from './components/admin/gestion-des-mentores-admin/gestion-des-mentores-admin.component';
import { GestionDesMetiersComponent } from './components/admin/gestion-des-metiers/gestion-des-metiers.component';
import { GestionDesEvenementsComponent } from './components/admin/gestion-des-evenements/gestion-des-evenements.component';
import { AcceuilMentorComponent } from './components/mentor/acceuil-mentor/acceuil-mentor.component';
import { GestionDesSessionsComponent } from './components/mentor/gestion-des-sessions/gestion-des-sessions.component';
import { GestionDesMentoresComponent } from './components/mentor/gestion-des-mentores/gestion-des-mentores.component';
import { AcceuilComponent } from './components/mentores/acceuil/acceuil.component';
import { AproposComponent } from './components/mentores/apropos/apropos.component';
import { OrientationComponent } from './components/mentores/orientation/orientation.component';
import { EvenementComponent } from './components/mentores/evenement/evenement.component';
import { MentorComponent } from './components/mentores/mentor/mentor.component';
import { ContactComponent } from './components/mentores/contact/contact.component';
import { FaqComponent } from './components/mentores/faq/faq.component';
import { MentionLegalComponent } from './components/mentores/mention-legal/mention-legal.component';
import { ConfidentialiteComponent } from './components/mentores/confidentialite/confidentialite.component';
import { ConditionUtilisationComponent } from './components/mentores/condition-utilisation/condition-utilisation.component';
import { SessionMentoresComponent } from './components/mentores/session-mentores/session-mentores.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MetierService } from './services/metier/metier.service';
import { EvenementService } from './services/evenement/evenement.service';
import { MentorService } from './services/mentor/mentor.service';
import { MentoresService } from './services/mentores/mentores.service';
import { MessageService } from './services/message/message.service';
import { SessionService } from './services/session/session.service';
import { PageErrorComponent } from './components/layouts/page-error/page-error.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/securityService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AcceuilAdminComponent,
    GestionDesMentorComponent,
    GestionDesMentoresAdminComponent,
    GestionDesMetiersComponent,
    GestionDesEvenementsComponent,
    AcceuilMentorComponent,
    GestionDesSessionsComponent,
    GestionDesMentoresComponent,
    AcceuilComponent,
    AproposComponent,
    OrientationComponent,
    EvenementComponent,
    MentorComponent,
    ContactComponent,
    FaqComponent,
    MentionLegalComponent,
    ConfidentialiteComponent,
    ConditionUtilisationComponent,
    SessionMentoresComponent,
    HeaderComponent,
    FooterComponent,
    PageErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    MetierService,
    EvenementService,
    MentorService,
    MentoresService,
    MessageService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
