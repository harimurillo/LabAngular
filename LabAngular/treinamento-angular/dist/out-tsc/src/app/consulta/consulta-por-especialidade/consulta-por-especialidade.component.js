import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ConsultaPorEspecialidadeComponent = /** @class */ (function () {
    function ConsultaPorEspecialidadeComponent() {
    }
    ConsultaPorEspecialidadeComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ConsultaPorEspecialidadeComponent.prototype, "consultas", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ConsultaPorEspecialidadeComponent.prototype, "titulo", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ConsultaPorEspecialidadeComponent.prototype, "erro", void 0);
    ConsultaPorEspecialidadeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-consulta-por-especialidade',
            templateUrl: './consulta-por-especialidade.component.html',
            styleUrls: ['./consulta-por-especialidade.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ConsultaPorEspecialidadeComponent);
    return ConsultaPorEspecialidadeComponent;
}());
export { ConsultaPorEspecialidadeComponent };
//# sourceMappingURL=consulta-por-especialidade.component.js.map