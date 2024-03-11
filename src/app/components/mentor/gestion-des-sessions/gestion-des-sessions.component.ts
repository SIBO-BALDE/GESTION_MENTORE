import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-gestion-des-sessions',
  templateUrl: './gestion-des-sessions.component.html',
  styleUrls: ['./gestion-des-sessions.component.css']
})
export class GestionDesSessionsComponent implements OnInit {
  // definir notre constructeur 
  constructor(private sessionServices:SessionService){}
  // variables
  theme:string = '';
  lieu:string = '';
  mentore=[];
  // date:Date;

  sessions:any[] = [];
  // console.log(this.sessions:any);


  //NGONIT
  ngOnInit(): void {
    this.sessionServices.postSession('session').subscribe(response => {
      this.sessions = response
    }) 
  }
  
  // function pour ajouter une session
  nouvelSession = { 
    theme: '', lieu: '' };
  ajouterSession() {
    const themeTemporaire = this.nouvelSession.theme;
    const lieuTemporaire = this.nouvelSession.lieu;

  
    this.sessionServices.postSession(this.nouvelSession)
    .subscribe(response => {
      this.sessions.push(response);
      this.nouvelSession = { theme: '', lieu: '' }
      console.log('Utilisateur ajouté avec succès', response);
    }, error => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
    });
   
    localStorage.setItem('session', JSON.stringify(this.sessions));

  }
  // console.log(object);

}
