import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca3,flags,population');
  }

  constructor(private ngHttpClient: HttpClient) {}

  getPais(termino: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/name/${termino}`;
    return this.ngHttpClient.get<Pais[]>(url, { params: this.httpParams });
  }

  getPaisPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.ngHttpClient.get<Pais[]>(url, { params: this.httpParams });
  }

  getPaisPorId(id: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.ngHttpClient.get<Pais[]>(url);
  }

  getPaisPorRegion(termino: String): Observable<Pais[]> {
    const url = `${this._apiUrl}/region/${termino}`;
    return this.ngHttpClient.get<Pais[]>(url, { params: this.httpParams });
  }
}
