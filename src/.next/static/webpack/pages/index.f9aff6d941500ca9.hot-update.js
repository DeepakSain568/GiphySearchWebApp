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

/***/ "../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[11].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[11].use[2]!../styles/index.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[11].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[11].use[2]!../styles/index.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \" .container {\\r\\n          max-width: 800px;\\r\\n          margin: auto;\\r\\n          padding: 20px;\\r\\n        }\\r\\n\\r\\n        header {\\r\\n          text-align: center;\\r\\n        }\\r\\n\\r\\n        h1 {\\r\\n          color: #333;\\r\\n        }\\r\\n\\r\\n        .auth-buttons {\\r\\n          display: flex;\\r\\n          flex-direction: column;\\r\\n          align-items: center;\\r\\n        }\\r\\n\\r\\n        .auth-button {\\r\\n          padding: 10px;\\r\\n          margin: 10px 0;\\r\\n          font-size: 16px;\\r\\n          border: none;\\r\\n          border-radius: 4px;\\r\\n          cursor: pointer;\\r\\n          background-color: #3498db;\\r\\n          color: #fff;\\r\\n          transition: background-color 0.3s;\\r\\n        }\\r\\n\\r\\n        .auth-button:hover {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .auth-button.google {\\r\\n          background-color: #dd4b39;\\r\\n        }\\r\\n\\r\\n        .welcome-message {\\r\\n          text-align: center;\\r\\n          font-size: 18px;\\r\\n          margin-bottom: 10px;\\r\\n        }\\r\\n\\r\\n        .search-container {\\r\\n          display: flex;\\r\\n          gap: 10px;\\r\\n          margin-bottom: 20px;\\r\\n        }\\r\\n\\r\\n        .search-input {\\r\\n          flex: 1 1;\\r\\n          padding: 10px;\\r\\n          font-size: 16px;\\r\\n          border: 1px solid #ccc;\\r\\n          border-radius: 4px;\\r\\n        }\\r\\n\\r\\n        .search-button {\\r\\n          padding: 10px;\\r\\n          font-size: 16px;\\r\\n          border: none;\\r\\n          border-radius: 4px;\\r\\n          cursor: pointer;\\r\\n          background-color: #3498db;\\r\\n          color: #fff;\\r\\n          transition: background-color 0.3s;\\r\\n        }\\r\\n\\r\\n        .search-button:hover {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .gifs-container {\\r\\n          overflow: hidden;\\r\\n        }\\r\\n\\r\\n        .gifs-inner-container {\\r\\n          display: flex;\\r\\n          overflow-x: auto;\\r\\n          overflow-y: hidden;\\r\\n        }\\r\\n\\r\\n        .gif-item {\\r\\n          flex: 0 0 auto;\\r\\n          width: 150px;\\r\\n          margin-right: 1rem;\\r\\n          position: relative;\\r\\n        }\\r\\n\\r\\n        .gif-image {\\r\\n          max-width: 100%;\\r\\n          height: auto;\\r\\n          border-radius: 8px;\\r\\n        }\\r\\n\\r\\n        .gif-index {\\r\\n          position: absolute;\\r\\n          top: 5px;\\r\\n          right: 5px;\\r\\n          background-color: rgba(255, 255, 255, 0.8);\\r\\n          padding: 5px;\\r\\n          border-radius: 5px;\\r\\n          font-size: 12px;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons {\\r\\n          display: flex;\\r\\n          justify-content: center;\\r\\n          margin-top: 1rem;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons button {\\r\\n          padding: 0.5rem 1rem;\\r\\n          cursor: pointer;\\r\\n          margin: 0 5px;\\r\\n          background-color: #3498db;\\r\\n          color: white;\\r\\n          border: none;\\r\\n          border-radius: 5px;\\r\\n          outline: none;\\r\\n          transition: background-color 0.3s;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons button.active {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons button:hover {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .loading-spinner {\\r\\n          border: 6px solid #f3f3f3;\\r\\n          border-top: 6px solid #3498db;\\r\\n          border-radius: 50%;\\r\\n          width: 30px;\\r\\n          height: 30px;\\r\\n          animation: spin 1s linear infinite;\\r\\n        }\\r\\n          .spacer{\\r\\n            height: ;\\r\\n          }\\r\\n        @keyframes spin {\\r\\n          0% {\\r\\n            transform: rotate(0deg);\\r\\n          }\\r\\n          100% {\\r\\n            transform: rotate(360deg);\\r\\n          }\\r\\n        }\", \"\",{\"version\":3,\"sources\":[\"webpack://../styles/index.css\"],\"names\":[],\"mappings\":\"CAAC;UACS,gBAAgB;UAChB,YAAY;UACZ,aAAa;QACf;;QAEA;UACE,kBAAkB;QACpB;;QAEA;UACE,WAAW;QACb;;QAEA;UACE,aAAa;UACb,sBAAsB;UACtB,mBAAmB;QACrB;;QAEA;UACE,aAAa;UACb,cAAc;UACd,eAAe;UACf,YAAY;UACZ,kBAAkB;UAClB,eAAe;UACf,yBAAyB;UACzB,WAAW;UACX,iCAAiC;QACnC;;QAEA;UACE,yBAAyB;QAC3B;;QAEA;UACE,yBAAyB;QAC3B;;QAEA;UACE,kBAAkB;UAClB,eAAe;UACf,mBAAmB;QACrB;;QAEA;UACE,aAAa;UACb,SAAS;UACT,mBAAmB;QACrB;;QAEA;UACE,SAAO;UACP,aAAa;UACb,eAAe;UACf,sBAAsB;UACtB,kBAAkB;QACpB;;QAEA;UACE,aAAa;UACb,eAAe;UACf,YAAY;UACZ,kBAAkB;UAClB,eAAe;UACf,yBAAyB;UACzB,WAAW;UACX,iCAAiC;QACnC;;QAEA;UACE,yBAAyB;QAC3B;;QAEA;UACE,gBAAgB;QAClB;;QAEA;UACE,aAAa;UACb,gBAAgB;UAChB,kBAAkB;QACpB;;QAEA;UACE,cAAc;UACd,YAAY;UACZ,kBAAkB;UAClB,kBAAkB;QACpB;;QAEA;UACE,eAAe;UACf,YAAY;UACZ,kBAAkB;QACpB;;QAEA;UACE,kBAAkB;UAClB,QAAQ;UACR,UAAU;UACV,0CAA0C;UAC1C,YAAY;UACZ,kBAAkB;UAClB,eAAe;QACjB;;QAEA;UACE,aAAa;UACb,uBAAuB;UACvB,gBAAgB;QAClB;;QAEA;UACE,oBAAoB;UACpB,eAAe;UACf,aAAa;UACb,yBAAyB;UACzB,YAAY;UACZ,YAAY;UACZ,kBAAkB;UAClB,aAAa;UACb,iCAAiC;QACnC;;QAEA;UACE,yBAAyB;QAC3B;;QAEA;UACE,yBAAyB;QAC3B;;QAEA;UACE,yBAAyB;UACzB,6BAA6B;UAC7B,kBAAkB;UAClB,WAAW;UACX,YAAY;UACZ,kCAAkC;QACpC;UACE;YACE,QAAQ;UACV;QACF;UACE;YACE,uBAAuB;UACzB;UACA;YACE,yBAAyB;UAC3B;QACF\",\"sourcesContent\":[\" .container {\\r\\n          max-width: 800px;\\r\\n          margin: auto;\\r\\n          padding: 20px;\\r\\n        }\\r\\n\\r\\n        header {\\r\\n          text-align: center;\\r\\n        }\\r\\n\\r\\n        h1 {\\r\\n          color: #333;\\r\\n        }\\r\\n\\r\\n        .auth-buttons {\\r\\n          display: flex;\\r\\n          flex-direction: column;\\r\\n          align-items: center;\\r\\n        }\\r\\n\\r\\n        .auth-button {\\r\\n          padding: 10px;\\r\\n          margin: 10px 0;\\r\\n          font-size: 16px;\\r\\n          border: none;\\r\\n          border-radius: 4px;\\r\\n          cursor: pointer;\\r\\n          background-color: #3498db;\\r\\n          color: #fff;\\r\\n          transition: background-color 0.3s;\\r\\n        }\\r\\n\\r\\n        .auth-button:hover {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .auth-button.google {\\r\\n          background-color: #dd4b39;\\r\\n        }\\r\\n\\r\\n        .welcome-message {\\r\\n          text-align: center;\\r\\n          font-size: 18px;\\r\\n          margin-bottom: 10px;\\r\\n        }\\r\\n\\r\\n        .search-container {\\r\\n          display: flex;\\r\\n          gap: 10px;\\r\\n          margin-bottom: 20px;\\r\\n        }\\r\\n\\r\\n        .search-input {\\r\\n          flex: 1;\\r\\n          padding: 10px;\\r\\n          font-size: 16px;\\r\\n          border: 1px solid #ccc;\\r\\n          border-radius: 4px;\\r\\n        }\\r\\n\\r\\n        .search-button {\\r\\n          padding: 10px;\\r\\n          font-size: 16px;\\r\\n          border: none;\\r\\n          border-radius: 4px;\\r\\n          cursor: pointer;\\r\\n          background-color: #3498db;\\r\\n          color: #fff;\\r\\n          transition: background-color 0.3s;\\r\\n        }\\r\\n\\r\\n        .search-button:hover {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .gifs-container {\\r\\n          overflow: hidden;\\r\\n        }\\r\\n\\r\\n        .gifs-inner-container {\\r\\n          display: flex;\\r\\n          overflow-x: auto;\\r\\n          overflow-y: hidden;\\r\\n        }\\r\\n\\r\\n        .gif-item {\\r\\n          flex: 0 0 auto;\\r\\n          width: 150px;\\r\\n          margin-right: 1rem;\\r\\n          position: relative;\\r\\n        }\\r\\n\\r\\n        .gif-image {\\r\\n          max-width: 100%;\\r\\n          height: auto;\\r\\n          border-radius: 8px;\\r\\n        }\\r\\n\\r\\n        .gif-index {\\r\\n          position: absolute;\\r\\n          top: 5px;\\r\\n          right: 5px;\\r\\n          background-color: rgba(255, 255, 255, 0.8);\\r\\n          padding: 5px;\\r\\n          border-radius: 5px;\\r\\n          font-size: 12px;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons {\\r\\n          display: flex;\\r\\n          justify-content: center;\\r\\n          margin-top: 1rem;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons button {\\r\\n          padding: 0.5rem 1rem;\\r\\n          cursor: pointer;\\r\\n          margin: 0 5px;\\r\\n          background-color: #3498db;\\r\\n          color: white;\\r\\n          border: none;\\r\\n          border-radius: 5px;\\r\\n          outline: none;\\r\\n          transition: background-color 0.3s;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons button.active {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .pagination-buttons button:hover {\\r\\n          background-color: #2980b9;\\r\\n        }\\r\\n\\r\\n        .loading-spinner {\\r\\n          border: 6px solid #f3f3f3;\\r\\n          border-top: 6px solid #3498db;\\r\\n          border-radius: 50%;\\r\\n          width: 30px;\\r\\n          height: 30px;\\r\\n          animation: spin 1s linear infinite;\\r\\n        }\\r\\n          .spacer{\\r\\n            height: ;\\r\\n          }\\r\\n        @keyframes spin {\\r\\n          0% {\\r\\n            transform: rotate(0deg);\\r\\n          }\\r\\n          100% {\\r\\n            transform: rotate(360deg);\\r\\n          }\\r\\n        }\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTFdLnVzZVsyXSEuLi9zdHlsZXMvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx1REFBdUQsK0JBQStCLDJCQUEyQiw0QkFBNEIsYUFBYSx3QkFBd0IsaUNBQWlDLGFBQWEsb0JBQW9CLDBCQUEwQixhQUFhLCtCQUErQiw0QkFBNEIscUNBQXFDLGtDQUFrQyxhQUFhLDhCQUE4Qiw0QkFBNEIsNkJBQTZCLDhCQUE4QiwyQkFBMkIsaUNBQWlDLDhCQUE4Qix3Q0FBd0MsMEJBQTBCLGdEQUFnRCxhQUFhLG9DQUFvQyx3Q0FBd0MsYUFBYSxxQ0FBcUMsd0NBQXdDLGFBQWEsa0NBQWtDLGlDQUFpQyw4QkFBOEIsa0NBQWtDLGFBQWEsbUNBQW1DLDRCQUE0Qix3QkFBd0Isa0NBQWtDLGFBQWEsK0JBQStCLHdCQUF3Qiw0QkFBNEIsOEJBQThCLHFDQUFxQyxpQ0FBaUMsYUFBYSxnQ0FBZ0MsNEJBQTRCLDhCQUE4QiwyQkFBMkIsaUNBQWlDLDhCQUE4Qix3Q0FBd0MsMEJBQTBCLGdEQUFnRCxhQUFhLHNDQUFzQyx3Q0FBd0MsYUFBYSxpQ0FBaUMsK0JBQStCLGFBQWEsdUNBQXVDLDRCQUE0QiwrQkFBK0IsaUNBQWlDLGFBQWEsMkJBQTJCLDZCQUE2QiwyQkFBMkIsaUNBQWlDLGlDQUFpQyxhQUFhLDRCQUE0Qiw4QkFBOEIsMkJBQTJCLGlDQUFpQyxhQUFhLDRCQUE0QixpQ0FBaUMsdUJBQXVCLHlCQUF5Qix5REFBeUQs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ZUFBZSxvQkFBb0IsMENBQTBDLGVBQWUsYUFBYSxtQkFBbUI7QUFDaHVSO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3N0eWxlcy9pbmRleC5jc3M/Yzg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiIC5jb250YWluZXIge1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIge1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmF1dGgtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYXV0aC1idXR0b24ge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmF1dGgtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hdXRoLWJ1dHRvbi5nb29nbGUge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLndlbGNvbWUtbWVzc2FnZSB7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2VhcmNoLWlucHV0IHtcXHJcXG4gICAgICAgICAgZmxleDogMSAxO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zZWFyY2gtYnV0dG9uIHtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNlYXJjaC1idXR0b246aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmdpZnMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5naWZzLWlubmVyLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5naWYtaXRlbSB7XFxyXFxuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmdpZi1pbWFnZSB7XFxyXFxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZ2lmLWluZGV4IHtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB0b3A6IDVweDtcXHJcXG4gICAgICAgICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnBhZ2luYXRpb24tYnV0dG9ucyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnBhZ2luYXRpb24tYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucGFnaW5hdGlvbi1idXR0b25zIGJ1dHRvbi5hY3RpdmUge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnBhZ2luYXRpb24tYnV0dG9ucyBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmxvYWRpbmctc3Bpbm5lciB7XFxyXFxuICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICNmM2YzZjM7XFxyXFxuICAgICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjMzQ5OGRiO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAgIC5zcGFjZXJ7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkNBQUM7VUFDUyxnQkFBZ0I7VUFDaEIsWUFBWTtVQUNaLGFBQWE7UUFDZjs7UUFFQTtVQUNFLGtCQUFrQjtRQUNwQjs7UUFFQTtVQUNFLFdBQVc7UUFDYjs7UUFFQTtVQUNFLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsbUJBQW1CO1FBQ3JCOztRQUVBO1VBQ0UsYUFBYTtVQUNiLGNBQWM7VUFDZCxlQUFlO1VBQ2YsWUFBWTtVQUNaLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YseUJBQXlCO1VBQ3pCLFdBQVc7VUFDWCxpQ0FBaUM7UUFDbkM7O1FBRUE7VUFDRSx5QkFBeUI7UUFDM0I7O1FBRUE7VUFDRSx5QkFBeUI7UUFDM0I7O1FBRUE7VUFDRSxrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLG1CQUFtQjtRQUNyQjs7UUFFQTtVQUNFLGFBQWE7VUFDYixTQUFTO1VBQ1QsbUJBQW1CO1FBQ3JCOztRQUVBO1VBQ0UsU0FBTztVQUNQLGFBQWE7VUFDYixlQUFlO1VBQ2Ysc0JBQXNCO1VBQ3RCLGtCQUFrQjtRQUNwQjs7UUFFQTtVQUNFLGFBQWE7VUFDYixlQUFlO1VBQ2YsWUFBWTtVQUNaLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YseUJBQXlCO1VBQ3pCLFdBQVc7VUFDWCxpQ0FBaUM7UUFDbkM7O1FBRUE7VUFDRSx5QkFBeUI7UUFDM0I7O1FBRUE7VUFDRSxnQkFBZ0I7UUFDbEI7O1FBRUE7VUFDRSxhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtRQUNwQjs7UUFFQTtVQUNFLGNBQWM7VUFDZCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLGtCQUFrQjtRQUNwQjs7UUFFQTtVQUNFLGVBQWU7VUFDZixZQUFZO1VBQ1osa0JBQWtCO1FBQ3BCOztRQUVBO1VBQ0Usa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixVQUFVO1VBQ1YsMENBQTBDO1VBQzFDLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsZUFBZTtRQUNqQjs7UUFFQTtVQUNFLGFBQWE7VUFDYix1QkFBdUI7VUFDdkIsZ0JBQWdCO1FBQ2xCOztRQUVBO1VBQ0Usb0JBQW9CO1VBQ3BCLGVBQWU7VUFDZixhQUFhO1VBQ2IseUJBQXlCO1VBQ3pCLFlBQVk7VUFDWixZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLGFBQWE7VUFDYixpQ0FBaUM7UUFDbkM7O1FBRUE7VUFDRSx5QkFBeUI7UUFDM0I7O1FBRUE7VUFDRSx5QkFBeUI7UUFDM0I7O1FBRUE7VUFDRSx5QkFBeUI7VUFDekIsNkJBQTZCO1VBQzdCLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsWUFBWTtVQUNaLGtDQUFrQztRQUNwQztVQUNFO1lBQ0UsUUFBUTtVQUNWO1FBQ0Y7VUFDRTtZQUNFLHVCQUF1QjtVQUN6QjtVQUNBO1lBQ0UseUJBQXlCO1VBQzNCO1FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiIC5jb250YWluZXIge1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIge1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmF1dGgtYnV0dG9ucyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYXV0aC1idXR0b24ge1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmF1dGgtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hdXRoLWJ1dHRvbi5nb29nbGUge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLndlbGNvbWUtbWVzc2FnZSB7XFxyXFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2VhcmNoLWlucHV0IHtcXHJcXG4gICAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2VhcmNoLWJ1dHRvbiB7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXHJcXG4gICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5naWZzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZ2lmcy1pbm5lci1jb250YWluZXIge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZ2lmLWl0ZW0ge1xcclxcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5naWYtaW1hZ2Uge1xcclxcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmdpZi1pbmRleCB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wYWdpbmF0aW9uLWJ1dHRvbnMge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wYWdpbmF0aW9uLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXHJcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnBhZ2luYXRpb24tYnV0dG9ucyBidXR0b24uYWN0aXZlIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wYWdpbmF0aW9uLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5sb2FkaW5nLXNwaW5uZXIge1xcclxcbiAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAjZjNmM2YzO1xcclxcbiAgICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgIzM0OThkYjtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgICAuc3BhY2Vye1xcclxcbiAgICAgICAgICAgIGhlaWdodDogO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgICAgICAgICAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[11].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[11].use[2]!../styles/index.css\n"));

/***/ })

});