"use strict";
(() => {
var exports = {};
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 3663:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/executecode/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/dotenv/lib/main.js
var main = __webpack_require__(6191);
;// CONCATENATED MODULE: ./src/app/api/executecode/route.ts


main.config();
/*
{'result': 
    {'run_status': 
        {'status': 'NA'}, 
        'compile_status': 'Compiling...'
    }, 
    'he_id': '3064ee0f-9189-499b-be2c-f0fc68c8c9ab', 
    'status_update_url': 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/3064ee0f-9189-499b-be2c-f0fc68c8c9ab/', 
    'request_status': {'code': 'REQUEST_QUEUED', 'message': 'Your request has been queued in the evaluation pipeline'}
}
*/ function isError(object) {
    return "message" in object;
}
async function POST(request) {
    try {
        const req = await request.json();
        const newBody = {
            "lang": req.lang,
            "source": req.source,
            "input": req.input,
            "time_limit": 5,
            "memory_limit": 246323,
            "callback": req.callback,
            "id": "OCEC"
        };
        const url = "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/";
        const requestHeaders = new Headers();
        requestHeaders.set("Content-Type", "application/json");
        requestHeaders.set("client-secret", "e8daefb8f779919d0ce8f1228edf1bd83cd5f223");
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newBody),
            headers: requestHeaders
        }).then((response)=>response.json());
        if (response.message) {
            return next_response/* default */.Z.json(response);
        }
        // Now we wait
        const waitTime = 10; // 10 seconds
        const timer = (ms)=>new Promise((res)=>setTimeout(res, ms));
        var REQUEST_QUEUED = "REQUEST_QUEUED", CODE_COMPILED = "CODE_COMPILED", REQUEST_COMPLETED = "REQUEST_COMPLETED", REQUEST_FAILED = "REQUEST_FAILED";
        var executionCount = 0;
        while(executionCount < waitTime){
            const response_2 = await fetch(response.status_update_url, {
                headers: requestHeaders
            }).then((response_2)=>response_2.json());
            if (response_2.request_status.code === REQUEST_QUEUED) {
            // do smth i guess
            } else if (response_2.request_status.code === CODE_COMPILED) {
                // how the hell will i inform the front end that its compiled, i can use sockets
                if (response_2.result.compile_status === "OK") {
                // ok good
                } else {
                    // does this make sense 
                    return next_response/* default */.Z.json(response_2);
                }
            } else if (response_2.request_status.code === REQUEST_COMPLETED) {
                return next_response/* default */.Z.json(response_2);
            } else if (response_2.request_status.code === REQUEST_FAILED) {
                return next_response/* default */.Z.json(response_2);
            }
            executionCount++;
            await timer(1000);
        }
        throw new Error("unable to resolve data");
    } catch (err) {
        return next_response/* default */.Z.json({
            name: "error",
            error: err
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fexecutecode%2Froute&name=app%2Fapi%2Fexecutecode%2Froute&pagePath=private-next-app-dir%2Fapi%2Fexecutecode%2Froute.ts&appDir=%2FUsers%2Fkatumbela%2FDocuments%2FGitHub%2Feditor-test%2Fsrc%2Fapp&appPaths=%2Fapi%2Fexecutecode%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/executecode/route",
        pathname: "/api/executecode",
        filename: "route",
        bundlePath: "app/api/executecode/route"
    },
    resolvedPagePath: "/Users/katumbela/Documents/GitHub/editor-test/src/app/api/executecode/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/executecode/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,137], () => (__webpack_exec__(4136)));
module.exports = __webpack_exports__;

})();