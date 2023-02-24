"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.nombreUsuario = null;
        this.clave = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            initPageEcommerce($); //esperamos a que se recargue todos las funciones que hay
            //en el jquery para que nos funcione bien la plantilla
        }, 50);
        //checamos si ya estan logeados no tiene caso que este aqui en esta vista
        if (this.authService.user && this.authService.token) {
            //  this.router.navigate(['/']); //ve a la vista del home
            this.router.navigate(["/auth/admin-productos"]);
        }
    };
    LoginComponent.prototype.login = function () {
        if (!this.nombreUsuario || !this.clave) {
            alert("NECESITAS INGRESAR TU NOMBRE DE USUARIO O TU CLAVE");
            return;
        }
        this.authService.login(this.nombreUsuario, this.clave).subscribe(function (resp) {
            console.log(resp); //ya nos aseguramos de que nos devuelve el token
            if (resp == true) {
                //si todo salio bien volver al home como usuario autenticado
                document.location.reload(); //como un aviso de que todo salio bien recargamos
            }
            else {
                if (resp.status == 401) {
                    alert("EL USUARIO O CONTRASEÑA SON INCORRECTOS ");
                    return;
                }
                //pero en lugar de que nos devuelva el token nos manda el true porque usamos el pipe
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
