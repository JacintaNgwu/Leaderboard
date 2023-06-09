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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  color: #1c1c1c;\n  display: grid;\n  padding: 32px;\n  background: rgb(230, 158, 230);\n}\n\nbutton {\n  width: 120px;\n  height: 40px;\n  padding: 10px;\n  font-weight: 700;\n  border: 2px solid #1c1c1c;\n  cursor: pointer;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 500px 500px;\n  width: auto;\n  margin-top: 30px;\n}\n\n.refresh {\n  display: flex;\n  justify-content: space-between;\n  font-size: 25px;\n}\n\n#refresh {\n  box-shadow: 3px 2px;\n}\n\n#display-scores {\n  display: grid;\n  gap: 30px;\n  padding: 20px;\n  margin-left: 10%;\n}\n\n.player-list {\n  height: 500px; \n  overflow: auto;\n}\n\n.score-list {\n  display: flex;\n  flex-direction: column;\n  border: 5px solid #1c1c1c;\n  border-radius: 5px;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px;\n}\n\nspan {\n  font-weight: bold;\n}\n\n.score-list li:nth-child(odd) {\n  background: rgb(175, 100, 26);\n}\n\n.score-list li:nth-child(even) {\n  background: rgb(209, 198, 198);\n}\n\n#add-scores {\n  position: relative;\n  padding: 20px;\n  gap: 50px;\n  left: 20%;\n  font-size: 20px;\n}\n\nform {\n  display: grid;\n  gap: 20px;\n  margin-top: 50px;\n}\n\ninput {\n  font-family: inherit;\n  font-size: inherit;\n  width: 430px;\n  padding: 5px;\n  color: #1c1c1c;\n  border: 3px solid #1c1c1c;\n  border-radius: 5px;\n}\n\n#right {\n  box-shadow: 3px 2px;\n  margin-left: 66%;\n}\n\n.bouncing-text {\n  position: relative;\n  display: flex;\n  font-size: 70px;\n  font-weight: bolder;\n  margin: 10px, 20px, 30px, 40px;\n}\n\n.l,\n.d,\n.o {\n  color: brown;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.e,\n.b {\n  color: green;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.a,\n.r {\n  color: olive;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n\n  30% {\n    transform: scale(0.9, 1.1) translateY(-55px);\n  }\n\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n\n  58% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.l {\n  animation: bounce 1s ease infinite;\n}\n\n.e {\n  animation: bounce 1s ease infinite 0.1s;\n}\n\n.a {\n  animation: bounce 1s ease infinite 0.2s;\n}\n\n.d {\n  animation: bounce 1s ease infinite 0.3s;\n}\n\n.r {\n  animation: bounce 1s ease infinite 0.4s;\n}\n\n.b {\n  animation: bounce 1s ease infinite 0.5s;\n}\n\n.o {\n  animation: bounce 1s ease infinite 0.6s;\n}\n\n.bouncing-text::before,\n.bouncing-text::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow,\n.shadow-two {\n  position: absolute;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow::before,\n.shadow::after,\n.shadow-two::before,\n.shadow-two::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 80px;\n  height: 5px;\n  border-radius: 50%;\n  top: 0;\n}\n\n.bouncing-text::before {\n  left: 10px;\n  animation: scale 1s linear infinite;\n}\n\n@keyframes scale {\n  0% { transform: scaleX(1); }\n  25% { transform: scaleX(0.4); }\n  50% { transform: scaleX(1); }\n  75% { transform: scaleX(0.9); }\n  100% { transform: scaleX(1); }\n}\n\n.bouncing-text::after {\n  left: 80px;\n  animation: scale 1s linear infinite 0.1s;\n}\n\n.shadow::before {\n  left: 150px;\n  animation: scale 1s linear infinite 0.2s;\n}\n\n.shadow::after {\n  left: 250px;\n  animation: scale 1s linear infinite 0.3s;\n}\n\n.shadow-two::before {\n  left: 350px;\n  animation: scale 1s linear infinite 0.4s;\n}\n\n.shadow-two::after {\n  left: 450px;\n  animation: scale 1s linear infinite 0.5s;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;;;EAGE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;;EAEE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;;EAEE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;EACE;IACE,oCAAoC;EACtC;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,4CAA4C;EAC9C;;EAEA;IACE,0CAA0C;EAC5C;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,oCAAoC;EACtC;AACF;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,KAAK,oBAAoB,EAAE;EAC3B,MAAM,sBAAsB,EAAE;EAC9B,MAAM,oBAAoB,EAAE;EAC5B,MAAM,sBAAsB,EAAE;EAC9B,OAAO,oBAAoB,EAAE;AAC/B;;AAEA;EACE,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\n*,\n*::after,\n*::before {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  color: #1c1c1c;\n  display: grid;\n  padding: 32px;\n  background: rgb(230, 158, 230);\n}\n\nbutton {\n  width: 120px;\n  height: 40px;\n  padding: 10px;\n  font-weight: 700;\n  border: 2px solid #1c1c1c;\n  cursor: pointer;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 500px 500px;\n  width: auto;\n  margin-top: 30px;\n}\n\n.refresh {\n  display: flex;\n  justify-content: space-between;\n  font-size: 25px;\n}\n\n#refresh {\n  box-shadow: 3px 2px;\n}\n\n#display-scores {\n  display: grid;\n  gap: 30px;\n  padding: 20px;\n  margin-left: 10%;\n}\n\n.player-list {\n  height: 500px; \n  overflow: auto;\n}\n\n.score-list {\n  display: flex;\n  flex-direction: column;\n  border: 5px solid #1c1c1c;\n  border-radius: 5px;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px;\n}\n\nspan {\n  font-weight: bold;\n}\n\n.score-list li:nth-child(odd) {\n  background: rgb(175, 100, 26);\n}\n\n.score-list li:nth-child(even) {\n  background: rgb(209, 198, 198);\n}\n\n#add-scores {\n  position: relative;\n  padding: 20px;\n  gap: 50px;\n  left: 20%;\n  font-size: 20px;\n}\n\nform {\n  display: grid;\n  gap: 20px;\n  margin-top: 50px;\n}\n\ninput {\n  font-family: inherit;\n  font-size: inherit;\n  width: 430px;\n  padding: 5px;\n  color: #1c1c1c;\n  border: 3px solid #1c1c1c;\n  border-radius: 5px;\n}\n\n#right {\n  box-shadow: 3px 2px;\n  margin-left: 66%;\n}\n\n.bouncing-text {\n  position: relative;\n  display: flex;\n  font-size: 70px;\n  font-weight: bolder;\n  margin: 10px, 20px, 30px, 40px;\n}\n\n.l,\n.d,\n.o {\n  color: brown;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.e,\n.b {\n  color: green;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n.a,\n.r {\n  color: olive;\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\n}\n\n@keyframes bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n\n  30% {\n    transform: scale(0.9, 1.1) translateY(-55px);\n  }\n\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n\n  58% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n\n  65% {\n    transform: scale(1, 1) translateY(0);\n  }\n\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.l {\n  animation: bounce 1s ease infinite;\n}\n\n.e {\n  animation: bounce 1s ease infinite 0.1s;\n}\n\n.a {\n  animation: bounce 1s ease infinite 0.2s;\n}\n\n.d {\n  animation: bounce 1s ease infinite 0.3s;\n}\n\n.r {\n  animation: bounce 1s ease infinite 0.4s;\n}\n\n.b {\n  animation: bounce 1s ease infinite 0.5s;\n}\n\n.o {\n  animation: bounce 1s ease infinite 0.6s;\n}\n\n.bouncing-text::before,\n.bouncing-text::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 50px;\n  height: 5px;\n  border-radius: 50%;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow,\n.shadow-two {\n  position: absolute;\n  top: 82px;\n  z-index: -1;\n}\n\n.shadow::before,\n.shadow::after,\n.shadow-two::before,\n.shadow-two::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 80px;\n  height: 5px;\n  border-radius: 50%;\n  top: 0;\n}\n\n.bouncing-text::before {\n  left: 10px;\n  animation: scale 1s linear infinite;\n}\n\n@keyframes scale {\n  0% { transform: scaleX(1); }\n  25% { transform: scaleX(0.4); }\n  50% { transform: scaleX(1); }\n  75% { transform: scaleX(0.9); }\n  100% { transform: scaleX(1); }\n}\n\n.bouncing-text::after {\n  left: 80px;\n  animation: scale 1s linear infinite 0.1s;\n}\n\n.shadow::before {\n  left: 150px;\n  animation: scale 1s linear infinite 0.2s;\n}\n\n.shadow::after {\n  left: 250px;\n  animation: scale 1s linear infinite 0.3s;\n}\n\n.shadow-two::before {\n  left: 350px;\n  animation: scale 1s linear infinite 0.4s;\n}\n\n.shadow-two::after {\n  left: 450px;\n  animation: scale 1s linear infinite 0.5s;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsU0FBUztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7O0FDcEJyQjtBQUNBO0FBQ0Esb0ZBQW9GLFNBQVM7QUFDN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWSxJQUFJLGFBQWE7QUFDM0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7OztVQ1R6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDaUI7QUFDVDtBQUNVOztBQUU5Qyx5REFBVTtBQUNWLDJEQUFJO0FBQ0osK0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvYWRkLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvZ2V0X3Njb3Jlcy5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2xvYWRlci5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxYzFjMWM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzAsIDE1OCwgMjMwKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFjMWMxYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MDBweCA1MDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnJlZnJlc2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgYm94LXNoYWRvdzogM3B4IDJweDtcXG59XFxuXFxuI2Rpc3BsYXktc2NvcmVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLnBsYXllci1saXN0IHtcXG4gIGhlaWdodDogNTAwcHg7IFxcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zY29yZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzFjMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zY29yZS1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNzUsIDEwMCwgMjYpO1xcbn1cXG5cXG4uc2NvcmUtbGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwOSwgMTk4LCAxOTgpO1xcbn1cXG5cXG4jYWRkLXNjb3JlcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgbGVmdDogMjAlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHdpZHRoOiA0MzBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzFjMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gIGJveC1zaGFkb3c6IDNweCAycHg7XFxuICBtYXJnaW4tbGVmdDogNjYlO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbjogMTBweCwgMjBweCwgMzBweCwgNDBweDtcXG59XFxuXFxuLmwsXFxuLmQsXFxuLm8ge1xcbiAgY29sb3I6IGJyb3duO1xcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IGdyZXksIDAgNXB4IGdyZXksIDAgN3B4IGdyZXk7XFxufVxcblxcbi5lLFxcbi5iIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcbn1cXG5cXG4uYSxcXG4uciB7XFxuICBjb2xvcjogb2xpdmU7XFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMC45KSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEuMSkgdHJhbnNsYXRlWSgtNTVweCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICA1OCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTdweCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4ubCB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uZSB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMXM7XFxufVxcblxcbi5hIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4ycztcXG59XFxuXFxuLmQge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjNzO1xcbn1cXG5cXG4uciB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNHM7XFxufVxcblxcbi5iIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC41cztcXG59XFxuXFxuLm8ge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjZzO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YmVmb3JlLFxcbi5ib3VuY2luZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0b3A6IDgycHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoYWRvdyxcXG4uc2hhZG93LXR3byB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgycHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoYWRvdzo6YmVmb3JlLFxcbi5zaGFkb3c6OmFmdGVyLFxcbi5zaGFkb3ctdHdvOjpiZWZvcmUsXFxuLnNoYWRvdy10d286OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGUge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbiAgMjUlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTsgfVxcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXG4gIDc1JSB7IHRyYW5zZm9ybTogc2NhbGVYKDAuOSk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcbiAgbGVmdDogODBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxufVxcblxcbi5zaGFkb3c6OmJlZm9yZSB7XFxuICBsZWZ0OiAxNTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxufVxcblxcbi5zaGFkb3c6OmFmdGVyIHtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXG59XFxuXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxuICBsZWZ0OiAzNTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxufVxcblxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxuICBsZWZ0OiA0NTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxhQUFhO0VBQ2Is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O0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxYzFjMWM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzAsIDE1OCwgMjMwKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFjMWMxYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MDBweCA1MDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLnJlZnJlc2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuI3JlZnJlc2gge1xcbiAgYm94LXNoYWRvdzogM3B4IDJweDtcXG59XFxuXFxuI2Rpc3BsYXktc2NvcmVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxuLnBsYXllci1saXN0IHtcXG4gIGhlaWdodDogNTAwcHg7IFxcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zY29yZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzFjMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zY29yZS1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNzUsIDEwMCwgMjYpO1xcbn1cXG5cXG4uc2NvcmUtbGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwOSwgMTk4LCAxOTgpO1xcbn1cXG5cXG4jYWRkLXNjb3JlcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgbGVmdDogMjAlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHdpZHRoOiA0MzBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjMWMxYzFjO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzFjMWMxYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gIGJveC1zaGFkb3c6IDNweCAycHg7XFxuICBtYXJnaW4tbGVmdDogNjYlO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbjogMTBweCwgMjBweCwgMzBweCwgNDBweDtcXG59XFxuXFxuLmwsXFxuLmQsXFxuLm8ge1xcbiAgY29sb3I6IGJyb3duO1xcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IGdyZXksIDAgNXB4IGdyZXksIDAgN3B4IGdyZXk7XFxufVxcblxcbi5lLFxcbi5iIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcbn1cXG5cXG4uYSxcXG4uciB7XFxuICBjb2xvcjogb2xpdmU7XFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMC45KSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEuMSkgdHJhbnNsYXRlWSgtNTVweCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICA1OCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTdweCk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4ubCB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uZSB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMXM7XFxufVxcblxcbi5hIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4ycztcXG59XFxuXFxuLmQge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjNzO1xcbn1cXG5cXG4uciB7XFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNHM7XFxufVxcblxcbi5iIHtcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC41cztcXG59XFxuXFxuLm8ge1xcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjZzO1xcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YmVmb3JlLFxcbi5ib3VuY2luZy10ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0b3A6IDgycHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoYWRvdyxcXG4uc2hhZG93LXR3byB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgycHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoYWRvdzo6YmVmb3JlLFxcbi5zaGFkb3c6OmFmdGVyLFxcbi5zaGFkb3ctdHdvOjpiZWZvcmUsXFxuLnNoYWRvdy10d286OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGUge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbiAgMjUlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTsgfVxcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXG4gIDc1JSB7IHRyYW5zZm9ybTogc2NhbGVYKDAuOSk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcbn1cXG5cXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcbiAgbGVmdDogODBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxufVxcblxcbi5zaGFkb3c6OmJlZm9yZSB7XFxuICBsZWZ0OiAxNTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxufVxcblxcbi5zaGFkb3c6OmFmdGVyIHtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXG59XFxuXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxuICBsZWZ0OiAzNTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxufVxcblxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxuICBsZWZ0OiA0NTBweDtcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9nZXRfc2NvcmVzLmpzJztcblxuY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICBjb25zdCB1c2VyU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gdXNlck5hbWUudmFsdWU7XG4gICAgY29uc3Qgc2NvcmUgPSB1c2VyU2NvcmUudmFsdWU7XG4gICAgY29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcihuYW1lLCBzY29yZSk7XG4gICAgbmV3UGxheWVyLmFkZFNjb3JlcyhuZXdQbGF5ZXIpO1xuICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgdXNlclNjb3JlLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm07IiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodXNlciwgc2NvcmUpIHtcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgfVxuXG4vLyAgIGNyZWF0ZSBuZXcgcGxheWVyXG5hZGRTY29yZXMgPSBhc3luYyAocGxheWVyT2JqZWN0KSA9PiB7XG4gIGNvbnN0IGVuZFBvaW50ID0gJ2dhbWVzLzRTT09KbzhSZ0YxUk5TR3dZMVhQL3Njb3Jlcy8nO1xuICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLyR7ZW5kUG9pbnR9YDtcbiAgY29uc3QgZ2FtZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwbGF5ZXJPYmplY3QpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGF3YWl0IGdhbWUuanNvbigpO1xufVxufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNvbnN0IFNjb3JlQm9hcmQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGVuZFBvaW50ID0gJ2dhbWVzLzRTT09KbzhSZ0YxUk5TR3dZMVhQL3Njb3Jlcy8nO1xuICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLyR7ZW5kUG9pbnR9YDtcbiAgY29uc3QgZ2FtZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwpO1xuICBjb25zdCByZXMgPSBhd2FpdCBnYW1lLmpzb24oKTtcbiAgY29uc3Qgc2NvcmVMaXN0ID0gcmVzLnJlc3VsdDtcblxuICAvLyAgIGdlbmVyYXRpbmcgc2NvcmUtbGlzdCBkeW5hbWljYWxseVxuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWxpc3QnKTtcbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gc2NvcmVMaXN0Lm1hcCgoc2NvcmVzKSA9PiBgPGxpPiR7c2NvcmVzLnVzZXJ9OiAke3Njb3Jlcy5zY29yZX08L2xpPmApLmpvaW4oJycpO1xufTtcbm1vZHVsZS5leHBvcnRzID0gU2NvcmVCb2FyZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuLy8gZ2V0dGluZyBzY29yZXMgYWZ0ZXIgcmVmcmVzaGluZ1xuY29uc3QgcmVmcmVzaEJ0biA9ICgpID0+IHtcbiAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoJyk7XG4gIHJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZnJlc2hCdG47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFNjb3JlQm9hcmQgZnJvbSAnLi9tb2R1bGVzL2xvYWRlci5qcyc7XG5pbXBvcnQgZm9ybSBmcm9tICcuL21vZHVsZXMvYWRkLmpzJztcbmltcG9ydCByZWZyZXNoQnRuIGZyb20gJy4vbW9kdWxlcy9yZWZyZXNoLmpzJztcblxuU2NvcmVCb2FyZCgpO1xuZm9ybSgpO1xucmVmcmVzaEJ0bigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9