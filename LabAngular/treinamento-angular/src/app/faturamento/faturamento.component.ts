import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {
  faturamento;
  inscricao;

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  constructor(private service: FaturamentoService) { }

  ngOnInit() {
    this.inscricao = this.service.getFaturamento()
      .subscribe(data => this.faturamento = data);
  }

}
