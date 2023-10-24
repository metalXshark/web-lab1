/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Y.js":
/*!*********************!*\
  !*** ./src/js/Y.js ***!
  \*********************/
/***/ (() => {

eval("function checkInput() {\n  var yValue = document.querySelector('#y_value');\n  yValue.classList.remove('error');\n  if (yValue.value.includes(',')) {\n    yValue.value = yValue.value.replace(',', '.');\n  }\n  if (yValue.value.indexOf('.') === -1) {\n    return;\n  }\n  if (yValue.value.length - yValue.value.indexOf('.') > 11) {\n    yValue.value = yValue.value.slice(0, yValue.value.indexOf('.') + 11);\n    yValue.classList.add('error');\n  }\n  localStorage.setItem('selectedY', yValue.value);\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var selectedY = localStorage.getItem('selectedY');\n  if (selectedY) {\n    var yValue = document.querySelector('#y_value');\n    yValue.value = selectedY;\n    checkInput();\n  }\n});\n\n//# sourceURL=webpack://web/./src/js/Y.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/Y.js"]();
/******/ 	
/******/ })()
;