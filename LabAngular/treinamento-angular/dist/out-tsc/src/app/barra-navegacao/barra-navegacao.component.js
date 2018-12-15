import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
var BarraNavegacaoComponent = /** @class */ (function () {
    function BarraNavegacaoComponent() {
        this.onToggle = new EventEmitter();
    }
    BarraNavegacaoComponent.prototype.ngOnInit = function () {
    };
    BarraNavegacaoComponent.prototype.disparaEventoToggle = function () {
        this.onToggle.emit();
    };
    BarraNavegacaoComponent.prototype.encerrarApp = function () {
        parent.window.close();
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BarraNavegacaoComponent.prototype, "onToggle", void 0);
    BarraNavegacaoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-barra-navegacao',
            templateUrl: './barra-navegacao.component.html',
            styleUrls: ['./barra-navegacao.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BarraNavegacaoComponent);
    return BarraNavegacaoComponent;
}());
export { BarraNavegacaoComponent };
//# sourceMappingURL=barra-navegacao.component.js.map