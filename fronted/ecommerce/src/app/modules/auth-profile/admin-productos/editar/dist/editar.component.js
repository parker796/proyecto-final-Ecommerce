"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditarComponent = void 0;
var core_1 = require("@angular/core");
var EditarComponent = /** @class */ (function () {
    function EditarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    EditarComponent.prototype.ngOnInit = function () {
        this.Editar();
    };
    EditarComponent.prototype.Editar = function () {
        var _this = this;
        var id = (localStorage.getItem("id"));
        this.authService.getProductoId(+id)
            .subscribe(function (data) {
            //  console.log("nos manda un sucess", data);
            _this.producto = data;
            console.log("producto", _this.producto);
        }), function (error) {
            console.log('error : ', error);
        };
    };
    EditarComponent.prototype.Actualizar = function (producto) {
        var _this = this;
        this.authService.updateProducto(producto)
            .subscribe(function (data) {
            _this.producto = data;
            alert("Se Actualizo con Exito...!!!");
            _this.router.navigate(["/auth/admin-productos/listar"]);
        });
    };
    EditarComponent = __decorate([
        core_1.Component({
            selector: 'app-editar',
            templateUrl: './editar.component.html',
            styleUrls: ['./editar.component.css']
        })
    ], EditarComponent);
    return EditarComponent;
}());
exports.EditarComponent = EditarComponent;
