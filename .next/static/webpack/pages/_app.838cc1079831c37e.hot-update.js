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

/***/ "./comps/Navbar.js":
/*!*************************!*\
  !*** ./comps/Navbar.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/useScrollTrigger */ \"./node_modules/@mui/material/useScrollTrigger/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nfunction HideOnScroll(param) {\n    let { children  } = param;\n    _s();\n    const trigger = (0,_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        appear: false,\n        direction: \"down\",\n        in: !trigger,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n        lineNumber: 13,\n        columnNumber: 4\n    }, this);\n}\n_s(HideOnScroll, \"EC2GbbZl9x3XKoXLVx1H89cOBi0=\", false, function() {\n    return [\n        _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = HideOnScroll;\nconst Navbar = (props)=>{\n    _s1();\n    const [clientWindowHeight, setClientWindowHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleScroll = ()=>{\n        setClientWindowHeight(window.scrollY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    });\n    const [backgroundTransparacy, setBackgroundTransparacy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [boxShadow, setBoxShadow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let backgroundTransparacyVar = clientWindowHeight / 600;\n        if (backgroundTransparacyVar < 1) {\n            let boxShadowVar = backgroundTransparacyVar * 1;\n            setBackgroundTransparacy(backgroundTransparacyVar);\n            setBoxShadow(boxShadowVar);\n        }\n    }, [\n        clientWindowHeight\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navhover),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HideOnScroll, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    background: \"#E8E6E1\",\n                    boxShadow: \"rgb(0 0 0 / \".concat(boxShadow, \") 0px 0px 10px 6px\")\n                },\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/ninjas_logo.png\",\n                                        style: {\n                                            width: \"40px\",\n                                            height: \"auto\"\n                                        },\n                                        alt: \"logo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        fontWeight: \"550\",\n                                        paddingLeft: \"9px\",\n                                        color: \"#51CA58\",\n                                        fontSize: \"1.618em\"\n                                    },\n                                    children: \"Canna.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"Services\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"Pricing\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"Demo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                style: {\n                                    fontWeight: \"550\",\n                                    display: \"flex\",\n                                    alignItems: \"center\"\n                                },\n                                href: \"/becomeapartner\",\n                                children: [\n                                    \"Join Us \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        style: {\n                                            marginLeft: \"4px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 122\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"GdRCYhU9b/BvPjc72R6sxs2ij+w=\");\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"HideOnScroll\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoSztJQXJFTXpDO01BQUFBO0FBdUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL05hdmJhci5qcz9jNWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSAnQG11aS9tYXRlcmlhbC91c2VTY3JvbGxUcmlnZ2VyJztcbmltcG9ydCBTbGlkZSBmcm9tICdAbXVpL21hdGVyaWFsL1NsaWRlJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRmF2b3JpdGUnO1xuXG5cbmZ1bmN0aW9uIEhpZGVPblNjcm9sbCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoKTtcbiBcbiAgcmV0dXJuKFxuICAgPFNsaWRlIGFwcGVhcj17ZmFsc2V9ICBkaXJlY3Rpb249e1wiZG93blwifSBpbj17IXRyaWdnZXJ9PlxuICAgICB7Y2hpbGRyZW59XG4gICA8L1NsaWRlPlxuICApO31cblxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2NsaWVudFdpbmRvd0hlaWdodCwgc2V0Q2xpZW50V2luZG93SGVpZ2h0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5jb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gIHNldENsaWVudFdpbmRvd0hlaWdodCh3aW5kb3cuc2Nyb2xsWSk7XG59O1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpOyBcbiAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG59KTtcblxuY29uc3QgW2JhY2tncm91bmRUcmFuc3BhcmFjeSwgc2V0QmFja2dyb3VuZFRyYW5zcGFyYWN5XSA9IHVzZVN0YXRlKDApO1xuXG5jb25zdCBbYm94U2hhZG93LCBzZXRCb3hTaGFkb3ddID0gdXNlU3RhdGUoMCk7XG5cblxudXNlRWZmZWN0KCgpID0+IHtcbiAgbGV0IGJhY2tncm91bmRUcmFuc3BhcmFjeVZhciA9IGNsaWVudFdpbmRvd0hlaWdodCAvIDYwMDtcblxuICBpZiAoYmFja2dyb3VuZFRyYW5zcGFyYWN5VmFyIDwgMSkge1xuICAgXG4gICAgICBsZXQgYm94U2hhZG93VmFyID0gYmFja2dyb3VuZFRyYW5zcGFyYWN5VmFyICogMTtcbiAgICAgIHNldEJhY2tncm91bmRUcmFuc3BhcmFjeShiYWNrZ3JvdW5kVHJhbnNwYXJhY3lWYXIpO1xuICBcbiAgICAgIHNldEJveFNoYWRvdyhib3hTaGFkb3dWYXIpO1xuICB9XG59LCBbY2xpZW50V2luZG93SGVpZ2h0XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmhvdmVyfT5cbiAgICAgICAgICAgIDxIaWRlT25TY3JvbGw+XG4gICAgICAgIDxuYXYgICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogYCNFOEU2RTFgLFxuICAgICAgXG4gICAgICAgIGJveFNoYWRvdzogYHJnYigwIDAgMCAvICR7Ym94U2hhZG93fSkgMHB4IDBweCAxMHB4IDZweGAsXG4gICAgICB9fVxuIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL25pbmphc19sb2dvLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzQwcHgnLCBoZWlnaHQ6J2F1dG8nfX0gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFdlaWdodDonNTUwJywgcGFkZGluZ0xlZnQ6JzlweCcsIGNvbG9yOicjNTFDQTU4JywgZm9udFNpemU6JzEuNjE4ZW0nfX0+Q2FubmEuPC9wPiAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlbGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbmdsZWxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlNlcnZpY2VzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW5nbGVsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5QcmljaW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW5nbGVsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5EZW1vPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHN0eWxlPXt7Zm9udFdlaWdodDonNTUwJywgZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyx9fSBocmVmPVwiL2JlY29tZWFwYXJ0bmVyXCI+Sm9pbiBVcyA8RmF2b3JpdGVJY29uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6JzRweCd9fS8+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8L0hpZGVPblNjcm9sbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwidXNlU2Nyb2xsVHJpZ2dlciIsIlNsaWRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGYXZvcml0ZUljb24iLCJIaWRlT25TY3JvbGwiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJhcHBlYXIiLCJkaXJlY3Rpb24iLCJpbiIsIk5hdmJhciIsInByb3BzIiwiY2xpZW50V2luZG93SGVpZ2h0Iiwic2V0Q2xpZW50V2luZG93SGVpZ2h0IiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmFja2dyb3VuZFRyYW5zcGFyYWN5Iiwic2V0QmFja2dyb3VuZFRyYW5zcGFyYWN5IiwiYm94U2hhZG93Iiwic2V0Qm94U2hhZG93IiwiYmFja2dyb3VuZFRyYW5zcGFyYWN5VmFyIiwiYm94U2hhZG93VmFyIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2aG92ZXIiLCJuYXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJuYXZiYXIiLCJjb250ZW50IiwibG9nbyIsImhyZWYiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJmb250V2VpZ2h0IiwicGFkZGluZ0xlZnQiLCJjb2xvciIsImZvbnRTaXplIiwibGluayIsInNpbmdsZWxpbmsiLCJidXR0b24iLCJidG4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/Navbar.js\n"));

/***/ })

});