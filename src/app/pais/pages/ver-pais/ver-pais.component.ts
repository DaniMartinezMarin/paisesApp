import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private ngActivatedRoute: ActivatedRoute,
    private ngPaisService: PaisService 
  ) { }

  ngOnInit(): void {

    this.ngActivatedRoute.params
      .subscribe( 
        ( {id} ) => { //desestructuracion
          console.log(id); 
          this.ngPaisService.getPaisPorId(id)
            .subscribe(
              (pais: Pais[]) => {
                console.log(pais);
              },
              (error) => {
                console.error('Se ha producido un error: ', error);
              }
            )
        }
      )
  }

}
