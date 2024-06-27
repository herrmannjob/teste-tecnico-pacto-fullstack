import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; // URL da API de autenticação no backend
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  }

  get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          const token = response.token;
          localStorage.setItem('token', token);
          this.tokenSubject.next(token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.tokenValue;
  }
}
