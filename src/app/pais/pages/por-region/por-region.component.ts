import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  private _paises: Pais[] = [];

  get paises(): Pais[] {
    return [...this._paises];
  }

  constructor( private paisService: PaisService) {}

  getClaseCss(region: String) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if(this.regionActiva === region) return;

    this.regionActiva = region;
    this.buscar(this.regionActiva);
  }

  buscar( termino : string ): void {

    this.paisService.getPaisPorRegion(termino).subscribe(
      (paises: Pais[]) => {
        this._paises = paises;
      },
      (error: HttpErrorResponse) => {
        this._paises = [];
      }
    );
  }
}
