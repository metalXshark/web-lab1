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

/***/ "./src/js/Update.js":
/*!**************************!*\
  !*** ./src/js/Update.js ***!
  \**************************/
/***/ (() => {

eval("function receiveSubmit() {\n  var selectedXValues = Array.from(document.querySelectorAll('.btn_group input[type=\"checkbox\"]:checked')).map(function (checkbox) {\n    return checkbox.value;\n  });\n  var yValue = document.querySelector('#y_value').value;\n  var rValueOption = document.querySelector('input[name=\"r_value\"]:checked');\n  var rValue = rValueOption ? rValueOption.value : '';\n  var date = new Date();\n  var offset = date.getTimezoneOffset();\n  if (validateValues(selectedXValues, yValue, rValue)) {\n    selectedXValues.forEach(function (xValue) {\n      $.ajax({\n        type: 'GET',\n        url: '../src/php/index.php',\n        data: {\n          'x': parseInt(xValue.trim()),\n          'y': parseFloat(yValue.trim()),\n          'r': parseFloat(rValue.trim()),\n          'utc': offset\n        },\n        success: function success(response) {\n          document.querySelector('#table > tbody').innerHTML = response;\n          console.log(\"Значение x: \" + xValue + \" успешно отправлено.\");\n        },\n        error: function error(data) {\n          alert(\"Произошла ошибка при отправке значения x: \" + xValue);\n        }\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://web/./src/js/Update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/Update.js"]();
/******/ 	
/******/ })()
;