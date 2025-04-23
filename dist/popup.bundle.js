/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/communications.ts":
/*!*******************************!*\
  !*** ./src/communications.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enviarConfiguracionAlOffscreen: () => (/* binding */ enviarConfiguracionAlOffscreen),
/* harmony export */   enviarConfiguracionCompresor: () => (/* binding */ enviarConfiguracionCompresor)
/* harmony export */ });
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.ts */ "./src/utils.ts");
/* harmony import */ var _state_memory_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state_memory.ts */ "./src/state_memory.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




// Función para enviar la configuración al offscreen
function enviarConfiguracionAlOffscreen(_x) {
  return _enviarConfiguracionAlOffscreen.apply(this, arguments);
}

// Función para enviar la configuración del compresor al script offscreen
function _enviarConfiguracionAlOffscreen() {
  _enviarConfiguracionAlOffscreen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(config) {
    var tabId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getActiveTabId();
        case 2:
          tabId = _context.sent;
          // Enviar configuración del volumen
          chrome.runtime.sendMessage({
            type: "ajustar-volumen",
            target: "offscreen",
            tabId: tabId,
            level: (0,_utils_ts__WEBPACK_IMPORTED_MODULE_0__.dbToGain)(config.volumen)
          });

          // Enviar configuración del compresor
          _context.next = 6;
          return enviarConfiguracionCompresor();
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _enviarConfiguracionAlOffscreen.apply(this, arguments);
}
function enviarConfiguracionCompresor() {
  return _enviarConfiguracionCompresor.apply(this, arguments);
}
function _enviarConfiguracionCompresor() {
  _enviarConfiguracionCompresor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var tabId;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.localEstado.capturingAudio) {
            _context2.next = 5;
            break;
          }
          _context2.next = 3;
          return getActiveTabId();
        case 3:
          tabId = _context2.sent;
          chrome.runtime.sendMessage({
            type: "ajustar-compresor",
            target: "offscreen",
            tabId: tabId,
            activo: _config_ts__WEBPACK_IMPORTED_MODULE_2__.compresorActivo,
            params: {
              threshold: _config_ts__WEBPACK_IMPORTED_MODULE_2__.compresorParams.threshold,
              ratio: _config_ts__WEBPACK_IMPORTED_MODULE_2__.compresorParams.ratio,
              knee: _config_ts__WEBPACK_IMPORTED_MODULE_2__.compresorParams.knee,
              attack: _config_ts__WEBPACK_IMPORTED_MODULE_2__.compresorParams.attack,
              release: _config_ts__WEBPACK_IMPORTED_MODULE_2__.compresorParams.release
            }
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _enviarConfiguracionCompresor.apply(this, arguments);
}

/***/ }),

/***/ "./src/compressor.ts":
/*!***************************!*\
  !*** ./src/compressor.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actualizarValorCompresor: () => (/* binding */ actualizarValorCompresor),
/* harmony export */   inicializarCompresor: () => (/* binding */ inicializarCompresor)
/* harmony export */ });
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");
/* harmony import */ var _state_memory_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state_memory.ts */ "./src/state_memory.ts");
/* harmony import */ var _communications_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communications.ts */ "./src/communications.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



// Función para inicializar los controles del compresor
function inicializarCompresor() {
  var compresorActivoCheckbox = document.getElementById('compresor-activo');
  if (!compresorActivoCheckbox) throw new Error("No se encontró el checkbox de compresor activo");
  var threshold = document.getElementById('threshold');
  if (!threshold) throw new Error("No se encontró el slider de threshold");
  var ratio = document.getElementById('ratio');
  if (!ratio) throw new Error("No se encontró el slider de ratio");
  var knee = document.getElementById('knee');
  if (!knee) throw new Error("No se encontró el slider de knee");
  var attack = document.getElementById('attack');
  if (!attack) throw new Error("No se encontró el slider de attack");
  var release = document.getElementById('release');
  if (!release) throw new Error("No se encontró el slider de release");

  // Actualizar valores mostrados
  (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('threshold', parseFloat(threshold.value));
  (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('ratio', parseFloat(ratio.value));
  (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('knee', parseFloat(knee.value));
  (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('attack', parseFloat(attack.value));
  (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('release', parseFloat(release.value));

  // Event listeners para cambios en los controles
  compresorActivoCheckbox.addEventListener('change', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorActivo)(this.checked);
          _context.next = 3;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_2__.enviarConfiguracionCompresor)();
        case 3:
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.guardarEstado)();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  })));
  threshold.addEventListener('input', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          actualizarValorCompresor('threshold', parseFloat(this.value));
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('threshold', parseFloat(this.value));
          _context2.next = 4;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_2__.enviarConfiguracionCompresor)();
        case 4:
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.guardarEstado)();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  })));
  ratio.addEventListener('input', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          actualizarValorCompresor('ratio', parseFloat(this.value));
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('ratio', parseFloat(this.value));
          _context3.next = 4;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_2__.enviarConfiguracionCompresor)();
        case 4:
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.guardarEstado)();
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this);
  })));
  knee.addEventListener('input', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          actualizarValorCompresor('knee', parseFloat(this.value));
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('knee', parseFloat(this.value));
          _context4.next = 4;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_2__.enviarConfiguracionCompresor)();
        case 4:
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.guardarEstado)();
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  })));
  attack.addEventListener('input', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          actualizarValorCompresor('attack', parseFloat(this.value));
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('attack', parseFloat(this.value));
          _context5.next = 4;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_2__.enviarConfiguracionCompresor)();
        case 4:
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.guardarEstado)();
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5, this);
  })));
  release.addEventListener('input', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          actualizarValorCompresor('release', parseFloat(this.value));
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('release', parseFloat(this.value));
          _context6.next = 4;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_2__.enviarConfiguracionCompresor)();
        case 4:
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.guardarEstado)();
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  })));
}

// Función para actualizar los valores mostrados del compresor
function actualizarValorCompresor(tipo, valor) {
  var valorElement = document.getElementById("".concat(tipo, "-value"));
  switch (tipo) {
    case 'threshold':
      valorElement.textContent = "".concat(valor, " dB");
      break;
    case 'ratio':
      valorElement.textContent = "".concat(valor, ":1");
      break;
    case 'knee':
      valorElement.textContent = "".concat(valor, " dB");
      break;
    case 'attack':
      // Convertir a milisegundos para mejor legibilidad
      var attackMs = (valor * 1000).toFixed(0);
      valorElement.textContent = "".concat(attackMs, " ms");
      break;
    case 'release':
      // Convertir a milisegundos para mejor legibilidad
      var releaseMs = (valor * 1000).toFixed(0);
      valorElement.textContent = "".concat(releaseMs, " ms");
      break;
  }
}

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeFrequencyMarker: () => (/* binding */ activeFrequencyMarker),
/* harmony export */   activeQMarker: () => (/* binding */ activeQMarker),
/* harmony export */   compresorActivo: () => (/* binding */ compresorActivo),
/* harmony export */   compresorParams: () => (/* binding */ compresorParams),
/* harmony export */   filters: () => (/* binding */ filters),
/* harmony export */   getActiveFrequencyMarker: () => (/* binding */ getActiveFrequencyMarker),
/* harmony export */   getActiveQMarker: () => (/* binding */ getActiveQMarker),
/* harmony export */   getCompresorActivo: () => (/* binding */ getCompresorActivo),
/* harmony export */   getCompresorParam: () => (/* binding */ getCompresorParam),
/* harmony export */   setActiveFrequencyMarker: () => (/* binding */ setActiveFrequencyMarker),
/* harmony export */   setActiveQMarker: () => (/* binding */ setActiveQMarker),
/* harmony export */   setCompresorActivo: () => (/* binding */ setCompresorActivo),
/* harmony export */   setCompresorParam: () => (/* binding */ setCompresorParam),
/* harmony export */   staticFiltering: () => (/* binding */ staticFiltering)
/* harmony export */ });
/* harmony import */ var _compressor_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compressor.ts */ "./src/compressor.ts");

var activeFrequencyMarker = null;
var activeQMarker = null;
var compresorActivo = false;
var staticFiltering = false;
var filters = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
var compresorParams = {
  threshold: -24,
  ratio: 4,
  knee: 30,
  attack: 0.003,
  release: 0.25
};
function setActiveFrequencyMarker(frequency) {
  activeFrequencyMarker = frequency;
}
function getActiveFrequencyMarker() {
  return activeFrequencyMarker;
}
function setActiveQMarker(q) {
  activeQMarker = q;
}
function getActiveQMarker() {
  return activeQMarker;
}
function setCompresorActivo(activo) {
  compresorActivo = activo;
}
function getCompresorActivo() {
  return compresorActivo;
}
function setCompresorParam(param, value) {
  compresorParams[param] = value;
  (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_0__.actualizarValorCompresor)(param, value);
}
function getCompresorParam(param) {
  return compresorParams[param];
}

/***/ }),

/***/ "./src/filters_interface.ts":
/*!**********************************!*\
  !*** ./src/filters_interface.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actualizarEstiloFiltros: () => (/* binding */ actualizarEstiloFiltros),
/* harmony export */   cargarFiltros: () => (/* binding */ cargarFiltros)
/* harmony export */ });
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var MIN_FREQ = 20; // 20 Hz
var MAX_FREQ = 20000; // 20 kHz
var OCTAVE_RANGE = Math.log2(MAX_FREQ / MIN_FREQ); // Aproximadamente 10 octavas

var filtrosActivos = [];
document.addEventListener("DOMContentLoaded", function () {
  var botonAgregarFiltro = document.getElementById("agregar-filtro");
  if (!botonAgregarFiltro) {
    throw new Error("No se encontró el botón de agregar filtro");
  }
  botonAgregarFiltro.addEventListener("click", function () {
    var id = crypto.randomUUID();
    var filtro = {
      id: id,
      freq: 1000,
      q: 5,
      gain: 0,
      bypass: false
    };
    crearFiltroCard(filtro);
    filtrosActivos.push(filtro);
    enviarActualizacion(filtro);
    guardarFiltros();
  });
});

// Función para convertir valor del slider (0-100) a frecuencia (20-20000 Hz) en escala de octavas
function sliderToFreq(sliderValue) {
  // Convertir el valor del slider (0-100) a un valor en escala de octavas entre 20Hz y 20kHz
  return Math.round(MIN_FREQ * Math.pow(2, sliderValue / 100 * OCTAVE_RANGE));
}

// Función para convertir frecuencia (20-20000 Hz) a valor del slider (0-100) en escala de octavas
function freqToSlider(freq) {
  // Convertir la frecuencia a un valor de slider (0-100) usando escala de octavas
  return Math.round(Math.log2(freq / MIN_FREQ) / OCTAVE_RANGE * 100);
}
function crearFiltroCard(filtro) {
  var contenedor = document.createElement("div");
  if (!contenedor) throw new Error("No se encontró el contenedor de filtros");
  contenedor.className = "filtro-card";
  contenedor.setAttribute("data-id", filtro.id);

  // Verificar si el modo oscuro está activo
  var isDarkMode = document.body.classList.contains('dark-mode');
  var bgColor = isDarkMode ? "#2a2a2a" : "#f5f5ff";
  var textColor = isDarkMode ? "#e0e0e0" : "#333";
  var buttonBgColor = isDarkMode ? "#4a2a2a" : "#ffdcdc";
  var buttonTextColor = isDarkMode ? "#e0e0e0" : "#333";

  // Actualizar el estilo con los colores apropiados
  contenedor.style.cssText = "padding: 7px; background: ".concat(bgColor, "; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; gap: 6px; position: relative; color: ").concat(textColor, ";");
  contenedor.innerHTML = "\n        <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;\">\n            <label class=\"bypass-container\" style=\"display: flex; align-items: center; margin: 0;\">\n                <input type=\"checkbox\" class=\"bypass-checkbox\" ".concat(filtro.bypass ? 'checked' : '', ">\n                <span style=\"margin-left: 5px; font-size: 0.85em;\">Bypass</span>\n            </label>\n            <button class=\"eliminar\" style=\"background: ").concat(buttonBgColor, "; color: ").concat(buttonTextColor, "; border: none; border-radius: 50%; width: 20px; height: 20px; font-weight: bold; cursor: pointer; font-size: 14px;\">\xD7</button>\n        </div>\n        <div style=\"display: grid; grid-template-columns: auto 1fr; grid-gap: 2px 8px; align-items: center; font-size: 0.9em;\">\n            <div>Freq (Hz)</div>\n            <div style=\"display: flex; align-items: center;\">\n                <input type=\"range\" min=\"0\" max=\"100\" step=\"1\" value=\"").concat(freqToSlider(filtro.freq), "\" class=\"freq\" style=\"flex: 1; margin: 0 5px 0 0;\">\n                <span class=\"freq-value\" style=\"min-width: 40px; text-align: right;\">").concat(filtro.freq, "</span>\n            </div>\n            \n            <div>Q</div>\n            <div style=\"display: flex; align-items: center;\">\n                <input type=\"range\" min=\"0.1\" max=\"10\" step=\"0.1\" value=\"").concat(filtro.q, "\" class=\"q\" style=\"flex: 1; margin: 0 5px 0 0;\">\n                <span class=\"q-value\" style=\"min-width: 40px; text-align: right;\">").concat(filtro.q, "</span>\n            </div>\n            \n            <div>Gain (dB)</div>\n            <div style=\"display: flex; align-items: center;\">\n                <input type=\"range\" min=\"-30\" max=\"30\" step=\"1\" value=\"").concat(filtro.gain, "\" class=\"gain\" style=\"flex: 1; margin: 0 5px 0 0;\">\n                <span class=\"gain-value\" style=\"min-width: 40px; text-align: right;\">").concat(filtro.gain, "</span>\n            </div>\n        </div>\n    ");
  var freqSlider = contenedor.querySelector(".freq");
  if (!freqSlider) throw new Error("No se encontró el slider de frecuencia");
  var freqValue = contenedor.querySelector(".freq-value");
  if (!freqValue) throw new Error("No se encontró el valor de frecuencia");
  freqSlider.addEventListener("input", function (e) {
    var target = e.currentTarget;
    var frecuencia = sliderToFreq(parseFloat(target.value));
    freqValue.textContent = frecuencia.toString();
    filtro.freq = frecuencia;
    enviarActualizacion(filtro);
    guardarFiltros();
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveFrequencyMarker)(filtro.freq);
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(filtro.q);
  });
  freqSlider.addEventListener("mouseenter", function () {
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveFrequencyMarker)(filtro.freq);
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(filtro.q);
  });
  freqSlider.addEventListener("mouseleave", function () {
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveFrequencyMarker)(null);
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(null);
  });
  var qSlider = contenedor.querySelector(".q");
  if (!qSlider) throw new Error("No se encontró el slider de Q");
  var qValue = contenedor.querySelector(".q-value");
  if (!qValue) throw new Error("No se encontró el valor de Q");
  qSlider.addEventListener("input", function (e) {
    var target = e.currentTarget;
    var q = parseFloat(target.value);
    qValue.textContent = q.toString();
    filtro.q = q;
    enviarActualizacion(filtro);
    guardarFiltros();
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(filtro.q);
  });
  qSlider.addEventListener("mouseenter", function () {
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveFrequencyMarker)(filtro.freq);
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(filtro.q);
  });
  qSlider.addEventListener("mouseleave", function () {
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveFrequencyMarker)(null);
    (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(null);
  });
  var gainSlider = contenedor.querySelector(".gain");
  if (!gainSlider) throw new Error("No se encontró el slider de gain");
  var gainValue = contenedor.querySelector(".gain-value");
  if (!gainValue) throw new Error("No se encontró el valor de gain");
  gainSlider.addEventListener("input", function (e) {
    var target = e.currentTarget;
    var gain = parseFloat(target.value);
    gainValue.textContent = gain.toString();
    filtro.gain = gain;
    enviarActualizacion(filtro);
    guardarFiltros();
  });

  // Agregar evento para el checkbox de bypass
  var bypassCheckbox = contenedor.querySelector(".bypass-checkbox");
  if (!bypassCheckbox) throw new Error("No se encontró el checkbox de bypass");
  bypassCheckbox.addEventListener("change", function (e) {
    var target = e.currentTarget;
    filtro.bypass = target.checked;
    enviarActualizacion(filtro);
    guardarFiltros();
  });
  var eliminarBtn = contenedor.querySelector(".eliminar");
  if (!eliminarBtn) throw new Error("No se encontró el botón de eliminar");
  eliminarBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var tabId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          contenedor.remove();
          filtrosActivos = filtrosActivos.filter(function (f) {
            return f.id !== filtro.id;
          });
          _context.next = 4;
          return getActiveTabId();
        case 4:
          tabId = _context.sent;
          chrome.runtime.sendMessage({
            type: "eliminar-filtro-dinamico",
            filtroId: filtro.id,
            tabId: tabId
          });
          guardarFiltros();
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveFrequencyMarker)(null);
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setActiveQMarker)(null);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  var filtrosContainer = document.getElementById("filtros-container");
  if (!filtrosContainer) throw new Error("No se encontró el contenedor de filtros");
  filtrosContainer.appendChild(contenedor);
}
function enviarActualizacion(_x) {
  return _enviarActualizacion.apply(this, arguments);
}
function _enviarActualizacion() {
  _enviarActualizacion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filtro) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = chrome.runtime;
          _context2.t1 = filtro.id;
          _context2.t2 = filtro.freq;
          _context2.t3 = filtro.q;
          _context2.t4 = filtro.gain;
          _context2.t5 = filtro.bypass;
          _context2.next = 8;
          return getActiveTabId();
        case 8:
          _context2.t6 = _context2.sent;
          _context2.t7 = {
            type: "actualizar-filtro-dinamico",
            filtroId: _context2.t1,
            freq: _context2.t2,
            q: _context2.t3,
            gain: _context2.t4,
            bypass: _context2.t5,
            tabId: _context2.t6
          };
          _context2.t0.sendMessage.call(_context2.t0, _context2.t7);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _enviarActualizacion.apply(this, arguments);
}
function guardarFiltros() {
  chrome.storage.local.set({
    filtrosDinamicos: filtrosActivos
  });
}
function cargarFiltros() {
  chrome.storage.local.get("filtrosDinamicos", function (data) {
    if (Array.isArray(data.filtrosDinamicos)) {
      filtrosActivos = data.filtrosDinamicos;
      filtrosActivos.forEach(function (filtro) {
        // Asegurarse de que el filtro tenga la propiedad bypass
        if (filtro.bypass === undefined) {
          filtro.bypass = false;
        }
        crearFiltroCard(filtro);
        enviarActualizacion(filtro);
      });
    }
  });
  observarCambiosTema();
}

// Función para actualizar los filtros cuando cambia el tema
function actualizarEstiloFiltros() {
  var isDarkMode = document.body.classList.contains('dark-mode');
  var filtroCards = document.querySelectorAll('.filtro-card');
  filtroCards.forEach(function (card) {
    var bgColor = isDarkMode ? "#2a2a2a" : "#f5f5ff";
    var textColor = isDarkMode ? "#e0e0e0" : "#333";
    card.style.background = bgColor;
    card.style.color = textColor;
    var eliminarBtn = card.querySelector('.eliminar');
    if (eliminarBtn) {
      eliminarBtn.style.background = isDarkMode ? "#4a2a2a" : "#ffdcdc";
      eliminarBtn.style.color = isDarkMode ? "#e0e0e0" : "#333";
    }
  });
}

// Observar cambios en el tema
function observarCambiosTema() {
  // Añadir event listener al checkbox de modo oscuro
  var darkModeCheckbox = document.getElementById('dark-mode');
  if (darkModeCheckbox) {
    darkModeCheckbox.addEventListener('change', actualizarEstiloFiltros);
  }
}

// to do: 
// 1. que cuando se desactive el audio, las barras caigan con gracia
// 2. hacer andar el volumen
// 3. ver porque no se carga el audio volumen cuando desactivo y reactivo el audio(pero si el slider)

/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aplicarConfiguracion: () => (/* binding */ aplicarConfiguracion),
/* harmony export */   obtenerConfiguracionActual: () => (/* binding */ obtenerConfiguracionActual),
/* harmony export */   updateVolumeText: () => (/* binding */ updateVolumeText)
/* harmony export */ });
/* harmony import */ var _state_memory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state_memory.ts */ "./src/state_memory.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");
/* harmony import */ var _compressor_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compressor.ts */ "./src/compressor.ts");
/* harmony import */ var _communications_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communications.ts */ "./src/communications.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






// Función para aplicar una configuración cargada
function aplicarConfiguracion(_x) {
  return _aplicarConfiguracion.apply(this, arguments);
}

// Actualizar el texto del valor de volumen en dB
function _aplicarConfiguracion() {
  _aplicarConfiguracion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(config) {
    var volumenSlider, darkModeCheckbox, compresorActivoCheckbox, thresholdSlider, ratioSlider, kneeSlider, attackSlider, releaseSlider, filtrosContainer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log("Aplicando configuración:", config);

          // Aplicar volumen
          volumenSlider = document.getElementById('volumen');
          if (volumenSlider) {
            _context2.next = 5;
            break;
          }
          console.error("[ERROR] No se encontró el slider de volumen");
          return _context2.abrupt("return");
        case 5:
          volumenSlider.value = config.volumen.toString();
          updateVolumeText(config.volumen);

          // Aplicar modo oscuro
          darkModeCheckbox = document.getElementById('dark-mode');
          if (config.darkMode) {
            document.body.classList.add('dark-mode');
            darkModeCheckbox.checked = true;
          } else {
            document.body.classList.remove('dark-mode');
            darkModeCheckbox.checked = false;
          }

          // Aplicar configuración del compresor
          compresorActivoCheckbox = document.getElementById('compresor-activo');
          thresholdSlider = document.getElementById('threshold');
          ratioSlider = document.getElementById('ratio');
          kneeSlider = document.getElementById('knee');
          attackSlider = document.getElementById('attack');
          releaseSlider = document.getElementById('release');
          compresorActivoCheckbox.checked = config.compresor.activo;
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_1__.setCompresorActivo)(config.compresor.activo);
          thresholdSlider.value = config.compresor.threshold.toString();
          _config_ts__WEBPACK_IMPORTED_MODULE_1__.compresorParams.threshold = config.compresor.threshold;
          (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_2__.actualizarValorCompresor)('threshold', config.compresor.threshold);
          ratioSlider.value = config.compresor.ratio.toString();
          _config_ts__WEBPACK_IMPORTED_MODULE_1__.compresorParams.ratio = config.compresor.ratio;
          (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_2__.actualizarValorCompresor)('ratio', config.compresor.ratio);
          kneeSlider.value = config.compresor.knee.toString();
          _config_ts__WEBPACK_IMPORTED_MODULE_1__.compresorParams.knee = config.compresor.knee;
          (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_2__.actualizarValorCompresor)('knee', config.compresor.knee);
          attackSlider.value = config.compresor.attack.toString();
          _config_ts__WEBPACK_IMPORTED_MODULE_1__.compresorParams.attack = config.compresor.attack;
          (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_2__.actualizarValorCompresor)('attack', config.compresor.attack);
          releaseSlider.value = config.compresor.release.toString();
          _config_ts__WEBPACK_IMPORTED_MODULE_1__.compresorParams.release = config.compresor.release;
          (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_2__.actualizarValorCompresor)('release', config.compresor.release);

          // Limpiar filtros dinámicos actuales
          filtrosContainer = document.getElementById('filtros-container');
          if (filtrosContainer) {
            _context2.next = 36;
            break;
          }
          console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
          return _context2.abrupt("return");
        case 36:
          filtrosContainer.innerHTML = '';

          // Importar la función necesaria para crear filtros
          _context2.prev = 37;
          if (!(config.filtrosDinamicos && config.filtrosDinamicos.length > 0)) {
            _context2.next = 42;
            break;
          }
          // Guardar los filtros en el storage local para que cargarFiltros los encuentre
          chrome.storage.local.set({
            filtrosDinamicos: config.filtrosDinamicos
          }, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var filtersModule;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __webpack_require__.e(/*! import() */ "src_filters_interface_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filters_interface.ts */ "./src/filters_interface.ts"));
                case 2:
                  filtersModule = _context.sent;
                  filtersModule.cargarFiltros();

                  // Enviar configuración al offscreen si está capturando audio
                  if (!_state_memory_ts__WEBPACK_IMPORTED_MODULE_0__.localEstado.capturingAudio) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 7;
                  return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_3__.enviarConfiguracionAlOffscreen)(config);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
          _context2.next = 45;
          break;
        case 42:
          if (!_state_memory_ts__WEBPACK_IMPORTED_MODULE_0__.localEstado.capturingAudio) {
            _context2.next = 45;
            break;
          }
          _context2.next = 45;
          return (0,_communications_ts__WEBPACK_IMPORTED_MODULE_3__.enviarConfiguracionAlOffscreen)(config);
        case 45:
          _context2.next = 50;
          break;
        case 47:
          _context2.prev = 47;
          _context2.t0 = _context2["catch"](37);
          console.error("Error al cargar los filtros:", _context2.t0);
        case 50:
          // Guardar el estado actualizado
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_0__.guardarEstado)();
        case 51:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[37, 47]]);
  }));
  return _aplicarConfiguracion.apply(this, arguments);
}
function updateVolumeText(dbValue) {
  var volumeValueElement = document.getElementById("volumen-value");
  if (volumeValueElement) {
    volumeValueElement.textContent = "".concat(dbValue, " dB");
  }
}
// Función para obtener la configuración actual
function obtenerConfiguracionActual() {
  var confInterface = {
    volumen: 0,
    filtrosDinamicos: [],
    compresor: {
      activo: false,
      threshold: 0,
      ratio: 1,
      knee: 0,
      attack: 0.1,
      release: 0.1
    },
    darkMode: false
  };

  // Obtener valores de volumen
  var volumenSlider = document.getElementById('volumen');
  if (!volumenSlider) {
    console.error("[ERROR] No se encontró el slider de volumen");
    return confInterface;
  } else confInterface.volumen = parseFloat(volumenSlider.value);

  // Obtener valores de filtros dinámicos
  var filtrosContainer = document.getElementById('filtros-container');
  if (!filtrosContainer) {
    console.error("[ERROR] No se encontró el contenedor de filtros dinámicos");
    return confInterface;
  }
  var filtrosElements = filtrosContainer.querySelectorAll('.filtro-dinamico');
  var filtrosDinamicos = [];
  filtrosElements.forEach(function (filtroElement) {
    if (!(filtroElement instanceof HTMLElement)) {
      console.error("[ERROR] Elemento de filtro no es un HTMLElement");
      return;
    }
    var frecuenciaInput = filtroElement.querySelector('.frecuencia');
    var qInput = filtroElement.querySelector('.q');
    var gananciaInput = filtroElement.querySelector('.ganancia');
    var bypassInput = filtroElement.querySelector('.bypass');
    var fd = {
      id: filtroElement.dataset.id || '',
      frecuencia: parseFloat(frecuenciaInput.value),
      q: parseFloat(qInput.value),
      ganancia: parseFloat(gananciaInput.value),
      bypass: bypassInput.checked
    };
    filtrosDinamicos.push(fd);
  });

  // Obtener configuración del compresor
  var compresorCheckbox = document.getElementById('compresor-activo');
  var compresorActivo = compresorCheckbox.checked;
  var thresholdInput = document.getElementById('threshold');
  var ratioInput = document.getElementById('ratio');
  var kneeInput = document.getElementById('knee');
  var attackInput = document.getElementById('attack');
  var releaseInput = document.getElementById('release');
  confInterface = {
    volumen: parseFloat(volumenSlider.value),
    filtrosDinamicos: filtrosDinamicos,
    compresor: {
      activo: compresorActivo,
      threshold: parseFloat(thresholdInput.value),
      ratio: parseFloat(ratioInput.value),
      knee: parseFloat(kneeInput.value),
      attack: parseFloat(attackInput.value),
      release: parseFloat(releaseInput.value)
    },
    darkMode: document.body.classList.contains('dark-mode')
  };
  return confInterface;
}

/***/ }),

/***/ "./src/state_memory.ts":
/*!*****************************!*\
  !*** ./src/state_memory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cargarEstado: () => (/* binding */ cargarEstado),
/* harmony export */   cargarListaPresets: () => (/* binding */ cargarListaPresets),
/* harmony export */   clearStorage: () => (/* binding */ clearStorage),
/* harmony export */   guardarEstado: () => (/* binding */ guardarEstado),
/* harmony export */   localEstado: () => (/* binding */ localEstado),
/* harmony export */   saveValue: () => (/* binding */ saveValue)
/* harmony export */ });
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

;
// "capturingAudio" | "darkMode" | "compresor" | "gainAudio"
var localEstado = {};
function saveValue(valueName, value) {
  chrome.storage.local.get("estado", function (data) {
    var estado = data.estado || {};
    estado[valueName] = value;
    chrome.storage.local.set({
      estado: estado
    });
  });
  localEstado[valueName] = value;
}

// Función para cargar el estado guardado
function cargarEstado() {
  chrome.storage.local.get("estado", function (data) {
    if (data.estado) {
      var estado = data.estado;
      localEstado = estado;
      console.log("[INFO] Estado cargado:", estado);
      if (localEstado.capturingAudio) {
        var botonActivar = document.getElementById("activar");
        if (!botonActivar) throw new Error("No se encontró el botón de activar");
        botonActivar.textContent = "Detener Audio 🔇";
      }

      // Cargar volumen
      if (estado.gainAudio !== undefined) {
        var volumen = document.getElementById("volumen");
        if (!volumen) throw new Error("No se encontró el slider de volumen");
        volumen.value = estado.gainAudio.toString();
        var volumen_value = document.getElementById("volumen-value");
        if (!volumen_value) throw new Error("No se encontró el valor de volumen");
        volumen_value.textContent = "".concat(estado.gainAudio, " dB");
      }

      // Cargar modo oscuro
      if (estado.darkMode !== undefined) {
        if (estado.darkMode) {
          document.body.classList.add('dark-mode');
          var dark_mode_enabled = document.getElementById('dark-mode');
          if (!dark_mode_enabled) throw new Error("No se encontró el checkbox de modo oscuro");
          dark_mode_enabled.checked = true;
        } else {
          document.body.classList.remove('dark-mode');
          var _dark_mode_enabled = document.getElementById('dark-mode');
          if (!_dark_mode_enabled) throw new Error("No se encontró el checkbox de modo oscuro");
          _dark_mode_enabled.checked = false;
        }
      }

      // Cargar configuración del compresor
      if (estado.compresor) {
        var compresor_activo = document.getElementById('compresor-activo');
        if (!compresor_activo) throw new Error("No se encontró el checkbox de compresor activo");
        compresor_activo.checked = estado.compresor.activo;
        (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorActivo)(estado.compresor.activo);
        if (estado.compresor.threshold !== undefined) {
          var threshold = document.getElementById('threshold');
          if (!threshold) throw new Error("No se encontró el slider de threshold");
          threshold.value = estado.compresor.threshold.toString();
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('threshold', parseFloat(threshold.value));
        }
        if (estado.compresor.ratio !== undefined) {
          var ratio = document.getElementById('ratio');
          if (!ratio) throw new Error("No se encontró el slider de ratio");
          ratio.value = estado.compresor.ratio.toString();
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('ratio', parseFloat(ratio.value));
        }
        if (estado.compresor.knee !== undefined) {
          var knee = document.getElementById('knee');
          if (!knee) throw new Error("No se encontró el slider de knee");
          knee.value = estado.compresor.knee.toString();
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('knee', parseFloat(knee.value));
        }
        if (estado.compresor.attack !== undefined) {
          var attack = document.getElementById('attack');
          if (!attack) throw new Error("No se encontró el slider de attack");
          attack.value = estado.compresor.attack.toString();
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('attack', parseFloat(attack.value));
        }
        if (estado.compresor.release !== undefined) {
          var release = document.getElementById('release');
          if (!release) throw new Error("No se encontró el slider de release");
          release.value = estado.compresor.release.toString();
          (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.setCompresorParam)('release', parseFloat(release.value));
        }
      }
    }
  });
}

// Guardar y restaurar estado de los 8 sliders + estado de audio
function guardarEstado() {
  var volumen = document.getElementById("volumen");
  if (!volumen) throw new Error("No se encontró el slider de volumen");
  var estado = {
    capturingAudio: localEstado.capturingAudio,
    darkMode: document.body.classList.contains('dark-mode'),
    compresor: {
      activo: (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.getCompresorActivo)(),
      threshold: (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.getCompresorParam)('threshold'),
      ratio: (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.getCompresorParam)('ratio'),
      knee: (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.getCompresorParam)('knee'),
      attack: (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.getCompresorParam)('attack'),
      release: (0,_config_ts__WEBPACK_IMPORTED_MODULE_0__.getCompresorParam)('release')
    },
    gainAudio: parseFloat(volumen.value)
  };
  chrome.storage.local.set({
    "estado": estado
  });
  console.log("[INFO] Estado guardado:", estado);
}

// Función para cargar la lista de presets en el selector
function cargarListaPresets() {
  var presetSelect = document.getElementById('preset-select');
  if (!presetSelect) throw new Error("No se encontró el selector de presets");

  // Limpiar opciones actuales
  while (presetSelect.options.length > 1) {
    presetSelect.remove(1);
  }

  // Cargar presets desde storage
  chrome.storage.local.get(['presets'], function (result) {
    var presets = result.presets || {};

    // Agregar cada preset como una opción
    Object.keys(presets).forEach(function (nombrePreset) {
      var option = document.createElement('option');
      option.value = nombrePreset;
      option.textContent = nombrePreset;
      presetSelect.appendChild(option);
    });
  });
}
function clearStorage() {
  return _clearStorage.apply(this, arguments);
}
function _clearStorage() {
  _clearStorage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("[INFO] Primera apertura del popup desde la inicialización - Limpiando storage");
          // Limpiar todas las variables guardadas
          _context.next = 3;
          return chrome.storage.local.clear();
        case 3:
          // Guardar que el audio está desactivado
          chrome.storage.local.set({
            capturingAudio: false
          });
          localEstado = {};
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _clearStorage.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dbToGain: () => (/* binding */ dbToGain),
/* harmony export */   smoothPoints: () => (/* binding */ smoothPoints)
/* harmony export */ });
function smoothPoints(points, windowSize, canvasWidth) {
  if (points.length <= windowSize) return points;
  var smoothed = [];
  smoothed.push(points[0]);
  for (var i = 1; i < points.length - 1; i++) {
    // const adaptiveWindow = Math.min(
    var adaptiveWindow = Math.max(2, Math.floor(windowSize * Math.pow(points[i].x / canvasWidth, 2) * 3));
    var halfWindow = Math.floor(adaptiveWindow / 2);
    var startIdx = Math.max(0, i - halfWindow);
    var endIdx = Math.min(points.length - 1, i + halfWindow);
    var sumY = 0;
    for (var j = startIdx; j <= endIdx; j++) {
      sumY += points[j].y;
    }
    var avgY = sumY / (endIdx - startIdx + 1);
    smoothed.push({
      x: points[i].x,
      y: avgY
    });
  }
  if (points.length > 1) {
    smoothed.push(points[points.length - 1]);
  }
  return smoothed;
}

// Función para convertir dB a valor de ganancia para Web Audio API
function dbToGain(db) {
  return Math.pow(10, db / 20);
}

/***/ }),

/***/ "./src/visualizer.ts":
/*!***************************!*\
  !*** ./src/visualizer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawVisualizer: () => (/* binding */ drawVisualizer)
/* harmony export */ });
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.ts */ "./src/utils.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");


