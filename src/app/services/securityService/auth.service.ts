import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { MessageService } from '../message/message.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import {url} from 'src/app/services/apiUrl'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private message: MessageService, private route: Router) { }

  getAllUser() {
    return this.http.get<User[]>(`${url}user/index`);
  }

  login(user: any, onSuccess: Function){
    return this.http.post(`${url}login`, user).subscribe((reponse: any) => onSuccess(reponse));
  }

  register(mentore: User, onSuccess: Function){
    this.http.post(`${url}register`,mentore).subscribe((reponse: any) => onSuccess(reponse));

  }

  logout() {
    // On vide les infos du token et on met à je la val de isAuth$
   localStorage.removeItem('userOnline')
    this.route.navigate(['login']);
  }

}
