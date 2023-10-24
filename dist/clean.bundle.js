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

/***/ "./src/js/Clean.js":
/*!*************************!*\
  !*** ./src/js/Clean.js ***!
  \*************************/
/***/ (() => {

eval("function cleanInput() {\n  var selectedElems = document.querySelectorAll('.selected');\n  selectedElems.forEach(function (element) {\n    element.classList.remove('selected');\n  });\n  selectedElems = document.querySelectorAll('.error');\n  selectedElems.forEach(function (element) {\n    element.classList.remove('error');\n  });\n  document.querySelector('.validation_info').classList.remove('show');\n  document.querySelector('.validation_info').innerHTML = '';\n  xValuesInput.value = '';\n  document.querySelector('#r_value input[type=\"checkbox\"]:checked').value = '';\n  changeR();\n}\nfunction cleanTable() {\n  var tBody = document.querySelector('#table > tbody');\n  tBody.innerHTML = '';\n  fetch('../src/php/index.php?clear=true').then(function (response) {\n    return response.text();\n  }).then(function (data) {\n    return console.log(data);\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n  });\n}\n\n//# sourceURL=webpack://web/./src/js/Clean.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/Clean.js"]();
/******/ 	
/******/ })()
;