import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient,
  ) { }
  // apiUrl = 'http://127.0.0.1:8000/'
  apiUrl = 'http://127.0.0.1:8000/api';
  // postSession(session:any)
  // {
  //   return this.http.post<any>(`${this.apiUrl}/session`,session);
  // }

  // function pour ajouter session
 
  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}`);
  // }

  postSession(session: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/session/create`, session)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      // Gérer l'erreur d'authentification ici, par exemple, rediriger vers la page de connexion.
      console.error('Erreur dauthentification', error);
    } else {
      console.error('Une erreur inattendue s\'est produite', error);
    }

    return throwError('Quelque chose s\'est mal passé; veuillez réessayer plus tard.');
  }
}
