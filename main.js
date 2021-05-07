/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\r\n\r\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\r\n\r\nfunction init () {\r\n  (0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.removeAnimation)();\r\n  (0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.getSearch)();\r\n  (0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.handleKeyboard)();\r\n  (0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.displayData)(\"Dhaka\");\r\n}\n\n//# sourceURL=webpack://weather-app/./src/init.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getData (location) {\r\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric`;\r\n  const initialResponse = await fetch(url, {mode: \"cors\"});\r\n  const response = await initialResponse.json();\r\n  return response;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://weather-app/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSearch\": () => (/* binding */ getSearch),\n/* harmony export */   \"displayData\": () => (/* binding */ displayData),\n/* harmony export */   \"handleKeyboard\": () => (/* binding */ handleKeyboard),\n/* harmony export */   \"removeAnimation\": () => (/* binding */ removeAnimation)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n\r\n\r\nfunction getSearch () {\r\n  const searchBar = document.querySelector(\".search-bar\");\r\n  const searchButton = document.querySelector(\".search-button\");\r\n\r\n  searchButton.addEventListener(\"click\", handleSearch);\r\n\r\n  function handleSearch () {\r\n    if (searchBar.value) {\r\n      const location = searchBar.value;\r\n      searchBar.value = \"\";\r\n      displayData(location);\r\n    }\r\n  }\r\n}\r\n\r\nfunction displayData (location) {\r\n  const region = document.querySelector(\".location\");\r\n  const condition = document.querySelector(\".condition\").querySelector(\"span\");\r\n  const temperature = document.querySelector(\".temperature\").querySelector(\"span\");\r\n  const wind = document.querySelector(\".wind\").querySelector(\"span\"); \r\n  const feelsLike = document.querySelector(\".feels-like\").querySelector(\".fl-value\"); \r\n  const humidity = document.querySelector(\".humidity\").querySelector(\"span\"); \r\n  const pressure = document.querySelector(\".pressure\").querySelector(\"span\");\r\n\r\n  (0,_data__WEBPACK_IMPORTED_MODULE_0__.default)(location)\r\n    .then((data) => {\r\n      if (data.cod === 200) {\r\n        reAnimate();\r\n        region.textContent = data.name;\r\n        condition.textContent = data.weather[0].main;\r\n        temperature.textContent = String(Math.round(Number(data.main.temp)));\r\n        wind.textContent = `${data.wind.speed} m/s`;\r\n        feelsLike.textContent = String(Math.round(Number(data.main.feels_like)));\r\n        humidity.textContent = `${data.main.humidity}%`;\r\n        pressure.textContent = `${data.main.pressure} hPa`;\r\n        changeIcon(data.weather[0].main);\r\n      } else {\r\n        alert(\"Could not find the city you specified\");\r\n      }\r\n      \r\n    });\r\n}\r\n\r\nfunction changeIcon (data) {\r\n  const conditionIcon = document.querySelector(\".condition\").querySelector(\"i\");\r\n  switch (data) {\r\n  case \"Clear\":\r\n    conditionIcon.className = \"far fa-sun\";\r\n    break;\r\n  case \"Rain\":\r\n    conditionIcon.className = \"fas fa-cloud-showers-heavy\";\r\n    break;\r\n  case \"Clouds\":\r\n    conditionIcon.className = \"fas fa-cloud\";\r\n    break;\r\n  case \"Drizzle\":\r\n    conditionIcon.className = \"fas fa-cloud-rain\";\r\n    break;\r\n  case \"Thunderstorm\":\r\n    conditionIcon.className = \"fas fa-cloud-showers-heavy\";\r\n    break;\r\n  case \"Snow\":\r\n    conditionIcon.className = \"fas fa-snowflake\";\r\n    break;\r\n  }\r\n}\r\n\r\nfunction removeAnimation () {\r\n  const weatherLeft = document.querySelector(\".weather-left\");\r\n  const weatherRight = document.querySelector(\".weather-right\");\r\n  const line = document.querySelector(\".line\");\r\n\r\n  [weatherLeft, weatherRight].forEach(weather => {\r\n    weather.addEventListener(\"animationend\", () => {\r\n      weather.classList.remove(\"fade\");\r\n    });\r\n  });\r\n\r\n  line.addEventListener(\"animationend\", () => {\r\n    line.classList.remove(\"elongate\");\r\n  });\r\n}\r\n\r\nfunction reAnimate() {\r\n  document.querySelector(\".weather-left\").classList.add(\"fade\");\r\n  document.querySelector(\".weather-right\").classList.add(\"fade\");\r\n  document.querySelector(\".line\").classList.add(\"elongate\");\r\n}\r\n\r\nfunction handleKeyboard () {\r\n  const searchBar = document.querySelector(\".search-bar\");\r\n  const searchButton = document.querySelector(\".search-button\");\r\n  window.addEventListener(\"keydown\", (e) => {\r\n    if (document.activeElement === searchBar) {\r\n      if (e.key === \"Enter\" && searchBar.value) {\r\n        searchButton.click();\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/display.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;