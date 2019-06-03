import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() progreso: number = 50;
  @Input('nombreLeyenda') leyenda: string = 'Leyenda';
  // <number> es la definicion del tipo de dato q este ento emite
  @Output('eventoActualizaValor') eventoCambioValor: EventEmitter<number> = new EventEmitter;

  constructor() {
    console.log('Leyenda: ', this.leyenda);
    console.log('Progreso: ', this.progreso);
  }

  ngOnInit() {
  }


  cambiarValor( valor: number) {

    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.eventoCambioValor.emit(this.progreso);
}

  onChanges(nuevoValor: number) {

    //vainilla javascript
    //Como esto devuelve un array, le pido la posicion 0
    //let elemHTML: any = document.getElementsByName('progreso')[0];
    //console.log('Vainilla java script: ', elemHTML.value);

    console.log('Este es el txtProgress: ', this.txtProgress);
    console.log('Nuevo valor: ', nuevoValor);

    if ( nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    //elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.eventoCambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();

}

}