// export function drawVisualizer(data: { [key: string]: number[] | number }) {
function drawVisualizer(data) {
  var preData = data["pre"] || [];
  var midData = data["mid"] || [];
  var postData = data["post"] || [];
  var minDecibels = data["minDecibels"] || -100;
  var maxDecibels = data["maxDecibels"] || -25;
  var canvas = document.getElementById("visual");
  var ctx = null;
  if (canvas instanceof HTMLCanvasElement) {
    ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Critical: Canvas context not found or 'visual' element is not a canvas.");
  } else {
    throw new Error("Critical: 'visual' element is not a canvas.");
  }
  var bufferLength = preData.length;

  // Detectar si el modo oscuro está activo
  var isDarkMode = document.body.classList.contains('dark-mode');

  // Fondo adaptado al tema actual
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = isDarkMode ? "#121212" : "#fefefe"; // Oscuro o claro según el tema
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Función para normalizar valores de dB a altura de barra (0-1)
  var normalizeDb = function normalizeDb(dbValue) {
    // Limitar el valor entre minDecibels y maxDecibels
    var clampedDb = Math.max(minDecibels, Math.min(maxDecibels, dbValue));
    // Normalizar a un valor entre 0 y 1
    return (clampedDb - minDecibels) / (maxDecibels - minDecibels);
  };

  // Dibujar escala de frecuencia logarítmica
  ctx.fillStyle = isDarkMode ? "#aaaaaa" : "#aaa";
  ctx.font = "10px Arial";
  var freqLabels = [30, 60, 120, 250, 500, 1000, 2000, 4000, 8000, 17000];
  freqLabels.forEach(function (freq, index) {
    // Convertir frecuencia a posición X usando escala de octavas
    var octave = Math.log2(freq / 20); // Número de octavas desde 20Hz
    var totalOctaves = Math.log2(17000 / 20); // Aproximadamente 9.7 octavas (hasta 17kHz)
    var x = octave / totalOctaves * canvas.width;

    // Aplicar offset a todas las líneas excepto la última (17kHz)
    if (index < freqLabels.length - 1) {
      var offsetFactor = 1 - index / (freqLabels.length - 1);
      x += 10 * offsetFactor;
    }

    // Dibujar línea vertical
    ctx.strokeStyle = isDarkMode ? "#333333" : "#ddd";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();

    // Dibujar etiqueta
    ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
    ctx.fillText(freq >= 1000 ? "".concat(freq / 1000, "k") : freq.toString(), x - 10, canvas.height - 5);
  });

  // Dibujar escala de dB
  var dbLabels = [-90, -80, -70, -60, -50, -40, -30];
  dbLabels.forEach(function (db) {
    var y = canvas.height - normalizeDb(db) * canvas.height;

    // Dibujar línea horizontal
    ctx.strokeStyle = isDarkMode ? "#333333" : "#eee";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();

    // Dibujar etiqueta
    ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
    ctx.fillText("".concat(db, " dB"), 5, y + 12);
  });

  // Calcular posiciones de puntos en escala de octavas
  var prePoints = [];
  var midPoints = [];
  var postPoints = [];

  // Crear posiciones de puntos en escala de octavas
  for (var i = 0; i < bufferLength; i++) {
    // Calculamos la frecuencia correspondiente a cada bin de la FFT
    // La FFT divide el rango de frecuencias en partes iguales (lineales)
    // Pero queremos visualizarlas en escala de octavas
    var freqRatio = i / bufferLength; // Posición relativa en el array (0-1)
    var nyquistFreq = 22050; // Frecuencia máxima representable (sampleRate/2)

    // Frecuencia lineal correspondiente al bin i de la FFT
    var linearFreq = freqRatio * nyquistFreq;

    // Solo procesamos hasta 17kHz
    if (linearFreq > 17000) break;

    // Solo incluimos frecuencias desde 20Hz
    if (linearFreq < 20) continue;

    // Convertir frecuencia a posición X usando escala de octavas
    var octave = Math.log2(linearFreq / 20); // Número de octavas desde 20Hz
    var totalOctaves = Math.log2(17000 / 20); // Aproximadamente 9.7 octavas (hasta 17kHz)
    var x = octave / totalOctaves * canvas.width * 0.995; // Usar el valor exacto de octavas

    // Almacenar puntos con sus valores de amplitud
    if (i < preData.length) {
      var y = canvas.height - normalizeDb(preData[i]) * canvas.height;
      prePoints.push({
        x: x,
        y: y
      });
    }

    // Nuevo: almacenar puntos para el visualizador intermedio
    if (i < midData.length) {
      var _y = canvas.height - normalizeDb(midData[i]) * canvas.height;
      midPoints.push({
        x: x,
        y: _y
      });
    }
    if (i < postData.length) {
      var _y2 = canvas.height - normalizeDb(postData[i]) * canvas.height;
      postPoints.push({
        x: x,
        y: _y2
      });
    }
  }

  // Aplicar suavizado a los puntos
  var smoothedPrePoints = (0,_utils_ts__WEBPACK_IMPORTED_MODULE_0__.smoothPoints)(prePoints, 7, canvas.width);
  var smoothedMidPoints = (0,_utils_ts__WEBPACK_IMPORTED_MODULE_0__.smoothPoints)(midPoints, 7, canvas.width);
  var smoothedPostPoints = (0,_utils_ts__WEBPACK_IMPORTED_MODULE_0__.smoothPoints)(postPoints, 7, canvas.width);

  // Efecto glow
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Pre-EQ: violeta vivo con glow
  ctx.shadowColor = "rgba(190, 90, 255, 0.4)";
  ctx.strokeStyle = "rgba(190, 90, 255, 0.8)";
  ctx.fillStyle = "rgba(190, 90, 255, 0.3)";
  ctx.lineWidth = 2;

  // Dibujar línea para pre-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  // Dibujar la línea que une los puntos
  smoothedPrePoints.forEach(function (point) {
    ctx.lineTo(point.x, point.y);
  });

  // Cerrar el path hasta la base
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();

  // Rellenar el área bajo la curva
  ctx.fill();

  // Dibujar la línea del contorno
  ctx.beginPath();
  if (smoothedPrePoints.length > 0) {
    ctx.moveTo(smoothedPrePoints[0].x, smoothedPrePoints[0].y);
    for (var _i = 1; _i < smoothedPrePoints.length; _i++) {
      ctx.lineTo(smoothedPrePoints[_i].x, smoothedPrePoints[_i].y);
    }
    ctx.stroke();
  }

  // Nuevo: Mid-EQ (después de filtros, antes de compresor): amarillo/naranja con glow
  ctx.shadowColor = "rgba(255, 180, 50, 0.4)";
  ctx.strokeStyle = "rgba(255, 180, 50, 0.8)";
  ctx.fillStyle = "rgba(255, 180, 50, 0.3)";

  // Dibujar línea para mid-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  // Dibujar la línea que une los puntos
  smoothedMidPoints.forEach(function (point) {
    ctx.lineTo(point.x, point.y);
  });

  // Cerrar el path hasta la base
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();

  // Rellenar el área bajo la curva
  ctx.fill();

  // Dibujar la línea del contorno
  ctx.beginPath();
  if (smoothedMidPoints.length > 0) {
    ctx.moveTo(smoothedMidPoints[0].x, smoothedMidPoints[0].y);
    for (var _i2 = 1; _i2 < smoothedMidPoints.length; _i2++) {
      ctx.lineTo(smoothedMidPoints[_i2].x, smoothedMidPoints[_i2].y);
    }
    ctx.stroke();
  }

  // Post-EQ: verde neón claro con glow
  ctx.shadowColor = "rgba(50, 220, 120, 0.4)";
  ctx.strokeStyle = "rgba(50, 220, 120, 0.8)";
  ctx.fillStyle = "rgba(50, 220, 120, 0.3)";

  // Dibujar línea para post-EQ
  ctx.beginPath();
  ctx.moveTo(0, canvas.height); // Empezar desde la esquina inferior izquierda

  // Dibujar la línea que une los puntos
  smoothedPostPoints.forEach(function (point) {
    ctx.lineTo(point.x, point.y);
  });

  // Cerrar el path hasta la base
  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();

  // Rellenar el área bajo la curva
  ctx.fill();

  // Dibujar la línea del contorno
  ctx.beginPath();
  if (smoothedPostPoints.length > 0) {
    ctx.moveTo(smoothedPostPoints[0].x, smoothedPostPoints[0].y);
    for (var _i3 = 1; _i3 < smoothedPostPoints.length; _i3++) {
      ctx.lineTo(smoothedPostPoints[_i3].x, smoothedPostPoints[_i3].y);
    }
    ctx.stroke();
  }

  // Limpiar efectos
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";

  // Agregar leyenda para los colores
  var legendY = 20;
  var legendSpacing = 120;

  // Leyenda para Pre-EQ (violeta)
  ctx.fillStyle = "rgba(190, 90, 255, 0.8)";
  ctx.fillRect(10, legendY - 10, 10, 10);
  ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
  ctx.fillText("Pre-EQ", 25, legendY);

  // Leyenda para Mid-EQ (amarillo/naranja)
  ctx.fillStyle = "rgba(255, 180, 50, 0.8)";
  ctx.fillRect(10 + legendSpacing, legendY - 10, 10, 10);
  ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
  ctx.fillText("Post-Filtros", 25 + legendSpacing, legendY);

  // Leyenda para Post-EQ (verde)
  ctx.fillStyle = "rgba(50, 220, 120, 0.8)";
  ctx.fillRect(10 + legendSpacing * 2, legendY - 10, 10, 10);
  ctx.fillStyle = isDarkMode ? "#e0e0e0" : "#333";
  ctx.fillText("Post-Compresor", 25 + legendSpacing * 2, legendY);

  // Dibujar el marcador de frecuencia activa si existe
  var activeFrequencyMarker = (0,_config_ts__WEBPACK_IMPORTED_MODULE_1__.getActiveFrequencyMarker)();
  var activeQMarker = (0,_config_ts__WEBPACK_IMPORTED_MODULE_1__.getActiveQMarker)();
  if (activeFrequencyMarker) {
    // Convertir frecuencia a posición X usando escala de octavas
    var _octave = Math.log2(activeFrequencyMarker / 20); // Número de octavas desde 20Hz
    var _totalOctaves = Math.log2(17000 / 20); // Aproximadamente 9.7 octavas (hasta 17kHz)
    var _x = _octave / _totalOctaves * canvas.width * 0.995; // Usar el valor exacto de octavas

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff3366"; // Color llamativo para el marcador
    ctx.beginPath();
    ctx.moveTo(_x, 0);
    ctx.lineTo(_x, canvas.height);
    ctx.stroke();

    // Etiqueta con el valor de frecuencia
    ctx.fillStyle = "#ff3366";
    ctx.font = "12px Arial";
    ctx.fillText("".concat(activeFrequencyMarker, " Hz"), _x + 5, 15);

    // Dibujar la campana de Q si tenemos tanto frecuencia como Q
    if (activeQMarker) {
      // Dibujar la campana
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 51, 102, 0.7)";
      ctx.fillStyle = "rgba(255, 51, 102, 0.2)";

      // Calcular la escala de la campana basada en Q
      // Cuanto mayor sea Q, más estrecha será la campana
      var qScale = Math.max(20, 200 / activeQMarker); // Limitar el mínimo para Q muy altos

      // Dibujar la curva de campana
      ctx.beginPath();

      // Puntos para la curva
      var points = [];
      var centerX = _x;
      var height = canvas.height * 0.7; // Altura máxima de la campana

      // Generar puntos para la curva de campana en escala logarítmica
      for (var _i4 = -canvas.width / 2; _i4 <= canvas.width / 2; _i4 += 5) {
        var pointX = centerX + _i4;
        if (pointX >= 0 && pointX <= canvas.width) {
          // Convertir posición X a frecuencia
          var freq = 20 * Math.pow(10, pointX / canvas.width * Math.log10(17000 / 20));
          var _freqRatio = freq / activeFrequencyMarker;

          // Fórmula de campana para filtro peaking en escala logarítmica
          var response = 1 / Math.sqrt(1 + Math.pow(activeQMarker * (_freqRatio - 1 / _freqRatio), 2));
          var pointY = canvas.height - height * response;
          points.push({
            x: pointX,
            y: pointY
          });
        }
      }

      // Dibujar la curva
      if (points.length > 0) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var _i5 = 1; _i5 < points.length; _i5++) {
          ctx.lineTo(points[_i5].x, points[_i5].y);
        }
        ctx.stroke();

        // Rellenar el área bajo la curva
        ctx.lineTo(points[points.length - 1].x, canvas.height);
        ctx.lineTo(points[0].x, canvas.height);
        ctx.closePath();
        ctx.fill();

        // Mostrar el valor de Q
        ctx.fillStyle = "#ff3366";
        ctx.fillText("Q: ".concat(activeQMarker.toFixed(1)), _x + 5, 30);
      }
    }
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "chrome-professional-audio-plugin:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_professional_audio_plugin"] = self["webpackChunkchrome_professional_audio_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_interface_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters_interface.ts */ "./src/filters_interface.ts");
/* harmony import */ var _visualizer_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualizer.ts */ "./src/visualizer.ts");
/* harmony import */ var _config_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.ts */ "./src/config.ts");
/* harmony import */ var _compressor_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compressor.ts */ "./src/compressor.ts");
/* harmony import */ var _state_memory_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state_memory.ts */ "./src/state_memory.ts");
/* harmony import */ var _interface_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface.ts */ "./src/interface.ts");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.ts */ "./src/utils.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var offscreenPort = null;
var loops = null;
var debug_counter = 1;

