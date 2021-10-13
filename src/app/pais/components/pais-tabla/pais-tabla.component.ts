import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent{

  constructor(private paisService:PaisService) { 
    
  }

  @Input() paises:Pais[]=[]; //Coge el valor del otro lado y lo presenta
 




}
