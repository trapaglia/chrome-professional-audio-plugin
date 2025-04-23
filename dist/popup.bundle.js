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
          botonCaptura.textContent = "Detener Audio 🔇";
          openOffscreenPort();
        } else {
          botonCaptura.textContent = "Activar Audio 🎤";
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
                botonCaptura.textContent = "Detener Audio 🔇";
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
                botonCaptura.textContent = "Activar Audio 🎤";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNoRCxJQUFNdUssWUFBWSxHQUFHSixZQUFZLENBQUM5UyxLQUFLO0lBQ3ZDLElBQUlrVCxZQUFZLEtBQUssRUFBRSxFQUFFO01BQ3ZCK0csS0FBSyxDQUFDLCtDQUErQyxDQUFDO01BQ3REO0lBQ0Y7SUFFQSxJQUFJK0MsT0FBTywyREFBQW5ULE1BQUEsQ0FBb0RxSixZQUFZLFFBQUksQ0FBQyxFQUFFO01BQ2hGbE0sTUFBTSxDQUFDOEgsT0FBTyxDQUFDQyxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQUM2RCxNQUFNLEVBQUs7UUFDaEQsSUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSUEsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRTtVQUN6QixPQUFPRCxPQUFPLENBQUNDLFlBQVksQ0FBQztVQUU1QmxNLE1BQU0sQ0FBQzhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUM7WUFBRWlFLE9BQU8sRUFBUEE7VUFBUSxDQUFDLEVBQUUsWUFBTTtZQUMxQ2dILEtBQUssYUFBQXBRLE1BQUEsQ0FBWXFKLFlBQVksK0JBQTJCLENBQUM7WUFDekRMLG9FQUFrQixDQUFDLENBQUM7VUFDdEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0xvSCxLQUFLLHlDQUFBcFEsTUFBQSxDQUFxQ3FKLFlBQVksT0FBRyxDQUFDO1FBQzVEO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tbXVuaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tcHJlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvZmlsdGVyc19pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL3N0YXRlX21lbW9yeS50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy92aXN1YWxpemVyLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGJUb0dhaW4gfSBmcm9tIFwiLi91dGlscy50c1wiO1xuaW1wb3J0IHsgQ29uZmlndXJhY2lvbkludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZS50c1wiO1xuaW1wb3J0IHsgbG9jYWxFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGNvbXByZXNvckFjdGl2bywgY29tcHJlc29yUGFyYW1zIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgZW52aWFyIGxhIGNvbmZpZ3VyYWNpw7NuIGFsIG9mZnNjcmVlblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbihjb25maWc6IENvbmZpZ3VyYWNpb25JbnRlcmZhY2UpIHtcbiAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICBcbiAgLy8gRW52aWFyIGNvbmZpZ3VyYWNpw7NuIGRlbCB2b2x1bWVuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICB0eXBlOiBcImFqdXN0YXItdm9sdW1lblwiLFxuICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICB0YWJJZCxcbiAgICBsZXZlbDogZGJUb0dhaW4oY29uZmlnLnZvbHVtZW4pXG4gIH0pO1xuICBcbiAgLy8gRW52aWFyIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3JcbiAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGVudmlhciBsYSBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yIGFsIHNjcmlwdCBvZmZzY3JlZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCkge1xuICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJhanVzdGFyLWNvbXByZXNvclwiLFxuICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgdGFiSWQsXG4gICAgICBhY3Rpdm86IGNvbXByZXNvckFjdGl2byxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0aHJlc2hvbGQ6IGNvbXByZXNvclBhcmFtcy50aHJlc2hvbGQsXG4gICAgICAgIHJhdGlvOiBjb21wcmVzb3JQYXJhbXMucmF0aW8sXG4gICAgICAgIGtuZWU6IGNvbXByZXNvclBhcmFtcy5rbmVlLFxuICAgICAgICBhdHRhY2s6IGNvbXByZXNvclBhcmFtcy5hdHRhY2ssXG4gICAgICAgIHJlbGVhc2U6IGNvbXByZXNvclBhcmFtcy5yZWxlYXNlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBzZXRDb21wcmVzb3JBY3Rpdm8sIGdldENvbXByZXNvckFjdGl2bywgc2V0Q29tcHJlc29yUGFyYW0sIGdldENvbXByZXNvclBhcmFtLCBjb21wcmVzb3JBY3Rpdm8sIGNvbXByZXNvclBhcmFtcyB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW1wb3J0IHsgZ3VhcmRhckVzdGFkbywgbG9jYWxFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IgfSBmcm9tIFwiLi9jb21tdW5pY2F0aW9ucy50c1wiO1xuXG5cbmV4cG9ydCB0eXBlIENvbXByZXNvciA9IHtcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIGtuZWU6IG51bWJlcjtcbiAgICBhdHRhY2s6IG51bWJlcjtcbiAgICByZWxlYXNlOiBudW1iZXI7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgaW5pY2lhbGl6YXIgbG9zIGNvbnRyb2xlcyBkZWwgY29tcHJlc29yXG5leHBvcnQgZnVuY3Rpb24gaW5pY2lhbGl6YXJDb21wcmVzb3IoKSB7XG4gIGNvbnN0IGNvbXByZXNvckFjdGl2b0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXByZXNvci1hY3Rpdm8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIWNvbXByZXNvckFjdGl2b0NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgY29tcHJlc29yIGFjdGl2b1wiKTtcbiAgY29uc3QgdGhyZXNob2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVzaG9sZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghdGhyZXNob2xkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHRocmVzaG9sZFwiKTtcbiAgY29uc3QgcmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXJhdGlvKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJhdGlvXCIpO1xuICBjb25zdCBrbmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIWtuZWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUga25lZVwiKTtcbiAgY29uc3QgYXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghYXR0YWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGF0dGFja1wiKTtcbiAgY29uc3QgcmVsZWFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxlYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFyZWxlYXNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJlbGVhc2VcIik7XG4gIFxuICAvLyBBY3R1YWxpemFyIHZhbG9yZXMgbW9zdHJhZG9zXG4gIHNldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRocmVzaG9sZC52YWx1ZSkpO1xuICBzZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nLCBwYXJzZUZsb2F0KHJhdGlvLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdrbmVlJywgcGFyc2VGbG9hdChrbmVlLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdhdHRhY2snLCBwYXJzZUZsb2F0KGF0dGFjay52YWx1ZSkpO1xuICBzZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScsIHBhcnNlRmxvYXQocmVsZWFzZS52YWx1ZSkpO1xuICBcbiAgLy8gRXZlbnQgbGlzdGVuZXJzIHBhcmEgY2FtYmlvcyBlbiBsb3MgY29udHJvbGVzXG4gIGNvbXByZXNvckFjdGl2b0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIHNldENvbXByZXNvckFjdGl2byh0aGlzLmNoZWNrZWQpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAgdGhyZXNob2xkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgndGhyZXNob2xkJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICByYXRpby5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigncmF0aW8nLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIGtuZWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ2tuZWUnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgna25lZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAgYXR0YWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdhdHRhY2snLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgnYXR0YWNrJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICByZWxlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyZWxlYXNlJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgc2V0Q29tcHJlc29yUGFyYW0oJ3JlbGVhc2UnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBhY3R1YWxpemFyIGxvcyB2YWxvcmVzIG1vc3RyYWRvcyBkZWwgY29tcHJlc29yXG5leHBvcnQgZnVuY3Rpb24gYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKHRpcG86IGtleW9mIENvbXByZXNvciwgdmFsb3I6IG51bWJlcikge1xuICBjb25zdCB2YWxvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aXBvfS12YWx1ZWApIGFzIEhUTUxFbGVtZW50O1xuICBcbiAgc3dpdGNoKHRpcG8pIHtcbiAgICBjYXNlICd0aHJlc2hvbGQnOlxuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsb3J9IGRCYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JhdGlvJzpcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbG9yfToxYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2tuZWUnOlxuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsb3J9IGRCYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAvLyBDb252ZXJ0aXIgYSBtaWxpc2VndW5kb3MgcGFyYSBtZWpvciBsZWdpYmlsaWRhZFxuICAgICAgY29uc3QgYXR0YWNrTXMgPSAodmFsb3IgKiAxMDAwKS50b0ZpeGVkKDApO1xuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7YXR0YWNrTXN9IG1zYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlbGVhc2UnOlxuICAgICAgLy8gQ29udmVydGlyIGEgbWlsaXNlZ3VuZG9zIHBhcmEgbWVqb3IgbGVnaWJpbGlkYWRcbiAgICAgIGNvbnN0IHJlbGVhc2VNcyA9ICh2YWxvciAqIDEwMDApLnRvRml4ZWQoMCk7XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtyZWxlYXNlTXN9IG1zYDtcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wcmVzb3IsIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvciB9IGZyb20gXCIuL2NvbXByZXNzb3IudHNcIjtcbmV4cG9ydCBsZXQgYWN0aXZlRnJlcXVlbmN5TWFya2VyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBsZXQgYWN0aXZlUU1hcmtlcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5leHBvcnQgbGV0IGNvbXByZXNvckFjdGl2bzogYm9vbGVhbiA9IGZhbHNlO1xuZXhwb3J0IGxldCBzdGF0aWNGaWx0ZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJzID0gW1wic3ViXCIsIFwiYmFzc1wiLCBcImxvd01pZFwiLCBcIm1pZFwiLCBcImhpZ2hNaWRcIiwgXCJoaWdoXCIsIFwiYWlyXCJdO1xuZXhwb3J0IGxldCBjb21wcmVzb3JQYXJhbXM6IENvbXByZXNvciA9IHtcbiAgdGhyZXNob2xkOiAtMjQsXG4gIHJhdGlvOiA0LFxuICBrbmVlOiAzMCxcbiAgYXR0YWNrOiAwLjAwMyxcbiAgcmVsZWFzZTogMC4yNVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmcmVxdWVuY3k6IG51bWJlciB8IG51bGwpIHsgYWN0aXZlRnJlcXVlbmN5TWFya2VyID0gZnJlcXVlbmN5OyB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKCkgeyByZXR1cm4gYWN0aXZlRnJlcXVlbmN5TWFya2VyOyB9XG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlUU1hcmtlcihxOiBudW1iZXIgfCBudWxsKSB7IGFjdGl2ZVFNYXJrZXIgPSBxOyB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlUU1hcmtlcigpIHsgcmV0dXJuIGFjdGl2ZVFNYXJrZXI7IH0gICAgXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcHJlc29yQWN0aXZvKGFjdGl2bzogYm9vbGVhbikgeyBjb21wcmVzb3JBY3Rpdm8gPSBhY3Rpdm87IH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wcmVzb3JBY3Rpdm8oKSB7IHJldHVybiBjb21wcmVzb3JBY3Rpdm87IH1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wcmVzb3JQYXJhbShwYXJhbToga2V5b2YgQ29tcHJlc29yLCB2YWx1ZTogbnVtYmVyKSB7IFxuICAgIGNvbXByZXNvclBhcmFtc1twYXJhbV0gPSB2YWx1ZTsgXG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKHBhcmFtLCB2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcHJlc29yUGFyYW0ocGFyYW06IGtleW9mIENvbXByZXNvcikgeyByZXR1cm4gY29tcHJlc29yUGFyYW1zW3BhcmFtXTsgfVxuIiwiaW1wb3J0IHsgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyLCBzZXRBY3RpdmVRTWFya2VyIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5cbmNvbnN0IE1JTl9GUkVRID0gMjA7ICAgIC8vIDIwIEh6XG5jb25zdCBNQVhfRlJFUSA9IDIwMDAwOyAvLyAyMCBrSHpcbmNvbnN0IE9DVEFWRV9SQU5HRSA9IE1hdGgubG9nMihNQVhfRlJFUSAvIE1JTl9GUkVRKTsgLy8gQXByb3hpbWFkYW1lbnRlIDEwIG9jdGF2YXNcblxudHlwZSBGaWx0cm8gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmcmVxOiBudW1iZXI7XG4gICAgcTogbnVtYmVyO1xuICAgIGdhaW46IG51bWJlcjtcbiAgICBieXBhc3M6IGJvb2xlYW47XG59O1xuXG5sZXQgZmlsdHJvc0FjdGl2b3M6IEZpbHRyb1tdID0gW107XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBib3RvbkFncmVnYXJGaWx0cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFncmVnYXItZmlsdHJvXCIpO1xuICAgIGlmICghYm90b25BZ3JlZ2FyRmlsdHJvKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBib3TDs24gZGUgYWdyZWdhciBmaWx0cm9cIik7XG4gICAgfVxuICAgIGJvdG9uQWdyZWdhckZpbHRyby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIGNvbnN0IGZpbHRybyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGZyZXE6IDEwMDAsXG4gICAgICAgIHE6IDUsXG4gICAgICAgIGdhaW46IDAsXG4gICAgICAgIGJ5cGFzczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY3JlYXJGaWx0cm9DYXJkKGZpbHRybyk7XG4gICAgICAgIGZpbHRyb3NBY3Rpdm9zLnB1c2goZmlsdHJvKTtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgIH0pO1xufSk7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY29udmVydGlyIHZhbG9yIGRlbCBzbGlkZXIgKDAtMTAwKSBhIGZyZWN1ZW5jaWEgKDIwLTIwMDAwIEh6KSBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuZnVuY3Rpb24gc2xpZGVyVG9GcmVxKHNsaWRlclZhbHVlOiBudW1iZXIpIHtcbiAgICAvLyBDb252ZXJ0aXIgZWwgdmFsb3IgZGVsIHNsaWRlciAoMC0xMDApIGEgdW4gdmFsb3IgZW4gZXNjYWxhIGRlIG9jdGF2YXMgZW50cmUgMjBIeiB5IDIwa0h6XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTUlOX0ZSRVEgKiBNYXRoLnBvdygyLCAoc2xpZGVyVmFsdWUgLyAxMDApICogT0NUQVZFX1JBTkdFKSk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY29udmVydGlyIGZyZWN1ZW5jaWEgKDIwLTIwMDAwIEh6KSBhIHZhbG9yIGRlbCBzbGlkZXIgKDAtMTAwKSBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuZnVuY3Rpb24gZnJlcVRvU2xpZGVyKGZyZXE6IG51bWJlcikge1xuICAgIC8vIENvbnZlcnRpciBsYSBmcmVjdWVuY2lhIGEgdW4gdmFsb3IgZGUgc2xpZGVyICgwLTEwMCkgdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKE1hdGgubG9nMihmcmVxIC8gTUlOX0ZSRVEpIC8gT0NUQVZFX1JBTkdFKSAqIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWFyRmlsdHJvQ2FyZChmaWx0cm86IEZpbHRybykge1xuICAgIGNvbnN0IGNvbnRlbmVkb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmICghY29udGVuZWRvcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNvbnRlbmVkb3IgZGUgZmlsdHJvc1wiKSA7XG4gICAgY29udGVuZWRvci5jbGFzc05hbWUgPSBcImZpbHRyby1jYXJkXCI7XG4gICAgY29udGVuZWRvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGZpbHRyby5pZCk7XG5cbiAgICAvLyBWZXJpZmljYXIgc2kgZWwgbW9kbyBvc2N1cm8gZXN0w6EgYWN0aXZvXG4gICAgY29uc3QgaXNEYXJrTW9kZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKTtcbiAgICBjb25zdCBiZ0NvbG9yID0gaXNEYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZjVmNWZmXCI7XG4gICAgY29uc3QgdGV4dENvbG9yID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGlzRGFya01vZGUgPyBcIiM0YTJhMmFcIiA6IFwiI2ZmZGNkY1wiO1xuICAgIGNvbnN0IGJ1dHRvblRleHRDb2xvciA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIFxuICAgIC8vIEFjdHVhbGl6YXIgZWwgZXN0aWxvIGNvbiBsb3MgY29sb3JlcyBhcHJvcGlhZG9zXG4gICAgY29udGVuZWRvci5zdHlsZS5jc3NUZXh0ID0gYHBhZGRpbmc6IDdweDsgYmFja2dyb3VuZDogJHtiZ0NvbG9yfTsgYm9yZGVyLXJhZGl1czogMTBweDsgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgY29sb3I6ICR7dGV4dENvbG9yfTtgO1xuICAgIFxuICAgIGNvbnRlbmVkb3IuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzcHg7XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJieXBhc3MtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW46IDA7XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiYnlwYXNzLWNoZWNrYm94XCIgJHtmaWx0cm8uYnlwYXNzID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDVweDsgZm9udC1zaXplOiAwLjg1ZW07XCI+QnlwYXNzPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlbGltaW5hclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtidXR0b25CZ0NvbG9yfTsgY29sb3I6ICR7YnV0dG9uVGV4dENvbG9yfTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA1MCU7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTRweDtcIj7DlzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7IGdyaWQtZ2FwOiAycHggOHB4OyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXNpemU6IDAuOWVtO1wiPlxuICAgICAgICAgICAgPGRpdj5GcmVxIChIeik8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgc3RlcD1cIjFcIiB2YWx1ZT1cIiR7ZnJlcVRvU2xpZGVyKGZpbHRyby5mcmVxKX1cIiBjbGFzcz1cImZyZXFcIiBzdHlsZT1cImZsZXg6IDE7IG1hcmdpbjogMCA1cHggMCAwO1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnJlcS12YWx1ZVwiIHN0eWxlPVwibWluLXdpZHRoOiA0MHB4OyB0ZXh0LWFsaWduOiByaWdodDtcIj4ke2ZpbHRyby5mcmVxfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwLjFcIiBtYXg9XCIxMFwiIHN0ZXA9XCIwLjFcIiB2YWx1ZT1cIiR7ZmlsdHJvLnF9XCIgY2xhc3M9XCJxXCIgc3R5bGU9XCJmbGV4OiAxOyBtYXJnaW46IDAgNXB4IDAgMDtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInEtdmFsdWVcIiBzdHlsZT1cIm1pbi13aWR0aDogNDBweDsgdGV4dC1hbGlnbjogcmlnaHQ7XCI+JHtmaWx0cm8ucX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5HYWluIChkQik8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCItMzBcIiBtYXg9XCIzMFwiIHN0ZXA9XCIxXCIgdmFsdWU9XCIke2ZpbHRyby5nYWlufVwiIGNsYXNzPVwiZ2FpblwiIHN0eWxlPVwiZmxleDogMTsgbWFyZ2luOiAwIDVweCAwIDA7XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnYWluLXZhbHVlXCIgc3R5bGU9XCJtaW4td2lkdGg6IDQwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1wiPiR7ZmlsdHJvLmdhaW59PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCBmcmVxU2xpZGVyID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmZyZXFcIik7XG4gICAgaWYgKCFmcmVxU2xpZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGZyZWN1ZW5jaWFcIik7XG4gICAgY29uc3QgZnJlcVZhbHVlID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmZyZXEtdmFsdWVcIik7XG4gICAgaWYgKCFmcmVxVmFsdWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCB2YWxvciBkZSBmcmVjdWVuY2lhXCIpO1xuICAgIGZyZXFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBmcmVjdWVuY2lhID0gc2xpZGVyVG9GcmVxKHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIGZyZXFWYWx1ZS50ZXh0Q29udGVudCA9IGZyZWN1ZW5jaWEudG9TdHJpbmcoKTtcbiAgICAgICAgZmlsdHJvLmZyZXEgPSBmcmVjdWVuY2lhO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmaWx0cm8uZnJlcSk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgZnJlcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmaWx0cm8uZnJlcSk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgZnJlcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihudWxsKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHFTbGlkZXIgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIucVwiKTtcbiAgICBpZiAoIXFTbGlkZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgUVwiKTtcbiAgICBjb25zdCBxVmFsdWUgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIucS12YWx1ZVwiKTtcbiAgICBpZiAoIXFWYWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIFFcIik7XG4gICAgcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHEgPSBwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIHFWYWx1ZS50ZXh0Q29udGVudCA9IHEudG9TdHJpbmcoKTtcbiAgICAgICAgZmlsdHJvLnEgPSBxO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihmaWx0cm8uZnJlcSk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIoZmlsdHJvLnEpO1xuICAgIH0pO1xuXG4gICAgcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihudWxsKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdhaW5TbGlkZXIgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZ2FpblwiKTtcbiAgICBpZiAoIWdhaW5TbGlkZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgZ2FpblwiKTtcbiAgICBjb25zdCBnYWluVmFsdWUgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZ2Fpbi12YWx1ZVwiKTtcbiAgICBpZiAoIWdhaW5WYWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIGdhaW5cIik7XG4gICAgZ2FpblNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGdhaW4gPSBwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSk7XG4gICAgICAgIGdhaW5WYWx1ZS50ZXh0Q29udGVudCA9IGdhaW4udG9TdHJpbmcoKTtcbiAgICAgICAgZmlsdHJvLmdhaW4gPSBnYWluO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZ3JlZ2FyIGV2ZW50byBwYXJhIGVsIGNoZWNrYm94IGRlIGJ5cGFzc1xuICAgIGNvbnN0IGJ5cGFzc0NoZWNrYm94ID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmJ5cGFzcy1jaGVja2JveFwiKTtcbiAgICBpZiAoIWJ5cGFzc0NoZWNrYm94KSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgYnlwYXNzXCIpO1xuICAgIGJ5cGFzc0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGZpbHRyby5ieXBhc3MgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZWxpbWluYXJCdG4gPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZWxpbWluYXJcIik7XG4gICAgaWYgKCFlbGltaW5hckJ0bikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGJvdMOzbiBkZSBlbGltaW5hclwiKTtcbiAgICBlbGltaW5hckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb250ZW5lZG9yLnJlbW92ZSgpO1xuICAgICAgICBmaWx0cm9zQWN0aXZvcyA9IGZpbHRyb3NBY3Rpdm9zLmZpbHRlcihmID0+IGYuaWQgIT09IGZpbHRyby5pZCk7XG4gICAgICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICAgICAgXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWxpbWluYXItZmlsdHJvLWRpbmFtaWNvXCIsXG4gICAgICAgICAgICBmaWx0cm9JZDogZmlsdHJvLmlkLFxuICAgICAgICAgICAgdGFiSWQ6IHRhYklkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKG51bGwpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKG51bGwpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdHJvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdHJvcy1jb250YWluZXJcIik7XG4gICAgaWYgKCFmaWx0cm9zQ29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY29udGVuZWRvciBkZSBmaWx0cm9zXCIpO1xuICAgIGZpbHRyb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVuZWRvcik7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm86IEZpbHRybykge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiYWN0dWFsaXphci1maWx0cm8tZGluYW1pY29cIixcbiAgICAgIGZpbHRyb0lkOiBmaWx0cm8uaWQsXG4gICAgICBmcmVxOiBmaWx0cm8uZnJlcSxcbiAgICAgIHE6IGZpbHRyby5xLFxuICAgICAgZ2FpbjogZmlsdHJvLmdhaW4sXG4gICAgICBieXBhc3M6IGZpbHRyby5ieXBhc3MsXG4gICAgICB0YWJJZDogYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKVxuICAgIH0pO1xuICB9XG5cbmZ1bmN0aW9uIGd1YXJkYXJGaWx0cm9zKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGZpbHRyb3NEaW5hbWljb3M6IGZpbHRyb3NBY3Rpdm9zIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FyZ2FyRmlsdHJvcygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJmaWx0cm9zRGluYW1pY29zXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZmlsdHJvc0RpbmFtaWNvcykpIHtcbiAgICAgICAgICAgIGZpbHRyb3NBY3Rpdm9zID0gZGF0YS5maWx0cm9zRGluYW1pY29zO1xuICAgICAgICAgICAgZmlsdHJvc0FjdGl2b3MuZm9yRWFjaChmaWx0cm8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzZWd1cmFyc2UgZGUgcXVlIGVsIGZpbHRybyB0ZW5nYSBsYSBwcm9waWVkYWQgYnlwYXNzXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRyby5ieXBhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0cm8uYnlwYXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNyZWFyRmlsdHJvQ2FyZChmaWx0cm8pO1xuICAgICAgICAgICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2YXJDYW1iaW9zVGVtYSgpO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGFjdHVhbGl6YXIgbG9zIGZpbHRyb3MgY3VhbmRvIGNhbWJpYSBlbCB0ZW1hXG5mdW5jdGlvbiBhY3R1YWxpemFyRXN0aWxvRmlsdHJvcygpIHtcbiAgICBjb25zdCBpc0RhcmtNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpO1xuICAgIGNvbnN0IGZpbHRyb0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5maWx0cm8tY2FyZCcpO1xuICAgIFxuICAgIGZpbHRyb0NhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IGJnQ29sb3IgPSBpc0RhcmtNb2RlID8gXCIjMmEyYTJhXCIgOiBcIiNmNWY1ZmZcIjtcbiAgICAgICAgY29uc3QgdGV4dENvbG9yID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgICAgIFxuICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yO1xuICAgICAgICBjYXJkLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWxpbWluYXJCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZWxpbWluYXInKTtcbiAgICAgICAgaWYgKGVsaW1pbmFyQnRuKSB7XG4gICAgICAgICAgICBlbGltaW5hckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gaXNEYXJrTW9kZSA/IFwiIzRhMmEyYVwiIDogXCIjZmZkY2RjXCI7XG4gICAgICAgICAgICBlbGltaW5hckJ0bi5zdHlsZS5jb2xvciA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIE9ic2VydmFyIGNhbWJpb3MgZW4gZWwgdGVtYVxuZnVuY3Rpb24gb2JzZXJ2YXJDYW1iaW9zVGVtYSgpIHtcbiAgICAvLyBBw7FhZGlyIGV2ZW50IGxpc3RlbmVyIGFsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKTtcbiAgICBpZiAoZGFya01vZGVDaGVja2JveCkge1xuICAgICAgICBkYXJrTW9kZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zKTtcbiAgICB9XG59XG5cbi8vIHRvIGRvOiBcbi8vIDEuIHF1ZSBjdWFuZG8gc2UgZGVzYWN0aXZlIGVsIGF1ZGlvLCBsYXMgYmFycmFzIGNhaWdhbiBjb24gZ3JhY2lhXG4vLyAyLiBoYWNlciBhbmRhciBlbCB2b2x1bWVuXG4vLyAzLiB2ZXIgcG9ycXVlIG5vIHNlIGNhcmdhIGVsIGF1ZGlvIHZvbHVtZW4gY3VhbmRvIGRlc2FjdGl2byB5IHJlYWN0aXZvIGVsIGF1ZGlvKHBlcm8gc2kgZWwgc2xpZGVyKSIsImltcG9ydCB7IGd1YXJkYXJFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGNvbXByZXNvclBhcmFtcywgc2V0Q29tcHJlc29yQWN0aXZvIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgeyBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IgfSBmcm9tIFwiLi9jb21wcmVzc29yLnRzXCI7XG5pbXBvcnQgeyBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuIH0gZnJvbSBcIi4vY29tbXVuaWNhdGlvbnMudHNcIjtcblxuLy8gRnVuY2nDs24gcGFyYSBhcGxpY2FyIHVuYSBjb25maWd1cmFjacOzbiBjYXJnYWRhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBsaWNhckNvbmZpZ3VyYWNpb24oY29uZmlnOiBDb25maWd1cmFjaW9uSW50ZXJmYWNlKSB7XG4gIGNvbnNvbGUubG9nKFwiQXBsaWNhbmRvIGNvbmZpZ3VyYWNpw7NuOlwiLCBjb25maWcpO1xuICBcbiAgLy8gQXBsaWNhciB2b2x1bWVuXG4gIGNvbnN0IHZvbHVtZW5TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghdm9sdW1lblNsaWRlcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIE5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdm9sdW1lblwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdm9sdW1lblNsaWRlci52YWx1ZSA9IGNvbmZpZy52b2x1bWVuLnRvU3RyaW5nKCk7XG4gIHVwZGF0ZVZvbHVtZVRleHQoY29uZmlnLnZvbHVtZW4pO1xuICBcbiAgLy8gQXBsaWNhciBtb2RvIG9zY3Vyb1xuICBjb25zdCBkYXJrTW9kZUNoZWNrYm94IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoY29uZmlnLmRhcmtNb2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICBkYXJrTW9kZUNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgZGFya01vZGVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gIH1cbiAgXG4gIC8vIEFwbGljYXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICBjb25zdCBjb21wcmVzb3JBY3Rpdm9DaGVja2JveCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHRocmVzaG9sZFNsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmF0aW9TbGlkZXIgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGlvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3Qga25lZVNsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGF0dGFja1NsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmVsZWFzZVNsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIFxuICBjb21wcmVzb3JBY3Rpdm9DaGVja2JveC5jaGVja2VkID0gY29uZmlnLmNvbXByZXNvci5hY3Rpdm87XG4gIHNldENvbXByZXNvckFjdGl2byhjb25maWcuY29tcHJlc29yLmFjdGl2byk7XG4gIFxuICB0aHJlc2hvbGRTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLnRocmVzaG9sZC50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMudGhyZXNob2xkID0gY29uZmlnLmNvbXByZXNvci50aHJlc2hvbGQ7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigndGhyZXNob2xkJywgY29uZmlnLmNvbXByZXNvci50aHJlc2hvbGQpO1xuICBcbiAgcmF0aW9TbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLnJhdGlvLnRvU3RyaW5nKCk7XG4gIGNvbXByZXNvclBhcmFtcy5yYXRpbyA9IGNvbmZpZy5jb21wcmVzb3IucmF0aW87XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigncmF0aW8nLCBjb25maWcuY29tcHJlc29yLnJhdGlvKTtcbiAgXG4gIGtuZWVTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLmtuZWUudG9TdHJpbmcoKTtcbiAgY29tcHJlc29yUGFyYW1zLmtuZWUgPSBjb25maWcuY29tcHJlc29yLmtuZWU7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigna25lZScsIGNvbmZpZy5jb21wcmVzb3Iua25lZSk7XG4gIFxuICBhdHRhY2tTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLmF0dGFjay50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMuYXR0YWNrID0gY29uZmlnLmNvbXByZXNvci5hdHRhY2s7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcignYXR0YWNrJywgY29uZmlnLmNvbXByZXNvci5hdHRhY2spO1xuICBcbiAgcmVsZWFzZVNsaWRlci52YWx1ZSA9IGNvbmZpZy5jb21wcmVzb3IucmVsZWFzZS50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMucmVsZWFzZSA9IGNvbmZpZy5jb21wcmVzb3IucmVsZWFzZTtcbiAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyZWxlYXNlJywgY29uZmlnLmNvbXByZXNvci5yZWxlYXNlKTtcbiAgXG4gIC8vIExpbXBpYXIgZmlsdHJvcyBkaW7DoW1pY29zIGFjdHVhbGVzXG4gIGNvbnN0IGZpbHRyb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdHJvcy1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKCFmaWx0cm9zQ29udGFpbmVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIGNvbnRlbmVkb3IgZGUgZmlsdHJvcyBkaW7DoW1pY29zXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBmaWx0cm9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBcbiAgLy8gSW1wb3J0YXIgbGEgZnVuY2nDs24gbmVjZXNhcmlhIHBhcmEgY3JlYXIgZmlsdHJvc1xuICB0cnkge1xuICAgIGlmIChjb25maWcuZmlsdHJvc0RpbmFtaWNvcyAmJiBjb25maWcuZmlsdHJvc0RpbmFtaWNvcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBHdWFyZGFyIGxvcyBmaWx0cm9zIGVuIGVsIHN0b3JhZ2UgbG9jYWwgcGFyYSBxdWUgY2FyZ2FyRmlsdHJvcyBsb3MgZW5jdWVudHJlXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBmaWx0cm9zRGluYW1pY29zOiBjb25maWcuZmlsdHJvc0RpbmFtaWNvcyB9LCBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIEltcG9ydGFyIGVsIG3Ds2R1bG8geSBsbGFtYXIgYSBjYXJnYXJGaWx0cm9zXG4gICAgICAgIGNvbnN0IGZpbHRlcnNNb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vZmlsdGVyc19pbnRlcmZhY2UudHMnKTtcbiAgICAgICAgZmlsdGVyc01vZHVsZS5jYXJnYXJGaWx0cm9zKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbnZpYXIgY29uZmlndXJhY2nDs24gYWwgb2Zmc2NyZWVuIHNpIGVzdMOhIGNhcHR1cmFuZG8gYXVkaW9cbiAgICAgICAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICAgICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaSBubyBoYXkgZmlsdHJvcywgc29sbyBlbnZpYXIgbGEgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvciB5IHZvbHVtZW5cbiAgICAgIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgICAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4oY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGNhcmdhciBsb3MgZmlsdHJvczpcIiwgZXJyb3IpO1xuICB9XG4gIFxuICAvLyBHdWFyZGFyIGVsIGVzdGFkbyBhY3R1YWxpemFkb1xuICBndWFyZGFyRXN0YWRvKCk7XG59XG5cbi8vIEFjdHVhbGl6YXIgZWwgdGV4dG8gZGVsIHZhbG9yIGRlIHZvbHVtZW4gZW4gZEJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWb2x1bWVUZXh0KGRiVmFsdWU6IG51bWJlcikge1xuICBjb25zdCB2b2x1bWVWYWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW4tdmFsdWVcIik7XG4gIGlmICh2b2x1bWVWYWx1ZUVsZW1lbnQpIHtcbiAgICB2b2x1bWVWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYlZhbHVlfSBkQmA7XG4gIH1cbn1cblxudHlwZSBGaWx0cm9EaW5hbWljbyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGZyZWN1ZW5jaWE6IG51bWJlcjtcbiAgICBxOiBudW1iZXI7XG4gICAgZ2FuYW5jaWE6IG51bWJlcjtcbiAgICBieXBhc3M6IGJvb2xlYW47XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgb2J0ZW5lciBsYSBjb25maWd1cmFjacOzbiBhY3R1YWxcbmV4cG9ydCBmdW5jdGlvbiBvYnRlbmVyQ29uZmlndXJhY2lvbkFjdHVhbCgpOiBDb25maWd1cmFjaW9uSW50ZXJmYWNlIHtcbiAgICBsZXQgY29uZkludGVyZmFjZTogQ29uZmlndXJhY2lvbkludGVyZmFjZSA9IHtcbiAgICAgICAgdm9sdW1lbjogMCxcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvczogW10sXG4gICAgICAgIGNvbXByZXNvcjoge1xuICAgICAgICAgICAgYWN0aXZvOiBmYWxzZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAga25lZTogMCxcbiAgICAgICAgICAgIGF0dGFjazogMC4xLFxuICAgICAgICAgICAgcmVsZWFzZTogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIGRhcmtNb2RlOiBmYWxzZVxuICAgIH07XG5cbiAgLy8gT2J0ZW5lciB2YWxvcmVzIGRlIHZvbHVtZW5cbiAgY29uc3Qgdm9sdW1lblNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWVuJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCF2b2x1bWVuU2xpZGVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICAgIHJldHVybiBjb25mSW50ZXJmYWNlO1xuICB9IGVsc2UgY29uZkludGVyZmFjZS52b2x1bWVuID0gcGFyc2VGbG9hdCh2b2x1bWVuU2xpZGVyLnZhbHVlKTtcbiAgXG4gIC8vIE9idGVuZXIgdmFsb3JlcyBkZSBmaWx0cm9zIGRpbsOhbWljb3NcbiAgY29uc3QgZmlsdHJvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0cm9zLWNvbnRhaW5lcicpO1xuICBpZiAoIWZpbHRyb3NDb250YWluZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBObyBzZSBlbmNvbnRyw7MgZWwgY29udGVuZWRvciBkZSBmaWx0cm9zIGRpbsOhbWljb3NcIik7XG4gICAgcmV0dXJuIGNvbmZJbnRlcmZhY2U7XG4gIH1cbiAgY29uc3QgZmlsdHJvc0VsZW1lbnRzID0gZmlsdHJvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdHJvLWRpbmFtaWNvJyk7XG4gIFxuICBjb25zdCBmaWx0cm9zRGluYW1pY29zOiBGaWx0cm9EaW5hbWljb1tdID0gW107XG4gIGZpbHRyb3NFbGVtZW50cy5mb3JFYWNoKGZpbHRyb0VsZW1lbnQgPT4ge1xuICAgIGlmICghKGZpbHRyb0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gRWxlbWVudG8gZGUgZmlsdHJvIG5vIGVzIHVuIEhUTUxFbGVtZW50XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZyZWN1ZW5jaWFJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaWx0cm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmVjdWVuY2lhJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBxSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZmlsdHJvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZ2FuYW5jaWFJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaWx0cm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW5hbmNpYScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYnlwYXNzSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZmlsdHJvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnlwYXNzJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBmZCA6IEZpbHRyb0RpbmFtaWNvID0ge1xuICAgICAgaWQ6IGZpbHRyb0VsZW1lbnQuZGF0YXNldC5pZCB8fCAnJyxcbiAgICAgIGZyZWN1ZW5jaWE6IHBhcnNlRmxvYXQoZnJlY3VlbmNpYUlucHV0LnZhbHVlKSxcbiAgICAgIHE6IHBhcnNlRmxvYXQocUlucHV0LnZhbHVlKSxcbiAgICAgIGdhbmFuY2lhOiBwYXJzZUZsb2F0KGdhbmFuY2lhSW5wdXQudmFsdWUpLFxuICAgICAgYnlwYXNzOiBieXBhc3NJbnB1dC5jaGVja2VkXG4gICAgfTtcbiAgICBmaWx0cm9zRGluYW1pY29zLnB1c2goZmQpO1xuICB9KTtcbiAgXG4gIC8vIE9idGVuZXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICBjb25zdCBjb21wcmVzb3JDaGVja2JveCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGNvbXByZXNvckFjdGl2byA6IGJvb2xlYW4gPSBjb21wcmVzb3JDaGVja2JveC5jaGVja2VkO1xuICBjb25zdCB0aHJlc2hvbGRJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmF0aW9JbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBrbmVlSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBhdHRhY2tJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmVsZWFzZUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxlYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgXG4gIGNvbmZJbnRlcmZhY2UgPSB7XG4gICAgdm9sdW1lbjogcGFyc2VGbG9hdCh2b2x1bWVuU2xpZGVyLnZhbHVlKSxcbiAgICBmaWx0cm9zRGluYW1pY29zLFxuICAgIGNvbXByZXNvcjoge1xuICAgICAgYWN0aXZvOiBjb21wcmVzb3JBY3Rpdm8sXG4gICAgICB0aHJlc2hvbGQ6IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpLFxuICAgICAgcmF0aW86IHBhcnNlRmxvYXQocmF0aW9JbnB1dC52YWx1ZSksXG4gICAgICBrbmVlOiBwYXJzZUZsb2F0KGtuZWVJbnB1dC52YWx1ZSksXG4gICAgICBhdHRhY2s6IHBhcnNlRmxvYXQoYXR0YWNrSW5wdXQudmFsdWUpLFxuICAgICAgcmVsZWFzZTogcGFyc2VGbG9hdChyZWxlYXNlSW5wdXQudmFsdWUpXG4gICAgfSxcbiAgICBkYXJrTW9kZTogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpXG4gIH07XG5cbiAgcmV0dXJuIGNvbmZJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhY2lvbkludGVyZmFjZSB7XG4gIHZvbHVtZW46IG51bWJlcjtcbiAgZmlsdHJvc0RpbmFtaWNvczogRmlsdHJvRGluYW1pY29bXTtcbiAgY29tcHJlc29yOiB7XG4gICAgYWN0aXZvOiBib29sZWFuO1xuICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAga25lZTogbnVtYmVyO1xuICAgIGF0dGFjazogbnVtYmVyO1xuICAgIHJlbGVhc2U6IG51bWJlcjtcbiAgfTtcbiAgZGFya01vZGU6IGJvb2xlYW47XG59IiwiaW1wb3J0IHsgZ2V0Q29tcHJlc29yQWN0aXZvLCBnZXRDb21wcmVzb3JQYXJhbSwgc2V0Q29tcHJlc29yQWN0aXZvLCBzZXRDb21wcmVzb3JQYXJhbSwgc3RhdGljRmlsdGVyaW5nLCBcbiAgICBmaWx0ZXJzXG4gfSBmcm9tIFwiLi9jb25maWcudHNcIjtcbmludGVyZmFjZSBFc3RhZG9Nb2RzIHtcbiAgICBjYXB0dXJpbmdBdWRpbzogYm9vbGVhbjtcbiAgICBkYXJrTW9kZTogYm9vbGVhbjtcbiAgICBjb21wcmVzb3I6IHtcbiAgICAgICAgYWN0aXZvOiBib29sZWFuO1xuICAgICAgICB0aHJlc2hvbGQ6IG51bWJlcjtcbiAgICAgICAgcmF0aW86IG51bWJlcjtcbiAgICAgICAga25lZTogbnVtYmVyO1xuICAgICAgICBhdHRhY2s6IG51bWJlcjtcbiAgICAgICAgcmVsZWFzZTogbnVtYmVyO1xuICAgIH07XG4gICAgZ2FpbkF1ZGlvOiBudW1iZXI7XG59O1xudHlwZSBlbGVtZW50b0d1YXJkYWRvID0ga2V5b2YgRXN0YWRvTW9kczsgLy8gXCJjYXB0dXJpbmdBdWRpb1wiIHwgXCJkYXJrTW9kZVwiIHwgXCJjb21wcmVzb3JcIiB8IFwiZ2FpbkF1ZGlvXCJcbmV4cG9ydCBsZXQgbG9jYWxFc3RhZG86IEVzdGFkb01vZHMgPSB7fSBhcyBFc3RhZG9Nb2RzO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVmFsdWU8VCBleHRlbmRzIGVsZW1lbnRvR3VhcmRhZG8+KHZhbHVlTmFtZTogVCwgdmFsdWU6IGFueSkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImVzdGFkb1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBlc3RhZG86IEVzdGFkb01vZHMgPSBkYXRhLmVzdGFkbyB8fCB7fSBhcyBFc3RhZG9Nb2RzO1xuICAgICAgICBlc3RhZG9bdmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBlc3RhZG8gfSk7XG4gICAgfSk7XG4gICAgbG9jYWxFc3RhZG9bdmFsdWVOYW1lXSA9IHZhbHVlO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNhcmdhciBlbCBlc3RhZG8gZ3VhcmRhZG9cbmV4cG9ydCBmdW5jdGlvbiBjYXJnYXJFc3RhZG8oKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImVzdGFkb1wiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuZXN0YWRvKSB7XG4gICAgICBjb25zdCBlc3RhZG8gPSBkYXRhLmVzdGFkbyBhcyBFc3RhZG9Nb2RzO1xuICAgICAgbG9jYWxFc3RhZG8gPSBlc3RhZG87XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIEVzdGFkbyBjYXJnYWRvOlwiLCBlc3RhZG8pO1xuXG4gICAgICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICAgICAgY29uc3QgYm90b25BY3RpdmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmFyXCIpO1xuICAgICAgICBpZiAoIWJvdG9uQWN0aXZhcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGJvdMOzbiBkZSBhY3RpdmFyXCIpO1xuICAgICAgICBib3RvbkFjdGl2YXIudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8g8J+Uh1wiO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDYXJnYXIgdm9sdW1lblxuICAgICAgaWYgKGVzdGFkby5nYWluQXVkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2b2x1bWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICghdm9sdW1lbikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICAgICAgICB2b2x1bWVuLnZhbHVlID0gZXN0YWRvLmdhaW5BdWRpby50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB2b2x1bWVuX3ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuLXZhbHVlXCIpO1xuICAgICAgICBpZiAoIXZvbHVtZW5fdmFsdWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCB2YWxvciBkZSB2b2x1bWVuXCIpO1xuICAgICAgICB2b2x1bWVuX3ZhbHVlLnRleHRDb250ZW50ID0gYCR7ZXN0YWRvLmdhaW5BdWRpb30gZEJgO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDYXJnYXIgbW9kbyBvc2N1cm9cbiAgICAgIGlmIChlc3RhZG8uZGFya01vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZXN0YWRvLmRhcmtNb2RlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgICBjb25zdCBkYXJrX21vZGVfZW5hYmxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghZGFya19tb2RlX2VuYWJsZWQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBtb2RvIG9zY3Vyb1wiKTtcbiAgICAgICAgICBkYXJrX21vZGVfZW5hYmxlZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgICAgICAgIGNvbnN0IGRhcmtfbW9kZV9lbmFibGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFkYXJrX21vZGVfZW5hYmxlZCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXCIpO1xuICAgICAgICAgIGRhcmtfbW9kZV9lbmFibGVkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDYXJnYXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3IpIHtcbiAgICAgICAgY29uc3QgY29tcHJlc29yX2FjdGl2byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wcmVzb3ItYWN0aXZvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKCFjb21wcmVzb3JfYWN0aXZvKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgY29tcHJlc29yIGFjdGl2b1wiKTtcbiAgICAgICAgY29tcHJlc29yX2FjdGl2by5jaGVja2VkID0gZXN0YWRvLmNvbXByZXNvci5hY3Rpdm87XG4gICAgICAgIHNldENvbXByZXNvckFjdGl2byhlc3RhZG8uY29tcHJlc29yLmFjdGl2byk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlc2hvbGQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghdGhyZXNob2xkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHRocmVzaG9sZFwiKTtcbiAgICAgICAgICB0aHJlc2hvbGQudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLnRocmVzaG9sZC50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRocmVzaG9sZC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5yYXRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgcmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghcmF0aW8pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmF0aW9cIik7XG4gICAgICAgICAgcmF0aW8udmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLnJhdGlvLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ3JhdGlvJywgcGFyc2VGbG9hdChyYXRpby52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5rbmVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBrbmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICgha25lZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBrbmVlXCIpO1xuICAgICAgICAgIGtuZWUudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLmtuZWUudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgna25lZScsIHBhcnNlRmxvYXQoa25lZS52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5hdHRhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGF0dGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2snKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghYXR0YWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGF0dGFja1wiKTtcbiAgICAgICAgICBhdHRhY2sudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLmF0dGFjay50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdhdHRhY2snLCBwYXJzZUZsb2F0KGF0dGFjay52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5yZWxlYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbGVhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghcmVsZWFzZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSByZWxlYXNlXCIpO1xuICAgICAgICAgIHJlbGVhc2UudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLnJlbGVhc2UudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScsIHBhcnNlRmxvYXQocmVsZWFzZS52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLy8gR3VhcmRhciB5IHJlc3RhdXJhciBlc3RhZG8gZGUgbG9zIDggc2xpZGVycyArIGVzdGFkbyBkZSBhdWRpb1xuZXhwb3J0IGZ1bmN0aW9uIGd1YXJkYXJFc3RhZG8oKSB7XG4gIGNvbnN0IHZvbHVtZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XG4gIGlmICghdm9sdW1lbikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICBjb25zdCBlc3RhZG86IEVzdGFkb01vZHMgPSB7IFxuICAgIGNhcHR1cmluZ0F1ZGlvOiBsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbyxcbiAgICBkYXJrTW9kZTogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpLFxuICAgIGNvbXByZXNvcjoge1xuICAgICAgYWN0aXZvOiBnZXRDb21wcmVzb3JBY3Rpdm8oKSxcbiAgICAgIHRocmVzaG9sZDogZ2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcpLFxuICAgICAgcmF0aW86IGdldENvbXByZXNvclBhcmFtKCdyYXRpbycpLFxuICAgICAga25lZTogZ2V0Q29tcHJlc29yUGFyYW0oJ2tuZWUnKSxcbiAgICAgIGF0dGFjazogZ2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycpLFxuICAgICAgcmVsZWFzZTogZ2V0Q29tcHJlc29yUGFyYW0oJ3JlbGVhc2UnKVxuICAgIH0sXG4gICAgZ2FpbkF1ZGlvOiBwYXJzZUZsb2F0KHZvbHVtZW4udmFsdWUpXG4gIH07XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwiZXN0YWRvXCI6IGVzdGFkbyB9KTtcbiAgY29uc29sZS5sb2coXCJbSU5GT10gRXN0YWRvIGd1YXJkYWRvOlwiLCBlc3RhZG8pO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNhcmdhciBsYSBsaXN0YSBkZSBwcmVzZXRzIGVuIGVsIHNlbGVjdG9yXG5leHBvcnQgZnVuY3Rpb24gY2FyZ2FyTGlzdGFQcmVzZXRzKCkge1xuICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBpZiAoIXByZXNldFNlbGVjdCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNlbGVjdG9yIGRlIHByZXNldHNcIik7XG4gIFxuICAvLyBMaW1waWFyIG9wY2lvbmVzIGFjdHVhbGVzXG4gIHdoaWxlIChwcmVzZXRTZWxlY3Qub3B0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgcHJlc2V0U2VsZWN0LnJlbW92ZSgxKTtcbiAgfVxuICBcbiAgLy8gQ2FyZ2FyIHByZXNldHMgZGVzZGUgc3RvcmFnZVxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydwcmVzZXRzJ10sIChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgXG4gICAgLy8gQWdyZWdhciBjYWRhIHByZXNldCBjb21vIHVuYSBvcGNpw7NuXG4gICAgT2JqZWN0LmtleXMocHJlc2V0cykuZm9yRWFjaChub21icmVQcmVzZXQgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBub21icmVQcmVzZXQ7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBub21icmVQcmVzZXQ7XG4gICAgICBwcmVzZXRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwiW0lORk9dIFByaW1lcmEgYXBlcnR1cmEgZGVsIHBvcHVwIGRlc2RlIGxhIGluaWNpYWxpemFjacOzbiAtIExpbXBpYW5kbyBzdG9yYWdlXCIpO1xuICAvLyBMaW1waWFyIHRvZGFzIGxhcyB2YXJpYWJsZXMgZ3VhcmRhZGFzXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XG4gIC8vIEd1YXJkYXIgcXVlIGVsIGF1ZGlvIGVzdMOhIGRlc2FjdGl2YWRvXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGNhcHR1cmluZ0F1ZGlvOiBmYWxzZSB9KTtcbiAgbG9jYWxFc3RhZG8gPSB7fSBhcyBFc3RhZG9Nb2RzO1xufSIsInR5cGUgUG9pbnQgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3RoUG9pbnRzKHBvaW50czogUG9pbnRbXSwgd2luZG93U2l6ZTogbnVtYmVyLCBjYW52YXNXaWR0aDogbnVtYmVyKTogUG9pbnRbXSB7XG4gIGlmIChwb2ludHMubGVuZ3RoIDw9IHdpbmRvd1NpemUpIHJldHVybiBwb2ludHM7XG5cbiAgY29uc3Qgc21vb3RoZWQ6IFBvaW50W10gPSBbXTtcblxuICBzbW9vdGhlZC5wdXNoKHBvaW50c1swXSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gY29uc3QgYWRhcHRpdmVXaW5kb3cgPSBNYXRoLm1pbihcbiAgICBjb25zdCBhZGFwdGl2ZVdpbmRvdyA9IE1hdGgubWF4KFxuICAgICAgMixcbiAgICAgIE1hdGguZmxvb3Iod2luZG93U2l6ZSAqIE1hdGgucG93KChwb2ludHNbaV0ueCAvIGNhbnZhc1dpZHRoKSwgMikgKiAzKVxuICAgICk7XG5cbiAgICBjb25zdCBoYWxmV2luZG93ID0gTWF0aC5mbG9vcihhZGFwdGl2ZVdpbmRvdyAvIDIpO1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gTWF0aC5tYXgoMCwgaSAtIGhhbGZXaW5kb3cpO1xuICAgIGNvbnN0IGVuZElkeCA9IE1hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgaGFsZldpbmRvdyk7XG5cbiAgICBsZXQgc3VtWSA9IDA7XG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0SWR4OyBqIDw9IGVuZElkeDsgaisrKSB7XG4gICAgICBzdW1ZICs9IHBvaW50c1tqXS55O1xuICAgIH1cblxuICAgIGNvbnN0IGF2Z1kgPSBzdW1ZIC8gKGVuZElkeCAtIHN0YXJ0SWR4ICsgMSk7XG4gICAgc21vb3RoZWQucHVzaCh7IHg6IHBvaW50c1tpXS54LCB5OiBhdmdZIH0pO1xuICB9XG5cbiAgaWYgKHBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgc21vb3RoZWQucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBzbW9vdGhlZDtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBjb252ZXJ0aXIgZEIgYSB2YWxvciBkZSBnYW5hbmNpYSBwYXJhIFdlYiBBdWRpbyBBUElcbmV4cG9ydCBmdW5jdGlvbiBkYlRvR2FpbihkYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KDEwLCBkYiAvIDIwKTtcbn0iLCJpbXBvcnQgeyBzbW9vdGhQb2ludHMgfSBmcm9tIFwiLi91dGlscy50c1wiO1xuaW1wb3J0IHsgZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyLCBnZXRBY3RpdmVRTWFya2VyIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5cbnR5cGUgVmlzdWFsaXplckRhdGEgPSB7XG4gICAgcHJlOiBudW1iZXJbXTtcbiAgICBtaWQ6IG51bWJlcltdO1xuICAgIHBvc3Q6IG51bWJlcltdO1xuICAgIG1pbkRlY2liZWxzOiBudW1iZXI7XG4gICAgbWF4RGVjaWJlbHM6IG51bWJlcjtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRyYXdWaXN1YWxpemVyKGRhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyW10gfCBudW1iZXIgfSkge1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdWaXN1YWxpemVyKGRhdGE6IFZpc3VhbGl6ZXJEYXRhKSB7XG4gIGNvbnN0IHByZURhdGE6IG51bWJlcltdID0gZGF0YVtcInByZVwiXSB8fCBbXTtcbiAgY29uc3QgbWlkRGF0YTogbnVtYmVyW10gPSBkYXRhW1wibWlkXCJdIHx8IFtdO1xuICBjb25zdCBwb3N0RGF0YTogbnVtYmVyW10gPSBkYXRhW1wicG9zdFwiXSB8fCBbXTtcbiAgY29uc3QgbWluRGVjaWJlbHM6IG51bWJlciA9IGRhdGFbXCJtaW5EZWNpYmVsc1wiXSB8fCAtMTAwO1xuICBjb25zdCBtYXhEZWNpYmVsczogbnVtYmVyID0gZGF0YVtcIm1heERlY2liZWxzXCJdIHx8IC0yNTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXN1YWxcIik7XG4gIGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xuICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJDcml0aWNhbDogQ2FudmFzIGNvbnRleHQgbm90IGZvdW5kIG9yICd2aXN1YWwnIGVsZW1lbnQgaXMgbm90IGEgY2FudmFzLlwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDcml0aWNhbDogJ3Zpc3VhbCcgZWxlbWVudCBpcyBub3QgYSBjYW52YXMuXCIpO1xuICB9XG5cbiAgY29uc3QgYnVmZmVyTGVuZ3RoID0gcHJlRGF0YS5sZW5ndGg7XG5cbiAgLy8gRGV0ZWN0YXIgc2kgZWwgbW9kbyBvc2N1cm8gZXN0w6EgYWN0aXZvXG4gIGNvbnN0IGlzRGFya01vZGUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyk7XG4gIFxuICAvLyBGb25kbyBhZGFwdGFkbyBhbCB0ZW1hIGFjdHVhbFxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjMTIxMjEyXCIgOiBcIiNmZWZlZmVcIjsgLy8gT3NjdXJvIG8gY2xhcm8gc2Vnw7puIGVsIHRlbWFcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgLy8gRnVuY2nDs24gcGFyYSBub3JtYWxpemFyIHZhbG9yZXMgZGUgZEIgYSBhbHR1cmEgZGUgYmFycmEgKDAtMSlcbiAgY29uc3Qgbm9ybWFsaXplRGIgPSAoZGJWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgLy8gTGltaXRhciBlbCB2YWxvciBlbnRyZSBtaW5EZWNpYmVscyB5IG1heERlY2liZWxzXG4gICAgY29uc3QgY2xhbXBlZERiID0gTWF0aC5tYXgobWluRGVjaWJlbHMsIE1hdGgubWluKG1heERlY2liZWxzLCBkYlZhbHVlKSk7XG4gICAgLy8gTm9ybWFsaXphciBhIHVuIHZhbG9yIGVudHJlIDAgeSAxXG4gICAgcmV0dXJuIChjbGFtcGVkRGIgLSBtaW5EZWNpYmVscykgLyAobWF4RGVjaWJlbHMgLSBtaW5EZWNpYmVscyk7XG4gIH07XG5cbiAgLy8gRGlidWphciBlc2NhbGEgZGUgZnJlY3VlbmNpYSBsb2dhcsOtdG1pY2FcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNhYWFhYWFcIiA6IFwiI2FhYVwiO1xuICBjdHguZm9udCA9IFwiMTBweCBBcmlhbFwiO1xuICBjb25zdCBmcmVxTGFiZWxzID0gWzMwLCA2MCwgMTIwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTcwMDBdO1xuICBmcmVxTGFiZWxzLmZvckVhY2goKGZyZXEsIGluZGV4KSA9PiB7XG4gICAgLy8gQ29udmVydGlyIGZyZWN1ZW5jaWEgYSBwb3NpY2nDs24gWCB1c2FuZG8gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmxvZzIoZnJlcSAvIDIwKTsgLy8gTsO6bWVybyBkZSBvY3RhdmFzIGRlc2RlIDIwSHpcbiAgICBjb25zdCB0b3RhbE9jdGF2ZXMgPSBNYXRoLmxvZzIoMTcwMDAgLyAyMCk7IC8vIEFwcm94aW1hZGFtZW50ZSA5Ljcgb2N0YXZhcyAoaGFzdGEgMTdrSHopXG4gICAgbGV0IHggPSAob2N0YXZlIC8gdG90YWxPY3RhdmVzKSAqIGNhbnZhcy53aWR0aDtcbiAgICBcbiAgICAvLyBBcGxpY2FyIG9mZnNldCBhIHRvZGFzIGxhcyBsw61uZWFzIGV4Y2VwdG8gbGEgw7psdGltYSAoMTdrSHopXG4gICAgaWYgKGluZGV4IDwgZnJlcUxhYmVscy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBvZmZzZXRGYWN0b3IgPSAxIC0gKGluZGV4IC8gKGZyZXFMYWJlbHMubGVuZ3RoIC0gMSkpO1xuICAgICAgeCArPSAxMCAqIG9mZnNldEZhY3RvcjtcbiAgICB9XG4gICAgXG4gICAgLy8gRGlidWphciBsw61uZWEgdmVydGljYWxcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjMzMzMzMzXCIgOiBcIiNkZGRcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICBjdHgubGluZVRvKHgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGV0aXF1ZXRhXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIGN0eC5maWxsVGV4dChmcmVxID49IDEwMDAgPyBgJHtmcmVxLzEwMDB9a2AgOiBmcmVxLnRvU3RyaW5nKCksIHggLSAxMCwgY2FudmFzLmhlaWdodCAtIDUpO1xuICB9KTtcblxuICAvLyBEaWJ1amFyIGVzY2FsYSBkZSBkQlxuICBjb25zdCBkYkxhYmVscyA9IFstOTAsIC04MCwgLTcwLCAtNjAsIC01MCwgLTQwLCAtMzBdO1xuICBkYkxhYmVscy5mb3JFYWNoKGRiID0+IHtcbiAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihkYikgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGzDrW5lYSBob3Jpem9udGFsXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gaXNEYXJrTW9kZSA/IFwiIzMzMzMzM1wiIDogXCIjZWVlXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIHkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGV0aXF1ZXRhXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIGN0eC5maWxsVGV4dChgJHtkYn0gZEJgLCA1LCB5ICsgMTIpO1xuICB9KTtcblxuICAvLyBDYWxjdWxhciBwb3NpY2lvbmVzIGRlIHB1bnRvcyBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuICBjb25zdCBwcmVQb2ludHMgPSBbXTtcbiAgY29uc3QgbWlkUG9pbnRzID0gW107IFxuICBjb25zdCBwb3N0UG9pbnRzID0gW107XG4gIFxuICAvLyBDcmVhciBwb3NpY2lvbmVzIGRlIHB1bnRvcyBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlckxlbmd0aDsgaSsrKSB7XG4gICAgLy8gQ2FsY3VsYW1vcyBsYSBmcmVjdWVuY2lhIGNvcnJlc3BvbmRpZW50ZSBhIGNhZGEgYmluIGRlIGxhIEZGVFxuICAgIC8vIExhIEZGVCBkaXZpZGUgZWwgcmFuZ28gZGUgZnJlY3VlbmNpYXMgZW4gcGFydGVzIGlndWFsZXMgKGxpbmVhbGVzKVxuICAgIC8vIFBlcm8gcXVlcmVtb3MgdmlzdWFsaXphcmxhcyBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIGNvbnN0IGZyZXFSYXRpbyA9IGkgLyBidWZmZXJMZW5ndGg7IC8vIFBvc2ljacOzbiByZWxhdGl2YSBlbiBlbCBhcnJheSAoMC0xKVxuICAgIGNvbnN0IG55cXVpc3RGcmVxID0gMjIwNTA7IC8vIEZyZWN1ZW5jaWEgbcOheGltYSByZXByZXNlbnRhYmxlIChzYW1wbGVSYXRlLzIpXG4gICAgXG4gICAgLy8gRnJlY3VlbmNpYSBsaW5lYWwgY29ycmVzcG9uZGllbnRlIGFsIGJpbiBpIGRlIGxhIEZGVFxuICAgIGNvbnN0IGxpbmVhckZyZXEgPSBmcmVxUmF0aW8gKiBueXF1aXN0RnJlcTtcbiAgICBcbiAgICAvLyBTb2xvIHByb2Nlc2Ftb3MgaGFzdGEgMTdrSHpcbiAgICBpZiAobGluZWFyRnJlcSA+IDE3MDAwKSBicmVhaztcbiAgICBcbiAgICAvLyBTb2xvIGluY2x1aW1vcyBmcmVjdWVuY2lhcyBkZXNkZSAyMEh6XG4gICAgaWYgKGxpbmVhckZyZXEgPCAyMCkgY29udGludWU7XG4gICAgXG4gICAgLy8gQ29udmVydGlyIGZyZWN1ZW5jaWEgYSBwb3NpY2nDs24gWCB1c2FuZG8gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmxvZzIobGluZWFyRnJlcSAvIDIwKTsgLy8gTsO6bWVybyBkZSBvY3RhdmFzIGRlc2RlIDIwSHpcbiAgICBjb25zdCB0b3RhbE9jdGF2ZXMgPSBNYXRoLmxvZzIoMTcwMDAgLyAyMCk7IC8vIEFwcm94aW1hZGFtZW50ZSA5Ljcgb2N0YXZhcyAoaGFzdGEgMTdrSHopXG4gICAgY29uc3QgeCA9IChvY3RhdmUgLyB0b3RhbE9jdGF2ZXMpICogY2FudmFzLndpZHRoICogMC45OTU7IC8vIFVzYXIgZWwgdmFsb3IgZXhhY3RvIGRlIG9jdGF2YXNcbiAgICBcbiAgICAvLyBBbG1hY2VuYXIgcHVudG9zIGNvbiBzdXMgdmFsb3JlcyBkZSBhbXBsaXR1ZFxuICAgIGlmIChpIDwgcHJlRGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC0gKG5vcm1hbGl6ZURiKHByZURhdGFbaV0pICogY2FudmFzLmhlaWdodCk7XG4gICAgICBwcmVQb2ludHMucHVzaCh7IHgsIHkgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIE51ZXZvOiBhbG1hY2VuYXIgcHVudG9zIHBhcmEgZWwgdmlzdWFsaXphZG9yIGludGVybWVkaW9cbiAgICBpZiAoaSA8IG1pZERhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihtaWREYXRhW2ldKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgbWlkUG9pbnRzLnB1c2goeyB4LCB5IH0pO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaSA8IHBvc3REYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIocG9zdERhdGFbaV0pICogY2FudmFzLmhlaWdodCk7XG4gICAgICBwb3N0UG9pbnRzLnB1c2goeyB4LCB5IH0pO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gQXBsaWNhciBzdWF2aXphZG8gYSBsb3MgcHVudG9zXG4gIGNvbnN0IHNtb290aGVkUHJlUG9pbnRzID0gc21vb3RoUG9pbnRzKHByZVBvaW50cywgNywgY2FudmFzLndpZHRoKTtcbiAgY29uc3Qgc21vb3RoZWRNaWRQb2ludHMgPSBzbW9vdGhQb2ludHMobWlkUG9pbnRzLCA3LCBjYW52YXMud2lkdGgpOyBcbiAgY29uc3Qgc21vb3RoZWRQb3N0UG9pbnRzID0gc21vb3RoUG9pbnRzKHBvc3RQb2ludHMsIDcsIGNhbnZhcy53aWR0aCk7XG4gIFxuICAvLyBFZmVjdG8gZ2xvd1xuICBjdHguc2hhZG93Qmx1ciA9IDEwO1xuICBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcblxuICAvLyBQcmUtRVE6IHZpb2xldGEgdml2byBjb24gZ2xvd1xuICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjQpXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuOClcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuMylcIjtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIFxuICAvLyBEaWJ1amFyIGzDrW5lYSBwYXJhIHByZS1FUVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCk7IFxuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgcXVlIHVuZSBsb3MgcHVudG9zXG4gIHNtb290aGVkUHJlUG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIGN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH0pO1xuICBcbiAgLy8gQ2VycmFyIGVsIHBhdGggaGFzdGEgbGEgYmFzZVxuICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIC8vIFJlbGxlbmFyIGVsIMOhcmVhIGJham8gbGEgY3VydmFcbiAgY3R4LmZpbGwoKTtcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIGRlbCBjb250b3Jub1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGlmIChzbW9vdGhlZFByZVBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgY3R4Lm1vdmVUbyhzbW9vdGhlZFByZVBvaW50c1swXS54LCBzbW9vdGhlZFByZVBvaW50c1swXS55KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNtb290aGVkUHJlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHgubGluZVRvKHNtb290aGVkUHJlUG9pbnRzW2ldLngsIHNtb290aGVkUHJlUG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBOdWV2bzogTWlkLUVRIChkZXNwdcOpcyBkZSBmaWx0cm9zLCBhbnRlcyBkZSBjb21wcmVzb3IpOiBhbWFyaWxsby9uYXJhbmphIGNvbiBnbG93XG4gIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuNClcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC44KVwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC4zKVwiO1xuICBcbiAgLy8gRGlidWphciBsw61uZWEgcGFyYSBtaWQtRVFcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyBcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIHF1ZSB1bmUgbG9zIHB1bnRvc1xuICBzbW9vdGhlZE1pZFBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9KTtcbiAgXG4gIC8vIENlcnJhciBlbCBwYXRoIGhhc3RhIGxhIGJhc2VcbiAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gIGN0eC5maWxsKCk7XG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBkZWwgY29udG9ybm9cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBpZiAoc21vb3RoZWRNaWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgIGN0eC5tb3ZlVG8oc21vb3RoZWRNaWRQb2ludHNbMF0ueCwgc21vb3RoZWRNaWRQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbW9vdGhlZE1pZFBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmxpbmVUbyhzbW9vdGhlZE1pZFBvaW50c1tpXS54LCBzbW9vdGhlZE1pZFBvaW50c1tpXS55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gUG9zdC1FUTogdmVyZGUgbmXDs24gY2xhcm8gY29uIGdsb3dcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC40KVwiO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjgpXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjMpXCI7XG4gIFxuICAvLyBEaWJ1amFyIGzDrW5lYSBwYXJhIHBvc3QtRVFcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyAvLyBFbXBlemFyIGRlc2RlIGxhIGVzcXVpbmEgaW5mZXJpb3IgaXpxdWllcmRhXG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBxdWUgdW5lIGxvcyBwdW50b3NcbiAgc21vb3RoZWRQb3N0UG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIGN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH0pO1xuICBcbiAgLy8gQ2VycmFyIGVsIHBhdGggaGFzdGEgbGEgYmFzZVxuICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIC8vIFJlbGxlbmFyIGVsIMOhcmVhIGJham8gbGEgY3VydmFcbiAgY3R4LmZpbGwoKTtcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIGRlbCBjb250b3Jub1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGlmIChzbW9vdGhlZFBvc3RQb2ludHMubGVuZ3RoID4gMCkge1xuICAgIGN0eC5tb3ZlVG8oc21vb3RoZWRQb3N0UG9pbnRzWzBdLngsIHNtb290aGVkUG9zdFBvaW50c1swXS55KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNtb290aGVkUG9zdFBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmxpbmVUbyhzbW9vdGhlZFBvc3RQb2ludHNbaV0ueCwgc21vb3RoZWRQb3N0UG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBMaW1waWFyIGVmZWN0b3NcbiAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICBjdHguc2hhZG93Q29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cbiAgLy8gQWdyZWdhciBsZXllbmRhIHBhcmEgbG9zIGNvbG9yZXNcbiAgY29uc3QgbGVnZW5kWSA9IDIwO1xuICBjb25zdCBsZWdlbmRTcGFjaW5nID0gMTIwO1xuICBcbiAgLy8gTGV5ZW5kYSBwYXJhIFByZS1FUSAodmlvbGV0YSlcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuOClcIjtcbiAgY3R4LmZpbGxSZWN0KDEwLCBsZWdlbmRZIC0gMTAsIDEwLCAxMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUHJlLUVRXCIsIDI1LCBsZWdlbmRZKTtcbiAgXG4gIC8vIExleWVuZGEgcGFyYSBNaWQtRVEgKGFtYXJpbGxvL25hcmFuamEpXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAxODAsIDUwLCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdCgxMCArIGxlZ2VuZFNwYWNpbmcsIGxlZ2VuZFkgLSAxMCwgMTAsIDEwKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICBjdHguZmlsbFRleHQoXCJQb3N0LUZpbHRyb3NcIiwgMjUgKyBsZWdlbmRTcGFjaW5nLCBsZWdlbmRZKTtcbiAgXG4gIC8vIExleWVuZGEgcGFyYSBQb3N0LUVRICh2ZXJkZSlcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1MCwgMjIwLCAxMjAsIDAuOClcIjtcbiAgY3R4LmZpbGxSZWN0KDEwICsgbGVnZW5kU3BhY2luZyAqIDIsIGxlZ2VuZFkgLSAxMCwgMTAsIDEwKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICBjdHguZmlsbFRleHQoXCJQb3N0LUNvbXByZXNvclwiLCAyNSArIGxlZ2VuZFNwYWNpbmcgKiAyLCBsZWdlbmRZKTtcblxuICAvLyBEaWJ1amFyIGVsIG1hcmNhZG9yIGRlIGZyZWN1ZW5jaWEgYWN0aXZhIHNpIGV4aXN0ZVxuICBjb25zdCBhY3RpdmVGcmVxdWVuY3lNYXJrZXIgPSBnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoKTtcbiAgY29uc3QgYWN0aXZlUU1hcmtlciA9IGdldEFjdGl2ZVFNYXJrZXIoKTtcbiAgaWYgKGFjdGl2ZUZyZXF1ZW5jeU1hcmtlcikge1xuICAgIC8vIENvbnZlcnRpciBmcmVjdWVuY2lhIGEgcG9zaWNpw7NuIFggdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5sb2cyKGFjdGl2ZUZyZXF1ZW5jeU1hcmtlciAvIDIwKTsgLy8gTsO6bWVybyBkZSBvY3RhdmFzIGRlc2RlIDIwSHpcbiAgICBjb25zdCB0b3RhbE9jdGF2ZXMgPSBNYXRoLmxvZzIoMTcwMDAgLyAyMCk7IC8vIEFwcm94aW1hZGFtZW50ZSA5Ljcgb2N0YXZhcyAoaGFzdGEgMTdrSHopXG4gICAgY29uc3QgeCA9IChvY3RhdmUgLyB0b3RhbE9jdGF2ZXMpICogY2FudmFzLndpZHRoICogMC45OTU7IC8vIFVzYXIgZWwgdmFsb3IgZXhhY3RvIGRlIG9jdGF2YXNcbiAgICBcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmZjMzNjZcIjsgLy8gQ29sb3IgbGxhbWF0aXZvIHBhcmEgZWwgbWFyY2Fkb3JcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICBjdHgubGluZVRvKHgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBFdGlxdWV0YSBjb24gZWwgdmFsb3IgZGUgZnJlY3VlbmNpYVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjMzNjZcIjtcbiAgICBjdHguZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsVGV4dChgJHthY3RpdmVGcmVxdWVuY3lNYXJrZXJ9IEh6YCwgeCArIDUsIDE1KTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGxhIGNhbXBhbmEgZGUgUSBzaSB0ZW5lbW9zIHRhbnRvIGZyZWN1ZW5jaWEgY29tbyBRXG4gICAgaWYgKGFjdGl2ZVFNYXJrZXIpIHtcbiAgICAgIC8vIERpYnVqYXIgbGEgY2FtcGFuYVxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgNTEsIDEwMiwgMC43KVwiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDUxLCAxMDIsIDAuMilcIjtcbiAgICAgIFxuICAgICAgLy8gQ2FsY3VsYXIgbGEgZXNjYWxhIGRlIGxhIGNhbXBhbmEgYmFzYWRhIGVuIFFcbiAgICAgIC8vIEN1YW50byBtYXlvciBzZWEgUSwgbcOhcyBlc3RyZWNoYSBzZXLDoSBsYSBjYW1wYW5hXG4gICAgICBjb25zdCBxU2NhbGUgPSBNYXRoLm1heCgyMCwgMjAwIC8gYWN0aXZlUU1hcmtlcik7IC8vIExpbWl0YXIgZWwgbcOtbmltbyBwYXJhIFEgbXV5IGFsdG9zXG4gICAgICBcbiAgICAgIC8vIERpYnVqYXIgbGEgY3VydmEgZGUgY2FtcGFuYVxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgXG4gICAgICAvLyBQdW50b3MgcGFyYSBsYSBjdXJ2YVxuICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICBjb25zdCBjZW50ZXJYID0geDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKiAwLjc7IC8vIEFsdHVyYSBtw6F4aW1hIGRlIGxhIGNhbXBhbmFcbiAgICAgIFxuICAgICAgLy8gR2VuZXJhciBwdW50b3MgcGFyYSBsYSBjdXJ2YSBkZSBjYW1wYW5hIGVuIGVzY2FsYSBsb2dhcsOtdG1pY2FcbiAgICAgIGZvciAobGV0IGkgPSAtY2FudmFzLndpZHRoLzI7IGkgPD0gY2FudmFzLndpZHRoLzI7IGkgKz0gNSkge1xuICAgICAgICBjb25zdCBwb2ludFggPSBjZW50ZXJYICsgaTtcbiAgICAgICAgaWYgKHBvaW50WCA+PSAwICYmIHBvaW50WCA8PSBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAvLyBDb252ZXJ0aXIgcG9zaWNpw7NuIFggYSBmcmVjdWVuY2lhXG4gICAgICAgICAgY29uc3QgZnJlcSA9IDIwICogTWF0aC5wb3coMTAsIChwb2ludFggLyBjYW52YXMud2lkdGgpICogTWF0aC5sb2cxMCgxNzAwMCAvIDIwKSk7XG4gICAgICAgICAgY29uc3QgZnJlcVJhdGlvID0gZnJlcSAvIGFjdGl2ZUZyZXF1ZW5jeU1hcmtlcjtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBGw7NybXVsYSBkZSBjYW1wYW5hIHBhcmEgZmlsdHJvIHBlYWtpbmcgZW4gZXNjYWxhIGxvZ2Fyw610bWljYVxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gMSAvIE1hdGguc3FydCgxICsgTWF0aC5wb3coYWN0aXZlUU1hcmtlciAqIChmcmVxUmF0aW8gLSAxL2ZyZXFSYXRpbyksIDIpKTtcbiAgICAgICAgICBjb25zdCBwb2ludFkgPSBjYW52YXMuaGVpZ2h0IC0gaGVpZ2h0ICogcmVzcG9uc2U7XG4gICAgICAgICAgXG4gICAgICAgICAgcG9pbnRzLnB1c2goe3g6IHBvaW50WCwgeTogcG9pbnRZfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gRGlidWphciBsYSBjdXJ2YVxuICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW3BvaW50cy5sZW5ndGgtMV0ueCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzWzBdLngsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBNb3N0cmFyIGVsIHZhbG9yIGRlIFFcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMzM2NlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYFE6ICR7YWN0aXZlUU1hcmtlci50b0ZpeGVkKDEpfWAsIHggKyA1LCAzMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImNocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfcHJvZmVzc2lvbmFsX2F1ZGlvX3BsdWdpblwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfcHJvZmVzc2lvbmFsX2F1ZGlvX3BsdWdpblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IHsgY2FyZ2FyRmlsdHJvcyB9IGZyb20gXCIuL2ZpbHRlcnNfaW50ZXJmYWNlLnRzXCI7XG5pbXBvcnQgeyBkcmF3VmlzdWFsaXplciB9IGZyb20gXCIuL3Zpc3VhbGl6ZXIudHNcIjtcbmltcG9ydCB7IHN0YXRpY0ZpbHRlcmluZywgZmlsdGVycyB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW1wb3J0IHsgaW5pY2lhbGl6YXJDb21wcmVzb3IgfSBmcm9tIFwiLi9jb21wcmVzc29yLnRzXCI7XG5pbXBvcnQgeyBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiXG5pbXBvcnQgeyBndWFyZGFyRXN0YWRvLCBjYXJnYXJFc3RhZG8sIGNhcmdhckxpc3RhUHJlc2V0cywgY2xlYXJTdG9yYWdlLCBzYXZlVmFsdWUgfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGFwbGljYXJDb25maWd1cmFjaW9uLCB1cGRhdGVWb2x1bWVUZXh0IH0gZnJvbSBcIi4vaW50ZXJmYWNlLnRzXCI7XG5pbXBvcnQgeyBkYlRvR2FpbiB9IGZyb20gXCIuL3V0aWxzLnRzXCI7XG5cbmxldCBvZmZzY3JlZW5Qb3J0ID0gbnVsbDtcbmxldCBsb29wcyA9IG51bGw7XG5sZXQgZGVidWdfY291bnRlciA9IDE7XG5cblxuLy8gU2VuZGVyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBXYWl0IGZvciB6aGUgRE9NIHRvIGxvYWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGJvdG9uQ2FwdHVyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZhclwiKTtcbiAgY29uc3QgZGVidWdMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXN0YWRvXCIpO1xuICBjb25zdCBkZWJ1Z0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdcIik7XG4gIGRlYnVnTGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmdhbmRvLi4uXCI7XG5cbiAgLy8gSW5pY2lhbGl6YXIgbG9zIGJvdG9uZXMgZGUgcHJlc2V0c1xuICBjb25zb2xlLmxvZyhcIkluaWNpYWxpemFuZG8gcHJlc2V0cy4uLlwiKVxuICBpbmljaWFsaXphclByZXNldHMoKTtcbiAgLy8gQ2FyZ2FyIGVzdGFkbyBndWFyZGFkb1xuICBjb25zb2xlLmxvZyhcIkluaWNpYWxpemFuZG8gY2FyZ2FuZG9Fc3RhZG8uLi5cIilcbiAgY2FyZ2FyRXN0YWRvKCk7XG4gIGNvbnNvbGUubG9nKFwiRXN0YWRvIGNhcmdhZG86XCIsIGxvY2FsRXN0YWRvKTtcbiAgXG4gIC8vIFZlcmlmaWNhciBzaSBlcyBsYSBwcmltZXJhIHZleiBxdWUgc2UgYWJyZSBlbCBwb3B1cCBkZXNkZSBsYSBpbmljaWFsaXphY2nDs25cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNoZWNrLWZpcnN0LXBvcHVwLW9wZW5cIixcbiAgICAgIHRhcmdldDogXCJiYWNrZ3JvdW5kXCJcbiAgICB9KTtcbiAgICBcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaXNGaXJzdE9wZW4pIHtcbiAgICAgIGF3YWl0IGNsZWFyU3RvcmFnZSgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBFcnJvciBhbCB2ZXJpZmljYXIgcHJpbWVyYSBhcGVydHVyYTpcIiwgZXJyb3IpO1xuICB9XG5cbiAgY2FyZ2FyRmlsdHJvcygpO1xuXG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJvZmZzY3JlZW4td2FrZXVwXCIsIHRhcmdldDogXCJiYWNrZ3JvdW5kXCIgfSk7XG5cbiAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgYm90b25DYXB0dXJhLnRleHRDb250ZW50ID0gXCJEZXRlbmVyIEF1ZGlvIPCflIdcIjtcbiAgICBvcGVuT2Zmc2NyZWVuUG9ydCgpO1xuICB9IGVsc2Uge1xuICAgIGJvdG9uQ2FwdHVyYS50ZXh0Q29udGVudCA9IFwiQWN0aXZhciBBdWRpbyDwn46kXCI7XG4gIH1cblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgLy8gY29uZXhpb24gUDJQXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJvZmZzY3JlZW4tYWxpdmVcIikge1xuICAgICAgaWYgKCFvZmZzY3JlZW5Qb3J0KSB7XG4gICAgICAgIGF3YWl0IG9wZW5PZmZzY3JlZW5Qb3J0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkZWJ1Z0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGVidWcgYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVidWdnaW5nLi4uXCI7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImRlYnVnXCIgLCB0YWJJZDogYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKX0pO1xuICB9KTtcblxuICBib3RvbkNhcHR1cmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG5cbiAgICBpZiAoIWxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImVudHJlIGlzQWN0aXZlXCIpXG4gICAgICBpZiAoIXRhYi51cmwuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBTEVSVFwiKVxuICAgICAgICBhbGVydChcIltwb3B1cF0gTm8gc2UgcHVlZGUgY2FwdHVyYXIgZXN0YSBwZXN0YcOxYS4gQWJyw60gdW5hIHDDoWdpbmEgd2ViIGNvbiBhdWRpbyBcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmVhbUlkID0gYXdhaXQgY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7IHRhcmdldFRhYklkOiB0YWJJZCB9KTtcbiAgICAgIGNvbnN0IGVxVmFsb3JlcyA9IHt9XG4gICAgICBpZiAoc3RhdGljRmlsdGVyaW5nKSB7XG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgZXFWYWxvcmVzW2ZpbHRlcl0gPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbHRlcikudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzdGFydC1wcm9jZXNzaW5nXCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQsXG4gICAgICAgIHN0cmVhbUlkLFxuICAgICAgICBsZXZlbDogZGJUb0dhaW4ocGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikudmFsdWUpKSxcbiAgICAgICAgLi4uZXFWYWxvcmVzLFxuICAgICAgfSk7XG4gICAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8g8J+Uh1wiO1xuICAgICAgc2F2ZVZhbHVlKFwiY2FwdHVyaW5nQXVkaW9cIiwgdHJ1ZSk7XG4gICAgICBpZiAob2Zmc2NyZWVuUG9ydCkge1xuICAgICAgICBvZmZzY3JlZW5Qb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiwgdGFiSWQgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBvcGVuT2Zmc2NyZWVuUG9ydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltXQVJOSU5HXSBPcGVuZWQgb2Zmc2NyZWVuIHBvcnQgYmVjYXVzZSBpdCB3YXMgY2xvc2VkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW9mZnNjcmVlblBvcnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbV0FSTklOR10gTm8gaGF5IHB1ZXJ0byBvZmZzY3JlZW5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlYnVnTGFiZWwudGV4dENvbnRlbnQgPSBcIkRldGVuaWVuZG8gYXVkaW8uLi5cIiArIGRlYnVnX2NvdW50ZXIrKztcbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzdG9wLXByb2Nlc3NpbmdcIixcbiAgICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgICB0YWJJZCxcbiAgICAgIH0pO1xuICAgICAgYm90b25DYXB0dXJhLnRleHRDb250ZW50ID0gXCJBY3RpdmFyIEF1ZGlvIPCfjqRcIjtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxvb3BzKTtcbiAgICAgIGxvb3BzID0gbnVsbDtcbiAgICAgIHNhdmVWYWx1ZShcImNhcHR1cmluZ0F1ZGlvXCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuXG4gIC8vIEFncmVnYXIgZXZlbnRvIHBhcmEgZWwgY2hlY2tib3ggZGUgbW9kbyBvc2N1cm9cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgIH1cbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuXG4gIC8vIEluaWNpYWxpemFyIGVsIHRleHRvIGRlbCB2b2x1bWVuXG4gIGNvbnN0IHZvbHVtZW5TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIik7XG4gIGlmICh2b2x1bWVuU2xpZGVyKSB7XG4gICAgdXBkYXRlVm9sdW1lVGV4dCh2b2x1bWVuU2xpZGVyLnZhbHVlKTtcbiAgfVxuXG4gIC8vIEFncmVnYXIgZXZlbnRvIHBhcmEgZWwgc2xpZGVyIGRlIHZvbHVtZW5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICBjb25zdCB2b2x1bWVuVmFsdWUgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBcbiAgICAvLyBBY3R1YWxpemFyIGVsIHRleHRvIHF1ZSBtdWVzdHJhIGVsIHZhbG9yIGVuIGRCXG4gICAgdXBkYXRlVm9sdW1lVGV4dCh2b2x1bWVuVmFsdWUpO1xuICAgIFxuICAgIC8vIEVudmlhciBlbCBtZW5zYWplIHBhcmEgYWp1c3RhciBlbCB2b2x1bWVuXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJhanVzdGFyLXZvbHVtZW5cIixcbiAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgIHRhYklkLFxuICAgICAgbGV2ZWw6IGRiVG9HYWluKHZvbHVtZW5WYWx1ZSksIC8vIENvbnZlcnRpciBkQiBhIGdhbmFuY2lhXG4gICAgfSk7XG4gICAgXG4gICAgLy8gR3VhcmRhciBlbCBlc3RhZG8gZGVsIHZvbHVtZW5cbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuXG4gIGZpbHRlcnMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcImFqdXN0YXItZmlsdHJvXCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQsXG4gICAgICAgIGJhbmRhOiBpZCxcbiAgICAgICAgdmFsb3I6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgICBndWFyZGFyRXN0YWRvKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEluaWNpYWxpemFyIGNvbnRyb2xlcyBkZWwgY29tcHJlc29yXG4gIGluaWNpYWxpemFyQ29tcHJlc29yKCk7XG59KTtcblxud2luZG93LmdldEFjdGl2ZVRhYklkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICByZXR1cm4gdGFiLmlkO1xufTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2cpID0+IHtcbiAgaWYgKG1zZy50eXBlID09PSBcInZpc3VhbGl6ZXItZGF0YVwiICYmIG1zZy5kYXRhKSB7XG4gICAgZHJhd1Zpc3VhbGl6ZXIobXNnLmRhdGEpO1xuICB9XG59KTtcblxuXG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZpc3VhbGl6ZXIoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgaWYgKG9mZnNjcmVlblBvcnQpIHtcbiAgICAgIG9mZnNjcmVlblBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcImdpdmUtbWUtdml6XCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQ6IGF3YWl0IGdldEFjdGl2ZVRhYklkKCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiW3BvcHVwXSBObyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiKTtcbiAgICAgIGFsZXJ0KFwiW3BvcHVwXSBObyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiKTtcbiAgICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwibm8gaGF5IHB1ZXJ0byBvZmZzY3JlZW5cIjtcbiAgICB9XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgbG9vcHMgPSBpZDtcbiAgfVxuICBsb29wKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5PZmZzY3JlZW5Qb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgb2Zmc2NyZWVuUG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBcInBvcHVwLXZpc3VhbGl6ZXJcIn0pO1xuICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwiQ29uZWN0YWRvIGFsIG9mZnNjcmVlblwiO1xuICAgIG9mZnNjcmVlblBvcnQucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInN0YXJ0LXN0cmVhbVwiLCB0YWJJZCB9KTtcblxuICAgIG9mZnNjcmVlblBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwiRGVzY29uZWN0YWRvIGRlbCBvZmZzY3JlZW5cIjtcbiAgICB9KTtcblxuICAgIG9mZnNjcmVlblBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSBcInZpc3VhbGl6ZXItZGF0YVwiKSB7XG4gICAgICAgIGRyYXdWaXN1YWxpemVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICB9IFxuICAgICAgZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSBcInN0YXJ0LXN0cmVhbVwiKSB7XG4gICAgICAgIHVwZGF0ZVZpc3VhbGl6ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlc3RhZG8udGV4dENvbnRlbnQgPSBcIkVycm9yIGFsIGNvbmVjdGFyIGFsIG9mZnNjcmVlblwiO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUE9QVVBdIEVycm9yIGFsIGNvbmVjdGFyIGFsIG9mZnNjcmVlbjpcIiwgZXJyb3IpO1xuICB9XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgaW5pY2lhbGl6YXIgbG9zIGNvbnRyb2xlcyBkZSBwcmVzZXRzXG5mdW5jdGlvbiBpbmljaWFsaXphclByZXNldHMoKSB7XG4gIGNvbnN0IGd1YXJkYXJQcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VhcmRhci1wcmVzZXQnKTtcbiAgY29uc3QgY2FyZ2FyUHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcmdhci1wcmVzZXQnKTtcbiAgY29uc3QgZWxpbWluYXJQcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxpbWluYXItcHJlc2V0Jyk7XG4gIGNvbnN0IHByZXNldE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtbmFtZScpO1xuICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpO1xuXG4gIC8vIENhcmdhciBwcmVzZXRzIGV4aXN0ZW50ZXNcbiAgY2FyZ2FyTGlzdGFQcmVzZXRzKCk7XG5cbiAgLy8gRXZlbnRvIHBhcmEgZ3VhcmRhciBwcmVzZXRcbiAgZ3VhcmRhclByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBub21icmVQcmVzZXQgPSBwcmVzZXROYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChub21icmVQcmVzZXQgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBpbmdyZXNhIHVuIG5vbWJyZSBwYXJhIGVsIHByZXNldCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9idGVuZXIgY29uZmlndXJhY2nDs24gYWN0dWFsXG4gICAgY29uc3QgY29uZmlndXJhY2lvbiA9IG9idGVuZXJDb25maWd1cmFjaW9uQWN0dWFsKCk7XG4gICAgXG4gICAgLy8gR3VhcmRhciBlbiBzdG9yYWdlXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgICBwcmVzZXRzW25vbWJyZVByZXNldF0gPSBjb25maWd1cmFjaW9uO1xuICAgICAgXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcmVzZXRzIH0sICgpID0+IHtcbiAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGd1YXJkYWRvIGNvcnJlY3RhbWVudGVgKTtcbiAgICAgICAgcHJlc2V0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNhcmdhckxpc3RhUHJlc2V0cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEV2ZW50byBwYXJhIGNhcmdhciBwcmVzZXRcbiAgY2FyZ2FyUHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWJyZVByZXNldCA9IHByZXNldFNlbGVjdC52YWx1ZTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgc2VsZWNjaW9uYSB1biBwcmVzZXQgcGFyYSBjYXJnYXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydwcmVzZXRzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYWNpb24gPSBwcmVzZXRzW25vbWJyZVByZXNldF07XG4gICAgICBcbiAgICAgIGlmIChjb25maWd1cmFjaW9uKSB7XG4gICAgICAgIGFwbGljYXJDb25maWd1cmFjaW9uKGNvbmZpZ3VyYWNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXNldCBjYXJnYWRvOlwiLCBjb25maWd1cmFjaW9uKTtcbiAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGNhcmdhZG8gY29ycmVjdGFtZW50ZWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYEVycm9yOiBObyBzZSBlbmNvbnRyw7MgZWwgcHJlc2V0IFwiJHtub21icmVQcmVzZXR9XCJgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gRXZlbnRvIHBhcmEgZWxpbWluYXIgcHJlc2V0XG4gIGVsaW1pbmFyUHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWJyZVByZXNldCA9IHByZXNldFNlbGVjdC52YWx1ZTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgc2VsZWNjaW9uYSB1biBwcmVzZXQgcGFyYSBlbGltaW5hcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maXJtKGDCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIGRlc2VhcyBlbGltaW5hciBlbCBwcmVzZXQgXCIke25vbWJyZVByZXNldH1cIj9gKSkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwcmVzZXRzW25vbWJyZVByZXNldF0pIHtcbiAgICAgICAgICBkZWxldGUgcHJlc2V0c1tub21icmVQcmVzZXRdO1xuICAgICAgICAgIFxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHByZXNldHMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlYCk7XG4gICAgICAgICAgICBjYXJnYXJMaXN0YVByZXNldHMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChgRXJyb3I6IE5vIHNlIGVuY29udHLDsyBlbCBwcmVzZXQgXCIke25vbWJyZVByZXNldH1cImApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImRiVG9HYWluIiwibG9jYWxFc3RhZG8iLCJjb21wcmVzb3JBY3Rpdm8iLCJjb21wcmVzb3JQYXJhbXMiLCJlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4iLCJfeCIsIl9lbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4iLCJfY2FsbGVlIiwiY29uZmlnIiwidGFiSWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0QWN0aXZlVGFiSWQiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXQiLCJsZXZlbCIsInZvbHVtZW4iLCJlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yIiwiX2VudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNhcHR1cmluZ0F1ZGlvIiwiYWN0aXZvIiwicGFyYW1zIiwidGhyZXNob2xkIiwicmF0aW8iLCJrbmVlIiwiYXR0YWNrIiwicmVsZWFzZSIsInNldENvbXByZXNvckFjdGl2byIsInNldENvbXByZXNvclBhcmFtIiwiZ3VhcmRhckVzdGFkbyIsImluaWNpYWxpemFyQ29tcHJlc29yIiwiY29tcHJlc29yQWN0aXZvQ2hlY2tib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyc2VGbG9hdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwiYWN0dWFsaXphclZhbG9yQ29tcHJlc29yIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJ0aXBvIiwidmFsb3IiLCJ2YWxvckVsZW1lbnQiLCJjb25jYXQiLCJ0ZXh0Q29udGVudCIsImF0dGFja01zIiwidG9GaXhlZCIsInJlbGVhc2VNcyIsImFjdGl2ZUZyZXF1ZW5jeU1hcmtlciIsImFjdGl2ZVFNYXJrZXIiLCJzdGF0aWNGaWx0ZXJpbmciLCJmaWx0ZXJzIiwic2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyIiwiZnJlcXVlbmN5IiwiZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyIiwic2V0QWN0aXZlUU1hcmtlciIsInEiLCJnZXRBY3RpdmVRTWFya2VyIiwiZ2V0Q29tcHJlc29yQWN0aXZvIiwicGFyYW0iLCJnZXRDb21wcmVzb3JQYXJhbSIsIk1JTl9GUkVRIiwiTUFYX0ZSRVEiLCJPQ1RBVkVfUkFOR0UiLCJNYXRoIiwibG9nMiIsImZpbHRyb3NBY3Rpdm9zIiwiYm90b25BZ3JlZ2FyRmlsdHJvIiwiaWQiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiZmlsdHJvIiwiZnJlcSIsImdhaW4iLCJieXBhc3MiLCJjcmVhckZpbHRyb0NhcmQiLCJlbnZpYXJBY3R1YWxpemFjaW9uIiwiZ3VhcmRhckZpbHRyb3MiLCJzbGlkZXJUb0ZyZXEiLCJzbGlkZXJWYWx1ZSIsInJvdW5kIiwicG93IiwiZnJlcVRvU2xpZGVyIiwiY29udGVuZWRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJpc0RhcmtNb2RlIiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYmdDb2xvciIsInRleHRDb2xvciIsImJ1dHRvbkJnQ29sb3IiLCJidXR0b25UZXh0Q29sb3IiLCJzdHlsZSIsImNzc1RleHQiLCJpbm5lckhUTUwiLCJmcmVxU2xpZGVyIiwicXVlcnlTZWxlY3RvciIsImZyZXFWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJmcmVjdWVuY2lhIiwidG9TdHJpbmciLCJxU2xpZGVyIiwicVZhbHVlIiwiZ2FpblNsaWRlciIsImdhaW5WYWx1ZSIsImJ5cGFzc0NoZWNrYm94IiwiZWxpbWluYXJCdG4iLCJyZW1vdmUiLCJmaWx0ZXIiLCJmaWx0cm9JZCIsImZpbHRyb3NDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsIl9lbnZpYXJBY3R1YWxpemFjaW9uIiwidDAiLCJ0MSIsInQyIiwidDMiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsImZpbHRyb3NEaW5hbWljb3MiLCJjYXJnYXJGaWx0cm9zIiwiZ2V0IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsIm9ic2VydmFyQ2FtYmlvc1RlbWEiLCJhY3R1YWxpemFyRXN0aWxvRmlsdHJvcyIsImZpbHRyb0NhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhcmQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJkYXJrTW9kZUNoZWNrYm94IiwiYXBsaWNhckNvbmZpZ3VyYWNpb24iLCJfYXBsaWNhckNvbmZpZ3VyYWNpb24iLCJ2b2x1bWVuU2xpZGVyIiwidGhyZXNob2xkU2xpZGVyIiwicmF0aW9TbGlkZXIiLCJrbmVlU2xpZGVyIiwiYXR0YWNrU2xpZGVyIiwicmVsZWFzZVNsaWRlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVwZGF0ZVZvbHVtZVRleHQiLCJkYXJrTW9kZSIsImFkZCIsImNvbXByZXNvciIsImZpbHRlcnNNb2R1bGUiLCJkYlZhbHVlIiwidm9sdW1lVmFsdWVFbGVtZW50Iiwib2J0ZW5lckNvbmZpZ3VyYWNpb25BY3R1YWwiLCJjb25mSW50ZXJmYWNlIiwiZmlsdHJvc0VsZW1lbnRzIiwiZmlsdHJvRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiZnJlY3VlbmNpYUlucHV0IiwicUlucHV0IiwiZ2FuYW5jaWFJbnB1dCIsImJ5cGFzc0lucHV0IiwiZmQiLCJkYXRhc2V0IiwiZ2FuYW5jaWEiLCJjb21wcmVzb3JDaGVja2JveCIsInRocmVzaG9sZElucHV0IiwicmF0aW9JbnB1dCIsImtuZWVJbnB1dCIsImF0dGFja0lucHV0IiwicmVsZWFzZUlucHV0Iiwic2F2ZVZhbHVlIiwidmFsdWVOYW1lIiwiZXN0YWRvIiwiY2FyZ2FyRXN0YWRvIiwiYm90b25BY3RpdmFyIiwiZ2FpbkF1ZGlvIiwidm9sdW1lbl92YWx1ZSIsImRhcmtfbW9kZV9lbmFibGVkIiwiY29tcHJlc29yX2FjdGl2byIsImNhcmdhckxpc3RhUHJlc2V0cyIsInByZXNldFNlbGVjdCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJwcmVzZXRzIiwibm9tYnJlUHJlc2V0Iiwib3B0aW9uIiwiY2xlYXJTdG9yYWdlIiwiX2NsZWFyU3RvcmFnZSIsImNsZWFyIiwic21vb3RoUG9pbnRzIiwicG9pbnRzIiwid2luZG93U2l6ZSIsImNhbnZhc1dpZHRoIiwic21vb3RoZWQiLCJhZGFwdGl2ZVdpbmRvdyIsIm1heCIsImZsb29yIiwieCIsImhhbGZXaW5kb3ciLCJzdGFydElkeCIsImVuZElkeCIsIm1pbiIsInN1bVkiLCJqIiwiYXZnWSIsImRiIiwiZHJhd1Zpc3VhbGl6ZXIiLCJwcmVEYXRhIiwibWlkRGF0YSIsInBvc3REYXRhIiwibWluRGVjaWJlbHMiLCJtYXhEZWNpYmVscyIsImNhbnZhcyIsImN0eCIsIkhUTUxDYW52YXNFbGVtZW50IiwiZ2V0Q29udGV4dCIsImJ1ZmZlckxlbmd0aCIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJub3JtYWxpemVEYiIsImNsYW1wZWREYiIsImZvbnQiLCJmcmVxTGFiZWxzIiwiaW5kZXgiLCJvY3RhdmUiLCJ0b3RhbE9jdGF2ZXMiLCJvZmZzZXRGYWN0b3IiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZpbGxUZXh0IiwiZGJMYWJlbHMiLCJwcmVQb2ludHMiLCJtaWRQb2ludHMiLCJwb3N0UG9pbnRzIiwiZnJlcVJhdGlvIiwibnlxdWlzdEZyZXEiLCJsaW5lYXJGcmVxIiwic21vb3RoZWRQcmVQb2ludHMiLCJzbW9vdGhlZE1pZFBvaW50cyIsInNtb290aGVkUG9zdFBvaW50cyIsInNoYWRvd0JsdXIiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsInNoYWRvd0NvbG9yIiwicG9pbnQiLCJjbG9zZVBhdGgiLCJmaWxsIiwibGVnZW5kWSIsImxlZ2VuZFNwYWNpbmciLCJxU2NhbGUiLCJjZW50ZXJYIiwicG9pbnRYIiwibG9nMTAiLCJyZXNwb25zZSIsInNxcnQiLCJwb2ludFkiLCJvZmZzY3JlZW5Qb3J0IiwibG9vcHMiLCJkZWJ1Z19jb3VudGVyIiwic2VuZE1lc3NhZ2VQcm9taXNlIiwibWVzc2FnZSIsInJlamVjdCIsImxhc3RFcnJvciIsImJvdG9uQ2FwdHVyYSIsImRlYnVnTGFiZWwiLCJkZWJ1Z0J1dHRvbiIsImluaWNpYWxpemFyUHJlc2V0cyIsImlzRmlyc3RPcGVuIiwib3Blbk9mZnNjcmVlblBvcnQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIl9yZWYyIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiX3gyIiwiX3gzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1IiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1MiIsInRhYiIsInN0cmVhbUlkIiwiZXFWYWxvcmVzIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIl9zbGljZWRUb0FycmF5IiwidXJsIiwic3RhcnRzV2l0aCIsImFsZXJ0IiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIl9vYmplY3RTcHJlYWQiLCJwb3N0TWVzc2FnZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX3JlZjUiLCJ2b2x1bWVuVmFsdWUiLCJfeDQiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJfcmVmNiIsImJhbmRhIiwiX3g1Iiwid2luZG93IiwiX2NhbGxlZTciLCJfeWllbGQkY2hyb21lJHRhYnMkcXUzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1NCIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIm1zZyIsInVwZGF0ZVZpc3VhbGl6ZXIiLCJfdXBkYXRlVmlzdWFsaXplciIsIl9jYWxsZWU5IiwibG9vcCIsIl9sb29wIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX2xvb3AzIiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJhc3NlcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfbG9vcDIiLCJfb3Blbk9mZnNjcmVlblBvcnQiLCJfY2FsbGVlMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsImNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJndWFyZGFyUHJlc2V0QnRuIiwiY2FyZ2FyUHJlc2V0QnRuIiwiZWxpbWluYXJQcmVzZXRCdG4iLCJwcmVzZXROYW1lSW5wdXQiLCJ0cmltIiwiY29uZmlndXJhY2lvbiIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9