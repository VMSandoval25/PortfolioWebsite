"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/ExperienceSection.tsx":
/*!*************************************!*\
  !*** ./pages/ExperienceSection.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ExperienceSection = (param)=>{\n    let { data } = param;\n    const protocol = \"http://\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"experience\",\n        className: \"bg-black h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"data-testid\": \"timeline-item\",\n                    children: [\n                        item.id % 2 !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"column-left \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-card-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"col-card-title col-card-title-left\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"col-card-para\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined),\n                        item.id % 2 !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"column-right\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-note col-note-right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"column-center\",\n                            children: [\n                                item.id % 2 !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"triangle-left\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, undefined),\n                                item.id % 2 === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"triangle-right\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"circle\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FontAwesomeIcon, {\n                                        className: \"icon\",\n                                        icon: [\n                                            \"fab\",\n                                            item.icon\n                                        ]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/victorsandoval/Desktop/portfolio website/client/pages/ExperienceSection.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExperienceSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExperienceSection);\nvar _c;\n$RefreshReg$(_c, \"ExperienceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9FeHBlcmllbmNlU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBZ0IxQixNQUFNQyxvQkFBc0Q7UUFBQyxFQUFFQyxJQUFJLEVBQUU7SUFDbkUsTUFBTUMsV0FBVztJQUNqQixxQkFDRSw4REFBQ0M7UUFBUUMsSUFBRztRQUFhQyxXQUFVO2tCQUNqQyw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDWkosS0FBS00sSUFBSSxDQUFDQyxNQUFNQyxzQkFFZiw4REFBQ0g7b0JBQWtCSSxlQUFZOzt3QkFFNUJGLEtBQUtKLEtBQUssTUFBTSxtQkFDYiw4REFBQ0U7NEJBQUlELFdBQVU7c0NBQ1gsNEVBQUNDO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ0M7d0NBQUlELFdBQVU7a0RBQXNDRyxLQUFLRzs7Ozs7O2tEQUUxRCw4REFBQ0w7d0NBQUlELFdBQVU7a0RBQ1ZHLEtBQUtHOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFNckJILEtBQUtKLEtBQUssTUFBTSxtQkFDYiw4REFBQ0U7NEJBQUlELFdBQVU7c0NBQ1gsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUNYLDRFQUFDTzs4Q0FBR0osS0FBS0s7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3JCLDhEQUFDUDs0QkFBSUQsV0FBVTs7Z0NBQ2RHLEtBQUtKLEtBQUssTUFBTSxtQkFDVCw4REFBQ0U7b0NBQUlELFdBQVU7Ozs7OztnQ0FFbEJHLEtBQUtKLEtBQUssTUFBTSxtQkFDYiw4REFBQ0U7b0NBQUlELFdBQVU7Ozs7Ozs4Q0FHbkIsOERBQUNDO29DQUFJRCxXQUFVOzhDQUNYLDRFQUFDUzt3Q0FBZ0JULFdBQVU7d0NBQU9VLE1BQU07NENBQUM7NENBQU9QLEtBQUtPO3lDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBL0IxRFAsS0FBS0o7Ozs7Ozs7Ozs7Ozs7OztBQTBDekI7S0FqRE1KO0FBbUROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRXhwZXJpZW5jZVNlY3Rpb24udHN4P2ZlNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhU2Nob29sLCBGYUIsIEZhRmlsZVBkZiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG50eXBlIEV4cGVyaWVuY2VEYXRhID0ge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgRXhwZXJpZW5jZVNlY3Rpb25Qcm9wcyA9IHtcbiAgZGF0YTogRXhwZXJpZW5jZURhdGFbXTsgLy8gUHJvcCBmb3IgcGFzc2luZyBhbiBhcnJheSBvZiBkYXRhIHRvIHRoZSBjb21wb25lbnRcbn07XG5cbmNvbnN0IEV4cGVyaWVuY2VTZWN0aW9uOiBSZWFjdC5GQzxFeHBlcmllbmNlU2VjdGlvblByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBwcm90b2NvbCA9IFwiaHR0cDovL1wiO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiZXhwZXJpZW5jZVwiIGNsYXNzTmFtZT1cImJnLWJsYWNrIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBkYXRhLXRlc3RpZD1cInRpbWVsaW5lLWl0ZW1cIj5cblxuICAgICAgICAgICAge2l0ZW0uaWQgJSAyICE9PSAwICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tbGVmdCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1jYXJkLXRpdGxlIGNvbC1jYXJkLXRpdGxlLWxlZnRcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1jYXJkLXN1YnRpdGxlIGNvbC1jYXJkLXN1YnRpdGxlLWxlZnRcIj57aXRlbS50aXRsZX08L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1jYXJkLXBhcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cIm51bWJlckNpcmNsZVwiIGhyZWY9e3Byb3RvY29sKyBpdGVtLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+e2l0ZW0udXJsfTwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2l0ZW0uaWQgJSAyICE9PSAwICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tcmlnaHRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW5vdGUgY29sLW5vdGUtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tY2VudGVyXCIgPlxuICAgICAgICAgICAge2l0ZW0uaWQgJSAyICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5nbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7aXRlbS5pZCAlIDIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlhbmdsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiaWNvblwiIGljb249e1snZmFiJywgaXRlbS5pY29uXX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlU2VjdGlvbjtcblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkV4cGVyaWVuY2VTZWN0aW9uIiwiZGF0YSIsInByb3RvY29sIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGF0YS10ZXN0aWQiLCJ0aXRsZSIsInAiLCJkYXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ExperienceSection.tsx\n"));

/***/ })

});