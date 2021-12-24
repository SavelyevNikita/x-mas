/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAEE,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toyCard{margin:25px;padding:10px;width:222px;height:342px;background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);backdrop-filter:blur(4px);border-radius:10px;border:solid #24c5db 1px;display:flex;flex-direction:column;justify-content:space-between}.nameToy__name{font-family:Neucha;font-style:normal;font-weight:normal;font-size:20px;line-height:20px;display:flex;align-items:center;color:#fff}.nameToy__pic{margin:20px auto 10px;width:100px;height:100px}.countToy__count-static,.yearToy__year-static,.shapeToy__shape-static,.colorToy__color-static,.sizeToy__size-static,.favoriteToy__favorite-static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:15px;line-height:12px;display:flex;align-items:center;color:#fff}.Сhosen{background:radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 235, 179, 0.5) 100%)}", "",{"version":3,"sources":["webpack://./src/components/card.scss"],"names":[],"mappings":"AAAA,SAAA,WACI,CAAA,YACA,CAAA,WACA,CAAA,YACA,CAAA,oHACA,CAAA,yBACA,CAAA,kBACA,CAAA,wBACA,CAAA,YACA,CAAA,qBACA,CAAA,6BACA,CAAA,eAIJ,kBACI,CAAA,iBACA,CAAA,kBACA,CAAA,cACA,CAAA,gBACA,CAAA,YACA,CAAA,kBACA,CAAA,UACA,CAAA,cAGJ,qBACI,CAAA,WAEA,CAAA,YACA,CAAA,kJAGJ,kBAMI,CAAA,iBACA,CAAA,kBACA,CAAA,cACA,CAAA,gBACA,CAAA,YACA,CAAA,kBACA,CAAA,UACA,CAAA,QAEJ,oHACI","sourcesContent":[".toyCard {\n    margin: 25px;\n    padding: 10px;\n    width: 222px;\n    height: 342px;\n    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgba(179, 246, 255, 0.5) 100%);\n    backdrop-filter: blur(4px);\n    border-radius: 10px;\n    border: solid #24C5DB 1px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n// .nameToy{\n.nameToy__name {\n    font-family: Neucha;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFFFFF;\n}\n\n.nameToy__pic {\n    margin: 20px auto 10px;\n    // margin: 10px;\n    width: 100px;\n    height: 100px;\n}\n\n.countToy__count-static,\n.yearToy__year-static,\n.shapeToy__shape-static,\n.colorToy__color-static,\n.sizeToy__size-static,\n.favoriteToy__favorite-static {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 15px;\n    line-height: 12px;\n    display: flex;\n    align-items: center;\n    color: #FFFFFF;\n}\n.Сhosen{\n    background: radial-gradient(109.56% 109.56% at 0% -2.94%, rgba(255, 255, 255, 0.5) 0%, rgb(255 235 179 / 50%) 100%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Neucha_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(912);
/* harmony import */ var _assets_svg_mute_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(780);
/* harmony import */ var _assets_svg_snow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(486);
/* harmony import */ var _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(868);
/* harmony import */ var _assets_svg_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _assets_svg_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(724);
/* harmony import */ var _assets_svg_bell_2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(796);
/* harmony import */ var _assets_svg_ball_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(594);
/* harmony import */ var _assets_svg_cone_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(592);
/* harmony import */ var _assets_svg_toy_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(523);
/* harmony import */ var _assets_svg_white_sqr_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(971);
/* harmony import */ var _assets_svg_yellow_sqr_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(341);
/* harmony import */ var _assets_svg_red_sqr_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(840);
/* harmony import */ var _assets_svg_blue_sqr_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(974);
/* harmony import */ var _assets_svg_green_sqr_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(743);
/* harmony import */ var _assets_svg_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(323);
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
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_18__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:\"Neucha\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");font-weight:normal;font-style:normal}body{display:flex;flex-direction:column;background:#192f2d}header{height:50px}main .collection-settings .wrapper .size-wrap .size-static,main .collection-settings .wrapper .set0f-wrap .set0f-set-min,main .collection-settings .wrapper .set0f-wrap .set0f-set-max,main .collection-settings .wrapper .set0f-wrap .set0f-static,main .collection-settings .wrapper .year-wrap .year-set-min,main .collection-settings .wrapper .year-wrap .year-set-max,main .collection-settings .wrapper .year-wrap .year-static,main .collection-settings .wrapper .color-wrap .color-static,main .collection-settings .wrapper .form-wrap .form-static,main .collection-settings .wrapper .category-wrap .category-static,main .collection-settings .wrapper .sort-wrap .sort-static{height:22px;font-family:\"Neucha\";font-style:normal;font-weight:normal;font-size:20px;line-height:22px;text-transform:uppercase;color:#fff}main .collection-settings .wrapper .form-wrap .form-set .bell-static,main .collection-settings .wrapper .form-wrap .form-set .ball-static,main .collection-settings .wrapper .form-wrap .form-set .cone-static,main .collection-settings .wrapper .form-wrap .form-set .snow-static,main .collection-settings .wrapper .form-wrap .form-set .figurine-static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;text-align:center;color:#fff}main .collection-settings .wrapper .favorite-wrap .favorite-static,main .collection-settings .wrapper .category-wrap .category-set__static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;text-align:center;color:#fff}main{margin:0 auto;width:1920px;display:flex}main .collection-settings .wrapper{margin-top:50px;max-width:450px;height:900px;display:flex;flex-direction:column;justify-content:space-between}main .collection-settings .wrapper .effects-and-seach-wrap{display:flex;justify-content:space-between}main .collection-settings .wrapper .effects-and-seach-wrap .sound{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 0 0/contain no-repeat;width:36px;height:36px}main .collection-settings .wrapper .effects-and-seach-wrap .snow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 0 0/contain no-repeat;width:36px;height:36px}main .collection-settings .wrapper .effects-and-seach-wrap .search-set{width:254px;height:36px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px;display:flex;justify-content:space-between;align-items:center;padding:0 1rem}main .collection-settings .wrapper .effects-and-seach-wrap .search-set .search-toys{padding:0;margin:0;border:0;border:none;background:none}main .collection-settings .wrapper .effects-and-seach-wrap .search-set .loupe{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 0 0/contain no-repeat;width:24px;height:24px}main .collection-settings .wrapper .sort-wrap{display:flex;justify-content:space-between}main .collection-settings .wrapper .sort-wrap .sort-set{display:flex;justify-content:center;align-items:center;width:100%;height:30px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .collection-settings .wrapper .sort-wrap .sort-set .sort-set-select{padding:.5em 1em;border:none;background:none;appearance:none}main .collection-settings .wrapper .category-wrap .category-set__static{display:flex;align-items:center}main .collection-settings .wrapper .category-wrap .category-set__square{-webkit-appearance:none;-moz-appearance:none;appearance:none}main .collection-settings .wrapper .category-wrap .category-set__static-checkbox{width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 0 0/contain no-repeat}main .collection-settings .wrapper .category-wrap .category-set__square:checked+.category-set__static-checkbox{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 0 0/contain no-repeat}main .collection-settings .wrapper .form-wrap .form-set{display:flex;justify-content:space-between}main .collection-settings .wrapper .form-wrap .form-set .bell{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .ball{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .cone{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .snow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .form-wrap .form-set .figurine{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") 0 0/contain no-repeat;width:42px;height:42px}main .collection-settings .wrapper .color-wrap .color-set{width:225px;height:24px;display:flex;justify-content:space-between}main .collection-settings .wrapper .color-wrap .color-set .white{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .white:hover{cursor:pointer}main .collection-settings .wrapper .color-wrap .color-set .yellow{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .red{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .blue{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");width:24px;height:24px}main .collection-settings .wrapper .color-wrap .color-set .green{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");width:24px;height:24px}main .collection-settings .wrapper .year-wrap .year-static{width:100%;height:22px}main .collection-settings .wrapper .year-wrap .year-set{margin:15px auto;max-width:350px}main .collection-settings .wrapper .year-wrap .year-set-min,main .collection-settings .wrapper .year-wrap .year-set-max{display:flex;justify-content:center;align-items:center;width:90px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .collection-settings .wrapper .year-wrap .year-set-min-max{display:flex;justify-content:space-between}main .collection-settings .wrapper .set0f-wrap .set0f-static{width:100%;height:22px}main .collection-settings .wrapper .set0f-wrap .set0f-set{margin:15px auto;max-width:350px}main .collection-settings .wrapper .set0f-wrap .set0f-set-min,main .collection-settings .wrapper .set0f-wrap .set0f-set-max{display:flex;justify-content:center;align-items:center;width:90px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px}main .collection-settings .wrapper .set0f-wrap .set0f-set-min-max{display:flex;justify-content:space-between}main .collection-settings .wrapper .size-wrap{padding-left:30px}main .collection-settings .wrapper .size-wrap .size-set .large-set__static,main .collection-settings .wrapper .size-wrap .size-set .middle-set__static,main .collection-settings .wrapper .size-wrap .size-set .little-set__static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;text-align:center;color:#fff;margin-right:3rem}main .collection-settings .wrapper .size-wrap .size-set .large-set__square,main .collection-settings .wrapper .size-wrap .size-set .middle-set__square,main .collection-settings .wrapper .size-wrap .size-set .little-set__square{position:absolute;-webkit-appearance:none;-moz-appearance:none;appearance:none}main .collection-settings .wrapper .size-wrap .size-set .large-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .middle-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .little-set__static-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") 0 0/contain no-repeat;border-radius:5px}main .collection-settings .wrapper .size-wrap .size-set .large-set__square:checked+.large-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .middle-set__square:checked+.middle-set__static-checkbox,main .collection-settings .wrapper .size-wrap .size-set .little-set__square:checked+.little-set__static-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 0 0/contain no-repeat;border-radius:5px}main .collection-settings .wrapper .favorite-wrap{padding-left:30px}main .collection-settings .wrapper .favorite-wrap .favorite-static .favorite-square{position:absolute;-webkit-appearance:none;-moz-appearance:none;appearance:none}main .collection-settings .wrapper .favorite-wrap .favorite-static .favorite-square-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");border-radius:5px}main .collection-settings .wrapper .favorite-wrap .favorite-static .favorite-square:checked+.favorite-square-checkbox{margin-left:-30px;position:absolute;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");border-radius:5px}main .collection-settings .wrapper .reset-wrap{display:flex;justify-content:space-between}main .collection-settings .wrapper .reset-wrap .reset-filters,main .collection-settings .wrapper .reset-wrap .reset-settings{display:flex;justify-content:center;align-items:center;width:178px;height:28px;background:radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);backdrop-filter:blur(31px);border-radius:30px;border:solid #24c5db 1px;cursor:pointer}main .collection-settings .wrapper .reset-wrap .reset-filters .reset-filters__reset-static,main .collection-settings .wrapper .reset-wrap .reset-filters .reset-settings__reset-static,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-filters__reset-static,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-settings__reset-static{font-family:Steppe;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;text-align:center;color:#fff}main .collection-settings .wrapper .reset-wrap .reset-filters .reset-filters__reset-static input,main .collection-settings .wrapper .reset-wrap .reset-filters .reset-settings__reset-static input,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-filters__reset-static input,main .collection-settings .wrapper .reset-wrap .reset-settings .reset-settings__reset-static input{padding:0;border:none;font:inherit;color:inherit;background-color:transparent}main .collection-new-year{display:flex;flex-wrap:wrap}footer{margin:0 auto;margin-top:auto;width:1920px;height:100px;display:flex;align-items:center;justify-content:space-around}footer .rss-logo{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");width:220px;height:82px}footer .year{color:#fff}.developer a{color:#fff;text-decoration:none}.ExptoyCard{display:none}.year-display-none,.quantity-display-none,.value-display-none,.ballShaped-display-none,.bellShaped-display-none,.coneShaped-display-none,.snowShaped-display-none,.figurineShaped-display-none,.white-display-none,.yellow-display-none,.red-display-none,.blue-display-none,.green-display-none,.large-display-none,.middle-display-none,.little-display-none,.favorite-display-none{display:none}", "",{"version":3,"sources":["webpack://./src/global.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Neucha';\n    src: url('./assets/fonts/Neucha-Regular.ttf') format('ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n$col:rgb(255,\n0,\n0);\nbody {\n    display: flex;\n    flex-direction: column;\n    background: #192F2D;\n}\nheader{\n    // border: tomato 1px solid;\n    height: 50px;\n}\n\n%text-shared {\n    height: 22px;\n    font-family: 'Neucha';\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 22px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n}\n\n%secondary-text-shared {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n%text-large-middle-little {\n    font-family: Steppe;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\nmain {\n    margin: 0 auto;\n    width: 1920px;\n    display: flex;\n    .collection-settings {\n        .wrapper {\n            margin-top: 50px;\n            max-width: 450px;\n            height: 900px;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            .effects-and-seach-wrap {\n                display: flex;\n                justify-content: space-between;\n                .sound {\n                    background: url(\"./assets/svg/mute.svg\") 0 0/contain no-repeat;                    \n                    width: 36px;\n                    height: 36px;\n                }\n                .snow {\n                    background: url(\"./assets/svg/snow.svg\") 0 0/contain no-repeat;\n                    width: 36px;\n                    height: 36px;\n                }\n                .search-set {\n                    width: 254px;\n                    height: 36px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(36, 197, 219, 0.15) 0%, rgba(36, 197, 219, 0) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 0 1rem;\n                    .search-toys {\n                        padding: 0;\n                        margin: 0;\n                        border: 0;\n                        border: none;\n                        background: none;\n                    }\n                    .loupe {\n                        background: url(\"./assets/svg/search.svg\") 0 0/contain no-repeat;\n                        width: 24px;\n                        height: 24px;\n                    }\n                }\n            }\n            .sort-wrap {\n                display: flex;\n                justify-content: space-between;\n                .sort-static {\n                    @extend %text-shared;\n                }\n                .sort-set {\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 100%;\n                    height: 30px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                    .sort-set-select {\n                        // color: white;\n                        padding: 0.5em 1em;\n                        border: none;\n                        background: none;\n                        appearance: none;\n                    }\n                }\n            }\n            .category-wrap {\n                .category-static {\n                    @extend %text-shared;\n                }\n                .category-set__static {\n                    display: flex;\n                    align-items: center;\n                    @extend %text-large-middle-little;\n                }\n                .category-set__square {\n                    -webkit-appearance: none;\n                    -moz-appearance: none;\n                    appearance: none;\n                }\n                .category-set__static-checkbox {\n                    width: 24px;\n                    height: 24px;\n                    background: url(\"./assets/svg/checkbox.svg\") 0 0/contain no-repeat;\n                }\n                .category-set__square:checked+.category-set__static-checkbox {\n                    background: url(\"./assets/svg/checkbox-checked.svg\") 0 0/contain no-repeat;\n                }\n            }\n            .form-wrap {\n                .form-static {\n                    @extend %text-shared;\n                }\n                .form-set {\n                    display: flex;\n                    justify-content: space-between;\n                    .bell-static,\n                    .ball-static,\n                    .cone-static,\n                    .snow-static,\n                    .figurine-static {\n                        @extend %secondary-text-shared;\n                    }\n                    .bell {\n                        background: url(\"./assets/svg/bell-2.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .ball {\n                        background: url(\"./assets/svg/ball.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .cone {\n                        background: url(\"./assets/svg/cone.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .snow {\n                        background: url(\"./assets/svg/snow.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .figurine {\n                        background: url(\"./assets/svg/toy.svg\") 0 0/contain no-repeat;\n                        width: 42px;\n                        height: 42px;\n                    }\n                    .bell-static,\n                    .ball-static,\n                    .cone-static,\n                    .snow-static,\n                    .figurine-static {\n                        @extend %secondary-text-shared;\n                    }\n                }\n            }\n            .color-wrap {\n                .color-static {\n                    @extend %text-shared;\n                }\n                .color-set {\n                    width: 225px;\n                    height: 24px;\n                    display: flex;\n                    justify-content: space-between;\n                    .white {\n                        &:hover {\n                            cursor: pointer\n                        }\n                        background: url(\"./assets/svg/white-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .yellow {\n                        background: url(\"./assets/svg/yellow-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .red {\n                        background: url(\"./assets/svg/red-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .blue {\n                        background: url(\"./assets/svg/blue-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                    .green {\n                        background: url(\"./assets/svg/green-sqr.svg\");\n                        width: 24px;\n                        height: 24px;\n                    }\n                }\n            }\n            .year-wrap {\n                .year-static {\n                    @extend %text-shared;\n                    width: 100%;\n                    height: 22px;\n                }\n                .year-set{\n                    margin: 15px auto;\n                    max-width: 350px;\n                }    \n                .year-set-min,\n                .year-set-max {\n                    @extend %text-shared;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 90px;\n                    height: 28px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                }\n                .year-set-min-max {\n                    display: flex;\n                    justify-content: space-between;\n                }\n            }\n            .set0f-wrap {\n                .set0f-static {\n                    @extend %text-shared;\n                    width: 100%;\n                    height: 22px;\n                }\n                .set0f-set{\n                    margin: 15px auto;\n                    max-width: 350px;\n                }\n                .set0f-set-min,\n                .set0f-set-max {\n                    @extend %text-shared;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 90px;\n                    height: 28px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                }\n                .set0f-set-min-max {\n                    display: flex;\n                    justify-content: space-between;\n                }\n            }\n            .size-wrap {\n                padding-left: 30px;\n                .size-static {\n                    @extend %text-shared;\n                    // width: 10rem;\n                    // height: 22px;\n                }\n                .size-set {\n                    .large-set__static,\n                    .middle-set__static,\n                    .little-set__static {\n                        font-family: Steppe;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 16px;\n                        line-height: 19px;\n                        text-align: center;\n                        color: #FFFFFF;\n                        margin-right: 3rem;\n                    }\n                    .large-set__square,\n                    .middle-set__square,\n                    .little-set__square {\n                        position: absolute;\n                        -webkit-appearance: none;\n                        -moz-appearance: none;\n                        appearance: none;\n                    }\n                    .large-set__static-checkbox,\n                    .middle-set__static-checkbox,\n                    .little-set__static-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox.svg\") 0 0/contain no-repeat;\n                        border-radius: 5px;\n                    }\n                    .large-set__square:checked+.large-set__static-checkbox,\n                    .middle-set__square:checked+.middle-set__static-checkbox,\n                    .little-set__square:checked+.little-set__static-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox-checked.svg\") 0 0/contain no-repeat;\n                        border-radius: 5px;\n                    }\n                }\n            }\n            .favorite-wrap {\n                padding-left: 30px;\n                .favorite-static {\n                    @extend %text-large-middle-little;\n                    .favorite-square {\n                        position: absolute;\n                        -webkit-appearance: none;\n                        -moz-appearance: none;\n                        appearance: none;\n                    }\n                    .favorite-square-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox.svg\");\n                        border-radius: 5px;\n                    }\n                    .favorite-square:checked+.favorite-square-checkbox {\n                        margin-left: -30px;\n                        position: absolute;\n                        width: 24px;\n                        height: 24px;\n                        background: url(\"./assets/svg/checkbox-checked.svg\");\n                        border-radius: 5px;\n                    }\n                }\n            }\n            .reset-wrap {\n                display: flex;\n                justify-content: space-between;\n                .reset-filters,\n                .reset-settings {\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 178px;\n                    height: 28px;\n                    background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);\n                    backdrop-filter: blur(31px);\n                    border-radius: 30px;\n                    border: solid #24C5DB 1px;\n                    cursor: pointer;\n                    .reset-filters__reset-static,\n                    .reset-settings__reset-static {\n                        font-family: Steppe;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 12px;\n                        line-height: 14px;\n                        text-align: center;\n                        color: #FFFFFF;\n                        input {\n                            padding: 0;\n                            border: none;\n                            font: inherit;\n                            color: inherit;\n                            background-color: transparent;\n                        }\n                    }\n                }\n            }\n        }\n    }\n    .collection-new-year {\n        display: flex;\n        flex-wrap: wrap;\n    }\n}\n\nfooter {\n    margin: 0 auto;\n    margin-top: auto;\n    width: 1920px;\n    // border: rebeccapurple 1px solid;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    .rss-logo {\n        background: url(\"./assets/svg/rs_school_logo.svg\");\n        width: 220px;\n        height: 82px;\n    }\n    .year {\n        color: #fff;\n    }\n}\n\n.developer a {\n    color: #fff;\n    text-decoration: none;\n}\n\n.ExptoyCard {\n    display: none;\n}\n\n.year-display-none,\n.quantity-display-none,\n.value-display-none,\n.ballShaped-display-none,\n.bellShaped-display-none,\n.coneShaped-display-none,\n.snowShaped-display-none,\n.figurineShaped-display-none,\n.white-display-none,\n.yellow-display-none,\n.red-display-none,\n.blue-display-none,\n.green-display-none,\n.large-display-none,\n.middle-display-none,\n.little-display-none,\n.favorite-display-none {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 68:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,*::before,*::after{box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}input,button,textarea,select{font:inherit}", "",{"version":3,"sources":["webpack://./src/null.scss"],"names":[],"mappings":"AACA,qBAGE,qBAAA,CAIF,oBAEE,SAAA,CAIF,6EAcE,QAAA,CAIF,KACE,gBAAA,CACA,sBAAA,CACA,4BAAA,CACA,eAAA,CAIF,oBAEE,eAAA,CAIF,eACE,6BAAA,CAIF,IACE,cAAA,CACA,aAAA,CAIF,YACE,cAAA,CAIF,6BAIE,YAAA","sourcesContent":["/* Указываем box sizing */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Убираем внутренние отступы */\nul[class],\nol[class] {\n  padding: 0;\n}\n\n/* Убираем внешние отступы */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Выставляем основные настройки по-умолчанию для body */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/\nul[class],\nol[class] {\n  list-style: none;\n}\n\n/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Упрощаем работу с изображениями */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Указываем понятную периодичность в потоке данных у article*/\narticle > * + * {\n  margin-top: 1em;\n}\n\n/* Наследуем шрифты для инпутов и кнопок */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
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

/***/ 15:
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

/***/ 667:
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

/***/ 211:
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

/***/ 671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(850);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_card_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(525);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_null_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_null_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_null_scss__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ }),

/***/ 379:
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

/***/ 589:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cards = void 0;
__webpack_require__(937);
__webpack_require__(366);
const card_1 = __webpack_require__(819);
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
}
exports.Cards = Cards;


/***/ }),

/***/ 819:
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
        // countToy.appendChild(countToy_count);
        yearToy_year_static.innerText = `Год покупки: ${this.year}`;
        yearToy.appendChild(yearToy_year_static);
        // yearToy.appendChild(yearToy_year);
        shapeToy_shape_static.innerText = `Форма игрушки: ${this.shape}`;
        shapeToy.appendChild(shapeToy_shape_static);
        // shapeToy.appendChild(shapeToy_shape);
        colorToy_color_static.innerText = `Цвет игрушки: ${this.color}`;
        colorToy.appendChild(colorToy_color_static);
        // colorToy.appendChild(colorToy_color);
        sizeToy_size_static.innerText = `Размер игрушки: ${this.size}`;
        sizeToy.appendChild(sizeToy_size_static);
        // sizeToy.appendChild(sizeToy_size);
        favoriteToy_favorite_static.innerText = `Любимая: ${this.favorite}`;
        favoriteToy.appendChild(favoriteToy_favorite_static);
        // favoriteToy.appendChild(favoriteToy_favorite);
        toyCard.appendChild(nameToy);
        toyCard.appendChild(countToy);
        toyCard.appendChild(yearToy);
        toyCard.appendChild(shapeToy);
        toyCard.appendChild(colorToy);
        toyCard.appendChild(sizeToy);
        toyCard.appendChild(favoriteToy);
        toyCard.addEventListener('click', () => {
            this.ischoosen();
            // console.log(this.name);
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
}
exports.Card = Card;


/***/ }),

