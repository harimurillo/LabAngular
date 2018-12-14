import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1-component',
  templateUrl: './comp1-component.component.html',
  styleUrls: ['./comp1-component.component.css']
})
export class Comp1ComponentComponent implements OnInit {
  texto = `Componente 1 Funcionando!`;
  constructor() { }

  ngOnInit() {
  }

}
