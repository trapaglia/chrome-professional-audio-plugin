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

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inicializarPresets: () => (/* binding */ inicializarPresets)
/* harmony export */ });
/* harmony import */ var _interface_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface.ts */ "./src/interface.ts");
/* harmony import */ var _state_memory_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state_memory.ts */ "./src/state_memory.ts");



// Función para inicializar los controles de presets
function inicializarPresets() {
  var guardarPresetBtn = document.getElementById('guardar-preset');
  var cargarPresetBtn = document.getElementById('cargar-preset');
  var eliminarPresetBtn = document.getElementById('eliminar-preset');
  var presetNameInput = document.getElementById('preset-name');
  var presetSelect = document.getElementById('preset-select');

  // Cargar presets existentes
  (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.cargarListaPresets)();

  // Evento para guardar preset
  guardarPresetBtn.addEventListener('click', function () {
    var nombrePreset = presetNameInput.value.trim();
    if (nombrePreset === '') {
      alert('Por favor, ingresa un nombre para el preset');
      return;
    }

    // Obtener configuración actual
    var configuracion = (0,_interface_ts__WEBPACK_IMPORTED_MODULE_0__.obtenerConfiguracionActual)();

    // Guardar en storage
    chrome.storage.local.get(['presets'], function (result) {
      var presets = result.presets || {};
      presets[nombrePreset] = configuracion;
      chrome.storage.local.set({
        presets: presets
      }, function () {
        alert("Preset \"".concat(nombrePreset, "\" guardado correctamente"));
        presetNameInput.value = '';
        (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.cargarListaPresets)();
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
        (0,_interface_ts__WEBPACK_IMPORTED_MODULE_0__.aplicarConfiguracion)(configuracion);
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
            (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_1__.cargarListaPresets)();
          });
        } else {
          alert("Error: No se encontr\xF3 el preset \"".concat(nombrePreset, "\""));
        }
      });
    }
  });
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
/* harmony import */ var _events_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events.ts */ "./src/events.ts");
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
        (0,_events_ts__WEBPACK_IMPORTED_MODULE_7__.inicializarPresets)();
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
}
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
(0,_events_ts__WEBPACK_IMPORTED_MODULE_7__.inicializarPresets)();
// inicializarEventos();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Mk8sTUFBTSxDQUFDdEosV0FBVyxHQUFHLHdCQUF3QjtVQUM3QzZPLGFBQWEsQ0FBQ21DLFdBQVcsQ0FBQztZQUFFM1osSUFBSSxFQUFFLGNBQWM7WUFBRXlGLEtBQUssRUFBTEE7VUFBTSxDQUFDLENBQUM7VUFFMUQrUixhQUFhLENBQUNzRSxZQUFZLENBQUN6RCxXQUFXLENBQUMsWUFBTTtZQUMzQ3BHLE1BQU0sQ0FBQ3RKLFdBQVcsR0FBRyw0QkFBNEI7VUFDbkQsQ0FBQyxDQUFDO1VBRUY2TyxhQUFhLENBQUNZLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNULE9BQU8sRUFBSztZQUMvQyxJQUFJQSxPQUFPLENBQUM1WCxJQUFJLEtBQUssaUJBQWlCLEVBQUU7Y0FDdEM4VCw4REFBYyxDQUFDOEQsT0FBTyxDQUFDekksSUFBSSxDQUFDO1lBQzlCLENBQUMsTUFDSSxJQUFJeUksT0FBTyxDQUFDNVgsSUFBSSxLQUFLLGNBQWMsRUFBRTtjQUN4QzJhLGdCQUFnQixDQUFDLENBQUM7WUFDcEI7VUFDRixDQUFDLENBQUM7VUFBQ2lCLFVBQUEsQ0FBQXZaLElBQUE7VUFBQTtRQUFBO1VBQUF1WixVQUFBLENBQUE1WCxJQUFBO1VBQUE0WCxVQUFBLENBQUFuTixFQUFBLEdBQUFtTixVQUFBO1VBRUgzSixNQUFNLENBQUN0SixXQUFXLEdBQUcsZ0NBQWdDO1VBQ3JEb0MsT0FBTyxDQUFDdUYsS0FBSyxDQUFDLHlDQUF5QyxFQUFBc0wsVUFBQSxDQUFBbk4sRUFBTyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFtTixVQUFBLENBQUF6WCxJQUFBO01BQUE7SUFBQSxHQUFBdVgsU0FBQTtFQUFBLENBRW5FO0VBQUEsT0FBQUQsa0JBQUEsQ0FBQTVXLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRURtRiw4REFBa0IsQ0FBQyxDQUFDO0FBQ3BCLHdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tbXVuaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tcHJlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvZXZlbnRzLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL2ZpbHRlcnNfaW50ZXJmYWNlLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9zdGF0ZV9tZW1vcnkudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvdmlzdWFsaXplci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiVG9HYWluIH0gZnJvbSBcIi4vdXRpbHMudHNcIjtcbmltcG9ydCB7IENvbmZpZ3VyYWNpb25JbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2UudHNcIjtcbmltcG9ydCB7IGxvY2FsRXN0YWRvIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCI7XG5pbXBvcnQgeyBjb21wcmVzb3JBY3Rpdm8sIGNvbXByZXNvclBhcmFtcyB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuXG4vLyBGdW5jacOzbiBwYXJhIGVudmlhciBsYSBjb25maWd1cmFjacOzbiBhbCBvZmZzY3JlZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4oY29uZmlnOiBDb25maWd1cmFjaW9uSW50ZXJmYWNlKSB7XG4gIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgXG4gIC8vIEVudmlhciBjb25maWd1cmFjacOzbiBkZWwgdm9sdW1lblxuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgdHlwZTogXCJhanVzdGFyLXZvbHVtZW5cIixcbiAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgdGFiSWQsXG4gICAgbGV2ZWw6IGRiVG9HYWluKGNvbmZpZy52b2x1bWVuKVxuICB9KTtcbiAgXG4gIC8vIEVudmlhciBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yXG4gIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBlbnZpYXIgbGEgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvciBhbCBzY3JpcHQgb2Zmc2NyZWVuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpIHtcbiAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiYWp1c3Rhci1jb21wcmVzb3JcIixcbiAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgIHRhYklkLFxuICAgICAgYWN0aXZvOiBjb21wcmVzb3JBY3Rpdm8sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdGhyZXNob2xkOiBjb21wcmVzb3JQYXJhbXMudGhyZXNob2xkLFxuICAgICAgICByYXRpbzogY29tcHJlc29yUGFyYW1zLnJhdGlvLFxuICAgICAgICBrbmVlOiBjb21wcmVzb3JQYXJhbXMua25lZSxcbiAgICAgICAgYXR0YWNrOiBjb21wcmVzb3JQYXJhbXMuYXR0YWNrLFxuICAgICAgICByZWxlYXNlOiBjb21wcmVzb3JQYXJhbXMucmVsZWFzZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgc2V0Q29tcHJlc29yQWN0aXZvLCBnZXRDb21wcmVzb3JBY3Rpdm8sIHNldENvbXByZXNvclBhcmFtLCBnZXRDb21wcmVzb3JQYXJhbSwgY29tcHJlc29yQWN0aXZvLCBjb21wcmVzb3JQYXJhbXMgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcbmltcG9ydCB7IGd1YXJkYXJFc3RhZG8sIGxvY2FsRXN0YWRvIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCI7XG5pbXBvcnQgeyBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yIH0gZnJvbSBcIi4vY29tbXVuaWNhdGlvbnMudHNcIjtcblxuXG5leHBvcnQgdHlwZSBDb21wcmVzb3IgPSB7XG4gICAgdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBrbmVlOiBudW1iZXI7XG4gICAgYXR0YWNrOiBudW1iZXI7XG4gICAgcmVsZWFzZTogbnVtYmVyO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGluaWNpYWxpemFyIGxvcyBjb250cm9sZXMgZGVsIGNvbXByZXNvclxuZXhwb3J0IGZ1bmN0aW9uIGluaWNpYWxpemFyQ29tcHJlc29yKCkge1xuICBjb25zdCBjb21wcmVzb3JBY3Rpdm9DaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wcmVzb3ItYWN0aXZvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFjb21wcmVzb3JBY3Rpdm9DaGVja2JveCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIGNvbXByZXNvciBhY3Rpdm9cIik7XG4gIGNvbnN0IHRocmVzaG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlc2hvbGQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXRocmVzaG9sZCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB0aHJlc2hvbGRcIik7XG4gIGNvbnN0IHJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGlvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFyYXRpbykgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSByYXRpb1wiKTtcbiAgY29uc3Qga25lZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrbmVlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFrbmVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGtuZWVcIik7XG4gIGNvbnN0IGF0dGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2snKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIWF0dGFjaykgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBhdHRhY2tcIik7XG4gIGNvbnN0IHJlbGVhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghcmVsZWFzZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSByZWxlYXNlXCIpO1xuICBcbiAgLy8gQWN0dWFsaXphciB2YWxvcmVzIG1vc3RyYWRvc1xuICBzZXRDb21wcmVzb3JQYXJhbSgndGhyZXNob2xkJywgcGFyc2VGbG9hdCh0aHJlc2hvbGQudmFsdWUpKTtcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ3JhdGlvJywgcGFyc2VGbG9hdChyYXRpby52YWx1ZSkpO1xuICBzZXRDb21wcmVzb3JQYXJhbSgna25lZScsIHBhcnNlRmxvYXQoa25lZS52YWx1ZSkpO1xuICBzZXRDb21wcmVzb3JQYXJhbSgnYXR0YWNrJywgcGFyc2VGbG9hdChhdHRhY2sudmFsdWUpKTtcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ3JlbGVhc2UnLCBwYXJzZUZsb2F0KHJlbGVhc2UudmFsdWUpKTtcbiAgXG4gIC8vIEV2ZW50IGxpc3RlbmVycyBwYXJhIGNhbWJpb3MgZW4gbG9zIGNvbnRyb2xlc1xuICBjb21wcmVzb3JBY3Rpdm9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBzZXRDb21wcmVzb3JBY3Rpdm8odGhpcy5jaGVja2VkKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIHRocmVzaG9sZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigndGhyZXNob2xkJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgc2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAgcmF0aW8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3JhdGlvJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgc2V0Q29tcHJlc29yUGFyYW0oJ3JhdGlvJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICBrbmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdrbmVlJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgc2V0Q29tcHJlc29yUGFyYW0oJ2tuZWUnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIGF0dGFjay5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcignYXR0YWNrJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgc2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAgcmVsZWFzZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigncmVsZWFzZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdyZWxlYXNlJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgYWN0dWFsaXphciBsb3MgdmFsb3JlcyBtb3N0cmFkb3MgZGVsIGNvbXByZXNvclxuZXhwb3J0IGZ1bmN0aW9uIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcih0aXBvOiBrZXlvZiBDb21wcmVzb3IsIHZhbG9yOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsb3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGlwb30tdmFsdWVgKSBhcyBIVE1MRWxlbWVudDtcbiAgXG4gIHN3aXRjaCh0aXBvKSB7XG4gICAgY2FzZSAndGhyZXNob2xkJzpcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbG9yfSBkQmA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyYXRpbyc6XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt2YWxvcn06MWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdrbmVlJzpcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbG9yfSBkQmA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhdHRhY2snOlxuICAgICAgLy8gQ29udmVydGlyIGEgbWlsaXNlZ3VuZG9zIHBhcmEgbWVqb3IgbGVnaWJpbGlkYWRcbiAgICAgIGNvbnN0IGF0dGFja01zID0gKHZhbG9yICogMTAwMCkudG9GaXhlZCgwKTtcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2F0dGFja01zfSBtc2A7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWxlYXNlJzpcbiAgICAgIC8vIENvbnZlcnRpciBhIG1pbGlzZWd1bmRvcyBwYXJhIG1lam9yIGxlZ2liaWxpZGFkXG4gICAgICBjb25zdCByZWxlYXNlTXMgPSAodmFsb3IgKiAxMDAwKS50b0ZpeGVkKDApO1xuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cmVsZWFzZU1zfSBtc2A7XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcHJlc29yLCBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IgfSBmcm9tIFwiLi9jb21wcmVzc29yLnRzXCI7XG5leHBvcnQgbGV0IGFjdGl2ZUZyZXF1ZW5jeU1hcmtlcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5leHBvcnQgbGV0IGFjdGl2ZVFNYXJrZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuZXhwb3J0IGxldCBjb21wcmVzb3JBY3Rpdm86IGJvb2xlYW4gPSBmYWxzZTtcbmV4cG9ydCBsZXQgc3RhdGljRmlsdGVyaW5nOiBib29sZWFuID0gZmFsc2U7XG5leHBvcnQgY29uc3QgZmlsdGVycyA9IFtcInN1YlwiLCBcImJhc3NcIiwgXCJsb3dNaWRcIiwgXCJtaWRcIiwgXCJoaWdoTWlkXCIsIFwiaGlnaFwiLCBcImFpclwiXTtcbmV4cG9ydCBsZXQgY29tcHJlc29yUGFyYW1zOiBDb21wcmVzb3IgPSB7XG4gIHRocmVzaG9sZDogLTI0LFxuICByYXRpbzogNCxcbiAga25lZTogMzAsXG4gIGF0dGFjazogMC4wMDMsXG4gIHJlbGVhc2U6IDAuMjVcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoZnJlcXVlbmN5OiBudW1iZXIgfCBudWxsKSB7IGFjdGl2ZUZyZXF1ZW5jeU1hcmtlciA9IGZyZXF1ZW5jeTsgfVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcigpIHsgcmV0dXJuIGFjdGl2ZUZyZXF1ZW5jeU1hcmtlcjsgfVxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVFNYXJrZXIocTogbnVtYmVyIHwgbnVsbCkgeyBhY3RpdmVRTWFya2VyID0gcTsgfVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVFNYXJrZXIoKSB7IHJldHVybiBhY3RpdmVRTWFya2VyOyB9ICAgIFxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXByZXNvckFjdGl2byhhY3Rpdm86IGJvb2xlYW4pIHsgY29tcHJlc29yQWN0aXZvID0gYWN0aXZvOyB9XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcHJlc29yQWN0aXZvKCkgeyByZXR1cm4gY29tcHJlc29yQWN0aXZvOyB9XG5leHBvcnQgZnVuY3Rpb24gc2V0Q29tcHJlc29yUGFyYW0ocGFyYW06IGtleW9mIENvbXByZXNvciwgdmFsdWU6IG51bWJlcikgeyBcbiAgICBjb21wcmVzb3JQYXJhbXNbcGFyYW1dID0gdmFsdWU7IFxuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcihwYXJhbSwgdmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXByZXNvclBhcmFtKHBhcmFtOiBrZXlvZiBDb21wcmVzb3IpIHsgcmV0dXJuIGNvbXByZXNvclBhcmFtc1twYXJhbV07IH1cbiIsImltcG9ydCB7IGFwbGljYXJDb25maWd1cmFjaW9uLCBvYnRlbmVyQ29uZmlndXJhY2lvbkFjdHVhbCB9IGZyb20gXCIuL2ludGVyZmFjZS50c1wiO1xuaW1wb3J0IHsgY2FyZ2FyTGlzdGFQcmVzZXRzIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCI7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgaW5pY2lhbGl6YXIgbG9zIGNvbnRyb2xlcyBkZSBwcmVzZXRzXG5leHBvcnQgZnVuY3Rpb24gaW5pY2lhbGl6YXJQcmVzZXRzKCkge1xuICBjb25zdCBndWFyZGFyUHJlc2V0QnRuIDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VhcmRhci1wcmVzZXQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3QgY2FyZ2FyUHJlc2V0QnRuIDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ2FyLXByZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBjb25zdCBlbGltaW5hclByZXNldEJ0biA6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsaW1pbmFyLXByZXNldCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBjb25zdCBwcmVzZXROYW1lSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldC1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcHJlc2V0U2VsZWN0IDogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gIC8vIENhcmdhciBwcmVzZXRzIGV4aXN0ZW50ZXNcbiAgY2FyZ2FyTGlzdGFQcmVzZXRzKCk7XG5cbiAgLy8gRXZlbnRvIHBhcmEgZ3VhcmRhciBwcmVzZXRcbiAgZ3VhcmRhclByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBub21icmVQcmVzZXQgPSBwcmVzZXROYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChub21icmVQcmVzZXQgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBpbmdyZXNhIHVuIG5vbWJyZSBwYXJhIGVsIHByZXNldCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9idGVuZXIgY29uZmlndXJhY2nDs24gYWN0dWFsXG4gICAgY29uc3QgY29uZmlndXJhY2lvbiA9IG9idGVuZXJDb25maWd1cmFjaW9uQWN0dWFsKCk7XG4gICAgXG4gICAgLy8gR3VhcmRhciBlbiBzdG9yYWdlXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgICBwcmVzZXRzW25vbWJyZVByZXNldF0gPSBjb25maWd1cmFjaW9uO1xuICAgICAgXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcmVzZXRzIH0sICgpID0+IHtcbiAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGd1YXJkYWRvIGNvcnJlY3RhbWVudGVgKTtcbiAgICAgICAgcHJlc2V0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNhcmdhckxpc3RhUHJlc2V0cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEV2ZW50byBwYXJhIGNhcmdhciBwcmVzZXRcbiAgY2FyZ2FyUHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWJyZVByZXNldCA9IHByZXNldFNlbGVjdC52YWx1ZTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgc2VsZWNjaW9uYSB1biBwcmVzZXQgcGFyYSBjYXJnYXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydwcmVzZXRzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYWNpb24gPSBwcmVzZXRzW25vbWJyZVByZXNldF07XG4gICAgICBcbiAgICAgIGlmIChjb25maWd1cmFjaW9uKSB7XG4gICAgICAgIGFwbGljYXJDb25maWd1cmFjaW9uKGNvbmZpZ3VyYWNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXNldCBjYXJnYWRvOlwiLCBjb25maWd1cmFjaW9uKTtcbiAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGNhcmdhZG8gY29ycmVjdGFtZW50ZWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYEVycm9yOiBObyBzZSBlbmNvbnRyw7MgZWwgcHJlc2V0IFwiJHtub21icmVQcmVzZXR9XCJgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gRXZlbnRvIHBhcmEgZWxpbWluYXIgcHJlc2V0XG4gIGVsaW1pbmFyUHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWJyZVByZXNldCA9IHByZXNldFNlbGVjdC52YWx1ZTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgc2VsZWNjaW9uYSB1biBwcmVzZXQgcGFyYSBlbGltaW5hcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maXJtKGDCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIGRlc2VhcyBlbGltaW5hciBlbCBwcmVzZXQgXCIke25vbWJyZVByZXNldH1cIj9gKSkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwcmVzZXRzW25vbWJyZVByZXNldF0pIHtcbiAgICAgICAgICBkZWxldGUgcHJlc2V0c1tub21icmVQcmVzZXRdO1xuICAgICAgICAgIFxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHByZXNldHMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlYCk7XG4gICAgICAgICAgICBjYXJnYXJMaXN0YVByZXNldHMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChgRXJyb3I6IE5vIHNlIGVuY29udHLDsyBlbCBwcmVzZXQgXCIke25vbWJyZVByZXNldH1cImApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlciwgc2V0QWN0aXZlUU1hcmtlciB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuXG5jb25zdCBNSU5fRlJFUSA9IDIwOyAgICAvLyAyMCBIelxuY29uc3QgTUFYX0ZSRVEgPSAyMDAwMDsgLy8gMjAga0h6XG5jb25zdCBPQ1RBVkVfUkFOR0UgPSBNYXRoLmxvZzIoTUFYX0ZSRVEgLyBNSU5fRlJFUSk7IC8vIEFwcm94aW1hZGFtZW50ZSAxMCBvY3RhdmFzXG5cbnR5cGUgRmlsdHJvID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZnJlcTogbnVtYmVyO1xuICAgIHE6IG51bWJlcjtcbiAgICBnYWluOiBudW1iZXI7XG4gICAgYnlwYXNzOiBib29sZWFuO1xufTtcblxubGV0IGZpbHRyb3NBY3Rpdm9zOiBGaWx0cm9bXSA9IFtdO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgYm90b25BZ3JlZ2FyRmlsdHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ3JlZ2FyLWZpbHRyb1wiKTtcbiAgICBpZiAoIWJvdG9uQWdyZWdhckZpbHRybykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgYm90w7NuIGRlIGFncmVnYXIgZmlsdHJvXCIpO1xuICAgIH1cbiAgICBib3RvbkFncmVnYXJGaWx0cm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICBjb25zdCBmaWx0cm8gPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBmcmVxOiAxMDAwLFxuICAgICAgICBxOiA1LFxuICAgICAgICBnYWluOiAwLFxuICAgICAgICBieXBhc3M6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNyZWFyRmlsdHJvQ2FyZChmaWx0cm8pO1xuICAgICAgICBmaWx0cm9zQWN0aXZvcy5wdXNoKGZpbHRybyk7XG4gICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBGdW5jacOzbiBwYXJhIGNvbnZlcnRpciB2YWxvciBkZWwgc2xpZGVyICgwLTEwMCkgYSBmcmVjdWVuY2lhICgyMC0yMDAwMCBIeikgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbmZ1bmN0aW9uIHNsaWRlclRvRnJlcShzbGlkZXJWYWx1ZTogbnVtYmVyKSB7XG4gICAgLy8gQ29udmVydGlyIGVsIHZhbG9yIGRlbCBzbGlkZXIgKDAtMTAwKSBhIHVuIHZhbG9yIGVuIGVzY2FsYSBkZSBvY3RhdmFzIGVudHJlIDIwSHogeSAyMGtIelxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1JTl9GUkVRICogTWF0aC5wb3coMiwgKHNsaWRlclZhbHVlIC8gMTAwKSAqIE9DVEFWRV9SQU5HRSkpO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNvbnZlcnRpciBmcmVjdWVuY2lhICgyMC0yMDAwMCBIeikgYSB2YWxvciBkZWwgc2xpZGVyICgwLTEwMCkgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbmZ1bmN0aW9uIGZyZXFUb1NsaWRlcihmcmVxOiBudW1iZXIpIHtcbiAgICAvLyBDb252ZXJ0aXIgbGEgZnJlY3VlbmNpYSBhIHVuIHZhbG9yIGRlIHNsaWRlciAoMC0xMDApIHVzYW5kbyBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChNYXRoLmxvZzIoZnJlcSAvIE1JTl9GUkVRKSAvIE9DVEFWRV9SQU5HRSkgKiAxMDApO1xufVxuXG5mdW5jdGlvbiBjcmVhckZpbHRyb0NhcmQoZmlsdHJvOiBGaWx0cm8pIHtcbiAgICBjb25zdCBjb250ZW5lZG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAoIWNvbnRlbmVkb3IpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjb250ZW5lZG9yIGRlIGZpbHRyb3NcIikgO1xuICAgIGNvbnRlbmVkb3IuY2xhc3NOYW1lID0gXCJmaWx0cm8tY2FyZFwiO1xuICAgIGNvbnRlbmVkb3Iuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBmaWx0cm8uaWQpO1xuXG4gICAgLy8gVmVyaWZpY2FyIHNpIGVsIG1vZG8gb3NjdXJvIGVzdMOhIGFjdGl2b1xuICAgIGNvbnN0IGlzRGFya01vZGUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyk7XG4gICAgY29uc3QgYmdDb2xvciA9IGlzRGFya01vZGUgPyBcIiMyYTJhMmFcIiA6IFwiI2Y1ZjVmZlwiO1xuICAgIGNvbnN0IHRleHRDb2xvciA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBpc0RhcmtNb2RlID8gXCIjNGEyYTJhXCIgOiBcIiNmZmRjZGNcIjtcbiAgICBjb25zdCBidXR0b25UZXh0Q29sb3IgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICBcbiAgICAvLyBBY3R1YWxpemFyIGVsIGVzdGlsbyBjb24gbG9zIGNvbG9yZXMgYXByb3BpYWRvc1xuICAgIGNvbnRlbmVkb3Iuc3R5bGUuY3NzVGV4dCA9IGBwYWRkaW5nOiA3cHg7IGJhY2tncm91bmQ6ICR7YmdDb2xvcn07IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMSk7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IGNvbG9yOiAke3RleHRDb2xvcn07YDtcbiAgICBcbiAgICBjb250ZW5lZG9yLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogM3B4O1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnlwYXNzLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luOiAwO1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImJ5cGFzcy1jaGVja2JveFwiICR7ZmlsdHJvLmJ5cGFzcyA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA1cHg7IGZvbnQtc2l6ZTogMC44NWVtO1wiPkJ5cGFzczwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWxpbWluYXJcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7YnV0dG9uQmdDb2xvcn07IGNvbG9yOiAke2J1dHRvblRleHRDb2xvcn07IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNTAlOyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyBmb250LXdlaWdodDogYm9sZDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDE0cHg7XCI+w5c8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyOyBncmlkLWdhcDogMnB4IDhweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAwLjllbTtcIj5cbiAgICAgICAgICAgIDxkaXY+RnJlcSAoSHopPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxXCIgdmFsdWU9XCIke2ZyZXFUb1NsaWRlcihmaWx0cm8uZnJlcSl9XCIgY2xhc3M9XCJmcmVxXCIgc3R5bGU9XCJmbGV4OiAxOyBtYXJnaW46IDAgNXB4IDAgMDtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyZXEtdmFsdWVcIiBzdHlsZT1cIm1pbi13aWR0aDogNDBweDsgdGV4dC1hbGlnbjogcmlnaHQ7XCI+JHtmaWx0cm8uZnJlcX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5RPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMC4xXCIgbWF4PVwiMTBcIiBzdGVwPVwiMC4xXCIgdmFsdWU9XCIke2ZpbHRyby5xfVwiIGNsYXNzPVwicVwiIHN0eWxlPVwiZmxleDogMTsgbWFyZ2luOiAwIDVweCAwIDA7XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxLXZhbHVlXCIgc3R5bGU9XCJtaW4td2lkdGg6IDQwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1wiPiR7ZmlsdHJvLnF9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+R2FpbiAoZEIpPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiLTMwXCIgbWF4PVwiMzBcIiBzdGVwPVwiMVwiIHZhbHVlPVwiJHtmaWx0cm8uZ2Fpbn1cIiBjbGFzcz1cImdhaW5cIiBzdHlsZT1cImZsZXg6IDE7IG1hcmdpbjogMCA1cHggMCAwO1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2Fpbi12YWx1ZVwiIHN0eWxlPVwibWluLXdpZHRoOiA0MHB4OyB0ZXh0LWFsaWduOiByaWdodDtcIj4ke2ZpbHRyby5nYWlufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgZnJlcVNsaWRlciA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5mcmVxXCIpO1xuICAgIGlmICghZnJlcVNsaWRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBmcmVjdWVuY2lhXCIpO1xuICAgIGNvbnN0IGZyZXFWYWx1ZSA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5mcmVxLXZhbHVlXCIpO1xuICAgIGlmICghZnJlcVZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgdmFsb3IgZGUgZnJlY3VlbmNpYVwiKTtcbiAgICBmcmVxU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZnJlY3VlbmNpYSA9IHNsaWRlclRvRnJlcShwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSkpO1xuICAgICAgICBmcmVxVmFsdWUudGV4dENvbnRlbnQgPSBmcmVjdWVuY2lhLnRvU3RyaW5nKCk7XG4gICAgICAgIGZpbHRyby5mcmVxID0gZnJlY3VlbmNpYTtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgICAgICBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoZmlsdHJvLmZyZXEpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKGZpbHRyby5xKTtcbiAgICB9KTtcblxuICAgIGZyZXFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoZmlsdHJvLmZyZXEpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKGZpbHRyby5xKTtcbiAgICB9KTtcblxuICAgIGZyZXFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIobnVsbCk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIobnVsbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBxU2xpZGVyID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLnFcIik7XG4gICAgaWYgKCFxU2xpZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIFFcIik7XG4gICAgY29uc3QgcVZhbHVlID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLnEtdmFsdWVcIik7XG4gICAgaWYgKCFxVmFsdWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCB2YWxvciBkZSBRXCIpO1xuICAgIHFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBxID0gcGFyc2VGbG9hdCh0YXJnZXQudmFsdWUpO1xuICAgICAgICBxVmFsdWUudGV4dENvbnRlbnQgPSBxLnRvU3RyaW5nKCk7XG4gICAgICAgIGZpbHRyby5xID0gcTtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKGZpbHRyby5xKTtcbiAgICB9KTtcblxuICAgIHFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoZmlsdHJvLmZyZXEpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKGZpbHRyby5xKTtcbiAgICB9KTtcblxuICAgIHFTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIobnVsbCk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIobnVsbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnYWluU2xpZGVyID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmdhaW5cIik7XG4gICAgaWYgKCFnYWluU2xpZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGdhaW5cIik7XG4gICAgY29uc3QgZ2FpblZhbHVlID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmdhaW4tdmFsdWVcIik7XG4gICAgaWYgKCFnYWluVmFsdWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCB2YWxvciBkZSBnYWluXCIpO1xuICAgIGdhaW5TbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBnYWluID0gcGFyc2VGbG9hdCh0YXJnZXQudmFsdWUpO1xuICAgICAgICBnYWluVmFsdWUudGV4dENvbnRlbnQgPSBnYWluLnRvU3RyaW5nKCk7XG4gICAgICAgIGZpbHRyby5nYWluID0gZ2FpbjtcbiAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgIH0pO1xuXG4gICAgLy8gQWdyZWdhciBldmVudG8gcGFyYSBlbCBjaGVja2JveCBkZSBieXBhc3NcbiAgICBjb25zdCBieXBhc3NDaGVja2JveCA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5ieXBhc3MtY2hlY2tib3hcIik7XG4gICAgaWYgKCFieXBhc3NDaGVja2JveCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIGJ5cGFzc1wiKTtcbiAgICBieXBhc3NDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBmaWx0cm8uYnlwYXNzID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVsaW1pbmFyQnRuID0gY29udGVuZWRvci5xdWVyeVNlbGVjdG9yKFwiLmVsaW1pbmFyXCIpO1xuICAgIGlmICghZWxpbWluYXJCdG4pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBib3TDs24gZGUgZWxpbWluYXJcIik7XG4gICAgZWxpbWluYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29udGVuZWRvci5yZW1vdmUoKTtcbiAgICAgICAgZmlsdHJvc0FjdGl2b3MgPSBmaWx0cm9zQWN0aXZvcy5maWx0ZXIoZiA9PiBmLmlkICE9PSBmaWx0cm8uaWQpO1xuICAgICAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgICAgIFxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcImVsaW1pbmFyLWZpbHRyby1kaW5hbWljb1wiLFxuICAgICAgICAgICAgZmlsdHJvSWQ6IGZpbHRyby5pZCxcbiAgICAgICAgICAgIHRhYklkOiB0YWJJZFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgICAgIHNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcihudWxsKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRyb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRyb3MtY29udGFpbmVyXCIpO1xuICAgIGlmICghZmlsdHJvc0NvbnRhaW5lcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNvbnRlbmVkb3IgZGUgZmlsdHJvc1wiKTtcbiAgICBmaWx0cm9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbmVkb3IpO1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvOiBGaWx0cm8pIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImFjdHVhbGl6YXItZmlsdHJvLWRpbmFtaWNvXCIsXG4gICAgICBmaWx0cm9JZDogZmlsdHJvLmlkLFxuICAgICAgZnJlcTogZmlsdHJvLmZyZXEsXG4gICAgICBxOiBmaWx0cm8ucSxcbiAgICAgIGdhaW46IGZpbHRyby5nYWluLFxuICAgICAgYnlwYXNzOiBmaWx0cm8uYnlwYXNzLFxuICAgICAgdGFiSWQ6IGF3YWl0IGdldEFjdGl2ZVRhYklkKClcbiAgICB9KTtcbiAgfVxuXG5mdW5jdGlvbiBndWFyZGFyRmlsdHJvcygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBmaWx0cm9zRGluYW1pY29zOiBmaWx0cm9zQWN0aXZvcyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcmdhckZpbHRyb3MoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZmlsdHJvc0RpbmFtaWNvc1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmZpbHRyb3NEaW5hbWljb3MpKSB7XG4gICAgICAgICAgICBmaWx0cm9zQWN0aXZvcyA9IGRhdGEuZmlsdHJvc0RpbmFtaWNvcztcbiAgICAgICAgICAgIGZpbHRyb3NBY3Rpdm9zLmZvckVhY2goZmlsdHJvID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBc2VndXJhcnNlIGRlIHF1ZSBlbCBmaWx0cm8gdGVuZ2EgbGEgcHJvcGllZGFkIGJ5cGFzc1xuICAgICAgICAgICAgICAgIGlmIChmaWx0cm8uYnlwYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdHJvLmJ5cGFzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcmVhckZpbHRyb0NhcmQoZmlsdHJvKTtcbiAgICAgICAgICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmFyQ2FtYmlvc1RlbWEoKTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBhY3R1YWxpemFyIGxvcyBmaWx0cm9zIGN1YW5kbyBjYW1iaWEgZWwgdGVtYVxuZXhwb3J0IGZ1bmN0aW9uIGFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zKCkge1xuICAgIGNvbnN0IGlzRGFya01vZGUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyk7XG4gICAgY29uc3QgZmlsdHJvQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmZpbHRyby1jYXJkJyk7XG4gICAgXG4gICAgZmlsdHJvQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY29uc3QgYmdDb2xvciA9IGlzRGFya01vZGUgPyBcIiMyYTJhMmFcIiA6IFwiI2Y1ZjVmZlwiO1xuICAgICAgICBjb25zdCB0ZXh0Q29sb3IgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICAgICAgXG4gICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3I7XG4gICAgICAgIGNhcmQuc3R5bGUuY29sb3IgPSB0ZXh0Q29sb3I7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbGltaW5hckJ0biA9IGNhcmQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5lbGltaW5hcicpO1xuICAgICAgICBpZiAoZWxpbWluYXJCdG4pIHtcbiAgICAgICAgICAgIGVsaW1pbmFyQnRuLnN0eWxlLmJhY2tncm91bmQgPSBpc0RhcmtNb2RlID8gXCIjNGEyYTJhXCIgOiBcIiNmZmRjZGNcIjtcbiAgICAgICAgICAgIGVsaW1pbmFyQnRuLnN0eWxlLmNvbG9yID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gT2JzZXJ2YXIgY2FtYmlvcyBlbiBlbCB0ZW1hXG5mdW5jdGlvbiBvYnNlcnZhckNhbWJpb3NUZW1hKCkge1xuICAgIC8vIEHDsWFkaXIgZXZlbnQgbGlzdGVuZXIgYWwgY2hlY2tib3ggZGUgbW9kbyBvc2N1cm9cbiAgICBjb25zdCBkYXJrTW9kZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZScpO1xuICAgIGlmIChkYXJrTW9kZUNoZWNrYm94KSB7XG4gICAgICAgIGRhcmtNb2RlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYWN0dWFsaXphckVzdGlsb0ZpbHRyb3MpO1xuICAgIH1cbn1cblxuLy8gdG8gZG86IFxuLy8gMS4gcXVlIGN1YW5kbyBzZSBkZXNhY3RpdmUgZWwgYXVkaW8sIGxhcyBiYXJyYXMgY2FpZ2FuIGNvbiBncmFjaWFcbi8vIDIuIGhhY2VyIGFuZGFyIGVsIHZvbHVtZW5cbi8vIDMuIHZlciBwb3JxdWUgbm8gc2UgY2FyZ2EgZWwgYXVkaW8gdm9sdW1lbiBjdWFuZG8gZGVzYWN0aXZvIHkgcmVhY3Rpdm8gZWwgYXVkaW8ocGVybyBzaSBlbCBzbGlkZXIpIiwiaW1wb3J0IHsgZ3VhcmRhckVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgY29tcHJlc29yUGFyYW1zLCBzZXRDb21wcmVzb3JBY3Rpdm8gfSBmcm9tIFwiLi9jb25maWcudHNcIjtcbmltcG9ydCB7IGFjdHVhbGl6YXJWYWxvckNvbXByZXNvciB9IGZyb20gXCIuL2NvbXByZXNzb3IudHNcIjtcbmltcG9ydCB7IGxvY2FsRXN0YWRvIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCI7XG5pbXBvcnQgeyBlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4gfSBmcm9tIFwiLi9jb21tdW5pY2F0aW9ucy50c1wiO1xuXG4vLyBGdW5jacOzbiBwYXJhIGFwbGljYXIgdW5hIGNvbmZpZ3VyYWNpw7NuIGNhcmdhZGFcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGxpY2FyQ29uZmlndXJhY2lvbihjb25maWc6IENvbmZpZ3VyYWNpb25JbnRlcmZhY2UpIHtcbiAgY29uc29sZS5sb2coXCJBcGxpY2FuZG8gY29uZmlndXJhY2nDs246XCIsIGNvbmZpZyk7XG4gIFxuICAvLyBBcGxpY2FyIHZvbHVtZW5cbiAgY29uc3Qgdm9sdW1lblNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWVuJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCF2b2x1bWVuU2xpZGVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB2b2x1bWVuU2xpZGVyLnZhbHVlID0gY29uZmlnLnZvbHVtZW4udG9TdHJpbmcoKTtcbiAgdXBkYXRlVm9sdW1lVGV4dChjb25maWcudm9sdW1lbik7XG4gIFxuICAvLyBBcGxpY2FyIG1vZG8gb3NjdXJvXG4gIGNvbnN0IGRhcmtNb2RlQ2hlY2tib3ggOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmIChjb25maWcuZGFya01vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIGRhcmtNb2RlQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICBkYXJrTW9kZUNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuICBcbiAgLy8gQXBsaWNhciBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yXG4gIGNvbnN0IGNvbXByZXNvckFjdGl2b0NoZWNrYm94IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wcmVzb3ItYWN0aXZvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgdGhyZXNob2xkU2xpZGVyIDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlc2hvbGQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCByYXRpb1NsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBrbmVlU2xpZGVyIDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrbmVlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgYXR0YWNrU2xpZGVyIDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2snKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCByZWxlYXNlU2xpZGVyIDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxlYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgXG4gIGNvbXByZXNvckFjdGl2b0NoZWNrYm94LmNoZWNrZWQgPSBjb25maWcuY29tcHJlc29yLmFjdGl2bztcbiAgc2V0Q29tcHJlc29yQWN0aXZvKGNvbmZpZy5jb21wcmVzb3IuYWN0aXZvKTtcbiAgXG4gIHRocmVzaG9sZFNsaWRlci52YWx1ZSA9IGNvbmZpZy5jb21wcmVzb3IudGhyZXNob2xkLnRvU3RyaW5nKCk7XG4gIGNvbXByZXNvclBhcmFtcy50aHJlc2hvbGQgPSBjb25maWcuY29tcHJlc29yLnRocmVzaG9sZDtcbiAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCd0aHJlc2hvbGQnLCBjb25maWcuY29tcHJlc29yLnRocmVzaG9sZCk7XG4gIFxuICByYXRpb1NsaWRlci52YWx1ZSA9IGNvbmZpZy5jb21wcmVzb3IucmF0aW8udG9TdHJpbmcoKTtcbiAgY29tcHJlc29yUGFyYW1zLnJhdGlvID0gY29uZmlnLmNvbXByZXNvci5yYXRpbztcbiAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyYXRpbycsIGNvbmZpZy5jb21wcmVzb3IucmF0aW8pO1xuICBcbiAga25lZVNsaWRlci52YWx1ZSA9IGNvbmZpZy5jb21wcmVzb3Iua25lZS50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMua25lZSA9IGNvbmZpZy5jb21wcmVzb3Iua25lZTtcbiAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdrbmVlJywgY29uZmlnLmNvbXByZXNvci5rbmVlKTtcbiAgXG4gIGF0dGFja1NsaWRlci52YWx1ZSA9IGNvbmZpZy5jb21wcmVzb3IuYXR0YWNrLnRvU3RyaW5nKCk7XG4gIGNvbXByZXNvclBhcmFtcy5hdHRhY2sgPSBjb25maWcuY29tcHJlc29yLmF0dGFjaztcbiAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdhdHRhY2snLCBjb25maWcuY29tcHJlc29yLmF0dGFjayk7XG4gIFxuICByZWxlYXNlU2xpZGVyLnZhbHVlID0gY29uZmlnLmNvbXByZXNvci5yZWxlYXNlLnRvU3RyaW5nKCk7XG4gIGNvbXByZXNvclBhcmFtcy5yZWxlYXNlID0gY29uZmlnLmNvbXByZXNvci5yZWxlYXNlO1xuICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3JlbGVhc2UnLCBjb25maWcuY29tcHJlc29yLnJlbGVhc2UpO1xuICBcbiAgLy8gTGltcGlhciBmaWx0cm9zIGRpbsOhbWljb3MgYWN0dWFsZXNcbiAgY29uc3QgZmlsdHJvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0cm9zLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICBpZiAoIWZpbHRyb3NDb250YWluZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBObyBzZSBlbmNvbnRyw7MgZWwgY29udGVuZWRvciBkZSBmaWx0cm9zIGRpbsOhbWljb3NcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpbHRyb3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAvLyBJbXBvcnRhciBsYSBmdW5jacOzbiBuZWNlc2FyaWEgcGFyYSBjcmVhciBmaWx0cm9zXG4gIHRyeSB7XG4gICAgaWYgKGNvbmZpZy5maWx0cm9zRGluYW1pY29zICYmIGNvbmZpZy5maWx0cm9zRGluYW1pY29zLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEd1YXJkYXIgbG9zIGZpbHRyb3MgZW4gZWwgc3RvcmFnZSBsb2NhbCBwYXJhIHF1ZSBjYXJnYXJGaWx0cm9zIGxvcyBlbmN1ZW50cmVcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGZpbHRyb3NEaW5hbWljb3M6IGNvbmZpZy5maWx0cm9zRGluYW1pY29zIH0sIGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gSW1wb3J0YXIgZWwgbcOzZHVsbyB5IGxsYW1hciBhIGNhcmdhckZpbHRyb3NcbiAgICAgICAgY29uc3QgZmlsdGVyc01vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9maWx0ZXJzX2ludGVyZmFjZS50cycpO1xuICAgICAgICBmaWx0ZXJzTW9kdWxlLmNhcmdhckZpbHRyb3MoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEVudmlhciBjb25maWd1cmFjacOzbiBhbCBvZmZzY3JlZW4gc2kgZXN0w6EgY2FwdHVyYW5kbyBhdWRpb1xuICAgICAgICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICAgICAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4oY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpIG5vIGhheSBmaWx0cm9zLCBzb2xvIGVudmlhciBsYSBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yIHkgdm9sdW1lblxuICAgICAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbihjb25maWcpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgY2FyZ2FyIGxvcyBmaWx0cm9zOlwiLCBlcnJvcik7XG4gIH1cbiAgXG4gIC8vIEd1YXJkYXIgZWwgZXN0YWRvIGFjdHVhbGl6YWRvXG4gIGd1YXJkYXJFc3RhZG8oKTtcbn1cblxuLy8gQWN0dWFsaXphciBlbCB0ZXh0byBkZWwgdmFsb3IgZGUgdm9sdW1lbiBlbiBkQlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZvbHVtZVRleHQoZGJWYWx1ZTogbnVtYmVyKSB7XG4gIGNvbnN0IHZvbHVtZVZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lbi12YWx1ZVwiKTtcbiAgaWYgKHZvbHVtZVZhbHVlRWxlbWVudCkge1xuICAgIHZvbHVtZVZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RiVmFsdWV9IGRCYDtcbiAgfVxufVxuXG50eXBlIEZpbHRyb0RpbmFtaWNvID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZnJlY3VlbmNpYTogbnVtYmVyO1xuICAgIHE6IG51bWJlcjtcbiAgICBnYW5hbmNpYTogbnVtYmVyO1xuICAgIGJ5cGFzczogYm9vbGVhbjtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBvYnRlbmVyIGxhIGNvbmZpZ3VyYWNpw7NuIGFjdHVhbFxuZXhwb3J0IGZ1bmN0aW9uIG9idGVuZXJDb25maWd1cmFjaW9uQWN0dWFsKCk6IENvbmZpZ3VyYWNpb25JbnRlcmZhY2Uge1xuICAgIGxldCBjb25mSW50ZXJmYWNlOiBDb25maWd1cmFjaW9uSW50ZXJmYWNlID0ge1xuICAgICAgICB2b2x1bWVuOiAwLFxuICAgICAgICBmaWx0cm9zRGluYW1pY29zOiBbXSxcbiAgICAgICAgY29tcHJlc29yOiB7XG4gICAgICAgICAgICBhY3Rpdm86IGZhbHNlLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgICBrbmVlOiAwLFxuICAgICAgICAgICAgYXR0YWNrOiAwLjEsXG4gICAgICAgICAgICByZWxlYXNlOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgZGFya01vZGU6IGZhbHNlXG4gICAgfTtcblxuICAvLyBPYnRlbmVyIHZhbG9yZXMgZGUgdm9sdW1lblxuICBjb25zdCB2b2x1bWVuU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZW4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXZvbHVtZW5TbGlkZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHZvbHVtZW5cIik7XG4gICAgcmV0dXJuIGNvbmZJbnRlcmZhY2U7XG4gIH0gZWxzZSBjb25mSW50ZXJmYWNlLnZvbHVtZW4gPSBwYXJzZUZsb2F0KHZvbHVtZW5TbGlkZXIudmFsdWUpO1xuICBcbiAgLy8gT2J0ZW5lciB2YWxvcmVzIGRlIGZpbHRyb3MgZGluw6FtaWNvc1xuICBjb25zdCBmaWx0cm9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRyb3MtY29udGFpbmVyJyk7XG4gIGlmICghZmlsdHJvc0NvbnRhaW5lcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIE5vIHNlIGVuY29udHLDsyBlbCBjb250ZW5lZG9yIGRlIGZpbHRyb3MgZGluw6FtaWNvc1wiKTtcbiAgICByZXR1cm4gY29uZkludGVyZmFjZTtcbiAgfVxuICBjb25zdCBmaWx0cm9zRWxlbWVudHMgPSBmaWx0cm9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0cm8tZGluYW1pY28nKTtcbiAgXG4gIGNvbnN0IGZpbHRyb3NEaW5hbWljb3M6IEZpbHRyb0RpbmFtaWNvW10gPSBbXTtcbiAgZmlsdHJvc0VsZW1lbnRzLmZvckVhY2goZmlsdHJvRWxlbWVudCA9PiB7XG4gICAgaWYgKCEoZmlsdHJvRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBFbGVtZW50byBkZSBmaWx0cm8gbm8gZXMgdW4gSFRNTEVsZW1lbnRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZnJlY3VlbmNpYUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGZpbHRyb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmZyZWN1ZW5jaWEnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHFJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaWx0cm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBnYW5hbmNpYUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGZpbHRyb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmdhbmFuY2lhJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBieXBhc3NJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaWx0cm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ieXBhc3MnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGZkIDogRmlsdHJvRGluYW1pY28gPSB7XG4gICAgICBpZDogZmlsdHJvRWxlbWVudC5kYXRhc2V0LmlkIHx8ICcnLFxuICAgICAgZnJlY3VlbmNpYTogcGFyc2VGbG9hdChmcmVjdWVuY2lhSW5wdXQudmFsdWUpLFxuICAgICAgcTogcGFyc2VGbG9hdChxSW5wdXQudmFsdWUpLFxuICAgICAgZ2FuYW5jaWE6IHBhcnNlRmxvYXQoZ2FuYW5jaWFJbnB1dC52YWx1ZSksXG4gICAgICBieXBhc3M6IGJ5cGFzc0lucHV0LmNoZWNrZWRcbiAgICB9O1xuICAgIGZpbHRyb3NEaW5hbWljb3MucHVzaChmZCk7XG4gIH0pO1xuICBcbiAgLy8gT2J0ZW5lciBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yXG4gIGNvbnN0IGNvbXByZXNvckNoZWNrYm94IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wcmVzb3ItYWN0aXZvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgY29tcHJlc29yQWN0aXZvIDogYm9vbGVhbiA9IGNvbXByZXNvckNoZWNrYm94LmNoZWNrZWQ7XG4gIGNvbnN0IHRocmVzaG9sZElucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlc2hvbGQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCByYXRpb0lucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGtuZWVJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGF0dGFja0lucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2snKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCByZWxlYXNlSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbGVhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBcbiAgY29uZkludGVyZmFjZSA9IHtcbiAgICB2b2x1bWVuOiBwYXJzZUZsb2F0KHZvbHVtZW5TbGlkZXIudmFsdWUpLFxuICAgIGZpbHRyb3NEaW5hbWljb3MsXG4gICAgY29tcHJlc29yOiB7XG4gICAgICBhY3Rpdm86IGNvbXByZXNvckFjdGl2byxcbiAgICAgIHRocmVzaG9sZDogcGFyc2VGbG9hdCh0aHJlc2hvbGRJbnB1dC52YWx1ZSksXG4gICAgICByYXRpbzogcGFyc2VGbG9hdChyYXRpb0lucHV0LnZhbHVlKSxcbiAgICAgIGtuZWU6IHBhcnNlRmxvYXQoa25lZUlucHV0LnZhbHVlKSxcbiAgICAgIGF0dGFjazogcGFyc2VGbG9hdChhdHRhY2tJbnB1dC52YWx1ZSksXG4gICAgICByZWxlYXNlOiBwYXJzZUZsb2F0KHJlbGVhc2VJbnB1dC52YWx1ZSlcbiAgICB9LFxuICAgIGRhcmtNb2RlOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJylcbiAgfTtcblxuICByZXR1cm4gY29uZkludGVyZmFjZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmFjaW9uSW50ZXJmYWNlIHtcbiAgdm9sdW1lbjogbnVtYmVyO1xuICBmaWx0cm9zRGluYW1pY29zOiBGaWx0cm9EaW5hbWljb1tdO1xuICBjb21wcmVzb3I6IHtcbiAgICBhY3Rpdm86IGJvb2xlYW47XG4gICAgdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBrbmVlOiBudW1iZXI7XG4gICAgYXR0YWNrOiBudW1iZXI7XG4gICAgcmVsZWFzZTogbnVtYmVyO1xuICB9O1xuICBkYXJrTW9kZTogYm9vbGVhbjtcbn0iLCJpbXBvcnQgeyBnZXRDb21wcmVzb3JBY3Rpdm8sIGdldENvbXByZXNvclBhcmFtLCBzZXRDb21wcmVzb3JBY3Rpdm8sIHNldENvbXByZXNvclBhcmFtLCBzdGF0aWNGaWx0ZXJpbmcsIFxuICAgIGZpbHRlcnNcbiB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW50ZXJmYWNlIEVzdGFkb01vZHMge1xuICAgIGNhcHR1cmluZ0F1ZGlvOiBib29sZWFuO1xuICAgIGRhcmtNb2RlOiBib29sZWFuO1xuICAgIGNvbXByZXNvcjoge1xuICAgICAgICBhY3Rpdm86IGJvb2xlYW47XG4gICAgICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgICAgICByYXRpbzogbnVtYmVyO1xuICAgICAgICBrbmVlOiBudW1iZXI7XG4gICAgICAgIGF0dGFjazogbnVtYmVyO1xuICAgICAgICByZWxlYXNlOiBudW1iZXI7XG4gICAgfTtcbiAgICBnYWluQXVkaW86IG51bWJlcjtcbn07XG50eXBlIGVsZW1lbnRvR3VhcmRhZG8gPSBrZXlvZiBFc3RhZG9Nb2RzOyAvLyBcImNhcHR1cmluZ0F1ZGlvXCIgfCBcImRhcmtNb2RlXCIgfCBcImNvbXByZXNvclwiIHwgXCJnYWluQXVkaW9cIlxuZXhwb3J0IGxldCBsb2NhbEVzdGFkbzogRXN0YWRvTW9kcyA9IHt9IGFzIEVzdGFkb01vZHM7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVWYWx1ZTxUIGV4dGVuZHMgZWxlbWVudG9HdWFyZGFkbz4odmFsdWVOYW1lOiBULCB2YWx1ZTogYW55KSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZXN0YWRvXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGVzdGFkbzogRXN0YWRvTW9kcyA9IGRhdGEuZXN0YWRvIHx8IHt9IGFzIEVzdGFkb01vZHM7XG4gICAgICAgIGVzdGFkb1t2YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGVzdGFkbyB9KTtcbiAgICB9KTtcbiAgICBsb2NhbEVzdGFkb1t2YWx1ZU5hbWVdID0gdmFsdWU7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY2FyZ2FyIGVsIGVzdGFkbyBndWFyZGFkb1xuZXhwb3J0IGZ1bmN0aW9uIGNhcmdhckVzdGFkbygpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZXN0YWRvXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5lc3RhZG8pIHtcbiAgICAgIGNvbnN0IGVzdGFkbyA9IGRhdGEuZXN0YWRvIGFzIEVzdGFkb01vZHM7XG4gICAgICBsb2NhbEVzdGFkbyA9IGVzdGFkbztcblxuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gRXN0YWRvIGNhcmdhZG86XCIsIGVzdGFkbyk7XG5cbiAgICAgIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgICAgICBjb25zdCBib3RvbkFjdGl2YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2YXJcIik7XG4gICAgICAgIGlmICghYm90b25BY3RpdmFyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgYm90w7NuIGRlIGFjdGl2YXJcIik7XG4gICAgICAgIGJvdG9uQWN0aXZhci50ZXh0Q29udGVudCA9IFwiRGV0ZW5lciBBdWRpbyDwn5SHXCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENhcmdhciB2b2x1bWVuXG4gICAgICBpZiAoZXN0YWRvLmdhaW5BdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHZvbHVtZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKCF2b2x1bWVuKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHZvbHVtZW5cIik7XG4gICAgICAgIHZvbHVtZW4udmFsdWUgPSBlc3RhZG8uZ2FpbkF1ZGlvLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHZvbHVtZW5fdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW4tdmFsdWVcIik7XG4gICAgICAgIGlmICghdm9sdW1lbl92YWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIHZvbHVtZW5cIik7XG4gICAgICAgIHZvbHVtZW5fdmFsdWUudGV4dENvbnRlbnQgPSBgJHtlc3RhZG8uZ2FpbkF1ZGlvfSBkQmA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENhcmdhciBtb2RvIG9zY3Vyb1xuICAgICAgaWYgKGVzdGFkby5kYXJrTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChlc3RhZG8uZGFya01vZGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICAgIGNvbnN0IGRhcmtfbW9kZV9lbmFibGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFkYXJrX21vZGVfZW5hYmxlZCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXCIpO1xuICAgICAgICAgIGRhcmtfbW9kZV9lbmFibGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgY29uc3QgZGFya19tb2RlX2VuYWJsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIWRhcmtfbW9kZV9lbmFibGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgbW9kbyBvc2N1cm9cIik7XG4gICAgICAgICAgZGFya19tb2RlX2VuYWJsZWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENhcmdhciBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yXG4gICAgICBpZiAoZXN0YWRvLmNvbXByZXNvcikge1xuICAgICAgICBjb25zdCBjb21wcmVzb3JfYWN0aXZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXByZXNvci1hY3Rpdm8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoIWNvbXByZXNvcl9hY3Rpdm8pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBjb21wcmVzb3IgYWN0aXZvXCIpO1xuICAgICAgICBjb21wcmVzb3JfYWN0aXZvLmNoZWNrZWQgPSBlc3RhZG8uY29tcHJlc29yLmFjdGl2bztcbiAgICAgICAgc2V0Q29tcHJlc29yQWN0aXZvKGVzdGFkby5jb21wcmVzb3IuYWN0aXZvKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVzaG9sZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCF0aHJlc2hvbGQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdGhyZXNob2xkXCIpO1xuICAgICAgICAgIHRocmVzaG9sZC52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IudGhyZXNob2xkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhyZXNob2xkLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLnJhdGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCByYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFyYXRpbykgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSByYXRpb1wiKTtcbiAgICAgICAgICByYXRpby52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IucmF0aW8udG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nLCBwYXJzZUZsb2F0KHJhdGlvLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLmtuZWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGtuZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFrbmVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGtuZWVcIik7XG4gICAgICAgICAga25lZS52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3Iua25lZS50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdrbmVlJywgcGFyc2VGbG9hdChrbmVlLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLmF0dGFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFhdHRhY2spIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgYXR0YWNrXCIpO1xuICAgICAgICAgIGF0dGFjay52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IuYXR0YWNrLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycsIHBhcnNlRmxvYXQoYXR0YWNrLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLnJlbGVhc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFyZWxlYXNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJlbGVhc2VcIik7XG4gICAgICAgICAgcmVsZWFzZS52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IucmVsZWFzZS50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdyZWxlYXNlJywgcGFyc2VGbG9hdChyZWxlYXNlLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vLyBHdWFyZGFyIHkgcmVzdGF1cmFyIGVzdGFkbyBkZSBsb3MgOCBzbGlkZXJzICsgZXN0YWRvIGRlIGF1ZGlvXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmRhckVzdGFkbygpIHtcbiAgY29uc3Qgdm9sdW1lbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcbiAgaWYgKCF2b2x1bWVuKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHZvbHVtZW5cIik7XG4gIGNvbnN0IGVzdGFkbzogRXN0YWRvTW9kcyA9IHsgXG4gICAgY2FwdHVyaW5nQXVkaW86IGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvLFxuICAgIGRhcmtNb2RlOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyksXG4gICAgY29tcHJlc29yOiB7XG4gICAgICBhY3Rpdm86IGdldENvbXByZXNvckFjdGl2bygpLFxuICAgICAgdGhyZXNob2xkOiBnZXRDb21wcmVzb3JQYXJhbSgndGhyZXNob2xkJyksXG4gICAgICByYXRpbzogZ2V0Q29tcHJlc29yUGFyYW0oJ3JhdGlvJyksXG4gICAgICBrbmVlOiBnZXRDb21wcmVzb3JQYXJhbSgna25lZScpLFxuICAgICAgYXR0YWNrOiBnZXRDb21wcmVzb3JQYXJhbSgnYXR0YWNrJyksXG4gICAgICByZWxlYXNlOiBnZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScpXG4gICAgfSxcbiAgICBnYWluQXVkaW86IHBhcnNlRmxvYXQodm9sdW1lbi52YWx1ZSlcbiAgfTtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJlc3RhZG9cIjogZXN0YWRvIH0pO1xuICBjb25zb2xlLmxvZyhcIltJTkZPXSBFc3RhZG8gZ3VhcmRhZG86XCIsIGVzdGFkbyk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY2FyZ2FyIGxhIGxpc3RhIGRlIHByZXNldHMgZW4gZWwgc2VsZWN0b3JcbmV4cG9ydCBmdW5jdGlvbiBjYXJnYXJMaXN0YVByZXNldHMoKSB7XG4gIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtc2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGlmICghcHJlc2V0U2VsZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2VsZWN0b3IgZGUgcHJlc2V0c1wiKTtcbiAgXG4gIC8vIExpbXBpYXIgb3BjaW9uZXMgYWN0dWFsZXNcbiAgd2hpbGUgKHByZXNldFNlbGVjdC5vcHRpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBwcmVzZXRTZWxlY3QucmVtb3ZlKDEpO1xuICB9XG4gIFxuICAvLyBDYXJnYXIgcHJlc2V0cyBkZXNkZSBzdG9yYWdlXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3ByZXNldHMnXSwgKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICBcbiAgICAvLyBBZ3JlZ2FyIGNhZGEgcHJlc2V0IGNvbW8gdW5hIG9wY2nDs25cbiAgICBPYmplY3Qua2V5cyhwcmVzZXRzKS5mb3JFYWNoKG5vbWJyZVByZXNldCA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG5vbWJyZVByZXNldDtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG5vbWJyZVByZXNldDtcbiAgICAgIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJbSU5GT10gUHJpbWVyYSBhcGVydHVyYSBkZWwgcG9wdXAgZGVzZGUgbGEgaW5pY2lhbGl6YWNpw7NuIC0gTGltcGlhbmRvIHN0b3JhZ2VcIik7XG4gIC8vIExpbXBpYXIgdG9kYXMgbGFzIHZhcmlhYmxlcyBndWFyZGFkYXNcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIoKTtcbiAgLy8gR3VhcmRhciBxdWUgZWwgYXVkaW8gZXN0w6EgZGVzYWN0aXZhZG9cbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2FwdHVyaW5nQXVkaW86IGZhbHNlIH0pO1xuICBsb2NhbEVzdGFkbyA9IHt9IGFzIEVzdGFkb01vZHM7XG59IiwidHlwZSBQb2ludCA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhQb2ludHMocG9pbnRzOiBQb2ludFtdLCB3aW5kb3dTaXplOiBudW1iZXIsIGNhbnZhc1dpZHRoOiBudW1iZXIpOiBQb2ludFtdIHtcbiAgaWYgKHBvaW50cy5sZW5ndGggPD0gd2luZG93U2l6ZSkgcmV0dXJuIHBvaW50cztcblxuICBjb25zdCBzbW9vdGhlZDogUG9pbnRbXSA9IFtdO1xuXG4gIHNtb290aGVkLnB1c2gocG9pbnRzWzBdKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAvLyBjb25zdCBhZGFwdGl2ZVdpbmRvdyA9IE1hdGgubWluKFxuICAgIGNvbnN0IGFkYXB0aXZlV2luZG93ID0gTWF0aC5tYXgoXG4gICAgICAyLFxuICAgICAgTWF0aC5mbG9vcih3aW5kb3dTaXplICogTWF0aC5wb3coKHBvaW50c1tpXS54IC8gY2FudmFzV2lkdGgpLCAyKSAqIDMpXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbGZXaW5kb3cgPSBNYXRoLmZsb29yKGFkYXB0aXZlV2luZG93IC8gMik7XG4gICAgY29uc3Qgc3RhcnRJZHggPSBNYXRoLm1heCgwLCBpIC0gaGFsZldpbmRvdyk7XG4gICAgY29uc3QgZW5kSWR4ID0gTWF0aC5taW4ocG9pbnRzLmxlbmd0aCAtIDEsIGkgKyBoYWxmV2luZG93KTtcblxuICAgIGxldCBzdW1ZID0gMDtcbiAgICBmb3IgKGxldCBqID0gc3RhcnRJZHg7IGogPD0gZW5kSWR4OyBqKyspIHtcbiAgICAgIHN1bVkgKz0gcG9pbnRzW2pdLnk7XG4gICAgfVxuXG4gICAgY29uc3QgYXZnWSA9IHN1bVkgLyAoZW5kSWR4IC0gc3RhcnRJZHggKyAxKTtcbiAgICBzbW9vdGhlZC5wdXNoKHsgeDogcG9pbnRzW2ldLngsIHk6IGF2Z1kgfSk7XG4gIH1cblxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBzbW9vdGhlZC5wdXNoKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIHNtb290aGVkO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNvbnZlcnRpciBkQiBhIHZhbG9yIGRlIGdhbmFuY2lhIHBhcmEgV2ViIEF1ZGlvIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGRiVG9HYWluKGRiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3coMTAsIGRiIC8gMjApO1xufSIsImltcG9ydCB7IHNtb290aFBvaW50cyB9IGZyb20gXCIuL3V0aWxzLnRzXCI7XG5pbXBvcnQgeyBnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIsIGdldEFjdGl2ZVFNYXJrZXIgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcblxudHlwZSBWaXN1YWxpemVyRGF0YSA9IHtcbiAgICBwcmU6IG51bWJlcltdO1xuICAgIG1pZDogbnVtYmVyW107XG4gICAgcG9zdDogbnVtYmVyW107XG4gICAgbWluRGVjaWJlbHM6IG51bWJlcjtcbiAgICBtYXhEZWNpYmVsczogbnVtYmVyO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZHJhd1Zpc3VhbGl6ZXIoZGF0YTogeyBba2V5OiBzdHJpbmddOiBudW1iZXJbXSB8IG51bWJlciB9KSB7XG5leHBvcnQgZnVuY3Rpb24gZHJhd1Zpc3VhbGl6ZXIoZGF0YTogVmlzdWFsaXplckRhdGEpIHtcbiAgY29uc3QgcHJlRGF0YTogbnVtYmVyW10gPSBkYXRhW1wicHJlXCJdIHx8IFtdO1xuICBjb25zdCBtaWREYXRhOiBudW1iZXJbXSA9IGRhdGFbXCJtaWRcIl0gfHwgW107XG4gIGNvbnN0IHBvc3REYXRhOiBudW1iZXJbXSA9IGRhdGFbXCJwb3N0XCJdIHx8IFtdO1xuICBjb25zdCBtaW5EZWNpYmVsczogbnVtYmVyID0gZGF0YVtcIm1pbkRlY2liZWxzXCJdIHx8IC0xMDA7XG4gIGNvbnN0IG1heERlY2liZWxzOiBudW1iZXIgPSBkYXRhW1wibWF4RGVjaWJlbHNcIl0gfHwgLTI1O1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc3VhbFwiKTtcbiAgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XG4gIGlmIChjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNyaXRpY2FsOiBDYW52YXMgY29udGV4dCBub3QgZm91bmQgb3IgJ3Zpc3VhbCcgZWxlbWVudCBpcyBub3QgYSBjYW52YXMuXCIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNyaXRpY2FsOiAndmlzdWFsJyBlbGVtZW50IGlzIG5vdCBhIGNhbnZhcy5cIik7XG4gIH1cblxuICBjb25zdCBidWZmZXJMZW5ndGggPSBwcmVEYXRhLmxlbmd0aDtcblxuICAvLyBEZXRlY3RhciBzaSBlbCBtb2RvIG9zY3VybyBlc3TDoSBhY3Rpdm9cbiAgY29uc3QgaXNEYXJrTW9kZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKTtcbiAgXG4gIC8vIEZvbmRvIGFkYXB0YWRvIGFsIHRlbWEgYWN0dWFsXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiMxMjEyMTJcIiA6IFwiI2ZlZmVmZVwiOyAvLyBPc2N1cm8gbyBjbGFybyBzZWfDum4gZWwgdGVtYVxuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAvLyBGdW5jacOzbiBwYXJhIG5vcm1hbGl6YXIgdmFsb3JlcyBkZSBkQiBhIGFsdHVyYSBkZSBiYXJyYSAoMC0xKVxuICBjb25zdCBub3JtYWxpemVEYiA9IChkYlZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAvLyBMaW1pdGFyIGVsIHZhbG9yIGVudHJlIG1pbkRlY2liZWxzIHkgbWF4RGVjaWJlbHNcbiAgICBjb25zdCBjbGFtcGVkRGIgPSBNYXRoLm1heChtaW5EZWNpYmVscywgTWF0aC5taW4obWF4RGVjaWJlbHMsIGRiVmFsdWUpKTtcbiAgICAvLyBOb3JtYWxpemFyIGEgdW4gdmFsb3IgZW50cmUgMCB5IDFcbiAgICByZXR1cm4gKGNsYW1wZWREYiAtIG1pbkRlY2liZWxzKSAvIChtYXhEZWNpYmVscyAtIG1pbkRlY2liZWxzKTtcbiAgfTtcblxuICAvLyBEaWJ1amFyIGVzY2FsYSBkZSBmcmVjdWVuY2lhIGxvZ2Fyw610bWljYVxuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2FhYWFhYVwiIDogXCIjYWFhXCI7XG4gIGN0eC5mb250ID0gXCIxMHB4IEFyaWFsXCI7XG4gIGNvbnN0IGZyZXFMYWJlbHMgPSBbMzAsIDYwLCAxMjAsIDI1MCwgNTAwLCAxMDAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxNzAwMF07XG4gIGZyZXFMYWJlbHMuZm9yRWFjaCgoZnJlcSwgaW5kZXgpID0+IHtcbiAgICAvLyBDb252ZXJ0aXIgZnJlY3VlbmNpYSBhIHBvc2ljacOzbiBYIHVzYW5kbyBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIGNvbnN0IG9jdGF2ZSA9IE1hdGgubG9nMihmcmVxIC8gMjApOyAvLyBOw7ptZXJvIGRlIG9jdGF2YXMgZGVzZGUgMjBIelxuICAgIGNvbnN0IHRvdGFsT2N0YXZlcyA9IE1hdGgubG9nMigxNzAwMCAvIDIwKTsgLy8gQXByb3hpbWFkYW1lbnRlIDkuNyBvY3RhdmFzIChoYXN0YSAxN2tIeilcbiAgICBsZXQgeCA9IChvY3RhdmUgLyB0b3RhbE9jdGF2ZXMpICogY2FudmFzLndpZHRoO1xuICAgIFxuICAgIC8vIEFwbGljYXIgb2Zmc2V0IGEgdG9kYXMgbGFzIGzDrW5lYXMgZXhjZXB0byBsYSDDumx0aW1hICgxN2tIeilcbiAgICBpZiAoaW5kZXggPCBmcmVxTGFiZWxzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IG9mZnNldEZhY3RvciA9IDEgLSAoaW5kZXggLyAoZnJlcUxhYmVscy5sZW5ndGggLSAxKSk7XG4gICAgICB4ICs9IDEwICogb2Zmc2V0RmFjdG9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBEaWJ1amFyIGzDrW5lYSB2ZXJ0aWNhbFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGlzRGFya01vZGUgPyBcIiMzMzMzMzNcIiA6IFwiI2RkZFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIDApO1xuICAgIGN0eC5saW5lVG8oeCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIC8vIERpYnVqYXIgZXRpcXVldGFcbiAgICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgY3R4LmZpbGxUZXh0KGZyZXEgPj0gMTAwMCA/IGAke2ZyZXEvMTAwMH1rYCA6IGZyZXEudG9TdHJpbmcoKSwgeCAtIDEwLCBjYW52YXMuaGVpZ2h0IC0gNSk7XG4gIH0pO1xuXG4gIC8vIERpYnVqYXIgZXNjYWxhIGRlIGRCXG4gIGNvbnN0IGRiTGFiZWxzID0gWy05MCwgLTgwLCAtNzAsIC02MCwgLTUwLCAtNDAsIC0zMF07XG4gIGRiTGFiZWxzLmZvckVhY2goZGIgPT4ge1xuICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC0gKG5vcm1hbGl6ZURiKGRiKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgIFxuICAgIC8vIERpYnVqYXIgbMOtbmVhIGhvcml6b250YWxcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjMzMzMzMzXCIgOiBcIiNlZWVcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCB5KTtcbiAgICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgeSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIC8vIERpYnVqYXIgZXRpcXVldGFcbiAgICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgY3R4LmZpbGxUZXh0KGAke2RifSBkQmAsIDUsIHkgKyAxMik7XG4gIH0pO1xuXG4gIC8vIENhbGN1bGFyIHBvc2ljaW9uZXMgZGUgcHVudG9zIGVuIGVzY2FsYSBkZSBvY3RhdmFzXG4gIGNvbnN0IHByZVBvaW50cyA9IFtdO1xuICBjb25zdCBtaWRQb2ludHMgPSBbXTsgXG4gIGNvbnN0IHBvc3RQb2ludHMgPSBbXTtcbiAgXG4gIC8vIENyZWFyIHBvc2ljaW9uZXMgZGUgcHVudG9zIGVuIGVzY2FsYSBkZSBvY3RhdmFzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyTGVuZ3RoOyBpKyspIHtcbiAgICAvLyBDYWxjdWxhbW9zIGxhIGZyZWN1ZW5jaWEgY29ycmVzcG9uZGllbnRlIGEgY2FkYSBiaW4gZGUgbGEgRkZUXG4gICAgLy8gTGEgRkZUIGRpdmlkZSBlbCByYW5nbyBkZSBmcmVjdWVuY2lhcyBlbiBwYXJ0ZXMgaWd1YWxlcyAobGluZWFsZXMpXG4gICAgLy8gUGVybyBxdWVyZW1vcyB2aXN1YWxpemFybGFzIGVuIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3QgZnJlcVJhdGlvID0gaSAvIGJ1ZmZlckxlbmd0aDsgLy8gUG9zaWNpw7NuIHJlbGF0aXZhIGVuIGVsIGFycmF5ICgwLTEpXG4gICAgY29uc3QgbnlxdWlzdEZyZXEgPSAyMjA1MDsgLy8gRnJlY3VlbmNpYSBtw6F4aW1hIHJlcHJlc2VudGFibGUgKHNhbXBsZVJhdGUvMilcbiAgICBcbiAgICAvLyBGcmVjdWVuY2lhIGxpbmVhbCBjb3JyZXNwb25kaWVudGUgYWwgYmluIGkgZGUgbGEgRkZUXG4gICAgY29uc3QgbGluZWFyRnJlcSA9IGZyZXFSYXRpbyAqIG55cXVpc3RGcmVxO1xuICAgIFxuICAgIC8vIFNvbG8gcHJvY2VzYW1vcyBoYXN0YSAxN2tIelxuICAgIGlmIChsaW5lYXJGcmVxID4gMTcwMDApIGJyZWFrO1xuICAgIFxuICAgIC8vIFNvbG8gaW5jbHVpbW9zIGZyZWN1ZW5jaWFzIGRlc2RlIDIwSHpcbiAgICBpZiAobGluZWFyRnJlcSA8IDIwKSBjb250aW51ZTtcbiAgICBcbiAgICAvLyBDb252ZXJ0aXIgZnJlY3VlbmNpYSBhIHBvc2ljacOzbiBYIHVzYW5kbyBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIGNvbnN0IG9jdGF2ZSA9IE1hdGgubG9nMihsaW5lYXJGcmVxIC8gMjApOyAvLyBOw7ptZXJvIGRlIG9jdGF2YXMgZGVzZGUgMjBIelxuICAgIGNvbnN0IHRvdGFsT2N0YXZlcyA9IE1hdGgubG9nMigxNzAwMCAvIDIwKTsgLy8gQXByb3hpbWFkYW1lbnRlIDkuNyBvY3RhdmFzIChoYXN0YSAxN2tIeilcbiAgICBjb25zdCB4ID0gKG9jdGF2ZSAvIHRvdGFsT2N0YXZlcykgKiBjYW52YXMud2lkdGggKiAwLjk5NTsgLy8gVXNhciBlbCB2YWxvciBleGFjdG8gZGUgb2N0YXZhc1xuICAgIFxuICAgIC8vIEFsbWFjZW5hciBwdW50b3MgY29uIHN1cyB2YWxvcmVzIGRlIGFtcGxpdHVkXG4gICAgaWYgKGkgPCBwcmVEYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIocHJlRGF0YVtpXSkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIHByZVBvaW50cy5wdXNoKHsgeCwgeSB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gTnVldm86IGFsbWFjZW5hciBwdW50b3MgcGFyYSBlbCB2aXN1YWxpemFkb3IgaW50ZXJtZWRpb1xuICAgIGlmIChpIDwgbWlkRGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC0gKG5vcm1hbGl6ZURiKG1pZERhdGFbaV0pICogY2FudmFzLmhlaWdodCk7XG4gICAgICBtaWRQb2ludHMucHVzaCh7IHgsIHkgfSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChpIDwgcG9zdERhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihwb3N0RGF0YVtpXSkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIHBvc3RQb2ludHMucHVzaCh7IHgsIHkgfSk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBBcGxpY2FyIHN1YXZpemFkbyBhIGxvcyBwdW50b3NcbiAgY29uc3Qgc21vb3RoZWRQcmVQb2ludHMgPSBzbW9vdGhQb2ludHMocHJlUG9pbnRzLCA3LCBjYW52YXMud2lkdGgpO1xuICBjb25zdCBzbW9vdGhlZE1pZFBvaW50cyA9IHNtb290aFBvaW50cyhtaWRQb2ludHMsIDcsIGNhbnZhcy53aWR0aCk7IFxuICBjb25zdCBzbW9vdGhlZFBvc3RQb2ludHMgPSBzbW9vdGhQb2ludHMocG9zdFBvaW50cywgNywgY2FudmFzLndpZHRoKTtcbiAgXG4gIC8vIEVmZWN0byBnbG93XG4gIGN0eC5zaGFkb3dCbHVyID0gMTA7XG4gIGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xuXG4gIC8vIFByZS1FUTogdmlvbGV0YSB2aXZvIGNvbiBnbG93XG4gIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuNClcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDE5MCwgOTAsIDI1NSwgMC44KVwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE5MCwgOTAsIDI1NSwgMC4zKVwiO1xuICBjdHgubGluZVdpZHRoID0gMjtcbiAgXG4gIC8vIERpYnVqYXIgbMOtbmVhIHBhcmEgcHJlLUVRXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0KTsgXG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBxdWUgdW5lIGxvcyBwdW50b3NcbiAgc21vb3RoZWRQcmVQb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfSk7XG4gIFxuICAvLyBDZXJyYXIgZWwgcGF0aCBoYXN0YSBsYSBiYXNlXG4gIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgLy8gUmVsbGVuYXIgZWwgw6FyZWEgYmFqbyBsYSBjdXJ2YVxuICBjdHguZmlsbCgpO1xuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgZGVsIGNvbnRvcm5vXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgaWYgKHNtb290aGVkUHJlUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjdHgubW92ZVRvKHNtb290aGVkUHJlUG9pbnRzWzBdLngsIHNtb290aGVkUHJlUG9pbnRzWzBdLnkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc21vb3RoZWRQcmVQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5saW5lVG8oc21vb3RoZWRQcmVQb2ludHNbaV0ueCwgc21vb3RoZWRQcmVQb2ludHNbaV0ueSk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIE51ZXZvOiBNaWQtRVEgKGRlc3B1w6lzIGRlIGZpbHRyb3MsIGFudGVzIGRlIGNvbXByZXNvcik6IGFtYXJpbGxvL25hcmFuamEgY29uIGdsb3dcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC40KVwiO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCAxODAsIDUwLCAwLjgpXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAxODAsIDUwLCAwLjMpXCI7XG4gIFxuICAvLyBEaWJ1amFyIGzDrW5lYSBwYXJhIG1pZC1FUVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCk7IFxuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgcXVlIHVuZSBsb3MgcHVudG9zXG4gIHNtb290aGVkTWlkUG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIGN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH0pO1xuICBcbiAgLy8gQ2VycmFyIGVsIHBhdGggaGFzdGEgbGEgYmFzZVxuICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIC8vIFJlbGxlbmFyIGVsIMOhcmVhIGJham8gbGEgY3VydmFcbiAgY3R4LmZpbGwoKTtcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIGRlbCBjb250b3Jub1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGlmIChzbW9vdGhlZE1pZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgY3R4Lm1vdmVUbyhzbW9vdGhlZE1pZFBvaW50c1swXS54LCBzbW9vdGhlZE1pZFBvaW50c1swXS55KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNtb290aGVkTWlkUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHgubGluZVRvKHNtb290aGVkTWlkUG9pbnRzW2ldLngsIHNtb290aGVkTWlkUG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBQb3N0LUVROiB2ZXJkZSBuZcOzbiBjbGFybyBjb24gZ2xvd1xuICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjQpXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSg1MCwgMjIwLCAxMjAsIDAuOClcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1MCwgMjIwLCAxMjAsIDAuMylcIjtcbiAgXG4gIC8vIERpYnVqYXIgbMOtbmVhIHBhcmEgcG9zdC1FUVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCk7IC8vIEVtcGV6YXIgZGVzZGUgbGEgZXNxdWluYSBpbmZlcmlvciBpenF1aWVyZGFcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIHF1ZSB1bmUgbG9zIHB1bnRvc1xuICBzbW9vdGhlZFBvc3RQb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfSk7XG4gIFxuICAvLyBDZXJyYXIgZWwgcGF0aCBoYXN0YSBsYSBiYXNlXG4gIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgLy8gUmVsbGVuYXIgZWwgw6FyZWEgYmFqbyBsYSBjdXJ2YVxuICBjdHguZmlsbCgpO1xuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgZGVsIGNvbnRvcm5vXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgaWYgKHNtb290aGVkUG9zdFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgY3R4Lm1vdmVUbyhzbW9vdGhlZFBvc3RQb2ludHNbMF0ueCwgc21vb3RoZWRQb3N0UG9pbnRzWzBdLnkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc21vb3RoZWRQb3N0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHgubGluZVRvKHNtb290aGVkUG9zdFBvaW50c1tpXS54LCBzbW9vdGhlZFBvc3RQb2ludHNbaV0ueSk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIExpbXBpYXIgZWZlY3Rvc1xuICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gIGN0eC5zaGFkb3dDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcblxuICAvLyBBZ3JlZ2FyIGxleWVuZGEgcGFyYSBsb3MgY29sb3Jlc1xuICBjb25zdCBsZWdlbmRZID0gMjA7XG4gIGNvbnN0IGxlZ2VuZFNwYWNpbmcgPSAxMjA7XG4gIFxuICAvLyBMZXllbmRhIHBhcmEgUHJlLUVRICh2aW9sZXRhKVxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE5MCwgOTAsIDI1NSwgMC44KVwiO1xuICBjdHguZmlsbFJlY3QoMTAsIGxlZ2VuZFkgLSAxMCwgMTAsIDEwKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICBjdHguZmlsbFRleHQoXCJQcmUtRVFcIiwgMjUsIGxlZ2VuZFkpO1xuICBcbiAgLy8gTGV5ZW5kYSBwYXJhIE1pZC1FUSAoYW1hcmlsbG8vbmFyYW5qYSlcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuOClcIjtcbiAgY3R4LmZpbGxSZWN0KDEwICsgbGVnZW5kU3BhY2luZywgbGVnZW5kWSAtIDEwLCAxMCwgMTApO1xuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gIGN0eC5maWxsVGV4dChcIlBvc3QtRmlsdHJvc1wiLCAyNSArIGxlZ2VuZFNwYWNpbmcsIGxlZ2VuZFkpO1xuICBcbiAgLy8gTGV5ZW5kYSBwYXJhIFBvc3QtRVEgKHZlcmRlKVxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC44KVwiO1xuICBjdHguZmlsbFJlY3QoMTAgKyBsZWdlbmRTcGFjaW5nICogMiwgbGVnZW5kWSAtIDEwLCAxMCwgMTApO1xuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gIGN0eC5maWxsVGV4dChcIlBvc3QtQ29tcHJlc29yXCIsIDI1ICsgbGVnZW5kU3BhY2luZyAqIDIsIGxlZ2VuZFkpO1xuXG4gIC8vIERpYnVqYXIgZWwgbWFyY2Fkb3IgZGUgZnJlY3VlbmNpYSBhY3RpdmEgc2kgZXhpc3RlXG4gIGNvbnN0IGFjdGl2ZUZyZXF1ZW5jeU1hcmtlciA9IGdldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlcigpO1xuICBjb25zdCBhY3RpdmVRTWFya2VyID0gZ2V0QWN0aXZlUU1hcmtlcigpO1xuICBpZiAoYWN0aXZlRnJlcXVlbmN5TWFya2VyKSB7XG4gICAgLy8gQ29udmVydGlyIGZyZWN1ZW5jaWEgYSBwb3NpY2nDs24gWCB1c2FuZG8gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmxvZzIoYWN0aXZlRnJlcXVlbmN5TWFya2VyIC8gMjApOyAvLyBOw7ptZXJvIGRlIG9jdGF2YXMgZGVzZGUgMjBIelxuICAgIGNvbnN0IHRvdGFsT2N0YXZlcyA9IE1hdGgubG9nMigxNzAwMCAvIDIwKTsgLy8gQXByb3hpbWFkYW1lbnRlIDkuNyBvY3RhdmFzIChoYXN0YSAxN2tIeilcbiAgICBjb25zdCB4ID0gKG9jdGF2ZSAvIHRvdGFsT2N0YXZlcykgKiBjYW52YXMud2lkdGggKiAwLjk5NTsgLy8gVXNhciBlbCB2YWxvciBleGFjdG8gZGUgb2N0YXZhc1xuICAgIFxuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2ZmMzM2NlwiOyAvLyBDb2xvciBsbGFtYXRpdm8gcGFyYSBlbCBtYXJjYWRvclxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIDApO1xuICAgIGN0eC5saW5lVG8oeCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIFxuICAgIC8vIEV0aXF1ZXRhIGNvbiBlbCB2YWxvciBkZSBmcmVjdWVuY2lhXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMzM2NlwiO1xuICAgIGN0eC5mb250ID0gXCIxMnB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxUZXh0KGAke2FjdGl2ZUZyZXF1ZW5jeU1hcmtlcn0gSHpgLCB4ICsgNSwgMTUpO1xuICAgIFxuICAgIC8vIERpYnVqYXIgbGEgY2FtcGFuYSBkZSBRIHNpIHRlbmVtb3MgdGFudG8gZnJlY3VlbmNpYSBjb21vIFFcbiAgICBpZiAoYWN0aXZlUU1hcmtlcikge1xuICAgICAgLy8gRGlidWphciBsYSBjYW1wYW5hXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LCA1MSwgMTAyLCAwLjcpXCI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgNTEsIDEwMiwgMC4yKVwiO1xuICAgICAgXG4gICAgICAvLyBDYWxjdWxhciBsYSBlc2NhbGEgZGUgbGEgY2FtcGFuYSBiYXNhZGEgZW4gUVxuICAgICAgLy8gQ3VhbnRvIG1heW9yIHNlYSBRLCBtw6FzIGVzdHJlY2hhIHNlcsOhIGxhIGNhbXBhbmFcbiAgICAgIGNvbnN0IHFTY2FsZSA9IE1hdGgubWF4KDIwLCAyMDAgLyBhY3RpdmVRTWFya2VyKTsgLy8gTGltaXRhciBlbCBtw61uaW1vIHBhcmEgUSBtdXkgYWx0b3NcbiAgICAgIFxuICAgICAgLy8gRGlidWphciBsYSBjdXJ2YSBkZSBjYW1wYW5hXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBcbiAgICAgIC8vIFB1bnRvcyBwYXJhIGxhIGN1cnZhXG4gICAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICAgIGNvbnN0IGNlbnRlclggPSB4O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodCAqIDAuNzsgLy8gQWx0dXJhIG3DoXhpbWEgZGUgbGEgY2FtcGFuYVxuICAgICAgXG4gICAgICAvLyBHZW5lcmFyIHB1bnRvcyBwYXJhIGxhIGN1cnZhIGRlIGNhbXBhbmEgZW4gZXNjYWxhIGxvZ2Fyw610bWljYVxuICAgICAgZm9yIChsZXQgaSA9IC1jYW52YXMud2lkdGgvMjsgaSA8PSBjYW52YXMud2lkdGgvMjsgaSArPSA1KSB7XG4gICAgICAgIGNvbnN0IHBvaW50WCA9IGNlbnRlclggKyBpO1xuICAgICAgICBpZiAocG9pbnRYID49IDAgJiYgcG9pbnRYIDw9IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgIC8vIENvbnZlcnRpciBwb3NpY2nDs24gWCBhIGZyZWN1ZW5jaWFcbiAgICAgICAgICBjb25zdCBmcmVxID0gMjAgKiBNYXRoLnBvdygxMCwgKHBvaW50WCAvIGNhbnZhcy53aWR0aCkgKiBNYXRoLmxvZzEwKDE3MDAwIC8gMjApKTtcbiAgICAgICAgICBjb25zdCBmcmVxUmF0aW8gPSBmcmVxIC8gYWN0aXZlRnJlcXVlbmN5TWFya2VyO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIEbDs3JtdWxhIGRlIGNhbXBhbmEgcGFyYSBmaWx0cm8gcGVha2luZyBlbiBlc2NhbGEgbG9nYXLDrXRtaWNhXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAxIC8gTWF0aC5zcXJ0KDEgKyBNYXRoLnBvdyhhY3RpdmVRTWFya2VyICogKGZyZXFSYXRpbyAtIDEvZnJlcVJhdGlvKSwgMikpO1xuICAgICAgICAgIGNvbnN0IHBvaW50WSA9IGNhbnZhcy5oZWlnaHQgLSBoZWlnaHQgKiByZXNwb25zZTtcbiAgICAgICAgICBcbiAgICAgICAgICBwb2ludHMucHVzaCh7eDogcG9pbnRYLCB5OiBwb2ludFl9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBEaWJ1amFyIGxhIGN1cnZhXG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHBvaW50c1swXS54LCBwb2ludHNbMF0ueSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbGxlbmFyIGVsIMOhcmVhIGJham8gbGEgY3VydmFcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbcG9pbnRzLmxlbmd0aC0xXS54LCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbMF0ueCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIE1vc3RyYXIgZWwgdmFsb3IgZGUgUVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmYzMzY2XCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgUTogJHthY3RpdmVRTWFya2VyLnRvRml4ZWQoMSl9YCwgeCArIDUsIDMwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW46XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9wcm9mZXNzaW9uYWxfYXVkaW9fcGx1Z2luXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9wcm9mZXNzaW9uYWxfYXVkaW9fcGx1Z2luXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgeyBjYXJnYXJGaWx0cm9zLCBhY3R1YWxpemFyRXN0aWxvRmlsdHJvcyB9IGZyb20gXCIuL2ZpbHRlcnNfaW50ZXJmYWNlLnRzXCI7XG5pbXBvcnQgeyBkcmF3VmlzdWFsaXplciB9IGZyb20gXCIuL3Zpc3VhbGl6ZXIudHNcIjtcbmltcG9ydCB7IHN0YXRpY0ZpbHRlcmluZywgZmlsdGVycyB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW1wb3J0IHsgaW5pY2lhbGl6YXJDb21wcmVzb3IgfSBmcm9tIFwiLi9jb21wcmVzc29yLnRzXCI7XG5pbXBvcnQgeyBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiXG5pbXBvcnQgeyBndWFyZGFyRXN0YWRvLCBjYXJnYXJFc3RhZG8sIGNhcmdhckxpc3RhUHJlc2V0cywgY2xlYXJTdG9yYWdlLCBzYXZlVmFsdWUgfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGFwbGljYXJDb25maWd1cmFjaW9uLCB1cGRhdGVWb2x1bWVUZXh0LCBvYnRlbmVyQ29uZmlndXJhY2lvbkFjdHVhbCB9IGZyb20gXCIuL2ludGVyZmFjZS50c1wiO1xuaW1wb3J0IHsgZGJUb0dhaW4gfSBmcm9tIFwiLi91dGlscy50c1wiO1xuaW1wb3J0IHsgaW5pY2lhbGl6YXJQcmVzZXRzLCBpbmljaWFsaXphckV2ZW50b3MgfSBmcm9tIFwiLi9ldmVudHMudHNcIjtcblxubGV0IG9mZnNjcmVlblBvcnQgPSBudWxsO1xubGV0IGxvb3BzID0gbnVsbDtcbmxldCBkZWJ1Z19jb3VudGVyID0gMTtcblxuXG4vLyBTZW5kZXJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIFdhaXQgZm9yIHpoZSBET00gdG8gbG9hZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm90b25DYXB0dXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmFyXCIpO1xuICBjb25zdCBkZWJ1Z0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlc3RhZG9cIik7XG4gIGNvbnN0IGRlYnVnQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z1wiKTtcbiAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2FyZ2FuZG8uLi5cIjtcblxuICAvLyBJbmljaWFsaXphciBsb3MgYm90b25lcyBkZSBwcmVzZXRzXG4gIGNvbnNvbGUubG9nKFwiSW5pY2lhbGl6YW5kbyBwcmVzZXRzLi4uXCIpXG4gIGluaWNpYWxpemFyUHJlc2V0cygpO1xuICAvLyBDYXJnYXIgZXN0YWRvIGd1YXJkYWRvXG4gIGNvbnNvbGUubG9nKFwiSW5pY2lhbGl6YW5kbyBjYXJnYW5kb0VzdGFkby4uLlwiKVxuICBjYXJnYXJFc3RhZG8oKTtcbiAgY29uc29sZS5sb2coXCJFc3RhZG8gY2FyZ2FkbzpcIiwgbG9jYWxFc3RhZG8pO1xuICBcbiAgLy8gVmVyaWZpY2FyIHNpIGVzIGxhIHByaW1lcmEgdmV6IHF1ZSBzZSBhYnJlIGVsIHBvcHVwIGRlc2RlIGxhIGluaWNpYWxpemFjacOzblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY2hlY2stZmlyc3QtcG9wdXAtb3BlblwiLFxuICAgICAgdGFyZ2V0OiBcImJhY2tncm91bmRcIlxuICAgIH0pO1xuICAgIFxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5pc0ZpcnN0T3Blbikge1xuICAgICAgYXdhaXQgY2xlYXJTdG9yYWdlKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIEVycm9yIGFsIHZlcmlmaWNhciBwcmltZXJhIGFwZXJ0dXJhOlwiLCBlcnJvcik7XG4gIH1cblxuICBjYXJnYXJGaWx0cm9zKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcIm9mZnNjcmVlbi13YWtldXBcIiwgdGFyZ2V0OiBcImJhY2tncm91bmRcIiB9KTtcblxuICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8g8J+Uh1wiO1xuICAgIG9wZW5PZmZzY3JlZW5Qb3J0KCk7XG4gIH0gZWxzZSB7XG4gICAgYm90b25DYXB0dXJhLnRleHRDb250ZW50ID0gXCJBY3RpdmFyIEF1ZGlvIPCfjqRcIjtcbiAgfVxuXG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAvLyBjb25leGlvbiBQMlBcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcIm9mZnNjcmVlbi1hbGl2ZVwiKSB7XG4gICAgICBpZiAoIW9mZnNjcmVlblBvcnQpIHtcbiAgICAgICAgYXdhaXQgb3Blbk9mZnNjcmVlblBvcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRlYnVnQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEZWJ1ZyBidXR0b24gY2xpY2tlZFwiKTtcbiAgICBkZWJ1Z0xhYmVsLnRleHRDb250ZW50ID0gXCJEZWJ1Z2dpbmcuLi5cIjtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiZGVidWdcIiAsIHRhYklkOiBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpfSk7XG4gIH0pO1xuXG4gIGJvdG9uQ2FwdHVyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcblxuICAgIGlmICghbG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiZW50cmUgaXNBY3RpdmVcIilcbiAgICAgIGlmICghdGFiLnVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFMRVJUXCIpXG4gICAgICAgIGFsZXJ0KFwiW3BvcHVwXSBObyBzZSBwdWVkZSBjYXB0dXJhciBlc3RhIHBlc3Rhw7FhLiBBYnLDrSB1bmEgcMOhZ2luYSB3ZWIgY29uIGF1ZGlvIFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RyZWFtSWQgPSBhd2FpdCBjaHJvbWUudGFiQ2FwdHVyZS5nZXRNZWRpYVN0cmVhbUlkKHsgdGFyZ2V0VGFiSWQ6IHRhYklkIH0pO1xuICAgICAgY29uc3QgZXFWYWxvcmVzID0ge31cbiAgICAgIGlmIChzdGF0aWNGaWx0ZXJpbmcpIHtcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICBlcVZhbG9yZXNbZmlsdGVyXSA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmlsdGVyKS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInN0YXJ0LXByb2Nlc3NpbmdcIixcbiAgICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgICB0YWJJZCxcbiAgICAgICAgc3RyZWFtSWQsXG4gICAgICAgIGxldmVsOiBkYlRvR2FpbihwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lblwiKS52YWx1ZSkpLFxuICAgICAgICAuLi5lcVZhbG9yZXMsXG4gICAgICB9KTtcbiAgICAgIGJvdG9uQ2FwdHVyYS50ZXh0Q29udGVudCA9IFwiRGV0ZW5lciBBdWRpbyDwn5SHXCI7XG4gICAgICBzYXZlVmFsdWUoXCJjYXB0dXJpbmdBdWRpb1wiLCB0cnVlKTtcbiAgICAgIGlmIChvZmZzY3JlZW5Qb3J0KSB7XG4gICAgICAgIG9mZnNjcmVlblBvcnQucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInN0YXJ0LXN0cmVhbVwiLCB0YWJJZCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IG9wZW5PZmZzY3JlZW5Qb3J0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1dBUk5JTkddIE9wZW5lZCBvZmZzY3JlZW4gcG9ydCBiZWNhdXNlIGl0IHdhcyBjbG9zZWRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghb2Zmc2NyZWVuUG9ydCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltXQVJOSU5HXSBObyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiRGV0ZW5pZW5kbyBhdWRpby4uLlwiICsgZGVidWdfY291bnRlcisrO1xuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInN0b3AtcHJvY2Vzc2luZ1wiLFxuICAgICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICAgIHRhYklkLFxuICAgICAgfSk7XG4gICAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkFjdGl2YXIgQXVkaW8g8J+OpFwiO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUobG9vcHMpO1xuICAgICAgbG9vcHMgPSBudWxsO1xuICAgICAgc2F2ZVZhbHVlKFwiY2FwdHVyaW5nQXVkaW9cIiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG5cbiAgLy8gQWdyZWdhciBldmVudG8gcGFyYSBlbCBjaGVja2JveCBkZSBtb2RvIG9zY3Vyb1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstbW9kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgfVxuICAgIFxuICAgIC8vIEFjdHVhbGl6YXIgZXN0aWxvcyBkZSBsb3MgZmlsdHJvcyBjdWFuZG8gY2FtYmllIGVsIHRlbWFcbiAgICBhY3R1YWxpemFyRXN0aWxvRmlsdHJvcygpO1xuICAgIFxuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG5cbiAgLy8gSW5pY2lhbGl6YXIgZWwgdGV4dG8gZGVsIHZvbHVtZW5cbiAgY29uc3Qgdm9sdW1lblNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lblwiKTtcbiAgaWYgKHZvbHVtZW5TbGlkZXIpIHtcbiAgICB1cGRhdGVWb2x1bWVUZXh0KHZvbHVtZW5TbGlkZXIudmFsdWUpO1xuICB9XG5cbiAgLy8gQWdyZWdhciBldmVudG8gcGFyYSBlbCBzbGlkZXIgZGUgdm9sdW1lblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICAgIGNvbnN0IHZvbHVtZW5WYWx1ZSA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpO1xuICAgIFxuICAgIC8vIEFjdHVhbGl6YXIgZWwgdGV4dG8gcXVlIG11ZXN0cmEgZWwgdmFsb3IgZW4gZEJcbiAgICB1cGRhdGVWb2x1bWVUZXh0KHZvbHVtZW5WYWx1ZSk7XG4gICAgXG4gICAgLy8gRW52aWFyIGVsIG1lbnNhamUgcGFyYSBhanVzdGFyIGVsIHZvbHVtZW5cbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImFqdXN0YXItdm9sdW1lblwiLFxuICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgdGFiSWQsXG4gICAgICBsZXZlbDogZGJUb0dhaW4odm9sdW1lblZhbHVlKSwgLy8gQ29udmVydGlyIGRCIGEgZ2FuYW5jaWFcbiAgICB9KTtcbiAgICBcbiAgICAvLyBHdWFyZGFyIGVsIGVzdGFkbyBkZWwgdm9sdW1lblxuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG5cbiAgZmlsdGVycy5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwiYWp1c3Rhci1maWx0cm9cIixcbiAgICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgICB0YWJJZCxcbiAgICAgICAgYmFuZGE6IGlkLFxuICAgICAgICB2YWxvcjogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSksXG4gICAgICB9KTtcbiAgICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gSW5pY2lhbGl6YXIgY29udHJvbGVzIGRlbCBjb21wcmVzb3JcbiAgaW5pY2lhbGl6YXJDb21wcmVzb3IoKTtcbn0pO1xuXG53aW5kb3cuZ2V0QWN0aXZlVGFiSWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gIHJldHVybiB0YWIuaWQ7XG59O1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZykgPT4ge1xuICBpZiAobXNnLnR5cGUgPT09IFwidmlzdWFsaXplci1kYXRhXCIgJiYgbXNnLmRhdGEpIHtcbiAgICBkcmF3VmlzdWFsaXplcihtc2cuZGF0YSk7XG4gIH1cbn0pO1xuXG5cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVmlzdWFsaXplcigpIHtcbiAgYXN5bmMgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICBpZiAob2Zmc2NyZWVuUG9ydCkge1xuICAgICAgb2Zmc2NyZWVuUG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwiZ2l2ZS1tZS12aXpcIixcbiAgICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgICB0YWJJZDogYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJbcG9wdXBdIE5vIGhheSBwdWVydG8gb2Zmc2NyZWVuXCIpO1xuICAgICAgYWxlcnQoXCJbcG9wdXBdIE5vIGhheSBwdWVydG8gb2Zmc2NyZWVuXCIpO1xuICAgICAgZXN0YWRvLnRleHRDb250ZW50ID0gXCJubyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICBsb29wcyA9IGlkO1xuICB9XG4gIGxvb3AoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3Blbk9mZnNjcmVlblBvcnQgKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICBvZmZzY3JlZW5Qb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IFwicG9wdXAtdmlzdWFsaXplclwifSk7XG4gICAgZXN0YWRvLnRleHRDb250ZW50ID0gXCJDb25lY3RhZG8gYWwgb2Zmc2NyZWVuXCI7XG4gICAgb2Zmc2NyZWVuUG9ydC5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtc3RyZWFtXCIsIHRhYklkIH0pO1xuXG4gICAgb2Zmc2NyZWVuUG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgZXN0YWRvLnRleHRDb250ZW50ID0gXCJEZXNjb25lY3RhZG8gZGVsIG9mZnNjcmVlblwiO1xuICAgIH0pO1xuXG4gICAgb2Zmc2NyZWVuUG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwidmlzdWFsaXplci1kYXRhXCIpIHtcbiAgICAgICAgZHJhd1Zpc3VhbGl6ZXIobWVzc2FnZS5kYXRhKTtcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09IFwic3RhcnQtc3RyZWFtXCIpIHtcbiAgICAgICAgdXBkYXRlVmlzdWFsaXplcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwiRXJyb3IgYWwgY29uZWN0YXIgYWwgb2Zmc2NyZWVuXCI7XG4gICAgY29uc29sZS5lcnJvcihcIltQT1BVUF0gRXJyb3IgYWwgY29uZWN0YXIgYWwgb2Zmc2NyZWVuOlwiLCBlcnJvcik7XG4gIH1cbn1cblxuaW5pY2lhbGl6YXJQcmVzZXRzKCk7XG4vLyBpbmljaWFsaXphckV2ZW50b3MoKTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImRiVG9HYWluIiwibG9jYWxFc3RhZG8iLCJjb21wcmVzb3JBY3Rpdm8iLCJjb21wcmVzb3JQYXJhbXMiLCJlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4iLCJfeCIsIl9lbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4iLCJfY2FsbGVlIiwiY29uZmlnIiwidGFiSWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0QWN0aXZlVGFiSWQiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXQiLCJsZXZlbCIsInZvbHVtZW4iLCJlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yIiwiX2VudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNhcHR1cmluZ0F1ZGlvIiwiYWN0aXZvIiwicGFyYW1zIiwidGhyZXNob2xkIiwicmF0aW8iLCJrbmVlIiwiYXR0YWNrIiwicmVsZWFzZSIsInNldENvbXByZXNvckFjdGl2byIsInNldENvbXByZXNvclBhcmFtIiwiZ3VhcmRhckVzdGFkbyIsImluaWNpYWxpemFyQ29tcHJlc29yIiwiY29tcHJlc29yQWN0aXZvQ2hlY2tib3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyc2VGbG9hdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwiYWN0dWFsaXphclZhbG9yQ29tcHJlc29yIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJ0aXBvIiwidmFsb3IiLCJ2YWxvckVsZW1lbnQiLCJjb25jYXQiLCJ0ZXh0Q29udGVudCIsImF0dGFja01zIiwidG9GaXhlZCIsInJlbGVhc2VNcyIsImFjdGl2ZUZyZXF1ZW5jeU1hcmtlciIsImFjdGl2ZVFNYXJrZXIiLCJzdGF0aWNGaWx0ZXJpbmciLCJmaWx0ZXJzIiwic2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyIiwiZnJlcXVlbmN5IiwiZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyIiwic2V0QWN0aXZlUU1hcmtlciIsInEiLCJnZXRBY3RpdmVRTWFya2VyIiwiZ2V0Q29tcHJlc29yQWN0aXZvIiwicGFyYW0iLCJnZXRDb21wcmVzb3JQYXJhbSIsImFwbGljYXJDb25maWd1cmFjaW9uIiwib2J0ZW5lckNvbmZpZ3VyYWNpb25BY3R1YWwiLCJjYXJnYXJMaXN0YVByZXNldHMiLCJpbmljaWFsaXphclByZXNldHMiLCJndWFyZGFyUHJlc2V0QnRuIiwiY2FyZ2FyUHJlc2V0QnRuIiwiZWxpbWluYXJQcmVzZXRCdG4iLCJwcmVzZXROYW1lSW5wdXQiLCJwcmVzZXRTZWxlY3QiLCJub21icmVQcmVzZXQiLCJ0cmltIiwiYWxlcnQiLCJjb25maWd1cmFjaW9uIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwicHJlc2V0cyIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25maXJtIiwiTUlOX0ZSRVEiLCJNQVhfRlJFUSIsIk9DVEFWRV9SQU5HRSIsIk1hdGgiLCJsb2cyIiwiZmlsdHJvc0FjdGl2b3MiLCJib3RvbkFncmVnYXJGaWx0cm8iLCJpZCIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJmaWx0cm8iLCJmcmVxIiwiZ2FpbiIsImJ5cGFzcyIsImNyZWFyRmlsdHJvQ2FyZCIsImVudmlhckFjdHVhbGl6YWNpb24iLCJndWFyZGFyRmlsdHJvcyIsInNsaWRlclRvRnJlcSIsInNsaWRlclZhbHVlIiwicm91bmQiLCJwb3ciLCJmcmVxVG9TbGlkZXIiLCJjb250ZW5lZG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImlzRGFya01vZGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvblRleHRDb2xvciIsInN0eWxlIiwiY3NzVGV4dCIsImlubmVySFRNTCIsImZyZXFTbGlkZXIiLCJxdWVyeVNlbGVjdG9yIiwiZnJlcVZhbHVlIiwiY3VycmVudFRhcmdldCIsImZyZWN1ZW5jaWEiLCJ0b1N0cmluZyIsInFTbGlkZXIiLCJxVmFsdWUiLCJnYWluU2xpZGVyIiwiZ2FpblZhbHVlIiwiYnlwYXNzQ2hlY2tib3giLCJlbGltaW5hckJ0biIsInJlbW92ZSIsImZpbHRlciIsImZpbHRyb0lkIiwiZmlsdHJvc0NvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiX2VudmlhckFjdHVhbGl6YWNpb24iLCJ0MCIsInQxIiwidDIiLCJ0MyIsInQ0IiwidDUiLCJ0NiIsInQ3IiwiZmlsdHJvc0RpbmFtaWNvcyIsImNhcmdhckZpbHRyb3MiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwib2JzZXJ2YXJDYW1iaW9zVGVtYSIsImFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zIiwiZmlsdHJvQ2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZCIsImJhY2tncm91bmQiLCJjb2xvciIsImRhcmtNb2RlQ2hlY2tib3giLCJfYXBsaWNhckNvbmZpZ3VyYWNpb24iLCJ2b2x1bWVuU2xpZGVyIiwidGhyZXNob2xkU2xpZGVyIiwicmF0aW9TbGlkZXIiLCJrbmVlU2xpZGVyIiwiYXR0YWNrU2xpZGVyIiwicmVsZWFzZVNsaWRlciIsImVycm9yIiwidXBkYXRlVm9sdW1lVGV4dCIsImRhcmtNb2RlIiwiYWRkIiwiY29tcHJlc29yIiwiZmlsdGVyc01vZHVsZSIsImRiVmFsdWUiLCJ2b2x1bWVWYWx1ZUVsZW1lbnQiLCJjb25mSW50ZXJmYWNlIiwiZmlsdHJvc0VsZW1lbnRzIiwiZmlsdHJvRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiZnJlY3VlbmNpYUlucHV0IiwicUlucHV0IiwiZ2FuYW5jaWFJbnB1dCIsImJ5cGFzc0lucHV0IiwiZmQiLCJkYXRhc2V0IiwiZ2FuYW5jaWEiLCJjb21wcmVzb3JDaGVja2JveCIsInRocmVzaG9sZElucHV0IiwicmF0aW9JbnB1dCIsImtuZWVJbnB1dCIsImF0dGFja0lucHV0IiwicmVsZWFzZUlucHV0Iiwic2F2ZVZhbHVlIiwidmFsdWVOYW1lIiwiZXN0YWRvIiwiY2FyZ2FyRXN0YWRvIiwiYm90b25BY3RpdmFyIiwiZ2FpbkF1ZGlvIiwidm9sdW1lbl92YWx1ZSIsImRhcmtfbW9kZV9lbmFibGVkIiwiY29tcHJlc29yX2FjdGl2byIsIm9wdGlvbnMiLCJvcHRpb24iLCJjbGVhclN0b3JhZ2UiLCJfY2xlYXJTdG9yYWdlIiwiY2xlYXIiLCJzbW9vdGhQb2ludHMiLCJwb2ludHMiLCJ3aW5kb3dTaXplIiwiY2FudmFzV2lkdGgiLCJzbW9vdGhlZCIsImFkYXB0aXZlV2luZG93IiwibWF4IiwiZmxvb3IiLCJ4IiwiaGFsZldpbmRvdyIsInN0YXJ0SWR4IiwiZW5kSWR4IiwibWluIiwic3VtWSIsImoiLCJhdmdZIiwiZGIiLCJkcmF3VmlzdWFsaXplciIsInByZURhdGEiLCJtaWREYXRhIiwicG9zdERhdGEiLCJtaW5EZWNpYmVscyIsIm1heERlY2liZWxzIiwiY2FudmFzIiwiY3R4IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJnZXRDb250ZXh0IiwiYnVmZmVyTGVuZ3RoIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm5vcm1hbGl6ZURiIiwiY2xhbXBlZERiIiwiZm9udCIsImZyZXFMYWJlbHMiLCJpbmRleCIsIm9jdGF2ZSIsInRvdGFsT2N0YXZlcyIsIm9mZnNldEZhY3RvciIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFRleHQiLCJkYkxhYmVscyIsInByZVBvaW50cyIsIm1pZFBvaW50cyIsInBvc3RQb2ludHMiLCJmcmVxUmF0aW8iLCJueXF1aXN0RnJlcSIsImxpbmVhckZyZXEiLCJzbW9vdGhlZFByZVBvaW50cyIsInNtb290aGVkTWlkUG9pbnRzIiwic21vb3RoZWRQb3N0UG9pbnRzIiwic2hhZG93Qmx1ciIsInNoYWRvd09mZnNldFgiLCJzaGFkb3dPZmZzZXRZIiwic2hhZG93Q29sb3IiLCJwb2ludCIsImNsb3NlUGF0aCIsImZpbGwiLCJsZWdlbmRZIiwibGVnZW5kU3BhY2luZyIsInFTY2FsZSIsImNlbnRlclgiLCJwb2ludFgiLCJsb2cxMCIsInJlc3BvbnNlIiwic3FydCIsInBvaW50WSIsImluaWNpYWxpemFyRXZlbnRvcyIsIm9mZnNjcmVlblBvcnQiLCJsb29wcyIsImRlYnVnX2NvdW50ZXIiLCJzZW5kTWVzc2FnZVByb21pc2UiLCJtZXNzYWdlIiwicmVqZWN0IiwibGFzdEVycm9yIiwiYm90b25DYXB0dXJhIiwiZGVidWdMYWJlbCIsImRlYnVnQnV0dG9uIiwiaXNGaXJzdE9wZW4iLCJvcGVuT2Zmc2NyZWVuUG9ydCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiX3JlZjIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJfeDIiLCJfeDMiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUyIiwidGFiIiwic3RyZWFtSWQiLCJlcVZhbG9yZXMiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiX3NsaWNlZFRvQXJyYXkiLCJ1cmwiLCJzdGFydHNXaXRoIiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIl9vYmplY3RTcHJlYWQiLCJwb3N0TWVzc2FnZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX3JlZjUiLCJ2b2x1bWVuVmFsdWUiLCJfeDQiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJfcmVmNiIsImJhbmRhIiwiX3g1Iiwid2luZG93IiwiX2NhbGxlZTciLCJfeWllbGQkY2hyb21lJHRhYnMkcXUzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1NCIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIm1zZyIsInVwZGF0ZVZpc3VhbGl6ZXIiLCJfdXBkYXRlVmlzdWFsaXplciIsIl9jYWxsZWU5IiwibG9vcCIsIl9sb29wIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX2xvb3AzIiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJhc3NlcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfbG9vcDIiLCJfb3Blbk9mZnNjcmVlblBvcnQiLCJfY2FsbGVlMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsImNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9