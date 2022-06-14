import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl = 'https://restcountries.com/v3.1';

  constructor( private ngHttpClient: HttpClient ) { }

  getPais( termino: string ): Observable<Pais[]> {

    const url = `${this._apiUrl}/name/${termino}`;
    return this.ngHttpClient.get<Pais[]>(url);
  }

  getPaisPorCapital( termino: string ): Observable<Pais[]> {
    
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.ngHttpClient.get<Pais[]>(url);
  }

  getPaisPorId( id: string ): Observable<Pais[]> {
    
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.ngHttpClient.get<Pais[]>(url);
  }
}
