import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { browser } from 'protractor';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  disparaEventoToggle(){
    this.onToggle.emit();
  }

  encerrarApp(){
    window.close();
  }
}
