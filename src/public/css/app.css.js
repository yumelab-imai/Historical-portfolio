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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/sass/app.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/sass/app.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 14px;\n}\n\nbody {\n  color: #222;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  margin: 0;\n}\n\nmain {\n  margin-bottom: 6rem;\n  margin-top: 7rem;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1200px;\n  padding: 0 2%;\n}\n\n.container--small {\n  margin: 0 auto;\n  max-width: 600px;\n}\n\n.grid {\n  display: grid;\n  grid-gap: 0 2%;\n  grid-template-columns: repeat(auto-fit, 32%);\n}\n\n.grid__item {\n  margin-bottom: 2rem;\n}\n\n.navbar {\n  -webkit-box-align: center;\n  align-items: center;\n  background: rgb(211, 31, 91);\n  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: flex;\n  height: 4rem;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  left: 0;\n  padding: 2%;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 3;\n}\n\n.navbar__brand {\n  color: inherit;\n  font-family: Merriweather, serif;\n  font-weight: bold;\n  font-size: 1.2rem;\n  text-decoration: none;\n}\n\n.navbar__brand:visited {\n  color: inherit;\n}\n\n.navbar__brand:hover {\n  opacity: 0.6;\n}\n\n.navbar__menu {\n  -webkit-box-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n\n.navbar__item {\n  margin-left: 1rem;\n}\n\n.photo {\n  position: relative;\n}\n\n.photo:hover .photo__overlay {\n  visibility: visible;\n}\n\n.photo:nth-child(4n+1) .photo__wrapper {\n  background: #DBBCD5;\n}\n\n.photo:nth-child(4n+2) .photo__wrapper {\n  background: #DBDBBC;\n}\n\n.photo:nth-child(4n+3) .photo__wrapper {\n  background: #BCDBC8;\n}\n\n.photo:nth-child(4n) .photo__wrapper {\n  background: #BCC8DB;\n}\n\n.photo__wrapper {\n  overflow: hidden;\n  padding-top: 75%;\n  position: relative;\n}\n\n.photo__image {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.photo__overlay {\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  color: #fff;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  left: 0;\n  padding: 1rem;\n  position: absolute;\n  right: 0;\n  text-decoration: none;\n  top: 0;\n  visibility: hidden;\n}\n\n.photo__controls {\n  text-align: right;\n}\n\n.photo__action {\n  background: #fff;\n  border: 0;\n  border-radius: 0.25rem;\n  color: #222;\n  cursor: pointer;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1;\n  margin-left: 0.25rem;\n  opacity: 0.8;\n  outline: none;\n  padding: 0.5em 0.75em;\n}\n\n.photo__action:hover {\n  opacity: 1;\n}\n\n.photo__action--like .icon {\n  color: #e4406f;\n  margin-right: 0.5em;\n}\n\n.photo__action--liked {\n  background: #e4406f;\n  color: #fff;\n}\n\n.photo__action--liked .icon {\n  color: #fff;\n}\n\n.photo-detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.photo-detail--column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n}\n\n.photo-detail--column .photo-detail__pane {\n  width: 100%;\n}\n\n.photo-detail--column .photo-detail__image {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out;\n}\n\n.photo-detail__pane {\n  width: 49%;\n}\n\n.photo-detail__image {\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  margin-bottom: 1.5rem;\n}\n\n.photo-detail__image figcaption {\n  margin-top: 0.5rem;\n}\n\n.photo-detail__title {\n  font-size: 1.2rem;\n  margin: 1.5rem 0;\n}\n\n.photo-detail__title .icon {\n  margin-right: 0.5em;\n}\n\n.photo-detail__comments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.photo-detail__commentItem {\n  border-bottom: 1px solid #dedede;\n  margin-bottom: 1.5rem;\n  padding: 0 0 1.5rem 0;\n}\n\n.photo-detail__commentBody {\n  margin: 0 0 1rem 0;\n}\n\n.photo-detail__commentInfo {\n  color: #8a8a8a;\n  margin: 0;\n}\n\n.photo-form {\n  background: #fff;\n  border-radius: 0.25rem;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n  max-height: 75vh;\n  max-width: 600px;\n  overflow: scroll;\n  padding: 1.5rem;\n  position: absolute;\n  right: 2%;\n  top: 3.5rem;\n  width: 90%;\n}\n\n.button {\n  border: 1px solid #dedede;\n  border-radius: 0.25rem;\n  color: #8a8a8a;\n  cursor: pointer;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1;\n  outline: none;\n  padding: 0.5rem 0.75rem;\n  text-decoration: none;\n  -webkit-transition: border-color 300ms ease-in-out, color 300ms ease-in-out;\n  transition: border-color 300ms ease-in-out, color 300ms ease-in-out;\n}\n\n.button:hover {\n  border-color: #333;\n  color: inherit;\n}\n\n.button .icon {\n  margin-right: 0.5em;\n}\n\n.button--link {\n  border: 0;\n}\n\n.button--inverse {\n  background: #222;\n  border-color: #222;\n  color: #fff;\n  -webkit-transition: opacity 300ms ease-in-out;\n  transition: opacity 300ms ease-in-out;\n}\n\n.button--inverse:hover {\n  background: #222;\n  color: #fff;\n  opacity: 0.8;\n}\n\n.button--fluid {\n  width: 100%;\n}\n\n.button--like .icon {\n  color: #e4406f;\n}\n\n.button--liked {\n  background: #e4406f;\n  border-color: #e4406f;\n  color: #fff;\n}\n\n.button--liked .icon {\n  color: #fff;\n}\n\n.button--liked:hover {\n  border-color: #e4406f;\n  color: #fff;\n  opacity: 0.8;\n}\n\n.form__item {\n  border: 1px solid #dedede;\n  border-radius: 0.25rem;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.5em 0.75em;\n  width: 100%;\n}\n\n.form label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.form__output {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n.form__button {\n  text-align: right;\n}\n\n.tab {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.tab__item {\n  border-bottom: 2px solid #dedede;\n  color: #8a8a8a;\n  cursor: pointer;\n  margin: 0 1rem 0 0;\n  padding: 1rem;\n}\n\n.tab__item--active {\n  border-bottom: 2px solid #222;\n  color: #222;\n  font-weight: bold;\n}\n\n.footer {\n  -webkit-box-align: center;\n  align-items: center;\n  border-top: 1px solid #f1f1f1;\n  display: -webkit-box;\n  display: flex;\n  height: 5rem;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.errors {\n  border: 1px solid #c7004c;\n  border-radius: 0.25rem;\n  color: #c7004c;\n  margin-bottom: 1rem;\n}\n\n.pagination {\n  text-align: right;\n}\n\n.panel {\n  border: 1px solid #dedede;\n  margin-top: 1rem;\n  padding: 1.5rem;\n}\n\n.title {\n  font-size: 1.25rem;\n  font-weight: bold;\n  margin: 0 0 1rem 0;\n}\n\n.loader {\n  -webkit-box-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.loader__item--heart {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -webkit-transform-origin: 32px 32px;\n  transform-origin: 32px 32px;\n}\n\n.loader__item--heart div {\n  top: 23px;\n  left: 19px;\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  background: #e4406f;\n  -webkit-animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.loader__item--heart div:after,\n.loader__item--heart div:before {\n  content: \" \";\n  position: absolute;\n  display: block;\n  width: 26px;\n  height: 26px;\n  background: #e4406f;\n}\n\n.loader__item--heart div:before {\n  left: -17px;\n  border-radius: 50% 0 0 50%;\n}\n\n.loader__item--heart div:after {\n  top: -17px;\n  border-radius: 50% 50% 0 0;\n}\n\n@-webkit-keyframes lds-heart {\n  0% {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n  5% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n  39% {\n    -webkit-transform: scale(0.85);\n    transform: scale(0.85);\n  }\n  45% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  60% {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n  100% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n@keyframes lds-heart {\n  0% {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n  5% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n  39% {\n    -webkit-transform: scale(0.85);\n    transform: scale(0.85);\n  }\n  45% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  60% {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n  100% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n.message {\n  background: #D7F9EE;\n  border: 1px solid #41e2b2;\n  border-radius: 0.25rem;\n  color: #117355;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Merriweather';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/merriweather/v28/u-440qyriQwlOrhSvowK_l5-cSZMdeX3rsHo.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n/* cyrillic */\n@font-face {\n  font-family: 'Merriweather';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/merriweather/v28/u-440qyriQwlOrhSvowK_l5-eCZMdeX3rsHo.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* vietnamese */\n@font-face {\n  font-family: 'Merriweather';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/merriweather/v28/u-440qyriQwlOrhSvowK_l5-cyZMdeX3rsHo.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Merriweather';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/merriweather/v28/u-440qyriQwlOrhSvowK_l5-ciZMdeX3rsHo.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Merriweather';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/merriweather/v28/u-440qyriQwlOrhSvowK_l5-fCZMdeX3rg.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF;\n}\n\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0370-03FF;\n}\n\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./resources/sass/app.css":
/*!********************************!*\
  !*** ./resources/sass/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!./app.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/sass/app.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/sass/app.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/resources/sass/app.css */"./resources/sass/app.css");


/***/ })

/******/ });