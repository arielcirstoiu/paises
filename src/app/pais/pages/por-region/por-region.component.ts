import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
   ` button{
      margin-right:5px;
      margin-top:5px;
  }
  
  .mt-25{
    margin-top:15px;
  }`
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM','PA', 'AU', 'USAN', 'EEU', 'AL','ASEAN', 'CAIS','CEFTA', 'NAFTA', 'SAARC'];
  regionActiva:string = '';
  constructor(private paisService:PaisService) { }

  paises: Pais [] = [];

  ngOnInit(): void {
  }

  getClassCss(region: string):string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region: string){

    if(region === this.regionActiva){
      return;
    }

    this.limpiar = 0;
    this.regionActiva = region;
    
    this.paisService.getRegion(region).subscribe(resp => {
      this.paises = resp;
    })
  }


  limpiar: number = 0;

  limpiarButton(){
    if(this.regionActiva == ''){
      return;
    }
    this.limpiar = 1;
    this.paises = [];
    this.regionActiva = ''
    setTimeout(() => {
      this.limpiar = 0;
    }, 2300);
  }
}
