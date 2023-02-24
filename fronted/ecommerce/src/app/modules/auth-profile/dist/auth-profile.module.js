"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthProfileModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var auth_profile_routing_module_1 = require("./auth-profile-routing.module");
var auth_profile_component_1 = require("./auth-profile.component");
var login_component_1 = require("./login/login.component");
var shared_module_1 = require("src/app/shared/shared.module");
var register_component_1 = require("./register/register.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var admin_productos_component_1 = require("./admin-productos/admin-productos.component");
var listar_component_1 = require("./admin-productos/listar/listar.component");
var nuevo_component_1 = require("./admin-productos/nuevo/nuevo.component");
var editar_component_1 = require("./admin-productos/editar/editar.component");
//import { BrowserModule } from '@angular/platform-browser';
var AuthProfileModule = /** @class */ (function () {
    function AuthProfileModule() {
    }
    AuthProfileModule = __decorate([
        core_1.NgModule({
            declarations: [
                auth_profile_component_1.AuthProfileComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                admin_productos_component_1.AdminProductosComponent,
                listar_component_1.ListarComponent,
                nuevo_component_1.NuevoComponent,
                editar_component_1.EditarComponent
            ],
            imports: [
                common_1.CommonModule,
                auth_profile_routing_module_1.AuthProfileRoutingModule,
                shared_module_1.SharedModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                //pero aun asi se mantuvo el error entonces nos fuimos al appModule
                router_1.RouterModule,
            ]
        })
    ], AuthProfileModule);
    return AuthProfileModule;
}());
exports.AuthProfileModule = AuthProfileModule;
