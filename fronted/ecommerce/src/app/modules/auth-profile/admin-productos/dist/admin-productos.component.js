"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminProductosComponent = void 0;
var core_1 = require("@angular/core");
var AdminProductosComponent = /** @class */ (function () {
    function AdminProductosComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Administrador' + this.authService.user;
    }
    AdminProductosComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
            //en el jquery para que nos funcione bien la plantilla
        }, 50);
        //checamos si ya estan logeados no tiene caso que este aqui en esta vista
        if (!this.authService.user && !this.authService.token) {
            this.router.navigate(['/auth/login']); //ve a la vista del home o al login
            //document.location.reload();
        }
    };
    AdminProductosComponent.prototype.Listar = function () {
        this.router.navigate(["/auth/admin-productos/listar"]); //se pone el nombre que pusimos en path de app-routing
    };
    AdminProductosComponent.prototype.Nuevo = function () {
        this.router.navigate(["/auth/admin-productos/nuevo"]); //se pone el nombre que pusimos en path de app-routing
    };
    AdminProductosComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-productos',
            templateUrl: './admin-productos.component.html',
            styleUrls: ['./admin-productos.component.css']
        })
    ], AdminProductosComponent);
    return AdminProductosComponent;
}());
exports.AdminProductosComponent = AdminProductosComponent;
