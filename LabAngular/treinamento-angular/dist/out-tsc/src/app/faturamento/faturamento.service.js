import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
var FaturamentoService = /** @class */ (function () {
    function FaturamentoService(http) {
        this.http = http;
    }
    FaturamentoService.prototype.getFaturamento = function () {
        return this.http.get(environment.apiUrl + "/faturamento");
    };
    FaturamentoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FaturamentoService);
    return FaturamentoService;
}());
export { FaturamentoService };
//# sourceMappingURL=faturamento.service.js.map