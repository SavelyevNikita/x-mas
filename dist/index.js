/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAEE,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toyCard{margin:25px;padding:10px;width:222px;height:342px;background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);backdrop-filter:blur(4px);border-radius:10px;border:solid #24c5db 1px;display:flex;flex-direction:column;justify-content:space-between}.nameToy__name{font-family:Neucha;font-style:normal;font-weight:normal;font-size:20px;line-height:20px;display:flex;align-items:center;color:#fff}.nameToy__pic{margin:20px auto 10px;width:100px;height:100px}.countToy__count-static,.yearToy__year-static,.shapeToy__shape-static,.colorToy__color-static,.sizeToy__size-static,.favoriteToy__favorite-static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:15px;line-height:12px;display:flex;align-items:center;color:#fff}.Сhosen{background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 235, 179, 0.5) 100%)}", "",{"version":3,"sources":["webpack://./src/components/toys/card.scss"],"names":[],"mappings":"AAAA,SAAA,WACI,CAAA,YACA,CAAA,WACA,CAAA,YACA,CAAA,oHACA,CAAA,yBACA,CAAA,kBACA,CAAA,wBACA,CAAA,YACA,CAAA,qBACA,CAAA,6BACA,CAAA,eAIJ,kBACI,CAAA,iBACA,CAAA,kBACA,CAAA,cACA,CAAA,gBACA,CAAA,YACA,CAAA,kBACA,CAAA,UACA,CAAA,cAGJ,qBACI,CAAA,WAEA,CAAA,YACA,CAAA,kJAGJ,kBAMI,CAAA,iBACA,CAAA,kBACA,CAAA,cACA,CAAA,gBACA,CAAA,YACA,CAAA,kBACA,CAAA,UACA,CAAA,QAEJ,oHACI","sourcesContent":[".toyCard {\n    margin: 25px;\n    padding: 10px;\n    width: 222px;\n    height: 342px;\n    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n    backdrop-filter: blur(4px);\n    border-radius: 10px;\n    border: solid #24C5DB 1px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n// .nameToy{\n.nameToy__name {\n    font-family: Neucha;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFFFFF;\n}\n\n.nameToy__pic {\n    margin: 20px auto 10px;\n    // margin: 10px;\n    width: 100px;\n    height: 100px;\n}\n\n.countToy__count-static,\n.yearToy__year-static,\n.shapeToy__shape-static,\n.colorToy__color-static,\n.sizeToy__size-static,\n.favoriteToy__favorite-static {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 15px;\n    line-height: 12px;\n    display: flex;\n    align-items: center;\n    color: #FFFFFF;\n}\n.Сhosen{\n    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgb(255 235 179 / 50%) 100%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _assets_svg_tree_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4353);
/* harmony import */ var _assets_svg_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2323);
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_tree_svg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"Neucha\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");font-weight:normal;font-style:normal}body{display:flex;flex-direction:column;background:#192f2d}header section .toys,header section .tree-make-up{height:22px;font-family:\"Neucha\";font-style:normal;font-weight:normal;font-size:20px;line-height:22px;text-transform:uppercase;color:#fff}header{margin:0 auto;width:1920px;height:75px}header section{margin:15px;display:flex;flex-wrap:wrap;justify-content:space-around;width:500px;align-items:center}header section .tree{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 0 0/contain no-repeat;width:42px;height:42px;cursor:pointer}header section .toys,header section .tree-make-up{cursor:pointer;display:flex;justify-content:center;align-items:center;width:178px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}footer{margin:0 auto;margin-top:auto;width:1920px;height:100px;display:flex;align-items:center;justify-content:space-around}footer .rss-logo{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");width:220px;height:82px}footer .year{color:#fff}.developer a{color:#fff;text-decoration:none}.ExptoyCard{display:none}", "",{"version":3,"sources":["webpack://./src/global.scss"],"names":[],"mappings":"AAAA,WACI,oBAAA,CACA,yDAAA,CACA,kBAAA,CACA,iBAAA,CAMJ,KACI,YAAA,CACA,qBAAA,CACA,kBAAA,CAIJ,kDACI,WAAA,CACA,oBAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,wBAAA,CACA,UAAA,CAsBJ,OACI,aAAA,CACA,YAAA,CACA,WAAA,CACA,eACI,WAAA,CACA,YAAA,CACA,cAAA,CACA,4BAAA,CACA,WAAA,CACA,kBAAA,CACA,qBACI,wEAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CAEJ,kDAGI,cAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACC,WAAA,CACD,gHAAA,CACA,0BAAA,CACC,kBAAA,CACD,wBAAA,CAKZ,OACI,aAAA,CACA,eAAA,CACA,YAAA,CAEA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,4BAAA,CACA,iBACI,kDAAA,CACA,WAAA,CACA,WAAA,CAEJ,aACI,UAAA,CAGR,aACI,UAAA,CACA,oBAAA,CAGJ,YACI,YAAA","sourcesContent":["@font-face {\n    font-family: 'Neucha';\n    src: url('./assets/fonts/Neucha-Regular.ttf') format('ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n$col:rgb(255,\n0,\n0);\nbody {\n    display: flex;\n    flex-direction: column;\n    background: #192F2D;\n}\n\n\n%text-shared {\n    height: 22px;\n    font-family: 'Neucha';\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 22px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n}\n\n%secondary-text-shared {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n%text-large-middle-little {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    color: #FFFFFF;\n}\nheader{\n    margin: 0 auto;\n    width: 1920px;\n    height: 75px;\n    section{\n        margin: 15px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-around;\n        width: 500px;\n        align-items: center;\n        .tree{\n            background: url(\"./assets/svg/tree.svg\") 0 0/contain no-repeat;\n            width: 42px;\n            height: 42px;\n            cursor: pointer;\n        }\n        .toys,\n        .tree-make-up{\n            @extend %text-shared;\n            cursor: pointer;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 178px;\n             height: 28px;\n            background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n            backdrop-filter: blur(31px);\n             border-radius: 30px;\n            border: solid #24C5DB 1px;\n        }\n    }\n\n}\nfooter {\n    margin: 0 auto;\n    margin-top: auto;\n    width: 1920px;\n    // border: rebeccapurple 1px solid;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    .rss-logo {\n        background: url(\"./assets/svg/rs_school_logo.svg\");\n        width: 220px;\n        height: 82px;\n    }\n    .year {\n        color: #fff;\n    }\n}\n.developer a {\n    color: #fff;\n    text-decoration: none;\n}\n\n.ExptoyCard {\n    display: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,*::before,*::after{box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}input,button,textarea,select{font:inherit}", "",{"version":3,"sources":["webpack://./src/null.scss"],"names":[],"mappings":"AACA,qBAGE,qBAAA,CAIF,oBAEE,SAAA,CAIF,6EAcE,QAAA,CAIF,KACE,gBAAA,CACA,sBAAA,CACA,4BAAA,CACA,eAAA,CAIF,oBAEE,eAAA,CAIF,eACE,6BAAA,CAIF,IACE,cAAA,CACA,aAAA,CAIF,YACE,cAAA,CAIF,6BAIE,YAAA","sourcesContent":["/* Указываем box sizing */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Убираем внутренние отступы */\nul[class],\nol[class] {\n  padding: 0;\n}\n\n/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Выставляем основные настройки по-умолчанию для body */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/\nul[class],\nol[class] {\n  list-style: none;\n}\n\n/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Упрощаем работу с изображениями */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Указываем понятную периодичность в потоке данных у article*/\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Наследуем шрифты для инпутов и кнопок */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _assets_backg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5281);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_backg_jpg__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"Neucha\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");font-weight:normal;font-style:normal}body{display:flex;flex-direction:column;background:#192f2d}main .start-background .start-wrapper .start,main .start-background .interface-wrapper .greating{height:22px;font-family:\"Neucha\";font-style:normal;font-weight:normal;font-size:20px;line-height:22px;text-transform:uppercase;color:#fff}main .start-background{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 0 0/100% 100% no-repeat;min-width:100%;min-height:calc(100vh - 140px);background-attachment:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center}main .start-background .interface-wrapper{cursor:pointer;width:593px;height:249px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px;display:flex;justify-content:center;align-items:center;margin-bottom:50px}main .start-background .start-wrapper{cursor:pointer;width:320px;height:54px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px;display:flex;justify-content:center;align-items:center}", "",{"version":3,"sources":["webpack://./src/start.scss"],"names":[],"mappings":"AAAA,WACI,oBAAA,CACA,yDAAA,CACA,kBAAA,CACA,iBAAA,CAMJ,KACI,YAAA,CACA,qBAAA,CACA,kBAAA,CAGJ,iGACI,WAAA,CACA,oBAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,wBAAA,CACA,UAAA,CAwBA,uBACI,0EAAA,CAGA,cAAA,CACA,8BAAA,CACA,2BAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,0CACI,cAAA,CACA,WAAA,CACA,YAAA,CACA,6GAAA,CACA,0BAAA,CACA,kBAAA,CACA,wBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CAKJ,sCACI,cAAA,CACA,WAAA,CACA,WAAA,CACA,6GAAA,CACA,0BAAA,CACA,kBAAA,CACA,wBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA","sourcesContent":["@font-face {\n    font-family: 'Neucha';\n    src: url('./assets/fonts/Neucha-Regular.ttf') format('ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n$col:rgb(255,\n0,\n0);\nbody {\n    display: flex;\n    flex-direction: column;\n    background: #192F2D;\n}\n\n%text-shared {\n    height: 22px;\n    font-family: 'Neucha';\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 22px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n}\n\n%secondary-text-shared {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n%text-large-middle-little {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\nmain {\n    .start-background{\n        background: url(\"./assets/backg.jpg\") 0 0/100% 100% no-repeat;\n        // width: 1920px;\n        // height: 100%;\n        min-width: 100%;\n        min-height: calc(100vh - 140px);\n        background-attachment: fixed;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .interface-wrapper{\n            cursor: pointer;\n            width: 593px;\n            height: 249px;\n            background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n            backdrop-filter: blur(31px);\n            border-radius: 30px;\n            border: solid #24C5DB 1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-bottom: 50px;\n            .greating {\n                @extend %text-shared;\n            }\n        }\n        .start-wrapper{\n            cursor: pointer;\n            width: 320px;\n            height: 54px;\n            background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n            backdrop-filter: blur(31px);\n            border-radius: 30px;\n            border: solid #24C5DB 1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            .start{\n                @extend %text-shared;\n            }\n        }\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _assets_svg_mute_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7780);
/* harmony import */ var _assets_svg_snow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9486);
/* harmony import */ var _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1868);
/* harmony import */ var _assets_svg_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7002);
/* harmony import */ var _assets_svg_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5724);
/* harmony import */ var _assets_svg_bell_2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7796);
/* harmony import */ var _assets_svg_ball_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6594);
/* harmony import */ var _assets_svg_cone_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4592);
/* harmony import */ var _assets_svg_toy_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2523);
/* harmony import */ var _assets_svg_white_sqr_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(971);
/* harmony import */ var _assets_svg_yellow_sqr_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3341);
/* harmony import */ var _assets_svg_red_sqr_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(840);
/* harmony import */ var _assets_svg_blue_sqr_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6974);
/* harmony import */ var _assets_svg_green_sqr_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1743);
// Imports


















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_mute_svg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_snow_svg__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_8__);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_bell_2_svg__WEBPACK_IMPORTED_MODULE_9__);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_ball_svg__WEBPACK_IMPORTED_MODULE_10__);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_cone_svg__WEBPACK_IMPORTED_MODULE_11__);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_toy_svg__WEBPACK_IMPORTED_MODULE_12__);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_white_sqr_svg__WEBPACK_IMPORTED_MODULE_13__);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_yellow_sqr_svg__WEBPACK_IMPORTED_MODULE_14__);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_red_sqr_svg__WEBPACK_IMPORTED_MODULE_15__);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_blue_sqr_svg__WEBPACK_IMPORTED_MODULE_16__);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_green_sqr_svg__WEBPACK_IMPORTED_MODULE_17__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"Neucha\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");font-weight:normal;font-style:normal}body{display:flex;flex-direction:column;background:#192f2d}main .collection-settings .wrapper .size-wrap .size-static,main .collection-settings .wrapper .set0f-wrap .set0f-set-min,main .collection-settings .wrapper .set0f-wrap .set0f-set-max,main .collection-settings .wrapper .set0f-wrap .set0f-static,main .collection-settings .wrapper .year-wrap .year-set-min,main .collection-settings .wrapper .year-wrap .year-set-max,main .collection-settings .wrapper .year-wrap .year-static,main .collection-settings .wrapper .color-wrap .color-static,main .collection-settings .wrapper .form-wrap .form-static,main .collection-settings .wrapper .category-wrap .category-static,main .collection-settings .wrapper .sort-wrap .sort-static{height:22px;font-family:\"Neucha\";font-style:normal;font-weight:normal;font-size:20px;line-height:22px;text-transform:uppercase;color:#fff}main .collection-settings .wrapper .form-wrap .form-set .bell-static,main .collection-settings .wrapper .form-wrap .form-set .ball-static,main .collection-settings .wrapper .form-wrap .form-set .cone-static,main .collection-settings .wrapper .form-wrap .form-set .snow-static,main .collection-settings .wrapper .form-wrap .form-set .figurine-static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;text-align:center;color:#fff}main .collection-settings .wrapper .favorite-wrap .favorite-static,main .collection-settings .wrapper .category-wrap .category-set__static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;text-align:center;color:#fff}main{margin:0 auto;width:1920px;display:flex}main .collection-settings .wrapper{margin-top:50px;max-width:450px;height:900px;display:flex;flex-direction:column;justify-content:space-between}main .collection-settings .wrapper .effects-and-seach-wrap{display:flex;justify-content:space-between}main .collection-settings .wrapper .effects-and-seach-wrap .sound{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 0 0/contain no-repeat;width:36px;height:36px}main .collection-settings .wrapper .effects-and-seach-wrap .snow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 0 0/contain no-repeat;width:36px;height:36px}main .collection-settings .wrapper .effects-and-seach-wrap .search-set{width:254px;height:36px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px;display:flex;justify-content:space-between;align-items:center;padding:0 1rem}main .collection-settings .wrapper .effects-and-seach-wrap .search-set .search-toys{padding:0;margin:0;border:0;border:none;background:none}main .collection-settings .wrapper .effects-and-seach-wrap .search-set .loupe{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 0 0/contain no-repeat;width:24px;height:24px}main .collection-settings .wrapper .sort-wrap{display:flex;justify-content:space-between}main .collection-settings .wrapper .sort-wrap .sort-set{display:flex;justify-content:center;align-items:center;width:100%;height:30px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .collection-settings .wrapper .sort-wrap .sort-set .sort-set-select{padding:.5em 1em;border:none;background:none;appearance:none}main .collection-settings .wrapper .category-wrap .category-set__static{display:flex;align-items:center}main .collection-settings .wrapper .category-wrap .category-set__square{-webkit-appearance:none;-moz-appearance:none;appearance:none}main .collection-settings .wrapper .category-wrap .category-set__static-checkbox{width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 0 0/contain no-repeat}main .collection-settings .wrapper .category-wrap .category-set__square:checked+.category-set__static-checkbox{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 0 0/contain no-repeat}main .collection-settings .wrapper .form-wrap .form-set{display:flex;justify-content:space-between}main .collection-settings .wrapper .form-wrap .form-set .bell{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .ball{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .cone{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .snow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .figurine{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .color-wrap .color-set{width:225px;height:24px;display:flex;justify-content:space-between}main .collection-settings .wrapper .color-wrap .color-set .white{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .white:hover{cursor:pointer}main .collection-settings .wrapper .color-wrap .color-set .yellow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .red{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .blue{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .green{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");width:24px;height:24px}main .collection-settings .wrapper .year-wrap .year-static{width:100%;height:22px}main .collection-settings .wrapper .year-wrap .year-set{margin:15px auto;max-width:350px}main .collection-settings .wrapper .year-wrap .year-set-min,main .collection-settings .wrapper .year-wrap .year-set-max{display:flex;justify-content:center;align-items:center;width:90px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .collection-settings .wrapper .year-wrap .year-set-min-max{display:flex;justify-content:space-between}main .collection-settings .wrapper .set0f-wrap .set0f-static{width:100%;height:22px}main .collection-settings .wrapper .set0f-wrap .set0f-set{margin:15px auto;max-width:350px}main .collection-settings .wrapper .set0f-wrap .set0f-set-min,main .collection-settings .wrapper .set0f-wrap .set0f-set-max{display:flex;justify-content:center;align-items:center;width:90px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .collection-settings .wrapper .set0f-wrap .set0f-set-min-max{display:flex;justify-content:space-between}main .collection-settings .wrapper .size-wrap{padding-left:30px}main .collection-settings .wrapper .size-wrap .size-set .large-set__static,main .collection-settings .wrapper .size-wrap .size-set .middle-set__static,main .collection-settings .wrapper .size-wrap .size-set .little-set__static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;text-align:center;color:#fff;margin-right:3rem}main .collection-settings .wrapper .size-wrap .size-set .large-set__square,main .collection-settings .wrapper .size-wrap .size-set .middle-set__square,main .collection-settings .wrapper .size-wrap .size-set .little-set__square{position:absolute;-webkit-appearance:none;-moz-appearance:none;appearance:none}main .collection-settings .wrapper .size-wrap .size-set .large-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .middle-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .little-set__static-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 0 0/contain no-repeat;border-radius:5px}main .collection-settings .wrapper .size-wrap .size-set .large-set__square:checked+.large-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .middle-set__square:checked+.middle-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .little-set__square:checked+.little-set__static-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 0 0/contain no-repeat;border-radius:5px}main .collection-settings .wrapper .favorite-wrap{padding-left:30px}main .collection-settings .wrapper .favorite-wrap .favorite-static .favorite-square{position:absolute;-webkit-appearance:none;-moz-appearance:none;appearance:none}main .collection-settings .wrapper .favorite-wrap .favorite-static .favorite-square-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");border-radius:5px}main .collection-settings .wrapper .favorite-wrap .favorite-static .favorite-square:checked+.favorite-square-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");border-radius:5px}main .collection-settings .wrapper .reset-wrap{display:flex;justify-content:space-between}main .collection-settings .wrapper .reset-wrap .reset-filters,main .collection-settings .wrapper .reset-wrap .reset-settings{display:flex;justify-content:center;align-items:center;width:178px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px;cursor:pointer}main .collection-settings .wrapper .reset-wrap .reset-filters .reset-filters__reset-static,main .collection-settings .wrapper .reset-wrap .reset-filters .reset-settings__reset-static,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-filters__reset-static,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-settings__reset-static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;text-align:center;color:#fff}main .collection-settings .wrapper .reset-wrap .reset-filters .reset-filters__reset-static input,main .collection-settings .wrapper .reset-wrap .reset-filters .reset-settings__reset-static input,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-filters__reset-static input,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-settings__reset-static input{padding:0;border:none;font:inherit;color:inherit;background-color:transparent}main .collection-new-year{display:flex;flex-wrap:wrap}.year-display-none,.quantity-display-none,.value-display-none,.ballShaped-display-none,.bellShaped-display-none,.coneShaped-display-none,.snowShaped-display-none,.figurineShaped-display-none,.white-display-none,.yellow-display-none,.red-display-none,.blue-display-none,.green-display-none,.large-display-none,.middle-display-none,.little-display-none,.favorite-display-none{display:none}", "",{"version":3,"sources":["webpack://./src/toy.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Neucha';\n    src: url('./assets/fonts/Neucha-Regular.ttf') format('ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n$col:rgb(255,\n0,\n0);\nbody {\n    display: flex;\n    flex-direction: column;\n    background: #192F2D;\n}\n\n%text-shared {\n    height: 22px;\n    font-family: 'Neucha';\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 22px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n}\n\n%secondary-text-shared {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n%text-large-middle-little {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\nmain {\n    margin: 0 auto;\n    width: 1920px;\n    display: flex;\n    .collection-settings {\n        .wrapper {\n            margin-top: 50px;\n            max-width: 450px;\n            height: 900px;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            .effects-and-seach-wrap {\n                display: flex;\n                justify-content: space-between;\n                .sound {\n                    background: url(\"./assets/svg/mute.svg\") 0 0/contain no-repeat;                    \n                    width: 36px;\n                    height: 36px;\n                }\n                .snow {\n                    background: url(\"./assets/svg/snow.svg\") 0 0/contain no-repeat;\n                    width: 36px;\n                    height: 36px;\n                }\n                .search-set {\n                    width: 254px;\n                    height: 36px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 0 1rem;\n                    .search-toys {\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        border: none;\n                        background: none;\n                    }\n                    .loupe {\n                        background: url(\"./assets/svg/search.svg\") 0 0/contain no-repeat;\n                        width: 24px;\n                        height: 24px;\n                    }\n                }\n            }\n            .sort-wrap {\n                display: flex;\n                justify-content: space-between;\n                .sort-static {\n                    @extend %text-shared;\n                }\n                .sort-set {\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 100%;\n                    height: 30px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                    .sort-set-select {\n                        // color: white;\n                        padding: 0.5em 1em;\n                        border: none;\n                        background: none;\n                        appearance: none;\n                    }\n                }\n            }\n            .category-wrap {\n                .category-static {\n                    @extend %text-shared;\n                }\n                .category-set__static {\n                    display: flex;\n                    align-items: center;\n                    @extend %text-large-middle-little;\n                }\n                .category-set__square {\n                    -webkit-appearance: none;\n                    -moz-appearance: none;\n                    appearance: none;\n                }\n                .category-set__static-checkbox {\n                    width: 24px;\n                    height: 24px;\n                    background: url(\"./assets/svg/checkbox.svg\") 0 0/contain no-repeat;\n                }\n                .category-set__square:checked+.category-set__static-checkbox {\n                    background: url(\"./assets/svg/checkbox-checked.svg\") 0 0/contain no-repeat;\n                }\n            }\n            .form-wrap {\n                .form-static {\n                    @extend %text-shared;\n                }\n                .form-set {\n                    display: flex;\n                    justify-content: space-between;\n                    .bell-static,\n                    .ball-static,\n                    .cone-static,\n                    .snow-static,\n                    .figurine-static {\n                        @extend %secondary-text-shared;\n                    }\n                    .bell {\n                        background: url(\"./assets/svg/bell-2.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .ball {\n                        background: url(\"./assets/svg/ball.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .cone {\n                        background: url(\"./assets/svg/cone.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .snow {\n                        background: url(\"./assets/svg/snow.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .figurine {\n                        background: url(\"./assets/svg/toy.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .bell-static,\n                    .ball-static,\n                    .cone-static,\n                    .snow-static,\n                    .figurine-static {\n                        @extend %secondary-text-shared;\n                    }\n                }\n            }\n            .color-wrap {\n                .color-static {\n                    @extend %text-shared;\n                }\n                .color-set {\n                    width: 225px;\n                    height: 24px;\n                    display: flex;\n                    justify-content: space-between;\n                    .white {\n                        &:hover {\n                            cursor: pointer\n                        }\n                        background: url(\"./assets/svg/white-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .yellow {\n                        background: url(\"./assets/svg/yellow-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .red {\n                        background: url(\"./assets/svg/red-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .blue {\n                        background: url(\"./assets/svg/blue-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .green {\n                        background: url(\"./assets/svg/green-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                }\n            }\n            .year-wrap {\n                .year-static {\n                    @extend %text-shared;\n                    width: 100%;\n                    height: 22px;\n                }\n                .year-set{\n                    margin: 15px auto;\n                    max-width: 350px;\n                }    \n                .year-set-min,\n                .year-set-max {\n                    @extend %text-shared;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 90px;\n                    height: 28px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                }\n                .year-set-min-max {\n                    display: flex;\n                    justify-content: space-between;\n                }\n            }\n            .set0f-wrap {\n                .set0f-static {\n                    @extend %text-shared;\n                    width: 100%;\n                    height: 22px;\n                }\n                .set0f-set{\n                    margin: 15px auto;\n                    max-width: 350px;\n                }\n                .set0f-set-min,\n                .set0f-set-max {\n                    @extend %text-shared;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 90px;\n                    height: 28px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                }\n                .set0f-set-min-max {\n                    display: flex;\n                    justify-content: space-between;\n                }\n            }\n            .size-wrap {\n                padding-left: 30px;\n                .size-static {\n                    @extend %text-shared;\n                    // width: 10rem;\n                    // height: 22px;\n                }\n                .size-set {\n                    .large-set__static,\n                    .middle-set__static,\n                    .little-set__static {\n                        font-family: Steppe;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 16px;\n                        line-height: 19px;\n                        text-align: center;\n                        color: #FFFFFF;\n                        margin-right: 3rem;\n                    }\n                    .large-set__square,\n                    .middle-set__square,\n                    .little-set__square {\n                        position: absolute;\n                        -webkit-appearance: none;\n                        -moz-appearance: none;\n                        appearance: none;\n                    }\n                    .large-set__static-checkbox,\n                    .middle-set__static-checkbox,\n                    .little-set__static-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox.svg\") 0 0/contain no-repeat;\n                        border-radius: 5px;\n                    }\n                    .large-set__square:checked+.large-set__static-checkbox,\n                    .middle-set__square:checked+.middle-set__static-checkbox,\n                    .little-set__square:checked+.little-set__static-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox-checked.svg\") 0 0/contain no-repeat;\n                        border-radius: 5px;\n                    }\n                }\n            }\n            .favorite-wrap {\n                padding-left: 30px;\n                .favorite-static {\n                    @extend %text-large-middle-little;\n                    .favorite-square {\n                        position: absolute;\n                        -webkit-appearance: none;\n                        -moz-appearance: none;\n                        appearance: none;\n                    }\n                    .favorite-square-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox.svg\");\n                        border-radius: 5px;\n                    }\n                    .favorite-square:checked+.favorite-square-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox-checked.svg\");\n                        border-radius: 5px;\n                    }\n                }\n            }\n            .reset-wrap {\n                display: flex;\n                justify-content: space-between;\n                .reset-filters,\n                .reset-settings {\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 178px;\n                    height: 28px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                    cursor: pointer;\n                    .reset-filters__reset-static,\n                    .reset-settings__reset-static {\n                        font-family: Steppe;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 12px;\n                        line-height: 14px;\n                        text-align: center;\n                        color: #FFFFFF;\n                        input {\n                            padding: 0;\n                            border: none;\n                            font: inherit;\n                            color: inherit;\n                            background-color: transparent;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    .collection-new-year {\n        display: flex;\n        flex-wrap: wrap;\n    }\n}\n\n.year-display-none,\n.quantity-display-none,\n.value-display-none,\n.ballShaped-display-none,\n.bellShaped-display-none,\n.coneShaped-display-none,\n.snowShaped-display-none,\n.figurineShaped-display-none,\n.white-display-none,\n.yellow-display-none,\n.red-display-none,\n.blue-display-none,\n.green-display-none,\n.large-display-none,\n.middle-display-none,\n.little-display-none,\n.favorite-display-none {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _assets_svg_audio_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2861);
/* harmony import */ var _assets_svg_snowflake_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5922);
/* harmony import */ var _assets_garland_Garland_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1280);
/* harmony import */ var _assets_garland_Garland_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3103);
/* harmony import */ var _assets_garland_Garland_3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2751);
/* harmony import */ var _assets_bg_1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5332);
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_audio_svg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_snowflake_svg__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_garland_Garland_1_svg__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_garland_Garland_2_svg__WEBPACK_IMPORTED_MODULE_7__);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_garland_Garland_3_svg__WEBPACK_IMPORTED_MODULE_8__);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_bg_1_jpg__WEBPACK_IMPORTED_MODULE_9__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"Neucha\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");font-weight:normal;font-style:normal}body{display:flex;flex-direction:column;background:#192f2d}main .tree-settings-toys .wrapper-tree-settings-toys .saved-collection .saved-collection-static,main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection .toys-collection-static,main .tree-setting .wrapper-tree-setting .choose-flash-lights-wrap .choose-flash-lights-static,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background-static,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree-static{height:22px;font-family:\"Neucha\";font-style:normal;font-weight:normal;font-size:20px;line-height:22px;text-transform:uppercase;color:#fff}main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap .reset-settings-wrap input,main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap .save-wrap input{font-family:Steppe;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;text-align:center;color:#fff}main{margin:0 auto;display:flex}main .tree-setting{width:384px}main .tree-setting .wrapper-tree-setting{display:flex;flex-direction:column;justify-content:space-between;width:320px;margin:0 auto}main .tree-setting .wrapper-tree-setting .choose-settings-toys{display:flex;justify-content:space-around}main .tree-setting .wrapper-tree-setting .choose-settings-toys .sound{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 0 0/contain no-repeat;width:36px;height:36px}main .tree-setting .wrapper-tree-setting .choose-settings-toys .snow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 0 0/contain no-repeat;width:36px;height:36px}main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree-static{height:22px}main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree{width:320px;display:flex;flex-wrap:wrap;overflow:auto}main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-1,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-2,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-3,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-4,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-5,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-6{margin:12px;width:134px;height:134px;background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);backdrop-filter:blur(4px);border-radius:10px;display:flex;justify-content:center}main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-1 img,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-2 img,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-3 img,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-4 img,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-5 img,main .tree-setting .wrapper-tree-setting .choose-tree-wrap .choose-tree .tree-6 img{height:100%;width:auto}main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background-static{height:22px}main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background{display:flex;flex-wrap:wrap}main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-1,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-2,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-3,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-4,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-5,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-6,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-7,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-8{margin:6px;width:68px;height:68px;border-radius:10px}main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-1 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-2 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-3 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-4 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-5 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-6 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-7 img,main .tree-setting .wrapper-tree-setting .choose-background-wrap .choose-background .bg-8 img{height:100%;width:auto}main .tree-setting .wrapper-tree-setting .choose-flash-lights-wrap .choose-flash-lights-static{height:22px}main .tree-setting .wrapper-tree-setting .choose-flash-lights-wrap .choose-flash-lights .flash-lights-1{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 0 0/contain no-repeat;height:50px}main .tree-setting .wrapper-tree-setting .choose-flash-lights-wrap .choose-flash-lights .flash-lights-2{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 0 0/contain no-repeat;height:50px}main .tree-setting .wrapper-tree-setting .choose-flash-lights-wrap .choose-flash-lights .flash-lights-3{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 0 0/contain no-repeat;height:60px}main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap{display:flex}main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap .save-wrap{display:flex;justify-content:center;align-items:center;width:178px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap .save-wrap input{padding:0;margin:0;border:0;border:none;background:none}main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap .reset-settings-wrap{display:flex;justify-content:center;align-items:center;width:178px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .tree-setting .wrapper-tree-setting .tree-setting-button .setting-button-wrap .reset-settings-wrap input{padding:0;margin:0;border:0;border:none;background:none}main .tree-main-view{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") 0 0/cover no-repeat;width:1095px;height:980px;display:flex;justify-content:center;align-items:center}main .tree-main-view .tree{width:543px;height:810px}main .tree-settings-toys{width:440px}main .tree-settings-toys .wrapper-tree-settings-toys{width:344px;height:432px;margin:0 auto}main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection{margin:0 auto}main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection .toys-collection-static{height:22px}main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection .toys-collection-wrap{overflow:auto;display:flex;flex-wrap:wrap;width:344px;height:432px}main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection .toys-collection-wrap .favorite-toy{margin:3px;background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);backdrop-filter:blur(4px);border-radius:10px;width:75px;height:75px;display:flex;justify-content:center;align-items:center}main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection .toys-collection-wrap .favorite-toy .ft{height:75%;width:auto}main .tree-settings-toys .wrapper-tree-settings-toys .toys-collection .toys-collection-wrap .favorite-toy .count{width:22px;height:19px;background:#24c5db;border-radius:10px}main .tree-settings-toys .wrapper-tree-settings-toys .saved-collection{margin:0 auto;overflow:auto}main .tree-settings-toys .wrapper-tree-settings-toys .saved-collection .saved-collection-static{height:22px}main .tree-settings-toys .wrapper-tree-settings-toys .saved-collection .saved-collection-wrap{width:344px;height:432px;display:flex;flex-wrap:wrap}main .tree-settings-toys .wrapper-tree-settings-toys .saved-collection .saved-collection-wrap .saved-tree{margin:6px;width:160px;height:160px;background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);backdrop-filter:blur(4px);border-radius:10px;display:flex;justify-content:center;align-items:center}main .tree-settings-toys .wrapper-tree-settings-toys .saved-collection .saved-collection-wrap .saved-tree .tr{height:100%;width:auto}", "",{"version":3,"sources":["webpack://./src/tree.scss"],"names":[],"mappings":"AAAA,WACI,oBAAA,CACA,yDAAA,CACA,kBAAA,CACA,iBAAA,CAMJ,KACI,YAAA,CACA,qBAAA,CACA,kBAAA,CAIJ,ucACI,WAAA,CACA,oBAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,wBAAA,CACA,UAAA,CAaJ,kNACI,kBAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CAGJ,KACI,aAAA,CACA,YAAA,CACA,mBAEI,WAAA,CACA,yCACI,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,aAAA,CACA,+DACI,YAAA,CACA,4BAAA,CACA,sEACI,wEAAA,CACA,UAAA,CACA,WAAA,CAEJ,qEACI,wEAAA,CACA,UAAA,CACA,WAAA,CAIJ,+EAGI,WAAA,CAEJ,wEACI,WAAA,CACA,YAAA,CACA,cAAA,CACA,aAAA,CACA,geAMI,WAAA,CACA,WAAA,CACA,YAAA,CACA,oHAAA,CACA,yBAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,wfACI,WAAA,CACA,UAAA,CAMZ,2FAGI,WAAA,CACJ,oFACI,YAAA,CACA,cAAA,CACA,gtBAYI,UAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CAPA,gvBACI,WAAA,CACA,UAAA,CAWZ,+FAGI,WAAA,CAGA,wGACI,wEAAA,CAEA,WAAA,CAEJ,wGACI,wEAAA,CAEA,WAAA,CAEJ,wGACI,wEAAA,CAEA,WAAA,CAMR,mFACI,YAAA,CACA,8FACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,WAAA,CACA,gHAAA,CACA,0BAAA,CACA,kBAAA,CACA,wBAAA,CAEI,oGAEA,SAAA,CACA,QAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CAGR,wGACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,WAAA,CACA,gHAAA,CACA,0BAAA,CACA,kBAAA,CACA,wBAAA,CACI,8GAEA,SAAA,CACA,QAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CAQxB,qBAEI,sEAAA,CACA,YAAA,CACA,YAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,2BACI,WAAA,CACA,YAAA,CAGR,yBACI,WAAA,CAEA,qDACI,WAAA,CACA,YAAA,CACA,aAAA,CACJ,sEACI,aAAA,CACA,8FAEQ,WAAA,CAER,4FACI,aAAA,CACA,YAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,0GACI,UAAA,CACA,oHAAA,CACA,yBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,8GACI,UAAA,CACA,UAAA,CAEJ,iHACI,UAAA,CACA,WAAA,CACA,kBAAA,CACA,kBAAA,CAKhB,uEACI,aAAA,CACA,aAAA,CACA,gGAEI,WAAA,CAEJ,8FACI,WAAA,CACA,YAAA,CACA,YAAA,CACA,cAAA,CACA,0GACI,UAAA,CACA,WAAA,CACA,YAAA,CACA,oHAAA,CACA,yBAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,8GACI,WAAA,CACA,UAAA","sourcesContent":["@font-face {\n    font-family: 'Neucha';\n    src: url('./assets/fonts/Neucha-Regular.ttf') format('ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n$col:rgb(255,\n0,\n0);\nbody {\n    display: flex;\n    flex-direction: column;\n    background: #192F2D;\n}\n\n\n%text-shared {\n    height: 22px;\n    font-family: 'Neucha';\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 22px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n}\n\n%secondary-text-shared {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n%text-large-middle-little {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\nmain {\n    margin: 0 auto;\n    display: flex;\n    .tree-setting {\n        // border: red 1px solid;\n        width: 384px;\n        .wrapper-tree-setting{\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            width: 320px;\n            margin: 0 auto;\n            .choose-settings-toys{\n                display: flex;\n                justify-content: space-around;    \n                .sound{\n                    background: url(\"./assets/svg/audio.svg\") 0 0/contain no-repeat;\n                    width: 36px;\n                    height: 36px;\n                }\n                .snow{\n                    background: url(\"./assets/svg/snowflake.svg\") 0 0/contain no-repeat;\n                    width: 36px;\n                    height: 36px;\n                }\n            }        \n            .choose-tree-wrap{\n                .choose-tree-static{\n                    @extend %text-shared;\n                    // width: 130px;\n                    height: 22px;    \n                }\n                .choose-tree{ \n                    width: 320px;\n                    display: flex;\n                    flex-wrap: wrap;\n                    overflow: auto;\n                    .tree-1,\n                    .tree-2,\n                    .tree-3,\n                    .tree-4,\n                    .tree-5,\n                    .tree-6 {\n                        margin: 12px;\n                        width: 134px;\n                        height: 134px;\n                        background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n                        backdrop-filter: blur(4px);\n                        border-radius: 10px;\n                        display: flex;\n                        justify-content: center;\n                        img{\n                            height: 100%;\n                            width: auto;\n                        }\n                    }\n                }\n            }\n            .choose-background-wrap{\n                .choose-background-static{\n                    @extend %text-shared;\n                    // width: 130px;\n                    height: 22px;                }\n                .choose-background{\n                    display: flex;\n                    flex-wrap: wrap;\n                    .bg-1,\n                    .bg-2,\n                    .bg-3,\n                    .bg-4,\n                    .bg-5,\n                    .bg-6,\n                    .bg-7,\n                    .bg-8{\n                        img{\n                            height: 100%;\n                            width: auto;\n                        }\n                        margin: 6px;\n                        width: 68px;\n                        height: 68px;\n                        border-radius: 10px;\n                    }\n                }\n\n            }\n            .choose-flash-lights-wrap{\n                .choose-flash-lights-static{\n                    @extend %text-shared;\n                    // width: 130px;\n                    height: 22px;\n                }\n                .choose-flash-lights{\n                    .flash-lights-1{\n                        background: url(\"./assets/garland/Garland_1.svg\") 0 0/contain no-repeat;\n                        // width: 100%;\n                        height: 50px;\n                    }\n                    .flash-lights-2{\n                        background: url(\"./assets/garland/Garland_2.svg\") 0 0/contain no-repeat;\n                        // width: 284px;\n                        height: 50px;\n                    }\n                    .flash-lights-3{\n                        background: url(\"./assets/garland/Garland_3.svg\") 0 0/contain no-repeat;\n                        // width: 284px;\n                        height: 60px;\n                    }\n                }\n\n            }\n            .tree-setting-button{\n                .setting-button-wrap{\n                    display: flex;\n                    .save-wrap{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        width: 178px;\n                        height: 28px;\n                        background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                        backdrop-filter: blur(31px);\n                        border-radius: 30px;\n                        border: solid #24C5DB 1px;\n\n                            input{\n                            @extend %text-large-middle-little;\n                            padding: 0;\n                            margin: 0;\n                            border: 0;\n                            border: none;\n                            background: none;\n                        }\n                    }\n                    .reset-settings-wrap{\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        width: 178px;\n                        height: 28px;\n                        background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                        backdrop-filter: blur(31px);\n                        border-radius: 30px;\n                        border: solid #24C5DB 1px;\n                            input{\n                            @extend %text-large-middle-little;\n                            padding: 0;\n                            margin: 0;\n                            border: 0;\n                            border: none;\n                            background: none;\n                        }\n                    }\n                }\n\n            }\n        }    \n    }\n    .tree-main-view {\n        // border: red 1px solid;\n        background: url(\"./assets/bg/1.jpg\") 0 0/cover no-repeat;\n        width: 1095px;\n        height: 980px;\n        display: flex;\n        justify-content:center;\n        align-items: center;\n        .tree {\n            width: 543px;\n            height: 810px;\n        }\n    }\n    .tree-settings-toys{\n        width: 440px;\n        // border: tomato 1px solid;\n        .wrapper-tree-settings-toys{\n            width: 344px;\n            height: 432px;\n            margin: 0 auto;\n        .toys-collection{\n            margin: 0 auto;\n            .toys-collection-static {\n                @extend %text-shared;\n                    height: 22px;    \n            }\n            .toys-collection-wrap {\n                overflow: auto;\n                display: flex;\n                flex-wrap: wrap;\n                width: 344px;\n                height: 432px;\n                .favorite-toy{\n                    margin: 3px;\n                    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n                    backdrop-filter: blur(4px);\n                    border-radius: 10px;\n                    width: 75px;\n                    height: 75px;\n                    display: flex;\n                    justify-content:center;\n                    align-items: center;            \n                    .ft{\n                        height: 75%;\n                        width: auto;\n                    }\n                    .count{\n                        width: 22px;\n                        height: 19px;\n                        background: #24C5DB;\n                        border-radius: 10px;\n                    }\n                }\n            }\n        }\n        .saved-collection{\n            margin: 0 auto;\n            overflow: auto;\n            .saved-collection-static{\n                @extend %text-shared;\n                height: 22px;    \n            }\n            .saved-collection-wrap{\n                width: 344px;\n                height: 432px;\n                display: flex;\n                flex-wrap: wrap;\n                .saved-tree{\n                    margin: 6px;\n                    width: 160px;\n                    height: 160px;\n                    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n                    backdrop-filter: blur(4px);\n                    border-radius: 10px;\n                    display: flex;\n                    justify-content:center;\n                    align-items: center; \n                    .tr{\n                        height: 100%;\n                        width: auto;\n                    }\n                }\n            }\n        }\n    }\n    }   \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 4015:
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 1667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 4211:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports['default'] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 1671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4850);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4101);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 3690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6525);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_null_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5068);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_null_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_null_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 3253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_start_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5040);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_start_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_start_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(442);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toy_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toy_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 3085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5109);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tree_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 3379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 2060:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartPage = void 0;
const toyMainPage_1 = __webpack_require__(8641);
class StartPage {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const startBackground = document.createElement('div');
        startBackground.setAttribute('class', 'start-background');
        const interfaceWrapper = document.createElement('div');
        interfaceWrapper.setAttribute('class', 'interface-wrapper');
        const greating = document.createElement('h1');
        greating.setAttribute('class', 'greating');
        greating.textContent = 'Помогите бабушке нарядить елку';
        const startWrapper = document.createElement('div');
        startWrapper.setAttribute('class', 'start-wrapper');
        const start = document.createElement('p');
        start.setAttribute('class', 'start');
        start.textContent = 'Начать';
        interfaceWrapper.appendChild(greating);
        startBackground.appendChild(interfaceWrapper);
        startWrapper.appendChild(start);
        startBackground.appendChild(startWrapper);
        this.node.appendChild(startBackground);
        startWrapper.addEventListener('click', () => { this.buttonHandler(); });
        startBackground.addEventListener('click', () => { this.buttonHandler(); });
    }
    destroy() {
        this.node.innerHTML = '';
    }
    buttonHandler() {
        this.destroy();
        const toyPage = new toyMainPage_1.ToyPage('main');
        toyPage.render();
    }
}
exports.StartPage = StartPage;


/***/ }),

/***/ 2653:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cards = void 0;
// import '../null.scss';
__webpack_require__(422);
const card_1 = __webpack_require__(9199);
class Cards {
    constructor(data) {
        this.data = data;
    }
    renderNull() {
        const collection_new_year = document.querySelector('.collection-new-year');
        collection_new_year.innerHTML = '';
    }
    renderToys() {
        const collection_new_year = document.querySelector('.collection-new-year');
        this.renderNull();
        this.data.forEach((item) => {
            const toy = new card_1.Card(item);
            collection_new_year.appendChild(toy.renderToy());
        });
    }
    destroy() {
        const collection_new_year = document.querySelector('.collection-new-year');
    }
}
exports.Cards = Cards;


/***/ }),

/***/ 9199:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
class Card {
    constructor(data) {
        // super();
        this.color = data.color;
        this.count = data.count;
        this.favorite = data.favorite;
        this.name = data.name;
        this.num = data.num;
        this.shape = data.shape;
        this.size = data.size;
        this.year = data.year;
        this.theСhosen = false;
    }
    renderToy() {
        const toyCard = document.createElement('div');
        toyCard.innerHTML = '';
        toyCard.classList.add(`toyCard`);
        toyCard.classList.add(`toyCard${this.num}`);
        const nameToy = document.createElement('div');
        nameToy.classList.add(`nameToy`);
        const nameToy_name = document.createElement('h2');
        nameToy_name.classList.add(`nameToy__name`);
        const nameToy_pic = new Image;
        nameToy_pic.classList.add(`nameToy__pic`);
        nameToy_pic.src = `./assets/toys/${this.num}.png`;
        nameToy_pic.alt = `${this.num}.png`;
        const countToy = document.createElement('div');
        countToy.classList.add(`countToy`);
        const countToy_count_static = document.createElement('span');
        countToy_count_static.classList.add(`countToy__count-static`);
        const countToy_count = document.createElement('span');
        countToy_count.classList.add(`countToy__count`);
        const yearToy = document.createElement('div');
        yearToy.classList.add(`yearToy`);
        const yearToy_year_static = document.createElement('span');
        yearToy_year_static.classList.add(`yearToy__year-static`);
        const yearToy_year = document.createElement('span');
        yearToy_year.classList.add(`yearToy__year`);
        const shapeToy = document.createElement('div');
        shapeToy.classList.add(`shapeToy`);
        const shapeToy_shape_static = document.createElement('span');
        shapeToy_shape_static.classList.add(`shapeToy__shape-static`);
        const shapeToy_shape = document.createElement('span');
        shapeToy_shape.classList.add(`shapeToy__shape`);
        const colorToy = document.createElement('div');
        colorToy.classList.add(`colorToy`);
        const colorToy_color_static = document.createElement('span');
        colorToy_color_static.classList.add(`colorToy__color-static`);
        const colorToy_color = document.createElement('span');
        colorToy_color.classList.add(`colorToy__color`);
        const sizeToy = document.createElement('div');
        sizeToy.classList.add(`sizeToy`);
        const sizeToy_size_static = document.createElement('span');
        sizeToy_size_static.classList.add(`sizeToy__size-static`);
        const sizeToy_size = document.createElement('span');
        sizeToy_size.classList.add(`sizeToy__size`);
        const favoriteToy = document.createElement('div');
        favoriteToy.classList.add(`favoriteToy`);
        const favoriteToy_favorite_static = document.createElement('span');
        favoriteToy_favorite_static.classList.add(`favoriteToy__favorite-static`);
        const favoriteToy_favorite = document.createElement('span');
        favoriteToy_favorite.classList.add(`favoriteToy__favorite`);
        nameToy_name.innerText = `${this.name}`;
        nameToy.appendChild(nameToy_name);
        nameToy.appendChild(nameToy_pic);
        countToy_count_static.innerText = `Количество: ${this.count}`;
        countToy.appendChild(countToy_count_static);
        yearToy_year_static.innerText = `Год покупки: ${this.year}`;
        yearToy.appendChild(yearToy_year_static);
        shapeToy_shape_static.innerText = `Форма игрушки: ${this.shape}`;
        shapeToy.appendChild(shapeToy_shape_static);
        colorToy_color_static.innerText = `Цвет игрушки: ${this.color}`;
        colorToy.appendChild(colorToy_color_static);
        sizeToy_size_static.innerText = `Размер игрушки: ${this.size}`;
        sizeToy.appendChild(sizeToy_size_static);
        favoriteToy_favorite_static.innerText = `Любимая: ${this.favorite}`;
        favoriteToy.appendChild(favoriteToy_favorite_static);
        toyCard.appendChild(nameToy);
        toyCard.appendChild(countToy);
        toyCard.appendChild(yearToy);
        toyCard.appendChild(shapeToy);
        toyCard.appendChild(colorToy);
        toyCard.appendChild(sizeToy);
        toyCard.appendChild(favoriteToy);
        toyCard.addEventListener('click', () => {
            this.ischoosen();
            if (this.theСhosen)
                toyCard.classList.add(`Сhosen`);
            else
                toyCard.classList.remove(`Сhosen`);
        });
        return toyCard;
    }
    ;
    ischoosen() {
        if (!this.theСhosen) {
            this.theСhosen = true;
        }
        else {
            this.theСhosen = false;
        }
        this.renderToy();
    }
    ;
    destroy() {
    }
}
exports.Card = Card;


/***/ }),

/***/ 8920:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["СolorWrap"] = void 0;
class СolorWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    ;
    ;
    ;
    render() {
        // console.log(this.node);
        const colorStatic = document.createElement('p');
        colorStatic.setAttribute('class', 'color-static');
        colorStatic.textContent = 'Цвет';
        const colorSet = document.createElement('div');
        colorSet.setAttribute('class', 'color-set');
        const white = document.createElement('div');
        white.setAttribute('class', 'white');
        const yellow = document.createElement('div');
        yellow.setAttribute('class', 'yellow');
        const red = document.createElement('div');
        red.setAttribute('class', 'red');
        const blue = document.createElement('div');
        blue.setAttribute('class', 'blue');
        const green = document.createElement('div');
        green.setAttribute('class', 'green');
        colorSet.appendChild(white);
        colorSet.appendChild(yellow);
        colorSet.appendChild(red);
        colorSet.appendChild(blue);
        colorSet.appendChild(green);
        this.node.appendChild(colorStatic);
        this.node.appendChild(colorSet);
    }
    destroy() {
    }
}
exports["СolorWrap"] = СolorWrap;


/***/ }),

/***/ 980:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EffectsAndSeachWrap = void 0;
class EffectsAndSeachWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const sound = document.createElement('div');
        sound.setAttribute('class', 'sound');
        const searchSet = document.createElement('div');
        searchSet.setAttribute('class', 'search-set');
        const search = document.createElement('input');
        search.setAttribute('class', 'search-toys');
        search.setAttribute('type', 'search');
        search.setAttribute('placeholder', 'Поиск');
        search.setAttribute('autofocus', 'autofocus');
        search.setAttribute('autocomplete', 'off');
        const loupe = document.createElement('div');
        loupe.setAttribute('class', 'loupe');
        searchSet.appendChild(search);
        searchSet.appendChild(loupe);
        this.node.appendChild(sound);
        this.node.appendChild(searchSet);
    }
    destroy() {
    }
}
exports.EffectsAndSeachWrap = EffectsAndSeachWrap;


/***/ }),

/***/ 2836:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FavoriteWrap = void 0;
class FavoriteWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const favoriteStatic = document.createElement('label');
        favoriteStatic.setAttribute('class', 'favorite-static');
        favoriteStatic.textContent = 'Только любимые';
        const favoriteSquare = document.createElement('input');
        favoriteSquare.setAttribute('class', 'favorite-square');
        favoriteSquare.setAttribute('type', 'checkbox');
        favoriteSquare.setAttribute('name', 'favorite_square');
        const favoriteSquareCheckbox = document.createElement('span');
        favoriteSquareCheckbox.setAttribute('class', 'favorite-square-checkbox');
        favoriteStatic.appendChild(favoriteSquare);
        favoriteStatic.appendChild(favoriteSquareCheckbox);
        this.node.appendChild(favoriteStatic);
    }
    destroy() {
    }
}
exports.FavoriteWrap = FavoriteWrap;


/***/ }),

/***/ 4090:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormWrap = void 0;
class FormWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const formStatic = document.createElement('p');
        formStatic.setAttribute('class', 'form-static');
        formStatic.textContent = 'Форма';
        const fortSet = document.createElement('div');
        fortSet.setAttribute('class', 'form-set');
        const bellWrap = document.createElement('div');
        bellWrap.setAttribute('class', 'bell-wrap');
        const bell = document.createElement('div');
        bell.setAttribute('class', 'bell');
        const bellStatic = document.createElement('p');
        bellStatic.setAttribute('class', 'bell-static');
        bellStatic.textContent = 'Колокол';
        bellWrap.appendChild(bell);
        bellWrap.appendChild(bellStatic);
        const ballWrap = document.createElement('div');
        ballWrap.setAttribute('class', 'ball-wrap');
        const ball = document.createElement('div');
        ball.setAttribute('class', 'ball');
        const ballStatic = document.createElement('p');
        ballStatic.setAttribute('class', 'ball-static');
        ballStatic.textContent = 'Шар';
        ballWrap.appendChild(ball);
        ballWrap.appendChild(ballStatic);
        const coneWrap = document.createElement('div');
        coneWrap.setAttribute('class', 'cone-wrap');
        const cone = document.createElement('div');
        cone.setAttribute('class', 'cone');
        const coneStatic = document.createElement('p');
        coneStatic.setAttribute('class', 'cone-static');
        coneStatic.textContent = 'Шишка';
        coneWrap.appendChild(cone);
        coneWrap.appendChild(coneStatic);
        const snowWrap = document.createElement('div');
        snowWrap.setAttribute('class', 'snow-wrap');
        const snow = document.createElement('div');
        snow.setAttribute('class', 'snow');
        const snowStatic = document.createElement('p');
        snowStatic.setAttribute('class', 'snow-static');
        snowStatic.textContent = 'Снежинка';
        snowWrap.appendChild(snow);
        snowWrap.appendChild(snowStatic);
        const figurineWrap = document.createElement('div');
        figurineWrap.setAttribute('class', 'figurine-wrap');
        const figurine = document.createElement('div');
        figurine.setAttribute('class', 'figurine');
        const figurineStatic = document.createElement('p');
        figurineStatic.setAttribute('class', 'figurine-static');
        figurineStatic.textContent = 'Снежинка';
        figurineWrap.appendChild(figurine);
        figurineWrap.appendChild(figurineStatic);
        fortSet.appendChild(bellWrap);
        fortSet.appendChild(ballWrap);
        fortSet.appendChild(coneWrap);
        fortSet.appendChild(snowWrap);
        fortSet.appendChild(figurineWrap);
        this.node.appendChild(formStatic);
        this.node.appendChild(fortSet);
    }
    destroy() {
    }
}
exports.FormWrap = FormWrap;


/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetWrap = void 0;
class ResetWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        // console.log(this.node);
        const resetFilters = document.createElement('div');
        resetFilters.setAttribute('class', 'reset-filters');
        const resetFiltersResetStatic = document.createElement('p');
        resetFiltersResetStatic.setAttribute('class', 'reset-filters__reset-static');
        const filters = document.createElement('input');
        filters.setAttribute('type', 'button');
        filters.setAttribute('value', 'Сбросить фильтры');
        resetFiltersResetStatic.appendChild(filters);
        resetFilters.appendChild(resetFiltersResetStatic);
        const resetSettings = document.createElement('div');
        resetSettings.setAttribute('class', 'reset-settings');
        const resetSettingsResetStatic = document.createElement('p');
        resetSettingsResetStatic.setAttribute('class', 'reset-settings__reset-static');
        const settings = document.createElement('input');
        settings.setAttribute('type', 'button');
        settings.setAttribute('value', 'Сбросить фильтры');
        resetSettingsResetStatic.appendChild(settings);
        resetSettings.appendChild(resetSettingsResetStatic);
        this.node.appendChild(resetFilters);
        this.node.appendChild(resetSettings);
    }
    destroy() {
    }
}
exports.ResetWrap = ResetWrap;


/***/ }),

/***/ 7622:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetOfWrap = void 0;
class SetOfWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const set0fStatic = document.createElement('p');
        set0fStatic.setAttribute('class', 'set0f-static');
        set0fStatic.textContent = 'Количество экземляров';
        const set0fSet = document.createElement('div');
        set0fSet.setAttribute('class', 'set0f-set');
        set0fSet.setAttribute('id', 'set0fslider');
        const set0fSetMinMax = document.createElement('div');
        set0fSetMinMax.setAttribute('class', 'set0f-set-min-max');
        const set0fSetMin = document.createElement('div');
        set0fSetMin.setAttribute('class', 'set0f-set-min');
        set0fSetMin.setAttribute('id', 'set0fslider-snap-value-lower');
        const set0fSetMax = document.createElement('div');
        set0fSetMax.setAttribute('class', 'set0f-set-max');
        set0fSetMax.setAttribute('id', 'set0fslider-snap-value-upper');
        set0fSetMinMax.appendChild(set0fSetMin);
        set0fSetMinMax.appendChild(set0fSetMax);
        this.node.appendChild(set0fStatic);
        this.node.appendChild(set0fSet);
        this.node.appendChild(set0fSetMinMax);
    }
    destroy() {
    }
}
exports.SetOfWrap = SetOfWrap;


/***/ }),

/***/ 2649:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SizeWrap = void 0;
class SizeWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        // console.log(this.node);
        const sizeStatic = document.createElement('p');
        sizeStatic.setAttribute('class', 'size-static');
        sizeStatic.textContent = 'Размер';
        const sizeSet = document.createElement('div');
        sizeSet.setAttribute('class', 'size-set');
        const largeSetStatic = document.createElement('label');
        largeSetStatic.setAttribute('class', 'large-set__static');
        largeSetStatic.textContent = 'Большой';
        const largeSetSquare = document.createElement('input');
        largeSetSquare.setAttribute('class', 'large-set__square');
        largeSetSquare.setAttribute('type', 'checkbox');
        largeSetSquare.setAttribute('name', 'large-set_square');
        largeSetSquare.setAttribute('checked', 'checked');
        const largeSetStaticCheckbox = document.createElement('span');
        largeSetStaticCheckbox.setAttribute('class', 'large-set__static-checkbox');
        largeSetStatic.appendChild(largeSetSquare);
        largeSetStatic.appendChild(largeSetStaticCheckbox);
        const middleSetStatic = document.createElement('label');
        middleSetStatic.setAttribute('class', 'middle-set__static');
        middleSetStatic.textContent = 'Средний';
        const middleSetSquare = document.createElement('input');
        middleSetSquare.setAttribute('class', 'middle-set__square');
        middleSetSquare.setAttribute('type', 'checkbox');
        middleSetSquare.setAttribute('name', 'middle-set_square');
        middleSetSquare.setAttribute('checked', 'checked');
        const middleSetStaticCheckbox = document.createElement('span');
        middleSetStaticCheckbox.setAttribute('class', 'middle-set__static-checkbox');
        middleSetStatic.appendChild(middleSetSquare);
        middleSetStatic.appendChild(middleSetStaticCheckbox);
        const littleSetStatic = document.createElement('label');
        littleSetStatic.setAttribute('class', 'little-set__static');
        littleSetStatic.textContent = 'Средний';
        const littleSetSquare = document.createElement('input');
        littleSetSquare.setAttribute('class', 'little-set__square');
        littleSetSquare.setAttribute('type', 'checkbox');
        littleSetSquare.setAttribute('name', 'little-set_square');
        littleSetSquare.setAttribute('checked', 'checked');
        const littleSetStaticCheckbox = document.createElement('span');
        littleSetStaticCheckbox.setAttribute('class', 'little-set__static-checkbox');
        littleSetStatic.appendChild(littleSetSquare);
        littleSetStatic.appendChild(littleSetStaticCheckbox);
        sizeSet.appendChild(largeSetStatic);
        sizeSet.appendChild(middleSetStatic);
        sizeSet.appendChild(littleSetStatic);
        this.node.appendChild(sizeStatic);
        this.node.appendChild(sizeSet);
    }
    destroy() {
    }
}
exports.SizeWrap = SizeWrap;


/***/ }),

/***/ 4910:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Slider = void 0;
const nouislider_1 = __importDefault(__webpack_require__(4211));
__webpack_require__(1671);
class Slider {
    constructor(set0fslider, minRange, maxRange) {
        this.set0fslider = set0fslider;
        this.minRange = minRange;
        this.maxRange = maxRange;
    }
    anySliderEvent() {
        this.anySlider = document.getElementById(`${this.set0fslider}`);
        this.leftanySlider = document.getElementById(`${this.set0fslider}-snap-value-lower`);
        this.rightanySlider = document.getElementById(`${this.set0fslider}-snap-value-upper`);
        nouislider_1.default.create(this.anySlider, {
            start: [this.minRange, this.maxRange],
            connect: true,
            range: {
                'min': this.minRange,
                'max': this.maxRange,
            }
        });
    }
    anySliderUpdateRange() {
        this.anySlider.noUiSlider.on('update', () => {
            let outputValue = this.anySlider.noUiSlider.get();
            if (outputValue) {
                this.leftanySlider.innerHTML = parseInt(outputValue[0]).toString();
                this.rightanySlider.innerHTML = parseInt(outputValue[1]).toString();
            }
        });
    }
    anySliderSet([minRange, maxRange]) {
        this.anySlider.noUiSlider.set([minRange, maxRange]);
    }
}
exports.Slider = Slider;
;


/***/ }),

/***/ 4827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortWrap = void 0;
class SortWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const sortStatic = document.createElement('p');
        sortStatic.setAttribute('class', 'sort-static');
        sortStatic.textContent = 'Сортировать';
        const sortSet = document.createElement('div');
        sortSet.setAttribute('class', 'sort-set');
        const sortSetSelect = document.createElement('select');
        sortSetSelect.setAttribute('name', 'sort-set-select');
        sortSetSelect.setAttribute('class', 'sort-set-select');
        sortSetSelect.setAttribute('id', 'sort_set_select');
        const option_1 = document.createElement('option');
        option_1.setAttribute('value', 'none');
        option_1.setAttribute('id', 'none');
        option_1.textContent = 'Выбрать...';
        const option_2 = document.createElement('option');
        option_2.setAttribute('value', 'A_Z');
        option_2.setAttribute('id', 'A_Z');
        option_2.textContent = `По названию от "А" до "Я"`;
        const option_3 = document.createElement('option');
        option_3.setAttribute('value', 'Z_A');
        option_3.setAttribute('id', 'Z_A');
        option_3.textContent = `По названию от "Я" до "А"`;
        const option_4 = document.createElement('option');
        option_4.setAttribute('value', 'countUp');
        option_4.setAttribute('id', 'countUp');
        option_4.textContent = 'По количеству в порядке возрастания';
        const option_5 = document.createElement('option');
        option_5.setAttribute('value', 'countDown');
        option_5.setAttribute('id', 'countDown');
        option_5.textContent = 'По количеству в порядке убывания';
        sortSetSelect.appendChild(option_1);
        sortSetSelect.appendChild(option_2);
        sortSetSelect.appendChild(option_3);
        sortSetSelect.appendChild(option_4);
        sortSetSelect.appendChild(option_5);
        sortSet.appendChild(sortSetSelect);
        this.node.appendChild(sortStatic);
        this.node.appendChild(sortSet);
    }
    destroy() {
    }
}
exports.SortWrap = SortWrap;


/***/ }),

/***/ 885:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sorting = void 0;
const data_1 = __importDefault(__webpack_require__(2471));
const Cards_1 = __webpack_require__(2653);
const slider_1 = __webpack_require__(4910);
class Sorting {
    constructor(data) {
        this.data = data;
        this.ballShaped = true;
        this.bellShaped = true;
        this.coneShaped = true;
        this.snowShaped = true;
        this.figurineShaped = true;
        this.white = true;
        this.yellow = true;
        this.red = true;
        this.blue = true;
        this.green = true;
        this.large = true;
        this.middle = true;
        this.little = true;
        this.favorite = false;
        this.text = '';
        this.yearSetMin = 1940;
        this.yearSetMax = 2020;
        this.setOfMin = 0;
        this.setOfMax = 12;
    }
    writeToLocalStorage() {
        const toSave = {
            ballShaped_ls: this.ballShaped,
            bellShaped_ls: this.bellShaped,
            coneShaped_ls: this.coneShaped,
            snowShaped_ls: this.snowShaped,
            figurineShaped_ls: this.figurineShaped,
            white_ls: this.white,
            yellow_ls: this.yellow,
            red_ls: this.red,
            blue_ls: this.blue,
            green_ls: this.green,
            large_ls: this.large,
            middle_ls: this.middle,
            little_ls: this.little,
            favorite_ls: this.favorite,
            text_ls: this.text,
            yearSetMin_ls: this.yearSetMin,
            yearSetMax_ls: this.yearSetMax,
            setOfMin_ls: this.setOfMin,
            setOfMax_ls: this.setOfMax,
        };
    }
    ;
    favoriteEvent(checker) {
        if (checker) {
            this.filterByAnyUnVisible('Любимая: false', 'favorite-display-none', 'favoriteToy');
        }
        else {
            this.filterByAnyVisible('Любимая: false', 'favorite-display-none', 'favoriteToy');
        }
    }
    littleSizeEvent(checker) {
        if (checker) {
            this.filterByAnyVisible('Размер игрушки: малый', 'little-display-none', 'sizeToy');
        }
        else {
            this.filterByAnyUnVisible('Размер игрушки: малый', 'little-display-none', 'sizeToy');
        }
    }
    middleSizeEvent(checker) {
        if (checker) {
            this.filterByAnyVisible('Размер игрушки: средний', 'middle-display-none', 'sizeToy');
        }
        else {
            this.filterByAnyUnVisible('Размер игрушки: средний', 'middle-display-none', 'sizeToy');
        }
    }
    largeSizeEvent(checker) {
        if (checker) {
            this.filterByAnyVisible('Размер игрушки: большой', 'large-display-none', 'sizeToy');
        }
        else {
            this.filterByAnyUnVisible('Размер игрушки: большой', 'large-display-none', 'sizeToy');
        }
    }
    checkingFilter() {
        this.favoriteEvent(this.favorite);
        this.littleSizeEvent(this.little);
        this.middleSizeEvent(this.middle);
        this.largeSizeEvent(this.large);
        if (!this.ballShaped) {
            this.filterByAnyUnVisible('Форма игрушки: шар', 'ballShaped-display-none', 'shapeToy');
        }
        else {
            this.filterByAnyVisible('Форма игрушки: шар', 'ballShaped-display-none', 'shapeToy');
        }
        if (!this.bellShaped) {
            this.filterByAnyUnVisible('Форма игрушки: колокольчик', 'bellShaped-display-none', 'shapeToy');
        }
        else {
            this.filterByAnyVisible('Форма игрушки: колокольчик', 'bellShaped-display-none', 'shapeToy');
        }
        if (!this.coneShaped) {
            this.filterByAnyUnVisible('Форма игрушки: шишка', 'coneShaped-display-none', 'shapeToy');
        }
        else {
            this.filterByAnyVisible('Форма игрушки: шишка', 'coneShaped-display-none', 'shapeToy');
        }
        if (!this.snowShaped) {
            this.filterByAnyUnVisible('Форма игрушки: снежинка', 'snowShaped-display-none', 'shapeToy');
        }
        else {
            this.filterByAnyVisible('Форма игрушки: снежинка', 'snowShaped-display-none', 'shapeToy');
        }
        if (!this.figurineShaped) {
            this.filterByAnyUnVisible('Форма игрушки: фигурка', 'figurineShaped-display-none', 'shapeToy');
        }
        else {
            this.filterByAnyVisible('Форма игрушки: фигурка', 'figurineShaped-display-none', 'shapeToy');
        }
        if (!this.white) {
            this.filterByAnyUnVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
        }
        else {
            this.filterByAnyVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
        }
        if (!this.yellow) {
            this.filterByAnyUnVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
        }
        else {
            this.filterByAnyVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
        }
        if (!this.red) {
            this.filterByAnyUnVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
        }
        else {
            this.filterByAnyVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
        }
        if (!this.blue) {
            this.filterByAnyUnVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
        }
        else {
            this.filterByAnyVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
        }
        if (!this.green) {
            this.filterByAnyUnVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
        }
        else {
            this.filterByAnyVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
        }
    }
    ;
    sortingA_Z() {
        this.data = data_1.default.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }
    sortingZ_A() {
        this.data = data_1.default.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        });
    }
    sortingcountUp() {
        this.data = data_1.default.sort((a, b) => {
            if (+a.count < +b.count) {
                return -1;
            }
            if (+a.count > +b.count) {
                return 1;
            }
            return 0;
        });
    }
    sortingcountDown() {
        this.data = data_1.default.sort((a, b) => {
            if (+a.count < +b.count) {
                return 1;
            }
            if (+a.count > +b.count) {
                return -1;
            }
            return 0;
        });
    }
    filterByAnyVisible(identity, type, nameOfClass) {
        const colorToy = [...document.getElementsByClassName(`${nameOfClass}`)];
        colorToy.forEach((element) => {
            if (element.innerText === `${identity}`) {
                element.parentElement.classList.remove(`${type}`);
            }
        });
    }
    filterByAnyUnVisible(identity, type, nameOfClass) {
        const colorToy = [...document.getElementsByClassName(`${nameOfClass}`)];
        colorToy.forEach((element) => {
            if (element.innerText === `${identity}`) {
                element.parentElement.classList.add(`${type}`);
            }
        });
    }
    filterByInputText(identity, type, text) {
        const nameToyName = [...document.getElementsByClassName(`${identity}`)];
        if (text !== '') {
            nameToyName.forEach((element) => {
                if ((element.innerText).indexOf(text) === -1) {
                    element.parentElement.parentElement.classList.add(`${type}`);
                }
                else {
                    element.parentElement.parentElement.classList.remove(`${type}`);
                }
            });
        }
        else {
            nameToyName.forEach((element) => {
                element.parentElement.parentElement.classList.remove(`${type}`);
            });
        }
    }
    filterByRange(identity, low, high, type) {
        const yearToy = [...document.getElementsByClassName(`${identity}`)];
        yearToy.forEach((element) => {
            if (+element.innerText.slice(element.innerText.lastIndexOf(' ')) >= low && +element.innerText.slice(element.innerText.lastIndexOf(' ')) <= high) {
                element.parentElement.parentElement.classList.remove(`${type}`);
            }
            else {
                element.parentElement.parentElement.classList.add(`${type}`);
            }
        });
    }
    ;
    addListener() {
        const setOfSlider = new slider_1.Slider(`set0fslider`, this.setOfMin, this.setOfMax);
        setOfSlider.anySliderEvent();
        setOfSlider.anySliderUpdateRange();
        const yearSlider = new slider_1.Slider(`yearslider`, this.yearSetMin, this.yearSetMax);
        yearSlider.anySliderEvent();
        yearSlider.anySliderUpdateRange();
        const search = document.querySelector('.search-toys');
        const selectElement = document.querySelector('#sort_set_select');
        const bellElement = document.querySelector('.bell-wrap');
        const ballElement = document.querySelector('.ball-wrap');
        const coneElement = document.querySelector('.cone-wrap');
        const snowElement = document.querySelector('.snow-wrap');
        const figurineElement = document.querySelector('.figurine-wrap');
        const white = document.querySelector('.white');
        const yellow = document.querySelector('.yellow');
        const red = document.querySelector('.red');
        const blue = document.querySelector('.blue');
        const green = document.querySelector('.green');
        const large = document.querySelector('.large-set__square');
        const middle = document.querySelector('.middle-set__square');
        const little = document.querySelector('.little-set__square');
        const favorite = document.querySelector('.favorite-square');
        const yearSetMin = document.querySelector('.year-set-min');
        const yearSetMax = document.querySelector('.year-set-max');
        const setOfMin = document.querySelector('.set0f-set-min');
        const setOfMax = document.querySelector('.set0f-set-max');
        const collectionNewYear = document.querySelector('.collection-new-year');
        const resetFilters = document.querySelector('.reset-filters');
        const resetSettings = document.querySelector('.reset-settings');
        resetFilters.addEventListener('click', () => {
            console.log('i work');
            setOfSlider.anySliderSet([0, 12]);
            yearSlider.anySliderSet([1940, 2020]);
            this.ballShaped = true;
            this.bellShaped = true;
            this.coneShaped = true;
            this.snowShaped = true;
            this.figurineShaped = true;
            this.white = true;
            this.yellow = true;
            this.red = true;
            this.blue = true;
            this.green = true;
            this.large = true;
            large.checked = this.large;
            this.largeSizeEvent(this.large);
            this.middle = true;
            middle.checked = this.middle;
            this.middleSizeEvent(this.middle);
            this.little = true;
            little.checked = this.little;
            this.littleSizeEvent(this.little);
            this.favorite = false;
            favorite.checked = this.favorite;
            this.favoriteEvent(this.favorite);
            this.text = '';
            this.yearSetMin = 1940;
            this.yearSetMax = 2020;
            this.setOfMin = 0;
            this.setOfMax = 12;
            this.checkingFilter();
            this.filterByInputText('nameToy__name', 'value-display-none', this.text);
            this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
            this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
        });
        const observer = new MutationObserver(mutationRecords => {
            // console.log(mutationRecords);
            this.yearSetMin = +yearSetMin.innerText;
            this.yearSetMax = +yearSetMax.innerText;
            this.setOfMin = +setOfMin.innerText;
            this.setOfMax = +setOfMax.innerText;
            this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
            this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
        });
        observer.observe(yearSetMin, {
            childList: true, // наблюдать за непосредственными детьми
        });
        observer.observe(yearSetMax, {
            childList: true, // наблюдать за непосредственными детьми
        });
        observer.observe(setOfMin, {
            childList: true, // наблюдать за непосредственными детьми
        });
        observer.observe(setOfMax, {
            childList: true, // наблюдать за непосредственными детьми
        });
        //filtering part
        search.addEventListener('input', (event) => {
            this.text = event.target.value;
            this.filterByInputText('nameToy__name', 'value-display-none', this.text);
        });
        bellElement.addEventListener('click', (event) => {
            if (this.bellShaped) {
                this.bellShaped = false;
                this.filterByAnyUnVisible('Форма игрушки: колокольчик', 'bellShaped-display-none', 'shapeToy');
            }
            else {
                this.bellShaped = true;
                this.filterByAnyVisible('Форма игрушки: колокольчик', 'bellShaped-display-none', 'shapeToy');
            }
        });
        ballElement.addEventListener('click', (event) => {
            if (this.ballShaped) {
                this.ballShaped = false;
                this.filterByAnyUnVisible('Форма игрушки: шар', 'ballShaped-display-none', 'shapeToy');
            }
            else {
                this.ballShaped = true;
                this.filterByAnyVisible('Форма игрушки: шар', 'ballShaped-display-none', 'shapeToy');
            }
        });
        coneElement.addEventListener('click', (event) => {
            if (this.coneShaped) {
                this.coneShaped = false;
                this.filterByAnyUnVisible('Форма игрушки: шишка', 'coneShaped-display-none', 'shapeToy');
            }
            else {
                this.coneShaped = true;
                this.filterByAnyVisible('Форма игрушки: шишка', 'coneShaped-display-none', 'shapeToy');
            }
        });
        snowElement.addEventListener('click', (event) => {
            if (this.snowShaped) {
                this.snowShaped = false;
                this.filterByAnyUnVisible('Форма игрушки: снежинка', 'snowShaped-display-none', 'shapeToy');
            }
            else {
                this.snowShaped = true;
                this.filterByAnyVisible('Форма игрушки: снежинка', 'snowShaped-display-none', 'shapeToy');
            }
        });
        figurineElement.addEventListener('click', (event) => {
            if (this.figurineShaped) {
                this.figurineShaped = false;
                this.filterByAnyUnVisible('Форма игрушки: фигурка', 'figurineShaped-display-none', 'shapeToy');
            }
            else {
                this.figurineShaped = true;
                this.filterByAnyVisible('Форма игрушки: фигурка', 'figurineShaped-display-none', 'shapeToy');
            }
        });
        white.addEventListener('click', (event) => {
            if (this.white) {
                this.white = false;
                this.filterByAnyUnVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
            }
            else {
                this.white = true;
                this.filterByAnyVisible('Цвет игрушки: белый', 'white-display-none', 'colorToy');
            }
        });
        yellow.addEventListener('click', (event) => {
            if (this.yellow) {
                this.yellow = false;
                this.filterByAnyUnVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
            }
            else {
                this.yellow = true;
                this.filterByAnyVisible('Цвет игрушки: желтый', 'yellow-display-none', 'colorToy');
            }
        });
        red.addEventListener('click', (event) => {
            if (this.red) {
                this.red = false;
                this.filterByAnyUnVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
            }
            else {
                this.red = true;
                this.filterByAnyVisible('Цвет игрушки: красный', 'red-display-none', 'colorToy');
            }
        });
        blue.addEventListener('click', (event) => {
            if (this.blue) {
                this.blue = false;
                this.filterByAnyUnVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
            }
            else {
                this.blue = true;
                this.filterByAnyVisible('Цвет игрушки: синий', 'blue-display-none', 'colorToy');
            }
        });
        green.addEventListener('click', (event) => {
            if (this.green) {
                this.green = false;
                this.filterByAnyUnVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
            }
            else {
                this.green = true;
                this.filterByAnyVisible('Цвет игрушки: зелёный', 'green-display-none', 'colorToy');
            }
        });
        large.addEventListener('click', (event) => {
            this.large = large.checked;
            this.largeSizeEvent(this.large);
        });
        middle.addEventListener('click', (event) => {
            this.middle = middle.checked;
            this.middleSizeEvent(this.middle);
        });
        little.addEventListener('click', (event) => {
            this.little = little.checked;
            this.littleSizeEvent(this.little);
        });
        favorite.addEventListener('click', (event) => {
            this.favorite = favorite.checked;
            this.favoriteEvent(this.favorite);
        });
        //sorting part
        selectElement.addEventListener('change', (event) => {
            if (event.target.value === 'A_Z') {
                this.sortingA_Z();
                const app = new Cards_1.Cards(this.data);
                app.renderToys();
                this.checkingFilter();
                this.filterByInputText('nameToy__name', 'value-display-none', this.text);
                this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
                this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
            }
            if (event.target.value === 'Z_A') {
                this.sortingZ_A();
                const app = new Cards_1.Cards(this.data);
                app.renderToys();
                this.checkingFilter();
                this.filterByInputText('nameToy__name', 'value-display-none', this.text);
                this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
                this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
            }
            if (event.target.value === 'countUp') {
                this.sortingcountUp();
                const app = new Cards_1.Cards(this.data);
                app.renderToys();
                this.checkingFilter();
                this.filterByInputText('nameToy__name', 'value-display-none', this.text);
                this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
                this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
            }
            if (event.target.value === 'countDown') {
                this.sortingcountDown();
                const app = new Cards_1.Cards(this.data);
                app.renderToys();
                this.checkingFilter();
                this.filterByInputText('nameToy__name', 'value-display-none', this.text);
                this.filterByRange('yearToy__year-static', this.yearSetMin, this.yearSetMax, 'year-display-none');
                this.filterByRange('countToy__count-static', this.setOfMin, this.setOfMax, 'quantity-display-none');
            }
        });
    }
}
exports.Sorting = Sorting;


/***/ }),

/***/ 8641:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToyPage = void 0;
const Cards_1 = __webpack_require__(2653);
const effectsAndSeachWrap_1 = __webpack_require__(980);
const sortWrap_1 = __webpack_require__(4827);
const formWrap_1 = __webpack_require__(4090);
const set0fWrap_1 = __webpack_require__(7622);
const yearWrap_1 = __webpack_require__(8613);
const colorWrap_1 = __webpack_require__(8920);
const sizeWrap_1 = __webpack_require__(2649);
const favoriteWrap_1 = __webpack_require__(2836);
const resetWrap_1 = __webpack_require__(587);
const sorting_1 = __webpack_require__(885);
const data_1 = __importDefault(__webpack_require__(2471));
class ToyPage {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const collectionSettings = document.createElement('section');
        collectionSettings.setAttribute('class', 'collection-settings');
        const collectionNewYear = document.createElement('section');
        collectionNewYear.setAttribute('class', 'collection-new-year');
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const effectsAndSeachWrap = document.createElement('div');
        effectsAndSeachWrap.setAttribute('class', 'effects-and-seach-wrap');
        const sortWrap = document.createElement('div');
        sortWrap.setAttribute('class', 'sort-wrap');
        const formWrap = document.createElement('div');
        formWrap.setAttribute('class', 'form-wrap');
        const set0fWrap = document.createElement('div');
        set0fWrap.setAttribute('class', 'set0f-wrap');
        const yearWrap = document.createElement('div');
        yearWrap.setAttribute('class', 'year-wrap');
        const colorWrap = document.createElement('div');
        colorWrap.setAttribute('class', 'color-wrap');
        const sizeWrap = document.createElement('div');
        sizeWrap.setAttribute('class', 'size-wrap');
        const favoriteWrap = document.createElement('div');
        favoriteWrap.setAttribute('class', 'favorite-wrap');
        const resetWrap = document.createElement('div');
        resetWrap.setAttribute('class', 'reset-wrap');
        wrapper.appendChild(effectsAndSeachWrap);
        wrapper.appendChild(sortWrap);
        wrapper.appendChild(formWrap);
        wrapper.appendChild(set0fWrap);
        wrapper.appendChild(yearWrap);
        wrapper.appendChild(colorWrap);
        wrapper.appendChild(sizeWrap);
        wrapper.appendChild(favoriteWrap);
        wrapper.appendChild(resetWrap);
        collectionSettings.appendChild(wrapper);
        this.node.appendChild(collectionSettings);
        this.node.appendChild(collectionNewYear);
        this.renderInnerToyPage();
    }
    destroy() {
        this.node.innerHTML = '';
    }
    renderInnerToyPage() {
        const appEffectsAndSeachWrap = new effectsAndSeachWrap_1.EffectsAndSeachWrap('.effects-and-seach-wrap');
        appEffectsAndSeachWrap.render();
        const sortWrap = new sortWrap_1.SortWrap('.sort-wrap');
        sortWrap.render();
        const formWrap = new formWrap_1.FormWrap('.form-wrap');
        formWrap.render();
        const setOfWrap = new set0fWrap_1.SetOfWrap('.set0f-wrap');
        setOfWrap.render();
        const yearOfWrap = new yearWrap_1.YearWrap('.year-wrap');
        yearOfWrap.render();
        const сolorWrap = new colorWrap_1.СolorWrap('.color-wrap');
        сolorWrap.render();
        const sizeWrap = new sizeWrap_1.SizeWrap('.size-wrap');
        sizeWrap.render();
        const favoriteWrap = new favoriteWrap_1.FavoriteWrap('.favorite-wrap');
        favoriteWrap.render();
        const resetWrap = new resetWrap_1.ResetWrap('.reset-wrap');
        resetWrap.render();
        const sorting = new sorting_1.Sorting(data_1.default);
        sorting.addListener();
        const appCards = new Cards_1.Cards(data_1.default);
        appCards.renderToys();
    }
}
exports.ToyPage = ToyPage;


/***/ }),

/***/ 8613:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YearWrap = void 0;
class YearWrap {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        // console.log(this.node);
        const year0fStatic = document.createElement('p');
        year0fStatic.setAttribute('class', 'year-static');
        year0fStatic.textContent = 'Год приобретения';
        const yearSet = document.createElement('div');
        yearSet.setAttribute('class', 'year-set');
        yearSet.setAttribute('id', 'yearslider');
        const yearSetMinMax = document.createElement('div');
        yearSetMinMax.setAttribute('class', 'year-set-min-max');
        const yearSetMin = document.createElement('div');
        yearSetMin.setAttribute('class', 'year-set-min');
        yearSetMin.setAttribute('id', 'yearslider-snap-value-lower');
        const yearSetMax = document.createElement('div');
        yearSetMax.setAttribute('class', 'year-set-max');
        yearSetMax.setAttribute('id', 'yearslider-snap-value-upper');
        yearSetMinMax.appendChild(yearSetMin);
        yearSetMinMax.appendChild(yearSetMax);
        this.node.appendChild(year0fStatic);
        this.node.appendChild(yearSet);
        this.node.appendChild(yearSetMinMax);
    }
    destroy() {
    }
}
exports.YearWrap = YearWrap;


/***/ }),

/***/ 1839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeMainPage = void 0;
const treeMainView_1 = __webpack_require__(99);
const treeSetting_1 = __webpack_require__(114);
const treeSettingsToys_1 = __webpack_require__(1763);
class TreeMainPage {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const treeSetting = document.createElement('section');
        treeSetting.setAttribute('class', 'tree-setting');
        const treeMainView = document.createElement('section');
        treeMainView.setAttribute('class', 'tree-main-view');
        const treeSettingsToys = document.createElement('section');
        treeSettingsToys.setAttribute('class', 'tree-settings-toys');
        this.node.appendChild(treeSetting);
        this.node.appendChild(treeMainView);
        this.node.appendChild(treeSettingsToys);
        this.renderInnerTreePage();
    }
    destroy() {
        this.node.innerHTML = '';
    }
    renderInnerTreePage() {
        const treeMainView = new treeMainView_1.TreeMainView('.tree-main-view');
        treeMainView.render('./assets/tree/1.png');
        const treeSetting = new treeSetting_1.TreeSetting('.tree-setting');
        treeSetting.render();
        const treeSettingsToys = new treeSettingsToys_1.TreeSettingsToys('.tree-settings-toys');
        treeSettingsToys.render();
    }
}
exports.TreeMainPage = TreeMainPage;


/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeMainView = void 0;
class TreeMainView {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render(src) {
        const tree = document.createElement('img');
        tree.setAttribute('class', 'tree');
        tree.setAttribute('src', src);
        this.node.appendChild(tree);
    }
    destroy() {
    }
}
exports.TreeMainView = TreeMainView;


/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeSetting = void 0;
class TreeSetting {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const wrapperTreeSetting = document.createElement('div');
        wrapperTreeSetting.setAttribute('class', 'wrapper-tree-setting');
        const chooseSettingsToys = document.createElement('div');
        chooseSettingsToys.setAttribute('class', 'choose-settings-toys');
        const sound = document.createElement('div');
        sound.setAttribute('class', 'sound');
        const snow = document.createElement('div');
        snow.setAttribute('class', 'snow');
        chooseSettingsToys.appendChild(sound);
        chooseSettingsToys.appendChild(snow);
        const chooseTreeWrap = document.createElement('div');
        chooseTreeWrap.setAttribute('class', 'choose-tree-wrap');
        const chooseTreeStatic = document.createElement('p');
        chooseTreeStatic.setAttribute('class', 'choose-tree-static');
        chooseTreeStatic.textContent = 'Выберите елку';
        const chooseTree = document.createElement('div');
        chooseTree.setAttribute('class', 'choose-tree');
        const tree_1 = document.createElement('div');
        tree_1.setAttribute('class', 'tree-1');
        const img_1 = document.createElement('img');
        img_1.setAttribute('src', './assets/tree/1.png');
        img_1.setAttribute('alt', '1.png');
        tree_1.appendChild(img_1);
        const tree_2 = document.createElement('div');
        tree_2.setAttribute('class', 'tree-2');
        const img_2 = document.createElement('img');
        img_2.setAttribute('src', './assets/tree/2.png');
        img_2.setAttribute('alt', '2.png');
        tree_2.appendChild(img_2);
        const tree_3 = document.createElement('div');
        tree_3.setAttribute('class', 'tree-3');
        const img_3 = document.createElement('img');
        img_3.setAttribute('src', './assets/tree/3.png');
        img_3.setAttribute('alt', '3.png');
        tree_3.appendChild(img_3);
        const tree_4 = document.createElement('div');
        tree_4.setAttribute('class', 'tree-4');
        const img_4 = document.createElement('img');
        img_4.setAttribute('src', './assets/tree/4.png');
        img_4.setAttribute('alt', '4.png');
        tree_4.appendChild(img_4);
        const tree_5 = document.createElement('div');
        tree_5.setAttribute('class', 'tree-5');
        const img_5 = document.createElement('img');
        img_5.setAttribute('src', './assets/tree/5.png');
        img_5.setAttribute('alt', '5.png');
        tree_5.appendChild(img_5);
        const tree_6 = document.createElement('div');
        tree_6.setAttribute('class', 'tree-6');
        const img_6 = document.createElement('img');
        img_6.setAttribute('src', './assets/tree/6.png');
        img_6.setAttribute('alt', '6.png');
        tree_6.appendChild(img_6);
        chooseTree.appendChild(tree_1);
        chooseTree.appendChild(tree_2);
        chooseTree.appendChild(tree_3);
        chooseTree.appendChild(tree_4);
        chooseTree.appendChild(tree_5);
        chooseTree.appendChild(tree_6);
        chooseTreeWrap.appendChild(chooseTreeStatic);
        chooseTreeWrap.appendChild(chooseTree);
        const chooseBackgroundWrap = document.createElement('div');
        chooseBackgroundWrap.setAttribute('class', 'choose-background-wrap');
        const chooseBackgroundStatic = document.createElement('p');
        chooseBackgroundStatic.setAttribute('class', 'choose-background-static');
        chooseBackgroundStatic.textContent = 'Выберите фон';
        const chooseBackground = document.createElement('div');
        chooseBackground.setAttribute('class', 'choose-background');
        const bg_1 = document.createElement('div');
        bg_1.setAttribute('class', 'bg-1');
        const img_bg_1 = document.createElement('img');
        img_bg_1.setAttribute('src', './assets/bg/1.jpg');
        img_bg_1.setAttribute('alt', 'bg/1.jpg');
        bg_1.appendChild(img_bg_1);
        const bg_2 = document.createElement('div');
        bg_2.setAttribute('class', 'bg-2');
        const img_bg_2 = document.createElement('img');
        img_bg_2.setAttribute('src', './assets/bg/2.jpg');
        img_bg_2.setAttribute('alt', 'bg/2.jpg');
        bg_2.appendChild(img_bg_2);
        const bg_3 = document.createElement('div');
        bg_3.setAttribute('class', 'bg-3');
        const img_bg_3 = document.createElement('img');
        img_bg_3.setAttribute('src', './assets/bg/3.jpg');
        img_bg_3.setAttribute('alt', 'bg/3.jpg');
        bg_3.appendChild(img_bg_3);
        const bg_4 = document.createElement('div');
        bg_4.setAttribute('class', 'bg-4');
        const img_bg_4 = document.createElement('img');
        img_bg_4.setAttribute('src', './assets/bg/4.jpg');
        img_bg_4.setAttribute('alt', 'bg/4.jpg');
        bg_4.appendChild(img_bg_4);
        const bg_5 = document.createElement('div');
        bg_5.setAttribute('class', 'bg-5');
        const img_bg_5 = document.createElement('img');
        img_bg_5.setAttribute('src', './assets/bg/5.jpg');
        img_bg_5.setAttribute('alt', 'bg/5.jpg');
        bg_5.appendChild(img_bg_5);
        const bg_6 = document.createElement('div');
        bg_6.setAttribute('class', 'bg-6');
        const img_bg_6 = document.createElement('img');
        img_bg_6.setAttribute('src', './assets/bg/6.jpg');
        img_bg_6.setAttribute('alt', 'bg/6.jpg');
        bg_6.appendChild(img_bg_6);
        const bg_7 = document.createElement('div');
        bg_7.setAttribute('class', 'bg-7');
        const img_bg_7 = document.createElement('img');
        img_bg_7.setAttribute('src', './assets/bg/7.jpg');
        img_bg_7.setAttribute('alt', 'bg/7.jpg');
        bg_7.appendChild(img_bg_7);
        const bg_8 = document.createElement('div');
        bg_8.setAttribute('class', 'bg-8');
        const img_bg_8 = document.createElement('img');
        img_bg_8.setAttribute('src', './assets/bg/8.jpg');
        img_bg_8.setAttribute('alt', 'bg/8.jpg');
        bg_8.appendChild(img_bg_8);
        chooseBackground.appendChild(bg_1);
        chooseBackground.appendChild(bg_2);
        chooseBackground.appendChild(bg_3);
        chooseBackground.appendChild(bg_4);
        chooseBackground.appendChild(bg_5);
        chooseBackground.appendChild(bg_6);
        chooseBackground.appendChild(bg_7);
        chooseBackground.appendChild(bg_8);
        chooseBackgroundWrap.appendChild(chooseBackgroundStatic);
        chooseBackgroundWrap.appendChild(chooseBackground);
        const chooseFlashLightsWrap = document.createElement('div');
        chooseFlashLightsWrap.setAttribute('class', 'choose-flash-lights-wrap');
        const chooseFlashLightsStatic = document.createElement('p');
        chooseFlashLightsStatic.setAttribute('class', 'choose-flash-lights-static');
        chooseFlashLightsStatic.textContent = 'Выберите гирлянду';
        const chooseFlashLights = document.createElement('div');
        chooseFlashLights.setAttribute('class', 'choose-flash-lights');
        const flashLights_1 = document.createElement('div');
        flashLights_1.setAttribute('class', 'flash-lights-1');
        const flashLights_2 = document.createElement('div');
        flashLights_2.setAttribute('class', 'flash-lights-2');
        const flashLights_3 = document.createElement('div');
        flashLights_3.setAttribute('class', 'flash-lights-3');
        chooseFlashLights.appendChild(flashLights_1);
        chooseFlashLights.appendChild(flashLights_2);
        chooseFlashLights.appendChild(flashLights_3);
        chooseFlashLightsWrap.appendChild(chooseFlashLightsStatic);
        chooseFlashLightsWrap.appendChild(chooseFlashLights);
        const treeSettingButton = document.createElement('div');
        treeSettingButton.setAttribute('class', 'tree-setting-button');
        const settingButtonWrap = document.createElement('div');
        settingButtonWrap.setAttribute('class', 'setting-button-wrap');
        const saveWrap = document.createElement('div');
        saveWrap.setAttribute('class', 'save-wrap');
        const input_1 = document.createElement('input');
        input_1.setAttribute('type', 'button');
        input_1.setAttribute('value', 'Сохранить');
        saveWrap.appendChild(input_1);
        const resetSettingsWrap = document.createElement('div');
        resetSettingsWrap.setAttribute('class', 'reset-settings-wrap');
        const input_2 = document.createElement('input');
        input_2.setAttribute('type', 'button');
        input_2.setAttribute('value', 'Сбросить настройки');
        resetSettingsWrap.appendChild(input_2);
        settingButtonWrap.appendChild(saveWrap);
        settingButtonWrap.appendChild(resetSettingsWrap);
        treeSettingButton.appendChild(settingButtonWrap);
        wrapperTreeSetting.appendChild(chooseSettingsToys);
        wrapperTreeSetting.appendChild(chooseTreeWrap);
        wrapperTreeSetting.appendChild(chooseBackgroundWrap);
        wrapperTreeSetting.appendChild(chooseFlashLightsWrap);
        wrapperTreeSetting.appendChild(treeSettingButton);
        this.node.appendChild(wrapperTreeSetting);
    }
    destroy() {
    }
}
exports.TreeSetting = TreeSetting;


/***/ }),

/***/ 1763:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeSettingsToys = void 0;
const data_1 = __importDefault(__webpack_require__(2471));
class TreeSettingsToys {
    constructor(str) {
        this.node = document.querySelector(str);
    }
    render() {
        const wrapperTreeSettingsToys = document.createElement('div');
        wrapperTreeSettingsToys.setAttribute('class', 'wrapper-tree-settings-toys');
        const toysCollection = document.createElement('div');
        toysCollection.setAttribute('class', 'toys-collection');
        const toysCollectionStatic = document.createElement('p');
        toysCollectionStatic.setAttribute('class', 'toys-collection-static');
        toysCollectionStatic.textContent = 'Игрушки';
        const toysCollectionWrap = document.createElement('div');
        toysCollectionWrap.setAttribute('class', 'toys-collection-wrap');
        toysCollection.appendChild(toysCollectionStatic);
        toysCollection.appendChild(toysCollectionWrap);
        const savedCollection = document.createElement('div');
        savedCollection.setAttribute('class', 'saved-collection');
        const savedCollectionStatic = document.createElement('p');
        savedCollectionStatic.setAttribute('class', 'saved-collection-static');
        savedCollectionStatic.textContent = 'Вы нарядили';
        const savedCollectionWrap = document.createElement('div');
        savedCollectionWrap.setAttribute('class', 'saved-collection-wrap');
        const savedTree = document.createElement('div');
        savedTree.setAttribute('class', 'saved-tree');
        const tr_img_1 = document.createElement('img');
        tr_img_1.setAttribute('class', 'tr');
        tr_img_1.setAttribute('src', './assets/tree/6.png');
        tr_img_1.setAttribute('alt', 'tree/6.png');
        savedTree.appendChild(tr_img_1);
        savedCollectionWrap.appendChild(savedTree);
        savedCollection.appendChild(savedCollectionStatic);
        savedCollection.appendChild(savedCollectionWrap);
        wrapperTreeSettingsToys.appendChild(toysCollection);
        wrapperTreeSettingsToys.appendChild(savedCollection);
        this.node.appendChild(wrapperTreeSettingsToys);
        this.renderFavoriteToys(data_1.default);
        this.renderFavoriteToys(data_1.default);
    }
    destroy() {
    }
    renderFavoriteToys(data) {
        // const toysCollection: interCard[] = [];
        const toysCollectionWrap = document.querySelector('.toys-collection-wrap');
        console.log(toysCollectionWrap);
        data.forEach(el => {
            if (el.favorite) {
                const favoriteToy = document.createElement('div');
                favoriteToy.setAttribute('class', 'favorite-toy');
                const img = document.createElement('img');
                img.setAttribute('class', 'ft');
                img.setAttribute('src', `./assets/toys/${el.num}.png`);
                img.setAttribute('alt', `toys/${el.num}.png`);
                const span = document.createElement('span');
                span.setAttribute('class', 'count');
                span.textContent = `${el.count}`;
                favoriteToy.appendChild(img);
                favoriteToy.appendChild(span);
                toysCollectionWrap.appendChild(favoriteToy);
            }
        });
    }
}
exports.TreeSettingsToys = TreeSettingsToys;


/***/ }),

/***/ 2471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = [
  {
    num: '1',
    name: 'Большой шар с рисунком',
    count: '2',
    year: '1960',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '2',
    name: 'Зелёный шар с цветами',
    count: '5',
    year: '2000',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '3',
    name: 'Красный матовый шар',
    count: '3',
    year: '1990',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '4',
    name: 'Сосулька красная',
    count: '2',
    year: '1980',
    shape: 'фигурка',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '5',
    name: 'Красный виноград',
    count: '4',
    year: '1980',
    shape: 'фигурка',
    color: 'красный',
    size: 'средний',
    favorite: true,
  },
  {
    num: '6',
    name: 'Красный шар с рисунком',
    count: '6',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '7',
    name: 'Молочно-белый шар',
    count: '12',
    year: '1960',
    shape: 'шар',
    color: 'белый',
    size: 'средний',
    favorite: true,
  },
  {
    num: '8',
    name: 'Красный шар',
    count: '10',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '9',
    name: 'Колокольчик старинный',
    count: '2',
    year: '1950',
    shape: 'колокольчик',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '10',
    name: 'Белый шар ретро',
    count: '7',
    year: '1960',
    shape: 'шар',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '11',
    name: 'Шишка еловая белая',
    count: '11',
    year: '1960',
    shape: 'шишка',
    color: 'белый',
    size: 'малый',
    favorite: false,
  },
  {
    num: '12',
    name: 'Белый шар с цветами',
    count: '5',
    year: '1980',
    shape: 'шар',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '13',
    name: 'Шар расписной Река',
    count: '3',
    year: '1970',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: true,
  },
  {
    num: '14',
    name: 'Шар расписной Деревня',
    count: '4',
    year: '1970',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: true,
  },
  {
    num: '15',
    name: 'Колокольчик расписной',
    count: '3',
    year: '1970',
    shape: 'колокольчик',
    color: 'синий',
    size: 'средний',
    favorite: false,
  },
  {
    num: '16',
    name: 'Шишка расписная Пейзаж',
    count: '3',
    year: '1970',
    shape: 'шишка',
    color: 'синий',
    size: 'средний',
    favorite: true,
  },
  {
    num: '17',
    name: 'Шишка расписная',
    count: '7',
    year: '1970',
    shape: 'шишка',
    color: 'красный',
    size: 'средний',
    favorite: false,
  },
  {
    num: '18',
    name: 'Желтый шар с бантом',
    count: '2',
    year: '2010',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '19',
    name: 'Желтый шар с паетками',
    count: '12',
    year: '1980',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '20',
    name: 'Красный шар с бантом',
    count: '8',
    year: '1950',
    shape: 'шар',
    color: 'красный',
    size: 'средний',
    favorite: true,
  },
  {
    num: '21',
    name: 'Красный шар с звёздами',
    count: '4',
    year: '1970',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: true,
  },
  {
    num: '22',
    name: 'Шишка еловая золотая',
    count: '11',
    year: '1990',
    shape: 'шишка',
    color: 'желтый',
    size: 'малый',
    favorite: false,
  },
  {
    num: '23',
    name: 'Колокольчик старинный',
    count: '9',
    year: '1950',
    shape: 'колокольчик',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '24',
    name: 'Снежинка изящная',
    count: '1',
    year: '1940',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '25',
    name: 'Розовый шар с блёстками',
    count: '12',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '26',
    name: 'Рубиново-золотой шар',
    count: '8',
    year: '1960',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '27',
    name: 'Красный шар с узором',
    count: '4',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '28',
    name: 'Бордовый шар с узором',
    count: '10',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '29',
    name: 'Старинный шар с цветами',
    count: '5',
    year: '1950',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: true,
  },
  {
    num: '30',
    name: 'Старинный шар с узором',
    count: '8',
    year: '1950',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: true,
  },
  {
    num: '31',
    name: 'Красный шар с блёстками',
    count: '8',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '32',
    name: 'Синий шар Вселенная',
    count: '11',
    year: '1970',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: false,
  },
  {
    num: '33',
    name: 'Синий шар со снежинкой',
    count: '6',
    year: '2010',
    shape: 'шар',
    color: 'синий',
    size: 'средний',
    favorite: false,
  },
  {
    num: '34',
    name: 'Зелёный  шар с узором',
    count: '8',
    year: '2010',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '35',
    name: 'Фигурка Лис в шарфе',
    count: '8',
    year: '1950',
    shape: 'фигурка',
    color: 'желтый',
    size: 'средний',
    favorite: true,
  },
  {
    num: '36',
    name: 'Сиреневый шар Метель',
    count: '1',
    year: '2000',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: false,
  },
  {
    num: '37',
    name: 'Зелёный  шар Метель',
    count: '6',
    year: '2000',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '38',
    name: 'Голубой  шар Метель',
    count: '6',
    year: '2000',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: false,
  },
  {
    num: '39',
    name: 'Красная снежинка',
    count: '6',
    year: '1990',
    shape: 'снежинка',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '40',
    name: 'Снежинка золотая',
    count: '12',
    year: '2020',
    shape: 'снежинка',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '41',
    name: 'Снежинка арктическая',
    count: '11',
    year: '2020',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '42',
    name: 'Зелёный шар',
    count: '10',
    year: '1980',
    shape: 'шар',
    color: 'зелёный',
    size: 'средний',
    favorite: false,
  },
  {
    num: '43',
    name: 'Снежинка двухцветная',
    count: '6',
    year: '1960',
    shape: 'снежинка',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '44',
    name: 'Фигурка Ангела',
    count: '11',
    year: '1940',
    shape: 'фигурка',
    color: 'красный',
    size: 'средний',
    favorite: true,
  },
  {
    num: '45',
    name: 'Снежинка новогодняя',
    count: '1',
    year: '1980',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '46',
    name: 'Фигурка Мухомор',
    count: '10',
    year: '1950',
    shape: 'фигурка',
    color: 'красный',
    size: 'малый',
    favorite: false,
  },
  {
    num: '47',
    name: 'Фигурка Колодец',
    count: '6',
    year: '1950',
    shape: 'фигурка',
    color: 'красный',
    size: 'малый',
    favorite: false,
  },
  {
    num: '48',
    name: 'Желтый шар с бантом',
    count: '6',
    year: '1960',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '49',
    name: 'Снежинка с бирюзой',
    count: '4',
    year: '1980',
    shape: 'снежинка',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '50',
    name: 'Колокольчик большой',
    count: '3',
    year: '2020',
    shape: 'колокольчик',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '51',
    name: 'Шишка с изморозью',
    count: '12',
    year: '1970',
    shape: 'шишка',
    color: 'красный',
    size: 'малый',
    favorite: false,
  },
  {
    num: '52',
    name: 'Красный шар с надписью',
    count: '12',
    year: '1990',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: true,
  },
  {
    num: '53',
    name: 'Снежинка серебристая',
    count: '6',
    year: '2020',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '54',
    name: 'Зелёный шар с рисунком',
    count: '6',
    year: '2010',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '55',
    name: 'Пряничный домик',
    count: '1',
    year: '1940',
    shape: 'фигурка',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '56',
    name: 'Пряничный теремок',
    count: '1',
    year: '1940',
    shape: 'фигурка',
    color: 'желтый',
    size: 'малый',
    favorite: false,
  },
  {
    num: '57',
    name: 'Пряничная избушка',
    count: '1',
    year: '1940',
    shape: 'фигурка',
    color: 'желтый',
    size: 'средний',
    favorite: false,
  },
  {
    num: '58',
    name: 'Фигурка белого медведя',
    count: '2',
    year: '1980',
    shape: 'фигурка',
    color: 'белый',
    size: 'средний',
    favorite: false,
  },
  {
    num: '59',
    name: 'Желтый шар с надписью',
    count: '10',
    year: '1990',
    shape: 'шар',
    color: 'желтый',
    size: 'средний',
    favorite: false,
  },
  {
    num: '60',
    name: 'Фигурка Голубь',
    count: '12',
    year: '1940',
    shape: 'фигурка',
    color: 'белый',
    size: 'средний',
    favorite: true,
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ 5281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/backg.jpg";

/***/ }),

/***/ 5332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1.jpg";

/***/ }),

/***/ 9912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Neucha-Regular.ttf";

/***/ }),

/***/ 1280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Garland_1.svg";

/***/ }),

/***/ 3103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Garland_2.svg";

/***/ }),

/***/ 2751:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Garland_3.svg";

/***/ }),

/***/ 2861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/audio.svg";

/***/ }),

/***/ 6594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ball.svg";

/***/ }),

/***/ 7796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bell-2.svg";

/***/ }),

/***/ 6974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blue-sqr.svg";

/***/ }),

/***/ 5724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/checkbox-checked.svg";

/***/ }),

/***/ 7002:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/checkbox.svg";

/***/ }),

/***/ 4592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cone.svg";

/***/ }),

/***/ 1743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/green-sqr.svg";

/***/ }),

/***/ 7780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mute.svg";

/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/red-sqr.svg";

/***/ }),

/***/ 2323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rs_school_logo.svg";

/***/ }),

/***/ 1868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/search.svg";

/***/ }),

/***/ 9486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snow.svg";

/***/ }),

/***/ 5922:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snowflake.svg";

/***/ }),

/***/ 2523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/toy.svg";

/***/ }),

/***/ 4353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tree.svg";

/***/ }),

/***/ 971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/white-sqr.svg";

/***/ }),

/***/ 3341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/yellow-sqr.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = {};
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const toyMainPage_1 = __webpack_require__(8641);
const treeMainPage_1 = __webpack_require__(1839);
const startPage_1 = __webpack_require__(2060);
__webpack_require__(5937);
__webpack_require__(204);
__webpack_require__(3690);
__webpack_require__(3085);
__webpack_require__(3253);
const toyPage = new toyMainPage_1.ToyPage('main');
const treeMainPage = new treeMainPage_1.TreeMainPage('main');
const startPage = new startPage_1.StartPage('main');
startPage.render();
const toysButton = document.querySelector('.toys');
toysButton.addEventListener('click', () => {
    treeMainPage.destroy();
    startPage.destroy();
    const toyPage = new toyMainPage_1.ToyPage('main');
    toyPage.render();
});
const treeMakeUpButton = document.querySelector('.tree-make-up');
treeMakeUpButton.addEventListener('click', () => {
    toyPage.destroy();
    startPage.destroy();
    const treeMainPage = new treeMainPage_1.TreeMainPage('main');
    treeMainPage.render();
});
const startPageButton = document.querySelector('.tree');
startPageButton.addEventListener('click', () => {
    toyPage.destroy();
    treeMainPage.destroy();
    startPage.render();
});

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// class Ring extends HTMLElement {
//   // Can define constructor arguments if you wish.
//   constructor() {
//     // If you define a constructor, always call super() first!
//     // This is specific to CE and required by the spec.
//     super();
//     // Setup a click listener on <app-drawer> itself.
//     const ring = document.createElement('div')!;
//     ring.setAttribute('class', 'ring');
//     this.innerText = 'hello';
//     const style = document.createElement('style');
//     console.log(style);
//     console.log(style.isConnected);
//     style.innerHTML = `
//     <style>
//       .ring {
//         background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);
//         width: 36px;
//         height: 36px;    
//       }
//     </style>
//     `;
//     // ring.appendChild(ring);
//     ring.appendChild(style);
//   }
// }
// customElements.define('ring-for-favorite', Ring);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJDLG1DQUFtQyxjQUFjLGdCQUFnQixHQUFHLFNBQVMsZ0hBQWdILEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0s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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsZ0JBQWdCO0FBQ2hHO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1ELGFBQWE7O0FBRWhFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvckU4RTtBQUMvRSxZQUFrRjs7QUFFbEY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDZGQUFHLENBQUMsdUZBQU87Ozs7QUFJeEIsaUVBQWUscUdBQWMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQy9GLFlBQTJJOztBQUUzSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxvSUFBTzs7OztBQUl4QixpRUFBZSxrSkFBYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUNac0Q7QUFDekYsWUFBaUk7O0FBRWpJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHNJQUFPOzs7O0FBSXhCLGlFQUFlLG9KQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ1pzRDtBQUN6RixZQUErSDs7QUFFL0g7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0lBQU87Ozs7QUFJeEIsaUVBQWUsa0pBQWMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDWnNEO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxxSUFBTzs7OztBQUl4QixpRUFBZSxtSkFBYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUNac0Q7QUFDekYsWUFBOEg7O0FBRTlIOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1JQUFPOzs7O0FBSXhCLGlFQUFlLGlKQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ1pzRDtBQUN6RixZQUErSDs7QUFFL0g7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0lBQU87Ozs7QUFJeEIsaUVBQWUsa0pBQWMsTUFBTTs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsY0FBYzs7QUFFeEc7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1UWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCLHNCQUFzQixtQkFBTyxDQUFDLElBQXFCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHVCQUF1QjtBQUM5RSwwREFBMEQsdUJBQXVCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7QUN0Q0o7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0EsbUJBQU8sQ0FBQyxHQUFhO0FBQ3JCLGVBQWUsbUJBQU8sQ0FBQyxJQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7Ozs7Ozs7OztBQzFCQTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BELDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7QUFDQSx5REFBeUQsV0FBVztBQUNwRTtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0EsNERBQTRELFdBQVc7QUFDdkU7QUFDQSwyREFBMkQsV0FBVztBQUN0RTtBQUNBLDJEQUEyRCxVQUFVO0FBQ3JFO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7OztBQzlHQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFpQjs7Ozs7Ozs7O0FDdENKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7Ozs7Ozs7O0FDNUJkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7OztBQ3hCUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7QUNyRUg7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7O0FDakNKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7O0FDL0JKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7QUMzREg7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QscUNBQXFDLG1CQUFPLENBQUMsSUFBWTtBQUN6RCxtQkFBTyxDQUFDLElBQWdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRSx3REFBd0QsaUJBQWlCO0FBQ3pFLHlEQUF5RCxpQkFBaUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7Ozs7Ozs7QUN6Q2E7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7QUNqREg7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlO0FBQ2YsK0JBQStCLG1CQUFPLENBQUMsSUFBWTtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyxJQUFTO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLElBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0VBQWdFLFlBQVk7QUFDNUU7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRCwwREFBMEQsS0FBSztBQUMvRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0VBQWdFLFlBQVk7QUFDNUU7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRCx1REFBdUQsS0FBSztBQUM1RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUVBQW1FLFNBQVM7QUFDNUU7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLEtBQUs7QUFDOUU7QUFDQTtBQUNBLDRFQUE0RSxLQUFLO0FBQ2pGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxLQUFLO0FBQzdFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsU0FBUztBQUN4RTtBQUNBO0FBQ0Esd0VBQXdFLEtBQUs7QUFDN0U7QUFDQTtBQUNBLHFFQUFxRSxLQUFLO0FBQzFFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7OztBQzllRjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixnQkFBZ0IsbUJBQU8sQ0FBQyxJQUFTO0FBQ2pDLDhCQUE4QixtQkFBTyxDQUFDLEdBQXVCO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLElBQVk7QUFDdkMsbUJBQW1CLG1CQUFPLENBQUMsSUFBWTtBQUN2QyxvQkFBb0IsbUJBQU8sQ0FBQyxJQUFhO0FBQ3pDLG1CQUFtQixtQkFBTyxDQUFDLElBQVk7QUFDdkMsb0JBQW9CLG1CQUFPLENBQUMsSUFBYTtBQUN6QyxtQkFBbUIsbUJBQU8sQ0FBQyxJQUFZO0FBQ3ZDLHVCQUF1QixtQkFBTyxDQUFDLElBQWdCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLEdBQWE7QUFDekMsa0JBQWtCLG1CQUFPLENBQUMsR0FBVztBQUNyQywrQkFBK0IsbUJBQU8sQ0FBQyxJQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7QUN6RkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7Ozs7Ozs7OztBQ2hDSDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsdUJBQXVCLG1CQUFPLENBQUMsRUFBZ0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsR0FBZTtBQUM3QywyQkFBMkIsbUJBQU8sQ0FBQyxJQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7Ozs7O0FDbENQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7Ozs7O0FDaEJQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7O0FDckxOO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCLCtCQUErQixtQkFBTyxDQUFDLElBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELE9BQU87QUFDaEUsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7QUN0RXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNsQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7O0FDZmE7QUFDYiw2QkFBNkMsRUFBRSxhQUFhLENBQUM7QUFDN0Qsc0JBQXNCLG1CQUFPLENBQUMsSUFBK0I7QUFDN0QsdUJBQXVCLG1CQUFPLENBQUMsSUFBZ0M7QUFDL0Qsb0JBQW9CLG1CQUFPLENBQUMsSUFBOEI7QUFDMUQsbUJBQU8sQ0FBQyxJQUFhO0FBQ3JCLG1CQUFPLENBQUMsR0FBWTtBQUNwQixtQkFBTyxDQUFDLElBQWU7QUFDdkIsbUJBQU8sQ0FBQyxJQUFhO0FBQ3JCLG1CQUFPLENBQUMsSUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUNqQ1k7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94bWFzLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9jYXJkLnNjc3MiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL251bGwuc2NzcyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL3N0YXJ0LnNjc3MiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy90b3kuc2NzcyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL3RyZWUuc2NzcyIsIndlYnBhY2s6Ly94bWFzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly94bWFzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8veG1hcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veG1hcy8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5qcyIsIndlYnBhY2s6Ly94bWFzLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcz9jM2Q1Iiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL2NhcmQuc2Nzcz9kYmNkIiwid2VicGFjazovL3htYXMvLi9zcmMvZ2xvYmFsLnNjc3M/MmMyNCIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL251bGwuc2Nzcz83ZTExIiwid2VicGFjazovL3htYXMvLi9zcmMvc3RhcnQuc2Nzcz82YjVjIiwid2VicGFjazovL3htYXMvLi9zcmMvdG95LnNjc3M/OWQ3NiIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL3RyZWUuc2Nzcz82OTJjIiwid2VicGFjazovL3htYXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL3N0YXJ0L3N0YXJ0UGFnZS50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9DYXJkcy50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9jYXJkLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL2NvbG9yV3JhcC50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9lZmZlY3RzQW5kU2VhY2hXcmFwLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL2Zhdm9yaXRlV3JhcC50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9mb3JtV3JhcC50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9yZXNldFdyYXAudHMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL3RveXMvc2V0MGZXcmFwLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL3NpemVXcmFwLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL3NsaWRlci50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9zb3J0V3JhcC50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9zb3J0aW5nLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL3RveU1haW5QYWdlLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90b3lzL3llYXJXcmFwLnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvY29tcG9uZW50cy90cmVlL3RyZWVNYWluUGFnZS50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdHJlZS90cmVlTWFpblZpZXcudHMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL3RyZWUvdHJlZVNldHRpbmcudHMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL3RyZWUvdHJlZVNldHRpbmdzVG95cy50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8veG1hcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94bWFzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3htYXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3htYXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94bWFzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veG1hcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3htYXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvdG95cy9teUlubmVyRm9ySGVhZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcXG4gKi9cXG4ubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICByaWdodDogLTE3cHg7XFxuICB0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICByaWdodDogLTZweDtcXG4gIGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgbGVmdDogLTE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogU3R5bGluZztcXG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcXG4gKi9cXG4ubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XFxufVxcbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XFxuICovXFxuLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI0I4QjhCODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi8qIEJhc2U7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLFxcbi5ub1VpLXBpcHMgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4vKiBWYWx1ZXM7XFxuICpcXG4gKi9cXG4ubm9VaS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubm9VaS12YWx1ZS1zdWIge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNDQ0M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi8qIEhvcml6b250YWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4ubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFO0FBQ0Y7O0VBRUUsMkJBQTJCO0VBQzNCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFO0FBQ0Y7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFO0FBQ0Y7RUFDRSxPQUFPO0VB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Q1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcXG4gKi9cXG4ubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICByaWdodDogLTE3cHg7XFxuICB0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICByaWdodDogLTZweDtcXG4gIGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgbGVmdDogLTE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogU3R5bGluZztcXG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcXG4gKi9cXG4ubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XFxufVxcbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XFxuICovXFxuLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI0I4QjhCODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi8qIEJhc2U7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLFxcbi5ub1VpLXBpcHMgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4vKiBWYWx1ZXM7XFxuICpcXG4gKi9cXG4ubm9VaS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubm9VaS12YWx1ZS1zdWIge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNDQ0M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi8qIEhvcml6b250YWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4ubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b3lDYXJke21hcmdpbjoyNXB4O3BhZGRpbmc6MTBweDt3aWR0aDoyMjJweDtoZWlnaHQ6MzQycHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoNHB4KTtib3JkZXItcmFkaXVzOjEwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm5hbWVUb3lfX25hbWV7Zm9udC1mYW1pbHk6TmV1Y2hhO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoyMHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6I2ZmZn0ubmFtZVRveV9fcGlje21hcmdpbjoyMHB4IGF1dG8gMTBweDt3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHh9LmNvdW50VG95X19jb3VudC1zdGF0aWMsLnllYXJUb3lfX3llYXItc3RhdGljLC5zaGFwZVRveV9fc2hhcGUtc3RhdGljLC5jb2xvclRveV9fY29sb3Itc3RhdGljLC5zaXplVG95X19zaXplLXN0YXRpYywuZmF2b3JpdGVUb3lfX2Zhdm9yaXRlLXN0YXRpY3tmb250LWZhbWlseTpTdGVwcGU7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjojZmZmfS7QoWhvc2Vue2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgyNTUsIDIzNSwgMTc5LCAwLjUpIDEwMCUpfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RveXMvY2FyZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQUEsV0FDSSxDQUFBLFlBQ0EsQ0FBQSxXQUNBLENBQUEsWUFDQSxDQUFBLG9IQUNBLENBQUEseUJBQ0EsQ0FBQSxrQkFDQSxDQUFBLHdCQUNBLENBQUEsWUFDQSxDQUFBLHFCQUNBLENBQUEsNkJBQ0EsQ0FBQSxlQUlKLGtCQUNJLENBQUEsaUJBQ0EsQ0FBQSxrQkFDQSxDQUFBLGNBQ0EsQ0FBQSxnQkFDQSxDQUFBLFlBQ0EsQ0FBQSxrQkFDQSxDQUFBLFVBQ0EsQ0FBQSxjQUdKLHFCQUNJLENBQUEsV0FFQSxDQUFBLFlBQ0EsQ0FBQSxrSkFHSixrQkFNSSxDQUFBLGlCQUNBLENBQUEsa0JBQ0EsQ0FBQSxjQUNBLENBQUEsZ0JBQ0EsQ0FBQSxZQUNBLENBQUEsa0JBQ0EsQ0FBQSxVQUNBLENBQUEsUUFFSixvSEFDSVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG95Q2FyZCB7XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDIyMnB4O1xcbiAgICBoZWlnaHQ6IDM0MnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMyNEM1REIgMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8vIC5uYW1lVG95e1xcbi5uYW1lVG95X19uYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IE5ldWNoYTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLm5hbWVUb3lfX3BpYyB7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XFxuICAgIC8vIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uY291bnRUb3lfX2NvdW50LXN0YXRpYyxcXG4ueWVhclRveV9feWVhci1zdGF0aWMsXFxuLnNoYXBlVG95X19zaGFwZS1zdGF0aWMsXFxuLmNvbG9yVG95X19jb2xvci1zdGF0aWMsXFxuLnNpemVUb3lfX3NpemUtc3RhdGljLFxcbi5mYXZvcml0ZVRveV9fZmF2b3JpdGUtc3RhdGljIHtcXG4gICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuLtChaG9zZW57XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYigyNTUgMjM1IDE3OSAvIDUwJSkgMTAwJSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL2ZvbnRzL05ldWNoYS1SZWd1bGFyLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvdHJlZS5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3JzX3NjaG9vbF9sb2dvLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZXtmb250LWZhbWlseTpcXFwiTmV1Y2hhXFxcIjtzcmM6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbH1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZDojMTkyZjJkfWhlYWRlciBzZWN0aW9uIC50b3lzLGhlYWRlciBzZWN0aW9uIC50cmVlLW1ha2UtdXB7aGVpZ2h0OjIycHg7Zm9udC1mYW1pbHk6XFxcIk5ldWNoYVxcXCI7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyMHB4O2xpbmUtaGVpZ2h0OjIycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiNmZmZ9aGVhZGVye21hcmdpbjowIGF1dG87d2lkdGg6MTkyMHB4O2hlaWdodDo3NXB4fWhlYWRlciBzZWN0aW9ue21hcmdpbjoxNXB4O2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO3dpZHRoOjUwMHB4O2FsaWduLWl0ZW1zOmNlbnRlcn1oZWFkZXIgc2VjdGlvbiAudHJlZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7Y3Vyc29yOnBvaW50ZXJ9aGVhZGVyIHNlY3Rpb24gLnRveXMsaGVhZGVyIHNlY3Rpb24gLnRyZWUtbWFrZS11cHtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTc4cHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4fWZvb3RlcnttYXJnaW46MCBhdXRvO21hcmdpbi10b3A6YXV0bzt3aWR0aDoxOTIwcHg7aGVpZ2h0OjEwMHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH1mb290ZXIgLnJzcy1sb2dve2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTt3aWR0aDoyMjBweDtoZWlnaHQ6ODJweH1mb290ZXIgLnllYXJ7Y29sb3I6I2ZmZn0uZGV2ZWxvcGVyIGF7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZX0uRXhwdG95Q2FyZHtkaXNwbGF5Om5vbmV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQ0ksb0JBQUEsQ0FDQSx5REFBQSxDQUNBLGtCQUFBLENBQ0EsaUJBQUEsQ0FNSixLQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBSUosa0RBQ0ksV0FBQSxDQUNBLG9CQUFBLENBQ0EsaUJBQUEsQ0FDQSxrQkFBQSxDQUNBLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLHdCQUFBLENBQ0EsVUFBQSxDQXNCSixPQUNJLGFBQUEsQ0FDQSxZQUFBLENBQ0EsV0FBQSxDQUNBLGVBQ0ksV0FBQSxDQUNBLFlBQUEsQ0FDQSxjQUFBLENBQ0EsNEJBQUEsQ0FDQSxXQUFBLENBQ0Esa0JBQUEsQ0FDQSxxQkFDSSx3RUFBQSxDQUNBLFVBQUEsQ0FDQSxXQUFBLENBQ0EsY0FBQSxDQUVKLGtEQUdJLGNBQUEsQ0FDQSxZQUFBLENBQ0Esc0JBQUEsQ0FDQSxrQkFBQSxDQUNBLFdBQUEsQ0FDQyxXQUFBLENBQ0QsZ0hBQUEsQ0FDQSwwQkFBQSxDQUNDLGtCQUFBLENBQ0Qsd0JBQUEsQ0FLWixPQUNJLGFBQUEsQ0FDQSxlQUFBLENBQ0EsWUFBQSxDQUVBLFlBQUEsQ0FDQSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSw0QkFBQSxDQUNBLGlCQUNJLGtEQUFBLENBQ0EsV0FBQSxDQUNBLFdBQUEsQ0FFSixhQUNJLFVBQUEsQ0FHUixhQUNJLFVBQUEsQ0FDQSxvQkFBQSxDQUdKLFlBQ0ksWUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvTmV1Y2hhLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4kY29sOnJnYigyNTUsXFxuMCxcXG4wKTtcXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogIzE5MkYyRDtcXG59XFxuXFxuXFxuJXRleHQtc2hhcmVkIHtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBmb250LWZhbWlseTogJ05ldWNoYSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbiVzZWNvbmRhcnktdGV4dC1zaGFyZWQge1xcbiAgICBmb250LWZhbWlseTogU3RlcHBlO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbiV0ZXh0LWxhcmdlLW1pZGRsZS1saXR0bGUge1xcbiAgICBmb250LWZhbWlseTogU3RlcHBlO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcbmhlYWRlcntcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiAxOTIwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgc2VjdGlvbntcXG4gICAgICAgIG1hcmdpbjogMTVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAudHJlZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy90cmVlLnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB3aWR0aDogNDJweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRveXMsXFxuICAgICAgICAudHJlZS1tYWtlLXVwe1xcbiAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDE3OHB4O1xcbiAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG59XFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHdpZHRoOiAxOTIwcHg7XFxuICAgIC8vIGJvcmRlcjogcmViZWNjYXB1cnBsZSAxcHggc29saWQ7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAucnNzLWxvZ28ge1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvcnNfc2Nob29sX2xvZ28uc3ZnXFxcIik7XFxuICAgICAgICB3aWR0aDogMjIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDgycHg7XFxuICAgIH1cXG4gICAgLnllYXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuLmRldmVsb3BlciBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLkV4cHRveUNhcmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCo6OmJlZm9yZSwqOjphZnRlcntib3gtc2l6aW5nOmJvcmRlci1ib3h9dWxbY2xhc3NdLG9sW2NsYXNzXXtwYWRkaW5nOjB9Ym9keSxoMSxoMixoMyxoNCxwLHVsW2NsYXNzXSxvbFtjbGFzc10sbGksZmlndXJlLGZpZ2NhcHRpb24sYmxvY2txdW90ZSxkbCxkZHttYXJnaW46MH1ib2R5e21pbi1oZWlnaHQ6MTAwdmg7c2Nyb2xsLWJlaGF2aW9yOnNtb290aDt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZVNwZWVkO2xpbmUtaGVpZ2h0OjEuNX11bFtjbGFzc10sb2xbY2xhc3Nde2xpc3Qtc3R5bGU6bm9uZX1hOm5vdChbY2xhc3NdKXt0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6YXV0b31pbWd7bWF4LXdpZHRoOjEwMCU7ZGlzcGxheTpibG9ja31hcnRpY2xlPiorKnttYXJnaW4tdG9wOjFlbX1pbnB1dCxidXR0b24sdGV4dGFyZWEsc2VsZWN0e2ZvbnQ6aW5oZXJpdH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbnVsbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLHFCQUdFLHFCQUFBLENBSUYsb0JBRUUsU0FBQSxDQUlGLDZFQWNFLFFBQUEsQ0FJRixLQUNFLGdCQUFBLENBQ0Esc0JBQUEsQ0FDQSw0QkFBQSxDQUNBLGVBQUEsQ0FJRixvQkFFRSxlQUFBLENBSUYsZUFDRSw2QkFBQSxDQUlGLElBQ0UsY0FBQSxDQUNBLGFBQUEsQ0FJRixZQUNFLGNBQUEsQ0FJRiw2QkFJRSxZQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qINCj0LrQsNC30YvQstCw0LXQvCBib3ggc2l6aW5nICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyog0KPQsdC40YDQsNC10Lwg0LLQvdGD0YLRgNC10L3QvdC40LUg0L7RgtGB0YLRg9C/0YsgKi9cXG51bFtjbGFzc10sXFxub2xbY2xhc3NdIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qINCj0LHQuNGA0LDQtdC8INCy0L3QtdGI0L3QuNC1INC+0YLRgdGC0YPQv9GLICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10sXFxubGksXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qINCS0YvRgdGC0LDQstC70Y/QtdC8INC+0YHQvdC+0LLQvdGL0LUg0L3QsNGB0YLRgNC+0LnQutC4INC/0L4t0YPQvNC+0LvRh9Cw0L3QuNGOINC00LvRjyBib2R5ICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiDQo9C00LDQu9GP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINGB0YLQuNC70LjQt9Cw0YbQuNGOINC00LvRjyDQstGB0LXRhSB1bCDQuCBpbCwg0YMg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3MqL1xcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyog0K3Qu9C10LzQtdC90YLRiyBhLCDRgyDQutC+0YLQvtGA0YvRhSDQvdC10YIg0LrQu9Cw0YHRgdCwLCDRgdCx0YDQsNGB0YvQstCw0LXQvCDQtNC+INC00LXRhNC+0LvRgtC90YvRhSDRgdGC0LjQu9C10LkgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qINCj0L/RgNC+0YnQsNC10Lwg0YDQsNCx0L7RgtGDINGBINC40LfQvtCx0YDQsNC20LXQvdC40Y/QvNC4ICovXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiDQo9C60LDQt9GL0LLQsNC10Lwg0L/QvtC90Y/RgtC90YPRjiDQv9C10YDQuNC+0LTQuNGH0L3QvtGB0YLRjCDQsiDQv9C+0YLQvtC60LUg0LTQsNC90L3Ri9GFINGDIGFydGljbGUqL1xcbmFydGljbGUgPiAqICsgKiB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi8qINCd0LDRgdC70LXQtNGD0LXQvCDRiNGA0LjRhNGC0Ysg0LTQu9GPINC40L3Qv9GD0YLQvtCyINC4INC60L3QvtC/0L7QuiAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvZm9udHMvTmV1Y2hhLVJlZ3VsYXIudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vYXNzZXRzL2JhY2tnLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNle2ZvbnQtZmFtaWx5OlxcXCJOZXVjaGFcXFwiO3NyYzp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsfWJvZHl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kOiMxOTJmMmR9bWFpbiAuc3RhcnQtYmFja2dyb3VuZCAuc3RhcnQtd3JhcHBlciAuc3RhcnQsbWFpbiAuc3RhcnQtYmFja2dyb3VuZCAuaW50ZXJmYWNlLXdyYXBwZXIgLmdyZWF0aW5ne2hlaWdodDoyMnB4O2ZvbnQtZmFtaWx5OlxcXCJOZXVjaGFcXFwiO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoyMnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjojZmZmfW1haW4gLnN0YXJ0LWJhY2tncm91bmR7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O21pbi13aWR0aDoxMDAlO21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDE0MHB4KTtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1tYWluIC5zdGFydC1iYWNrZ3JvdW5kIC5pbnRlcmZhY2Utd3JhcHBlcntjdXJzb3I6cG9pbnRlcjt3aWR0aDo1OTNweDtoZWlnaHQ6MjQ5cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMC4xNSkgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjUwcHh9bWFpbiAuc3RhcnQtYmFja2dyb3VuZCAuc3RhcnQtd3JhcHBlcntjdXJzb3I6cG9pbnRlcjt3aWR0aDozMjBweDtoZWlnaHQ6NTRweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDMxcHgpO2JvcmRlci1yYWRpdXM6MzBweDtib3JkZXI6c29saWQgIzI0YzVkYiAxcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdGFydC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQ0ksb0JBQUEsQ0FDQSx5REFBQSxDQUNBLGtCQUFBLENBQ0EsaUJBQUEsQ0FNSixLQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBR0osaUdBQ0ksV0FBQSxDQUNBLG9CQUFBLENBQ0EsaUJBQUEsQ0FDQSxrQkFBQSxDQUNBLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLHdCQUFBLENBQ0EsVUFBQSxDQXdCQSx1QkFDSSwwRUFBQSxDQUdBLGNBQUEsQ0FDQSw4QkFBQSxDQUNBLDJCQUFBLENBQ0EsWUFBQSxDQUNBLHFCQUFBLENBQ0Esc0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDBDQUNJLGNBQUEsQ0FDQSxXQUFBLENBQ0EsWUFBQSxDQUNBLDZHQUFBLENBQ0EsMEJBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBQ0EsWUFBQSxDQUNBLHNCQUFBLENBQ0Esa0JBQUEsQ0FDQSxrQkFBQSxDQUtKLHNDQUNJLGNBQUEsQ0FDQSxXQUFBLENBQ0EsV0FBQSxDQUNBLDZHQUFBLENBQ0EsMEJBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBQ0EsWUFBQSxDQUNBLHNCQUFBLENBQ0Esa0JBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL05ldWNoYS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuJGNvbDpyZ2IoMjU1LFxcbjAsXFxuMCk7XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6ICMxOTJGMkQ7XFxufVxcblxcbiV0ZXh0LXNoYXJlZCB7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4lc2Vjb25kYXJ5LXRleHQtc2hhcmVkIHtcXG4gICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ldGV4dC1sYXJnZS1taWRkbGUtbGl0dGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgLnN0YXJ0LWJhY2tncm91bmR7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2JhY2tnLmpwZ1xcXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xcbiAgICAgICAgLy8gd2lkdGg6IDE5MjBweDtcXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAuaW50ZXJmYWNlLXdyYXBwZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiA1OTNweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0OXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgICAgICAgICAgLmdyZWF0aW5nIHtcXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnN0YXJ0LXdyYXBwZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMjRDNURCIDFweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgLnN0YXJ0e1xcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvZm9udHMvTmV1Y2hhLVJlZ3VsYXIudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9tdXRlLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvc25vdy5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3gtY2hlY2tlZC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2JlbGwtMi5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2JhbGwuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9jb25lLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvdG95LnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3doaXRlLXNxci5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy95ZWxsb3ctc3FyLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3JlZC1zcXIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvYmx1ZS1zcXIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvZ3JlZW4tc3FyLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2V7Zm9udC1mYW1pbHk6XFxcIk5ldWNoYVxcXCI7c3JjOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWx9Ym9keXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQ6IzE5MmYyZH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc3RhdGljLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNldDBmLXdyYXAgLnNldDBmLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0LW1heCxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zZXQwZi13cmFwIC5zZXQwZi1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1tYXgsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jb2xvci13cmFwIC5jb2xvci1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jYXRlZ29yeS13cmFwIC5jYXRlZ29yeS1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc29ydC13cmFwIC5zb3J0LXN0YXRpY3toZWlnaHQ6MjJweDtmb250LWZhbWlseTpcXFwiTmV1Y2hhXFxcIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjIwcHg7bGluZS1oZWlnaHQ6MjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6I2ZmZn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5iZWxsLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5iYWxsLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5jb25lLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5zbm93LXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5maWd1cmluZS1zdGF0aWN7Zm9udC1mYW1pbHk6U3RlcHBlO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmZ9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcCAuZmF2b3JpdGUtc3RhdGljLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNhdGVnb3J5LXdyYXAgLmNhdGVnb3J5LXNldF9fc3RhdGlje2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmfW1haW57bWFyZ2luOjAgYXV0bzt3aWR0aDoxOTIwcHg7ZGlzcGxheTpmbGV4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXJ7bWFyZ2luLXRvcDo1MHB4O21heC13aWR0aDo0NTBweDtoZWlnaHQ6OTAwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwIC5zb3VuZHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZWZmZWN0cy1hbmQtc2VhY2gtd3JhcCAuc25vd3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZWZmZWN0cy1hbmQtc2VhY2gtd3JhcCAuc2VhcmNoLXNldHt3aWR0aDoyNTRweDtoZWlnaHQ6MzZweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDMxcHgpO2JvcmRlci1yYWRpdXM6MzBweDtib3JkZXI6c29saWQgIzI0YzVkYiAxcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjAgMXJlbX1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwIC5zZWFyY2gtc2V0IC5zZWFyY2gtdG95c3twYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDpub25lfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmVmZmVjdHMtYW5kLXNlYWNoLXdyYXAgLnNlYXJjaC1zZXQgLmxvdXBle2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zb3J0LXdyYXB7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNvcnQtd3JhcCAuc29ydC1zZXR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNvcnQtd3JhcCAuc29ydC1zZXQgLnNvcnQtc2V0LXNlbGVjdHtwYWRkaW5nOi41ZW0gMWVtO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZTthcHBlYXJhbmNlOm5vbmV9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY2F0ZWdvcnktd3JhcCAuY2F0ZWdvcnktc2V0X19zdGF0aWN7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jYXRlZ29yeS13cmFwIC5jYXRlZ29yeS1zZXRfX3NxdWFyZXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY2F0ZWdvcnktd3JhcCAuY2F0ZWdvcnktc2V0X19zdGF0aWMtY2hlY2tib3h7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNhdGVnb3J5LXdyYXAgLmNhdGVnb3J5LXNldF9fc3F1YXJlOmNoZWNrZWQrLmNhdGVnb3J5LXNldF9fc3RhdGljLWNoZWNrYm94e2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXR9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuYmVsbHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuYmFsbHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuY29uZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuc25vd3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuZmlndXJpbmV7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDt3aWR0aDo0MnB4O2hlaWdodDo0MnB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNvbG9yLXdyYXAgLmNvbG9yLXNldHt3aWR0aDoyMjVweDtoZWlnaHQ6MjRweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC53aGl0ZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC53aGl0ZTpob3ZlcntjdXJzb3I6cG9pbnRlcn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jb2xvci13cmFwIC5jb2xvci1zZXQgLnllbGxvd3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC5yZWR7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNvbG9yLXdyYXAgLmNvbG9yLXNldCAuYmx1ZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC5ncmVlbntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXN0YXRpY3t3aWR0aDoxMDAlO2hlaWdodDoyMnB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnllYXItd3JhcCAueWVhci1zZXR7bWFyZ2luOjE1cHggYXV0bzttYXgtd2lkdGg6MzUwcHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1tYXh7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjkwcHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnllYXItd3JhcCAueWVhci1zZXQtbWluLW1heHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc3RhdGlje3dpZHRoOjEwMCU7aGVpZ2h0OjIycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0e21hcmdpbjoxNXB4IGF1dG87bWF4LXdpZHRoOjM1MHB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNldDBmLXdyYXAgLnNldDBmLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0LW1heHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6OTBweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDMxcHgpO2JvcmRlci1yYWRpdXM6MzBweDtib3JkZXI6c29saWQgIzI0YzVkYiAxcHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0LW1pbi1tYXh7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcHtwYWRkaW5nLWxlZnQ6MzBweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5sYXJnZS1zZXRfX3N0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5taWRkbGUtc2V0X19zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2l6ZS13cmFwIC5zaXplLXNldCAubGl0dGxlLXNldF9fc3RhdGlje2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO21hcmdpbi1yaWdodDozcmVtfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLmxhcmdlLXNldF9fc3F1YXJlLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLm1pZGRsZS1zZXRfX3NxdWFyZSxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5saXR0bGUtc2V0X19zcXVhcmV7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLmxhcmdlLXNldF9fc3RhdGljLWNoZWNrYm94LG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLm1pZGRsZS1zZXRfX3N0YXRpYy1jaGVja2JveCxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5saXR0bGUtc2V0X19zdGF0aWMtY2hlY2tib3h7bWFyZ2luLWxlZnQ6LTMwcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O2JvcmRlci1yYWRpdXM6NXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLmxhcmdlLXNldF9fc3F1YXJlOmNoZWNrZWQrLmxhcmdlLXNldF9fc3RhdGljLWNoZWNrYm94LG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLm1pZGRsZS1zZXRfX3NxdWFyZTpjaGVja2VkKy5taWRkbGUtc2V0X19zdGF0aWMtY2hlY2tib3gsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2l6ZS13cmFwIC5zaXplLXNldCAubGl0dGxlLXNldF9fc3F1YXJlOmNoZWNrZWQrLmxpdHRsZS1zZXRfX3N0YXRpYy1jaGVja2JveHttYXJnaW4tbGVmdDotMzBweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7Ym9yZGVyLXJhZGl1czo1cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcHtwYWRkaW5nLWxlZnQ6MzBweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mYXZvcml0ZS13cmFwIC5mYXZvcml0ZS1zdGF0aWMgLmZhdm9yaXRlLXNxdWFyZXtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcCAuZmF2b3JpdGUtc3RhdGljIC5mYXZvcml0ZS1zcXVhcmUtY2hlY2tib3h7bWFyZ2luLWxlZnQ6LTMwcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7Ym9yZGVyLXJhZGl1czo1cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcCAuZmF2b3JpdGUtc3RhdGljIC5mYXZvcml0ZS1zcXVhcmU6Y2hlY2tlZCsuZmF2b3JpdGUtc3F1YXJlLWNoZWNrYm94e21hcmdpbi1sZWZ0Oi0zMHB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO2JvcmRlci1yYWRpdXM6NXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXB7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LWZpbHRlcnMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAucmVzZXQtd3JhcCAucmVzZXQtc2V0dGluZ3N7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjE3OHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMzFweCk7Ym9yZGVyLXJhZGl1czozMHB4O2JvcmRlcjpzb2xpZCAjMjRjNWRiIDFweDtjdXJzb3I6cG9pbnRlcn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5yZXNldC13cmFwIC5yZXNldC1maWx0ZXJzIC5yZXNldC1maWx0ZXJzX19yZXNldC1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAucmVzZXQtd3JhcCAucmVzZXQtZmlsdGVycyAucmVzZXQtc2V0dGluZ3NfX3Jlc2V0LXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5yZXNldC13cmFwIC5yZXNldC1zZXR0aW5ncyAucmVzZXQtZmlsdGVyc19fcmVzZXQtc3RhdGljLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LXNldHRpbmdzIC5yZXNldC1zZXR0aW5nc19fcmVzZXQtc3RhdGlje2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LWZpbHRlcnMgLnJlc2V0LWZpbHRlcnNfX3Jlc2V0LXN0YXRpYyBpbnB1dCxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5yZXNldC13cmFwIC5yZXNldC1maWx0ZXJzIC5yZXNldC1zZXR0aW5nc19fcmVzZXQtc3RhdGljIGlucHV0LG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LXNldHRpbmdzIC5yZXNldC1maWx0ZXJzX19yZXNldC1zdGF0aWMgaW5wdXQsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAucmVzZXQtd3JhcCAucmVzZXQtc2V0dGluZ3MgLnJlc2V0LXNldHRpbmdzX19yZXNldC1zdGF0aWMgaW5wdXR7cGFkZGluZzowO2JvcmRlcjpub25lO2ZvbnQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9bWFpbiAuY29sbGVjdGlvbi1uZXcteWVhcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9LnllYXItZGlzcGxheS1ub25lLC5xdWFudGl0eS1kaXNwbGF5LW5vbmUsLnZhbHVlLWRpc3BsYXktbm9uZSwuYmFsbFNoYXBlZC1kaXNwbGF5LW5vbmUsLmJlbGxTaGFwZWQtZGlzcGxheS1ub25lLC5jb25lU2hhcGVkLWRpc3BsYXktbm9uZSwuc25vd1NoYXBlZC1kaXNwbGF5LW5vbmUsLmZpZ3VyaW5lU2hhcGVkLWRpc3BsYXktbm9uZSwud2hpdGUtZGlzcGxheS1ub25lLC55ZWxsb3ctZGlzcGxheS1ub25lLC5yZWQtZGlzcGxheS1ub25lLC5ibHVlLWRpc3BsYXktbm9uZSwuZ3JlZW4tZGlzcGxheS1ub25lLC5sYXJnZS1kaXNwbGF5LW5vbmUsLm1pZGRsZS1kaXNwbGF5LW5vbmUsLmxpdHRsZS1kaXNwbGF5LW5vbmUsLmZhdm9yaXRlLWRpc3BsYXktbm9uZXtkaXNwbGF5Om5vbmV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RveS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQ0ksb0JBQUEsQ0FDQSx5REFBQSxDQUNBLGtCQUFBLENBQ0EsaUJBQUEsQ0FNSixLQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBR0osNnBCQUNJLFdBQUEsQ0FDQSxvQkFBQSxDQUNBLGlCQUFBLENBQ0Esa0JBQUEsQ0FDQSxjQUFBLENBQ0EsZ0JBQUEsQ0FDQSx3QkFBQSxDQUNBLFVBQUEsQ0FHSiw2VkFDSSxrQkFBQSxDQUNB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dUJBQUEsQ0FDQSxvQkFBQSxDQUNBLGVBQUEsQ0FFSiw4UEFHSSxpQkFBQSxDQUNBLGlCQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FDQSx3RUFBQSxDQUNBLGlCQUFBLENBRUosaVZBR0ksaUJBQUEsQ0FDQSxpQkFBQSxDQUNBLFVBQUEsQ0FDQSxXQUFBLENBQ0Esd0VBQUEsQ0FDQSxpQkFBQSxDQUlaLGtEQUNJLGlCQUFBLENBR0ksb0ZBQ0ksaUJBQUEsQ0FDQSx1QkFBQSxDQUNBLG9CQUFBLENBQ0EsZUFBQSxDQUVKLDZGQUNJLGlCQUFBLENBQ0EsaUJBQUEsQ0FDQSxVQUFBLENBQ0EsV0FBQSxDQUNBLGtEQUFBLENBQ0EsaUJBQUEsQ0FFSixzSEFDSSxpQkFBQSxDQUNBLGlCQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FDQSxrREFBQSxDQUNBLGlCQUFBLENBSVosK0NBQ0ksWUFBQSxDQUNBLDZCQUFBLENBQ0EsNkhBRUksWUFBQSxDQUNBLHNCQUFBLENBQ0Esa0JBQUEsQ0FDQSxXQUFBLENBQ0EsV0FBQSxDQUNBLGdIQUFBLENBQ0EsMEJBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBQ0EsY0FBQSxDQUNBLGdYQUVJLGtCQUFBLENBQ0EsaUJBQUEsQ0FDQSxrQkFBQSxDQUNBLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLGlCQUFBLENBQ0EsVUFBQSxDQUNBLHdZQUNJLFNBQUEsQ0FDQSxXQUFBLENBQ0EsWUFBQSxDQUNBLGFBQUEsQ0FDQSw0QkFBQSxDQU94QiwwQkFDSSxZQUFBLENBQ0EsY0FBQSxDQUlSLHNYQWlCSSxZQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ05ldWNoYSc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiRjb2w6cmdiKDI1NSxcXG4wLFxcbjApO1xcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiAjMTkyRjJEO1xcbn1cXG5cXG4ldGV4dC1zaGFyZWQge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuJXNlY29uZGFyeS10ZXh0LXNoYXJlZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuJXRleHQtbGFyZ2UtbWlkZGxlLWxpdHRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTlweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMTkyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAuY29sbGVjdGlvbi1zZXR0aW5ncyB7XFxuICAgICAgICAud3JhcHBlciB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogOTAwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAuZWZmZWN0cy1hbmQtc2VhY2gtd3JhcCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgLnNvdW5kIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL211dGUuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0OyAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc25vdyB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zbm93LnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zZWFyY2gtc2V0IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTRweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtdG95cyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmxvdXBlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zZWFyY2guc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc29ydC13cmFwIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAuc29ydC1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNvcnQtc2V0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICAgICAgICAgICAgICAuc29ydC1zZXQtc2VsZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmNhdGVnb3J5LXdyYXAge1xcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1zZXRfX3N0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtbGFyZ2UtbWlkZGxlLWxpdHRsZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktc2V0X19zcXVhcmUge1xcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktc2V0X19zdGF0aWMtY2hlY2tib3gge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9jaGVja2JveC5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LXNldF9fc3F1YXJlOmNoZWNrZWQrLmNhdGVnb3J5LXNldF9fc3RhdGljLWNoZWNrYm94IHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LWNoZWNrZWQuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5mb3JtLXdyYXAge1xcbiAgICAgICAgICAgICAgICAuZm9ybS1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmZvcm0tc2V0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgICAgICAuYmVsbC1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuYmFsbC1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuY29uZS1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuc25vdy1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuZmlndXJpbmUtc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVzZWNvbmRhcnktdGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuYmVsbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvYmVsbC0yLnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuYmFsbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvYmFsbC5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmNvbmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL2NvbmUuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5zbm93IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zbm93LnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZmlndXJpbmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL3RveS5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmJlbGwtc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLmJhbGwtc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLmNvbmUtc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLnNub3ctc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLmZpZ3VyaW5lLXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlc2Vjb25kYXJ5LXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5jb2xvci13cmFwIHtcXG4gICAgICAgICAgICAgICAgLmNvbG9yLXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuY29sb3Itc2V0IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjVweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgICAgICAud2hpdGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvd2hpdGUtc3FyLnN2Z1xcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC55ZWxsb3cge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL3llbGxvdy1zcXIuc3ZnXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLnJlZCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvcmVkLXNxci5zdmdcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuYmx1ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvYmx1ZS1zcXIuc3ZnXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmdyZWVuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9ncmVlbi1zcXIuc3ZnXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC55ZWFyLXdyYXAge1xcbiAgICAgICAgICAgICAgICAueWVhci1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAueWVhci1zZXR7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgICAgICAgICAgICAgIH0gICAgXFxuICAgICAgICAgICAgICAgIC55ZWFyLXNldC1taW4sXFxuICAgICAgICAgICAgICAgIC55ZWFyLXNldC1tYXgge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICMyNEM1REIgMXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC55ZWFyLXNldC1taW4tbWF4IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNldDBmLXdyYXAge1xcbiAgICAgICAgICAgICAgICAuc2V0MGYtc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNldDBmLXNldHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2V0MGYtc2V0LW1pbixcXG4gICAgICAgICAgICAgICAgLnNldDBmLXNldC1tYXgge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICMyNEM1REIgMXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zZXQwZi1zZXQtbWluLW1heCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zaXplLXdyYXAge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIC5zaXplLXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMjJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2l6ZS1zZXQge1xcbiAgICAgICAgICAgICAgICAgICAgLmxhcmdlLXNldF9fc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZS1zZXRfX3N0YXRpYyxcXG4gICAgICAgICAgICAgICAgICAgIC5saXR0bGUtc2V0X19zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAubGFyZ2Utc2V0X19zcXVhcmUsXFxuICAgICAgICAgICAgICAgICAgICAubWlkZGxlLXNldF9fc3F1YXJlLFxcbiAgICAgICAgICAgICAgICAgICAgLmxpdHRsZS1zZXRfX3NxdWFyZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5sYXJnZS1zZXRfX3N0YXRpYy1jaGVja2JveCxcXG4gICAgICAgICAgICAgICAgICAgIC5taWRkbGUtc2V0X19zdGF0aWMtY2hlY2tib3gsXFxuICAgICAgICAgICAgICAgICAgICAubGl0dGxlLXNldF9fc3RhdGljLWNoZWNrYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9jaGVja2JveC5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmxhcmdlLXNldF9fc3F1YXJlOmNoZWNrZWQrLmxhcmdlLXNldF9fc3RhdGljLWNoZWNrYm94LFxcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZS1zZXRfX3NxdWFyZTpjaGVja2VkKy5taWRkbGUtc2V0X19zdGF0aWMtY2hlY2tib3gsXFxuICAgICAgICAgICAgICAgICAgICAubGl0dGxlLXNldF9fc3F1YXJlOmNoZWNrZWQrLmxpdHRsZS1zZXRfX3N0YXRpYy1jaGVja2JveCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3gtY2hlY2tlZC5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5mYXZvcml0ZS13cmFwIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAuZmF2b3JpdGUtc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtbGFyZ2UtbWlkZGxlLWxpdHRsZTtcXG4gICAgICAgICAgICAgICAgICAgIC5mYXZvcml0ZS1zcXVhcmUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZmF2b3JpdGUtc3F1YXJlLWNoZWNrYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9jaGVja2JveC5zdmdcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZmF2b3JpdGUtc3F1YXJlOmNoZWNrZWQrLmZhdm9yaXRlLXNxdWFyZS1jaGVja2JveCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3gtY2hlY2tlZC5zdmdcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnJlc2V0LXdyYXAge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIC5yZXNldC1maWx0ZXJzLFxcbiAgICAgICAgICAgICAgICAucmVzZXQtc2V0dGluZ3Mge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzhweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAucmVzZXQtZmlsdGVyc19fcmVzZXQtc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLnJlc2V0LXNldHRpbmdzX19yZXNldC1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuY29sbGVjdGlvbi1uZXcteWVhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxufVxcblxcbi55ZWFyLWRpc3BsYXktbm9uZSxcXG4ucXVhbnRpdHktZGlzcGxheS1ub25lLFxcbi52YWx1ZS1kaXNwbGF5LW5vbmUsXFxuLmJhbGxTaGFwZWQtZGlzcGxheS1ub25lLFxcbi5iZWxsU2hhcGVkLWRpc3BsYXktbm9uZSxcXG4uY29uZVNoYXBlZC1kaXNwbGF5LW5vbmUsXFxuLnNub3dTaGFwZWQtZGlzcGxheS1ub25lLFxcbi5maWd1cmluZVNoYXBlZC1kaXNwbGF5LW5vbmUsXFxuLndoaXRlLWRpc3BsYXktbm9uZSxcXG4ueWVsbG93LWRpc3BsYXktbm9uZSxcXG4ucmVkLWRpc3BsYXktbm9uZSxcXG4uYmx1ZS1kaXNwbGF5LW5vbmUsXFxuLmdyZWVuLWRpc3BsYXktbm9uZSxcXG4ubGFyZ2UtZGlzcGxheS1ub25lLFxcbi5taWRkbGUtZGlzcGxheS1ub25lLFxcbi5saXR0bGUtZGlzcGxheS1ub25lLFxcbi5mYXZvcml0ZS1kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2F1ZGlvLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvc25vd2ZsYWtlLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuL2Fzc2V0cy9nYXJsYW5kL0dhcmxhbmRfMS5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi9hc3NldHMvZ2FybGFuZC9HYXJsYW5kXzIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4vYXNzZXRzL2dhcmxhbmQvR2FybGFuZF8zLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fIGZyb20gXCIuL2Fzc2V0cy9iZy8xLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2V7Zm9udC1mYW1pbHk6XFxcIk5ldWNoYVxcXCI7c3JjOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWx9Ym9keXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQ6IzE5MmYyZH1tYWluIC50cmVlLXNldHRpbmdzLXRveXMgLndyYXBwZXItdHJlZS1zZXR0aW5ncy10b3lzIC5zYXZlZC1jb2xsZWN0aW9uIC5zYXZlZC1jb2xsZWN0aW9uLXN0YXRpYyxtYWluIC50cmVlLXNldHRpbmdzLXRveXMgLndyYXBwZXItdHJlZS1zZXR0aW5ncy10b3lzIC50b3lzLWNvbGxlY3Rpb24gLnRveXMtY29sbGVjdGlvbi1zdGF0aWMsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLWZsYXNoLWxpZ2h0cy13cmFwIC5jaG9vc2UtZmxhc2gtbGlnaHRzLXN0YXRpYyxtYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtYmFja2dyb3VuZC13cmFwIC5jaG9vc2UtYmFja2dyb3VuZC1zdGF0aWMsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUtc3RhdGlje2hlaWdodDoyMnB4O2ZvbnQtZmFtaWx5OlxcXCJOZXVjaGFcXFwiO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoyMnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjojZmZmfW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLnRyZWUtc2V0dGluZy1idXR0b24gLnNldHRpbmctYnV0dG9uLXdyYXAgLnJlc2V0LXNldHRpbmdzLXdyYXAgaW5wdXQsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAudHJlZS1zZXR0aW5nLWJ1dHRvbiAuc2V0dGluZy1idXR0b24td3JhcCAuc2F2ZS13cmFwIGlucHV0e2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmfW1haW57bWFyZ2luOjAgYXV0bztkaXNwbGF5OmZsZXh9bWFpbiAudHJlZS1zZXR0aW5ne3dpZHRoOjM4NHB4fW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmd7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjt3aWR0aDozMjBweDttYXJnaW46MCBhdXRvfW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1zZXR0aW5ncy10b3lze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1zZXR0aW5ncy10b3lzIC5zb3VuZHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXNldHRpbmdzLXRveXMgLnNub3d7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDt3aWR0aDozNnB4O2hlaWdodDozNnB4fW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS10cmVlLXdyYXAgLmNob29zZS10cmVlLXN0YXRpY3toZWlnaHQ6MjJweH1tYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtdHJlZS13cmFwIC5jaG9vc2UtdHJlZXt3aWR0aDozMjBweDtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7b3ZlcmZsb3c6YXV0b31tYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtdHJlZS13cmFwIC5jaG9vc2UtdHJlZSAudHJlZS0xLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS10cmVlLXdyYXAgLmNob29zZS10cmVlIC50cmVlLTIsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtMyxtYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtdHJlZS13cmFwIC5jaG9vc2UtdHJlZSAudHJlZS00LG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS10cmVlLXdyYXAgLmNob29zZS10cmVlIC50cmVlLTUsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtNnttYXJnaW46MTJweDt3aWR0aDoxMzRweDtoZWlnaHQ6MTM0cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoNHB4KTtib3JkZXItcmFkaXVzOjEwcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtMSBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtMiBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtMyBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtNCBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtNSBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLXRyZWUtd3JhcCAuY2hvb3NlLXRyZWUgLnRyZWUtNiBpbWd7aGVpZ2h0OjEwMCU7d2lkdGg6YXV0b31tYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtYmFja2dyb3VuZC13cmFwIC5jaG9vc2UtYmFja2dyb3VuZC1zdGF0aWN7aGVpZ2h0OjIycHh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLWJhY2tncm91bmQtd3JhcCAuY2hvb3NlLWJhY2tncm91bmR7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy0xLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy0yLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy0zLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy00LG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy01LG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy02LG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy03LG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy04e21hcmdpbjo2cHg7d2lkdGg6NjhweDtoZWlnaHQ6NjhweDtib3JkZXItcmFkaXVzOjEwcHh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLWJhY2tncm91bmQtd3JhcCAuY2hvb3NlLWJhY2tncm91bmQgLmJnLTEgaW1nLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy0yIGltZyxtYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtYmFja2dyb3VuZC13cmFwIC5jaG9vc2UtYmFja2dyb3VuZCAuYmctMyBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLWJhY2tncm91bmQtd3JhcCAuY2hvb3NlLWJhY2tncm91bmQgLmJnLTQgaW1nLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy01IGltZyxtYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtYmFja2dyb3VuZC13cmFwIC5jaG9vc2UtYmFja2dyb3VuZCAuYmctNiBpbWcsbWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLWJhY2tncm91bmQtd3JhcCAuY2hvb3NlLWJhY2tncm91bmQgLmJnLTcgaW1nLG1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1iYWNrZ3JvdW5kLXdyYXAgLmNob29zZS1iYWNrZ3JvdW5kIC5iZy04IGltZ3toZWlnaHQ6MTAwJTt3aWR0aDphdXRvfW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1mbGFzaC1saWdodHMtd3JhcCAuY2hvb3NlLWZsYXNoLWxpZ2h0cy1zdGF0aWN7aGVpZ2h0OjIycHh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAuY2hvb3NlLWZsYXNoLWxpZ2h0cy13cmFwIC5jaG9vc2UtZmxhc2gtbGlnaHRzIC5mbGFzaC1saWdodHMtMXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O2hlaWdodDo1MHB4fW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLmNob29zZS1mbGFzaC1saWdodHMtd3JhcCAuY2hvb3NlLWZsYXNoLWxpZ2h0cyAuZmxhc2gtbGlnaHRzLTJ7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtoZWlnaHQ6NTBweH1tYWluIC50cmVlLXNldHRpbmcgLndyYXBwZXItdHJlZS1zZXR0aW5nIC5jaG9vc2UtZmxhc2gtbGlnaHRzLXdyYXAgLmNob29zZS1mbGFzaC1saWdodHMgLmZsYXNoLWxpZ2h0cy0ze2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7aGVpZ2h0OjYwcHh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAudHJlZS1zZXR0aW5nLWJ1dHRvbiAuc2V0dGluZy1idXR0b24td3JhcHtkaXNwbGF5OmZsZXh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAudHJlZS1zZXR0aW5nLWJ1dHRvbiAuc2V0dGluZy1idXR0b24td3JhcCAuc2F2ZS13cmFwe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxNzhweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDMxcHgpO2JvcmRlci1yYWRpdXM6MzBweDtib3JkZXI6c29saWQgIzI0YzVkYiAxcHh9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAudHJlZS1zZXR0aW5nLWJ1dHRvbiAuc2V0dGluZy1idXR0b24td3JhcCAuc2F2ZS13cmFwIGlucHV0e3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOm5vbmV9bWFpbiAudHJlZS1zZXR0aW5nIC53cmFwcGVyLXRyZWUtc2V0dGluZyAudHJlZS1zZXR0aW5nLWJ1dHRvbiAuc2V0dGluZy1idXR0b24td3JhcCAucmVzZXQtc2V0dGluZ3Mtd3JhcHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTc4cHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4fW1haW4gLnRyZWUtc2V0dGluZyAud3JhcHBlci10cmVlLXNldHRpbmcgLnRyZWUtc2V0dGluZy1idXR0b24gLnNldHRpbmctYnV0dG9uLXdyYXAgLnJlc2V0LXNldHRpbmdzLXdyYXAgaW5wdXR7cGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZX1tYWluIC50cmVlLW1haW4tdmlld3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgMCAwL2NvdmVyIG5vLXJlcGVhdDt3aWR0aDoxMDk1cHg7aGVpZ2h0Ojk4MHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1tYWluIC50cmVlLW1haW4tdmlldyAudHJlZXt3aWR0aDo1NDNweDtoZWlnaHQ6ODEwcHh9bWFpbiAudHJlZS1zZXR0aW5ncy10b3lze3dpZHRoOjQ0MHB4fW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXN7d2lkdGg6MzQ0cHg7aGVpZ2h0OjQzMnB4O21hcmdpbjowIGF1dG99bWFpbiAudHJlZS1zZXR0aW5ncy10b3lzIC53cmFwcGVyLXRyZWUtc2V0dGluZ3MtdG95cyAudG95cy1jb2xsZWN0aW9ue21hcmdpbjowIGF1dG99bWFpbiAudHJlZS1zZXR0aW5ncy10b3lzIC53cmFwcGVyLXRyZWUtc2V0dGluZ3MtdG95cyAudG95cy1jb2xsZWN0aW9uIC50b3lzLWNvbGxlY3Rpb24tc3RhdGlje2hlaWdodDoyMnB4fW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnRveXMtY29sbGVjdGlvbiAudG95cy1jb2xsZWN0aW9uLXdyYXB7b3ZlcmZsb3c6YXV0bztkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7d2lkdGg6MzQ0cHg7aGVpZ2h0OjQzMnB4fW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnRveXMtY29sbGVjdGlvbiAudG95cy1jb2xsZWN0aW9uLXdyYXAgLmZhdm9yaXRlLXRveXttYXJnaW46M3B4O2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDRweCk7Ym9yZGVyLXJhZGl1czoxMHB4O3dpZHRoOjc1cHg7aGVpZ2h0Ojc1cHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnRveXMtY29sbGVjdGlvbiAudG95cy1jb2xsZWN0aW9uLXdyYXAgLmZhdm9yaXRlLXRveSAuZnR7aGVpZ2h0Ojc1JTt3aWR0aDphdXRvfW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnRveXMtY29sbGVjdGlvbiAudG95cy1jb2xsZWN0aW9uLXdyYXAgLmZhdm9yaXRlLXRveSAuY291bnR7d2lkdGg6MjJweDtoZWlnaHQ6MTlweDtiYWNrZ3JvdW5kOiMyNGM1ZGI7Ym9yZGVyLXJhZGl1czoxMHB4fW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnNhdmVkLWNvbGxlY3Rpb257bWFyZ2luOjAgYXV0bztvdmVyZmxvdzphdXRvfW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnNhdmVkLWNvbGxlY3Rpb24gLnNhdmVkLWNvbGxlY3Rpb24tc3RhdGlje2hlaWdodDoyMnB4fW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnNhdmVkLWNvbGxlY3Rpb24gLnNhdmVkLWNvbGxlY3Rpb24td3JhcHt3aWR0aDozNDRweDtoZWlnaHQ6NDMycHg7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwfW1haW4gLnRyZWUtc2V0dGluZ3MtdG95cyAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXMgLnNhdmVkLWNvbGxlY3Rpb24gLnNhdmVkLWNvbGxlY3Rpb24td3JhcCAuc2F2ZWQtdHJlZXttYXJnaW46NnB4O3dpZHRoOjE2MHB4O2hlaWdodDoxNjBweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cig0cHgpO2JvcmRlci1yYWRpdXM6MTBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9bWFpbiAudHJlZS1zZXR0aW5ncy10b3lzIC53cmFwcGVyLXRyZWUtc2V0dGluZ3MtdG95cyAuc2F2ZWQtY29sbGVjdGlvbiAuc2F2ZWQtY29sbGVjdGlvbi13cmFwIC5zYXZlZC10cmVlIC50cntoZWlnaHQ6MTAwJTt3aWR0aDphdXRvfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90cmVlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FDSSxvQkFBQSxDQUNBLHlEQUFBLENBQ0Esa0JBQUEsQ0FDQSxpQkFBQSxDQU1KLEtBQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FJSix1Y0FDSSxXQUFBLENBQ0Esb0JBQUEsQ0FDQSxpQkFBQSxDQUNBLGtCQUFBLENBQ0EsY0FBQSxDQUNBLGdCQUFBLENBQ0Esd0JBQUEsQ0FDQSxVQUFBLENBYUosa05BQ0ksa0JBQUEsQ0FDQSxpQkFBQSxDQUNBLGtCQUFBLENBQ0EsY0FBQSxDQUNBLGdCQUFBLENBQ0EsaUJBQUEsQ0FDQSxVQUFBLENBR0osS0FDSSxhQUFBLENBQ0EsWUFBQSxDQUNBLG1CQUVJLFdBQUEsQ0FDQSx5Q0FDSSxZQUFBLENBQ0EscUJBQUEsQ0FDQSw2QkFBQSxDQUNBLFdBQUEsQ0FDQSxhQUFBLENBQ0EsK0RBQ0ksWUFBQSxDQUNBLDRCQUFBLENBQ0Esc0VBQ0ksd0VBQUEsQ0FDQSxVQUFBLENBQ0EsV0FBQSxDQUVKLHFFQUNJLHdFQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FJSiwrRUFHSSxXQUFBLENBRUosd0VBQ0ksV0FBQSxDQUNBLFlBQUEsQ0FDQSxjQUFBLENBQ0EsYUFBQSxDQUNBLGdlQU1JLFdBQUEsQ0FDQSxXQUFBLENBQ0EsWUFBQSxDQUNBLG9IQUFBLENBQ0EseUJBQUEsQ0FDQSxrQkFBQSxDQUNBLFlBQUEsQ0FDQSxzQkFBQSxDQUNBLHdmQUNJLFdBQUEsQ0FDQSxVQUFBLENBTVosMkZBR0ksV0FBQSxDQUNKLG9GQUNJLFlBQUEsQ0FDQSxjQUFBLENBQ0EsZ3RCQVlJLFVBQUEsQ0FDQSxVQUFBLENBQ0EsV0FBQSxDQUNBLGtCQUFBLENBUEEsZ3ZCQUNJLFdBQUEsQ0FDQSxVQUFBLENBV1osK0ZBR0ksV0FBQSxDQUdBLHdHQUNJLHdFQUFBLENBRUEsV0FBQSxDQUVKLHdHQUNJLHdFQUFBLENBRUEsV0FBQSxDQUVKLHdHQUNJLHdFQUFBLENBRUEsV0FBQSxDQU1SLG1GQUNJLFlBQUEsQ0FDQSw4RkFDSSxZQUFBLENBQ0Esc0JBQUEsQ0FDQSxrQkFBQSxDQUNBLFdBQUEsQ0FDQSxXQUFBLENBQ0EsZ0hBQUEsQ0FDQSwwQkFBQSxDQUNBLGtCQUFBLENBQ0Esd0JBQUEsQ0FFSSxvR0FFQSxTQUFBLENBQ0EsUUFBQSxDQUNBLFFBQUEsQ0FDQSxXQUFBLENBQ0EsZUFBQSxDQUdSLHdHQUNJLFlBQUEsQ0FDQSxzQkFBQSxDQUNBLGtCQUFBLENBQ0EsV0FBQSxDQUNBLFdBQUEsQ0FDQSxnSEFBQSxDQUNBLDBCQUFBLENBQ0Esa0JBQUEsQ0FDQSx3QkFBQSxDQUNJLDhHQUVBLFNBQUEsQ0FDQSxRQUFBLENBQ0EsUUFBQSxDQUNBLFdBQUEsQ0FDQSxlQUFBLENBUXhCLHFCQUVJLHNFQUFBLENBQ0EsWUFBQSxDQUNBLFlBQUEsQ0FDQSxZQUFBLENBQ0Esc0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDJCQUNJLFdBQUEsQ0FDQSxZQUFBLENBR1IseUJBQ0ksV0FBQSxDQUVBLHFEQUNJLFdBQUEsQ0FDQSxZQUFBLENBQ0EsYUFBQSxDQUNKLHNFQUNJLGFBQUEsQ0FDQSw4RkFFUSxXQUFBLENBRVIsNEZBQ0ksYUFBQSxDQUNBLFlBQUEsQ0FDQSxjQUFBLENBQ0EsV0FBQSxDQUNBLFlBQUEsQ0FDQSwwR0FDSSxVQUFBLENBQ0Esb0hBQUEsQ0FDQSx5QkFBQSxDQUNBLGtCQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FDQSxZQUFBLENBQ0Esc0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDhHQUNJLFVBQUEsQ0FDQSxVQUFBLENBRUosaUhBQ0ksVUFBQSxDQUNBLFdBQUEsQ0FDQSxrQkFBQSxDQUNBLGtCQUFBLENBS2hCLHVFQUNJLGFBQUEsQ0FDQSxhQUFBLENBQ0EsZ0dBRUksV0FBQSxDQUVKLDhGQUNJLFdBQUEsQ0FDQSxZQUFBLENBQ0EsWUFBQSxDQUNBLGNBQUEsQ0FDQSwwR0FDSSxVQUFBLENBQ0EsV0FBQSxDQUNBLFlBQUEsQ0FDQSxvSEFBQSxDQUNBLHlCQUFBLENBQ0Esa0JBQUEsQ0FDQSxZQUFBLENBQ0Esc0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDhHQUNJLFdBQUEsQ0FDQSxVQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ05ldWNoYSc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiRjb2w6cmdiKDI1NSxcXG4wLFxcbjApO1xcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiAjMTkyRjJEO1xcbn1cXG5cXG5cXG4ldGV4dC1zaGFyZWQge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuJXNlY29uZGFyeS10ZXh0LXNoYXJlZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuJXRleHQtbGFyZ2UtbWlkZGxlLWxpdHRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTlweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAudHJlZS1zZXR0aW5nIHtcXG4gICAgICAgIC8vIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcXG4gICAgICAgIHdpZHRoOiAzODRweDtcXG4gICAgICAgIC53cmFwcGVyLXRyZWUtc2V0dGluZ3tcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgICAgICAuY2hvb3NlLXNldHRpbmdzLXRveXN7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAgICBcXG4gICAgICAgICAgICAgICAgLnNvdW5ke1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvYXVkaW8uc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNub3d7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9zbm93Zmxha2Uuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9ICAgICAgICBcXG4gICAgICAgICAgICAuY2hvb3NlLXRyZWUtd3JhcHtcXG4gICAgICAgICAgICAgICAgLmNob29zZS10cmVlLXN0YXRpY3tcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4OyAgICBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuY2hvb3NlLXRyZWV7IFxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgLnRyZWUtMSxcXG4gICAgICAgICAgICAgICAgICAgIC50cmVlLTIsXFxuICAgICAgICAgICAgICAgICAgICAudHJlZS0zLFxcbiAgICAgICAgICAgICAgICAgICAgLnRyZWUtNCxcXG4gICAgICAgICAgICAgICAgICAgIC50cmVlLTUsXFxuICAgICAgICAgICAgICAgICAgICAudHJlZS02IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5jaG9vc2UtYmFja2dyb3VuZC13cmFwe1xcbiAgICAgICAgICAgICAgICAuY2hvb3NlLWJhY2tncm91bmQtc3RhdGlje1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7ICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmNob29zZS1iYWNrZ3JvdW5ke1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgICAgICAgICAgIC5iZy0xLFxcbiAgICAgICAgICAgICAgICAgICAgLmJnLTIsXFxuICAgICAgICAgICAgICAgICAgICAuYmctMyxcXG4gICAgICAgICAgICAgICAgICAgIC5iZy00LFxcbiAgICAgICAgICAgICAgICAgICAgLmJnLTUsXFxuICAgICAgICAgICAgICAgICAgICAuYmctNixcXG4gICAgICAgICAgICAgICAgICAgIC5iZy03LFxcbiAgICAgICAgICAgICAgICAgICAgLmJnLTh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjhweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY4cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuY2hvb3NlLWZsYXNoLWxpZ2h0cy13cmFwe1xcbiAgICAgICAgICAgICAgICAuY2hvb3NlLWZsYXNoLWxpZ2h0cy1zdGF0aWN7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuY2hvb3NlLWZsYXNoLWxpZ2h0c3tcXG4gICAgICAgICAgICAgICAgICAgIC5mbGFzaC1saWdodHMtMXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2dhcmxhbmQvR2FybGFuZF8xLnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZmxhc2gtbGlnaHRzLTJ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9nYXJsYW5kL0dhcmxhbmRfMi5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDI4NHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5mbGFzaC1saWdodHMtM3tcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2dhcmxhbmQvR2FybGFuZF8zLnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjg0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50cmVlLXNldHRpbmctYnV0dG9ue1xcbiAgICAgICAgICAgICAgICAuc2V0dGluZy1idXR0b24td3JhcHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAuc2F2ZS13cmFwe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTc4cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMXB4KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LWxhcmdlLW1pZGRsZS1saXR0bGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLnJlc2V0LXNldHRpbmdzLXdyYXB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzhweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMjRDNURCIDFweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtbGFyZ2UtbWlkZGxlLWxpdHRsZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9ICAgIFxcbiAgICB9XFxuICAgIC50cmVlLW1haW4tdmlldyB7XFxuICAgICAgICAvLyBib3JkZXI6IHJlZCAxcHggc29saWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2JnLzEuanBnXFxcIikgMCAwL2NvdmVyIG5vLXJlcGVhdDtcXG4gICAgICAgIHdpZHRoOiAxMDk1cHg7XFxuICAgICAgICBoZWlnaHQ6IDk4MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLnRyZWUge1xcbiAgICAgICAgICAgIHdpZHRoOiA1NDNweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDgxMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC50cmVlLXNldHRpbmdzLXRveXN7XFxuICAgICAgICB3aWR0aDogNDQwcHg7XFxuICAgICAgICAvLyBib3JkZXI6IHRvbWF0byAxcHggc29saWQ7XFxuICAgICAgICAud3JhcHBlci10cmVlLXNldHRpbmdzLXRveXN7XFxuICAgICAgICAgICAgd2lkdGg6IDM0NHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNDMycHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICAudG95cy1jb2xsZWN0aW9ue1xcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgIC50b3lzLWNvbGxlY3Rpb24tc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7ICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG95cy1jb2xsZWN0aW9uLXdyYXAge1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQ0cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDMycHg7XFxuICAgICAgICAgICAgICAgIC5mYXZvcml0ZS10b3l7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDkuNTYlIDEwOS41NiUgYXQgMCUgLTIuOTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCUsIHJnYmEoMTc5LCAyNDYsIDI1NSwgMC41KSAxMDAlKTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgLmZ0e1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmNvdW50e1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjRDNURCO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc2F2ZWQtY29sbGVjdGlvbntcXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgICAgICAuc2F2ZWQtY29sbGVjdGlvbi1zdGF0aWN7XFxuICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7ICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2F2ZWQtY29sbGVjdGlvbi13cmFwe1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQ0cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDMycHg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgICAgICAgLnNhdmVkLXRyZWV7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICAgICAgICAgICAgICAgICAgLnRye1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9ICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubm9VaVNsaWRlciA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnRzLlBpcHNNb2RlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc01vZGUpIHtcbiAgICAgICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICAgICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJQb3NpdGlvbnNcIl0gPSBcInBvc2l0aW9uc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgICAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzTW9kZSB8fCAoZXhwb3J0cy5QaXBzTW9kZSA9IHt9KSk7XG4gICAgZXhwb3J0cy5QaXBzVHlwZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNUeXBlKSB7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIkxhcmdlVmFsdWVcIl0gPSAxXSA9IFwiTGFyZ2VWYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xuICAgIH0pKGV4cG9ydHMuUGlwc1R5cGUgfHwgKGV4cG9ydHMuUGlwc1R5cGUgPSB7fSkpO1xuICAgIC8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpICYmIHR5cGVvZiBlbnRyeS5mcm9tID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIC8vIHBhcnRpYWwgZm9ybWF0dGVycyBvbmx5IG5lZWQgYSB0byBmdW5jdGlvbiBhbmQgbm90IGEgZnJvbSBmdW5jdGlvblxuICAgICAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQmluZGFibGUgdmVyc2lvblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbiAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbiAgICBmdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRvKSAqIHRvO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtLCBvcmllbnRhdGlvbikge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAgICAgLy8gSSBoYXZlbid0IGZvdW5kIGEgZmVhdHVyZSBkZXRlY3Rpb24gdGhhdCBwcm92ZXMgdGhpcy4gV29yc3QgY2FzZVxuICAgICAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmICFpc05hTihhKSAmJiBpc0Zpbml0ZShhKTtcbiAgICB9XG4gICAgLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3NGb3IoZWxlbWVudCwgY2xhc3NOYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG4gICAgZnVuY3Rpb24gbGltaXQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG4gICAgfVxuICAgIC8vIFdyYXBzIGEgdmFyaWFibGUgYXMgYW4gYXJyYXksIGlmIGl0IGlzbid0IG9uZSB5ZXQuXG4gICAgLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbiAgICBmdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW2FdO1xuICAgIH1cbiAgICAvLyBDb3VudHMgZGVjaW1hbHNcbiAgICBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bVN0cikge1xuICAgICAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICAgICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgIHJldHVybiBwaWVjZXMubGVuZ3RoID4gMSA/IHBpZWNlc1sxXS5sZW5ndGggOiAwO1xuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xuICAgIH1cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFkjTm90ZXNcbiAgICBmdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2MuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyB3ZSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBjb25zdGFudHMgaW5zdGVhZFxuICAgIC8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcbiAgICAvLyBzbyB0aGF0IHdlIGRvIG5vdCBjb21wdXRlIGFueXRoaW5nIGlmIG5vdCBuZWVkZWRcbiAgICBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XG4gICAgICAgIC8vIGEgcHJlZml4LCB3aGljaCBicmVha3MgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBJRTEwIGltcGxlbWVudGF0aW9uLlxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwicG9pbnRlcmRvd25cIixcbiAgICAgICAgICAgICAgICBtb3ZlOiBcInBvaW50ZXJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiTVNQb2ludGVyVXBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJtb3VzZW1vdmUgdG91Y2htb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuICAgIC8vIElzc3VlICM3ODVcbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzICYmIENTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gUmFuZ2UgQ2FsY3VsYXRpb25cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgICAgIHJldHVybiAxMDAgLyAocGIgLSBwYSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUsIHN0YXJ0UmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgLyAxMDAgKyByYW5nZVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSW5wdXQgYSB2YWx1ZSwgZmluZCB3aGVyZSwgb24gYSBzY2FsZSBvZiAwLTEwMCwgaXQgYXBwbGllcy5cbiAgICBmdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIElucHV0IGEgcGVyY2VudGFnZSwgZmluZCB3aGVyZSBpdCBpcyBvbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICAgIGZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgICAgIGlmICh2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgICAgIC8vIElmICdzbmFwJyBpcyBzZXQsIHN0ZXBzIGFyZSB1c2VkIGFzIGZpeGVkIHBvaW50cyBvbiB0aGUgc2xpZGVyLlxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICAgICAgaWYgKHZhbHVlIC0gYSA+IChiIC0gYSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFNwZWN0cnVtXG4gICAgdmFyIFNwZWN0cnVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnhWYWwgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnNuYXAgPSBzbmFwO1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFjdHVhbCBzdGVwIHZhbHVlcy5cbiAgICAgICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG92ZXIgdGhlIHdob2xlIHNjYWxlIG9mIHJhbmdlcy5cbiAgICAgICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHhQY3RfaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHZhbHVlID4gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICB2YXIgcmVzdF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVsX3JhbmdlX2Rpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hhdCBwYXJ0IG9mIHRoZSBzdGFydCByYW5nZSB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRvdGFsIHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yICsgMTAwIC0gc3RhcnRfZmFjdG9yICogMTAwID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBmYWN0b3Igb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNtYWxsZXIgb3IgZXF1YWwgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSBjYWxjdWxhdGUgcGVyY2VudHVhbCBwYXJ0IG9mIHRoYXQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciAtIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggLSByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS50b1N0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RlcEFmdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2pdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHRoaXMueE51bVN0ZXBzLm1hcChjb3VudERlY2ltYWxzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFzTm9TaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gT3V0c2lkZSB0ZXN0aW5nXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAgICAgLy8gQ292ZXJ0IG1pbi9tYXggc3ludGF4IHRvIDAgYW5kIDEwMC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgdmFsdWUgaXNuJ3QgbnVtZXJpYy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgICAgICB0aGlzLnhQY3QucHVzaChwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAgICAgLy8gTmFOIHdpbGwgZXZhbHVhdGUgdG8gZmFsc2UgdG9vLCBidXQgdG8ga2VlcFxuICAgICAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgICAgICBpZiAoIXBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHMucHVzaChpc05hTih2YWx1ZTEpID8gZmFsc2UgOiB2YWx1ZTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPVxuICAgICAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgICAgICB2YXIgaGlnaGVzdFN0ZXAgPSBNYXRoLmNlaWwoTnVtYmVyKHRvdGFsU3RlcHMudG9GaXhlZCgzKSkgLSAxKTtcbiAgICAgICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3BlY3RydW07XG4gICAgfSgpKTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIE9wdGlvbnNcbiAgICAvKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgICAgICBlbmRsZXNzIHZhbGlkYXRpb24gaW4gaW50ZXJuYWwgbWV0aG9kcy4gVGhlc2UgdGVzdHMgYXJlXG4gICAgICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgICAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAgICAgLSBUaGUgbmFtZSBmb3IgdGhlIG9wdGlvbjtcblxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgICAgICBvYmplY3QsIHRvIG1ha2Ugc3VyZSBhbGwgdmFsdWVzIGNhbiBiZSBjb3JyZWN0bHkgbG9vcGVkIGVsc2V3aGVyZS4gKi9cbiAgICAvL3JlZ2lvbiBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICBmcm9tOiBOdW1iZXJcbiAgICB9O1xuICAgIHZhciBjc3NDbGFzc2VzID0ge1xuICAgICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICAgIGJhc2U6IFwiYmFzZVwiLFxuICAgICAgICBvcmlnaW46IFwib3JpZ2luXCIsXG4gICAgICAgIGhhbmRsZTogXCJoYW5kbGVcIixcbiAgICAgICAgaGFuZGxlTG93ZXI6IFwiaGFuZGxlLWxvd2VyXCIsXG4gICAgICAgIGhhbmRsZVVwcGVyOiBcImhhbmRsZS11cHBlclwiLFxuICAgICAgICB0b3VjaEFyZWE6IFwidG91Y2gtYXJlYVwiLFxuICAgICAgICBob3Jpem9udGFsOiBcImhvcml6b250YWxcIixcbiAgICAgICAgdmVydGljYWw6IFwidmVydGljYWxcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIGNvbm5lY3Q6IFwiY29ubmVjdFwiLFxuICAgICAgICBjb25uZWN0czogXCJjb25uZWN0c1wiLFxuICAgICAgICBsdHI6IFwibHRyXCIsXG4gICAgICAgIHJ0bDogXCJydGxcIixcbiAgICAgICAgdGV4dERpcmVjdGlvbkx0cjogXCJ0eHQtZGlyLWx0clwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uUnRsOiBcInR4dC1kaXItcnRsXCIsXG4gICAgICAgIGRyYWdnYWJsZTogXCJkcmFnZ2FibGVcIixcbiAgICAgICAgZHJhZzogXCJzdGF0ZS1kcmFnXCIsXG4gICAgICAgIHRhcDogXCJzdGF0ZS10YXBcIixcbiAgICAgICAgYWN0aXZlOiBcImFjdGl2ZVwiLFxuICAgICAgICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgICAgICAgcGlwczogXCJwaXBzXCIsXG4gICAgICAgIHBpcHNIb3Jpem9udGFsOiBcInBpcHMtaG9yaXpvbnRhbFwiLFxuICAgICAgICBwaXBzVmVydGljYWw6IFwicGlwcy12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXI6IFwibWFya2VyXCIsXG4gICAgICAgIG1hcmtlckhvcml6b250YWw6IFwibWFya2VyLWhvcml6b250YWxcIixcbiAgICAgICAgbWFya2VyVmVydGljYWw6IFwibWFya2VyLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlck5vcm1hbDogXCJtYXJrZXItbm9ybWFsXCIsXG4gICAgICAgIG1hcmtlckxhcmdlOiBcIm1hcmtlci1sYXJnZVwiLFxuICAgICAgICBtYXJrZXJTdWI6IFwibWFya2VyLXN1YlwiLFxuICAgICAgICB2YWx1ZTogXCJ2YWx1ZVwiLFxuICAgICAgICB2YWx1ZUhvcml6b250YWw6IFwidmFsdWUtaG9yaXpvbnRhbFwiLFxuICAgICAgICB2YWx1ZVZlcnRpY2FsOiBcInZhbHVlLXZlcnRpY2FsXCIsXG4gICAgICAgIHZhbHVlTm9ybWFsOiBcInZhbHVlLW5vcm1hbFwiLFxuICAgICAgICB2YWx1ZUxhcmdlOiBcInZhbHVlLWxhcmdlXCIsXG4gICAgICAgIHZhbHVlU3ViOiBcInZhbHVlLXN1YlwiXG4gICAgfTtcbiAgICAvLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBJTlRFUk5BTF9FVkVOVF9OUyA9IHtcbiAgICAgICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICAgICAgYXJpYTogXCIuX19hcmlhXCJcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgICAgICAvLyBmb3IgbGluZWFyIHNsaWRlcnMuIE92ZXJ3cml0dGVuIGlmIHNldCBpbiAncmFuZ2UnLlxuICAgICAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmFuZ2UocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgICAgICBpZiAoZW50cnkubWluID09PSB1bmRlZmluZWQgfHwgZW50cnkubWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLnNwZWN0cnVtID0gbmV3IFNwZWN0cnVtKGVudHJ5LCBwYXJzZWQuc25hcCB8fCBmYWxzZSwgcGFyc2VkLnNpbmdsZVN0ZXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAgICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIG51bWJlciBvZiBoYW5kbGVzLlxuICAgICAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAgICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgICAgICAvLyBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhcnQgb3B0aW9ucy5cbiAgICAgICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTbmFwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0ZScgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLmFuaW1hdGUgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFuaW1hdGlvbkR1cmF0aW9uID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGNvbm5lY3QgPSBbZmFsc2VdO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gXCJsb3dlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09IFwidXBwZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBib29sZWFuIG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nvbm5lY3QnIG9wdGlvbiBkb2Vzbid0IG1hdGNoIGhhbmRsZSBjb3VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0ID0gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAgICAgLy8gYXJyYXkgc2VsZWN0aW9uLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdvcmllbnRhdGlvbicgb3B0aW9uIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RNYXJnaW4ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElzc3VlICM1ODJcbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgICAgICBpZiAoIXBhcnNlZC5saW1pdCB8fCBwYXJzZWQuaGFuZGxlcyA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpICYmICEoZW50cnkubGVuZ3RoID09PSAyIHx8IGlzTnVtZXJpYyhlbnRyeVswXSkgfHwgaXNOdW1lcmljKGVudHJ5WzFdKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgICAgICB9XG4gICAgICAgIC8vICdnZXREaXN0YW5jZScgcmV0dXJucyBmYWxzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIGxhc3QgXCJyYW5nZVwiIGNhbid0IGNvbnRhaW4gc3RlcCBzaXplIGFzIGl0IGlzIHB1cmVseSBhbiBlbmRwb2ludC5cbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgICAgICB2YXIgZmlyc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3Qgbm90IGV4Y2VlZCAxMDAlIG9mIHRoZSByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERpcmVjdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAgICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAgICAgLy8gaGFuZGxlcyBnZXQgdGhlIGNvbm5lY3QvYmFja2dyb3VuZCBjbGFzc2VzLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdkaXJlY3Rpb24nIG9wdGlvbiB3YXMgbm90IHJlY29nbml6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RCZWhhdmlvdXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYmVoYXZpb3VyJyBtdXN0IGJlIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3B0aW9ucy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgICAgIC8vIE5vbmUgYXJlIHJlcXVpcmVkLlxuICAgICAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgICAgIHZhciBmaXhlZCA9IGVudHJ5LmluZGV4T2YoXCJmaXhlZFwiKSA+PSAwO1xuICAgICAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgICAgICB2YXIgdW5jb25zdHJhaW5lZCA9IGVudHJ5LmluZGV4T2YoXCJ1bmNvbnN0cmFpbmVkXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIG1hcmdpbiB0byBlbmZvcmNlIGZpeGVkIHN0YXRlXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5jb25zdHJhaW5lZCAmJiAocGFyc2VkLm1hcmdpbiB8fCBwYXJzZWQubGltaXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5ldmVudHMgPSB7XG4gICAgICAgICAgICB0YXA6IHRhcCB8fCBzbmFwLFxuICAgICAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgICAgIGRyYWdBbGw6IGRyYWdBbGwsXG4gICAgICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxuICAgICAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEhhbmRsZUF0dHJpYnV0ZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBcmlhRm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFN1cHBvcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REb2N1bWVudEVsZW1lbnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzQ2xhc3NlcycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGVzdCBhbGwgZGV2ZWxvcGVyIHNldHRpbmdzIGFuZCBwYXJzZSB0byBhc3N1bXB0aW9uLXNhZmUgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICAgICAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgbWFyZ2luOiBudWxsLFxuICAgICAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyXG4gICAgICAgIH07XG4gICAgICAgIC8vIFRlc3RzIGFyZSBleGVjdXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgcHJlc2VudGVkIGhlcmUuXG4gICAgICAgIHZhciB0ZXN0cyA9IHtcbiAgICAgICAgICAgIHN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTdGVwIH0sXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcCB9LFxuICAgICAgICAgICAgc3RhcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdFN0YXJ0IH0sXG4gICAgICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXG4gICAgICAgICAgICBkaXJlY3Rpb246IHsgcjogdHJ1ZSwgdDogdGVzdERpcmVjdGlvbiB9LFxuICAgICAgICAgICAgc25hcDogeyByOiBmYWxzZSwgdDogdGVzdFNuYXAgfSxcbiAgICAgICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGlvbkR1cmF0aW9uIH0sXG4gICAgICAgICAgICByYW5nZTogeyByOiB0cnVlLCB0OiB0ZXN0UmFuZ2UgfSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcbiAgICAgICAgICAgIG1hcmdpbjogeyByOiBmYWxzZSwgdDogdGVzdE1hcmdpbiB9LFxuICAgICAgICAgICAgbGltaXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RMaW1pdCB9LFxuICAgICAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcbiAgICAgICAgICAgIGJlaGF2aW91cjogeyByOiB0cnVlLCB0OiB0ZXN0QmVoYXZpb3VyIH0sXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0QXJpYUZvcm1hdCB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXG4gICAgICAgICAgICB0b29sdGlwczogeyByOiBmYWxzZSwgdDogdGVzdFRvb2x0aXBzIH0sXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdEtleWJvYXJkU3VwcG9ydCB9LFxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXG4gICAgICAgICAgICBjc3NQcmVmaXg6IHsgcjogdHJ1ZSwgdDogdGVzdENzc1ByZWZpeCB9LFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzQ2xhc3NlcyB9LFxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlczogeyByOiBmYWxzZSwgdDogdGVzdEhhbmRsZUF0dHJpYnV0ZXMgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIGJlaGF2aW91cjogXCJ0YXBcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogXCJub1VpLVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMFxuICAgICAgICB9O1xuICAgICAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAmJiAhb3B0aW9ucy5hcmlhRm9ybWF0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSdW4gYWxsIG9wdGlvbnMgdGhyb3VnaCBhIHRlc3RpbmcgbWVjaGFuaXNtIHRvIGVuc3VyZSBjb3JyZWN0XG4gICAgICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgICAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICAgICAgT2JqZWN0LmtleXModGVzdHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RzW25hbWVdLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICAgICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgICAgIC8vIEFsbCByZWNlbnQgYnJvd3NlcnMgYWNjZXB0IHVucHJlZml4ZWQgdHJhbnNmb3JtLlxuICAgICAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD10cmFuc2Zvcm1zMmRcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBub1ByZWZpeCA9IGQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgICAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgICAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgICAgIF07XG4gICAgICAgIHBhcnNlZC5zdHlsZSA9IHN0eWxlc1twYXJzZWQuZGlyXVtwYXJzZWQub3J0XTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lID0gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lICYmIGdldFN1cHBvcnRzUGFzc2l2ZSgpO1xuICAgICAgICAvLyBBbGwgdmFyaWFibGVzIGxvY2FsIHRvICdzY29wZScgYXJlIHByZWZpeGVkIHdpdGggJ3Njb3BlXydcbiAgICAgICAgLy8gU2xpZGVyIERPTSBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB2YXIgc2NvcGVfQmFzZTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgIHZhciBzY29wZV9Db25uZWN0cztcbiAgICAgICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgICAgIHZhciBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgLy8gU2xpZGVyIHN0YXRlIHZhbHVlc1xuICAgICAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICB2YXIgc2NvcGVfVmFsdWVzID0gW107XG4gICAgICAgIHZhciBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9IDA7XG4gICAgICAgIHZhciBzY29wZV9FdmVudHMgPSB7fTtcbiAgICAgICAgLy8gRG9jdW1lbnQgTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50ID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Cb2R5ID0gc2NvcGVfRG9jdW1lbnQuYm9keTtcbiAgICAgICAgLy8gRm9yIGhvcml6b250YWwgc2xpZGVycyBpbiBzdGFuZGFyZCBsdHIgZG9jdW1lbnRzLFxuICAgICAgICAvLyBtYWtlIC5ub1VpLW9yaWdpbiBvdmVyZmxvdyB0byB0aGUgbGVmdCBzbyB0aGUgZG9jdW1lbnQgZG9lc24ndCBzY3JvbGwuXG4gICAgICAgIHZhciBzY29wZV9EaXJPZmZzZXQgPSBzY29wZV9Eb2N1bWVudC5kaXIgPT09IFwicnRsXCIgfHwgb3B0aW9ucy5vcnQgPT09IDEgPyAwIDogMTAwO1xuICAgICAgICAvLyBDcmVhdGVzIGEgbm9kZSwgYWRkcyBpdCB0byB0YXJnZXQsIHJldHVybnMgdGhlIG5ldyBub2RlLlxuICAgICAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgYSBvcmlnaW4gdG8gdGhlIGJhc2VcbiAgICAgICAgZnVuY3Rpb24gYWRkT3JpZ2luKGJhc2UsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGROb2RlVG8ob3JpZ2luLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlKTtcbiAgICAgICAgICAgIGFkZE5vZGVUbyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsIFN0cmluZyhoYW5kbGVOdW1iZXIpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcbiAgICAgICAgICAgICAgICAvLyAwID0gZm9jdXNhYmxlIGFuZCByZWFjaGFibGVcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzXzEgPSBvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc18xW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzbGlkZXJcIik7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1vcmllbnRhdGlvblwiLCBvcHRpb25zLm9ydCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYW5kbGVOdW1iZXIgPT09IG9wdGlvbnMuaGFuZGxlcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluc2VydCBub2RlcyBmb3IgY29ubmVjdCBlbGVtZW50c1xuICAgICAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xuICAgICAgICAgICAgaWYgKCFhZGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgaGFuZGxlcyB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGNvbm5lY3RPcHRpb25zLCBiYXNlKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zWzBdKSk7XG4gICAgICAgICAgICAvLyBbOjo6Ok89PT09Tz09PT1PPT09PV1cbiAgICAgICAgICAgIC8vIGNvbm5lY3RPcHRpb25zID0gWzAsIDEsIDEsIDFdXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gS2VlcCBhIGxpc3Qgb2YgYWxsIGFkZGVkIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5wdXNoKGFkZE9yaWdpbihiYXNlLCBpKSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVyc1tpXSA9IGk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1tpICsgMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIGEgc2luZ2xlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgY2xhc3NlcyBhbmQgZGF0YSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub3J0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52ZXJ0aWNhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGV4dERpcmVjdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoYWRkVGFyZ2V0KS5kaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAodGV4dERpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25SdGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvbkx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvb2x0aXAoaGFuZGxlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy50b29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhoYW5kbGUuZmlyc3RDaGlsZCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvb2x0aXApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2xpZGVyRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERpc2FibGUgdGhlIHNsaWRlciBkcmFnZ2luZyBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgIGZ1bmN0aW9uIGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU9yaWdpbi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUb29sdGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXG4gICAgICAgIGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIC8vIFRvb2x0aXBzIGFyZSBhZGRlZCB3aXRoIG9wdGlvbnMudG9vbHRpcHMgaW4gb3JpZ2luYWwgb3JkZXIuXG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlX1Rvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXS50byh1bmVuY29kZWRbaGFuZGxlTnVtYmVyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhcmlhKCkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCwgdGFwLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMTAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdHRlZCB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhvcHRpb25zLmFyaWFGb3JtYXQudG8odW5lbmNvZGVkW2luZGV4XSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgdG8gc2xpZGVyIHJhbmdlIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWluKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBtYXggPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWF4KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBub3cgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobm93KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLCBtaW4pO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1heFwiLCBtYXgpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRHcm91cChwaXBzKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5SYW5nZSB8fCBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0ueFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGlwcy52YWx1ZXMgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIDAgLSAxMDAgaW4gJ2NvdW50JyBwYXJ0cy5cbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwaXBzLnZhbHVlcyAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHNwcmVhZCA9IDEwMCAvIGludGVydmFsO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBMaXN0IHRoZXNlIHBhcnRzIGFuZCBoYXZlIHRoZW0gaGFuZGxlZCBhcyAncG9zaXRpb25zJy5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW50ZXJ2YWxdID0gaW50ZXJ2YWwgKiBzcHJlYWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKDEwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UodmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Qb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXAgYWxsIHBlcmNlbnRhZ2VzIHRvIG9uLXJhbmdlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZShwaXBzLnZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG11c3QgYmUgc3RlcHBlZCwgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgcGVyY2VudGFnZSBmaXJzdC5cbiAgICAgICAgICAgICAgICBpZiAocGlwcy5zdGVwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHZhbHVlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBjYW4gc2ltcGx5IHVzZSB0aGUgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTsgLy8gcGlwcy5tb2RlID0gbmV2ZXJcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXBUb1JhbmdlKHZhbHVlcywgc3RlcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzdGVwcGVkID8gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVNwcmVhZChwaXBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzYWZlSW5jcmVtZW50KHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBmbG9hdGluZyBwb2ludCB2YXJpYW5jZSBieSBkcm9wcGluZyB0aGUgc21hbGxlc3QgZGVjaW1hbCBwbGFjZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcigodmFsdWUgKyBpbmNyZW1lbnQpLnRvRml4ZWQoNykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ2V0R3JvdXAocGlwcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXhlcyA9IHt9O1xuICAgICAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB2YXIgbGFzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsW3Njb3BlX1NwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgaWdub3JlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcHJldlBjdCA9IDA7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBncm91cCwgc29ydCBpdCBhbmQgZmlsdGVyIGF3YXkgYWxsIGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICBncm91cCA9IHVuaXF1ZShncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGdyb3VwWzBdICE9PSBmaXJzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC51bnNoaWZ0KGZpcnN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGlrZXdpc2UgZm9yIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgICAgIGlmIChncm91cFtncm91cC5sZW5ndGggLSAxXSAhPT0gbGFzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGxhc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVMYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBsb3dlciArIHVwcGVyIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaCA9IGdyb3VwW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BjdDtcbiAgICAgICAgICAgICAgICB2YXIgcGN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgcGN0UG9zO1xuICAgICAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNTdGVwcyA9IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVzaW5nICdzdGVwcycgbW9kZSwgdXNlIHRoZSBwcm92aWRlZCBzdGVwcy5cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlJ2xsIHN0ZXAgb24gdG8gdGhlIG5leHQgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cbiAgICAgICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IGhpZ2ggLSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGhpZ2ggaXMgdW5kZWZpbmVkIHdlIGFyZSBhdCB0aGUgbGFzdCBzdWJyYW5nZS4gTWFrZSBzdXJlIGl0IGl0ZXJhdGVzIG9uY2UgKCMxMDg4KVxuICAgICAgICAgICAgICAgIGlmIChoaWdoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaCA9IGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHN0ZXAgaXNuJ3QgMCwgd2hpY2ggd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCAoIzY1NClcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIGFsbCBzdGVwcyBpbiB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkgPSBzYWZlSW5jcmVtZW50KGksIHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcGVyY2VudGFnZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzaXplIGZvciB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIG5ld1BjdCA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcoaSk7XG4gICAgICAgICAgICAgICAgICAgIHBjdERpZmZlcmVuY2UgPSBuZXdQY3QgLSBwcmV2UGN0O1xuICAgICAgICAgICAgICAgICAgICBzdGVwcyA9IHBjdERpZmZlcmVuY2UgLyAocGlwcy5kZW5zaXR5IHx8IDEpO1xuICAgICAgICAgICAgICAgICAgICByZWFsU3RlcHMgPSBNYXRoLnJvdW5kKHN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyByYXRpbyByZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgcGVyY2VudGFnZS1zcGFjZSBhIHBvaW50IGluZGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBSb3VuZCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgdG8gYW4gZXZlbiBudW1iZXIsIHRoZW4gZGl2aWRlIGJ5IHR3b1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBzcHJlYWQgdGhlIG9mZnNldCBvbiBib3RoIHNpZGVzIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXZpZGUgYWxsIHBvaW50cyBldmVubHksIGFkZGluZyB0aGUgY29ycmVjdCBudW1iZXIgdG8gdGhpcyBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHVwIHRvIDw9IHNvIHRoYXQgMTAwJSBnZXRzIGEgcG9pbnQsIGV2ZW50IGlmIGlnbm9yZUxhc3QgaXMgc2V0LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKHEgPSAxOyBxIDw9IHJlYWxTdGVwczsgcSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW8gYmV0d2VlbiB0aGUgcm91bmRlZCB2YWx1ZSBhbmQgdGhlIGFjdHVhbCBzaXplIG1pZ2h0IGJlIH4xJSBvZmYuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBwZXJjZW50YWdlIG9mZnNldCBieSB0aGUgbnVtYmVyIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyIHN1YnJhbmdlLiBkZW5zaXR5ID0gMSB3aWxsIHJlc3VsdCBpbiAxMDAgcG9pbnRzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVsbCByYW5nZSwgMiBmb3IgNTAsIDQgZm9yIDI1LCBldGMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwY3RQb3MgPSBwcmV2UGN0ICsgcSAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1twY3RQb3MudG9GaXhlZCg1KV0gPSBbc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHBjdFBvcyksIDBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGdyb3VwLmluZGV4T2YoaSkgPiAtMSA/IGV4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZSA6IGlzU3RlcHMgPyBleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWUgOiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZm9yY2UgdGhlICdpZ25vcmVGaXJzdCcgb3B0aW9uIGJ5IG92ZXJ3cml0aW5nIHRoZSB0eXBlIGZvciAwLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGlnbm9yZUZpcnN0ICYmIGkgIT09IGhpZ2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlICd0eXBlJyBvZiB0aGlzIHBvaW50LiAwID0gcGxhaW4sIDEgPSByZWFsIHZhbHVlLCAyID0gc3RlcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbbmV3UGN0LnRvRml4ZWQoNSldID0gW2ksIHR5cGVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgcHJldlBjdCA9IG5ld1BjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXJGdW5jLCBmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWIsXG4gICAgICAgICAgICAgICAgX2EpO1xuICAgICAgICAgICAgdmFyIG1hcmtlclNpemVDbGFzc2VzID0gKF9iID0ge30sXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclN1YixcbiAgICAgICAgICAgICAgICBfYik7XG4gICAgICAgICAgICB2YXIgdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlSG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlVmVydGljYWxdO1xuICAgICAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMub3J0ID09PSAwID8gb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNIb3Jpem9udGFsIDogb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNWZXJ0aWNhbCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc2VzKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gc291cmNlID09PSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWVudGF0aW9uQ2xhc3NlcyA9IGEgPyB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA6IG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcztcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZUNsYXNzZXMgPSBhID8gdmFsdWVTaXplQ2xhc3NlcyA6IG1hcmtlclNpemVDbGFzc2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBcIiBcIiArIG9yaWVudGF0aW9uQ2xhc3Nlc1tvcHRpb25zLm9ydF0gKyBcIiBcIiArIHNpemVDbGFzc2VzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkU3ByZWFkKG9mZnNldCwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgdHlwZSA9IGZpbHRlckZ1bmMgPyBmaWx0ZXJGdW5jKHZhbHVlLCB0eXBlKSA6IHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuUGlwc1R5cGUuTm9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG1hcmtlciBmb3IgZXZlcnkgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA+IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IFN0cmluZyhmb3JtYXR0ZXIudG8odmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHBlbmQgYWxsIHBvaW50cy5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgYWRkU3ByZWFkKG9mZnNldCwgc3ByZWFkW29mZnNldF1bMF0sIHNwcmVhZFtvZmZzZXRdWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlUGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9QaXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9QaXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwaXBzKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNjY5XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB2YXIgc3ByZWFkID0gZ2VuZXJhdGVTcHJlYWQocGlwcyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gcGlwcy5maWx0ZXI7XG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gcGlwcy5mb3JtYXQgfHwge1xuICAgICAgICAgICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBzY29wZV9UYXJnZXQuYXBwZW5kQ2hpbGQoYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlciwgZm9ybWF0KSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cbiAgICAgICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgYWx0ID0gKFwib2Zmc2V0XCIgKyBbXCJXaWR0aFwiLCBcIkhlaWdodFwiXVtvcHRpb25zLm9ydF0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlciBmb3IgYXR0YWNoaW5nIGV2ZW50cyB0cm91Z2ggYSBwcm94eS5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYSBub2RlLCBub3QgYSBub2RlTGlzdFxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHJlamVjdGVkLCBsZWF2aW5nIHRoZSBzbGlkZXIgXCJzdHVja1wiIHRvIHRoZSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbiwgYnV0IHRoYXQgYWxsb3dzIHBhbm5pbmcsIHdoaWNoIGJyZWFrc1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzUGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxuICAgICAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChbZXZlbnROYW1lLCBtZXRob2RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSB0eXBlLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgICAgIGlmIChlLnR5cGUuaW5kZXhPZihcIk1TUG9pbnRlclwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb25lb3VzIGV2ZW50cyBzZWVtIHRvIGJlIHBhc3NlZCBpbiBvY2Nhc2lvbmFsbHkgb24gaU9TL2lQYWRPUyBhZnRlciB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiICYmICFlLmJ1dHRvbnMgJiYgIWUudG91Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIG9uZSBoYW5kbGUgc2hvdWxkIGJlIGNvbmNlcm5lZCBhYm91dCBpcyB0aGUgdG91Y2hlcyB0aGF0IG9yaWdpbmF0ZWQgb24gdG9wIG9mIGl0LlxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgIHZhciBpc1RvdWNoT25UYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2tUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgdG91Y2hzdGFydCBldmVudHMsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIHN0aWxsIG5vIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYICsgcGFnZU9mZnNldC54O1xuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0O1xuICAgICAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoY2FsY1BvaW50KSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgICAgICAvLyBDbGFtcCBwcm9wb3NhbCBiZXR3ZWVuIDAlIGFuZCAxMDAlXG4gICAgICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgICAgICBwcm9wb3NhbCA9IGxpbWl0KHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBoYW5kbGUgY2xvc2VzdCB0byBhIGNlcnRhaW4gcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZURpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQXRFZGdlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID09PSAxMDAgJiYgc21hbGxlc3REaWZmZXJlbmNlID09PSAxMDA7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXJBZnRlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8PSBzbWFsbGVzdERpZmZlcmVuY2UgJiYgY2xpY2tlZFBvc2l0aW9uID4gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TGVhdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxuICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICAgICAgdmFyIG1vdmVtZW50ID0gKG9wdGlvbnMuZGlyID8gLTEgOiAxKSAqIChldmVudC5jYWxjUG9pbnQgLSBkYXRhLnN0YXJ0Q2FsY1BvaW50KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMsIGRhdGEuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRhdGEuaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXG4gICAgICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBoYW5kbGUgYXMgJ2FjdGl2ZScgc28gaXQgY2FuIGJlIHN0eWxlZC5cbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IHRhcmdldCBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgb3JpZ2luYWwgb25lIHNvIHRoYXQgd2Uga2VlcFxuICAgICAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgc3RhcnRDYWxjUG9pbnQ6IGV2ZW50LmNhbGNQb2ludCxcbiAgICAgICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZW5kRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLmVuZCwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudEVuZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3V0RXZlbnQgPSBhdHRhY2hFdmVudChcIm1vdXNlb3V0XCIsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRMZWF2ZSwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBwdXNoZWQgdGhlIGxpc3RlbmVycyBpbiB0aGUgbGlzdGVuZXIgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAgICAgLy8gbWVhbmluZyB0aGUgb25seSBob2xkb3V0IGlzIGlPUyBTYWZhcmkuIFRoaXMgZG9lc24ndCBtYXR0ZXI6IHRleHQgc2VsZWN0aW9uIGlzbid0IHRyaWdnZXJlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzdGFydFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgICAgICAvLyBUYWNrbGUgdGhlIGNhc2UgdGhhdCBhbGwgaGFuZGxlcyBhcmUgJ2Rpc2FibGVkJy5cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcHJvcG9zYWwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50U3RhcnQoZXZlbnQsIHsgaGFuZGxlTnVtYmVyczogW2hhbmRsZU51bWJlcl0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZXMgYSAnaG92ZXInIGV2ZW50IGZvciBhIGhvdmVyZWQgbW91c2UvcGVuIHBvc2l0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICAgICAgdmFyIGxhcmdlU3RlcEtleXMgPSBbXCJQYWdlRG93blwiLCBcIlBhZ2VVcFwiXTtcbiAgICAgICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYW4gcmlnaHQtdG8tbGVmdCBzbGlkZXIsIHRoZSBsZWZ0IGFuZCByaWdodCBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMub3J0ICYmICFvcHRpb25zLmRpcikge1xuICAgICAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGFyZ2VTdGVwS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKFwiQXJyb3dcIiwgXCJcIik7XG4gICAgICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICAgICAgdmFyIGlzRG93biA9IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF0gfHwgaXNMYXJnZURvd247XG4gICAgICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc01heCA9IGtleSA9PT0gZWRnZUtleXNbMV07XG4gICAgICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRvO1xuICAgICAgICAgICAgaWYgKGlzVXAgfHwgaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2VVcCB8fCBpc0xhcmdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoaXNEb3duID8gLTEgOiAxKSAqIHN0ZXA7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01heCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIHRvIHNldmVyYWwgc2xpZGVyIHBhcnRzLlxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKCFiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLnRhcCkge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlIGhvdmVyIGV2ZW50c1xuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgICAgICBob3ZlcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgcmFuZ2UgZHJhZ2dhYmxlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgPT09IGZhbHNlIHx8IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUJlZm9yZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUFmdGVyID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVzVG9EcmFnID0gW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IFtpbmRleCAtIDEsIGluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoY29ubmVjdCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHJhbmdlIGlzIGZpeGVkLCB0aGUgZW50aXJlIHJhbmdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBkcmFnZ2VkIGJ5IHRoZSBoYW5kbGVzLiBUaGUgaGFuZGxlIGluIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBvcmlnaW4gd2lsbCBwcm9wYWdhdGUgdGhlIHN0YXJ0IGV2ZW50IHVwd2FyZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGl0IG5lZWRzIHRvIGJlIGJvdW5kIG1hbnVhbGx5IG9uIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQmVmb3JlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUFmdGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXNUb0RyYWcgPSBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IHNjb3BlX0hhbmRsZU51bWJlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBldmVudEhvbGRlciwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6IGhhbmRsZXNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogaGFuZGxlTnVtYmVyc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCBib3VuZCBpcyAndXBkYXRlLCcgZmlyZSBpdCBpbW1lZGlhdGVseSBmb3IgYWxsIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5hbWVzcGFjZWRFdmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRlbGV0ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgZXZlbnQgaWYgaW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5kZXgsIDAgb3IgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWZ0IG9mZnNldCBvZiB0aGUgaGFuZGxlLCBpbiByZWxhdGlvbiB0byB0aGUgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZTtcbiAgICAgICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgIW9wdGlvbnMuZXZlbnRzLnVuY29uc3RyYWluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubWFyZ2luLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGhhbmRsZXMgd291bGQgYmUgdW5tb3ZhYmxlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubGltaXQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZWRnZXMgb2YgdGhlIHNsaWRlci4gUGFkZGluZyBtdXN0IGJlID4gMC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgwLCBvcHRpb25zLnBhZGRpbmdbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XG4gICAgICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXG4gICAgICAgICAgICB0byA9IGxpbWl0KHRvKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBoYW5kbGUgY2FuJ3QgbW92ZVxuICAgICAgICAgICAgaWYgKHRvID09PSByZWZlcmVuY2VbaGFuZGxlTnVtYmVyXSAmJiAhZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlcyBzbGlkZXIgb3JpZW50YXRpb24gdG8gY3JlYXRlIENTUyBydWxlcy4gYSA9IGJhc2UgdmFsdWU7XG4gICAgICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcbiAgICAgICAgICAgIHZhciBvID0gb3B0aW9ucy5vcnQ7XG4gICAgICAgICAgICByZXR1cm4gKG8gPyBhIDogdikgKyBcIiwgXCIgKyAobyA/IHYgOiBhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXG4gICAgICAgIC8vIChib29sLCAlIHRvIG1vdmUsIFslIHdoZXJlIGhhbmRsZSBzdGFydGVkLCAuLi5dLCBbaW5kZXggaW4gc2NvcGVfSGFuZGxlcywgLi4uXSlcbiAgICAgICAgZnVuY3Rpb24gbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgbG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzLCBjb25uZWN0KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBTdG9yZSBmaXJzdCBoYW5kbGUgbm93LCBzbyB3ZSBzdGlsbCBoYXZlIGl0IGluIGNhc2UgaGFuZGxlTnVtYmVycyBpcyByZXZlcnNlZFxuICAgICAgICAgICAgdmFyIGZpcnN0SGFuZGxlID0gaGFuZGxlTnVtYmVyc1swXTtcbiAgICAgICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAgICAgLy8gQ29weSBoYW5kbGVOdW1iZXJzIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgZGF0YXNldFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAgICAgLy8gSWYgdGhhdCBvbmUgY2FuJ3QgbW92ZSB0aGUgc2Vjb25kIGNhbid0IGVpdGhlci5cbiAgICAgICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgb25lIG9mIHRoZSBoYW5kbGVzIGNhbid0IG1vdmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gdG8gLSBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVzaW5nIG9uZSBoYW5kbGUsIGNoZWNrIGJhY2t3YXJkIEFORCBmb3J3YXJkXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU3RlcCAyOiBUcnkgdG8gc2V0IHRoZSBoYW5kbGVzIHdpdGggdGhlIGZvdW5kIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBsb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dKSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImRyYWdcIiwgZmlyc3RIYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIGEgcm91bmRpbmcgYnVnIGluIENocm9tZSBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGltcGxlbWVudCB0aGlzIGZlYXR1cmVcbiAgICAgICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gYSAtIGIgOiBhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgdmFsdWUgdG8gdGhlIHNsaWRlciBzdGVwcGluZy9yYW5nZS5cbiAgICAgICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNsYXRpb24gKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlciArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMgYmVmb3JlIHRoZSBzbGlkZXIgbWlkZGxlIGFyZSBzdGFja2VkIGxhdGVyID0gaGlnaGVyLFxuICAgICAgICAvLyBIYW5kbGVzIGFmdGVyIHRoZSBtaWRkbGUgbGF0ZXIgaXMgbG93ZXJcbiAgICAgICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgICAgICBmdW5jdGlvbiBzZXRaaW5kZXgoKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHZhciB6SW5kZXggPSAzICsgKHNjb3BlX0hhbmRsZXMubGVuZ3RoICsgZGlyICogaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGUuekluZGV4ID0gU3RyaW5nKHpJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHN1Z2dlc3RlZCB2YWx1ZXMgYW5kIGFwcGx5IG1hcmdpbiwgc3RlcC5cbiAgICAgICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIGlmICghZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3QoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB1c2UgdHdvIHJ1bGVzOlxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBBcyB0aGUgZWxlbWVudCBoYXMgYSB3aWR0aCBvZiAxMDAlLCBhIHRyYW5zbGF0aW9uIG9mIDEwMCUgaXMgZXF1YWwgdG8gMTAwJSBvZiB0aGUgcGFyZW50ICgubm9VaS1iYXNlKVxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgdmFyIHNjYWxlUnVsZSA9IFwic2NhbGUoXCIgKyBpblJ1bGVPcmRlcihjb25uZWN0V2lkdGggLyAxMDAsIFwiMVwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgd2l0aCBudWxsIGluZGljYXRlcyBhbiAnaWdub3JlJy5cbiAgICAgICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLmZvcm1hdC5mcm9tKHRvKTtcbiAgICAgICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBhc0FycmF5KGlucHV0KTtcbiAgICAgICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpcmVTZXRFdmVudDtcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwYXNzLCB3aXRob3V0IGxvb2tBaGVhZCBidXQgd2l0aCBsb29rQmFja3dhcmQuIFZhbHVlcyBhcmUgc2V0IGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgICAgIGlmIChpc0luaXQgJiYgc2NvcGVfU3BlY3RydW0uaGFzTm9TaXplKCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gaGFuZGxlTnVtYmVyICogc3BhY2VfMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1toYW5kbGVOdW1iZXJdICE9PSBudWxsICYmIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHZhbHVlIGZvciBhIHNpbmdsZSBoYW5kbGVcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gTnVtYmVyKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIHNuYXBwZWQsIGRpcmVjdGx5IHVzZSBkZWZpbmVkIHN0ZXAgdmFsdWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIG5leHQgdmFsdWUgaW4gdGhpcyBzdGVwIG1vdmVzIGludG8gdGhlIG5leHQgc3RlcCxcbiAgICAgICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgKyBpbmNyZW1lbnQgPiBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdywgaWYgYXQgdGhlIHNsaWRlciBlZGdlcywgdGhlcmUgaXMgbm8gaW4vZGVjcmVtZW50XG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAgICAgLy8gUm91bmQgcGVyICMzOTFcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIHNpemUgZm9yIHRoZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgLy8gU3BlY3RydW0gaXMgY3JlYXRlZCB1c2luZyB0aGUgcmFuZ2UsIHNuYXAsIGRpcmVjdGlvbiBhbmQgc3RlcCBvcHRpb25zLlxuICAgICAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciB2ID0gdmFsdWVHZXQoKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgICAgICBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgICAgIFwidG9vbHRpcHNcIlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIE9ubHkgY2hhbmdlIG9wdGlvbnMgdGhhdCB3ZSdyZSBhY3R1YWxseSBwYXNzZWQgdG8gdXBkYXRlLlxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHVuZGVmaW5lZC4gbnVsbCByZW1vdmVzIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gTG9hZCBuZXcgb3B0aW9ucyBpbnRvIHRoZSBzbGlkZXIgc3RhdGVcbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVdID0gbmV3T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3BlX1NwZWN0cnVtID0gbmV3T3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgICAgIC8vIExpbWl0LCBtYXJnaW4gYW5kIHBhZGRpbmcgZGVwZW5kIG9uIHRoZSBzcGVjdHJ1bSBidXQgYXJlIHN0b3JlZCBvdXRzaWRlIG9mIGl0LiAoIzY3NylcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgICAgICBvcHRpb25zLmxpbWl0ID0gbmV3T3B0aW9ucy5saW1pdDtcbiAgICAgICAgICAgIG9wdGlvbnMucGFkZGluZyA9IG5ld09wdGlvbnMucGFkZGluZztcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0b29sdGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSBjdXJyZW50IHBvc2l0aW9uaW5nIHNvIHZhbHVlU2V0IGZvcmNlcyBhbiB1cGRhdGUuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhbHVlU2V0KGlzU2V0KG9wdGlvbnNUb1VwZGF0ZS5zdGFydCkgPyBvcHRpb25zVG9VcGRhdGUuc3RhcnQgOiB2LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2xpZGVyKCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGVsZW1lbnQsIGluaXRpYWxpemUgSFRNTCBhbmQgc2V0IGNsYXNzZXMuXG4gICAgICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cbiAgICAgICAgICAgIHNjb3BlX0Jhc2UgPSBhZGRTbGlkZXIoc2NvcGVfVGFyZ2V0KTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRzKG9wdGlvbnMuY29ubmVjdCwgc2NvcGVfQmFzZSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdXNlciBldmVudHMuXG4gICAgICAgICAgICBiaW5kU2xpZGVyRXZlbnRzKG9wdGlvbnMuZXZlbnRzKTtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcHVibGljIHZhbHVlIG1ldGhvZCB0byBzZXQgdGhlIHN0YXJ0IHZhbHVlcy5cbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyaWEoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXR1cFNsaWRlcigpO1xuICAgICAgICB2YXIgc2NvcGVfU2VsZiA9IHtcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgICAgICBzdGVwczogZ2V0TmV4dFN0ZXBzLFxuICAgICAgICAgICAgb246IGJpbmRFdmVudCxcbiAgICAgICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICBnZXQ6IHZhbHVlR2V0LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZVNldCxcbiAgICAgICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXG4gICAgICAgICAgICByZXNldDogdmFsdWVSZXNldCxcbiAgICAgICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIF9fbW92ZUhhbmRsZXM6IGZ1bmN0aW9uICh1cHdhcmQsIHByb3Bvc2FsLCBoYW5kbGVOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZV9UYXJnZXQsXG4gICAgICAgICAgICByZW1vdmVQaXBzOiByZW1vdmVQaXBzLFxuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHM6IHJlbW92ZVRvb2x0aXBzLFxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvb2x0aXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXBzOiBwaXBzIC8vIElzc3VlICM1OTRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1NlbGY7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHRhcmdldCwgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfVxuICAgIHZhciBub3Vpc2xpZGVyID0ge1xuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCBjbGFzc2VzLCBhbGxvd3MgZ2xvYmFsIGNoYW5nZXMuXG4gICAgICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgY3JlYXRlOiBpbml0aWFsaXplXG4gICAgfTtcblxuICAgIGV4cG9ydHMuY3JlYXRlID0gaW5pdGlhbGl6ZTtcbiAgICBleHBvcnRzLmNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzO1xuICAgIGV4cG9ydHNbJ2RlZmF1bHQnXSA9IG5vdWlzbGlkZXI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL251bGwuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3kuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RyZWUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5TdGFydFBhZ2UgPSB2b2lkIDA7XHJcbmNvbnN0IHRveU1haW5QYWdlXzEgPSByZXF1aXJlKFwiLi4vdG95cy90b3lNYWluUGFnZVwiKTtcclxuY2xhc3MgU3RhcnRQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzdGFydEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdGFydEJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydC1iYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgY29uc3QgaW50ZXJmYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGludGVyZmFjZVdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnRlcmZhY2Utd3JhcHBlcicpO1xyXG4gICAgICAgIGNvbnN0IGdyZWF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBncmVhdGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dyZWF0aW5nJyk7XHJcbiAgICAgICAgZ3JlYXRpbmcudGV4dENvbnRlbnQgPSAn0J/QvtC80L7Qs9C40YLQtSDQsdCw0LHRg9GI0LrQtSDQvdCw0YDRj9C00LjRgtGMINC10LvQutGDJztcclxuICAgICAgICBjb25zdCBzdGFydFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdGFydFdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydC13cmFwcGVyJyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc3RhcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdGFydCcpO1xyXG4gICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ9Cd0LDRh9Cw0YLRjCc7XHJcbiAgICAgICAgaW50ZXJmYWNlV3JhcHBlci5hcHBlbmRDaGlsZChncmVhdGluZyk7XHJcbiAgICAgICAgc3RhcnRCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGludGVyZmFjZVdyYXBwZXIpO1xyXG4gICAgICAgIHN0YXJ0V3JhcHBlci5hcHBlbmRDaGlsZChzdGFydCk7XHJcbiAgICAgICAgc3RhcnRCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHN0YXJ0V3JhcHBlcik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHN0YXJ0QmFja2dyb3VuZCk7XHJcbiAgICAgICAgc3RhcnRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmJ1dHRvbkhhbmRsZXIoKTsgfSk7XHJcbiAgICAgICAgc3RhcnRCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmJ1dHRvbkhhbmRsZXIoKTsgfSk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGJ1dHRvbkhhbmRsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgY29uc3QgdG95UGFnZSA9IG5ldyB0b3lNYWluUGFnZV8xLlRveVBhZ2UoJ21haW4nKTtcclxuICAgICAgICB0b3lQYWdlLnJlbmRlcigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RhcnRQYWdlID0gU3RhcnRQYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNhcmRzID0gdm9pZCAwO1xyXG4vLyBpbXBvcnQgJy4uL251bGwuc2Nzcyc7XHJcbnJlcXVpcmUoXCIuL2NhcmQuc2Nzc1wiKTtcclxuY29uc3QgY2FyZF8xID0gcmVxdWlyZShcIi4vY2FyZFwiKTtcclxuY2xhc3MgQ2FyZHMge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICByZW5kZXJOdWxsKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25fbmV3X3llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1uZXcteWVhcicpO1xyXG4gICAgICAgIGNvbGxlY3Rpb25fbmV3X3llYXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbiAgICByZW5kZXJUb3lzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25fbmV3X3llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbi1uZXcteWVhcicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyTnVsbCgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRveSA9IG5ldyBjYXJkXzEuQ2FyZChpdGVtKTtcclxuICAgICAgICAgICAgY29sbGVjdGlvbl9uZXdfeWVhci5hcHBlbmRDaGlsZCh0b3kucmVuZGVyVG95KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uX25ld195ZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tbmV3LXllYXInKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhcmRzID0gQ2FyZHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2FyZCA9IHZvaWQgMDtcclxuY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgLy8gc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvdW50ID0gZGF0YS5jb3VudDtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gZGF0YS5mYXZvcml0ZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5udW0gPSBkYXRhLm51bTtcclxuICAgICAgICB0aGlzLnNoYXBlID0gZGF0YS5zaGFwZTtcclxuICAgICAgICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XHJcbiAgICAgICAgdGhpcy55ZWFyID0gZGF0YS55ZWFyO1xyXG4gICAgICAgIHRoaXMudGhl0KFob3NlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVG95KCkge1xyXG4gICAgICAgIGNvbnN0IHRveUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b3lDYXJkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRveUNhcmQuY2xhc3NMaXN0LmFkZChgdG95Q2FyZGApO1xyXG4gICAgICAgIHRveUNhcmQuY2xhc3NMaXN0LmFkZChgdG95Q2FyZCR7dGhpcy5udW19YCk7XHJcbiAgICAgICAgY29uc3QgbmFtZVRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5hbWVUb3kuY2xhc3NMaXN0LmFkZChgbmFtZVRveWApO1xyXG4gICAgICAgIGNvbnN0IG5hbWVUb3lfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgbmFtZVRveV9uYW1lLmNsYXNzTGlzdC5hZGQoYG5hbWVUb3lfX25hbWVgKTtcclxuICAgICAgICBjb25zdCBuYW1lVG95X3BpYyA9IG5ldyBJbWFnZTtcclxuICAgICAgICBuYW1lVG95X3BpYy5jbGFzc0xpc3QuYWRkKGBuYW1lVG95X19waWNgKTtcclxuICAgICAgICBuYW1lVG95X3BpYy5zcmMgPSBgLi9hc3NldHMvdG95cy8ke3RoaXMubnVtfS5wbmdgO1xyXG4gICAgICAgIG5hbWVUb3lfcGljLmFsdCA9IGAke3RoaXMubnVtfS5wbmdgO1xyXG4gICAgICAgIGNvbnN0IGNvdW50VG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY291bnRUb3kuY2xhc3NMaXN0LmFkZChgY291bnRUb3lgKTtcclxuICAgICAgICBjb25zdCBjb3VudFRveV9jb3VudF9zdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY291bnRUb3lfY291bnRfc3RhdGljLmNsYXNzTGlzdC5hZGQoYGNvdW50VG95X19jb3VudC1zdGF0aWNgKTtcclxuICAgICAgICBjb25zdCBjb3VudFRveV9jb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb3VudFRveV9jb3VudC5jbGFzc0xpc3QuYWRkKGBjb3VudFRveV9fY291bnRgKTtcclxuICAgICAgICBjb25zdCB5ZWFyVG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeWVhclRveS5jbGFzc0xpc3QuYWRkKGB5ZWFyVG95YCk7XHJcbiAgICAgICAgY29uc3QgeWVhclRveV95ZWFyX3N0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB5ZWFyVG95X3llYXJfc3RhdGljLmNsYXNzTGlzdC5hZGQoYHllYXJUb3lfX3llYXItc3RhdGljYCk7XHJcbiAgICAgICAgY29uc3QgeWVhclRveV95ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHllYXJUb3lfeWVhci5jbGFzc0xpc3QuYWRkKGB5ZWFyVG95X195ZWFyYCk7XHJcbiAgICAgICAgY29uc3Qgc2hhcGVUb3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaGFwZVRveS5jbGFzc0xpc3QuYWRkKGBzaGFwZVRveWApO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlVG95X3NoYXBlX3N0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzaGFwZVRveV9zaGFwZV9zdGF0aWMuY2xhc3NMaXN0LmFkZChgc2hhcGVUb3lfX3NoYXBlLXN0YXRpY2ApO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlVG95X3NoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNoYXBlVG95X3NoYXBlLmNsYXNzTGlzdC5hZGQoYHNoYXBlVG95X19zaGFwZWApO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yVG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29sb3JUb3kuY2xhc3NMaXN0LmFkZChgY29sb3JUb3lgKTtcclxuICAgICAgICBjb25zdCBjb2xvclRveV9jb2xvcl9zdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29sb3JUb3lfY29sb3Jfc3RhdGljLmNsYXNzTGlzdC5hZGQoYGNvbG9yVG95X19jb2xvci1zdGF0aWNgKTtcclxuICAgICAgICBjb25zdCBjb2xvclRveV9jb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb2xvclRveV9jb2xvci5jbGFzc0xpc3QuYWRkKGBjb2xvclRveV9fY29sb3JgKTtcclxuICAgICAgICBjb25zdCBzaXplVG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2l6ZVRveS5jbGFzc0xpc3QuYWRkKGBzaXplVG95YCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVRveV9zaXplX3N0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzaXplVG95X3NpemVfc3RhdGljLmNsYXNzTGlzdC5hZGQoYHNpemVUb3lfX3NpemUtc3RhdGljYCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVRveV9zaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNpemVUb3lfc2l6ZS5jbGFzc0xpc3QuYWRkKGBzaXplVG95X19zaXplYCk7XHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVUb3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmYXZvcml0ZVRveS5jbGFzc0xpc3QuYWRkKGBmYXZvcml0ZVRveWApO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlVG95X2Zhdm9yaXRlX3N0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBmYXZvcml0ZVRveV9mYXZvcml0ZV9zdGF0aWMuY2xhc3NMaXN0LmFkZChgZmF2b3JpdGVUb3lfX2Zhdm9yaXRlLXN0YXRpY2ApO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlVG95X2Zhdm9yaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGZhdm9yaXRlVG95X2Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoYGZhdm9yaXRlVG95X19mYXZvcml0ZWApO1xyXG4gICAgICAgIG5hbWVUb3lfbmFtZS5pbm5lclRleHQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgICAgICBuYW1lVG95LmFwcGVuZENoaWxkKG5hbWVUb3lfbmFtZSk7XHJcbiAgICAgICAgbmFtZVRveS5hcHBlbmRDaGlsZChuYW1lVG95X3BpYyk7XHJcbiAgICAgICAgY291bnRUb3lfY291bnRfc3RhdGljLmlubmVyVGV4dCA9IGDQmtC+0LvQuNGH0LXRgdGC0LLQvjogJHt0aGlzLmNvdW50fWA7XHJcbiAgICAgICAgY291bnRUb3kuYXBwZW5kQ2hpbGQoY291bnRUb3lfY291bnRfc3RhdGljKTtcclxuICAgICAgICB5ZWFyVG95X3llYXJfc3RhdGljLmlubmVyVGV4dCA9IGDQk9C+0LQg0L/QvtC60YPQv9C60Lg6ICR7dGhpcy55ZWFyfWA7XHJcbiAgICAgICAgeWVhclRveS5hcHBlbmRDaGlsZCh5ZWFyVG95X3llYXJfc3RhdGljKTtcclxuICAgICAgICBzaGFwZVRveV9zaGFwZV9zdGF0aWMuaW5uZXJUZXh0ID0gYNCk0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6ICR7dGhpcy5zaGFwZX1gO1xyXG4gICAgICAgIHNoYXBlVG95LmFwcGVuZENoaWxkKHNoYXBlVG95X3NoYXBlX3N0YXRpYyk7XHJcbiAgICAgICAgY29sb3JUb3lfY29sb3Jfc3RhdGljLmlubmVyVGV4dCA9IGDQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDogJHt0aGlzLmNvbG9yfWA7XHJcbiAgICAgICAgY29sb3JUb3kuYXBwZW5kQ2hpbGQoY29sb3JUb3lfY29sb3Jfc3RhdGljKTtcclxuICAgICAgICBzaXplVG95X3NpemVfc3RhdGljLmlubmVyVGV4dCA9IGDQoNCw0LfQvNC10YAg0LjQs9GA0YPRiNC60Lg6ICR7dGhpcy5zaXplfWA7XHJcbiAgICAgICAgc2l6ZVRveS5hcHBlbmRDaGlsZChzaXplVG95X3NpemVfc3RhdGljKTtcclxuICAgICAgICBmYXZvcml0ZVRveV9mYXZvcml0ZV9zdGF0aWMuaW5uZXJUZXh0ID0gYNCb0Y7QsdC40LzQsNGPOiAke3RoaXMuZmF2b3JpdGV9YDtcclxuICAgICAgICBmYXZvcml0ZVRveS5hcHBlbmRDaGlsZChmYXZvcml0ZVRveV9mYXZvcml0ZV9zdGF0aWMpO1xyXG4gICAgICAgIHRveUNhcmQuYXBwZW5kQ2hpbGQobmFtZVRveSk7XHJcbiAgICAgICAgdG95Q2FyZC5hcHBlbmRDaGlsZChjb3VudFRveSk7XHJcbiAgICAgICAgdG95Q2FyZC5hcHBlbmRDaGlsZCh5ZWFyVG95KTtcclxuICAgICAgICB0b3lDYXJkLmFwcGVuZENoaWxkKHNoYXBlVG95KTtcclxuICAgICAgICB0b3lDYXJkLmFwcGVuZENoaWxkKGNvbG9yVG95KTtcclxuICAgICAgICB0b3lDYXJkLmFwcGVuZENoaWxkKHNpemVUb3kpO1xyXG4gICAgICAgIHRveUNhcmQuYXBwZW5kQ2hpbGQoZmF2b3JpdGVUb3kpO1xyXG4gICAgICAgIHRveUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNjaG9vc2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRoZdChaG9zZW4pXHJcbiAgICAgICAgICAgICAgICB0b3lDYXJkLmNsYXNzTGlzdC5hZGQoYNChaG9zZW5gKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdG95Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKGDQoWhvc2VuYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRveUNhcmQ7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBpc2Nob29zZW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRoZdChaG9zZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50aGXQoWhvc2VuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhl0KFob3NlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlclRveSgpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhcmQgPSBDYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLtChb2xvcldyYXAgPSB2b2lkIDA7XHJcbmNsYXNzINChb2xvcldyYXAge1xyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHIpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgO1xyXG4gICAgO1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3QgY29sb3JTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29sb3JTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb2xvci1zdGF0aWMnKTtcclxuICAgICAgICBjb2xvclN0YXRpYy50ZXh0Q29udGVudCA9ICfQptCy0LXRgic7XHJcbiAgICAgICAgY29uc3QgY29sb3JTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2xvclNldC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbG9yLXNldCcpO1xyXG4gICAgICAgIGNvbnN0IHdoaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd2hpdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aGl0ZScpO1xyXG4gICAgICAgIGNvbnN0IHllbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHllbGxvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3llbGxvdycpO1xyXG4gICAgICAgIGNvbnN0IHJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlZCcpO1xyXG4gICAgICAgIGNvbnN0IGJsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBibHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmx1ZScpO1xyXG4gICAgICAgIGNvbnN0IGdyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ3JlZW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdncmVlbicpO1xyXG4gICAgICAgIGNvbG9yU2V0LmFwcGVuZENoaWxkKHdoaXRlKTtcclxuICAgICAgICBjb2xvclNldC5hcHBlbmRDaGlsZCh5ZWxsb3cpO1xyXG4gICAgICAgIGNvbG9yU2V0LmFwcGVuZENoaWxkKHJlZCk7XHJcbiAgICAgICAgY29sb3JTZXQuYXBwZW5kQ2hpbGQoYmx1ZSk7XHJcbiAgICAgICAgY29sb3JTZXQuYXBwZW5kQ2hpbGQoZ3JlZW4pO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb2xvclN0YXRpYyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbG9yU2V0KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy7QoW9sb3JXcmFwID0g0KFvbG9yV3JhcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FZmZlY3RzQW5kU2VhY2hXcmFwID0gdm9pZCAwO1xyXG5jbGFzcyBFZmZlY3RzQW5kU2VhY2hXcmFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNvdW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc291bmQnKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZWFyY2hTZXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtc2V0Jyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZWFyY2guc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZWFyY2gtdG95cycpO1xyXG4gICAgICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc2VhcmNoJyk7XHJcbiAgICAgICAgc2VhcmNoLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAn0J/QvtC40YHQuicpO1xyXG4gICAgICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcclxuICAgICAgICBzZWFyY2guc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XHJcbiAgICAgICAgY29uc3QgbG91cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsb3VwZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvdXBlJyk7XHJcbiAgICAgICAgc2VhcmNoU2V0LmFwcGVuZENoaWxkKHNlYXJjaCk7XHJcbiAgICAgICAgc2VhcmNoU2V0LmFwcGVuZENoaWxkKGxvdXBlKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc291bmQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzZWFyY2hTZXQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkVmZmVjdHNBbmRTZWFjaFdyYXAgPSBFZmZlY3RzQW5kU2VhY2hXcmFwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkZhdm9yaXRlV3JhcCA9IHZvaWQgMDtcclxuY2xhc3MgRmF2b3JpdGVXcmFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZVN0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZmF2b3JpdGVTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYXZvcml0ZS1zdGF0aWMnKTtcclxuICAgICAgICBmYXZvcml0ZVN0YXRpYy50ZXh0Q29udGVudCA9ICfQotC+0LvRjNC60L4g0LvRjtCx0LjQvNGL0LUnO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBmYXZvcml0ZVNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zhdm9yaXRlLXNxdWFyZScpO1xyXG4gICAgICAgIGZhdm9yaXRlU3F1YXJlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIGZhdm9yaXRlU3F1YXJlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmYXZvcml0ZV9zcXVhcmUnKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZVNxdWFyZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGZhdm9yaXRlU3F1YXJlQ2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYXZvcml0ZS1zcXVhcmUtY2hlY2tib3gnKTtcclxuICAgICAgICBmYXZvcml0ZVN0YXRpYy5hcHBlbmRDaGlsZChmYXZvcml0ZVNxdWFyZSk7XHJcbiAgICAgICAgZmF2b3JpdGVTdGF0aWMuYXBwZW5kQ2hpbGQoZmF2b3JpdGVTcXVhcmVDaGVja2JveCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGZhdm9yaXRlU3RhdGljKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYXZvcml0ZVdyYXAgPSBGYXZvcml0ZVdyYXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRm9ybVdyYXAgPSB2b2lkIDA7XHJcbmNsYXNzIEZvcm1XcmFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBmb3JtU3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZvcm1TdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLXN0YXRpYycpO1xyXG4gICAgICAgIGZvcm1TdGF0aWMudGV4dENvbnRlbnQgPSAn0KTQvtGA0LzQsCc7XHJcbiAgICAgICAgY29uc3QgZm9ydFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvcnRTZXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLXNldCcpO1xyXG4gICAgICAgIGNvbnN0IGJlbGxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmVsbFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiZWxsLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBiZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmVsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JlbGwnKTtcclxuICAgICAgICBjb25zdCBiZWxsU3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGJlbGxTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiZWxsLXN0YXRpYycpO1xyXG4gICAgICAgIGJlbGxTdGF0aWMudGV4dENvbnRlbnQgPSAn0JrQvtC70L7QutC+0LsnO1xyXG4gICAgICAgIGJlbGxXcmFwLmFwcGVuZENoaWxkKGJlbGwpO1xyXG4gICAgICAgIGJlbGxXcmFwLmFwcGVuZENoaWxkKGJlbGxTdGF0aWMpO1xyXG4gICAgICAgIGNvbnN0IGJhbGxXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmFsbFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiYWxsLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmFsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JhbGwnKTtcclxuICAgICAgICBjb25zdCBiYWxsU3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGJhbGxTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiYWxsLXN0YXRpYycpO1xyXG4gICAgICAgIGJhbGxTdGF0aWMudGV4dENvbnRlbnQgPSAn0KjQsNGAJztcclxuICAgICAgICBiYWxsV3JhcC5hcHBlbmRDaGlsZChiYWxsKTtcclxuICAgICAgICBiYWxsV3JhcC5hcHBlbmRDaGlsZChiYWxsU3RhdGljKTtcclxuICAgICAgICBjb25zdCBjb25lV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbmVXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZS13cmFwJyk7XHJcbiAgICAgICAgY29uc3QgY29uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb25lJyk7XHJcbiAgICAgICAgY29uc3QgY29uZVN0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25lU3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uZS1zdGF0aWMnKTtcclxuICAgICAgICBjb25lU3RhdGljLnRleHRDb250ZW50ID0gJ9Co0LjRiNC60LAnO1xyXG4gICAgICAgIGNvbmVXcmFwLmFwcGVuZENoaWxkKGNvbmUpO1xyXG4gICAgICAgIGNvbmVXcmFwLmFwcGVuZENoaWxkKGNvbmVTdGF0aWMpO1xyXG4gICAgICAgIGNvbnN0IHNub3dXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc25vd1dyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzbm93LXdyYXAnKTtcclxuICAgICAgICBjb25zdCBzbm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc25vdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Nub3cnKTtcclxuICAgICAgICBjb25zdCBzbm93U3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHNub3dTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzbm93LXN0YXRpYycpO1xyXG4gICAgICAgIHNub3dTdGF0aWMudGV4dENvbnRlbnQgPSAn0KHQvdC10LbQuNC90LrQsCc7XHJcbiAgICAgICAgc25vd1dyYXAuYXBwZW5kQ2hpbGQoc25vdyk7XHJcbiAgICAgICAgc25vd1dyYXAuYXBwZW5kQ2hpbGQoc25vd1N0YXRpYyk7XHJcbiAgICAgICAgY29uc3QgZmlndXJpbmVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmlndXJpbmVXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmlndXJpbmUtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGZpZ3VyaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmlndXJpbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWd1cmluZScpO1xyXG4gICAgICAgIGNvbnN0IGZpZ3VyaW5lU3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZpZ3VyaW5lU3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmlndXJpbmUtc3RhdGljJyk7XHJcbiAgICAgICAgZmlndXJpbmVTdGF0aWMudGV4dENvbnRlbnQgPSAn0KHQvdC10LbQuNC90LrQsCc7XHJcbiAgICAgICAgZmlndXJpbmVXcmFwLmFwcGVuZENoaWxkKGZpZ3VyaW5lKTtcclxuICAgICAgICBmaWd1cmluZVdyYXAuYXBwZW5kQ2hpbGQoZmlndXJpbmVTdGF0aWMpO1xyXG4gICAgICAgIGZvcnRTZXQuYXBwZW5kQ2hpbGQoYmVsbFdyYXApO1xyXG4gICAgICAgIGZvcnRTZXQuYXBwZW5kQ2hpbGQoYmFsbFdyYXApO1xyXG4gICAgICAgIGZvcnRTZXQuYXBwZW5kQ2hpbGQoY29uZVdyYXApO1xyXG4gICAgICAgIGZvcnRTZXQuYXBwZW5kQ2hpbGQoc25vd1dyYXApO1xyXG4gICAgICAgIGZvcnRTZXQuYXBwZW5kQ2hpbGQoZmlndXJpbmVXcmFwKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZm9ybVN0YXRpYyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGZvcnRTZXQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZvcm1XcmFwID0gRm9ybVdyYXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUmVzZXRXcmFwID0gdm9pZCAwO1xyXG5jbGFzcyBSZXNldFdyYXAge1xyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRGaWx0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVzZXRGaWx0ZXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXQtZmlsdGVycycpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0RmlsdGVyc1Jlc2V0U3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHJlc2V0RmlsdGVyc1Jlc2V0U3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXQtZmlsdGVyc19fcmVzZXQtc3RhdGljJyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZmlsdGVycy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgZmlsdGVycy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ9Ch0LHRgNC+0YHQuNGC0Ywg0YTQuNC70YzRgtGA0YsnKTtcclxuICAgICAgICByZXNldEZpbHRlcnNSZXNldFN0YXRpYy5hcHBlbmRDaGlsZChmaWx0ZXJzKTtcclxuICAgICAgICByZXNldEZpbHRlcnMuYXBwZW5kQ2hpbGQocmVzZXRGaWx0ZXJzUmVzZXRTdGF0aWMpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0U2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXNldFNldHRpbmdzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXQtc2V0dGluZ3MnKTtcclxuICAgICAgICBjb25zdCByZXNldFNldHRpbmdzUmVzZXRTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcmVzZXRTZXR0aW5nc1Jlc2V0U3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXQtc2V0dGluZ3NfX3Jlc2V0LXN0YXRpYycpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZXR0aW5ncy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgc2V0dGluZ3Muc2V0QXR0cmlidXRlKCd2YWx1ZScsICfQodCx0YDQvtGB0LjRgtGMINGE0LjQu9GM0YLRgNGLJyk7XHJcbiAgICAgICAgcmVzZXRTZXR0aW5nc1Jlc2V0U3RhdGljLmFwcGVuZENoaWxkKHNldHRpbmdzKTtcclxuICAgICAgICByZXNldFNldHRpbmdzLmFwcGVuZENoaWxkKHJlc2V0U2V0dGluZ3NSZXNldFN0YXRpYyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHJlc2V0RmlsdGVycyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHJlc2V0U2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJlc2V0V3JhcCA9IFJlc2V0V3JhcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5TZXRPZldyYXAgPSB2b2lkIDA7XHJcbmNsYXNzIFNldE9mV3JhcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHIpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0cik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0MGZTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc2V0MGZTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZXQwZi1zdGF0aWMnKTtcclxuICAgICAgICBzZXQwZlN0YXRpYy50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQviDRjdC60LfQtdC80LvRj9GA0L7Qsic7XHJcbiAgICAgICAgY29uc3Qgc2V0MGZTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZXQwZlNldC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NldDBmLXNldCcpO1xyXG4gICAgICAgIHNldDBmU2V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0MGZzbGlkZXInKTtcclxuICAgICAgICBjb25zdCBzZXQwZlNldE1pbk1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNldDBmU2V0TWluTWF4LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2V0MGYtc2V0LW1pbi1tYXgnKTtcclxuICAgICAgICBjb25zdCBzZXQwZlNldE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNldDBmU2V0TWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2V0MGYtc2V0LW1pbicpO1xyXG4gICAgICAgIHNldDBmU2V0TWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0MGZzbGlkZXItc25hcC12YWx1ZS1sb3dlcicpO1xyXG4gICAgICAgIGNvbnN0IHNldDBmU2V0TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2V0MGZTZXRNYXguc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZXQwZi1zZXQtbWF4Jyk7XHJcbiAgICAgICAgc2V0MGZTZXRNYXguc2V0QXR0cmlidXRlKCdpZCcsICdzZXQwZnNsaWRlci1zbmFwLXZhbHVlLXVwcGVyJyk7XHJcbiAgICAgICAgc2V0MGZTZXRNaW5NYXguYXBwZW5kQ2hpbGQoc2V0MGZTZXRNaW4pO1xyXG4gICAgICAgIHNldDBmU2V0TWluTWF4LmFwcGVuZENoaWxkKHNldDBmU2V0TWF4KTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc2V0MGZTdGF0aWMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzZXQwZlNldCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHNldDBmU2V0TWluTWF4KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TZXRPZldyYXAgPSBTZXRPZldyYXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU2l6ZVdyYXAgPSB2b2lkIDA7XHJcbmNsYXNzIFNpemVXcmFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNvbnN0IHNpemVTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc2l6ZVN0YXRpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NpemUtc3RhdGljJyk7XHJcbiAgICAgICAgc2l6ZVN0YXRpYy50ZXh0Q29udGVudCA9ICfQoNCw0LfQvNC10YAnO1xyXG4gICAgICAgIGNvbnN0IHNpemVTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaXplU2V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2l6ZS1zZXQnKTtcclxuICAgICAgICBjb25zdCBsYXJnZVNldFN0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFyZ2VTZXRTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYXJnZS1zZXRfX3N0YXRpYycpO1xyXG4gICAgICAgIGxhcmdlU2V0U3RhdGljLnRleHRDb250ZW50ID0gJ9CR0L7Qu9GM0YjQvtC5JztcclxuICAgICAgICBjb25zdCBsYXJnZVNldFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbGFyZ2VTZXRTcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYXJnZS1zZXRfX3NxdWFyZScpO1xyXG4gICAgICAgIGxhcmdlU2V0U3F1YXJlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIGxhcmdlU2V0U3F1YXJlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsYXJnZS1zZXRfc3F1YXJlJyk7XHJcbiAgICAgICAgbGFyZ2VTZXRTcXVhcmUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBsYXJnZVNldFN0YXRpY0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGxhcmdlU2V0U3RhdGljQ2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYXJnZS1zZXRfX3N0YXRpYy1jaGVja2JveCcpO1xyXG4gICAgICAgIGxhcmdlU2V0U3RhdGljLmFwcGVuZENoaWxkKGxhcmdlU2V0U3F1YXJlKTtcclxuICAgICAgICBsYXJnZVNldFN0YXRpYy5hcHBlbmRDaGlsZChsYXJnZVNldFN0YXRpY0NoZWNrYm94KTtcclxuICAgICAgICBjb25zdCBtaWRkbGVTZXRTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIG1pZGRsZVNldFN0YXRpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21pZGRsZS1zZXRfX3N0YXRpYycpO1xyXG4gICAgICAgIG1pZGRsZVNldFN0YXRpYy50ZXh0Q29udGVudCA9ICfQodGA0LXQtNC90LjQuSc7XHJcbiAgICAgICAgY29uc3QgbWlkZGxlU2V0U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBtaWRkbGVTZXRTcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaWRkbGUtc2V0X19zcXVhcmUnKTtcclxuICAgICAgICBtaWRkbGVTZXRTcXVhcmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgbWlkZGxlU2V0U3F1YXJlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtaWRkbGUtc2V0X3NxdWFyZScpO1xyXG4gICAgICAgIG1pZGRsZVNldFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IG1pZGRsZVNldFN0YXRpY0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIG1pZGRsZVNldFN0YXRpY0NoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWlkZGxlLXNldF9fc3RhdGljLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgbWlkZGxlU2V0U3RhdGljLmFwcGVuZENoaWxkKG1pZGRsZVNldFNxdWFyZSk7XHJcbiAgICAgICAgbWlkZGxlU2V0U3RhdGljLmFwcGVuZENoaWxkKG1pZGRsZVNldFN0YXRpY0NoZWNrYm94KTtcclxuICAgICAgICBjb25zdCBsaXR0bGVTZXRTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxpdHRsZVNldFN0YXRpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpdHRsZS1zZXRfX3N0YXRpYycpO1xyXG4gICAgICAgIGxpdHRsZVNldFN0YXRpYy50ZXh0Q29udGVudCA9ICfQodGA0LXQtNC90LjQuSc7XHJcbiAgICAgICAgY29uc3QgbGl0dGxlU2V0U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBsaXR0bGVTZXRTcXVhcmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXR0bGUtc2V0X19zcXVhcmUnKTtcclxuICAgICAgICBsaXR0bGVTZXRTcXVhcmUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgbGl0dGxlU2V0U3F1YXJlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsaXR0bGUtc2V0X3NxdWFyZScpO1xyXG4gICAgICAgIGxpdHRsZVNldFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGxpdHRsZVNldFN0YXRpY0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGxpdHRsZVNldFN0YXRpY0NoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGl0dGxlLXNldF9fc3RhdGljLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgbGl0dGxlU2V0U3RhdGljLmFwcGVuZENoaWxkKGxpdHRsZVNldFNxdWFyZSk7XHJcbiAgICAgICAgbGl0dGxlU2V0U3RhdGljLmFwcGVuZENoaWxkKGxpdHRsZVNldFN0YXRpY0NoZWNrYm94KTtcclxuICAgICAgICBzaXplU2V0LmFwcGVuZENoaWxkKGxhcmdlU2V0U3RhdGljKTtcclxuICAgICAgICBzaXplU2V0LmFwcGVuZENoaWxkKG1pZGRsZVNldFN0YXRpYyk7XHJcbiAgICAgICAgc2l6ZVNldC5hcHBlbmRDaGlsZChsaXR0bGVTZXRTdGF0aWMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzaXplU3RhdGljKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc2l6ZVNldCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2l6ZVdyYXAgPSBTaXplV3JhcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5TbGlkZXIgPSB2b2lkIDA7XHJcbmNvbnN0IG5vdWlzbGlkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibm91aXNsaWRlclwiKSk7XHJcbnJlcXVpcmUoXCJub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3NcIik7XHJcbmNsYXNzIFNsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXQwZnNsaWRlciwgbWluUmFuZ2UsIG1heFJhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5zZXQwZnNsaWRlciA9IHNldDBmc2xpZGVyO1xyXG4gICAgICAgIHRoaXMubWluUmFuZ2UgPSBtaW5SYW5nZTtcclxuICAgICAgICB0aGlzLm1heFJhbmdlID0gbWF4UmFuZ2U7XHJcbiAgICB9XHJcbiAgICBhbnlTbGlkZXJFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmFueVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuc2V0MGZzbGlkZXJ9YCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0YW55U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5zZXQwZnNsaWRlcn0tc25hcC12YWx1ZS1sb3dlcmApO1xyXG4gICAgICAgIHRoaXMucmlnaHRhbnlTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnNldDBmc2xpZGVyfS1zbmFwLXZhbHVlLXVwcGVyYCk7XHJcbiAgICAgICAgbm91aXNsaWRlcl8xLmRlZmF1bHQuY3JlYXRlKHRoaXMuYW55U2xpZGVyLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBbdGhpcy5taW5SYW5nZSwgdGhpcy5tYXhSYW5nZV0sXHJcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAnbWluJzogdGhpcy5taW5SYW5nZSxcclxuICAgICAgICAgICAgICAgICdtYXgnOiB0aGlzLm1heFJhbmdlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhbnlTbGlkZXJVcGRhdGVSYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmFueVNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvdXRwdXRWYWx1ZSA9IHRoaXMuYW55U2xpZGVyLm5vVWlTbGlkZXIuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmIChvdXRwdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0YW55U2xpZGVyLmlubmVySFRNTCA9IHBhcnNlSW50KG91dHB1dFZhbHVlWzBdKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodGFueVNsaWRlci5pbm5lckhUTUwgPSBwYXJzZUludChvdXRwdXRWYWx1ZVsxXSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYW55U2xpZGVyU2V0KFttaW5SYW5nZSwgbWF4UmFuZ2VdKSB7XHJcbiAgICAgICAgdGhpcy5hbnlTbGlkZXIubm9VaVNsaWRlci5zZXQoW21pblJhbmdlLCBtYXhSYW5nZV0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU2xpZGVyID0gU2xpZGVyO1xyXG47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU29ydFdyYXAgPSB2b2lkIDA7XHJcbmNsYXNzIFNvcnRXcmFwIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzb3J0U3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHNvcnRTdGF0aWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzb3J0LXN0YXRpYycpO1xyXG4gICAgICAgIHNvcnRTdGF0aWMudGV4dENvbnRlbnQgPSAn0KHQvtGA0YLQuNGA0L7QstCw0YLRjCc7XHJcbiAgICAgICAgY29uc3Qgc29ydFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNvcnRTZXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzb3J0LXNldCcpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRTZXRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzb3J0LXNldC1zZWxlY3QnKTtcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc29ydC1zZXQtc2VsZWN0Jyk7XHJcbiAgICAgICAgc29ydFNldFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NvcnRfc2V0X3NlbGVjdCcpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uXzEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub25lJyk7XHJcbiAgICAgICAgb3B0aW9uXzEuc2V0QXR0cmlidXRlKCdpZCcsICdub25lJyk7XHJcbiAgICAgICAgb3B0aW9uXzEudGV4dENvbnRlbnQgPSAn0JLRi9Cx0YDQsNGC0YwuLi4nO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uXzIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBX1onKTtcclxuICAgICAgICBvcHRpb25fMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0FfWicpO1xyXG4gICAgICAgIG9wdGlvbl8yLnRleHRDb250ZW50ID0gYNCf0L4g0L3QsNC30LLQsNC90LjRjiDQvtGCIFwi0JBcIiDQtNC+IFwi0K9cImA7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb25fMy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1pfQScpO1xyXG4gICAgICAgIG9wdGlvbl8zLnNldEF0dHJpYnV0ZSgnaWQnLCAnWl9BJyk7XHJcbiAgICAgICAgb3B0aW9uXzMudGV4dENvbnRlbnQgPSBg0J/QviDQvdCw0LfQstCw0L3QuNGOINC+0YIgXCLQr1wiINC00L4gXCLQkFwiYDtcclxuICAgICAgICBjb25zdCBvcHRpb25fNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbl80LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnY291bnRVcCcpO1xyXG4gICAgICAgIG9wdGlvbl80LnNldEF0dHJpYnV0ZSgnaWQnLCAnY291bnRVcCcpO1xyXG4gICAgICAgIG9wdGlvbl80LnRleHRDb250ZW50ID0gJ9Cf0L4g0LrQvtC70LjRh9C10YHRgtCy0YMg0LIg0L/QvtGA0Y/QtNC60LUg0LLQvtC30YDQsNGB0YLQsNC90LjRjyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb25fNS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2NvdW50RG93bicpO1xyXG4gICAgICAgIG9wdGlvbl81LnNldEF0dHJpYnV0ZSgnaWQnLCAnY291bnREb3duJyk7XHJcbiAgICAgICAgb3B0aW9uXzUudGV4dENvbnRlbnQgPSAn0J/QviDQutC+0LvQuNGH0LXRgdGC0LLRgyDQsiDQv9C+0YDRj9C00LrQtSDRg9Cx0YvQstCw0L3QuNGPJztcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl8xKTtcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl8yKTtcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl8zKTtcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl80KTtcclxuICAgICAgICBzb3J0U2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbl81KTtcclxuICAgICAgICBzb3J0U2V0LmFwcGVuZENoaWxkKHNvcnRTZXRTZWxlY3QpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzb3J0U3RhdGljKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc29ydFNldCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU29ydFdyYXAgPSBTb3J0V3JhcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Tb3J0aW5nID0gdm9pZCAwO1xyXG5jb25zdCBkYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGFcIikpO1xyXG5jb25zdCBDYXJkc18xID0gcmVxdWlyZShcIi4vQ2FyZHNcIik7XHJcbmNvbnN0IHNsaWRlcl8xID0gcmVxdWlyZShcIi4vc2xpZGVyXCIpO1xyXG5jbGFzcyBTb3J0aW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuYmFsbFNoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iZWxsU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbmVTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc25vd1NoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5maWd1cmluZVNoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aGl0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy55ZWxsb3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJsdWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ3JlZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWlkZGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpdHRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMueWVhclNldE1pbiA9IDE5NDA7XHJcbiAgICAgICAgdGhpcy55ZWFyU2V0TWF4ID0gMjAyMDtcclxuICAgICAgICB0aGlzLnNldE9mTWluID0gMDtcclxuICAgICAgICB0aGlzLnNldE9mTWF4ID0gMTI7XHJcbiAgICB9XHJcbiAgICB3cml0ZVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHRvU2F2ZSA9IHtcclxuICAgICAgICAgICAgYmFsbFNoYXBlZF9sczogdGhpcy5iYWxsU2hhcGVkLFxyXG4gICAgICAgICAgICBiZWxsU2hhcGVkX2xzOiB0aGlzLmJlbGxTaGFwZWQsXHJcbiAgICAgICAgICAgIGNvbmVTaGFwZWRfbHM6IHRoaXMuY29uZVNoYXBlZCxcclxuICAgICAgICAgICAgc25vd1NoYXBlZF9sczogdGhpcy5zbm93U2hhcGVkLFxyXG4gICAgICAgICAgICBmaWd1cmluZVNoYXBlZF9sczogdGhpcy5maWd1cmluZVNoYXBlZCxcclxuICAgICAgICAgICAgd2hpdGVfbHM6IHRoaXMud2hpdGUsXHJcbiAgICAgICAgICAgIHllbGxvd19sczogdGhpcy55ZWxsb3csXHJcbiAgICAgICAgICAgIHJlZF9sczogdGhpcy5yZWQsXHJcbiAgICAgICAgICAgIGJsdWVfbHM6IHRoaXMuYmx1ZSxcclxuICAgICAgICAgICAgZ3JlZW5fbHM6IHRoaXMuZ3JlZW4sXHJcbiAgICAgICAgICAgIGxhcmdlX2xzOiB0aGlzLmxhcmdlLFxyXG4gICAgICAgICAgICBtaWRkbGVfbHM6IHRoaXMubWlkZGxlLFxyXG4gICAgICAgICAgICBsaXR0bGVfbHM6IHRoaXMubGl0dGxlLFxyXG4gICAgICAgICAgICBmYXZvcml0ZV9sczogdGhpcy5mYXZvcml0ZSxcclxuICAgICAgICAgICAgdGV4dF9sczogdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB5ZWFyU2V0TWluX2xzOiB0aGlzLnllYXJTZXRNaW4sXHJcbiAgICAgICAgICAgIHllYXJTZXRNYXhfbHM6IHRoaXMueWVhclNldE1heCxcclxuICAgICAgICAgICAgc2V0T2ZNaW5fbHM6IHRoaXMuc2V0T2ZNaW4sXHJcbiAgICAgICAgICAgIHNldE9mTWF4X2xzOiB0aGlzLnNldE9mTWF4LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBmYXZvcml0ZUV2ZW50KGNoZWNrZXIpIHtcclxuICAgICAgICBpZiAoY2hlY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQm9GO0LHQuNC80LDRjzogZmFsc2UnLCAnZmF2b3JpdGUtZGlzcGxheS1ub25lJywgJ2Zhdm9yaXRlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0JvRjtCx0LjQvNCw0Y86IGZhbHNlJywgJ2Zhdm9yaXRlLWRpc3BsYXktbm9uZScsICdmYXZvcml0ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpdHRsZVNpemVFdmVudChjaGVja2VyKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDog0LzQsNC70YvQuScsICdsaXR0bGUtZGlzcGxheS1ub25lJywgJ3NpemVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDog0LzQsNC70YvQuScsICdsaXR0bGUtZGlzcGxheS1ub25lJywgJ3NpemVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtaWRkbGVTaXplRXZlbnQoY2hlY2tlcikge1xyXG4gICAgICAgIGlmIChjaGVja2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQoNCw0LfQvNC10YAg0LjQs9GA0YPRiNC60Lg6INGB0YDQtdC00L3QuNC5JywgJ21pZGRsZS1kaXNwbGF5LW5vbmUnLCAnc2l6ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KDQsNC30LzQtdGAINC40LPRgNGD0YjQutC4OiDRgdGA0LXQtNC90LjQuScsICdtaWRkbGUtZGlzcGxheS1ub25lJywgJ3NpemVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXJnZVNpemVFdmVudChjaGVja2VyKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDog0LHQvtC70YzRiNC+0LknLCAnbGFyZ2UtZGlzcGxheS1ub25lJywgJ3NpemVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDog0LHQvtC70YzRiNC+0LknLCAnbGFyZ2UtZGlzcGxheS1ub25lJywgJ3NpemVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja2luZ0ZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlRXZlbnQodGhpcy5mYXZvcml0ZSk7XHJcbiAgICAgICAgdGhpcy5saXR0bGVTaXplRXZlbnQodGhpcy5saXR0bGUpO1xyXG4gICAgICAgIHRoaXMubWlkZGxlU2l6ZUV2ZW50KHRoaXMubWlkZGxlKTtcclxuICAgICAgICB0aGlzLmxhcmdlU2l6ZUV2ZW50KHRoaXMubGFyZ2UpO1xyXG4gICAgICAgIGlmICghdGhpcy5iYWxsU2hhcGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGI0LDRgCcsICdiYWxsU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGI0LDRgCcsICdiYWxsU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuYmVsbFNoYXBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDQutC+0LvQvtC60L7Qu9GM0YfQuNC6JywgJ2JlbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0LrQvtC70L7QutC+0LvRjNGH0LjQuicsICdiZWxsU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY29uZVNoYXBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRiNC40YjQutCwJywgJ2NvbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YjQuNGI0LrQsCcsICdjb25lU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc25vd1NoYXBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRgdC90LXQttC40L3QutCwJywgJ3Nub3dTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YHQvdC10LbQuNC90LrQsCcsICdzbm93U2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZmlndXJpbmVTaGFwZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YTQuNCz0YPRgNC60LAnLCAnZmlndXJpbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YTQuNCz0YPRgNC60LAnLCAnZmlndXJpbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy53aGl0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LHQtdC70YvQuScsICd3aGl0ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LHQtdC70YvQuScsICd3aGl0ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnllbGxvdykge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LbQtdC70YLRi9C5JywgJ3llbGxvdy1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LbQtdC70YLRi9C5JywgJ3llbGxvdy1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LrRgNCw0YHQvdGL0LknLCAncmVkLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQutGA0LDRgdC90YvQuScsICdyZWQtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5ibHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDRgdC40L3QuNC5JywgJ2JsdWUtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INGB0LjQvdC40LknLCAnYmx1ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmdyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQt9C10LvRkdC90YvQuScsICdncmVlbi1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LfQtdC70ZHQvdGL0LknLCAnZ3JlZW4tZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgc29ydGluZ0FfWigpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXzEuZGVmYXVsdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNvcnRpbmdaX0EoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YV8xLmRlZmF1bHQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5uYW1lIDwgYi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5uYW1lID4gYi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzb3J0aW5nY291bnRVcCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXzEuZGVmYXVsdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgrYS5jb3VudCA8ICtiLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCthLmNvdW50ID4gK2IuY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc29ydGluZ2NvdW50RG93bigpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXzEuZGVmYXVsdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgrYS5jb3VudCA8ICtiLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoK2EuY291bnQgPiArYi5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyQnlBbnlWaXNpYmxlKGlkZW50aXR5LCB0eXBlLCBuYW1lT2ZDbGFzcykge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yVG95ID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7bmFtZU9mQ2xhc3N9YCldO1xyXG4gICAgICAgIGNvbG9yVG95LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ID09PSBgJHtpZGVudGl0eX1gKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHt0eXBlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeUFueVVuVmlzaWJsZShpZGVudGl0eSwgdHlwZSwgbmFtZU9mQ2xhc3MpIHtcclxuICAgICAgICBjb25zdCBjb2xvclRveSA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke25hbWVPZkNsYXNzfWApXTtcclxuICAgICAgICBjb2xvclRveS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCA9PT0gYCR7aWRlbnRpdHl9YCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7dHlwZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyQnlJbnB1dFRleHQoaWRlbnRpdHksIHR5cGUsIHRleHQpIHtcclxuICAgICAgICBjb25zdCBuYW1lVG95TmFtZSA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2lkZW50aXR5fWApXTtcclxuICAgICAgICBpZiAodGV4dCAhPT0gJycpIHtcclxuICAgICAgICAgICAgbmFtZVRveU5hbWUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LmlubmVyVGV4dCkuaW5kZXhPZih0ZXh0KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmFtZVRveU5hbWUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHt0eXBlfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeVJhbmdlKGlkZW50aXR5LCBsb3csIGhpZ2gsIHR5cGUpIHtcclxuICAgICAgICBjb25zdCB5ZWFyVG95ID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aWRlbnRpdHl9YCldO1xyXG4gICAgICAgIHllYXJUb3kuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoK2VsZW1lbnQuaW5uZXJUZXh0LnNsaWNlKGVsZW1lbnQuaW5uZXJUZXh0Lmxhc3RJbmRleE9mKCcgJykpID49IGxvdyAmJiArZWxlbWVudC5pbm5lclRleHQuc2xpY2UoZWxlbWVudC5pbm5lclRleHQubGFzdEluZGV4T2YoJyAnKSkgPD0gaGlnaCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHt0eXBlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0eXBlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBhZGRMaXN0ZW5lcigpIHtcclxuICAgICAgICBjb25zdCBzZXRPZlNsaWRlciA9IG5ldyBzbGlkZXJfMS5TbGlkZXIoYHNldDBmc2xpZGVyYCwgdGhpcy5zZXRPZk1pbiwgdGhpcy5zZXRPZk1heCk7XHJcbiAgICAgICAgc2V0T2ZTbGlkZXIuYW55U2xpZGVyRXZlbnQoKTtcclxuICAgICAgICBzZXRPZlNsaWRlci5hbnlTbGlkZXJVcGRhdGVSYW5nZSgpO1xyXG4gICAgICAgIGNvbnN0IHllYXJTbGlkZXIgPSBuZXcgc2xpZGVyXzEuU2xpZGVyKGB5ZWFyc2xpZGVyYCwgdGhpcy55ZWFyU2V0TWluLCB0aGlzLnllYXJTZXRNYXgpO1xyXG4gICAgICAgIHllYXJTbGlkZXIuYW55U2xpZGVyRXZlbnQoKTtcclxuICAgICAgICB5ZWFyU2xpZGVyLmFueVNsaWRlclVwZGF0ZVJhbmdlKCk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC10b3lzJyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0X3NldF9zZWxlY3QnKTtcclxuICAgICAgICBjb25zdCBiZWxsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZWxsLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBiYWxsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWxsLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBjb25lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25lLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBzbm93RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93LXdyYXAnKTtcclxuICAgICAgICBjb25zdCBmaWd1cmluZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJpbmUtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IHdoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoaXRlJyk7XHJcbiAgICAgICAgY29uc3QgeWVsbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllbGxvdycpO1xyXG4gICAgICAgIGNvbnN0IHJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWQnKTtcclxuICAgICAgICBjb25zdCBibHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdWUnKTtcclxuICAgICAgICBjb25zdCBncmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVlbicpO1xyXG4gICAgICAgIGNvbnN0IGxhcmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhcmdlLXNldF9fc3F1YXJlJyk7XHJcbiAgICAgICAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZS1zZXRfX3NxdWFyZScpO1xyXG4gICAgICAgIGNvbnN0IGxpdHRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXR0bGUtc2V0X19zcXVhcmUnKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1zcXVhcmUnKTtcclxuICAgICAgICBjb25zdCB5ZWFyU2V0TWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXItc2V0LW1pbicpO1xyXG4gICAgICAgIGNvbnN0IHllYXJTZXRNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhci1zZXQtbWF4Jyk7XHJcbiAgICAgICAgY29uc3Qgc2V0T2ZNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0MGYtc2V0LW1pbicpO1xyXG4gICAgICAgIGNvbnN0IHNldE9mTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldDBmLXNldC1tYXgnKTtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uTmV3WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLW5ldy15ZWFyJyk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWZpbHRlcnMnKTtcclxuICAgICAgICBjb25zdCByZXNldFNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LXNldHRpbmdzJyk7XHJcbiAgICAgICAgcmVzZXRGaWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaSB3b3JrJyk7XHJcbiAgICAgICAgICAgIHNldE9mU2xpZGVyLmFueVNsaWRlclNldChbMCwgMTJdKTtcclxuICAgICAgICAgICAgeWVhclNsaWRlci5hbnlTbGlkZXJTZXQoWzE5NDAsIDIwMjBdKTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iZWxsU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb25lU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zbm93U2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWd1cmluZVNoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMud2hpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnllbGxvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ncmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBsYXJnZS5jaGVja2VkID0gdGhpcy5sYXJnZTtcclxuICAgICAgICAgICAgdGhpcy5sYXJnZVNpemVFdmVudCh0aGlzLmxhcmdlKTtcclxuICAgICAgICAgICAgdGhpcy5taWRkbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBtaWRkbGUuY2hlY2tlZCA9IHRoaXMubWlkZGxlO1xyXG4gICAgICAgICAgICB0aGlzLm1pZGRsZVNpemVFdmVudCh0aGlzLm1pZGRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGl0dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGl0dGxlLmNoZWNrZWQgPSB0aGlzLmxpdHRsZTtcclxuICAgICAgICAgICAgdGhpcy5saXR0bGVTaXplRXZlbnQodGhpcy5saXR0bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZhdm9yaXRlLmNoZWNrZWQgPSB0aGlzLmZhdm9yaXRlO1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlRXZlbnQodGhpcy5mYXZvcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnllYXJTZXRNaW4gPSAxOTQwO1xyXG4gICAgICAgICAgICB0aGlzLnllYXJTZXRNYXggPSAyMDIwO1xyXG4gICAgICAgICAgICB0aGlzLnNldE9mTWluID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zZXRPZk1heCA9IDEyO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNraW5nRmlsdGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlJbnB1dFRleHQoJ25hbWVUb3lfX25hbWUnLCAndmFsdWUtZGlzcGxheS1ub25lJywgdGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCd5ZWFyVG95X195ZWFyLXN0YXRpYycsIHRoaXMueWVhclNldE1pbiwgdGhpcy55ZWFyU2V0TWF4LCAneWVhci1kaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCdjb3VudFRveV9fY291bnQtc3RhdGljJywgdGhpcy5zZXRPZk1pbiwgdGhpcy5zZXRPZk1heCwgJ3F1YW50aXR5LWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXV0YXRpb25SZWNvcmRzKTtcclxuICAgICAgICAgICAgdGhpcy55ZWFyU2V0TWluID0gK3llYXJTZXRNaW4uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnllYXJTZXRNYXggPSAreWVhclNldE1heC5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T2ZNaW4gPSArc2V0T2ZNaW4uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNldE9mTWF4ID0gK3NldE9mTWF4LmlubmVyVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCd5ZWFyVG95X195ZWFyLXN0YXRpYycsIHRoaXMueWVhclNldE1pbiwgdGhpcy55ZWFyU2V0TWF4LCAneWVhci1kaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCdjb3VudFRveV9fY291bnQtc3RhdGljJywgdGhpcy5zZXRPZk1pbiwgdGhpcy5zZXRPZk1heCwgJ3F1YW50aXR5LWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoeWVhclNldE1pbiwge1xyXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsIC8vINC90LDQsdC70Y7QtNCw0YLRjCDQt9CwINC90LXQv9C+0YHRgNC10LTRgdGC0LLQtdC90L3Ri9C80Lgg0LTQtdGC0YzQvNC4XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh5ZWFyU2V0TWF4LCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8g0L3QsNCx0LvRjtC00LDRgtGMINC30LAg0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdGL0LzQuCDQtNC10YLRjNC80LhcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNldE9mTWluLCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8g0L3QsNCx0LvRjtC00LDRgtGMINC30LAg0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdGL0LzQuCDQtNC10YLRjNC80LhcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNldE9mTWF4LCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8g0L3QsNCx0LvRjtC00LDRgtGMINC30LAg0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdGL0LzQuCDQtNC10YLRjNC80LhcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2ZpbHRlcmluZyBwYXJ0XHJcbiAgICAgICAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUlucHV0VGV4dCgnbmFtZVRveV9fbmFtZScsICd2YWx1ZS1kaXNwbGF5LW5vbmUnLCB0aGlzLnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJlbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJlbGxTaGFwZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVsbFNoYXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0LrQvtC70L7QutC+0LvRjNGH0LjQuicsICdiZWxsU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWxsU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDQutC+0LvQvtC60L7Qu9GM0YfQuNC6JywgJ2JlbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBiYWxsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsU2hhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGxTaGFwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGI0LDRgCcsICdiYWxsU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRiNCw0YAnLCAnYmFsbFNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmVTaGFwZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZVNoYXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YjQuNGI0LrQsCcsICdjb25lU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25lU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRiNC40YjQutCwJywgJ2NvbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzbm93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zbm93U2hhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dTaGFwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGB0L3QtdC20LjQvdC60LAnLCAnc25vd1NoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vd1NoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YHQvdC10LbQuNC90LrQsCcsICdzbm93U2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlndXJpbmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZ3VyaW5lU2hhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyaW5lU2hhcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRhNC40LPRg9GA0LrQsCcsICdmaWd1cmluZVNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJpbmVTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGE0LjQs9GD0YDQutCwJywgJ2ZpZ3VyaW5lU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2hpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2hpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQsdC10LvRi9C5JywgJ3doaXRlLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INCx0LXQu9GL0LknLCAnd2hpdGUtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB5ZWxsb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMueWVsbG93KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllbGxvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC20LXQu9GC0YvQuScsICd5ZWxsb3ctZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllbGxvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC20LXQu9GC0YvQuScsICd5ZWxsb3ctZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC60YDQsNGB0L3Ri9C5JywgJ3JlZC1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LrRgNCw0YHQvdGL0LknLCAncmVkLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ibHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDRgdC40L3QuNC5JywgJ2JsdWUtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDRgdC40L3QuNC5JywgJ2JsdWUtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBncmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ncmVlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmVlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC30LXQu9GR0L3Ri9C5JywgJ2dyZWVuLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC30LXQu9GR0L3Ri9C5JywgJ2dyZWVuLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGFyZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sYXJnZSA9IGxhcmdlLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubGFyZ2VTaXplRXZlbnQodGhpcy5sYXJnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWlkZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlID0gbWlkZGxlLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlU2l6ZUV2ZW50KHRoaXMubWlkZGxlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaXR0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXR0bGUgPSBsaXR0bGUuY2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5saXR0bGVTaXplRXZlbnQodGhpcy5saXR0bGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZhdm9yaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSBmYXZvcml0ZS5jaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlRXZlbnQodGhpcy5mYXZvcml0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9zb3J0aW5nIHBhcnRcclxuICAgICAgICBzZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnQV9aJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0aW5nQV9aKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBuZXcgQ2FyZHNfMS5DYXJkcyh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlbmRlclRveXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlJbnB1dFRleHQoJ25hbWVUb3lfX25hbWUnLCAndmFsdWUtZGlzcGxheS1ub25lJywgdGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlSYW5nZSgneWVhclRveV9feWVhci1zdGF0aWMnLCB0aGlzLnllYXJTZXRNaW4sIHRoaXMueWVhclNldE1heCwgJ3llYXItZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ2NvdW50VG95X19jb3VudC1zdGF0aWMnLCB0aGlzLnNldE9mTWluLCB0aGlzLnNldE9mTWF4LCAncXVhbnRpdHktZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ1pfQScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydGluZ1pfQSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gbmV3IENhcmRzXzEuQ2FyZHModGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGFwcC5yZW5kZXJUb3lzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNraW5nRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5SW5wdXRUZXh0KCduYW1lVG95X19uYW1lJywgJ3ZhbHVlLWRpc3BsYXktbm9uZScsIHRoaXMudGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ3llYXJUb3lfX3llYXItc3RhdGljJywgdGhpcy55ZWFyU2V0TWluLCB0aGlzLnllYXJTZXRNYXgsICd5ZWFyLWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCdjb3VudFRveV9fY291bnQtc3RhdGljJywgdGhpcy5zZXRPZk1pbiwgdGhpcy5zZXRPZk1heCwgJ3F1YW50aXR5LWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdjb3VudFVwJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0aW5nY291bnRVcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gbmV3IENhcmRzXzEuQ2FyZHModGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGFwcC5yZW5kZXJUb3lzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNraW5nRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5SW5wdXRUZXh0KCduYW1lVG95X19uYW1lJywgJ3ZhbHVlLWRpc3BsYXktbm9uZScsIHRoaXMudGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ3llYXJUb3lfX3llYXItc3RhdGljJywgdGhpcy55ZWFyU2V0TWluLCB0aGlzLnllYXJTZXRNYXgsICd5ZWFyLWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCdjb3VudFRveV9fY291bnQtc3RhdGljJywgdGhpcy5zZXRPZk1pbiwgdGhpcy5zZXRPZk1heCwgJ3F1YW50aXR5LWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdjb3VudERvd24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRpbmdjb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IG5ldyBDYXJkc18xLkNhcmRzKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVuZGVyVG95cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2luZ0ZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUlucHV0VGV4dCgnbmFtZVRveV9fbmFtZScsICd2YWx1ZS1kaXNwbGF5LW5vbmUnLCB0aGlzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCd5ZWFyVG95X195ZWFyLXN0YXRpYycsIHRoaXMueWVhclNldE1pbiwgdGhpcy55ZWFyU2V0TWF4LCAneWVhci1kaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlSYW5nZSgnY291bnRUb3lfX2NvdW50LXN0YXRpYycsIHRoaXMuc2V0T2ZNaW4sIHRoaXMuc2V0T2ZNYXgsICdxdWFudGl0eS1kaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU29ydGluZyA9IFNvcnRpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVG95UGFnZSA9IHZvaWQgMDtcclxuY29uc3QgQ2FyZHNfMSA9IHJlcXVpcmUoXCIuL0NhcmRzXCIpO1xyXG5jb25zdCBlZmZlY3RzQW5kU2VhY2hXcmFwXzEgPSByZXF1aXJlKFwiLi9lZmZlY3RzQW5kU2VhY2hXcmFwXCIpO1xyXG5jb25zdCBzb3J0V3JhcF8xID0gcmVxdWlyZShcIi4vc29ydFdyYXBcIik7XHJcbmNvbnN0IGZvcm1XcmFwXzEgPSByZXF1aXJlKFwiLi9mb3JtV3JhcFwiKTtcclxuY29uc3Qgc2V0MGZXcmFwXzEgPSByZXF1aXJlKFwiLi9zZXQwZldyYXBcIik7XHJcbmNvbnN0IHllYXJXcmFwXzEgPSByZXF1aXJlKFwiLi95ZWFyV3JhcFwiKTtcclxuY29uc3QgY29sb3JXcmFwXzEgPSByZXF1aXJlKFwiLi9jb2xvcldyYXBcIik7XHJcbmNvbnN0IHNpemVXcmFwXzEgPSByZXF1aXJlKFwiLi9zaXplV3JhcFwiKTtcclxuY29uc3QgZmF2b3JpdGVXcmFwXzEgPSByZXF1aXJlKFwiLi9mYXZvcml0ZVdyYXBcIik7XHJcbmNvbnN0IHJlc2V0V3JhcF8xID0gcmVxdWlyZShcIi4vcmVzZXRXcmFwXCIpO1xyXG5jb25zdCBzb3J0aW5nXzEgPSByZXF1aXJlKFwiLi9zb3J0aW5nXCIpO1xyXG5jb25zdCBkYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGFcIikpO1xyXG5jbGFzcyBUb3lQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uU2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29sbGVjdGlvblNldHRpbmdzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29sbGVjdGlvbi1zZXR0aW5ncycpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25OZXdZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbGxlY3Rpb25OZXdZZWFyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29sbGVjdGlvbi1uZXcteWVhcicpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd3JhcHBlcicpO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdHNBbmRTZWFjaFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlZmZlY3RzQW5kU2VhY2hXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWZmZWN0cy1hbmQtc2VhY2gtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc29ydFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzb3J0LXdyYXAnKTtcclxuICAgICAgICBjb25zdCBmb3JtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvcm1XcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS13cmFwJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0MGZXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2V0MGZXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2V0MGYtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IHllYXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgeWVhcldyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd5ZWFyLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBjb2xvcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2xvcldyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb2xvci13cmFwJyk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaXplV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NpemUtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZhdm9yaXRlV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zhdm9yaXRlLXdyYXAnKTtcclxuICAgICAgICBjb25zdCByZXNldFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXNldFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXNldC13cmFwJyk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlZmZlY3RzQW5kU2VhY2hXcmFwKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNvcnRXcmFwKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm1XcmFwKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNldDBmV3JhcCk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh5ZWFyV3JhcCk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb2xvcldyYXApO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2l6ZVdyYXApO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVXcmFwKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJlc2V0V3JhcCk7XHJcbiAgICAgICAgY29sbGVjdGlvblNldHRpbmdzLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb2xsZWN0aW9uU2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb2xsZWN0aW9uTmV3WWVhcik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbm5lclRveVBhZ2UoKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmVuZGVySW5uZXJUb3lQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGFwcEVmZmVjdHNBbmRTZWFjaFdyYXAgPSBuZXcgZWZmZWN0c0FuZFNlYWNoV3JhcF8xLkVmZmVjdHNBbmRTZWFjaFdyYXAoJy5lZmZlY3RzLWFuZC1zZWFjaC13cmFwJyk7XHJcbiAgICAgICAgYXBwRWZmZWN0c0FuZFNlYWNoV3JhcC5yZW5kZXIoKTtcclxuICAgICAgICBjb25zdCBzb3J0V3JhcCA9IG5ldyBzb3J0V3JhcF8xLlNvcnRXcmFwKCcuc29ydC13cmFwJyk7XHJcbiAgICAgICAgc29ydFdyYXAucmVuZGVyKCk7XHJcbiAgICAgICAgY29uc3QgZm9ybVdyYXAgPSBuZXcgZm9ybVdyYXBfMS5Gb3JtV3JhcCgnLmZvcm0td3JhcCcpO1xyXG4gICAgICAgIGZvcm1XcmFwLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IHNldE9mV3JhcCA9IG5ldyBzZXQwZldyYXBfMS5TZXRPZldyYXAoJy5zZXQwZi13cmFwJyk7XHJcbiAgICAgICAgc2V0T2ZXcmFwLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IHllYXJPZldyYXAgPSBuZXcgeWVhcldyYXBfMS5ZZWFyV3JhcCgnLnllYXItd3JhcCcpO1xyXG4gICAgICAgIHllYXJPZldyYXAucmVuZGVyKCk7XHJcbiAgICAgICAgY29uc3Qg0YFvbG9yV3JhcCA9IG5ldyBjb2xvcldyYXBfMS7QoW9sb3JXcmFwKCcuY29sb3Itd3JhcCcpO1xyXG4gICAgICAgINGBb2xvcldyYXAucmVuZGVyKCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVdyYXAgPSBuZXcgc2l6ZVdyYXBfMS5TaXplV3JhcCgnLnNpemUtd3JhcCcpO1xyXG4gICAgICAgIHNpemVXcmFwLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlV3JhcCA9IG5ldyBmYXZvcml0ZVdyYXBfMS5GYXZvcml0ZVdyYXAoJy5mYXZvcml0ZS13cmFwJyk7XHJcbiAgICAgICAgZmF2b3JpdGVXcmFwLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0V3JhcCA9IG5ldyByZXNldFdyYXBfMS5SZXNldFdyYXAoJy5yZXNldC13cmFwJyk7XHJcbiAgICAgICAgcmVzZXRXcmFwLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRpbmcgPSBuZXcgc29ydGluZ18xLlNvcnRpbmcoZGF0YV8xLmRlZmF1bHQpO1xyXG4gICAgICAgIHNvcnRpbmcuYWRkTGlzdGVuZXIoKTtcclxuICAgICAgICBjb25zdCBhcHBDYXJkcyA9IG5ldyBDYXJkc18xLkNhcmRzKGRhdGFfMS5kZWZhdWx0KTtcclxuICAgICAgICBhcHBDYXJkcy5yZW5kZXJUb3lzKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ub3lQYWdlID0gVG95UGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ZZWFyV3JhcCA9IHZvaWQgMDtcclxuY2xhc3MgWWVhcldyYXAge1xyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY29uc3QgeWVhcjBmU3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHllYXIwZlN0YXRpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3llYXItc3RhdGljJyk7XHJcbiAgICAgICAgeWVhcjBmU3RhdGljLnRleHRDb250ZW50ID0gJ9CT0L7QtCDQv9GA0LjQvtCx0YDQtdGC0LXQvdC40Y8nO1xyXG4gICAgICAgIGNvbnN0IHllYXJTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5ZWFyU2V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneWVhci1zZXQnKTtcclxuICAgICAgICB5ZWFyU2V0LnNldEF0dHJpYnV0ZSgnaWQnLCAneWVhcnNsaWRlcicpO1xyXG4gICAgICAgIGNvbnN0IHllYXJTZXRNaW5NYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5ZWFyU2V0TWluTWF4LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneWVhci1zZXQtbWluLW1heCcpO1xyXG4gICAgICAgIGNvbnN0IHllYXJTZXRNaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5ZWFyU2V0TWluLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneWVhci1zZXQtbWluJyk7XHJcbiAgICAgICAgeWVhclNldE1pbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3llYXJzbGlkZXItc25hcC12YWx1ZS1sb3dlcicpO1xyXG4gICAgICAgIGNvbnN0IHllYXJTZXRNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB5ZWFyU2V0TWF4LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAneWVhci1zZXQtbWF4Jyk7XHJcbiAgICAgICAgeWVhclNldE1heC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3llYXJzbGlkZXItc25hcC12YWx1ZS11cHBlcicpO1xyXG4gICAgICAgIHllYXJTZXRNaW5NYXguYXBwZW5kQ2hpbGQoeWVhclNldE1pbik7XHJcbiAgICAgICAgeWVhclNldE1pbk1heC5hcHBlbmRDaGlsZCh5ZWFyU2V0TWF4KTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoeWVhcjBmU3RhdGljKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoeWVhclNldCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHllYXJTZXRNaW5NYXgpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlllYXJXcmFwID0gWWVhcldyYXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVHJlZU1haW5QYWdlID0gdm9pZCAwO1xyXG5jb25zdCB0cmVlTWFpblZpZXdfMSA9IHJlcXVpcmUoXCIuL3RyZWVNYWluVmlld1wiKTtcclxuY29uc3QgdHJlZVNldHRpbmdfMSA9IHJlcXVpcmUoXCIuL3RyZWVTZXR0aW5nXCIpO1xyXG5jb25zdCB0cmVlU2V0dGluZ3NUb3lzXzEgPSByZXF1aXJlKFwiLi90cmVlU2V0dGluZ3NUb3lzXCIpO1xyXG5jbGFzcyBUcmVlTWFpblBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRyZWVTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHRyZWVTZXR0aW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHJlZS1zZXR0aW5nJyk7XHJcbiAgICAgICAgY29uc3QgdHJlZU1haW5WaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHRyZWVNYWluVmlldy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RyZWUtbWFpbi12aWV3Jyk7XHJcbiAgICAgICAgY29uc3QgdHJlZVNldHRpbmdzVG95cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICB0cmVlU2V0dGluZ3NUb3lzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHJlZS1zZXR0aW5ncy10b3lzJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRyZWVTZXR0aW5nKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodHJlZU1haW5WaWV3KTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodHJlZVNldHRpbmdzVG95cyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbm5lclRyZWVQYWdlKCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIHJlbmRlcklubmVyVHJlZVBhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgdHJlZU1haW5WaWV3ID0gbmV3IHRyZWVNYWluVmlld18xLlRyZWVNYWluVmlldygnLnRyZWUtbWFpbi12aWV3Jyk7XHJcbiAgICAgICAgdHJlZU1haW5WaWV3LnJlbmRlcignLi9hc3NldHMvdHJlZS8xLnBuZycpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVTZXR0aW5nID0gbmV3IHRyZWVTZXR0aW5nXzEuVHJlZVNldHRpbmcoJy50cmVlLXNldHRpbmcnKTtcclxuICAgICAgICB0cmVlU2V0dGluZy5yZW5kZXIoKTtcclxuICAgICAgICBjb25zdCB0cmVlU2V0dGluZ3NUb3lzID0gbmV3IHRyZWVTZXR0aW5nc1RveXNfMS5UcmVlU2V0dGluZ3NUb3lzKCcudHJlZS1zZXR0aW5ncy10b3lzJyk7XHJcbiAgICAgICAgdHJlZVNldHRpbmdzVG95cy5yZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyZWVNYWluUGFnZSA9IFRyZWVNYWluUGFnZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UcmVlTWFpblZpZXcgPSB2b2lkIDA7XHJcbmNsYXNzIFRyZWVNYWluVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHIpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0cik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoc3JjKSB7XHJcbiAgICAgICAgY29uc3QgdHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRyZWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0cmVlJyk7XHJcbiAgICAgICAgdHJlZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRyZWUpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyZWVNYWluVmlldyA9IFRyZWVNYWluVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UcmVlU2V0dGluZyA9IHZvaWQgMDtcclxuY2xhc3MgVHJlZVNldHRpbmcge1xyXG4gICAgY29uc3RydWN0b3Ioc3RyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXJUcmVlU2V0dGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXJUcmVlU2V0dGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dyYXBwZXItdHJlZS1zZXR0aW5nJyk7XHJcbiAgICAgICAgY29uc3QgY2hvb3NlU2V0dGluZ3NUb3lzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2hvb3NlU2V0dGluZ3NUb3lzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hvb3NlLXNldHRpbmdzLXRveXMnKTtcclxuICAgICAgICBjb25zdCBzb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNvdW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc291bmQnKTtcclxuICAgICAgICBjb25zdCBzbm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc25vdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Nub3cnKTtcclxuICAgICAgICBjaG9vc2VTZXR0aW5nc1RveXMuYXBwZW5kQ2hpbGQoc291bmQpO1xyXG4gICAgICAgIGNob29zZVNldHRpbmdzVG95cy5hcHBlbmRDaGlsZChzbm93KTtcclxuICAgICAgICBjb25zdCBjaG9vc2VUcmVlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNob29zZVRyZWVXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hvb3NlLXRyZWUtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGNob29zZVRyZWVTdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY2hvb3NlVHJlZVN0YXRpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nob29zZS10cmVlLXN0YXRpYycpO1xyXG4gICAgICAgIGNob29zZVRyZWVTdGF0aWMudGV4dENvbnRlbnQgPSAn0JLRi9Cx0LXRgNC40YLQtSDQtdC70LrRgyc7XHJcbiAgICAgICAgY29uc3QgY2hvb3NlVHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNob29zZVRyZWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaG9vc2UtdHJlZScpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRyZWVfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RyZWUtMScpO1xyXG4gICAgICAgIGNvbnN0IGltZ18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nXzEuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvdHJlZS8xLnBuZycpO1xyXG4gICAgICAgIGltZ18xLnNldEF0dHJpYnV0ZSgnYWx0JywgJzEucG5nJyk7XHJcbiAgICAgICAgdHJlZV8xLmFwcGVuZENoaWxkKGltZ18xKTtcclxuICAgICAgICBjb25zdCB0cmVlXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0cmVlXzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0cmVlLTInKTtcclxuICAgICAgICBjb25zdCBpbWdfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZ18yLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL3RyZWUvMi5wbmcnKTtcclxuICAgICAgICBpbWdfMi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcyLnBuZycpO1xyXG4gICAgICAgIHRyZWVfMi5hcHBlbmRDaGlsZChpbWdfMik7XHJcbiAgICAgICAgY29uc3QgdHJlZV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdHJlZV8zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHJlZS0zJyk7XHJcbiAgICAgICAgY29uc3QgaW1nXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWdfMy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy90cmVlLzMucG5nJyk7XHJcbiAgICAgICAgaW1nXzMuc2V0QXR0cmlidXRlKCdhbHQnLCAnMy5wbmcnKTtcclxuICAgICAgICB0cmVlXzMuYXBwZW5kQ2hpbGQoaW1nXzMpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRyZWVfNC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RyZWUtNCcpO1xyXG4gICAgICAgIGNvbnN0IGltZ180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nXzQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvdHJlZS80LnBuZycpO1xyXG4gICAgICAgIGltZ180LnNldEF0dHJpYnV0ZSgnYWx0JywgJzQucG5nJyk7XHJcbiAgICAgICAgdHJlZV80LmFwcGVuZENoaWxkKGltZ180KTtcclxuICAgICAgICBjb25zdCB0cmVlXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0cmVlXzUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0cmVlLTUnKTtcclxuICAgICAgICBjb25zdCBpbWdfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZ181LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL3RyZWUvNS5wbmcnKTtcclxuICAgICAgICBpbWdfNS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICc1LnBuZycpO1xyXG4gICAgICAgIHRyZWVfNS5hcHBlbmRDaGlsZChpbWdfNSk7XHJcbiAgICAgICAgY29uc3QgdHJlZV82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdHJlZV82LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHJlZS02Jyk7XHJcbiAgICAgICAgY29uc3QgaW1nXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWdfNi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy90cmVlLzYucG5nJyk7XHJcbiAgICAgICAgaW1nXzYuc2V0QXR0cmlidXRlKCdhbHQnLCAnNi5wbmcnKTtcclxuICAgICAgICB0cmVlXzYuYXBwZW5kQ2hpbGQoaW1nXzYpO1xyXG4gICAgICAgIGNob29zZVRyZWUuYXBwZW5kQ2hpbGQodHJlZV8xKTtcclxuICAgICAgICBjaG9vc2VUcmVlLmFwcGVuZENoaWxkKHRyZWVfMik7XHJcbiAgICAgICAgY2hvb3NlVHJlZS5hcHBlbmRDaGlsZCh0cmVlXzMpO1xyXG4gICAgICAgIGNob29zZVRyZWUuYXBwZW5kQ2hpbGQodHJlZV80KTtcclxuICAgICAgICBjaG9vc2VUcmVlLmFwcGVuZENoaWxkKHRyZWVfNSk7XHJcbiAgICAgICAgY2hvb3NlVHJlZS5hcHBlbmRDaGlsZCh0cmVlXzYpO1xyXG4gICAgICAgIGNob29zZVRyZWVXcmFwLmFwcGVuZENoaWxkKGNob29zZVRyZWVTdGF0aWMpO1xyXG4gICAgICAgIGNob29zZVRyZWVXcmFwLmFwcGVuZENoaWxkKGNob29zZVRyZWUpO1xyXG4gICAgICAgIGNvbnN0IGNob29zZUJhY2tncm91bmRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2hvb3NlQmFja2dyb3VuZFdyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaG9vc2UtYmFja2dyb3VuZC13cmFwJyk7XHJcbiAgICAgICAgY29uc3QgY2hvb3NlQmFja2dyb3VuZFN0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjaG9vc2VCYWNrZ3JvdW5kU3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hvb3NlLWJhY2tncm91bmQtc3RhdGljJyk7XHJcbiAgICAgICAgY2hvb3NlQmFja2dyb3VuZFN0YXRpYy50ZXh0Q29udGVudCA9ICfQktGL0LHQtdGA0LjRgtC1INGE0L7QvSc7XHJcbiAgICAgICAgY29uc3QgY2hvb3NlQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNob29zZUJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaG9vc2UtYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIGNvbnN0IGJnXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ18xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctMScpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzEuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvMS5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfMS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy8xLmpwZycpO1xyXG4gICAgICAgIGJnXzEuYXBwZW5kQ2hpbGQoaW1nX2JnXzEpO1xyXG4gICAgICAgIGNvbnN0IGJnXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ18yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctMicpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvMi5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfMi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy8yLmpwZycpO1xyXG4gICAgICAgIGJnXzIuYXBwZW5kQ2hpbGQoaW1nX2JnXzIpO1xyXG4gICAgICAgIGNvbnN0IGJnXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ18zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctMycpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzMuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvMy5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfMy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy8zLmpwZycpO1xyXG4gICAgICAgIGJnXzMuYXBwZW5kQ2hpbGQoaW1nX2JnXzMpO1xyXG4gICAgICAgIGNvbnN0IGJnXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ180LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctNCcpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvNC5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfNC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy80LmpwZycpO1xyXG4gICAgICAgIGJnXzQuYXBwZW5kQ2hpbGQoaW1nX2JnXzQpO1xyXG4gICAgICAgIGNvbnN0IGJnXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ181LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctNScpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ181ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvNS5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfNS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy81LmpwZycpO1xyXG4gICAgICAgIGJnXzUuYXBwZW5kQ2hpbGQoaW1nX2JnXzUpO1xyXG4gICAgICAgIGNvbnN0IGJnXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ182LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctNicpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzYuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvNi5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfNi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy82LmpwZycpO1xyXG4gICAgICAgIGJnXzYuYXBwZW5kQ2hpbGQoaW1nX2JnXzYpO1xyXG4gICAgICAgIGNvbnN0IGJnXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ183LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctNycpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvNy5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfNy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy83LmpwZycpO1xyXG4gICAgICAgIGJnXzcuYXBwZW5kQ2hpbGQoaW1nX2JnXzcpO1xyXG4gICAgICAgIGNvbnN0IGJnXzggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiZ184LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmctOCcpO1xyXG4gICAgICAgIGNvbnN0IGltZ19iZ184ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nX2JnXzguc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvYmcvOC5qcGcnKTtcclxuICAgICAgICBpbWdfYmdfOC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiZy84LmpwZycpO1xyXG4gICAgICAgIGJnXzguYXBwZW5kQ2hpbGQoaW1nX2JnXzgpO1xyXG4gICAgICAgIGNob29zZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYmdfMSk7XHJcbiAgICAgICAgY2hvb3NlQmFja2dyb3VuZC5hcHBlbmRDaGlsZChiZ18yKTtcclxuICAgICAgICBjaG9vc2VCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJnXzMpO1xyXG4gICAgICAgIGNob29zZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYmdfNCk7XHJcbiAgICAgICAgY2hvb3NlQmFja2dyb3VuZC5hcHBlbmRDaGlsZChiZ181KTtcclxuICAgICAgICBjaG9vc2VCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJnXzYpO1xyXG4gICAgICAgIGNob29zZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYmdfNyk7XHJcbiAgICAgICAgY2hvb3NlQmFja2dyb3VuZC5hcHBlbmRDaGlsZChiZ184KTtcclxuICAgICAgICBjaG9vc2VCYWNrZ3JvdW5kV3JhcC5hcHBlbmRDaGlsZChjaG9vc2VCYWNrZ3JvdW5kU3RhdGljKTtcclxuICAgICAgICBjaG9vc2VCYWNrZ3JvdW5kV3JhcC5hcHBlbmRDaGlsZChjaG9vc2VCYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb25zdCBjaG9vc2VGbGFzaExpZ2h0c1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjaG9vc2VGbGFzaExpZ2h0c1dyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaG9vc2UtZmxhc2gtbGlnaHRzLXdyYXAnKTtcclxuICAgICAgICBjb25zdCBjaG9vc2VGbGFzaExpZ2h0c1N0YXRpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjaG9vc2VGbGFzaExpZ2h0c1N0YXRpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nob29zZS1mbGFzaC1saWdodHMtc3RhdGljJyk7XHJcbiAgICAgICAgY2hvb3NlRmxhc2hMaWdodHNTdGF0aWMudGV4dENvbnRlbnQgPSAn0JLRi9Cx0LXRgNC40YLQtSDQs9C40YDQu9GP0L3QtNGDJztcclxuICAgICAgICBjb25zdCBjaG9vc2VGbGFzaExpZ2h0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNob29zZUZsYXNoTGlnaHRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hvb3NlLWZsYXNoLWxpZ2h0cycpO1xyXG4gICAgICAgIGNvbnN0IGZsYXNoTGlnaHRzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmbGFzaExpZ2h0c18xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxhc2gtbGlnaHRzLTEnKTtcclxuICAgICAgICBjb25zdCBmbGFzaExpZ2h0c18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmxhc2hMaWdodHNfMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZsYXNoLWxpZ2h0cy0yJyk7XHJcbiAgICAgICAgY29uc3QgZmxhc2hMaWdodHNfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZsYXNoTGlnaHRzXzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmbGFzaC1saWdodHMtMycpO1xyXG4gICAgICAgIGNob29zZUZsYXNoTGlnaHRzLmFwcGVuZENoaWxkKGZsYXNoTGlnaHRzXzEpO1xyXG4gICAgICAgIGNob29zZUZsYXNoTGlnaHRzLmFwcGVuZENoaWxkKGZsYXNoTGlnaHRzXzIpO1xyXG4gICAgICAgIGNob29zZUZsYXNoTGlnaHRzLmFwcGVuZENoaWxkKGZsYXNoTGlnaHRzXzMpO1xyXG4gICAgICAgIGNob29zZUZsYXNoTGlnaHRzV3JhcC5hcHBlbmRDaGlsZChjaG9vc2VGbGFzaExpZ2h0c1N0YXRpYyk7XHJcbiAgICAgICAgY2hvb3NlRmxhc2hMaWdodHNXcmFwLmFwcGVuZENoaWxkKGNob29zZUZsYXNoTGlnaHRzKTtcclxuICAgICAgICBjb25zdCB0cmVlU2V0dGluZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRyZWVTZXR0aW5nQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHJlZS1zZXR0aW5nLWJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdCdXR0b25XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2V0dGluZ0J1dHRvbldyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzZXR0aW5nLWJ1dHRvbi13cmFwJyk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzYXZlV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NhdmUtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0XzEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIGlucHV0XzEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICfQodC+0YXRgNCw0L3QuNGC0YwnKTtcclxuICAgICAgICBzYXZlV3JhcC5hcHBlbmRDaGlsZChpbnB1dF8xKTtcclxuICAgICAgICBjb25zdCByZXNldFNldHRpbmdzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc2V0U2V0dGluZ3NXcmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzZXQtc2V0dGluZ3Mtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0XzIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIGlucHV0XzIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICfQodCx0YDQvtGB0LjRgtGMINC90LDRgdGC0YDQvtC50LrQuCcpO1xyXG4gICAgICAgIHJlc2V0U2V0dGluZ3NXcmFwLmFwcGVuZENoaWxkKGlucHV0XzIpO1xyXG4gICAgICAgIHNldHRpbmdCdXR0b25XcmFwLmFwcGVuZENoaWxkKHNhdmVXcmFwKTtcclxuICAgICAgICBzZXR0aW5nQnV0dG9uV3JhcC5hcHBlbmRDaGlsZChyZXNldFNldHRpbmdzV3JhcCk7XHJcbiAgICAgICAgdHJlZVNldHRpbmdCdXR0b24uYXBwZW5kQ2hpbGQoc2V0dGluZ0J1dHRvbldyYXApO1xyXG4gICAgICAgIHdyYXBwZXJUcmVlU2V0dGluZy5hcHBlbmRDaGlsZChjaG9vc2VTZXR0aW5nc1RveXMpO1xyXG4gICAgICAgIHdyYXBwZXJUcmVlU2V0dGluZy5hcHBlbmRDaGlsZChjaG9vc2VUcmVlV3JhcCk7XHJcbiAgICAgICAgd3JhcHBlclRyZWVTZXR0aW5nLmFwcGVuZENoaWxkKGNob29zZUJhY2tncm91bmRXcmFwKTtcclxuICAgICAgICB3cmFwcGVyVHJlZVNldHRpbmcuYXBwZW5kQ2hpbGQoY2hvb3NlRmxhc2hMaWdodHNXcmFwKTtcclxuICAgICAgICB3cmFwcGVyVHJlZVNldHRpbmcuYXBwZW5kQ2hpbGQodHJlZVNldHRpbmdCdXR0b24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh3cmFwcGVyVHJlZVNldHRpbmcpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyZWVTZXR0aW5nID0gVHJlZVNldHRpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVHJlZVNldHRpbmdzVG95cyA9IHZvaWQgMDtcclxuY29uc3QgZGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9kYXRhXCIpKTtcclxuY2xhc3MgVHJlZVNldHRpbmdzVG95cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHIpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0cik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlclRyZWVTZXR0aW5nc1RveXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyVHJlZVNldHRpbmdzVG95cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3dyYXBwZXItdHJlZS1zZXR0aW5ncy10b3lzJyk7XHJcbiAgICAgICAgY29uc3QgdG95c0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b3lzQ29sbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RveXMtY29sbGVjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRveXNDb2xsZWN0aW9uU3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRveXNDb2xsZWN0aW9uU3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG95cy1jb2xsZWN0aW9uLXN0YXRpYycpO1xyXG4gICAgICAgIHRveXNDb2xsZWN0aW9uU3RhdGljLnRleHRDb250ZW50ID0gJ9CY0LPRgNGD0YjQutC4JztcclxuICAgICAgICBjb25zdCB0b3lzQ29sbGVjdGlvbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b3lzQ29sbGVjdGlvbldyYXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b3lzLWNvbGxlY3Rpb24td3JhcCcpO1xyXG4gICAgICAgIHRveXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKHRveXNDb2xsZWN0aW9uU3RhdGljKTtcclxuICAgICAgICB0b3lzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZCh0b3lzQ29sbGVjdGlvbldyYXApO1xyXG4gICAgICAgIGNvbnN0IHNhdmVkQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNhdmVkQ29sbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NhdmVkLWNvbGxlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBzYXZlZENvbGxlY3Rpb25TdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc2F2ZWRDb2xsZWN0aW9uU3RhdGljLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2F2ZWQtY29sbGVjdGlvbi1zdGF0aWMnKTtcclxuICAgICAgICBzYXZlZENvbGxlY3Rpb25TdGF0aWMudGV4dENvbnRlbnQgPSAn0JLRiyDQvdCw0YDRj9C00LjQu9C4JztcclxuICAgICAgICBjb25zdCBzYXZlZENvbGxlY3Rpb25XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2F2ZWRDb2xsZWN0aW9uV3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NhdmVkLWNvbGxlY3Rpb24td3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IHNhdmVkVHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNhdmVkVHJlZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NhdmVkLXRyZWUnKTtcclxuICAgICAgICBjb25zdCB0cl9pbWdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRyX2ltZ18xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHInKTtcclxuICAgICAgICB0cl9pbWdfMS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy90cmVlLzYucG5nJyk7XHJcbiAgICAgICAgdHJfaW1nXzEuc2V0QXR0cmlidXRlKCdhbHQnLCAndHJlZS82LnBuZycpO1xyXG4gICAgICAgIHNhdmVkVHJlZS5hcHBlbmRDaGlsZCh0cl9pbWdfMSk7XHJcbiAgICAgICAgc2F2ZWRDb2xsZWN0aW9uV3JhcC5hcHBlbmRDaGlsZChzYXZlZFRyZWUpO1xyXG4gICAgICAgIHNhdmVkQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChzYXZlZENvbGxlY3Rpb25TdGF0aWMpO1xyXG4gICAgICAgIHNhdmVkQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChzYXZlZENvbGxlY3Rpb25XcmFwKTtcclxuICAgICAgICB3cmFwcGVyVHJlZVNldHRpbmdzVG95cy5hcHBlbmRDaGlsZCh0b3lzQ29sbGVjdGlvbik7XHJcbiAgICAgICAgd3JhcHBlclRyZWVTZXR0aW5nc1RveXMuYXBwZW5kQ2hpbGQoc2F2ZWRDb2xsZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQod3JhcHBlclRyZWVTZXR0aW5nc1RveXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyRmF2b3JpdGVUb3lzKGRhdGFfMS5kZWZhdWx0KTtcclxuICAgICAgICB0aGlzLnJlbmRlckZhdm9yaXRlVG95cyhkYXRhXzEuZGVmYXVsdCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgfVxyXG4gICAgcmVuZGVyRmF2b3JpdGVUb3lzKGRhdGEpIHtcclxuICAgICAgICAvLyBjb25zdCB0b3lzQ29sbGVjdGlvbjogaW50ZXJDYXJkW10gPSBbXTtcclxuICAgICAgICBjb25zdCB0b3lzQ29sbGVjdGlvbldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG95cy1jb2xsZWN0aW9uLXdyYXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b3lzQ29sbGVjdGlvbldyYXApO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5mYXZvcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVUb3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmF2b3JpdGUtdG95Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Z0Jyk7XHJcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvdG95cy8ke2VsLm51bX0ucG5nYCk7XHJcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBgdG95cy8ke2VsLm51bX0ucG5nYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYCR7ZWwuY291bnR9YDtcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlVG95LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZVRveS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgICAgIHRveXNDb2xsZWN0aW9uV3JhcC5hcHBlbmRDaGlsZChmYXZvcml0ZVRveSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyZWVTZXR0aW5nc1RveXMgPSBUcmVlU2V0dGluZ3NUb3lzO1xyXG4iLCJjb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIG51bTogJzEnLFxyXG4gICAgbmFtZTogJ9CR0L7Qu9GM0YjQvtC5INGI0LDRgCDRgSDRgNC40YHRg9C90LrQvtC8JyxcclxuICAgIGNvdW50OiAnMicsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMicsXHJcbiAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0Lkg0YjQsNGAINGBINGG0LLQtdGC0LDQvNC4JyxcclxuICAgIGNvdW50OiAnNScsXHJcbiAgICB5ZWFyOiAnMjAwMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczJyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDQvNCw0YLQvtCy0YvQuSDRiNCw0YAnLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHllYXI6ICcxOTkwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQnLFxyXG4gICAgbmFtZTogJ9Ch0L7RgdGD0LvRjNC60LAg0LrRgNCw0YHQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICcyJyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNScsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0LLQuNC90L7Qs9GA0LDQtCcsXHJcbiAgICBjb3VudDogJzQnLFxyXG4gICAgeWVhcjogJzE5ODAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzYnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDRgNC40YHRg9C90LrQvtC8JyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc3JyxcclxuICAgIG5hbWU6ICfQnNC+0LvQvtGH0L3Qvi3QsdC10LvRi9C5INGI0LDRgCcsXHJcbiAgICBjb3VudDogJzEyJyxcclxuICAgIHllYXI6ICcxOTYwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc4JyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc5JyxcclxuICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INGB0YLQsNGA0LjQvdC90YvQuScsXHJcbiAgICBjb3VudDogJzInLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTAnLFxyXG4gICAgbmFtZTogJ9CR0LXQu9GL0Lkg0YjQsNGAINGA0LXRgtGA0L4nLFxyXG4gICAgY291bnQ6ICc3JyxcclxuICAgIHllYXI6ICcxOTYwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTEnLFxyXG4gICAgbmFtZTogJ9Co0LjRiNC60LAg0LXQu9C+0LLQsNGPINCx0LXQu9Cw0Y8nLFxyXG4gICAgY291bnQ6ICcxMScsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzEyJyxcclxuICAgIG5hbWU6ICfQkdC10LvRi9C5INGI0LDRgCDRgSDRhtCy0LXRgtCw0LzQuCcsXHJcbiAgICBjb3VudDogJzUnLFxyXG4gICAgeWVhcjogJzE5ODAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxMycsXHJcbiAgICBuYW1lOiAn0KjQsNGAINGA0LDRgdC/0LjRgdC90L7QuSDQoNC10LrQsCcsXHJcbiAgICBjb3VudDogJzMnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE0JyxcclxuICAgIG5hbWU6ICfQqNCw0YAg0YDQsNGB0L/QuNGB0L3QvtC5INCU0LXRgNC10LLQvdGPJyxcclxuICAgIGNvdW50OiAnNCcsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTUnLFxyXG4gICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0YDQsNGB0L/QuNGB0L3QvtC5JyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxNicsXHJcbiAgICBuYW1lOiAn0KjQuNGI0LrQsCDRgNCw0YHQv9C40YHQvdCw0Y8g0J/QtdC50LfQsNC2JyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE3JyxcclxuICAgIG5hbWU6ICfQqNC40YjQutCwINGA0LDRgdC/0LjRgdC90LDRjycsXHJcbiAgICBjb3VudDogJzcnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE4JyxcclxuICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINCx0LDQvdGC0L7QvCcsXHJcbiAgICBjb3VudDogJzInLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE5JyxcclxuICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINC/0LDQtdGC0LrQsNC80LgnLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjAnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQsdCw0L3RgtC+0LwnLFxyXG4gICAgY291bnQ6ICc4JyxcclxuICAgIHllYXI6ICcxOTUwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjEnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQt9Cy0ZHQt9C00LDQvNC4JyxcclxuICAgIGNvdW50OiAnNCcsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzIyJyxcclxuICAgIG5hbWU6ICfQqNC40YjQutCwINC10LvQvtCy0LDRjyDQt9C+0LvQvtGC0LDRjycsXHJcbiAgICBjb3VudDogJzExJyxcclxuICAgIHllYXI6ICcxOTkwJyxcclxuICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyMycsXHJcbiAgICBuYW1lOiAn0JrQvtC70L7QutC+0LvRjNGH0LjQuiDRgdGC0LDRgNC40L3QvdGL0LknLFxyXG4gICAgY291bnQ6ICc5JyxcclxuICAgIHllYXI6ICcxOTUwJyxcclxuICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjQnLFxyXG4gICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0LjQt9GP0YnQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICcxJyxcclxuICAgIHllYXI6ICcxOTQwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI1JyxcclxuICAgIG5hbWU6ICfQoNC+0LfQvtCy0YvQuSDRiNCw0YAg0YEg0LHQu9GR0YHRgtC60LDQvNC4JyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjYnLFxyXG4gICAgbmFtZTogJ9Cg0YPQsdC40L3QvtCy0L4t0LfQvtC70L7RgtC+0Lkg0YjQsNGAJyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjcnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgY291bnQ6ICc0JyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI4JyxcclxuICAgIG5hbWU6ICfQkdC+0YDQtNC+0LLRi9C5INGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyOScsXHJcbiAgICBuYW1lOiAn0KHRgtCw0YDQuNC90L3Ri9C5INGI0LDRgCDRgSDRhtCy0LXRgtCw0LzQuCcsXHJcbiAgICBjb3VudDogJzUnLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzAnLFxyXG4gICAgbmFtZTogJ9Ch0YLQsNGA0LjQvdC90YvQuSDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczMScsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINCx0LvRkdGB0YLQutCw0LzQuCcsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzInLFxyXG4gICAgbmFtZTogJ9Ch0LjQvdC40Lkg0YjQsNGAINCS0YHQtdC70LXQvdC90LDRjycsXHJcbiAgICBjb3VudDogJzExJyxcclxuICAgIHllYXI6ICcxOTcwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzMnLFxyXG4gICAgbmFtZTogJ9Ch0LjQvdC40Lkg0YjQsNGAINGB0L4g0YHQvdC10LbQuNC90LrQvtC5JyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM0JyxcclxuICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSAg0YjQsNGAINGBINGD0LfQvtGA0L7QvCcsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzUnLFxyXG4gICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCb0LjRgSDQsiDRiNCw0YDRhNC1JyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM2JyxcclxuICAgIG5hbWU6ICfQodC40YDQtdC90LXQstGL0Lkg0YjQsNGAINCc0LXRgtC10LvRjCcsXHJcbiAgICBjb3VudDogJzEnLFxyXG4gICAgeWVhcjogJzIwMDAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczNycsXHJcbiAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0LkgINGI0LDRgCDQnNC10YLQtdC70YwnLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcyMDAwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM4JyxcclxuICAgIG5hbWU6ICfQk9C+0LvRg9Cx0L7QuSAg0YjQsNGAINCc0LXRgtC10LvRjCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzIwMDAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczOScsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdCw0Y8g0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzE5OTAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQwJyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC30L7Qu9C+0YLQsNGPJyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzIwMjAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0MScsXHJcbiAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQsNGA0LrRgtC40YfQtdGB0LrQsNGPJyxcclxuICAgIGNvdW50OiAnMTEnLFxyXG4gICAgeWVhcjogJzIwMjAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDInLFxyXG4gICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5INGI0LDRgCcsXHJcbiAgICBjb3VudDogJzEwJyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQzJyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC00LLRg9GF0YbQstC10YLQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcxOTYwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0NCcsXHJcbiAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JDQvdCz0LXQu9CwJyxcclxuICAgIGNvdW50OiAnMTEnLFxyXG4gICAgeWVhcjogJzE5NDAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQ1JyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC90L7QstC+0LPQvtC00L3Rj9GPJyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0NicsXHJcbiAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JzRg9GF0L7QvNC+0YAnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDcnLFxyXG4gICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCa0L7Qu9C+0LTQtdGGJyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDgnLFxyXG4gICAgbmFtZTogJ9CW0LXQu9GC0YvQuSDRiNCw0YAg0YEg0LHQsNC90YLQvtC8JyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDknLFxyXG4gICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0YEg0LHQuNGA0Y7Qt9C+0LknLFxyXG4gICAgY291bnQ6ICc0JyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTAnLFxyXG4gICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0LHQvtC70YzRiNC+0LknLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHllYXI6ICcyMDIwJyxcclxuICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1MScsXHJcbiAgICBuYW1lOiAn0KjQuNGI0LrQsCDRgSDQuNC30LzQvtGA0L7Qt9GM0Y4nLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1MicsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINC90LDQtNC/0LjRgdGM0Y4nLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzUzJyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINGB0LXRgNC10LHRgNC40YHRgtCw0Y8nLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcyMDIwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU0JyxcclxuICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSDRiNCw0YAg0YEg0YDQuNGB0YPQvdC60L7QvCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTUnLFxyXG4gICAgbmFtZTogJ9Cf0YDRj9C90LjRh9C90YvQuSDQtNC+0LzQuNC6JyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1NicsXHJcbiAgICBuYW1lOiAn0J/RgNGP0L3QuNGH0L3Ri9C5INGC0LXRgNC10LzQvtC6JyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU3JyxcclxuICAgIG5hbWU6ICfQn9GA0Y/QvdC40YfQvdCw0Y8g0LjQt9Cx0YPRiNC60LAnLFxyXG4gICAgY291bnQ6ICcxJyxcclxuICAgIHllYXI6ICcxOTQwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU4JyxcclxuICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQsdC10LvQvtCz0L4g0LzQtdC00LLQtdC00Y8nLFxyXG4gICAgY291bnQ6ICcyJyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1OScsXHJcbiAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQvdCw0LTQv9C40YHRjNGOJyxcclxuICAgIGNvdW50OiAnMTAnLFxyXG4gICAgeWVhcjogJzE5OTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzYwJyxcclxuICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQk9C+0LvRg9Cx0YwnLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0b3lNYWluUGFnZV8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy90b3lzL3RveU1haW5QYWdlXCIpO1xyXG5jb25zdCB0cmVlTWFpblBhZ2VfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdHJlZS90cmVlTWFpblBhZ2VcIik7XHJcbmNvbnN0IHN0YXJ0UGFnZV8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9zdGFydC9zdGFydFBhZ2VcIik7XHJcbnJlcXVpcmUoXCIuL251bGwuc2Nzc1wiKTtcclxucmVxdWlyZShcIi4vdG95LnNjc3NcIik7XHJcbnJlcXVpcmUoXCIuL2dsb2JhbC5zY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi90cmVlLnNjc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0YXJ0LnNjc3NcIik7XHJcbmNvbnN0IHRveVBhZ2UgPSBuZXcgdG95TWFpblBhZ2VfMS5Ub3lQYWdlKCdtYWluJyk7XHJcbmNvbnN0IHRyZWVNYWluUGFnZSA9IG5ldyB0cmVlTWFpblBhZ2VfMS5UcmVlTWFpblBhZ2UoJ21haW4nKTtcclxuY29uc3Qgc3RhcnRQYWdlID0gbmV3IHN0YXJ0UGFnZV8xLlN0YXJ0UGFnZSgnbWFpbicpO1xyXG5zdGFydFBhZ2UucmVuZGVyKCk7XHJcbmNvbnN0IHRveXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG95cycpO1xyXG50b3lzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdHJlZU1haW5QYWdlLmRlc3Ryb3koKTtcclxuICAgIHN0YXJ0UGFnZS5kZXN0cm95KCk7XHJcbiAgICBjb25zdCB0b3lQYWdlID0gbmV3IHRveU1haW5QYWdlXzEuVG95UGFnZSgnbWFpbicpO1xyXG4gICAgdG95UGFnZS5yZW5kZXIoKTtcclxufSk7XHJcbmNvbnN0IHRyZWVNYWtlVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlZS1tYWtlLXVwJyk7XHJcbnRyZWVNYWtlVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b3lQYWdlLmRlc3Ryb3koKTtcclxuICAgIHN0YXJ0UGFnZS5kZXN0cm95KCk7XHJcbiAgICBjb25zdCB0cmVlTWFpblBhZ2UgPSBuZXcgdHJlZU1haW5QYWdlXzEuVHJlZU1haW5QYWdlKCdtYWluJyk7XHJcbiAgICB0cmVlTWFpblBhZ2UucmVuZGVyKCk7XHJcbn0pO1xyXG5jb25zdCBzdGFydFBhZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlZScpO1xyXG5zdGFydFBhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b3lQYWdlLmRlc3Ryb3koKTtcclxuICAgIHRyZWVNYWluUGFnZS5kZXN0cm95KCk7XHJcbiAgICBzdGFydFBhZ2UucmVuZGVyKCk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gY2xhc3MgUmluZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuLy8gICAvLyBDYW4gZGVmaW5lIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBpZiB5b3Ugd2lzaC5cclxuLy8gICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgIC8vIElmIHlvdSBkZWZpbmUgYSBjb25zdHJ1Y3RvciwgYWx3YXlzIGNhbGwgc3VwZXIoKSBmaXJzdCFcclxuLy8gICAgIC8vIFRoaXMgaXMgc3BlY2lmaWMgdG8gQ0UgYW5kIHJlcXVpcmVkIGJ5IHRoZSBzcGVjLlxyXG4vLyAgICAgc3VwZXIoKTtcclxuLy8gICAgIC8vIFNldHVwIGEgY2xpY2sgbGlzdGVuZXIgb24gPGFwcC1kcmF3ZXI+IGl0c2VsZi5cclxuLy8gICAgIGNvbnN0IHJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSE7XHJcbi8vICAgICByaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmluZycpO1xyXG4vLyAgICAgdGhpcy5pbm5lclRleHQgPSAnaGVsbG8nO1xyXG4vLyAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4vLyAgICAgY29uc29sZS5sb2coc3R5bGUpO1xyXG4vLyAgICAgY29uc29sZS5sb2coc3R5bGUuaXNDb25uZWN0ZWQpO1xyXG4vLyAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxyXG4vLyAgICAgPHN0eWxlPlxyXG4vLyAgICAgICAucmluZyB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XHJcbi8vICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAzNnB4OyAgICBcclxuLy8gICAgICAgfVxyXG4vLyAgICAgPC9zdHlsZT5cclxuLy8gICAgIGA7XHJcbi8vICAgICAvLyByaW5nLmFwcGVuZENoaWxkKHJpbmcpO1xyXG4vLyAgICAgcmluZy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncmluZy1mb3ItZmF2b3JpdGUnLCBSaW5nKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9