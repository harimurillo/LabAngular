import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConsultaService } from './consulta.service';
var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(service) {
        this.service = service;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.service.getConsultas()
            .subscribe(function (data) { return _this.consultas = data; }, function (err) { return _this.erro = true; });
    };
    ConsultaComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    ConsultaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-consulta',
            templateUrl: './consulta.component.html',
            styleUrls: ['./consulta.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ConsultaService])
    ], ConsultaComponent);
    return ConsultaComponent;
}());
export { ConsultaComponent };
//# sourceMappingURL=consulta.component.js.map