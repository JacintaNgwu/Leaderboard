/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  color: #1c1c1c;\n  display: grid;\n  padding: 32px;\n  background: rgb(230, 158, 230);\n}\n\nbutton {\n  width: 120px;\n  height: 40px;\n  padding: 10px;\n  font-weight: 700;\n  border: 2px solid #1c1c1c;\n  cursor: pointer;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 500px 500px;\n  width: auto;\n  margin-top: 30px;\n}\n\n.refresh {\n  display: flex;\n  justify-content: space-between;\n  font-size: 25px;\n}\n\n#refresh {\n  box-shadow: 3px 2px;\n}\n\n#display-scores {\n  display: grid;\n  gap: 30px;\n  padding: 20px;\n  margin-left: 10%;\n}\n\n.player-list {\n  height: 500px; \n  overflow: auto;\n}\n\n.score-list {\n  display: flex;\n  flex-direction: column;\n  border: 5px solid #1c1c1c;\n  border-radius: 5px;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px;\n}\n\nspan {\n  font-weight: bold;\n}\n\n.score-list li:nth-child(odd) {\n  background: rgb(175, 100, 26);\n}\n\n.score-list li:nth-child(even) {\n  background: rgb(209, 198, 198);\n}\n\n#add-scores {\n  position: relative;\n  padding: 20px;\n  gap: 50px;\n  font-size: 20px;\n}\n\nform {\n  display: grid;\n  gap: 20px;\n  margin-top: 50px;\n}\n\ninput {\n  font-family: inherit;\n  font-size: inherit;\n  width: 430px;\n  padding: 5px;\n  color: #1c1c1c;\n  border: 3px solid #1c1c1c;\n  border-radius: 5px;\n}\n\n#right {\n  box-shadow: 3px 2px;\n  margin-left: 66%;\n}\n\n.bouncing-text {\n  position: relative;\n  display: flex;\n  font-size: 70px;\n  font-weight: bolder;\n  margin: 10px 20px 30px 40px;\n}\n\n.l,\n.d,\n.o {\n  color: brown;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.e,\n.b {\n  color: green;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.a,\n.r {\n  color: olive;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n\n  30% {\n    transform: scale(0.9, 1.1) translateY(-55px);\n  }\n\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n\n  58% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.l {\n  animation: bounce 1s ease infinite;\n}\n\n.e {\n  animation: bounce 1s ease infinite 0.1s;\n}\n\n.a {\n  animation: bounce 1s ease infinite 0.2s;\n}\n\n.d {\n  animation: bounce 1s ease infinite 0.3s;\n}\n\n.r {\n  animation: bounce 1s ease infinite 0.4s;\n}\n\n.b {\n  animation: bounce 1s ease infinite 0.5s;\n}\n\n.o {\n  animation: bounce 1s ease infinite 0.6s;\n}\n\n.bouncing-text::before,\n.bouncing-text::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow,\n.shadow-two {\n  position: absolute;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow::before,\n.shadow::after,\n.shadow-two::before,\n.shadow-two::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 80px;\n  height: 5px;\n  border-radius: 50%;\n  top: 0;\n}\n\n.bouncing-text::before {\n  left: 10px;\n  animation: scale 1s linear infinite;\n}\n\n@keyframes scale {\n  0% { transform: scaleX(1); }\n  25% { transform: scaleX(0.4); }\n  50% { transform: scaleX(1); }\n  75% { transform: scaleX(0.9); }\n  100% { transform: scaleX(1); }\n}\n\n.bouncing-text::after {\n  left: 80px;\n  animation: scale 1s linear infinite 0.1s;\n}\n\n.shadow::before {\n  left: 150px;\n  animation: scale 1s linear infinite 0.2s;\n}\n\n.shadow::after {\n  left: 250px;\n  animation: scale 1s linear infinite 0.3s;\n}\n\n.shadow-two::before {\n  left: 350px;\n  animation: scale 1s linear infinite 0.4s;\n}\n\n.shadow-two::after {\n  left: 450px;\n  animation: scale 1s linear infinite 0.5s;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;;;EAGE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;;EAEE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;;EAEE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;EACE;IACE,oCAAoC;EACtC;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,4CAA4C;EAC9C;;EAEA;IACE,0CAA0C;EAC5C;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,oCAAoC;EACtC;AACF;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,KAAK,oBAAoB,EAAE;EAC3B,MAAM,sBAAsB,EAAE;EAC9B,MAAM,oBAAoB,EAAE;EAC5B,MAAM,sBAAsB,EAAE;EAC9B,OAAO,oBAAoB,EAAE;AAC/B;;AAEA;EACE,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\n*,\n*::after,\n*::before {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  color: #1c1c1c;\n  display: grid;\n  padding: 32px;\n  background: rgb(230, 158, 230);\n}\n\nbutton {\n  width: 120px;\n  height: 40px;\n  padding: 10px;\n  font-weight: 700;\n  border: 2px solid #1c1c1c;\n  cursor: pointer;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 500px 500px;\n  width: auto;\n  margin-top: 30px;\n}\n\n.refresh {\n  display: flex;\n  justify-content: space-between;\n  font-size: 25px;\n}\n\n#refresh {\n  box-shadow: 3px 2px;\n}\n\n#display-scores {\n  display: grid;\n  gap: 30px;\n  padding: 20px;\n  margin-left: 10%;\n}\n\n.player-list {\n  height: 500px; \n  overflow: auto;\n}\n\n.score-list {\n  display: flex;\n  flex-direction: column;\n  border: 5px solid #1c1c1c;\n  border-radius: 5px;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px;\n}\n\nspan {\n  font-weight: bold;\n}\n\n.score-list li:nth-child(odd) {\n  background: rgb(175, 100, 26);\n}\n\n.score-list li:nth-child(even) {\n  background: rgb(209, 198, 198);\n}\n\n#add-scores {\n  position: relative;\n  padding: 20px;\n  gap: 50px;\n  font-size: 20px;\n}\n\nform {\n  display: grid;\n  gap: 20px;\n  margin-top: 50px;\n}\n\ninput {\n  font-family: inherit;\n  font-size: inherit;\n  width: 430px;\n  padding: 5px;\n  color: #1c1c1c;\n  border: 3px solid #1c1c1c;\n  border-radius: 5px;\n}\n\n#right {\n  box-shadow: 3px 2px;\n  margin-left: 66%;\n}\n\n.bouncing-text {\n  position: relative;\n  display: flex;\n  font-size: 70px;\n  font-weight: bolder;\n  margin: 10px 20px 30px 40px;\n}\n\n.l,\n.d,\n.o {\n  color: brown;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.e,\n.b {\n  color: green;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.a,\n.r {\n  color: olive;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n\n  30% {\n    transform: scale(0.9, 1.1) translateY(-55px);\n  }\n\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n\n  58% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.l {\n  animation: bounce 1s ease infinite;\n}\n\n.e {\n  animation: bounce 1s ease infinite 0.1s;\n}\n\n.a {\n  animation: bounce 1s ease infinite 0.2s;\n}\n\n.d {\n  animation: bounce 1s ease infinite 0.3s;\n}\n\n.r {\n  animation: bounce 1s ease infinite 0.4s;\n}\n\n.b {\n  animation: bounce 1s ease infinite 0.5s;\n}\n\n.o {\n  animation: bounce 1s ease infinite 0.6s;\n}\n\n.bouncing-text::before,\n.bouncing-text::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow,\n.shadow-two {\n  position: absolute;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow::before,\n.shadow::after,\n.shadow-two::before,\n.shadow-two::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 80px;\n  height: 5px;\n  border-radius: 50%;\n  top: 0;\n}\n\n.bouncing-text::before {\n  left: 10px;\n  animation: scale 1s linear infinite;\n}\n\n@keyframes scale {\n  0% { transform: scaleX(1); }\n  25% { transform: scaleX(0.4); }\n  50% { transform: scaleX(1); }\n  75% { transform: scaleX(0.9); }\n  100% { transform: scaleX(1); }\n}\n\n.bouncing-text::after {\n  left: 80px;\n  animation: scale 1s linear infinite 0.1s;\n}\n\n.shadow::before {\n  left: 150px;\n  animation: scale 1s linear infinite 0.2s;\n}\n\n.shadow::after {\n  left: 250px;\n  animation: scale 1s linear infinite 0.3s;\n}\n\n.shadow-two::before {\n  left: 350px;\n  animation: scale 1s linear infinite 0.4s;\n}\n\n.shadow-two::after {\n  left: 450px;\n  animation: scale 1s linear infinite 0.5s;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_scores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_scores.js */ "./src/modules/get_scores.js");


