import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidatura } from './candidatura.model';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {

  private apiUrl = 'http://localhost:8080/api/candidaturas'; // URL da API de candidaturas no backend

  constructor(private http: HttpClient) {}

  getAllCandidaturas(): Observable<Candidatura[]> {
    return this.http.get<Candidatura[]>(`${this.apiUrl}`);
  }

  getCandidaturaById(id: number): Observable<Candidatura> {
    return this.http.get<Candidatura>(`${this.apiUrl}/${id}`);
  }

  createCandidatura(candidatura: Candidatura): Observable<Candidatura> {
    return this.http.post<Candidatura>(`${this.apiUrl}`, candidatura);
  }

  updateCandidatura(candidatura: Candidatura): Observable<Candidatura> {
    return this.http.put<Candidatura>(`${this.apiUrl}/${candidatura.id}`, candidatura);
  }

  deleteCandidatura(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
