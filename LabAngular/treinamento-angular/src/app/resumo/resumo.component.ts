import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit, OnDestroy {

  resumo;
  inscricao;

  constructor(private service: ResumoService) {
  }

  ngOnInit() {
    this.inscricao = this.service.getResumo()
      .subscribe(data => this.resumo = data);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
