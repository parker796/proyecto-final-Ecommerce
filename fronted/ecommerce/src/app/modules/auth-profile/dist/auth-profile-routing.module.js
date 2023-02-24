"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthProfileRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_productos_component_1 = require("./admin-productos/admin-productos.component");
var editar_component_1 = require("./admin-productos/editar/editar.component");
var listar_component_1 = require("./admin-productos/listar/listar.component");
var nuevo_component_1 = require("./admin-productos/nuevo/nuevo.component");
var auth_profile_component_1 = require("./auth-profile.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var routes = [
    {
        path: '',
        component: auth_profile_component_1.AuthProfileComponent,
        children: [
            {
                path: 'login',
                component: login_component_1.LoginComponent
            },
            {
                path: 'registro',
                component: register_component_1.RegisterComponent
            },
            {
                path: 'admin-productos',
                component: admin_productos_component_1.AdminProductosComponent,
                children: [
                    {
                        path: 'listar',
                        component: listar_component_1.ListarComponent
                    },
                    {
                        path: 'nuevo',
                        component: nuevo_component_1.NuevoComponent
                    },
                    {
                        path: 'editar',
                        component: editar_component_1.EditarComponent
                    }
                ]
            }
        ]
    }
];
var AuthProfileRoutingModule = /** @class */ (function () {
    function AuthProfileRoutingModule() {
    }
    AuthProfileRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AuthProfileRoutingModule);
    return AuthProfileRoutingModule;
}());
exports.AuthProfileRoutingModule = AuthProfileRoutingModule;
