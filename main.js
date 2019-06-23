(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@keyframes lds-spinner {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes lds-spinner {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n.lds-spinner {\r\n  position: fixed;\r\n}\r\n.lds-spinner div {\r\n  left:50%;\r\n  top: 50%;\r\n  transform: translate(-50%,-50%);\r\n  position: absolute;\r\n  -webkit-animation: lds-spinner linear 1s infinite;\r\n  animation: lds-spinner linear 1s infinite;\r\n  background: #0055a5;\r\n  width: 12px;\r\n  height: 24px;\r\n  border-radius: 10%;\r\n  transform-origin: 6px 30px;\r\n  z-index: 10000;\r\n}\r\n.lds-spinner div:nth-child(1) {\r\n  transform: rotate(0deg);\r\n  -webkit-animation-delay: -0.916666666666667s;\r\n  animation-delay: -0.916666666666667s;\r\n}\r\n.lds-spinner div:nth-child(2) {\r\n  transform: rotate(30deg);\r\n  -webkit-animation-delay: -0.833333333333333s;\r\n  animation-delay: -0.833333333333333s;\r\n}\r\n.lds-spinner div:nth-child(3) {\r\n  transform: rotate(60deg);\r\n  -webkit-animation-delay: -0.75s;\r\n  animation-delay: -0.75s;\r\n}\r\n.lds-spinner div:nth-child(4) {\r\n  transform: rotate(90deg);\r\n  -webkit-animation-delay: -0.666666666666667s;\r\n  animation-delay: -0.666666666666667s;\r\n}\r\n.lds-spinner div:nth-child(5) {\r\n  transform: rotate(120deg);\r\n  -webkit-animation-delay: -0.583333333333333s;\r\n  animation-delay: -0.583333333333333s;\r\n}\r\n.lds-spinner div:nth-child(6) {\r\n  transform: rotate(150deg);\r\n  -webkit-animation-delay: -0.5s;\r\n  animation-delay: -0.5s;\r\n}\r\n.lds-spinner div:nth-child(7) {\r\n  transform: rotate(180deg);\r\n  -webkit-animation-delay: -0.416666666666667s;\r\n  animation-delay: -0.416666666666667s;\r\n}\r\n.lds-spinner div:nth-child(8) {\r\n  transform: rotate(210deg);\r\n  -webkit-animation-delay: -0.333333333333333s;\r\n  animation-delay: -0.333333333333333s;\r\n}\r\n.lds-spinner div:nth-child(9) {\r\n  transform: rotate(240deg);\r\n  -webkit-animation-delay: -0.25s;\r\n  animation-delay: -0.25s;\r\n}\r\n.lds-spinner div:nth-child(10) {\r\n  transform: rotate(270deg);\r\n  -webkit-animation-delay: -0.166666666666667s;\r\n  animation-delay: -0.166666666666667s;\r\n}\r\n.lds-spinner div:nth-child(11) {\r\n  transform: rotate(300deg);\r\n  -webkit-animation-delay: -0.083333333333333s;\r\n  animation-delay: -0.083333333333333s;\r\n}\r\n.lds-spinner div:nth-child(12) {\r\n  transform: rotate(330deg);\r\n  -webkit-animation-delay: 0s;\r\n  animation-delay: 0s;\r\n}\r\n.lds-spinner {\r\n  width: 50% !important;\r\n  height: 50% !important;\r\n  transform: translate(-50%, -50%) scale(1) translate(50%, 50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGlEQUFpRDtFQUNqRCx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBQ0E7RUFFRSx1QkFBdUI7RUFDdkIsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0QztBQUNBO0VBRUUsd0JBQXdCO0VBQ3hCLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUVFLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFFRSx3QkFBd0I7RUFDeEIsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0QztBQUNBO0VBRUUseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUVFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFFRSx5QkFBeUI7RUFDekIsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0QztBQUNBO0VBRUUseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUVFLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFFRSx5QkFBeUI7RUFDekIsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0QztBQUNBO0VBRUUseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUVFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBRXRCLDZEQUE2RDtBQUMvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBsZHMtc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGRzLXNwaW5uZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLmxkcy1zcGlubmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdiB7XHJcbiAgbGVmdDo1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxkcy1zcGlubmVyIGxpbmVhciAxcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGxkcy1zcGlubmVyIGxpbmVhciAxcyBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMDA1NWE1O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA2cHggMzBweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA2cHggMzBweDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOTE2NjY2NjY2NjY2NjY3cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjkxNjY2NjY2NjY2NjY2N3M7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuODMzMzMzMzMzMzMzMzMzcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjgzMzMzMzMzMzMzMzMzM3M7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjY2NjY2NjY2NjY2NjY2N3M7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42NjY2NjY2NjY2NjY2NjdzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNTgzMzMzMzMzMzMzMzMzcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjU4MzMzMzMzMzMzMzMzM3M7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNDE2NjY2NjY2NjY2NjY3cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQxNjY2NjY2NjY2NjY2N3M7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoOCkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMzMzMzMzMzMzMzMzMzNzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzMzMzMzMzMzMzMzMzMzcztcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjI1cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cztcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMCkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNjY2NjY2NjY2NjY2NjdzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTY2NjY2NjY2NjY2NjY3cztcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4wODMzMzMzMzMzMzMzMzNzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDgzMzMzMzMzMzMzMzMzcztcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwcHgsIC0xMDBweCkgc2NhbGUoMSkgdHJhbnNsYXRlKDEwMHB4LCAxMDBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgdHJhbnNsYXRlKDUwJSwgNTAlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <div class=\"row\" onclick=\"closeNav()\">\n    <div class=\"col-md-2\">\n      <app-side-nav-bar></app-side-nav-bar>\n    </div>\n    <div class=\"col-md-10\">\n      <div class=\"lds-css ng-scope\" *ngIf=\"showLoadingIndicator\">\n        <div class=\"lds-spinner\" style=\"width:100%;height:100%\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    // tslint:disable-next-line:variable-name
    function AppComponent(_router) {
        var _this = this;
        this._router = _router;
        this.showLoadingIndicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.showLoadingIndicator = false;
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/side-nav-bar/side-nav-bar.component */ "./src/app/pages/side-nav-bar/side-nav-bar.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_education_details_page_education_details_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/education-details-page/education-details-page.component */ "./src/app/pages/education-details-page/education-details-page.component.ts");
/* harmony import */ var _pages_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/technologies/technologies.component */ "./src/app/pages/technologies/technologies.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");
/* harmony import */ var _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/projects-page/projects-page.component */ "./src/app/pages/projects-page/projects-page.component.ts");
/* harmony import */ var _pages_documents_page_documents_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/documents-page/documents-page.component */ "./src/app/pages/documents-page/documents-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_education_details_page_education_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/education-details-page/education.service */ "./src/app/pages/education-details-page/education.service.ts");
/* harmony import */ var _pages_documents_page_document_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/documents-page/document.service */ "./src/app/pages/documents-page/document.service.ts");

















var routes = [
    { path: 'about', component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"] },
    { path: 'education', component: _pages_education_details_page_education_details_page_component__WEBPACK_IMPORTED_MODULE_9__["EducationDetailsPageComponent"] },
    { path: 'experience', component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"] },
    { path: 'technologies', component: _pages_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_10__["TechnologiesComponent"], },
    { path: 'projects', component: _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsPageComponent"], },
    { path: 'documents', component: _pages_documents_page_documents_page_component__WEBPACK_IMPORTED_MODULE_13__["DocumentsPageComponent"], },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _pages_side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["SideNavBarComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"],
                _pages_education_details_page_education_details_page_component__WEBPACK_IMPORTED_MODULE_9__["EducationDetailsPageComponent"],
                _pages_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_10__["TechnologiesComponent"],
                _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
                _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsPageComponent"],
                _pages_documents_page_documents_page_component__WEBPACK_IMPORTED_MODULE_13__["DocumentsPageComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            providers: [_pages_education_details_page_education_service__WEBPACK_IMPORTED_MODULE_15__["EducationService"], _pages_documents_page_document_service__WEBPACK_IMPORTED_MODULE_16__["DocumentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-hight pt-2\">\n<h5 class=\"primary-headings\">About Myself</h5>\n<p>\n  Hi, I am Mowneshachar. I am from Bangalore. I completed my Master of Computer Application(MCA) degree in 2017 from\n  NMIT Bangalore.<br /><br />\n\n  I have been working as a UI Devaloper from past one year. I have learned the latest web technologies, work\n  environment, ins and outs of IT operations in my journey from a fresher to a Experience.<br /><br />\n\n  My qualifications and work experience make me a suitable candidate for the profile. I am looking to join your\n  organization to explore new dimensions and for the further development of my skills.<br />\n</p>\n<h5 class=\"primary-headings\">Hobbies</h5>\n<p>\n  Coming to my hobbies I am very much interested on playing games like Cricket, Kabadi, Chess. Painting ,Reading and\n  Coding are my most favrate hobbies\n</p>\n<h5 class=\"primary-headings\">Family</h5>\n<p>\n  Coming to my family we are five members in my family father, mother and my siblings.<br />\n  my father is Farmer and my mother is housewife. one of my younger brother is working as a EHS Executive in Wistron\n  Infocomm, and my second younger brother is working as a safety officer in SJS India.\n</p>\n<h5 class=\"primary-headings\">Languages Known</h5>\n<div class=\"table table-responsive\">\n  <table class=\"table\">\n    <thead class=\"text-primary\">\n      <tr>\n        <th>Languages</th>\n        <th>Read</th>\n        <th>Write</th>\n        <th>Speak</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Kannada</td>\n        <td>Yes</td>\n        <td>Yes</td>\n        <td>Yes</td>\n      </tr>\n      <tr>\n        <td>English</td>\n        <td>Yes</td>\n        <td>Yes</td>\n        <td>Yes</td>\n      </tr>\n      <tr>\n        <td>Hindi</td>\n        <td>Yes</td>\n        <td>Yes</td>\n        <td>No</td>\n      </tr>\n      <tr>\n        <td>Telugu</td>\n        <td>No</td>\n        <td>No</td>\n        <td>Yes</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/pages/about-page/about-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/documents-page/document.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/documents-page/document.service.ts ***!
  \**********************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentService = /** @class */ (function () {
    function DocumentService() {
        this.docList = [
            {
                certificate: '../../../assets/images/Certificate(1).jpg',
                certificateName: 'JAVA Certificate'
            },
            {
                certificate: '../../../assets/images/Certificate(1).jpg',
                certificateName: 'JAVA Certificate'
            },
            {
                certificate: '../../../assets/images/Certificate(1).jpg',
                certificateName: 'JAVA Certificate'
            },
            {
                certificate: '../../../assets/images/Certificate(1).jpg',
                certificateName: 'JAVA Certificate'
            },
        ];
    }
    DocumentService.prototype.getList = function () {
        return this.docList;
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/pages/documents-page/documents-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/documents-page/documents-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50cy1wYWdlL2RvY3VtZW50cy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/documents-page/documents-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/documents-page/documents-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-hight pt-2\">\n  <h4 class=\"primary-headings\">Certifications</h4>\n  <div class=\"row  m-0\">\n    <div class=\"col-md-3 p-2\">\n      <div class=\"thumbnail\">\n        <a href=\"../../../assets/images/Certificate(1).jpg\" target=\"_blank\">\n          <img src=\"../../../assets/images/Certificate(1).jpg\" alt=\"Lights\" style=\"width:100%\">\n          <div class=\"caption\">\n            <h5 class=\"text-center\">Java Certificate</h5>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-3 p-2\">\n      <div class=\"thumbnail\">\n        <a href=\"../../../assets/images/Certificate(2).jpg\" target=\"_blank\">\n          <img src=\"../../../assets/images/Certificate(2).jpg\" alt=\"Lights\" style=\"width:100%\">\n          <div class=\"caption\">\n            <h5 class=\"text-center\">CSS Certificate</h5>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-3 p-2\">\n      <div class=\"thumbnail\">\n        <a href=\"../../../assets/images/Certificate(4).jpg\" target=\"_blank\">\n          <img src=\"../../../assets/images/Certificate(4).jpg\" alt=\"Lights\" style=\"width:100%\">\n          <div class=\"caption\">\n            <h5 class=\"text-center\">HTML Certificate</h5>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-3 p-2\">\n      <div class=\"thumbnail\">\n        <a href=\"../../../assets/images/Certificate(5).jpg\" target=\"_blank\">\n          <img src=\"../../../assets/images/Certificate(5).jpg\" alt=\"Lights\" style=\"width:100%\">\n          <div class=\"caption\">\n            <h5 class=\"text-center\">PHP Certificate</h5>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-3 p-2\">\n      <div class=\"thumbnail\">\n        <a href=\"../../../assets/images/Certificate(6).jpg\" target=\"_blank\">\n          <img src=\"../../../assets/images/Certificate(6).jpg\" alt=\"Lights\" style=\"width:100%\">\n          <div class=\"caption\">\n            <h5 class=\"text-center\">Javascript Certificate</h5>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/documents-page/documents-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/documents-page/documents-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DocumentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageComponent", function() { return DocumentsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documents_page_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documents-page/document.service */ "./src/app/pages/documents-page/document.service.ts");



var DocumentsPageComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function DocumentsPageComponent(documentService) {
        this.documentService = documentService;
        this.docList = [];
        this.docList = this.documentService.getList();
    }
    DocumentsPageComponent.prototype.ngOnInit = function () {
    };
    DocumentsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documents-page',
            template: __webpack_require__(/*! ./documents-page.component.html */ "./src/app/pages/documents-page/documents-page.component.html"),
            styles: [__webpack_require__(/*! ./documents-page.component.css */ "./src/app/pages/documents-page/documents-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_documents_page_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]])
    ], DocumentsPageComponent);
    return DocumentsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/education-details-page/education-details-page.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/education-details-page/education-details-page.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhdGlvbi1kZXRhaWxzLXBhZ2UvZWR1Y2F0aW9uLWRldGFpbHMtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/education-details-page/education-details-page.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/education-details-page/education-details-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"primary-headings pt-2\">Education Details</h5>\n<div class=\"table table-responsive\">\n  <table class=\"table\">\n    <thead class=\"text-primary\">\n      <tr>\n        <th>Courses</th>\n        <th>School / College</th>\n        <th>University / Board</th>\n        <th>YOP</th>\n        <th>Percentage</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let course of courseList\">\n        <td>{{course.course}}</td>\n        <td>{{course.school}}</td>\n        <td>{{course.university}}</td>\n        <td>{{course.yop}}</td>\n        <td>{{course.percentage}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/education-details-page/education-details-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/education-details-page/education-details-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EducationDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDetailsPageComponent", function() { return EducationDetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _education_details_page_education_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../education-details-page/education.service */ "./src/app/pages/education-details-page/education.service.ts");



var EducationDetailsPageComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function EducationDetailsPageComponent(EducationService) {
        this.EducationService = EducationService;
        this.courseList = [];
        this.courseList = this.EducationService.getCourses();
    }
    EducationDetailsPageComponent.prototype.ngOnInit = function () {
    };
    EducationDetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education-details-page',
            template: __webpack_require__(/*! ./education-details-page.component.html */ "./src/app/pages/education-details-page/education-details-page.component.html"),
            styles: [__webpack_require__(/*! ./education-details-page.component.css */ "./src/app/pages/education-details-page/education-details-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_education_details_page_education_service__WEBPACK_IMPORTED_MODULE_2__["EducationService"]])
    ], EducationDetailsPageComponent);
    return EducationDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/education-details-page/education.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/education-details-page/education.service.ts ***!
  \*******************************************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationService = /** @class */ (function () {
    function EducationService() {
        this.listCourses = [
            {
                course: 'MCA',
                school: 'NMIT - Bangalore',
                university: 'VTU',
                yop: 2017,
                percentage: 60.14,
            },
            {
                course: 'BSc',
                school: 'Governament Science College - Chitradurga',
                university: 'Davanagere',
                yop: 2014,
                percentage: 64.25,
            },
            {
                course: 'PUC',
                school: 'Kottureswara College - Kottur',
                university: 'Pre University',
                yop: 2011,
                percentage: 52.32,
            },
            {
                course: 'SSLC',
                school: 'STSR High School - Nayakanahatty',
                university: 'Karnataka Education Board',
                yop: 2008,
                percentage: 67.14,
            },
        ];
    }
    EducationService.prototype.getCourses = function () {
        return this.listCourses;
    };
    EducationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/pages/experience/experience.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/experience/experience.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-hight pt-2\">\n  <h5 class=\"primary-headings\">Employment</h5>\n  <div class=\"card\">\n    <div class=\"card-header\">\n     <h5 class=\"text-dark\">Work Experience</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-5\">Company</div>\n        <div class=\"col-7\">: MNSP IT Solutions</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Role</div>\n        <div class=\"col-7\">: UI Devaloper</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Experience</div>\n        <div class=\"col-7\">: 10 Months</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Joining Date</div>\n        <div class=\"col-7\">: August 2017</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Status</div>\n        <div class=\"col-7\">: Inactive</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Role Description</div>\n        <div class=\"col-7\">: As a Ui devaloper in this company I created more web pages as per company requirement\n          by using latest web technologies.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h5 class=\"text-dark\">Internship</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-5\">Company</div>\n        <div class=\"col-7\">: DIGIWOOD</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Role</div>\n        <div class=\"col-7\">: JAVA Devaloper</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Duration</div>\n        <div class=\"col-7\">: 6 Months</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Project Name</div>\n        <div class=\"col-7\">:Outlet Side Panel Ads</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Status</div>\n        <div class=\"col-7\">: Inactive</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">Description</div>\n        <div class=\"col-7\">: I was working  in this company I created more web pages as per company requirement\n          by using latest web technologies.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/pages/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/pages/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.profile-pic img {\r\n    border-radius: 50%;\r\n    width: 140px;\r\n    height: 140px;\r\n    border:2px solid rgb(241, 223, 223);\r\n    margin:20px 20px 5px 10px;\r\n}\r\n.active{\r\n  color: #aaa;\r\n}\r\n.header-bar {\r\n    background-color: #343A40;\r\n    font-weight: 300;\r\n    display:flex;\r\n}\r\n.header-bar p {\r\n    line-height: 0.2 !important;\r\n    font-size: 16px;\r\n}\r\n.profile-info {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n.profile-pic {\r\n    width: 50%;\r\n    float: right;\r\n    text-align: right;\r\n}\r\n.location, .mobile{\r\n  margin-left: 2px;\r\n}\r\n.fa{\r\n  margin-right: 3px;\r\n  font-size: 14px !important;\r\n}\r\n/* side navbar styles */\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 10000;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #343A40;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n.sidenav a {\r\n  padding: 8px 8px 8px 25px;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n.sidenav a:hover {\r\n  color: #aaa;\r\n}\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n/* Contact links */\r\n.contact-link li{\r\n  display:inline-block;\r\n  margin-right: 15px;\r\n}\r\n.contact-link li .fa{\r\n  font-size: 18px !important;\r\n}\r\n.mobile-mode .profile-info-mob{\r\n  font-size: 10px !important;\r\n}\r\n.contact-link-mob{\r\n  padding: 0px;\r\n}\r\n.contact-link-mob li{\r\n  display:inline-block;\r\n}\r\n.contact-link-mob li:not(:first-child){\r\n  margin-left: -14px;\r\n}\r\n.contact-link-mob li .fa{\r\n  font-size: 18px !important;\r\n}\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1QjtBQUNBLHVCQUF1QjtBQUV2QjtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFVBQVUsaUJBQWlCLENBQUM7RUFDNUIsWUFBWSxlQUFlLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2ZpbGUtcGljIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjQxLCAyMjMsIDIyMyk7XHJcbiAgICBtYXJnaW46MjBweCAyMHB4IDVweCAxMHB4O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuLmhlYWRlci1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuLmhlYWRlci1iYXIgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMC4yICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnByb2ZpbGUtaW5mbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnByb2ZpbGUtcGljIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubG9jYXRpb24sIC5tb2JpbGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG4uZmF7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogc2lkZSBuYXZiYXIgc3R5bGVzICovXHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzQTQwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLyogQ29udGFjdCBsaW5rcyAqL1xyXG4uY29udGFjdC1saW5rIGxpe1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uY29udGFjdC1saW5rIGxpIC5mYXtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG4ubW9iaWxlLW1vZGUgLnByb2ZpbGUtaW5mby1tb2J7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhY3QtbGluay1tb2J7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5jb250YWN0LWxpbmstbW9iIGxpe1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcbi5jb250YWN0LWxpbmstbW9iIGxpOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcclxufVxyXG4uY29udGFjdC1saW5rLW1vYiBsaSAuZmF7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-bar p-1 mb-2\">\n  <div class=\"profile-info m-2\">\n    <div class=\"text-light\">\n      <h4>Mowneshachar V N</h4>\n      <p><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i> UI Devaloper</p>\n      <p><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> MCA at NMIT</p>\n      <p><i class=\"fa fa-map-marker location\" aria-hidden=\"true\"></i> Bangalore</p>\n      <p><i class=\"fa fa-mobile mobile\" aria-hidden=\"true\"></i> 9980904728</p>\n      <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> mowni.vns2mc@gmail.com</p>\n    </div>\n  </div>\n  <div class=\"profile-pic\">\n    <div>\n      <img src=\"assets/images/profile_image.jpg\" class=\"img-fluid\" />\n    </div>\n    <div>\n      <ul class=\"contact-link\">\n        <li><a href=\"https://www.facebook.com/mowneshacharvn.mownesh\" target=\"_blank\"><i class=\"fa fa-facebook-square text-primary\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"https://github.com/Mowneshachar\" target=\"_blank\"><i class=\"fa fa-github text-light\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"https://www.linkedin.com/in/mowneshachar-v-n-b81462189/\" target=\"_blank\"><i class=\"fa fa-linkedin text-info\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"https://www.instagram.com/mownesh_char/\" target=\"_blank\"><i class=\"fa fa-instagram text-warning\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"https://twitter.com/VMowni\" target=\"_blank\"><i class=\"fa fa-twitter text-info\" aria-hidden=\"true\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<!-- Mobile top navigation bar -->\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top\">\n  <!-- Brand -->\n  <a class=\"navbar-brand text-light\" onclick=\"openNav()\"><i class=\"material-icons\">reorder</i></a>\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" onclick=\"closeNav()\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <i class=\"material-icons\">account_circle</i>\n  </button>\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <div class=\"navbar-nav\">\n      <div class=\"row mobile-mode\">\n        <div class=\"col-12\">\n          <div class=\"profile-info-mob\">\n            <div class=\"text-light\">\n                <img src=\"assets/images/profile_image.jpg\" class=\"img-fluid\" />\n              <h3 class=\"mt-2\"><u><b>Mowneshachar V N</b></u></h3>\n              <div class=\"row\">\n                <div class=\"col-6 text-center\">\n                  <p><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i> UI Devaloper</p>\n                  <p><i class=\"fa fa-map-marker location\" aria-hidden=\"true\"></i> Bangalore</p>\n                </div>\n                <div class=\"col-6 text-center\">\n                  <p><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> MCA at NMIT</p>\n                  <p><i class=\"fa fa-mobile mobile\" aria-hidden=\"true\"></i> 9980904728</p>\n                </div>\n              </div>\n              <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> mowni.vns2mc@gmail.com</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Side navigation bar -->\n</nav>\n<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n  <a routerLinkActive=\"active\" routerLink=\"/about\" onclick=\"closeNav()\">Mowneshachar V N</a>\n  <a routerLinkActive=\"active\" routerLink=\"/about\" onclick=\"closeNav()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> About Myself</a>\n  <a routerLinkActive=\"active\" routerLink=\"/education\" onclick=\"closeNav()\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> Education Details</a>\n  <a routerLinkActive=\"active\" routerLink=\"/experience\" onclick=\"closeNav()\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i> Employment</a>\n  <a routerLinkActive=\"active\" routerLink=\"/technologies\" onclick=\"closeNav()\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i> IT Skills</a>\n  <a routerLinkActive=\"active\" routerLink=\"/projects\" onclick=\"closeNav()\"><i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> Projects</a>\n  <a routerLinkActive=\"active\" routerLink=\"/documents\" onclick=\"closeNav()\"><i class=\"fa fa-certificate\" aria-hidden=\"true\"></i> Certification</a>\n  <a target=\"_blank\" href=\"https://drive.google.com/file/d/1aCWngNnmAmAhg_-pq_8ko4cGo7J7-HKV/view?usp=sharing\"><i class=\"fa fa-download\" aria-hidden=\"true\" onclick=\"closeNav()\"></i> Downolad Resume</a>\n  1\n  <ul class=\"contact-link-mob\">\n    <li><a href=\"https://www.facebook.com/mowneshacharvn.mownesh\" target=\"_blank\"><i\n          class=\"fa fa-facebook-square text-primary\" aria-hidden=\"true\"></i></a></li>\n    <li><a href=\"https://github.com/Mowneshachar\" target=\"_blank\"><i class=\"fa fa-github text-light\"\n          aria-hidden=\"true\"></i></a></li>\n    <li><a href=\"https://www.linkedin.com/in/mowneshachar-v-n-b81462189/\" target=\"_blank\"><i class=\"fa fa-linkedin text-info\" aria-hidden=\"true\"></i></a></li>\n    <li><a href=\"https://www.instagram.com/mownesh_char/\" target=\"_blank\"><i class=\"fa fa-instagram text-warning\"\n          aria-hidden=\"true\"></i></a></li>\n    <li><a href=\"https://twitter.com/VMowni\" target=\"_blank\"><i class=\"fa fa-twitter text-info\"\n          aria-hidden=\"true\"></i></a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.displayToggle = false;
    }
    HeaderComponent.prototype.toggleSideBar = function () {
        this.displayToggle = !this.displayToggle;
    };
    HeaderComponent.prototype.closeNav = function () {
        return this.displayToggle;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-danger\">404 Error!</h1>\n<h3>Page Not Found</h3>"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzLXBhZ2UvcHJvamVjdHMtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-hight pt-2\">\n  <h5 class=\"primary-headings\">Live Projects</h5>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h5>Khaam</h5>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-5\">Project Name</div>\n      <div class=\"col-7\">: Khaam</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Company Name</div>\n      <div class=\"col-7\">: MNSP IT Solutions</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Duration</div>\n      <div class=\"col-7\">: 7 Months</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Team Size</div>\n      <div class=\"col-7\">: 7</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Technologies Used</div>\n      <div class=\"col-7\">: PHP, MySql, HTML5, CSS3, Javascript, Bootstrap5, JQuery, Angular JS, JSON</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Project Description</div>\n      <div class=\"col-7\">: This is one of the huge web based application it contains more than 1000 API Connections \n        more than 100 Pages. as a Ui devaloper I created more than 50 web pages as per the company requirement by using the\n        latest technologies like HTML5, CSS3, Javascript, Bootstrap5, JQuery and Angular.\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Site Link</div>\n      <div class=\"col-7\"><a href=\"https://khaam.mnsp.co.in/login\" target=\"_blank\">Khaam</a></div>\n    </div>\n  </div>\n  <div class=\"card-footer\"></div>\n</div>\n<div class=\"card mt-3\">\n  <div class=\"card-header\">\n    <h5>Lay MSC India</h5>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-5\">Project Name</div>\n      <div class=\"col-7\">: Lay MSC India</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Company Name</div>\n      <div class=\"col-7\">: MNSP IT Solutions</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Duration</div>\n      <div class=\"col-7\">: 2 Months</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Team Size</div>\n      <div class=\"col-7\">: 3</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Technologies Used</div>\n      <div class=\"col-7\">: PHP, MySql,HTML5, CSS3, Javascript, Bootstrap5</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Project Description</div>\n      <div class=\"col-7\">: This is my first project in MNSP, and this is also web based application,\n        most of work is belongs to frontend only. and its one of the very basic web application what i have did in MNSP.\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-5\">Site Link</div>\n      <div class=\"col-7\"><a href=\"https://www.laymscindia.com/landing\" target=\"_blank\">Lay MSC India</a></div>\n    </div>\n  </div>\n  <div class=\"card-footer\"></div>\n\n</div>\n<div class=\"card mt-3\">\n<div class=\"card-header\">\n  <h5>Github Repository</h5>\n</div>\n<div class=\"card-body\">\n  <div class=\"row\">\n    <div class=\"col-5\">Project Name</div>\n    <div class=\"col-7\">: Mowneshachar.github.io</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">Company Name</div>\n    <div class=\"col-7\">: #</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">Duration</div>\n    <div class=\"col-7\">: 2 days</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">Team Size</div>\n    <div class=\"col-7\">: 1</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">Technologies Used</div>\n    <div class=\"col-7\">:HTML5, CSS3, Javascript, Bootstrap5 , JQuery, Angular7</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">Project Description</div>\n    <div class=\"col-7\">: Its all about my self introduction.\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5\">Site Link</div>\n    <div class=\"col-7\"><a href=\"https://mowneshachar.github.io/\" target=\"_blank\">Mowneshachar.github.io</a></div>\n  </div>\n</div>\n<div class=\"card-footer\"></div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    ProjectsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/pages/projects-page/projects-page.component.html"),
            styles: [__webpack_require__(/*! ./projects-page.component.css */ "./src/app/pages/projects-page/projects-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/side-nav-bar/side-nav-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/side-nav-bar/side-nav-bar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar{\r\n    width: 100%;\r\n    height: auto;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.sidebar ul li{\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  padding: 6px;\r\n  margin-bottom: 8px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n.sidebar li a{\r\n color : #343A40;\r\n text-decoration: none;\r\n font-weight: bold;\r\n}\r\n.sidebar ul{\r\n    padding: 0;\r\n}\r\n.sidebar li:hover {\r\n    background-color: #ccc;\r\n    color:#fff;\r\n}\r\n.fa {\r\n    margin-right: 3px;\r\n}\r\n.active{\r\n    background-color: #ccc !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lkZS1uYXYtYmFyL3NpZGUtbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtBQUNWO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWRlLW5hdi1iYXIvc2lkZS1uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG4uc2lkZWJhciB1bCBsaXtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnNpZGViYXIgbGkgYXtcclxuIGNvbG9yIDogIzM0M0E0MDtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zaWRlYmFyIHVse1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uc2lkZWJhciBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4uZmEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/side-nav-bar/side-nav-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/side-nav-bar/side-nav-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar border-right\">\n  <ul>\n    <li routerLinkActive=\"active\"><a  routerLink=\"/about\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>Myself</a></li>\n    <li routerLinkActive=\"active\"><a  routerLink=\"/education\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>Education</a></li>\n    <li routerLinkActive=\"active\"><a  routerLink=\"/experience\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Employment</a></li>\n    <li routerLinkActive=\"active\"><a  routerLink=\"/technologies\"><i class=\"fa fa-puzzle-piece\" aria-hidden=\"true\"></i>IT Skills</a></li>\n    <li routerLinkActive=\"active\"><a  routerLink=\"/projects\"><i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i>Projects</a></li>\n    <li routerLinkActive=\"active\"><a  routerLink=\"/documents\"><i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>Certifications</a></li>\n    <li routerLinkActive=\"active\"><a class=\"btn btn-sm btn-outline-primary\" target=\"_blank\" href=\"https://drive.google.com/file/d/1aCWngNnmAmAhg_-pq_8ko4cGo7J7-HKV/view?usp=sharing\">Downolad Resume</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/pages/side-nav-bar/side-nav-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/side-nav-bar/side-nav-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: SideNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavBarComponent", function() { return SideNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavBarComponent = /** @class */ (function () {
    function SideNavBarComponent() {
        this.myFile = 'MyProfile/src/assets/documents/MyResume.docx';
    }
    SideNavBarComponent.prototype.ngOnInit = function () {
    };
    SideNavBarComponent.prototype.downloadFile = function (doc) {
        doc.save(this.myResume);
    };
    SideNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav-bar',
            template: __webpack_require__(/*! ./side-nav-bar.component.html */ "./src/app/pages/side-nav-bar/side-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-nav-bar.component.css */ "./src/app/pages/side-nav-bar/side-nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavBarComponent);
    return SideNavBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/technologies/technologies.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/technologies/technologies.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2hub2xvZ2llcy90ZWNobm9sb2dpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/technologies/technologies.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/technologies/technologies.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-hight pt-2\">\n  <h5 class=\"primary-headings\">IT Skills</h5>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h5>Computer Basics</h5>\n    </div>\n    <div class=\"card-body\">\n      <h6>Windows 7/8/10 and MAC IOS</h6>\n      <h6>Microsoft Word</h6>\n      <h6>Microsoft Excel</h6>\n      <h6>Microsoft PowerPoint</h6>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h5>Software Skills</h5>\n    </div>\n    <div class=\"card-body\">\n      <h6>Microsoft Visual Studio</h6>\n      <h6>Eclipse IDE</h6>\n      <h6>Adobe Photoshop</h6>\n      <h6>Adobe Illustrator</h6>\n      <h6>Adobe Premier Pro</h6>\n    </div>\n  </div>\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">\n      <h5>Web Technologies</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h5 class=\"primary-headings\">Front-end Technologies</h5>\n          <h6>HTML5</h6>\n          <h6>CSS/CSS3</h6>\n          <h6>Javascript</h6>\n          <h6>Bootstrap 3&4</h6>\n          <h6>JQuery</h6>\n          <h6>Angular 2/6/7</h6>\n        </div>\n        <div class=\"col-md-4\">\n          <h5 class=\"primary-headings\">Back-end Technologies</h5>\n          <h6>NodeJS(Entry Level)</h6>\n          <h6>ExpressJS(Entry Level)</h6>\n          <h5 class=\"primary-headings\">Other</h5>\n          <h6>Responsive Design</h6>\n          <h6>PSD To HTML Conversion</h6>\n          <h6>CSS Preprossessor SASS</h6>\n          <h6>Git Version Control</h6>\n        </div>\n        <div class=\"col-md-4\">\n          <h5 class=\"primary-headings\">Databases</h5>\n          <h6>SQL(Know Basics)</h6>\n          <h6>Mongo DB</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/technologies/technologies.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/technologies/technologies.component.ts ***!
  \**************************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TechnologiesComponent = /** @class */ (function () {
    function TechnologiesComponent() {
    }
    TechnologiesComponent.prototype.ngOnInit = function () {
    };
    TechnologiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technologies',
            template: __webpack_require__(/*! ./technologies.component.html */ "./src/app/pages/technologies/technologies.component.html"),
            styles: [__webpack_require__(/*! ./technologies.component.css */ "./src/app/pages/technologies/technologies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechnologiesComponent);
    return TechnologiesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Profile\MyProfile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map