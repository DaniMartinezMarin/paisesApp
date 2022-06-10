import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  isBusquedaError: boolean = false;
  private _paises: Pais[] = [];

  get paises() : Pais[] {
    return [...this._paises];
  }

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino : string ) {
    this.isBusquedaError = false;
    this.termino = termino;

    this.paisService.getPais(this.termino).subscribe(
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
