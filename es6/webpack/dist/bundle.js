/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _billing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing.js */ \"./src/billing.js\");\n\n\nconst customerDetails = [\n    {\n        \"type\": 'Residential Customer',\n        \"amount\": 60\n    },\n    {\n        \"type\": 'NRI Customers',\n        \"amount\": 23\n    }\n];\nvar objBilling = new _billing_js__WEBPACK_IMPORTED_MODULE_0__[\"Billing\"](customerDetails); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpbGxpbmcgfSBmcm9tICcuL2JpbGxpbmcuanMnO1xuXG5jb25zdCBjdXN0b21lckRldGFpbHMgPSBbXG4gICAge1xuICAgICAgICBcInR5cGVcIjogJ1Jlc2lkZW50aWFsIEN1c3RvbWVyJyxcbiAgICAgICAgXCJhbW91bnRcIjogNjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6ICdOUkkgQ3VzdG9tZXJzJyxcbiAgICAgICAgXCJhbW91bnRcIjogMjNcbiAgICB9XG5dO1xudmFyIG9iakJpbGxpbmcgPSBuZXcgQmlsbGluZyhjdXN0b21lckRldGFpbHMpOyAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/billing.js":
/*!************************!*\
  !*** ./src/billing.js ***!
  \************************/
/*! exports provided: Billing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Billing\", function() { return Billing; });\nclass Billing {\n    \n\n    constructor(types) {\n        this.types = types;\n        this.displayForm();\n    }\n\n    displayForm() {\n        let wrapperDivObj = document.createElement('div');\n        wrapperDivObj.setAttribute('id', 'billing-wrapper');\n        //wrapperDivObj.setAttribute('class', 'jumbotron');\n\n        let eleUlWrapperObj = document.createElement('ul');\n        eleUlWrapperObj.setAttribute('class', 'p-0 m-0');\n        for(let i in this.types) {\n            let eleLiWrapperObj = document.createElement('li');\n            eleLiWrapperObj.setAttribute('class', 'form-check');\n\n            let eleInputWrapperObj = document.createElement('input');\n            eleInputWrapperObj.setAttribute('id', 'type_' + i);\n            eleInputWrapperObj.setAttribute('type', 'radio');\n            eleInputWrapperObj.setAttribute('name', 'cusType[]');\n            eleInputWrapperObj.setAttribute('value', i);\n            eleInputWrapperObj.setAttribute('class', 'form-check-input');\n            if(i == 0) {\n                eleInputWrapperObj.setAttribute('checked', true);\n            }\n\n            let eleLabelWrapperObj = document.createElement('label');\n            eleLabelWrapperObj.setAttribute('for', 'type_' + i);\n            eleLabelWrapperObj.setAttribute('class', 'form-check-label');\n            eleLabelWrapperObj.appendChild(eleInputWrapperObj);\n\n            let content = document.createTextNode(this.types[i].type);\n            eleLabelWrapperObj.appendChild(content);\n\n            \n            eleLiWrapperObj.appendChild(eleLabelWrapperObj);\n            eleUlWrapperObj.appendChild(eleLiWrapperObj);\n        }\n\n        let btnObj = document.createElement('input');\n        btnObj.setAttribute('type', 'button');\n        btnObj.setAttribute('value', 'Choose');\n        btnObj.onclick = this.eventHandler;\n        //btnObj.setAttribute('onclick', 'objBilling.displayCartForm.call(objBilling)');\n        /*btnObj.onclick = function() {\n            alert(document.querySelector('input[type=\"radio\"]:checked').value);\n\n            this.displayCartForm(document.querySelector('input[type=\"radio\"]:checked').value);\n        }*/\n        wrapperDivObj.appendChild(eleUlWrapperObj);\n        wrapperDivObj.appendChild(btnObj);\n        document.getElementsByClassName('container')[0].appendChild(wrapperDivObj);\n    }\n    \n    eventHandler() {\n        self.displayCartForm(document.querySelector('input[type=\"radio\"]:checked').value);\n    }\n\n    displayCartForm(userType) {\n        if(this.types.indexOf(userType)) {\n            const userTypeObj = this.types[userType];\n\n            let wrapperDivObj = document.createElement('div');\n            wrapperDivObj.setAttribute('id', 'billing-cart-wrapper');\n            wrapperDivObj.setAttribute('class', 'row');\n\n            let eledivWrapperObj = document.createElement('div');\n            eledivWrapperObj.setAttribute('class', 'form-group');\n\n            let eleLabelWrapperObj = document.createElement('label');\n            eleLabelWrapperObj.innerHTML = 'Type: ' + userTypeObj.type;\n            eledivWrapperObj.appendChild(eleLabelWrapperObj);\n        }\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmlsbGluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iaWxsaW5nLmpzPzZiMGIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmlsbGluZyB7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlcykge1xuICAgICAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgICAgIHRoaXMuZGlzcGxheUZvcm0oKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Rm9ybSgpIHtcbiAgICAgICAgbGV0IHdyYXBwZXJEaXZPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlckRpdk9iai5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JpbGxpbmctd3JhcHBlcicpO1xuICAgICAgICAvL3dyYXBwZXJEaXZPYmouc2V0QXR0cmlidXRlKCdjbGFzcycsICdqdW1ib3Ryb24nKTtcblxuICAgICAgICBsZXQgZWxlVWxXcmFwcGVyT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgZWxlVWxXcmFwcGVyT2JqLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncC0wIG0tMCcpO1xuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy50eXBlcykge1xuICAgICAgICAgICAgbGV0IGVsZUxpV3JhcHBlck9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBlbGVMaVdyYXBwZXJPYmouc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWNoZWNrJyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVJbnB1dFdyYXBwZXJPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZWxlSW5wdXRXcmFwcGVyT2JqLnNldEF0dHJpYnV0ZSgnaWQnLCAndHlwZV8nICsgaSk7XG4gICAgICAgICAgICBlbGVJbnB1dFdyYXBwZXJPYmouc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICBlbGVJbnB1dFdyYXBwZXJPYmouc2V0QXR0cmlidXRlKCduYW1lJywgJ2N1c1R5cGVbXScpO1xuICAgICAgICAgICAgZWxlSW5wdXRXcmFwcGVyT2JqLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICAgICAgICAgIGVsZUlucHV0V3JhcHBlck9iai5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tY2hlY2staW5wdXQnKTtcbiAgICAgICAgICAgIGlmKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGVsZUlucHV0V3JhcHBlck9iai5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGVsZUxhYmVsV3JhcHBlck9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBlbGVMYWJlbFdyYXBwZXJPYmouc2V0QXR0cmlidXRlKCdmb3InLCAndHlwZV8nICsgaSk7XG4gICAgICAgICAgICBlbGVMYWJlbFdyYXBwZXJPYmouc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWNoZWNrLWxhYmVsJyk7XG4gICAgICAgICAgICBlbGVMYWJlbFdyYXBwZXJPYmouYXBwZW5kQ2hpbGQoZWxlSW5wdXRXcmFwcGVyT2JqKTtcblxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnR5cGVzW2ldLnR5cGUpO1xuICAgICAgICAgICAgZWxlTGFiZWxXcmFwcGVyT2JqLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVsZUxpV3JhcHBlck9iai5hcHBlbmRDaGlsZChlbGVMYWJlbFdyYXBwZXJPYmopO1xuICAgICAgICAgICAgZWxlVWxXcmFwcGVyT2JqLmFwcGVuZENoaWxkKGVsZUxpV3JhcHBlck9iaik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnRuT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgYnRuT2JqLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgYnRuT2JqLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ2hvb3NlJyk7XG4gICAgICAgIGJ0bk9iai5vbmNsaWNrID0gdGhpcy5ldmVudEhhbmRsZXI7XG4gICAgICAgIC8vYnRuT2JqLnNldEF0dHJpYnV0ZSgnb25jbGljaycsICdvYmpCaWxsaW5nLmRpc3BsYXlDYXJ0Rm9ybS5jYWxsKG9iakJpbGxpbmcpJyk7XG4gICAgICAgIC8qYnRuT2JqLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykudmFsdWUpO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlDYXJ0Rm9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLnZhbHVlKTtcbiAgICAgICAgfSovXG4gICAgICAgIHdyYXBwZXJEaXZPYmouYXBwZW5kQ2hpbGQoZWxlVWxXcmFwcGVyT2JqKTtcbiAgICAgICAgd3JhcHBlckRpdk9iai5hcHBlbmRDaGlsZChidG5PYmopO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWluZXInKVswXS5hcHBlbmRDaGlsZCh3cmFwcGVyRGl2T2JqKTtcbiAgICB9XG4gICAgXG4gICAgZXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBzZWxmLmRpc3BsYXlDYXJ0Rm9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5Q2FydEZvcm0odXNlclR5cGUpIHtcbiAgICAgICAgaWYodGhpcy50eXBlcy5pbmRleE9mKHVzZXJUeXBlKSkge1xuICAgICAgICAgICAgY29uc3QgdXNlclR5cGVPYmogPSB0aGlzLnR5cGVzW3VzZXJUeXBlXTtcblxuICAgICAgICAgICAgbGV0IHdyYXBwZXJEaXZPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdyYXBwZXJEaXZPYmouc2V0QXR0cmlidXRlKCdpZCcsICdiaWxsaW5nLWNhcnQtd3JhcHBlcicpO1xuICAgICAgICAgICAgd3JhcHBlckRpdk9iai5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdycpO1xuXG4gICAgICAgICAgICBsZXQgZWxlZGl2V3JhcHBlck9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlZGl2V3JhcHBlck9iai5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICAgICAgbGV0IGVsZUxhYmVsV3JhcHBlck9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBlbGVMYWJlbFdyYXBwZXJPYmouaW5uZXJIVE1MID0gJ1R5cGU6ICcgKyB1c2VyVHlwZU9iai50eXBlO1xuICAgICAgICAgICAgZWxlZGl2V3JhcHBlck9iai5hcHBlbmRDaGlsZChlbGVMYWJlbFdyYXBwZXJPYmopO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBCaWxsaW5nIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/billing.js\n");

/***/ })

/******/ });