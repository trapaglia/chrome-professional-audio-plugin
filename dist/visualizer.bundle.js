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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/visualizer.ts ***!
  \***************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tbXVuaWNhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvY29tcHJlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvc3RhdGVfbWVtb3J5LnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvdmlzdWFsaXplci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYlRvR2FpbiB9IGZyb20gXCIuL3V0aWxzLnRzXCI7XG5pbXBvcnQgeyBDb25maWd1cmFjaW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlLnRzXCI7XG5pbXBvcnQgeyBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgY29tcHJlc29yQWN0aXZvLCBjb21wcmVzb3JQYXJhbXMgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcblxuLy8gRnVuY2nDs24gcGFyYSBlbnZpYXIgbGEgY29uZmlndXJhY2nDs24gYWwgb2Zmc2NyZWVuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW52aWFyQ29uZmlndXJhY2lvbkFsT2Zmc2NyZWVuKGNvbmZpZzogQ29uZmlndXJhY2lvbkludGVyZmFjZSkge1xuICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEFjdGl2ZVRhYklkKCk7XG4gIFxuICAvLyBFbnZpYXIgY29uZmlndXJhY2nDs24gZGVsIHZvbHVtZW5cbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIHR5cGU6IFwiYWp1c3Rhci12b2x1bWVuXCIsXG4gICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxuICAgIHRhYklkLFxuICAgIGxldmVsOiBkYlRvR2Fpbihjb25maWcudm9sdW1lbilcbiAgfSk7XG4gIFxuICAvLyBFbnZpYXIgY29uZmlndXJhY2nDs24gZGVsIGNvbXByZXNvclxuICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgZW52aWFyIGxhIGNvbmZpZ3VyYWNpw7NuIGRlbCBjb21wcmVzb3IgYWwgc2NyaXB0IG9mZnNjcmVlblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKSB7XG4gIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgZ2V0QWN0aXZlVGFiSWQoKTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImFqdXN0YXItY29tcHJlc29yXCIsXG4gICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXG4gICAgICB0YWJJZCxcbiAgICAgIGFjdGl2bzogY29tcHJlc29yQWN0aXZvLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHRocmVzaG9sZDogY29tcHJlc29yUGFyYW1zLnRocmVzaG9sZCxcbiAgICAgICAgcmF0aW86IGNvbXByZXNvclBhcmFtcy5yYXRpbyxcbiAgICAgICAga25lZTogY29tcHJlc29yUGFyYW1zLmtuZWUsXG4gICAgICAgIGF0dGFjazogY29tcHJlc29yUGFyYW1zLmF0dGFjayxcbiAgICAgICAgcmVsZWFzZTogY29tcHJlc29yUGFyYW1zLnJlbGVhc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IHNldENvbXByZXNvckFjdGl2bywgZ2V0Q29tcHJlc29yQWN0aXZvLCBzZXRDb21wcmVzb3JQYXJhbSwgZ2V0Q29tcHJlc29yUGFyYW0sIGNvbXByZXNvckFjdGl2bywgY29tcHJlc29yUGFyYW1zIH0gZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgeyBndWFyZGFyRXN0YWRvLCBsb2NhbEVzdGFkbyB9IGZyb20gXCIuL3N0YXRlX21lbW9yeS50c1wiO1xuaW1wb3J0IHsgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvciB9IGZyb20gXCIuL2NvbW11bmljYXRpb25zLnRzXCI7XG5cblxuZXhwb3J0IHR5cGUgQ29tcHJlc29yID0ge1xuICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAga25lZTogbnVtYmVyO1xuICAgIGF0dGFjazogbnVtYmVyO1xuICAgIHJlbGVhc2U6IG51bWJlcjtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBpbmljaWFsaXphciBsb3MgY29udHJvbGVzIGRlbCBjb21wcmVzb3JcbmV4cG9ydCBmdW5jdGlvbiBpbmljaWFsaXphckNvbXByZXNvcigpIHtcbiAgY29uc3QgY29tcHJlc29yQWN0aXZvQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHJlc29yLWFjdGl2bycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghY29tcHJlc29yQWN0aXZvQ2hlY2tib3gpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBjb21wcmVzb3IgYWN0aXZvXCIpO1xuICBjb25zdCB0aHJlc2hvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZXNob2xkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCF0aHJlc2hvbGQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdGhyZXNob2xkXCIpO1xuICBjb25zdCByYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICghcmF0aW8pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmF0aW9cIik7XG4gIGNvbnN0IGtuZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGlmICgha25lZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSBrbmVlXCIpO1xuICBjb25zdCBhdHRhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgaWYgKCFhdHRhY2spIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgYXR0YWNrXCIpO1xuICBjb25zdCByZWxlYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbGVhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBpZiAoIXJlbGVhc2UpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgcmVsZWFzZVwiKTtcbiAgXG4gIC8vIEFjdHVhbGl6YXIgdmFsb3JlcyBtb3N0cmFkb3NcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhyZXNob2xkLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdyYXRpbycsIHBhcnNlRmxvYXQocmF0aW8udmFsdWUpKTtcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ2tuZWUnLCBwYXJzZUZsb2F0KGtuZWUudmFsdWUpKTtcbiAgc2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycsIHBhcnNlRmxvYXQoYXR0YWNrLnZhbHVlKSk7XG4gIHNldENvbXByZXNvclBhcmFtKCdyZWxlYXNlJywgcGFyc2VGbG9hdChyZWxlYXNlLnZhbHVlKSk7XG4gIFxuICAvLyBFdmVudCBsaXN0ZW5lcnMgcGFyYSBjYW1iaW9zIGVuIGxvcyBjb250cm9sZXNcbiAgY29tcHJlc29yQWN0aXZvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgc2V0Q29tcHJlc29yQWN0aXZvKHRoaXMuY2hlY2tlZCk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICB0aHJlc2hvbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCd0aHJlc2hvbGQnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIHJhdGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yKCdyYXRpbycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdyYXRpbycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xuICBcbiAga25lZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGFjdHVhbGl6YXJWYWxvckNvbXByZXNvcigna25lZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdrbmVlJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG4gICAgYXdhaXQgZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvcigpO1xuICAgIGd1YXJkYXJFc3RhZG8oKTtcbiAgfSk7XG4gIFxuICBhdHRhY2suYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ2F0dGFjaycsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIHNldENvbXByZXNvclBhcmFtKCdhdHRhY2snLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBhd2FpdCBlbnZpYXJDb25maWd1cmFjaW9uQ29tcHJlc29yKCk7XG4gICAgZ3VhcmRhckVzdGFkbygpO1xuICB9KTtcbiAgXG4gIHJlbGVhc2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IoJ3JlbGVhc2UnLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcbiAgICBzZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuICAgIGF3YWl0IGVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IoKTtcbiAgICBndWFyZGFyRXN0YWRvKCk7XG4gIH0pO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGFjdHVhbGl6YXIgbG9zIHZhbG9yZXMgbW9zdHJhZG9zIGRlbCBjb21wcmVzb3JcbmV4cG9ydCBmdW5jdGlvbiBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IodGlwbzoga2V5b2YgQ29tcHJlc29yLCB2YWxvcjogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbG9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RpcG99LXZhbHVlYCkgYXMgSFRNTEVsZW1lbnQ7XG4gIFxuICBzd2l0Y2godGlwbykge1xuICAgIGNhc2UgJ3RocmVzaG9sZCc6XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt2YWxvcn0gZEJgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmF0aW8nOlxuICAgICAgdmFsb3JFbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsb3J9OjFgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAna25lZSc6XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt2YWxvcn0gZEJgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIC8vIENvbnZlcnRpciBhIG1pbGlzZWd1bmRvcyBwYXJhIG1lam9yIGxlZ2liaWxpZGFkXG4gICAgICBjb25zdCBhdHRhY2tNcyA9ICh2YWxvciAqIDEwMDApLnRvRml4ZWQoMCk7XG4gICAgICB2YWxvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHthdHRhY2tNc30gbXNgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVsZWFzZSc6XG4gICAgICAvLyBDb252ZXJ0aXIgYSBtaWxpc2VndW5kb3MgcGFyYSBtZWpvciBsZWdpYmlsaWRhZFxuICAgICAgY29uc3QgcmVsZWFzZU1zID0gKHZhbG9yICogMTAwMCkudG9GaXhlZCgwKTtcbiAgICAgIHZhbG9yRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3JlbGVhc2VNc30gbXNgO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXByZXNvciwgYWN0dWFsaXphclZhbG9yQ29tcHJlc29yIH0gZnJvbSBcIi4vY29tcHJlc3Nvci50c1wiO1xuZXhwb3J0IGxldCBhY3RpdmVGcmVxdWVuY3lNYXJrZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuZXhwb3J0IGxldCBhY3RpdmVRTWFya2VyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbmV4cG9ydCBsZXQgY29tcHJlc29yQWN0aXZvOiBib29sZWFuID0gZmFsc2U7XG5leHBvcnQgbGV0IHN0YXRpY0ZpbHRlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGZpbHRlcnMgPSBbXCJzdWJcIiwgXCJiYXNzXCIsIFwibG93TWlkXCIsIFwibWlkXCIsIFwiaGlnaE1pZFwiLCBcImhpZ2hcIiwgXCJhaXJcIl07XG5leHBvcnQgbGV0IGNvbXByZXNvclBhcmFtczogQ29tcHJlc29yID0ge1xuICB0aHJlc2hvbGQ6IC0yNCxcbiAgcmF0aW86IDQsXG4gIGtuZWU6IDMwLFxuICBhdHRhY2s6IDAuMDAzLFxuICByZWxlYXNlOiAwLjI1XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKGZyZXF1ZW5jeTogbnVtYmVyIHwgbnVsbCkgeyBhY3RpdmVGcmVxdWVuY3lNYXJrZXIgPSBmcmVxdWVuY3k7IH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIoKSB7IHJldHVybiBhY3RpdmVGcmVxdWVuY3lNYXJrZXI7IH1cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVRTWFya2VyKHE6IG51bWJlciB8IG51bGwpIHsgYWN0aXZlUU1hcmtlciA9IHE7IH1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVRTWFya2VyKCkgeyByZXR1cm4gYWN0aXZlUU1hcmtlcjsgfSAgICBcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wcmVzb3JBY3Rpdm8oYWN0aXZvOiBib29sZWFuKSB7IGNvbXByZXNvckFjdGl2byA9IGFjdGl2bzsgfVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXByZXNvckFjdGl2bygpIHsgcmV0dXJuIGNvbXByZXNvckFjdGl2bzsgfVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXByZXNvclBhcmFtKHBhcmFtOiBrZXlvZiBDb21wcmVzb3IsIHZhbHVlOiBudW1iZXIpIHsgXG4gICAgY29tcHJlc29yUGFyYW1zW3BhcmFtXSA9IHZhbHVlOyBcbiAgICBhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IocGFyYW0sIHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wcmVzb3JQYXJhbShwYXJhbToga2V5b2YgQ29tcHJlc29yKSB7IHJldHVybiBjb21wcmVzb3JQYXJhbXNbcGFyYW1dOyB9XG4iLCJpbXBvcnQgeyBnZXRDb21wcmVzb3JBY3Rpdm8sIGdldENvbXByZXNvclBhcmFtLCBzZXRDb21wcmVzb3JBY3Rpdm8sIHNldENvbXByZXNvclBhcmFtLCBzdGF0aWNGaWx0ZXJpbmcsIFxuICAgIGZpbHRlcnNcbiB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuaW50ZXJmYWNlIEVzdGFkb01vZHMge1xuICAgIGNhcHR1cmluZ0F1ZGlvOiBib29sZWFuO1xuICAgIGRhcmtNb2RlOiBib29sZWFuO1xuICAgIGNvbXByZXNvcjoge1xuICAgICAgICBhY3Rpdm86IGJvb2xlYW47XG4gICAgICAgIHRocmVzaG9sZDogbnVtYmVyO1xuICAgICAgICByYXRpbzogbnVtYmVyO1xuICAgICAgICBrbmVlOiBudW1iZXI7XG4gICAgICAgIGF0dGFjazogbnVtYmVyO1xuICAgICAgICByZWxlYXNlOiBudW1iZXI7XG4gICAgfTtcbiAgICBnYWluQXVkaW86IG51bWJlcjtcbn07XG50eXBlIGVsZW1lbnRvR3VhcmRhZG8gPSBrZXlvZiBFc3RhZG9Nb2RzOyAvLyBcImNhcHR1cmluZ0F1ZGlvXCIgfCBcImRhcmtNb2RlXCIgfCBcImNvbXByZXNvclwiIHwgXCJnYWluQXVkaW9cIlxuZXhwb3J0IGxldCBsb2NhbEVzdGFkbzogRXN0YWRvTW9kcyA9IHt9IGFzIEVzdGFkb01vZHM7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVWYWx1ZTxUIGV4dGVuZHMgZWxlbWVudG9HdWFyZGFkbz4odmFsdWVOYW1lOiBULCB2YWx1ZTogYW55KSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZXN0YWRvXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGVzdGFkbzogRXN0YWRvTW9kcyA9IGRhdGEuZXN0YWRvIHx8IHt9IGFzIEVzdGFkb01vZHM7XG4gICAgICAgIGVzdGFkb1t2YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGVzdGFkbyB9KTtcbiAgICB9KTtcbiAgICBsb2NhbEVzdGFkb1t2YWx1ZU5hbWVdID0gdmFsdWU7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY2FyZ2FyIGVsIGVzdGFkbyBndWFyZGFkb1xuZXhwb3J0IGZ1bmN0aW9uIGNhcmdhckVzdGFkbygpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZXN0YWRvXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5lc3RhZG8pIHtcbiAgICAgIGNvbnN0IGVzdGFkbyA9IGRhdGEuZXN0YWRvIGFzIEVzdGFkb01vZHM7XG4gICAgICBsb2NhbEVzdGFkbyA9IGVzdGFkbztcblxuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gRXN0YWRvIGNhcmdhZG86XCIsIGVzdGFkbyk7XG5cbiAgICAgIGlmIChsb2NhbEVzdGFkby5jYXB0dXJpbmdBdWRpbykge1xuICAgICAgICBjb25zdCBib3RvbkFjdGl2YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2YXJcIik7XG4gICAgICAgIGlmICghYm90b25BY3RpdmFyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgYm90w7NuIGRlIGFjdGl2YXJcIik7XG4gICAgICAgIGJvdG9uQWN0aXZhci50ZXh0Q29udGVudCA9IFwiRGV0ZW5lciBBdWRpbyDwn5SHXCI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENhcmdhciB2b2x1bWVuXG4gICAgICBpZiAoZXN0YWRvLmdhaW5BdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHZvbHVtZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW5cIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgaWYgKCF2b2x1bWVuKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHZvbHVtZW5cIik7XG4gICAgICAgIHZvbHVtZW4udmFsdWUgPSBlc3RhZG8uZ2FpbkF1ZGlvLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHZvbHVtZW5fdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZW4tdmFsdWVcIik7XG4gICAgICAgIGlmICghdm9sdW1lbl92YWx1ZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHZhbG9yIGRlIHZvbHVtZW5cIik7XG4gICAgICAgIHZvbHVtZW5fdmFsdWUudGV4dENvbnRlbnQgPSBgJHtlc3RhZG8uZ2FpbkF1ZGlvfSBkQmA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENhcmdhciBtb2RvIG9zY3Vyb1xuICAgICAgaWYgKGVzdGFkby5kYXJrTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChlc3RhZG8uZGFya01vZGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICAgIGNvbnN0IGRhcmtfbW9kZV9lbmFibGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFkYXJrX21vZGVfZW5hYmxlZCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIGNoZWNrYm94IGRlIG1vZG8gb3NjdXJvXCIpO1xuICAgICAgICAgIGRhcmtfbW9kZV9lbmFibGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgY29uc3QgZGFya19tb2RlX2VuYWJsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICBpZiAoIWRhcmtfbW9kZV9lbmFibGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgY2hlY2tib3ggZGUgbW9kbyBvc2N1cm9cIik7XG4gICAgICAgICAgZGFya19tb2RlX2VuYWJsZWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENhcmdhciBjb25maWd1cmFjacOzbiBkZWwgY29tcHJlc29yXG4gICAgICBpZiAoZXN0YWRvLmNvbXByZXNvcikge1xuICAgICAgICBjb25zdCBjb21wcmVzb3JfYWN0aXZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXByZXNvci1hY3Rpdm8nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoIWNvbXByZXNvcl9hY3Rpdm8pIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBjaGVja2JveCBkZSBjb21wcmVzb3IgYWN0aXZvXCIpO1xuICAgICAgICBjb21wcmVzb3JfYWN0aXZvLmNoZWNrZWQgPSBlc3RhZG8uY29tcHJlc29yLmFjdGl2bztcbiAgICAgICAgc2V0Q29tcHJlc29yQWN0aXZvKGVzdGFkby5jb21wcmVzb3IuYWN0aXZvKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVzaG9sZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCF0aHJlc2hvbGQpIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgdGhyZXNob2xkXCIpO1xuICAgICAgICAgIHRocmVzaG9sZC52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IudGhyZXNob2xkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ3RocmVzaG9sZCcsIHBhcnNlRmxvYXQodGhyZXNob2xkLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLnJhdGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCByYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFyYXRpbykgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2UgZW5jb250csOzIGVsIHNsaWRlciBkZSByYXRpb1wiKTtcbiAgICAgICAgICByYXRpby52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IucmF0aW8udG9TdHJpbmcoKTtcbiAgICAgICAgICBzZXRDb21wcmVzb3JQYXJhbSgncmF0aW8nLCBwYXJzZUZsb2F0KHJhdGlvLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLmtuZWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGtuZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna25lZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFrbmVlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIGtuZWVcIik7XG4gICAgICAgICAga25lZS52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3Iua25lZS50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdrbmVlJywgcGFyc2VGbG9hdChrbmVlLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLmF0dGFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjaycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFhdHRhY2spIHRocm93IG5ldyBFcnJvcihcIk5vIHNlIGVuY29udHLDsyBlbCBzbGlkZXIgZGUgYXR0YWNrXCIpO1xuICAgICAgICAgIGF0dGFjay52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IuYXR0YWNrLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2V0Q29tcHJlc29yUGFyYW0oJ2F0dGFjaycsIHBhcnNlRmxvYXQoYXR0YWNrLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChlc3RhZG8uY29tcHJlc29yLnJlbGVhc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IHJlbGVhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsZWFzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKCFyZWxlYXNlKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHJlbGVhc2VcIik7XG4gICAgICAgICAgcmVsZWFzZS52YWx1ZSA9IGVzdGFkby5jb21wcmVzb3IucmVsZWFzZS50b1N0cmluZygpO1xuICAgICAgICAgIHNldENvbXByZXNvclBhcmFtKCdyZWxlYXNlJywgcGFyc2VGbG9hdChyZWxlYXNlLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vLyBHdWFyZGFyIHkgcmVzdGF1cmFyIGVzdGFkbyBkZSBsb3MgOCBzbGlkZXJzICsgZXN0YWRvIGRlIGF1ZGlvXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmRhckVzdGFkbygpIHtcbiAgY29uc3Qgdm9sdW1lbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lblwiKSBhcyBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcbiAgaWYgKCF2b2x1bWVuKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2xpZGVyIGRlIHZvbHVtZW5cIik7XG4gIGNvbnN0IGVzdGFkbzogRXN0YWRvTW9kcyA9IHsgXG4gICAgY2FwdHVyaW5nQXVkaW86IGxvY2FsRXN0YWRvLmNhcHR1cmluZ0F1ZGlvLFxuICAgIGRhcmtNb2RlOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJyksXG4gICAgY29tcHJlc29yOiB7XG4gICAgICBhY3Rpdm86IGdldENvbXByZXNvckFjdGl2bygpLFxuICAgICAgdGhyZXNob2xkOiBnZXRDb21wcmVzb3JQYXJhbSgndGhyZXNob2xkJyksXG4gICAgICByYXRpbzogZ2V0Q29tcHJlc29yUGFyYW0oJ3JhdGlvJyksXG4gICAgICBrbmVlOiBnZXRDb21wcmVzb3JQYXJhbSgna25lZScpLFxuICAgICAgYXR0YWNrOiBnZXRDb21wcmVzb3JQYXJhbSgnYXR0YWNrJyksXG4gICAgICByZWxlYXNlOiBnZXRDb21wcmVzb3JQYXJhbSgncmVsZWFzZScpXG4gICAgfSxcbiAgICBnYWluQXVkaW86IHBhcnNlRmxvYXQodm9sdW1lbi52YWx1ZSlcbiAgfTtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJlc3RhZG9cIjogZXN0YWRvIH0pO1xuICBjb25zb2xlLmxvZyhcIltJTkZPXSBFc3RhZG8gZ3VhcmRhZG86XCIsIGVzdGFkbyk7XG59XG5cbi8vIEZ1bmNpw7NuIHBhcmEgY2FyZ2FyIGxhIGxpc3RhIGRlIHByZXNldHMgZW4gZWwgc2VsZWN0b3JcbmV4cG9ydCBmdW5jdGlvbiBjYXJnYXJMaXN0YVByZXNldHMoKSB7XG4gIGNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZXQtc2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGlmICghcHJlc2V0U2VsZWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZSBlbmNvbnRyw7MgZWwgc2VsZWN0b3IgZGUgcHJlc2V0c1wiKTtcbiAgXG4gIC8vIExpbXBpYXIgb3BjaW9uZXMgYWN0dWFsZXNcbiAgd2hpbGUgKHByZXNldFNlbGVjdC5vcHRpb25zLmxlbmd0aCA+IDEpIHtcbiAgICBwcmVzZXRTZWxlY3QucmVtb3ZlKDEpO1xuICB9XG4gIFxuICAvLyBDYXJnYXIgcHJlc2V0cyBkZXNkZSBzdG9yYWdlXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3ByZXNldHMnXSwgKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHByZXNldHMgPSByZXN1bHQucHJlc2V0cyB8fCB7fTtcbiAgICBcbiAgICAvLyBBZ3JlZ2FyIGNhZGEgcHJlc2V0IGNvbW8gdW5hIG9wY2nDs25cbiAgICBPYmplY3Qua2V5cyhwcmVzZXRzKS5mb3JFYWNoKG5vbWJyZVByZXNldCA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG5vbWJyZVByZXNldDtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG5vbWJyZVByZXNldDtcbiAgICAgIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJbSU5GT10gUHJpbWVyYSBhcGVydHVyYSBkZWwgcG9wdXAgZGVzZGUgbGEgaW5pY2lhbGl6YWNpw7NuIC0gTGltcGlhbmRvIHN0b3JhZ2VcIik7XG4gIC8vIExpbXBpYXIgdG9kYXMgbGFzIHZhcmlhYmxlcyBndWFyZGFkYXNcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIoKTtcbiAgLy8gR3VhcmRhciBxdWUgZWwgYXVkaW8gZXN0w6EgZGVzYWN0aXZhZG9cbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY2FwdHVyaW5nQXVkaW86IGZhbHNlIH0pO1xuICBsb2NhbEVzdGFkbyA9IHt9IGFzIEVzdGFkb01vZHM7XG59IiwidHlwZSBQb2ludCA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhQb2ludHMocG9pbnRzOiBQb2ludFtdLCB3aW5kb3dTaXplOiBudW1iZXIsIGNhbnZhc1dpZHRoOiBudW1iZXIpOiBQb2ludFtdIHtcbiAgaWYgKHBvaW50cy5sZW5ndGggPD0gd2luZG93U2l6ZSkgcmV0dXJuIHBvaW50cztcblxuICBjb25zdCBzbW9vdGhlZDogUG9pbnRbXSA9IFtdO1xuXG4gIHNtb290aGVkLnB1c2gocG9pbnRzWzBdKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAvLyBjb25zdCBhZGFwdGl2ZVdpbmRvdyA9IE1hdGgubWluKFxuICAgIGNvbnN0IGFkYXB0aXZlV2luZG93ID0gTWF0aC5tYXgoXG4gICAgICAyLFxuICAgICAgTWF0aC5mbG9vcih3aW5kb3dTaXplICogTWF0aC5wb3coKHBvaW50c1tpXS54IC8gY2FudmFzV2lkdGgpLCAyKSAqIDMpXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbGZXaW5kb3cgPSBNYXRoLmZsb29yKGFkYXB0aXZlV2luZG93IC8gMik7XG4gICAgY29uc3Qgc3RhcnRJZHggPSBNYXRoLm1heCgwLCBpIC0gaGFsZldpbmRvdyk7XG4gICAgY29uc3QgZW5kSWR4ID0gTWF0aC5taW4ocG9pbnRzLmxlbmd0aCAtIDEsIGkgKyBoYWxmV2luZG93KTtcblxuICAgIGxldCBzdW1ZID0gMDtcbiAgICBmb3IgKGxldCBqID0gc3RhcnRJZHg7IGogPD0gZW5kSWR4OyBqKyspIHtcbiAgICAgIHN1bVkgKz0gcG9pbnRzW2pdLnk7XG4gICAgfVxuXG4gICAgY29uc3QgYXZnWSA9IHN1bVkgLyAoZW5kSWR4IC0gc3RhcnRJZHggKyAxKTtcbiAgICBzbW9vdGhlZC5wdXNoKHsgeDogcG9pbnRzW2ldLngsIHk6IGF2Z1kgfSk7XG4gIH1cblxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBzbW9vdGhlZC5wdXNoKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIHNtb290aGVkO1xufVxuXG4vLyBGdW5jacOzbiBwYXJhIGNvbnZlcnRpciBkQiBhIHZhbG9yIGRlIGdhbmFuY2lhIHBhcmEgV2ViIEF1ZGlvIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGRiVG9HYWluKGRiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3coMTAsIGRiIC8gMjApO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc21vb3RoUG9pbnRzIH0gZnJvbSBcIi4vdXRpbHMudHNcIjtcbmltcG9ydCB7IGdldEFjdGl2ZUZyZXF1ZW5jeU1hcmtlciwgZ2V0QWN0aXZlUU1hcmtlciB9IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuXG50eXBlIFZpc3VhbGl6ZXJEYXRhID0ge1xuICAgIHByZTogbnVtYmVyW107XG4gICAgbWlkOiBudW1iZXJbXTtcbiAgICBwb3N0OiBudW1iZXJbXTtcbiAgICBtaW5EZWNpYmVsczogbnVtYmVyO1xuICAgIG1heERlY2liZWxzOiBudW1iZXI7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBkcmF3VmlzdWFsaXplcihkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bWJlcltdIHwgbnVtYmVyIH0pIHtcbmV4cG9ydCBmdW5jdGlvbiBkcmF3VmlzdWFsaXplcihkYXRhOiBWaXN1YWxpemVyRGF0YSkge1xuICBjb25zdCBwcmVEYXRhOiBudW1iZXJbXSA9IGRhdGFbXCJwcmVcIl0gfHwgW107XG4gIGNvbnN0IG1pZERhdGE6IG51bWJlcltdID0gZGF0YVtcIm1pZFwiXSB8fCBbXTtcbiAgY29uc3QgcG9zdERhdGE6IG51bWJlcltdID0gZGF0YVtcInBvc3RcIl0gfHwgW107XG4gIGNvbnN0IG1pbkRlY2liZWxzOiBudW1iZXIgPSBkYXRhW1wibWluRGVjaWJlbHNcIl0gfHwgLTEwMDtcbiAgY29uc3QgbWF4RGVjaWJlbHM6IG51bWJlciA9IGRhdGFbXCJtYXhEZWNpYmVsc1wiXSB8fCAtMjU7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzdWFsXCIpO1xuICBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcbiAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwiQ3JpdGljYWw6IENhbnZhcyBjb250ZXh0IG5vdCBmb3VuZCBvciAndmlzdWFsJyBlbGVtZW50IGlzIG5vdCBhIGNhbnZhcy5cIik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JpdGljYWw6ICd2aXN1YWwnIGVsZW1lbnQgaXMgbm90IGEgY2FudmFzLlwiKTtcbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlckxlbmd0aCA9IHByZURhdGEubGVuZ3RoO1xuXG4gIC8vIERldGVjdGFyIHNpIGVsIG1vZG8gb3NjdXJvIGVzdMOhIGFjdGl2b1xuICBjb25zdCBpc0RhcmtNb2RlID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpO1xuICBcbiAgLy8gRm9uZG8gYWRhcHRhZG8gYWwgdGVtYSBhY3R1YWxcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiIzEyMTIxMlwiIDogXCIjZmVmZWZlXCI7IC8vIE9zY3VybyBvIGNsYXJvIHNlZ8O6biBlbCB0ZW1hXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vIEZ1bmNpw7NuIHBhcmEgbm9ybWFsaXphciB2YWxvcmVzIGRlIGRCIGEgYWx0dXJhIGRlIGJhcnJhICgwLTEpXG4gIGNvbnN0IG5vcm1hbGl6ZURiID0gKGRiVmFsdWU6IG51bWJlcikgPT4ge1xuICAgIC8vIExpbWl0YXIgZWwgdmFsb3IgZW50cmUgbWluRGVjaWJlbHMgeSBtYXhEZWNpYmVsc1xuICAgIGNvbnN0IGNsYW1wZWREYiA9IE1hdGgubWF4KG1pbkRlY2liZWxzLCBNYXRoLm1pbihtYXhEZWNpYmVscywgZGJWYWx1ZSkpO1xuICAgIC8vIE5vcm1hbGl6YXIgYSB1biB2YWxvciBlbnRyZSAwIHkgMVxuICAgIHJldHVybiAoY2xhbXBlZERiIC0gbWluRGVjaWJlbHMpIC8gKG1heERlY2liZWxzIC0gbWluRGVjaWJlbHMpO1xuICB9O1xuXG4gIC8vIERpYnVqYXIgZXNjYWxhIGRlIGZyZWN1ZW5jaWEgbG9nYXLDrXRtaWNhXG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjYWFhYWFhXCIgOiBcIiNhYWFcIjtcbiAgY3R4LmZvbnQgPSBcIjEwcHggQXJpYWxcIjtcbiAgY29uc3QgZnJlcUxhYmVscyA9IFszMCwgNjAsIDEyMCwgMjUwLCA1MDAsIDEwMDAsIDIwMDAsIDQwMDAsIDgwMDAsIDE3MDAwXTtcbiAgZnJlcUxhYmVscy5mb3JFYWNoKChmcmVxLCBpbmRleCkgPT4ge1xuICAgIC8vIENvbnZlcnRpciBmcmVjdWVuY2lhIGEgcG9zaWNpw7NuIFggdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5sb2cyKGZyZXEgLyAyMCk7IC8vIE7Dum1lcm8gZGUgb2N0YXZhcyBkZXNkZSAyMEh6XG4gICAgY29uc3QgdG90YWxPY3RhdmVzID0gTWF0aC5sb2cyKDE3MDAwIC8gMjApOyAvLyBBcHJveGltYWRhbWVudGUgOS43IG9jdGF2YXMgKGhhc3RhIDE3a0h6KVxuICAgIGxldCB4ID0gKG9jdGF2ZSAvIHRvdGFsT2N0YXZlcykgKiBjYW52YXMud2lkdGg7XG4gICAgXG4gICAgLy8gQXBsaWNhciBvZmZzZXQgYSB0b2RhcyBsYXMgbMOtbmVhcyBleGNlcHRvIGxhIMO6bHRpbWEgKDE3a0h6KVxuICAgIGlmIChpbmRleCA8IGZyZXFMYWJlbHMubGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3Qgb2Zmc2V0RmFjdG9yID0gMSAtIChpbmRleCAvIChmcmVxTGFiZWxzLmxlbmd0aCAtIDEpKTtcbiAgICAgIHggKz0gMTAgKiBvZmZzZXRGYWN0b3I7XG4gICAgfVxuICAgIFxuICAgIC8vIERpYnVqYXIgbMOtbmVhIHZlcnRpY2FsXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gaXNEYXJrTW9kZSA/IFwiIzMzMzMzM1wiIDogXCIjZGRkXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgY3R4LmxpbmVUbyh4LCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gRGlidWphciBldGlxdWV0YVxuICAgIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICBjdHguZmlsbFRleHQoZnJlcSA+PSAxMDAwID8gYCR7ZnJlcS8xMDAwfWtgIDogZnJlcS50b1N0cmluZygpLCB4IC0gMTAsIGNhbnZhcy5oZWlnaHQgLSA1KTtcbiAgfSk7XG5cbiAgLy8gRGlidWphciBlc2NhbGEgZGUgZEJcbiAgY29uc3QgZGJMYWJlbHMgPSBbLTkwLCAtODAsIC03MCwgLTYwLCAtNTAsIC00MCwgLTMwXTtcbiAgZGJMYWJlbHMuZm9yRWFjaChkYiA9PiB7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIoZGIpICogY2FudmFzLmhlaWdodCk7XG4gICAgXG4gICAgLy8gRGlidWphciBsw61uZWEgaG9yaXpvbnRhbFxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGlzRGFya01vZGUgPyBcIiMzMzMzMzNcIiA6IFwiI2VlZVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIHkpO1xuICAgIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCB5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gRGlidWphciBldGlxdWV0YVxuICAgIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7ZGJ9IGRCYCwgNSwgeSArIDEyKTtcbiAgfSk7XG5cbiAgLy8gQ2FsY3VsYXIgcG9zaWNpb25lcyBkZSBwdW50b3MgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbiAgY29uc3QgcHJlUG9pbnRzID0gW107XG4gIGNvbnN0IG1pZFBvaW50cyA9IFtdOyBcbiAgY29uc3QgcG9zdFBvaW50cyA9IFtdO1xuICBcbiAgLy8gQ3JlYXIgcG9zaWNpb25lcyBkZSBwdW50b3MgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXJMZW5ndGg7IGkrKykge1xuICAgIC8vIENhbGN1bGFtb3MgbGEgZnJlY3VlbmNpYSBjb3JyZXNwb25kaWVudGUgYSBjYWRhIGJpbiBkZSBsYSBGRlRcbiAgICAvLyBMYSBGRlQgZGl2aWRlIGVsIHJhbmdvIGRlIGZyZWN1ZW5jaWFzIGVuIHBhcnRlcyBpZ3VhbGVzIChsaW5lYWxlcylcbiAgICAvLyBQZXJvIHF1ZXJlbW9zIHZpc3VhbGl6YXJsYXMgZW4gZXNjYWxhIGRlIG9jdGF2YXNcbiAgICBjb25zdCBmcmVxUmF0aW8gPSBpIC8gYnVmZmVyTGVuZ3RoOyAvLyBQb3NpY2nDs24gcmVsYXRpdmEgZW4gZWwgYXJyYXkgKDAtMSlcbiAgICBjb25zdCBueXF1aXN0RnJlcSA9IDIyMDUwOyAvLyBGcmVjdWVuY2lhIG3DoXhpbWEgcmVwcmVzZW50YWJsZSAoc2FtcGxlUmF0ZS8yKVxuICAgIFxuICAgIC8vIEZyZWN1ZW5jaWEgbGluZWFsIGNvcnJlc3BvbmRpZW50ZSBhbCBiaW4gaSBkZSBsYSBGRlRcbiAgICBjb25zdCBsaW5lYXJGcmVxID0gZnJlcVJhdGlvICogbnlxdWlzdEZyZXE7XG4gICAgXG4gICAgLy8gU29sbyBwcm9jZXNhbW9zIGhhc3RhIDE3a0h6XG4gICAgaWYgKGxpbmVhckZyZXEgPiAxNzAwMCkgYnJlYWs7XG4gICAgXG4gICAgLy8gU29sbyBpbmNsdWltb3MgZnJlY3VlbmNpYXMgZGVzZGUgMjBIelxuICAgIGlmIChsaW5lYXJGcmVxIDwgMjApIGNvbnRpbnVlO1xuICAgIFxuICAgIC8vIENvbnZlcnRpciBmcmVjdWVuY2lhIGEgcG9zaWNpw7NuIFggdXNhbmRvIGVzY2FsYSBkZSBvY3RhdmFzXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5sb2cyKGxpbmVhckZyZXEgLyAyMCk7IC8vIE7Dum1lcm8gZGUgb2N0YXZhcyBkZXNkZSAyMEh6XG4gICAgY29uc3QgdG90YWxPY3RhdmVzID0gTWF0aC5sb2cyKDE3MDAwIC8gMjApOyAvLyBBcHJveGltYWRhbWVudGUgOS43IG9jdGF2YXMgKGhhc3RhIDE3a0h6KVxuICAgIGNvbnN0IHggPSAob2N0YXZlIC8gdG90YWxPY3RhdmVzKSAqIGNhbnZhcy53aWR0aCAqIDAuOTk1OyAvLyBVc2FyIGVsIHZhbG9yIGV4YWN0byBkZSBvY3RhdmFzXG4gICAgXG4gICAgLy8gQWxtYWNlbmFyIHB1bnRvcyBjb24gc3VzIHZhbG9yZXMgZGUgYW1wbGl0dWRcbiAgICBpZiAoaSA8IHByZURhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAtIChub3JtYWxpemVEYihwcmVEYXRhW2ldKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgcHJlUG9pbnRzLnB1c2goeyB4LCB5IH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBOdWV2bzogYWxtYWNlbmFyIHB1bnRvcyBwYXJhIGVsIHZpc3VhbGl6YWRvciBpbnRlcm1lZGlvXG4gICAgaWYgKGkgPCBtaWREYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgeSA9IGNhbnZhcy5oZWlnaHQgLSAobm9ybWFsaXplRGIobWlkRGF0YVtpXSkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIG1pZFBvaW50cy5wdXNoKHsgeCwgeSB9KTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGkgPCBwb3N0RGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC0gKG5vcm1hbGl6ZURiKHBvc3REYXRhW2ldKSAqIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgcG9zdFBvaW50cy5wdXNoKHsgeCwgeSB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIEFwbGljYXIgc3Vhdml6YWRvIGEgbG9zIHB1bnRvc1xuICBjb25zdCBzbW9vdGhlZFByZVBvaW50cyA9IHNtb290aFBvaW50cyhwcmVQb2ludHMsIDcsIGNhbnZhcy53aWR0aCk7XG4gIGNvbnN0IHNtb290aGVkTWlkUG9pbnRzID0gc21vb3RoUG9pbnRzKG1pZFBvaW50cywgNywgY2FudmFzLndpZHRoKTsgXG4gIGNvbnN0IHNtb290aGVkUG9zdFBvaW50cyA9IHNtb290aFBvaW50cyhwb3N0UG9pbnRzLCA3LCBjYW52YXMud2lkdGgpO1xuICBcbiAgLy8gRWZlY3RvIGdsb3dcbiAgY3R4LnNoYWRvd0JsdXIgPSAxMDtcbiAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG5cbiAgLy8gUHJlLUVROiB2aW9sZXRhIHZpdm8gY29uIGdsb3dcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJyZ2JhKDE5MCwgOTAsIDI1NSwgMC40KVwiO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjgpXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjMpXCI7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBcbiAgLy8gRGlidWphciBsw61uZWEgcGFyYSBwcmUtRVFcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKDAsIGNhbnZhcy5oZWlnaHQpOyBcbiAgXG4gIC8vIERpYnVqYXIgbGEgbMOtbmVhIHF1ZSB1bmUgbG9zIHB1bnRvc1xuICBzbW9vdGhlZFByZVBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9KTtcbiAgXG4gIC8vIENlcnJhciBlbCBwYXRoIGhhc3RhIGxhIGJhc2VcbiAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gIGN0eC5maWxsKCk7XG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBkZWwgY29udG9ybm9cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBpZiAoc21vb3RoZWRQcmVQb2ludHMubGVuZ3RoID4gMCkge1xuICAgIGN0eC5tb3ZlVG8oc21vb3RoZWRQcmVQb2ludHNbMF0ueCwgc21vb3RoZWRQcmVQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbW9vdGhlZFByZVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmxpbmVUbyhzbW9vdGhlZFByZVBvaW50c1tpXS54LCBzbW9vdGhlZFByZVBvaW50c1tpXS55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gTnVldm86IE1pZC1FUSAoZGVzcHXDqXMgZGUgZmlsdHJvcywgYW50ZXMgZGUgY29tcHJlc29yKTogYW1hcmlsbG8vbmFyYW5qYSBjb24gZ2xvd1xuICBjdHguc2hhZG93Q29sb3IgPSBcInJnYmEoMjU1LCAxODAsIDUwLCAwLjQpXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuOClcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDE4MCwgNTAsIDAuMylcIjtcbiAgXG4gIC8vIERpYnVqYXIgbMOtbmVhIHBhcmEgbWlkLUVRXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0KTsgXG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBxdWUgdW5lIGxvcyBwdW50b3NcbiAgc21vb3RoZWRNaWRQb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfSk7XG4gIFxuICAvLyBDZXJyYXIgZWwgcGF0aCBoYXN0YSBsYSBiYXNlXG4gIGN0eC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgLy8gUmVsbGVuYXIgZWwgw6FyZWEgYmFqbyBsYSBjdXJ2YVxuICBjdHguZmlsbCgpO1xuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgZGVsIGNvbnRvcm5vXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgaWYgKHNtb290aGVkTWlkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjdHgubW92ZVRvKHNtb290aGVkTWlkUG9pbnRzWzBdLngsIHNtb290aGVkTWlkUG9pbnRzWzBdLnkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc21vb3RoZWRNaWRQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5saW5lVG8oc21vb3RoZWRNaWRQb2ludHNbaV0ueCwgc21vb3RoZWRNaWRQb2ludHNbaV0ueSk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIFBvc3QtRVE6IHZlcmRlIG5lw7NuIGNsYXJvIGNvbiBnbG93XG4gIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSg1MCwgMjIwLCAxMjAsIDAuNClcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC44KVwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDUwLCAyMjAsIDEyMCwgMC4zKVwiO1xuICBcbiAgLy8gRGlidWphciBsw61uZWEgcGFyYSBwb3N0LUVRXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCBjYW52YXMuaGVpZ2h0KTsgLy8gRW1wZXphciBkZXNkZSBsYSBlc3F1aW5hIGluZmVyaW9yIGl6cXVpZXJkYVxuICBcbiAgLy8gRGlidWphciBsYSBsw61uZWEgcXVlIHVuZSBsb3MgcHVudG9zXG4gIHNtb290aGVkUG9zdFBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9KTtcbiAgXG4gIC8vIENlcnJhciBlbCBwYXRoIGhhc3RhIGxhIGJhc2VcbiAgY3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICAvLyBSZWxsZW5hciBlbCDDoXJlYSBiYWpvIGxhIGN1cnZhXG4gIGN0eC5maWxsKCk7XG4gIFxuICAvLyBEaWJ1amFyIGxhIGzDrW5lYSBkZWwgY29udG9ybm9cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBpZiAoc21vb3RoZWRQb3N0UG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjdHgubW92ZVRvKHNtb290aGVkUG9zdFBvaW50c1swXS54LCBzbW9vdGhlZFBvc3RQb2ludHNbMF0ueSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbW9vdGhlZFBvc3RQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5saW5lVG8oc21vb3RoZWRQb3N0UG9pbnRzW2ldLngsIHNtb290aGVkUG9zdFBvaW50c1tpXS55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gTGltcGlhciBlZmVjdG9zXG4gIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgY3R4LnNoYWRvd0NvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuXG4gIC8vIEFncmVnYXIgbGV5ZW5kYSBwYXJhIGxvcyBjb2xvcmVzXG4gIGNvbnN0IGxlZ2VuZFkgPSAyMDtcbiAgY29uc3QgbGVnZW5kU3BhY2luZyA9IDEyMDtcbiAgXG4gIC8vIExleWVuZGEgcGFyYSBQcmUtRVEgKHZpb2xldGEpXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTkwLCA5MCwgMjU1LCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdCgxMCwgbGVnZW5kWSAtIDEwLCAxMCwgMTApO1xuICBjdHguZmlsbFN0eWxlID0gaXNEYXJrTW9kZSA/IFwiI2UwZTBlMFwiIDogXCIjMzMzXCI7XG4gIGN0eC5maWxsVGV4dChcIlByZS1FUVwiLCAyNSwgbGVnZW5kWSk7XG4gIFxuICAvLyBMZXllbmRhIHBhcmEgTWlkLUVRIChhbWFyaWxsby9uYXJhbmphKVxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMTgwLCA1MCwgMC44KVwiO1xuICBjdHguZmlsbFJlY3QoMTAgKyBsZWdlbmRTcGFjaW5nLCBsZWdlbmRZIC0gMTAsIDEwLCAxMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUG9zdC1GaWx0cm9zXCIsIDI1ICsgbGVnZW5kU3BhY2luZywgbGVnZW5kWSk7XG4gIFxuICAvLyBMZXllbmRhIHBhcmEgUG9zdC1FUSAodmVyZGUpXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoNTAsIDIyMCwgMTIwLCAwLjgpXCI7XG4gIGN0eC5maWxsUmVjdCgxMCArIGxlZ2VuZFNwYWNpbmcgKiAyLCBsZWdlbmRZIC0gMTAsIDEwLCAxMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBpc0RhcmtNb2RlID8gXCIjZTBlMGUwXCIgOiBcIiMzMzNcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUG9zdC1Db21wcmVzb3JcIiwgMjUgKyBsZWdlbmRTcGFjaW5nICogMiwgbGVnZW5kWSk7XG5cbiAgLy8gRGlidWphciBlbCBtYXJjYWRvciBkZSBmcmVjdWVuY2lhIGFjdGl2YSBzaSBleGlzdGVcbiAgY29uc3QgYWN0aXZlRnJlcXVlbmN5TWFya2VyID0gZ2V0QWN0aXZlRnJlcXVlbmN5TWFya2VyKCk7XG4gIGNvbnN0IGFjdGl2ZVFNYXJrZXIgPSBnZXRBY3RpdmVRTWFya2VyKCk7XG4gIGlmIChhY3RpdmVGcmVxdWVuY3lNYXJrZXIpIHtcbiAgICAvLyBDb252ZXJ0aXIgZnJlY3VlbmNpYSBhIHBvc2ljacOzbiBYIHVzYW5kbyBlc2NhbGEgZGUgb2N0YXZhc1xuICAgIGNvbnN0IG9jdGF2ZSA9IE1hdGgubG9nMihhY3RpdmVGcmVxdWVuY3lNYXJrZXIgLyAyMCk7IC8vIE7Dum1lcm8gZGUgb2N0YXZhcyBkZXNkZSAyMEh6XG4gICAgY29uc3QgdG90YWxPY3RhdmVzID0gTWF0aC5sb2cyKDE3MDAwIC8gMjApOyAvLyBBcHJveGltYWRhbWVudGUgOS43IG9jdGF2YXMgKGhhc3RhIDE3a0h6KVxuICAgIGNvbnN0IHggPSAob2N0YXZlIC8gdG90YWxPY3RhdmVzKSAqIGNhbnZhcy53aWR0aCAqIDAuOTk1OyAvLyBVc2FyIGVsIHZhbG9yIGV4YWN0byBkZSBvY3RhdmFzXG4gICAgXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjZmYzMzY2XCI7IC8vIENvbG9yIGxsYW1hdGl2byBwYXJhIGVsIG1hcmNhZG9yXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgY3R4LmxpbmVUbyh4LCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgXG4gICAgLy8gRXRpcXVldGEgY29uIGVsIHZhbG9yIGRlIGZyZWN1ZW5jaWFcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmYzMzY2XCI7XG4gICAgY3R4LmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7YWN0aXZlRnJlcXVlbmN5TWFya2VyfSBIemAsIHggKyA1LCAxNSk7XG4gICAgXG4gICAgLy8gRGlidWphciBsYSBjYW1wYW5hIGRlIFEgc2kgdGVuZW1vcyB0YW50byBmcmVjdWVuY2lhIGNvbW8gUVxuICAgIGlmIChhY3RpdmVRTWFya2VyKSB7XG4gICAgICAvLyBEaWJ1amFyIGxhIGNhbXBhbmFcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsIDUxLCAxMDIsIDAuNylcIjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCA1MSwgMTAyLCAwLjIpXCI7XG4gICAgICBcbiAgICAgIC8vIENhbGN1bGFyIGxhIGVzY2FsYSBkZSBsYSBjYW1wYW5hIGJhc2FkYSBlbiBRXG4gICAgICAvLyBDdWFudG8gbWF5b3Igc2VhIFEsIG3DoXMgZXN0cmVjaGEgc2Vyw6EgbGEgY2FtcGFuYVxuICAgICAgY29uc3QgcVNjYWxlID0gTWF0aC5tYXgoMjAsIDIwMCAvIGFjdGl2ZVFNYXJrZXIpOyAvLyBMaW1pdGFyIGVsIG3DrW5pbW8gcGFyYSBRIG11eSBhbHRvc1xuICAgICAgXG4gICAgICAvLyBEaWJ1amFyIGxhIGN1cnZhIGRlIGNhbXBhbmFcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIFxuICAgICAgLy8gUHVudG9zIHBhcmEgbGEgY3VydmFcbiAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgICAgY29uc3QgY2VudGVyWCA9IHg7XG4gICAgICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogMC43OyAvLyBBbHR1cmEgbcOheGltYSBkZSBsYSBjYW1wYW5hXG4gICAgICBcbiAgICAgIC8vIEdlbmVyYXIgcHVudG9zIHBhcmEgbGEgY3VydmEgZGUgY2FtcGFuYSBlbiBlc2NhbGEgbG9nYXLDrXRtaWNhXG4gICAgICBmb3IgKGxldCBpID0gLWNhbnZhcy53aWR0aC8yOyBpIDw9IGNhbnZhcy53aWR0aC8yOyBpICs9IDUpIHtcbiAgICAgICAgY29uc3QgcG9pbnRYID0gY2VudGVyWCArIGk7XG4gICAgICAgIGlmIChwb2ludFggPj0gMCAmJiBwb2ludFggPD0gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgLy8gQ29udmVydGlyIHBvc2ljacOzbiBYIGEgZnJlY3VlbmNpYVxuICAgICAgICAgIGNvbnN0IGZyZXEgPSAyMCAqIE1hdGgucG93KDEwLCAocG9pbnRYIC8gY2FudmFzLndpZHRoKSAqIE1hdGgubG9nMTAoMTcwMDAgLyAyMCkpO1xuICAgICAgICAgIGNvbnN0IGZyZXFSYXRpbyA9IGZyZXEgLyBhY3RpdmVGcmVxdWVuY3lNYXJrZXI7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gRsOzcm11bGEgZGUgY2FtcGFuYSBwYXJhIGZpbHRybyBwZWFraW5nIGVuIGVzY2FsYSBsb2dhcsOtdG1pY2FcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IDEgLyBNYXRoLnNxcnQoMSArIE1hdGgucG93KGFjdGl2ZVFNYXJrZXIgKiAoZnJlcVJhdGlvIC0gMS9mcmVxUmF0aW8pLCAyKSk7XG4gICAgICAgICAgY29uc3QgcG9pbnRZID0gY2FudmFzLmhlaWdodCAtIGhlaWdodCAqIHJlc3BvbnNlO1xuICAgICAgICAgIFxuICAgICAgICAgIHBvaW50cy5wdXNoKHt4OiBwb2ludFgsIHk6IHBvaW50WX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIERpYnVqYXIgbGEgY3VydmFcbiAgICAgIGlmIChwb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjdHgubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVsbGVuYXIgZWwgw6FyZWEgYmFqbyBsYSBjdXJ2YVxuICAgICAgICBjdHgubGluZVRvKHBvaW50c1twb2ludHMubGVuZ3RoLTFdLngsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHgubGluZVRvKHBvaW50c1swXS54LCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBcbiAgICAgICAgLy8gTW9zdHJhciBlbCB2YWxvciBkZSBRXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZjMzNjZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBROiAke2FjdGl2ZVFNYXJrZXIudG9GaXhlZCgxKX1gLCB4ICsgNSwgMzApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZGJUb0dhaW4iLCJsb2NhbEVzdGFkbyIsImNvbXByZXNvckFjdGl2byIsImNvbXByZXNvclBhcmFtcyIsImVudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbiIsIl94IiwiX2VudmlhckNvbmZpZ3VyYWNpb25BbE9mZnNjcmVlbiIsIl9jYWxsZWUiLCJjb25maWciLCJ0YWJJZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRBY3RpdmVUYWJJZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInRhcmdldCIsImxldmVsIiwidm9sdW1lbiIsImVudmlhckNvbmZpZ3VyYWNpb25Db21wcmVzb3IiLCJfZW52aWFyQ29uZmlndXJhY2lvbkNvbXByZXNvciIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY2FwdHVyaW5nQXVkaW8iLCJhY3Rpdm8iLCJwYXJhbXMiLCJ0aHJlc2hvbGQiLCJyYXRpbyIsImtuZWUiLCJhdHRhY2siLCJyZWxlYXNlIiwic2V0Q29tcHJlc29yQWN0aXZvIiwic2V0Q29tcHJlc29yUGFyYW0iLCJndWFyZGFyRXN0YWRvIiwiaW5pY2lhbGl6YXJDb21wcmVzb3IiLCJjb21wcmVzb3JBY3Rpdm9DaGVja2JveCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJzZUZsb2F0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrZWQiLCJhY3R1YWxpemFyVmFsb3JDb21wcmVzb3IiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInRpcG8iLCJ2YWxvciIsInZhbG9yRWxlbWVudCIsImNvbmNhdCIsInRleHRDb250ZW50IiwiYXR0YWNrTXMiLCJ0b0ZpeGVkIiwicmVsZWFzZU1zIiwiYWN0aXZlRnJlcXVlbmN5TWFya2VyIiwiYWN0aXZlUU1hcmtlciIsInN0YXRpY0ZpbHRlcmluZyIsImZpbHRlcnMiLCJzZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIiLCJmcmVxdWVuY3kiLCJnZXRBY3RpdmVGcmVxdWVuY3lNYXJrZXIiLCJzZXRBY3RpdmVRTWFya2VyIiwicSIsImdldEFjdGl2ZVFNYXJrZXIiLCJnZXRDb21wcmVzb3JBY3Rpdm8iLCJwYXJhbSIsImdldENvbXByZXNvclBhcmFtIiwic2F2ZVZhbHVlIiwidmFsdWVOYW1lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiZGF0YSIsImVzdGFkbyIsInNldCIsImNhcmdhckVzdGFkbyIsImNvbnNvbGUiLCJsb2ciLCJib3RvbkFjdGl2YXIiLCJnYWluQXVkaW8iLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsInZvbHVtZW5fdmFsdWUiLCJkYXJrTW9kZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXJrX21vZGVfZW5hYmxlZCIsInJlbW92ZSIsImNvbXByZXNvciIsImNvbXByZXNvcl9hY3Rpdm8iLCJjb250YWlucyIsImNhcmdhckxpc3RhUHJlc2V0cyIsInByZXNldFNlbGVjdCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJwcmVzZXRzIiwibm9tYnJlUHJlc2V0Iiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xlYXJTdG9yYWdlIiwiX2NsZWFyU3RvcmFnZSIsImNsZWFyIiwic21vb3RoUG9pbnRzIiwicG9pbnRzIiwid2luZG93U2l6ZSIsImNhbnZhc1dpZHRoIiwic21vb3RoZWQiLCJhZGFwdGl2ZVdpbmRvdyIsIk1hdGgiLCJtYXgiLCJmbG9vciIsInBvdyIsIngiLCJoYWxmV2luZG93Iiwic3RhcnRJZHgiLCJlbmRJZHgiLCJtaW4iLCJzdW1ZIiwiaiIsImF2Z1kiLCJkYiIsImRyYXdWaXN1YWxpemVyIiwicHJlRGF0YSIsIm1pZERhdGEiLCJwb3N0RGF0YSIsIm1pbkRlY2liZWxzIiwibWF4RGVjaWJlbHMiLCJjYW52YXMiLCJjdHgiLCJIVE1MQ2FudmFzRWxlbWVudCIsImdldENvbnRleHQiLCJidWZmZXJMZW5ndGgiLCJpc0RhcmtNb2RlIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm5vcm1hbGl6ZURiIiwiZGJWYWx1ZSIsImNsYW1wZWREYiIsImZvbnQiLCJmcmVxTGFiZWxzIiwiZnJlcSIsImluZGV4Iiwib2N0YXZlIiwibG9nMiIsInRvdGFsT2N0YXZlcyIsIm9mZnNldEZhY3RvciIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFRleHQiLCJkYkxhYmVscyIsInByZVBvaW50cyIsIm1pZFBvaW50cyIsInBvc3RQb2ludHMiLCJmcmVxUmF0aW8iLCJueXF1aXN0RnJlcSIsImxpbmVhckZyZXEiLCJzbW9vdGhlZFByZVBvaW50cyIsInNtb290aGVkTWlkUG9pbnRzIiwic21vb3RoZWRQb3N0UG9pbnRzIiwic2hhZG93Qmx1ciIsInNoYWRvd09mZnNldFgiLCJzaGFkb3dPZmZzZXRZIiwic2hhZG93Q29sb3IiLCJwb2ludCIsImNsb3NlUGF0aCIsImZpbGwiLCJsZWdlbmRZIiwibGVnZW5kU3BhY2luZyIsInFTY2FsZSIsImNlbnRlclgiLCJwb2ludFgiLCJsb2cxMCIsInJlc3BvbnNlIiwic3FydCIsInBvaW50WSJdLCJzb3VyY2VSb290IjoiIn0=