"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DownloadCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DownloadCode */ \"(app-pages-browser)/./src/components/DownloadCode.tsx\");\n/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Editor */ \"(app-pages-browser)/./src/components/Editor.tsx\");\n/* harmony import */ var _components_LangChoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LangChoose */ \"(app-pages-browser)/./src/components/LangChoose.tsx\");\n/* harmony import */ var _components_ThemeChoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ThemeChoose */ \"(app-pages-browser)/./src/components/ThemeChoose.tsx\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Input */ \"(app-pages-browser)/./src/components/Input.tsx\");\n/* harmony import */ var _components_Output__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Output */ \"(app-pages-browser)/./src/components/Output.tsx\");\n/* harmony import */ var _lib_lang_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/lang-model */ \"(app-pages-browser)/./src/lib/lang-model.ts\");\n/* harmony import */ var _lib_theme_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/theme-model */ \"(app-pages-browser)/./src/lib/theme-model.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            value: 1,\n            label: \"C\"\n        }\n    ]);\n    const [chosenTheme, setChosenTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            value: 16,\n            label: \"Github\"\n        }\n    ]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        compile_status: \"OK\",\n        run_status: {\n            output: \"\",\n            status: \"\",\n            status_detail: \"\",\n            time_used: 0,\n            memory_used: 0\n        }\n    });\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_lang_model__WEBPACK_IMPORTED_MODULE_8__[\"default\"][language[0].label].boilerplate);\n    const [compiling, setCompiling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_lang_model__WEBPACK_IMPORTED_MODULE_8__[\"default\"][language[0].label].mode_ace);\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"monokai\");\n    const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(14);\n    const [showPrintMargin, setShowPrintMargin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showGutter, setShowGutter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [highlightActiveLine, setHighlightActiveLine] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        enableBasicAutocompletion: true,\n        enableLiveAutocompletion: true,\n        enableSnippets: true,\n        showLineNumbers: true,\n        tabSize: 4\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMode(_lib_lang_model__WEBPACK_IMPORTED_MODULE_8__[\"default\"][language[0].label].mode_ace);\n        setCode(_lib_lang_model__WEBPACK_IMPORTED_MODULE_8__[\"default\"][language[0].label].boilerplate);\n    }, [\n        language\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTheme(_lib_theme_model__WEBPACK_IMPORTED_MODULE_9__[\"default\"][chosenTheme[0].label].ace_theme);\n    }, [\n        chosenTheme\n    ]);\n    const onSubmit = async ()=>{\n        setCompiling(true);\n        const response = await fetch(\"/api/executecode/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                lang: _lib_lang_model__WEBPACK_IMPORTED_MODULE_8__[\"default\"][language[0].label].hackerearthapi,\n                source: code,\n                input: input,\n                callback: \"\"\n            })\n        }).then((res)=>res.json());\n        if (response.result.compile_status == \"OK\") {\n            const resp_part3 = await fetch(response.result.run_status.output).then((res)=>res.text());\n            response.result.run_status.output = resp_part3;\n        }\n        setOutput(response.result);\n        setCompiling(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-full m-auto border-0 border-black justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full  lg:max-w-4xl xl:max-w-5xl mx-5 p-2 border-0 border-black bg-[#dedede]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sm:flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sm:w-1/4 border-0 border-pink-600\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LangChoose__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            value: language,\n                                            onChange: (language)=>setLanguage(language)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sm:w-1/4 border-0 border-pink-600\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThemeChoose__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            value: chosenTheme,\n                                            onChange: (chosenTheme)=>setChosenTheme(chosenTheme)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex w-1/2 justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mx-10 flex border-0 my-auto border-green-600\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: onSubmit,\n                                                    className: \"bg-green-500  text-sm text-white px-5 mr-2 py-2 mb-2 rounded-md hover:bg-green-600 transition\",\n                                                    disabled: compiling,\n                                                    children: compiling ? \"Compilando...\" : \"Compilar\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"py-2\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DownloadCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                        code: code,\n                                                        lang_extension: _lib_lang_model__WEBPACK_IMPORTED_MODULE_8__[\"default\"][language[0].label].extension\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 33\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    mode: mode,\n                                    theme: theme,\n                                    onChange: (e)=>{\n                                        setCode(e);\n                                    },\n                                    fontSize: fontSize,\n                                    showPrintMargin: showPrintMargin,\n                                    showGutter: showGutter,\n                                    highlightActiveLine: highlightActiveLine,\n                                    value: code,\n                                    setOptions: {\n                                        enableBasicAutocompletion: options.enableBasicAutocompletion,\n                                        enableLiveAutocompletion: options.enableLiveAutocompletion,\n                                        enableSnippets: options.enableSnippets,\n                                        showLineNumbers: options.showLineNumbers,\n                                        tabSize: options.tabSize\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-black w-1/2 bg-[#dedede]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 border-blue-600 px-3 py-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-slate-800\",\n                                        children: \"Input: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        value: input,\n                                        onChange: (e)=>setInput(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 border-blue-600 py-2  px-3 w-full \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Output__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    result: output\n                                }, void 0, false, {\n                                    fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                className: \"mt-auto text-slate-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-sm\"\n                }, void 0, false, {\n                    fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                    lineNumber: 157,\n                    columnNumber: 20\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/katumbela/Documents/GitHub/editor-test/src/app/page.tsx\",\n                lineNumber: 156,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"DQw9jQGOGhVTcYfmH2yWHJDr0YQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBO29DQUNqQkUsWUFBWUE7b0NBQ1pFLHFCQUFxQkE7b0NBQ3JCOUIsT0FBT2M7b0NBQ1BtQixZQUFZO3dDQUNSQywyQkFBMkJGLFFBQVFFLHlCQUF5Qjt3Q0FDNURDLDBCQUEwQkgsUUFBUUcsd0JBQXdCO3dDQUMxREMsZ0JBQWdCSixRQUFRSSxjQUFjO3dDQUN0Q0MsaUJBQWlCTCxRQUFRSyxlQUFlO3dDQUN4Q0MsU0FBU04sUUFBUU0sT0FBTztvQ0FDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtaLDhEQUFDb0I7d0JBQUlDLFdBQVU7OzBDQUNQLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNTO3dDQUFLVCxXQUFVO2tEQUFpQjs7Ozs7O2tEQUNqQyw4REFBQ2xFLHlEQUFLQTt3Q0FDRk8sT0FBT0k7d0NBQ1B3RCxVQUFVLENBQUNPLElBQVc5RCxTQUFTOEQsRUFBRUUsTUFBTSxDQUFDckUsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUdyRCw4REFBQzBEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDakUsMERBQU1BO29DQUFDNkQsUUFBUWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNeEIsOERBQUNnRTtnQkFBT1gsV0FBVTswQkFDZiw0RUFBQ1M7b0JBQUtULFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0FwSndCOUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBEb3dubG9hZENvZGUgZnJvbSBcIkAvY29tcG9uZW50cy9Eb3dubG9hZENvZGVcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIkAvY29tcG9uZW50cy9FZGl0b3JcIjtcbmltcG9ydCBMYW5nQ2hvb3NlIGZyb20gXCJAL2NvbXBvbmVudHMvTGFuZ0Nob29zZVwiO1xuaW1wb3J0IFRoZW1lQ2hvb3NlIGZyb20gXCJAL2NvbXBvbmVudHMvVGhlbWVDaG9vc2VcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XG5pbXBvcnQgT3V0cHV0IGZyb20gXCJAL2NvbXBvbmVudHMvT3V0cHV0XCI7XG5cbmltcG9ydCBsYW5nX21vZGVsIGZyb20gXCJAL2xpYi9sYW5nLW1vZGVsXCI7XG5pbXBvcnQgdGhlbWVfbW9kZWwgZnJvbSBcIkAvbGliL3RoZW1lLW1vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShbeyB2YWx1ZTogMSwgbGFiZWw6IFwiQ1wiIH1dKTtcbiAgICBjb25zdCBbY2hvc2VuVGhlbWUsIHNldENob3NlblRoZW1lXSA9IHVzZVN0YXRlKFtcbiAgICAgICAgeyB2YWx1ZTogMTYsIGxhYmVsOiBcIkdpdGh1YlwiIH0sXG4gICAgXSk7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoe1xuICAgICAgICBjb21waWxlX3N0YXR1czogJ09LJyxcbiAgICAgICAgcnVuX3N0YXR1czoge1xuICAgICAgICAgICAgb3V0cHV0OiAnJyxcbiAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICBzdGF0dXNfZGV0YWlsOiAnJyxcbiAgICAgICAgICAgIHRpbWVfdXNlZDogMCxcbiAgICAgICAgICAgIG1lbW9yeV91c2VkOiAwLFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgICAgICBsYW5nX21vZGVsW2xhbmd1YWdlWzBdLmxhYmVsXS5ib2lsZXJwbGF0ZVxuICAgICk7XG5cbiAgICBjb25zdCBbY29tcGlsaW5nLCBzZXRDb21waWxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUobGFuZ19tb2RlbFtsYW5ndWFnZVswXS5sYWJlbF0ubW9kZV9hY2UpO1xuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJtb25va2FpXCIpO1xuICAgIGNvbnN0IFtmb250U2l6ZSwgc2V0Rm9udFNpemVdID0gdXNlU3RhdGUoMTQpO1xuICAgIGNvbnN0IFtzaG93UHJpbnRNYXJnaW4sIHNldFNob3dQcmludE1hcmdpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dHdXR0ZXIsIHNldFNob3dHdXR0ZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2hpZ2hsaWdodEFjdGl2ZUxpbmUsIHNldEhpZ2hsaWdodEFjdGl2ZUxpbmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbmFibGVCYXNpY0F1dG9jb21wbGV0aW9uOiB0cnVlLFxuICAgICAgICBlbmFibGVMaXZlQXV0b2NvbXBsZXRpb246IHRydWUsXG4gICAgICAgIGVuYWJsZVNuaXBwZXRzOiB0cnVlLFxuICAgICAgICBzaG93TGluZU51bWJlcnM6IHRydWUsXG4gICAgICAgIHRhYlNpemU6IDQsXG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRNb2RlKGxhbmdfbW9kZWxbbGFuZ3VhZ2VbMF0ubGFiZWxdLm1vZGVfYWNlKTtcbiAgICAgICAgc2V0Q29kZShsYW5nX21vZGVsW2xhbmd1YWdlWzBdLmxhYmVsXS5ib2lsZXJwbGF0ZSk7XG4gICAgfSwgW2xhbmd1YWdlXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGhlbWUodGhlbWVfbW9kZWxbY2hvc2VuVGhlbWVbMF0ubGFiZWxdLmFjZV90aGVtZSk7XG4gICAgfSwgW2Nob3NlblRoZW1lXSk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0Q29tcGlsaW5nKHRydWUpO1xuICAgICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgZmV0Y2goXCIvYXBpL2V4ZWN1dGVjb2RlL1wiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxhbmc6IGxhbmdfbW9kZWxbbGFuZ3VhZ2VbMF0ubGFiZWxdLmhhY2tlcmVhcnRoYXBpLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogY29kZSxcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IFwiXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5jb21waWxlX3N0YXR1cyA9PSBcIk9LXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BfcGFydDMgPSBhd2FpdCBmZXRjaChyZXNwb25zZS5yZXN1bHQucnVuX3N0YXR1cy5vdXRwdXQpLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSk7XG4gICAgICAgICAgICByZXNwb25zZS5yZXN1bHQucnVuX3N0YXR1cy5vdXRwdXQgPSByZXNwX3BhcnQzO1xuICAgICAgICB9XG4gICAgICAgIHNldE91dHB1dChyZXNwb25zZS5yZXN1bHQpO1xuICAgICAgICBzZXRDb21waWxpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLWZ1bGwgbS1hdXRvIGJvcmRlci0wIGJvcmRlci1ibGFjayBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIGxnOm1heC13LTR4bCB4bDptYXgtdy01eGwgbXgtNSBwLTIgYm9yZGVyLTAgYm9yZGVyLWJsYWNrIGJnLVsjZGVkZWRlXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS80IGJvcmRlci0wIGJvcmRlci1waW5rLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhbmdDaG9vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhsYW5ndWFnZTogYW55KSA9PiBzZXRMYW5ndWFnZShsYW5ndWFnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTp3LTEvNCBib3JkZXItMCBib3JkZXItcGluay02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZUNob29zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaG9zZW5UaGVtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNob3NlblRoZW1lOiBhbnkpID0+IHNldENob3NlblRoZW1lKGNob3NlblRoZW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0xLzIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMTAgZmxleCBib3JkZXItMCBteS1hdXRvIGJvcmRlci1ncmVlbi02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwICB0ZXh0LXNtIHRleHQtd2hpdGUgcHgtNSBtci0yIHB5LTIgbWItMiByb3VuZGVkLW1kIGhvdmVyOmJnLWdyZWVuLTYwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvbXBpbGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21waWxpbmcgPyBcIkNvbXBpbGFuZG8uLi5cIiA6IFwiQ29tcGlsYXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkQ29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17Y29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmdfZXh0ZW5zaW9uPXtsYW5nX21vZGVsW2xhbmd1YWdlWzBdLmxhYmVsXS5leHRlbnNpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2RlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXtmb250U2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcmludE1hcmdpbj17c2hvd1ByaW50TWFyZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0d1dHRlcj17c2hvd0d1dHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZUxpbmU9e2hpZ2hsaWdodEFjdGl2ZUxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYXNpY0F1dG9jb21wbGV0aW9uOiBvcHRpb25zLmVuYWJsZUJhc2ljQXV0b2NvbXBsZXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGl2ZUF1dG9jb21wbGV0aW9uOiBvcHRpb25zLmVuYWJsZUxpdmVBdXRvY29tcGxldGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTbmlwcGV0czogb3B0aW9ucy5lbmFibGVTbmlwcGV0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGluZU51bWJlcnM6IG9wdGlvbnMuc2hvd0xpbmVOdW1iZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYlNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYmxhY2sgdy0xLzIgYmctWyNkZWRlZGVdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgYm9yZGVyLWJsdWUtNjAwIHB4LTMgcHktMiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtODAwXCI+SW5wdXQ6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgYm9yZGVyLWJsdWUtNjAwIHB5LTIgIHB4LTMgdy1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE91dHB1dCByZXN1bHQ9e291dHB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Y2VudGVyIGNsYXNzTmFtZT1cIm10LWF1dG8gdGV4dC1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRG93bmxvYWRDb2RlIiwiRWRpdG9yIiwiTGFuZ0Nob29zZSIsIlRoZW1lQ2hvb3NlIiwiSW5wdXQiLCJPdXRwdXQiLCJsYW5nX21vZGVsIiwidGhlbWVfbW9kZWwiLCJIb21lIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInZhbHVlIiwibGFiZWwiLCJjaG9zZW5UaGVtZSIsInNldENob3NlblRoZW1lIiwiaW5wdXQiLCJzZXRJbnB1dCIsIm91dHB1dCIsInNldE91dHB1dCIsImNvbXBpbGVfc3RhdHVzIiwicnVuX3N0YXR1cyIsInN0YXR1cyIsInN0YXR1c19kZXRhaWwiLCJ0aW1lX3VzZWQiLCJtZW1vcnlfdXNlZCIsImNvZGUiLCJzZXRDb2RlIiwiYm9pbGVycGxhdGUiLCJjb21waWxpbmciLCJzZXRDb21waWxpbmciLCJtb2RlIiwic2V0TW9kZSIsIm1vZGVfYWNlIiwidGhlbWUiLCJzZXRUaGVtZSIsImZvbnRTaXplIiwic2V0Rm9udFNpemUiLCJzaG93UHJpbnRNYXJnaW4iLCJzZXRTaG93UHJpbnRNYXJnaW4iLCJzaG93R3V0dGVyIiwic2V0U2hvd0d1dHRlciIsImhpZ2hsaWdodEFjdGl2ZUxpbmUiLCJzZXRIaWdobGlnaHRBY3RpdmVMaW5lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJlbmFibGVCYXNpY0F1dG9jb21wbGV0aW9uIiwiZW5hYmxlTGl2ZUF1dG9jb21wbGV0aW9uIiwiZW5hYmxlU25pcHBldHMiLCJzaG93TGluZU51bWJlcnMiLCJ0YWJTaXplIiwiYWNlX3RoZW1lIiwib25TdWJtaXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGFuZyIsImhhY2tlcmVhcnRoYXBpIiwic291cmNlIiwiY2FsbGJhY2siLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsInJlc3BfcGFydDMiLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwibGFuZ19leHRlbnNpb24iLCJleHRlbnNpb24iLCJlIiwic3BhbiIsInRhcmdldCIsImNlbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});