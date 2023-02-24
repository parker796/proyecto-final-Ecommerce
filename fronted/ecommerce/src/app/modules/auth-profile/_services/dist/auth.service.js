"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.token = null;
        this.baseUrl = 'http://localhost:8080/usuario/';
        //tiene que cargarse el usuario y el token
        this.loadStorage(); //nos va servir para ir viendo en los demas servicios si el usuario si esta autenticado
    }
    AuthService.prototype.loadStorage = function () {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.user = localStorage.getItem('user');
        }
        else {
            this.token = '';
            this.user = null;
        }
    };
    AuthService.prototype.login = function (nombreUsuario, clave) {
        var _this = this;
        var URL = 'http://localhost:8080/usuario/login'; //esto se puede sustituir con una variable de ambiente
        return this.http.post(URL, { nombreUsuario: nombreUsuario, clave: clave }).pipe(//mapeamos la respuesta
        rxjs_1.map(function (resp) {
            if (resp.token) { //si el token no esta vacio lo almacenamos en el localstorage
                //almacena en el localstorage la informacion
                return _this.saveLocalStorageResponse(resp);
            }
            else {
                return resp; //si el token es vacio nos manda un error
            }
        }), //entonces atrapamos ese error del token vacio
        rxjs_1.catchError(function (err) {
            return rxjs_1.of(err);
        }));
    };
    AuthService.prototype.saveLocalStorageResponse = function (resp) {
        if (resp.token && resp.nombreUsuario) {
            localStorage.setItem("token", resp.token); //almacenamos la respuesta en el localstorage
            localStorage.setItem("user", resp.nombreUsuario); //si fuera un json lo pasamos a un string con JsonStringfy
            //inicalizamos nuestras variables
            this.token = resp.token;
            this.user = resp.user;
            return true;
        }
        else {
            return false;
        }
    };
    //aqui no nos genera un token
    AuthService.prototype.registro = function (data) {
        var URL = 'http://localhost:8080/usuario/crear'; //esto se puede sustituir con una variable de ambiente
        return this.http.post(URL, data);
    };
    AuthService.prototype.logout = function () {
        this.user = null;
        this.token = '';
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.router.navigate(['/auth/login']);
        // document.location.reload(); 
    };
    AuthService.prototype.getProductos = function () {
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http.get(this.baseUrl + 'dell', { headers: headers });
    };
    AuthService.prototype.createProducto = function (producto) {
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.baseUrl + 'dellCrear', producto, { headers: headers });
    };
    AuthService.prototype.getProductoId = function (id) {
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http.get(this.baseUrl + "dell/" + id, { headers: headers });
    };
    AuthService.prototype.updateProducto = function (producto) {
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http.put(this.baseUrl + 'dellEditar/' + producto.id, producto, { headers: headers }); //aqui varea dependiendo la construccion del metodo en el backend
    };
    AuthService.prototype.deleteProducto = function (producto) {
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http["delete"](this.baseUrl + "dellBorrar/" + producto.id, { headers: headers });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
