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

/***/ "./src/js/X.js":
/*!*********************!*\
  !*** ./src/js/X.js ***!
  \*********************/
/***/ (() => {

eval("var checkboxes = document.querySelectorAll('.btn_group input[type=\"checkbox\"]');\nvar xValuesInput = document.querySelector('#x_value');\nvar savedXValues = localStorage.getItem('savedXValues');\nif (savedXValues) {\n  var xValuesArray = savedXValues.split(',');\n  checkboxes.forEach(function (checkbox) {\n    if (xValuesArray.includes(checkbox.value)) {\n      checkbox.checked = true;\n    }\n  });\n  xValuesInput.value = savedXValues;\n}\ncheckboxes.forEach(function (checkbox) {\n  checkbox.addEventListener('change', updateXValues);\n});\nfunction updateXValues() {\n  var selectedValues = Array.from(checkboxes).filter(function (checkbox) {\n    return checkbox.checked;\n  }).map(function (checkbox) {\n    return checkbox.value;\n  });\n  xValuesInput.value = selectedValues.join(',');\n  localStorage.setItem('savedXValues', xValuesInput.value);\n}\n\n//# sourceURL=webpack://web/./src/js/X.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/X.js"]();
/******/ 	
/******/ })()
;