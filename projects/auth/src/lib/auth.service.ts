import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly api = "https://exam.elevateegy.com/api/";

  constructor(private readonly http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.api}v1/auth/signin`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.api}v1/auth/signup`, data);
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLogged(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("token");
  }
}
