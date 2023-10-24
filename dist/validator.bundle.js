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

/***/ "./src/js/Validator.js":
/*!*****************************!*\
  !*** ./src/js/Validator.js ***!
  \*****************************/
/***/ (() => {

eval("function validateValues(x, y, r) {\n  var validationInfoBox = document.querySelector('.validation_info');\n  validationInfoBox.innerHTML = '';\n  validationInfoBox.classList.remove(\"show\");\n  var validationInfo = '';\n  var xValidationSuccess = false;\n  var yValidationSuccess = false;\n  var rValidationSuccess = false;\n  var validationSuccess;\n  if (x === undefined || x === '') {\n    validationInfo += \"<span>Отсутствует значение X!</span>\";\n  } else {\n    xValidationSuccess = true;\n  }\n  if (!(y.trim() === '')) {\n    var parsedY = Number(y);\n    if (!isNaN(parsedY)) {\n      if (parsedY > -3 && parsedY < 5) {\n        yValidationSuccess = true;\n      } else validationInfo += '<span>Значение Y - (-3..5)!</span>';\n    } else {\n      validationInfo += '<span>Значение Y - число!</span>';\n    }\n  } else validationInfo += '<span>Отсутствует значение Y!</span>';\n  if (!yValidationSuccess) {\n    document.querySelector('#y_value').classList.add('error');\n  }\n  if (r === null || r === '') {\n    validationInfo += '<span>Отсутствует значение R!</span>';\n  } else {\n    rValidationSuccess = true;\n  }\n  validationSuccess = xValidationSuccess && yValidationSuccess && rValidationSuccess;\n  if (!validationSuccess) {\n    document.querySelector('.validation_info').innerHTML = '<br>' + validationInfo + '<br>';\n    validationInfoBox.classList.add('show');\n  }\n  return validationSuccess;\n}\n\n//# sourceURL=webpack://web/./src/js/Validator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/Validator.js"]();
/******/ 	
/******/ })()
;