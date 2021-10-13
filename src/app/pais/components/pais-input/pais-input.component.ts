import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Para hacer la emision -- esto es un evento
  termino: string = '';

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debounce: Subject<string> = new Subject();
  //se emite cuando yo dejo de escribir


  @Input() placeholder:string = '';


  ngOnInit() {
    this.debounce
      .pipe(
        debounceTime(300) //cuantas milesimas de segundo esperar antes de emitir el siguiente valor,
        //No emitas valores al subscribe hasta que pasen 300 milisegundos 
      )
      .subscribe( valor => {
        // console.log('debauncer', valor);
        this.onDebounce.emit(valor)
      })
    }


  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(event: any){
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);
    this.debounce.next( this.termino );
  }





}
