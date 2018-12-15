import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';


let routes = [
  { path: 'resumo', component: ResumoComponent },
  { path: 'consultas', component: ConsultaComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: "**", redirectTo: '/resumo' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
