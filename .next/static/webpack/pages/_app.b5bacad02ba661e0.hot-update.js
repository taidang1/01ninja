"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comps/Footer.js":
/*!*************************!*\
  !*** ./comps/Footer.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Footer.module.css */ \"./styles/Footer.module.css\");\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFirestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useFirestore */ \"./hooks/useFirestore.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Footer = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { addDocument , response  } = (0,_hooks_useFirestore__WEBPACK_IMPORTED_MODULE_2__.useFirestore)(\"customerInfo\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        addDocument({\n            email\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (response.success) {\n            console.log(\"ok\");\n            setEmail(\"\");\n        }\n    }, [\n        response.success\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Company name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tiendang/Documents/GitHub/01ninja/comps/Footer.js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            required: true,\n                            onChange: (e)=>setCompanyName(e.target.value),\n                            value: companyName\n                        }, void 0, false, {\n                            fileName: \"/Users/tiendang/Documents/GitHub/01ninja/comps/Footer.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tiendang/Documents/GitHub/01ninja/comps/Footer.js\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tiendang/Documents/GitHub/01ninja/comps/Footer.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/tiendang/Documents/GitHub/01ninja/comps/Footer.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tiendang/Documents/GitHub/01ninja/comps/Footer.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Footer, \"dm75mXOugvx7k68HEXJaQHjF1sg=\", false, function() {\n    return [\n        _hooks_useFirestore__WEBPACK_IMPORTED_MODULE_2__.useFirestore\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9Gb290ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUNOO0FBQ1M7QUFHcEQsTUFBTUksU0FBUyxJQUFNOztJQUNqQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFFbkMsTUFBTSxFQUFFSyxZQUFXLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxpRUFBWUEsQ0FBQztJQUUvQyxNQUFNTSxlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJKLFlBQVk7WUFDUkY7UUFDSjtJQUNKO0lBRUFKLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJTyxTQUFTSSxPQUFPLEVBQUU7WUFDbEJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaUixTQUFTO1FBQ2IsQ0FBQztJQUNMLEdBQUc7UUFBQ0UsU0FBU0ksT0FBTztLQUFDO0lBRXJCLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFXaEIseUVBQWE7a0JBQ3pCLDRFQUFDa0I7WUFBS0MsVUFBVVY7c0JBQ1osNEVBQUNNOzBCQUNHLDRFQUFDSztvQkFBTUMsT0FBTzt3QkFBQ0MsU0FBUTt3QkFBUUMsZUFBYztvQkFBUTs7c0NBQ2pELDhEQUFDQztzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDQzs0QkFDR0MsTUFBSzs0QkFDTEMsUUFBUTs0QkFDUkMsVUFBVSxDQUFDbEIsSUFBTW1CLGVBQWVuQixFQUFFb0IsTUFBTSxDQUFDQyxLQUFLOzRCQUM5Q0EsT0FBT0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQztHQXBDTTVCOztRQUdnQ0QsNkRBQVlBOzs7S0FINUNDO0FBc0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL0Zvb3Rlci5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZpcmVzdG9yZSB9IGZyb20gJy4uL2hvb2tzL3VzZUZpcmVzdG9yZSdcblxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IHsgYWRkRG9jdW1lbnQsIHJlc3BvbnNlIH0gPSB1c2VGaXJlc3RvcmUoJ2N1c3RvbWVySW5mbycpXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYWRkRG9jdW1lbnQoe1xuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ29rJylcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKVxuICAgICAgICB9XG4gICAgfSwgW3Jlc3BvbnNlLnN1Y2Nlc3NdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbXBhbnkgbmFtZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZpcmVzdG9yZSIsIkZvb3RlciIsImVtYWlsIiwic2V0RW1haWwiLCJhZGREb2N1bWVudCIsInJlc3BvbnNlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb290ZXIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInNldENvbXBhbnlOYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJjb21wYW55TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Footer.js\n"));

/***/ })

});