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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    background-color: rgb(24, 25, 29);\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    color: white;\\r\\n    overflow-y: hidden;\\r\\n}\\r\\n \\r\\n#Zero_layout {\\r\\n    position: absolute;\\r\\n\\r\\n    margin-top: calc(50vh - 270px); /* - 200px  */\\r\\n    /* margin-left: calc(50vw - 255px); */\\r\\n    left: 50%;\\r\\n    margin-left: -255px;\\r\\n\\r\\n    width: 490px;\\r\\n    height: 500px;\\r\\n\\r\\n    padding: 0;\\r\\n    /* padding-right: 20px; */\\r\\n    text-align: center;\\r\\n    z-index: 1;\\r\\n    /* background-color: rgba(80, 177, 161, 0.3); */\\r\\n    border-radius: 50%;\\r\\n    z-index: 0;\\r\\n}\\r\\n\\r\\n#First_layout {\\r\\n    position: absolute;\\r\\n\\r\\n    margin-top: calc(50vh - 220px); /* - 200px  */\\r\\n    margin-left: calc(50vw - 210px);\\r\\n    width: 400px;\\r\\n    height: 400px;\\r\\n\\r\\n    padding: 0;\\r\\n    /* padding-right: 20px; */\\r\\n    text-align: center;\\r\\n    z-index: 1;\\r\\n  \\r\\n    /* background-color: rgba(101, 97, 155, 0.3); */\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n#Second_layout {\\r\\n    position: absolute;\\r\\n\\r\\n    margin-top: calc(50vh - 170px); /* - 150px  */\\r\\n    margin-left: calc(50vw - 155px);\\r\\n    width: 290px;\\r\\n    height: 300px;\\r\\n\\r\\n    padding: 0;\\r\\n    /* padding-right: 20px; */\\r\\n    text-align: center;\\r\\n    z-index: 2;\\r\\n\\r\\n    /* background-color: rgba(149, 212, 136, 0.2); */\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n#Zero_HContainer>span {\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n    position: absolute;\\r\\n    width: 20px;\\r\\n    height: 250px;\\r\\n    \\r\\n    transform-origin: bottom center;\\r\\n}\\r\\n\\r\\n#First_HContainer>span {\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n    position: absolute;\\r\\n    width: 20px;\\r\\n    height: 200px;\\r\\n    \\r\\n    transform-origin: bottom center;\\r\\n}\\r\\n\\r\\n#Second_HContainer>span {\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n    position: absolute;\\r\\n    width: 20px;\\r\\n    height: 150px;\\r\\n    \\r\\n    transform-origin: bottom center;\\r\\n}\\r\\n\\r\\n/*------- Authentication form ------------------*/\\r\\n\\r\\n#auth_container {\\r\\n    position: absolute;\\r\\n    z-index: 3;\\r\\n    width: 350px;\\r\\n    height: 250px;\\r\\n    /* margin-left: calc(50vw - 175px); */\\r\\n    left: 50%;\\r\\n    margin-left: -175px;\\r\\n    margin-top: calc(50vh - 125px); \\r\\n    background-color: rgba(213, 205, 228, 0.9);\\r\\n    border-radius: 8px;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    -moz-box-sizing: border-box;\\r\\n    box-sizing: border-box;\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n    display: block;\\r\\n    text-align: center;\\r\\n    /* overflow: hidden; */\\r\\n}\\r\\n\\r\\n#container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-end;\\r\\n    align-items: center;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n #form_container {\\r\\n    /* background-color: rgba(116, 41, 41, .5); */\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    \\r\\n} \\r\\n\\r\\n#button_container {\\r\\n    margin: 0 auto;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    border-radius: 15px;\\r\\n    background: transparent; \\r\\n    \\r\\n}\\r\\n\\r\\n#button_signin {\\r\\n    width: 50%;\\r\\n    height: 50px;\\r\\n    border: 0px solid transparent;\\r\\n    border-bottom-left-radius: 8px;\\r\\n    background-color: rgba(107, 46, 66, 0.3);\\r\\n    color: white;\\r\\n    font-size: 20px;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n#button_signin:hover {\\r\\n    transition: 0.3s;\\r\\n    background-color: rgb(126, 56, 79);\\r\\n}\\r\\n\\r\\n#button_register {\\r\\n    width: 50%;\\r\\n    height: 50px;\\r\\n    border: 0px solid transparent;\\r\\n    border-bottom-right-radius: 8px;\\r\\n    background-color: rgba(129, 64, 49, 0.3);\\r\\n    color: white;\\r\\n    font-size: 20px;\\r\\n    outline: none;\\r\\n\\r\\n}\\r\\n\\r\\n#button_register:hover {\\r\\n    transition: 0.3s;\\r\\n    background-color: rgb(161, 90, 73);\\r\\n}\\r\\n\\r\\n#Main_form {\\r\\n    /* background-color: rgba(1, 1, 1, 0.3); */\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n#email {\\r\\n    background: transparent;\\r\\n    border: 0;\\r\\n    border-bottom: 1px solid white;\\r\\n    box-sizing: border-box;\\r\\n    color: rgb(24, 25, 29);\\r\\n    display: block;\\r\\n    font-size: 16px;\\r\\n    outline: none !important;\\r\\n    opacity: 1;\\r\\n    padding-bottom: 1px;\\r\\n    margin-bottom: 3%;\\r\\n    width: 80%;\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n}\\r\\n\\r\\n#pswd{\\r\\n    background: transparent;\\r\\n    border: 0;\\r\\n    border-bottom: 1px solid white;\\r\\n    box-sizing: border-box;\\r\\n    color: rgb(24, 25, 29);\\r\\n    display: block;\\r\\n    font-size: 16px;\\r\\n    outline: none !important;\\r\\n    opacity: 1;\\r\\n    padding-bottom: 1px;\\r\\n    margin-bottom: 15px;\\r\\n    width: 80%;\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n}\\r\\n\\r\\n#link {\\r\\n    text-decoration: none;\\r\\n    color: rgb(141, 144, 155);\\r\\n    font: 20px Monaco, MonoSpace;\\r\\n}\\r\\n\\r\\n#link:hover {\\r\\n    color: rgb(24, 25, 29);\\r\\n}\\r\\n  \\r\\n/*-----------------------------------------------*/\\r\\n\\r\\n@media screen and (max-width: 600px) {\\r\\n\\r\\n    body {\\r\\n        overflow: hidden;\\r\\n    }\\r\\n\\r\\n    #Zero_layout {\\r\\n        position: absolute;\\r\\n    \\r\\n        top: 50%;\\r\\n        margin-top: -180px; /* +20px cause animation goes beyond  */\\r\\n        /* margin-left: calc(50vw - 255px); */\\r\\n        left: 50%;\\r\\n        margin-left: -170px;\\r\\n    \\r\\n        width: 320px;\\r\\n        height: 320px;\\r\\n    \\r\\n        padding: 0;\\r\\n        text-align: center;\\r\\n        z-index: 1;\\r\\n        /* background-color: rgba(80, 177, 161, 0.3); */\\r\\n        border-radius: 50%;\\r\\n        z-index: 0;\\r\\n    }\\r\\n\\r\\n    #Zero_HContainer>span {\\r\\n        font: 20px Monaco, MonoSpace;\\r\\n        position: absolute;\\r\\n        width: 20px;\\r\\n        height: 160px;\\r\\n        \\r\\n        transform-origin: bottom center;\\r\\n    }\\r\\n    \\r\\n    #First_layout {\\r\\n        position: absolute;\\r\\n\\r\\n        top: 50%;\\r\\n        margin-top: -130px; /* +20px cause animation goes beyond  */\\r\\n        left: 50%;\\r\\n        margin-left: -120px;\\r\\n\\r\\n        width: 220px;\\r\\n        height: 220px;\\r\\n    \\r\\n        padding: 0;\\r\\n        /* padding-right: 20px; */\\r\\n        text-align: center;\\r\\n        z-index: 1;\\r\\n      \\r\\n        /* background-color: rgba(101, 97, 155, 0.3); */\\r\\n        border-radius: 50%;\\r\\n    }\\r\\n\\r\\n    #First_HContainer>span {\\r\\n        font: 20px Monaco, MonoSpace;\\r\\n        position: absolute;\\r\\n        width: 20px;\\r\\n        height: 110px;\\r\\n        \\r\\n        transform-origin: bottom center;\\r\\n    }\\r\\n    \\r\\n    #Second_layout {\\r\\n        position: absolute;\\r\\n    \\r\\n        top: 50%;\\r\\n        margin-top: -80px; /* +20px cause animation goes beyond  */\\r\\n        left: 50%;\\r\\n        margin-left: -70px;\\r\\n\\r\\n        width: 120px;\\r\\n        height: 120px;\\r\\n    \\r\\n        padding: 0;\\r\\n        /* padding-right: 20px; */\\r\\n        text-align: center;\\r\\n        z-index: 2;\\r\\n    \\r\\n        /* background-color: rgba(149, 212, 136, 0.2); */\\r\\n        border-radius: 50%;\\r\\n    }\\r\\n\\r\\n    #Second_HContainer>span {\\r\\n        font: 20px Monaco, MonoSpace;\\r\\n        position: absolute;\\r\\n        width: 20px;\\r\\n        height: 60px;\\r\\n        \\r\\n        transform-origin: bottom center;\\r\\n    }\\r\\n\\r\\n    #auth_container {\\r\\n        position: absolute;\\r\\n        z-index: 3;\\r\\n        width: 310px;\\r\\n        height: 250px;\\r\\n        /* margin-left: calc(50vw - 175px); */\\r\\n        left: 50%;\\r\\n        margin-left: -155px;\\r\\n        margin-top: calc(50vh - 125px); \\r\\n    }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/main.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet arr0 = []\r\nlet arr1 = []\r\nlet arr2 = []\r\n\r\nlet degreesArray = [\r\n    0, 20, 40, 60, 80, 100,\r\n    120, 140, 160, 180, 200, 220, \r\n    240, 260, 280, 300, 320, 340\r\n]\r\n\r\nfor(let i=1; i<19; i++) {\r\n    arr0.push(document.getElementById(`Zero_char${i}`))\r\n    arr1.push(document.getElementById(`First_char${i}`))\r\n    arr2.push(document.getElementById(`Second_char${i}`))\r\n}\r\n\r\nfunction circleTextAnimation(Arr, DegArr, Duration, Direction) {\r\n    for (let i = 0; i < Arr.length; i++) {\r\n        Arr[i].animate(\r\n        [\r\n            {transform: `rotate(${DegArr[i]}deg)`},\r\n            {transform: `rotate(${DegArr[i]+360}deg)`}\r\n        ], \r\n        { duration: Duration, iterations: Infinity, direction: Direction}\r\n        )  \r\n    }\r\n    \r\n}\r\n\r\nwindow.requestAnimationFrame(()=> {\r\n    return (\r\n        circleTextAnimation(arr0, degreesArray, 31000, 'normal'),\r\n        circleTextAnimation(arr1, degreesArray, 31000, 'reverse'),\r\n        circleTextAnimation(arr2, degreesArray, 26000, 'normal')\r\n    )\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ })

/******/ });