/***/ 874:
/***/ (() => {

"use strict";

class Ring extends HTMLElement {
    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        // Setup a click listener on <app-drawer> itself.
        const ring = document.createElement('div');
        ring.setAttribute('class', 'ring');
        this.innerText = 'hello';
        const style = document.createElement('style');
        console.log(style);
        console.log(style.isConnected);
        style.innerHTML = `
    <style>
      .ring {
        background: radial-gradient(118.88% 606.86% at 0% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(157, 243, 255, 0.2) 100%);
        width: 36px;
        height: 36px;    
      }
    </style>
    `;
        // ring.appendChild(ring);
        ring.appendChild(style);
    }
}
customElements.define('ring-for-favorite', Ring);


/***/ }),

/***/ 84:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Slider = void 0;
const nouislider_1 = __importDefault(__webpack_require__(211));
__webpack_require__(671);
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

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Cards_1 = __webpack_require__(589);
__webpack_require__(937);
__webpack_require__(690);
const data_js_1 = __importDefault(__webpack_require__(471));
const app = new Cards_1.Cards(data_js_1.default);
app.renderToys();


/***/ }),

/***/ 823:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sorting = void 0;
const data_js_1 = __importDefault(__webpack_require__(471));
const Cards_1 = __webpack_require__(589);
const slider_1 = __webpack_require__(84);
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
        this.data = data_js_1.default.sort((a, b) => {
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
        this.data = data_js_1.default.sort((a, b) => {
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
        this.data = data_js_1.default.sort((a, b) => {
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
        this.data = data_js_1.default.sort((a, b) => {
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
const sorting = new Sorting(data_js_1.default);
sorting.addListener();


/***/ }),

/***/ 471:
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

/***/ 912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Neucha-Regular.ttf";

/***/ }),

/***/ 594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ball.svg";

/***/ }),

/***/ 796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bell-2.svg";

/***/ }),

/***/ 974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blue-sqr.svg";

/***/ }),

/***/ 724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/checkbox-checked.svg";

/***/ }),

/***/ 2:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/checkbox.svg";

/***/ }),

/***/ 592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cone.svg";

/***/ }),

/***/ 743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/green-sqr.svg";

/***/ }),

/***/ 780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mute.svg";

/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/red-sqr.svg";

/***/ }),

/***/ 323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rs_school_logo.svg";

/***/ }),

/***/ 868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/search.svg";

/***/ }),

/***/ 486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/snow.svg";

/***/ }),

/***/ 523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/toy.svg";

/***/ }),

/***/ 971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/white-sqr.svg";

/***/ }),

