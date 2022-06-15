import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  isBusquedaError: boolean = false;
  showSugerencias: boolean = false;

  private _paises: Pais[] = [];
  private _paisesSugeridos: Pais[] = [];

  get paises(): Pais[] {
    return [...this._paises];
  }

  get paisesSugeridos(): Pais[] {
    return [...this._paisesSugeridos];
  }

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.isBusquedaError = false;
    this.showSugerencias = false;
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

  mostrarSugerencias(termino: string): void {
    this.isBusquedaError = false;
    this.showSugerencias = true;
    this.termino = termino;

    this.paisService.getPais(termino)
    .subscribe(
      (paises: Pais[]) => {
        this._paisesSugeridos = paises.splice(0, 5);
      },
      (error: HttpErrorResponse) => {
        this._paisesSugeridos = [];
      }
    );
  }

}
