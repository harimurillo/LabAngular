import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ResumoService } from './resumo.service';
var ResumoComponent = /** @class */ (function () {
    function ResumoComponent(service) {
        this.service = service;
    }
    ResumoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.service.getResumo()
            .subscribe(function (data) { return _this.resumo = data; });
    };
    ResumoComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    ResumoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resumo',
            templateUrl: './resumo.component.html',
            styleUrls: ['./resumo.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ResumoService])
    ], ResumoComponent);
    return ResumoComponent;
}());
export { ResumoComponent };
//# sourceMappingURL=resumo.component.js.map