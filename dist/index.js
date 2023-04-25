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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  color: #1c1c1c;\r\n  display: grid;\r\n  padding: 32px;\r\n  background: rgb(201, 73, 201);\r\n  overflow: hidden;\r\n}\r\n\r\nbutton {\r\n  width: 120px;\r\n  height: 40px;\r\n  padding: 10px;\r\n  font-weight: 700;\r\n  border: 2px solid #1c1c1c;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 500px 500px;\r\n  width: auto;\r\n  margin-top: 30px;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 25px;\r\n}\r\n\r\n#refresh {\r\n  box-shadow: 3px 2px;\r\n}\r\n\r\n#display-scores {\r\n  display: grid;\r\n  gap: 30px;\r\n  padding: 20px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.player-list {\r\n  background-color: red;\r\n}\r\n\r\n.score-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 5px solid #1c1c1c;\r\n  border-radius: 5px;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 5px;\r\n}\r\n\r\nspan {\r\n  font-weight: bold;\r\n}\r\n\r\n.score-list li:nth-child(odd) {\r\n  background: rgb(175, 100, 26);\r\n}\r\n\r\n.score-list li:nth-child(even) {\r\n  background: rgb(209, 198, 198);\r\n}\r\n\r\n#add-scores {\r\n  position: relative;\r\n  padding: 20px;\r\n  gap: 50px;\r\n  left: 20%;\r\n  font-size: 20px;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  gap: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\ninput {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  width: 430px;\r\n  padding: 5px;\r\n  color: #1c1c1c;\r\n  border: 3px solid #1c1c1c;\r\n  border-radius: 5px;\r\n}\r\n\r\n#right {\r\n  box-shadow: 3px 2px;\r\n  margin-left: 66%;\r\n}\r\n\r\n.bouncing-text {\r\n  position: relative;\r\n  display: flex;\r\n  font-size: 70px;\r\n  font-weight: bolder;\r\n  margin: 30px;\r\n}\r\n\r\n.l,\r\n.d,\r\n.o {\r\n  color: brown;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n}\r\n\r\n.e,\r\n.b {\r\n  color: green;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n}\r\n\r\n.a,\r\n.r {\r\n  color: olive;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  10% {\r\n    transform: scale(1.1, 0.9) translateY(0);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.9, 1.1) translateY(-55px);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05, 0.95) translateY(0);\r\n  }\r\n\r\n  58% {\r\n    transform: scale(1, 1) translateY(-7px);\r\n  }\r\n\r\n  65% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n}\r\n\r\n.l {\r\n  animation: bounce 1s ease infinite;\r\n}\r\n\r\n.e {\r\n  animation: bounce 1s ease infinite 0.1s;\r\n}\r\n\r\n.a {\r\n  animation: bounce 1s ease infinite 0.2s;\r\n}\r\n\r\n.d {\r\n  animation: bounce 1s ease infinite 0.3s;\r\n}\r\n\r\n.r {\r\n  animation: bounce 1s ease infinite 0.4s;\r\n}\r\n\r\n.b {\r\n  animation: bounce 1s ease infinite 0.5s;\r\n}\r\n\r\n.o {\r\n  animation: bounce 1s ease infinite 0.6s;\r\n}\r\n\r\n.bouncing-text::before,\r\n.bouncing-text::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow,\r\n.shadow-two {\r\n  position: absolute;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after,\r\n.shadow-two::before,\r\n.shadow-two::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 80px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 0;\r\n}\r\n\r\n.bouncing-text::before {\r\n  left: 10px;\r\n  animation: scale 1s linear infinite;\r\n}\r\n\r\n@keyframes scale {\r\n  0% { transform: scaleX(1); }\r\n  25% { transform: scaleX(0.4); }\r\n  50% { transform: scaleX(1); }\r\n  75% { transform: scaleX(0.9); }\r\n  100% { transform: scaleX(1); }\r\n}\r\n\r\n.bouncing-text::after {\r\n  left: 80px;\r\n  animation: scale 1s linear infinite 0.1s;\r\n}\r\n\r\n.shadow::before {\r\n  left: 150px;\r\n  animation: scale 1s linear infinite 0.2s;\r\n}\r\n\r\n.shadow::after {\r\n  left: 250px;\r\n  animation: scale 1s linear infinite 0.3s;\r\n}\r\n\r\n.shadow-two::before {\r\n  left: 350px;\r\n  animation: scale 1s linear infinite 0.4s;\r\n}\r\n\r\n.shadow-two::after {\r\n  left: 450px;\r\n  animation: scale 1s linear infinite 0.5s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,YAAY;AACd;;AAEA;;;EAGE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;;EAEE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;;EAEE,YAAY;EACZ,+CAA+C;AACjD;;AAEA;EACE;IACE,oCAAoC;EACtC;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,4CAA4C;EAC9C;;EAEA;IACE,0CAA0C;EAC5C;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,oCAAoC;EACtC;AACF;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,KAAK,oBAAoB,EAAE;EAC3B,MAAM,sBAAsB,EAAE;EAC9B,MAAM,oBAAoB,EAAE;EAC5B,MAAM,sBAAsB,EAAE;EAC9B,OAAO,oBAAoB,EAAE;AAC/B;;AAEA;EACE,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;AAC1C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  color: #1c1c1c;\r\n  display: grid;\r\n  padding: 32px;\r\n  background: rgb(201, 73, 201);\r\n  overflow: hidden;\r\n}\r\n\r\nbutton {\r\n  width: 120px;\r\n  height: 40px;\r\n  padding: 10px;\r\n  font-weight: 700;\r\n  border: 2px solid #1c1c1c;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: 500px 500px;\r\n  width: auto;\r\n  margin-top: 30px;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 25px;\r\n}\r\n\r\n#refresh {\r\n  box-shadow: 3px 2px;\r\n}\r\n\r\n#display-scores {\r\n  display: grid;\r\n  gap: 30px;\r\n  padding: 20px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.player-list {\r\n  background-color: red;\r\n}\r\n\r\n.score-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 5px solid #1c1c1c;\r\n  border-radius: 5px;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 5px;\r\n}\r\n\r\nspan {\r\n  font-weight: bold;\r\n}\r\n\r\n.score-list li:nth-child(odd) {\r\n  background: rgb(175, 100, 26);\r\n}\r\n\r\n.score-list li:nth-child(even) {\r\n  background: rgb(209, 198, 198);\r\n}\r\n\r\n#add-scores {\r\n  position: relative;\r\n  padding: 20px;\r\n  gap: 50px;\r\n  left: 20%;\r\n  font-size: 20px;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  gap: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\ninput {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  width: 430px;\r\n  padding: 5px;\r\n  color: #1c1c1c;\r\n  border: 3px solid #1c1c1c;\r\n  border-radius: 5px;\r\n}\r\n\r\n#right {\r\n  box-shadow: 3px 2px;\r\n  margin-left: 66%;\r\n}\r\n\r\n.bouncing-text {\r\n  position: relative;\r\n  display: flex;\r\n  font-size: 70px;\r\n  font-weight: bolder;\r\n  margin: 30px;\r\n}\r\n\r\n.l,\r\n.d,\r\n.o {\r\n  color: brown;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n}\r\n\r\n.e,\r\n.b {\r\n  color: green;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n}\r\n\r\n.a,\r\n.r {\r\n  color: olive;\r\n  text-shadow: 0 3px grey, 0 5px grey, 0 7px grey;\r\n}\r\n\r\n@keyframes bounce {\r\n  0% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  10% {\r\n    transform: scale(1.1, 0.9) translateY(0);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.9, 1.1) translateY(-55px);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.05, 0.95) translateY(0);\r\n  }\r\n\r\n  58% {\r\n    transform: scale(1, 1) translateY(-7px);\r\n  }\r\n\r\n  65% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1, 1) translateY(0);\r\n  }\r\n}\r\n\r\n.l {\r\n  animation: bounce 1s ease infinite;\r\n}\r\n\r\n.e {\r\n  animation: bounce 1s ease infinite 0.1s;\r\n}\r\n\r\n.a {\r\n  animation: bounce 1s ease infinite 0.2s;\r\n}\r\n\r\n.d {\r\n  animation: bounce 1s ease infinite 0.3s;\r\n}\r\n\r\n.r {\r\n  animation: bounce 1s ease infinite 0.4s;\r\n}\r\n\r\n.b {\r\n  animation: bounce 1s ease infinite 0.5s;\r\n}\r\n\r\n.o {\r\n  animation: bounce 1s ease infinite 0.6s;\r\n}\r\n\r\n.bouncing-text::before,\r\n.bouncing-text::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 50px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow,\r\n.shadow-two {\r\n  position: absolute;\r\n  top: 82px;\r\n  z-index: -1;\r\n}\r\n\r\n.shadow::before,\r\n.shadow::after,\r\n.shadow-two::before,\r\n.shadow-two::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 80px;\r\n  height: 5px;\r\n  border-radius: 50%;\r\n  top: 0;\r\n}\r\n\r\n.bouncing-text::before {\r\n  left: 10px;\r\n  animation: scale 1s linear infinite;\r\n}\r\n\r\n@keyframes scale {\r\n  0% { transform: scaleX(1); }\r\n  25% { transform: scaleX(0.4); }\r\n  50% { transform: scaleX(1); }\r\n  75% { transform: scaleX(0.9); }\r\n  100% { transform: scaleX(1); }\r\n}\r\n\r\n.bouncing-text::after {\r\n  left: 80px;\r\n  animation: scale 1s linear infinite 0.1s;\r\n}\r\n\r\n.shadow::before {\r\n  left: 150px;\r\n  animation: scale 1s linear infinite 0.2s;\r\n}\r\n\r\n.shadow::after {\r\n  left: 250px;\r\n  animation: scale 1s linear infinite 0.3s;\r\n}\r\n\r\n.shadow-two::before {\r\n  left: 350px;\r\n  animation: scale 1s linear infinite 0.4s;\r\n}\r\n\r\n.shadow-two::after {\r\n  left: 450px;\r\n  animation: scale 1s linear infinite 0.5s;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNoQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLFNBQVM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7OztBQ3BCckI7QUFDQTtBQUNBLG9GQUFvRixTQUFTO0FBQzdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQThELFlBQVksSUFBSSxhQUFhO0FBQzNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7VUNUekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2lCO0FBQ1Q7QUFDVTs7QUFFOUMseURBQVU7QUFDViwyREFBSTtBQUNKLCtEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2FkZC5qcyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL2dldF9zY29yZXMuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9yZWZyZXNoLmpzIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMWMxYzFjO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjAxLCA3MywgMjAxKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxYzFjMWM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggNTAwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoIHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHg7XFxyXFxufVxcclxcblxcclxcbiNkaXNwbGF5LXNjb3JlcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItbGlzdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzFjMWMxYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxNzUsIDEwMCwgMjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtbGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIwOSwgMTk4LCAxOTgpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXNjb3JlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgbGVmdDogMjAlO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA0MzBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGNvbG9yOiAjMWMxYzFjO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgIzFjMWMxYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0IHtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNjYlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIG1hcmdpbjogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmwsXFxyXFxuLmQsXFxyXFxuLm8ge1xcclxcbiAgY29sb3I6IGJyb3duO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IGdyZXksIDAgNXB4IGdyZXksIDAgN3B4IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5lLFxcclxcbi5iIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYSxcXHJcXG4uciB7XFxyXFxuICBjb2xvcjogb2xpdmU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMC45KSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMzAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEuMSkgdHJhbnNsYXRlWSgtNTVweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1OCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoLTdweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA2NSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubCB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZSB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5hIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmQge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uciB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5iIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLm8ge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjZzO1xcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dDo6YmVmb3JlLFxcclxcbi5ib3VuY2luZy10ZXh0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDgycHg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdyxcXHJcXG4uc2hhZG93LXR3byB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDgycHg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdzo6YmVmb3JlLFxcclxcbi5zaGFkb3c6OmFmdGVyLFxcclxcbi5zaGFkb3ctdHdvOjpiZWZvcmUsXFxyXFxuLnNoYWRvdy10d286OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2NhbGUge1xcclxcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcclxcbiAgMjUlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTsgfVxcclxcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXHJcXG4gIDc1JSB7IHRyYW5zZm9ybTogc2NhbGVYKDAuOSk7IH1cXHJcXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogODBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxNTBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDI1MHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzY2FsZSAxcyBsaW5lYXIgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdy10d286OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAzNTBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBsZWZ0OiA0NTBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLFlBQVk7RUFDWiwrQ0FBK0M7QUFDakQ7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLCtDQUErQztBQUNqRDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtBQUNSOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLEtBQUssb0JBQW9CLEVBQUU7RUFDM0IsTUFBTSxzQkFBc0IsRUFBRTtFQUM5QixNQUFNLG9CQUFvQixFQUFFO0VBQzVCLE1BQU0sc0JBQXNCLEVBQUU7RUFDOUIsT0FBTyxvQkFBb0IsRUFBRTtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzFjMWMxYztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIwMSwgNzMsIDIwMSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMWMxYzFjO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwMHB4IDUwMHB4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaCB7XFxyXFxuICBib3gtc2hhZG93OiAzcHggMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGlzcGxheS1zY29yZXMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWxpc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxYzFjMWM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtbGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTc1LCAxMDAsIDI2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWxpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMDksIDE5OCwgMTk4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1zY29yZXMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGxlZnQ6IDIwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNDMwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjb2xvcjogIzFjMWMxYztcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxYzFjMWM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNyaWdodCB7XFxyXFxuICBib3gtc2hhZG93OiAzcHggMnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDY2JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5sLFxcclxcbi5kLFxcclxcbi5vIHtcXHJcXG4gIGNvbG9yOiBicm93bjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDNweCBncmV5LCAwIDVweCBncmV5LCAwIDdweCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uZSxcXHJcXG4uYiB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAzcHggZ3JleSwgMCA1cHggZ3JleSwgMCA3cHggZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmEsXFxyXFxuLnIge1xcclxcbiAgY29sb3I6IG9saXZlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IGdyZXksIDAgNXB4IGdyZXksIDAgN3B4IGdyZXk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDMwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAxLjEpIHRyYW5zbGF0ZVkoLTU1cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTglIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKC03cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmwge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmUge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYSB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5kIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnIge1xcclxcbiAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uYiB7XFxyXFxuICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlIGluZmluaXRlIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5vIHtcXHJcXG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UgaW5maW5pdGUgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmJlZm9yZSxcXHJcXG4uYm91bmNpbmctdGV4dDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3csXFxyXFxuLnNoYWRvdy10d28ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MnB4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3c6OmJlZm9yZSxcXHJcXG4uc2hhZG93OjphZnRlcixcXHJcXG4uc2hhZG93LXR3bzo6YmVmb3JlLFxcclxcbi5zaGFkb3ctdHdvOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5ib3VuY2luZy10ZXh0OjpiZWZvcmUge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcXHJcXG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXHJcXG4gIDI1JSB7IHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7IH1cXHJcXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XFxyXFxuICA3NSUgeyB0cmFuc2Zvcm06IHNjYWxlWCgwLjkpOyB9XFxyXFxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvdW5jaW5nLXRleHQ6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDgwcHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjpiZWZvcmUge1xcclxcbiAgbGVmdDogMTUwcHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93OjphZnRlciB7XFxyXFxuICBsZWZ0OiAyNTBweDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUgMXMgbGluZWFyIGluZmluaXRlIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5zaGFkb3ctdHdvOjpiZWZvcmUge1xcclxcbiAgbGVmdDogMzUwcHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93LXR3bzo6YWZ0ZXIge1xcclxcbiAgbGVmdDogNDUwcHg7XFxyXFxuICBhbmltYXRpb246IHNjYWxlIDFzIGxpbmVhciBpbmZpbml0ZSAwLjVzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vZ2V0X3Njb3Jlcy5qcyc7XG5cbmNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgY29uc3QgdXNlclNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlJyk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJOYW1lLnZhbHVlO1xuICAgIGNvbnN0IHNjb3JlID0gdXNlclNjb3JlLnZhbHVlO1xuICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIobmFtZSwgc2NvcmUpO1xuICAgIG5ld1BsYXllci5hZGRTY29yZXMobmV3UGxheWVyKTtcbiAgICB1c2VyTmFtZS52YWx1ZSA9ICcnO1xuICAgIHVzZXJTY29yZS52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtOyIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIsIHNjb3JlKSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gIH1cblxuLy8gICBjcmVhdGUgbmV3IHBsYXllclxuYWRkU2NvcmVzID0gYXN5bmMgKHBsYXllck9iamVjdCkgPT4ge1xuICBjb25zdCBlbmRQb2ludCA9ICdnYW1lcy80U09PSm84UmdGMVJOU0d3WTFYUC9zY29yZXMvJztcbiAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS8ke2VuZFBvaW50fWA7XG4gIGNvbnN0IGdhbWUgPSBhd2FpdCBmZXRjaChiYXNlVVJMLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxheWVyT2JqZWN0KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBhd2FpdCBnYW1lLmpzb24oKTtcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTY29yZUJvYXJkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBlbmRQb2ludCA9ICdnYW1lcy80U09PSm84UmdGMVJOU0d3WTFYUC9zY29yZXMvJztcbiAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS8ke2VuZFBvaW50fWA7XG4gIGNvbnN0IGdhbWUgPSBhd2FpdCBmZXRjaChiYXNlVVJMKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2FtZS5qc29uKCk7XG4gIGNvbnN0IHNjb3JlTGlzdCA9IHJlcy5yZXN1bHQ7XG5cbiAgLy8gICBnZW5lcmF0aW5nIHNjb3JlLWxpc3QgZHluYW1pY2FsbHlcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1saXN0Jyk7XG4gIGxpc3RDb250YWluZXIuaW5uZXJIVE1MICs9IHNjb3JlTGlzdC5tYXAoKHNjb3JlcykgPT4gYDxsaT4ke3Njb3Jlcy51c2VyfTogJHtzY29yZXMuc2NvcmV9PC9saT5gKS5qb2luKCcnKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlQm9hcmQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8vIGdldHRpbmcgc2NvcmVzIGFmdGVyIHJlZnJlc2hpbmdcbmNvbnN0IHJlZnJlc2hCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaCcpO1xuICByZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCByZWZyZXNoQnRuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBTY29yZUJvYXJkIGZyb20gJy4vbW9kdWxlcy9sb2FkZXIuanMnO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9tb2R1bGVzL2FkZC5qcyc7XG5pbXBvcnQgcmVmcmVzaEJ0biBmcm9tICcuL21vZHVsZXMvcmVmcmVzaC5qcyc7XG5cblNjb3JlQm9hcmQoKTtcbmZvcm0oKTtcbnJlZnJlc2hCdG4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==