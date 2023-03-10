"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListarComponent = void 0;
var core_1 = require("@angular/core");
var ListarComponent = /** @class */ (function () {
    function ListarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ListarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProductos()
            .subscribe(function (data) {
            _this.productos = data;
            //alert(data[0].id + " " + data[0].disco + " " + data[0].memoriaRam + " " + data[0].procesador);
        });
    };
    ListarComponent.prototype.Editar = function (producto) {
        //guardamos el id de la fila seleccionada en localstorage
        localStorage.setItem("id", producto.id.toString());
        this.router.navigate(["/auth/admin-productos/editar"]);
    };
    ListarComponent.prototype.Delete = function (producto) {
        var _this = this;
        this.authService.deleteProducto(producto)
            .subscribe(function (data) {
            _this.productos = _this.productos.filter(function (p) { return p !== producto; }); //en lugar de que el backend devuelva
            //un string que era como lo tenia devuelve como si fuera un get de toda las listas 
            alert("producto eliminado");
        });
    };
    ListarComponent = __decorate([
        core_1.Component({
            selector: 'app-listar',
            templateUrl: './listar.component.html',
            styleUrls: ['./listar.component.css']
        })
    ], ListarComponent);
    return ListarComponent;
}());
exports.ListarComponent = ListarComponent;
