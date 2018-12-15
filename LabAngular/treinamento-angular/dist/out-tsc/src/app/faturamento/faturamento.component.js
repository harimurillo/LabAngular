import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FaturamentoService } from './faturamento.service';
var FaturamentoComponent = /** @class */ (function () {
    function FaturamentoComponent(service) {
        this.service = service;
    }
    FaturamentoComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    FaturamentoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.service.getFaturamento()
            .subscribe(function (data) { return _this.faturamento = data; });
    };
    FaturamentoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-faturamento',
            templateUrl: './faturamento.component.html',
            styleUrls: ['./faturamento.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FaturamentoService])
    ], FaturamentoComponent);
    return FaturamentoComponent;
}());
export { FaturamentoComponent };
//# sourceMappingURL=faturamento.component.js.map