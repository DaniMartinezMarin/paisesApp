import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  isBusquedaError: boolean = false;
  private _paises: Pais[] = [];

  get paises() : Pais[] {
    return [...this._paises];
  }

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino : string ): void {
    this.isBusquedaError = false;
    this.termino = termino;

    this.paisService.getPaisPorCapital(this.termino).subscribe(
      (paises: Pais[]) => {
        this._paises = paises;
      },
      (error: HttpErrorResponse) => {
        this.isBusquedaError = true;
        this._paises = [];
      }
    );
  }
  
}
