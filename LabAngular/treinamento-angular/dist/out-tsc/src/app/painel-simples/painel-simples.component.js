import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PainelSimplesComponent = /** @class */ (function () {
    function PainelSimplesComponent() {
        this.tipo = 'info';
    }
    PainelSimplesComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PainelSimplesComponent.prototype, "titulo", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PainelSimplesComponent.prototype, "col", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PainelSimplesComponent.prototype, "tipo", void 0);
    PainelSimplesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-painel-simples',
            templateUrl: './painel-simples.component.html',
            styleUrls: ['./painel-simples.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PainelSimplesComponent);
    return PainelSimplesComponent;
}());
export { PainelSimplesComponent };
//# sourceMappingURL=painel-simples.component.js.map