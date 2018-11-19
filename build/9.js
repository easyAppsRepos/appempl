webpackJsonp([9],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReservaPageModule", function() { return DetalleReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleReservaPageModule = /** @class */ (function () {
    function DetalleReservaPageModule() {
    }
    DetalleReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */]),
            ],
        })
    ], DetalleReservaPageModule);
    return DetalleReservaPageModule;
}());

//# sourceMappingURL=detalle-reserva.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
import {CalendarModal,CalendarModalOptions,} from 'ion2-calendar';

import {CalendarComponentOptions} from 'ion2-calendar';

import * as moment from 'moment';
*/
/**
 * Generated class for the DetalleReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleReservaPage = /** @class */ (function () {
    function DetalleReservaPage(alertCtrl, navCtrl, navParams, modalCtrl, apiProvider, loadingCtrl, events, zone, storage) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.zone = zone;
        this.storage = storage;
        this.date = new Date();
        this.options = {
            from: Date.now(),
            defaultDate: this.date,
            weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
            weekStart: 1,
            monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
        };
        this.botonReprogramar = false;
        this.horario = [];
        this.dataCentro = {};
        this.diaCerrado = false;
        this.edicionFecha = false;
        this.minH = '00:00';
        this.maxH = '00:00';
    }
    DetalleReservaPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad DetalleReservaPage');
        this.getDataCita(this.navParams.get('idCita'));
    };
    DetalleReservaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.idEmpleado = result.idEmpleado;
                console.log(_this.idEmpleado);
            }
            else {
                console.log('error-nologin');
            }
        });
    };
    DetalleReservaPage.prototype.getEstado = function (idEstado) {
        var estado = '';
        idEstado == 1 ? estado = "Pendiente confirmar" :
            idEstado == 5 ? estado = "Reprogramada" :
                idEstado == 2 ? estado = "Confirmada" :
                    idEstado == 3 ? estado = "Completada" :
                        idEstado == 4 ? estado = "Cancelada" : estado = "";
        return estado;
    };
    DetalleReservaPage.prototype.presentPrompt = function (idC) {
        this.navCtrl.push('ReprogramacionPage', { idCita: idC });
    };
    DetalleReservaPage.prototype.getFechaFormat = function (eee) {
        /*
          if(eee){
          
            moment.locale('es');
          return moment(eee, 'YYYY-MM-DD').format('LL');
          }
          else{
          return ' - ';
          }
          */
        var splitDate = eee.split('-');
        return new Date(splitDate[0], (parseInt(splitDate[1]) - 1), splitDate[2]);
    };
    DetalleReservaPage.prototype.showConfirm = function (estado, cita, accionName) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmar acción',
            message: 'Esta seguro que desea ' + accionName + ' esta reserva?',
            buttons: [
                {
                    text: 'cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'continuar',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.cambiarEstadoS(estado, cita);
                    }
                }
            ]
        });
        confirm.present();
    };
    DetalleReservaPage.prototype.showConfirm2 = function (estado, idCita, accionName) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmar acción',
            message: 'Esta seguro que desea ' + accionName + ' esta reserva?',
            buttons: [
                {
                    text: 'cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'continuar',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.cambiarEstadoAll(estado, idCita);
                    }
                }
            ]
        });
        confirm.present();
    };
    DetalleReservaPage.prototype.showConfirm3 = function (idCita, accionName) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmar acción',
            message: 'Esta seguro que desea ' + accionName + ' esta reserva?',
            buttons: [
                {
                    text: 'cerrar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'continuar',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.cancelarRMAS(idCita);
                    }
                }
            ]
        });
        confirm.present();
    };
    DetalleReservaPage.prototype.getMinH = function (dia) {
        var horarioFix = '00:00';
        if (this.horario.find(function (x) { return x.diaSemana === dia; })) {
            this.diaCerrado = false;
            horarioFix = this.horario.find(function (x) { return x.diaSemana === dia; }).horaAbrir;
        }
        return horarioFix;
    };
    DetalleReservaPage.prototype.cancelarRMAS = function (cita) {
        var _this = this;
        var datE = { idCita: cita };
        var loading = this.loadingCtrl.create({ content: "Cargando...", cssClass: "my-loading" });
        loading.present();
        this.apiProvider.cancelarRMAS(datE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.navCtrl.pop();
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismiss();
        });
    };
    DetalleReservaPage.prototype.cambiarEstadoAll = function (estado, cita) {
        var _this = this;
        var datE = { estado: estado,
            idCita: cita };
        var loading = this.loadingCtrl.create({ content: "Cargando...", cssClass: "my-loading" });
        loading.present();
        this.apiProvider.cambiarServicioCitaNCREPRO(datE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.getDataCita(cita);
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismiss();
        });
    };
    DetalleReservaPage.prototype.cambiarEstadoS = function (estado, cita) {
        var _this = this;
        var datE = { estado: estado,
            idServicioCita: cita.idServicioCita,
            idCita: cita.idCita };
        var loading = this.loadingCtrl.create({ content: "Cargando...", cssClass: "my-loading" });
        loading.present();
        this.apiProvider.cambiarServicioCitaNC(datE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.getDataCita(_this.dataCita.idCita);
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismiss();
        });
    };
    DetalleReservaPage.prototype.getMaxH = function (dia) {
        var horarioFix = '00:00';
        if (this.horario.find(function (x) { return x.diaSemana === dia; })) {
            horarioFix = this.horario.find(function (x) { return x.diaSemana === dia; }).horaCerrar;
        }
        return horarioFix;
    };
    DetalleReservaPage.prototype.onChange = function ($event) {
        var d = new Date($event);
        var n = d.getDay();
        console.log(n);
        console.log($event);
        // this.fechaSeleccionada = $event;
        this.horaSeleccionada = '';
        if (this.horario.find(function (x) { return x.diaSemana === n; })) {
            console.log(this.horario.find(function (x) { return x.diaSemana === n; }));
            this.maxH = this.getMaxH(n);
            this.minH = this.getMinH(n);
        }
        else {
            this.diaCerrado = true;
        }
    };
    DetalleReservaPage.prototype.openCalendar = function () {
        var options = {
            title: 'BASIC',
        };
        var myCalendar = this.modalCtrl.create(CalendarModal, {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
        });
    };
    DetalleReservaPage.prototype.getDattts = function (item, t) {
        var dateReturn;
        if (t == 1) {
            dateReturn = new Date(item.y, item.m - 1, item.d, item.h, item.min);
        }
        if (t == 2) {
            dateReturn = new Date(item.y, item.m - 1, item.d, item.h2, item.min2);
        }
        return dateReturn;
    };
    DetalleReservaPage.prototype.getDataCita = function (idCita) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando...", cssClass: "my-loading" });
        loading.present();
        var dataE = { idCita: idCita };
        console.log(dataE);
        this.apiProvider.getDataCita(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.zone.run(function () {
                    _this.dataCita = data['cita'][0] || [];
                    _this.horaSeleccionada = _this.dataCita.horaInicio;
                    _this.horaFinalizacion = _this.dataCita.horaFinalEsperado;
                    _this.fechaCalendario = _this.dataCita.horaInicio;
                    _this.servicios = data['servicios'] || [];
                    var numEm = _this.servicios.filter(function (item) {
                        return _this.idEmpleado !== item.idEmpleado;
                    }).length;
                    if (numEm > 0) {
                        console.log('varios');
                        _this.botonReprogramar = false;
                    }
                    else {
                        console.log('uno');
                        _this.botonReprogramar = true;
                    }
                    _this.horario = data['horario'];
                });
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismiss();
        });
    };
    DetalleReservaPage.prototype.comoLlegar = function () {
        console.log(this.dataCentro.latitud);
        launchnavigator.navigate([this.dataCita.latitud, this.dataCita.longitud]);
    };
    DetalleReservaPage.prototype.getPrecioDescuento = function (precio) {
        var retorno = 0;
        if (this.dataCita.descuento) {
            var descuento = this.dataCita.descuento;
            var precioN = precio;
            retorno = precioN - (precioN * (descuento / 100));
        }
        else {
            retorno = precio;
        }
        return retorno.toFixed(2);
    };
    DetalleReservaPage.prototype.llamar = function () {
        if (this.dataCita.telefono) {
            var num = this.dataCita.telefono;
            window.plugins.CallNumber.callNumber(function (suc) { console.log(suc); }, function (err) { console.log(err); }, num, true);
        }
    };
    DetalleReservaPage.prototype.alertaAcep = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirmacion exitosa',
            subTitle: 'Tu reserva ha sido confirmada',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    DetalleReservaPage.prototype.aceptarReprogramacion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        this.apiProvider.aceptarReprogramacion({ idCita: this.dataCita.idCita })
            .then(function (data) {
            console.log(data);
            loading.dismissAll();
            if (data.affectedRows > 0) {
                _this.alertaAcep();
                _this.getDataCita(_this.dataCita.idCita);
                _this.edicionFecha = false;
            }
            else {
                alert('Ha ocurrido un error');
            }
        });
        console.log('aceptarReprogramacion');
        console.log(this.dataCita);
    };
    DetalleReservaPage.prototype.alertaRepro = function () {
        var alert = this.alertCtrl.create({
            title: 'Reprogramacion exitosa',
            subTitle: 'La reservacion fue reprogramada, te notificaremos cuando sea aceptada',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    DetalleReservaPage.prototype.guardarReprogramacion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        var horaNueva = '';
        var finaliza = '';
        if (isNaN(Date.parse(this.horaSeleccionada))) {
            horaNueva = this.fechaCalendario + ' ' + this.horaSeleccionada + ':00';
        }
        else {
            horaNueva = this.horaSeleccionada.split('T')[0] + ' ' + (this.horaSeleccionada.split('T')[1]).substring(0, 7);
        }
        finaliza = this.horaFinalizacion.split('T')[0] + ' ' + (this.horaFinalizacion.split('T')[1]).substring(0, 7);
        //console.log(this.horaFinalizacion);
        // console.log(this.horaSeleccionada);
        //console.log(this.fechaCalendario);
        var dataE = { idCita: this.dataCita.idCita,
            horaInicio: horaNueva,
            horaFinalEsperado: finaliza
        };
        console.log(dataE);
        this.apiProvider.reprogramarCita(dataE)
            .then(function (data) {
            loading.dismissAll();
            console.log(data);
            if (data.affectedRows > 0) {
                _this.alertaRepro();
                _this.getDataCita(_this.dataCita.idCita);
                _this.edicionFecha = false;
            }
            else {
                alert('Ha ocurrido un error');
            }
        });
    };
    DetalleReservaPage.prototype.reprogramarCita = function () {
        var _this = this;
        this.apiProvider.addProductoz(this.servicios)
            .then(function (data) {
            _this.goReserva(_this.servicios[0].idCategoria);
        });
    };
    //idcen idcat
    DetalleReservaPage.prototype.goReserva = function (categoria) {
        //servicios: this.arraySelected
        var dataE = { 'servicios': [], 'idCita': this.dataCita.idCita, 'idCentro': this.dataCita.idCentro, centro: this.dataCentro, 'cupon': this.dataCita.idCuponCliente, idCategoria: categoria, reprogra: true };
        console.log(dataE);
        this.navCtrl.push('ReservaPage', dataE);
        // this.navCtrl.push('ReservaPage');
    };
    DetalleReservaPage.prototype.reprogramarCita2 = function () {
        console.log('reprogramarCita');
        console.log(this.dataCita);
        this.edicionFecha = true;
    };
    DetalleReservaPage.prototype.cancelarEdicion = function () {
        this.horaSeleccionada = this.dataCita.horaInicio;
        this.horaFinalizacion = this.dataCita.horaFinalEsperado;
        this.fechaCalendario = this.dataCita.horaInicio;
        this.edicionFecha = false;
    };
    DetalleReservaPage.prototype.cancelarCita = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancelar Reserva',
            message: 'Seguro que deseas cancelar esta reserva?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        var dataE = { idCita: _this.dataCita.idCita };
                        console.log(dataE);
                        _this.apiProvider.cancelarCita(dataE)
                            .then(function (data) {
                            console.log(data);
                            if (data) {
                                console.log('borrada');
                                _this.navCtrl.pop();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleReservaPage.prototype.getMinutosCita = function (hora) {
        var duracionMinutos = 0;
        this.servicios.forEach(function (item) {
            duracionMinutos += item.duracion;
        });
        console.log(duracionMinutos);
        return duracionMinutos;
    };
    DetalleReservaPage.prototype.formatTime = function (n) {
        return n > 9 ? "" + n : "0" + n;
    };
    //n > 9 ? "" + n: "0" + n;
    DetalleReservaPage.prototype.actualizarHora = function (hora) {
        var theAdd = new Date(hora);
        console.log(Date.parse(theAdd));
        if (isNaN(Date.parse(theAdd))) {
            if (hora !== '') {
                theAdd = new Date(this.fechaCalendario + 'T' + hora + ':00Z');
                theAdd.setMinutes(theAdd.getMinutes() + this.getMinutosCita());
                this.horaFinalizacion = new Date(theAdd).toISOString();
            }
        }
        else {
            console.log(theAdd);
            theAdd.setMinutes(theAdd.getMinutes() + this.getMinutosCita());
            this.horaFinalizacion = theAdd.toISOString();
        }
    };
    DetalleReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalle-reserva',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/appEmpleado/empleadoApp/src/pages/detalle-reserva/detalle-reserva.html"*/'\n<ion-header>\n\n  <ion-navbar  color="header">\n    <ion-title>Detalle de Reserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf=\'dataCita\'>\n\n\n\n	<div>\n		<div><span  class="tituloBook">Reserva No.</span> <span  class="subBook">{{dataCita?.idCita}}</span></div>\n		<div style="margin-top: 10px;">\n            <span class="tituloBook">Estado</span> \n            <span class="subBook" [ngClass]="{\'citaE3\':dataCita.estado == 3,\'citaE4\':dataCita.estado == 4, \'citaE2\': dataCita.estado == 5, \'citaE1\':dataCita.estado == 2, \'citaE0\':dataCita.estado == 1}" style="font-weight: 500;">{{getEstado(dataCita?.estado)}}</span>\n        </div>\n\n        <div style="margin-top: 10px;">\n            <span class="tituloBook">Fecha</span> \n            <span class="subBook">{{getFechaFormat(dataCita?.horaInicio.split(\'T\')[0])|date: \'longDate\'}}</span>\n        </div>\n\n        <div style="margin-top: 10px;">\n            <span class="tituloBook">Cliente</span> \n            <span class="subBook">{{dataCita?.clienteReferencia ? dataCita?.clienteReferencia : dataCita?.nombreCliente}}</span>\n        </div>\n\n\n\n<!--     <button [hidden]=\'dataCita.estado==5 || dataCita.clienteReferencia\' style="    margin-top: 15px;" *ngIf=\'botonReprogramar\' ion-button small  color="header" (click)=\'showConfirm2(2,dataCita.idCita,"reprogramar")\'>Solicitar reprogramacion</button> -->\n    <button [hidden]=\'dataCita.estado==5 || dataCita.clienteReferencia\' style="    margin-top: 15px;" *ngIf=\'botonReprogramar\' ion-button small  color="header" (click)=\'presentPrompt(dataCita.idCita)\'>Solicitar reprogramacion</button>\n\n\n        <button *ngIf=\'dataCita.clienteReferencia\' style="    margin-top: 15px;"  ion-button small  color="header" (click)=\'showConfirm3(dataCita.idCita,"cancelar")\'>Cancelar Reserva</button>\n\n\n\n<!--         <div *ngIf=\'dataCita?.estado == 5\' >\n		<span style="    font-size: 15px;\n    color: #777;\n    display: inline-block;\n    margin-top: 12px;">Motivo de reprogramacion</span>\n		<p class="parrafoHead">{{dataCita?.comentarioEstado}}</p>\n        </div>\n -->\n<!-- 		<div style="\n    display: inline-block;    width: 100%;    margin-top: 20px;\n">\n	<img src="http://50.116.17.150:3000/{{dataCita?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';"  style="\n    display: inline-block;\n    height: 90px;\n    border-radius: 90px;\n    width: 90px !important;\n    vertical-align: top;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 114px);\n    margin-left:  20px;\n">\n		<span style="margin: 2px 0px 0px 0px;\n    font-size: 19px;\n    color: #333;">{{dataCita?.nombreCliente}}</span>\n		<span style="margin-top:10px" class="itemComercio">{{dataCita?.notaCita}}</span>\n		<span style="margin-top:10px" class="itemComercio"></span>\n\n\n	</div>\n	</div> -->\n\n\n\n	</div>\n\n\n<!--  <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px;">\n\n	<button (click)=\'llamar()\' [disabled]="!dataCita?.telefono"  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;" > <img style="margin-right:10px" src="assets/imgs/telefono.png"> Llamar</button> \n\n	<button  (click)=\'comoLlegar()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;"  color=\'verdeApp\' ion-button> <img style="margin-right:10px" src="assets/imgs/agregadosBlanco.png">Cómo llegar</button>\n\n\n\n</div> -->\n<!-- \n<ion-list class=\'backItem\' style=\'width: 100%;    margin-top: 23px;    margin-bottom: 23px;\n    display: table;\n    white-space: normal;    background: transparent !important; \'>\n\n\n<div [hidden]=\'diaCerrado\'>\n<ion-item style=\'     padding-top: 6px;padding-left: 0px !important;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Hora de Inicio</ion-label>\n <ion-datetime (ionChange)=\'actualizarHora(horaSeleccionada)\' style=\'    color: #444 !important;\' [(ngModel)]="horaSeleccionada" displayFormat="hh:mm A"  minuteValues="0,15,30,45"  max="{{maxH}}" min="{{minH}}" [disabled]=\'!edicionFecha\'> </ion-datetime> \n\n</ion-item>\n\n<ion-item   style=\'     padding-top: 6px;padding-left: 0px !important;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Finaliza aprox.</ion-label>\n <ion-datetime *ngIf=\'horaSeleccionada\' [disabled]=\'true\' style=\'    color: #444 !important;\' [(ngModel)]="horaFinalizacion" displayFormat="hh:mm A" > </ion-datetime> \n\n</ion-item>\n</div> \n\n<div style="    margin: 25px;\n    text-align: center;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: 400;\n    color: lightcoral;" [hidden]=\'!diaCerrado\'>\n    \n    Centro cerrado este dia\n</div>\n</ion-list>\n-->\n\n\n<!--  <div *ngIf=\'dataCita?.estado == 5\'  style="width: 100%;\n    text-align: center; display: inline-block;">\n\n   \n\n    <button  (click)=\'aceptarReprogramacion()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Aceptar</button>\n\n    <button  (click)=\'cancelarCita()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right;" >Cancelar</button> \n\n\n</div>\n\n -->\n\n\n <!-- <div *ngIf=\'dataCita?.estado == 2 || dataCita?.estado == 1\'  style="     width: 100%;\n    text-align: center; display: inline-block;\n   ">\n\n<div  [hidden]=\'edicionFecha\'>\n     <button [disabled]=\'dataCita?.estado == 2\' (click)=\'reprogramarCita()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%; float:left"  color=\'verdeApp\' ion-button> Reprogramar</button>\n\n\n    <button (click)=\'cancelarCita()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Cancelar</button> \n\n\n</div>\n<div [hidden]=\'!edicionFecha\'>\n    \n\n    <button [disabled]=\'horaSeleccionada==""\'  (click)=\'guardarReprogramacion()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Guardar cambio</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n\n\n</div>\n\n\n</div> -->\n\n\n<div  *ngFor="let n of servicios">\n\n\n\n<div style="\n    width: 100%;\n    display: inline-block;\n">\n	\n\n	<div style="\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0px;\n    border-top: solid 2px #ececec;\n    margin-top: 10px;\n">\n\n\n\n\n\n\n		<span style="\n      font-size: 16px;\n    color: #333;\n    font-weight: 600;\n">{{n.nombre}}</span>\n\n\n\n   <div style="font-size: 16px;font-weight: 600;    display: inline-block;\n    float: right;" >\n\n       <span *ngIf=\'n.estado==0\' class=\'estadoReservas\' style="color: #cabf2b;">\n        Pendiente Confirmar\n        </span>\n        <span *ngIf=\'n.estado==1\'  class=\'estadoReservas\' style="color:#3ca1ff ">\n        Confirmado\n        </span>\n        <span *ngIf=\'n.estado==3\'  class=\'estadoReservas\' style="color: #77dd77;">\n        Completo\n        </span>\n        <span *ngIf=\'n.estado==2\'  class=\'estadoReservas\' style="color: #ffb34c">\n        Reprogramada</span>\n        <span *ngIf=\'n.estado==4\' class=\'estadoReservas\' style="color: #ff1e1e;">\n        Cancelado\n        </span>\n\n           </div>\n\n\n	<div style="    margin-top: 7px;">\n\n\n\n\n\n        <span style="margin-right: 20px;   color: #333;\n        font-size: 15px;">\n\n        <ion-icon style=\'margin-right: 5px\' name="ios-time-outline">\n        </ion-icon>{{getDattts(n,1)|date: \'h:mm a\'}} - \n        {{getDattts(n,2)|date: \'h:mm a\'}}\n\n\n        </span>\n   \n          <span style="    color: #EC527E !important;\n    float: right;\n    min-width: 41px;\n    text-align: left;\n    font-size: 15px;\n    font-weight: 500;">${{n.precioCobrado}}\n        </span>\n           <span *ngIf=\'n.precio !== n.precioCobrado\' style="\n            font-size: 15px;\n            color: #777;\n            float: right;\n            margin-right: 15px;\n            text-decoration: line-through;">${{n.precio}}\n        </span>\n\n\n    </div>\n\n    		<div style="margin-top: 10px;">\n                <div style="    display: inline-block; color: #333;\n                font-size: 15px; margin-bottom: 5px">\n\n                <img src="http://50.116.17.150:3000/{{n.idFotoE}}" \n                onError="this.src=\'assets/imgs/usuario.png\';" style="display: inline-block;\n    height: 28px;\n    width: 28px;\n    border-radius: 20px;\n    vertical-align: text-bottom;"><span style="    margin-left: 5px;\n    display: inline-block;">{{n.nombreEmpleado}}</span>\n\n                </div>\n                <div style="display: inline-block;\n    float: right;" [hidden]=\'dataCita.clienteReferencia\' *ngIf=\'idEmpleado == n.idEmpleado\' >\n    			<button *ngIf=\'n.estado==0\' ion-button small  color="verderapp" (click)=\'showConfirm(1,n,"confirmar")\'>Confirmar</button>\n    			<button *ngIf=\'n.estado==1\' ion-button small color="header" \n    			(click)=\'showConfirm(3,n,"completar")\'>Completar</button>\n    	<!-- 		<button  [hidden]=\'n.estado==4  || n.estado==3\' ion-button small color="danger" \n    			(click)=\'showConfirm(4,n,"cancelar")\'>{{n.estado == 0 ? \'Declinar\' : \'Cancelar\'}}</button> -->\n\n                <button  [hidden]=\'n.estado==4  || n.estado==3 || n.estado==1\' ion-button small color="danger" \n                (click)=\'showConfirm(4,n,"cancelar")\'>Declinar</button>\n\n\n                </div>\n\n    		</div>\n	</div>\n</div>\n\n</div>\n\n\n\n\n\n\n	<div style="    margin-bottom: 15px;\n    border-top: solid 2px #ececec;\n    padding: 15px 0px;"><span style="\n    font-size: 16px;\n    color: #333;font-weight: 800; \n">Total</span> <span style="        font-weight: 800; color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 13px;\n    font-weight: 800;">${{dataCita?.precioEsperado}}</span></div>\n\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/appEmpleado/empleadoApp/src/pages/detalle-reserva/detalle-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _j || Object])
    ], DetalleReservaPage);
    return DetalleReservaPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=detalle-reserva.js.map

/***/ })

});
//# sourceMappingURL=9.js.map