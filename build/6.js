webpackJsonp([6],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, formBuilder, events, loadingCtrl, storage, alertCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.menu.swipeEnable(false);
        this.authForm = formBuilder.group({
            // username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(false, 'menu1');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // Don't forget to return the swipe to normal, otherwise 
        // the rest of the pages won't be able to swipe to open menu
        this.menu.swipeEnable(true);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(true, 'menu1');
    };
    LoginPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.doLogin = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Verificando Credenciales..." });
        loading.present();
        console.log(data);
        this.apiProvider.doLoginApiAE(data)
            .then(function (data) {
            console.log(data);
            if (data.data[0] && (data.data[0].idEmpleado > 0)) {
                /*
                  this.storage.get('pushKeyAEBY').then((value) => {
                  if(value){
                  console.log(value);
                          var pushState = {
                          pushK:value,
                          device: device.platform,
                          deviceId: device.uuid,
                          login: Date.now(),
                          user: data.data[0].idCliente
                          }
                          console.log(pushState);
                        this.apiProvider.addPush(pushState).then(data => {
                        console.log(data);
                        });
                  }
                  
                    //value;
          
                  });
          
             
                  */
                // this.dataProfile = data.data[0];
                _this.storage.set("usr_tok_byae", data.data[0]);
                _this.events.publish('loginOK', data.data[0]);
                if (data.data[0].horarioSet == 1) {
                    _this.apiProvider.horarioSet({ idEmpleado: data.data[0].idEmpleado })
                        .then(function (datax) { console.log(datax); });
                    _this.navCtrl.setRoot('HorarioPage', { first: 1 });
                    _this.storage.set("usr_alrt_byae", true);
                }
                else {
                    _this.navCtrl.setRoot('CalendarioPage');
                    _this.storage.set("usr_alrt_byae", false);
                }
                //this.events.publish('userCreated', data.data[0]);
                loading.dismiss();
                //this.navCtrl.push('CalendarioPage');
                //this.closeModal();
            }
            else {
                loading.dismiss();
                _this.presentAlert('Ups!', 'Credenciales incorrectas');
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/appEmpleado/empleadoApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding style=\'background-color: rgb(230,111,145)\' >\n\n\n<div style="text-align: center">\n<img style="    height: 200px;" src="assets/imgs/banner.png">\n</div>\n    <form [formGroup]="authForm" (ngSubmit)="doLogin(authForm.value)">\n\n              <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\'    color: #e6e6e6;\n    position: absolute;\n    right: 6px;\n    font-size: 21px;\n    top: 1px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Email\' class=\'inputT\'  formControlName="username" type="text"></ion-input>\n        </ion-item>\n  \n<!--         <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>        \n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n            <p>Sorry, minimum username length is 5!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n            <p>Sorry, maximum username length is 15!</p>\n        </ion-item> -->\n  \n                   <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;\n    position: absolute;\n    right: 6px;\n    font-size: 21px;\n    top: 1px;\'>\n                  <ion-icon   ios="md-lock" md="md-lock" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Contraseña\' class=\'inputT\'  formControlName="password" type="password"></ion-input>\n        </ion-item>\n <!--        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>   -->              \n  \n        <button ion-button full color="verderapp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Login</button>        \n    </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/appEmpleado/empleadoApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _j || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map