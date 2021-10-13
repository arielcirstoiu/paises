import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }`
  ]
}) 
export class PorPaisComponent  {

  constructor(private paisService:PaisService) { }

  termino : string = '';
  hayError: boolean = false;

  paises: Pais []=[];

  
  buscar(termino:string){
    this.hayError = false;

    this.termino = termino;  //termino que recibimos del inoput

    // console.log( this.termino );
    this.paisService.buscarPais(this.termino)
    .subscribe( resp =>{
      if(resp.status){
        this.hayError = true;
        this.paises = [];
      }else{
        this.paises = resp;
        console.log(this.paises);
      }
    });
    // TODO OBSERBABLE PARA RETORNAR NECESITA EL SUBSCRIBE
  }


  paisesSugerido: Pais [] = [];
  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => {
        this.paisesSugerido = paises;
        this.paisesSugerido = this.paisesSugerido.splice(0, 5)
    },
    (err:any) =>{
      this.paisesSugerido = []
    })
    //TODO: crear sugerencias

    
  }

  mostrarSugerencias: boolean = false;

  buscarSugerido( termino:string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }



  // buscar(){
  //   this.hayError = false;
  //   console.log( this.termino );

  //   this.paisService.buscarPais(this.termino)
  //   .subscribe( (resp) =>{
  //     console.log(resp);
  //   }, (err) => {
  //     console.info(err);
  //    this.hayError = true;
  //   });
  //   // TODO OBSERBABLE PARA RETORNAR NECESITA EL SUBSCRIBE
  // }
}
