/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/user/getuser/route";
exports.ids = ["app/api/user/getuser/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fgetuser%2Froute&page=%2Fapi%2Fuser%2Fgetuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fgetuser%2Froute.js&appDir=D%3A%5Cjob%20seeker%5Cjob_seeker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cjob%20seeker%5Cjob_seeker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fgetuser%2Froute&page=%2Fapi%2Fuser%2Fgetuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fgetuser%2Froute.js&appDir=D%3A%5Cjob%20seeker%5Cjob_seeker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cjob%20seeker%5Cjob_seeker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_job_seeker_job_seeker_app_api_user_getuser_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/getuser/route.js */ \"(rsc)/./app/api/user/getuser/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/getuser/route\",\n        pathname: \"/api/user/getuser\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/getuser/route\"\n    },\n    resolvedPagePath: \"D:\\\\job seeker\\\\job_seeker\\\\app\\\\api\\\\user\\\\getuser\\\\route.js\",\n    nextConfigOutput,\n    userland: D_job_seeker_job_seeker_app_api_user_getuser_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGZ2V0dXNlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlciUyRmdldHVzZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyJTJGZ2V0dXNlciUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDam9iJTIwc2Vla2VyJTVDam9iX3NlZWtlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q2pvYiUyMHNlZWtlciU1Q2pvYl9zZWVrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2E7QUFDMUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGpvYiBzZWVrZXJcXFxcam9iX3NlZWtlclxcXFxhcHBcXFxcYXBpXFxcXHVzZXJcXFxcZ2V0dXNlclxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci9nZXR1c2VyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlci9nZXR1c2VyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyL2dldHVzZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxqb2Igc2Vla2VyXFxcXGpvYl9zZWVrZXJcXFxcYXBwXFxcXGFwaVxcXFx1c2VyXFxcXGdldHVzZXJcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fgetuser%2Froute&page=%2Fapi%2Fuser%2Fgetuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fgetuser%2Froute.js&appDir=D%3A%5Cjob%20seeker%5Cjob_seeker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cjob%20seeker%5Cjob_seeker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/user/getuser/route.js":
/*!***************************************!*\
  !*** ./app/api/user/getuser/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _lib_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/models/User */ \"(rsc)/./lib/models/User.js\");\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        console.log(\"db connected\");\n        const body = await request.json(); // Parse JSON body from the POST request\n        const { userId } = body;\n        if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"User ID is required\"\n        }, {\n            status: 400\n        });\n        const user = await _lib_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(userId);\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"User not found\"\n        }, {\n            status: 404\n        });\n        console.log(user);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            user,\n            message: \"User found successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error checking user fields:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvZ2V0dXNlci9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ087QUFDYjtBQUU5QixlQUFlRyxLQUFLQyxPQUFPO0lBQ2hDLElBQUk7UUFDRixNQUFNSCwrREFBaUJBO1FBQ3ZCSSxRQUFRQyxHQUFHLENBQUM7UUFFWixNQUFNQyxPQUFPLE1BQU1ILFFBQVFJLElBQUksSUFBSSx3Q0FBd0M7UUFFM0UsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Y7UUFHbkIsSUFBSSxDQUFDRSxRQUFRLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUV0RixNQUFNQyxPQUFPLE1BQU1WLHdEQUFJQSxDQUFDVyxRQUFRLENBQUNKO1FBQ2pDLElBQUksQ0FBQ0csTUFBTSxPQUFPWixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDL0VOLFFBQVFDLEdBQUcsQ0FBQ007UUFDWixPQUFPWixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3JCTSxTQUFTO1lBQ1RGO1lBQ0FHLFNBQVM7UUFDYjtJQUNGLEVBQUUsT0FBT0wsT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxPQUFPVixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsiRDpcXGpvYiBzZWVrZXJcXGpvYl9zZWVrZXJcXGFwcFxcYXBpXFx1c2VyXFxnZXR1c2VyXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9saWIvbW9kZWxzL1VzZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGIgY29ubmVjdGVkXCIpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTsgLy8gUGFyc2UgSlNPTiBib2R5IGZyb20gdGhlIFBPU1QgcmVxdWVzdFxyXG4gICBcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSBib2R5O1xyXG4gICBcclxuXHJcbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBJRCBpcyByZXF1aXJlZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQodXNlcklkKTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgZm91bmQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNoZWNraW5nIHVzZXIgZmllbGRzOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIlVzZXIiLCJQT1NUIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwianNvbiIsInVzZXJJZCIsImVycm9yIiwic3RhdHVzIiwidXNlciIsImZpbmRCeUlkIiwic3VjY2VzcyIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/getuser/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/User.js":
/*!****************************!*\
  !*** ./lib/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"job_seeker\",\n            \"employer\"\n        ],\n        required: true\n    },\n    contact: {\n        type: String\n    },\n    location: {\n        type: String\n    },\n    skills: [\n        {\n            type: String\n        }\n    ],\n    education: [\n        {\n            institution: {\n                type: String\n            },\n            degree: {\n                type: String\n            },\n            fieldOfStudy: {\n                type: String\n            },\n            year: {\n                type: String\n            }\n        }\n    ],\n    workExperience: [\n        {\n            company: {\n                type: String\n            },\n            position: {\n                type: String\n            },\n            startDate: {\n                type: Date\n            },\n            endDate: {\n                type: Date\n            },\n            description: {\n                type: String\n            }\n        }\n    ],\n    certifications: [\n        {\n            type: String\n        }\n    ],\n    portfolioLinks: {\n        github: {\n            type: String\n        },\n        linkedin: {\n            type: String\n        },\n        website: {\n            type: String\n        }\n    },\n    profile_photo: {\n        type: String\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    updatedAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Export the model or create it if it doesn't already exist\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBQztJQUNyQ0csUUFBTztRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNDLE1BQU07UUFBRUgsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDRSxPQUFPO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUcsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ssTUFBTTtRQUFFUCxNQUFNQztRQUFRTyxNQUFNO1lBQUM7WUFBYztTQUFXO1FBQUVOLFVBQVU7SUFBSztJQUN2RU8sU0FBUztRQUFFVCxNQUFNQztJQUFPO0lBQ3hCUyxVQUFVO1FBQUVWLE1BQU1DO0lBQU87SUFDekJVLFFBQVE7UUFBQztZQUFFWCxNQUFNQztRQUFPO0tBQUU7SUFDMUJXLFdBQVc7UUFDVDtZQUNFQyxhQUFhO2dCQUFFYixNQUFNQztZQUFPO1lBQzVCYSxRQUFRO2dCQUFFZCxNQUFNQztZQUFPO1lBQ3ZCYyxjQUFjO2dCQUFFZixNQUFNQztZQUFPO1lBQzdCZSxNQUFLO2dCQUFDaEIsTUFBTUM7WUFBTTtRQUNwQjtLQUNEO0lBQ0RnQixnQkFBZ0I7UUFDZDtZQUNFQyxTQUFTO2dCQUFFbEIsTUFBTUM7WUFBTztZQUN4QmtCLFVBQVU7Z0JBQUVuQixNQUFNQztZQUFPO1lBQ3pCbUIsV0FBVztnQkFBRXBCLE1BQU1xQjtZQUFLO1lBQ3hCQyxTQUFTO2dCQUFFdEIsTUFBTXFCO1lBQUs7WUFDdEJFLGFBQWE7Z0JBQUV2QixNQUFNQztZQUFPO1FBQzlCO0tBQ0Q7SUFDRHVCLGdCQUFnQjtRQUFDO1lBQUV4QixNQUFNQztRQUFPO0tBQUU7SUFDbEN3QixnQkFBZ0I7UUFDZEMsUUFBUTtZQUFFMUIsTUFBTUM7UUFBTztRQUN2QjBCLFVBQVU7WUFBRTNCLE1BQU1DO1FBQU87UUFDekIyQixTQUFTO1lBQUU1QixNQUFNQztRQUFPO0lBQzFCO0lBQ0E0QixlQUFlO1FBQUM3QixNQUFLQztJQUFNO0lBQzNCNkIsV0FBVztRQUFFOUIsTUFBTXFCO1FBQU1VLFNBQVNWLEtBQUtXLEdBQUc7SUFBQztJQUMzQ0MsV0FBVztRQUFFakMsTUFBTXFCO1FBQU1VLFNBQVNWLEtBQUtXLEdBQUc7SUFBQztBQUM3QztBQUVBLDREQUE0RDtBQUM1RCxNQUFNRSxPQUFPdEMsd0RBQWUsQ0FBQ3NDLElBQUksSUFBSXRDLHFEQUFjLENBQUMsUUFBUUM7QUFDNUQsaUVBQWVxQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJEOlxcam9iIHNlZWtlclxcam9iX3NlZWtlclxcbGliXFxtb2RlbHNcXFVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXJJZDp7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICByb2xlOiB7IHR5cGU6IFN0cmluZywgZW51bTogW1wiam9iX3NlZWtlclwiLCBcImVtcGxveWVyXCJdLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGNvbnRhY3Q6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgbG9jYXRpb246IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgc2tpbGxzOiBbeyB0eXBlOiBTdHJpbmcgfV0sXHJcbiAgZWR1Y2F0aW9uOiBbXHJcbiAgICB7XHJcbiAgICAgIGluc3RpdHV0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgICBkZWdyZWU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAgIGZpZWxkT2ZTdHVkeTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgICAgeWVhcjp7dHlwZTogU3RyaW5nfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICB3b3JrRXhwZXJpZW5jZTogW1xyXG4gICAge1xyXG4gICAgICBjb21wYW55OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgICBwb3NpdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgICAgc3RhcnREYXRlOiB7IHR5cGU6IERhdGUgfSxcclxuICAgICAgZW5kRGF0ZTogeyB0eXBlOiBEYXRlIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNlcnRpZmljYXRpb25zOiBbeyB0eXBlOiBTdHJpbmcgfV0sXHJcbiAgcG9ydGZvbGlvTGlua3M6IHtcclxuICAgIGdpdGh1YjogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGxpbmtlZGluOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgd2Vic2l0ZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICB9LFxyXG4gIHByb2ZpbGVfcGhvdG86IHt0eXBlOlN0cmluZ30sXHJcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbiAgdXBkYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbn0pO1xyXG5cclxuLy8gRXhwb3J0IHRoZSBtb2RlbCBvciBjcmVhdGUgaXQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJlbnVtIiwiY29udGFjdCIsImxvY2F0aW9uIiwic2tpbGxzIiwiZWR1Y2F0aW9uIiwiaW5zdGl0dXRpb24iLCJkZWdyZWUiLCJmaWVsZE9mU3R1ZHkiLCJ5ZWFyIiwid29ya0V4cGVyaWVuY2UiLCJjb21wYW55IiwicG9zaXRpb24iLCJzdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsImRlc2NyaXB0aW9uIiwiY2VydGlmaWNhdGlvbnMiLCJwb3J0Zm9saW9MaW5rcyIsImdpdGh1YiIsImxpbmtlZGluIiwid2Vic2l0ZSIsInByb2ZpbGVfcGhvdG8iLCJjcmVhdGVkQXQiLCJkZWZhdWx0Iiwibm93IiwidXBkYXRlZEF0IiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/User.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const options = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect('mongodb+srv://roshan:roshan16@cluster0.hml76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', options).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsU0FBU0MsT0FBT0YsUUFBUTtBQUU1QixJQUFJLENBQUNDLFFBQVE7SUFDWEEsU0FBU0MsT0FBT0YsUUFBUSxHQUFHO1FBQUVHLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRU8sZUFBZUM7SUFDcEIsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLFVBQVU7WUFDZEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR0osdURBQWdCLENBQUMsMEdBQTBHTSxTQUFTRyxJQUFJLENBQUMsQ0FBQ1Q7WUFDekosT0FBT0E7UUFDVDtJQUNGO0lBRUFDLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDcEIiLCJzb3VyY2VzIjpbIkQ6XFxqb2Igc2Vla2VyXFxqb2Jfc2Vla2VyXFxsaWJcXG1vbmdvZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9yb3NoYW46cm9zaGFuMTZAY2x1c3RlcjAuaG1sNzYubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwJywgb3B0aW9ucykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwib3B0aW9ucyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fgetuser%2Froute&page=%2Fapi%2Fuser%2Fgetuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fgetuser%2Froute.js&appDir=D%3A%5Cjob%20seeker%5Cjob_seeker%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cjob%20seeker%5Cjob_seeker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();