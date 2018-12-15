import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MenuLateralComponent = /** @class */ (function () {
    function MenuLateralComponent() {
        this.menuAberto = false;
    }
    MenuLateralComponent.prototype.ngOnInit = function () {
    };
    MenuLateralComponent.prototype.toggleMenu = function () {
        this.menuAberto = !this.menuAberto;
    };
    MenuLateralComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu-lateral',
            templateUrl: './menu-lateral.component.html',
            styleUrls: ['./menu-lateral.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());
export { MenuLateralComponent };
//# sourceMappingURL=menu-lateral.component.js.map