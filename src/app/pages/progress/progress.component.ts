import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 10;
  progreso2: number = 30;

  mensajeLeyenda1: string = 'Este mensaje manda el padre 1';
  mensajeLeyenda2: string = 'Este mensaje manda el padre 2';
  constructor() { }

  ngOnInit() {
  }

  actualizar( event: number ) {

    console.log('Evento: ', event);
    this.progreso2 = event;


  }
}
