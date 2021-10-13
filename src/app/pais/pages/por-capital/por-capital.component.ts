import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  termino: string = '';
  hayError: boolean = false;
  paises:  Pais[] = [];

  // sugerencias(termino:string){
  //     this.hayError = false;
  //     //TODO: crear sugerencias
  //   }


  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCapital(termino)
      .subscribe( resp =>{
        if(resp.status == 404){
          this.hayError = true;
          this.paises = [];
        }else{
          this.paises = resp;
          console.log(this.paises);
        }
      })
  }

}
