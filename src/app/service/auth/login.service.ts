import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});
  url: string= "http://localhost:8080/auth/"

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<any> {
  
      return this.http.post<any>(this.url + "login", credentials).pipe(
        tap( userData => {
          if(userData!=null && userData.idUsuario!=null) {
          this.currentUserData.next(userData); 
          this.currentUserLoginOn.next(true);
            console.log("datos del servidor" + userData)
        } else {
                this.currentUserLoginOn.next(false);
              }
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
        if(error.status === 0) {
          console.error('Se ha producido un error',error);
        } 
        else {
          console.error('El Servidor retorno el codigo de estado', error.status, error);
        }
        return throwError(()=> new Error('Intente Nuevamente'));

      }

      get userData():Observable<User> {
        return this.currentUserData.asObservable();
      }
      get userLoginOn():Observable<boolean> {
        return this.currentUserLoginOn.asObservable();
      }



}
