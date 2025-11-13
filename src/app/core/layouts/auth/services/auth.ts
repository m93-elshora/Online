import { environment } from '../../../../shared/environments/enviroments.prod';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly httpClient = inject(HttpClient);

  constructor() {}

  register(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/auth/signup', data);
  }
  login(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/auth/signin', data);
  }
  forgetPassword(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/auth/forgotPasswords', data);
  }
  resetPassword(data: any): Observable<any> {
    return this.httpClient.put(environment.baseUrl + '/auth/resetPasswords', data);
  }
  changePassword(data: any): Observable<any> {
    return this.httpClient.patch(environment.baseUrl + '/auth/changePasswords', data);
  }
  sendCode(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/auth/sendResetCode', data);
  }
}
