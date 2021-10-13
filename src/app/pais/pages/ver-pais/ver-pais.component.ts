import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  paises!:Pais

  constructor(private paisService: PaisService, private activatedRoute:ActivatedRoute) { }
// activateRoute detecta cambios en el url
  ngOnInit(): void {
    
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( (param) => this.paisService.getPaisPorAlpha(param.id) ),
            // tap( console.log ))
    //   )
    //   .subscribe(resp => {
    //     console.log(resp);
    //   }) 
    
    this.activatedRoute.params
      .subscribe( params =>{
        console.log(params);
        this.paisService.getPaisPorAlpha(params.id)
          .subscribe( pais => {
            console.log(pais.status);
            this.paises = pais;
            console.log(this.paises);
          })
      })


  }

}
