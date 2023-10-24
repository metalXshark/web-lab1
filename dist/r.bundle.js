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

/***/ "./src/js/R.js":
/*!*********************!*\
  !*** ./src/js/R.js ***!
  \*********************/
/***/ (() => {

eval("function changeR() {\n  var checkedBox = document.querySelector('#r_value input[type=\"checkbox\"]:checked');\n  var rField = checkedBox ? checkedBox : {\n    value: ''\n  };\n  if (rField.value === '') {\n    document.querySelectorAll('#r').forEach(function (element) {\n      element.innerHTML = 'R';\n    });\n    document.querySelectorAll('#-r').forEach(function (element) {\n      element.innerHTML = '-R';\n    });\n    document.querySelectorAll('#r2').forEach(function (element) {\n      element.innerHTML = 'R/2';\n    });\n    document.querySelectorAll('#-r2').forEach(function (element) {\n      element.innerHTML = '-R/2';\n    });\n  } else {\n    var rFloat = parseFloat(rField.value);\n    document.querySelectorAll('#r').forEach(function (element) {\n      element.innerHTML = rFloat.toString();\n    });\n    document.querySelectorAll('#-r').forEach(function (element) {\n      element.innerHTML = (-rFloat).toString();\n    });\n    document.querySelectorAll('#r2').forEach(function (element) {\n      element.innerHTML = (rFloat / 2).toString();\n    });\n    document.querySelectorAll('#-r2').forEach(function (element) {\n      element.innerHTML = (-rFloat / 2).toString();\n    });\n    localStorage.setItem('selectedR', rField.value);\n    document.querySelectorAll('#r_value input[type=\"checkbox\"]:not(:checked)').forEach(function (element) {\n      element.checked = false;\n    });\n  }\n}\nfunction deselectOthers(currentCheckbox) {\n  var checkboxes = document.querySelectorAll('input[name=\"r_value\"]');\n  checkboxes.forEach(function (checkbox) {\n    if (checkbox !== currentCheckbox) {\n      checkbox.checked = false;\n    }\n  });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var selectedR = localStorage.getItem('selectedR');\n  if (selectedR) {\n    document.querySelector(\"input[name=\\\"r_value\\\"][value=\\\"\".concat(selectedR, \"\\\"]\")).checked = true;\n    changeR();\n  }\n});\n\n//# sourceURL=webpack://web/./src/js/R.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/R.js"]();
/******/ 	
/******/ })()
;