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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/no04_imageSlider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/no04_imageSlider.js":
/*!************************************!*\
  !*** ./src/js/no04_imageSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// jQueryを使いたい場合は以下のコメントを解除してください。\n// import $ from 'jquery'\nconst wrapper = document.querySelector('.wrapper');\nconst imageSliderBody = document.querySelector('.image-slider__body');\nconst imageSliderItems = document.querySelectorAll('.image-slider__item');\nconst prevBtn = document.querySelector('.btn.-prev');\nconst nextBtn = document.querySelector('.btn.-next');\nconst SLIDER_ITEM_WIDTH = 400;\nconst SLIDER_ALL_ITEM_WIDTH = SLIDER_ITEM_WIDTH * imageSliderItems.length;\nlet current = 0;\n\nconst isRightEnd = argCurrent => SLIDER_ALL_ITEM_WIDTH - SLIDER_ITEM_WIDTH === -1 * argCurrent;\n\nconst isLeftEnd = argCurrent => -1 * argCurrent === 0;\n\nconst isEnd = (argCurrent, direction) => direction === 'next' && isRightEnd(argCurrent) || direction === 'prev' && isLeftEnd(argCurrent);\n\nconst moveImage = (argCurrent, direction) => {\n  imageSliderBody.style.left = `${argCurrent + (direction === 'next' ? -1 * SLIDER_ITEM_WIDTH : SLIDER_ITEM_WIDTH)}px`;\n};\n\nconst updateIndicator = (argCurrent, argIndicators, direction) => {\n  const indicatorPosition = -1 * argCurrent / SLIDER_ITEM_WIDTH;\n  argIndicators[indicatorPosition - (direction === 'next' ? 1 : -1)].classList.toggle('-active');\n  argIndicators[indicatorPosition].classList.toggle('-active');\n};\n\nconst updateCurrentPosition = elm => {\n  current = parseInt(elm.style.left.replace('px', ''), 10);\n};\n\nconst indicator = document.createElement('div');\nimageSliderItems.forEach(() => {\n  indicator.appendChild(document.createElement('span'));\n});\nconst indicators = indicator.querySelectorAll('span');\nindicator.classList.add('indicatorWrapper');\nwrapper.appendChild(indicator);\nimageSliderBody.style.left = '0px';\nindicators[0].classList.add('-active');\nprevBtn.addEventListener('click', () => {\n  if (!isEnd(current, 'prev')) {\n    moveImage(current, 'prev');\n    updateCurrentPosition(imageSliderBody);\n    updateIndicator(current, indicators, 'prev');\n  }\n});\nnextBtn.addEventListener('click', () => {\n  if (!isEnd(current, 'next')) {\n    moveImage(current, 'next');\n    updateCurrentPosition(imageSliderBody);\n    updateIndicator(current, indicators, 'next');\n  }\n});\n\n//# sourceURL=webpack:///./src/js/no04_imageSlider.js?");

/***/ })

/******/ });