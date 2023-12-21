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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"../node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"../node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _lib_giphy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/giphy */ \"./lib/giphy.js\");\n/* harmony import */ var _lib_components_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/components/buttons */ \"./lib/components/buttons.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/styles.css */ \"../styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/index.css */ \"../styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import Noty from 'noty';\n\n\nfunction Home() {\n    _s();\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [gifs, setGifs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const handleSearch = async ()=>{\n        try {\n            setLoading(true);\n            const results = await (0,_lib_giphy__WEBPACK_IMPORTED_MODULE_6__.searchGifs)(query);\n            setGifs(results);\n            setPage(1);\n        } catch (error) {\n            console.error(\"Search error:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleSignInWithGoogle = ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"], provider);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (query) {\n            handleSearch();\n        }\n    }, [\n        query\n    ]);\n    const handlePageChange = (newPage)=>{\n        setPage(newPage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Giphy Search Web Application\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"auth-buttons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_components_buttons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            href: \"/signin\",\n                            label: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"spacer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 14\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_components_buttons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            href: \"/signup\",\n                            label: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"spacer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_components_buttons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            onClick: handleSignInWithGoogle,\n                            label: \"Sign In With Google\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"welcome-message\",\n                            children: [\n                                \"Welcome, \",\n                                user.displayName,\n                                \"!\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>_lib_firebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"].signOut(),\n                            className: \"auth-button\",\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"search-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: query,\n                                    onChange: (e)=>setQuery(e.target.value),\n                                    placeholder: \"Enter search term\",\n                                    className: \"search-input\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"loading-spinner\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSearch,\n                                    className: \"search-button\",\n                                    children: \"Search GIFs\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"gifs-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gifs-inner-container\",\n                                children: gifs.slice((page - 1) * 5, page * 5).map((gif, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"gif-item\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: gif.images.fixed_height.url,\n                                                alt: \"GIF\",\n                                                className: \"gif-image\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"gif-index\",\n                                                children: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, gif.id, true, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        gifs.length > 5 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pagination-buttons\",\n                            children: [\n                                ...Array(Math.ceil(gifs.length / 5)).keys()\n                            ].map((pageNum)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handlePageChange(pageNum + 1),\n                                    className: pageNum + 1 === page ? \"active\" : \"\",\n                                    children: pageNum + 1\n                                }, pageNum + 1, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 96,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\Education\\\\Js Projects\\\\giphy_search_project\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"+v85Vd0lgHUk71+HAYM1vu/sgsQ=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUNBRjVCRCxJQUFJUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7d0JBT3JCM0MsS0FBSzRDLE1BQU0sR0FBRyxtQkFDYiw4REFBQzlCOzRCQUFJQyxXQUFVO3NDQUNaO21DQUFJOEIsTUFBTUMsS0FBS0MsSUFBSSxDQUFDL0MsS0FBSzRDLE1BQU0sR0FBRyxJQUFJSSxJQUFJOzZCQUFHLENBQUNkLEdBQUcsQ0FBQyxDQUFDZSx3QkFDbEQsOERBQUN6QjtvQ0FFQ0gsU0FBUyxJQUFNVCxpQkFBaUJxQyxVQUFVO29DQUMxQ2xDLFdBQVdrQyxVQUFVLE1BQU03QyxPQUFPLFdBQVc7OENBRTVDNkMsVUFBVTttQ0FKTkEsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZW5DO0dBcEd3QnJEOztRQUNQTixtRUFBWUE7OztLQURMTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHNlYXJjaEdpZnMgfSBmcm9tICcuLi9saWIvZ2lwaHknO1xyXG5pbXBvcnQgU2lnbkluQW5kU2lnblVwQnV0dG9uIGZyb20gJy4uL2xpYi9jb21wb25lbnRzL2J1dHRvbnMnO1xyXG4vLyBpbXBvcnQgTm90eSBmcm9tICdub3R5JztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2luZGV4LmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZ2lmcywgc2V0R2lmc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoR2lmcyhxdWVyeSk7XHJcbiAgICAgIHNldEdpZnMocmVzdWx0cyk7XHJcbiAgICAgIHNldFBhZ2UoMSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTZWFyY2ggZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgIGhhbmRsZVNlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH0sIFtxdWVyeV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPkdpcGh5IFNlYXJjaCBXZWIgQXBwbGljYXRpb248L2gxPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgeyF1c2VyID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPFNpZ25JbkFuZFNpZ25VcEJ1dHRvbiBocmVmPVwiL3NpZ25pblwiIGxhYmVsPVwiU2lnbiBJblwiIC8+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxTaWduSW5BbmRTaWduVXBCdXR0b24gaHJlZj1cIi9zaWdudXBcIiBsYWJlbD1cIlNpZ24gVXBcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPFNpZ25JbkFuZFNpZ25VcEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaWduSW5XaXRoR29vZ2xlfSBsYWJlbD1cIlNpZ24gSW4gV2l0aCBHb29nbGVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPldlbGNvbWUsIHt1c2VyLmRpc3BsYXlOYW1lfSE8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYXV0aC5zaWduT3V0KCl9IGNsYXNzTmFtZT1cImF1dGgtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNlYXJjaCB0ZXJtXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VhcmNofSBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlYXJjaCBHSUZzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaWZzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2lmcy1pbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtnaWZzLnNsaWNlKChwYWdlIC0gMSkgKiA1LCBwYWdlICogNSkubWFwKChnaWYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtnaWYuaWR9IGNsYXNzTmFtZT1cImdpZi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZi5pbWFnZXMuZml4ZWRfaGVpZ2h0LnVybH0gYWx0PVwiR0lGXCIgY2xhc3NOYW1lPVwiZ2lmLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpZi1pbmRleFwiPntpbmRleCArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Z2lmcy5sZW5ndGggPiA1ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAge1suLi5BcnJheShNYXRoLmNlaWwoZ2lmcy5sZW5ndGggLyA1KSkua2V5cygpXS5tYXAoKHBhZ2VOdW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGFnZU51bSArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShwYWdlTnVtICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlTnVtICsgMSA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnZU51bSArIDF9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXV0aFN0YXRlIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiYXV0aCIsInNlYXJjaEdpZnMiLCJTaWduSW5BbmRTaWduVXBCdXR0b24iLCJIb21lIiwidXNlciIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnaWZzIiwic2V0R2lmcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFnZSIsInNldFBhZ2UiLCJoYW5kbGVTZWFyY2giLCJyZXN1bHRzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU2lnbkluV2l0aEdvb2dsZSIsInByb3ZpZGVyIiwiaGFuZGxlUGFnZUNoYW5nZSIsIm5ld1BhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsIm1haW4iLCJocmVmIiwibGFiZWwiLCJvbkNsaWNrIiwicCIsImRpc3BsYXlOYW1lIiwiYnV0dG9uIiwic2lnbk91dCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzbGljZSIsIm1hcCIsImdpZiIsImluZGV4IiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwiZml4ZWRfaGVpZ2h0IiwidXJsIiwiYWx0IiwiaWQiLCJsZW5ndGgiLCJBcnJheSIsIk1hdGgiLCJjZWlsIiwia2V5cyIsInBhZ2VOdW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});