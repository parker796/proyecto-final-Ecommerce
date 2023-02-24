"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminProductosModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("src/app/shared/shared.module");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var listar_component_1 = require("./listar/listar.component");
var auth_profile_routing_module_1 = require("../auth-profile-routing.module");
var auth_profile_component_1 = require("../auth-profile.component");
var AdminProductosModule = /** @class */ (function () {
    function AdminProductosModule() {
    }
    AdminProductosModule = __decorate([
        core_1.NgModule({
            declarations: [
                auth_profile_component_1.AuthProfileComponent,
                listar_component_1.ListarComponent
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
    ], AdminProductosModule);
    return AdminProductosModule;
}());
exports.AdminProductosModule = AdminProductosModule;
