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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/useScrollTrigger */ \"./node_modules/@mui/material/useScrollTrigger/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nfunction HideOnScroll(param) {\n    let { children  } = param;\n    _s();\n    const trigger = (0,_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        appear: false,\n        direction: \"down\",\n        in: !trigger,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n        lineNumber: 13,\n        columnNumber: 4\n    }, this);\n}\n_s(HideOnScroll, \"EC2GbbZl9x3XKoXLVx1H89cOBi0=\", false, function() {\n    return [\n        _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = HideOnScroll;\nconst Navbar = (props)=>{\n    _s1();\n    const [clientWindowHeight, setClientWindowHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleScroll = ()=>{\n        setClientWindowHeight(window.scrollY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    });\n    const [backgroundTransparacy, setBackgroundTransparacy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [boxShadow, setBoxShadow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let backgroundTransparacyVar = clientWindowHeight / 600;\n        if (backgroundTransparacyVar < 1) {\n            let boxShadowVar = backgroundTransparacyVar * 0.9;\n            setBackgroundTransparacy(backgroundTransparacyVar);\n            setBoxShadow(boxShadowVar);\n        }\n    }, [\n        clientWindowHeight\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navhover),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HideOnScroll, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    background: \"rgba(255, 255, 255, \".concat(backgroundTransparacy, \")\"),\n                    boxShadow: \"rgb(0 0 0 / \".concat(boxShadow, \") 0px 0px 20px 6px\")\n                },\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/ninjas_logo.png\",\n                                        style: {\n                                            width: \"40px\",\n                                            height: \"auto\"\n                                        },\n                                        alt: \"logo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        fontWeight: \"550\",\n                                        paddingLeft: \"9px\",\n                                        color: \"#51CA58\",\n                                        fontSize: \"1.618em\"\n                                    },\n                                    children: \"Canna.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"Services\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"Pricing\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().singlelink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/about\",\n                                        children: \"Demo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                style: {\n                                    fontWeight: \"550\",\n                                    display: \"flex\",\n                                    alignItems: \"center\"\n                                },\n                                href: \"/becomeapartner\",\n                                children: [\n                                    \"Join Us \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        style: {\n                                            marginLeft: \"4px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 122\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shanon/01ninja/comps/Navbar.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"GdRCYhU9b/BvPjc72R6sxs2ij+w=\");\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"HideOnScroll\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRDQUFFc0IsWUFBVzt3Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEs7SUFyRU16QztNQUFBQTtBQXVFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9OYXZiYXIuanM/YzVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzcydcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvdXNlU2Nyb2xsVHJpZ2dlcic7XG5pbXBvcnQgU2xpZGUgZnJvbSAnQG11aS9tYXRlcmlhbC9TbGlkZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Zhdm9yaXRlJztcblxuXG5mdW5jdGlvbiBIaWRlT25TY3JvbGwoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKCk7XG4gXG4gIHJldHVybihcbiAgIDxTbGlkZSBhcHBlYXI9e2ZhbHNlfSAgZGlyZWN0aW9uPXtcImRvd25cIn0gaW49eyF0cmlnZ2VyfT5cbiAgICAge2NoaWxkcmVufVxuICAgPC9TbGlkZT5cbiAgKTt9XG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjbGllbnRXaW5kb3dIZWlnaHQsIHNldENsaWVudFdpbmRvd0hlaWdodF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICBzZXRDbGllbnRXaW5kb3dIZWlnaHQod2luZG93LnNjcm9sbFkpO1xufTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTsgXG4gIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xufSk7XG5cbmNvbnN0IFtiYWNrZ3JvdW5kVHJhbnNwYXJhY3ksIHNldEJhY2tncm91bmRUcmFuc3BhcmFjeV0gPSB1c2VTdGF0ZSgwKTtcblxuY29uc3QgW2JveFNoYWRvdywgc2V0Qm94U2hhZG93XSA9IHVzZVN0YXRlKDApO1xuXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGxldCBiYWNrZ3JvdW5kVHJhbnNwYXJhY3lWYXIgPSBjbGllbnRXaW5kb3dIZWlnaHQgLyA2MDA7XG5cbiAgaWYgKGJhY2tncm91bmRUcmFuc3BhcmFjeVZhciA8IDEpIHtcbiAgIFxuICAgICAgbGV0IGJveFNoYWRvd1ZhciA9IGJhY2tncm91bmRUcmFuc3BhcmFjeVZhciAqIDAuOTtcbiAgICAgIHNldEJhY2tncm91bmRUcmFuc3BhcmFjeShiYWNrZ3JvdW5kVHJhbnNwYXJhY3lWYXIpO1xuICBcbiAgICAgIHNldEJveFNoYWRvdyhib3hTaGFkb3dWYXIpO1xuICB9XG59LCBbY2xpZW50V2luZG93SGVpZ2h0XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmhvdmVyfT5cbiAgICAgICAgICAgIDxIaWRlT25TY3JvbGw+XG4gICAgICAgIDxuYXYgICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogYHJnYmEoMjU1LCAyNTUsIDI1NSwgJHtiYWNrZ3JvdW5kVHJhbnNwYXJhY3l9KWAsXG4gICAgICBcbiAgICAgICAgYm94U2hhZG93OiBgcmdiKDAgMCAwIC8gJHtib3hTaGFkb3d9KSAwcHggMHB4IDIwcHggNnB4YCxcbiAgICAgIH19XG4gY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbmluamFzX2xvZ28ucG5nXCIgc3R5bGU9e3t3aWR0aDonNDBweCcsIGhlaWdodDonYXV0byd9fSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiBcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0Oic1NTAnLCBwYWRkaW5nTGVmdDonOXB4JywgY29sb3I6JyM1MUNBNTgnLCBmb250U2l6ZTonMS42MThlbSd9fT5DYW5uYS48L3A+ICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW5nbGVsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlbGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+U2VydmljZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbmdsZWxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlByaWNpbmc8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbmdsZWxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkRlbW88L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGU9e3tmb250V2VpZ2h0Oic1NTAnLCBkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLH19IGhyZWY9XCIvYmVjb21lYXBhcnRuZXJcIj5Kb2luIFVzIDxGYXZvcml0ZUljb24gc3R5bGU9e3sgbWFyZ2luTGVmdDonNHB4J319Lz48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvSGlkZU9uU2Nyb2xsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiU2xpZGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhdm9yaXRlSWNvbiIsIkhpZGVPblNjcm9sbCIsImNoaWxkcmVuIiwidHJpZ2dlciIsImFwcGVhciIsImRpcmVjdGlvbiIsImluIiwiTmF2YmFyIiwicHJvcHMiLCJjbGllbnRXaW5kb3dIZWlnaHQiLCJzZXRDbGllbnRXaW5kb3dIZWlnaHQiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kVHJhbnNwYXJhY3kiLCJzZXRCYWNrZ3JvdW5kVHJhbnNwYXJhY3kiLCJib3hTaGFkb3ciLCJzZXRCb3hTaGFkb3ciLCJiYWNrZ3JvdW5kVHJhbnNwYXJhY3lWYXIiLCJib3hTaGFkb3dWYXIiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXZob3ZlciIsIm5hdiIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm5hdmJhciIsImNvbnRlbnQiLCJsb2dvIiwiaHJlZiIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCIsImZvbnRXZWlnaHQiLCJwYWRkaW5nTGVmdCIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5rIiwic2luZ2xlbGluayIsImJ1dHRvbiIsImJ0biIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Navbar.js\n"));

/***/ })

});