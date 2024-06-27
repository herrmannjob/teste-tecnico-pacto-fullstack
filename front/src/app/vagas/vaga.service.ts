import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  private apiUrl = 'http://localhost:8080/api/vagas'; // URL da API no backend

  constructor(private http: HttpClient) { }

  listarVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  buscarVagaPorId(id: number): Observable<Vaga> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Vaga>(url);
  }

  atualizarVaga(id: number, vaga: Vaga ): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, {vaga: vaga, id: id},);
  }

  salvarVaga(vaga: Vaga): Observable<Vaga> {
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  deletarVaga(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
