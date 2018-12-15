import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit, OnDestroy {

  consultas;
  inscricao;
  erro;

  constructor(private service: ConsultaService) { }
  ngOnInit() {
    this.inscricao = this.service.getConsultas()
      .subscribe(data => this.consultas = data,
        err => this.erro = true);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