// Sender
function sendMessagePromise(message) {
  return new Promise(function (resolve, reject) {
    chrome.runtime.sendMessage(message, function (response) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
}

// Wait for zhe DOM to load
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  var botonCaptura, debugLabel, debugButton, response, volumenSlider;
  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        botonCaptura = document.getElementById("activar");
        debugLabel = document.getElementById("estado");
        debugButton = document.getElementById("debug");
        debugLabel.textContent = "Cargando...";

        // Inicializar los botones de presets
        console.log("Inicializando presets...");
        inicializarPresets();
        // Cargar estado guardado
        console.log("Inicializando cargandoEstado...");
        (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.cargarEstado)();
        console.log("Estado cargado:", _state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.localEstado);

        // Verificar si es la primera vez que se abre el popup desde la inicialización
        _context6.prev = 9;
        _context6.next = 12;
        return sendMessagePromise({
          type: "check-first-popup-open",
          target: "background"
        });
      case 12:
        response = _context6.sent;
        if (!(response && response.isFirstOpen)) {
          _context6.next = 16;
          break;
        }
        _context6.next = 16;
        return (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.clearStorage)();
      case 16:
        _context6.next = 21;
        break;
      case 18:
        _context6.prev = 18;
        _context6.t0 = _context6["catch"](9);
        console.error("[ERROR] Error al verificar primera apertura:", _context6.t0);
      case 21:
        (0,_filters_interface_ts__WEBPACK_IMPORTED_MODULE_0__.cargarFiltros)();
        chrome.runtime.sendMessage({
          type: "offscreen-wakeup",
          target: "background"
        });
        if (_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.localEstado.capturingAudio) {
          botonCaptura.textContent = "Detener Audio ";
          openOffscreenPort();
        } else {
          botonCaptura.textContent = "Activar Audio ";
        }
        chrome.runtime.onMessage.addListener(/*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(message, sender, sendResponse) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(message.type === "offscreen-alive")) {
                    _context.next = 4;
                    break;
                  }
                  if (offscreenPort) {
                    _context.next = 4;
                    break;
                  }
                  _context.next = 4;
                  return openOffscreenPort();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x, _x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }());
        debugButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                console.log("Debug button clicked");
                debugLabel.textContent = "Debugging...";
                _context2.t0 = chrome.runtime;
                _context2.next = 5;
                return getActiveTabId();
              case 5:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  type: "debug",
                  tabId: _context2.t1
                };
                _context2.t0.sendMessage.call(_context2.t0, _context2.t2);
              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
        botonCaptura.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var tabId, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab, streamId, eqValores;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return getActiveTabId();
              case 2:
                tabId = _context3.sent;
                if (_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.localEstado.capturingAudio) {
                  _context3.next = 32;
                  break;
                }
                _context3.next = 6;
                return chrome.tabs.query({
                  active: true,
                  currentWindow: true
                });
              case 6:
                _yield$chrome$tabs$qu = _context3.sent;
                _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                tab = _yield$chrome$tabs$qu2[0];
                console.log("entre isActive");
                if (tab.url.startsWith("http")) {
                  _context3.next = 14;
                  break;
                }
                console.log("ALERT");
                alert("[popup] No se puede capturar esta pestaña. Abrí una página web con audio ");
                return _context3.abrupt("return");
              case 14:
                _context3.next = 16;
                return chrome.tabCapture.getMediaStreamId({
                  targetTabId: tabId
                });
              case 16:
                streamId = _context3.sent;
                eqValores = {};
                if (_config_ts__WEBPACK_IMPORTED_MODULE_2__.staticFiltering) {
                  _config_ts__WEBPACK_IMPORTED_MODULE_2__.filters.forEach(function (filter) {
                    eqValores[filter] = parseFloat(document.getElementById(filter).value);
                  });
                }
                _context3.next = 21;
                return chrome.runtime.sendMessage(_objectSpread({
                  type: "start-processing",
                  target: "offscreen",
                  tabId: tabId,
                  streamId: streamId,
                  level: (0,_utils_ts__WEBPACK_IMPORTED_MODULE_6__.dbToGain)(parseFloat(document.getElementById("volumen").value))
                }, eqValores));
              case 21:
                botonCaptura.textContent = "Detener Audio ";
                (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.saveValue)("capturingAudio", true);
                if (!offscreenPort) {
                  _context3.next = 27;
                  break;
                }
                offscreenPort.postMessage({
                  type: "start-stream",
                  tabId: tabId
                });
                _context3.next = 30;
                break;
              case 27:
                _context3.next = 29;
                return openOffscreenPort();
              case 29:
                console.log("[WARNING] Opened offscreen port because it was closed");
              case 30:
                _context3.next = 42;
                break;
              case 32:
                if (offscreenPort) {
                  _context3.next = 35;
                  break;
                }
                console.log("[WARNING] No hay puerto offscreen");
                return _context3.abrupt("return");
              case 35:
                debugLabel.textContent = "Deteniendo audio..." + debug_counter++;
                _context3.next = 38;
                return chrome.runtime.sendMessage({
                  type: "stop-processing",
                  target: "offscreen",
                  tabId: tabId
                });
              case 38:
                botonCaptura.textContent = "Activar Audio ";
                cancelAnimationFrame(loops);
                loops = null;
                (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.saveValue)("capturingAudio", false);
              case 42:
                (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.guardarEstado)();
              case 43:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })));

        // Agregar evento para el checkbox de modo oscuro
        document.getElementById("dark-mode").addEventListener("change", function (e) {
          if (e.target.checked) {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }

          // Actualizar estilos de los filtros cuando cambie el tema
          (0,_filters_interface_ts__WEBPACK_IMPORTED_MODULE_0__.actualizarEstiloFiltros)();
          (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.guardarEstado)();
        });

        // Inicializar el texto del volumen
        volumenSlider = document.getElementById("volumen");
        if (volumenSlider) {
          (0,_interface_ts__WEBPACK_IMPORTED_MODULE_5__.updateVolumeText)(volumenSlider.value);
        }

        // Agregar evento para el slider de volumen
        document.getElementById("volumen").addEventListener("input", /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
            var tabId, volumenValue;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return getActiveTabId();
                case 2:
                  tabId = _context4.sent;
                  volumenValue = parseFloat(e.target.value); // Actualizar el texto que muestra el valor en dB
                  (0,_interface_ts__WEBPACK_IMPORTED_MODULE_5__.updateVolumeText)(volumenValue);

                  // Enviar el mensaje para ajustar el volumen
                  chrome.runtime.sendMessage({
                    type: "ajustar-volumen",
                    target: "offscreen",
                    tabId: tabId,
                    level: (0,_utils_ts__WEBPACK_IMPORTED_MODULE_6__.dbToGain)(volumenValue) // Convertir dB a ganancia
                  });

                  // Guardar el estado del volumen
                  (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.guardarEstado)();
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return function (_x4) {
            return _ref5.apply(this, arguments);
          };
        }());
        _config_ts__WEBPACK_IMPORTED_MODULE_2__.filters.forEach(function (id) {
          var _document$getElementB;
          (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener("input", /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
              var tabId;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return getActiveTabId();
                  case 2:
                    tabId = _context5.sent;
                    chrome.runtime.sendMessage({
                      type: "ajustar-filtro",
                      target: "offscreen",
                      tabId: tabId,
                      banda: id,
                      valor: parseFloat(e.target.value)
                    });
                    (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.guardarEstado)();
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x5) {
              return _ref6.apply(this, arguments);
            };
          }());
        });

        // Inicializar controles del compresor
        (0,_compressor_ts__WEBPACK_IMPORTED_MODULE_3__.inicializarCompresor)();
      case 33:
      case "end":
        return _context6.stop();
    }
  }, _callee6, null, [[9, 18]]);
})));
window.getActiveTabId = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
  var _yield$chrome$tabs$qu3, _yield$chrome$tabs$qu4, tab;
  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.next = 2;
        return chrome.tabs.query({
          active: true,
          currentWindow: true
        });
      case 2:
        _yield$chrome$tabs$qu3 = _context7.sent;
        _yield$chrome$tabs$qu4 = _slicedToArray(_yield$chrome$tabs$qu3, 1);
        tab = _yield$chrome$tabs$qu4[0];
        return _context7.abrupt("return", tab.id);
      case 6:
      case "end":
        return _context7.stop();
    }
  }, _callee7);
}));
chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.type === "visualizer-data" && msg.data) {
    (0,_visualizer_ts__WEBPACK_IMPORTED_MODULE_1__.drawVisualizer)(msg.data);
  }
});
function updateVisualizer() {
  return _updateVisualizer.apply(this, arguments);
}
function _updateVisualizer() {
  _updateVisualizer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var loop, _loop;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _loop = function _loop3() {
            _loop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var id;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!offscreenPort) {
                      _context8.next = 9;
                      break;
                    }
                    _context8.t0 = offscreenPort;
                    _context8.next = 4;
                    return getActiveTabId();
                  case 4:
                    _context8.t1 = _context8.sent;
                    _context8.t2 = {
                      type: "give-me-viz",
                      target: "offscreen",
                      tabId: _context8.t1
                    };
                    _context8.t0.postMessage.call(_context8.t0, _context8.t2);
                    _context8.next = 12;
                    break;
                  case 9:
                    console.assert(false, "[popup] No hay puerto offscreen");
                    alert("[popup] No hay puerto offscreen");
                    estado.textContent = "no hay puerto offscreen";
                  case 12:
                    id = requestAnimationFrame(loop);
                    loops = id;
                  case 14:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return _loop.apply(this, arguments);
          };
          loop = function _loop2() {
            return _loop.apply(this, arguments);
          };
          loop();
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _updateVisualizer.apply(this, arguments);
}
function openOffscreenPort() {
  return _openOffscreenPort.apply(this, arguments);
} // Función para inicializar los controles de presets
function _openOffscreenPort() {
  _openOffscreenPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var tabId;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return getActiveTabId();
        case 3:
          tabId = _context10.sent;
          offscreenPort = chrome.runtime.connect({
            name: "popup-visualizer"
          });
          estado.textContent = "Conectado al offscreen";
          offscreenPort.postMessage({
            type: "start-stream",
            tabId: tabId
          });
          offscreenPort.onDisconnect.addListener(function () {
            estado.textContent = "Desconectado del offscreen";
          });
          offscreenPort.onMessage.addListener(function (message) {
            if (message.type === "visualizer-data") {
              (0,_visualizer_ts__WEBPACK_IMPORTED_MODULE_1__.drawVisualizer)(message.data);
            } else if (message.type === "start-stream") {
              updateVisualizer();
            }
          });
          _context10.next = 15;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          estado.textContent = "Error al conectar al offscreen";
          console.error("[POPUP] Error al conectar al offscreen:", _context10.t0);
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return _openOffscreenPort.apply(this, arguments);
}
function inicializarPresets() {
  var guardarPresetBtn = document.getElementById('guardar-preset');
  var cargarPresetBtn = document.getElementById('cargar-preset');
  var eliminarPresetBtn = document.getElementById('eliminar-preset');
  var presetNameInput = document.getElementById('preset-name');
  var presetSelect = document.getElementById('preset-select');

  // Cargar presets existentes
  (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.cargarListaPresets)();

  // Evento para guardar preset
  guardarPresetBtn.addEventListener('click', function () {
    var nombrePreset = presetNameInput.value.trim();
    if (nombrePreset === '') {
      alert('Por favor, ingresa un nombre para el preset');
      return;
    }

    // Obtener configuración actual
    var configuracion = obtenerConfiguracionActual();

    // Guardar en storage
    chrome.storage.local.get(['presets'], function (result) {
      var presets = result.presets || {};
      presets[nombrePreset] = configuracion;
      chrome.storage.local.set({
        presets: presets
      }, function () {
        alert("Preset \"".concat(nombrePreset, "\" guardado correctamente"));
        presetNameInput.value = '';
        (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.cargarListaPresets)();
      });
    });
  });

  // Evento para cargar preset
  cargarPresetBtn.addEventListener('click', function () {
    var nombrePreset = presetSelect.value;
    if (nombrePreset === '') {
      alert('Por favor, selecciona un preset para cargar');
      return;
    }
    chrome.storage.local.get(['presets'], function (result) {
      var presets = result.presets || {};
      var configuracion = presets[nombrePreset];
      if (configuracion) {
        (0,_interface_ts__WEBPACK_IMPORTED_MODULE_5__.aplicarConfiguracion)(configuracion);
        console.log("Preset cargado:", configuracion);
        alert("Preset \"".concat(nombrePreset, "\" cargado correctamente"));
      } else {
        alert("Error: No se encontr\xF3 el preset \"".concat(nombrePreset, "\""));
      }
    });
  });

  // Evento para eliminar preset
  eliminarPresetBtn.addEventListener('click', function () {
    var nombrePreset = presetSelect.value;
    if (nombrePreset === '') {
      alert('Por favor, selecciona un preset para eliminar');
      return;
    }
    if (confirm("\xBFEst\xE1s seguro de que deseas eliminar el preset \"".concat(nombrePreset, "\"?"))) {
      chrome.storage.local.get(['presets'], function (result) {
        var presets = result.presets || {};
        if (presets[nombrePreset]) {
          delete presets[nombrePreset];
          chrome.storage.local.set({
            presets: presets
          }, function () {
            alert("Preset \"".concat(nombrePreset, "\" eliminado correctamente"));
            (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.cargarListaPresets)();
          });
        } else {
          alert("Error: No se encontr\xF3 el preset \"".concat(nombrePreset, "\""));
        }
      });
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csbUJBQUFqRyxDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTZDLElBQUEsR0FBQXRELENBQUEsQ0FBQWUsQ0FBQSxJQUFBd0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBbEMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBbEQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQWdHLGtCQUFBbEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUF3RyxTQUFBLGFBQUFoQixPQUFBLFdBQUF0RixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFvRyxLQUFBLENBQUF4RyxDQUFBLEVBQUFELENBQUEsWUFBQTBHLE1BQUFyRyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxVQUFBdEcsQ0FBQSxjQUFBc0csT0FBQXRHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFdBQUF0RyxDQUFBLEtBQUFxRyxLQUFBO0FBRHNDO0FBRVU7QUFDZTs7QUFFL0Q7QUFDTyxTQUFlTSw4QkFBOEJBLENBQUFDLEVBQUE7RUFBQSxPQUFBQywrQkFBQSxDQUFBVCxLQUFBLE9BQUFELFNBQUE7QUFBQTs7QUFlcEQ7QUFBQSxTQUFBVSxnQ0FBQTtFQUFBQSwrQkFBQSxHQUFBWCxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FmTyxTQUFBZ0MsUUFBOENDLE1BQThCO0lBQUEsSUFBQUMsS0FBQTtJQUFBLE9BQUF0SCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBZ0csU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUEzQixJQUFBLEdBQUEyQixRQUFBLENBQUF0RCxJQUFBO1FBQUE7VUFBQXNELFFBQUEsQ0FBQXRELElBQUE7VUFBQSxPQUM3RHVELGNBQWMsQ0FBQyxDQUFDO1FBQUE7VUFBOUJILEtBQUssR0FBQUUsUUFBQSxDQUFBNUQsSUFBQTtVQUVYO1VBQ0E4RCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO1lBQ3pCL0YsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QmdHLE1BQU0sRUFBRSxXQUFXO1lBQ25CUCxLQUFLLEVBQUxBLEtBQUs7WUFDTFEsS0FBSyxFQUFFakIsbURBQVEsQ0FBQ1EsTUFBTSxDQUFDVSxPQUFPO1VBQ2hDLENBQUMsQ0FBQzs7VUFFRjtVQUFBUCxRQUFBLENBQUF0RCxJQUFBO1VBQUEsT0FDTThELDRCQUE0QixDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQVIsUUFBQSxDQUFBeEIsSUFBQTtNQUFBO0lBQUEsR0FBQW9CLE9BQUE7RUFBQSxDQUNyQztFQUFBLE9BQUFELCtCQUFBLENBQUFULEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBR00sU0FBZXVCLDRCQUE0QkEsQ0FBQTtFQUFBLE9BQUFDLDZCQUFBLENBQUF2QixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQWlCakQsU0FBQXdCLDhCQUFBO0VBQUFBLDZCQUFBLEdBQUF6QixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FqQk0sU0FBQThDLFNBQUE7SUFBQSxJQUFBWixLQUFBO0lBQUEsT0FBQXRILG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQWxFLElBQUE7UUFBQTtVQUFBLEtBQ0Q0Qyx5REFBVyxDQUFDdUIsY0FBYztZQUFBRCxTQUFBLENBQUFsRSxJQUFBO1lBQUE7VUFBQTtVQUFBa0UsU0FBQSxDQUFBbEUsSUFBQTtVQUFBLE9BQ1J1RCxjQUFjLENBQUMsQ0FBQztRQUFBO1VBQTlCSCxLQUFLLEdBQUFjLFNBQUEsQ0FBQXhFLElBQUE7VUFDWDhELE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7WUFDekIvRixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCZ0csTUFBTSxFQUFFLFdBQVc7WUFDbkJQLEtBQUssRUFBTEEsS0FBSztZQUNMZ0IsTUFBTSxFQUFFdkIsdURBQWU7WUFDdkJ3QixNQUFNLEVBQUU7Y0FDTkMsU0FBUyxFQUFFeEIsdURBQWUsQ0FBQ3dCLFNBQVM7Y0FDcENDLEtBQUssRUFBRXpCLHVEQUFlLENBQUN5QixLQUFLO2NBQzVCQyxJQUFJLEVBQUUxQix1REFBZSxDQUFDMEIsSUFBSTtjQUMxQkMsTUFBTSxFQUFFM0IsdURBQWUsQ0FBQzJCLE1BQU07Y0FDOUJDLE9BQU8sRUFBRTVCLHVEQUFlLENBQUM0QjtZQUMzQjtVQUNGLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBUixTQUFBLENBQUFwQyxJQUFBO01BQUE7SUFBQSxHQUFBa0MsUUFBQTtFQUFBLENBRU47RUFBQSxPQUFBRCw2QkFBQSxDQUFBdkIsS0FBQSxPQUFBRCxTQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDdENELHFKQUFBekcsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFENkk7QUFDOUU7QUFDSTtBQVduRTtBQUNPLFNBQVNxQyxvQkFBb0JBLENBQUEsRUFBRztFQUNyQyxJQUFNQyx1QkFBdUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQXFCO0VBQy9GLElBQUksQ0FBQ0YsdUJBQXVCLEVBQUUsTUFBTSxJQUFJMUYsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO0VBQy9GLElBQU1pRixTQUFTLEdBQUdVLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBcUI7RUFDMUUsSUFBSSxDQUFDWCxTQUFTLEVBQUUsTUFBTSxJQUFJakYsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO0VBQ3hFLElBQU1rRixLQUFLLEdBQUdTLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBcUI7RUFDbEUsSUFBSSxDQUFDVixLQUFLLEVBQUUsTUFBTSxJQUFJbEYsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO0VBQ2hFLElBQU1tRixJQUFJLEdBQUdRLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBcUI7RUFDaEUsSUFBSSxDQUFDVCxJQUFJLEVBQUUsTUFBTSxJQUFJbkYsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO0VBQzlELElBQU1vRixNQUFNLEdBQUdPLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBcUI7RUFDcEUsSUFBSSxDQUFDUixNQUFNLEVBQUUsTUFBTSxJQUFJcEYsS0FBSyxDQUFDLG9DQUFvQyxDQUFDO0VBQ2xFLElBQU1xRixPQUFPLEdBQUdNLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBcUI7RUFDdEUsSUFBSSxDQUFDUCxPQUFPLEVBQUUsTUFBTSxJQUFJckYsS0FBSyxDQUFDLHFDQUFxQyxDQUFDOztFQUVwRTtFQUNBdUYsNkRBQWlCLENBQUMsV0FBVyxFQUFFTSxVQUFVLENBQUNaLFNBQVMsQ0FBQzlILEtBQUssQ0FBQyxDQUFDO0VBQzNEb0ksNkRBQWlCLENBQUMsT0FBTyxFQUFFTSxVQUFVLENBQUNYLEtBQUssQ0FBQy9ILEtBQUssQ0FBQyxDQUFDO0VBQ25Eb0ksNkRBQWlCLENBQUMsTUFBTSxFQUFFTSxVQUFVLENBQUNWLElBQUksQ0FBQ2hJLEtBQUssQ0FBQyxDQUFDO0VBQ2pEb0ksNkRBQWlCLENBQUMsUUFBUSxFQUFFTSxVQUFVLENBQUNULE1BQU0sQ0FBQ2pJLEtBQUssQ0FBQyxDQUFDO0VBQ3JEb0ksNkRBQWlCLENBQUMsU0FBUyxFQUFFTSxVQUFVLENBQUNSLE9BQU8sQ0FBQ2xJLEtBQUssQ0FBQyxDQUFDOztFQUV2RDtFQUNBdUksdUJBQXVCLENBQUNJLGdCQUFnQixDQUFDLFFBQVEsZUFBQTdDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUFnQyxRQUFBO0lBQUEsT0FBQXBILG1CQUFBLEdBQUF1QixJQUFBLFVBQUFnRyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQTNCLElBQUEsR0FBQTJCLFFBQUEsQ0FBQXRELElBQUE7UUFBQTtVQUNqRDJFLDhEQUFrQixDQUFDLElBQUksQ0FBQ1MsT0FBTyxDQUFDO1VBQUM5QixRQUFBLENBQUF0RCxJQUFBO1VBQUEsT0FDM0I4RCxnRkFBNEIsQ0FBQyxDQUFDO1FBQUE7VUFDcENlLCtEQUFhLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBdkIsUUFBQSxDQUFBeEIsSUFBQTtNQUFBO0lBQUEsR0FBQW9CLE9BQUE7RUFBQSxDQUNqQixHQUFDO0VBRUZvQixTQUFTLENBQUNhLGdCQUFnQixDQUFDLE9BQU8sZUFBQTdDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUE4QyxTQUFBO0lBQUEsT0FBQWxJLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQWxFLElBQUE7UUFBQTtVQUNsQ3FGLHdCQUF3QixDQUFDLFdBQVcsRUFBRUgsVUFBVSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQyxDQUFDO1VBQzdEb0ksNkRBQWlCLENBQUMsV0FBVyxFQUFFTSxVQUFVLENBQUMsSUFBSSxDQUFDMUksS0FBSyxDQUFDLENBQUM7VUFBQzBILFNBQUEsQ0FBQWxFLElBQUE7VUFBQSxPQUNqRDhELGdGQUE0QixDQUFDLENBQUM7UUFBQTtVQUNwQ2UsK0RBQWEsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFYLFNBQUEsQ0FBQXBDLElBQUE7TUFBQTtJQUFBLEdBQUFrQyxRQUFBO0VBQUEsQ0FDakIsR0FBQztFQUVGTyxLQUFLLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sZUFBQTdDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUFvRSxTQUFBO0lBQUEsT0FBQXhKLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFrSSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTdELElBQUEsR0FBQTZELFNBQUEsQ0FBQXhGLElBQUE7UUFBQTtVQUM5QnFGLHdCQUF3QixDQUFDLE9BQU8sRUFBRUgsVUFBVSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQyxDQUFDO1VBQ3pEb0ksNkRBQWlCLENBQUMsT0FBTyxFQUFFTSxVQUFVLENBQUMsSUFBSSxDQUFDMUksS0FBSyxDQUFDLENBQUM7VUFBQ2dKLFNBQUEsQ0FBQXhGLElBQUE7VUFBQSxPQUM3QzhELGdGQUE0QixDQUFDLENBQUM7UUFBQTtVQUNwQ2UsK0RBQWEsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFXLFNBQUEsQ0FBQTFELElBQUE7TUFBQTtJQUFBLEdBQUF3RCxRQUFBO0VBQUEsQ0FDakIsR0FBQztFQUVGZCxJQUFJLENBQUNXLGdCQUFnQixDQUFDLE9BQU8sZUFBQTdDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUF1RSxTQUFBO0lBQUEsT0FBQTNKLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFxSSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQWhFLElBQUEsR0FBQWdFLFNBQUEsQ0FBQTNGLElBQUE7UUFBQTtVQUM3QnFGLHdCQUF3QixDQUFDLE1BQU0sRUFBRUgsVUFBVSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQyxDQUFDO1VBQ3hEb0ksNkRBQWlCLENBQUMsTUFBTSxFQUFFTSxVQUFVLENBQUMsSUFBSSxDQUFDMUksS0FBSyxDQUFDLENBQUM7VUFBQ21KLFNBQUEsQ0FBQTNGLElBQUE7VUFBQSxPQUM1QzhELGdGQUE0QixDQUFDLENBQUM7UUFBQTtVQUNwQ2UsK0RBQWEsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFjLFNBQUEsQ0FBQTdELElBQUE7TUFBQTtJQUFBLEdBQUEyRCxRQUFBO0VBQUEsQ0FDakIsR0FBQztFQUVGaEIsTUFBTSxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLGVBQUE3QyxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBMEUsU0FBQTtJQUFBLE9BQUE5SixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBd0ksVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFuRSxJQUFBLEdBQUFtRSxTQUFBLENBQUE5RixJQUFBO1FBQUE7VUFDL0JxRix3QkFBd0IsQ0FBQyxRQUFRLEVBQUVILFVBQVUsQ0FBQyxJQUFJLENBQUMxSSxLQUFLLENBQUMsQ0FBQztVQUMxRG9JLDZEQUFpQixDQUFDLFFBQVEsRUFBRU0sVUFBVSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQyxDQUFDO1VBQUNzSixTQUFBLENBQUE5RixJQUFBO1VBQUEsT0FDOUM4RCxnRkFBNEIsQ0FBQyxDQUFDO1FBQUE7VUFDcENlLCtEQUFhLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBaUIsU0FBQSxDQUFBaEUsSUFBQTtNQUFBO0lBQUEsR0FBQThELFFBQUE7RUFBQSxDQUNqQixHQUFDO0VBRUZsQixPQUFPLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sZUFBQTdDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUE2RSxTQUFBO0lBQUEsT0FBQWpLLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEySSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXRFLElBQUEsR0FBQXNFLFNBQUEsQ0FBQWpHLElBQUE7UUFBQTtVQUNoQ3FGLHdCQUF3QixDQUFDLFNBQVMsRUFBRUgsVUFBVSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQyxDQUFDO1VBQzNEb0ksNkRBQWlCLENBQUMsU0FBUyxFQUFFTSxVQUFVLENBQUMsSUFBSSxDQUFDMUksS0FBSyxDQUFDLENBQUM7VUFBQ3lKLFNBQUEsQ0FBQWpHLElBQUE7VUFBQSxPQUMvQzhELGdGQUE0QixDQUFDLENBQUM7UUFBQTtVQUNwQ2UsK0RBQWEsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFvQixTQUFBLENBQUFuRSxJQUFBO01BQUE7SUFBQSxHQUFBaUUsUUFBQTtFQUFBLENBQ2pCLEdBQUM7QUFDSjs7QUFFQTtBQUNPLFNBQVNWLHdCQUF3QkEsQ0FBQ2EsSUFBcUIsRUFBRUMsS0FBYSxFQUFFO0VBQzdFLElBQU1DLFlBQVksR0FBR3BCLFFBQVEsQ0FBQ0MsY0FBYyxJQUFBb0IsTUFBQSxDQUFJSCxJQUFJLFdBQVEsQ0FBZ0I7RUFFNUUsUUFBT0EsSUFBSTtJQUNULEtBQUssV0FBVztNQUNkRSxZQUFZLENBQUNFLFdBQVcsTUFBQUQsTUFBQSxDQUFNRixLQUFLLFFBQUs7TUFDeEM7SUFDRixLQUFLLE9BQU87TUFDVkMsWUFBWSxDQUFDRSxXQUFXLE1BQUFELE1BQUEsQ0FBTUYsS0FBSyxPQUFJO01BQ3ZDO0lBQ0YsS0FBSyxNQUFNO01BQ1RDLFlBQVksQ0FBQ0UsV0FBVyxNQUFBRCxNQUFBLENBQU1GLEtBQUssUUFBSztNQUN4QztJQUNGLEtBQUssUUFBUTtNQUNYO01BQ0EsSUFBTUksUUFBUSxHQUFHLENBQUNKLEtBQUssR0FBRyxJQUFJLEVBQUVLLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDMUNKLFlBQVksQ0FBQ0UsV0FBVyxNQUFBRCxNQUFBLENBQU1FLFFBQVEsUUFBSztNQUMzQztJQUNGLEtBQUssU0FBUztNQUNaO01BQ0EsSUFBTUUsU0FBUyxHQUFHLENBQUNOLEtBQUssR0FBRyxJQUFJLEVBQUVLLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0NKLFlBQVksQ0FBQ0UsV0FBVyxNQUFBRCxNQUFBLENBQU1JLFNBQVMsUUFBSztNQUM1QztFQUNKO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R3NFO0FBQy9ELElBQUlDLHFCQUFvQyxHQUFHLElBQUk7QUFDL0MsSUFBSUMsYUFBNEIsR0FBRyxJQUFJO0FBQ3ZDLElBQUk5RCxlQUF3QixHQUFHLEtBQUs7QUFDcEMsSUFBSStELGVBQXdCLEdBQUcsS0FBSztBQUNwQyxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDMUUsSUFBSS9ELGVBQTBCLEdBQUc7RUFDdEN3QixTQUFTLEVBQUUsQ0FBQyxFQUFFO0VBQ2RDLEtBQUssRUFBRSxDQUFDO0VBQ1JDLElBQUksRUFBRSxFQUFFO0VBQ1JDLE1BQU0sRUFBRSxLQUFLO0VBQ2JDLE9BQU8sRUFBRTtBQUNYLENBQUM7QUFFTSxTQUFTb0Msd0JBQXdCQSxDQUFDQyxTQUF3QixFQUFFO0VBQUVMLHFCQUFxQixHQUFHSyxTQUFTO0FBQUU7QUFDakcsU0FBU0Msd0JBQXdCQSxDQUFBLEVBQUc7RUFBRSxPQUFPTixxQkFBcUI7QUFBRTtBQUNwRSxTQUFTTyxnQkFBZ0JBLENBQUNDLENBQWdCLEVBQUU7RUFBRVAsYUFBYSxHQUFHTyxDQUFDO0FBQUU7QUFDakUsU0FBU0MsZ0JBQWdCQSxDQUFBLEVBQUc7RUFBRSxPQUFPUixhQUFhO0FBQUU7QUFDcEQsU0FBU2hDLGtCQUFrQkEsQ0FBQ1AsTUFBZSxFQUFFO0VBQUV2QixlQUFlLEdBQUd1QixNQUFNO0FBQUU7QUFDekUsU0FBU2dELGtCQUFrQkEsQ0FBQSxFQUFHO0VBQUUsT0FBT3ZFLGVBQWU7QUFBRTtBQUN4RCxTQUFTK0IsaUJBQWlCQSxDQUFDeUMsS0FBc0IsRUFBRTdLLEtBQWEsRUFBRTtFQUNyRXNHLGVBQWUsQ0FBQ3VFLEtBQUssQ0FBQyxHQUFHN0ssS0FBSztFQUM5QjZJLHdFQUF3QixDQUFDZ0MsS0FBSyxFQUFFN0ssS0FBSyxDQUFDO0FBQzFDO0FBQ08sU0FBUzhLLGlCQUFpQkEsQ0FBQ0QsS0FBc0IsRUFBRTtFQUFFLE9BQU92RSxlQUFlLENBQUN1RSxLQUFLLENBQUM7QUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDdkIzRixxSkFBQXZMLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csbUJBQUFqRyxDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTZDLElBQUEsR0FBQXRELENBQUEsQ0FBQWUsQ0FBQSxJQUFBd0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBbEMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBbEQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQWdHLGtCQUFBbEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUF3RyxTQUFBLGFBQUFoQixPQUFBLFdBQUF0RixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFvRyxLQUFBLENBQUF4RyxDQUFBLEVBQUFELENBQUEsWUFBQTBHLE1BQUFyRyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxVQUFBdEcsQ0FBQSxjQUFBc0csT0FBQXRHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFdBQUF0RyxDQUFBLEtBQUFxRyxLQUFBO0FBRHlFO0FBRXpFLElBQU04RSxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUk7QUFDeEIsSUFBTUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLElBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUNILFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUMsQ0FBQzs7QUFVckQsSUFBSUssY0FBd0IsR0FBRyxFQUFFO0FBRWpDNUMsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU0wQyxrQkFBa0IsR0FBRzdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0VBQ3BFLElBQUksQ0FBQzRDLGtCQUFrQixFQUFFO0lBQ3JCLE1BQU0sSUFBSXhJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQztFQUNoRTtFQUNBd0ksa0JBQWtCLENBQUMxQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUMvQyxJQUFNMkMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLElBQU1DLE1BQU0sR0FBRztNQUNmSCxFQUFFLEVBQUZBLEVBQUU7TUFDRkksSUFBSSxFQUFFLElBQUk7TUFDVmhCLENBQUMsRUFBRSxDQUFDO01BQ0ppQixJQUFJLEVBQUUsQ0FBQztNQUNQQyxNQUFNLEVBQUU7SUFDUixDQUFDO0lBQ0RDLGVBQWUsQ0FBQ0osTUFBTSxDQUFDO0lBQ3ZCTCxjQUFjLENBQUNwSCxJQUFJLENBQUN5SCxNQUFNLENBQUM7SUFDM0JLLG1CQUFtQixDQUFDTCxNQUFNLENBQUM7SUFDM0JNLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFFRjtBQUNBLFNBQVNDLFlBQVlBLENBQUNDLFdBQW1CLEVBQUU7RUFDdkM7RUFDQSxPQUFPZixJQUFJLENBQUNnQixLQUFLLENBQUNuQixRQUFRLEdBQUdHLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDLEVBQUdGLFdBQVcsR0FBRyxHQUFHLEdBQUloQixZQUFZLENBQUMsQ0FBQztBQUNqRjs7QUFFQTtBQUNBLFNBQVNtQixZQUFZQSxDQUFDVixJQUFZLEVBQUU7RUFDaEM7RUFDQSxPQUFPUixJQUFJLENBQUNnQixLQUFLLENBQUVoQixJQUFJLENBQUNDLElBQUksQ0FBQ08sSUFBSSxHQUFHWCxRQUFRLENBQUMsR0FBR0UsWUFBWSxHQUFJLEdBQUcsQ0FBQztBQUN4RTtBQUVBLFNBQVNZLGVBQWVBLENBQUNKLE1BQWMsRUFBRTtFQUNyQyxJQUFNWSxVQUFVLEdBQUc3RCxRQUFRLENBQUM4RCxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2hELElBQUksQ0FBQ0QsVUFBVSxFQUFFLE1BQU0sSUFBSXhKLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztFQUMzRXdKLFVBQVUsQ0FBQ0UsU0FBUyxHQUFHLGFBQWE7RUFDcENGLFVBQVUsQ0FBQ0csWUFBWSxDQUFDLFNBQVMsRUFBRWYsTUFBTSxDQUFDSCxFQUFFLENBQUM7O0VBRTdDO0VBQ0EsSUFBTW1CLFVBQVUsR0FBR2pFLFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQ2hFLElBQU1DLE9BQU8sR0FBR0osVUFBVSxHQUFHLFNBQVMsR0FBRyxTQUFTO0VBQ2xELElBQU1LLFNBQVMsR0FBR0wsVUFBVSxHQUFHLFNBQVMsR0FBRyxNQUFNO0VBQ2pELElBQU1NLGFBQWEsR0FBR04sVUFBVSxHQUFHLFNBQVMsR0FBRyxTQUFTO0VBQ3hELElBQU1PLGVBQWUsR0FBR1AsVUFBVSxHQUFHLFNBQVMsR0FBRyxNQUFNOztFQUV2RDtFQUNBSixVQUFVLENBQUNZLEtBQUssQ0FBQ0MsT0FBTyxnQ0FBQXJELE1BQUEsQ0FBZ0NnRCxPQUFPLGdKQUFBaEQsTUFBQSxDQUE2SWlELFNBQVMsTUFBRztFQUV4TlQsVUFBVSxDQUFDYyxTQUFTLHFTQUFBdEQsTUFBQSxDQUd5QzRCLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLFNBQVMsR0FBRyxFQUFFLDhLQUFBL0IsTUFBQSxDQUdyQ2tELGFBQWEsZUFBQWxELE1BQUEsQ0FBWW1ELGVBQWUsZ2RBQUFuRCxNQUFBLENBSzFCdUMsWUFBWSxDQUFDWCxNQUFNLENBQUNDLElBQUksQ0FBQyx5SkFBQTdCLE1BQUEsQ0FDVjRCLE1BQU0sQ0FBQ0MsSUFBSSw4TkFBQTdCLE1BQUEsQ0FLdkI0QixNQUFNLENBQUNmLENBQUMsbUpBQUFiLE1BQUEsQ0FDQzRCLE1BQU0sQ0FBQ2YsQ0FBQyxvT0FBQWIsTUFBQSxDQUtuQjRCLE1BQU0sQ0FBQ0UsSUFBSSx5SkFBQTlCLE1BQUEsQ0FDRzRCLE1BQU0sQ0FBQ0UsSUFBSSxzREFHN0Y7RUFFRCxJQUFNeUIsVUFBVSxHQUFHZixVQUFVLENBQUNnQixhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ3BELElBQUksQ0FBQ0QsVUFBVSxFQUFFLE1BQU0sSUFBSXZLLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztFQUMxRSxJQUFNeUssU0FBUyxHQUFHakIsVUFBVSxDQUFDZ0IsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUN6RCxJQUFJLENBQUNDLFNBQVMsRUFBRSxNQUFNLElBQUl6SyxLQUFLLENBQUMsdUNBQXVDLENBQUM7RUFDeEV1SyxVQUFVLENBQUN6RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3BKLENBQUMsRUFBSztJQUN4QyxJQUFNNEgsTUFBTSxHQUFHNUgsQ0FBQyxDQUFDZ08sYUFBaUM7SUFDbEQsSUFBTUMsVUFBVSxHQUFHeEIsWUFBWSxDQUFDdEQsVUFBVSxDQUFDdkIsTUFBTSxDQUFDbkgsS0FBSyxDQUFDLENBQUM7SUFDekRzTixTQUFTLENBQUN4RCxXQUFXLEdBQUcwRCxVQUFVLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDaEMsTUFBTSxDQUFDQyxJQUFJLEdBQUc4QixVQUFVO0lBQ3hCMUIsbUJBQW1CLENBQUNMLE1BQU0sQ0FBQztJQUMzQk0sY0FBYyxDQUFDLENBQUM7SUFDaEJ6QixvRUFBd0IsQ0FBQ21CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3JDakIsNERBQWdCLENBQUNnQixNQUFNLENBQUNmLENBQUMsQ0FBQztFQUM5QixDQUFDLENBQUM7RUFFRjBDLFVBQVUsQ0FBQ3pFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0lBQzVDMkIsb0VBQXdCLENBQUNtQixNQUFNLENBQUNDLElBQUksQ0FBQztJQUNyQ2pCLDREQUFnQixDQUFDZ0IsTUFBTSxDQUFDZixDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDO0VBRUYwQyxVQUFVLENBQUN6RSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtJQUM1QzJCLG9FQUF3QixDQUFDLElBQUksQ0FBQztJQUM5QkcsNERBQWdCLENBQUMsSUFBSSxDQUFDO0VBQzFCLENBQUMsQ0FBQztFQUVGLElBQU1pRCxPQUFPLEdBQUdyQixVQUFVLENBQUNnQixhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzlDLElBQUksQ0FBQ0ssT0FBTyxFQUFFLE1BQU0sSUFBSTdLLEtBQUssQ0FBQywrQkFBK0IsQ0FBQztFQUM5RCxJQUFNOEssTUFBTSxHQUFHdEIsVUFBVSxDQUFDZ0IsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUNuRCxJQUFJLENBQUNNLE1BQU0sRUFBRSxNQUFNLElBQUk5SyxLQUFLLENBQUMsOEJBQThCLENBQUM7RUFDNUQ2SyxPQUFPLENBQUMvRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3BKLENBQUMsRUFBSztJQUNyQyxJQUFNNEgsTUFBTSxHQUFHNUgsQ0FBQyxDQUFDZ08sYUFBaUM7SUFDbEQsSUFBTTdDLENBQUMsR0FBR2hDLFVBQVUsQ0FBQ3ZCLE1BQU0sQ0FBQ25ILEtBQUssQ0FBQztJQUNsQzJOLE1BQU0sQ0FBQzdELFdBQVcsR0FBR1ksQ0FBQyxDQUFDK0MsUUFBUSxDQUFDLENBQUM7SUFDakNoQyxNQUFNLENBQUNmLENBQUMsR0FBR0EsQ0FBQztJQUNab0IsbUJBQW1CLENBQUNMLE1BQU0sQ0FBQztJQUMzQk0sY0FBYyxDQUFDLENBQUM7SUFDaEJ0Qiw0REFBZ0IsQ0FBQ2dCLE1BQU0sQ0FBQ2YsQ0FBQyxDQUFDO0VBQzlCLENBQUMsQ0FBQztFQUVGZ0QsT0FBTyxDQUFDL0UsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07SUFDekMyQixvRUFBd0IsQ0FBQ21CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3JDakIsNERBQWdCLENBQUNnQixNQUFNLENBQUNmLENBQUMsQ0FBQztFQUM5QixDQUFDLENBQUM7RUFFRmdELE9BQU8sQ0FBQy9FLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0lBQ3pDMkIsb0VBQXdCLENBQUMsSUFBSSxDQUFDO0lBQzlCRyw0REFBZ0IsQ0FBQyxJQUFJLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0VBRUYsSUFBTW1ELFVBQVUsR0FBR3ZCLFVBQVUsQ0FBQ2dCLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDcEQsSUFBSSxDQUFDTyxVQUFVLEVBQUUsTUFBTSxJQUFJL0ssS0FBSyxDQUFDLGtDQUFrQyxDQUFDO0VBQ3BFLElBQU1nTCxTQUFTLEdBQUd4QixVQUFVLENBQUNnQixhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ3pELElBQUksQ0FBQ1EsU0FBUyxFQUFFLE1BQU0sSUFBSWhMLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztFQUNsRStLLFVBQVUsQ0FBQ2pGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDcEosQ0FBQyxFQUFLO0lBQ3hDLElBQU00SCxNQUFNLEdBQUc1SCxDQUFDLENBQUNnTyxhQUFpQztJQUNsRCxJQUFNNUIsSUFBSSxHQUFHakQsVUFBVSxDQUFDdkIsTUFBTSxDQUFDbkgsS0FBSyxDQUFDO0lBQ3JDNk4sU0FBUyxDQUFDL0QsV0FBVyxHQUFHNkIsSUFBSSxDQUFDOEIsUUFBUSxDQUFDLENBQUM7SUFDdkNoQyxNQUFNLENBQUNFLElBQUksR0FBR0EsSUFBSTtJQUNsQkcsbUJBQW1CLENBQUNMLE1BQU0sQ0FBQztJQUMzQk0sY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTStCLGNBQWMsR0FBR3pCLFVBQVUsQ0FBQ2dCLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUNuRSxJQUFJLENBQUNTLGNBQWMsRUFBRSxNQUFNLElBQUlqTCxLQUFLLENBQUMsc0NBQXNDLENBQUM7RUFDNUVpTCxjQUFjLENBQUNuRixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ3BKLENBQUMsRUFBSztJQUM3QyxJQUFNNEgsTUFBTSxHQUFHNUgsQ0FBQyxDQUFDZ08sYUFBaUM7SUFDbEQ5QixNQUFNLENBQUNHLE1BQU0sR0FBR3pFLE1BQU0sQ0FBQ3lCLE9BQU87SUFDOUJrRCxtQkFBbUIsQ0FBQ0wsTUFBTSxDQUFDO0lBQzNCTSxjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDLENBQUM7RUFFRixJQUFNZ0MsV0FBVyxHQUFHMUIsVUFBVSxDQUFDZ0IsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUN6RCxJQUFJLENBQUNVLFdBQVcsRUFBRSxNQUFNLElBQUlsTCxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDeEVrTCxXQUFXLENBQUNwRixnQkFBZ0IsQ0FBQyxPQUFPLGVBQUE3QyxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBZ0MsUUFBQTtJQUFBLElBQUFFLEtBQUE7SUFBQSxPQUFBdEgsbUJBQUEsR0FBQXVCLElBQUEsVUFBQWdHLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBM0IsSUFBQSxHQUFBMkIsUUFBQSxDQUFBdEQsSUFBQTtRQUFBO1VBQ2xDNkksVUFBVSxDQUFDMkIsTUFBTSxDQUFDLENBQUM7VUFDbkI1QyxjQUFjLEdBQUdBLGNBQWMsQ0FBQzZDLE1BQU0sQ0FBQyxVQUFBek0sQ0FBQztZQUFBLE9BQUlBLENBQUMsQ0FBQzhKLEVBQUUsS0FBS0csTUFBTSxDQUFDSCxFQUFFO1VBQUEsRUFBQztVQUFDeEUsUUFBQSxDQUFBdEQsSUFBQTtVQUFBLE9BQzVDdUQsY0FBYyxDQUFDLENBQUM7UUFBQTtVQUE5QkgsS0FBSyxHQUFBRSxRQUFBLENBQUE1RCxJQUFBO1VBRVg4RCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO1lBQ3ZCL0YsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQytNLFFBQVEsRUFBRXpDLE1BQU0sQ0FBQ0gsRUFBRTtZQUNuQjFFLEtBQUssRUFBRUE7VUFDWCxDQUFDLENBQUM7VUFFRm1GLGNBQWMsQ0FBQyxDQUFDO1VBQ2hCekIsb0VBQXdCLENBQUMsSUFBSSxDQUFDO1VBQzlCRyw0REFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQTNELFFBQUEsQ0FBQXhCLElBQUE7TUFBQTtJQUFBLEdBQUFvQixPQUFBO0VBQUEsQ0FDMUIsR0FBQztFQUVGLElBQU15SCxnQkFBZ0IsR0FBRzNGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0VBQ3JFLElBQUksQ0FBQzBGLGdCQUFnQixFQUFFLE1BQU0sSUFBSXRMLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztFQUNqRnNMLGdCQUFnQixDQUFDQyxXQUFXLENBQUMvQixVQUFVLENBQUM7QUFFNUM7QUFBQyxTQUVjUCxtQkFBbUJBLENBQUF0RixFQUFBO0VBQUEsT0FBQTZILG9CQUFBLENBQUFySSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUFzSSxxQkFBQTtFQUFBQSxvQkFBQSxHQUFBdkksaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQWxDLFNBQUE4QyxTQUFtQ2lFLE1BQWM7SUFBQSxPQUFBbk0sbUJBQUEsR0FBQXVCLElBQUEsVUFBQTRHLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBdkMsSUFBQSxHQUFBdUMsU0FBQSxDQUFBbEUsSUFBQTtRQUFBO1VBQUFrRSxTQUFBLENBQUE0RyxFQUFBLEdBQzdDdEgsTUFBTSxDQUFDQyxPQUFPO1VBQUFTLFNBQUEsQ0FBQTZHLEVBQUEsR0FFRjlDLE1BQU0sQ0FBQ0gsRUFBRTtVQUFBNUQsU0FBQSxDQUFBOEcsRUFBQSxHQUNiL0MsTUFBTSxDQUFDQyxJQUFJO1VBQUFoRSxTQUFBLENBQUErRyxFQUFBLEdBQ2RoRCxNQUFNLENBQUNmLENBQUM7VUFBQWhELFNBQUEsQ0FBQWdILEVBQUEsR0FDTGpELE1BQU0sQ0FBQ0UsSUFBSTtVQUFBakUsU0FBQSxDQUFBaUgsRUFBQSxHQUNUbEQsTUFBTSxDQUFDRyxNQUFNO1VBQUFsRSxTQUFBLENBQUFsRSxJQUFBO1VBQUEsT0FDUnVELGNBQWMsQ0FBQyxDQUFDO1FBQUE7VUFBQVcsU0FBQSxDQUFBa0gsRUFBQSxHQUFBbEgsU0FBQSxDQUFBeEUsSUFBQTtVQUFBd0UsU0FBQSxDQUFBbUgsRUFBQTtZQU43QjFOLElBQUksRUFBRSw0QkFBNEI7WUFDbEMrTSxRQUFRLEVBQUF4RyxTQUFBLENBQUE2RyxFQUFBO1lBQ1I3QyxJQUFJLEVBQUFoRSxTQUFBLENBQUE4RyxFQUFBO1lBQ0o5RCxDQUFDLEVBQUFoRCxTQUFBLENBQUErRyxFQUFBO1lBQ0Q5QyxJQUFJLEVBQUFqRSxTQUFBLENBQUFnSCxFQUFBO1lBQ0o5QyxNQUFNLEVBQUFsRSxTQUFBLENBQUFpSCxFQUFBO1lBQ04vSCxLQUFLLEVBQUFjLFNBQUEsQ0FBQWtIO1VBQUE7VUFBQWxILFNBQUEsQ0FBQTRHLEVBQUEsQ0FQUXBILFdBQVcsQ0FBQTdGLElBQUEsQ0FBQXFHLFNBQUEsQ0FBQTRHLEVBQUEsRUFBQTVHLFNBQUEsQ0FBQW1ILEVBQUE7UUFBQTtRQUFBO1VBQUEsT0FBQW5ILFNBQUEsQ0FBQXBDLElBQUE7TUFBQTtJQUFBLEdBQUFrQyxRQUFBO0VBQUEsQ0FTM0I7RUFBQSxPQUFBNkcsb0JBQUEsQ0FBQXJJLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRUgsU0FBU2dHLGNBQWNBLENBQUEsRUFBRztFQUN0Qi9FLE1BQU0sQ0FBQzhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUM7SUFBRUMsZ0JBQWdCLEVBQUU3RDtFQUFlLENBQUMsQ0FBQztBQUNsRTtBQUVPLFNBQVM4RCxhQUFhQSxDQUFBLEVBQUc7RUFDNUJsSSxNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLGtCQUFrQixFQUFFLFVBQUNDLElBQUksRUFBSztJQUNuRCxJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDSCxnQkFBZ0IsQ0FBQyxFQUFFO01BQ3RDN0QsY0FBYyxHQUFHZ0UsSUFBSSxDQUFDSCxnQkFBZ0I7TUFDdEM3RCxjQUFjLENBQUNoSixPQUFPLENBQUMsVUFBQXFKLE1BQU0sRUFBSTtRQUM3QjtRQUNBLElBQUlBLE1BQU0sQ0FBQ0csTUFBTSxLQUFLMkQsU0FBUyxFQUFFO1VBQzdCOUQsTUFBTSxDQUFDRyxNQUFNLEdBQUcsS0FBSztRQUN6QjtRQUNBQyxlQUFlLENBQUNKLE1BQU0sQ0FBQztRQUN2QkssbUJBQW1CLENBQUNMLE1BQU0sQ0FBQztNQUMvQixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztFQUNGK0QsbUJBQW1CLENBQUMsQ0FBQztBQUN6Qjs7QUFFQTtBQUNPLFNBQVNDLHVCQUF1QkEsQ0FBQSxFQUFHO0VBQ3RDLElBQU1oRCxVQUFVLEdBQUdqRSxRQUFRLENBQUNrRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztFQUNoRSxJQUFNOEMsV0FBVyxHQUFHbEgsUUFBUSxDQUFDbUgsZ0JBQWdCLENBQWMsY0FBYyxDQUFDO0VBRTFFRCxXQUFXLENBQUN0TixPQUFPLENBQUMsVUFBQXdOLElBQUksRUFBSTtJQUN4QixJQUFNL0MsT0FBTyxHQUFHSixVQUFVLEdBQUcsU0FBUyxHQUFHLFNBQVM7SUFDbEQsSUFBTUssU0FBUyxHQUFHTCxVQUFVLEdBQUcsU0FBUyxHQUFHLE1BQU07SUFFakRtRCxJQUFJLENBQUMzQyxLQUFLLENBQUM0QyxVQUFVLEdBQUdoRCxPQUFPO0lBQy9CK0MsSUFBSSxDQUFDM0MsS0FBSyxDQUFDNkMsS0FBSyxHQUFHaEQsU0FBUztJQUU1QixJQUFNaUIsV0FBVyxHQUFHNkIsSUFBSSxDQUFDdkMsYUFBYSxDQUFjLFdBQVcsQ0FBQztJQUNoRSxJQUFJVSxXQUFXLEVBQUU7TUFDYkEsV0FBVyxDQUFDZCxLQUFLLENBQUM0QyxVQUFVLEdBQUdwRCxVQUFVLEdBQUcsU0FBUyxHQUFHLFNBQVM7TUFDakVzQixXQUFXLENBQUNkLEtBQUssQ0FBQzZDLEtBQUssR0FBR3JELFVBQVUsR0FBRyxTQUFTLEdBQUcsTUFBTTtJQUM3RDtFQUNKLENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0EsU0FBUytDLG1CQUFtQkEsQ0FBQSxFQUFHO0VBQzNCO0VBQ0EsSUFBTU8sZ0JBQWdCLEdBQUd2SCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDN0QsSUFBSXNILGdCQUFnQixFQUFFO0lBQ2xCQSxnQkFBZ0IsQ0FBQ3BILGdCQUFnQixDQUFDLFFBQVEsRUFBRThHLHVCQUF1QixDQUFDO0VBQ3hFO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0M5UEEscUpBQUFuUSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURrRDtBQUNnQjtBQUNQO0FBQ1g7QUFDcUI7O0FBRXJFO0FBQ08sU0FBZStKLG9CQUFvQkEsQ0FBQXhKLEVBQUE7RUFBQSxPQUFBeUoscUJBQUEsQ0FBQWpLLEtBQUEsT0FBQUQsU0FBQTtBQUFBOztBQXlGMUM7QUFBQSxTQUFBa0ssc0JBQUE7RUFBQUEscUJBQUEsR0FBQW5LLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQXpGTyxTQUFBOEMsU0FBb0NiLE1BQThCO0lBQUEsSUFBQXVKLGFBQUEsRUFBQUgsZ0JBQUEsRUFBQXhILHVCQUFBLEVBQUE0SCxlQUFBLEVBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxZQUFBLEVBQUFDLGFBQUEsRUFBQXBDLGdCQUFBO0lBQUEsT0FBQTdPLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE0RyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQWxFLElBQUE7UUFBQTtVQUN2RWdOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixFQUFFOUosTUFBTSxDQUFDOztVQUUvQztVQUNNdUosYUFBYSxHQUFHMUgsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO1VBQUEsSUFDbkR5SCxhQUFhO1lBQUF4SSxTQUFBLENBQUFsRSxJQUFBO1lBQUE7VUFBQTtVQUNoQmdOLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO1VBQUMsT0FBQWhKLFNBQUEsQ0FBQXJFLE1BQUE7UUFBQTtVQUcvRDZNLGFBQWEsQ0FBQ2xRLEtBQUssR0FBRzJHLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDb0csUUFBUSxDQUFDLENBQUM7VUFDL0NrRCxnQkFBZ0IsQ0FBQ2hLLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDOztVQUVoQztVQUNNMEksZ0JBQW1DLEdBQUd2SCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7VUFDaEYsSUFBSTlCLE1BQU0sQ0FBQ2lLLFFBQVEsRUFBRTtZQUNuQnBJLFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ0MsU0FBUyxDQUFDa0UsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUN4Q2QsZ0JBQWdCLENBQUNuSCxPQUFPLEdBQUcsSUFBSTtVQUNqQyxDQUFDLE1BQU07WUFDTEosUUFBUSxDQUFDa0UsSUFBSSxDQUFDQyxTQUFTLENBQUNxQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQzNDK0IsZ0JBQWdCLENBQUNuSCxPQUFPLEdBQUcsS0FBSztVQUNsQzs7VUFFQTtVQUNNTCx1QkFBMEMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7VUFDeEYwSCxlQUFrQyxHQUFHM0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO1VBQ3pFMkgsV0FBOEIsR0FBRzVILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztVQUNqRTRILFVBQTZCLEdBQUc3SCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7VUFDL0Q2SCxZQUErQixHQUFHOUgsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO1VBQ25FOEgsYUFBZ0MsR0FBRy9ILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztVQUUzRUYsdUJBQXVCLENBQUNLLE9BQU8sR0FBR2pDLE1BQU0sQ0FBQ21LLFNBQVMsQ0FBQ2xKLE1BQU07VUFDekRPLDhEQUFrQixDQUFDeEIsTUFBTSxDQUFDbUssU0FBUyxDQUFDbEosTUFBTSxDQUFDO1VBRTNDdUksZUFBZSxDQUFDblEsS0FBSyxHQUFHMkcsTUFBTSxDQUFDbUssU0FBUyxDQUFDaEosU0FBUyxDQUFDMkYsUUFBUSxDQUFDLENBQUM7VUFDN0RuSCx1REFBZSxDQUFDd0IsU0FBUyxHQUFHbkIsTUFBTSxDQUFDbUssU0FBUyxDQUFDaEosU0FBUztVQUN0RGUsd0VBQXdCLENBQUMsV0FBVyxFQUFFbEMsTUFBTSxDQUFDbUssU0FBUyxDQUFDaEosU0FBUyxDQUFDO1VBRWpFc0ksV0FBVyxDQUFDcFEsS0FBSyxHQUFHMkcsTUFBTSxDQUFDbUssU0FBUyxDQUFDL0ksS0FBSyxDQUFDMEYsUUFBUSxDQUFDLENBQUM7VUFDckRuSCx1REFBZSxDQUFDeUIsS0FBSyxHQUFHcEIsTUFBTSxDQUFDbUssU0FBUyxDQUFDL0ksS0FBSztVQUM5Q2Msd0VBQXdCLENBQUMsT0FBTyxFQUFFbEMsTUFBTSxDQUFDbUssU0FBUyxDQUFDL0ksS0FBSyxDQUFDO1VBRXpEc0ksVUFBVSxDQUFDclEsS0FBSyxHQUFHMkcsTUFBTSxDQUFDbUssU0FBUyxDQUFDOUksSUFBSSxDQUFDeUYsUUFBUSxDQUFDLENBQUM7VUFDbkRuSCx1REFBZSxDQUFDMEIsSUFBSSxHQUFHckIsTUFBTSxDQUFDbUssU0FBUyxDQUFDOUksSUFBSTtVQUM1Q2Esd0VBQXdCLENBQUMsTUFBTSxFQUFFbEMsTUFBTSxDQUFDbUssU0FBUyxDQUFDOUksSUFBSSxDQUFDO1VBRXZEc0ksWUFBWSxDQUFDdFEsS0FBSyxHQUFHMkcsTUFBTSxDQUFDbUssU0FBUyxDQUFDN0ksTUFBTSxDQUFDd0YsUUFBUSxDQUFDLENBQUM7VUFDdkRuSCx1REFBZSxDQUFDMkIsTUFBTSxHQUFHdEIsTUFBTSxDQUFDbUssU0FBUyxDQUFDN0ksTUFBTTtVQUNoRFksd0VBQXdCLENBQUMsUUFBUSxFQUFFbEMsTUFBTSxDQUFDbUssU0FBUyxDQUFDN0ksTUFBTSxDQUFDO1VBRTNEc0ksYUFBYSxDQUFDdlEsS0FBSyxHQUFHMkcsTUFBTSxDQUFDbUssU0FBUyxDQUFDNUksT0FBTyxDQUFDdUYsUUFBUSxDQUFDLENBQUM7VUFDekRuSCx1REFBZSxDQUFDNEIsT0FBTyxHQUFHdkIsTUFBTSxDQUFDbUssU0FBUyxDQUFDNUksT0FBTztVQUNsRFcsd0VBQXdCLENBQUMsU0FBUyxFQUFFbEMsTUFBTSxDQUFDbUssU0FBUyxDQUFDNUksT0FBTyxDQUFDOztVQUU3RDtVQUNNaUcsZ0JBQWdCLEdBQUczRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztVQUFBLElBQ2hFMEYsZ0JBQWdCO1lBQUF6RyxTQUFBLENBQUFsRSxJQUFBO1lBQUE7VUFBQTtVQUNuQmdOLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLDJEQUEyRCxDQUFDO1VBQUMsT0FBQWhKLFNBQUEsQ0FBQXJFLE1BQUE7UUFBQTtVQUc3RThLLGdCQUFnQixDQUFDaEIsU0FBUyxHQUFHLEVBQUU7O1VBRS9CO1VBQUF6RixTQUFBLENBQUF2QyxJQUFBO1VBQUEsTUFFTXdCLE1BQU0sQ0FBQ3NJLGdCQUFnQixJQUFJdEksTUFBTSxDQUFDc0ksZ0JBQWdCLENBQUM1SyxNQUFNLEdBQUcsQ0FBQztZQUFBcUQsU0FBQSxDQUFBbEUsSUFBQTtZQUFBO1VBQUE7VUFDL0Q7VUFDQXdELE1BQU0sQ0FBQzhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUM7WUFBRUMsZ0JBQWdCLEVBQUV0SSxNQUFNLENBQUNzSTtVQUFpQixDQUFDLGVBQUFuSixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBZ0MsUUFBQTtZQUFBLElBQUFxSyxhQUFBO1lBQUEsT0FBQXpSLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFnRyxTQUFBQyxRQUFBO2NBQUEsa0JBQUFBLFFBQUEsQ0FBQTNCLElBQUEsR0FBQTJCLFFBQUEsQ0FBQXRELElBQUE7Z0JBQUE7a0JBQUFzRCxRQUFBLENBQUF0RCxJQUFBO2tCQUFBLE9BRTFDLGlMQUFnQztnQkFBQTtrQkFBdER1TixhQUFhLEdBQUFqSyxRQUFBLENBQUE1RCxJQUFBO2tCQUNuQjZOLGFBQWEsQ0FBQzdCLGFBQWEsQ0FBQyxDQUFDOztrQkFFN0I7a0JBQUEsS0FDSTlJLHlEQUFXLENBQUN1QixjQUFjO29CQUFBYixRQUFBLENBQUF0RCxJQUFBO29CQUFBO2tCQUFBO2tCQUFBc0QsUUFBQSxDQUFBdEQsSUFBQTtrQkFBQSxPQUN0QitDLGtGQUE4QixDQUFDSSxNQUFNLENBQUM7Z0JBQUE7Z0JBQUE7a0JBQUEsT0FBQUcsUUFBQSxDQUFBeEIsSUFBQTtjQUFBO1lBQUEsR0FBQW9CLE9BQUE7VUFBQSxDQUUvQyxHQUFDO1VBQUNnQixTQUFBLENBQUFsRSxJQUFBO1VBQUE7UUFBQTtVQUFBLEtBR0M0Qyx5REFBVyxDQUFDdUIsY0FBYztZQUFBRCxTQUFBLENBQUFsRSxJQUFBO1lBQUE7VUFBQTtVQUFBa0UsU0FBQSxDQUFBbEUsSUFBQTtVQUFBLE9BQ3RCK0Msa0ZBQThCLENBQUNJLE1BQU0sQ0FBQztRQUFBO1VBQUFlLFNBQUEsQ0FBQWxFLElBQUE7VUFBQTtRQUFBO1VBQUFrRSxTQUFBLENBQUF2QyxJQUFBO1VBQUF1QyxTQUFBLENBQUE0RyxFQUFBLEdBQUE1RyxTQUFBO1VBSWhEOEksT0FBTyxDQUFDRSxLQUFLLENBQUMsOEJBQThCLEVBQUFoSixTQUFBLENBQUE0RyxFQUFPLENBQUM7UUFBQztVQUd2RDtVQUNBakcsK0RBQWEsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFYLFNBQUEsQ0FBQXBDLElBQUE7TUFBQTtJQUFBLEdBQUFrQyxRQUFBO0VBQUEsQ0FDakI7RUFBQSxPQUFBeUkscUJBQUEsQ0FBQWpLLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBR00sU0FBUzRLLGdCQUFnQkEsQ0FBQ0ssT0FBZSxFQUFFO0VBQ2hELElBQU1DLGtCQUFrQixHQUFHekksUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQ25FLElBQUl3SSxrQkFBa0IsRUFBRTtJQUN0QkEsa0JBQWtCLENBQUNuSCxXQUFXLE1BQUFELE1BQUEsQ0FBTW1ILE9BQU8sUUFBSztFQUNsRDtBQUNGO0FBVUE7QUFDTyxTQUFTRSwwQkFBMEJBLENBQUEsRUFBMkI7RUFDakUsSUFBSUMsYUFBcUMsR0FBRztJQUN4QzlKLE9BQU8sRUFBRSxDQUFDO0lBQ1Y0SCxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCNkIsU0FBUyxFQUFFO01BQ1BsSixNQUFNLEVBQUUsS0FBSztNQUNiRSxTQUFTLEVBQUUsQ0FBQztNQUNaQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxJQUFJLEVBQUUsQ0FBQztNQUNQQyxNQUFNLEVBQUUsR0FBRztNQUNYQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0QwSSxRQUFRLEVBQUU7RUFDZCxDQUFDOztFQUVIO0VBQ0EsSUFBTVYsYUFBYSxHQUFHMUgsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFxQjtFQUM1RSxJQUFJLENBQUN5SCxhQUFhLEVBQUU7SUFDbEJNLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLDZDQUE2QyxDQUFDO0lBQzVELE9BQU9TLGFBQWE7RUFDdEIsQ0FBQyxNQUFNQSxhQUFhLENBQUM5SixPQUFPLEdBQUdxQixVQUFVLENBQUN3SCxhQUFhLENBQUNsUSxLQUFLLENBQUM7O0VBRTlEO0VBQ0EsSUFBTW1PLGdCQUFnQixHQUFHM0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7RUFDckUsSUFBSSxDQUFDMEYsZ0JBQWdCLEVBQUU7SUFDckJxQyxPQUFPLENBQUNFLEtBQUssQ0FBQywyREFBMkQsQ0FBQztJQUMxRSxPQUFPUyxhQUFhO0VBQ3RCO0VBQ0EsSUFBTUMsZUFBZSxHQUFHakQsZ0JBQWdCLENBQUN3QixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztFQUU3RSxJQUFNVixnQkFBa0MsR0FBRyxFQUFFO0VBQzdDbUMsZUFBZSxDQUFDaFAsT0FBTyxDQUFDLFVBQUFpUCxhQUFhLEVBQUk7SUFDdkMsSUFBSSxFQUFFQSxhQUFhLFlBQVlDLFdBQVcsQ0FBQyxFQUFFO01BQ3pDZCxPQUFPLENBQUNFLEtBQUssQ0FBQyxpREFBaUQsQ0FBQztNQUNoRTtJQUNKO0lBQ0EsSUFBTWEsZUFBa0MsR0FBR0YsYUFBYSxDQUFDaEUsYUFBYSxDQUFDLGFBQWEsQ0FBcUI7SUFDekcsSUFBTW1FLE1BQXlCLEdBQUdILGFBQWEsQ0FBQ2hFLGFBQWEsQ0FBQyxJQUFJLENBQXFCO0lBQ3ZGLElBQU1vRSxhQUFnQyxHQUFHSixhQUFhLENBQUNoRSxhQUFhLENBQUMsV0FBVyxDQUFxQjtJQUNyRyxJQUFNcUUsV0FBOEIsR0FBR0wsYUFBYSxDQUFDaEUsYUFBYSxDQUFDLFNBQVMsQ0FBcUI7SUFDakcsSUFBTXNFLEVBQW1CLEdBQUc7TUFDMUJyRyxFQUFFLEVBQUUrRixhQUFhLENBQUNPLE9BQU8sQ0FBQ3RHLEVBQUUsSUFBSSxFQUFFO01BQ2xDa0MsVUFBVSxFQUFFOUUsVUFBVSxDQUFDNkksZUFBZSxDQUFDdlIsS0FBSyxDQUFDO01BQzdDMEssQ0FBQyxFQUFFaEMsVUFBVSxDQUFDOEksTUFBTSxDQUFDeFIsS0FBSyxDQUFDO01BQzNCNlIsUUFBUSxFQUFFbkosVUFBVSxDQUFDK0ksYUFBYSxDQUFDelIsS0FBSyxDQUFDO01BQ3pDNEwsTUFBTSxFQUFFOEYsV0FBVyxDQUFDOUk7SUFDdEIsQ0FBQztJQUNEcUcsZ0JBQWdCLENBQUNqTCxJQUFJLENBQUMyTixFQUFFLENBQUM7RUFDM0IsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTUcsaUJBQW9DLEdBQUd0SixRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBcUI7RUFDNUcsSUFBTXBDLGVBQXlCLEdBQUd5TCxpQkFBaUIsQ0FBQ2xKLE9BQU87RUFDM0QsSUFBTW1KLGNBQWlDLEdBQUd2SixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQXFCO0VBQ2xHLElBQU11SixVQUE2QixHQUFHeEosUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFxQjtFQUMxRixJQUFNd0osU0FBNEIsR0FBR3pKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBcUI7RUFDeEYsSUFBTXlKLFdBQThCLEdBQUcxSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQXFCO0VBQzVGLElBQU0wSixZQUErQixHQUFHM0osUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFxQjtFQUU5RjBJLGFBQWEsR0FBRztJQUNkOUosT0FBTyxFQUFFcUIsVUFBVSxDQUFDd0gsYUFBYSxDQUFDbFEsS0FBSyxDQUFDO0lBQ3hDaVAsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEI2QixTQUFTLEVBQUU7TUFDVGxKLE1BQU0sRUFBRXZCLGVBQWU7TUFDdkJ5QixTQUFTLEVBQUVZLFVBQVUsQ0FBQ3FKLGNBQWMsQ0FBQy9SLEtBQUssQ0FBQztNQUMzQytILEtBQUssRUFBRVcsVUFBVSxDQUFDc0osVUFBVSxDQUFDaFMsS0FBSyxDQUFDO01BQ25DZ0ksSUFBSSxFQUFFVSxVQUFVLENBQUN1SixTQUFTLENBQUNqUyxLQUFLLENBQUM7TUFDakNpSSxNQUFNLEVBQUVTLFVBQVUsQ0FBQ3dKLFdBQVcsQ0FBQ2xTLEtBQUssQ0FBQztNQUNyQ2tJLE9BQU8sRUFBRVEsVUFBVSxDQUFDeUosWUFBWSxDQUFDblMsS0FBSztJQUN4QyxDQUFDO0lBQ0Q0USxRQUFRLEVBQUVwSSxRQUFRLENBQUNrRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVc7RUFDeEQsQ0FBQztFQUVELE9BQU91RSxhQUFhO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDMUxBLHFKQUFBN1IsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFDc0I7QUFhckI7QUFDeUM7QUFDbkMsSUFBSUcsV0FBdUIsR0FBRyxDQUFDLENBQWU7QUFHOUMsU0FBU2dNLFNBQVNBLENBQTZCQyxTQUFZLEVBQUVyUyxLQUFVLEVBQUU7RUFDNUVnSCxNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFDQyxJQUFJLEVBQUs7SUFDekMsSUFBTWtELE1BQWtCLEdBQUdsRCxJQUFJLENBQUNrRCxNQUFNLElBQUksQ0FBQyxDQUFlO0lBQzFEQSxNQUFNLENBQUNELFNBQVMsQ0FBQyxHQUFHclMsS0FBSztJQUN6QmdILE1BQU0sQ0FBQzhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUM7TUFBRXNELE1BQU0sRUFBTkE7SUFBTyxDQUFDLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0VBQ0ZsTSxXQUFXLENBQUNpTSxTQUFTLENBQUMsR0FBR3JTLEtBQUs7QUFDbEM7O0FBRUE7QUFDTyxTQUFTdVMsWUFBWUEsQ0FBQSxFQUFHO0VBQzdCdkwsTUFBTSxDQUFDOEgsT0FBTyxDQUFDQyxLQUFLLENBQUNJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsSUFBSSxFQUFFO0lBQ2hELElBQUlBLElBQUksQ0FBQ2tELE1BQU0sRUFBRTtNQUNmLElBQU1BLE1BQU0sR0FBR2xELElBQUksQ0FBQ2tELE1BQW9CO01BQ3hDbE0sV0FBVyxHQUFHa00sTUFBTTtNQUVwQjlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFNkIsTUFBTSxDQUFDO01BRTdDLElBQUlsTSxXQUFXLENBQUN1QixjQUFjLEVBQUU7UUFDOUIsSUFBTTZLLFlBQVksR0FBR2hLLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLENBQUMrSixZQUFZLEVBQUUsTUFBTSxJQUFJM1AsS0FBSyxDQUFDLG9DQUFvQyxDQUFDO1FBQ3hFMlAsWUFBWSxDQUFDMUksV0FBVyxHQUFHLGtCQUFrQjtNQUMvQzs7TUFFQTtNQUNBLElBQUl3SSxNQUFNLENBQUNHLFNBQVMsS0FBS2xELFNBQVMsRUFBRTtRQUNsQyxJQUFNbEksT0FBTyxHQUFHbUIsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFxQjtRQUN0RSxJQUFJLENBQUNwQixPQUFPLEVBQUUsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLHFDQUFxQyxDQUFDO1FBQ3BFd0UsT0FBTyxDQUFDckgsS0FBSyxHQUFHc1MsTUFBTSxDQUFDRyxTQUFTLENBQUNoRixRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFNaUYsYUFBYSxHQUFHbEssUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQzlELElBQUksQ0FBQ2lLLGFBQWEsRUFBRSxNQUFNLElBQUk3UCxLQUFLLENBQUMsb0NBQW9DLENBQUM7UUFDekU2UCxhQUFhLENBQUM1SSxXQUFXLE1BQUFELE1BQUEsQ0FBTXlJLE1BQU0sQ0FBQ0csU0FBUyxRQUFLO01BQ3REOztNQUVBO01BQ0EsSUFBSUgsTUFBTSxDQUFDMUIsUUFBUSxLQUFLckIsU0FBUyxFQUFFO1FBQ2pDLElBQUkrQyxNQUFNLENBQUMxQixRQUFRLEVBQUU7VUFDbkJwSSxRQUFRLENBQUNrRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ2tFLEdBQUcsQ0FBQyxXQUFXLENBQUM7VUFDeEMsSUFBTThCLGlCQUFpQixHQUFHbkssUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFxQjtVQUNsRixJQUFJLENBQUNrSyxpQkFBaUIsRUFBRSxNQUFNLElBQUk5UCxLQUFLLENBQUMsMkNBQTJDLENBQUM7VUFDcEY4UCxpQkFBaUIsQ0FBQy9KLE9BQU8sR0FBRyxJQUFJO1FBQ2xDLENBQUMsTUFBTTtVQUNMSixRQUFRLENBQUNrRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ3FCLE1BQU0sQ0FBQyxXQUFXLENBQUM7VUFDM0MsSUFBTTJFLGtCQUFpQixHQUFHbkssUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFxQjtVQUNsRixJQUFJLENBQUNrSyxrQkFBaUIsRUFBRSxNQUFNLElBQUk5UCxLQUFLLENBQUMsMkNBQTJDLENBQUM7VUFDcEY4UCxrQkFBaUIsQ0FBQy9KLE9BQU8sR0FBRyxLQUFLO1FBQ25DO01BQ0Y7O01BRUE7TUFDQSxJQUFJMEosTUFBTSxDQUFDeEIsU0FBUyxFQUFFO1FBQ3BCLElBQU04QixnQkFBZ0IsR0FBR3BLLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFxQjtRQUN4RixJQUFJLENBQUNtSyxnQkFBZ0IsRUFBRSxNQUFNLElBQUkvUCxLQUFLLENBQUMsZ0RBQWdELENBQUM7UUFDeEYrUCxnQkFBZ0IsQ0FBQ2hLLE9BQU8sR0FBRzBKLE1BQU0sQ0FBQ3hCLFNBQVMsQ0FBQ2xKLE1BQU07UUFDbERPLDhEQUFrQixDQUFDbUssTUFBTSxDQUFDeEIsU0FBUyxDQUFDbEosTUFBTSxDQUFDO1FBRTNDLElBQUkwSyxNQUFNLENBQUN4QixTQUFTLENBQUNoSixTQUFTLEtBQUt5SCxTQUFTLEVBQUU7VUFDNUMsSUFBTXpILFNBQVMsR0FBR1UsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFxQjtVQUMxRSxJQUFJLENBQUNYLFNBQVMsRUFBRSxNQUFNLElBQUlqRixLQUFLLENBQUMsdUNBQXVDLENBQUM7VUFDeEVpRixTQUFTLENBQUM5SCxLQUFLLEdBQUdzUyxNQUFNLENBQUN4QixTQUFTLENBQUNoSixTQUFTLENBQUMyRixRQUFRLENBQUMsQ0FBQztVQUN2RHJGLDZEQUFpQixDQUFDLFdBQVcsRUFBRU0sVUFBVSxDQUFDWixTQUFTLENBQUM5SCxLQUFLLENBQUMsQ0FBQztRQUM3RDtRQUVBLElBQUlzUyxNQUFNLENBQUN4QixTQUFTLENBQUMvSSxLQUFLLEtBQUt3SCxTQUFTLEVBQUU7VUFDeEMsSUFBTXhILEtBQUssR0FBR1MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFxQjtVQUNsRSxJQUFJLENBQUNWLEtBQUssRUFBRSxNQUFNLElBQUlsRixLQUFLLENBQUMsbUNBQW1DLENBQUM7VUFDaEVrRixLQUFLLENBQUMvSCxLQUFLLEdBQUdzUyxNQUFNLENBQUN4QixTQUFTLENBQUMvSSxLQUFLLENBQUMwRixRQUFRLENBQUMsQ0FBQztVQUMvQ3JGLDZEQUFpQixDQUFDLE9BQU8sRUFBRU0sVUFBVSxDQUFDWCxLQUFLLENBQUMvSCxLQUFLLENBQUMsQ0FBQztRQUNyRDtRQUVBLElBQUlzUyxNQUFNLENBQUN4QixTQUFTLENBQUM5SSxJQUFJLEtBQUt1SCxTQUFTLEVBQUU7VUFDdkMsSUFBTXZILElBQUksR0FBR1EsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFxQjtVQUNoRSxJQUFJLENBQUNULElBQUksRUFBRSxNQUFNLElBQUluRixLQUFLLENBQUMsa0NBQWtDLENBQUM7VUFDOURtRixJQUFJLENBQUNoSSxLQUFLLEdBQUdzUyxNQUFNLENBQUN4QixTQUFTLENBQUM5SSxJQUFJLENBQUN5RixRQUFRLENBQUMsQ0FBQztVQUM3Q3JGLDZEQUFpQixDQUFDLE1BQU0sRUFBRU0sVUFBVSxDQUFDVixJQUFJLENBQUNoSSxLQUFLLENBQUMsQ0FBQztRQUNuRDtRQUVBLElBQUlzUyxNQUFNLENBQUN4QixTQUFTLENBQUM3SSxNQUFNLEtBQUtzSCxTQUFTLEVBQUU7VUFDekMsSUFBTXRILE1BQU0sR0FBR08sUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFxQjtVQUNwRSxJQUFJLENBQUNSLE1BQU0sRUFBRSxNQUFNLElBQUlwRixLQUFLLENBQUMsb0NBQW9DLENBQUM7VUFDbEVvRixNQUFNLENBQUNqSSxLQUFLLEdBQUdzUyxNQUFNLENBQUN4QixTQUFTLENBQUM3SSxNQUFNLENBQUN3RixRQUFRLENBQUMsQ0FBQztVQUNqRHJGLDZEQUFpQixDQUFDLFFBQVEsRUFBRU0sVUFBVSxDQUFDVCxNQUFNLENBQUNqSSxLQUFLLENBQUMsQ0FBQztRQUN2RDtRQUVBLElBQUlzUyxNQUFNLENBQUN4QixTQUFTLENBQUM1SSxPQUFPLEtBQUtxSCxTQUFTLEVBQUU7VUFDMUMsSUFBTXJILE9BQU8sR0FBR00sUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFxQjtVQUN0RSxJQUFJLENBQUNQLE9BQU8sRUFBRSxNQUFNLElBQUlyRixLQUFLLENBQUMscUNBQXFDLENBQUM7VUFDcEVxRixPQUFPLENBQUNsSSxLQUFLLEdBQUdzUyxNQUFNLENBQUN4QixTQUFTLENBQUM1SSxPQUFPLENBQUN1RixRQUFRLENBQUMsQ0FBQztVQUNuRHJGLDZEQUFpQixDQUFDLFNBQVMsRUFBRU0sVUFBVSxDQUFDUixPQUFPLENBQUNsSSxLQUFLLENBQUMsQ0FBQztRQUN6RDtNQUNGO0lBQ0Y7RUFDRixDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNPLFNBQVNxSSxhQUFhQSxDQUFBLEVBQUc7RUFDOUIsSUFBTWhCLE9BQU8sR0FBR21CLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBNEI7RUFDN0UsSUFBSSxDQUFDcEIsT0FBTyxFQUFFLE1BQU0sSUFBSXhFLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztFQUNwRSxJQUFNeVAsTUFBa0IsR0FBRztJQUN6QjNLLGNBQWMsRUFBRXZCLFdBQVcsQ0FBQ3VCLGNBQWM7SUFDMUNpSixRQUFRLEVBQUVwSSxRQUFRLENBQUNrRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUN2RGtFLFNBQVMsRUFBRTtNQUNUbEosTUFBTSxFQUFFZ0QsOERBQWtCLENBQUMsQ0FBQztNQUM1QjlDLFNBQVMsRUFBRWdELDZEQUFpQixDQUFDLFdBQVcsQ0FBQztNQUN6Qy9DLEtBQUssRUFBRStDLDZEQUFpQixDQUFDLE9BQU8sQ0FBQztNQUNqQzlDLElBQUksRUFBRThDLDZEQUFpQixDQUFDLE1BQU0sQ0FBQztNQUMvQjdDLE1BQU0sRUFBRTZDLDZEQUFpQixDQUFDLFFBQVEsQ0FBQztNQUNuQzVDLE9BQU8sRUFBRTRDLDZEQUFpQixDQUFDLFNBQVM7SUFDdEMsQ0FBQztJQUNEMkgsU0FBUyxFQUFFL0osVUFBVSxDQUFDckIsT0FBTyxDQUFDckgsS0FBSztFQUNyQyxDQUFDO0VBQ0RnSCxNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO0lBQUUsUUFBUSxFQUFFc0Q7RUFBTyxDQUFDLENBQUM7RUFDOUM5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRTZCLE1BQU0sQ0FBQztBQUNoRDs7QUFFQTtBQUNPLFNBQVNPLGtCQUFrQkEsQ0FBQSxFQUFHO0VBQ25DLElBQU1DLFlBQVksR0FBR3RLLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBc0I7RUFDbEYsSUFBSSxDQUFDcUssWUFBWSxFQUFFLE1BQU0sSUFBSWpRLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQzs7RUFFM0U7RUFDQSxPQUFPaVEsWUFBWSxDQUFDQyxPQUFPLENBQUMxTyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3RDeU8sWUFBWSxDQUFDOUUsTUFBTSxDQUFDLENBQUMsQ0FBQztFQUN4Qjs7RUFFQTtFQUNBaEgsTUFBTSxDQUFDOEgsT0FBTyxDQUFDQyxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQUM2RCxNQUFNLEVBQUs7SUFDaEQsSUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQU8sSUFBSSxDQUFDLENBQUM7O0lBRXBDO0lBQ0F2VCxNQUFNLENBQUNzRixJQUFJLENBQUNpTyxPQUFPLENBQUMsQ0FBQzdRLE9BQU8sQ0FBQyxVQUFBOFEsWUFBWSxFQUFJO01BQzNDLElBQU1DLE1BQU0sR0FBRzNLLFFBQVEsQ0FBQzhELGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0M2RyxNQUFNLENBQUNuVCxLQUFLLEdBQUdrVCxZQUFZO01BQzNCQyxNQUFNLENBQUNySixXQUFXLEdBQUdvSixZQUFZO01BQ2pDSixZQUFZLENBQUMxRSxXQUFXLENBQUMrRSxNQUFNLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFFTyxTQUFlQyxZQUFZQSxDQUFBO0VBQUEsT0FBQUMsYUFBQSxDQUFBck4sS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFPakMsU0FBQXNOLGNBQUE7RUFBQUEsYUFBQSxHQUFBdk4saUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBUE0sU0FBQWdDLFFBQUE7SUFBQSxPQUFBcEgsbUJBQUEsR0FBQXVCLElBQUEsVUFBQWdHLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBM0IsSUFBQSxHQUFBMkIsUUFBQSxDQUFBdEQsSUFBQTtRQUFBO1VBQ0xnTixPQUFPLENBQUNDLEdBQUcsQ0FBQywrRUFBK0UsQ0FBQztVQUM1RjtVQUFBM0osUUFBQSxDQUFBdEQsSUFBQTtVQUFBLE9BQ013RCxNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ3VFLEtBQUssQ0FBQyxDQUFDO1FBQUE7VUFDbEM7VUFDQXRNLE1BQU0sQ0FBQzhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUM7WUFBRXJILGNBQWMsRUFBRTtVQUFNLENBQUMsQ0FBQztVQUNuRHZCLFdBQVcsR0FBRyxDQUFDLENBQWU7UUFBQztRQUFBO1VBQUEsT0FBQVUsUUFBQSxDQUFBeEIsSUFBQTtNQUFBO0lBQUEsR0FBQW9CLE9BQUE7RUFBQSxDQUNoQztFQUFBLE9BQUEyTSxhQUFBLENBQUFyTixLQUFBLE9BQUFELFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEtNLFNBQVN3TixZQUFZQSxDQUFDQyxNQUFlLEVBQUVDLFVBQWtCLEVBQUVDLFdBQW1CLEVBQVc7RUFDOUYsSUFBSUYsTUFBTSxDQUFDblAsTUFBTSxJQUFJb1AsVUFBVSxFQUFFLE9BQU9ELE1BQU07RUFFOUMsSUFBTUcsUUFBaUIsR0FBRyxFQUFFO0VBRTVCQSxRQUFRLENBQUMzUCxJQUFJLENBQUN3UCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFeEIsS0FBSyxJQUFJdlQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdVQsTUFBTSxDQUFDblAsTUFBTSxHQUFHLENBQUMsRUFBRXBFLENBQUMsRUFBRSxFQUFFO0lBQzFDO0lBQ0EsSUFBTTJULGNBQWMsR0FBRzFJLElBQUksQ0FBQzJJLEdBQUcsQ0FDN0IsQ0FBQyxFQUNEM0ksSUFBSSxDQUFDNEksS0FBSyxDQUFDTCxVQUFVLEdBQUd2SSxJQUFJLENBQUNpQixHQUFHLENBQUVxSCxNQUFNLENBQUN2VCxDQUFDLENBQUMsQ0FBQzhULENBQUMsR0FBR0wsV0FBVyxFQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDdEUsQ0FBQztJQUVELElBQU1NLFVBQVUsR0FBRzlJLElBQUksQ0FBQzRJLEtBQUssQ0FBQ0YsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUNqRCxJQUFNSyxRQUFRLEdBQUcvSSxJQUFJLENBQUMySSxHQUFHLENBQUMsQ0FBQyxFQUFFNVQsQ0FBQyxHQUFHK1QsVUFBVSxDQUFDO0lBQzVDLElBQU1FLE1BQU0sR0FBR2hKLElBQUksQ0FBQ2lKLEdBQUcsQ0FBQ1gsTUFBTSxDQUFDblAsTUFBTSxHQUFHLENBQUMsRUFBRXBFLENBQUMsR0FBRytULFVBQVUsQ0FBQztJQUUxRCxJQUFJSSxJQUFJLEdBQUcsQ0FBQztJQUNaLEtBQUssSUFBSUMsQ0FBQyxHQUFHSixRQUFRLEVBQUVJLENBQUMsSUFBSUgsTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtNQUN2Q0QsSUFBSSxJQUFJWixNQUFNLENBQUNhLENBQUMsQ0FBQyxDQUFDM1MsQ0FBQztJQUNyQjtJQUVBLElBQU00UyxJQUFJLEdBQUdGLElBQUksSUFBSUYsTUFBTSxHQUFHRCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzNDTixRQUFRLENBQUMzUCxJQUFJLENBQUM7TUFBRStQLENBQUMsRUFBRVAsTUFBTSxDQUFDdlQsQ0FBQyxDQUFDLENBQUM4VCxDQUFDO01BQUVyUyxDQUFDLEVBQUU0UztJQUFLLENBQUMsQ0FBQztFQUM1QztFQUVBLElBQUlkLE1BQU0sQ0FBQ25QLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDckJzUCxRQUFRLENBQUMzUCxJQUFJLENBQUN3UCxNQUFNLENBQUNBLE1BQU0sQ0FBQ25QLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMxQztFQUVBLE9BQU9zUCxRQUFRO0FBQ2pCOztBQUVBO0FBQ08sU0FBU3hOLFFBQVFBLENBQUNvTyxFQUFVLEVBQVU7RUFDM0MsT0FBT3JKLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQyxFQUFFLEVBQUVvSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQzlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUMwQztBQUMrQjtBQVV6RTtBQUNPLFNBQVNDLGNBQWNBLENBQUNwRixJQUFvQixFQUFFO0VBQ25ELElBQU1xRixPQUFpQixHQUFHckYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7RUFDM0MsSUFBTXNGLE9BQWlCLEdBQUd0RixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtFQUMzQyxJQUFNdUYsUUFBa0IsR0FBR3ZGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0VBQzdDLElBQU13RixXQUFtQixHQUFHeEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRztFQUN2RCxJQUFNeUYsV0FBbUIsR0FBR3pGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDdEQsSUFBTTBGLE1BQU0sR0FBR3RNLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxJQUFJc00sR0FBb0MsR0FBRyxJQUFJO0VBQy9DLElBQUlELE1BQU0sWUFBWUUsaUJBQWlCLEVBQUU7SUFDdkNELEdBQUcsR0FBR0QsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQUksQ0FBQ0YsR0FBRyxFQUFFLE1BQU0sSUFBSWxTLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQztFQUN0RyxDQUFDLE1BQU07SUFDTCxNQUFNLElBQUlBLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQztFQUNoRTtFQUVBLElBQU1xUyxZQUFZLEdBQUdULE9BQU8sQ0FBQ3BRLE1BQU07O0VBRW5DO0VBQ0EsSUFBTW9JLFVBQVUsR0FBR2pFLFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDOztFQUVoRTtFQUNBbUksR0FBRyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUwsTUFBTSxDQUFDTSxLQUFLLEVBQUVOLE1BQU0sQ0FBQ08sTUFBTSxDQUFDO0VBQ2hETixHQUFHLENBQUNPLFNBQVMsR0FBRzdJLFVBQVUsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7RUFDcERzSSxHQUFHLENBQUNRLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFVCxNQUFNLENBQUNNLEtBQUssRUFBRU4sTUFBTSxDQUFDTyxNQUFNLENBQUM7O0VBRS9DO0VBQ0EsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUl4RSxPQUFlLEVBQUs7SUFDdkM7SUFDQSxJQUFNeUUsU0FBUyxHQUFHdkssSUFBSSxDQUFDMkksR0FBRyxDQUFDZSxXQUFXLEVBQUUxSixJQUFJLENBQUNpSixHQUFHLENBQUNVLFdBQVcsRUFBRTdELE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFO0lBQ0EsT0FBTyxDQUFDeUUsU0FBUyxHQUFHYixXQUFXLEtBQUtDLFdBQVcsR0FBR0QsV0FBVyxDQUFDO0VBQ2hFLENBQUM7O0VBRUQ7RUFDQUcsR0FBRyxDQUFDTyxTQUFTLEdBQUc3SSxVQUFVLEdBQUcsU0FBUyxHQUFHLE1BQU07RUFDL0NzSSxHQUFHLENBQUNXLElBQUksR0FBRyxZQUFZO0VBQ3ZCLElBQU1DLFVBQVUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUN6RUEsVUFBVSxDQUFDdlQsT0FBTyxDQUFDLFVBQUNzSixJQUFJLEVBQUVrSyxLQUFLLEVBQUs7SUFDbEM7SUFDQSxJQUFNQyxNQUFNLEdBQUczSyxJQUFJLENBQUNDLElBQUksQ0FBQ08sSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBTW9LLFlBQVksR0FBRzVLLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUk0SSxDQUFDLEdBQUk4QixNQUFNLEdBQUdDLFlBQVksR0FBSWhCLE1BQU0sQ0FBQ00sS0FBSzs7SUFFOUM7SUFDQSxJQUFJUSxLQUFLLEdBQUdELFVBQVUsQ0FBQ3RSLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDakMsSUFBTTBSLFlBQVksR0FBRyxDQUFDLEdBQUlILEtBQUssSUFBSUQsVUFBVSxDQUFDdFIsTUFBTSxHQUFHLENBQUMsQ0FBRTtNQUMxRDBQLENBQUMsSUFBSSxFQUFFLEdBQUdnQyxZQUFZO0lBQ3hCOztJQUVBO0lBQ0FoQixHQUFHLENBQUNpQixXQUFXLEdBQUd2SixVQUFVLEdBQUcsU0FBUyxHQUFHLE1BQU07SUFDakRzSSxHQUFHLENBQUNrQixTQUFTLEdBQUcsQ0FBQztJQUNqQmxCLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZuQixHQUFHLENBQUNvQixNQUFNLENBQUNwQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCZ0IsR0FBRyxDQUFDcUIsTUFBTSxDQUFDckMsQ0FBQyxFQUFFZSxNQUFNLENBQUNPLE1BQU0sQ0FBQztJQUM1Qk4sR0FBRyxDQUFDc0IsTUFBTSxDQUFDLENBQUM7O0lBRVo7SUFDQXRCLEdBQUcsQ0FBQ08sU0FBUyxHQUFHN0ksVUFBVSxHQUFHLFNBQVMsR0FBRyxNQUFNO0lBQy9Dc0ksR0FBRyxDQUFDdUIsUUFBUSxDQUFDNUssSUFBSSxJQUFJLElBQUksTUFBQTdCLE1BQUEsQ0FBTTZCLElBQUksR0FBQyxJQUFJLFNBQU1BLElBQUksQ0FBQytCLFFBQVEsQ0FBQyxDQUFDLEVBQUVzRyxDQUFDLEdBQUcsRUFBRSxFQUFFZSxNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDM0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTWtCLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ3BEQSxRQUFRLENBQUNuVSxPQUFPLENBQUMsVUFBQW1TLEVBQUUsRUFBSTtJQUNyQixJQUFNN1MsQ0FBQyxHQUFHb1QsTUFBTSxDQUFDTyxNQUFNLEdBQUlHLFdBQVcsQ0FBQ2pCLEVBQUUsQ0FBQyxHQUFHTyxNQUFNLENBQUNPLE1BQU87O0lBRTNEO0lBQ0FOLEdBQUcsQ0FBQ2lCLFdBQVcsR0FBR3ZKLFVBQVUsR0FBRyxTQUFTLEdBQUcsTUFBTTtJQUNqRHNJLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZuQixHQUFHLENBQUNvQixNQUFNLENBQUMsQ0FBQyxFQUFFelUsQ0FBQyxDQUFDO0lBQ2hCcVQsR0FBRyxDQUFDcUIsTUFBTSxDQUFDdEIsTUFBTSxDQUFDTSxLQUFLLEVBQUUxVCxDQUFDLENBQUM7SUFDM0JxVCxHQUFHLENBQUNzQixNQUFNLENBQUMsQ0FBQzs7SUFFWjtJQUNBdEIsR0FBRyxDQUFDTyxTQUFTLEdBQUc3SSxVQUFVLEdBQUcsU0FBUyxHQUFHLE1BQU07SUFDL0NzSSxHQUFHLENBQUN1QixRQUFRLElBQUF6TSxNQUFBLENBQUkwSyxFQUFFLFVBQU8sQ0FBQyxFQUFFN1MsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUNyQyxDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFNOFUsU0FBUyxHQUFHLEVBQUU7RUFDcEIsSUFBTUMsU0FBUyxHQUFHLEVBQUU7RUFDcEIsSUFBTUMsVUFBVSxHQUFHLEVBQUU7O0VBRXJCO0VBQ0EsS0FBSyxJQUFJelcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaVYsWUFBWSxFQUFFalYsQ0FBQyxFQUFFLEVBQUU7SUFDckM7SUFDQTtJQUNBO0lBQ0EsSUFBTTBXLFNBQVMsR0FBRzFXLENBQUMsR0FBR2lWLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLElBQU0wQixXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7O0lBRTNCO0lBQ0EsSUFBTUMsVUFBVSxHQUFHRixTQUFTLEdBQUdDLFdBQVc7O0lBRTFDO0lBQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQUssRUFBRTs7SUFFeEI7SUFDQSxJQUFJQSxVQUFVLEdBQUcsRUFBRSxFQUFFOztJQUVyQjtJQUNBLElBQU1oQixNQUFNLEdBQUczSyxJQUFJLENBQUNDLElBQUksQ0FBQzBMLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQU1mLFlBQVksR0FBRzVLLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQU00SSxDQUFDLEdBQUk4QixNQUFNLEdBQUdDLFlBQVksR0FBSWhCLE1BQU0sQ0FBQ00sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDOztJQUUxRDtJQUNBLElBQUluVixDQUFDLEdBQUd3VSxPQUFPLENBQUNwUSxNQUFNLEVBQUU7TUFDdEIsSUFBTTNDLENBQUMsR0FBR29ULE1BQU0sQ0FBQ08sTUFBTSxHQUFJRyxXQUFXLENBQUNmLE9BQU8sQ0FBQ3hVLENBQUMsQ0FBQyxDQUFDLEdBQUc2VSxNQUFNLENBQUNPLE1BQU87TUFDbkVtQixTQUFTLENBQUN4UyxJQUFJLENBQUM7UUFBRStQLENBQUMsRUFBREEsQ0FBQztRQUFFclMsQ0FBQyxFQUFEQTtNQUFFLENBQUMsQ0FBQztJQUMxQjs7SUFFQTtJQUNBLElBQUl6QixDQUFDLEdBQUd5VSxPQUFPLENBQUNyUSxNQUFNLEVBQUU7TUFDdEIsSUFBTTNDLEVBQUMsR0FBR29ULE1BQU0sQ0FBQ08sTUFBTSxHQUFJRyxXQUFXLENBQUNkLE9BQU8sQ0FBQ3pVLENBQUMsQ0FBQyxDQUFDLEdBQUc2VSxNQUFNLENBQUNPLE1BQU87TUFDbkVvQixTQUFTLENBQUN6UyxJQUFJLENBQUM7UUFBRStQLENBQUMsRUFBREEsQ0FBQztRQUFFclMsQ0FBQyxFQUFEQTtNQUFFLENBQUMsQ0FBQztJQUMxQjtJQUVBLElBQUl6QixDQUFDLEdBQUcwVSxRQUFRLENBQUN0USxNQUFNLEVBQUU7TUFDdkIsSUFBTTNDLEdBQUMsR0FBR29ULE1BQU0sQ0FBQ08sTUFBTSxHQUFJRyxXQUFXLENBQUNiLFFBQVEsQ0FBQzFVLENBQUMsQ0FBQyxDQUFDLEdBQUc2VSxNQUFNLENBQUNPLE1BQU87TUFDcEVxQixVQUFVLENBQUMxUyxJQUFJLENBQUM7UUFBRStQLENBQUMsRUFBREEsQ0FBQztRQUFFclMsQ0FBQyxFQUFEQTtNQUFFLENBQUMsQ0FBQztJQUMzQjtFQUNGOztFQUVBO0VBQ0EsSUFBTW9WLGlCQUFpQixHQUFHdkQsdURBQVksQ0FBQ2lELFNBQVMsRUFBRSxDQUFDLEVBQUUxQixNQUFNLENBQUNNLEtBQUssQ0FBQztFQUNsRSxJQUFNMkIsaUJBQWlCLEdBQUd4RCx1REFBWSxDQUFDa0QsU0FBUyxFQUFFLENBQUMsRUFBRTNCLE1BQU0sQ0FBQ00sS0FBSyxDQUFDO0VBQ2xFLElBQU00QixrQkFBa0IsR0FBR3pELHVEQUFZLENBQUNtRCxVQUFVLEVBQUUsQ0FBQyxFQUFFNUIsTUFBTSxDQUFDTSxLQUFLLENBQUM7O0VBRXBFO0VBQ0FMLEdBQUcsQ0FBQ2tDLFVBQVUsR0FBRyxFQUFFO0VBQ25CbEMsR0FBRyxDQUFDbUMsYUFBYSxHQUFHLENBQUM7RUFDckJuQyxHQUFHLENBQUNvQyxhQUFhLEdBQUcsQ0FBQzs7RUFFckI7RUFDQXBDLEdBQUcsQ0FBQ3FDLFdBQVcsR0FBRyx5QkFBeUI7RUFDM0NyQyxHQUFHLENBQUNpQixXQUFXLEdBQUcseUJBQXlCO0VBQzNDakIsR0FBRyxDQUFDTyxTQUFTLEdBQUcseUJBQXlCO0VBQ3pDUCxHQUFHLENBQUNrQixTQUFTLEdBQUcsQ0FBQzs7RUFFakI7RUFDQWxCLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO0VBQ2ZuQixHQUFHLENBQUNvQixNQUFNLENBQUMsQ0FBQyxFQUFFckIsTUFBTSxDQUFDTyxNQUFNLENBQUM7O0VBRTVCO0VBQ0F5QixpQkFBaUIsQ0FBQzFVLE9BQU8sQ0FBQyxVQUFBaVYsS0FBSyxFQUFJO0lBQ2pDdEMsR0FBRyxDQUFDcUIsTUFBTSxDQUFDaUIsS0FBSyxDQUFDdEQsQ0FBQyxFQUFFc0QsS0FBSyxDQUFDM1YsQ0FBQyxDQUFDO0VBQzlCLENBQUMsQ0FBQzs7RUFFRjtFQUNBcVQsR0FBRyxDQUFDcUIsTUFBTSxDQUFDdEIsTUFBTSxDQUFDTSxLQUFLLEVBQUVOLE1BQU0sQ0FBQ08sTUFBTSxDQUFDO0VBQ3ZDTixHQUFHLENBQUN1QyxTQUFTLENBQUMsQ0FBQzs7RUFFZjtFQUNBdkMsR0FBRyxDQUFDd0MsSUFBSSxDQUFDLENBQUM7O0VBRVY7RUFDQXhDLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO0VBQ2YsSUFBSVksaUJBQWlCLENBQUN6UyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ2hDMFEsR0FBRyxDQUFDb0IsTUFBTSxDQUFDVyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQy9DLENBQUMsRUFBRStDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDcFYsQ0FBQyxDQUFDO0lBQzFELEtBQUssSUFBSXpCLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBRzZXLGlCQUFpQixDQUFDelMsTUFBTSxFQUFFcEUsRUFBQyxFQUFFLEVBQUU7TUFDakQ4VSxHQUFHLENBQUNxQixNQUFNLENBQUNVLGlCQUFpQixDQUFDN1csRUFBQyxDQUFDLENBQUM4VCxDQUFDLEVBQUUrQyxpQkFBaUIsQ0FBQzdXLEVBQUMsQ0FBQyxDQUFDeUIsQ0FBQyxDQUFDO0lBQzVEO0lBQ0FxVCxHQUFHLENBQUNzQixNQUFNLENBQUMsQ0FBQztFQUNkOztFQUVBO0VBQ0F0QixHQUFHLENBQUNxQyxXQUFXLEdBQUcseUJBQXlCO0VBQzNDckMsR0FBRyxDQUFDaUIsV0FBVyxHQUFHLHlCQUF5QjtFQUMzQ2pCLEdBQUcsQ0FBQ08sU0FBUyxHQUFHLHlCQUF5Qjs7RUFFekM7RUFDQVAsR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUM7RUFDZm5CLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDLEVBQUVyQixNQUFNLENBQUNPLE1BQU0sQ0FBQzs7RUFFNUI7RUFDQTBCLGlCQUFpQixDQUFDM1UsT0FBTyxDQUFDLFVBQUFpVixLQUFLLEVBQUk7SUFDakN0QyxHQUFHLENBQUNxQixNQUFNLENBQUNpQixLQUFLLENBQUN0RCxDQUFDLEVBQUVzRCxLQUFLLENBQUMzVixDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDOztFQUVGO0VBQ0FxVCxHQUFHLENBQUNxQixNQUFNLENBQUN0QixNQUFNLENBQUNNLEtBQUssRUFBRU4sTUFBTSxDQUFDTyxNQUFNLENBQUM7RUFDdkNOLEdBQUcsQ0FBQ3VDLFNBQVMsQ0FBQyxDQUFDOztFQUVmO0VBQ0F2QyxHQUFHLENBQUN3QyxJQUFJLENBQUMsQ0FBQzs7RUFFVjtFQUNBeEMsR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUM7RUFDZixJQUFJYSxpQkFBaUIsQ0FBQzFTLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDaEMwUSxHQUFHLENBQUNvQixNQUFNLENBQUNZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDaEQsQ0FBQyxFQUFFZ0QsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUNyVixDQUFDLENBQUM7SUFDMUQsS0FBSyxJQUFJekIsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHOFcsaUJBQWlCLENBQUMxUyxNQUFNLEVBQUVwRSxHQUFDLEVBQUUsRUFBRTtNQUNqRDhVLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQ1csaUJBQWlCLENBQUM5VyxHQUFDLENBQUMsQ0FBQzhULENBQUMsRUFBRWdELGlCQUFpQixDQUFDOVcsR0FBQyxDQUFDLENBQUN5QixDQUFDLENBQUM7SUFDNUQ7SUFDQXFULEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxDQUFDO0VBQ2Q7O0VBRUE7RUFDQXRCLEdBQUcsQ0FBQ3FDLFdBQVcsR0FBRyx5QkFBeUI7RUFDM0NyQyxHQUFHLENBQUNpQixXQUFXLEdBQUcseUJBQXlCO0VBQzNDakIsR0FBRyxDQUFDTyxTQUFTLEdBQUcseUJBQXlCOztFQUV6QztFQUNBUCxHQUFHLENBQUNtQixTQUFTLENBQUMsQ0FBQztFQUNmbkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLENBQUMsRUFBRXJCLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUMsQ0FBQzs7RUFFOUI7RUFDQTJCLGtCQUFrQixDQUFDNVUsT0FBTyxDQUFDLFVBQUFpVixLQUFLLEVBQUk7SUFDbEN0QyxHQUFHLENBQUNxQixNQUFNLENBQUNpQixLQUFLLENBQUN0RCxDQUFDLEVBQUVzRCxLQUFLLENBQUMzVixDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDOztFQUVGO0VBQ0FxVCxHQUFHLENBQUNxQixNQUFNLENBQUN0QixNQUFNLENBQUNNLEtBQUssRUFBRU4sTUFBTSxDQUFDTyxNQUFNLENBQUM7RUFDdkNOLEdBQUcsQ0FBQ3VDLFNBQVMsQ0FBQyxDQUFDOztFQUVmO0VBQ0F2QyxHQUFHLENBQUN3QyxJQUFJLENBQUMsQ0FBQzs7RUFFVjtFQUNBeEMsR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUM7RUFDZixJQUFJYyxrQkFBa0IsQ0FBQzNTLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDakMwUSxHQUFHLENBQUNvQixNQUFNLENBQUNhLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDakQsQ0FBQyxFQUFFaUQsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUN0VixDQUFDLENBQUM7SUFDNUQsS0FBSyxJQUFJekIsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHK1csa0JBQWtCLENBQUMzUyxNQUFNLEVBQUVwRSxHQUFDLEVBQUUsRUFBRTtNQUNsRDhVLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQ1ksa0JBQWtCLENBQUMvVyxHQUFDLENBQUMsQ0FBQzhULENBQUMsRUFBRWlELGtCQUFrQixDQUFDL1csR0FBQyxDQUFDLENBQUN5QixDQUFDLENBQUM7SUFDOUQ7SUFDQXFULEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxDQUFDO0VBQ2Q7O0VBRUE7RUFDQXRCLEdBQUcsQ0FBQ2tDLFVBQVUsR0FBRyxDQUFDO0VBQ2xCbEMsR0FBRyxDQUFDcUMsV0FBVyxHQUFHLGFBQWE7O0VBRS9CO0VBQ0EsSUFBTUksT0FBTyxHQUFHLEVBQUU7RUFDbEIsSUFBTUMsYUFBYSxHQUFHLEdBQUc7O0VBRXpCO0VBQ0ExQyxHQUFHLENBQUNPLFNBQVMsR0FBRyx5QkFBeUI7RUFDekNQLEdBQUcsQ0FBQ1EsUUFBUSxDQUFDLEVBQUUsRUFBRWlDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUN0Q3pDLEdBQUcsQ0FBQ08sU0FBUyxHQUFHN0ksVUFBVSxHQUFHLFNBQVMsR0FBRyxNQUFNO0VBQy9Dc0ksR0FBRyxDQUFDdUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUVrQixPQUFPLENBQUM7O0VBRW5DO0VBQ0F6QyxHQUFHLENBQUNPLFNBQVMsR0FBRyx5QkFBeUI7RUFDekNQLEdBQUcsQ0FBQ1EsUUFBUSxDQUFDLEVBQUUsR0FBR2tDLGFBQWEsRUFBRUQsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQ3REekMsR0FBRyxDQUFDTyxTQUFTLEdBQUc3SSxVQUFVLEdBQUcsU0FBUyxHQUFHLE1BQU07RUFDL0NzSSxHQUFHLENBQUN1QixRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsR0FBR21CLGFBQWEsRUFBRUQsT0FBTyxDQUFDOztFQUV6RDtFQUNBekMsR0FBRyxDQUFDTyxTQUFTLEdBQUcseUJBQXlCO0VBQ3pDUCxHQUFHLENBQUNRLFFBQVEsQ0FBQyxFQUFFLEdBQUdrQyxhQUFhLEdBQUcsQ0FBQyxFQUFFRCxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDMUR6QyxHQUFHLENBQUNPLFNBQVMsR0FBRzdJLFVBQVUsR0FBRyxTQUFTLEdBQUcsTUFBTTtFQUMvQ3NJLEdBQUcsQ0FBQ3VCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEdBQUdtQixhQUFhLEdBQUcsQ0FBQyxFQUFFRCxPQUFPLENBQUM7O0VBRS9EO0VBQ0EsSUFBTXROLHFCQUFxQixHQUFHTSxvRUFBd0IsQ0FBQyxDQUFDO0VBQ3hELElBQU1MLGFBQWEsR0FBR1EsNERBQWdCLENBQUMsQ0FBQztFQUN4QyxJQUFJVCxxQkFBcUIsRUFBRTtJQUN6QjtJQUNBLElBQU0yTCxPQUFNLEdBQUczSyxJQUFJLENBQUNDLElBQUksQ0FBQ2pCLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBTTRMLGFBQVksR0FBRzVLLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQU00SSxFQUFDLEdBQUk4QixPQUFNLEdBQUdDLGFBQVksR0FBSWhCLE1BQU0sQ0FBQ00sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDOztJQUUxREwsR0FBRyxDQUFDa0IsU0FBUyxHQUFHLENBQUM7SUFDakJsQixHQUFHLENBQUNpQixXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDN0JqQixHQUFHLENBQUNtQixTQUFTLENBQUMsQ0FBQztJQUNmbkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDcEMsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUNoQmdCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQ3JDLEVBQUMsRUFBRWUsTUFBTSxDQUFDTyxNQUFNLENBQUM7SUFDNUJOLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxDQUFDOztJQUVaO0lBQ0F0QixHQUFHLENBQUNPLFNBQVMsR0FBRyxTQUFTO0lBQ3pCUCxHQUFHLENBQUNXLElBQUksR0FBRyxZQUFZO0lBQ3ZCWCxHQUFHLENBQUN1QixRQUFRLElBQUF6TSxNQUFBLENBQUlLLHFCQUFxQixVQUFPNkosRUFBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBRXREO0lBQ0EsSUFBSTVKLGFBQWEsRUFBRTtNQUNqQjtNQUNBNEssR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUM7TUFDZm5CLEdBQUcsQ0FBQ2lCLFdBQVcsR0FBRyx5QkFBeUI7TUFDM0NqQixHQUFHLENBQUNPLFNBQVMsR0FBRyx5QkFBeUI7O01BRXpDO01BQ0E7TUFDQSxJQUFNb0MsTUFBTSxHQUFHeE0sSUFBSSxDQUFDMkksR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcxSixhQUFhLENBQUMsQ0FBQyxDQUFDOztNQUVsRDtNQUNBNEssR0FBRyxDQUFDbUIsU0FBUyxDQUFDLENBQUM7O01BRWY7TUFDQSxJQUFNMUMsTUFBTSxHQUFHLEVBQUU7TUFDakIsSUFBTW1FLE9BQU8sR0FBRzVELEVBQUM7TUFDakIsSUFBTXNCLE1BQU0sR0FBR1AsTUFBTSxDQUFDTyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7O01BRXBDO01BQ0EsS0FBSyxJQUFJcFYsR0FBQyxHQUFHLENBQUM2VSxNQUFNLENBQUNNLEtBQUssR0FBQyxDQUFDLEVBQUVuVixHQUFDLElBQUk2VSxNQUFNLENBQUNNLEtBQUssR0FBQyxDQUFDLEVBQUVuVixHQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3pELElBQU0yWCxNQUFNLEdBQUdELE9BQU8sR0FBRzFYLEdBQUM7UUFDMUIsSUFBSTJYLE1BQU0sSUFBSSxDQUFDLElBQUlBLE1BQU0sSUFBSTlDLE1BQU0sQ0FBQ00sS0FBSyxFQUFFO1VBQ3pDO1VBQ0EsSUFBTTFKLElBQUksR0FBRyxFQUFFLEdBQUdSLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQyxFQUFFLEVBQUd5TCxNQUFNLEdBQUc5QyxNQUFNLENBQUNNLEtBQUssR0FBSWxLLElBQUksQ0FBQzJNLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7VUFDaEYsSUFBTWxCLFVBQVMsR0FBR2pMLElBQUksR0FBR3hCLHFCQUFxQjs7VUFFOUM7VUFDQSxJQUFNNE4sUUFBUSxHQUFHLENBQUMsR0FBRzVNLElBQUksQ0FBQzZNLElBQUksQ0FBQyxDQUFDLEdBQUc3TSxJQUFJLENBQUNpQixHQUFHLENBQUNoQyxhQUFhLElBQUl3TSxVQUFTLEdBQUcsQ0FBQyxHQUFDQSxVQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUMxRixJQUFNcUIsTUFBTSxHQUFHbEQsTUFBTSxDQUFDTyxNQUFNLEdBQUdBLE1BQU0sR0FBR3lDLFFBQVE7VUFFaER0RSxNQUFNLENBQUN4UCxJQUFJLENBQUM7WUFBQytQLENBQUMsRUFBRTZELE1BQU07WUFBRWxXLENBQUMsRUFBRXNXO1VBQU0sQ0FBQyxDQUFDO1FBQ3JDO01BQ0Y7O01BRUE7TUFDQSxJQUFJeEUsTUFBTSxDQUFDblAsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNyQjBRLEdBQUcsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO1FBQ2ZuQixHQUFHLENBQUNvQixNQUFNLENBQUMzQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNPLENBQUMsRUFBRVAsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOVIsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssSUFBSXpCLEdBQUMsR0FBRyxDQUFDLEVBQUVBLEdBQUMsR0FBR3VULE1BQU0sQ0FBQ25QLE1BQU0sRUFBRXBFLEdBQUMsRUFBRSxFQUFFO1VBQ3RDOFUsR0FBRyxDQUFDcUIsTUFBTSxDQUFDNUMsTUFBTSxDQUFDdlQsR0FBQyxDQUFDLENBQUM4VCxDQUFDLEVBQUVQLE1BQU0sQ0FBQ3ZULEdBQUMsQ0FBQyxDQUFDeUIsQ0FBQyxDQUFDO1FBQ3RDO1FBQ0FxVCxHQUFHLENBQUNzQixNQUFNLENBQUMsQ0FBQzs7UUFFWjtRQUNBdEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDNUMsTUFBTSxDQUFDQSxNQUFNLENBQUNuUCxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMwUCxDQUFDLEVBQUVlLE1BQU0sQ0FBQ08sTUFBTSxDQUFDO1FBQ3BETixHQUFHLENBQUNxQixNQUFNLENBQUM1QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNPLENBQUMsRUFBRWUsTUFBTSxDQUFDTyxNQUFNLENBQUM7UUFDdENOLEdBQUcsQ0FBQ3VDLFNBQVMsQ0FBQyxDQUFDO1FBQ2Z2QyxHQUFHLENBQUN3QyxJQUFJLENBQUMsQ0FBQzs7UUFFVjtRQUNBeEMsR0FBRyxDQUFDTyxTQUFTLEdBQUcsU0FBUztRQUN6QlAsR0FBRyxDQUFDdUIsUUFBUSxPQUFBek0sTUFBQSxDQUFPTSxhQUFhLENBQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBSStKLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQzNEO0lBQ0Y7RUFDRjtBQUNGOzs7Ozs7VUN2VkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx1QkFBdUIsNEJBQTRCO1dBQ25EO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixvQkFBb0I7V0FDckM7V0FDQSxtR0FBbUcsWUFBWTtXQUMvRztXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1FQUFtRSxpQ0FBaUM7V0FDcEc7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekNBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NwRkEscUpBQUF6VSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLG1CQUFBakcsQ0FBQSxFQUFBSixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxjQUFBSixDQUFBLEdBQUFMLENBQUEsQ0FBQU8sQ0FBQSxFQUFBRSxDQUFBLEdBQUFFLENBQUEsR0FBQU4sQ0FBQSxDQUFBRCxLQUFBLFdBQUFKLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSyxDQUFBLENBQUE2QyxJQUFBLEdBQUF0RCxDQUFBLENBQUFlLENBQUEsSUFBQXdFLE9BQUEsQ0FBQXRDLE9BQUEsQ0FBQWxDLENBQUEsRUFBQW9DLElBQUEsQ0FBQWxELENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUFnRyxrQkFBQWxHLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBd0csU0FBQSxhQUFBaEIsT0FBQSxXQUFBdEYsQ0FBQSxFQUFBSyxDQUFBLFFBQUFLLENBQUEsR0FBQVAsQ0FBQSxDQUFBb0csS0FBQSxDQUFBeEcsQ0FBQSxFQUFBRCxDQUFBLFlBQUEwRyxNQUFBckcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsVUFBQXRHLENBQUEsY0FBQXNHLE9BQUF0RyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEcsQ0FBQSxLQUFBcUcsS0FBQTtBQURnRjtBQUMvQjtBQUNNO0FBQ0E7QUFDUjtBQUM4RDtBQUNyQztBQUNsQztBQUV0QyxJQUFJZ1MsYUFBYSxHQUFHLElBQUk7QUFDeEIsSUFBSUMsS0FBSyxHQUFHLElBQUk7QUFDaEIsSUFBSUMsYUFBYSxHQUFHLENBQUM7O0FBR3JCO0FBQ0EsU0FBU0Msa0JBQWtCQSxDQUFDQyxPQUFPLEVBQUU7RUFDakMsT0FBTyxJQUFJdFQsT0FBTyxDQUFDLFVBQUN0QyxPQUFPLEVBQUU2VixNQUFNLEVBQUs7SUFDcEN0UixNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDbVIsT0FBTyxFQUFFLFVBQUFQLFFBQVEsRUFBSTtNQUM1QyxJQUFJOVEsTUFBTSxDQUFDQyxPQUFPLENBQUNzUixTQUFTLEVBQUU7UUFDMUJELE1BQU0sQ0FBQ3RSLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDc1IsU0FBUyxDQUFDO01BQ3BDLENBQUMsTUFBTTtRQUNIOVYsT0FBTyxDQUFDcVYsUUFBUSxDQUFDO01BQ3JCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047O0FBRUE7QUFDQXRQLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsa0JBQWtCLGVBQUE3QyxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBNkUsU0FBQTtFQUFBLElBQUFpUCxZQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxFQUFBWixRQUFBLEVBQUE1SCxhQUFBO0VBQUEsT0FBQTVRLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEySSxVQUFBQyxTQUFBO0lBQUEsa0JBQUFBLFNBQUEsQ0FBQXRFLElBQUEsR0FBQXNFLFNBQUEsQ0FBQWpHLElBQUE7TUFBQTtRQUN0Q2dWLFlBQVksR0FBR2hRLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUNqRGdRLFVBQVUsR0FBR2pRLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUM5Q2lRLFdBQVcsR0FBR2xRLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUNwRGdRLFVBQVUsQ0FBQzNPLFdBQVcsR0FBRyxhQUFhOztRQUV0QztRQUNBMEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7UUFDdkNrSSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BCO1FBQ0FuSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5QzhCLDhEQUFZLENBQUMsQ0FBQztRQUNkL0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVySyx5REFBVyxDQUFDOztRQUUzQztRQUFBcUQsU0FBQSxDQUFBdEUsSUFBQTtRQUFBc0UsU0FBQSxDQUFBakcsSUFBQTtRQUFBLE9BRXlCNFUsa0JBQWtCLENBQUM7VUFDeENqWCxJQUFJLEVBQUUsd0JBQXdCO1VBQzlCZ0csTUFBTSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQUE7UUFISTJRLFFBQVEsR0FBQXJPLFNBQUEsQ0FBQXZHLElBQUE7UUFBQSxNQUtWNFUsUUFBUSxJQUFJQSxRQUFRLENBQUNjLFdBQVc7VUFBQW5QLFNBQUEsQ0FBQWpHLElBQUE7VUFBQTtRQUFBO1FBQUFpRyxTQUFBLENBQUFqRyxJQUFBO1FBQUEsT0FDNUI0UCw4REFBWSxDQUFDLENBQUM7TUFBQTtRQUFBM0osU0FBQSxDQUFBakcsSUFBQTtRQUFBO01BQUE7UUFBQWlHLFNBQUEsQ0FBQXRFLElBQUE7UUFBQXNFLFNBQUEsQ0FBQTZFLEVBQUEsR0FBQTdFLFNBQUE7UUFHdEIrRyxPQUFPLENBQUNFLEtBQUssQ0FBQyw4Q0FBOEMsRUFBQWpILFNBQUEsQ0FBQTZFLEVBQU8sQ0FBQztNQUFDO1FBR3ZFWSxvRUFBYSxDQUFDLENBQUM7UUFFZmxJLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7VUFBRS9GLElBQUksRUFBRSxrQkFBa0I7VUFBRWdHLE1BQU0sRUFBRTtRQUFhLENBQUMsQ0FBQztRQUU5RSxJQUFJZix5REFBVyxDQUFDdUIsY0FBYyxFQUFFO1VBQzlCNlEsWUFBWSxDQUFDMU8sV0FBVyxHQUFHLGdCQUFnQjtVQUMzQytPLGlCQUFpQixDQUFDLENBQUM7UUFDckIsQ0FBQyxNQUFNO1VBQ0xMLFlBQVksQ0FBQzFPLFdBQVcsR0FBRyxnQkFBZ0I7UUFDN0M7UUFFQTlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDNlIsU0FBUyxDQUFDQyxXQUFXO1VBQUEsSUFBQUMsS0FBQSxHQUFBbFQsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQUMsU0FBQWdDLFFBQU8yUixPQUFPLEVBQUVZLE1BQU0sRUFBRUMsWUFBWTtZQUFBLE9BQUE1WixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBZ0csU0FBQUMsUUFBQTtjQUFBLGtCQUFBQSxRQUFBLENBQUEzQixJQUFBLEdBQUEyQixRQUFBLENBQUF0RCxJQUFBO2dCQUFBO2tCQUFBLE1BRW5FNlUsT0FBTyxDQUFDbFgsSUFBSSxLQUFLLGlCQUFpQjtvQkFBQTJGLFFBQUEsQ0FBQXRELElBQUE7b0JBQUE7a0JBQUE7a0JBQUEsSUFDL0J5VSxhQUFhO29CQUFBblIsUUFBQSxDQUFBdEQsSUFBQTtvQkFBQTtrQkFBQTtrQkFBQXNELFFBQUEsQ0FBQXRELElBQUE7a0JBQUEsT0FDVnFWLGlCQUFpQixDQUFDLENBQUM7Z0JBQUE7Z0JBQUE7a0JBQUEsT0FBQS9SLFFBQUEsQ0FBQXhCLElBQUE7Y0FBQTtZQUFBLEdBQUFvQixPQUFBO1VBQUEsQ0FHOUI7VUFBQSxpQkFBQUYsRUFBQSxFQUFBMlMsR0FBQSxFQUFBQyxHQUFBO1lBQUEsT0FBQUosS0FBQSxDQUFBaFQsS0FBQSxPQUFBRCxTQUFBO1VBQUE7UUFBQSxJQUFDO1FBRUYyUyxXQUFXLENBQUMvUCxnQkFBZ0IsQ0FBQyxPQUFPLGVBQUE3QyxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBOEMsU0FBQTtVQUFBLE9BQUFsSSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBNEcsVUFBQUMsU0FBQTtZQUFBLGtCQUFBQSxTQUFBLENBQUF2QyxJQUFBLEdBQUF1QyxTQUFBLENBQUFsRSxJQUFBO2NBQUE7Z0JBQ3BDZ04sT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7Z0JBQ25DZ0ksVUFBVSxDQUFDM08sV0FBVyxHQUFHLGNBQWM7Z0JBQUNwQyxTQUFBLENBQUE0RyxFQUFBLEdBQ3hDdEgsTUFBTSxDQUFDQyxPQUFPO2dCQUFBUyxTQUFBLENBQUFsRSxJQUFBO2dCQUFBLE9BQTRDdUQsY0FBYyxDQUFDLENBQUM7Y0FBQTtnQkFBQVcsU0FBQSxDQUFBNkcsRUFBQSxHQUFBN0csU0FBQSxDQUFBeEUsSUFBQTtnQkFBQXdFLFNBQUEsQ0FBQThHLEVBQUE7a0JBQTdDck4sSUFBSSxFQUFFLE9BQU87a0JBQUd5RixLQUFLLEVBQUFjLFNBQUEsQ0FBQTZHO2dCQUFBO2dCQUFBN0csU0FBQSxDQUFBNEcsRUFBQSxDQUFuQ3BILFdBQVcsQ0FBQTdGLElBQUEsQ0FBQXFHLFNBQUEsQ0FBQTRHLEVBQUEsRUFBQTVHLFNBQUEsQ0FBQThHLEVBQUE7Y0FBQTtjQUFBO2dCQUFBLE9BQUE5RyxTQUFBLENBQUFwQyxJQUFBO1lBQUE7VUFBQSxHQUFBa0MsUUFBQTtRQUFBLENBQzNCLEdBQUM7UUFFRmdSLFlBQVksQ0FBQzdQLGdCQUFnQixDQUFDLE9BQU8sZUFBQTdDLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUFvRSxTQUFBO1VBQUEsSUFBQWxDLEtBQUEsRUFBQXlTLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLEdBQUEsRUFBQUMsUUFBQSxFQUFBQyxTQUFBO1VBQUEsT0FBQW5hLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFrSSxVQUFBQyxTQUFBO1lBQUEsa0JBQUFBLFNBQUEsQ0FBQTdELElBQUEsR0FBQTZELFNBQUEsQ0FBQXhGLElBQUE7Y0FBQTtnQkFBQXdGLFNBQUEsQ0FBQXhGLElBQUE7Z0JBQUEsT0FDakJ1RCxjQUFjLENBQUMsQ0FBQztjQUFBO2dCQUE5QkgsS0FBSyxHQUFBb0MsU0FBQSxDQUFBOUYsSUFBQTtnQkFBQSxJQUVOa0QseURBQVcsQ0FBQ3VCLGNBQWM7a0JBQUFxQixTQUFBLENBQUF4RixJQUFBO2tCQUFBO2dCQUFBO2dCQUFBd0YsU0FBQSxDQUFBeEYsSUFBQTtnQkFBQSxPQUNUd0QsTUFBTSxDQUFDMFMsSUFBSSxDQUFDQyxLQUFLLENBQUM7a0JBQUVDLE1BQU0sRUFBRSxJQUFJO2tCQUFFQyxhQUFhLEVBQUU7Z0JBQUssQ0FBQyxDQUFDO2NBQUE7Z0JBQUFSLHFCQUFBLEdBQUFyUSxTQUFBLENBQUE5RixJQUFBO2dCQUFBb1csc0JBQUEsR0FBQVEsY0FBQSxDQUFBVCxxQkFBQTtnQkFBckVFLEdBQUcsR0FBQUQsc0JBQUE7Z0JBRVY5SSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFBQSxJQUN4QjhJLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDQyxVQUFVLENBQUMsTUFBTSxDQUFDO2tCQUFBaFIsU0FBQSxDQUFBeEYsSUFBQTtrQkFBQTtnQkFBQTtnQkFDN0JnTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BCd0osS0FBSyxDQUFDLDJFQUEyRSxDQUFDO2dCQUFDLE9BQUFqUixTQUFBLENBQUEzRixNQUFBO2NBQUE7Z0JBQUEyRixTQUFBLENBQUF4RixJQUFBO2dCQUFBLE9BRzlEd0QsTUFBTSxDQUFDa1QsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQztrQkFBRUMsV0FBVyxFQUFFeFQ7Z0JBQU0sQ0FBQyxDQUFDO2NBQUE7Z0JBQTNFNFMsUUFBUSxHQUFBeFEsU0FBQSxDQUFBOUYsSUFBQTtnQkFDUnVXLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUlyUCx1REFBZSxFQUFFO2tCQUNuQkMsK0NBQU8sQ0FBQ2pJLE9BQU8sQ0FBQyxVQUFDNkwsTUFBTSxFQUFLO29CQUMxQndMLFNBQVMsQ0FBQ3hMLE1BQU0sQ0FBQyxHQUFHdkYsVUFBVSxDQUFDRixRQUFRLENBQUNDLGNBQWMsQ0FBQ3dGLE1BQU0sQ0FBQyxDQUFDak8sS0FBSyxDQUFDO2tCQUN2RSxDQUFDLENBQUM7Z0JBQ0o7Z0JBQUNnSixTQUFBLENBQUF4RixJQUFBO2dCQUFBLE9BQ0t3RCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFBbVQsYUFBQTtrQkFDOUJsWixJQUFJLEVBQUUsa0JBQWtCO2tCQUN4QmdHLE1BQU0sRUFBRSxXQUFXO2tCQUNuQlAsS0FBSyxFQUFMQSxLQUFLO2tCQUNMNFMsUUFBUSxFQUFSQSxRQUFRO2tCQUNScFMsS0FBSyxFQUFFakIsbURBQVEsQ0FBQ3VDLFVBQVUsQ0FBQ0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUN6SSxLQUFLLENBQUM7Z0JBQUMsR0FDbEV5WixTQUFTLENBQ2IsQ0FBQztjQUFBO2dCQUNGakIsWUFBWSxDQUFDMU8sV0FBVyxHQUFHLGdCQUFnQjtnQkFDM0NzSSwyREFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQztnQkFBQyxLQUM5QjZGLGFBQWE7a0JBQUFqUCxTQUFBLENBQUF4RixJQUFBO2tCQUFBO2dCQUFBO2dCQUNmeVUsYUFBYSxDQUFDcUMsV0FBVyxDQUFDO2tCQUFFblosSUFBSSxFQUFFLGNBQWM7a0JBQUV5RixLQUFLLEVBQUxBO2dCQUFNLENBQUMsQ0FBQztnQkFBQ29DLFNBQUEsQ0FBQXhGLElBQUE7Z0JBQUE7Y0FBQTtnQkFBQXdGLFNBQUEsQ0FBQXhGLElBQUE7Z0JBQUEsT0FFckRxVixpQkFBaUIsQ0FBQyxDQUFDO2NBQUE7Z0JBQ3pCckksT0FBTyxDQUFDQyxHQUFHLENBQUMsdURBQXVELENBQUM7Y0FBQztnQkFBQXpILFNBQUEsQ0FBQXhGLElBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxJQUdsRXlVLGFBQWE7a0JBQUFqUCxTQUFBLENBQUF4RixJQUFBO2tCQUFBO2dCQUFBO2dCQUNoQmdOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1DQUFtQyxDQUFDO2dCQUFDLE9BQUF6SCxTQUFBLENBQUEzRixNQUFBO2NBQUE7Z0JBR25Eb1YsVUFBVSxDQUFDM08sV0FBVyxHQUFHLHFCQUFxQixHQUFHcU8sYUFBYSxFQUFFO2dCQUFDblAsU0FBQSxDQUFBeEYsSUFBQTtnQkFBQSxPQUMzRHdELE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7a0JBQy9CL0YsSUFBSSxFQUFFLGlCQUFpQjtrQkFDdkJnRyxNQUFNLEVBQUUsV0FBVztrQkFDbkJQLEtBQUssRUFBTEE7Z0JBQ0YsQ0FBQyxDQUFDO2NBQUE7Z0JBQ0Y0UixZQUFZLENBQUMxTyxXQUFXLEdBQUcsZ0JBQWdCO2dCQUMzQ3lRLG9CQUFvQixDQUFDckMsS0FBSyxDQUFDO2dCQUMzQkEsS0FBSyxHQUFHLElBQUk7Z0JBQ1o5RiwyREFBUyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztjQUFDO2dCQUdyQy9KLCtEQUFhLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQVcsU0FBQSxDQUFBMUQsSUFBQTtZQUFBO1VBQUEsR0FBQXdELFFBQUE7UUFBQSxDQUNqQixHQUFDOztRQUVGO1FBQ0FOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ3BKLENBQUMsRUFBSztVQUNyRSxJQUFJQSxDQUFDLENBQUM0SCxNQUFNLENBQUN5QixPQUFPLEVBQUU7WUFDcEJKLFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ0MsU0FBUyxDQUFDa0UsR0FBRyxDQUFDLFdBQVcsQ0FBQztVQUMxQyxDQUFDLE1BQU07WUFDTHJJLFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ0MsU0FBUyxDQUFDcUIsTUFBTSxDQUFDLFdBQVcsQ0FBQztVQUM3Qzs7VUFFQTtVQUNBeUIsOEVBQXVCLENBQUMsQ0FBQztVQUV6QnBILCtEQUFhLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUM7O1FBRUY7UUFDTTZILGFBQWEsR0FBRzFILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxJQUFJeUgsYUFBYSxFQUFFO1VBQ2pCUywrREFBZ0IsQ0FBQ1QsYUFBYSxDQUFDbFEsS0FBSyxDQUFDO1FBQ3ZDOztRQUVBO1FBQ0F3SSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTztVQUFBLElBQUE2UixLQUFBLEdBQUExVSxpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBdUUsU0FBTzFKLENBQUM7WUFBQSxJQUFBcUgsS0FBQSxFQUFBNlQsWUFBQTtZQUFBLE9BQUFuYixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBcUksVUFBQUMsU0FBQTtjQUFBLGtCQUFBQSxTQUFBLENBQUFoRSxJQUFBLEdBQUFnRSxTQUFBLENBQUEzRixJQUFBO2dCQUFBO2tCQUFBMkYsU0FBQSxDQUFBM0YsSUFBQTtrQkFBQSxPQUMvQ3VELGNBQWMsQ0FBQyxDQUFDO2dCQUFBO2tCQUE5QkgsS0FBSyxHQUFBdUMsU0FBQSxDQUFBakcsSUFBQTtrQkFDTHVYLFlBQVksR0FBRy9SLFVBQVUsQ0FBQ25KLENBQUMsQ0FBQzRILE1BQU0sQ0FBQ25ILEtBQUssQ0FBQyxFQUUvQztrQkFDQTJRLCtEQUFnQixDQUFDOEosWUFBWSxDQUFDOztrQkFFOUI7a0JBQ0F6VCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO29CQUN6Qi9GLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCZ0csTUFBTSxFQUFFLFdBQVc7b0JBQ25CUCxLQUFLLEVBQUxBLEtBQUs7b0JBQ0xRLEtBQUssRUFBRWpCLG1EQUFRLENBQUNzVSxZQUFZLENBQUMsQ0FBRTtrQkFDakMsQ0FBQyxDQUFDOztrQkFFRjtrQkFDQXBTLCtEQUFhLENBQUMsQ0FBQztnQkFBQztnQkFBQTtrQkFBQSxPQUFBYyxTQUFBLENBQUE3RCxJQUFBO2NBQUE7WUFBQSxHQUFBMkQsUUFBQTtVQUFBLENBQ2pCO1VBQUEsaUJBQUF5UixHQUFBO1lBQUEsT0FBQUYsS0FBQSxDQUFBeFUsS0FBQSxPQUFBRCxTQUFBO1VBQUE7UUFBQSxJQUFDO1FBRUZzRSwrQ0FBTyxDQUFDakksT0FBTyxDQUFDLFVBQUNrSixFQUFFLEVBQUs7VUFBQSxJQUFBcVAscUJBQUE7VUFDdEIsQ0FBQUEscUJBQUEsR0FBQW5TLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDNkMsRUFBRSxDQUFDLGNBQUFxUCxxQkFBQSxlQUEzQkEscUJBQUEsQ0FBNkJoUyxnQkFBZ0IsQ0FBQyxPQUFPO1lBQUEsSUFBQWlTLEtBQUEsR0FBQTlVLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUEwRSxTQUFPN0osQ0FBQztjQUFBLElBQUFxSCxLQUFBO2NBQUEsT0FBQXRILG1CQUFBLEdBQUF1QixJQUFBLFVBQUF3SSxVQUFBQyxTQUFBO2dCQUFBLGtCQUFBQSxTQUFBLENBQUFuRSxJQUFBLEdBQUFtRSxTQUFBLENBQUE5RixJQUFBO2tCQUFBO29CQUFBOEYsU0FBQSxDQUFBOUYsSUFBQTtvQkFBQSxPQUN6Q3VELGNBQWMsQ0FBQyxDQUFDO2tCQUFBO29CQUE5QkgsS0FBSyxHQUFBMEMsU0FBQSxDQUFBcEcsSUFBQTtvQkFDWDhELE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7c0JBQ3pCL0YsSUFBSSxFQUFFLGdCQUFnQjtzQkFDdEJnRyxNQUFNLEVBQUUsV0FBVztzQkFDbkJQLEtBQUssRUFBTEEsS0FBSztzQkFDTGlVLEtBQUssRUFBRXZQLEVBQUU7c0JBQ1QzQixLQUFLLEVBQUVqQixVQUFVLENBQUNuSixDQUFDLENBQUM0SCxNQUFNLENBQUNuSCxLQUFLO29CQUNsQyxDQUFDLENBQUM7b0JBQ0ZxSSwrREFBYSxDQUFDLENBQUM7a0JBQUM7a0JBQUE7b0JBQUEsT0FBQWlCLFNBQUEsQ0FBQWhFLElBQUE7Z0JBQUE7Y0FBQSxHQUFBOEQsUUFBQTtZQUFBLENBQ2pCO1lBQUEsaUJBQUEwUixHQUFBO2NBQUEsT0FBQUYsS0FBQSxDQUFBNVUsS0FBQSxPQUFBRCxTQUFBO1lBQUE7VUFBQSxJQUFDO1FBQ0osQ0FBQyxDQUFDOztRQUVGO1FBQ0F1QyxvRUFBb0IsQ0FBQyxDQUFDO01BQUM7TUFBQTtRQUFBLE9BQUFtQixTQUFBLENBQUFuRSxJQUFBO0lBQUE7RUFBQSxHQUFBaUUsUUFBQTtBQUFBLENBQ3hCLEdBQUM7QUFFRndSLE1BQU0sQ0FBQ2hVLGNBQWMsZ0JBQUFqQixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRyxTQUFBc1csU0FBQTtFQUFBLElBQUFDLHNCQUFBLEVBQUFDLHNCQUFBLEVBQUEzQixHQUFBO0VBQUEsT0FBQWphLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFzYSxVQUFBQyxTQUFBO0lBQUEsa0JBQUFBLFNBQUEsQ0FBQWpXLElBQUEsR0FBQWlXLFNBQUEsQ0FBQTVYLElBQUE7TUFBQTtRQUFBNFgsU0FBQSxDQUFBNVgsSUFBQTtRQUFBLE9BQ0Z3RCxNQUFNLENBQUMwUyxJQUFJLENBQUNDLEtBQUssQ0FBQztVQUFFQyxNQUFNLEVBQUUsSUFBSTtVQUFFQyxhQUFhLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFBQTtRQUFBb0Isc0JBQUEsR0FBQUcsU0FBQSxDQUFBbFksSUFBQTtRQUFBZ1ksc0JBQUEsR0FBQXBCLGNBQUEsQ0FBQW1CLHNCQUFBO1FBQXJFMUIsR0FBRyxHQUFBMkIsc0JBQUE7UUFBQSxPQUFBRSxTQUFBLENBQUEvWCxNQUFBLFdBQ0hrVyxHQUFHLENBQUNqTyxFQUFFO01BQUE7TUFBQTtRQUFBLE9BQUE4UCxTQUFBLENBQUE5VixJQUFBO0lBQUE7RUFBQSxHQUFBMFYsUUFBQTtBQUFBLENBQ2Q7QUFFRGhVLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDNlIsU0FBUyxDQUFDQyxXQUFXLENBQUMsVUFBQ3NDLEdBQUcsRUFBSztFQUM1QyxJQUFJQSxHQUFHLENBQUNsYSxJQUFJLEtBQUssaUJBQWlCLElBQUlrYSxHQUFHLENBQUNqTSxJQUFJLEVBQUU7SUFDOUNvRiw4REFBYyxDQUFDNkcsR0FBRyxDQUFDak0sSUFBSSxDQUFDO0VBQzFCO0FBQ0YsQ0FBQyxDQUFDO0FBQUMsU0FJWWtNLGdCQUFnQkEsQ0FBQTtFQUFBLE9BQUFDLGlCQUFBLENBQUF2VixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUF3VixrQkFBQTtFQUFBQSxpQkFBQSxHQUFBelYsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQS9CLFNBQUE4VyxTQUFBO0lBQUEsSUFDaUJDLElBQUksRUFBQUMsS0FBQTtJQUFBLE9BQUFwYyxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBOGEsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF6VyxJQUFBLEdBQUF5VyxTQUFBLENBQUFwWSxJQUFBO1FBQUE7VUFBQWtZLEtBQUEsWUFBQUcsT0FBQTtZQUFBSCxLQUFBLEdBQUE1VixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FBbkIsU0FBQW9YLFNBQUE7Y0FBQSxJQUFBeFEsRUFBQTtjQUFBLE9BQUFoTSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBa2IsVUFBQUMsU0FBQTtnQkFBQSxrQkFBQUEsU0FBQSxDQUFBN1csSUFBQSxHQUFBNlcsU0FBQSxDQUFBeFksSUFBQTtrQkFBQTtvQkFBQSxLQUNNeVUsYUFBYTtzQkFBQStELFNBQUEsQ0FBQXhZLElBQUE7c0JBQUE7b0JBQUE7b0JBQUF3WSxTQUFBLENBQUExTixFQUFBLEdBQ2YySixhQUFhO29CQUFBK0QsU0FBQSxDQUFBeFksSUFBQTtvQkFBQSxPQUdFdUQsY0FBYyxDQUFDLENBQUM7a0JBQUE7b0JBQUFpVixTQUFBLENBQUF6TixFQUFBLEdBQUF5TixTQUFBLENBQUE5WSxJQUFBO29CQUFBOFksU0FBQSxDQUFBeE4sRUFBQTtzQkFGN0JyTixJQUFJLEVBQUUsYUFBYTtzQkFDbkJnRyxNQUFNLEVBQUUsV0FBVztzQkFDbkJQLEtBQUssRUFBQW9WLFNBQUEsQ0FBQXpOO29CQUFBO29CQUFBeU4sU0FBQSxDQUFBMU4sRUFBQSxDQUhPZ00sV0FBVyxDQUFBalosSUFBQSxDQUFBMmEsU0FBQSxDQUFBMU4sRUFBQSxFQUFBME4sU0FBQSxDQUFBeE4sRUFBQTtvQkFBQXdOLFNBQUEsQ0FBQXhZLElBQUE7b0JBQUE7a0JBQUE7b0JBTXpCZ04sT0FBTyxDQUFDeUwsTUFBTSxDQUFDLEtBQUssRUFBRSxpQ0FBaUMsQ0FBQztvQkFDeERoQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7b0JBQ3hDM0gsTUFBTSxDQUFDeEksV0FBVyxHQUFHLHlCQUF5QjtrQkFBQztvQkFFM0N3QixFQUFFLEdBQUc0USxxQkFBcUIsQ0FBQ1QsSUFBSSxDQUFDO29CQUN0Q3ZELEtBQUssR0FBRzVNLEVBQUU7a0JBQUM7a0JBQUE7b0JBQUEsT0FBQTBRLFNBQUEsQ0FBQTFXLElBQUE7Z0JBQUE7Y0FBQSxHQUFBd1csUUFBQTtZQUFBLENBQ1o7WUFBQSxPQUFBSixLQUFBLENBQUExVixLQUFBLE9BQUFELFNBQUE7VUFBQTtVQWRjMFYsSUFBSSxZQUFBVSxPQUFBO1lBQUEsT0FBQVQsS0FBQSxDQUFBMVYsS0FBQSxPQUFBRCxTQUFBO1VBQUE7VUFlbkIwVixJQUFJLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBRyxTQUFBLENBQUF0VyxJQUFBO01BQUE7SUFBQSxHQUFBa1csUUFBQTtFQUFBLENBQ1I7RUFBQSxPQUFBRCxpQkFBQSxDQUFBdlYsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUVjOFMsaUJBQWlCQSxDQUFBO0VBQUEsT0FBQXVELGtCQUFBLENBQUFwVyxLQUFBLE9BQUFELFNBQUE7QUFBQSxFQXlCaEM7QUFBQSxTQUFBcVcsbUJBQUE7RUFBQUEsa0JBQUEsR0FBQXRXLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQXpCQSxTQUFBMlgsVUFBQTtJQUFBLElBQUF6VixLQUFBO0lBQUEsT0FBQXRILG1CQUFBLEdBQUF1QixJQUFBLFVBQUF5YixXQUFBQyxVQUFBO01BQUEsa0JBQUFBLFVBQUEsQ0FBQXBYLElBQUEsR0FBQW9YLFVBQUEsQ0FBQS9ZLElBQUE7UUFBQTtVQUFBK1ksVUFBQSxDQUFBcFgsSUFBQTtVQUFBb1gsVUFBQSxDQUFBL1ksSUFBQTtVQUFBLE9BRXdCdUQsY0FBYyxDQUFDLENBQUM7UUFBQTtVQUE5QkgsS0FBSyxHQUFBMlYsVUFBQSxDQUFBclosSUFBQTtVQUNYK1UsYUFBYSxHQUFHalIsTUFBTSxDQUFDQyxPQUFPLENBQUN1VixPQUFPLENBQUM7WUFBRS9YLElBQUksRUFBRTtVQUFrQixDQUFDLENBQUM7VUFDbkU2TixNQUFNLENBQUN4SSxXQUFXLEdBQUcsd0JBQXdCO1VBQzdDbU8sYUFBYSxDQUFDcUMsV0FBVyxDQUFDO1lBQUVuWixJQUFJLEVBQUUsY0FBYztZQUFFeUYsS0FBSyxFQUFMQTtVQUFNLENBQUMsQ0FBQztVQUUxRHFSLGFBQWEsQ0FBQ3dFLFlBQVksQ0FBQzFELFdBQVcsQ0FBQyxZQUFNO1lBQzNDekcsTUFBTSxDQUFDeEksV0FBVyxHQUFHLDRCQUE0QjtVQUNuRCxDQUFDLENBQUM7VUFFRm1PLGFBQWEsQ0FBQ2EsU0FBUyxDQUFDQyxXQUFXLENBQUMsVUFBQ1YsT0FBTyxFQUFLO1lBQy9DLElBQUlBLE9BQU8sQ0FBQ2xYLElBQUksS0FBSyxpQkFBaUIsRUFBRTtjQUN0Q3FULDhEQUFjLENBQUM2RCxPQUFPLENBQUNqSixJQUFJLENBQUM7WUFDOUIsQ0FBQyxNQUNJLElBQUlpSixPQUFPLENBQUNsWCxJQUFJLEtBQUssY0FBYyxFQUFFO2NBQ3hDbWEsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQjtVQUNGLENBQUMsQ0FBQztVQUFDaUIsVUFBQSxDQUFBL1ksSUFBQTtVQUFBO1FBQUE7VUFBQStZLFVBQUEsQ0FBQXBYLElBQUE7VUFBQW9YLFVBQUEsQ0FBQWpPLEVBQUEsR0FBQWlPLFVBQUE7VUFFSGpLLE1BQU0sQ0FBQ3hJLFdBQVcsR0FBRyxnQ0FBZ0M7VUFDckQwRyxPQUFPLENBQUNFLEtBQUssQ0FBQyx5Q0FBeUMsRUFBQTZMLFVBQUEsQ0FBQWpPLEVBQU8sQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBaU8sVUFBQSxDQUFBalgsSUFBQTtNQUFBO0lBQUEsR0FBQStXLFNBQUE7RUFBQSxDQUVuRTtFQUFBLE9BQUFELGtCQUFBLENBQUFwVyxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUdELFNBQVM0UyxrQkFBa0JBLENBQUEsRUFBRztFQUM1QixJQUFNK0QsZ0JBQWdCLEdBQUdsVSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNsRSxJQUFNa1UsZUFBZSxHQUFHblUsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQ2hFLElBQU1tVSxpQkFBaUIsR0FBR3BVLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQ3BFLElBQU1vVSxlQUFlLEdBQUdyVSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDOUQsSUFBTXFLLFlBQVksR0FBR3RLLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQzs7RUFFN0Q7RUFDQW9LLG9FQUFrQixDQUFDLENBQUM7O0VBRXBCO0VBQ0E2SixnQkFBZ0IsQ0FBQy9ULGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQy9DLElBQU11SyxZQUFZLEdBQUcySixlQUFlLENBQUM3YyxLQUFLLENBQUM4YyxJQUFJLENBQUMsQ0FBQztJQUNqRCxJQUFJNUosWUFBWSxLQUFLLEVBQUUsRUFBRTtNQUN2QitHLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQztNQUNwRDtJQUNGOztJQUVBO0lBQ0EsSUFBTThDLGFBQWEsR0FBRzdMLDBCQUEwQixDQUFDLENBQUM7O0lBRWxEO0lBQ0FsSyxNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBQzZELE1BQU0sRUFBSztNQUNoRCxJQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQztNQUNwQ0EsT0FBTyxDQUFDQyxZQUFZLENBQUMsR0FBRzZKLGFBQWE7TUFFckMvVixNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDO1FBQUVpRSxPQUFPLEVBQVBBO01BQVEsQ0FBQyxFQUFFLFlBQU07UUFDMUNnSCxLQUFLLGFBQUFwUSxNQUFBLENBQVlxSixZQUFZLDhCQUEwQixDQUFDO1FBQ3hEMkosZUFBZSxDQUFDN2MsS0FBSyxHQUFHLEVBQUU7UUFDMUI2UyxvRUFBa0IsQ0FBQyxDQUFDO01BQ3RCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBOEosZUFBZSxDQUFDaFUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDOUMsSUFBTXVLLFlBQVksR0FBR0osWUFBWSxDQUFDOVMsS0FBSztJQUN2QyxJQUFJa1QsWUFBWSxLQUFLLEVBQUUsRUFBRTtNQUN2QitHLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQztNQUNwRDtJQUNGO0lBRUFqVCxNQUFNLENBQUM4SCxPQUFPLENBQUNDLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBQzZELE1BQU0sRUFBSztNQUNoRCxJQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQztNQUNwQyxJQUFNOEosYUFBYSxHQUFHOUosT0FBTyxDQUFDQyxZQUFZLENBQUM7TUFFM0MsSUFBSTZKLGFBQWEsRUFBRTtRQUNqQi9NLG1FQUFvQixDQUFDK00sYUFBYSxDQUFDO1FBQ25Ddk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVzTSxhQUFhLENBQUM7UUFDN0M5QyxLQUFLLGFBQUFwUSxNQUFBLENBQVlxSixZQUFZLDZCQUF5QixDQUFDO01BQ3pELENBQUMsTUFBTTtRQUNMK0csS0FBSyx5Q0FBQXBRLE1BQUEsQ0FBcUNxSixZQUFZLE9BQUcsQ0FBQztNQUM1RDtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBMEosaUJBQWlCLENBQUNqVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNoRCxJQUFNdUssWUFBWSxHQUFHSixZQUFZLENBQUM5UyxLQUFLO0lBQ3ZDLElBQUlrVCxZQUFZLEtBQUssRUFBRSxFQUFFO01BQ3ZCK0csS0FBSyxDQUFDLCtDQUErQyxDQUFDO01BQ3REO0lBQ0Y7SUFFQSxJQUFJK0MsT0FBTywyREFBQW5ULE1BQUEsQ0FBb0RxSixZQUFZLFFBQUksQ0FBQyxFQUFFO01BQ2hGbE0sTUFBTSxDQUFDOEgsT0FBTyxDQUFDQyxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQUM2RCxNQUFNLEVBQUs7UUFDaEQsSUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSUEsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRTtVQUN6QixPQUFPRCxPQUFPLENBQUNDLFlBQVksQ0FBQztVQUU1QmxNLE1BQU0sQ0FBQzhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUM7WUFBRWlFLE9BQU8sRUFBUEE7VUFBUSxDQUFDLEVBQUUsWUFBTTtZQUMxQ2dILEtBQUssYUFBQXBRLE1BQUEsQ0FBWXFKLFlBQVksK0JBQTJCLENBQUM7WUFDekRMLG9FQUFrQixDQUFDLENBQUM7VUFDdEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0xvSCxLQUFLLHlDQUFBcFEsTUFBQSxDQUFxQ3FKLFlBQVksT0FBRyxDQUFDO1FBQzVEO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tbXVuaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tcHJlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvZmlsdGVyc19pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL3N0YXRlX21lbW9yeS50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy92aXN1YWxpemVyLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGJUb0dhaW4gfSBmcm9tIFwiLi91dGlscy50c1wiO1xuaW1wb3J0IHsgQ29uZmlndXJhY2lvbkludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZS50c1wiO1xuaW1wb3J0IHsgbG9jYWxFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGNvbXByZXNvckFjdGl2bywgY29tcHJlc29yUGFyYW1zIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgZW52aWFyIGxhIGNvbmZpZ3VyYWNpw7NuIGFsIG9mZnNjcmVlblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbihjb25maWc6IENvbmZpZ3VyYWNpb25JbnRlcmZhY2UpIHtcbiAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICBcbiAgLy8gRW52aWFyIGNvbmZpZ3VyYWNpw7NuIGRlbCB2b2x1bWVuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiBcImFqdXN0YXItdm9sdW1lblwiLFxuICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICB0YWJJZCxcbiAgICBsZXZlbDogZGJUb0dhaW4oY29uZmlnLnZvbHVtZW4pXG4gIH0pO1xuICBcbiAgLy8gRW52aWFyIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3JcbiAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGVudmlhciBsYSBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yIGFsIHNjcmlwdCBvZmZzY3JlZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCkge1xuICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJhanVzdGFyLWNvbXByZXNvclwiLFxuICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgdGFiSWQsXG4gICAgICBhY3Rpdm86IGNvbXByZXNvckFjdGl2byxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0aHJlc2hvbGQ6IGNvbXByZXNvclBhcmFtcy50aHJlc2hvbGQsXG4gICAgICAgIHJhdGlvOiBjb21wcmVzb3JQYXJhbXMucmF0aW8sXG4gICAgICAgIGtuZWU6IGNvbXByZXNvclBhcmFtcy5rbmVlLFxuICAgICAgICBhdHRhY2s6IGNvbXByZXNvclBhcmFtcy5hdHRhY2ssXG4gICAgICAgIHJlbGVhc2U6IGNvbXByZXNvclBhcmFtcy5yZWxlYXNlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBzZXRDb21wcmVzb3JBY3Rpdm8sIGdldENvbXByZXNvckFjdGl2bywgc2V0Q29tcHJlc29yUGFyYW0sIGdldENvbXByZXNvclBhcmFtLCBjb21wcmVzb3JBY3Rpdm8sIGNvbXByZXNvclBhcmFtcyB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW1wb3J0IHsgZ3VhcmRhckVzdGFkbywgbG9jYWxFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IgfSBmcm9tIFwiLi9jb21tdW5pY2F0aW9ucy50c1wiO1xuXG5cbmV4cG9ydCB0eXBlIENvbXByZXNvciA9IHtcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIGtuZWU6IG51bWJlcjtcbiAgICBhdHRhY2s6IG51bWJlcjtcbiAgICByZWxlYXNlOiBudW1iZXI7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgaW5pY2lhbGl6YXIgbG9zIGNvbnRyb2xlcyBkZWwgY29tcHJlc29yXG5leHBvcnQgZnVuY3Rpb24gaW5pY2lhbGl6YXJDb21wcmVzb3IoKSB7XG4gIGNvbnN0IGNvbXByZXNvckFjdGl2b0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXByZXNvci1hY3Rpdm8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIWNvbXByZXNvckFjdGl2b0NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgY29tcHJlc29yIGFjdGl2b1wiKTtcbiAgY29uc3QgdGhyZXNob2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVzaG9sZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghdGhyZXNob2xkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHRocmVzaG9sZFwiKTtcbiAgY29uc3QgcmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXJhdGlvKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJhdGlvXCIpO1xuICBjb25zdCBrbmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIWtuZWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUga25lZVwiKTtcbiAgY29uc3QgYXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghYXR0YWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGF0dGFja1wiKTtcbiAgY29uc3QgcmVsZWFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxlYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFyZWxlYXNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJlbGVhc2VcIik7XG4gIFxuICAvLyBBY3R1YWxpemFyIHZhbG9yZXMgbW9zdHJhZG9zXG4gIHNldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRocmVzaG9sZC52YWx1ZSkpO1xuICBzZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nLCBwYXJzZUZsb2F0KHJhdGlvLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdrbmVlJywgcGFyc2VGbG9hdChrbmVlLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdhdHRhY2snLCBwYXJzZUZsb2F0KGF0dGFjay52YWx1ZSkpO1xuICBzZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScsIHBhcnNlRmxvYXQocmVsZWFzZS52YWx1ZSkpO1xuICBcbiAgLy8gRXZlbnQgbGlzdGVuZXJzIHBhcmEgY2FtYmlvcyBlbiBsb3MgY29udHJvbGVzXG4gIGNvbXByZXNvckFjdGl2b0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIHNldENvbXByZXNvckFjdGl2byh0aGlzLmNoZWNrZWQpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAgdGhyZXNob2xkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgndGhyZXNob2xkJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICByYXRpby5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigncmF0aW8nLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIGtuZWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ2tuZWUnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgna25lZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAgYXR0YWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdhdHRhY2snLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgnYXR0YWNrJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICByZWxlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyZWxlYXNlJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgc2V0Q29tcHJlc29yUGFyYW0oJ3JlbGVhc2UnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBhY3R1YWxpemFyIGxvcyB2YWxvcmVzIG1vc3RyYWRvcyBkZWwgY29tcHJlc29yXG5leHBvcnQgZnVuY3Rpb24gYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKHRpcG86IGtleW9mIENvbXByZXNvciwgdmFsb3I6IG51bWJlcikge1xuICBjb25zdCB2YWxvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aXBvfS12YWx1ZWApIGFzIEhUTUxFbGVtZW50O1xuICBcbiAgc3dpdGNoKHRpcG8pIHtcbiAgICBjYXNlICd0aHJlc2hvbGQnOlxuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsb3J9IGRCYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JhdGlvJzpcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbG9yfToxYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2tuZWUnOlxuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsb3J9IGRCYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAvLyBDb252ZXJ0aXIgYSBtaWxpc2VndW5kb3MgcGFyYSBtZWpvciBsZWdpYmlsaWRhZFxuICAgICAgY29uc3QgYXR0YWNrTXMgPSAodmFsb3IgKiAxMDAwKS50b0ZpeGVkKDApO1xuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7YXR0YWNrTXN9IG1zYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlbGVhc2UnOlxuICAgICAgLy8gQ29udmVydGlyIGEgbWlsaXNlZ3VuZG9zIHBhcmEgbWVqb3IgbGVnaWJpbGlkYWRcbiAgICAgIGNvbnN0IHJlbGVhc2VNcyA9ICh2YWxvciAqIDEwMDApLnRvRml4ZWQoMCk7XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtyZWxlYXNlTXN9IG1zYDtcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wcmVzb3IsIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvciB9IGZyb20gXCIuL2NvbXByZXNzb3IudHNcIjtcbmV4cG9ydCBsZXQgYWN0aXZlRnJlcXVlbmN5TWFya2VyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlUU1hcmtlcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5leHBvcnQgbGV0IGNvbXByZXNvckFjdGl2bzogYm9vbGVhbiA9IGZhbHNlO1xuZXhwb3J0IGxldCBzdGF0aWNGaWx0ZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0gW1wic3ViXCIsIFwiYmFzc1wiLCBcImxvd01pZFwiLCBcIm1pZFwiLCBcImhpZ2hNaWRcIiwgXCJoaWdoXCIsIFwiYWlyXCJdO1xuZXhwb3J0IGxldCBjb21wcmVzb3JQYXJhbXM6IENvbXByZXNvciA9IHtcbiAgdGhyZXNob2xkOiAtMjQsXG4gIHJhdGlvOiA0LFxuICBrbmVlOiAzMCxcbiAgYXR0YWNrOiAwLjAwMyxcbiAgcmVsZWFzZTogMC4yNVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmcmVxdWVuY3k6IG51bWJlciB8IG51bGwpIHsgYWN0aXZlRnJlcXVlbmN5TWFya2VyID0gZnJlcXVlbmN5OyB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKCkgeyByZXR1cm4gYWN0aXZlRnJlcXVlbmN5TWFya2VyOyB9XG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlUU1hcmtlcihxOiBudW1iZXIgfCBudWxsKSB7IGFjdGl2ZVFNYXJrZXIgPSBxOyB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlUU1hcmtlcigpIHsgcmV0dXJuIGFjdGl2ZVFNYXJrZXI7IH0gICAgXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcHJlc29yQWN0aXZvKGFjdGl2bzogYm9vbGVhbikgeyBjb21wcmVzb3JBY3Rpdm8gPSBhY3Rpdm87IH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wcmVzb3JBY3Rpdm8oKSB7IHJldHVybiBjb21wcmVzb3JBY3Rpdm87IH1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wcmVzb3JQYXJhbShwYXJhbToga2V5b2YgQ29tcHJlc29yLCB2YWx1ZTogbnVtYmVyKSB7IFxuICAgIGNvbXByZXNvclBhcmFtc1twYXJhbV0gPSB2YWx1ZTsgXG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKHBhcmFtLCB2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcHJlc29yUGFyYW0ocGFyYW06IGtleW9mIENvbXByZXNvcikgeyByZXR1cm4gY29tcHJlc29yUGFyYW1zW3BhcmFtXTsgfVxuIiwiaW1wb3J0IHsgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyLCBzZXRBY3RpdmVRTWFya2VyIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5cbmNvbnN0IE1JTl9GUkVRID0gMjA7ICAgIC8vIDIwIEh6XG5jb25zdCBNQVhfRlJFUSA9IDIwMDAwOyAvLyAyMCBrSHpcbmNvbnN0IE9DVEFWRV9SQU5HRSA9IE1hdGgubG9nMihNQVhfRlJFUSAvIE1JTl9GUkVRKTsgLy8gQXByb3hpbWFkYW1lbnRlIDEwIG9jdGF2YXNcblxudHlwZSBGaWx0cm8gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmcmVxOiBudW1iZXI7XG4gICAgcTogbnVtYmVyO1xuICAgIGdhaW46IG51bWJlcjtcbiAgICBieXBhc3M6IGJvb2xlYW47XG59O1xuXG5sZXQgZmlsdHJvc0FjdGl2b3M6IEZpbHRyb1tdID0gW107XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBib3RvbkFncmVnYXJGaWx0cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFncmVnYXItZmlsdHJvXCIpO1xuICAgIGlmICghYm90b25BZ3JlZ2FyRmlsdHJvKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBib3TDs24gZGUgYWdyZWdhciBmaWx0cm9cIik7XG4gICAgfVxuICAgIGJvdG9uQWdyZWdhckZpbHRyby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIGNvbnN0IGZpbHRybyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGZyZXE6IDEwMDAsXG4gICAgICAgIHE6IDUsXG4gICAgICAgIGdhaW46IDAsXG4gICAgICAgIGJ5cGFzczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY3JlYXJGaWx0cm9DYXJkKGZpbHRybyk7XG4gICAgICAgIGZpbHRyb3NBY3Rpdm9zLnB1c2goZmlsdHJvKTtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgIH0pO1xufSk7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY29udmVydGlyIHZhbG9yIGRlbCBzbGlkZXIgKDAtMTAwKSBhIGZyZWN1ZW5jaWEgKDIwLTIwMDAwIEh6KSBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuZnVuY3Rpb24gc2xpZGVyVG9GcmVxKHNsaWRlclZhbHVlOiBudW1iZXIpIHtcbiAgICAvLyBDb252ZXJ0aXIgZWwgdmFsb3IgZGVsIHNsaWRlciAoMC0xMDApIGEgdW4gdmFsb3IgZW4gZXNjYWxhIGRlIG9jdGF2YXMgZW50cmUgMjBIeiB5IDIwa0h6XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTUlOX0ZSRVEgKiBNYXRoLnBvdygyLCAoc2xpZGVyVmFsdWUgLyAxMDApICogT0NUQVZFX1JBTkdFKSk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY29udmVydGlyIGZyZWN1ZW5jaWEgKDIwLTIwMDAwIEh6KSBhIHZhbG9yIGRlbCBzbGlkZXIgKDAtMTAwKSBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuZnVuY3Rpb24gZnJlcVRvU2xpZGVyKGZyZXE6IG51bWJlcikge1xuICAgIC8vIENvbnZlcnRpciBsYSBmcmVjdWVuY2lhIGEgdW4gdmFsb3IgZGUgc2xpZGVyICgwLTEwMCkgdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKE1hdGgubG9nMihmcmVxIC8gTUlOX0ZSRVEpIC8gT0NUQVZFX1JBTkdFKSAqIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWFyRmlsdHJvQ2FyZChmaWx0cm86IEZpbHRybykge1xuICAgIGNvbnN0IGNvbnRlbmVkb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmICghY29udGVuZWRvcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNvbnRlbmVkb3IgZGUgZmlsdHJvc1wiKSA7XG4gICAgY29udGVuZWRvci5jbGFzc05hbWUgPSBcImZpbHRyby1jYXJkXCI7XG4gICAgY29udGVuZWRvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGZpbHRyby5pZCk7XG5cbiAgICAvLyBWZXJpZmljYXIgc2kgZWwgbW9kbyBvc2N1cm8gZXN0w6EgYWN0aXZvXG4gICAgY29uc3QgaXNEYXJrTW9kZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKTtcbiAgICBjb25zdCBiZ0NvbG9yID0gaXNEYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZjVmNWZmXCI7XG4gICAgY29uc3QgdGV4dENvbG9yID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGlzRGFya01vZGUgPyBcIiM0YTJhMmFcIiA6IFwiI2ZmZGNkY1wiO1xuICAgIGNvbnN0IGJ1dHRvblRleHRDb2xvciA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIFxuICAgIC8vIEFjdHVhbGl6YXIgZWwgZXN0aWxvIGNvbiBsb3MgY29sb3JlcyBhcHJvcGlhZG9zXG4gICAgY29udGVuZWRvci5zdHlsZS5jc3NUZXh0ID0gYHBhZGRpbmc6IDdweDsgYmFja2dyb3VuZDogJHtiZ0NvbG9yfTsgYm9yZGVyLXJhZGl1czogMTBweDsgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgY29sb3I6ICR7dGV4dENvbG9yfTtgO1xuICAgIFxuICAgIGNvbnRlbmVkb3IuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzcHg7XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJieXBhc3MtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW46IDA7XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiYnlwYXNzLWNoZWNrYm94XCIgJHtmaWx0cm8uYnlwYXNzID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDVweDsgZm9udC1zaXplOiAwLjg1ZW07XCI+QnlwYXNzPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlbGltaW5hclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtidXR0b25CZ0NvbG9yfTsgY29sb3I6ICR7YnV0dG9uVGV4dENvbG9yfTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTRweDtcIj7DlzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7IGdyaWQtZ2FwOiAycHggOHB4OyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXNpemU6IDAuOWVtO1wiPlxuICAgICAgICAgICAgPGRpdj5GcmVxIChIeik8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgc3RlcD1cIjFcIiB2YWx1ZT1cIiR7ZnJlcVRvU2xpZGVyKGZpbHRyby5mcmVxKX1cIiBjbGFzcz1cImZyZXFcIiBzdHlsZT1cImZsZXg6IDE7IG1hcmdpbjogMCA1cHggMCAwO1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnJlcS12YWx1ZVwiIHN0eWxlPVwibWluLXdpZHRoOiA0MHB4OyB0ZXh0LWFsaWduOiByaWdodDtcIj4ke2ZpbHRyby5mcmVxfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwLjFcIiBtYXg9XCIxMFwiIHN0ZXA9XCIwLjFcIiB2YWx1ZT1cIiR7ZmlsdHJvLnF9XCIgY2xhc3M9XCJxXCIgc3R5bGU9XCJmbGV4OiAxOyBtYXJnaW46IDAgNXB4IDAgMDtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInEtdmFsdWVcIiBzdHlsZT1cIm1pbi13aWR0aDogNDBweDsgdGV4dC1hbGlnbjogcmlnaHQ7XCI+JHtmaWx0cm8ucX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5HYWluIChkQik8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCItMzBcIiBtYXg9XCIzMFwiIHN0ZXA9XCIxXCIgdmFsdWU9XCIke2ZpbHRyby5nYWlufVwiIGNsYXNzPVwiZ2FpblwiIHN0eWxlPVwiZmxleDogMTsgbWFyZ2luOiAwIDVweCAwIDA7XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnYWluLXZhbHVlXCIgc3R5bGU9XCJtaW4td2lkdGg6IDQwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1wiPiR7ZmlsdHJvLmdhaW59PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCBmcmVxU2xpZGVyID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmZyZXFcIik7XG4gICAgaWYgKCFmcmVxU2xpZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGZyZWN1ZW5jaWFcIik7XG4gICAgY29uc3QgZnJlcVZhbHVlID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmZyZXEtdmFsdWVcIik7XG4gICAgaWYgKCFmcmVxVmFsdWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCB2YWxvciBkZSBmcmVjdWVuY2lhXCIpO1xuICAgIGZyZXFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBmcmVjdWVuY2lhID0gc2xpZGVyVG9GcmVxKHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIGZyZXFWYWx1ZS50ZXh0Q29udGVudCA9IGZyZWN1ZW5jaWEudG9TdHJpbmcoKTtcbiAgICAgICAgZmlsdHJvLmZyZXEgPSBmcmVjdWVuY2lhO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmaWx0cm8uZnJlcSk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgZnJlcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmaWx0cm8uZnJlcSk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgZnJlcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihudWxsKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHFTbGlkZXIgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIucVwiKTtcbiAgICBpZiAoIXFTbGlkZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgUVwiKTtcbiAgICBjb25zdCBxVmFsdWUgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIucS12YWx1ZVwiKTtcbiAgICBpZiAoIXFWYWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIFFcIik7XG4gICAgcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHEgPSBwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIHFWYWx1ZS50ZXh0Q29udGVudCA9IHEudG9TdHJpbmcoKTtcbiAgICAgICAgZmlsdHJvLnEgPSBxO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmaWx0cm8uZnJlcSk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihudWxsKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdhaW5TbGlkZXIgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZ2FpblwiKTtcbiAgICBpZiAoIWdhaW5TbGlkZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgZ2FpblwiKTtcbiAgICBjb25zdCBnYWluVmFsdWUgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZ2Fpbi12YWx1ZVwiKTtcbiAgICBpZiAoIWdhaW5WYWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIGdhaW5cIik7XG4gICAgZ2FpblNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGdhaW4gPSBwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIGdhaW5WYWx1ZS50ZXh0Q29udGVudCA9IGdhaW4udG9TdHJpbmcoKTtcbiAgICAgICAgZmlsdHJvLmdhaW4gPSBnYWluO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZ3JlZ2FyIGV2ZW50byBwYXJhIGVsIGNoZWNrYm94IGRlIGJ5cGFzc1xuICAgIGNvbnN0IGJ5cGFzc0NoZWNrYm94ID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmJ5cGFzcy1jaGVja2JveFwiKTtcbiAgICBpZiAoIWJ5cGFzc0NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgYnlwYXNzXCIpO1xuICAgIGJ5cGFzc0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGZpbHRyby5ieXBhc3MgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZWxpbWluYXJCdG4gPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZWxpbWluYXJcIik7XG4gICAgaWYgKCFlbGltaW5hckJ0bikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGJvdMOzbiBkZSBlbGltaW5hclwiKTtcbiAgICBlbGltaW5hckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb250ZW5lZG9yLnJlbW92ZSgpO1xuICAgICAgICBmaWx0cm9zQWN0aXZvcyA9IGZpbHRyb3NBY3Rpdm9zLmZpbHRlcihmID0+IGYuaWQgIT09IGZpbHRyby5pZCk7XG4gICAgICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICAgICAgXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWxpbWluYXItZmlsdHJvLWRpbmFtaWNvXCIsXG4gICAgICAgICAgICBmaWx0cm9JZDogZmlsdHJvLmlkLFxuICAgICAgICAgICAgdGFiSWQ6IHRhYklkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKG51bGwpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKG51bGwpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdHJvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdHJvcy1jb250YWluZXJcIik7XG4gICAgaWYgKCFmaWx0cm9zQ29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY29udGVuZWRvciBkZSBmaWx0cm9zXCIpO1xuICAgIGZpbHRyb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVuZWRvcik7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm86IEZpbHRybykge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiYWN0dWFsaXphci1maWx0cm8tZGluYW1pY29cIixcbiAgICAgIGZpbHRyb0lkOiBmaWx0cm8uaWQsXG4gICAgICBmcmVxOiBmaWx0cm8uZnJlcSxcbiAgICAgIHE6IGZpbHRyby5xLFxuICAgICAgZ2FpbjogZmlsdHJvLmdhaW4sXG4gICAgICBieXBhc3M6IGZpbHRyby5ieXBhc3MsXG4gICAgICB0YWJJZDogYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKVxuICAgIH0pO1xuICB9XG5cbmZ1bmN0aW9uIGd1YXJkYXJGaWx0cm9zKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGZpbHRyb3NEaW5hbWljb3M6IGZpbHRyb3NBY3Rpdm9zIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FyZ2FyRmlsdHJvcygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJmaWx0cm9zRGluYW1pY29zXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZmlsdHJvc0RpbmFtaWNvcykpIHtcbiAgICAgICAgICAgIGZpbHRyb3NBY3Rpdm9zID0gZGF0YS5maWx0cm9zRGluYW1pY29zO1xuICAgICAgICAgICAgZmlsdHJvc0FjdGl2b3MuZm9yRWFjaChmaWx0cm8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzZWd1cmFyc2UgZGUgcXVlIGVsIGZpbHRybyB0ZW5nYSBsYSBwcm9waWVkYWQgYnlwYXNzXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRyby5ieXBhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0cm8uYnlwYXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNyZWFyRmlsdHJvQ2FyZChmaWx0cm8pO1xuICAgICAgICAgICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2YXJDYW1iaW9zVGVtYSgpO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGFjdHVhbGl6YXIgbG9zIGZpbHRyb3MgY3VhbmRvIGNhbWJpYSBlbCB0ZW1hXG5leHBvcnQgZnVuY3Rpb24gYWN0dWFsaXphckVzdGlsb0ZpbHRyb3MoKSB7XG4gICAgY29uc3QgaXNEYXJrTW9kZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKTtcbiAgICBjb25zdCBmaWx0cm9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuZmlsdHJvLWNhcmQnKTtcbiAgICBcbiAgICBmaWx0cm9DYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjb25zdCBiZ0NvbG9yID0gaXNEYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZjVmNWZmXCI7XG4gICAgICAgIGNvbnN0IHRleHRDb2xvciA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgICAgICBcbiAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kID0gYmdDb2xvcjtcbiAgICAgICAgY2FyZC5zdHlsZS5jb2xvciA9IHRleHRDb2xvcjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVsaW1pbmFyQnRuID0gY2FyZC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLmVsaW1pbmFyJyk7XG4gICAgICAgIGlmIChlbGltaW5hckJ0bikge1xuICAgICAgICAgICAgZWxpbWluYXJCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGlzRGFya01vZGUgPyBcIiM0YTJhMmFcIiA6IFwiI2ZmZGNkY1wiO1xuICAgICAgICAgICAgZWxpbWluYXJCdG4uc3R5bGUuY29sb3IgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBPYnNlcnZhciBjYW1iaW9zIGVuIGVsIHRlbWFcbmZ1bmN0aW9uIG9ic2VydmFyQ2FtYmlvc1RlbWEoKSB7XG4gICAgLy8gQcOxYWRpciBldmVudCBsaXN0ZW5lciBhbCBjaGVja2JveCBkZSBtb2RvIG9zY3Vyb1xuICAgIGNvbnN0IGRhcmtNb2RlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlJyk7XG4gICAgaWYgKGRhcmtNb2RlQ2hlY2tib3gpIHtcbiAgICAgICAgZGFya01vZGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhY3R1YWxpemFyRXN0aWxvRmlsdHJvcyk7XG4gICAgfVxufVxuXG4vLyB0byBkbzogXG4vLyAxLiBxdWUgY3VhbmRvIHNlIGRlc2FjdGl2ZSBlbCBhdWRpbywgbGFzIGJhcnJhcyBjYWlnYW4gY29uIGdyYWNpYVxuLy8gMi4gaGFjZXIgYW5kYXIgZWwgdm9sdW1lblxuLy8gMy4gdmVyIHBvcnF1ZSBubyBzZSBjYXJnYSBlbCBhdWRpbyB2b2x1bWVuIGN1YW5kbyBkZXNhY3Rpdm8geSByZWFjdGl2byBlbCBhdWRpbyhwZXJvIHNpIGVsIHNsaWRlcikiLCJpbXBvcnQgeyBndWFyZGFyRXN0YWRvIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCI7XG5pbXBvcnQgeyBjb21wcmVzb3JQYXJhbXMsIHNldENvbXByZXNvckFjdGl2byB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW1wb3J0IHsgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yIH0gZnJvbSBcIi4vY29tcHJlc3Nvci50c1wiO1xuaW1wb3J0IHsgbG9jYWxFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbiB9IGZyb20gXCIuL2NvbW11bmljYXRpb25zLnRzXCI7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgYXBsaWNhciB1bmEgY29uZmlndXJhY2nDs24gY2FyZ2FkYVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwbGljYXJDb25maWd1cmFjaW9uKGNvbmZpZzogQ29uZmlndXJhY2lvbkludGVyZmFjZSkge1xuICBjb25zb2xlLmxvZyhcIkFwbGljYW5kbyBjb25maWd1cmFjacOzbjpcIiwgY29uZmlnKTtcbiAgXG4gIC8vIEFwbGljYXIgdm9sdW1lblxuICBjb25zdCB2b2x1bWVuU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZW4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXZvbHVtZW5TbGlkZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHZvbHVtZW5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZvbHVtZW5TbGlkZXIudmFsdWUgPSBjb25maWcudm9sdW1lbi50b1N0cmluZygpO1xuICB1cGRhdGVWb2x1bWVUZXh0KGNvbmZpZy52b2x1bWVuKTtcbiAgXG4gIC8vIEFwbGljYXIgbW9kbyBvc2N1cm9cbiAgY29uc3QgZGFya01vZGVDaGVja2JveCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKGNvbmZpZy5kYXJrTW9kZSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgZGFya01vZGVDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgIGRhcmtNb2RlQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICB9XG4gIFxuICAvLyBBcGxpY2FyIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3JcbiAgY29uc3QgY29tcHJlc29yQWN0aXZvQ2hlY2tib3ggOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXByZXNvci1hY3Rpdm8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCB0aHJlc2hvbGRTbGlkZXIgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVzaG9sZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJhdGlvU2xpZGVyIDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGtuZWVTbGlkZXIgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBhdHRhY2tTbGlkZXIgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJlbGVhc2VTbGlkZXIgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbGVhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBcbiAgY29tcHJlc29yQWN0aXZvQ2hlY2tib3guY2hlY2tlZCA9IGNvbmZpZy5jb21wcmVzb3IuYWN0aXZvO1xuICBzZXRDb21wcmVzb3JBY3Rpdm8oY29uZmlnLmNvbXByZXNvci5hY3Rpdm8pO1xuICBcbiAgdGhyZXNob2xkU2xpZGVyLnZhbHVlID0gY29uZmlnLmNvbXByZXNvci50aHJlc2hvbGQudG9TdHJpbmcoKTtcbiAgY29tcHJlc29yUGFyYW1zLnRocmVzaG9sZCA9IGNvbmZpZy5jb21wcmVzb3IudGhyZXNob2xkO1xuICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3RocmVzaG9sZCcsIGNvbmZpZy5jb21wcmVzb3IudGhyZXNob2xkKTtcbiAgXG4gIHJhdGlvU2xpZGVyLnZhbHVlID0gY29uZmlnLmNvbXByZXNvci5yYXRpby50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMucmF0aW8gPSBjb25maWcuY29tcHJlc29yLnJhdGlvO1xuICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3JhdGlvJywgY29uZmlnLmNvbXByZXNvci5yYXRpbyk7XG4gIFxuICBrbmVlU2xpZGVyLnZhbHVlID0gY29uZmlnLmNvbXByZXNvci5rbmVlLnRvU3RyaW5nKCk7XG4gIGNvbXByZXNvclBhcmFtcy5rbmVlID0gY29uZmlnLmNvbXByZXNvci5rbmVlO1xuICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ2tuZWUnLCBjb25maWcuY29tcHJlc29yLmtuZWUpO1xuICBcbiAgYXR0YWNrU2xpZGVyLnZhbHVlID0gY29uZmlnLmNvbXByZXNvci5hdHRhY2sudG9TdHJpbmcoKTtcbiAgY29tcHJlc29yUGFyYW1zLmF0dGFjayA9IGNvbmZpZy5jb21wcmVzb3IuYXR0YWNrO1xuICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ2F0dGFjaycsIGNvbmZpZy5jb21wcmVzb3IuYXR0YWNrKTtcbiAgXG4gIHJlbGVhc2VTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLnJlbGVhc2UudG9TdHJpbmcoKTtcbiAgY29tcHJlc29yUGFyYW1zLnJlbGVhc2UgPSBjb25maWcuY29tcHJlc29yLnJlbGVhc2U7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigncmVsZWFzZScsIGNvbmZpZy5jb21wcmVzb3IucmVsZWFzZSk7XG4gIFxuICAvLyBMaW1waWFyIGZpbHRyb3MgZGluw6FtaWNvcyBhY3R1YWxlc1xuICBjb25zdCBmaWx0cm9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRyb3MtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gIGlmICghZmlsdHJvc0NvbnRhaW5lcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIE5vIHNlIGVuY29udHLDsyBlbCBjb250ZW5lZG9yIGRlIGZpbHRyb3MgZGluw6FtaWNvc1wiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZmlsdHJvc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgXG4gIC8vIEltcG9ydGFyIGxhIGZ1bmNpw7NuIG5lY2VzYXJpYSBwYXJhIGNyZWFyIGZpbHRyb3NcbiAgdHJ5IHtcbiAgICBpZiAoY29uZmlnLmZpbHRyb3NEaW5hbWljb3MgJiYgY29uZmlnLmZpbHRyb3NEaW5hbWljb3MubGVuZ3RoID4gMCkge1xuICAgICAgLy8gR3VhcmRhciBsb3MgZmlsdHJvcyBlbiBlbCBzdG9yYWdlIGxvY2FsIHBhcmEgcXVlIGNhcmdhckZpbHRyb3MgbG9zIGVuY3VlbnRyZVxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgZmlsdHJvc0RpbmFtaWNvczogY29uZmlnLmZpbHRyb3NEaW5hbWljb3MgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBJbXBvcnRhciBlbCBtw7NkdWxvIHkgbGxhbWFyIGEgY2FyZ2FyRmlsdHJvc1xuICAgICAgICBjb25zdCBmaWx0ZXJzTW9kdWxlID0gYXdhaXQgaW1wb3J0KCcuL2ZpbHRlcnNfaW50ZXJmYWNlLnRzJyk7XG4gICAgICAgIGZpbHRlcnNNb2R1bGUuY2FyZ2FyRmlsdHJvcygpO1xuICAgICAgICBcbiAgICAgICAgLy8gRW52aWFyIGNvbmZpZ3VyYWNpw7NuIGFsIG9mZnNjcmVlbiBzaSBlc3TDoSBjYXB0dXJhbmRvIGF1ZGlvXG4gICAgICAgIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgICAgICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbihjb25maWcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2kgbm8gaGF5IGZpbHRyb3MsIHNvbG8gZW52aWFyIGxhIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3IgeSB2b2x1bWVuXG4gICAgICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICAgICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBjYXJnYXIgbG9zIGZpbHRyb3M6XCIsIGVycm9yKTtcbiAgfVxuICBcbiAgLy8gR3VhcmRhciBlbCBlc3RhZG8gYWN0dWFsaXphZG9cbiAgZ3VhcmRhckVzdGFkbygpO1xufVxuXG4vLyBBY3R1YWxpemFyIGVsIHRleHRvIGRlbCB2YWxvciBkZSB2b2x1bWVuIGVuIGRCXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVm9sdW1lVGV4dChkYlZhbHVlOiBudW1iZXIpIHtcbiAgY29uc3Qgdm9sdW1lVmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuLXZhbHVlXCIpO1xuICBpZiAodm9sdW1lVmFsdWVFbGVtZW50KSB7XG4gICAgdm9sdW1lVmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGJWYWx1ZX0gZEJgO1xuICB9XG59XG5cbnR5cGUgRmlsdHJvRGluYW1pY28gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmcmVjdWVuY2lhOiBudW1iZXI7XG4gICAgcTogbnVtYmVyO1xuICAgIGdhbmFuY2lhOiBudW1iZXI7XG4gICAgYnlwYXNzOiBib29sZWFuO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIG9idGVuZXIgbGEgY29uZmlndXJhY2nDs24gYWN0dWFsXG5leHBvcnQgZnVuY3Rpb24gb2J0ZW5lckNvbmZpZ3VyYWNpb25BY3R1YWwoKTogQ29uZmlndXJhY2lvbkludGVyZmFjZSB7XG4gICAgbGV0IGNvbmZJbnRlcmZhY2U6IENvbmZpZ3VyYWNpb25JbnRlcmZhY2UgPSB7XG4gICAgICAgIHZvbHVtZW46IDAsXG4gICAgICAgIGZpbHRyb3NEaW5hbWljb3M6IFtdLFxuICAgICAgICBjb21wcmVzb3I6IHtcbiAgICAgICAgICAgIGFjdGl2bzogZmFsc2UsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICByYXRpbzogMSxcbiAgICAgICAgICAgIGtuZWU6IDAsXG4gICAgICAgICAgICBhdHRhY2s6IDAuMSxcbiAgICAgICAgICAgIHJlbGVhc2U6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBkYXJrTW9kZTogZmFsc2VcbiAgICB9O1xuXG4gIC8vIE9idGVuZXIgdmFsb3JlcyBkZSB2b2x1bWVuXG4gIGNvbnN0IHZvbHVtZW5TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghdm9sdW1lblNsaWRlcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIE5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdm9sdW1lblwiKTtcbiAgICByZXR1cm4gY29uZkludGVyZmFjZTtcbiAgfSBlbHNlIGNvbmZJbnRlcmZhY2Uudm9sdW1lbiA9IHBhcnNlRmxvYXQodm9sdW1lblNsaWRlci52YWx1ZSk7XG4gIFxuICAvLyBPYnRlbmVyIHZhbG9yZXMgZGUgZmlsdHJvcyBkaW7DoW1pY29zXG4gIGNvbnN0IGZpbHRyb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdHJvcy1jb250YWluZXInKTtcbiAgaWYgKCFmaWx0cm9zQ29udGFpbmVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIGNvbnRlbmVkb3IgZGUgZmlsdHJvcyBkaW7DoW1pY29zXCIpO1xuICAgIHJldHVybiBjb25mSW50ZXJmYWNlO1xuICB9XG4gIGNvbnN0IGZpbHRyb3NFbGVtZW50cyA9IGZpbHRyb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRyby1kaW5hbWljbycpO1xuICBcbiAgY29uc3QgZmlsdHJvc0RpbmFtaWNvczogRmlsdHJvRGluYW1pY29bXSA9IFtdO1xuICBmaWx0cm9zRWxlbWVudHMuZm9yRWFjaChmaWx0cm9FbGVtZW50ID0+IHtcbiAgICBpZiAoIShmaWx0cm9FbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIEVsZW1lbnRvIGRlIGZpbHRybyBubyBlcyB1biBIVE1MRWxlbWVudFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmcmVjdWVuY2lhSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZmlsdHJvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZnJlY3VlbmNpYScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgcUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGZpbHRyb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnEnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGdhbmFuY2lhSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZmlsdHJvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FuYW5jaWEnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGJ5cGFzc0lucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGZpbHRyb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ5cGFzcycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZmQgOiBGaWx0cm9EaW5hbWljbyA9IHtcbiAgICAgIGlkOiBmaWx0cm9FbGVtZW50LmRhdGFzZXQuaWQgfHwgJycsXG4gICAgICBmcmVjdWVuY2lhOiBwYXJzZUZsb2F0KGZyZWN1ZW5jaWFJbnB1dC52YWx1ZSksXG4gICAgICBxOiBwYXJzZUZsb2F0KHFJbnB1dC52YWx1ZSksXG4gICAgICBnYW5hbmNpYTogcGFyc2VGbG9hdChnYW5hbmNpYUlucHV0LnZhbHVlKSxcbiAgICAgIGJ5cGFzczogYnlwYXNzSW5wdXQuY2hlY2tlZFxuICAgIH07XG4gICAgZmlsdHJvc0RpbmFtaWNvcy5wdXNoKGZkKTtcbiAgfSk7XG4gIFxuICAvLyBPYnRlbmVyIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3JcbiAgY29uc3QgY29tcHJlc29yQ2hlY2tib3ggOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXByZXNvci1hY3Rpdm8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBjb21wcmVzb3JBY3Rpdm8gOiBib29sZWFuID0gY29tcHJlc29yQ2hlY2tib3guY2hlY2tlZDtcbiAgY29uc3QgdGhyZXNob2xkSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVzaG9sZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJhdGlvSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGlvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3Qga25lZUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrbmVlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgYXR0YWNrSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJlbGVhc2VJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIFxuICBjb25mSW50ZXJmYWNlID0ge1xuICAgIHZvbHVtZW46IHBhcnNlRmxvYXQodm9sdW1lblNsaWRlci52YWx1ZSksXG4gICAgZmlsdHJvc0RpbmFtaWNvcyxcbiAgICBjb21wcmVzb3I6IHtcbiAgICAgIGFjdGl2bzogY29tcHJlc29yQWN0aXZvLFxuICAgICAgdGhyZXNob2xkOiBwYXJzZUZsb2F0KHRocmVzaG9sZElucHV0LnZhbHVlKSxcbiAgICAgIHJhdGlvOiBwYXJzZUZsb2F0KHJhdGlvSW5wdXQudmFsdWUpLFxuICAgICAga25lZTogcGFyc2VGbG9hdChrbmVlSW5wdXQudmFsdWUpLFxuICAgICAgYXR0YWNrOiBwYXJzZUZsb2F0KGF0dGFja0lucHV0LnZhbHVlKSxcbiAgICAgIHJlbGVhc2U6IHBhcnNlRmxvYXQocmVsZWFzZUlucHV0LnZhbHVlKVxuICAgIH0sXG4gICAgZGFya01vZGU6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKVxuICB9O1xuXG4gIHJldHVybiBjb25mSW50ZXJmYWNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYWNpb25JbnRlcmZhY2Uge1xuICB2b2x1bWVuOiBudW1iZXI7XG4gIGZpbHRyb3NEaW5hbWljb3M6IEZpbHRyb0RpbmFtaWNvW107XG4gIGNvbXByZXNvcjoge1xuICAgIGFjdGl2bzogYm9vbGVhbjtcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIGtuZWU6IG51bWJlcjtcbiAgICBhdHRhY2s6IG51bWJlcjtcbiAgICByZWxlYXNlOiBudW1iZXI7XG4gIH07XG4gIGRhcmtNb2RlOiBib29sZWFuO1xufSIsImltcG9ydCB7IGdldENvbXByZXNvckFjdGl2bywgZ2V0Q29tcHJlc29yUGFyYW0sIHNldENvbXByZXNvckFjdGl2bywgc2V0Q29tcHJlc29yUGFyYW0sIHN0YXRpY0ZpbHRlcmluZywgXG4gICAgZmlsdGVyc1xuIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbnRlcmZhY2UgRXN0YWRvTW9kcyB7XG4gICAgY2FwdHVyaW5nQXVkaW86IGJvb2xlYW47XG4gICAgZGFya01vZGU6IGJvb2xlYW47XG4gICAgY29tcHJlc29yOiB7XG4gICAgICAgIGFjdGl2bzogYm9vbGVhbjtcbiAgICAgICAgdGhyZXNob2xkOiBudW1iZXI7XG4gICAgICAgIHJhdGlvOiBudW1iZXI7XG4gICAgICAgIGtuZWU6IG51bWJlcjtcbiAgICAgICAgYXR0YWNrOiBudW1iZXI7XG4gICAgICAgIHJlbGVhc2U6IG51bWJlcjtcbiAgICB9O1xuICAgIGdhaW5BdWRpbzogbnVtYmVyO1xufTtcbnR5cGUgZWxlbWVudG9HdWFyZGFkbyA9IGtleW9mIEVzdGFkb01vZHM7IC8vIFwiY2FwdHVyaW5nQXVkaW9cIiB8IFwiZGFya01vZGVcIiB8IFwiY29tcHJlc29yXCIgfCBcImdhaW5BdWRpb1wiXG5leHBvcnQgbGV0IGxvY2FsRXN0YWRvOiBFc3RhZG9Nb2RzID0ge30gYXMgRXN0YWRvTW9kcztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVZhbHVlPFQgZXh0ZW5kcyBlbGVtZW50b0d1YXJkYWRvPih2YWx1ZU5hbWU6IFQsIHZhbHVlOiBhbnkpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJlc3RhZG9cIiwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZXN0YWRvOiBFc3RhZG9Nb2RzID0gZGF0YS5lc3RhZG8gfHwge30gYXMgRXN0YWRvTW9kcztcbiAgICAgICAgZXN0YWRvW3ZhbHVlTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgZXN0YWRvIH0pO1xuICAgIH0pO1xuICAgIGxvY2FsRXN0YWRvW3ZhbHVlTmFtZV0gPSB2YWx1ZTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBjYXJnYXIgZWwgZXN0YWRvIGd1YXJkYWRvXG5leHBvcnQgZnVuY3Rpb24gY2FyZ2FyRXN0YWRvKCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJlc3RhZG9cIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmVzdGFkbykge1xuICAgICAgY29uc3QgZXN0YWRvID0gZGF0YS5lc3RhZG8gYXMgRXN0YWRvTW9kcztcbiAgICAgIGxvY2FsRXN0YWRvID0gZXN0YWRvO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBFc3RhZG8gY2FyZ2FkbzpcIiwgZXN0YWRvKTtcblxuICAgICAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICAgIGNvbnN0IGJvdG9uQWN0aXZhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZhclwiKTtcbiAgICAgICAgaWYgKCFib3RvbkFjdGl2YXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBib3TDs24gZGUgYWN0aXZhclwiKTtcbiAgICAgICAgYm90b25BY3RpdmFyLnRleHRDb250ZW50ID0gXCJEZXRlbmVyIEF1ZGlvIPCflIdcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2FyZ2FyIHZvbHVtZW5cbiAgICAgIGlmIChlc3RhZG8uZ2FpbkF1ZGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgdm9sdW1lbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoIXZvbHVtZW4pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdm9sdW1lblwiKTtcbiAgICAgICAgdm9sdW1lbi52YWx1ZSA9IGVzdGFkby5nYWluQXVkaW8udG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qgdm9sdW1lbl92YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lbi12YWx1ZVwiKTtcbiAgICAgICAgaWYgKCF2b2x1bWVuX3ZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgdmFsb3IgZGUgdm9sdW1lblwiKTtcbiAgICAgICAgdm9sdW1lbl92YWx1ZS50ZXh0Q29udGVudCA9IGAke2VzdGFkby5nYWluQXVkaW99IGRCYDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2FyZ2FyIG1vZG8gb3NjdXJvXG4gICAgICBpZiAoZXN0YWRvLmRhcmtNb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGVzdGFkby5kYXJrTW9kZSkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgY29uc3QgZGFya19tb2RlX2VuYWJsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIWRhcmtfbW9kZV9lbmFibGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgbW9kbyBvc2N1cm9cIik7XG4gICAgICAgICAgZGFya19tb2RlX2VuYWJsZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgICBjb25zdCBkYXJrX21vZGVfZW5hYmxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghZGFya19tb2RlX2VuYWJsZWQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBtb2RvIG9zY3Vyb1wiKTtcbiAgICAgICAgICBkYXJrX21vZGVfZW5hYmxlZC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2FyZ2FyIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3JcbiAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yKSB7XG4gICAgICAgIGNvbnN0IGNvbXByZXNvcl9hY3Rpdm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICghY29tcHJlc29yX2FjdGl2bykgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIGNvbXByZXNvciBhY3Rpdm9cIik7XG4gICAgICAgIGNvbXByZXNvcl9hY3Rpdm8uY2hlY2tlZCA9IGVzdGFkby5jb21wcmVzb3IuYWN0aXZvO1xuICAgICAgICBzZXRDb21wcmVzb3JBY3Rpdm8oZXN0YWRvLmNvbXByZXNvci5hY3Rpdm8pO1xuICAgICAgICBcbiAgICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3IudGhyZXNob2xkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIXRocmVzaG9sZCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB0aHJlc2hvbGRcIik7XG4gICAgICAgICAgdGhyZXNob2xkLnZhbHVlID0gZXN0YWRvLmNvbXByZXNvci50aHJlc2hvbGQudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgndGhyZXNob2xkJywgcGFyc2VGbG9hdCh0aHJlc2hvbGQudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3IucmF0aW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGlvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIXJhdGlvKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJhdGlvXCIpO1xuICAgICAgICAgIHJhdGlvLnZhbHVlID0gZXN0YWRvLmNvbXByZXNvci5yYXRpby50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdyYXRpbycsIHBhcnNlRmxvYXQocmF0aW8udmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3Iua25lZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3Qga25lZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrbmVlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIWtuZWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUga25lZVwiKTtcbiAgICAgICAgICBrbmVlLnZhbHVlID0gZXN0YWRvLmNvbXByZXNvci5rbmVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ2tuZWUnLCBwYXJzZUZsb2F0KGtuZWUudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3IuYXR0YWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBhdHRhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIWF0dGFjaykgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBhdHRhY2tcIik7XG4gICAgICAgICAgYXR0YWNrLnZhbHVlID0gZXN0YWRvLmNvbXByZXNvci5hdHRhY2sudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgnYXR0YWNrJywgcGFyc2VGbG9hdChhdHRhY2sudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3IucmVsZWFzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgcmVsZWFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxlYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIXJlbGVhc2UpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmVsZWFzZVwiKTtcbiAgICAgICAgICByZWxlYXNlLnZhbHVlID0gZXN0YWRvLmNvbXByZXNvci5yZWxlYXNlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ3JlbGVhc2UnLCBwYXJzZUZsb2F0KHJlbGVhc2UudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8vIEd1YXJkYXIgeSByZXN0YXVyYXIgZXN0YWRvIGRlIGxvcyA4IHNsaWRlcnMgKyBlc3RhZG8gZGUgYXVkaW9cbmV4cG9ydCBmdW5jdGlvbiBndWFyZGFyRXN0YWRvKCkge1xuICBjb25zdCB2b2x1bWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xuICBpZiAoIXZvbHVtZW4pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdm9sdW1lblwiKTtcbiAgY29uc3QgZXN0YWRvOiBFc3RhZG9Nb2RzID0geyBcbiAgICBjYXB0dXJpbmdBdWRpbzogbG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8sXG4gICAgZGFya01vZGU6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKSxcbiAgICBjb21wcmVzb3I6IHtcbiAgICAgIGFjdGl2bzogZ2V0Q29tcHJlc29yQWN0aXZvKCksXG4gICAgICB0aHJlc2hvbGQ6IGdldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnKSxcbiAgICAgIHJhdGlvOiBnZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nKSxcbiAgICAgIGtuZWU6IGdldENvbXByZXNvclBhcmFtKCdrbmVlJyksXG4gICAgICBhdHRhY2s6IGdldENvbXByZXNvclBhcmFtKCdhdHRhY2snKSxcbiAgICAgIHJlbGVhc2U6IGdldENvbXByZXNvclBhcmFtKCdyZWxlYXNlJylcbiAgICB9LFxuICAgIGdhaW5BdWRpbzogcGFyc2VGbG9hdCh2b2x1bWVuLnZhbHVlKVxuICB9O1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcImVzdGFkb1wiOiBlc3RhZG8gfSk7XG4gIGNvbnNvbGUubG9nKFwiW0lORk9dIEVzdGFkbyBndWFyZGFkbzpcIiwgZXN0YWRvKTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBjYXJnYXIgbGEgbGlzdGEgZGUgcHJlc2V0cyBlbiBlbCBzZWxlY3RvclxuZXhwb3J0IGZ1bmN0aW9uIGNhcmdhckxpc3RhUHJlc2V0cygpIHtcbiAgY29uc3QgcHJlc2V0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldC1zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgaWYgKCFwcmVzZXRTZWxlY3QpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzZWxlY3RvciBkZSBwcmVzZXRzXCIpO1xuICBcbiAgLy8gTGltcGlhciBvcGNpb25lcyBhY3R1YWxlc1xuICB3aGlsZSAocHJlc2V0U2VsZWN0Lm9wdGlvbnMubGVuZ3RoID4gMSkge1xuICAgIHByZXNldFNlbGVjdC5yZW1vdmUoMSk7XG4gIH1cbiAgXG4gIC8vIENhcmdhciBwcmVzZXRzIGRlc2RlIHN0b3JhZ2VcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgcHJlc2V0cyA9IHJlc3VsdC5wcmVzZXRzIHx8IHt9O1xuICAgIFxuICAgIC8vIEFncmVnYXIgY2FkYSBwcmVzZXQgY29tbyB1bmEgb3BjacOzblxuICAgIE9iamVjdC5rZXlzKHByZXNldHMpLmZvckVhY2gobm9tYnJlUHJlc2V0ID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gbm9tYnJlUHJlc2V0O1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbm9tYnJlUHJlc2V0O1xuICAgICAgcHJlc2V0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xuICBjb25zb2xlLmxvZyhcIltJTkZPXSBQcmltZXJhIGFwZXJ0dXJhIGRlbCBwb3B1cCBkZXNkZSBsYSBpbmljaWFsaXphY2nDs24gLSBMaW1waWFuZG8gc3RvcmFnZVwiKTtcbiAgLy8gTGltcGlhciB0b2RhcyBsYXMgdmFyaWFibGVzIGd1YXJkYWRhc1xuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcigpO1xuICAvLyBHdWFyZGFyIHF1ZSBlbCBhdWRpbyBlc3TDoSBkZXNhY3RpdmFkb1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjYXB0dXJpbmdBdWRpbzogZmFsc2UgfSk7XG4gIGxvY2FsRXN0YWRvID0ge30gYXMgRXN0YWRvTW9kcztcbn0iLCJ0eXBlIFBvaW50ID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aFBvaW50cyhwb2ludHM6IFBvaW50W10sIHdpbmRvd1NpemU6IG51bWJlciwgY2FudmFzV2lkdGg6IG51bWJlcik6IFBvaW50W10ge1xuICBpZiAocG9pbnRzLmxlbmd0aCA8PSB3aW5kb3dTaXplKSByZXR1cm4gcG9pbnRzO1xuXG4gIGNvbnN0IHNtb290aGVkOiBQb2ludFtdID0gW107XG5cbiAgc21vb3RoZWQucHVzaChwb2ludHNbMF0pO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIGNvbnN0IGFkYXB0aXZlV2luZG93ID0gTWF0aC5taW4oXG4gICAgY29uc3QgYWRhcHRpdmVXaW5kb3cgPSBNYXRoLm1heChcbiAgICAgIDIsXG4gICAgICBNYXRoLmZsb29yKHdpbmRvd1NpemUgKiBNYXRoLnBvdygocG9pbnRzW2ldLnggLyBjYW52YXNXaWR0aCksIDIpICogMylcbiAgICApO1xuXG4gICAgY29uc3QgaGFsZldpbmRvdyA9IE1hdGguZmxvb3IoYWRhcHRpdmVXaW5kb3cgLyAyKTtcbiAgICBjb25zdCBzdGFydElkeCA9IE1hdGgubWF4KDAsIGkgLSBoYWxmV2luZG93KTtcbiAgICBjb25zdCBlbmRJZHggPSBNYXRoLm1pbihwb2ludHMubGVuZ3RoIC0gMSwgaSArIGhhbGZXaW5kb3cpO1xuXG4gICAgbGV0IHN1bVkgPSAwO1xuICAgIGZvciAobGV0IGogPSBzdGFydElkeDsgaiA8PSBlbmRJZHg7IGorKykge1xuICAgICAgc3VtWSArPSBwb2ludHNbal0ueTtcbiAgICB9XG5cbiAgICBjb25zdCBhdmdZID0gc3VtWSAvIChlbmRJZHggLSBzdGFydElkeCArIDEpO1xuICAgIHNtb290aGVkLnB1c2goeyB4OiBwb2ludHNbaV0ueCwgeTogYXZnWSB9KTtcbiAgfVxuXG4gIGlmIChwb2ludHMubGVuZ3RoID4gMSkge1xuICAgIHNtb290aGVkLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG4gIH1cblxuICByZXR1cm4gc21vb3RoZWQ7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY29udmVydGlyIGRCIGEgdmFsb3IgZGUgZ2FuYW5jaWEgcGFyYSBXZWIgQXVkaW8gQVBJXG5leHBvcnQgZnVuY3Rpb24gZGJUb0dhaW4oZGI6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdygxMCwgZGIgLyAyMCk7XG59IiwiaW1wb3J0IHsgc21vb3RoUG9pbnRzIH0gZnJvbSBcIi4vdXRpbHMudHNcIjtcbmltcG9ydCB7IGdldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlciwgZ2V0QWN0aXZlUU1hcmtlciB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuXG50eXBlIFZpc3VhbGl6ZXJEYXRhID0ge1xuICAgIHByZTogbnVtYmVyW107XG4gICAgbWlkOiBudW1iZXJbXTtcbiAgICBwb3N0OiBudW1iZXJbXTtcbiAgICBtaW5EZWNpYmVsczogbnVtYmVyO1xuICAgIG1heERlY2liZWxzOiBudW1iZXI7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBkcmF3VmlzdWFsaXplcihkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bWJlcltdIHwgbnVtYmVyIH0pIHtcbmV4cG9ydCBmdW5jdGlvbiBkcmF3VmlzdWFsaXplcihkYXRhOiBWaXN1YWxpemVyRGF0YSkge1xuICBjb25zdCBwcmVEYXRhOiBudW1iZXJbXSA9IGRhdGFbXCJwcmVcIl0gfHwgW107XG4gIGNvbnN0IG1pZERhdGE6IG51bWJlcltdID0gZGF0YVtcIm1pZFwiXSB8fCBbXTtcbiAgY29uc3QgcG9zdERhdGE6IG51bWJlcltdID0gZGF0YVtcInBvc3RcIl0gfHwgW107XG4gIGNvbnN0IG1pbkRlY2liZWxzOiBudW1iZXIgPSBkYXRhW1wibWluRGVjaWJlbHNcIl0gfHwgLTEwMDtcbiAgY29uc3QgbWF4RGVjaWJlbHM6IG51bWJlciA9IGRhdGFbXCJtYXhEZWNpYmVsc1wiXSB8fCAtMjU7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzdWFsXCIpO1xuICBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcbiAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwiQ3JpdGljYWw6IENhbnZhcyBjb250ZXh0IG5vdCBmb3VuZCBvciAndmlzdWFsJyBlbGVtZW50IGlzIG5vdCBhIGNhbnZhcy5cIik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JpdGljYWw6ICd2aXN1YWwnIGVsZW1lbnQgaXMgbm90IGEgY2FudmFzLlwiKTtcbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IHByZURhdGEubGVuZ3RoO1xuXG4gIC8vIERldGVjdGFyIHNpIGVsIG1vZG8gb3NjdXJvIGVzdMOhIGFjdGl2b1xuICBjb25zdCBpc0RhcmtNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpO1xuICBcbiAgLy8gRm9uZG8gYWRhcHRhZG8gYWwgdGVtYSBhY3R1YWxcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiIzEyMTIxMlwiIDogXCIjZmVmZWZlXCI7IC8vIE9zY3VybyBvIGNsYXJvIHNlZ8O6biBlbCB0ZW1hXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vIEZ1bmNpw7NuIHBhcmEgbm9ybWFsaXphciB2YWxvcmVzIGRlIGRCIGEgYWx0dXJhIGRlIGJhcnJhICgwLTEpXG4gIGNvbnN0IG5vcm1hbGl6ZURiID0gKGRiVmFsdWU6IG51bWJlcikgPT4ge1xuICAgIC8vIExpbWl0YXIgZWwgdmFsb3IgZW50cmUgbWluRGVjaWJlbHMgeSBtYXhEZWNpYmVsc1xuICAgIGNvbnN0IGNsYW1wZWREYiA9IE1hdGgubWF4KG1pbkRlY2liZWxzLCBNYXRoLm1pbihtYXhEZWNpYmVscywgZGJWYWx1ZSkpO1xuICAgIC8vIE5vcm1hbGl6YXIgYSB1biB2YWxvciBlbnRyZSAwIHkgMVxuICAgIHJldHVybiAoY2xhbXBlZERiIC0gbWluRGVjaWJlbHMpIC8gKG1heERlY2liZWxzIC0gbWluRGVjaWJlbHMpO1xuICB9O1xuXG4gIC8vIERpYnVqYXIgZXNjYWxhIGRlIGZyZWN1ZW5jaWEgbG9nYXLDrXRtaWNhXG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjYWFhYWFhXCIgOiBcIiNhYWFcIjtcbiAgY3R4LmZvbnQgPSBcIjEwcHggQXJpYWxcIjtcbiAgY29uc3QgZnJlcUxhYmVscyA9IFszMCwgNjAsIDEyMCwgMjUwLCA1MDAsIDEwMDAsIDIwMDAsIDQwMDAsIDgwMDAsIDE3MDAwXTtcbiAgZnJlcUxhYmVscy5mb3JFYWNoKChmcmVxLCBpbmRleCkgPT4ge1xuICAgIC8vIENvbnZlcnRpciBmcmVjdWVuY2lhIGEgcG9zaWNpw7NuIFggdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5sb2cyKGZyZXEgLyAyMCk7IC8vIE7Dum1lcm8gZGUgb2N0YXZhcyBkZXNkZSAyMEh6XG4gICAgY29uc3QgdG90YWxPY3RhdmVzID0gTWF0aC5sb2cyKDE3MDAwIC8gMjApOyAvLyBBcHJveGltYWRhbWVudGUgOS43IG9jdGF2YXMgKGhhc3RhIDE3a0h6KVxuICAgIGxldCB4ID0gKG9jdGF2ZSAvIHRvdGFsT2N0YXZlcykgKiBjYW52YXMud2lkdGg7XG4gICAgXG4gICAgLy8gQXBsaWNhciBvZmZzZXQgYSB0b2RhcyBsYXMgbMOtbmVhcyBleGNlcHRvIGxhIMO6bHRpbWEgKDE3a0h6KVxuICAgIGlmIChpbmRleCA8IGZyZXFMYWJlbHMubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3Qgb2Zmc2V0RmFjdG9yID0gMSAtIChpbmRleCAvIChmcmVxTGFiZWxzLmxlbmd0aCAtIDEpKTtcbiAgICAgIHggKz0gMTAgKiBvZmZzZXRGYWN0b3I7XG4gICAgfVxuICAgIFxuICAgIC8vIERpYnVqYXIgbMOtbmVhIHZlcnRpY2FsXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gaXNEYXJrTW9kZSA/IFwiIzMzMzMzM1wiIDogXCIjZGRkXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgY3R4LmxpbmVUbyh4LCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gRGlidWphciBldGlxdWV0YVxuICAgIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICBjdHguZmlsbFRleHQoZnJlcSA+PSAxMDAwID8gYCR7ZnJlcS8xMDAwfWtgIDogZnJlcS50b1N0cmluZygpLCB4IC0gMTAsIGNhbnZhcy5oZWlnaHQgLSA1KTtcbiAgfSk7XG5cbiAgLy8gRGlidWphciBlc2NhbGEgZGUgZEJcbiAgY29uc3QgZGJMYWJlbHMgPSBbLTkwLCAtODAsIC03MCwgLTYwLCAtNTAsIC00MCwgLTMwXTtcbiAgZGJMYWJlbHMuZm9yRWFjaChkYiA9PiB7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIoZGIpICogY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgLy8gRGlidWphciBsw61uZWEgaG9yaXpvbnRhbFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGlzRGFya01vZGUgPyBcIiMzMzMzMzNcIiA6IFwiI2VlZVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIHkpO1xuICAgIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCB5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gRGlidWphciBldGlxdWV0YVxuICAgIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7ZGJ9IGRCYCwgNSwgeSArIDEyKTtcbiAgfSk7XG5cbiAgLy8gQ2FsY3VsYXIgcG9zaWNpb25lcyBkZSBwdW50b3MgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbiAgY29uc3QgcHJlUG9pbnRzID0gW107XG4gIGNvbnN0IG1pZFBvaW50cyA9IFtdOyBcbiAgY29uc3QgcG9zdFBvaW50cyA9IFtdO1xuICBcbiAgLy8gQ3JlYXIgcG9zaWNpb25lcyBkZSBwdW50b3MgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXJMZW5ndGg7IGkrKykge1xuICAgIC8vIENhbGN1bGFtb3MgbGEgZnJlY3VlbmNpYSBjb3JyZXNwb25kaWVudGUgYSBjYWRhIGJpbiBkZSBsYSBGRlRcbiAgICAvLyBMYSBGRlQgZGl2aWRlIGVsIHJhbmdvIGRlIGZyZWN1ZW5jaWFzIGVuIHBhcnRlcyBpZ3VhbGVzIChsaW5lYWxlcylcbiAgICAvLyBQZXJvIHF1ZXJlbW9zIHZpc3VhbGl6YXJsYXMgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBmcmVxUmF0aW8gPSBpIC8gYnVmZmVyTGVuZ3RoOyAvLyBQb3NpY2nDs24gcmVsYXRpdmEgZW4gZWwgYXJyYXkgKDAtMSlcbiAgICBjb25zdCBueXF1aXN0RnJlcSA9IDIyMDUwOyAvLyBGcmVjdWVuY2lhIG3DoXhpbWEgcmVwcmVzZW50YWJsZSAoc2FtcGxlUmF0ZS8yKVxuICAgIFxuICAgIC8vIEZyZWN1ZW5jaWEgbGluZWFsIGNvcnJlc3BvbmRpZW50ZSBhbCBiaW4gaSBkZSBsYSBGRlRcbiAgICBjb25zdCBsaW5lYXJGcmVxID0gZnJlcVJhdGlvICogbnlxdWlzdEZyZXE7XG4gICAgXG4gICAgLy8gU29sbyBwcm9jZXNhbW9zIGhhc3RhIDE3a0h6XG4gICAgaWYgKGxpbmVhckZyZXEgPiAxNzAwMCkgYnJlYWs7XG4gICAgXG4gICAgLy8gU29sbyBpbmNsdWltb3MgZnJlY3VlbmNpYXMgZGVzZGUgMjBIelxuICAgIGlmIChsaW5lYXJGcmVxIDwgMjApIGNvbnRpbnVlO1xuICAgIFxuICAgIC8vIENvbnZlcnRpciBmcmVjdWVuY2lhIGEgcG9zaWNpw7NuIFggdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5sb2cyKGxpbmVhckZyZXEgLyAyMCk7IC8vIE7Dum1lcm8gZGUgb2N0YXZhcyBkZXNkZSAyMEh6XG4gICAgY29uc3QgdG90YWxPY3RhdmVzID0gTWF0aC5sb2cyKDE3MDAwIC8gMjApOyAvLyBBcHJveGltYWRhbWVudGUgOS43IG9jdGF2YXMgKGhhc3RhIDE3a0h6KVxuICAgIGNvbnN0IHggPSAob2N0YXZlIC8gdG90YWxPY3RhdmVzKSAqIGNhbnZhcy53aWR0aCAqIDAuOTk1OyAvLyBVc2FyIGVsIHZhbG9yIGV4YWN0byBkZSBvY3RhdmFzXG4gICAgXG4gICAgLy8gQWxtYWNlbmFyIHB1bnRvcyBjb24gc3VzIHZhbG9yZXMgZGUgYW1wbGl0dWRcbiAgICBpZiAoaSA8IHByZURhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihwcmVEYXRhW2ldKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgcHJlUG9pbnRzLnB1c2goeyB4LCB5IH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBOdWV2bzogYWxtYWNlbmFyIHB1bnRvcyBwYXJhIGVsIHZpc3VhbGl6YWRvciBpbnRlcm1lZGlvXG4gICAgaWYgKGkgPCBtaWREYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIobWlkRGF0YVtpXSkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIG1pZFBvaW50cy5wdXNoKHsgeCwgeSB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGkgPCBwb3N0RGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC0gKG5vcm1hbGl6ZURiKHBvc3REYXRhW2ldKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgcG9zdFBvaW50cy5wdXNoKHsgeCwgeSB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEFwbGljYXIgc3Vhdml6YWRvIGEgbG9zIHB1bnRvc1xuICBjb25zdCBzbW9vdGhlZFByZVBvaW50cyA9IHNtb290aFBvaW50cyhwcmVQb2ludHMsIDcsIGNhbnZhcy53aWR0aCk7XG4gIGNvbnN0IHNtb290aGVkTWlkUG9pbnRzID0gc21vb3RoUG9pbnRzKG1pZFBvaW50cywgNywgY2FudmFzLndpZHRoKTsgXG4gIGNvbnN0IHNtb290aGVkUG9zdFBvaW50cyA9IHNtb290aFBvaW50cyhwb3N0UG9pbnRzLCA3LCBjYW52YXMud2lkdGgpO1xuICBcbiAgLy8gRWZlY3RvIGdsb3dcbiAgY3R4LnNoYWRvd0JsdXIgPSAxMDtcbiAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG5cbiAgLy8gUHJlLUVROiB2aW9sZXRhIHZpdm8gY29uIGdsb3dcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDE5MCwgOTAsIDI1NSwgMC40KVwiO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjgpXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjMpXCI7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBcbiAgLy8gRGlidWphciBsw61uZWEgcGFyYSBwcmUtRVFcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyBcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIHF1ZSB1bmUgbG9zIHB1bnRvc1xuICBzbW9vdGhlZFByZVBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9KTtcbiAgXG4gIC8vIENlcnJhciBlbCBwYXRoIGhhc3RhIGxhIGJhc2VcbiAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gIGN0eC5maWxsKCk7XG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBkZWwgY29udG9ybm9cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBpZiAoc21vb3RoZWRQcmVQb2ludHMubGVuZ3RoID4gMCkge1xuICAgIGN0eC5tb3ZlVG8oc21vb3RoZWRQcmVQb2ludHNbMF0ueCwgc21vb3RoZWRQcmVQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbW9vdGhlZFByZVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmxpbmVUbyhzbW9vdGhlZFByZVBvaW50c1tpXS54LCBzbW9vdGhlZFByZVBvaW50c1tpXS55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gTnVldm86IE1pZC1FUSAoZGVzcHXDqXMgZGUgZmlsdHJvcywgYW50ZXMgZGUgY29tcHJlc29yKTogYW1hcmlsbG8vbmFyYW5qYSBjb24gZ2xvd1xuICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAxODAsIDUwLCAwLjQpXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuOClcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuMylcIjtcbiAgXG4gIC8vIERpYnVqYXIgbMOtbmVhIHBhcmEgbWlkLUVRXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0KTsgXG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBxdWUgdW5lIGxvcyBwdW50b3NcbiAgc21vb3RoZWRNaWRQb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfSk7XG4gIFxuICAvLyBDZXJyYXIgZWwgcGF0aCBoYXN0YSBsYSBiYXNlXG4gIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgLy8gUmVsbGVuYXIgZWwgw6FyZWEgYmFqbyBsYSBjdXJ2YVxuICBjdHguZmlsbCgpO1xuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgZGVsIGNvbnRvcm5vXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgaWYgKHNtb290aGVkTWlkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjdHgubW92ZVRvKHNtb290aGVkTWlkUG9pbnRzWzBdLngsIHNtb290aGVkTWlkUG9pbnRzWzBdLnkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc21vb3RoZWRNaWRQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5saW5lVG8oc21vb3RoZWRNaWRQb2ludHNbaV0ueCwgc21vb3RoZWRNaWRQb2ludHNbaV0ueSk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIFBvc3QtRVE6IHZlcmRlIG5lw7NuIGNsYXJvIGNvbiBnbG93XG4gIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSg1MCwgMjIwLCAxMjAsIDAuNClcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC44KVwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC4zKVwiO1xuICBcbiAgLy8gRGlidWphciBsw61uZWEgcGFyYSBwb3N0LUVRXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0KTsgLy8gRW1wZXphciBkZXNkZSBsYSBlc3F1aW5hIGluZmVyaW9yIGl6cXVpZXJkYVxuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgcXVlIHVuZSBsb3MgcHVudG9zXG4gIHNtb290aGVkUG9zdFBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9KTtcbiAgXG4gIC8vIENlcnJhciBlbCBwYXRoIGhhc3RhIGxhIGJhc2VcbiAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gIGN0eC5maWxsKCk7XG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBkZWwgY29udG9ybm9cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBpZiAoc21vb3RoZWRQb3N0UG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjdHgubW92ZVRvKHNtb290aGVkUG9zdFBvaW50c1swXS54LCBzbW9vdGhlZFBvc3RQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbW9vdGhlZFBvc3RQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5saW5lVG8oc21vb3RoZWRQb3N0UG9pbnRzW2ldLngsIHNtb290aGVkUG9zdFBvaW50c1tpXS55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gTGltcGlhciBlZmVjdG9zXG4gIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXG4gIC8vIEFncmVnYXIgbGV5ZW5kYSBwYXJhIGxvcyBjb2xvcmVzXG4gIGNvbnN0IGxlZ2VuZFkgPSAyMDtcbiAgY29uc3QgbGVnZW5kU3BhY2luZyA9IDEyMDtcbiAgXG4gIC8vIExleWVuZGEgcGFyYSBQcmUtRVEgKHZpb2xldGEpXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdCgxMCwgbGVnZW5kWSAtIDEwLCAxMCwgMTApO1xuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gIGN0eC5maWxsVGV4dChcIlByZS1FUVwiLCAyNSwgbGVnZW5kWSk7XG4gIFxuICAvLyBMZXllbmRhIHBhcmEgTWlkLUVRIChhbWFyaWxsby9uYXJhbmphKVxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC44KVwiO1xuICBjdHguZmlsbFJlY3QoMTAgKyBsZWdlbmRTcGFjaW5nLCBsZWdlbmRZIC0gMTAsIDEwLCAxMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUG9zdC1GaWx0cm9zXCIsIDI1ICsgbGVnZW5kU3BhY2luZywgbGVnZW5kWSk7XG4gIFxuICAvLyBMZXllbmRhIHBhcmEgUG9zdC1FUSAodmVyZGUpXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdCgxMCArIGxlZ2VuZFNwYWNpbmcgKiAyLCBsZWdlbmRZIC0gMTAsIDEwLCAxMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUG9zdC1Db21wcmVzb3JcIiwgMjUgKyBsZWdlbmRTcGFjaW5nICogMiwgbGVnZW5kWSk7XG5cbiAgLy8gRGlidWphciBlbCBtYXJjYWRvciBkZSBmcmVjdWVuY2lhIGFjdGl2YSBzaSBleGlzdGVcbiAgY29uc3QgYWN0aXZlRnJlcXVlbmN5TWFya2VyID0gZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKCk7XG4gIGNvbnN0IGFjdGl2ZVFNYXJrZXIgPSBnZXRBY3RpdmVRTWFya2VyKCk7XG4gIGlmIChhY3RpdmVGcmVxdWVuY3lNYXJrZXIpIHtcbiAgICAvLyBDb252ZXJ0aXIgZnJlY3VlbmNpYSBhIHBvc2ljacOzbiBYIHVzYW5kbyBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIGNvbnN0IG9jdGF2ZSA9IE1hdGgubG9nMihhY3RpdmVGcmVxdWVuY3lNYXJrZXIgLyAyMCk7IC8vIE7Dum1lcm8gZGUgb2N0YXZhcyBkZXNkZSAyMEh6XG4gICAgY29uc3QgdG90YWxPY3RhdmVzID0gTWF0aC5sb2cyKDE3MDAwIC8gMjApOyAvLyBBcHJveGltYWRhbWVudGUgOS43IG9jdGF2YXMgKGhhc3RhIDE3a0h6KVxuICAgIGNvbnN0IHggPSAob2N0YXZlIC8gdG90YWxPY3RhdmVzKSAqIGNhbnZhcy53aWR0aCAqIDAuOTk1OyAvLyBVc2FyIGVsIHZhbG9yIGV4YWN0byBkZSBvY3RhdmFzXG4gICAgXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjZmYzMzY2XCI7IC8vIENvbG9yIGxsYW1hdGl2byBwYXJhIGVsIG1hcmNhZG9yXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgY3R4LmxpbmVUbyh4LCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gRXRpcXVldGEgY29uIGVsIHZhbG9yIGRlIGZyZWN1ZW5jaWFcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmYzMzY2XCI7XG4gICAgY3R4LmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7YWN0aXZlRnJlcXVlbmN5TWFya2VyfSBIemAsIHggKyA1LCAxNSk7XG4gICAgXG4gICAgLy8gRGlidWphciBsYSBjYW1wYW5hIGRlIFEgc2kgdGVuZW1vcyB0YW50byBmcmVjdWVuY2lhIGNvbW8gUVxuICAgIGlmIChhY3RpdmVRTWFya2VyKSB7XG4gICAgICAvLyBEaWJ1amFyIGxhIGNhbXBhbmFcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDUxLCAxMDIsIDAuNylcIjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCA1MSwgMTAyLCAwLjIpXCI7XG4gICAgICBcbiAgICAgIC8vIENhbGN1bGFyIGxhIGVzY2FsYSBkZSBsYSBjYW1wYW5hIGJhc2FkYSBlbiBRXG4gICAgICAvLyBDdWFudG8gbWF5b3Igc2VhIFEsIG3DoXMgZXN0cmVjaGEgc2Vyw6EgbGEgY2FtcGFuYVxuICAgICAgY29uc3QgcVNjYWxlID0gTWF0aC5tYXgoMjAsIDIwMCAvIGFjdGl2ZVFNYXJrZXIpOyAvLyBMaW1pdGFyIGVsIG3DrW5pbW8gcGFyYSBRIG11eSBhbHRvc1xuICAgICAgXG4gICAgICAvLyBEaWJ1amFyIGxhIGN1cnZhIGRlIGNhbXBhbmFcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIFxuICAgICAgLy8gUHVudG9zIHBhcmEgbGEgY3VydmFcbiAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgY29uc3QgY2VudGVyWCA9IHg7XG4gICAgICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogMC43OyAvLyBBbHR1cmEgbcOheGltYSBkZSBsYSBjYW1wYW5hXG4gICAgICBcbiAgICAgIC8vIEdlbmVyYXIgcHVudG9zIHBhcmEgbGEgY3VydmEgZGUgY2FtcGFuYSBlbiBlc2NhbGEgbG9nYXLDrXRtaWNhXG4gICAgICBmb3IgKGxldCBpID0gLWNhbnZhcy53aWR0aC8yOyBpIDw9IGNhbnZhcy53aWR0aC8yOyBpICs9IDUpIHtcbiAgICAgICAgY29uc3QgcG9pbnRYID0gY2VudGVyWCArIGk7XG4gICAgICAgIGlmIChwb2ludFggPj0gMCAmJiBwb2ludFggPD0gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgLy8gQ29udmVydGlyIHBvc2ljacOzbiBYIGEgZnJlY3VlbmNpYVxuICAgICAgICAgIGNvbnN0IGZyZXEgPSAyMCAqIE1hdGgucG93KDEwLCAocG9pbnRYIC8gY2FudmFzLndpZHRoKSAqIE1hdGgubG9nMTAoMTcwMDAgLyAyMCkpO1xuICAgICAgICAgIGNvbnN0IGZyZXFSYXRpbyA9IGZyZXEgLyBhY3RpdmVGcmVxdWVuY3lNYXJrZXI7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gRsOzcm11bGEgZGUgY2FtcGFuYSBwYXJhIGZpbHRybyBwZWFraW5nIGVuIGVzY2FsYSBsb2dhcsOtdG1pY2FcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IDEgLyBNYXRoLnNxcnQoMSArIE1hdGgucG93KGFjdGl2ZVFNYXJrZXIgKiAoZnJlcVJhdGlvIC0gMS9mcmVxUmF0aW8pLCAyKSk7XG4gICAgICAgICAgY29uc3QgcG9pbnRZID0gY2FudmFzLmhlaWdodCAtIGhlaWdodCAqIHJlc3BvbnNlO1xuICAgICAgICAgIFxuICAgICAgICAgIHBvaW50cy5wdXNoKHt4OiBwb2ludFgsIHk6IHBvaW50WX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIERpYnVqYXIgbGEgY3VydmFcbiAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjdHgubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVsbGVuYXIgZWwgw6FyZWEgYmFqbyBsYSBjdXJ2YVxuICAgICAgICBjdHgubGluZVRvKHBvaW50c1twb2ludHMubGVuZ3RoLTFdLngsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHgubGluZVRvKHBvaW50c1swXS54LCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBcbiAgICAgICAgLy8gTW9zdHJhciBlbCB2YWxvciBkZSBRXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjMzNjZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBROiAke2FjdGl2ZVFNYXJrZXIudG9GaXhlZCgxKX1gLCB4ICsgNSwgMzApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbjpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX3Byb2Zlc3Npb25hbF9hdWRpb19wbHVnaW5cIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2hyb21lX3Byb2Zlc3Npb25hbF9hdWRpb19wbHVnaW5cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCB7IGNhcmdhckZpbHRyb3MsIGFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zIH0gZnJvbSBcIi4vZmlsdGVyc19pbnRlcmZhY2UudHNcIjtcbmltcG9ydCB7IGRyYXdWaXN1YWxpemVyIH0gZnJvbSBcIi4vdmlzdWFsaXplci50c1wiO1xuaW1wb3J0IHsgc3RhdGljRmlsdGVyaW5nLCBmaWx0ZXJzIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgeyBpbmljaWFsaXphckNvbXByZXNvciB9IGZyb20gXCIuL2NvbXByZXNzb3IudHNcIjtcbmltcG9ydCB7IGxvY2FsRXN0YWRvIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCJcbmltcG9ydCB7IGd1YXJkYXJFc3RhZG8sIGNhcmdhckVzdGFkbywgY2FyZ2FyTGlzdGFQcmVzZXRzLCBjbGVhclN0b3JhZ2UsIHNhdmVWYWx1ZSB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgYXBsaWNhckNvbmZpZ3VyYWNpb24sIHVwZGF0ZVZvbHVtZVRleHQgfSBmcm9tIFwiLi9pbnRlcmZhY2UudHNcIjtcbmltcG9ydCB7IGRiVG9HYWluIH0gZnJvbSBcIi4vdXRpbHMudHNcIjtcblxubGV0IG9mZnNjcmVlblBvcnQgPSBudWxsO1xubGV0IGxvb3BzID0gbnVsbDtcbmxldCBkZWJ1Z19jb3VudGVyID0gMTtcblxuXG4vLyBTZW5kZXJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIFdhaXQgZm9yIHpoZSBET00gdG8gbG9hZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm90b25DYXB0dXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmFyXCIpO1xuICBjb25zdCBkZWJ1Z0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc3RhZG9cIik7XG4gIGNvbnN0IGRlYnVnQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcbiAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZ2FuZG8uLi5cIjtcblxuICAvLyBJbmljaWFsaXphciBsb3MgYm90b25lcyBkZSBwcmVzZXRzXG4gIGNvbnNvbGUubG9nKFwiSW5pY2lhbGl6YW5kbyBwcmVzZXRzLi4uXCIpXG4gIGluaWNpYWxpemFyUHJlc2V0cygpO1xuICAvLyBDYXJnYXIgZXN0YWRvIGd1YXJkYWRvXG4gIGNvbnNvbGUubG9nKFwiSW5pY2lhbGl6YW5kbyBjYXJnYW5kb0VzdGFkby4uLlwiKVxuICBjYXJnYXJFc3RhZG8oKTtcbiAgY29uc29sZS5sb2coXCJFc3RhZG8gY2FyZ2FkbzpcIiwgbG9jYWxFc3RhZG8pO1xuICBcbiAgLy8gVmVyaWZpY2FyIHNpIGVzIGxhIHByaW1lcmEgdmV6IHF1ZSBzZSBhYnJlIGVsIHBvcHVwIGRlc2RlIGxhIGluaWNpYWxpemFjacOzblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY2hlY2stZmlyc3QtcG9wdXAtb3BlblwiLFxuICAgICAgdGFyZ2V0OiBcImJhY2tncm91bmRcIlxuICAgIH0pO1xuICAgIFxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5pc0ZpcnN0T3Blbikge1xuICAgICAgYXdhaXQgY2xlYXJTdG9yYWdlKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIEVycm9yIGFsIHZlcmlmaWNhciBwcmltZXJhIGFwZXJ0dXJhOlwiLCBlcnJvcik7XG4gIH1cblxuICBjYXJnYXJGaWx0cm9zKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcIm9mZnNjcmVlbi13YWtldXBcIiwgdGFyZ2V0OiBcImJhY2tncm91bmRcIiB9KTtcblxuICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8gXCI7XG4gICAgb3Blbk9mZnNjcmVlblBvcnQoKTtcbiAgfSBlbHNlIHtcbiAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkFjdGl2YXIgQXVkaW8gXCI7XG4gIH1cblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgLy8gY29uZXhpb24gUDJQXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJvZmZzY3JlZW4tYWxpdmVcIikge1xuICAgICAgaWYgKCFvZmZzY3JlZW5Qb3J0KSB7XG4gICAgICAgIGF3YWl0IG9wZW5PZmZzY3JlZW5Qb3J0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkZWJ1Z0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGVidWcgYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVidWdnaW5nLi4uXCI7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImRlYnVnXCIgLCB0YWJJZDogYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKX0pO1xuICB9KTtcblxuICBib3RvbkNhcHR1cmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG5cbiAgICBpZiAoIWxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImVudHJlIGlzQWN0aXZlXCIpXG4gICAgICBpZiAoIXRhYi51cmwuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBTEVSVFwiKVxuICAgICAgICBhbGVydChcIltwb3B1cF0gTm8gc2UgcHVlZGUgY2FwdHVyYXIgZXN0YSBwZXN0YcOxYS4gQWJyw60gdW5hIHDDoWdpbmEgd2ViIGNvbiBhdWRpbyBcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmVhbUlkID0gYXdhaXQgY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7IHRhcmdldFRhYklkOiB0YWJJZCB9KTtcbiAgICAgIGNvbnN0IGVxVmFsb3JlcyA9IHt9XG4gICAgICBpZiAoc3RhdGljRmlsdGVyaW5nKSB7XG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgZXFWYWxvcmVzW2ZpbHRlcl0gPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbHRlcikudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzdGFydC1wcm9jZXNzaW5nXCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQsXG4gICAgICAgIHN0cmVhbUlkLFxuICAgICAgICBsZXZlbDogZGJUb0dhaW4ocGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikudmFsdWUpKSxcbiAgICAgICAgLi4uZXFWYWxvcmVzLFxuICAgICAgfSk7XG4gICAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8gXCI7XG4gICAgICBzYXZlVmFsdWUoXCJjYXB0dXJpbmdBdWRpb1wiLCB0cnVlKTtcbiAgICAgIGlmIChvZmZzY3JlZW5Qb3J0KSB7XG4gICAgICAgIG9mZnNjcmVlblBvcnQucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInN0YXJ0LXN0cmVhbVwiLCB0YWJJZCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IG9wZW5PZmZzY3JlZW5Qb3J0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5JTkddIE9wZW5lZCBvZmZzY3JlZW4gcG9ydCBiZWNhdXNlIGl0IHdhcyBjbG9zZWRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghb2Zmc2NyZWVuUG9ydCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltXQVJOSU5HXSBObyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiRGV0ZW5pZW5kbyBhdWRpby4uLlwiICsgZGVidWdfY291bnRlcisrO1xuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInN0b3AtcHJvY2Vzc2luZ1wiLFxuICAgICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICAgIHRhYklkLFxuICAgICAgfSk7XG4gICAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkFjdGl2YXIgQXVkaW8gXCI7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShsb29wcyk7XG4gICAgICBsb29wcyA9IG51bGw7XG4gICAgICBzYXZlVmFsdWUoXCJjYXB0dXJpbmdBdWRpb1wiLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcblxuICAvLyBBZ3JlZ2FyIGV2ZW50byBwYXJhIGVsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1tb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWN0dWFsaXphciBlc3RpbG9zIGRlIGxvcyBmaWx0cm9zIGN1YW5kbyBjYW1iaWUgZWwgdGVtYVxuICAgIGFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zKCk7XG4gICAgXG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcblxuICAvLyBJbmljaWFsaXphciBlbCB0ZXh0byBkZWwgdm9sdW1lblxuICBjb25zdCB2b2x1bWVuU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuXCIpO1xuICBpZiAodm9sdW1lblNsaWRlcikge1xuICAgIHVwZGF0ZVZvbHVtZVRleHQodm9sdW1lblNsaWRlci52YWx1ZSk7XG4gIH1cblxuICAvLyBBZ3JlZ2FyIGV2ZW50byBwYXJhIGVsIHNsaWRlciBkZSB2b2x1bWVuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lblwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgY29uc3Qgdm9sdW1lblZhbHVlID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgXG4gICAgLy8gQWN0dWFsaXphciBlbCB0ZXh0byBxdWUgbXVlc3RyYSBlbCB2YWxvciBlbiBkQlxuICAgIHVwZGF0ZVZvbHVtZVRleHQodm9sdW1lblZhbHVlKTtcbiAgICBcbiAgICAvLyBFbnZpYXIgZWwgbWVuc2FqZSBwYXJhIGFqdXN0YXIgZWwgdm9sdW1lblxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiYWp1c3Rhci12b2x1bWVuXCIsXG4gICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICB0YWJJZCxcbiAgICAgIGxldmVsOiBkYlRvR2Fpbih2b2x1bWVuVmFsdWUpLCAvLyBDb252ZXJ0aXIgZEIgYSBnYW5hbmNpYVxuICAgIH0pO1xuICAgIFxuICAgIC8vIEd1YXJkYXIgZWwgZXN0YWRvIGRlbCB2b2x1bWVuXG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcblxuICBmaWx0ZXJzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJhanVzdGFyLWZpbHRyb1wiLFxuICAgICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICAgIHRhYklkLFxuICAgICAgICBiYW5kYTogaWQsXG4gICAgICAgIHZhbG9yOiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgIH0pO1xuICAgICAgZ3VhcmRhckVzdGFkbygpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBJbmljaWFsaXphciBjb250cm9sZXMgZGVsIGNvbXByZXNvclxuICBpbmljaWFsaXphckNvbXByZXNvcigpO1xufSk7XG5cbndpbmRvdy5nZXRBY3RpdmVUYWJJZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgcmV0dXJuIHRhYi5pZDtcbn07XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnKSA9PiB7XG4gIGlmIChtc2cudHlwZSA9PT0gXCJ2aXN1YWxpemVyLWRhdGFcIiAmJiBtc2cuZGF0YSkge1xuICAgIGRyYXdWaXN1YWxpemVyKG1zZy5kYXRhKTtcbiAgfVxufSk7XG5cblxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVWaXN1YWxpemVyKCkge1xuICBhc3luYyBmdW5jdGlvbiBsb29wKCkge1xuICAgIGlmIChvZmZzY3JlZW5Qb3J0KSB7XG4gICAgICBvZmZzY3JlZW5Qb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJnaXZlLW1lLXZpelwiLFxuICAgICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICAgIHRhYklkOiBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIltwb3B1cF0gTm8gaGF5IHB1ZXJ0byBvZmZzY3JlZW5cIik7XG4gICAgICBhbGVydChcIltwb3B1cF0gTm8gaGF5IHB1ZXJ0byBvZmZzY3JlZW5cIik7XG4gICAgICBlc3RhZG8udGV4dENvbnRlbnQgPSBcIm5vIGhheSBwdWVydG8gb2Zmc2NyZWVuXCI7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIGxvb3BzID0gaWQ7XG4gIH1cbiAgbG9vcCgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuT2Zmc2NyZWVuUG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICAgIG9mZnNjcmVlblBvcnQgPSBjaHJvbWUucnVudGltZS5jb25uZWN0KHsgbmFtZTogXCJwb3B1cC12aXN1YWxpemVyXCJ9KTtcbiAgICBlc3RhZG8udGV4dENvbnRlbnQgPSBcIkNvbmVjdGFkbyBhbCBvZmZzY3JlZW5cIjtcbiAgICBvZmZzY3JlZW5Qb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiwgdGFiSWQgfSk7XG5cbiAgICBvZmZzY3JlZW5Qb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBlc3RhZG8udGV4dENvbnRlbnQgPSBcIkRlc2NvbmVjdGFkbyBkZWwgb2Zmc2NyZWVuXCI7XG4gICAgfSk7XG5cbiAgICBvZmZzY3JlZW5Qb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJ2aXN1YWxpemVyLWRhdGFcIikge1xuICAgICAgICBkcmF3VmlzdWFsaXplcihtZXNzYWdlLmRhdGEpO1xuICAgICAgfSBcbiAgICAgIGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJzdGFydC1zdHJlYW1cIikge1xuICAgICAgICB1cGRhdGVWaXN1YWxpemVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXN0YWRvLnRleHRDb250ZW50ID0gXCJFcnJvciBhbCBjb25lY3RhciBhbCBvZmZzY3JlZW5cIjtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BPUFVQXSBFcnJvciBhbCBjb25lY3RhciBhbCBvZmZzY3JlZW46XCIsIGVycm9yKTtcbiAgfVxufVxuXG4vLyBGdW5jacOzbiBwYXJhIGluaWNpYWxpemFyIGxvcyBjb250cm9sZXMgZGUgcHJlc2V0c1xuZnVuY3Rpb24gaW5pY2lhbGl6YXJQcmVzZXRzKCkge1xuICBjb25zdCBndWFyZGFyUHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1YXJkYXItcHJlc2V0Jyk7XG4gIGNvbnN0IGNhcmdhclByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJnYXItcHJlc2V0Jyk7XG4gIGNvbnN0IGVsaW1pbmFyUHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsaW1pbmFyLXByZXNldCcpO1xuICBjb25zdCBwcmVzZXROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LW5hbWUnKTtcbiAgY29uc3QgcHJlc2V0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldC1zZWxlY3QnKTtcblxuICAvLyBDYXJnYXIgcHJlc2V0cyBleGlzdGVudGVzXG4gIGNhcmdhckxpc3RhUHJlc2V0cygpO1xuXG4gIC8vIEV2ZW50byBwYXJhIGd1YXJkYXIgcHJlc2V0XG4gIGd1YXJkYXJQcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgbm9tYnJlUHJlc2V0ID0gcHJlc2V0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgaW5ncmVzYSB1biBub21icmUgcGFyYSBlbCBwcmVzZXQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPYnRlbmVyIGNvbmZpZ3VyYWNpw7NuIGFjdHVhbFxuICAgIGNvbnN0IGNvbmZpZ3VyYWNpb24gPSBvYnRlbmVyQ29uZmlndXJhY2lvbkFjdHVhbCgpO1xuICAgIFxuICAgIC8vIEd1YXJkYXIgZW4gc3RvcmFnZVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3ByZXNldHMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcHJlc2V0cyA9IHJlc3VsdC5wcmVzZXRzIHx8IHt9O1xuICAgICAgcHJlc2V0c1tub21icmVQcmVzZXRdID0gY29uZmlndXJhY2lvbjtcbiAgICAgIFxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcHJlc2V0cyB9LCAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KGBQcmVzZXQgXCIke25vbWJyZVByZXNldH1cIiBndWFyZGFkbyBjb3JyZWN0YW1lbnRlYCk7XG4gICAgICAgIHByZXNldE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBjYXJnYXJMaXN0YVByZXNldHMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBFdmVudG8gcGFyYSBjYXJnYXIgcHJlc2V0XG4gIGNhcmdhclByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBub21icmVQcmVzZXQgPSBwcmVzZXRTZWxlY3QudmFsdWU7XG4gICAgaWYgKG5vbWJyZVByZXNldCA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIHNlbGVjY2lvbmEgdW4gcHJlc2V0IHBhcmEgY2FyZ2FyJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgICBjb25zdCBjb25maWd1cmFjaW9uID0gcHJlc2V0c1tub21icmVQcmVzZXRdO1xuICAgICAgXG4gICAgICBpZiAoY29uZmlndXJhY2lvbikge1xuICAgICAgICBhcGxpY2FyQ29uZmlndXJhY2lvbihjb25maWd1cmFjaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcmVzZXQgY2FyZ2FkbzpcIiwgY29uZmlndXJhY2lvbik7XG4gICAgICAgIGFsZXJ0KGBQcmVzZXQgXCIke25vbWJyZVByZXNldH1cIiBjYXJnYWRvIGNvcnJlY3RhbWVudGVgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGBFcnJvcjogTm8gc2UgZW5jb250csOzIGVsIHByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEV2ZW50byBwYXJhIGVsaW1pbmFyIHByZXNldFxuICBlbGltaW5hclByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBub21icmVQcmVzZXQgPSBwcmVzZXRTZWxlY3QudmFsdWU7XG4gICAgaWYgKG5vbWJyZVByZXNldCA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIHNlbGVjY2lvbmEgdW4gcHJlc2V0IHBhcmEgZWxpbWluYXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlybShgwr9Fc3TDoXMgc2VndXJvIGRlIHF1ZSBkZXNlYXMgZWxpbWluYXIgZWwgcHJlc2V0IFwiJHtub21icmVQcmVzZXR9XCI/YCkpIHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3ByZXNldHMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgICAgIFxuICAgICAgICBpZiAocHJlc2V0c1tub21icmVQcmVzZXRdKSB7XG4gICAgICAgICAgZGVsZXRlIHByZXNldHNbbm9tYnJlUHJlc2V0XTtcbiAgICAgICAgICBcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcmVzZXRzIH0sICgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGBQcmVzZXQgXCIke25vbWJyZVByZXNldH1cIiBlbGltaW5hZG8gY29ycmVjdGFtZW50ZWApO1xuICAgICAgICAgICAgY2FyZ2FyTGlzdGFQcmVzZXRzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoYEVycm9yOiBObyBzZSBlbmNvbnRyw7MgZWwgcHJlc2V0IFwiJHtub21icmVQcmVzZXR9XCJgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZGJUb0dhaW4iLCJsb2NhbEVzdGFkbyIsImNvbXByZXNvckFjdGl2byIsImNvbXByZXNvclBhcmFtcyIsImVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbiIsIl94IiwiX2VudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbiIsIl9jYWxsZWUiLCJjb25maWciLCJ0YWJJZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRBY3RpdmVUYWJJZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInRhcmdldCIsImxldmVsIiwidm9sdW1lbiIsImVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IiLCJfZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvciIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY2FwdHVyaW5nQXVkaW8iLCJhY3Rpdm8iLCJwYXJhbXMiLCJ0aHJlc2hvbGQiLCJyYXRpbyIsImtuZWUiLCJhdHRhY2siLCJyZWxlYXNlIiwic2V0Q29tcHJlc29yQWN0aXZvIiwic2V0Q29tcHJlc29yUGFyYW0iLCJndWFyZGFyRXN0YWRvIiwiaW5pY2lhbGl6YXJDb21wcmVzb3IiLCJjb21wcmVzb3JBY3Rpdm9DaGVja2JveCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJzZUZsb2F0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrZWQiLCJhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInRpcG8iLCJ2YWxvciIsInZhbG9yRWxlbWVudCIsImNvbmNhdCIsInRleHRDb250ZW50IiwiYXR0YWNrTXMiLCJ0b0ZpeGVkIiwicmVsZWFzZU1zIiwiYWN0aXZlRnJlcXVlbmN5TWFya2VyIiwiYWN0aXZlUU1hcmtlciIsInN0YXRpY0ZpbHRlcmluZyIsImZpbHRlcnMiLCJzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIiLCJmcmVxdWVuY3kiLCJnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIiLCJzZXRBY3RpdmVRTWFya2VyIiwicSIsImdldEFjdGl2ZVFNYXJrZXIiLCJnZXRDb21wcmVzb3JBY3Rpdm8iLCJwYXJhbSIsImdldENvbXByZXNvclBhcmFtIiwiTUlOX0ZSRVEiLCJNQVhfRlJFUSIsIk9DVEFWRV9SQU5HRSIsIk1hdGgiLCJsb2cyIiwiZmlsdHJvc0FjdGl2b3MiLCJib3RvbkFncmVnYXJGaWx0cm8iLCJpZCIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJmaWx0cm8iLCJmcmVxIiwiZ2FpbiIsImJ5cGFzcyIsImNyZWFyRmlsdHJvQ2FyZCIsImVudmlhckFjdHVhbGl6YWNpb24iLCJndWFyZGFyRmlsdHJvcyIsInNsaWRlclRvRnJlcSIsInNsaWRlclZhbHVlIiwicm91bmQiLCJwb3ciLCJmcmVxVG9TbGlkZXIiLCJjb250ZW5lZG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImlzRGFya01vZGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvblRleHRDb2xvciIsInN0eWxlIiwiY3NzVGV4dCIsImlubmVySFRNTCIsImZyZXFTbGlkZXIiLCJxdWVyeVNlbGVjdG9yIiwiZnJlcVZhbHVlIiwiY3VycmVudFRhcmdldCIsImZyZWN1ZW5jaWEiLCJ0b1N0cmluZyIsInFTbGlkZXIiLCJxVmFsdWUiLCJnYWluU2xpZGVyIiwiZ2FpblZhbHVlIiwiYnlwYXNzQ2hlY2tib3giLCJlbGltaW5hckJ0biIsInJlbW92ZSIsImZpbHRlciIsImZpbHRyb0lkIiwiZmlsdHJvc0NvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiX2VudmlhckFjdHVhbGl6YWNpb24iLCJ0MCIsInQxIiwidDIiLCJ0MyIsInQ0IiwidDUiLCJ0NiIsInQ3Iiwic3RvcmFnZSIsImxvY2FsIiwic2V0IiwiZmlsdHJvc0RpbmFtaWNvcyIsImNhcmdhckZpbHRyb3MiLCJnZXQiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwib2JzZXJ2YXJDYW1iaW9zVGVtYSIsImFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zIiwiZmlsdHJvQ2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZCIsImJhY2tncm91bmQiLCJjb2xvciIsImRhcmtNb2RlQ2hlY2tib3giLCJhcGxpY2FyQ29uZmlndXJhY2lvbiIsIl9hcGxpY2FyQ29uZmlndXJhY2lvbiIsInZvbHVtZW5TbGlkZXIiLCJ0aHJlc2hvbGRTbGlkZXIiLCJyYXRpb1NsaWRlciIsImtuZWVTbGlkZXIiLCJhdHRhY2tTbGlkZXIiLCJyZWxlYXNlU2xpZGVyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidXBkYXRlVm9sdW1lVGV4dCIsImRhcmtNb2RlIiwiYWRkIiwiY29tcHJlc29yIiwiZmlsdGVyc01vZHVsZSIsImRiVmFsdWUiLCJ2b2x1bWVWYWx1ZUVsZW1lbnQiLCJvYnRlbmVyQ29uZmlndXJhY2lvbkFjdHVhbCIsImNvbmZJbnRlcmZhY2UiLCJmaWx0cm9zRWxlbWVudHMiLCJmaWx0cm9FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJmcmVjdWVuY2lhSW5wdXQiLCJxSW5wdXQiLCJnYW5hbmNpYUlucHV0IiwiYnlwYXNzSW5wdXQiLCJmZCIsImRhdGFzZXQiLCJnYW5hbmNpYSIsImNvbXByZXNvckNoZWNrYm94IiwidGhyZXNob2xkSW5wdXQiLCJyYXRpb0lucHV0Iiwia25lZUlucHV0IiwiYXR0YWNrSW5wdXQiLCJyZWxlYXNlSW5wdXQiLCJzYXZlVmFsdWUiLCJ2YWx1ZU5hbWUiLCJlc3RhZG8iLCJjYXJnYXJFc3RhZG8iLCJib3RvbkFjdGl2YXIiLCJnYWluQXVkaW8iLCJ2b2x1bWVuX3ZhbHVlIiwiZGFya19tb2RlX2VuYWJsZWQiLCJjb21wcmVzb3JfYWN0aXZvIiwiY2FyZ2FyTGlzdGFQcmVzZXRzIiwicHJlc2V0U2VsZWN0Iiwib3B0aW9ucyIsInJlc3VsdCIsInByZXNldHMiLCJub21icmVQcmVzZXQiLCJvcHRpb24iLCJjbGVhclN0b3JhZ2UiLCJfY2xlYXJTdG9yYWdlIiwiY2xlYXIiLCJzbW9vdGhQb2ludHMiLCJwb2ludHMiLCJ3aW5kb3dTaXplIiwiY2FudmFzV2lkdGgiLCJzbW9vdGhlZCIsImFkYXB0aXZlV2luZG93IiwibWF4IiwiZmxvb3IiLCJ4IiwiaGFsZldpbmRvdyIsInN0YXJ0SWR4IiwiZW5kSWR4IiwibWluIiwic3VtWSIsImoiLCJhdmdZIiwiZGIiLCJkcmF3VmlzdWFsaXplciIsInByZURhdGEiLCJtaWREYXRhIiwicG9zdERhdGEiLCJtaW5EZWNpYmVscyIsIm1heERlY2liZWxzIiwiY2FudmFzIiwiY3R4IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJnZXRDb250ZXh0IiwiYnVmZmVyTGVuZ3RoIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm5vcm1hbGl6ZURiIiwiY2xhbXBlZERiIiwiZm9udCIsImZyZXFMYWJlbHMiLCJpbmRleCIsIm9jdGF2ZSIsInRvdGFsT2N0YXZlcyIsIm9mZnNldEZhY3RvciIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFRleHQiLCJkYkxhYmVscyIsInByZVBvaW50cyIsIm1pZFBvaW50cyIsInBvc3RQb2ludHMiLCJmcmVxUmF0aW8iLCJueXF1aXN0RnJlcSIsImxpbmVhckZyZXEiLCJzbW9vdGhlZFByZVBvaW50cyIsInNtb290aGVkTWlkUG9pbnRzIiwic21vb3RoZWRQb3N0UG9pbnRzIiwic2hhZG93Qmx1ciIsInNoYWRvd09mZnNldFgiLCJzaGFkb3dPZmZzZXRZIiwic2hhZG93Q29sb3IiLCJwb2ludCIsImNsb3NlUGF0aCIsImZpbGwiLCJsZWdlbmRZIiwibGVnZW5kU3BhY2luZyIsInFTY2FsZSIsImNlbnRlclgiLCJwb2ludFgiLCJsb2cxMCIsInJlc3BvbnNlIiwic3FydCIsInBvaW50WSIsIm9mZnNjcmVlblBvcnQiLCJsb29wcyIsImRlYnVnX2NvdW50ZXIiLCJzZW5kTWVzc2FnZVByb21pc2UiLCJtZXNzYWdlIiwicmVqZWN0IiwibGFzdEVycm9yIiwiYm90b25DYXB0dXJhIiwiZGVidWdMYWJlbCIsImRlYnVnQnV0dG9uIiwiaW5pY2lhbGl6YXJQcmVzZXRzIiwiaXNGaXJzdE9wZW4iLCJvcGVuT2Zmc2NyZWVuUG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiX3JlZjIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJfeDIiLCJfeDMiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUyIiwidGFiIiwic3RyZWFtSWQiLCJlcVZhbG9yZXMiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiX3NsaWNlZFRvQXJyYXkiLCJ1cmwiLCJzdGFydHNXaXRoIiwiYWxlcnQiLCJ0YWJDYXB0dXJlIiwiZ2V0TWVkaWFTdHJlYW1JZCIsInRhcmdldFRhYklkIiwiX29iamVjdFNwcmVhZCIsInBvc3RNZXNzYWdlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJfcmVmNSIsInZvbHVtZW5WYWx1ZSIsIl94NCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsIl9yZWY2IiwiYmFuZGEiLCJfeDUiLCJ3aW5kb3ciLCJfY2FsbGVlNyIsIl95aWVsZCRjaHJvbWUkdGFicyRxdTMiLCJfeWllbGQkY2hyb21lJHRhYnMkcXU0IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwibXNnIiwidXBkYXRlVmlzdWFsaXplciIsIl91cGRhdGVWaXN1YWxpemVyIiwiX2NhbGxlZTkiLCJsb29wIiwiX2xvb3AiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJfbG9vcDMiLCJfY2FsbGVlOCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsImFzc2VydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9sb29wMiIsIl9vcGVuT2Zmc2NyZWVuUG9ydCIsIl9jYWxsZWUxMCIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwiY29ubmVjdCIsIm9uRGlzY29ubmVjdCIsImd1YXJkYXJQcmVzZXRCdG4iLCJjYXJnYXJQcmVzZXRCdG4iLCJlbGltaW5hclByZXNldEJ0biIsInByZXNldE5hbWVJbnB1dCIsInRyaW0iLCJjb25maWd1cmFjaW9uIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=