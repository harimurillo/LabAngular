import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
var ResumoService = /** @class */ (function () {
    function ResumoService(http) {
        this.http = http;
    }
    ResumoService.prototype.getResumo = function () {
        return this.http.get(environment.apiUrl + "/resumo");
    };
    ResumoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ResumoService);
    return ResumoService;
}());
export { ResumoService };
//# sourceMappingURL=resumo.service.js.map