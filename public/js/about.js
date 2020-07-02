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

/***/ "./resources/js/components/about.js":
/*!******************************************!*\
  !*** ./resources/js/components/about.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "about-page",
  data: function data() {
    return {
      'title': 'welcom to Laravel from JS'
    };
  },
  methods: {
    log: function log(message) {
      console.log(message);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/main.js":
/*!*****************************************!*\
  !*** ./resources/js/components/main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "main-page",
  // components: {},
  data: function data() {
    return {
      dynamicWatchers: {},
      title: 'Test'
    };
  },
  // watch: {},
  // computed: {},
  // methods: {},
  // mounted: function () {
  //     console.log(1);
  // },
  created: function created() {
    console.log(1); // Dynamic Watchers for tour
    // Reason: Once tour is disabled it is not required to enable it.
    // So, watcher is required for just disabling it.
    // this.dynamicWatchers.windowWidth = this.$watch('$store.state.windowWidth', (val) => {
    //     if (val < 1200) {
    //         this.disableThemeTour = true
    //         this.dynamicWatchers.windowWidth()
    //     }
    // })
  } // beforeDestroy () {
  //     Object.keys(this.dynamicWatchers).map(i => {
  //         this.dynamicWatchers[i]()
  //         delete this.dynamicWatchers[i]
  //     })
  // }

});

/***/ }),

/***/ "./resources/js/pages/about.js":
/*!*************************************!*\
  !*** ./resources/js/pages/about.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Component/about.js */ "./resources/js/components/about.js");

Container.provide({
  boot: function boot(_ref) {
    var Vue = _ref.Vue,
        store = _ref.store,
        content = _ref.content;
    Vue.component('about-page', _Component_about_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
});

/***/ }),

/***/ "./resources/js/pages/main.js":
/*!************************************!*\
  !*** ./resources/js/pages/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Component/main.js */ "./resources/js/components/main.js");

Container.provide({
  boot: function boot(_ref) {
    var Vue = _ref.Vue,
        store = _ref.store,
        content = _ref.content;
    console.log(content);
    Vue.component('main-page', _Component_main_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
});

/***/ }),

/***/ 1:
/*!************************************************************************!*\
  !*** multi ./resources/js/pages/about.js ./resources/js/pages/main.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/fullstack.blog/resources/js/pages/about.js */"./resources/js/pages/about.js");
module.exports = __webpack_require__(/*! /var/www/html/fullstack.blog/resources/js/pages/main.js */"./resources/js/pages/main.js");


/***/ })

/******/ });