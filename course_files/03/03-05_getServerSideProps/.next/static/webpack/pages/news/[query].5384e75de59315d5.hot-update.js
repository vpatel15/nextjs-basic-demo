"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[query]",{

/***/ "./pages/news/[query].js":
/*!*******************************!*\
  !*** ./pages/news/[query].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\nvar __N_SSP = true;\nfunction News(param) {\n    var results = param.results, query = param.query;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Search: \",\n                    query\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-05_getServerSideProps/pages/news/[query].js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: result.url,\n                            target: \"_blank\",\n                            rel: \"noopener norefferer\",\n                            children: result.title\n                        }, void 0, false, {\n                            fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-05_getServerSideProps/pages/news/[query].js\",\n                            lineNumber: 10,\n                            columnNumber: 41\n                        }, _this)\n                    }, result.uri, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-05_getServerSideProps/pages/news/[query].js\",\n                        lineNumber: 10,\n                        columnNumber: 20\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-05_getServerSideProps/pages/news/[query].js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-05_getServerSideProps/pages/news/[query].js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this);\n};\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1txdWVyeV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE0Qzs7QUFHN0IsU0FBU0MsSUFBSSxDQUFDLEtBQWtCLEVBQUU7UUFBbEJDLE9BQU8sR0FBVCxLQUFrQixDQUFoQkEsT0FBTyxFQUFFQyxLQUFLLEdBQWhCLEtBQWtCLENBQVBBLEtBQUs7O0lBQ3pDLHFCQUNFLDhEQUFDSCwwREFBTTs7MEJBQ0wsOERBQUNJLElBQUU7O29CQUFDLFVBQVE7b0JBQUNELEtBQUs7Ozs7OztvQkFBTTswQkFDeEIsOERBQUNFLElBQUU7MEJBQ0FILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxNQUFNLEVBQUk7b0JBQ3JCLHFCQUFPLDhEQUFDQyxJQUFFO2tDQUFrQiw0RUFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFFSCxNQUFNLENBQUNJLEdBQUc7NEJBQUVDLE1BQU0sRUFBQyxRQUFROzRCQUFDQyxHQUFHLEVBQUMscUJBQXFCO3NDQUFFTixNQUFNLENBQUNPLEtBQUs7Ozs7O2lDQUFLO3VCQUE3RlAsTUFBTSxDQUFDUSxHQUFHOzs7OzZCQUF3RixDQUFDO2lCQUNwSCxDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0UsQ0FDVjtDQUNKO0FBWHVCZCxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW3F1ZXJ5XS5qcz85Yjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gXCIuLi9hcGlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKHsgcmVzdWx0cywgcXVlcnkgfSkge1xuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5TZWFyY2g6IHtxdWVyeX08L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4oPGxpIGtleT17cmVzdWx0LnVyaX0+PGEgaHJlZj17cmVzdWx0LnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZmZXJlclwiPntyZXN1bHQudGl0bGV9PC9hPjwvbGk+KVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG4vLyB0byByZWdpc3RlciBmb3IgYSBuZXcgTmV3IFlvcmsgVGltZXMgQVBJIEtFWSwgdmlzaXQgOiBcbmNvbnN0IEFQSV9LRVkgPSBcIjloVXZPcUdHZG5DQnZHS2c0RUIzTDdtR2RCQzhoS0tKXCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuICAvLyBUaGUgdmFsdWUgb2YgdGhlIGBwcm9wc2Aga2V5IHdpbGwgYmVcbiAgLy8gIHBhc3NlZCB0byB0aGUgYEhvbWVgIGNvbXBvbmVudFxuICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT0ke3BhcmFtcy5xdWVyeX0mYXBpLWtleT0ke0FQSV9LRVl9YFxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoKFVSTClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgICByZXN1bHRzLCBcbiAgICAgICAgcXVlcnk6IHBhcmFtcy5xdWVyeVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJOZXdzIiwicmVzdWx0cyIsInF1ZXJ5IiwiaDEiLCJ1bCIsIm1hcCIsInJlc3VsdCIsImxpIiwiYSIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJ0aXRsZSIsInVyaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/[query].js\n");

/***/ })

});