const form = () => {
  const userName = document.querySelector('.name');
  const userScore = document.querySelector('.score');

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userName.value;
    const score = userScore.value;
    const newPlayer = new _get_scores_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, score);
    newPlayer.addScores(newPlayer);
    userName.value = '';
    userScore.value = '';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/get_scores.js":
/*!***********************************!*\
  !*** ./src/modules/get_scores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

//   create new player
addScores = async (playerObject) => {
  const endPoint = 'games/4SOOJo8RgF1RNSGwY1XP/scores/';
  const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
  const game = await fetch(baseURL, {
    method: 'post',
    body: JSON.stringify(playerObject),
    headers: {
      'content-Type': 'application/json',
    },
  });
  await game.json();
}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((module) => {

const ScoreBoard = async () => {
  const endPoint = 'games/4SOOJo8RgF1RNSGwY1XP/scores/';
  const baseURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${endPoint}`;
  const game = await fetch(baseURL);
  const res = await game.json();
  const scoreList = res.result;

  //   generating score-list dynamically
  const listContainer = document.querySelector('.score-list');
  listContainer.innerHTML += scoreList.map((scores) => `<li>${scores.user}: ${scores.score}</li>`).join('');
};
module.exports = ScoreBoard;

/***/ }),

/***/ "./src/modules/refresh.js":
/*!********************************!*\
  !*** ./src/modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-restricted-globals */

