import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var ConsultaService = /** @class */ (function () {
    function ConsultaService(http) {
        this.http = http;
    }
    ConsultaService.prototype.getConsultas = function () {
        return this.http.get(environment.apiUrl + "/consulta");
    };
    ConsultaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ConsultaService);
    return ConsultaService;
}());
export { ConsultaService };
//# sourceMappingURL=consulta.service.js.map