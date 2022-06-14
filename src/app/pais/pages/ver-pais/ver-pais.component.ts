import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  Object = Object;

  constructor(
    private ngActivatedRoute: ActivatedRoute,
    private ngPaisService: PaisService
  ) {}

  ngOnInit(): void {

    this.ngActivatedRoute.params.pipe(
      switchMap((param) => this.ngPaisService.getPaisPorId(param.id)),
      tap( console.log )
    )
    .subscribe(
      (paises: Pais[]) => {
        this.pais = paises[0];                
      }
    );

  }

}