/***/ 341:
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(607);
/******/ 	__webpack_require__(874);
/******/ 	var __webpack_exports__ = __webpack_require__(823);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJDLG1DQUFtQyxjQUFjLGdCQUFnQixHQUFHLFNBQVMsZ0hBQWdILEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0s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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzbEJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94bWFzLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvY2FyZC5zY3NzIiwid2VicGFjazovL3htYXMvLi9zcmMvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9udWxsLnNjc3MiLCJ3ZWJwYWNrOi8veG1hcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veG1hcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3htYXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3htYXMvLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuanMiLCJ3ZWJwYWNrOi8veG1hcy8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3M/YzNkNSIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvY2FyZC5zY3NzPzFiYzQiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9nbG9iYWwuc2Nzcz8yYzI0Iiwid2VicGFjazovL3htYXMvLi9zcmMvbnVsbC5zY3NzPzdlMTEiLCJ3ZWJwYWNrOi8veG1hcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2NvbXBvbmVudHMvQ2FyZHMudHMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL2NhcmQudHMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL215SW5uZXJGb3JIZWFkZXIudHMiLCJ3ZWJwYWNrOi8veG1hcy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3htYXMvLi9zcmMvc29ydGluZy50cyIsIndlYnBhY2s6Ly94bWFzLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8veG1hcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly94bWFzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3htYXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3htYXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly94bWFzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veG1hcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3htYXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8veG1hcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3htYXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3htYXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcXG4gKi9cXG4ubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICByaWdodDogLTE3cHg7XFxuICB0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICByaWdodDogLTZweDtcXG4gIGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgbGVmdDogLTE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogU3R5bGluZztcXG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcXG4gKi9cXG4ubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XFxufVxcbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XFxuICovXFxuLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI0I4QjhCODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi8qIEJhc2U7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLFxcbi5ub1VpLXBpcHMgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4vKiBWYWx1ZXM7XFxuICpcXG4gKi9cXG4ubm9VaS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubm9VaS12YWx1ZS1zdWIge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNDQ0M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi8qIEhvcml6b250YWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4ubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qv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Q0FBc0M7RUFDdEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRTtBQUNGO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZ1bmN0aW9uYWwgc3R5bGluZztcXG4gKiBUaGVzZSBzdHlsZXMgYXJlIHJlcXVpcmVkIGZvciBub1VpU2xpZGVyIHRvIGZ1bmN0aW9uLlxcbiAqIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGVzZSBydWxlcyB0byBhcHBseSB5b3VyIGRlc2lnbi5cXG4gKi9cXG4ubm9VaS10YXJnZXQsXFxuLm5vVWktdGFyZ2V0ICoge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS10YXJnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubm9VaS1iYXNlLFxcbi5ub1VpLWNvbm5lY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLyogV3JhcHBlciBmb3IgYWxsIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktY29ubmVjdHMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5ub1VpLWNvbm5lY3QsXFxuLm5vVWktb3JpZ2luIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcXG59XFxuLyogT2Zmc2V0IGRpcmVjdGlvblxcbiAqL1xcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBHaXZlIG9yaWdpbnMgMCBoZWlnaHQvd2lkdGggc28gdGhleSBkb24ndCBpbnRlcmZlcmUgd2l0aCBjbGlja2luZyB0aGVcXG4gKiBjb25uZWN0IGVsZW1lbnRzLlxcbiAqL1xcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiB7XFxuICB0b3A6IC0xMDAlO1xcbiAgd2lkdGg6IDA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktb3JpZ2luIHtcXG4gIGhlaWdodDogMDtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ubm9VaS10b3VjaC1hcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktY29ubmVjdCxcXG4ubm9VaS1zdGF0ZS10YXAgLm5vVWktb3JpZ2luIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuLm5vVWktc3RhdGUtZHJhZyAqIHtcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG4vKiBTbGlkZXIgc2l6ZSBhbmQgaGFuZGxlIHBsYWNlbWVudDtcXG4gKi9cXG4ubm9VaS1ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICByaWdodDogLTE3cHg7XFxuICB0b3A6IC02cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAxOHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGUge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICByaWdodDogLTZweDtcXG4gIGJvdHRvbTogLTE3cHg7XFxufVxcbi5ub1VpLXR4dC1kaXItcnRsLm5vVWktaG9yaXpvbnRhbCAubm9VaS1oYW5kbGUge1xcbiAgbGVmdDogLTE3cHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLyogU3R5bGluZztcXG4gKiBHaXZpbmcgdGhlIGNvbm5lY3QgZWxlbWVudCBhIGJvcmRlciByYWRpdXMgY2F1c2VzIGlzc3VlcyB3aXRoIHVzaW5nIHRyYW5zZm9ybTogc2NhbGVcXG4gKi9cXG4ubm9VaS10YXJnZXQge1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEM0QzRDM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggI0YwRjBGMCwgMCAzcHggNnB4IC01cHggI0JCQjtcXG59XFxuLm5vVWktY29ubmVjdHMge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubm9VaS1jb25uZWN0IHtcXG4gIGJhY2tncm91bmQ6ICMzRkI4QUY7XFxufVxcbi8qIEhhbmRsZXMgYW5kIGN1cnNvcnM7XFxuICovXFxuLm5vVWktZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5ub1VpLWhhbmRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI0ZGRjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNFQkVCRUIsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi5ub1VpLWFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICNGRkYsIGluc2V0IDAgMXB4IDdweCAjRERELCAwIDNweCA2cHggLTNweCAjQkJCO1xcbn1cXG4vKiBIYW5kbGUgc3RyaXBlcztcXG4gKi9cXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNFOEU3RTY7XFxuICBsZWZ0OiAxNHB4O1xcbiAgdG9wOiA2cHg7XFxufVxcbi5ub1VpLWhhbmRsZTphZnRlciB7XFxuICBsZWZ0OiAxN3B4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YmVmb3JlLFxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGVmdDogNnB4O1xcbiAgdG9wOiAxNHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1oYW5kbGU6YWZ0ZXIge1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4vKiBEaXNhYmxlZCBzdGF0ZTtcXG4gKi9cXG5bZGlzYWJsZWRdIC5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogI0I4QjhCODtcXG59XFxuW2Rpc2FibGVkXS5ub1VpLXRhcmdldCxcXG5bZGlzYWJsZWRdLm5vVWktaGFuZGxlLFxcbltkaXNhYmxlZF0gLm5vVWktaGFuZGxlIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi8qIEJhc2U7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLFxcbi5ub1VpLXBpcHMgKiB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubm9VaS1waXBzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4vKiBWYWx1ZXM7XFxuICpcXG4gKi9cXG4ubm9VaS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubm9VaS12YWx1ZS1zdWIge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi8qIE1hcmtpbmdzO1xcbiAqXFxuICovXFxuLm5vVWktbWFya2VyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNDQ0M7XFxufVxcbi5ub1VpLW1hcmtlci1zdWIge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGJhY2tncm91bmQ6ICNBQUE7XFxufVxcbi8qIEhvcml6b250YWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy1ob3Jpem9udGFsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGhlaWdodDogODBweDtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1ydGwgLm5vVWktdmFsdWUtaG9yaXpvbnRhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLXN1YiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5ub1VpLW1hcmtlci1ob3Jpem9udGFsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLyogVmVydGljYWwgbGF5b3V0O1xcbiAqXFxuICovXFxuLm5vVWktcGlwcy12ZXJ0aWNhbCB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS12ZXJ0aWNhbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXIge1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLXN1YiB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLXZlcnRpY2FsLm5vVWktbWFya2VyLWxhcmdlIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4ubm9VaS10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5ub1VpLWhvcml6b250YWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEyMCU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTIwJTtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMCk7XFxuICBsZWZ0OiBhdXRvO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG4ubm9VaS12ZXJ0aWNhbCAubm9VaS1vcmlnaW4gPiAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE4cHgpO1xcbiAgdG9wOiBhdXRvO1xcbiAgcmlnaHQ6IDI4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b3lDYXJke21hcmdpbjoyNXB4O3BhZGRpbmc6MTBweDt3aWR0aDoyMjJweDtoZWlnaHQ6MzQycHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2JhKDE3OSwgMjQ2LCAyNTUsIDAuNSkgMTAwJSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoNHB4KTtib3JkZXItcmFkaXVzOjEwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm5hbWVUb3lfX25hbWV7Zm9udC1mYW1pbHk6TmV1Y2hhO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoyMHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6I2ZmZn0ubmFtZVRveV9fcGlje21hcmdpbjoyMHB4IGF1dG8gMTBweDt3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHh9LmNvdW50VG95X19jb3VudC1zdGF0aWMsLnllYXJUb3lfX3llYXItc3RhdGljLC5zaGFwZVRveV9fc2hhcGUtc3RhdGljLC5jb2xvclRveV9fY29sb3Itc3RhdGljLC5zaXplVG95X19zaXplLXN0YXRpYywuZmF2b3JpdGVUb3lfX2Zhdm9yaXRlLXN0YXRpY3tmb250LWZhbWlseTpTdGVwcGU7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjojZmZmfS7QoWhvc2Vue2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgyNTUsIDIzNSwgMTc5LCAwLjUpIDEwMCUpfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFBLFdBQ0ksQ0FBQSxZQUNBLENBQUEsV0FDQSxDQUFBLFlBQ0EsQ0FBQSxvSEFDQSxDQUFBLHlCQUNBLENBQUEsa0JBQ0EsQ0FBQSx3QkFDQSxDQUFBLFlBQ0EsQ0FBQSxxQkFDQSxDQUFBLDZCQUNBLENBQUEsZUFJSixrQkFDSSxDQUFBLGlCQUNBLENBQUEsa0JBQ0EsQ0FBQSxjQUNBLENBQUEsZ0JBQ0EsQ0FBQSxZQUNBLENBQUEsa0JBQ0EsQ0FBQSxVQUNBLENBQUEsY0FHSixxQkFDSSxDQUFBLFdBRUEsQ0FBQSxZQUNBLENBQUEsa0pBR0osa0JBTUksQ0FBQSxpQkFDQSxDQUFBLGtCQUNBLENBQUEsY0FDQSxDQUFBLGdCQUNBLENBQUEsWUFDQSxDQUFBLGtCQUNBLENBQUEsVUFDQSxDQUFBLFFBRUosb0hBQ0lcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRveUNhcmQge1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAyMjJweDtcXG4gICAgaGVpZ2h0OiAzNDJweDtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwOS41NiUgMTA5LjU2JSBhdCAwJSAtMi45NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwJSwgcmdiYSgxNzksIDI0NiwgMjU1LCAwLjUpIDEwMCUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjMjRDNURCIDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vLyAubmFtZVRveXtcXG4ubmFtZVRveV9fbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBOZXVjaGE7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5uYW1lVG95X19waWMge1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xcbiAgICAvLyBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmNvdW50VG95X19jb3VudC1zdGF0aWMsXFxuLnllYXJUb3lfX3llYXItc3RhdGljLFxcbi5zaGFwZVRveV9fc2hhcGUtc3RhdGljLFxcbi5jb2xvclRveV9fY29sb3Itc3RhdGljLFxcbi5zaXplVG95X19zaXplLXN0YXRpYyxcXG4uZmF2b3JpdGVUb3lfX2Zhdm9yaXRlLXN0YXRpYyB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdGVwcGU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi7QoWhvc2Vue1xcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTA5LjU2JSAxMDkuNTYlIGF0IDAlIC0yLjk0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDAlLCByZ2IoMjU1IDIzNSAxNzkgLyA1MCUpIDEwMCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2Fzc2V0cy9mb250cy9OZXVjaGEtUmVndWxhci50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL211dGUuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9zbm93LnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3guc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9jaGVja2JveC1jaGVja2VkLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvYmVsbC0yLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvYmFsbC5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL2NvbmUuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy90b3kuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvd2hpdGUtc3FyLnN2Z1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyBmcm9tIFwiLi9hc3NldHMvc3ZnL3llbGxvdy1zcXIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvcmVkLXNxci5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9ibHVlLXNxci5zdmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gZnJvbSBcIi4vYXNzZXRzL3N2Zy9ncmVlbi1zcXIuc3ZnXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fIGZyb20gXCIuL2Fzc2V0cy9zdmcvcnNfc2Nob29sX2xvZ28uc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZXtmb250LWZhbWlseTpcXFwiTmV1Y2hhXFxcIjtzcmM6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbH1ib2R5e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZDojMTkyZjJkfWhlYWRlcntoZWlnaHQ6NTBweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc3RhdGljLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNldDBmLXdyYXAgLnNldDBmLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0LW1heCxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zZXQwZi13cmFwIC5zZXQwZi1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1tYXgsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jb2xvci13cmFwIC5jb2xvci1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jYXRlZ29yeS13cmFwIC5jYXRlZ29yeS1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc29ydC13cmFwIC5zb3J0LXN0YXRpY3toZWlnaHQ6MjJweDtmb250LWZhbWlseTpcXFwiTmV1Y2hhXFxcIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjIwcHg7bGluZS1oZWlnaHQ6MjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Y29sb3I6I2ZmZn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5iZWxsLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5iYWxsLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5jb25lLXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5zbm93LXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mb3JtLXdyYXAgLmZvcm0tc2V0IC5maWd1cmluZS1zdGF0aWN7Zm9udC1mYW1pbHk6U3RlcHBlO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmZ9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcCAuZmF2b3JpdGUtc3RhdGljLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNhdGVnb3J5LXdyYXAgLmNhdGVnb3J5LXNldF9fc3RhdGlje2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmfW1haW57bWFyZ2luOjAgYXV0bzt3aWR0aDoxOTIwcHg7ZGlzcGxheTpmbGV4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXJ7bWFyZ2luLXRvcDo1MHB4O21heC13aWR0aDo0NTBweDtoZWlnaHQ6OTAwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwIC5zb3VuZHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZWZmZWN0cy1hbmQtc2VhY2gtd3JhcCAuc25vd3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZWZmZWN0cy1hbmQtc2VhY2gtd3JhcCAuc2VhcmNoLXNldHt3aWR0aDoyNTRweDtoZWlnaHQ6MzZweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMzYsIDE5NywgMjE5LCAwLjE1KSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDApIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDMxcHgpO2JvcmRlci1yYWRpdXM6MzBweDtib3JkZXI6c29saWQgIzI0YzVkYiAxcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjAgMXJlbX1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwIC5zZWFyY2gtc2V0IC5zZWFyY2gtdG95c3twYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDpub25lfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmVmZmVjdHMtYW5kLXNlYWNoLXdyYXAgLnNlYXJjaC1zZXQgLmxvdXBle2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7d2lkdGg6MjRweDtoZWlnaHQ6MjRweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zb3J0LXdyYXB7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNvcnQtd3JhcCAuc29ydC1zZXR7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNvcnQtd3JhcCAuc29ydC1zZXQgLnNvcnQtc2V0LXNlbGVjdHtwYWRkaW5nOi41ZW0gMWVtO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZTthcHBlYXJhbmNlOm5vbmV9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY2F0ZWdvcnktd3JhcCAuY2F0ZWdvcnktc2V0X19zdGF0aWN7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jYXRlZ29yeS13cmFwIC5jYXRlZ29yeS1zZXRfX3NxdWFyZXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY2F0ZWdvcnktd3JhcCAuY2F0ZWdvcnktc2V0X19zdGF0aWMtY2hlY2tib3h7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNhdGVnb3J5LXdyYXAgLmNhdGVnb3J5LXNldF9fc3F1YXJlOmNoZWNrZWQrLmNhdGVnb3J5LXNldF9fc3RhdGljLWNoZWNrYm94e2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXR9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuYmVsbHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuYmFsbHtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuY29uZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuc25vd3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O3dpZHRoOjQycHg7aGVpZ2h0OjQycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZm9ybS13cmFwIC5mb3JtLXNldCAuZmlndXJpbmV7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDt3aWR0aDo0MnB4O2hlaWdodDo0MnB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNvbG9yLXdyYXAgLmNvbG9yLXNldHt3aWR0aDoyMjVweDtoZWlnaHQ6MjRweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC53aGl0ZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC53aGl0ZTpob3ZlcntjdXJzb3I6cG9pbnRlcn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5jb2xvci13cmFwIC5jb2xvci1zZXQgLnllbGxvd3tiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC5yZWR7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLmNvbG9yLXdyYXAgLmNvbG9yLXNldCAuYmx1ZXtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuY29sb3Itd3JhcCAuY29sb3Itc2V0IC5ncmVlbntiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXN0YXRpY3t3aWR0aDoxMDAlO2hlaWdodDoyMnB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnllYXItd3JhcCAueWVhci1zZXR7bWFyZ2luOjE1cHggYXV0bzttYXgtd2lkdGg6MzUwcHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAueWVhci13cmFwIC55ZWFyLXNldC1tYXh7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjkwcHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigzMXB4KTtib3JkZXItcmFkaXVzOjMwcHg7Ym9yZGVyOnNvbGlkICMyNGM1ZGIgMXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnllYXItd3JhcCAueWVhci1zZXQtbWluLW1heHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc3RhdGlje3dpZHRoOjEwMCU7aGVpZ2h0OjIycHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0e21hcmdpbjoxNXB4IGF1dG87bWF4LXdpZHRoOjM1MHB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNldDBmLXdyYXAgLnNldDBmLXNldC1taW4sbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0LW1heHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6OTBweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDMxcHgpO2JvcmRlci1yYWRpdXM6MzBweDtib3JkZXI6c29saWQgIzI0YzVkYiAxcHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2V0MGYtd3JhcCAuc2V0MGYtc2V0LW1pbi1tYXh7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcHtwYWRkaW5nLWxlZnQ6MzBweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5sYXJnZS1zZXRfX3N0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5taWRkbGUtc2V0X19zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2l6ZS13cmFwIC5zaXplLXNldCAubGl0dGxlLXNldF9fc3RhdGlje2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MTlweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO21hcmdpbi1yaWdodDozcmVtfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLmxhcmdlLXNldF9fc3F1YXJlLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLm1pZGRsZS1zZXRfX3NxdWFyZSxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5saXR0bGUtc2V0X19zcXVhcmV7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLmxhcmdlLXNldF9fc3RhdGljLWNoZWNrYm94LG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLm1pZGRsZS1zZXRfX3N0YXRpYy1jaGVja2JveCxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5zaXplLXdyYXAgLnNpemUtc2V0IC5saXR0bGUtc2V0X19zdGF0aWMtY2hlY2tib3h7bWFyZ2luLWxlZnQ6LTMwcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O2JvcmRlci1yYWRpdXM6NXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLmxhcmdlLXNldF9fc3F1YXJlOmNoZWNrZWQrLmxhcmdlLXNldF9fc3RhdGljLWNoZWNrYm94LG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnNpemUtd3JhcCAuc2l6ZS1zZXQgLm1pZGRsZS1zZXRfX3NxdWFyZTpjaGVja2VkKy5taWRkbGUtc2V0X19zdGF0aWMtY2hlY2tib3gsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuc2l6ZS13cmFwIC5zaXplLXNldCAubGl0dGxlLXNldF9fc3F1YXJlOmNoZWNrZWQrLmxpdHRsZS1zZXRfX3N0YXRpYy1jaGVja2JveHttYXJnaW4tbGVmdDotMzBweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7Ym9yZGVyLXJhZGl1czo1cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcHtwYWRkaW5nLWxlZnQ6MzBweH1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5mYXZvcml0ZS13cmFwIC5mYXZvcml0ZS1zdGF0aWMgLmZhdm9yaXRlLXNxdWFyZXtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcCAuZmF2b3JpdGUtc3RhdGljIC5mYXZvcml0ZS1zcXVhcmUtY2hlY2tib3h7bWFyZ2luLWxlZnQ6LTMwcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7Ym9yZGVyLXJhZGl1czo1cHh9bWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAuZmF2b3JpdGUtd3JhcCAuZmF2b3JpdGUtc3RhdGljIC5mYXZvcml0ZS1zcXVhcmU6Y2hlY2tlZCsuZmF2b3JpdGUtc3F1YXJlLWNoZWNrYm94e21hcmdpbi1sZWZ0Oi0zMHB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO2JvcmRlci1yYWRpdXM6NXB4fW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXB7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LWZpbHRlcnMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAucmVzZXQtd3JhcCAucmVzZXQtc2V0dGluZ3N7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjE3OHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMzFweCk7Ym9yZGVyLXJhZGl1czozMHB4O2JvcmRlcjpzb2xpZCAjMjRjNWRiIDFweDtjdXJzb3I6cG9pbnRlcn1tYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5yZXNldC13cmFwIC5yZXNldC1maWx0ZXJzIC5yZXNldC1maWx0ZXJzX19yZXNldC1zdGF0aWMsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAucmVzZXQtd3JhcCAucmVzZXQtZmlsdGVycyAucmVzZXQtc2V0dGluZ3NfX3Jlc2V0LXN0YXRpYyxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5yZXNldC13cmFwIC5yZXNldC1zZXR0aW5ncyAucmVzZXQtZmlsdGVyc19fcmVzZXQtc3RhdGljLG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LXNldHRpbmdzIC5yZXNldC1zZXR0aW5nc19fcmVzZXQtc3RhdGlje2ZvbnQtZmFtaWx5OlN0ZXBwZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTRweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmfW1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LWZpbHRlcnMgLnJlc2V0LWZpbHRlcnNfX3Jlc2V0LXN0YXRpYyBpbnB1dCxtYWluIC5jb2xsZWN0aW9uLXNldHRpbmdzIC53cmFwcGVyIC5yZXNldC13cmFwIC5yZXNldC1maWx0ZXJzIC5yZXNldC1zZXR0aW5nc19fcmVzZXQtc3RhdGljIGlucHV0LG1haW4gLmNvbGxlY3Rpb24tc2V0dGluZ3MgLndyYXBwZXIgLnJlc2V0LXdyYXAgLnJlc2V0LXNldHRpbmdzIC5yZXNldC1maWx0ZXJzX19yZXNldC1zdGF0aWMgaW5wdXQsbWFpbiAuY29sbGVjdGlvbi1zZXR0aW5ncyAud3JhcHBlciAucmVzZXQtd3JhcCAucmVzZXQtc2V0dGluZ3MgLnJlc2V0LXNldHRpbmdzX19yZXNldC1zdGF0aWMgaW5wdXR7cGFkZGluZzowO2JvcmRlcjpub25lO2ZvbnQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9bWFpbiAuY29sbGVjdGlvbi1uZXcteWVhcntkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9Zm9vdGVye21hcmdpbjowIGF1dG87bWFyZ2luLXRvcDphdXRvO3dpZHRoOjE5MjBweDtoZWlnaHQ6MTAwcHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfWZvb3RlciAucnNzLWxvZ297YmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKTt3aWR0aDoyMjBweDtoZWlnaHQ6ODJweH1mb290ZXIgLnllYXJ7Y29sb3I6I2ZmZn0uZGV2ZWxvcGVyIGF7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZX0uRXhwdG95Q2FyZHtkaXNwbGF5Om5vbmV9LnllYXItZGlzcGxheS1ub25lLC5xdWFudGl0eS1kaXNwbGF5LW5vbmUsLnZhbHVlLWRpc3BsYXktbm9uZSwuYmFsbFNoYXBlZC1kaXNwbGF5LW5vbmUsLmJlbGxTaGFwZWQtZGlzcGxheS1ub25lLC5jb25lU2hhcGVkLWRpc3BsYXktbm9uZSwuc25vd1NoYXBlZC1kaXNwbGF5LW5vbmUsLmZpZ3VyaW5lU2hhcGVkLWRpc3BsYXktbm9uZSwud2hpdGUtZGlzcGxheS1ub25lLC55ZWxsb3ctZGlzcGxheS1ub25lLC5yZWQtZGlzcGxheS1ub25lLC5ibHVlLWRpc3BsYXktbm9uZSwuZ3JlZW4tZGlzcGxheS1ub25lLC5sYXJnZS1kaXNwbGF5LW5vbmUsLm1pZGRsZS1kaXNwbGF5LW5vbmUsLmxpdHRsZS1kaXNwbGF5LW5vbmUsLmZhdm9yaXRlLWRpc3BsYXktbm9uZXtkaXNwbGF5Om5vbmV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQ0ksb0JBQUEsQ0FDQSx5REFBQSxDQUNBLGtCQUFBLENBQ0EsaUJBQUEsQ0FNSixLQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBRUosT0FFSSxXQUFBLENBR0osNnBCQUNJLFdBQUEsQ0FDQSxvQkFBQSxDQUNBLGlCQUFBLENBQ0Esa0JBQUEsQ0FDQSxjQUFBLENBQ0EsZ0JBQUEsQ0FDQSx3QkFBQSxDQUNBLFVBQUEsQ0FHSiw2VkFDSSxrQkFBQSxDQUNBLGlCQUFBLENBQ0Esa0JBQUEsQ0FDQSxjQUFBLENBQ0EsZ0JBQUEsQ0FDQSxpQkFBQSxDQUNBLFVBQUEsQ0FHSiwySUFDSSxrQkFBQSxDQUNBLGlCQUFBLENBQ0Esa0JBQUEsQ0FDQSxjQUFB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aUJBQUEsQ0FDQSxpQkFBQSxDQUNBLFVBQUEsQ0FDQSxXQUFBLENBQ0Esd0VBQUEsQ0FDQSxpQkFBQSxDQUlaLGtEQUNJLGlCQUFBLENBR0ksb0ZBQ0ksaUJBQUEsQ0FDQSx1QkFBQSxDQUNBLG9CQUFBLENBQ0EsZUFBQSxDQUVKLDZGQUNJLGlCQUFBLENBQ0EsaUJBQUEsQ0FDQSxVQUFBLENBQ0EsV0FBQSxDQUNBLGtEQUFBLENBQ0EsaUJBQUEsQ0FFSixzSEFDSSxpQkFBQSxDQUNBLGlCQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FDQSxrREFBQSxDQUNBLGlCQUFBLENBSVosK0NBQ0ksWUFBQSxDQUNBLDZCQUFBLENBQ0EsNkhBRUksWUFBQSxDQUNBLHNCQUFBLENBQ0Esa0JBQUEsQ0FDQSxXQUFBLENBQ0EsV0FBQSxDQUNBLGdIQUFBLENBQ0EsMEJBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBQ0EsY0FBQSxDQUNBLGdYQUVJLGtCQUFBLENBQ0EsaUJBQUEsQ0FDQSxrQkFBQSxDQUNBLGNBQUEsQ0FDQSxnQkFBQSxDQUNBLGlCQUFBLENBQ0EsVUFBQSxDQUNBLHdZQUNJLFNBQUEsQ0FDQSxXQUFBLENBQ0EsWUFBQSxDQUNBLGFBQUEsQ0FDQSw0QkFBQSxDQU94QiwwQkFDSSxZQUFBLENBQ0EsY0FBQSxDQUlSLE9BQ0ksYUFBQSxDQUNBLGVBQUEsQ0FDQSxZQUFBLENBRUEsWUFBQSxDQUNBLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLDRCQUFBLENBQ0EsaUJBQ0ksbURBQUEsQ0FDQSxXQUFBLENBQ0EsV0FBQSxDQUVKLGFBQ0ksVUFBQSxDQUlSLGFBQ0ksVUFBQSxDQUNBLG9CQUFBLENBR0osWUFDSSxZQUFBLENBR0osc1hBaUJJLFlBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV1Y2hhJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL05ldWNoYS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuJGNvbDpyZ2IoMjU1LFxcbjAsXFxuMCk7XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6ICMxOTJGMkQ7XFxufVxcbmhlYWRlcntcXG4gICAgLy8gYm9yZGVyOiB0b21hdG8gMXB4IHNvbGlkO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiV0ZXh0LXNoYXJlZCB7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVjaGEnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4lc2Vjb25kYXJ5LXRleHQtc2hhcmVkIHtcXG4gICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ldGV4dC1sYXJnZS1taWRkbGUtbGl0dGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiAxOTIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC5jb2xsZWN0aW9uLXNldHRpbmdzIHtcXG4gICAgICAgIC53cmFwcGVyIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA5MDBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIC5lZmZlY3RzLWFuZC1zZWFjaC13cmFwIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgICAuc291bmQge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvbXV0ZS5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7ICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zbm93IHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL3Nub3cuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1zZXQge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1NHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgzNiwgMTk3LCAyMTksIDAuMTUpIDAlLCByZ2JhKDM2LCAxOTcsIDIxOSwgMCkgMTAwJSk7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMjRDNURCIDFweDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC10b3lzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAubG91cGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL3NlYXJjaC5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zb3J0LXdyYXAge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIC5zb3J0LXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc29ydC1zZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMjRDNURCIDFweDtcXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0LXNldC1zZWxlY3Qge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuY2F0ZWdvcnktd3JhcCB7XFxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LXNldF9fc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1sYXJnZS1taWRkbGUtbGl0dGxlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1zZXRfX3NxdWFyZSB7XFxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1zZXRfX3N0YXRpYy1jaGVja2JveCB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktc2V0X19zcXVhcmU6Y2hlY2tlZCsuY2F0ZWdvcnktc2V0X19zdGF0aWMtY2hlY2tib3gge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvY2hlY2tib3gtY2hlY2tlZC5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmZvcm0td3JhcCB7XFxuICAgICAgICAgICAgICAgIC5mb3JtLXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZm9ybS1zZXQge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgICAgIC5iZWxsLXN0YXRpYyxcXG4gICAgICAgICAgICAgICAgICAgIC5iYWxsLXN0YXRpYyxcXG4gICAgICAgICAgICAgICAgICAgIC5jb25lLXN0YXRpYyxcXG4gICAgICAgICAgICAgICAgICAgIC5zbm93LXN0YXRpYyxcXG4gICAgICAgICAgICAgICAgICAgIC5maWd1cmluZS1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXNlY29uZGFyeS10ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5iZWxsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9iZWxsLTIuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5iYWxsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9iYWxsLnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuY29uZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvY29uZS5zdmdcXFwiKSAwIDAvY29udGFpbiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLnNub3cge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL3Nub3cuc3ZnXFxcIikgMCAwL2NvbnRhaW4gbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5maWd1cmluZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvdG95LnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuYmVsbC1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuYmFsbC1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuY29uZS1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuc25vdy1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAuZmlndXJpbmUtc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVzZWNvbmRhcnktdGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmNvbG9yLXdyYXAge1xcbiAgICAgICAgICAgICAgICAuY29sb3Itc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5jb2xvci1zZXQge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgICAgIC53aGl0ZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy93aGl0ZS1zcXIuc3ZnXFxcIik7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLnllbGxvdyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcveWVsbG93LXNxci5zdmdcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAucmVkIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9yZWQtc3FyLnN2Z1xcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5ibHVlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9ibHVlLXNxci5zdmdcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAuZ3JlZW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL2dyZWVuLXNxci5zdmdcXFwiKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnllYXItd3JhcCB7XFxuICAgICAgICAgICAgICAgIC55ZWFyLXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC55ZWFyLXNldHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgICAgICAgICAgICAgfSAgICBcXG4gICAgICAgICAgICAgICAgLnllYXItc2V0LW1pbixcXG4gICAgICAgICAgICAgICAgLnllYXItc2V0LW1heCB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnllYXItc2V0LW1pbi1tYXgge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2V0MGYtd3JhcCB7XFxuICAgICAgICAgICAgICAgIC5zZXQwZi1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1zaGFyZWQ7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuc2V0MGYtc2V0e1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zZXQwZi1zZXQtbWluLFxcbiAgICAgICAgICAgICAgICAuc2V0MGYtc2V0LW1heCB7XFxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICV0ZXh0LXNoYXJlZDtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMTguODglIDYwNi44NiUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwJSwgcmdiYSgxNTcsIDI0MywgMjU1LCAwLjIpIDEwMCUpO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMxcHgpO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgIzI0QzVEQiAxcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnNldDBmLXNldC1taW4tbWF4IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNpemUtd3JhcCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICAgICAgICAgICAgLnNpemUtc3RhdGljIHtcXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXRleHQtc2hhcmVkO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAyMnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5zaXplLXNldCB7XFxuICAgICAgICAgICAgICAgICAgICAubGFyZ2Utc2V0X19zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAubWlkZGxlLXNldF9fc3RhdGljLFxcbiAgICAgICAgICAgICAgICAgICAgLmxpdHRsZS1zZXRfX3N0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5sYXJnZS1zZXRfX3NxdWFyZSxcXG4gICAgICAgICAgICAgICAgICAgIC5taWRkbGUtc2V0X19zcXVhcmUsXFxuICAgICAgICAgICAgICAgICAgICAubGl0dGxlLXNldF9fc3F1YXJlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgLmxhcmdlLXNldF9fc3RhdGljLWNoZWNrYm94LFxcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZS1zZXRfX3N0YXRpYy1jaGVja2JveCxcXG4gICAgICAgICAgICAgICAgICAgIC5saXR0bGUtc2V0X19zdGF0aWMtY2hlY2tib3gge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAubGFyZ2Utc2V0X19zcXVhcmU6Y2hlY2tlZCsubGFyZ2Utc2V0X19zdGF0aWMtY2hlY2tib3gsXFxuICAgICAgICAgICAgICAgICAgICAubWlkZGxlLXNldF9fc3F1YXJlOmNoZWNrZWQrLm1pZGRsZS1zZXRfX3N0YXRpYy1jaGVja2JveCxcXG4gICAgICAgICAgICAgICAgICAgIC5saXR0bGUtc2V0X19zcXVhcmU6Y2hlY2tlZCsubGl0dGxlLXNldF9fc3RhdGljLWNoZWNrYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9jaGVja2JveC1jaGVja2VkLnN2Z1xcXCIpIDAgMC9jb250YWluIG5vLXJlcGVhdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmZhdm9yaXRlLXdyYXAge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIC5mYXZvcml0ZS1zdGF0aWMge1xcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldGV4dC1sYXJnZS1taWRkbGUtbGl0dGxlO1xcbiAgICAgICAgICAgICAgICAgICAgLmZhdm9yaXRlLXNxdWFyZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5mYXZvcml0ZS1zcXVhcmUtY2hlY2tib3gge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvc3ZnL2NoZWNrYm94LnN2Z1xcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIC5mYXZvcml0ZS1zcXVhcmU6Y2hlY2tlZCsuZmF2b3JpdGUtc3F1YXJlLWNoZWNrYm94IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9jaGVja2JveC1jaGVja2VkLnN2Z1xcXCIpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAucmVzZXQtd3JhcCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICAgICAgLnJlc2V0LWZpbHRlcnMsXFxuICAgICAgICAgICAgICAgIC5yZXNldC1zZXR0aW5ncyB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3OHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDExOC44OCUgNjA2Ljg2JSBhdCAwJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDAlLCByZ2JhKDE1NywgMjQzLCAyNTUsIDAuMikgMTAwJSk7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzFweCk7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMjRDNURCIDFweDtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC1maWx0ZXJzX19yZXNldC1zdGF0aWMsXFxuICAgICAgICAgICAgICAgICAgICAucmVzZXQtc2V0dGluZ3NfX3Jlc2V0LXN0YXRpYyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN0ZXBwZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBpbmhlcml0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5jb2xsZWN0aW9uLW5ldy15ZWFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHdpZHRoOiAxOTIwcHg7XFxuICAgIC8vIGJvcmRlcjogcmViZWNjYXB1cnBsZSAxcHggc29saWQ7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAucnNzLWxvZ28ge1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9zdmcvcnNfc2Nob29sX2xvZ28uc3ZnXFxcIik7XFxuICAgICAgICB3aWR0aDogMjIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDgycHg7XFxuICAgIH1cXG4gICAgLnllYXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLmRldmVsb3BlciBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLkV4cHRveUNhcmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ueWVhci1kaXNwbGF5LW5vbmUsXFxuLnF1YW50aXR5LWRpc3BsYXktbm9uZSxcXG4udmFsdWUtZGlzcGxheS1ub25lLFxcbi5iYWxsU2hhcGVkLWRpc3BsYXktbm9uZSxcXG4uYmVsbFNoYXBlZC1kaXNwbGF5LW5vbmUsXFxuLmNvbmVTaGFwZWQtZGlzcGxheS1ub25lLFxcbi5zbm93U2hhcGVkLWRpc3BsYXktbm9uZSxcXG4uZmlndXJpbmVTaGFwZWQtZGlzcGxheS1ub25lLFxcbi53aGl0ZS1kaXNwbGF5LW5vbmUsXFxuLnllbGxvdy1kaXNwbGF5LW5vbmUsXFxuLnJlZC1kaXNwbGF5LW5vbmUsXFxuLmJsdWUtZGlzcGxheS1ub25lLFxcbi5ncmVlbi1kaXNwbGF5LW5vbmUsXFxuLmxhcmdlLWRpc3BsYXktbm9uZSxcXG4ubWlkZGxlLWRpc3BsYXktbm9uZSxcXG4ubGl0dGxlLWRpc3BsYXktbm9uZSxcXG4uZmF2b3JpdGUtZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94fXVsW2NsYXNzXSxvbFtjbGFzc117cGFkZGluZzowfWJvZHksaDEsaDIsaDMsaDQscCx1bFtjbGFzc10sb2xbY2xhc3NdLGxpLGZpZ3VyZSxmaWdjYXB0aW9uLGJsb2NrcXVvdGUsZGwsZGR7bWFyZ2luOjB9Ym9keXttaW4taGVpZ2h0OjEwMHZoO3Njcm9sbC1iZWhhdmlvcjpzbW9vdGg7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVTcGVlZDtsaW5lLWhlaWdodDoxLjV9dWxbY2xhc3NdLG9sW2NsYXNzXXtsaXN0LXN0eWxlOm5vbmV9YTpub3QoW2NsYXNzXSl7dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOmF1dG99aW1ne21heC13aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2t9YXJ0aWNsZT4qKyp7bWFyZ2luLXRvcDoxZW19aW5wdXQsYnV0dG9uLHRleHRhcmVhLHNlbGVjdHtmb250OmluaGVyaXR9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL251bGwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxxQkFHRSxxQkFBQSxDQUlGLG9CQUVFLFNBQUEsQ0FJRiw2RUFjRSxRQUFBLENBSUYsS0FDRSxnQkFBQSxDQUNBLHNCQUFBLENBQ0EsNEJBQUEsQ0FDQSxlQUFBLENBSUYsb0JBRUUsZUFBQSxDQUlGLGVBQ0UsNkJBQUEsQ0FJRixJQUNFLGNBQUEsQ0FDQSxhQUFBLENBSUYsWUFDRSxjQUFBLENBSUYsNkJBSUUsWUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiDQo9C60LDQt9GL0LLQsNC10LwgYm94IHNpemluZyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qINCj0LHQuNGA0LDQtdC8INCy0L3Rg9GC0YDQtdC90L3QuNC1INC+0YLRgdGC0YPQv9GLICovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiDQo9Cx0LjRgNCw0LXQvCDQstC90LXRiNC90LjQtSDQvtGC0YHRgtGD0L/RiyAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG51bFtjbGFzc10sXFxub2xbY2xhc3NdLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiDQktGL0YHRgtCw0LLQu9GP0LXQvCDQvtGB0L3QvtCy0L3Ri9C1INC90LDRgdGC0YDQvtC50LrQuCDQv9C+LdGD0LzQvtC70YfQsNC90LjRjiDQtNC70Y8gYm9keSAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyog0KPQtNCw0LvRj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDRgdGC0LjQu9C40LfQsNGG0LjRjiDQtNC70Y8g0LLRgdC10YUgdWwg0LggaWwsINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzKi9cXG51bFtjbGFzc10sXFxub2xbY2xhc3NdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qINCt0LvQtdC80LXQvdGC0YsgYSwg0YMg0LrQvtGC0L7RgNGL0YUg0L3QtdGCINC60LvQsNGB0YHQsCwg0YHQsdGA0LDRgdGL0LLQsNC10Lwg0LTQviDQtNC10YTQvtC70YLQvdGL0YUg0YHRgtC40LvQtdC5ICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiDQo9C/0YDQvtGJ0LDQtdC8INGA0LDQsdC+0YLRgyDRgSDQuNC30L7QsdGA0LDQttC10L3QuNGP0LzQuCAqL1xcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyog0KPQutCw0LfRi9Cy0LDQtdC8INC/0L7QvdGP0YLQvdGD0Y4g0L/QtdGA0LjQvtC00LjRh9C90L7RgdGC0Ywg0LIg0L/QvtGC0L7QutC1INC00LDQvdC90YvRhSDRgyBhcnRpY2xlKi9cXG5hcnRpY2xlID4gKiArICoge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4vKiDQndCw0YHQu9C10LTRg9C10Lwg0YjRgNC40YTRgtGLINC00LvRjyDQuNC90L/Rg9GC0L7QsiDQuCDQutC90L7Qv9C+0LogKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubm9VaVNsaWRlciA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBleHBvcnRzLlBpcHNNb2RlID0gdm9pZCAwO1xuICAgIChmdW5jdGlvbiAoUGlwc01vZGUpIHtcbiAgICAgICAgUGlwc01vZGVbXCJSYW5nZVwiXSA9IFwicmFuZ2VcIjtcbiAgICAgICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJQb3NpdGlvbnNcIl0gPSBcInBvc2l0aW9uc1wiO1xuICAgICAgICBQaXBzTW9kZVtcIkNvdW50XCJdID0gXCJjb3VudFwiO1xuICAgICAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG4gICAgfSkoZXhwb3J0cy5QaXBzTW9kZSB8fCAoZXhwb3J0cy5QaXBzTW9kZSA9IHt9KSk7XG4gICAgZXhwb3J0cy5QaXBzVHlwZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNUeXBlKSB7XG4gICAgICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTm9uZVwiXSA9IC0xXSA9IFwiTm9uZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIkxhcmdlVmFsdWVcIl0gPSAxXSA9IFwiTGFyZ2VWYWx1ZVwiO1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIlNtYWxsVmFsdWVcIl0gPSAyXSA9IFwiU21hbGxWYWx1ZVwiO1xuICAgIH0pKGV4cG9ydHMuUGlwc1R5cGUgfHwgKGV4cG9ydHMuUGlwc1R5cGUgPSB7fSkpO1xuICAgIC8vcmVnaW9uIEhlbHBlciBNZXRob2RzXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpICYmIHR5cGVvZiBlbnRyeS5mcm9tID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgICAgIC8vIHBhcnRpYWwgZm9ybWF0dGVycyBvbmx5IG5lZWQgYSB0byBmdW5jdGlvbiBhbmQgbm90IGEgZnJvbSBmdW5jdGlvblxuICAgICAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBlbnRyeS50byA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQmluZGFibGUgdmVyc2lvblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGR1cGxpY2F0ZXMgZnJvbSBhbiBhcnJheS5cbiAgICBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzW2FdID8gKHRoaXNbYV0gPSB0cnVlKSA6IGZhbHNlO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8vIFJvdW5kIGEgdmFsdWUgdG8gdGhlIGNsb3Nlc3QgJ3RvJy5cbiAgICBmdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRvKSAqIHRvO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIG9mZnNldChlbGVtLCBvcmllbnRhdGlvbikge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHBhZ2VPZmZzZXQgPSBnZXRQYWdlT2Zmc2V0KGRvYyk7XG4gICAgICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAgICAgLy8gSSBoYXZlbid0IGZvdW5kIGEgZmVhdHVyZSBkZXRlY3Rpb24gdGhhdCBwcm92ZXMgdGhpcy4gV29yc3QgY2FzZVxuICAgICAgICAvLyBzY2VuYXJpbyBvbiBtaXMtbWF0Y2g6IHRoZSAndGFwJyBmZWF0dXJlIG9uIGhvcml6b250YWwgc2xpZGVycyBicmVha3MuXG4gICAgICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHBhZ2VPZmZzZXQueCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgLy8gQ2hlY2tzIHdoZXRoZXIgYSB2YWx1ZSBpcyBudW1lcmljYWwuXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmICFpc05hTihhKSAmJiBpc0Zpbml0ZShhKTtcbiAgICB9XG4gICAgLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3NGb3IoZWxlbWVudCwgY2xhc3NOYW1lLCBkdXJhdGlvbikge1xuICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG4gICAgZnVuY3Rpb24gbGltaXQoYSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oYSwgMTAwKSwgMCk7XG4gICAgfVxuICAgIC8vIFdyYXBzIGEgdmFyaWFibGUgYXMgYW4gYXJyYXksIGlmIGl0IGlzbid0IG9uZSB5ZXQuXG4gICAgLy8gTm90ZSB0aGF0IGFuIGlucHV0IGFycmF5IGlzIHJldHVybmVkIGJ5IHJlZmVyZW5jZSFcbiAgICBmdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW2FdO1xuICAgIH1cbiAgICAvLyBDb3VudHMgZGVjaW1hbHNcbiAgICBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bVN0cikge1xuICAgICAgICBudW1TdHIgPSBTdHJpbmcobnVtU3RyKTtcbiAgICAgICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgIHJldHVybiBwaWVjZXMubGVuZ3RoID4gMSA/IHBpZWNlc1sxXS5sZW5ndGggOiAwO1xuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmICEvXFxzLy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0ID8gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkgOiBuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGNsYXNzTmFtZSArIFwiXFxcXGJcIikudGVzdChlbC5jbGFzc05hbWUpO1xuICAgIH1cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3Njcm9sbFkjTm90ZXNcbiAgICBmdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KGRvYykge1xuICAgICAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2MuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgICAgIHZhciB4ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgICA6IGlzQ1NTMUNvbXBhdFxuICAgICAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB2YXIgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyB3ZSBwcm92aWRlIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBjb25zdGFudHMgaW5zdGVhZFxuICAgIC8vIG9mIGFjY2Vzc2luZyB3aW5kb3cuKiBhcyBzb29uIGFzIHRoZSBtb2R1bGUgbmVlZHMgaXRcbiAgICAvLyBzbyB0aGF0IHdlIGRvIG5vdCBjb21wdXRlIGFueXRoaW5nIGlmIG5vdCBuZWVkZWRcbiAgICBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGV2ZW50cyB0byBiaW5kLiBJRTExIGltcGxlbWVudHMgcG9pbnRlckV2ZW50cyB3aXRob3V0XG4gICAgICAgIC8vIGEgcHJlZml4LCB3aGljaCBicmVha3MgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBJRTEwIGltcGxlbWVudGF0aW9uLlxuICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwicG9pbnRlcmRvd25cIixcbiAgICAgICAgICAgICAgICBtb3ZlOiBcInBvaW50ZXJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgZW5kOiBcInBvaW50ZXJ1cFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiTVNQb2ludGVyVXBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogXCJtb3VzZW1vdmUgdG91Y2htb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCJtb3VzZXVwIHRvdWNoZW5kXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9FdmVudExpc3RlbmVyT3B0aW9ucy9ibG9iL2doLXBhZ2VzL2V4cGxhaW5lci5tZFxuICAgIC8vIElzc3VlICM3ODVcbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XG4gICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzICYmIENTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gUmFuZ2UgQ2FsY3VsYXRpb25cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgICAgIHJldHVybiAxMDAgLyAocGIgLSBwYSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUsIHN0YXJ0UmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgLyAxMDAgKyByYW5nZVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSW5wdXQgYSB2YWx1ZSwgZmluZCB3aGVyZSwgb24gYSBzY2FsZSBvZiAwLTEwMCwgaXQgYXBwbGllcy5cbiAgICBmdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIElucHV0IGEgcGVyY2VudGFnZSwgZmluZCB3aGVyZSBpdCBpcyBvbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICAgIGZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgICAgIGlmICh2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgICAgIC8vIElmICdzbmFwJyBpcyBzZXQsIHN0ZXBzIGFyZSB1c2VkIGFzIGZpeGVkIHBvaW50cyBvbiB0aGUgc2xpZGVyLlxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICAgICAgaWYgKHZhbHVlIC0gYSA+IChiIC0gYSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFNwZWN0cnVtXG4gICAgdmFyIFNwZWN0cnVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnhWYWwgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnNuYXAgPSBzbmFwO1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFjdHVhbCBzdGVwIHZhbHVlcy5cbiAgICAgICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG92ZXIgdGhlIHdob2xlIHNjYWxlIG9mIHJhbmdlcy5cbiAgICAgICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHhQY3RfaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHZhbHVlID4gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICB2YXIgcmVzdF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVsX3JhbmdlX2Rpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hhdCBwYXJ0IG9mIHRoZSBzdGFydCByYW5nZSB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRvdGFsIHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yICsgMTAwIC0gc3RhcnRfZmFjdG9yICogMTAwID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBmYWN0b3Igb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNtYWxsZXIgb3IgZXF1YWwgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSBjYWxjdWxhdGUgcGVyY2VudHVhbCBwYXJ0IG9mIHRoYXQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciAtIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggLSByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS50b1N0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RlcEFmdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2pdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBEZWNpbWFscyA9IHRoaXMueE51bVN0ZXBzLm1hcChjb3VudERlY2ltYWxzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBzdGVwRGVjaW1hbHMpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFzTm9TaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMueFZhbFswXSA9PT0gdGhpcy54VmFsW3RoaXMueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gT3V0c2lkZSB0ZXN0aW5nXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlRW50cnlQb2ludCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAgICAgLy8gQ292ZXJ0IG1pbi9tYXggc3ludGF4IHRvIDAgYW5kIDEwMC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvcnJlY3QgaW5wdXQuXG4gICAgICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgdmFsdWUgaXNuJ3QgbnVtZXJpYy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgICAgICB0aGlzLnhQY3QucHVzaChwZXJjZW50YWdlKTtcbiAgICAgICAgICAgIHRoaXMueFZhbC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAgICAgLy8gTmFOIHdpbGwgZXZhbHVhdGUgdG8gZmFsc2UgdG9vLCBidXQgdG8ga2VlcFxuICAgICAgICAgICAgLy8gbG9nZ2luZyBjbGVhciwgc2V0IHN0ZXAgZXhwbGljaXRseS4gTWFrZSBzdXJlXG4gICAgICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgICAgICBpZiAoIXBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhbHVlMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHMucHVzaChpc05hTih2YWx1ZTEpID8gZmFsc2UgOiB2YWx1ZTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuaGFuZGxlU3RlcFBvaW50ID0gZnVuY3Rpb24gKGksIG4pIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICAgICAgaWYgKCFuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBpZiAodGhpcy54VmFsW2ldID09PSB0aGlzLnhWYWxbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPVxuICAgICAgICAgICAgICAgIGZyb21QZXJjZW50YWdlKFt0aGlzLnhWYWxbaV0sIHRoaXMueFZhbFtpICsgMV1dLCBuLCAwKSAvIHN1YlJhbmdlUmF0aW8odGhpcy54UGN0W2ldLCB0aGlzLnhQY3RbaSArIDFdKTtcbiAgICAgICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgICAgICB2YXIgaGlnaGVzdFN0ZXAgPSBNYXRoLmNlaWwoTnVtYmVyKHRvdGFsU3RlcHMudG9GaXhlZCgzKSkgLSAxKTtcbiAgICAgICAgICAgIHZhciBzdGVwID0gdGhpcy54VmFsW2ldICsgdGhpcy54TnVtU3RlcHNbaV0gKiBoaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3BlY3RydW07XG4gICAgfSgpKTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIE9wdGlvbnNcbiAgICAvKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgICAgICBlbmRsZXNzIHZhbGlkYXRpb24gaW4gaW50ZXJuYWwgbWV0aG9kcy4gVGhlc2UgdGVzdHMgYXJlXG4gICAgICAgIHN0cnVjdHVyZWQgd2l0aCBhbiBpdGVtIGZvciBldmVyeSBvcHRpb24gYXZhaWxhYmxlLiBBblxuICAgICAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gaXMgcHJvdmlkZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgICAgICAtIFRoZSBwcm92aWRlZCB2YWx1ZSBmb3IgdGhlIG9wdGlvbjtcbiAgICAgICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAgICAgLSBUaGUgbmFtZSBmb3IgdGhlIG9wdGlvbjtcblxuICAgICAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHdoZW4gYW4gZXJyb3IgaXMgZGV0ZWN0ZWQsXG4gICAgICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgICAgICBvYmplY3QsIHRvIG1ha2Ugc3VyZSBhbGwgdmFsdWVzIGNhbiBiZSBjb3JyZWN0bHkgbG9vcGVkIGVsc2V3aGVyZS4gKi9cbiAgICAvL3JlZ2lvbiBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgICAgICB0bzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICBmcm9tOiBOdW1iZXJcbiAgICB9O1xuICAgIHZhciBjc3NDbGFzc2VzID0ge1xuICAgICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICAgIGJhc2U6IFwiYmFzZVwiLFxuICAgICAgICBvcmlnaW46IFwib3JpZ2luXCIsXG4gICAgICAgIGhhbmRsZTogXCJoYW5kbGVcIixcbiAgICAgICAgaGFuZGxlTG93ZXI6IFwiaGFuZGxlLWxvd2VyXCIsXG4gICAgICAgIGhhbmRsZVVwcGVyOiBcImhhbmRsZS11cHBlclwiLFxuICAgICAgICB0b3VjaEFyZWE6IFwidG91Y2gtYXJlYVwiLFxuICAgICAgICBob3Jpem9udGFsOiBcImhvcml6b250YWxcIixcbiAgICAgICAgdmVydGljYWw6IFwidmVydGljYWxcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIGNvbm5lY3Q6IFwiY29ubmVjdFwiLFxuICAgICAgICBjb25uZWN0czogXCJjb25uZWN0c1wiLFxuICAgICAgICBsdHI6IFwibHRyXCIsXG4gICAgICAgIHJ0bDogXCJydGxcIixcbiAgICAgICAgdGV4dERpcmVjdGlvbkx0cjogXCJ0eHQtZGlyLWx0clwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uUnRsOiBcInR4dC1kaXItcnRsXCIsXG4gICAgICAgIGRyYWdnYWJsZTogXCJkcmFnZ2FibGVcIixcbiAgICAgICAgZHJhZzogXCJzdGF0ZS1kcmFnXCIsXG4gICAgICAgIHRhcDogXCJzdGF0ZS10YXBcIixcbiAgICAgICAgYWN0aXZlOiBcImFjdGl2ZVwiLFxuICAgICAgICB0b29sdGlwOiBcInRvb2x0aXBcIixcbiAgICAgICAgcGlwczogXCJwaXBzXCIsXG4gICAgICAgIHBpcHNIb3Jpem9udGFsOiBcInBpcHMtaG9yaXpvbnRhbFwiLFxuICAgICAgICBwaXBzVmVydGljYWw6IFwicGlwcy12ZXJ0aWNhbFwiLFxuICAgICAgICBtYXJrZXI6IFwibWFya2VyXCIsXG4gICAgICAgIG1hcmtlckhvcml6b250YWw6IFwibWFya2VyLWhvcml6b250YWxcIixcbiAgICAgICAgbWFya2VyVmVydGljYWw6IFwibWFya2VyLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlck5vcm1hbDogXCJtYXJrZXItbm9ybWFsXCIsXG4gICAgICAgIG1hcmtlckxhcmdlOiBcIm1hcmtlci1sYXJnZVwiLFxuICAgICAgICBtYXJrZXJTdWI6IFwibWFya2VyLXN1YlwiLFxuICAgICAgICB2YWx1ZTogXCJ2YWx1ZVwiLFxuICAgICAgICB2YWx1ZUhvcml6b250YWw6IFwidmFsdWUtaG9yaXpvbnRhbFwiLFxuICAgICAgICB2YWx1ZVZlcnRpY2FsOiBcInZhbHVlLXZlcnRpY2FsXCIsXG4gICAgICAgIHZhbHVlTm9ybWFsOiBcInZhbHVlLW5vcm1hbFwiLFxuICAgICAgICB2YWx1ZUxhcmdlOiBcInZhbHVlLWxhcmdlXCIsXG4gICAgICAgIHZhbHVlU3ViOiBcInZhbHVlLXN1YlwiXG4gICAgfTtcbiAgICAvLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBJTlRFUk5BTF9FVkVOVF9OUyA9IHtcbiAgICAgICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICAgICAgYXJpYTogXCIuX19hcmlhXCJcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG4gICAgZnVuY3Rpb24gdGVzdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgICAgICAvLyBmb3IgbGluZWFyIHNsaWRlcnMuIE92ZXJ3cml0dGVuIGlmIHNldCBpbiAncmFuZ2UnLlxuICAgICAgICBwYXJzZWQuc2luZ2xlU3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRQYWdlTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkTXVsdGlwbGllciA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmREZWZhdWx0U3RlcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UmFuZ2UocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBGaWx0ZXIgaW5jb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgICAgICBpZiAoZW50cnkubWluID09PSB1bmRlZmluZWQgfHwgZW50cnkubWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IE1pc3NpbmcgJ21pbicgb3IgJ21heCcgaW4gJ3JhbmdlJy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLnNwZWN0cnVtID0gbmV3IFNwZWN0cnVtKGVudHJ5LCBwYXJzZWQuc25hcCB8fCBmYWxzZSwgcGFyc2VkLnNpbmdsZVN0ZXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAvLyBWYWxpZGF0ZSBpbnB1dC4gVmFsdWVzIGFyZW4ndCB0ZXN0ZWQsIGFzIHRoZSBwdWJsaWMgLnZhbCBtZXRob2RcbiAgICAgICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIG51bWJlciBvZiBoYW5kbGVzLlxuICAgICAgICBwYXJzZWQuaGFuZGxlcyA9IGVudHJ5Lmxlbmd0aDtcbiAgICAgICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgICAgICAvLyBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhcnQgb3B0aW9ucy5cbiAgICAgICAgcGFyc2VkLnN0YXJ0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTbmFwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuZm9yY2UgMTAwJSBzdGVwcGluZyB3aXRoaW4gc3VicmFuZ2VzLlxuICAgICAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QW5pbWF0ZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYW5pbWF0ZScgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLmFuaW1hdGUgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGlvbkR1cmF0aW9uJyBvcHRpb24gbXVzdCBiZSBhIG51bWJlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFuaW1hdGlvbkR1cmF0aW9uID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGNvbm5lY3QgPSBbZmFsc2VdO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gXCJsb3dlclwiKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFt0cnVlLCBmYWxzZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09IFwidXBwZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbZmFsc2UsIHRydWVdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBib29sZWFuIG9wdGlvbnNcbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWplY3QgaW52YWxpZCBpbnB1dFxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nvbm5lY3QnIG9wdGlvbiBkb2Vzbid0IG1hdGNoIGhhbmRsZSBjb3VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0ID0gZW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0T3JpZW50YXRpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAgICAgLy8gYXJyYXkgc2VsZWN0aW9uLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdvcmllbnRhdGlvbicgb3B0aW9uIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RNYXJnaW4ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElzc3VlICM1ODJcbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RMaW1pdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgICAgICBpZiAoIXBhcnNlZC5saW1pdCB8fCBwYXJzZWQuaGFuZGxlcyA8IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RQYWRkaW5nKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkgJiYgIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cnkpICYmICEoZW50cnkubGVuZ3RoID09PSAyIHx8IGlzTnVtZXJpYyhlbnRyeVswXSkgfHwgaXNOdW1lcmljKGVudHJ5WzFdKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBiZSBudW1lcmljIG9yIGFycmF5IG9mIGV4YWN0bHkgMiBudW1iZXJzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgICAgICBlbnRyeSA9IFtlbnRyeSwgZW50cnldO1xuICAgICAgICB9XG4gICAgICAgIC8vICdnZXREaXN0YW5jZScgcmV0dXJucyBmYWxzZSBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgICAgIHBhcnNlZC5wYWRkaW5nID0gW3BhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVswXSksIHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeVsxXSldO1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8vIGxhc3QgXCJyYW5nZVwiIGNhbid0IGNvbnRhaW4gc3RlcCBzaXplIGFzIGl0IGlzIHB1cmVseSBhbiBlbmRwb2ludC5cbiAgICAgICAgICAgIGlmIChwYXJzZWQucGFkZGluZ1swXVtpbmRleF0gPCAwIHx8IHBhcnNlZC5wYWRkaW5nWzFdW2luZGV4XSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgICAgICB2YXIgZmlyc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICB2YXIgbGFzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbcGFyc2VkLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3Qgbm90IGV4Y2VlZCAxMDAlIG9mIHRoZSByYW5nZS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdERpcmVjdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIC8vIFNldCBkaXJlY3Rpb24gYXMgYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3kgcGFyc2luZy5cbiAgICAgICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAgICAgLy8gaGFuZGxlcyBnZXQgdGhlIGNvbm5lY3QvYmFja2dyb3VuZCBjbGFzc2VzLlxuICAgICAgICBzd2l0Y2ggKGVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICAgICAgcGFyc2VkLmRpciA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdkaXJlY3Rpb24nIG9wdGlvbiB3YXMgbm90IHJlY29nbml6ZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RCZWhhdmlvdXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IGlzIGEgc3RyaW5nLlxuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYmVoYXZpb3VyJyBtdXN0IGJlIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3B0aW9ucy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgICAgIC8vIE5vbmUgYXJlIHJlcXVpcmVkLlxuICAgICAgICB2YXIgdGFwID0gZW50cnkuaW5kZXhPZihcInRhcFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgICAgIHZhciBmaXhlZCA9IGVudHJ5LmluZGV4T2YoXCJmaXhlZFwiKSA+PSAwO1xuICAgICAgICB2YXIgc25hcCA9IGVudHJ5LmluZGV4T2YoXCJzbmFwXCIpID49IDA7XG4gICAgICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgICAgICB2YXIgdW5jb25zdHJhaW5lZCA9IGVudHJ5LmluZGV4T2YoXCJ1bmNvbnN0cmFpbmVkXCIpID49IDA7XG4gICAgICAgIHZhciBkcmFnQWxsID0gZW50cnkuaW5kZXhPZihcImRyYWctYWxsXCIpID49IDA7XG4gICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIG1hcmdpbiB0byBlbmZvcmNlIGZpeGVkIHN0YXRlXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5jb25zdHJhaW5lZCAmJiAocGFyc2VkLm1hcmdpbiB8fCBwYXJzZWQubGltaXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5ldmVudHMgPSB7XG4gICAgICAgICAgICB0YXA6IHRhcCB8fCBzbmFwLFxuICAgICAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgICAgIGRyYWdBbGw6IGRyYWdBbGwsXG4gICAgICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxuICAgICAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSB0cnVlIHx8IGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQudG9vbHRpcHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IGFzQXJyYXkoZW50cnkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBmb3JtYXR0ZXIgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyICE9PSBcImJvb2xlYW5cIiAmJiAhaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZm9ybWF0dGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEhhbmRsZUF0dHJpYnV0ZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgYXR0cmlidXRlcyBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBcmlhRm9ybWF0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhcmlhRm9ybWF0JyByZXF1aXJlcyAndG8nIG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdmb3JtYXQnIHJlcXVpcmVzICd0bycgYW5kICdmcm9tJyBtZXRob2RzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RLZXlib2FyZFN1cHBvcnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REb2N1bWVudEVsZW1lbnQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgICAgIHBhcnNlZC5kb2N1bWVudEVsZW1lbnQgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwic3RyaW5nXCIgJiYgZW50cnkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jc3NQcmVmaXggPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY3NzQ2xhc3NlcycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmNzc1ByZWZpeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3Nlc1trZXldID0gcGFyc2VkLmNzc1ByZWZpeCArIGVudHJ5W2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0gZW50cnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGVzdCBhbGwgZGV2ZWxvcGVyIHNldHRpbmdzIGFuZCBwYXJzZSB0byBhc3N1bXB0aW9uLXNhZmUgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVG8gcHJvdmUgYSBmaXggZm9yICM1MzcsIGZyZWV6ZSBvcHRpb25zIGhlcmUuXG4gICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICAgICAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgbWFyZ2luOiBudWxsLFxuICAgICAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgICAgICBwYWRkaW5nOiBudWxsLFxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyLFxuICAgICAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0dGVyXG4gICAgICAgIH07XG4gICAgICAgIC8vIFRlc3RzIGFyZSBleGVjdXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgcHJlc2VudGVkIGhlcmUuXG4gICAgICAgIHZhciB0ZXN0cyA9IHtcbiAgICAgICAgICAgIHN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RTdGVwIH0sXG4gICAgICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllciB9LFxuICAgICAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmREZWZhdWx0U3RlcCB9LFxuICAgICAgICAgICAgc3RhcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdFN0YXJ0IH0sXG4gICAgICAgICAgICBjb25uZWN0OiB7IHI6IHRydWUsIHQ6IHRlc3RDb25uZWN0IH0sXG4gICAgICAgICAgICBkaXJlY3Rpb246IHsgcjogdHJ1ZSwgdDogdGVzdERpcmVjdGlvbiB9LFxuICAgICAgICAgICAgc25hcDogeyByOiBmYWxzZSwgdDogdGVzdFNuYXAgfSxcbiAgICAgICAgICAgIGFuaW1hdGU6IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRlIH0sXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGlvbkR1cmF0aW9uIH0sXG4gICAgICAgICAgICByYW5nZTogeyByOiB0cnVlLCB0OiB0ZXN0UmFuZ2UgfSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0T3JpZW50YXRpb24gfSxcbiAgICAgICAgICAgIG1hcmdpbjogeyByOiBmYWxzZSwgdDogdGVzdE1hcmdpbiB9LFxuICAgICAgICAgICAgbGltaXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RMaW1pdCB9LFxuICAgICAgICAgICAgcGFkZGluZzogeyByOiBmYWxzZSwgdDogdGVzdFBhZGRpbmcgfSxcbiAgICAgICAgICAgIGJlaGF2aW91cjogeyByOiB0cnVlLCB0OiB0ZXN0QmVoYXZpb3VyIH0sXG4gICAgICAgICAgICBhcmlhRm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0QXJpYUZvcm1hdCB9LFxuICAgICAgICAgICAgZm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0Rm9ybWF0IH0sXG4gICAgICAgICAgICB0b29sdGlwczogeyByOiBmYWxzZSwgdDogdGVzdFRvb2x0aXBzIH0sXG4gICAgICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdEtleWJvYXJkU3VwcG9ydCB9LFxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50OiB7IHI6IGZhbHNlLCB0OiB0ZXN0RG9jdW1lbnRFbGVtZW50IH0sXG4gICAgICAgICAgICBjc3NQcmVmaXg6IHsgcjogdHJ1ZSwgdDogdGVzdENzc1ByZWZpeCB9LFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzQ2xhc3NlcyB9LFxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlczogeyByOiBmYWxzZSwgdDogdGVzdEhhbmRsZUF0dHJpYnV0ZXMgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIGJlaGF2aW91cjogXCJ0YXBcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogXCJub1VpLVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMFxuICAgICAgICB9O1xuICAgICAgICAvLyBBcmlhRm9ybWF0IGRlZmF1bHRzIHRvIHJlZ3VsYXIgZm9ybWF0LCBpZiBhbnkuXG4gICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAmJiAhb3B0aW9ucy5hcmlhRm9ybWF0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBSdW4gYWxsIG9wdGlvbnMgdGhyb3VnaCBhIHRlc3RpbmcgbWVjaGFuaXNtIHRvIGVuc3VyZSBjb3JyZWN0XG4gICAgICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgICAgICAvLyBiZSBoYW5kbGVkIHByb3Blcmx5LiBFLmcuIHdyYXBwaW5nIGludGVnZXJzIGluIGFycmF5cy5cbiAgICAgICAgT2JqZWN0LmtleXModGVzdHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKCFpc1NldChvcHRpb25zW25hbWVdKSAmJiBkZWZhdWx0c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RzW25hbWVdLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3RzW25hbWVdLnQocGFyc2VkLCAhaXNTZXQob3B0aW9uc1tuYW1lXSkgPyBkZWZhdWx0c1tuYW1lXSA6IG9wdGlvbnNbbmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICAgICAgcGFyc2VkLnBpcHMgPSBvcHRpb25zLnBpcHM7XG4gICAgICAgIC8vIEFsbCByZWNlbnQgYnJvd3NlcnMgYWNjZXB0IHVucHJlZml4ZWQgdHJhbnNmb3JtLlxuICAgICAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgICAgIC8vIEFzc3VtZSB1c2Ugb2YgLXdlYmtpdC0gaWYgdW5wcmVmaXhlZCBhbmQgLW1zLSBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD10cmFuc2Zvcm1zMmRcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNQcmVmaXggPSBkLnN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBub1ByZWZpeCA9IGQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgICAgICAvLyBQaXBzIGRvbid0IG1vdmUsIHNvIHdlIGNhbiBwbGFjZSB0aGVtIHVzaW5nIGxlZnQvdG9wLlxuICAgICAgICB2YXIgc3R5bGVzID0gW1xuICAgICAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgICAgIFtcInJpZ2h0XCIsIFwiYm90dG9tXCJdXG4gICAgICAgIF07XG4gICAgICAgIHBhcnNlZC5zdHlsZSA9IHN0eWxlc1twYXJzZWQuZGlyXVtwYXJzZWQub3J0XTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gICAgLy9lbmRyZWdpb25cbiAgICBmdW5jdGlvbiBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lID0gZ2V0U3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUoKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lICYmIGdldFN1cHBvcnRzUGFzc2l2ZSgpO1xuICAgICAgICAvLyBBbGwgdmFyaWFibGVzIGxvY2FsIHRvICdzY29wZScgYXJlIHByZWZpeGVkIHdpdGggJ3Njb3BlXydcbiAgICAgICAgLy8gU2xpZGVyIERPTSBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB2YXIgc2NvcGVfQmFzZTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgIHZhciBzY29wZV9Db25uZWN0cztcbiAgICAgICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgICAgIHZhciBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgLy8gU2xpZGVyIHN0YXRlIHZhbHVlc1xuICAgICAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICB2YXIgc2NvcGVfVmFsdWVzID0gW107XG4gICAgICAgIHZhciBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0FjdGl2ZUhhbmRsZXNDb3VudCA9IDA7XG4gICAgICAgIHZhciBzY29wZV9FdmVudHMgPSB7fTtcbiAgICAgICAgLy8gRG9jdW1lbnQgTm9kZXNcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50ID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBzY29wZV9Cb2R5ID0gc2NvcGVfRG9jdW1lbnQuYm9keTtcbiAgICAgICAgLy8gRm9yIGhvcml6b250YWwgc2xpZGVycyBpbiBzdGFuZGFyZCBsdHIgZG9jdW1lbnRzLFxuICAgICAgICAvLyBtYWtlIC5ub1VpLW9yaWdpbiBvdmVyZmxvdyB0byB0aGUgbGVmdCBzbyB0aGUgZG9jdW1lbnQgZG9lc24ndCBzY3JvbGwuXG4gICAgICAgIHZhciBzY29wZV9EaXJPZmZzZXQgPSBzY29wZV9Eb2N1bWVudC5kaXIgPT09IFwicnRsXCIgfHwgb3B0aW9ucy5vcnQgPT09IDEgPyAwIDogMTAwO1xuICAgICAgICAvLyBDcmVhdGVzIGEgbm9kZSwgYWRkcyBpdCB0byB0YXJnZXQsIHJldHVybnMgdGhlIG5ldyBub2RlLlxuICAgICAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgYSBvcmlnaW4gdG8gdGhlIGJhc2VcbiAgICAgICAgZnVuY3Rpb24gYWRkT3JpZ2luKGJhc2UsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMub3JpZ2luKTtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGROb2RlVG8ob3JpZ2luLCBvcHRpb25zLmNzc0NsYXNzZXMuaGFuZGxlKTtcbiAgICAgICAgICAgIGFkZE5vZGVUbyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpO1xuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsIFN0cmluZyhoYW5kbGVOdW1iZXIpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcbiAgICAgICAgICAgICAgICAvLyAwID0gZm9jdXNhYmxlIGFuZCByZWFjaGFibGVcbiAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzXzEgPSBvcHRpb25zLmhhbmRsZUF0dHJpYnV0ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc18xW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJzbGlkZXJcIik7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1vcmllbnRhdGlvblwiLCBvcHRpb25zLm9ydCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYW5kbGVOdW1iZXIgPT09IG9wdGlvbnMuaGFuZGxlcyAtIDEpIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluc2VydCBub2RlcyBmb3IgY29ubmVjdCBlbGVtZW50c1xuICAgICAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xuICAgICAgICAgICAgaWYgKCFhZGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5jb25uZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgaGFuZGxlcyB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKGNvbm5lY3RPcHRpb25zLCBiYXNlKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzID0gW107XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zWzBdKSk7XG4gICAgICAgICAgICAvLyBbOjo6Ok89PT09Tz09PT1PPT09PV1cbiAgICAgICAgICAgIC8vIGNvbm5lY3RPcHRpb25zID0gWzAsIDEsIDEsIDFdXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gS2VlcCBhIGxpc3Qgb2YgYWxsIGFkZGVkIGhhbmRsZXMuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5wdXNoKGFkZE9yaWdpbihiYXNlLCBpKSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVyc1tpXSA9IGk7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMucHVzaChhZGRDb25uZWN0KGNvbm5lY3RCYXNlLCBjb25uZWN0T3B0aW9uc1tpICsgMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIGEgc2luZ2xlIHNsaWRlci5cbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVyKGFkZFRhcmdldCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgY2xhc3NlcyBhbmQgZGF0YSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRpciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub3J0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52ZXJ0aWNhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGV4dERpcmVjdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoYWRkVGFyZ2V0KS5kaXJlY3Rpb247XG4gICAgICAgICAgICBpZiAodGV4dERpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRleHREaXJlY3Rpb25SdGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvbkx0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvb2x0aXAoaGFuZGxlLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy50b29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhoYW5kbGUuZmlyc3RDaGlsZCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvb2x0aXApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2xpZGVyRGlzYWJsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIERpc2FibGUgdGhlIHNsaWRlciBkcmFnZ2luZyBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgIGZ1bmN0aW9uIGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZU9yaWdpbi5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUb29sdGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwcykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdG9vbHRpcHMgb3B0aW9uIGlzIGEgc2hvcnRoYW5kIGZvciB1c2luZyB0aGUgJ3VwZGF0ZScgZXZlbnQuXG4gICAgICAgIGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIC8vIFRvb2x0aXBzIGFyZSBhZGRlZCB3aXRoIG9wdGlvbnMudG9vbHRpcHMgaW4gb3JpZ2luYWwgb3JkZXIuXG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlX1Rvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXS50byh1bmVuY29kZWRbaGFuZGxlTnVtYmVyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhcmlhKCkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgYmluZEV2ZW50KFwidXBkYXRlXCIgKyBJTlRFUk5BTF9FVkVOVF9OUy5hcmlhLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCwgdGFwLCBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBpbmRleCwgMTAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdHRlZCB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhvcHRpb25zLmFyaWFGb3JtYXQudG8odW5lbmNvZGVkW2luZGV4XSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgdG8gc2xpZGVyIHJhbmdlIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWluKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBtYXggPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWF4KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBub3cgPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobm93KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLCBtaW4pO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1heFwiLCBtYXgpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW5vd1wiLCBub3cpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRHcm91cChwaXBzKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIHJhbmdlLlxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5SYW5nZSB8fCBwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuU3RlcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0ueFZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGlwcy52YWx1ZXMgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIDAgLSAxMDAgaW4gJ2NvdW50JyBwYXJ0cy5cbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBwaXBzLnZhbHVlcyAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHNwcmVhZCA9IDEwMCAvIGludGVydmFsO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBMaXN0IHRoZXNlIHBhcnRzIGFuZCBoYXZlIHRoZW0gaGFuZGxlZCBhcyAncG9zaXRpb25zJy5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW50ZXJ2YWxdID0gaW50ZXJ2YWwgKiBzcHJlYWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKDEwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcFRvUmFuZ2UodmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Qb3NpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXAgYWxsIHBlcmNlbnRhZ2VzIHRvIG9uLXJhbmdlIHZhbHVlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZShwaXBzLnZhbHVlcywgcGlwcy5zdGVwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaXBzLm1vZGUgPT09IGV4cG9ydHMuUGlwc01vZGUuVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG11c3QgYmUgc3RlcHBlZCwgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgcGVyY2VudGFnZSBmaXJzdC5cbiAgICAgICAgICAgICAgICBpZiAocGlwcy5zdGVwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChzY29wZV9TcGVjdHJ1bS50b1N0ZXBwaW5nKHZhbHVlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBjYW4gc2ltcGx5IHVzZSB0aGUgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBwaXBzLnZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTsgLy8gcGlwcy5tb2RlID0gbmV2ZXJcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXBUb1JhbmdlKHZhbHVlcywgc3RlcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzdGVwcGVkID8gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVNwcmVhZChwaXBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzYWZlSW5jcmVtZW50KHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBmbG9hdGluZyBwb2ludCB2YXJpYW5jZSBieSBkcm9wcGluZyB0aGUgc21hbGxlc3QgZGVjaW1hbCBwbGFjZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcigodmFsdWUgKyBpbmNyZW1lbnQpLnRvRml4ZWQoNykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ2V0R3JvdXAocGlwcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXhlcyA9IHt9O1xuICAgICAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgICAgICB2YXIgbGFzdEluUmFuZ2UgPSBzY29wZV9TcGVjdHJ1bS54VmFsW3Njb3BlX1NwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB2YXIgaWdub3JlRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcHJldlBjdCA9IDA7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBncm91cCwgc29ydCBpdCBhbmQgZmlsdGVyIGF3YXkgYWxsIGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICBncm91cCA9IHVuaXF1ZShncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGdyb3VwWzBdICE9PSBmaXJzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC51bnNoaWZ0KGZpcnN0SW5SYW5nZSk7XG4gICAgICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGlrZXdpc2UgZm9yIHRoZSBsYXN0IG9uZS5cbiAgICAgICAgICAgIGlmIChncm91cFtncm91cC5sZW5ndGggLSAxXSAhPT0gbGFzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGxhc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVMYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBsb3dlciArIHVwcGVyIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaCA9IGdyb3VwW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BjdDtcbiAgICAgICAgICAgICAgICB2YXIgcGN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgcGN0UG9zO1xuICAgICAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcztcbiAgICAgICAgICAgICAgICB2YXIgcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNTdGVwcyA9IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVzaW5nICdzdGVwcycgbW9kZSwgdXNlIHRoZSBwcm92aWRlZCBzdGVwcy5cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlJ2xsIHN0ZXAgb24gdG8gdGhlIG5leHQgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSAnZnVsbCcgc3RlcC5cbiAgICAgICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IGhpZ2ggLSBsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIGhpZ2ggaXMgdW5kZWZpbmVkIHdlIGFyZSBhdCB0aGUgbGFzdCBzdWJyYW5nZS4gTWFrZSBzdXJlIGl0IGl0ZXJhdGVzIG9uY2UgKCMxMDg4KVxuICAgICAgICAgICAgICAgIGlmIChoaWdoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaCA9IGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHN0ZXAgaXNuJ3QgMCwgd2hpY2ggd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCAoIzY1NClcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIGFsbCBzdGVwcyBpbiB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkgPSBzYWZlSW5jcmVtZW50KGksIHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcGVyY2VudGFnZSB2YWx1ZSBmb3IgdGhlIGN1cnJlbnQgc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzaXplIGZvciB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgICAgIG5ld1BjdCA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcoaSk7XG4gICAgICAgICAgICAgICAgICAgIHBjdERpZmZlcmVuY2UgPSBuZXdQY3QgLSBwcmV2UGN0O1xuICAgICAgICAgICAgICAgICAgICBzdGVwcyA9IHBjdERpZmZlcmVuY2UgLyAocGlwcy5kZW5zaXR5IHx8IDEpO1xuICAgICAgICAgICAgICAgICAgICByZWFsU3RlcHMgPSBNYXRoLnJvdW5kKHN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyByYXRpbyByZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgcGVyY2VudGFnZS1zcGFjZSBhIHBvaW50IGluZGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBSb3VuZCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgdG8gYW4gZXZlbiBudW1iZXIsIHRoZW4gZGl2aWRlIGJ5IHR3b1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBzcHJlYWQgdGhlIG9mZnNldCBvbiBib3RoIHNpZGVzIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXZpZGUgYWxsIHBvaW50cyBldmVubHksIGFkZGluZyB0aGUgY29ycmVjdCBudW1iZXIgdG8gdGhpcyBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHVwIHRvIDw9IHNvIHRoYXQgMTAwJSBnZXRzIGEgcG9pbnQsIGV2ZW50IGlmIGlnbm9yZUxhc3QgaXMgc2V0LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKHEgPSAxOyBxIDw9IHJlYWxTdGVwczsgcSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmF0aW8gYmV0d2VlbiB0aGUgcm91bmRlZCB2YWx1ZSBhbmQgdGhlIGFjdHVhbCBzaXplIG1pZ2h0IGJlIH4xJSBvZmYuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBwZXJjZW50YWdlIG9mZnNldCBieSB0aGUgbnVtYmVyIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyIHN1YnJhbmdlLiBkZW5zaXR5ID0gMSB3aWxsIHJlc3VsdCBpbiAxMDAgcG9pbnRzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVsbCByYW5nZSwgMiBmb3IgNTAsIDQgZm9yIDI1LCBldGMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwY3RQb3MgPSBwcmV2UGN0ICsgcSAqIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1twY3RQb3MudG9GaXhlZCg1KV0gPSBbc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHBjdFBvcyksIDBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcG9pbnQgdHlwZS5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGdyb3VwLmluZGV4T2YoaSkgPiAtMSA/IGV4cG9ydHMuUGlwc1R5cGUuTGFyZ2VWYWx1ZSA6IGlzU3RlcHMgPyBleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWUgOiBleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZm9yY2UgdGhlICdpZ25vcmVGaXJzdCcgb3B0aW9uIGJ5IG92ZXJ3cml0aW5nIHRoZSB0eXBlIGZvciAwLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGlnbm9yZUZpcnN0ICYmIGkgIT09IGhpZ2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgPT09IGhpZ2ggJiYgaWdub3JlTGFzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlICd0eXBlJyBvZiB0aGlzIHBvaW50LiAwID0gcGxhaW4sIDEgPSByZWFsIHZhbHVlLCAyID0gc3RlcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNbbmV3UGN0LnRvRml4ZWQoNSldID0gW2ksIHR5cGVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgcHJldlBjdCA9IG5ld1BjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXJGdW5jLCBmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLFxuICAgICAgICAgICAgICAgIF9hW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWIsXG4gICAgICAgICAgICAgICAgX2EpO1xuICAgICAgICAgICAgdmFyIG1hcmtlclNpemVDbGFzc2VzID0gKF9iID0ge30sXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJOb3JtYWwsXG4gICAgICAgICAgICAgICAgX2JbZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLlNtYWxsVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclN1YixcbiAgICAgICAgICAgICAgICBfYik7XG4gICAgICAgICAgICB2YXIgdmFsdWVPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlSG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlVmVydGljYWxdO1xuICAgICAgICAgICAgdmFyIG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMubWFya2VySG9yaXpvbnRhbCwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlclZlcnRpY2FsXTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMub3J0ID09PSAwID8gb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNIb3Jpem9udGFsIDogb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHNWZXJ0aWNhbCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc2VzKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gc291cmNlID09PSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWVudGF0aW9uQ2xhc3NlcyA9IGEgPyB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA6IG1hcmtlck9yaWVudGF0aW9uQ2xhc3NlcztcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZUNsYXNzZXMgPSBhID8gdmFsdWVTaXplQ2xhc3NlcyA6IG1hcmtlclNpemVDbGFzc2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBcIiBcIiArIG9yaWVudGF0aW9uQ2xhc3Nlc1tvcHRpb25zLm9ydF0gKyBcIiBcIiArIHNpemVDbGFzc2VzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkU3ByZWFkKG9mZnNldCwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgdHlwZSA9IGZpbHRlckZ1bmMgPyBmaWx0ZXJGdW5jKHZhbHVlLCB0eXBlKSA6IHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuUGlwc1R5cGUuTm9uZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG1hcmtlciBmb3IgZXZlcnkgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGFkZE5vZGVUbyhlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbb3B0aW9ucy5zdHlsZV0gPSBvZmZzZXQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAvLyBWYWx1ZXMgYXJlIG9ubHkgYXBwZW5kZWQgZm9yIHBvaW50cyBtYXJrZWQgJzEnIG9yICcyJy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA+IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IFN0cmluZyhmb3JtYXR0ZXIudG8odmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHBlbmQgYWxsIHBvaW50cy5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwcmVhZCkuZm9yRWFjaChmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgYWRkU3ByZWFkKG9mZnNldCwgc3ByZWFkW29mZnNldF1bMF0sIHNwcmVhZFtvZmZzZXRdWzFdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlUGlwcygpIHtcbiAgICAgICAgICAgIGlmIChzY29wZV9QaXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9QaXBzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwaXBzKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIEZpeCAjNjY5XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgICAgICB2YXIgc3ByZWFkID0gZ2VuZXJhdGVTcHJlYWQocGlwcyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gcGlwcy5maWx0ZXI7XG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gcGlwcy5mb3JtYXQgfHwge1xuICAgICAgICAgICAgICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBzY29wZV9UYXJnZXQuYXBwZW5kQ2hpbGQoYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlciwgZm9ybWF0KSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cbiAgICAgICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgYWx0ID0gKFwib2Zmc2V0XCIgKyBbXCJXaWR0aFwiLCBcIkhlaWdodFwiXVtvcHRpb25zLm9ydF0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlciBmb3IgYXR0YWNoaW5nIGV2ZW50cyB0cm91Z2ggYSBwcm94eS5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYSBub2RlLCBub3QgYSBub2RlTGlzdFxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHJlamVjdGVkLCBsZWF2aW5nIHRoZSBzbGlkZXIgXCJzdHVja1wiIHRvIHRoZSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbiwgYnV0IHRoYXQgYWxsb3dzIHBhbm5pbmcsIHdoaWNoIGJyZWFrc1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzUGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxuICAgICAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChbZXZlbnROYW1lLCBtZXRob2RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSB0eXBlLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgICAgIGlmIChlLnR5cGUuaW5kZXhPZihcIk1TUG9pbnRlclwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb25lb3VzIGV2ZW50cyBzZWVtIHRvIGJlIHBhc3NlZCBpbiBvY2Nhc2lvbmFsbHkgb24gaU9TL2lQYWRPUyBhZnRlciB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiICYmICFlLmJ1dHRvbnMgJiYgIWUudG91Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIG9uZSBoYW5kbGUgc2hvdWxkIGJlIGNvbmNlcm5lZCBhYm91dCBpcyB0aGUgdG91Y2hlcyB0aGF0IG9yaWdpbmF0ZWQgb24gdG9wIG9mIGl0LlxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgIHZhciBpc1RvdWNoT25UYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2tUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgdG91Y2hzdGFydCBldmVudHMsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIHN0aWxsIG5vIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYICsgcGFnZU9mZnNldC54O1xuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0O1xuICAgICAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoY2FsY1BvaW50KSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgICAgICAvLyBDbGFtcCBwcm9wb3NhbCBiZXR3ZWVuIDAlIGFuZCAxMDAlXG4gICAgICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgICAgICBwcm9wb3NhbCA9IGxpbWl0KHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBoYW5kbGUgY2xvc2VzdCB0byBhIGNlcnRhaW4gcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZURpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQXRFZGdlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID09PSAxMDAgJiYgc21hbGxlc3REaWZmZXJlbmNlID09PSAxMDA7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXJBZnRlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8PSBzbWFsbGVzdERpZmZlcmVuY2UgJiYgY2xpY2tlZFBvc2l0aW9uID4gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TGVhdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxuICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICAgICAgdmFyIG1vdmVtZW50ID0gKG9wdGlvbnMuZGlyID8gLTEgOiAxKSAqIChldmVudC5jYWxjUG9pbnQgLSBkYXRhLnN0YXJ0Q2FsY1BvaW50KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMsIGRhdGEuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRhdGEuaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXG4gICAgICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBoYW5kbGUgYXMgJ2FjdGl2ZScgc28gaXQgY2FuIGJlIHN0eWxlZC5cbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IHRhcmdldCBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgb3JpZ2luYWwgb25lIHNvIHRoYXQgd2Uga2VlcFxuICAgICAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgc3RhcnRDYWxjUG9pbnQ6IGV2ZW50LmNhbGNQb2ludCxcbiAgICAgICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZW5kRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLmVuZCwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBldmVudEVuZCwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgb3V0RXZlbnQgPSBhdHRhY2hFdmVudChcIm1vdXNlb3V0XCIsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRMZWF2ZSwge1xuICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgICAgICAgICAgICAgIGRvTm90UmVqZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBwdXNoZWQgdGhlIGxpc3RlbmVycyBpbiB0aGUgbGlzdGVuZXIgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAgICAgLy8gbWVhbmluZyB0aGUgb25seSBob2xkb3V0IGlzIGlPUyBTYWZhcmkuIFRoaXMgZG9lc24ndCBtYXR0ZXI6IHRleHQgc2VsZWN0aW9uIGlzbid0IHRyaWdnZXJlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzdGFydFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgICAgICAvLyBUYWNrbGUgdGhlIGNhc2UgdGhhdCBhbGwgaGFuZGxlcyBhcmUgJ2Rpc2FibGVkJy5cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcHJvcG9zYWwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50U3RhcnQoZXZlbnQsIHsgaGFuZGxlTnVtYmVyczogW2hhbmRsZU51bWJlcl0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZXMgYSAnaG92ZXInIGV2ZW50IGZvciBhIGhvdmVyZWQgbW91c2UvcGVuIHBvc2l0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICAgICAgdmFyIGxhcmdlU3RlcEtleXMgPSBbXCJQYWdlRG93blwiLCBcIlBhZ2VVcFwiXTtcbiAgICAgICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYW4gcmlnaHQtdG8tbGVmdCBzbGlkZXIsIHRoZSBsZWZ0IGFuZCByaWdodCBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMub3J0ICYmICFvcHRpb25zLmRpcikge1xuICAgICAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGFyZ2VTdGVwS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKFwiQXJyb3dcIiwgXCJcIik7XG4gICAgICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICAgICAgdmFyIGlzRG93biA9IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF0gfHwgaXNMYXJnZURvd247XG4gICAgICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc01heCA9IGtleSA9PT0gZWRnZUtleXNbMV07XG4gICAgICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRvO1xuICAgICAgICAgICAgaWYgKGlzVXAgfHwgaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2VVcCB8fCBpc0xhcmdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoaXNEb3duID8gLTEgOiAxKSAqIHN0ZXA7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01heCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIHRvIHNldmVyYWwgc2xpZGVyIHBhcnRzLlxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKCFiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLnRhcCkge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIHNjb3BlX0Jhc2UsIGV2ZW50VGFwLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJlIGhvdmVyIGV2ZW50c1xuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5ob3Zlcikge1xuICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgICAgICBob3ZlcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgcmFuZ2UgZHJhZ2dhYmxlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgPT09IGZhbHNlIHx8IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUJlZm9yZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZUFmdGVyID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudEhvbGRlcnMgPSBbY29ubmVjdF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVzVG9EcmFnID0gW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IFtpbmRleCAtIDEsIGluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoY29ubmVjdCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWdnYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHJhbmdlIGlzIGZpeGVkLCB0aGUgZW50aXJlIHJhbmdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBkcmFnZ2VkIGJ5IHRoZSBoYW5kbGVzLiBUaGUgaGFuZGxlIGluIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBvcmlnaW4gd2lsbCBwcm9wYWdhdGUgdGhlIHN0YXJ0IGV2ZW50IHVwd2FyZCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGl0IG5lZWRzIHRvIGJlIGJvdW5kIG1hbnVhbGx5IG9uIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQmVmb3JlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUFmdGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXNUb0RyYWcgPSBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyc1RvRHJhZyA9IHNjb3BlX0hhbmRsZU51bWJlcnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBldmVudEhvbGRlciwgZXZlbnRTdGFydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXM6IGhhbmRsZXNUb0RyYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogaGFuZGxlTnVtYmVyc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCBib3VuZCBpcyAndXBkYXRlLCcgZmlyZSBpdCBpbW1lZGlhdGVseSBmb3IgYWxsIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5hbWVzcGFjZWRFdmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRlbGV0ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgZXZlbnQgaWYgaW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5kZXgsIDAgb3IgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWZ0IG9mZnNldCBvZiB0aGUgaGFuZGxlLCBpbiByZWxhdGlvbiB0byB0aGUgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZTtcbiAgICAgICAgICAgIC8vIEZvciBzbGlkZXJzIHdpdGggbXVsdGlwbGUgaGFuZGxlcywgbGltaXQgbW92ZW1lbnQgdG8gdGhlIG90aGVyIGhhbmRsZS5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgIW9wdGlvbnMuZXZlbnRzLnVuY29uc3RyYWluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9va0JhY2t3YXJkICYmIGhhbmRsZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubWFyZ2luLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBsaW1pdCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBlZmZlY3QsIGxpbWl0aW5nIGhhbmRsZXMgdG8gYVxuICAgICAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGhhbmRsZXMgd291bGQgYmUgdW5tb3ZhYmxlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubGltaXQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyICsgMV0sIG9wdGlvbnMubGltaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZWRnZXMgb2YgdGhlIHNsaWRlci4gUGFkZGluZyBtdXN0IGJlID4gMC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgwLCBvcHRpb25zLnBhZGRpbmdbMF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDEwMCwgb3B0aW9ucy5wYWRkaW5nWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XG4gICAgICAgICAgICAvLyBMaW1pdCBwZXJjZW50YWdlIHRvIHRoZSAwIC0gMTAwIHJhbmdlXG4gICAgICAgICAgICB0byA9IGxpbWl0KHRvKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBoYW5kbGUgY2FuJ3QgbW92ZVxuICAgICAgICAgICAgaWYgKHRvID09PSByZWZlcmVuY2VbaGFuZGxlTnVtYmVyXSAmJiAhZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlcyBzbGlkZXIgb3JpZW50YXRpb24gdG8gY3JlYXRlIENTUyBydWxlcy4gYSA9IGJhc2UgdmFsdWU7XG4gICAgICAgIGZ1bmN0aW9uIGluUnVsZU9yZGVyKHYsIGEpIHtcbiAgICAgICAgICAgIHZhciBvID0gb3B0aW9ucy5vcnQ7XG4gICAgICAgICAgICByZXR1cm4gKG8gPyBhIDogdikgKyBcIiwgXCIgKyAobyA/IHYgOiBhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXG4gICAgICAgIC8vIChib29sLCAlIHRvIG1vdmUsIFslIHdoZXJlIGhhbmRsZSBzdGFydGVkLCAuLi5dLCBbaW5kZXggaW4gc2NvcGVfSGFuZGxlcywgLi4uXSlcbiAgICAgICAgZnVuY3Rpb24gbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgbG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzLCBjb25uZWN0KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBTdG9yZSBmaXJzdCBoYW5kbGUgbm93LCBzbyB3ZSBzdGlsbCBoYXZlIGl0IGluIGNhc2UgaGFuZGxlTnVtYmVycyBpcyByZXZlcnNlZFxuICAgICAgICAgICAgdmFyIGZpcnN0SGFuZGxlID0gaGFuZGxlTnVtYmVyc1swXTtcbiAgICAgICAgICAgIHZhciBiID0gWyF1cHdhcmQsIHVwd2FyZF07XG4gICAgICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAgICAgLy8gQ29weSBoYW5kbGVOdW1iZXJzIHNvIHdlIGRvbid0IGNoYW5nZSB0aGUgZGF0YXNldFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycyA9IGhhbmRsZU51bWJlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAgICAgLy8gSWYgdGhhdCBvbmUgY2FuJ3QgbW92ZSB0aGUgc2Vjb25kIGNhbid0IGVpdGhlci5cbiAgICAgICAgICAgIGlmICh1cHdhcmQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgMTogZ2V0IHRoZSBtYXhpbXVtIHBlcmNlbnRhZ2UgdGhhdCBhbnkgb2YgdGhlIGhhbmRsZXMgY2FuIG1vdmVcbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlciwgbykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHByb3Bvc2FscywgaGFuZGxlTnVtYmVyLCBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgb25lIG9mIHRoZSBoYW5kbGVzIGNhbid0IG1vdmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsID0gdG8gLSBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdID0gdG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVzaW5nIG9uZSBoYW5kbGUsIGNoZWNrIGJhY2t3YXJkIEFORCBmb3J3YXJkXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiID0gZiA9IFt0cnVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU3RlcCAyOiBUcnkgdG8gc2V0IHRoZSBoYW5kbGVzIHdpdGggdGhlIGZvdW5kIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBsb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSArIHByb3Bvc2FsLCBiW29dLCBmW29dKSB8fCBzdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU3RlcCAzOiBJZiBhIGhhbmRsZSBtb3ZlZCwgZmlyZSBldmVudHNcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGNvbm5lY3QsIHRoZW4gZmlyZSBkcmFnIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVFdmVudChcImRyYWdcIiwgZmlyc3RIYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlcyBhIGJhc2UgdmFsdWUgYW5kIGFuIG9mZnNldC4gVGhpcyBvZmZzZXQgaXMgdXNlZCBmb3IgdGhlIGNvbm5lY3QgYmFyIHNpemUuXG4gICAgICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgICAgIC8vIFVuZm9ydHVuYXRlbHksIGEgcm91bmRpbmcgYnVnIGluIENocm9tZSBtYWtlcyBpdCBpbXBvc3NpYmxlIHRvIGltcGxlbWVudCB0aGlzIGZlYXR1cmVcbiAgICAgICAgLy8gaW4gdGhpcyBtYW5uZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5ODIyM1xuICAgICAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGlyID8gMTAwIC0gYSAtIGIgOiBhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZVBvc2l0aW9uKGhhbmRsZU51bWJlciwgdG8pIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhdGlvbnMuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgdmFsdWUgdG8gdGhlIHNsaWRlciBzdGVwcGluZy9yYW5nZS5cbiAgICAgICAgICAgIHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlUnVsZSA9IFwidHJhbnNsYXRlKFwiICsgaW5SdWxlT3JkZXIodHJhbnNsYXRpb24gKyBcIiVcIiwgXCIwXCIpICsgXCIpXCI7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGVbb3B0aW9ucy50cmFuc2Zvcm1SdWxlXSA9IHRyYW5zbGF0ZVJ1bGU7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlciArIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMgYmVmb3JlIHRoZSBzbGlkZXIgbWlkZGxlIGFyZSBzdGFja2VkIGxhdGVyID0gaGlnaGVyLFxuICAgICAgICAvLyBIYW5kbGVzIGFmdGVyIHRoZSBtaWRkbGUgbGF0ZXIgaXMgbG93ZXJcbiAgICAgICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgICAgICBmdW5jdGlvbiBzZXRaaW5kZXgoKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHZhciB6SW5kZXggPSAzICsgKHNjb3BlX0hhbmRsZXMubGVuZ3RoICsgZGlyICogaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl0uc3R5bGUuekluZGV4ID0gU3RyaW5nKHpJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXN0IHN1Z2dlc3RlZCB2YWx1ZXMgYW5kIGFwcGx5IG1hcmdpbiwgc3RlcC5cbiAgICAgICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICAgICAgZnVuY3Rpb24gc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIGlmICghZXhhY3RJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlciwgdG8sIGxvb2tCYWNrd2FyZCwgbG9va0ZvcndhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3QoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB1c2UgdHdvIHJ1bGVzOlxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBBcyB0aGUgZWxlbWVudCBoYXMgYSB3aWR0aCBvZiAxMDAlLCBhIHRyYW5zbGF0aW9uIG9mIDEwMCUgaXMgZXF1YWwgdG8gMTAwJSBvZiB0aGUgcGFyZW50ICgubm9VaS1iYXNlKVxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgdmFyIHNjYWxlUnVsZSA9IFwic2NhbGUoXCIgKyBpblJ1bGVPcmRlcihjb25uZWN0V2lkdGggLyAxMDAsIFwiMVwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgd2l0aCBudWxsIGluZGljYXRlcyBhbiAnaWdub3JlJy5cbiAgICAgICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLmZvcm1hdC5mcm9tKHRvKTtcbiAgICAgICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBhc0FycmF5KGlucHV0KTtcbiAgICAgICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpcmVTZXRFdmVudDtcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwYXNzLCB3aXRob3V0IGxvb2tBaGVhZCBidXQgd2l0aCBsb29rQmFja3dhcmQuIFZhbHVlcyBhcmUgc2V0IGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgICAgIGlmIChpc0luaXQgJiYgc2NvcGVfU3BlY3RydW0uaGFzTm9TaXplKCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gaGFuZGxlTnVtYmVyICogc3BhY2VfMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1toYW5kbGVOdW1iZXJdICE9PSBudWxsICYmIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHZhbHVlIGZvciBhIHNpbmdsZSBoYW5kbGVcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gTnVtYmVyKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIHNuYXBwZWQsIGRpcmVjdGx5IHVzZSBkZWZpbmVkIHN0ZXAgdmFsdWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIG5leHQgdmFsdWUgaW4gdGhpcyBzdGVwIG1vdmVzIGludG8gdGhlIG5leHQgc3RlcCxcbiAgICAgICAgICAgIC8vIHRoZSBpbmNyZW1lbnQgaXMgdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IHN0ZXAgLSB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgKyBpbmNyZW1lbnQgPiBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBiZXlvbmQgdGhlIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vdywgaWYgYXQgdGhlIHNsaWRlciBlZGdlcywgdGhlcmUgaXMgbm8gaW4vZGVjcmVtZW50XG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IDEwMCkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBwZXIgIzM5MSwgdGhlIGNvbXBhcmlzb24gZm9yIHRoZSBkZWNyZW1lbnQgc3RlcCBjYW4gaGF2ZSBzb21lIHJvdW5kaW5nIGlzc3Vlcy5cbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAgICAgLy8gUm91bmQgcGVyICMzOTFcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IG51bGwgJiYgaW5jcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWNyZW1lbnQgIT09IG51bGwgJiYgZGVjcmVtZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZGVjcmVtZW50LCBpbmNyZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIHNpemUgZm9yIHRoZSBzbGlkZXIuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwcygpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0YWJsZTogbWFyZ2luLCBsaW1pdCwgcGFkZGluZywgc3RlcCwgcmFuZ2UsIGFuaW1hdGUsIHNuYXBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgLy8gU3BlY3RydW0gaXMgY3JlYXRlZCB1c2luZyB0aGUgcmFuZ2UsIHNuYXAsIGRpcmVjdGlvbiBhbmQgc3RlcCBvcHRpb25zLlxuICAgICAgICAgICAgLy8gJ3NuYXAnIGFuZCAnc3RlcCcgY2FuIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciB2ID0gdmFsdWVHZXQoKTtcbiAgICAgICAgICAgIHZhciB1cGRhdGVBYmxlID0gW1xuICAgICAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBcImFuaW1hdGVcIixcbiAgICAgICAgICAgICAgICBcInNuYXBcIixcbiAgICAgICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgICAgICBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIFwicGlwc1wiLFxuICAgICAgICAgICAgICAgIFwidG9vbHRpcHNcIlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIE9ubHkgY2hhbmdlIG9wdGlvbnMgdGhhdCB3ZSdyZSBhY3R1YWxseSBwYXNzZWQgdG8gdXBkYXRlLlxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHVuZGVmaW5lZC4gbnVsbCByZW1vdmVzIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1RvVXBkYXRlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gTG9hZCBuZXcgb3B0aW9ucyBpbnRvIHRoZSBzbGlkZXIgc3RhdGVcbiAgICAgICAgICAgIHVwZGF0ZUFibGUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW25hbWVdID0gbmV3T3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3BlX1NwZWN0cnVtID0gbmV3T3B0aW9ucy5zcGVjdHJ1bTtcbiAgICAgICAgICAgIC8vIExpbWl0LCBtYXJnaW4gYW5kIHBhZGRpbmcgZGVwZW5kIG9uIHRoZSBzcGVjdHJ1bSBidXQgYXJlIHN0b3JlZCBvdXRzaWRlIG9mIGl0LiAoIzY3NylcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgICAgICBvcHRpb25zLmxpbWl0ID0gbmV3T3B0aW9ucy5saW1pdDtcbiAgICAgICAgICAgIG9wdGlvbnMucGFkZGluZyA9IG5ld09wdGlvbnMucGFkZGluZztcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0b29sdGlwcywgcmVtb3ZlcyBleGlzdGluZy5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJbnZhbGlkYXRlIHRoZSBjdXJyZW50IHBvc2l0aW9uaW5nIHNvIHZhbHVlU2V0IGZvcmNlcyBhbiB1cGRhdGUuXG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhbHVlU2V0KGlzU2V0KG9wdGlvbnNUb1VwZGF0ZS5zdGFydCkgPyBvcHRpb25zVG9VcGRhdGUuc3RhcnQgOiB2LCBmaXJlU2V0RXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uIHN0ZXBzXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU2xpZGVyKCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGVsZW1lbnQsIGluaXRpYWxpemUgSFRNTCBhbmQgc2V0IGNsYXNzZXMuXG4gICAgICAgICAgICAvLyBBZGQgaGFuZGxlcyBhbmQgY29ubmVjdCBlbGVtZW50cy5cbiAgICAgICAgICAgIHNjb3BlX0Jhc2UgPSBhZGRTbGlkZXIoc2NvcGVfVGFyZ2V0KTtcbiAgICAgICAgICAgIGFkZEVsZW1lbnRzKG9wdGlvbnMuY29ubmVjdCwgc2NvcGVfQmFzZSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdXNlciBldmVudHMuXG4gICAgICAgICAgICBiaW5kU2xpZGVyRXZlbnRzKG9wdGlvbnMuZXZlbnRzKTtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcHVibGljIHZhbHVlIG1ldGhvZCB0byBzZXQgdGhlIHN0YXJ0IHZhbHVlcy5cbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGlwcykge1xuICAgICAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyaWEoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXR1cFNsaWRlcigpO1xuICAgICAgICB2YXIgc2NvcGVfU2VsZiA9IHtcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgICAgICBzdGVwczogZ2V0TmV4dFN0ZXBzLFxuICAgICAgICAgICAgb246IGJpbmRFdmVudCxcbiAgICAgICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICBnZXQ6IHZhbHVlR2V0LFxuICAgICAgICAgICAgc2V0OiB2YWx1ZVNldCxcbiAgICAgICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXG4gICAgICAgICAgICByZXNldDogdmFsdWVSZXNldCxcbiAgICAgICAgICAgIC8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZywgZG9uJ3QgdXNlIHRoaXMgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIF9fbW92ZUhhbmRsZXM6IGZ1bmN0aW9uICh1cHdhcmQsIHByb3Bvc2FsLCBoYW5kbGVOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZV9UYXJnZXQsXG4gICAgICAgICAgICByZW1vdmVQaXBzOiByZW1vdmVQaXBzLFxuICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHM6IHJlbW92ZVRvb2x0aXBzLFxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRvb2x0aXBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXBzOiBwaXBzIC8vIElzc3VlICM1OTRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1NlbGY7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHRhcmdldCwgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfVxuICAgIHZhciBub3Vpc2xpZGVyID0ge1xuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCBjbGFzc2VzLCBhbGxvd3MgZ2xvYmFsIGNoYW5nZXMuXG4gICAgICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgY3JlYXRlOiBpbml0aWFsaXplXG4gICAgfTtcblxuICAgIGV4cG9ydHMuY3JlYXRlID0gaW5pdGlhbGl6ZTtcbiAgICBleHBvcnRzLmNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzO1xuICAgIGV4cG9ydHNbJ2RlZmF1bHQnXSA9IG5vdWlzbGlkZXI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm91aXNsaWRlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL251bGwuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DYXJkcyA9IHZvaWQgMDtcclxucmVxdWlyZShcIi4uL251bGwuc2Nzc1wiKTtcclxucmVxdWlyZShcIi4vY2FyZC5zY3NzXCIpO1xyXG5jb25zdCBjYXJkXzEgPSByZXF1aXJlKFwiLi9jYXJkXCIpO1xyXG5jbGFzcyBDYXJkcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIHJlbmRlck51bGwoKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbl9uZXdfeWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLW5ldy15ZWFyJyk7XHJcbiAgICAgICAgY29sbGVjdGlvbl9uZXdfeWVhci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIHJlbmRlclRveXMoKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbl9uZXdfeWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uLW5ldy15ZWFyJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJOdWxsKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG95ID0gbmV3IGNhcmRfMS5DYXJkKGl0ZW0pO1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uX25ld195ZWFyLmFwcGVuZENoaWxkKHRveS5yZW5kZXJUb3koKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DYXJkcyA9IENhcmRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNhcmQgPSB2b2lkIDA7XHJcbmNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIC8vIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGRhdGEuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZSA9IGRhdGEuZmF2b3JpdGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMubnVtID0gZGF0YS5udW07XHJcbiAgICAgICAgdGhpcy5zaGFwZSA9IGRhdGEuc2hhcGU7XHJcbiAgICAgICAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xyXG4gICAgICAgIHRoaXMueWVhciA9IGRhdGEueWVhcjtcclxuICAgICAgICB0aGlzLnRoZdChaG9zZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlbmRlclRveSgpIHtcclxuICAgICAgICBjb25zdCB0b3lDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG95Q2FyZC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0b3lDYXJkLmNsYXNzTGlzdC5hZGQoYHRveUNhcmRgKTtcclxuICAgICAgICB0b3lDYXJkLmNsYXNzTGlzdC5hZGQoYHRveUNhcmQke3RoaXMubnVtfWApO1xyXG4gICAgICAgIGNvbnN0IG5hbWVUb3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuYW1lVG95LmNsYXNzTGlzdC5hZGQoYG5hbWVUb3lgKTtcclxuICAgICAgICBjb25zdCBuYW1lVG95X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG5hbWVUb3lfbmFtZS5jbGFzc0xpc3QuYWRkKGBuYW1lVG95X19uYW1lYCk7XHJcbiAgICAgICAgY29uc3QgbmFtZVRveV9waWMgPSBuZXcgSW1hZ2U7XHJcbiAgICAgICAgbmFtZVRveV9waWMuY2xhc3NMaXN0LmFkZChgbmFtZVRveV9fcGljYCk7XHJcbiAgICAgICAgbmFtZVRveV9waWMuc3JjID0gYC4vYXNzZXRzL3RveXMvJHt0aGlzLm51bX0ucG5nYDtcclxuICAgICAgICBuYW1lVG95X3BpYy5hbHQgPSBgJHt0aGlzLm51bX0ucG5nYDtcclxuICAgICAgICBjb25zdCBjb3VudFRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvdW50VG95LmNsYXNzTGlzdC5hZGQoYGNvdW50VG95YCk7XHJcbiAgICAgICAgY29uc3QgY291bnRUb3lfY291bnRfc3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvdW50VG95X2NvdW50X3N0YXRpYy5jbGFzc0xpc3QuYWRkKGBjb3VudFRveV9fY291bnQtc3RhdGljYCk7XHJcbiAgICAgICAgY29uc3QgY291bnRUb3lfY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY291bnRUb3lfY291bnQuY2xhc3NMaXN0LmFkZChgY291bnRUb3lfX2NvdW50YCk7XHJcbiAgICAgICAgY29uc3QgeWVhclRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHllYXJUb3kuY2xhc3NMaXN0LmFkZChgeWVhclRveWApO1xyXG4gICAgICAgIGNvbnN0IHllYXJUb3lfeWVhcl9zdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgeWVhclRveV95ZWFyX3N0YXRpYy5jbGFzc0xpc3QuYWRkKGB5ZWFyVG95X195ZWFyLXN0YXRpY2ApO1xyXG4gICAgICAgIGNvbnN0IHllYXJUb3lfeWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB5ZWFyVG95X3llYXIuY2xhc3NMaXN0LmFkZChgeWVhclRveV9feWVhcmApO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlVG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2hhcGVUb3kuY2xhc3NMaXN0LmFkZChgc2hhcGVUb3lgKTtcclxuICAgICAgICBjb25zdCBzaGFwZVRveV9zaGFwZV9zdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc2hhcGVUb3lfc2hhcGVfc3RhdGljLmNsYXNzTGlzdC5hZGQoYHNoYXBlVG95X19zaGFwZS1zdGF0aWNgKTtcclxuICAgICAgICBjb25zdCBzaGFwZVRveV9zaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzaGFwZVRveV9zaGFwZS5jbGFzc0xpc3QuYWRkKGBzaGFwZVRveV9fc2hhcGVgKTtcclxuICAgICAgICBjb25zdCBjb2xvclRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbG9yVG95LmNsYXNzTGlzdC5hZGQoYGNvbG9yVG95YCk7XHJcbiAgICAgICAgY29uc3QgY29sb3JUb3lfY29sb3Jfc3RhdGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbG9yVG95X2NvbG9yX3N0YXRpYy5jbGFzc0xpc3QuYWRkKGBjb2xvclRveV9fY29sb3Itc3RhdGljYCk7XHJcbiAgICAgICAgY29uc3QgY29sb3JUb3lfY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgY29sb3JUb3lfY29sb3IuY2xhc3NMaXN0LmFkZChgY29sb3JUb3lfX2NvbG9yYCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVRveSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNpemVUb3kuY2xhc3NMaXN0LmFkZChgc2l6ZVRveWApO1xyXG4gICAgICAgIGNvbnN0IHNpemVUb3lfc2l6ZV9zdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc2l6ZVRveV9zaXplX3N0YXRpYy5jbGFzc0xpc3QuYWRkKGBzaXplVG95X19zaXplLXN0YXRpY2ApO1xyXG4gICAgICAgIGNvbnN0IHNpemVUb3lfc2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzaXplVG95X3NpemUuY2xhc3NMaXN0LmFkZChgc2l6ZVRveV9fc2l6ZWApO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlVG95ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZmF2b3JpdGVUb3kuY2xhc3NMaXN0LmFkZChgZmF2b3JpdGVUb3lgKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZVRveV9mYXZvcml0ZV9zdGF0aWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZmF2b3JpdGVUb3lfZmF2b3JpdGVfc3RhdGljLmNsYXNzTGlzdC5hZGQoYGZhdm9yaXRlVG95X19mYXZvcml0ZS1zdGF0aWNgKTtcclxuICAgICAgICBjb25zdCBmYXZvcml0ZVRveV9mYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBmYXZvcml0ZVRveV9mYXZvcml0ZS5jbGFzc0xpc3QuYWRkKGBmYXZvcml0ZVRveV9fZmF2b3JpdGVgKTtcclxuICAgICAgICBuYW1lVG95X25hbWUuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfWA7XHJcbiAgICAgICAgbmFtZVRveS5hcHBlbmRDaGlsZChuYW1lVG95X25hbWUpO1xyXG4gICAgICAgIG5hbWVUb3kuYXBwZW5kQ2hpbGQobmFtZVRveV9waWMpO1xyXG4gICAgICAgIGNvdW50VG95X2NvdW50X3N0YXRpYy5pbm5lclRleHQgPSBg0JrQvtC70LjRh9C10YHRgtCy0L46ICR7dGhpcy5jb3VudH1gO1xyXG4gICAgICAgIGNvdW50VG95LmFwcGVuZENoaWxkKGNvdW50VG95X2NvdW50X3N0YXRpYyk7XHJcbiAgICAgICAgLy8gY291bnRUb3kuYXBwZW5kQ2hpbGQoY291bnRUb3lfY291bnQpO1xyXG4gICAgICAgIHllYXJUb3lfeWVhcl9zdGF0aWMuaW5uZXJUZXh0ID0gYNCT0L7QtCDQv9C+0LrRg9C/0LrQuDogJHt0aGlzLnllYXJ9YDtcclxuICAgICAgICB5ZWFyVG95LmFwcGVuZENoaWxkKHllYXJUb3lfeWVhcl9zdGF0aWMpO1xyXG4gICAgICAgIC8vIHllYXJUb3kuYXBwZW5kQ2hpbGQoeWVhclRveV95ZWFyKTtcclxuICAgICAgICBzaGFwZVRveV9zaGFwZV9zdGF0aWMuaW5uZXJUZXh0ID0gYNCk0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6ICR7dGhpcy5zaGFwZX1gO1xyXG4gICAgICAgIHNoYXBlVG95LmFwcGVuZENoaWxkKHNoYXBlVG95X3NoYXBlX3N0YXRpYyk7XHJcbiAgICAgICAgLy8gc2hhcGVUb3kuYXBwZW5kQ2hpbGQoc2hhcGVUb3lfc2hhcGUpO1xyXG4gICAgICAgIGNvbG9yVG95X2NvbG9yX3N0YXRpYy5pbm5lclRleHQgPSBg0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6ICR7dGhpcy5jb2xvcn1gO1xyXG4gICAgICAgIGNvbG9yVG95LmFwcGVuZENoaWxkKGNvbG9yVG95X2NvbG9yX3N0YXRpYyk7XHJcbiAgICAgICAgLy8gY29sb3JUb3kuYXBwZW5kQ2hpbGQoY29sb3JUb3lfY29sb3IpO1xyXG4gICAgICAgIHNpemVUb3lfc2l6ZV9zdGF0aWMuaW5uZXJUZXh0ID0gYNCg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDogJHt0aGlzLnNpemV9YDtcclxuICAgICAgICBzaXplVG95LmFwcGVuZENoaWxkKHNpemVUb3lfc2l6ZV9zdGF0aWMpO1xyXG4gICAgICAgIC8vIHNpemVUb3kuYXBwZW5kQ2hpbGQoc2l6ZVRveV9zaXplKTtcclxuICAgICAgICBmYXZvcml0ZVRveV9mYXZvcml0ZV9zdGF0aWMuaW5uZXJUZXh0ID0gYNCb0Y7QsdC40LzQsNGPOiAke3RoaXMuZmF2b3JpdGV9YDtcclxuICAgICAgICBmYXZvcml0ZVRveS5hcHBlbmRDaGlsZChmYXZvcml0ZVRveV9mYXZvcml0ZV9zdGF0aWMpO1xyXG4gICAgICAgIC8vIGZhdm9yaXRlVG95LmFwcGVuZENoaWxkKGZhdm9yaXRlVG95X2Zhdm9yaXRlKTtcclxuICAgICAgICB0b3lDYXJkLmFwcGVuZENoaWxkKG5hbWVUb3kpO1xyXG4gICAgICAgIHRveUNhcmQuYXBwZW5kQ2hpbGQoY291bnRUb3kpO1xyXG4gICAgICAgIHRveUNhcmQuYXBwZW5kQ2hpbGQoeWVhclRveSk7XHJcbiAgICAgICAgdG95Q2FyZC5hcHBlbmRDaGlsZChzaGFwZVRveSk7XHJcbiAgICAgICAgdG95Q2FyZC5hcHBlbmRDaGlsZChjb2xvclRveSk7XHJcbiAgICAgICAgdG95Q2FyZC5hcHBlbmRDaGlsZChzaXplVG95KTtcclxuICAgICAgICB0b3lDYXJkLmFwcGVuZENoaWxkKGZhdm9yaXRlVG95KTtcclxuICAgICAgICB0b3lDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzY2hvb3NlbigpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aGXQoWhvc2VuKVxyXG4gICAgICAgICAgICAgICAgdG95Q2FyZC5jbGFzc0xpc3QuYWRkKGDQoWhvc2VuYCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRveUNhcmQuY2xhc3NMaXN0LnJlbW92ZShg0KFob3NlbmApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3lDYXJkO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgaXNjaG9vc2VuKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50aGXQoWhvc2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhl0KFob3NlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRoZdChaG9zZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUb3koKTtcclxuICAgIH1cclxuICAgIDtcclxufVxyXG5leHBvcnRzLkNhcmQgPSBDYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY2xhc3MgUmluZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENhbiBkZWZpbmUgY29uc3RydWN0b3IgYXJndW1lbnRzIGlmIHlvdSB3aXNoLlxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gSWYgeW91IGRlZmluZSBhIGNvbnN0cnVjdG9yLCBhbHdheXMgY2FsbCBzdXBlcigpIGZpcnN0IVxyXG4gICAgICAgIC8vIFRoaXMgaXMgc3BlY2lmaWMgdG8gQ0UgYW5kIHJlcXVpcmVkIGJ5IHRoZSBzcGVjLlxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gU2V0dXAgYSBjbGljayBsaXN0ZW5lciBvbiA8YXBwLWRyYXdlcj4gaXRzZWxmLlxyXG4gICAgICAgIGNvbnN0IHJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmluZycpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gJ2hlbGxvJztcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlLmlzQ29ubmVjdGVkKTtcclxuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgLnJpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTE4Ljg4JSA2MDYuODYlIGF0IDAlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMCUsIHJnYmEoMTU3LCAyNDMsIDI1NSwgMC4yKSAxMDAlKTtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDsgICAgXG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICBgO1xyXG4gICAgICAgIC8vIHJpbmcuYXBwZW5kQ2hpbGQocmluZyk7XHJcbiAgICAgICAgcmluZy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdyaW5nLWZvci1mYXZvcml0ZScsIFJpbmcpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNsaWRlciA9IHZvaWQgMDtcclxuY29uc3Qgbm91aXNsaWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJub3Vpc2xpZGVyXCIpKTtcclxucmVxdWlyZShcIm5vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzc1wiKTtcclxuY2xhc3MgU2xpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNldDBmc2xpZGVyLCBtaW5SYW5nZSwgbWF4UmFuZ2UpIHtcclxuICAgICAgICB0aGlzLnNldDBmc2xpZGVyID0gc2V0MGZzbGlkZXI7XHJcbiAgICAgICAgdGhpcy5taW5SYW5nZSA9IG1pblJhbmdlO1xyXG4gICAgICAgIHRoaXMubWF4UmFuZ2UgPSBtYXhSYW5nZTtcclxuICAgIH1cclxuICAgIGFueVNsaWRlckV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuYW55U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5zZXQwZnNsaWRlcn1gKTtcclxuICAgICAgICB0aGlzLmxlZnRhbnlTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnNldDBmc2xpZGVyfS1zbmFwLXZhbHVlLWxvd2VyYCk7XHJcbiAgICAgICAgdGhpcy5yaWdodGFueVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuc2V0MGZzbGlkZXJ9LXNuYXAtdmFsdWUtdXBwZXJgKTtcclxuICAgICAgICBub3Vpc2xpZGVyXzEuZGVmYXVsdC5jcmVhdGUodGhpcy5hbnlTbGlkZXIsIHtcclxuICAgICAgICAgICAgc3RhcnQ6IFt0aGlzLm1pblJhbmdlLCB0aGlzLm1heFJhbmdlXSxcclxuICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgICAgICdtaW4nOiB0aGlzLm1pblJhbmdlLFxyXG4gICAgICAgICAgICAgICAgJ21heCc6IHRoaXMubWF4UmFuZ2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFueVNsaWRlclVwZGF0ZVJhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYW55U2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG91dHB1dFZhbHVlID0gdGhpcy5hbnlTbGlkZXIubm9VaVNsaWRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKG91dHB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRhbnlTbGlkZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQob3V0cHV0VmFsdWVbMF0pLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0YW55U2xpZGVyLmlubmVySFRNTCA9IHBhcnNlSW50KG91dHB1dFZhbHVlWzFdKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhbnlTbGlkZXJTZXQoW21pblJhbmdlLCBtYXhSYW5nZV0pIHtcclxuICAgICAgICB0aGlzLmFueVNsaWRlci5ub1VpU2xpZGVyLnNldChbbWluUmFuZ2UsIG1heFJhbmdlXSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TbGlkZXIgPSBTbGlkZXI7XHJcbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQ2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvQ2FyZHNcIik7XHJcbnJlcXVpcmUoXCIuL251bGwuc2Nzc1wiKTtcclxucmVxdWlyZShcIi4vZ2xvYmFsLnNjc3NcIik7XHJcbmNvbnN0IGRhdGFfanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kYXRhLmpzXCIpKTtcclxuY29uc3QgYXBwID0gbmV3IENhcmRzXzEuQ2FyZHMoZGF0YV9qc18xLmRlZmF1bHQpO1xyXG5hcHAucmVuZGVyVG95cygpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNvcnRpbmcgPSB2b2lkIDA7XHJcbmNvbnN0IGRhdGFfanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kYXRhLmpzXCIpKTtcclxuY29uc3QgQ2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvQ2FyZHNcIik7XHJcbmNvbnN0IHNsaWRlcl8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9zbGlkZXJcIik7XHJcbmNsYXNzIFNvcnRpbmcge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5iYWxsU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJlbGxTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29uZVNoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zbm93U2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpZ3VyaW5lU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndoaXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnllbGxvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmx1ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ncmVlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYXJnZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5taWRkbGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGl0dGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy55ZWFyU2V0TWluID0gMTk0MDtcclxuICAgICAgICB0aGlzLnllYXJTZXRNYXggPSAyMDIwO1xyXG4gICAgICAgIHRoaXMuc2V0T2ZNaW4gPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0T2ZNYXggPSAxMjtcclxuICAgIH1cclxuICAgIHdyaXRlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgdG9TYXZlID0ge1xyXG4gICAgICAgICAgICBiYWxsU2hhcGVkX2xzOiB0aGlzLmJhbGxTaGFwZWQsXHJcbiAgICAgICAgICAgIGJlbGxTaGFwZWRfbHM6IHRoaXMuYmVsbFNoYXBlZCxcclxuICAgICAgICAgICAgY29uZVNoYXBlZF9sczogdGhpcy5jb25lU2hhcGVkLFxyXG4gICAgICAgICAgICBzbm93U2hhcGVkX2xzOiB0aGlzLnNub3dTaGFwZWQsXHJcbiAgICAgICAgICAgIGZpZ3VyaW5lU2hhcGVkX2xzOiB0aGlzLmZpZ3VyaW5lU2hhcGVkLFxyXG4gICAgICAgICAgICB3aGl0ZV9sczogdGhpcy53aGl0ZSxcclxuICAgICAgICAgICAgeWVsbG93X2xzOiB0aGlzLnllbGxvdyxcclxuICAgICAgICAgICAgcmVkX2xzOiB0aGlzLnJlZCxcclxuICAgICAgICAgICAgYmx1ZV9sczogdGhpcy5ibHVlLFxyXG4gICAgICAgICAgICBncmVlbl9sczogdGhpcy5ncmVlbixcclxuICAgICAgICAgICAgbGFyZ2VfbHM6IHRoaXMubGFyZ2UsXHJcbiAgICAgICAgICAgIG1pZGRsZV9sczogdGhpcy5taWRkbGUsXHJcbiAgICAgICAgICAgIGxpdHRsZV9sczogdGhpcy5saXR0bGUsXHJcbiAgICAgICAgICAgIGZhdm9yaXRlX2xzOiB0aGlzLmZhdm9yaXRlLFxyXG4gICAgICAgICAgICB0ZXh0X2xzOiB0aGlzLnRleHQsXHJcbiAgICAgICAgICAgIHllYXJTZXRNaW5fbHM6IHRoaXMueWVhclNldE1pbixcclxuICAgICAgICAgICAgeWVhclNldE1heF9sczogdGhpcy55ZWFyU2V0TWF4LFxyXG4gICAgICAgICAgICBzZXRPZk1pbl9sczogdGhpcy5zZXRPZk1pbixcclxuICAgICAgICAgICAgc2V0T2ZNYXhfbHM6IHRoaXMuc2V0T2ZNYXgsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGZhdm9yaXRlRXZlbnQoY2hlY2tlcikge1xyXG4gICAgICAgIGlmIChjaGVja2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cb0Y7QsdC40LzQsNGPOiBmYWxzZScsICdmYXZvcml0ZS1kaXNwbGF5LW5vbmUnLCAnZmF2b3JpdGVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQm9GO0LHQuNC80LDRjzogZmFsc2UnLCAnZmF2b3JpdGUtZGlzcGxheS1ub25lJywgJ2Zhdm9yaXRlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGl0dGxlU2l6ZUV2ZW50KGNoZWNrZXIpIHtcclxuICAgICAgICBpZiAoY2hlY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KDQsNC30LzQtdGAINC40LPRgNGD0YjQutC4OiDQvNCw0LvRi9C5JywgJ2xpdHRsZS1kaXNwbGF5LW5vbmUnLCAnc2l6ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KDQsNC30LzQtdGAINC40LPRgNGD0YjQutC4OiDQvNCw0LvRi9C5JywgJ2xpdHRsZS1kaXNwbGF5LW5vbmUnLCAnc2l6ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1pZGRsZVNpemVFdmVudChjaGVja2VyKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cg0LDQt9C80LXRgCDQuNCz0YDRg9GI0LrQuDog0YHRgNC10LTQvdC40LknLCAnbWlkZGxlLWRpc3BsYXktbm9uZScsICdzaXplVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQoNCw0LfQvNC10YAg0LjQs9GA0YPRiNC60Lg6INGB0YDQtdC00L3QuNC5JywgJ21pZGRsZS1kaXNwbGF5LW5vbmUnLCAnc2l6ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhcmdlU2l6ZUV2ZW50KGNoZWNrZXIpIHtcclxuICAgICAgICBpZiAoY2hlY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KDQsNC30LzQtdGAINC40LPRgNGD0YjQutC4OiDQsdC+0LvRjNGI0L7QuScsICdsYXJnZS1kaXNwbGF5LW5vbmUnLCAnc2l6ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KDQsNC30LzQtdGAINC40LPRgNGD0YjQutC4OiDQsdC+0LvRjNGI0L7QuScsICdsYXJnZS1kaXNwbGF5LW5vbmUnLCAnc2l6ZVRveScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNraW5nRmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVFdmVudCh0aGlzLmZhdm9yaXRlKTtcclxuICAgICAgICB0aGlzLmxpdHRsZVNpemVFdmVudCh0aGlzLmxpdHRsZSk7XHJcbiAgICAgICAgdGhpcy5taWRkbGVTaXplRXZlbnQodGhpcy5taWRkbGUpO1xyXG4gICAgICAgIHRoaXMubGFyZ2VTaXplRXZlbnQodGhpcy5sYXJnZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJhbGxTaGFwZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YjQsNGAJywgJ2JhbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YjQsNGAJywgJ2JhbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5iZWxsU2hhcGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INC60L7Qu9C+0LrQvtC70YzRh9C40LonLCAnYmVsbFNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDQutC+0LvQvtC60L7Qu9GM0YfQuNC6JywgJ2JlbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jb25lU2hhcGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGI0LjRiNC60LAnLCAnY29uZVNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRiNC40YjQutCwJywgJ2NvbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zbm93U2hhcGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGB0L3QtdC20LjQvdC60LAnLCAnc25vd1NoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRgdC90LXQttC40L3QutCwJywgJ3Nub3dTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5maWd1cmluZVNoYXBlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRhNC40LPRg9GA0LrQsCcsICdmaWd1cmluZVNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRhNC40LPRg9GA0LrQsCcsICdmaWd1cmluZVNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLndoaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQsdC10LvRi9C5JywgJ3doaXRlLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQsdC10LvRi9C5JywgJ3doaXRlLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMueWVsbG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQttC10LvRgtGL0LknLCAneWVsbG93LWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQttC10LvRgtGL0LknLCAneWVsbG93LWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQutGA0LDRgdC90YvQuScsICdyZWQtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC60YDQsNGB0L3Ri9C5JywgJ3JlZC1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INGB0LjQvdC40LknLCAnYmx1ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0YHQuNC90LjQuScsICdibHVlLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZ3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INC30LXQu9GR0L3Ri9C5JywgJ2dyZWVuLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQt9C10LvRkdC90YvQuScsICdncmVlbi1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBzb3J0aW5nQV9aKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFfanNfMS5kZWZhdWx0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEubmFtZSA8IGIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc29ydGluZ1pfQSgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhX2pzXzEuZGVmYXVsdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPCBiLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNvcnRpbmdjb3VudFVwKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFfanNfMS5kZWZhdWx0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCthLmNvdW50IDwgK2IuY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoK2EuY291bnQgPiArYi5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzb3J0aW5nY291bnREb3duKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFfanNfMS5kZWZhdWx0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCthLmNvdW50IDwgK2IuY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgrYS5jb3VudCA+ICtiLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeUFueVZpc2libGUoaWRlbnRpdHksIHR5cGUsIG5hbWVPZkNsYXNzKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3JUb3kgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtuYW1lT2ZDbGFzc31gKV07XHJcbiAgICAgICAgY29sb3JUb3kuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgPT09IGAke2lkZW50aXR5fWApIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZpbHRlckJ5QW55VW5WaXNpYmxlKGlkZW50aXR5LCB0eXBlLCBuYW1lT2ZDbGFzcykge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yVG95ID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7bmFtZU9mQ2xhc3N9YCldO1xyXG4gICAgICAgIGNvbG9yVG95LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ID09PSBgJHtpZGVudGl0eX1gKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0eXBlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeUlucHV0VGV4dChpZGVudGl0eSwgdHlwZSwgdGV4dCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVUb3lOYW1lID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7aWRlbnRpdHl9YCldO1xyXG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJykge1xyXG4gICAgICAgICAgICBuYW1lVG95TmFtZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQuaW5uZXJUZXh0KS5pbmRleE9mKHRleHQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7dHlwZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7dHlwZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuYW1lVG95TmFtZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbHRlckJ5UmFuZ2UoaWRlbnRpdHksIGxvdywgaGlnaCwgdHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHllYXJUb3kgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtpZGVudGl0eX1gKV07XHJcbiAgICAgICAgeWVhclRveS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgrZWxlbWVudC5pbm5lclRleHQuc2xpY2UoZWxlbWVudC5pbm5lclRleHQubGFzdEluZGV4T2YoJyAnKSkgPj0gbG93ICYmICtlbGVtZW50LmlubmVyVGV4dC5zbGljZShlbGVtZW50LmlubmVyVGV4dC5sYXN0SW5kZXhPZignICcpKSA8PSBoaWdoKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGFkZExpc3RlbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNldE9mU2xpZGVyID0gbmV3IHNsaWRlcl8xLlNsaWRlcihgc2V0MGZzbGlkZXJgLCB0aGlzLnNldE9mTWluLCB0aGlzLnNldE9mTWF4KTtcclxuICAgICAgICBzZXRPZlNsaWRlci5hbnlTbGlkZXJFdmVudCgpO1xyXG4gICAgICAgIHNldE9mU2xpZGVyLmFueVNsaWRlclVwZGF0ZVJhbmdlKCk7XHJcbiAgICAgICAgY29uc3QgeWVhclNsaWRlciA9IG5ldyBzbGlkZXJfMS5TbGlkZXIoYHllYXJzbGlkZXJgLCB0aGlzLnllYXJTZXRNaW4sIHRoaXMueWVhclNldE1heCk7XHJcbiAgICAgICAgeWVhclNsaWRlci5hbnlTbGlkZXJFdmVudCgpO1xyXG4gICAgICAgIHllYXJTbGlkZXIuYW55U2xpZGVyVXBkYXRlUmFuZ2UoKTtcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRveXMnKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnRfc2V0X3NlbGVjdCcpO1xyXG4gICAgICAgIGNvbnN0IGJlbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlbGwtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGJhbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbGwtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmUtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IHNub3dFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3ctd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGZpZ3VyaW5lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWd1cmluZS13cmFwJyk7XHJcbiAgICAgICAgY29uc3Qgd2hpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2hpdGUnKTtcclxuICAgICAgICBjb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVsbG93Jyk7XHJcbiAgICAgICAgY29uc3QgcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZCcpO1xyXG4gICAgICAgIGNvbnN0IGJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ZScpO1xyXG4gICAgICAgIGNvbnN0IGdyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWVuJyk7XHJcbiAgICAgICAgY29uc3QgbGFyZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFyZ2Utc2V0X19zcXVhcmUnKTtcclxuICAgICAgICBjb25zdCBtaWRkbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkZGxlLXNldF9fc3F1YXJlJyk7XHJcbiAgICAgICAgY29uc3QgbGl0dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpdHRsZS1zZXRfX3NxdWFyZScpO1xyXG4gICAgICAgIGNvbnN0IGZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlLXNxdWFyZScpO1xyXG4gICAgICAgIGNvbnN0IHllYXJTZXRNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhci1zZXQtbWluJyk7XHJcbiAgICAgICAgY29uc3QgeWVhclNldE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyLXNldC1tYXgnKTtcclxuICAgICAgICBjb25zdCBzZXRPZk1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQwZi1zZXQtbWluJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0T2ZNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0MGYtc2V0LW1heCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25OZXdZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb24tbmV3LXllYXInKTtcclxuICAgICAgICBjb25zdCByZXNldEZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtZmlsdGVycycpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0U2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtc2V0dGluZ3MnKTtcclxuICAgICAgICByZXNldEZpbHRlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpIHdvcmsnKTtcclxuICAgICAgICAgICAgc2V0T2ZTbGlkZXIuYW55U2xpZGVyU2V0KFswLCAxMl0pO1xyXG4gICAgICAgICAgICB5ZWFyU2xpZGVyLmFueVNsaWRlclNldChbMTk0MCwgMjAyMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJlbGxTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmVTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNub3dTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpZ3VyaW5lU2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy53aGl0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMueWVsbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYXJnZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxhcmdlLmNoZWNrZWQgPSB0aGlzLmxhcmdlO1xyXG4gICAgICAgICAgICB0aGlzLmxhcmdlU2l6ZUV2ZW50KHRoaXMubGFyZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm1pZGRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1pZGRsZS5jaGVja2VkID0gdGhpcy5taWRkbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlU2l6ZUV2ZW50KHRoaXMubWlkZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5saXR0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsaXR0bGUuY2hlY2tlZCA9IHRoaXMubGl0dGxlO1xyXG4gICAgICAgICAgICB0aGlzLmxpdHRsZVNpemVFdmVudCh0aGlzLmxpdHRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZmF2b3JpdGUuY2hlY2tlZCA9IHRoaXMuZmF2b3JpdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVFdmVudCh0aGlzLmZhdm9yaXRlKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMueWVhclNldE1pbiA9IDE5NDA7XHJcbiAgICAgICAgICAgIHRoaXMueWVhclNldE1heCA9IDIwMjA7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T2ZNaW4gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNldE9mTWF4ID0gMTI7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdGaWx0ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUlucHV0VGV4dCgnbmFtZVRveV9fbmFtZScsICd2YWx1ZS1kaXNwbGF5LW5vbmUnLCB0aGlzLnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ3llYXJUb3lfX3llYXItc3RhdGljJywgdGhpcy55ZWFyU2V0TWluLCB0aGlzLnllYXJTZXRNYXgsICd5ZWFyLWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ2NvdW50VG95X19jb3VudC1zdGF0aWMnLCB0aGlzLnNldE9mTWluLCB0aGlzLnNldE9mTWF4LCAncXVhbnRpdHktZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvblJlY29yZHMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtdXRhdGlvblJlY29yZHMpO1xyXG4gICAgICAgICAgICB0aGlzLnllYXJTZXRNaW4gPSAreWVhclNldE1pbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMueWVhclNldE1heCA9ICt5ZWFyU2V0TWF4LmlubmVyVGV4dDtcclxuICAgICAgICAgICAgdGhpcy5zZXRPZk1pbiA9ICtzZXRPZk1pbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0T2ZNYXggPSArc2V0T2ZNYXguaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ3llYXJUb3lfX3llYXItc3RhdGljJywgdGhpcy55ZWFyU2V0TWluLCB0aGlzLnllYXJTZXRNYXgsICd5ZWFyLWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ2NvdW50VG95X19jb3VudC1zdGF0aWMnLCB0aGlzLnNldE9mTWluLCB0aGlzLnNldE9mTWF4LCAncXVhbnRpdHktZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh5ZWFyU2V0TWluLCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8g0L3QsNCx0LvRjtC00LDRgtGMINC30LAg0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdGL0LzQuCDQtNC10YLRjNC80LhcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHllYXJTZXRNYXgsIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvLyDQvdCw0LHQu9GO0LTQsNGC0Ywg0LfQsCDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90YvQvNC4INC00LXRgtGM0LzQuFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2V0T2ZNaW4sIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvLyDQvdCw0LHQu9GO0LTQsNGC0Ywg0LfQsCDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90YvQvNC4INC00LXRgtGM0LzQuFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2V0T2ZNYXgsIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvLyDQvdCw0LHQu9GO0LTQsNGC0Ywg0LfQsCDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90YvQvNC4INC00LXRgtGM0LzQuFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZmlsdGVyaW5nIHBhcnRcclxuICAgICAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckJ5SW5wdXRUZXh0KCduYW1lVG95X19uYW1lJywgJ3ZhbHVlLWRpc3BsYXktbm9uZScsIHRoaXMudGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmVsbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmVsbFNoYXBlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWxsU2hhcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDQutC+0LvQvtC60L7Qu9GM0YfQuNC6JywgJ2JlbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlbGxTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INC60L7Qu9C+0LrQvtC70YzRh9C40LonLCAnYmVsbFNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGxTaGFwZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbFNoYXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YjQsNGAJywgJ2JhbGxTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGxTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGI0LDRgCcsICdiYWxsU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZVNoYXBlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25lU2hhcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRiNC40YjQutCwJywgJ2NvbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmVTaGFwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGI0LjRiNC60LAnLCAnY29uZVNoYXBlZC1kaXNwbGF5LW5vbmUnLCAnc2hhcGVUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNub3dFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNub3dTaGFwZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vd1NoYXBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YHQvdC10LbQuNC90LrQsCcsICdzbm93U2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93U2hhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQpNC+0YDQvNCwINC40LPRgNGD0YjQutC4OiDRgdC90LXQttC40L3QutCwJywgJ3Nub3dTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmaWd1cmluZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlndXJpbmVTaGFwZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJpbmVTaGFwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlVblZpc2libGUoJ9Ck0L7RgNC80LAg0LjQs9GA0YPRiNC60Lg6INGE0LjQs9GD0YDQutCwJywgJ2ZpZ3VyaW5lU2hhcGVkLWRpc3BsYXktbm9uZScsICdzaGFwZVRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmluZVNoYXBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KTQvtGA0LzQsCDQuNCz0YDRg9GI0LrQuDog0YTQuNCz0YPRgNC60LAnLCAnZmlndXJpbmVTaGFwZWQtZGlzcGxheS1ub25lJywgJ3NoYXBlVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3aGl0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy53aGl0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INCx0LXQu9GL0LknLCAnd2hpdGUtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LHQtdC70YvQuScsICd3aGl0ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHllbGxvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy55ZWxsb3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueWVsbG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LbQtdC70YLRi9C5JywgJ3llbGxvdy1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueWVsbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LbQtdC70YLRi9C5JywgJ3llbGxvdy1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LrRgNCw0YHQvdGL0LknLCAncmVkLWRpc3BsYXktbm9uZScsICdjb2xvclRveScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVZpc2libGUoJ9Cm0LLQtdGCINC40LPRgNGD0YjQutC4OiDQutGA0LDRgdC90YvQuScsICdyZWQtZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBibHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUFueVVuVmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INGB0LjQvdC40LknLCAnYmx1ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VmlzaWJsZSgn0KbQstC10YIg0LjQs9GA0YPRiNC60Lg6INGB0LjQvdC40LknLCAnYmx1ZS1kaXNwbGF5LW5vbmUnLCAnY29sb3JUb3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5QW55VW5WaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LfQtdC70ZHQvdGL0LknLCAnZ3JlZW4tZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyZWVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlBbnlWaXNpYmxlKCfQptCy0LXRgiDQuNCz0YDRg9GI0LrQuDog0LfQtdC70ZHQvdGL0LknLCAnZ3JlZW4tZGlzcGxheS1ub25lJywgJ2NvbG9yVG95Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsYXJnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhcmdlID0gbGFyZ2UuY2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5sYXJnZVNpemVFdmVudCh0aGlzLmxhcmdlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtaWRkbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5taWRkbGUgPSBtaWRkbGUuY2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5taWRkbGVTaXplRXZlbnQodGhpcy5taWRkbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpdHRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpdHRsZSA9IGxpdHRsZS5jaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLmxpdHRsZVNpemVFdmVudCh0aGlzLmxpdHRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IGZhdm9yaXRlLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVFdmVudCh0aGlzLmZhdm9yaXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL3NvcnRpbmcgcGFydFxyXG4gICAgICAgIHNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdBX1onKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRpbmdBX1ooKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IG5ldyBDYXJkc18xLkNhcmRzKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVuZGVyVG95cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2luZ0ZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeUlucHV0VGV4dCgnbmFtZVRveV9fbmFtZScsICd2YWx1ZS1kaXNwbGF5LW5vbmUnLCB0aGlzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCd5ZWFyVG95X195ZWFyLXN0YXRpYycsIHRoaXMueWVhclNldE1pbiwgdGhpcy55ZWFyU2V0TWF4LCAneWVhci1kaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlSYW5nZSgnY291bnRUb3lfX2NvdW50LXN0YXRpYycsIHRoaXMuc2V0T2ZNaW4sIHRoaXMuc2V0T2ZNYXgsICdxdWFudGl0eS1kaXNwbGF5LW5vbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnWl9BJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0aW5nWl9BKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBuZXcgQ2FyZHNfMS5DYXJkcyh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlbmRlclRveXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlJbnB1dFRleHQoJ25hbWVUb3lfX25hbWUnLCAndmFsdWUtZGlzcGxheS1ub25lJywgdGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlSYW5nZSgneWVhclRveV9feWVhci1zdGF0aWMnLCB0aGlzLnllYXJTZXRNaW4sIHRoaXMueWVhclNldE1heCwgJ3llYXItZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ2NvdW50VG95X19jb3VudC1zdGF0aWMnLCB0aGlzLnNldE9mTWluLCB0aGlzLnNldE9mTWF4LCAncXVhbnRpdHktZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2NvdW50VXAnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRpbmdjb3VudFVwKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBuZXcgQ2FyZHNfMS5DYXJkcyh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlbmRlclRveXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tpbmdGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlJbnB1dFRleHQoJ25hbWVUb3lfX25hbWUnLCAndmFsdWUtZGlzcGxheS1ub25lJywgdGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlSYW5nZSgneWVhclRveV9feWVhci1zdGF0aWMnLCB0aGlzLnllYXJTZXRNaW4sIHRoaXMueWVhclNldE1heCwgJ3llYXItZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ2NvdW50VG95X19jb3VudC1zdGF0aWMnLCB0aGlzLnNldE9mTWluLCB0aGlzLnNldE9mTWF4LCAncXVhbnRpdHktZGlzcGxheS1ub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2NvdW50RG93bicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydGluZ2NvdW50RG93bigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gbmV3IENhcmRzXzEuQ2FyZHModGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGFwcC5yZW5kZXJUb3lzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNraW5nRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5SW5wdXRUZXh0KCduYW1lVG95X19uYW1lJywgJ3ZhbHVlLWRpc3BsYXktbm9uZScsIHRoaXMudGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UmFuZ2UoJ3llYXJUb3lfX3llYXItc3RhdGljJywgdGhpcy55ZWFyU2V0TWluLCB0aGlzLnllYXJTZXRNYXgsICd5ZWFyLWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVJhbmdlKCdjb3VudFRveV9fY291bnQtc3RhdGljJywgdGhpcy5zZXRPZk1pbiwgdGhpcy5zZXRPZk1heCwgJ3F1YW50aXR5LWRpc3BsYXktbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Tb3J0aW5nID0gU29ydGluZztcclxuY29uc3Qgc29ydGluZyA9IG5ldyBTb3J0aW5nKGRhdGFfanNfMS5kZWZhdWx0KTtcclxuc29ydGluZy5hZGRMaXN0ZW5lcigpO1xyXG4iLCJjb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIG51bTogJzEnLFxyXG4gICAgbmFtZTogJ9CR0L7Qu9GM0YjQvtC5INGI0LDRgCDRgSDRgNC40YHRg9C90LrQvtC8JyxcclxuICAgIGNvdW50OiAnMicsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMicsXHJcbiAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0Lkg0YjQsNGAINGBINGG0LLQtdGC0LDQvNC4JyxcclxuICAgIGNvdW50OiAnNScsXHJcbiAgICB5ZWFyOiAnMjAwMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C30LXQu9GR0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczJyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDQvNCw0YLQvtCy0YvQuSDRiNCw0YAnLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHllYXI6ICcxOTkwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQnLFxyXG4gICAgbmFtZTogJ9Ch0L7RgdGD0LvRjNC60LAg0LrRgNCw0YHQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICcyJyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNScsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0LLQuNC90L7Qs9GA0LDQtCcsXHJcbiAgICBjb3VudDogJzQnLFxyXG4gICAgeWVhcjogJzE5ODAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzYnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDRgNC40YHRg9C90LrQvtC8JyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc3JyxcclxuICAgIG5hbWU6ICfQnNC+0LvQvtGH0L3Qvi3QsdC10LvRi9C5INGI0LDRgCcsXHJcbiAgICBjb3VudDogJzEyJyxcclxuICAgIHllYXI6ICcxOTYwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc4JyxcclxuICAgIG5hbWU6ICfQmtGA0LDRgdC90YvQuSDRiNCw0YAnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc5JyxcclxuICAgIG5hbWU6ICfQmtC+0LvQvtC60L7Qu9GM0YfQuNC6INGB0YLQsNGA0LjQvdC90YvQuScsXHJcbiAgICBjb3VudDogJzInLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6JyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTAnLFxyXG4gICAgbmFtZTogJ9CR0LXQu9GL0Lkg0YjQsNGAINGA0LXRgtGA0L4nLFxyXG4gICAgY291bnQ6ICc3JyxcclxuICAgIHllYXI6ICcxOTYwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTEnLFxyXG4gICAgbmFtZTogJ9Co0LjRiNC60LAg0LXQu9C+0LLQsNGPINCx0LXQu9Cw0Y8nLFxyXG4gICAgY291bnQ6ICcxMScsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzEyJyxcclxuICAgIG5hbWU6ICfQkdC10LvRi9C5INGI0LDRgCDRgSDRhtCy0LXRgtCw0LzQuCcsXHJcbiAgICBjb3VudDogJzUnLFxyXG4gICAgeWVhcjogJzE5ODAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxMycsXHJcbiAgICBuYW1lOiAn0KjQsNGAINGA0LDRgdC/0LjRgdC90L7QuSDQoNC10LrQsCcsXHJcbiAgICBjb3VudDogJzMnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE0JyxcclxuICAgIG5hbWU6ICfQqNCw0YAg0YDQsNGB0L/QuNGB0L3QvtC5INCU0LXRgNC10LLQvdGPJyxcclxuICAgIGNvdW50OiAnNCcsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMTUnLFxyXG4gICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0YDQsNGB0L/QuNGB0L3QvtC5JyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9C60L7Qu9C+0LrQvtC70YzRh9C40LonLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcxNicsXHJcbiAgICBuYW1lOiAn0KjQuNGI0LrQsCDRgNCw0YHQv9C40YHQvdCw0Y8g0J/QtdC50LfQsNC2JyxcclxuICAgIGNvdW50OiAnMycsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE3JyxcclxuICAgIG5hbWU6ICfQqNC40YjQutCwINGA0LDRgdC/0LjRgdC90LDRjycsXHJcbiAgICBjb3VudDogJzcnLFxyXG4gICAgeWVhcjogJzE5NzAnLFxyXG4gICAgc2hhcGU6ICfRiNC40YjQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE4JyxcclxuICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINCx0LDQvdGC0L7QvCcsXHJcbiAgICBjb3VudDogJzInLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzE5JyxcclxuICAgIG5hbWU6ICfQltC10LvRgtGL0Lkg0YjQsNGAINGBINC/0LDQtdGC0LrQsNC80LgnLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjAnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQsdCw0L3RgtC+0LwnLFxyXG4gICAgY291bnQ6ICc4JyxcclxuICAgIHllYXI6ICcxOTUwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjEnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDQt9Cy0ZHQt9C00LDQvNC4JyxcclxuICAgIGNvdW50OiAnNCcsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzIyJyxcclxuICAgIG5hbWU6ICfQqNC40YjQutCwINC10LvQvtCy0LDRjyDQt9C+0LvQvtGC0LDRjycsXHJcbiAgICBjb3VudDogJzExJyxcclxuICAgIHllYXI6ICcxOTkwJyxcclxuICAgIHNoYXBlOiAn0YjQuNGI0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyMycsXHJcbiAgICBuYW1lOiAn0JrQvtC70L7QutC+0LvRjNGH0LjQuiDRgdGC0LDRgNC40L3QvdGL0LknLFxyXG4gICAgY291bnQ6ICc5JyxcclxuICAgIHllYXI6ICcxOTUwJyxcclxuICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjQnLFxyXG4gICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0LjQt9GP0YnQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICcxJyxcclxuICAgIHllYXI6ICcxOTQwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI1JyxcclxuICAgIG5hbWU6ICfQoNC+0LfQvtCy0YvQuSDRiNCw0YAg0YEg0LHQu9GR0YHRgtC60LDQvNC4JyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjYnLFxyXG4gICAgbmFtZTogJ9Cg0YPQsdC40L3QvtCy0L4t0LfQvtC70L7RgtC+0Lkg0YjQsNGAJyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMjcnLFxyXG4gICAgbmFtZTogJ9Ca0YDQsNGB0L3Ri9C5INGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgY291bnQ6ICc0JyxcclxuICAgIHllYXI6ICcyMDEwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzI4JyxcclxuICAgIG5hbWU6ICfQkdC+0YDQtNC+0LLRi9C5INGI0LDRgCDRgSDRg9C30L7RgNC+0LwnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICcyOScsXHJcbiAgICBuYW1lOiAn0KHRgtCw0YDQuNC90L3Ri9C5INGI0LDRgCDRgSDRhtCy0LXRgtCw0LzQuCcsXHJcbiAgICBjb3VudDogJzUnLFxyXG4gICAgeWVhcjogJzE5NTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzAnLFxyXG4gICAgbmFtZTogJ9Ch0YLQsNGA0LjQvdC90YvQuSDRiNCw0YAg0YEg0YPQt9C+0YDQvtC8JyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczMScsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINCx0LvRkdGB0YLQutCw0LzQuCcsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzInLFxyXG4gICAgbmFtZTogJ9Ch0LjQvdC40Lkg0YjQsNGAINCS0YHQtdC70LXQvdC90LDRjycsXHJcbiAgICBjb3VudDogJzExJyxcclxuICAgIHllYXI6ICcxOTcwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0YHQuNC90LjQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzMnLFxyXG4gICAgbmFtZTogJ9Ch0LjQvdC40Lkg0YjQsNGAINGB0L4g0YHQvdC10LbQuNC90LrQvtC5JyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMjAxMCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9GB0LjQvdC40LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM0JyxcclxuICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSAg0YjQsNGAINGBINGD0LfQvtGA0L7QvCcsXHJcbiAgICBjb3VudDogJzgnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnMzUnLFxyXG4gICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCb0LjRgSDQsiDRiNCw0YDRhNC1JyxcclxuICAgIGNvdW50OiAnOCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM2JyxcclxuICAgIG5hbWU6ICfQodC40YDQtdC90LXQstGL0Lkg0YjQsNGAINCc0LXRgtC10LvRjCcsXHJcbiAgICBjb3VudDogJzEnLFxyXG4gICAgeWVhcjogJzIwMDAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczNycsXHJcbiAgICBuYW1lOiAn0JfQtdC70ZHQvdGL0LkgINGI0LDRgCDQnNC10YLQtdC70YwnLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcyMDAwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzM4JyxcclxuICAgIG5hbWU6ICfQk9C+0LvRg9Cx0L7QuSAg0YjQsNGAINCc0LXRgtC10LvRjCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzIwMDAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfRgdC40L3QuNC5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICczOScsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdCw0Y8g0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzE5OTAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQwJyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC30L7Qu9C+0YLQsNGPJyxcclxuICAgIGNvdW50OiAnMTInLFxyXG4gICAgeWVhcjogJzIwMjAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0MScsXHJcbiAgICBuYW1lOiAn0KHQvdC10LbQuNC90LrQsCDQsNGA0LrRgtC40YfQtdGB0LrQsNGPJyxcclxuICAgIGNvdW50OiAnMTEnLFxyXG4gICAgeWVhcjogJzIwMjAnLFxyXG4gICAgc2hhcGU6ICfRgdC90LXQttC40L3QutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDInLFxyXG4gICAgbmFtZTogJ9CX0LXQu9GR0L3Ri9C5INGI0LDRgCcsXHJcbiAgICBjb3VudDogJzEwJyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YjQsNGAJyxcclxuICAgIGNvbG9yOiAn0LfQtdC70ZHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQzJyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC00LLRg9GF0YbQstC10YLQvdCw0Y8nLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcxOTYwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0NCcsXHJcbiAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JDQvdCz0LXQu9CwJyxcclxuICAgIGNvdW50OiAnMTEnLFxyXG4gICAgeWVhcjogJzE5NDAnLFxyXG4gICAgc2hhcGU6ICfRhNC40LPRg9GA0LrQsCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzQ1JyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINC90L7QstC+0LPQvtC00L3Rj9GPJyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk4MCcsXHJcbiAgICBzaGFwZTogJ9GB0L3QtdC20LjQvdC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc0NicsXHJcbiAgICBuYW1lOiAn0KTQuNCz0YPRgNC60LAg0JzRg9GF0L7QvNC+0YAnLFxyXG4gICAgY291bnQ6ICcxMCcsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDcnLFxyXG4gICAgbmFtZTogJ9Ck0LjQs9GD0YDQutCwINCa0L7Qu9C+0LTQtdGGJyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMTk1MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LrRgNCw0YHQvdGL0LknLFxyXG4gICAgc2l6ZTogJ9C80LDQu9GL0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDgnLFxyXG4gICAgbmFtZTogJ9CW0LXQu9GC0YvQuSDRiNCw0YAg0YEg0LHQsNC90YLQvtC8JyxcclxuICAgIGNvdW50OiAnNicsXHJcbiAgICB5ZWFyOiAnMTk2MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNDknLFxyXG4gICAgbmFtZTogJ9Ch0L3QtdC20LjQvdC60LAg0YEg0LHQuNGA0Y7Qt9C+0LknLFxyXG4gICAgY291bnQ6ICc0JyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9C20LXQu9GC0YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTAnLFxyXG4gICAgbmFtZTogJ9Ca0L7Qu9C+0LrQvtC70YzRh9C40Log0LHQvtC70YzRiNC+0LknLFxyXG4gICAgY291bnQ6ICczJyxcclxuICAgIHllYXI6ICcyMDIwJyxcclxuICAgIHNoYXBlOiAn0LrQvtC70L7QutC+0LvRjNGH0LjQuicsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1MScsXHJcbiAgICBuYW1lOiAn0KjQuNGI0LrQsCDRgSDQuNC30LzQvtGA0L7Qt9GM0Y4nLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk3MCcsXHJcbiAgICBzaGFwZTogJ9GI0LjRiNC60LAnLFxyXG4gICAgY29sb3I6ICfQutGA0LDRgdC90YvQuScsXHJcbiAgICBzaXplOiAn0LzQsNC70YvQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1MicsXHJcbiAgICBuYW1lOiAn0JrRgNCw0YHQvdGL0Lkg0YjQsNGAINGBINC90LDQtNC/0LjRgdGM0Y4nLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk5MCcsXHJcbiAgICBzaGFwZTogJ9GI0LDRgCcsXHJcbiAgICBjb2xvcjogJ9C60YDQsNGB0L3Ri9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzUzJyxcclxuICAgIG5hbWU6ICfQodC90LXQttC40L3QutCwINGB0LXRgNC10LHRgNC40YHRgtCw0Y8nLFxyXG4gICAgY291bnQ6ICc2JyxcclxuICAgIHllYXI6ICcyMDIwJyxcclxuICAgIHNoYXBlOiAn0YHQvdC10LbQuNC90LrQsCcsXHJcbiAgICBjb2xvcjogJ9Cx0LXQu9GL0LknLFxyXG4gICAgc2l6ZTogJ9Cx0L7Qu9GM0YjQvtC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU0JyxcclxuICAgIG5hbWU6ICfQl9C10LvRkdC90YvQuSDRiNCw0YAg0YEg0YDQuNGB0YPQvdC60L7QvCcsXHJcbiAgICBjb3VudDogJzYnLFxyXG4gICAgeWVhcjogJzIwMTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQt9C10LvRkdC90YvQuScsXHJcbiAgICBzaXplOiAn0LHQvtC70YzRiNC+0LknLFxyXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtOiAnNTUnLFxyXG4gICAgbmFtZTogJ9Cf0YDRj9C90LjRh9C90YvQuSDQtNC+0LzQuNC6JyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQsdC+0LvRjNGI0L7QuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1NicsXHJcbiAgICBuYW1lOiAn0J/RgNGP0L3QuNGH0L3Ri9C5INGC0LXRgNC10LzQvtC6JyxcclxuICAgIGNvdW50OiAnMScsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LbQtdC70YLRi9C5JyxcclxuICAgIHNpemU6ICfQvNCw0LvRi9C5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU3JyxcclxuICAgIG5hbWU6ICfQn9GA0Y/QvdC40YfQvdCw0Y8g0LjQt9Cx0YPRiNC60LAnLFxyXG4gICAgY291bnQ6ICcxJyxcclxuICAgIHllYXI6ICcxOTQwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzU4JyxcclxuICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQsdC10LvQvtCz0L4g0LzQtdC00LLQtdC00Y8nLFxyXG4gICAgY291bnQ6ICcyJyxcclxuICAgIHllYXI6ICcxOTgwJyxcclxuICAgIHNoYXBlOiAn0YTQuNCz0YPRgNC60LAnLFxyXG4gICAgY29sb3I6ICfQsdC10LvRi9C5JyxcclxuICAgIHNpemU6ICfRgdGA0LXQtNC90LjQuScsXHJcbiAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW06ICc1OScsXHJcbiAgICBuYW1lOiAn0JbQtdC70YLRi9C5INGI0LDRgCDRgSDQvdCw0LTQv9C40YHRjNGOJyxcclxuICAgIGNvdW50OiAnMTAnLFxyXG4gICAgeWVhcjogJzE5OTAnLFxyXG4gICAgc2hhcGU6ICfRiNCw0YAnLFxyXG4gICAgY29sb3I6ICfQttC10LvRgtGL0LknLFxyXG4gICAgc2l6ZTogJ9GB0YDQtdC00L3QuNC5JyxcclxuICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG51bTogJzYwJyxcclxuICAgIG5hbWU6ICfQpNC40LPRg9GA0LrQsCDQk9C+0LvRg9Cx0YwnLFxyXG4gICAgY291bnQ6ICcxMicsXHJcbiAgICB5ZWFyOiAnMTk0MCcsXHJcbiAgICBzaGFwZTogJ9GE0LjQs9GD0YDQutCwJyxcclxuICAgIGNvbG9yOiAn0LHQtdC70YvQuScsXHJcbiAgICBzaXplOiAn0YHRgNC10LTQvdC40LknLFxyXG4gICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDg3NCk7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oODIzKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==