import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../model/auth-response-data.model';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeOutInterval: any;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('user-data', JSON.stringify(user))

    this.runTimeOutInterval(user)
  }

  runTimeOutInterval(user: User) {
    const todayDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime()
    const timeInterval = expirationDate - todayDate;

    this.timeOutInterval = setTimeout(() =>{
      //logout functionality or get the refresh token
    }, timeInterval)
  }

  getUserInLocalStorage() {
    const userDataString = localStorage.getItem('user-data')
    if(userDataString) {
      const userData = JSON.parse(userDataString);
      const expireDate = new Date(userData.expirationDate);
      const user = new User(userData.email, userData.token, userData.localId, expireDate)
      this.runTimeOutInterval(user);
      return user
    }
    return null;
  }

  logout() {
    this.
  }
}