// getting scores after refreshing
const refreshBtn = () => {
  const refresh = document.querySelector('#refresh');
  refresh.addEventListener('click', () => {
    location.reload();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshBtn);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loader.js */ "./src/modules/loader.js");
/* harmony import */ var _modules_loader_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_loader_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add.js */ "./src/modules/add.js");
/* harmony import */ var _modules_refresh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/refresh.js */ "./src/modules/refresh.js");





_modules_loader_js__WEBPACK_IMPORTED_MODULE_1___default()();
(0,_modules_add_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsU0FBUztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7O0FDcEJyQjtBQUNBO0FBQ0Esb0ZBQW9GLFNBQVM7QUFDN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWSxJQUFJLGFBQWE7QUFDM0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7OztVQ1R6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDaUI7QUFDVDtBQUNVOztBQUU5Qyx5REFBVTtBQUNWLDJEQUFJO0FBQ0osK0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvYWRkLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvZ2V0X3Njb3Jlcy5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2xvYWRlci5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxYzFjMWM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzAsIDE1OCwgMjMwKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFjMWMxYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MDBweCA1MDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnJlZnJlc2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgYm94LXNoYWRvdzogM3B4IDJweDtcXG59XFxuXFxuI2Rpc3BsYXktc2NvcmVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLnBsYXllci1saXN0IHtcXG4gIGhlaWdodDogNTAwcHg7IFxcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zY29yZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzFjMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zY29yZS1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNzUsIDEwMCwgMjYpO1xcbn1cXG5cXG4uc2NvcmUtbGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwOSwgMTk4LCAxOTgpO1xcbn1cXG5cXG4jYWRkLXNjb3JlcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHdpZHRoOiA0MzBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzFjMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gIGJveC1zaGFkb3c6IDNweCAycHg7XFxuICBtYXJnaW4tbGVmdDogNjYlO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbjogMTBweCAyMHB4IDMwcHggNDBweDtcXG59XFxuXFxuLmwsXFxuLmQsXFxuLm8ge1xcbiAgY29sb3I6IGJyb3duO1xcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IGdyZXksIDAgNXB4IGdyZXksIDAgN3B4IGdyZXk7XFxufVxcblxcbi5lLFxcbi5iIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcbn1cXG5cXG4uYSxcXG4uciB7XFxuICBjb2xvcjogb2xpdmU7XFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMC45KSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEuMSkgdHJhbnNsYXRlWSgtNTVweCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICA1OCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTdweCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4ubCB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uZSB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMXM7XFxufVxcblxcbi5hIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4ycztcXG59XFxuXFxuLmQge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjNzO1xcbn1cXG5cXG4uciB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNHM7XFxufVxcblxcbi5iIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC41cztcXG59XFxuXFxuLm8ge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjZzO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YmVmb3JlLFxcbi5ib3VuY2luZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0b3A6IDgycHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoYWRvdyxcXG4uc2hhZG93LXR3byB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgycHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoYWRvdzo6YmVmb3JlLFxcbi5zaGFkb3c6OmFmdGVyLFxcbi5zaGFkb3ctdHdvOjpiZWZvcmUsXFxuLnNoYWRvdy10d286OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGUge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbiAgMjUlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTsgfVxcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXG4gIDc1JSB7IHRyYW5zZm9ybTogc2NhbGVYKDAuOSk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcbiAgbGVmdDogODBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxufVxcblxcbi5zaGFkb3c6OmJlZm9yZSB7XFxuICBsZWZ0OiAxNTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxufVxcblxcbi5zaGFkb3c6OmFmdGVyIHtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXG59XFxuXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxuICBsZWZ0OiAzNTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxufVxcblxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxuICBsZWZ0OiA0NTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7OztFQUdFLFlBQVk7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLCtDQUErQztBQUNqRDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtBQUNSOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLEtBQUssb0JBQW9CLEVBQUU7RUFDM0IsTUFBTSxzQkFBc0IsRUFBRTtFQUM5QixNQUFNLG9CQUFvQixFQUFFO0VBQzVCLE1BQU0sc0JBQXNCLEVBQUU7RUFDOUIsT0FBTyxvQkFBb0IsRUFBRTtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzFjMWMxYztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDIzMCwgMTU4LCAyMzApO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMWMxYzFjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwMHB4IDUwMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4ucmVmcmVzaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4jcmVmcmVzaCB7XFxuICBib3gtc2hhZG93OiAzcHggMnB4O1xcbn1cXG5cXG4jZGlzcGxheS1zY29yZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4ucGxheWVyLWxpc3Qge1xcbiAgaGVpZ2h0OiA1MDBweDsgXFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnNjb3JlLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMWMxYzFjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNjb3JlLWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZDogcmdiKDE3NSwgMTAwLCAyNik7XFxufVxcblxcbi5zY29yZS1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA5LCAxOTgsIDE5OCk7XFxufVxcblxcbiNhZGQtc2NvcmVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgd2lkdGg6IDQzMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6ICMxYzFjMWM7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMWMxYzFjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgYm94LXNoYWRvdzogM3B4IDJweDtcXG4gIG1hcmdpbi1sZWZ0OiA2NiU7XFxufVxcblxcbi5ib3VuY2luZy10ZXh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbWFyZ2luOiAxMHB4IDIwcHggMzBweCA0MHB4O1xcbn1cXG5cXG4ubCxcXG4uZCxcXG4ubyB7XFxuICBjb2xvcjogYnJvd247XFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXG59XFxuXFxuLmUsXFxuLmIge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IGdyZXksIDAgNXB4IGdyZXksIDAgN3B4IGdyZXk7XFxufVxcblxcbi5hLFxcbi5yIHtcXG4gIGNvbG9yOiBvbGl2ZTtcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAwLjkpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMS4xKSB0cmFuc2xhdGVZKC01NXB4KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG5cXG4gIDU4JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgtN3B4KTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcbi5sIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbi5lIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4xcztcXG59XFxuXFxuLmEge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjJzO1xcbn1cXG5cXG4uZCB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuM3M7XFxufVxcblxcbi5yIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC40cztcXG59XFxuXFxuLmIge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjVzO1xcbn1cXG5cXG4ubyB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNnM7XFxufVxcblxcbi5ib3VuY2luZy10ZXh0OjpiZWZvcmUsXFxuLmJvdW5jaW5nLXRleHQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogODJweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uc2hhZG93LFxcbi5zaGFkb3ctdHdvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODJweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uc2hhZG93OjpiZWZvcmUsXFxuLnNoYWRvdzo6YWZ0ZXIsXFxuLnNoYWRvdy10d286OmJlZm9yZSxcXG4uc2hhZG93LXR3bzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YmVmb3JlIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZSB7XFxuICAwJSB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XFxuICAyNSUgeyB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpOyB9XFxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbiAgNzUlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMC45KTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XFxufVxcblxcbi5ib3VuY2luZy10ZXh0OjphZnRlciB7XFxuICBsZWZ0OiA4MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4xcztcXG59XFxuXFxuLnNoYWRvdzo6YmVmb3JlIHtcXG4gIGxlZnQ6IDE1MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4ycztcXG59XFxuXFxuLnNoYWRvdzo6YWZ0ZXIge1xcbiAgbGVmdDogMjUwcHg7XFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjNzO1xcbn1cXG5cXG4uc2hhZG93LXR3bzo6YmVmb3JlIHtcXG4gIGxlZnQ6IDM1MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC40cztcXG59XFxuXFxuLnNoYWRvdy10d286OmFmdGVyIHtcXG4gIGxlZnQ6IDQ1MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC41cztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2dldF9zY29yZXMuanMnO1xuXG5jb25zdCBmb3JtID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gIGNvbnN0IHVzZXJTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZScpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VyTmFtZS52YWx1ZTtcbiAgICBjb25zdCBzY29yZSA9IHVzZXJTY29yZS52YWx1ZTtcbiAgICBjb25zdCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUsIHNjb3JlKTtcbiAgICBuZXdQbGF5ZXIuYWRkU2NvcmVzKG5ld1BsYXllcik7XG4gICAgdXNlck5hbWUudmFsdWUgPSAnJztcbiAgICB1c2VyU2NvcmUudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybTsiLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCBzY29yZSkge1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICB9XG5cbi8vICAgY3JlYXRlIG5ldyBwbGF5ZXJcbmFkZFNjb3JlcyA9IGFzeW5jIChwbGF5ZXJPYmplY3QpID0+IHtcbiAgY29uc3QgZW5kUG9pbnQgPSAnZ2FtZXMvNFNPT0pvOFJnRjFSTlNHd1kxWFAvc2NvcmVzLyc7XG4gIGNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJHtlbmRQb2ludH1gO1xuICBjb25zdCBnYW1lID0gYXdhaXQgZmV0Y2goYmFzZVVSTCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBsYXllck9iamVjdCksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgYXdhaXQgZ2FtZS5qc29uKCk7XG59XG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2NvcmVCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZW5kUG9pbnQgPSAnZ2FtZXMvNFNPT0pvOFJnRjFSTlNHd1kxWFAvc2NvcmVzLyc7XG4gIGNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJHtlbmRQb2ludH1gO1xuICBjb25zdCBnYW1lID0gYXdhaXQgZmV0Y2goYmFzZVVSTCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdhbWUuanNvbigpO1xuICBjb25zdCBzY29yZUxpc3QgPSByZXMucmVzdWx0O1xuXG4gIC8vICAgZ2VuZXJhdGluZyBzY29yZS1saXN0IGR5bmFtaWNhbGx5XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtbGlzdCcpO1xuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBzY29yZUxpc3QubWFwKChzY29yZXMpID0+IGA8bGk+JHtzY29yZXMudXNlcn06ICR7c2NvcmVzLnNjb3JlfTwvbGk+YCkuam9pbignJyk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBTY29yZUJvYXJkOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG4vLyBnZXR0aW5nIHNjb3JlcyBhZnRlciByZWZyZXNoaW5nXG5jb25zdCByZWZyZXNoQnRuID0gKCkgPT4ge1xuICBjb25zdCByZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gnKTtcbiAgcmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVmcmVzaEJ0bjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2NvcmVCb2FyZCBmcm9tICcuL21vZHVsZXMvbG9hZGVyLmpzJztcbmltcG9ydCBmb3JtIGZyb20gJy4vbW9kdWxlcy9hZGQuanMnO1xuaW1wb3J0IHJlZnJlc2hCdG4gZnJvbSAnLi9tb2R1bGVzL3JlZnJlc2guanMnO1xuXG5TY29yZUJvYXJkKCk7XG5mb3JtKCk7XG5yZWZyZXNoQnRuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=