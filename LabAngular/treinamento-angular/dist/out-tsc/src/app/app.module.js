import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumoService } from './resumo/resumo.service';
import { ConsultaService } from './consulta/consulta.service';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { FaturamentoService } from './faturamento/faturamento.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                PainelSimplesComponent,
                BarraNavegacaoComponent,
                MenuLateralComponent,
                ResumoComponent,
                ConsultaComponent,
                ConsultaPorEspecialidadeComponent,
                FaturamentoComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                ResumoService,
                ConsultaService,
                FaturamentoService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map