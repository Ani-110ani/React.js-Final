(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/app/StoreProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function StoreProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ea88e46ad6a9c606d2e550a028d365fee306cced4cc20df11d5d066054844e6a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea88e46ad6a9c606d2e550a028d365fee306cced4cc20df11d5d066054844e6a";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/StoreProvider.js",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/NavBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/navbar/NavBar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NavigationLinks() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "ed7c74b5b8224c639ac256fda4e90be39e7c77448495dd4ffa1d7c7c3f74254a") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7c74b5b8224c639ac256fda4e90be39e7c77448495dd4ffa1d7c7c3f74254a";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const homeIsActive = pathname === "/" || pathname.startsWith("/products/");
    const t0 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${homeIsActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkActive : ""}`;
    const t1 = homeIsActive ? "page" : undefined;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t0 || $[4] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: t0,
            "aria-label": "Home",
            "aria-current": t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${pathname.startsWith("/cart") ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkActive : ""}`;
    const t6 = pathname.startsWith("/cart") ? "page" : undefined;
    let t7;
    let t8;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
            children: "Cart"
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t7;
        $[7] = t8;
    } else {
        t7 = $[6];
        t8 = $[7];
    }
    let t9;
    if ($[8] !== t5 || $[9] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/cart",
            className: t5,
            "aria-label": "Cart",
            "aria-current": t6,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    const t10 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${pathname.startsWith("/profile") ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkActive : ""}`;
    const t11 = pathname.startsWith("/profile") ? "page" : undefined;
    let t12;
    let t13;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 68,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
            children: "Account"
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 69,
            columnNumber: 11
        }, this);
        $[11] = t12;
        $[12] = t13;
    } else {
        t12 = $[11];
        t13 = $[12];
    }
    let t14;
    if ($[13] !== t10 || $[14] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/profile",
            className: t10,
            "aria-label": "Account",
            "aria-current": t11,
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 78,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].settings}`,
            "aria-label": "Settings",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/NavBar.jsx",
                    lineNumber: 87,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
                    children: "Settings"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/NavBar.jsx",
                    lineNumber: 87,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] !== t14 || $[18] !== t4 || $[19] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
            children: [
                t4,
                t9,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[17] = t14;
        $[18] = t4;
        $[19] = t9;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    return t16;
}
_s(NavigationLinks, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavigationLinks;
function NavBar() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ed7c74b5b8224c639ac256fda4e90be39e7c77448495dd4ffa1d7c7c3f74254a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ed7c74b5b8224c639ac256fda4e90be39e7c77448495dd4ffa1d7c7c3f74254a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
            "aria-label": "Morrow Market home",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandMark,
                    children: "M"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/NavBar.jsx",
                    lineNumber: 114,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandName,
                    children: "My Market"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/NavBar.jsx",
                    lineNumber: 114,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                "aria-label": "Main navigation",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/NavBar.jsx",
                            lineNumber: 121,
                            columnNumber: 127
                        }, this),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationLinks, {}, void 0, false, {
                            fileName: "[project]/src/components/navbar/NavBar.jsx",
                            lineNumber: 121,
                            columnNumber: 180
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/NavBar.jsx",
                        lineNumber: 121,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/NavBar.jsx",
                lineNumber: 121,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/NavBar.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c1 = NavBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavigationLinks");
__turbopack_context__.k.register(_c1, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/slices/cartSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "decreaseQuantity",
    ()=>decreaseQuantity,
    "default",
    ()=>__TURBOPACK__default__export__,
    "increaseQuantity",
    ()=>increaseQuantity,
    "removeFromCart",
    ()=>removeFromCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    cartProducts: [],
    totalPrice: 0,
    totalQuantity: 0
};
const cartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action)=>{
            const product = action.payload;
            const existingProduct = state.cartProducts.find((item)=>item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartProducts.push({
                    ...product,
                    quantity: 1
                });
            }
            state.totalQuantity += 1;
            state.totalPrice += product.price;
        },
        decreaseQuantity: (state, action)=>{
            const productId = action.payload;
            const existingProduct = state.cartProducts.find((item)=>item.id === productId);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= existingProduct.price;
            } else if (existingProduct && existingProduct.quantity === 1) {
                state.cartProducts = state.cartProducts.filter((item)=>item.id !== productId);
                state.totalQuantity -= 1;
                state.totalPrice -= existingProduct.price;
            }
        },
        increaseQuantity: (state, action)=>{
            const productId = action.payload;
            const existingProduct = state.cartProducts.find((item)=>item.id === productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += existingProduct.price;
            }
        },
        removeFromCart: (state, action)=>{
            const productId = action.payload;
            const existingProduct = state.cartProducts.find((item)=>item.id === productId);
            if (existingProduct) {
                state.cartProducts = state.cartProducts.filter((item)=>item.id !== productId);
                state.totalQuantity -= existingProduct.quantity;
                state.totalPrice -= existingProduct.price * existingProduct.quantity;
            }
        }
    }
});
const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } = cartSlice.actions;
const __TURBOPACK__default__export__ = cartSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/slices/userSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "loginSuccess",
    ()=>loginSuccess,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    token: null,
    isAuthenticated: false
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action)=>{
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state)=>{
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});
const { loginSuccess, logout } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/cartSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$userSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/userSlice.js [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        cart: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$userSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/src/components/navbar/NavBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "brand": "NavBar-module__2DWnya__brand",
  "brandMark": "NavBar-module__2DWnya__brandMark",
  "brandName": "NavBar-module__2DWnya__brandName",
  "header": "NavBar-module__2DWnya__header",
  "icon": "NavBar-module__2DWnya__icon",
  "inner": "NavBar-module__2DWnya__inner",
  "link": "NavBar-module__2DWnya__link",
  "linkActive": "NavBar-module__2DWnya__linkActive",
  "linkLabel": "NavBar-module__2DWnya__linkLabel",
  "links": "NavBar-module__2DWnya__links",
  "settings": "NavBar-module__2DWnya__settings",
});
}),
]);

//# sourceMappingURL=src_19vm7123nhgbs._.js.map