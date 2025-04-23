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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var offscreenPort = null;
var loops = null;
var debug_counter = 1;

// Sender
function sendMessagePromise(message) {
  console.log("[DEBUG] Enviando mensaje:", message);
  return new Promise(function (resolve, reject) {
    try {
      chrome.runtime.sendMessage(message, function (response) {
        console.log("[DEBUG] Respuesta recibida en sendMessagePromise:", response);
        if (chrome.runtime.lastError) {
          console.error("[DEBUG] Error en sendMessagePromise:", chrome.runtime.lastError);
          reject(chrome.runtime.lastError);
        } else {
          resolve(response);
        }
      });
    } catch (err) {
      console.error("[DEBUG] Error al enviar mensaje:", err);
      reject(err);
    }
  });
}

// Wait for zhe DOM to load
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  var botonCaptura, debugLabel, debugButton, _handleFirstOpen, volumenSlider;
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
        try {
          console.log("[DEBUG] Verificando primera apertura del popup...");

          // En lugar de esperar una respuesta síncrona, enviamos el mensaje
          // y configuramos un listener para la respuesta
          chrome.runtime.sendMessage({
            type: "check-first-popup-open",
            target: "background"
          });

          // Escuchamos por un mensaje específico desde el background 
          // (agregaremos este handler en background.ts)
          _handleFirstOpen = function handleFirstOpen(message) {
            if (message.type === "first-open-response") {
              console.log("[DEBUG] Respuesta de primera apertura recibida:", message);

              // Removemos el listener para evitar múltiples respuestas
              chrome.runtime.onMessage.removeListener(_handleFirstOpen);
              if (message.isFirstOpen) {
                console.log("[DEBUG] Es primera apertura, limpiando storage...");
                (0,_state_memory_ts__WEBPACK_IMPORTED_MODULE_4__.clearStorage)().then(function () {
                  console.log("[DEBUG] Storage limpiado correctamente");
                });
              }
            }
          }; // Agregamos el listener
          chrome.runtime.onMessage.addListener(_handleFirstOpen);
        } catch (error) {
          console.error("[ERROR] Error al verificar primera apertura:", error);
          console.log("[DEBUG] Tipo de error:", _typeof(error));
          console.log("[DEBUG] Propiedades del error:", Object.keys(error));
          if (error.message) console.log("[DEBUG] Mensaje de error:", error.message);
          if (error.stack) console.log("[DEBUG] Stack trace:", error.stack);
        }
        console.log("[DEBUG] Cargando filtros...");
        (0,_filters_interface_ts__WEBPACK_IMPORTED_MODULE_0__.cargarFiltros)();
        console.log("[DEBUG] Enviando mensaje offscreen-wakeup...");
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
      case 24:
      case "end":
        return _context6.stop();
    }
  }, _callee6);
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
    var configuracion = (0,_interface_ts__WEBPACK_IMPORTED_MODULE_5__.obtenerConfiguracionActual)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZcUosWUFBWSwrQkFBMkIsQ0FBQztZQUN6REwsb0VBQWtCLENBQUMsQ0FBQztVQUN0QixDQUFDLENBQUM7UUFDSixDQUFDLE1BQU07VUFDTHlILEtBQUsseUNBQUF6USxNQUFBLENBQXFDcUosWUFBWSxPQUFHLENBQUM7UUFDNUQ7TUFDRixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9jb21tdW5pY2F0aW9ucy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9jb21wcmVzc29yLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9maWx0ZXJzX2ludGVyZmFjZS50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvc3RhdGVfbWVtb3J5LnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL3Zpc3VhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYlRvR2FpbiB9IGZyb20gXCIuL3V0aWxzLnRzXCI7XG5pbXBvcnQgeyBDb25maWd1cmFjaW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlLnRzXCI7XG5pbXBvcnQgeyBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgY29tcHJlc29yQWN0aXZvLCBjb21wcmVzb3JQYXJhbXMgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcblxuLy8gRnVuY2nDs24gcGFyYSBlbnZpYXIgbGEgY29uZmlndXJhY2nDs24gYWwgb2Zmc2NyZWVuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuKGNvbmZpZzogQ29uZmlndXJhY2lvbkludGVyZmFjZSkge1xuICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gIFxuICAvLyBFbnZpYXIgY29uZmlndXJhY2nDs24gZGVsIHZvbHVtZW5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6IFwiYWp1c3Rhci12b2x1bWVuXCIsXG4gICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgIHRhYklkLFxuICAgIGxldmVsOiBkYlRvR2Fpbihjb25maWcudm9sdW1lbilcbiAgfSk7XG4gIFxuICAvLyBFbnZpYXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgZW52aWFyIGxhIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3IgYWwgc2NyaXB0IG9mZnNjcmVlblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKSB7XG4gIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImFqdXN0YXItY29tcHJlc29yXCIsXG4gICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICB0YWJJZCxcbiAgICAgIGFjdGl2bzogY29tcHJlc29yQWN0aXZvLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHRocmVzaG9sZDogY29tcHJlc29yUGFyYW1zLnRocmVzaG9sZCxcbiAgICAgICAgcmF0aW86IGNvbXByZXNvclBhcmFtcy5yYXRpbyxcbiAgICAgICAga25lZTogY29tcHJlc29yUGFyYW1zLmtuZWUsXG4gICAgICAgIGF0dGFjazogY29tcHJlc29yUGFyYW1zLmF0dGFjayxcbiAgICAgICAgcmVsZWFzZTogY29tcHJlc29yUGFyYW1zLnJlbGVhc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IHNldENvbXByZXNvckFjdGl2bywgZ2V0Q29tcHJlc29yQWN0aXZvLCBzZXRDb21wcmVzb3JQYXJhbSwgZ2V0Q29tcHJlc29yUGFyYW0sIGNvbXByZXNvckFjdGl2bywgY29tcHJlc29yUGFyYW1zIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgeyBndWFyZGFyRXN0YWRvLCBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvciB9IGZyb20gXCIuL2NvbW11bmljYXRpb25zLnRzXCI7XG5cblxuZXhwb3J0IHR5cGUgQ29tcHJlc29yID0ge1xuICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAga25lZTogbnVtYmVyO1xuICAgIGF0dGFjazogbnVtYmVyO1xuICAgIHJlbGVhc2U6IG51bWJlcjtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBpbmljaWFsaXphciBsb3MgY29udHJvbGVzIGRlbCBjb21wcmVzb3JcbmV4cG9ydCBmdW5jdGlvbiBpbmljaWFsaXphckNvbXByZXNvcigpIHtcbiAgY29uc3QgY29tcHJlc29yQWN0aXZvQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghY29tcHJlc29yQWN0aXZvQ2hlY2tib3gpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBjb21wcmVzb3IgYWN0aXZvXCIpO1xuICBjb25zdCB0aHJlc2hvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCF0aHJlc2hvbGQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdGhyZXNob2xkXCIpO1xuICBjb25zdCByYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghcmF0aW8pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmF0aW9cIik7XG4gIGNvbnN0IGtuZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICgha25lZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBrbmVlXCIpO1xuICBjb25zdCBhdHRhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFhdHRhY2spIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgYXR0YWNrXCIpO1xuICBjb25zdCByZWxlYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbGVhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXJlbGVhc2UpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmVsZWFzZVwiKTtcbiAgXG4gIC8vIEFjdHVhbGl6YXIgdmFsb3JlcyBtb3N0cmFkb3NcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhyZXNob2xkLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdyYXRpbycsIHBhcnNlRmxvYXQocmF0aW8udmFsdWUpKTtcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ2tuZWUnLCBwYXJzZUZsb2F0KGtuZWUudmFsdWUpKTtcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycsIHBhcnNlRmxvYXQoYXR0YWNrLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdyZWxlYXNlJywgcGFyc2VGbG9hdChyZWxlYXNlLnZhbHVlKSk7XG4gIFxuICAvLyBFdmVudCBsaXN0ZW5lcnMgcGFyYSBjYW1iaW9zIGVuIGxvcyBjb250cm9sZXNcbiAgY29tcHJlc29yQWN0aXZvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgc2V0Q29tcHJlc29yQWN0aXZvKHRoaXMuY2hlY2tlZCk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICB0aHJlc2hvbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIHJhdGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyYXRpbycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdyYXRpbycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAga25lZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigna25lZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdrbmVlJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICBhdHRhY2suYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ2F0dGFjaycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdhdHRhY2snLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIHJlbGVhc2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3JlbGVhc2UnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGFjdHVhbGl6YXIgbG9zIHZhbG9yZXMgbW9zdHJhZG9zIGRlbCBjb21wcmVzb3JcbmV4cG9ydCBmdW5jdGlvbiBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IodGlwbzoga2V5b2YgQ29tcHJlc29yLCB2YWxvcjogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbG9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RpcG99LXZhbHVlYCkgYXMgSFRNTEVsZW1lbnQ7XG4gIFxuICBzd2l0Y2godGlwbykge1xuICAgIGNhc2UgJ3RocmVzaG9sZCc6XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt2YWxvcn0gZEJgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmF0aW8nOlxuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsb3J9OjFgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAna25lZSc6XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt2YWxvcn0gZEJgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIC8vIENvbnZlcnRpciBhIG1pbGlzZWd1bmRvcyBwYXJhIG1lam9yIGxlZ2liaWxpZGFkXG4gICAgICBjb25zdCBhdHRhY2tNcyA9ICh2YWxvciAqIDEwMDApLnRvRml4ZWQoMCk7XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHthdHRhY2tNc30gbXNgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVsZWFzZSc6XG4gICAgICAvLyBDb252ZXJ0aXIgYSBtaWxpc2VndW5kb3MgcGFyYSBtZWpvciBsZWdpYmlsaWRhZFxuICAgICAgY29uc3QgcmVsZWFzZU1zID0gKHZhbG9yICogMTAwMCkudG9GaXhlZCgwKTtcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3JlbGVhc2VNc30gbXNgO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXByZXNvciwgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yIH0gZnJvbSBcIi4vY29tcHJlc3Nvci50c1wiO1xuZXhwb3J0IGxldCBhY3RpdmVGcmVxdWVuY3lNYXJrZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVRTWFya2VyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBsZXQgY29tcHJlc29yQWN0aXZvOiBib29sZWFuID0gZmFsc2U7XG5leHBvcnQgbGV0IHN0YXRpY0ZpbHRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGZpbHRlcnMgPSBbXCJzdWJcIiwgXCJiYXNzXCIsIFwibG93TWlkXCIsIFwibWlkXCIsIFwiaGlnaE1pZFwiLCBcImhpZ2hcIiwgXCJhaXJcIl07XG5leHBvcnQgbGV0IGNvbXByZXNvclBhcmFtczogQ29tcHJlc29yID0ge1xuICB0aHJlc2hvbGQ6IC0yNCxcbiAgcmF0aW86IDQsXG4gIGtuZWU6IDMwLFxuICBhdHRhY2s6IDAuMDAzLFxuICByZWxlYXNlOiAwLjI1XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKGZyZXF1ZW5jeTogbnVtYmVyIHwgbnVsbCkgeyBhY3RpdmVGcmVxdWVuY3lNYXJrZXIgPSBmcmVxdWVuY3k7IH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoKSB7IHJldHVybiBhY3RpdmVGcmVxdWVuY3lNYXJrZXI7IH1cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVRTWFya2VyKHE6IG51bWJlciB8IG51bGwpIHsgYWN0aXZlUU1hcmtlciA9IHE7IH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVRTWFya2VyKCkgeyByZXR1cm4gYWN0aXZlUU1hcmtlcjsgfSAgICBcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wcmVzb3JBY3Rpdm8oYWN0aXZvOiBib29sZWFuKSB7IGNvbXByZXNvckFjdGl2byA9IGFjdGl2bzsgfVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXByZXNvckFjdGl2bygpIHsgcmV0dXJuIGNvbXByZXNvckFjdGl2bzsgfVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXByZXNvclBhcmFtKHBhcmFtOiBrZXlvZiBDb21wcmVzb3IsIHZhbHVlOiBudW1iZXIpIHsgXG4gICAgY29tcHJlc29yUGFyYW1zW3BhcmFtXSA9IHZhbHVlOyBcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IocGFyYW0sIHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wcmVzb3JQYXJhbShwYXJhbToga2V5b2YgQ29tcHJlc29yKSB7IHJldHVybiBjb21wcmVzb3JQYXJhbXNbcGFyYW1dOyB9XG4iLCJpbXBvcnQgeyBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIsIHNldEFjdGl2ZVFNYXJrZXIgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcblxuY29uc3QgTUlOX0ZSRVEgPSAyMDsgICAgLy8gMjAgSHpcbmNvbnN0IE1BWF9GUkVRID0gMjAwMDA7IC8vIDIwIGtIelxuY29uc3QgT0NUQVZFX1JBTkdFID0gTWF0aC5sb2cyKE1BWF9GUkVRIC8gTUlOX0ZSRVEpOyAvLyBBcHJveGltYWRhbWVudGUgMTAgb2N0YXZhc1xuXG50eXBlIEZpbHRybyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGZyZXE6IG51bWJlcjtcbiAgICBxOiBudW1iZXI7XG4gICAgZ2FpbjogbnVtYmVyO1xuICAgIGJ5cGFzczogYm9vbGVhbjtcbn07XG5cbmxldCBmaWx0cm9zQWN0aXZvczogRmlsdHJvW10gPSBbXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGJvdG9uQWdyZWdhckZpbHRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdyZWdhci1maWx0cm9cIik7XG4gICAgaWYgKCFib3RvbkFncmVnYXJGaWx0cm8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGJvdMOzbiBkZSBhZ3JlZ2FyIGZpbHRyb1wiKTtcbiAgICB9XG4gICAgYm90b25BZ3JlZ2FyRmlsdHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgY29uc3QgZmlsdHJvID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgZnJlcTogMTAwMCxcbiAgICAgICAgcTogNSxcbiAgICAgICAgZ2FpbjogMCxcbiAgICAgICAgYnlwYXNzOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBjcmVhckZpbHRyb0NhcmQoZmlsdHJvKTtcbiAgICAgICAgZmlsdHJvc0FjdGl2b3MucHVzaChmaWx0cm8pO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgfSk7XG59KTtcblxuLy8gRnVuY2nDs24gcGFyYSBjb252ZXJ0aXIgdmFsb3IgZGVsIHNsaWRlciAoMC0xMDApIGEgZnJlY3VlbmNpYSAoMjAtMjAwMDAgSHopIGVuIGVzY2FsYSBkZSBvY3RhdmFzXG5mdW5jdGlvbiBzbGlkZXJUb0ZyZXEoc2xpZGVyVmFsdWU6IG51bWJlcikge1xuICAgIC8vIENvbnZlcnRpciBlbCB2YWxvciBkZWwgc2xpZGVyICgwLTEwMCkgYSB1biB2YWxvciBlbiBlc2NhbGEgZGUgb2N0YXZhcyBlbnRyZSAyMEh6IHkgMjBrSHpcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNSU5fRlJFUSAqIE1hdGgucG93KDIsIChzbGlkZXJWYWx1ZSAvIDEwMCkgKiBPQ1RBVkVfUkFOR0UpKTtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBjb252ZXJ0aXIgZnJlY3VlbmNpYSAoMjAtMjAwMDAgSHopIGEgdmFsb3IgZGVsIHNsaWRlciAoMC0xMDApIGVuIGVzY2FsYSBkZSBvY3RhdmFzXG5mdW5jdGlvbiBmcmVxVG9TbGlkZXIoZnJlcTogbnVtYmVyKSB7XG4gICAgLy8gQ29udmVydGlyIGxhIGZyZWN1ZW5jaWEgYSB1biB2YWxvciBkZSBzbGlkZXIgKDAtMTAwKSB1c2FuZG8gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoTWF0aC5sb2cyKGZyZXEgLyBNSU5fRlJFUSkgLyBPQ1RBVkVfUkFOR0UpICogMTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXJGaWx0cm9DYXJkKGZpbHRybzogRmlsdHJvKSB7XG4gICAgY29uc3QgY29udGVuZWRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKCFjb250ZW5lZG9yKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY29udGVuZWRvciBkZSBmaWx0cm9zXCIpIDtcbiAgICBjb250ZW5lZG9yLmNsYXNzTmFtZSA9IFwiZmlsdHJvLWNhcmRcIjtcbiAgICBjb250ZW5lZG9yLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgZmlsdHJvLmlkKTtcblxuICAgIC8vIFZlcmlmaWNhciBzaSBlbCBtb2RvIG9zY3VybyBlc3TDoSBhY3Rpdm9cbiAgICBjb25zdCBpc0RhcmtNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpO1xuICAgIGNvbnN0IGJnQ29sb3IgPSBpc0RhcmtNb2RlID8gXCIjMmEyYTJhXCIgOiBcIiNmNWY1ZmZcIjtcbiAgICBjb25zdCB0ZXh0Q29sb3IgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gaXNEYXJrTW9kZSA/IFwiIzRhMmEyYVwiIDogXCIjZmZkY2RjXCI7XG4gICAgY29uc3QgYnV0dG9uVGV4dENvbG9yID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgXG4gICAgLy8gQWN0dWFsaXphciBlbCBlc3RpbG8gY29uIGxvcyBjb2xvcmVzIGFwcm9waWFkb3NcbiAgICBjb250ZW5lZG9yLnN0eWxlLmNzc1RleHQgPSBgcGFkZGluZzogN3B4OyBiYWNrZ3JvdW5kOiAke2JnQ29sb3J9OyBib3JkZXItcmFkaXVzOiAxMHB4OyBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjEpOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDZweDsgcG9zaXRpb246IHJlbGF0aXZlOyBjb2xvcjogJHt0ZXh0Q29sb3J9O2A7XG4gICAgXG4gICAgY29udGVuZWRvci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDNweDtcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ5cGFzcy1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbjogMDtcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJieXBhc3MtY2hlY2tib3hcIiAke2ZpbHRyby5ieXBhc3MgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJtYXJnaW4tbGVmdDogNXB4OyBmb250LXNpemU6IDAuODVlbTtcIj5CeXBhc3M8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVsaW1pbmFyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2J1dHRvbkJnQ29sb3J9OyBjb2xvcjogJHtidXR0b25UZXh0Q29sb3J9OyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDUwJTsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxNHB4O1wiPsOXPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjsgZ3JpZC1nYXA6IDJweCA4cHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZvbnQtc2l6ZTogMC45ZW07XCI+XG4gICAgICAgICAgICA8ZGl2PkZyZXEgKEh6KTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHZhbHVlPVwiJHtmcmVxVG9TbGlkZXIoZmlsdHJvLmZyZXEpfVwiIGNsYXNzPVwiZnJlcVwiIHN0eWxlPVwiZmxleDogMTsgbWFyZ2luOiAwIDVweCAwIDA7XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcmVxLXZhbHVlXCIgc3R5bGU9XCJtaW4td2lkdGg6IDQwcHg7IHRleHQtYWxpZ246IHJpZ2h0O1wiPiR7ZmlsdHJvLmZyZXF9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+UTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjAuMVwiIG1heD1cIjEwXCIgc3RlcD1cIjAuMVwiIHZhbHVlPVwiJHtmaWx0cm8ucX1cIiBjbGFzcz1cInFcIiBzdHlsZT1cImZsZXg6IDE7IG1hcmdpbjogMCA1cHggMCAwO1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicS12YWx1ZVwiIHN0eWxlPVwibWluLXdpZHRoOiA0MHB4OyB0ZXh0LWFsaWduOiByaWdodDtcIj4ke2ZpbHRyby5xfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PkdhaW4gKGRCKTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIi0zMFwiIG1heD1cIjMwXCIgc3RlcD1cIjFcIiB2YWx1ZT1cIiR7ZmlsdHJvLmdhaW59XCIgY2xhc3M9XCJnYWluXCIgc3R5bGU9XCJmbGV4OiAxOyBtYXJnaW46IDAgNXB4IDAgMDtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdhaW4tdmFsdWVcIiBzdHlsZT1cIm1pbi13aWR0aDogNDBweDsgdGV4dC1hbGlnbjogcmlnaHQ7XCI+JHtmaWx0cm8uZ2Fpbn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0IGZyZXFTbGlkZXIgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZnJlcVwiKTtcbiAgICBpZiAoIWZyZXFTbGlkZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgZnJlY3VlbmNpYVwiKTtcbiAgICBjb25zdCBmcmVxVmFsdWUgPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuZnJlcS12YWx1ZVwiKTtcbiAgICBpZiAoIWZyZXFWYWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIGZyZWN1ZW5jaWFcIik7XG4gICAgZnJlcVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZyZWN1ZW5jaWEgPSBzbGlkZXJUb0ZyZXEocGFyc2VGbG9hdCh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgZnJlcVZhbHVlLnRleHRDb250ZW50ID0gZnJlY3VlbmNpYS50b1N0cmluZygpO1xuICAgICAgICBmaWx0cm8uZnJlcSA9IGZyZWN1ZW5jaWE7XG4gICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKGZpbHRyby5mcmVxKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihmaWx0cm8ucSk7XG4gICAgfSk7XG5cbiAgICBmcmVxU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKGZpbHRyby5mcmVxKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihmaWx0cm8ucSk7XG4gICAgfSk7XG5cbiAgICBmcmVxU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKG51bGwpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKG51bGwpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcVNsaWRlciA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5xXCIpO1xuICAgIGlmICghcVNsaWRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBRXCIpO1xuICAgIGNvbnN0IHFWYWx1ZSA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5xLXZhbHVlXCIpO1xuICAgIGlmICghcVZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgdmFsb3IgZGUgUVwiKTtcbiAgICBxU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgcSA9IHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgcVZhbHVlLnRleHRDb250ZW50ID0gcS50b1N0cmluZygpO1xuICAgICAgICBmaWx0cm8ucSA9IHE7XG4gICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihmaWx0cm8ucSk7XG4gICAgfSk7XG5cbiAgICBxU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKGZpbHRyby5mcmVxKTtcbiAgICAgICAgc2V0QWN0aXZlUU1hcmtlcihmaWx0cm8ucSk7XG4gICAgfSk7XG5cbiAgICBxU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKG51bGwpO1xuICAgICAgICBzZXRBY3RpdmVRTWFya2VyKG51bGwpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ2FpblNsaWRlciA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5nYWluXCIpO1xuICAgIGlmICghZ2FpblNsaWRlcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBnYWluXCIpO1xuICAgIGNvbnN0IGdhaW5WYWx1ZSA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5nYWluLXZhbHVlXCIpO1xuICAgIGlmICghZ2FpblZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgdmFsb3IgZGUgZ2FpblwiKTtcbiAgICBnYWluU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZ2FpbiA9IHBhcnNlRmxvYXQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZ2FpblZhbHVlLnRleHRDb250ZW50ID0gZ2Fpbi50b1N0cmluZygpO1xuICAgICAgICBmaWx0cm8uZ2FpbiA9IGdhaW47XG4gICAgICAgIGVudmlhckFjdHVhbGl6YWNpb24oZmlsdHJvKTtcbiAgICAgICAgZ3VhcmRhckZpbHRyb3MoKTtcbiAgICB9KTtcblxuICAgIC8vIEFncmVnYXIgZXZlbnRvIHBhcmEgZWwgY2hlY2tib3ggZGUgYnlwYXNzXG4gICAgY29uc3QgYnlwYXNzQ2hlY2tib3ggPSBjb250ZW5lZG9yLnF1ZXJ5U2VsZWN0b3IoXCIuYnlwYXNzLWNoZWNrYm94XCIpO1xuICAgIGlmICghYnlwYXNzQ2hlY2tib3gpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBieXBhc3NcIik7XG4gICAgYnlwYXNzQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgZmlsdHJvLmJ5cGFzcyA9IHRhcmdldC5jaGVja2VkO1xuICAgICAgICBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybyk7XG4gICAgICAgIGd1YXJkYXJGaWx0cm9zKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbGltaW5hckJ0biA9IGNvbnRlbmVkb3IucXVlcnlTZWxlY3RvcihcIi5lbGltaW5hclwiKTtcbiAgICBpZiAoIWVsaW1pbmFyQnRuKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgYm90w7NuIGRlIGVsaW1pbmFyXCIpO1xuICAgIGVsaW1pbmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnRlbmVkb3IucmVtb3ZlKCk7XG4gICAgICAgIGZpbHRyb3NBY3Rpdm9zID0gZmlsdHJvc0FjdGl2b3MuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmlsdHJvLmlkKTtcbiAgICAgICAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICAgICAgICBcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJlbGltaW5hci1maWx0cm8tZGluYW1pY29cIixcbiAgICAgICAgICAgIGZpbHRyb0lkOiBmaWx0cm8uaWQsXG4gICAgICAgICAgICB0YWJJZDogdGFiSWRcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBndWFyZGFyRmlsdHJvcygpO1xuICAgICAgICBzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIobnVsbCk7XG4gICAgICAgIHNldEFjdGl2ZVFNYXJrZXIobnVsbCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0cm9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0cm9zLWNvbnRhaW5lclwiKTtcbiAgICBpZiAoIWZpbHRyb3NDb250YWluZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjb250ZW5lZG9yIGRlIGZpbHRyb3NcIik7XG4gICAgZmlsdHJvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW5lZG9yKTtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBlbnZpYXJBY3R1YWxpemFjaW9uKGZpbHRybzogRmlsdHJvKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJhY3R1YWxpemFyLWZpbHRyby1kaW5hbWljb1wiLFxuICAgICAgZmlsdHJvSWQ6IGZpbHRyby5pZCxcbiAgICAgIGZyZXE6IGZpbHRyby5mcmVxLFxuICAgICAgcTogZmlsdHJvLnEsXG4gICAgICBnYWluOiBmaWx0cm8uZ2FpbixcbiAgICAgIGJ5cGFzczogZmlsdHJvLmJ5cGFzcyxcbiAgICAgIHRhYklkOiBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpXG4gICAgfSk7XG4gIH1cblxuZnVuY3Rpb24gZ3VhcmRhckZpbHRyb3MoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgZmlsdHJvc0RpbmFtaWNvczogZmlsdHJvc0FjdGl2b3MgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJnYXJGaWx0cm9zKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImZpbHRyb3NEaW5hbWljb3NcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5maWx0cm9zRGluYW1pY29zKSkge1xuICAgICAgICAgICAgZmlsdHJvc0FjdGl2b3MgPSBkYXRhLmZpbHRyb3NEaW5hbWljb3M7XG4gICAgICAgICAgICBmaWx0cm9zQWN0aXZvcy5mb3JFYWNoKGZpbHRybyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXNlZ3VyYXJzZSBkZSBxdWUgZWwgZmlsdHJvIHRlbmdhIGxhIHByb3BpZWRhZCBieXBhc3NcbiAgICAgICAgICAgICAgICBpZiAoZmlsdHJvLmJ5cGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRyby5ieXBhc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3JlYXJGaWx0cm9DYXJkKGZpbHRybyk7XG4gICAgICAgICAgICAgICAgZW52aWFyQWN0dWFsaXphY2lvbihmaWx0cm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZhckNhbWJpb3NUZW1hKCk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgYWN0dWFsaXphciBsb3MgZmlsdHJvcyBjdWFuZG8gY2FtYmlhIGVsIHRlbWFcbmV4cG9ydCBmdW5jdGlvbiBhY3R1YWxpemFyRXN0aWxvRmlsdHJvcygpIHtcbiAgICBjb25zdCBpc0RhcmtNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpO1xuICAgIGNvbnN0IGZpbHRyb0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5maWx0cm8tY2FyZCcpO1xuICAgIFxuICAgIGZpbHRyb0NhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IGJnQ29sb3IgPSBpc0RhcmtNb2RlID8gXCIjMmEyYTJhXCIgOiBcIiNmNWY1ZmZcIjtcbiAgICAgICAgY29uc3QgdGV4dENvbG9yID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gICAgICAgIFxuICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmQgPSBiZ0NvbG9yO1xuICAgICAgICBjYXJkLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWxpbWluYXJCdG4gPSBjYXJkLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuZWxpbWluYXInKTtcbiAgICAgICAgaWYgKGVsaW1pbmFyQnRuKSB7XG4gICAgICAgICAgICBlbGltaW5hckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gaXNEYXJrTW9kZSA/IFwiIzRhMmEyYVwiIDogXCIjZmZkY2RjXCI7XG4gICAgICAgICAgICBlbGltaW5hckJ0bi5zdHlsZS5jb2xvciA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIE9ic2VydmFyIGNhbWJpb3MgZW4gZWwgdGVtYVxuZnVuY3Rpb24gb2JzZXJ2YXJDYW1iaW9zVGVtYSgpIHtcbiAgICAvLyBBw7FhZGlyIGV2ZW50IGxpc3RlbmVyIGFsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXG4gICAgY29uc3QgZGFya01vZGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKTtcbiAgICBpZiAoZGFya01vZGVDaGVja2JveCkge1xuICAgICAgICBkYXJrTW9kZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFjdHVhbGl6YXJFc3RpbG9GaWx0cm9zKTtcbiAgICB9XG59XG5cbi8vIHRvIGRvOiBcbi8vIDEuIHF1ZSBjdWFuZG8gc2UgZGVzYWN0aXZlIGVsIGF1ZGlvLCBsYXMgYmFycmFzIGNhaWdhbiBjb24gZ3JhY2lhXG4vLyAyLiBoYWNlciBhbmRhciBlbCB2b2x1bWVuXG4vLyAzLiB2ZXIgcG9ycXVlIG5vIHNlIGNhcmdhIGVsIGF1ZGlvIHZvbHVtZW4gY3VhbmRvIGRlc2FjdGl2byB5IHJlYWN0aXZvIGVsIGF1ZGlvKHBlcm8gc2kgZWwgc2xpZGVyKSIsImltcG9ydCB7IGd1YXJkYXJFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIjtcbmltcG9ydCB7IGNvbXByZXNvclBhcmFtcywgc2V0Q29tcHJlc29yQWN0aXZvIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgeyBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IgfSBmcm9tIFwiLi9jb21wcmVzc29yLnRzXCI7XG5pbXBvcnQgeyBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuIH0gZnJvbSBcIi4vY29tbXVuaWNhdGlvbnMudHNcIjtcblxuLy8gRnVuY2nDs24gcGFyYSBhcGxpY2FyIHVuYSBjb25maWd1cmFjacOzbiBjYXJnYWRhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBsaWNhckNvbmZpZ3VyYWNpb24oY29uZmlnOiBDb25maWd1cmFjaW9uSW50ZXJmYWNlKSB7XG4gIGNvbnNvbGUubG9nKFwiQXBsaWNhbmRvIGNvbmZpZ3VyYWNpw7NuOlwiLCBjb25maWcpO1xuICBcbiAgLy8gQXBsaWNhciB2b2x1bWVuXG4gIGNvbnN0IHZvbHVtZW5TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghdm9sdW1lblNsaWRlcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIE5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdm9sdW1lblwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdm9sdW1lblNsaWRlci52YWx1ZSA9IGNvbmZpZy52b2x1bWVuLnRvU3RyaW5nKCk7XG4gIHVwZGF0ZVZvbHVtZVRleHQoY29uZmlnLnZvbHVtZW4pO1xuICBcbiAgLy8gQXBsaWNhciBtb2RvIG9zY3Vyb1xuICBjb25zdCBkYXJrTW9kZUNoZWNrYm94IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoY29uZmlnLmRhcmtNb2RlKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICBkYXJrTW9kZUNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgZGFya01vZGVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gIH1cbiAgXG4gIC8vIEFwbGljYXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICBjb25zdCBjb21wcmVzb3JBY3Rpdm9DaGVja2JveCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHRocmVzaG9sZFNsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmF0aW9TbGlkZXIgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGlvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3Qga25lZVNsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGF0dGFja1NsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmVsZWFzZVNsaWRlciA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIFxuICBjb21wcmVzb3JBY3Rpdm9DaGVja2JveC5jaGVja2VkID0gY29uZmlnLmNvbXByZXNvci5hY3Rpdm87XG4gIHNldENvbXByZXNvckFjdGl2byhjb25maWcuY29tcHJlc29yLmFjdGl2byk7XG4gIFxuICB0aHJlc2hvbGRTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLnRocmVzaG9sZC50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMudGhyZXNob2xkID0gY29uZmlnLmNvbXByZXNvci50aHJlc2hvbGQ7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigndGhyZXNob2xkJywgY29uZmlnLmNvbXByZXNvci50aHJlc2hvbGQpO1xuICBcbiAgcmF0aW9TbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLnJhdGlvLnRvU3RyaW5nKCk7XG4gIGNvbXByZXNvclBhcmFtcy5yYXRpbyA9IGNvbmZpZy5jb21wcmVzb3IucmF0aW87XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigncmF0aW8nLCBjb25maWcuY29tcHJlc29yLnJhdGlvKTtcbiAgXG4gIGtuZWVTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLmtuZWUudG9TdHJpbmcoKTtcbiAgY29tcHJlc29yUGFyYW1zLmtuZWUgPSBjb25maWcuY29tcHJlc29yLmtuZWU7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigna25lZScsIGNvbmZpZy5jb21wcmVzb3Iua25lZSk7XG4gIFxuICBhdHRhY2tTbGlkZXIudmFsdWUgPSBjb25maWcuY29tcHJlc29yLmF0dGFjay50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMuYXR0YWNrID0gY29uZmlnLmNvbXByZXNvci5hdHRhY2s7XG4gIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcignYXR0YWNrJywgY29uZmlnLmNvbXByZXNvci5hdHRhY2spO1xuICBcbiAgcmVsZWFzZVNsaWRlci52YWx1ZSA9IGNvbmZpZy5jb21wcmVzb3IucmVsZWFzZS50b1N0cmluZygpO1xuICBjb21wcmVzb3JQYXJhbXMucmVsZWFzZSA9IGNvbmZpZy5jb21wcmVzb3IucmVsZWFzZTtcbiAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyZWxlYXNlJywgY29uZmlnLmNvbXByZXNvci5yZWxlYXNlKTtcbiAgXG4gIC8vIExpbXBpYXIgZmlsdHJvcyBkaW7DoW1pY29zIGFjdHVhbGVzXG4gIGNvbnN0IGZpbHRyb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdHJvcy1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKCFmaWx0cm9zQ29udGFpbmVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIGNvbnRlbmVkb3IgZGUgZmlsdHJvcyBkaW7DoW1pY29zXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBmaWx0cm9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBcbiAgLy8gSW1wb3J0YXIgbGEgZnVuY2nDs24gbmVjZXNhcmlhIHBhcmEgY3JlYXIgZmlsdHJvc1xuICB0cnkge1xuICAgIGlmIChjb25maWcuZmlsdHJvc0RpbmFtaWNvcyAmJiBjb25maWcuZmlsdHJvc0RpbmFtaWNvcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBHdWFyZGFyIGxvcyBmaWx0cm9zIGVuIGVsIHN0b3JhZ2UgbG9jYWwgcGFyYSBxdWUgY2FyZ2FyRmlsdHJvcyBsb3MgZW5jdWVudHJlXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBmaWx0cm9zRGluYW1pY29zOiBjb25maWcuZmlsdHJvc0RpbmFtaWNvcyB9LCBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIEltcG9ydGFyIGVsIG3Ds2R1bG8geSBsbGFtYXIgYSBjYXJnYXJGaWx0cm9zXG4gICAgICAgIGNvbnN0IGZpbHRlcnNNb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vZmlsdGVyc19pbnRlcmZhY2UudHMnKTtcbiAgICAgICAgZmlsdGVyc01vZHVsZS5jYXJnYXJGaWx0cm9zKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbnZpYXIgY29uZmlndXJhY2nDs24gYWwgb2Zmc2NyZWVuIHNpIGVzdMOhIGNhcHR1cmFuZG8gYXVkaW9cbiAgICAgICAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICAgICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaSBubyBoYXkgZmlsdHJvcywgc29sbyBlbnZpYXIgbGEgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvciB5IHZvbHVtZW5cbiAgICAgIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgICAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQWxPZmZzY3JlZW4oY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGNhcmdhciBsb3MgZmlsdHJvczpcIiwgZXJyb3IpO1xuICB9XG4gIFxuICAvLyBHdWFyZGFyIGVsIGVzdGFkbyBhY3R1YWxpemFkb1xuICBndWFyZGFyRXN0YWRvKCk7XG59XG5cbi8vIEFjdHVhbGl6YXIgZWwgdGV4dG8gZGVsIHZhbG9yIGRlIHZvbHVtZW4gZW4gZEJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWb2x1bWVUZXh0KGRiVmFsdWU6IG51bWJlcikge1xuICBjb25zdCB2b2x1bWVWYWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW4tdmFsdWVcIik7XG4gIGlmICh2b2x1bWVWYWx1ZUVsZW1lbnQpIHtcbiAgICB2b2x1bWVWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYlZhbHVlfSBkQmA7XG4gIH1cbn1cblxudHlwZSBGaWx0cm9EaW5hbWljbyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGZyZWN1ZW5jaWE6IG51bWJlcjtcbiAgICBxOiBudW1iZXI7XG4gICAgZ2FuYW5jaWE6IG51bWJlcjtcbiAgICBieXBhc3M6IGJvb2xlYW47XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgb2J0ZW5lciBsYSBjb25maWd1cmFjacOzbiBhY3R1YWxcbmV4cG9ydCBmdW5jdGlvbiBvYnRlbmVyQ29uZmlndXJhY2lvbkFjdHVhbCgpOiBDb25maWd1cmFjaW9uSW50ZXJmYWNlIHtcbiAgICBsZXQgY29uZkludGVyZmFjZTogQ29uZmlndXJhY2lvbkludGVyZmFjZSA9IHtcbiAgICAgICAgdm9sdW1lbjogMCxcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvczogW10sXG4gICAgICAgIGNvbXByZXNvcjoge1xuICAgICAgICAgICAgYWN0aXZvOiBmYWxzZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAga25lZTogMCxcbiAgICAgICAgICAgIGF0dGFjazogMC4xLFxuICAgICAgICAgICAgcmVsZWFzZTogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIGRhcmtNb2RlOiBmYWxzZVxuICAgIH07XG5cbiAgLy8gT2J0ZW5lciB2YWxvcmVzIGRlIHZvbHVtZW5cbiAgY29uc3Qgdm9sdW1lblNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWVuJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCF2b2x1bWVuU2xpZGVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICAgIHJldHVybiBjb25mSW50ZXJmYWNlO1xuICB9IGVsc2UgY29uZkludGVyZmFjZS52b2x1bWVuID0gcGFyc2VGbG9hdCh2b2x1bWVuU2xpZGVyLnZhbHVlKTtcbiAgXG4gIC8vIE9idGVuZXIgdmFsb3JlcyBkZSBmaWx0cm9zIGRpbsOhbWljb3NcbiAgY29uc3QgZmlsdHJvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0cm9zLWNvbnRhaW5lcicpO1xuICBpZiAoIWZpbHRyb3NDb250YWluZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0VSUk9SXSBObyBzZSBlbmNvbnRyw7MgZWwgY29udGVuZWRvciBkZSBmaWx0cm9zIGRpbsOhbWljb3NcIik7XG4gICAgcmV0dXJuIGNvbmZJbnRlcmZhY2U7XG4gIH1cbiAgY29uc3QgZmlsdHJvc0VsZW1lbnRzID0gZmlsdHJvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdHJvLWRpbmFtaWNvJyk7XG4gIFxuICBjb25zdCBmaWx0cm9zRGluYW1pY29zOiBGaWx0cm9EaW5hbWljb1tdID0gW107XG4gIGZpbHRyb3NFbGVtZW50cy5mb3JFYWNoKGZpbHRyb0VsZW1lbnQgPT4ge1xuICAgIGlmICghKGZpbHRyb0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gRWxlbWVudG8gZGUgZmlsdHJvIG5vIGVzIHVuIEhUTUxFbGVtZW50XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZyZWN1ZW5jaWFJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaWx0cm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmVjdWVuY2lhJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBxSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZmlsdHJvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZ2FuYW5jaWFJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBmaWx0cm9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW5hbmNpYScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYnlwYXNzSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZmlsdHJvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnlwYXNzJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBmZCA6IEZpbHRyb0RpbmFtaWNvID0ge1xuICAgICAgaWQ6IGZpbHRyb0VsZW1lbnQuZGF0YXNldC5pZCB8fCAnJyxcbiAgICAgIGZyZWN1ZW5jaWE6IHBhcnNlRmxvYXQoZnJlY3VlbmNpYUlucHV0LnZhbHVlKSxcbiAgICAgIHE6IHBhcnNlRmxvYXQocUlucHV0LnZhbHVlKSxcbiAgICAgIGdhbmFuY2lhOiBwYXJzZUZsb2F0KGdhbmFuY2lhSW5wdXQudmFsdWUpLFxuICAgICAgYnlwYXNzOiBieXBhc3NJbnB1dC5jaGVja2VkXG4gICAgfTtcbiAgICBmaWx0cm9zRGluYW1pY29zLnB1c2goZmQpO1xuICB9KTtcbiAgXG4gIC8vIE9idGVuZXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICBjb25zdCBjb21wcmVzb3JDaGVja2JveCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGNvbXByZXNvckFjdGl2byA6IGJvb2xlYW4gPSBjb21wcmVzb3JDaGVja2JveC5jaGVja2VkO1xuICBjb25zdCB0aHJlc2hvbGRJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmF0aW9JbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBrbmVlSW5wdXQgOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBhdHRhY2tJbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgcmVsZWFzZUlucHV0IDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxlYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgXG4gIGNvbmZJbnRlcmZhY2UgPSB7XG4gICAgdm9sdW1lbjogcGFyc2VGbG9hdCh2b2x1bWVuU2xpZGVyLnZhbHVlKSxcbiAgICBmaWx0cm9zRGluYW1pY29zLFxuICAgIGNvbXByZXNvcjoge1xuICAgICAgYWN0aXZvOiBjb21wcmVzb3JBY3Rpdm8sXG4gICAgICB0aHJlc2hvbGQ6IHBhcnNlRmxvYXQodGhyZXNob2xkSW5wdXQudmFsdWUpLFxuICAgICAgcmF0aW86IHBhcnNlRmxvYXQocmF0aW9JbnB1dC52YWx1ZSksXG4gICAgICBrbmVlOiBwYXJzZUZsb2F0KGtuZWVJbnB1dC52YWx1ZSksXG4gICAgICBhdHRhY2s6IHBhcnNlRmxvYXQoYXR0YWNrSW5wdXQudmFsdWUpLFxuICAgICAgcmVsZWFzZTogcGFyc2VGbG9hdChyZWxlYXNlSW5wdXQudmFsdWUpXG4gICAgfSxcbiAgICBkYXJrTW9kZTogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpXG4gIH07XG5cbiAgcmV0dXJuIGNvbmZJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhY2lvbkludGVyZmFjZSB7XG4gIHZvbHVtZW46IG51bWJlcjtcbiAgZmlsdHJvc0RpbmFtaWNvczogRmlsdHJvRGluYW1pY29bXTtcbiAgY29tcHJlc29yOiB7XG4gICAgYWN0aXZvOiBib29sZWFuO1xuICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAga25lZTogbnVtYmVyO1xuICAgIGF0dGFjazogbnVtYmVyO1xuICAgIHJlbGVhc2U6IG51bWJlcjtcbiAgfTtcbiAgZGFya01vZGU6IGJvb2xlYW47XG59IiwiaW1wb3J0IHsgZ2V0Q29tcHJlc29yQWN0aXZvLCBnZXRDb21wcmVzb3JQYXJhbSwgc2V0Q29tcHJlc29yQWN0aXZvLCBzZXRDb21wcmVzb3JQYXJhbSwgc3RhdGljRmlsdGVyaW5nLCBcbiAgICBmaWx0ZXJzXG4gfSBmcm9tIFwiLi9jb25maWcudHNcIjtcbmludGVyZmFjZSBFc3RhZG9Nb2RzIHtcbiAgICBjYXB0dXJpbmdBdWRpbzogYm9vbGVhbjtcbiAgICBkYXJrTW9kZTogYm9vbGVhbjtcbiAgICBjb21wcmVzb3I6IHtcbiAgICAgICAgYWN0aXZvOiBib29sZWFuO1xuICAgICAgICB0aHJlc2hvbGQ6IG51bWJlcjtcbiAgICAgICAgcmF0aW86IG51bWJlcjtcbiAgICAgICAga25lZTogbnVtYmVyO1xuICAgICAgICBhdHRhY2s6IG51bWJlcjtcbiAgICAgICAgcmVsZWFzZTogbnVtYmVyO1xuICAgIH07XG4gICAgZ2FpbkF1ZGlvOiBudW1iZXI7XG59O1xudHlwZSBlbGVtZW50b0d1YXJkYWRvID0ga2V5b2YgRXN0YWRvTW9kczsgLy8gXCJjYXB0dXJpbmdBdWRpb1wiIHwgXCJkYXJrTW9kZVwiIHwgXCJjb21wcmVzb3JcIiB8IFwiZ2FpbkF1ZGlvXCJcbmV4cG9ydCBsZXQgbG9jYWxFc3RhZG86IEVzdGFkb01vZHMgPSB7fSBhcyBFc3RhZG9Nb2RzO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVmFsdWU8VCBleHRlbmRzIGVsZW1lbnRvR3VhcmRhZG8+KHZhbHVlTmFtZTogVCwgdmFsdWU6IGFueSkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImVzdGFkb1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBlc3RhZG86IEVzdGFkb01vZHMgPSBkYXRhLmVzdGFkbyB8fCB7fSBhcyBFc3RhZG9Nb2RzO1xuICAgICAgICBlc3RhZG9bdmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBlc3RhZG8gfSk7XG4gICAgfSk7XG4gICAgbG9jYWxFc3RhZG9bdmFsdWVOYW1lXSA9IHZhbHVlO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNhcmdhciBlbCBlc3RhZG8gZ3VhcmRhZG9cbmV4cG9ydCBmdW5jdGlvbiBjYXJnYXJFc3RhZG8oKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImVzdGFkb1wiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuZXN0YWRvKSB7XG4gICAgICBjb25zdCBlc3RhZG8gPSBkYXRhLmVzdGFkbyBhcyBFc3RhZG9Nb2RzO1xuICAgICAgbG9jYWxFc3RhZG8gPSBlc3RhZG87XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIEVzdGFkbyBjYXJnYWRvOlwiLCBlc3RhZG8pO1xuXG4gICAgICBpZiAobG9jYWxFc3RhZG8uY2FwdHVyaW5nQXVkaW8pIHtcbiAgICAgICAgY29uc3QgYm90b25BY3RpdmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmFyXCIpO1xuICAgICAgICBpZiAoIWJvdG9uQWN0aXZhcikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGJvdMOzbiBkZSBhY3RpdmFyXCIpO1xuICAgICAgICBib3RvbkFjdGl2YXIudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8g8J+Uh1wiO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDYXJnYXIgdm9sdW1lblxuICAgICAgaWYgKGVzdGFkby5nYWluQXVkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2b2x1bWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGlmICghdm9sdW1lbikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICAgICAgICB2b2x1bWVuLnZhbHVlID0gZXN0YWRvLmdhaW5BdWRpby50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB2b2x1bWVuX3ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuLXZhbHVlXCIpO1xuICAgICAgICBpZiAoIXZvbHVtZW5fdmFsdWUpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCB2YWxvciBkZSB2b2x1bWVuXCIpO1xuICAgICAgICB2b2x1bWVuX3ZhbHVlLnRleHRDb250ZW50ID0gYCR7ZXN0YWRvLmdhaW5BdWRpb30gZEJgO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDYXJnYXIgbW9kbyBvc2N1cm9cbiAgICAgIGlmIChlc3RhZG8uZGFya01vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZXN0YWRvLmRhcmtNb2RlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgICBjb25zdCBkYXJrX21vZGVfZW5hYmxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghZGFya19tb2RlX2VuYWJsZWQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBtb2RvIG9zY3Vyb1wiKTtcbiAgICAgICAgICBkYXJrX21vZGVfZW5hYmxlZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgICAgICAgIGNvbnN0IGRhcmtfbW9kZV9lbmFibGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFkYXJrX21vZGVfZW5hYmxlZCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXCIpO1xuICAgICAgICAgIGRhcmtfbW9kZV9lbmFibGVkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDYXJnYXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICAgICAgaWYgKGVzdGFkby5jb21wcmVzb3IpIHtcbiAgICAgICAgY29uc3QgY29tcHJlc29yX2FjdGl2byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wcmVzb3ItYWN0aXZvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKCFjb21wcmVzb3JfYWN0aXZvKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgY29tcHJlc29yIGFjdGl2b1wiKTtcbiAgICAgICAgY29tcHJlc29yX2FjdGl2by5jaGVja2VkID0gZXN0YWRvLmNvbXByZXNvci5hY3Rpdm87XG4gICAgICAgIHNldENvbXByZXNvckFjdGl2byhlc3RhZG8uY29tcHJlc29yLmFjdGl2byk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlc2hvbGQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghdGhyZXNob2xkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHRocmVzaG9sZFwiKTtcbiAgICAgICAgICB0aHJlc2hvbGQudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLnRocmVzaG9sZC50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRocmVzaG9sZC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5yYXRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgcmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF0aW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghcmF0aW8pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmF0aW9cIik7XG4gICAgICAgICAgcmF0aW8udmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLnJhdGlvLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ3JhdGlvJywgcGFyc2VGbG9hdChyYXRpby52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5rbmVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBrbmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuZWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICgha25lZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBrbmVlXCIpO1xuICAgICAgICAgIGtuZWUudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLmtuZWUudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgna25lZScsIHBhcnNlRmxvYXQoa25lZS52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5hdHRhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGF0dGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2snKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghYXR0YWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGF0dGFja1wiKTtcbiAgICAgICAgICBhdHRhY2sudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLmF0dGFjay50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdhdHRhY2snLCBwYXJzZUZsb2F0KGF0dGFjay52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXN0YWRvLmNvbXByZXNvci5yZWxlYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbGVhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgIGlmICghcmVsZWFzZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSByZWxlYXNlXCIpO1xuICAgICAgICAgIHJlbGVhc2UudmFsdWUgPSBlc3RhZG8uY29tcHJlc29yLnJlbGVhc2UudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScsIHBhcnNlRmxvYXQocmVsZWFzZS52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLy8gR3VhcmRhciB5IHJlc3RhdXJhciBlc3RhZG8gZGUgbG9zIDggc2xpZGVycyArIGVzdGFkbyBkZSBhdWRpb1xuZXhwb3J0IGZ1bmN0aW9uIGd1YXJkYXJFc3RhZG8oKSB7XG4gIGNvbnN0IHZvbHVtZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGw7XG4gIGlmICghdm9sdW1lbikgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSB2b2x1bWVuXCIpO1xuICBjb25zdCBlc3RhZG86IEVzdGFkb01vZHMgPSB7IFxuICAgIGNhcHR1cmluZ0F1ZGlvOiBsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbyxcbiAgICBkYXJrTW9kZTogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpLFxuICAgIGNvbXByZXNvcjoge1xuICAgICAgYWN0aXZvOiBnZXRDb21wcmVzb3JBY3Rpdm8oKSxcbiAgICAgIHRocmVzaG9sZDogZ2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcpLFxuICAgICAgcmF0aW86IGdldENvbXByZXNvclBhcmFtKCdyYXRpbycpLFxuICAgICAga25lZTogZ2V0Q29tcHJlc29yUGFyYW0oJ2tuZWUnKSxcbiAgICAgIGF0dGFjazogZ2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycpLFxuICAgICAgcmVsZWFzZTogZ2V0Q29tcHJlc29yUGFyYW0oJ3JlbGVhc2UnKVxuICAgIH0sXG4gICAgZ2FpbkF1ZGlvOiBwYXJzZUZsb2F0KHZvbHVtZW4udmFsdWUpXG4gIH07XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFwiZXN0YWRvXCI6IGVzdGFkbyB9KTtcbiAgY29uc29sZS5sb2coXCJbSU5GT10gRXN0YWRvIGd1YXJkYWRvOlwiLCBlc3RhZG8pO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNhcmdhciBsYSBsaXN0YSBkZSBwcmVzZXRzIGVuIGVsIHNlbGVjdG9yXG5leHBvcnQgZnVuY3Rpb24gY2FyZ2FyTGlzdGFQcmVzZXRzKCkge1xuICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICBpZiAoIXByZXNldFNlbGVjdCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNlbGVjdG9yIGRlIHByZXNldHNcIik7XG4gIFxuICAvLyBMaW1waWFyIG9wY2lvbmVzIGFjdHVhbGVzXG4gIHdoaWxlIChwcmVzZXRTZWxlY3Qub3B0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgcHJlc2V0U2VsZWN0LnJlbW92ZSgxKTtcbiAgfVxuICBcbiAgLy8gQ2FyZ2FyIHByZXNldHMgZGVzZGUgc3RvcmFnZVxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydwcmVzZXRzJ10sIChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgXG4gICAgLy8gQWdyZWdhciBjYWRhIHByZXNldCBjb21vIHVuYSBvcGNpw7NuXG4gICAgT2JqZWN0LmtleXMocHJlc2V0cykuZm9yRWFjaChub21icmVQcmVzZXQgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBub21icmVQcmVzZXQ7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBub21icmVQcmVzZXQ7XG4gICAgICBwcmVzZXRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKFwiW0lORk9dIFByaW1lcmEgYXBlcnR1cmEgZGVsIHBvcHVwIGRlc2RlIGxhIGluaWNpYWxpemFjacOzbiAtIExpbXBpYW5kbyBzdG9yYWdlXCIpO1xuICAvLyBMaW1waWFyIHRvZGFzIGxhcyB2YXJpYWJsZXMgZ3VhcmRhZGFzXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XG4gIC8vIEd1YXJkYXIgcXVlIGVsIGF1ZGlvIGVzdMOhIGRlc2FjdGl2YWRvXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGNhcHR1cmluZ0F1ZGlvOiBmYWxzZSB9KTtcbiAgbG9jYWxFc3RhZG8gPSB7fSBhcyBFc3RhZG9Nb2RzO1xufSIsInR5cGUgUG9pbnQgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3RoUG9pbnRzKHBvaW50czogUG9pbnRbXSwgd2luZG93U2l6ZTogbnVtYmVyLCBjYW52YXNXaWR0aDogbnVtYmVyKTogUG9pbnRbXSB7XG4gIGlmIChwb2ludHMubGVuZ3RoIDw9IHdpbmRvd1NpemUpIHJldHVybiBwb2ludHM7XG5cbiAgY29uc3Qgc21vb3RoZWQ6IFBvaW50W10gPSBbXTtcblxuICBzbW9vdGhlZC5wdXNoKHBvaW50c1swXSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gY29uc3QgYWRhcHRpdmVXaW5kb3cgPSBNYXRoLm1pbihcbiAgICBjb25zdCBhZGFwdGl2ZVdpbmRvdyA9IE1hdGgubWF4KFxuICAgICAgMixcbiAgICAgIE1hdGguZmxvb3Iod2luZG93U2l6ZSAqIE1hdGgucG93KChwb2ludHNbaV0ueCAvIGNhbnZhc1dpZHRoKSwgMikgKiAzKVxuICAgICk7XG5cbiAgICBjb25zdCBoYWxmV2luZG93ID0gTWF0aC5mbG9vcihhZGFwdGl2ZVdpbmRvdyAvIDIpO1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gTWF0aC5tYXgoMCwgaSAtIGhhbGZXaW5kb3cpO1xuICAgIGNvbnN0IGVuZElkeCA9IE1hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgaGFsZldpbmRvdyk7XG5cbiAgICBsZXQgc3VtWSA9IDA7XG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0SWR4OyBqIDw9IGVuZElkeDsgaisrKSB7XG4gICAgICBzdW1ZICs9IHBvaW50c1tqXS55O1xuICAgIH1cblxuICAgIGNvbnN0IGF2Z1kgPSBzdW1ZIC8gKGVuZElkeCAtIHN0YXJ0SWR4ICsgMSk7XG4gICAgc21vb3RoZWQucHVzaCh7IHg6IHBvaW50c1tpXS54LCB5OiBhdmdZIH0pO1xuICB9XG5cbiAgaWYgKHBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgc21vb3RoZWQucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBzbW9vdGhlZDtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBjb252ZXJ0aXIgZEIgYSB2YWxvciBkZSBnYW5hbmNpYSBwYXJhIFdlYiBBdWRpbyBBUElcbmV4cG9ydCBmdW5jdGlvbiBkYlRvR2FpbihkYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KDEwLCBkYiAvIDIwKTtcbn0iLCJpbXBvcnQgeyBzbW9vdGhQb2ludHMgfSBmcm9tIFwiLi91dGlscy50c1wiO1xuaW1wb3J0IHsgZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyLCBnZXRBY3RpdmVRTWFya2VyIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5cbnR5cGUgVmlzdWFsaXplckRhdGEgPSB7XG4gICAgcHJlOiBudW1iZXJbXTtcbiAgICBtaWQ6IG51bWJlcltdO1xuICAgIHBvc3Q6IG51bWJlcltdO1xuICAgIG1pbkRlY2liZWxzOiBudW1iZXI7XG4gICAgbWF4RGVjaWJlbHM6IG51bWJlcjtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRyYXdWaXN1YWxpemVyKGRhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyW10gfCBudW1iZXIgfSkge1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdWaXN1YWxpemVyKGRhdGE6IFZpc3VhbGl6ZXJEYXRhKSB7XG4gIGNvbnN0IHByZURhdGE6IG51bWJlcltdID0gZGF0YVtcInByZVwiXSB8fCBbXTtcbiAgY29uc3QgbWlkRGF0YTogbnVtYmVyW10gPSBkYXRhW1wibWlkXCJdIHx8IFtdO1xuICBjb25zdCBwb3N0RGF0YTogbnVtYmVyW10gPSBkYXRhW1wicG9zdFwiXSB8fCBbXTtcbiAgY29uc3QgbWluRGVjaWJlbHM6IG51bWJlciA9IGRhdGFbXCJtaW5EZWNpYmVsc1wiXSB8fCAtMTAwO1xuICBjb25zdCBtYXhEZWNpYmVsczogbnVtYmVyID0gZGF0YVtcIm1heERlY2liZWxzXCJdIHx8IC0yNTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXN1YWxcIik7XG4gIGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xuICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJDcml0aWNhbDogQ2FudmFzIGNvbnRleHQgbm90IGZvdW5kIG9yICd2aXN1YWwnIGVsZW1lbnQgaXMgbm90IGEgY2FudmFzLlwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDcml0aWNhbDogJ3Zpc3VhbCcgZWxlbWVudCBpcyBub3QgYSBjYW52YXMuXCIpO1xuICB9XG5cbiAgY29uc3QgYnVmZmVyTGVuZ3RoID0gcHJlRGF0YS5sZW5ndGg7XG5cbiAgLy8gRGV0ZWN0YXIgc2kgZWwgbW9kbyBvc2N1cm8gZXN0w6EgYWN0aXZvXG4gIGNvbnN0IGlzRGFya01vZGUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyk7XG4gIFxuICAvLyBGb25kbyBhZGFwdGFkbyBhbCB0ZW1hIGFjdHVhbFxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjMTIxMjEyXCIgOiBcIiNmZWZlZmVcIjsgLy8gT3NjdXJvIG8gY2xhcm8gc2Vnw7puIGVsIHRlbWFcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgLy8gRnVuY2nDs24gcGFyYSBub3JtYWxpemFyIHZhbG9yZXMgZGUgZEIgYSBhbHR1cmEgZGUgYmFycmEgKDAtMSlcbiAgY29uc3Qgbm9ybWFsaXplRGIgPSAoZGJWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgLy8gTGltaXRhciBlbCB2YWxvciBlbnRyZSBtaW5EZWNpYmVscyB5IG1heERlY2liZWxzXG4gICAgY29uc3QgY2xhbXBlZERiID0gTWF0aC5tYXgobWluRGVjaWJlbHMsIE1hdGgubWluKG1heERlY2liZWxzLCBkYlZhbHVlKSk7XG4gICAgLy8gTm9ybWFsaXphciBhIHVuIHZhbG9yIGVudHJlIDAgeSAxXG4gICAgcmV0dXJuIChjbGFtcGVkRGIgLSBtaW5EZWNpYmVscykgLyAobWF4RGVjaWJlbHMgLSBtaW5EZWNpYmVscyk7XG4gIH07XG5cbiAgLy8gRGlidWphciBlc2NhbGEgZGUgZnJlY3VlbmNpYSBsb2dhcsOtdG1pY2FcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNhYWFhYWFcIiA6IFwiI2FhYVwiO1xuICBjdHguZm9udCA9IFwiMTBweCBBcmlhbFwiO1xuICBjb25zdCBmcmVxTGFiZWxzID0gWzMwLCA2MCwgMTIwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTcwMDBdO1xuICBmcmVxTGFiZWxzLmZvckVhY2goKGZyZXEsIGluZGV4KSA9PiB7XG4gICAgLy8gQ29udmVydGlyIGZyZWN1ZW5jaWEgYSBwb3NpY2nDs24gWCB1c2FuZG8gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmxvZzIoZnJlcSAvIDIwKTsgLy8gTsO6bWVybyBkZSBvY3RhdmFzIGRlc2RlIDIwSHpcbiAgICBjb25zdCB0b3RhbE9jdGF2ZXMgPSBNYXRoLmxvZzIoMTcwMDAgLyAyMCk7IC8vIEFwcm94aW1hZGFtZW50ZSA5Ljcgb2N0YXZhcyAoaGFzdGEgMTdrSHopXG4gICAgbGV0IHggPSAob2N0YXZlIC8gdG90YWxPY3RhdmVzKSAqIGNhbnZhcy53aWR0aDtcbiAgICBcbiAgICAvLyBBcGxpY2FyIG9mZnNldCBhIHRvZGFzIGxhcyBsw61uZWFzIGV4Y2VwdG8gbGEgw7psdGltYSAoMTdrSHopXG4gICAgaWYgKGluZGV4IDwgZnJlcUxhYmVscy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBvZmZzZXRGYWN0b3IgPSAxIC0gKGluZGV4IC8gKGZyZXFMYWJlbHMubGVuZ3RoIC0gMSkpO1xuICAgICAgeCArPSAxMCAqIG9mZnNldEZhY3RvcjtcbiAgICB9XG4gICAgXG4gICAgLy8gRGlidWphciBsw61uZWEgdmVydGljYWxcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjMzMzMzMzXCIgOiBcIiNkZGRcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICBjdHgubGluZVRvKHgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGV0aXF1ZXRhXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIGN0eC5maWxsVGV4dChmcmVxID49IDEwMDAgPyBgJHtmcmVxLzEwMDB9a2AgOiBmcmVxLnRvU3RyaW5nKCksIHggLSAxMCwgY2FudmFzLmhlaWdodCAtIDUpO1xuICB9KTtcblxuICAvLyBEaWJ1amFyIGVzY2FsYSBkZSBkQlxuICBjb25zdCBkYkxhYmVscyA9IFstOTAsIC04MCwgLTcwLCAtNjAsIC01MCwgLTQwLCAtMzBdO1xuICBkYkxhYmVscy5mb3JFYWNoKGRiID0+IHtcbiAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihkYikgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGzDrW5lYSBob3Jpem9udGFsXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gaXNEYXJrTW9kZSA/IFwiIzMzMzMzM1wiIDogXCIjZWVlXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIHkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGV0aXF1ZXRhXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICAgIGN0eC5maWxsVGV4dChgJHtkYn0gZEJgLCA1LCB5ICsgMTIpO1xuICB9KTtcblxuICAvLyBDYWxjdWxhciBwb3NpY2lvbmVzIGRlIHB1bnRvcyBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuICBjb25zdCBwcmVQb2ludHMgPSBbXTtcbiAgY29uc3QgbWlkUG9pbnRzID0gW107IFxuICBjb25zdCBwb3N0UG9pbnRzID0gW107XG4gIFxuICAvLyBDcmVhciBwb3NpY2lvbmVzIGRlIHB1bnRvcyBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlckxlbmd0aDsgaSsrKSB7XG4gICAgLy8gQ2FsY3VsYW1vcyBsYSBmcmVjdWVuY2lhIGNvcnJlc3BvbmRpZW50ZSBhIGNhZGEgYmluIGRlIGxhIEZGVFxuICAgIC8vIExhIEZGVCBkaXZpZGUgZWwgcmFuZ28gZGUgZnJlY3VlbmNpYXMgZW4gcGFydGVzIGlndWFsZXMgKGxpbmVhbGVzKVxuICAgIC8vIFBlcm8gcXVlcmVtb3MgdmlzdWFsaXphcmxhcyBlbiBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIGNvbnN0IGZyZXFSYXRpbyA9IGkgLyBidWZmZXJMZW5ndGg7IC8vIFBvc2ljacOzbiByZWxhdGl2YSBlbiBlbCBhcnJheSAoMC0xKVxuICAgIGNvbnN0IG55cXVpc3RGcmVxID0gMjIwNTA7IC8vIEZyZWN1ZW5jaWEgbcOheGltYSByZXByZXNlbnRhYmxlIChzYW1wbGVSYXRlLzIpXG4gICAgXG4gICAgLy8gRnJlY3VlbmNpYSBsaW5lYWwgY29ycmVzcG9uZGllbnRlIGFsIGJpbiBpIGRlIGxhIEZGVFxuICAgIGNvbnN0IGxpbmVhckZyZXEgPSBmcmVxUmF0aW8gKiBueXF1aXN0RnJlcTtcbiAgICBcbiAgICAvLyBTb2xvIHByb2Nlc2Ftb3MgaGFzdGEgMTdrSHpcbiAgICBpZiAobGluZWFyRnJlcSA+IDE3MDAwKSBicmVhaztcbiAgICBcbiAgICAvLyBTb2xvIGluY2x1aW1vcyBmcmVjdWVuY2lhcyBkZXNkZSAyMEh6XG4gICAgaWYgKGxpbmVhckZyZXEgPCAyMCkgY29udGludWU7XG4gICAgXG4gICAgLy8gQ29udmVydGlyIGZyZWN1ZW5jaWEgYSBwb3NpY2nDs24gWCB1c2FuZG8gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmxvZzIobGluZWFyRnJlcSAvIDIwKTsgLy8gTsO6bWVybyBkZSBvY3RhdmFzIGRlc2RlIDIwSHpcbiAgICBjb25zdCB0b3RhbE9jdGF2ZXMgPSBNYXRoLmxvZzIoMTcwMDAgLyAyMCk7IC8vIEFwcm94aW1hZGFtZW50ZSA5Ljcgb2N0YXZhcyAoaGFzdGEgMTdrSHopXG4gICAgY29uc3QgeCA9IChvY3RhdmUgLyB0b3RhbE9jdGF2ZXMpICogY2FudmFzLndpZHRoICogMC45OTU7IC8vIFVzYXIgZWwgdmFsb3IgZXhhY3RvIGRlIG9jdGF2YXNcbiAgICBcbiAgICAvLyBBbG1hY2VuYXIgcHVudG9zIGNvbiBzdXMgdmFsb3JlcyBkZSBhbXBsaXR1ZFxuICAgIGlmIChpIDwgcHJlRGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC0gKG5vcm1hbGl6ZURiKHByZURhdGFbaV0pICogY2FudmFzLmhlaWdodCk7XG4gICAgICBwcmVQb2ludHMucHVzaCh7IHgsIHkgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIE51ZXZvOiBhbG1hY2VuYXIgcHVudG9zIHBhcmEgZWwgdmlzdWFsaXphZG9yIGludGVybWVkaW9cbiAgICBpZiAoaSA8IG1pZERhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihtaWREYXRhW2ldKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgbWlkUG9pbnRzLnB1c2goeyB4LCB5IH0pO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaSA8IHBvc3REYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIocG9zdERhdGFbaV0pICogY2FudmFzLmhlaWdodCk7XG4gICAgICBwb3N0UG9pbnRzLnB1c2goeyB4LCB5IH0pO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gQXBsaWNhciBzdWF2aXphZG8gYSBsb3MgcHVudG9zXG4gIGNvbnN0IHNtb290aGVkUHJlUG9pbnRzID0gc21vb3RoUG9pbnRzKHByZVBvaW50cywgNywgY2FudmFzLndpZHRoKTtcbiAgY29uc3Qgc21vb3RoZWRNaWRQb2ludHMgPSBzbW9vdGhQb2ludHMobWlkUG9pbnRzLCA3LCBjYW52YXMud2lkdGgpOyBcbiAgY29uc3Qgc21vb3RoZWRQb3N0UG9pbnRzID0gc21vb3RoUG9pbnRzKHBvc3RQb2ludHMsIDcsIGNhbnZhcy53aWR0aCk7XG4gIFxuICAvLyBFZmVjdG8gZ2xvd1xuICBjdHguc2hhZG93Qmx1ciA9IDEwO1xuICBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcblxuICAvLyBQcmUtRVE6IHZpb2xldGEgdml2byBjb24gZ2xvd1xuICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjQpXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuOClcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuMylcIjtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIFxuICAvLyBEaWJ1amFyIGzDrW5lYSBwYXJhIHByZS1FUVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgY2FudmFzLmhlaWdodCk7IFxuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgcXVlIHVuZSBsb3MgcHVudG9zXG4gIHNtb290aGVkUHJlUG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIGN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH0pO1xuICBcbiAgLy8gQ2VycmFyIGVsIHBhdGggaGFzdGEgbGEgYmFzZVxuICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIC8vIFJlbGxlbmFyIGVsIMOhcmVhIGJham8gbGEgY3VydmFcbiAgY3R4LmZpbGwoKTtcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIGRlbCBjb250b3Jub1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGlmIChzbW9vdGhlZFByZVBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgY3R4Lm1vdmVUbyhzbW9vdGhlZFByZVBvaW50c1swXS54LCBzbW9vdGhlZFByZVBvaW50c1swXS55KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNtb290aGVkUHJlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdHgubGluZVRvKHNtb290aGVkUHJlUG9pbnRzW2ldLngsIHNtb290aGVkUHJlUG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBOdWV2bzogTWlkLUVRIChkZXNwdcOpcyBkZSBmaWx0cm9zLCBhbnRlcyBkZSBjb21wcmVzb3IpOiBhbWFyaWxsby9uYXJhbmphIGNvbiBnbG93XG4gIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuNClcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC44KVwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC4zKVwiO1xuICBcbiAgLy8gRGlidWphciBsw61uZWEgcGFyYSBtaWQtRVFcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyBcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIHF1ZSB1bmUgbG9zIHB1bnRvc1xuICBzbW9vdGhlZE1pZFBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9KTtcbiAgXG4gIC8vIENlcnJhciBlbCBwYXRoIGhhc3RhIGxhIGJhc2VcbiAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gIGN0eC5maWxsKCk7XG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBkZWwgY29udG9ybm9cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBpZiAoc21vb3RoZWRNaWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgIGN0eC5tb3ZlVG8oc21vb3RoZWRNaWRQb2ludHNbMF0ueCwgc21vb3RoZWRNaWRQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbW9vdGhlZE1pZFBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmxpbmVUbyhzbW9vdGhlZE1pZFBvaW50c1tpXS54LCBzbW9vdGhlZE1pZFBvaW50c1tpXS55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gUG9zdC1FUTogdmVyZGUgbmXDs24gY2xhcm8gY29uIGdsb3dcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC40KVwiO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjgpXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjMpXCI7XG4gIFxuICAvLyBEaWJ1amFyIGzDrW5lYSBwYXJhIHBvc3QtRVFcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyAvLyBFbXBlemFyIGRlc2RlIGxhIGVzcXVpbmEgaW5mZXJpb3IgaXpxdWllcmRhXG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBxdWUgdW5lIGxvcyBwdW50b3NcbiAgc21vb3RoZWRQb3N0UG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIGN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH0pO1xuICBcbiAgLy8gQ2VycmFyIGVsIHBhdGggaGFzdGEgbGEgYmFzZVxuICBjdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIC8vIFJlbGxlbmFyIGVsIMOhcmVhIGJham8gbGEgY3VydmFcbiAgY3R4LmZpbGwoKTtcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIGRlbCBjb250b3Jub1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGlmIChzbW9vdGhlZFBvc3RQb2ludHMubGVuZ3RoID4gMCkge1xuICAgIGN0eC5tb3ZlVG8oc21vb3RoZWRQb3N0UG9pbnRzWzBdLngsIHNtb290aGVkUG9zdFBvaW50c1swXS55KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNtb290aGVkUG9zdFBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmxpbmVUbyhzbW9vdGhlZFBvc3RQb2ludHNbaV0ueCwgc21vb3RoZWRQb3N0UG9pbnRzW2ldLnkpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBMaW1waWFyIGVmZWN0b3NcbiAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuICBjdHguc2hhZG93Q29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG5cbiAgLy8gQWdyZWdhciBsZXllbmRhIHBhcmEgbG9zIGNvbG9yZXNcbiAgY29uc3QgbGVnZW5kWSA9IDIwO1xuICBjb25zdCBsZWdlbmRTcGFjaW5nID0gMTIwO1xuICBcbiAgLy8gTGV5ZW5kYSBwYXJhIFByZS1FUSAodmlvbGV0YSlcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxOTAsIDkwLCAyNTUsIDAuOClcIjtcbiAgY3R4LmZpbGxSZWN0KDEwLCBsZWdlbmRZIC0gMTAsIDEwLCAxMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUHJlLUVRXCIsIDI1LCBsZWdlbmRZKTtcbiAgXG4gIC8vIExleWVuZGEgcGFyYSBNaWQtRVEgKGFtYXJpbGxvL25hcmFuamEpXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAxODAsIDUwLCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdCgxMCArIGxlZ2VuZFNwYWNpbmcsIGxlZ2VuZFkgLSAxMCwgMTAsIDEwKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICBjdHguZmlsbFRleHQoXCJQb3N0LUZpbHRyb3NcIiwgMjUgKyBsZWdlbmRTcGFjaW5nLCBsZWdlbmRZKTtcbiAgXG4gIC8vIExleWVuZGEgcGFyYSBQb3N0LUVRICh2ZXJkZSlcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg1MCwgMjIwLCAxMjAsIDAuOClcIjtcbiAgY3R4LmZpbGxSZWN0KDEwICsgbGVnZW5kU3BhY2luZyAqIDIsIGxlZ2VuZFkgLSAxMCwgMTAsIDEwKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGlzRGFya01vZGUgPyBcIiNlMGUwZTBcIiA6IFwiIzMzM1wiO1xuICBjdHguZmlsbFRleHQoXCJQb3N0LUNvbXByZXNvclwiLCAyNSArIGxlZ2VuZFNwYWNpbmcgKiAyLCBsZWdlbmRZKTtcblxuICAvLyBEaWJ1amFyIGVsIG1hcmNhZG9yIGRlIGZyZWN1ZW5jaWEgYWN0aXZhIHNpIGV4aXN0ZVxuICBjb25zdCBhY3RpdmVGcmVxdWVuY3lNYXJrZXIgPSBnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoKTtcbiAgY29uc3QgYWN0aXZlUU1hcmtlciA9IGdldEFjdGl2ZVFNYXJrZXIoKTtcbiAgaWYgKGFjdGl2ZUZyZXF1ZW5jeU1hcmtlcikge1xuICAgIC8vIENvbnZlcnRpciBmcmVjdWVuY2lhIGEgcG9zaWNpw7NuIFggdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5sb2cyKGFjdGl2ZUZyZXF1ZW5jeU1hcmtlciAvIDIwKTsgLy8gTsO6bWVybyBkZSBvY3RhdmFzIGRlc2RlIDIwSHpcbiAgICBjb25zdCB0b3RhbE9jdGF2ZXMgPSBNYXRoLmxvZzIoMTcwMDAgLyAyMCk7IC8vIEFwcm94aW1hZGFtZW50ZSA5Ljcgb2N0YXZhcyAoaGFzdGEgMTdrSHopXG4gICAgY29uc3QgeCA9IChvY3RhdmUgLyB0b3RhbE9jdGF2ZXMpICogY2FudmFzLndpZHRoICogMC45OTU7IC8vIFVzYXIgZWwgdmFsb3IgZXhhY3RvIGRlIG9jdGF2YXNcbiAgICBcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmZjMzNjZcIjsgLy8gQ29sb3IgbGxhbWF0aXZvIHBhcmEgZWwgbWFyY2Fkb3JcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICBjdHgubGluZVRvKHgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAvLyBFdGlxdWV0YSBjb24gZWwgdmFsb3IgZGUgZnJlY3VlbmNpYVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjMzNjZcIjtcbiAgICBjdHguZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsVGV4dChgJHthY3RpdmVGcmVxdWVuY3lNYXJrZXJ9IEh6YCwgeCArIDUsIDE1KTtcbiAgICBcbiAgICAvLyBEaWJ1amFyIGxhIGNhbXBhbmEgZGUgUSBzaSB0ZW5lbW9zIHRhbnRvIGZyZWN1ZW5jaWEgY29tbyBRXG4gICAgaWYgKGFjdGl2ZVFNYXJrZXIpIHtcbiAgICAgIC8vIERpYnVqYXIgbGEgY2FtcGFuYVxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwgNTEsIDEwMiwgMC43KVwiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDUxLCAxMDIsIDAuMilcIjtcbiAgICAgIFxuICAgICAgLy8gQ2FsY3VsYXIgbGEgZXNjYWxhIGRlIGxhIGNhbXBhbmEgYmFzYWRhIGVuIFFcbiAgICAgIC8vIEN1YW50byBtYXlvciBzZWEgUSwgbcOhcyBlc3RyZWNoYSBzZXLDoSBsYSBjYW1wYW5hXG4gICAgICBjb25zdCBxU2NhbGUgPSBNYXRoLm1heCgyMCwgMjAwIC8gYWN0aXZlUU1hcmtlcik7IC8vIExpbWl0YXIgZWwgbcOtbmltbyBwYXJhIFEgbXV5IGFsdG9zXG4gICAgICBcbiAgICAgIC8vIERpYnVqYXIgbGEgY3VydmEgZGUgY2FtcGFuYVxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgXG4gICAgICAvLyBQdW50b3MgcGFyYSBsYSBjdXJ2YVxuICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICBjb25zdCBjZW50ZXJYID0geDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKiAwLjc7IC8vIEFsdHVyYSBtw6F4aW1hIGRlIGxhIGNhbXBhbmFcbiAgICAgIFxuICAgICAgLy8gR2VuZXJhciBwdW50b3MgcGFyYSBsYSBjdXJ2YSBkZSBjYW1wYW5hIGVuIGVzY2FsYSBsb2dhcsOtdG1pY2FcbiAgICAgIGZvciAobGV0IGkgPSAtY2FudmFzLndpZHRoLzI7IGkgPD0gY2FudmFzLndpZHRoLzI7IGkgKz0gNSkge1xuICAgICAgICBjb25zdCBwb2ludFggPSBjZW50ZXJYICsgaTtcbiAgICAgICAgaWYgKHBvaW50WCA+PSAwICYmIHBvaW50WCA8PSBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAvLyBDb252ZXJ0aXIgcG9zaWNpw7NuIFggYSBmcmVjdWVuY2lhXG4gICAgICAgICAgY29uc3QgZnJlcSA9IDIwICogTWF0aC5wb3coMTAsIChwb2ludFggLyBjYW52YXMud2lkdGgpICogTWF0aC5sb2cxMCgxNzAwMCAvIDIwKSk7XG4gICAgICAgICAgY29uc3QgZnJlcVJhdGlvID0gZnJlcSAvIGFjdGl2ZUZyZXF1ZW5jeU1hcmtlcjtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBGw7NybXVsYSBkZSBjYW1wYW5hIHBhcmEgZmlsdHJvIHBlYWtpbmcgZW4gZXNjYWxhIGxvZ2Fyw610bWljYVxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gMSAvIE1hdGguc3FydCgxICsgTWF0aC5wb3coYWN0aXZlUU1hcmtlciAqIChmcmVxUmF0aW8gLSAxL2ZyZXFSYXRpbyksIDIpKTtcbiAgICAgICAgICBjb25zdCBwb2ludFkgPSBjYW52YXMuaGVpZ2h0IC0gaGVpZ2h0ICogcmVzcG9uc2U7XG4gICAgICAgICAgXG4gICAgICAgICAgcG9pbnRzLnB1c2goe3g6IHBvaW50WCwgeTogcG9pbnRZfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gRGlidWphciBsYSBjdXJ2YVxuICAgICAgaWYgKHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW3BvaW50cy5sZW5ndGgtMV0ueCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnRzWzBdLngsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBNb3N0cmFyIGVsIHZhbG9yIGRlIFFcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMzM2NlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYFE6ICR7YWN0aXZlUU1hcmtlci50b0ZpeGVkKDEpfWAsIHggKyA1LCAzMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImNocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfcHJvZmVzc2lvbmFsX2F1ZGlvX3BsdWdpblwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaHJvbWVfcHJvZmVzc2lvbmFsX2F1ZGlvX3BsdWdpblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IHsgY2FyZ2FyRmlsdHJvcywgYWN0dWFsaXphckVzdGlsb0ZpbHRyb3MgfSBmcm9tIFwiLi9maWx0ZXJzX2ludGVyZmFjZS50c1wiO1xuaW1wb3J0IHsgZHJhd1Zpc3VhbGl6ZXIgfSBmcm9tIFwiLi92aXN1YWxpemVyLnRzXCI7XG5pbXBvcnQgeyBzdGF0aWNGaWx0ZXJpbmcsIGZpbHRlcnMgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcbmltcG9ydCB7IGluaWNpYWxpemFyQ29tcHJlc29yIH0gZnJvbSBcIi4vY29tcHJlc3Nvci50c1wiO1xuaW1wb3J0IHsgbG9jYWxFc3RhZG8gfSBmcm9tIFwiLi9zdGF0ZV9tZW1vcnkudHNcIlxuaW1wb3J0IHsgZ3VhcmRhckVzdGFkbywgY2FyZ2FyRXN0YWRvLCBjYXJnYXJMaXN0YVByZXNldHMsIGNsZWFyU3RvcmFnZSwgc2F2ZVZhbHVlIH0gZnJvbSBcIi4vc3RhdGVfbWVtb3J5LnRzXCI7XG5pbXBvcnQgeyBhcGxpY2FyQ29uZmlndXJhY2lvbiwgdXBkYXRlVm9sdW1lVGV4dCwgb2J0ZW5lckNvbmZpZ3VyYWNpb25BY3R1YWwgfSBmcm9tIFwiLi9pbnRlcmZhY2UudHNcIjtcbmltcG9ydCB7IGRiVG9HYWluIH0gZnJvbSBcIi4vdXRpbHMudHNcIjtcblxubGV0IG9mZnNjcmVlblBvcnQgPSBudWxsO1xubGV0IGxvb3BzID0gbnVsbDtcbmxldCBkZWJ1Z19jb3VudGVyID0gMTtcblxuXG4vLyBTZW5kZXJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coXCJbREVCVUddIEVudmlhbmRvIG1lbnNhamU6XCIsIG1lc3NhZ2UpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlLCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddIFJlc3B1ZXN0YSByZWNpYmlkYSBlbiBzZW5kTWVzc2FnZVByb21pc2U6XCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbREVCVUddIEVycm9yIGVuIHNlbmRNZXNzYWdlUHJvbWlzZTpcIiwgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltERUJVR10gRXJyb3IgYWwgZW52aWFyIG1lbnNhamU6XCIsIGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBXYWl0IGZvciB6aGUgRE9NIHRvIGxvYWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGJvdG9uQ2FwdHVyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZhclwiKTtcbiAgY29uc3QgZGVidWdMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXN0YWRvXCIpO1xuICBjb25zdCBkZWJ1Z0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdcIik7XG4gIGRlYnVnTGFiZWwudGV4dENvbnRlbnQgPSBcIkNhcmdhbmRvLi4uXCI7XG5cbiAgLy8gSW5pY2lhbGl6YXIgbG9zIGJvdG9uZXMgZGUgcHJlc2V0c1xuICBjb25zb2xlLmxvZyhcIkluaWNpYWxpemFuZG8gcHJlc2V0cy4uLlwiKVxuICBpbmljaWFsaXphclByZXNldHMoKTtcbiAgLy8gQ2FyZ2FyIGVzdGFkbyBndWFyZGFkb1xuICBjb25zb2xlLmxvZyhcIkluaWNpYWxpemFuZG8gY2FyZ2FuZG9Fc3RhZG8uLi5cIilcbiAgY2FyZ2FyRXN0YWRvKCk7XG4gIGNvbnNvbGUubG9nKFwiRXN0YWRvIGNhcmdhZG86XCIsIGxvY2FsRXN0YWRvKTtcbiAgXG4gIC8vIFZlcmlmaWNhciBzaSBlcyBsYSBwcmltZXJhIHZleiBxdWUgc2UgYWJyZSBlbCBwb3B1cCBkZXNkZSBsYSBpbmljaWFsaXphY2nDs25cbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcIltERUJVR10gVmVyaWZpY2FuZG8gcHJpbWVyYSBhcGVydHVyYSBkZWwgcG9wdXAuLi5cIik7XG4gICAgXG4gICAgLy8gRW4gbHVnYXIgZGUgZXNwZXJhciB1bmEgcmVzcHVlc3RhIHPDrW5jcm9uYSwgZW52aWFtb3MgZWwgbWVuc2FqZVxuICAgIC8vIHkgY29uZmlndXJhbW9zIHVuIGxpc3RlbmVyIHBhcmEgbGEgcmVzcHVlc3RhXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJjaGVjay1maXJzdC1wb3B1cC1vcGVuXCIsXG4gICAgICB0YXJnZXQ6IFwiYmFja2dyb3VuZFwiXG4gICAgfSk7XG4gICAgXG4gICAgLy8gRXNjdWNoYW1vcyBwb3IgdW4gbWVuc2FqZSBlc3BlY8OtZmljbyBkZXNkZSBlbCBiYWNrZ3JvdW5kIFxuICAgIC8vIChhZ3JlZ2FyZW1vcyBlc3RlIGhhbmRsZXIgZW4gYmFja2dyb3VuZC50cylcbiAgICBjb25zdCBoYW5kbGVGaXJzdE9wZW4gPSAobWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJmaXJzdC1vcGVuLXJlc3BvbnNlXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbREVCVUddIFJlc3B1ZXN0YSBkZSBwcmltZXJhIGFwZXJ0dXJhIHJlY2liaWRhOlwiLCBtZXNzYWdlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbW92ZW1vcyBlbCBsaXN0ZW5lciBwYXJhIGV2aXRhciBtw7psdGlwbGVzIHJlc3B1ZXN0YXNcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGhhbmRsZUZpcnN0T3Blbik7XG4gICAgICAgIFxuICAgICAgICBpZiAobWVzc2FnZS5pc0ZpcnN0T3Blbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBFcyBwcmltZXJhIGFwZXJ0dXJhLCBsaW1waWFuZG8gc3RvcmFnZS4uLlwiKTtcbiAgICAgICAgICBjbGVhclN0b3JhZ2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBTdG9yYWdlIGxpbXBpYWRvIGNvcnJlY3RhbWVudGVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vIEFncmVnYW1vcyBlbCBsaXN0ZW5lclxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihoYW5kbGVGaXJzdE9wZW4pO1xuICAgIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIEVycm9yIGFsIHZlcmlmaWNhciBwcmltZXJhIGFwZXJ0dXJhOlwiLCBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXCJbREVCVUddIFRpcG8gZGUgZXJyb3I6XCIsIHR5cGVvZiBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXCJbREVCVUddIFByb3BpZWRhZGVzIGRlbCBlcnJvcjpcIiwgT2JqZWN0LmtleXMoZXJyb3IpKTtcbiAgICBpZiAoZXJyb3IubWVzc2FnZSkgY29uc29sZS5sb2coXCJbREVCVUddIE1lbnNhamUgZGUgZXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIGlmIChlcnJvci5zdGFjaykgY29uc29sZS5sb2coXCJbREVCVUddIFN0YWNrIHRyYWNlOlwiLCBlcnJvci5zdGFjayk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIltERUJVR10gQ2FyZ2FuZG8gZmlsdHJvcy4uLlwiKTtcbiAgY2FyZ2FyRmlsdHJvcygpO1xuXG4gIGNvbnNvbGUubG9nKFwiW0RFQlVHXSBFbnZpYW5kbyBtZW5zYWplIG9mZnNjcmVlbi13YWtldXAuLi5cIik7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJvZmZzY3JlZW4td2FrZXVwXCIsIHRhcmdldDogXCJiYWNrZ3JvdW5kXCIgfSk7XG5cbiAgaWYgKGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgYm90b25DYXB0dXJhLnRleHRDb250ZW50ID0gXCJEZXRlbmVyIEF1ZGlvIPCflIdcIjtcbiAgICBvcGVuT2Zmc2NyZWVuUG9ydCgpO1xuICB9IGVsc2Uge1xuICAgIGJvdG9uQ2FwdHVyYS50ZXh0Q29udGVudCA9IFwiQWN0aXZhciBBdWRpbyDwn46kXCI7XG4gIH1cblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgLy8gY29uZXhpb24gUDJQXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJvZmZzY3JlZW4tYWxpdmVcIikge1xuICAgICAgaWYgKCFvZmZzY3JlZW5Qb3J0KSB7XG4gICAgICAgIGF3YWl0IG9wZW5PZmZzY3JlZW5Qb3J0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkZWJ1Z0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRGVidWcgYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgZGVidWdMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVidWdnaW5nLi4uXCI7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImRlYnVnXCIgLCB0YWJJZDogYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKX0pO1xuICB9KTtcblxuICBib3RvbkNhcHR1cmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG5cbiAgICBpZiAoIWxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvKSB7XG4gICAgICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImVudHJlIGlzQWN0aXZlXCIpXG4gICAgICBpZiAoIXRhYi51cmwuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBTEVSVFwiKVxuICAgICAgICBhbGVydChcIltwb3B1cF0gTm8gc2UgcHVlZGUgY2FwdHVyYXIgZXN0YSBwZXN0YcOxYS4gQWJyw60gdW5hIHDDoWdpbmEgd2ViIGNvbiBhdWRpbyBcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmVhbUlkID0gYXdhaXQgY2hyb21lLnRhYkNhcHR1cmUuZ2V0TWVkaWFTdHJlYW1JZCh7IHRhcmdldFRhYklkOiB0YWJJZCB9KTtcbiAgICAgIGNvbnN0IGVxVmFsb3JlcyA9IHt9XG4gICAgICBpZiAoc3RhdGljRmlsdGVyaW5nKSB7XG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgZXFWYWxvcmVzW2ZpbHRlcl0gPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpbHRlcikudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzdGFydC1wcm9jZXNzaW5nXCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQsXG4gICAgICAgIHN0cmVhbUlkLFxuICAgICAgICBsZXZlbDogZGJUb0dhaW4ocGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikudmFsdWUpKSxcbiAgICAgICAgLi4uZXFWYWxvcmVzLFxuICAgICAgfSk7XG4gICAgICBib3RvbkNhcHR1cmEudGV4dENvbnRlbnQgPSBcIkRldGVuZXIgQXVkaW8g8J+Uh1wiO1xuICAgICAgc2F2ZVZhbHVlKFwiY2FwdHVyaW5nQXVkaW9cIiwgdHJ1ZSk7XG4gICAgICBpZiAob2Zmc2NyZWVuUG9ydCkge1xuICAgICAgICBvZmZzY3JlZW5Qb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiwgdGFiSWQgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBvcGVuT2Zmc2NyZWVuUG9ydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltXQVJOSU5HXSBPcGVuZWQgb2Zmc2NyZWVuIHBvcnQgYmVjYXVzZSBpdCB3YXMgY2xvc2VkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW9mZnNjcmVlblBvcnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbV0FSTklOR10gTm8gaGF5IHB1ZXJ0byBvZmZzY3JlZW5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlYnVnTGFiZWwudGV4dENvbnRlbnQgPSBcIkRldGVuaWVuZG8gYXVkaW8uLi5cIiArIGRlYnVnX2NvdW50ZXIrKztcbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzdG9wLXByb2Nlc3NpbmdcIixcbiAgICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgICAgICB0YWJJZCxcbiAgICAgIH0pO1xuICAgICAgYm90b25DYXB0dXJhLnRleHRDb250ZW50ID0gXCJBY3RpdmFyIEF1ZGlvIPCfjqRcIjtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxvb3BzKTtcbiAgICAgIGxvb3BzID0gbnVsbDtcbiAgICAgIHNhdmVWYWx1ZShcImNhcHR1cmluZ0F1ZGlvXCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuXG4gIC8vIEFncmVnYXIgZXZlbnRvIHBhcmEgZWwgY2hlY2tib3ggZGUgbW9kbyBvc2N1cm9cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBY3R1YWxpemFyIGVzdGlsb3MgZGUgbG9zIGZpbHRyb3MgY3VhbmRvIGNhbWJpZSBlbCB0ZW1hXG4gICAgYWN0dWFsaXphckVzdGlsb0ZpbHRyb3MoKTtcbiAgICBcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuXG4gIC8vIEluaWNpYWxpemFyIGVsIHRleHRvIGRlbCB2b2x1bWVuXG4gIGNvbnN0IHZvbHVtZW5TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIik7XG4gIGlmICh2b2x1bWVuU2xpZGVyKSB7XG4gICAgdXBkYXRlVm9sdW1lVGV4dCh2b2x1bWVuU2xpZGVyLnZhbHVlKTtcbiAgfVxuXG4gIC8vIEFncmVnYXIgZXZlbnRvIHBhcmEgZWwgc2xpZGVyIGRlIHZvbHVtZW5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICBjb25zdCB2b2x1bWVuVmFsdWUgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBcbiAgICAvLyBBY3R1YWxpemFyIGVsIHRleHRvIHF1ZSBtdWVzdHJhIGVsIHZhbG9yIGVuIGRCXG4gICAgdXBkYXRlVm9sdW1lVGV4dCh2b2x1bWVuVmFsdWUpO1xuICAgIFxuICAgIC8vIEVudmlhciBlbCBtZW5zYWplIHBhcmEgYWp1c3RhciBlbCB2b2x1bWVuXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJhanVzdGFyLXZvbHVtZW5cIixcbiAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgIHRhYklkLFxuICAgICAgbGV2ZWw6IGRiVG9HYWluKHZvbHVtZW5WYWx1ZSksIC8vIENvbnZlcnRpciBkQiBhIGdhbmFuY2lhXG4gICAgfSk7XG4gICAgXG4gICAgLy8gR3VhcmRhciBlbCBlc3RhZG8gZGVsIHZvbHVtZW5cbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuXG4gIGZpbHRlcnMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFiSWQgPSBhd2FpdCBnZXRBY3RpdmVUYWJJZCgpO1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcImFqdXN0YXItZmlsdHJvXCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQsXG4gICAgICAgIGJhbmRhOiBpZCxcbiAgICAgICAgdmFsb3I6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpLFxuICAgICAgfSk7XG4gICAgICBndWFyZGFyRXN0YWRvKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEluaWNpYWxpemFyIGNvbnRyb2xlcyBkZWwgY29tcHJlc29yXG4gIGluaWNpYWxpemFyQ29tcHJlc29yKCk7XG59KTtcblxud2luZG93LmdldEFjdGl2ZVRhYklkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICByZXR1cm4gdGFiLmlkO1xufTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2cpID0+IHtcbiAgaWYgKG1zZy50eXBlID09PSBcInZpc3VhbGl6ZXItZGF0YVwiICYmIG1zZy5kYXRhKSB7XG4gICAgZHJhd1Zpc3VhbGl6ZXIobXNnLmRhdGEpO1xuICB9XG59KTtcblxuXG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZpc3VhbGl6ZXIoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgaWYgKG9mZnNjcmVlblBvcnQpIHtcbiAgICAgIG9mZnNjcmVlblBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcImdpdmUtbWUtdml6XCIsXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcbiAgICAgICAgdGFiSWQ6IGF3YWl0IGdldEFjdGl2ZVRhYklkKCksXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiW3BvcHVwXSBObyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiKTtcbiAgICAgIGFsZXJ0KFwiW3BvcHVwXSBObyBoYXkgcHVlcnRvIG9mZnNjcmVlblwiKTtcbiAgICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwibm8gaGF5IHB1ZXJ0byBvZmZzY3JlZW5cIjtcbiAgICB9XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgbG9vcHMgPSBpZDtcbiAgfVxuICBsb29wKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5PZmZzY3JlZW5Qb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gICAgb2Zmc2NyZWVuUG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3QoeyBuYW1lOiBcInBvcHVwLXZpc3VhbGl6ZXJcIn0pO1xuICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwiQ29uZWN0YWRvIGFsIG9mZnNjcmVlblwiO1xuICAgIG9mZnNjcmVlblBvcnQucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInN0YXJ0LXN0cmVhbVwiLCB0YWJJZCB9KTtcblxuICAgIG9mZnNjcmVlblBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIGVzdGFkby50ZXh0Q29udGVudCA9IFwiRGVzY29uZWN0YWRvIGRlbCBvZmZzY3JlZW5cIjtcbiAgICB9KTtcblxuICAgIG9mZnNjcmVlblBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSBcInZpc3VhbGl6ZXItZGF0YVwiKSB7XG4gICAgICAgIGRyYXdWaXN1YWxpemVyKG1lc3NhZ2UuZGF0YSk7XG4gICAgICB9IFxuICAgICAgZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSBcInN0YXJ0LXN0cmVhbVwiKSB7XG4gICAgICAgIHVwZGF0ZVZpc3VhbGl6ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlc3RhZG8udGV4dENvbnRlbnQgPSBcIkVycm9yIGFsIGNvbmVjdGFyIGFsIG9mZnNjcmVlblwiO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUE9QVVBdIEVycm9yIGFsIGNvbmVjdGFyIGFsIG9mZnNjcmVlbjpcIiwgZXJyb3IpO1xuICB9XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgaW5pY2lhbGl6YXIgbG9zIGNvbnRyb2xlcyBkZSBwcmVzZXRzXG5mdW5jdGlvbiBpbmljaWFsaXphclByZXNldHMoKSB7XG4gIGNvbnN0IGd1YXJkYXJQcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VhcmRhci1wcmVzZXQnKTtcbiAgY29uc3QgY2FyZ2FyUHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcmdhci1wcmVzZXQnKTtcbiAgY29uc3QgZWxpbWluYXJQcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxpbWluYXItcHJlc2V0Jyk7XG4gIGNvbnN0IHByZXNldE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtbmFtZScpO1xuICBjb25zdCBwcmVzZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0LXNlbGVjdCcpO1xuXG4gIC8vIENhcmdhciBwcmVzZXRzIGV4aXN0ZW50ZXNcbiAgY2FyZ2FyTGlzdGFQcmVzZXRzKCk7XG5cbiAgLy8gRXZlbnRvIHBhcmEgZ3VhcmRhciBwcmVzZXRcbiAgZ3VhcmRhclByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBub21icmVQcmVzZXQgPSBwcmVzZXROYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChub21icmVQcmVzZXQgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBpbmdyZXNhIHVuIG5vbWJyZSBwYXJhIGVsIHByZXNldCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9idGVuZXIgY29uZmlndXJhY2nDs24gYWN0dWFsXG4gICAgY29uc3QgY29uZmlndXJhY2lvbiA9IG9idGVuZXJDb25maWd1cmFjaW9uQWN0dWFsKCk7XG4gICAgXG4gICAgLy8gR3VhcmRhciBlbiBzdG9yYWdlXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcmVzZXRzID0gcmVzdWx0LnByZXNldHMgfHwge307XG4gICAgICBwcmVzZXRzW25vbWJyZVByZXNldF0gPSBjb25maWd1cmFjaW9uO1xuICAgICAgXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcmVzZXRzIH0sICgpID0+IHtcbiAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGd1YXJkYWRvIGNvcnJlY3RhbWVudGVgKTtcbiAgICAgICAgcHJlc2V0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNhcmdhckxpc3RhUHJlc2V0cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEV2ZW50byBwYXJhIGNhcmdhciBwcmVzZXRcbiAgY2FyZ2FyUHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWJyZVByZXNldCA9IHByZXNldFNlbGVjdC52YWx1ZTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgc2VsZWNjaW9uYSB1biBwcmVzZXQgcGFyYSBjYXJnYXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydwcmVzZXRzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYWNpb24gPSBwcmVzZXRzW25vbWJyZVByZXNldF07XG4gICAgICBcbiAgICAgIGlmIChjb25maWd1cmFjaW9uKSB7XG4gICAgICAgIGFwbGljYXJDb25maWd1cmFjaW9uKGNvbmZpZ3VyYWNpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXNldCBjYXJnYWRvOlwiLCBjb25maWd1cmFjaW9uKTtcbiAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGNhcmdhZG8gY29ycmVjdGFtZW50ZWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoYEVycm9yOiBObyBzZSBlbmNvbnRyw7MgZWwgcHJlc2V0IFwiJHtub21icmVQcmVzZXR9XCJgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gRXZlbnRvIHBhcmEgZWxpbWluYXIgcHJlc2V0XG4gIGVsaW1pbmFyUHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWJyZVByZXNldCA9IHByZXNldFNlbGVjdC52YWx1ZTtcbiAgICBpZiAobm9tYnJlUHJlc2V0ID09PSAnJykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgc2VsZWNjaW9uYSB1biBwcmVzZXQgcGFyYSBlbGltaW5hcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb25maXJtKGDCv0VzdMOhcyBzZWd1cm8gZGUgcXVlIGRlc2VhcyBlbGltaW5hciBlbCBwcmVzZXQgXCIke25vbWJyZVByZXNldH1cIj9gKSkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsncHJlc2V0cyddLCAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwcmVzZXRzW25vbWJyZVByZXNldF0pIHtcbiAgICAgICAgICBkZWxldGUgcHJlc2V0c1tub21icmVQcmVzZXRdO1xuICAgICAgICAgIFxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHByZXNldHMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoYFByZXNldCBcIiR7bm9tYnJlUHJlc2V0fVwiIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlYCk7XG4gICAgICAgICAgICBjYXJnYXJMaXN0YVByZXNldHMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChgRXJyb3I6IE5vIHNlIGVuY29udHLDsyBlbCBwcmVzZXQgXCIke25vbWJyZVByZXNldH1cImApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJkYlRvR2FpbiIsImxvY2FsRXN0YWRvIiwiY29tcHJlc29yQWN0aXZvIiwiY29tcHJlc29yUGFyYW1zIiwiZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuIiwiX3giLCJfZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuIiwiX2NhbGxlZSIsImNvbmZpZyIsInRhYklkIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldEFjdGl2ZVRhYklkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFyZ2V0IiwibGV2ZWwiLCJ2b2x1bWVuIiwiZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvciIsIl9lbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjYXB0dXJpbmdBdWRpbyIsImFjdGl2byIsInBhcmFtcyIsInRocmVzaG9sZCIsInJhdGlvIiwia25lZSIsImF0dGFjayIsInJlbGVhc2UiLCJzZXRDb21wcmVzb3JBY3Rpdm8iLCJzZXRDb21wcmVzb3JQYXJhbSIsImd1YXJkYXJFc3RhZG8iLCJpbmljaWFsaXphckNvbXByZXNvciIsImNvbXByZXNvckFjdGl2b0NoZWNrYm94IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhcnNlRmxvYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsImFjdHVhbGl6YXJWYWxvckNvbXByZXNvciIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwidGlwbyIsInZhbG9yIiwidmFsb3JFbGVtZW50IiwiY29uY2F0IiwidGV4dENvbnRlbnQiLCJhdHRhY2tNcyIsInRvRml4ZWQiLCJyZWxlYXNlTXMiLCJhY3RpdmVGcmVxdWVuY3lNYXJrZXIiLCJhY3RpdmVRTWFya2VyIiwic3RhdGljRmlsdGVyaW5nIiwiZmlsdGVycyIsInNldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlciIsImZyZXF1ZW5jeSIsImdldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlciIsInNldEFjdGl2ZVFNYXJrZXIiLCJxIiwiZ2V0QWN0aXZlUU1hcmtlciIsImdldENvbXByZXNvckFjdGl2byIsInBhcmFtIiwiZ2V0Q29tcHJlc29yUGFyYW0iLCJNSU5fRlJFUSIsIk1BWF9GUkVRIiwiT0NUQVZFX1JBTkdFIiwiTWF0aCIsImxvZzIiLCJmaWx0cm9zQWN0aXZvcyIsImJvdG9uQWdyZWdhckZpbHRybyIsImlkIiwiY3J5cHRvIiwicmFuZG9tVVVJRCIsImZpbHRybyIsImZyZXEiLCJnYWluIiwiYnlwYXNzIiwiY3JlYXJGaWx0cm9DYXJkIiwiZW52aWFyQWN0dWFsaXphY2lvbiIsImd1YXJkYXJGaWx0cm9zIiwic2xpZGVyVG9GcmVxIiwic2xpZGVyVmFsdWUiLCJyb3VuZCIsInBvdyIsImZyZXFUb1NsaWRlciIsImNvbnRlbmVkb3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiaXNEYXJrTW9kZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJidXR0b25CZ0NvbG9yIiwiYnV0dG9uVGV4dENvbG9yIiwic3R5bGUiLCJjc3NUZXh0IiwiaW5uZXJIVE1MIiwiZnJlcVNsaWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJmcmVxVmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiZnJlY3VlbmNpYSIsInRvU3RyaW5nIiwicVNsaWRlciIsInFWYWx1ZSIsImdhaW5TbGlkZXIiLCJnYWluVmFsdWUiLCJieXBhc3NDaGVja2JveCIsImVsaW1pbmFyQnRuIiwicmVtb3ZlIiwiZmlsdGVyIiwiZmlsdHJvSWQiLCJmaWx0cm9zQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJfZW52aWFyQWN0dWFsaXphY2lvbiIsInQwIiwidDEiLCJ0MiIsInQzIiwidDQiLCJ0NSIsInQ2IiwidDciLCJzdG9yYWdlIiwibG9jYWwiLCJzZXQiLCJmaWx0cm9zRGluYW1pY29zIiwiY2FyZ2FyRmlsdHJvcyIsImdldCIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJvYnNlcnZhckNhbWJpb3NUZW1hIiwiYWN0dWFsaXphckVzdGlsb0ZpbHRyb3MiLCJmaWx0cm9DYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXJkIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZGFya01vZGVDaGVja2JveCIsImFwbGljYXJDb25maWd1cmFjaW9uIiwiX2FwbGljYXJDb25maWd1cmFjaW9uIiwidm9sdW1lblNsaWRlciIsInRocmVzaG9sZFNsaWRlciIsInJhdGlvU2xpZGVyIiwia25lZVNsaWRlciIsImF0dGFja1NsaWRlciIsInJlbGVhc2VTbGlkZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ1cGRhdGVWb2x1bWVUZXh0IiwiZGFya01vZGUiLCJhZGQiLCJjb21wcmVzb3IiLCJmaWx0ZXJzTW9kdWxlIiwiZGJWYWx1ZSIsInZvbHVtZVZhbHVlRWxlbWVudCIsIm9idGVuZXJDb25maWd1cmFjaW9uQWN0dWFsIiwiY29uZkludGVyZmFjZSIsImZpbHRyb3NFbGVtZW50cyIsImZpbHRyb0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsImZyZWN1ZW5jaWFJbnB1dCIsInFJbnB1dCIsImdhbmFuY2lhSW5wdXQiLCJieXBhc3NJbnB1dCIsImZkIiwiZGF0YXNldCIsImdhbmFuY2lhIiwiY29tcHJlc29yQ2hlY2tib3giLCJ0aHJlc2hvbGRJbnB1dCIsInJhdGlvSW5wdXQiLCJrbmVlSW5wdXQiLCJhdHRhY2tJbnB1dCIsInJlbGVhc2VJbnB1dCIsInNhdmVWYWx1ZSIsInZhbHVlTmFtZSIsImVzdGFkbyIsImNhcmdhckVzdGFkbyIsImJvdG9uQWN0aXZhciIsImdhaW5BdWRpbyIsInZvbHVtZW5fdmFsdWUiLCJkYXJrX21vZGVfZW5hYmxlZCIsImNvbXByZXNvcl9hY3Rpdm8iLCJjYXJnYXJMaXN0YVByZXNldHMiLCJwcmVzZXRTZWxlY3QiLCJvcHRpb25zIiwicmVzdWx0IiwicHJlc2V0cyIsIm5vbWJyZVByZXNldCIsIm9wdGlvbiIsImNsZWFyU3RvcmFnZSIsIl9jbGVhclN0b3JhZ2UiLCJjbGVhciIsInNtb290aFBvaW50cyIsInBvaW50cyIsIndpbmRvd1NpemUiLCJjYW52YXNXaWR0aCIsInNtb290aGVkIiwiYWRhcHRpdmVXaW5kb3ciLCJtYXgiLCJmbG9vciIsIngiLCJoYWxmV2luZG93Iiwic3RhcnRJZHgiLCJlbmRJZHgiLCJtaW4iLCJzdW1ZIiwiaiIsImF2Z1kiLCJkYiIsImRyYXdWaXN1YWxpemVyIiwicHJlRGF0YSIsIm1pZERhdGEiLCJwb3N0RGF0YSIsIm1pbkRlY2liZWxzIiwibWF4RGVjaWJlbHMiLCJjYW52YXMiLCJjdHgiLCJIVE1MQ2FudmFzRWxlbWVudCIsImdldENvbnRleHQiLCJidWZmZXJMZW5ndGgiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwibm9ybWFsaXplRGIiLCJjbGFtcGVkRGIiLCJmb250IiwiZnJlcUxhYmVscyIsImluZGV4Iiwib2N0YXZlIiwidG90YWxPY3RhdmVzIiwib2Zmc2V0RmFjdG9yIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJmaWxsVGV4dCIsImRiTGFiZWxzIiwicHJlUG9pbnRzIiwibWlkUG9pbnRzIiwicG9zdFBvaW50cyIsImZyZXFSYXRpbyIsIm55cXVpc3RGcmVxIiwibGluZWFyRnJlcSIsInNtb290aGVkUHJlUG9pbnRzIiwic21vb3RoZWRNaWRQb2ludHMiLCJzbW9vdGhlZFBvc3RQb2ludHMiLCJzaGFkb3dCbHVyIiwic2hhZG93T2Zmc2V0WCIsInNoYWRvd09mZnNldFkiLCJzaGFkb3dDb2xvciIsInBvaW50IiwiY2xvc2VQYXRoIiwiZmlsbCIsImxlZ2VuZFkiLCJsZWdlbmRTcGFjaW5nIiwicVNjYWxlIiwiY2VudGVyWCIsInBvaW50WCIsImxvZzEwIiwicmVzcG9uc2UiLCJzcXJ0IiwicG9pbnRZIiwib2Zmc2NyZWVuUG9ydCIsImxvb3BzIiwiZGVidWdfY291bnRlciIsInNlbmRNZXNzYWdlUHJvbWlzZSIsIm1lc3NhZ2UiLCJyZWplY3QiLCJsYXN0RXJyb3IiLCJlcnIiLCJib3RvbkNhcHR1cmEiLCJkZWJ1Z0xhYmVsIiwiZGVidWdCdXR0b24iLCJfaGFuZGxlRmlyc3RPcGVuIiwiaW5pY2lhbGl6YXJQcmVzZXRzIiwiaGFuZGxlRmlyc3RPcGVuIiwib25NZXNzYWdlIiwicmVtb3ZlTGlzdGVuZXIiLCJpc0ZpcnN0T3BlbiIsImFkZExpc3RlbmVyIiwic3RhY2siLCJvcGVuT2Zmc2NyZWVuUG9ydCIsIl9yZWYyIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiX3gyIiwiX3gzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1IiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1MiIsInRhYiIsInN0cmVhbUlkIiwiZXFWYWxvcmVzIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIl9zbGljZWRUb0FycmF5IiwidXJsIiwic3RhcnRzV2l0aCIsImFsZXJ0IiwidGFiQ2FwdHVyZSIsImdldE1lZGlhU3RyZWFtSWQiLCJ0YXJnZXRUYWJJZCIsIl9vYmplY3RTcHJlYWQiLCJwb3N0TWVzc2FnZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiX3JlZjUiLCJ2b2x1bWVuVmFsdWUiLCJfeDQiLCJfZG9jdW1lbnQkZ2V0RWxlbWVudEIiLCJfcmVmNiIsImJhbmRhIiwiX3g1Iiwid2luZG93IiwiX2NhbGxlZTciLCJfeWllbGQkY2hyb21lJHRhYnMkcXUzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1NCIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIm1zZyIsInVwZGF0ZVZpc3VhbGl6ZXIiLCJfdXBkYXRlVmlzdWFsaXplciIsIl9jYWxsZWU5IiwibG9vcCIsIl9sb29wIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX2xvb3AzIiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJhc3NlcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfbG9vcDIiLCJfb3Blbk9mZnNjcmVlblBvcnQiLCJfY2FsbGVlMTAiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsImNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJndWFyZGFyUHJlc2V0QnRuIiwiY2FyZ2FyUHJlc2V0QnRuIiwiZWxpbWluYXJQcmVzZXRCdG4iLCJwcmVzZXROYW1lSW5wdXQiLCJ0cmltIiwiY29uZmlndXJhY2lvbiIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9