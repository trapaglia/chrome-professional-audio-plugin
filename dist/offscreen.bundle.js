/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/offscreen.ts ***!
  \**************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var filtrosDinamicos = new Map();
var contexts = new Map();
var medias = new Map();
var sources = new Map();
var popupPort = null;
var loops = new Map();
var pre_viz = new Map();
var mid_viz = new Map(); // Nuevo analizador para visualizar antes del compresor
var post_viz = new Map();
var staticFilters = new Map();
var compressors = new Map(); // Nodos de compresor
var compressorStates = new Map(); // Estado de activación del compresor
// const bandas_filtros = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
var staticFiltering = false;
var offscreenInitialized = false;

// Define Chrome-specific media constraints interface

// 🎧 offscreen.js — gestión de filtros dinámicos de ecualización 🎛️

chrome.runtime.onMessage.addListener(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(msg) {
    var filtro, contextMaybe, context, source, _context, _compressor, compressor;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          filtro = null;
          _context2.t0 = msg.type;
          _context2.next = _context2.t0 === "actualizar-filtro-dinamico" ? 4 : _context2.t0 === "eliminar-filtro-dinamico" ? 26 : _context2.t0 === "ajustar-compresor" ? 32 : 47;
          break;
        case 4:
          if (contexts.has(msg.tabId)) {
            _context2.next = 8;
            break;
          }
          console.error("[offscreen] AudioContext no inicializado");
          alert("[offscreen] AudioContext no inicializado");
          return _context2.abrupt("return");
        case 8:
          contextMaybe = contexts.get(msg.tabId);
          if (contextMaybe) {
            _context2.next = 13;
            break;
          }
          console.error("[offscreen] AudioContext no inicializado");
          alert("[offscreen] AudioContext no inicializado");
          return _context2.abrupt("return");
        case 13:
          context = contextMaybe;
          if (sources.has(msg.tabId)) {
            _context2.next = 18;
            break;
          }
          console.error("[offscreen] MediaStreamSource no inicializado");
          alert("[offscreen] MediaStreamSource no inicializado");
          return _context2.abrupt("return");
        case 18:
          source = sources.get(msg.tabId);
          if (!filtrosDinamicos.has(msg.tabId)) {
            filtrosDinamicos.set(msg.tabId, new Map());
          }
          filtro = filtrosDinamicos.get(msg.tabId).get(msg.filtroId);
          if (!filtro) {
            filtro = {
              node: context.createBiquadFilter(),
              bypass: msg.bypass || false
            };
            filtro.node.type = "peaking";
            source.connect(filtro.node);
            filtro.node.connect(context.destination);
            filtrosDinamicos.get(msg.tabId).set(msg.filtroId, filtro);
            reconectarCadena(msg.tabId);
          } else {
            // Actualizar el estado de bypass
            filtro.bypass = msg.bypass;
          }
          filtro.node.frequency.value = msg.freq;
          filtro.node.Q.value = msg.q;
          filtro.node.gain.value = filtro.bypass ? 0 : msg.gain; // Si está en bypass, la ganancia es 0
          return _context2.abrupt("break", 48);
        case 26:
          if (filtrosDinamicos.has(msg.tabId)) {
            _context2.next = 29;
            break;
          }
          filtrosDinamicos.set(msg.tabId, new Map());
          return _context2.abrupt("return");
        case 29:
          filtro = filtrosDinamicos.get(msg.tabId).get(msg.filtroId);
          if (filtro) {
            filtro.node.disconnect();
            filtrosDinamicos.get(msg.tabId)["delete"](msg.filtroId);
            reconectarCadena(msg.tabId);
          }
          return _context2.abrupt("break", 48);
        case 32:
          if (contexts.has(msg.tabId)) {
            _context2.next = 35;
            break;
          }
          console.error("[offscreen] AudioContext no inicializado");
          return _context2.abrupt("return");
        case 35:
          if (compressors.has(msg.tabId)) {
            _context2.next = 42;
            break;
          }
          _context = contexts.get(msg.tabId);
          if (_context) {
            _context2.next = 40;
            break;
          }
          console.error("[offscreen] AudioContext no inicializado");
          return _context2.abrupt("return");
        case 40:
          _compressor = _context.createDynamicsCompressor();
          compressors.set(msg.tabId, _compressor);
        case 42:
          // Guardar el estado de activación
          compressorStates.set(msg.tabId, msg.activo);

          // Actualizar parámetros del compresor
          compressor = compressors.get(msg.tabId);
          if (msg.params) {
            if (msg.params.threshold !== undefined) compressor.threshold.value = msg.params.threshold;
            if (msg.params.ratio !== undefined) compressor.ratio.value = msg.params.ratio;
            if (msg.params.knee !== undefined) compressor.knee.value = msg.params.knee;
            if (msg.params.attack !== undefined) compressor.attack.value = msg.params.attack;
            if (msg.params.release !== undefined) compressor.release.value = msg.params.release;
          }

          // Reconectar la cadena de audio para aplicar los cambios
          reconectarCadena(msg.tabId);
          return _context2.abrupt("break", 48);
        case 47:
          return _context2.abrupt("break", 48);
        case 48:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "popup-visualizer") {
    popupPort = port;
    console.log("[OFFSCREEN] Conectado al popup 🥰");

    // port.postMessage({ type: "start-stream" });

    port.onDisconnect.addListener(function () {
      popupPort = null;
      console.log("[OFFSCREEN] Popup cerrado 😢");
    });
    port.onMessage.addListener(function (msg) {
      switch (msg.type) {
        case "start-stream":
          if (medias.has(msg.tabId)) {
            port.postMessage({
              type: "start-stream"
            });
          }
          break;
        case "give-me-viz":
          if (!pre_viz.has(msg.tabId) || !mid_viz.has(msg.tabId) || !post_viz.has(msg.tabId)) {
            console.log("[ERROR] pre_viz, mid_viz o post_viz no inicializados");
            console.log("[ERROR] tabId: " + msg.tabId);
            console.log("[ERROR] pre_viz: " + pre_viz);
            console.log("[ERROR] mid_viz: " + mid_viz);
            console.log("[ERROR] post_viz: " + post_viz);
            alert("[offscreen] No se puede capturar el audio en este momento. Intenta recargar la página");
            return;
          }
          // Usar Float32Array para obtener valores en dB
          var pre_bins = new Float32Array(pre_viz.get(msg.tabId).frequencyBinCount);
          pre_viz.get(msg.tabId).getFloatFrequencyData(pre_bins);
          var mid_bins = new Float32Array(mid_viz.get(msg.tabId).frequencyBinCount);
          mid_viz.get(msg.tabId).getFloatFrequencyData(mid_bins);
          var post_bins = new Float32Array(post_viz.get(msg.tabId).frequencyBinCount);
          post_viz.get(msg.tabId).getFloatFrequencyData(post_bins);
          if (popupPort) {
            popupPort.postMessage({
              type: "visualizer-data",
              data: {
                pre: Array.from(pre_bins),
                mid: Array.from(mid_bins),
                post: Array.from(post_bins),
                minDecibels: pre_viz.get(msg.tabId).minDecibels,
                maxDecibels: pre_viz.get(msg.tabId).maxDecibels
              }
            });
          } else {
            console.log("[ERROR] issue enviando mensaje");
          }
          break;
        default:
          break;
      }
    });
  }
});
chrome.runtime.onMessage.addListener(/*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msg) {
    var mediaStreamConstraints, media, context, source, volume, compressor, newFiltros, f, volumeNode, _f, _context3, _f2, _f3, _volume, _media;
    return _regeneratorRuntime().wrap(function _callee2$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(msg.target !== "offscreen")) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return");
        case 2:
          if (!(msg.type === "offscreen-wakeup")) {
            _context4.next = 6;
            break;
          }
          if (!offscreenInitialized) {
            console.log("[INFO] Primera inicialización del offscreen - Limpiando datos");
            clearAllData();
            offscreenInitialized = true;
          }
          chrome.runtime.sendMessage({
            type: "offscreen-alive"
          });
          return _context4.abrupt("return");
        case 6:
          if (!(msg.type === "start-processing")) {
            _context4.next = 47;
            break;
          }
          if (!medias.has(msg.tabId)) {
            _context4.next = 10;
            break;
          }
          console.log("[ERROR] Tab already capturing audio");
          return _context4.abrupt("return");
        case 10:
          mediaStreamConstraints = {
            mandatory: {
              chromeMediaSource: "tab",
              chromeMediaSourceId: msg.streamId
            }
          };
          _context4.next = 13;
          return navigator.mediaDevices.getUserMedia({
            audio: mediaStreamConstraints
          });
        case 13:
          media = _context4.sent;
          medias.set(msg.tabId, media);
          context = new AudioContext();
          contexts.set(msg.tabId, context);
          source = context.createMediaStreamSource(media);
          sources.set(msg.tabId, source);
          console.log("[INFO] AudioContext inicializado en tab " + msg.tabId);
          pre_viz.set(msg.tabId, new AnalyserNode(context, {
            fftSize: 2048,
            maxDecibels: -25,
            minDecibels: -100,
            smoothingTimeConstant: 0.4
          }));
          volume = context.createGain();
          volume.gain.value = msg.level;
          sources.set(msg.tabId + "_volume", volume);

          // Crear analizador intermedio (antes del compresor)
          mid_viz.set(msg.tabId, new AnalyserNode(context, {
            fftSize: 2048,
            maxDecibels: -25,
            minDecibels: -100,
            smoothingTimeConstant: 0.4
          }));
          post_viz.set(msg.tabId, new AnalyserNode(context, {
            fftSize: 2048,
            maxDecibels: -25,
            minDecibels: -100,
            smoothingTimeConstant: 0.4
          }));
          source.connect(volume);
          volume.connect(pre_viz.get(msg.tabId));
          pre_viz.get(msg.tabId).connect(mid_viz.get(msg.tabId));
          mid_viz.get(msg.tabId).connect(post_viz.get(msg.tabId));
          post_viz.get(msg.tabId).connect(context.destination);
          console.log("[INFO] AudioContext inicializado");
          // console.log("source:")

          if (staticFiltering) setupEQ(context, msg);

          // Crear nodo de compresor
          compressor = context.createDynamicsCompressor();
          compressor.threshold.value = -24;
          compressor.ratio.value = 4;
          compressor.knee.value = 30;
          compressor.attack.value = 0.003;
          compressor.release.value = 0.25;
          compressors.set(msg.tabId, compressor);
          compressorStates.set(msg.tabId, false); // Inicialmente desactivado

          if (popupPort) {
            popupPort.postMessage({
              type: "start-stream"
            });
          }
          newFiltros = new Map();
          if (filtrosDinamicos.has(msg.tabId) && filtrosDinamicos.get(msg.tabId).size > 0) {
            f = Array.from(filtrosDinamicos.get(msg.tabId).values());
            f.forEach(function (filtro) {
              filtro.node.disconnect();
              var newFiltro = {
                node: context.createBiquadFilter(),
                bypass: filtro.bypass,
                id: filtro.id
              };
              newFiltro.node.type = filtro.node.type;
              newFiltro.node.frequency.value = filtro.node.frequency.value;
              newFiltro.node.Q.value = filtro.node.Q.value;
              newFiltro.node.gain.value = filtro.node.gain.value;
              newFiltros.set(filtro.id, newFiltro);
              filtrosDinamicos.get(msg.tabId)["delete"](filtro.id);
            });
          }
          filtrosDinamicos.set(msg.tabId, newFiltros);
          console.log("[INFO] Filtros dinámicos inicializados");
          reconectarCadena(msg.tabId);
        case 47:
          if (!(msg.type === "ajustar-volumen")) {
            _context4.next = 53;
            break;
          }
          if (contexts.has(msg.tabId)) {
            _context4.next = 51;
            break;
          }
          console.log("[ERROR] No hay contexto de audio para ajustar el volumen");
          return _context4.abrupt("return");
        case 51:
          volumeNode = sources.get(msg.tabId + "_volume");
          if (volumeNode) {
            volumeNode.gain.value = msg.level;
          } else {
            console.log("[ERROR] No se encontró el nodo de volumen");
          }
        case 53:
          if (!(msg.type === "ajustar-filtro")) {
            _context4.next = 76;
            break;
          }
          _f = staticFilters.get(msg.tabId);
          if (_f) {
            _context4.next = 57;
            break;
          }
          return _context4.abrupt("return");
        case 57:
          _context4.t0 = msg.banda;
          _context4.next = _context4.t0 === "volumen" ? 60 : _context4.t0 === "sub" ? 62 : _context4.t0 === "bass" ? 64 : _context4.t0 === "lowMid" ? 66 : _context4.t0 === "mid" ? 68 : _context4.t0 === "highMid" ? 70 : _context4.t0 === "high" ? 72 : _context4.t0 === "air" ? 74 : 76;
          break;
        case 60:
          _f.volume.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 62:
          _f.sub.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 64:
          _f.bass.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 66:
          _f.lowMid.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 68:
          _f.mid.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 70:
          _f.highMid.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 72:
          _f.high.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 74:
          _f.air.gain.value = msg.valor;
          return _context4.abrupt("break", 76);
        case 76:
          if (msg.type === "stop-processing") {
            if (contexts.has(msg.tabId)) {
              _context3 = contexts.get(msg.tabId);
              console.log("[INFO] Closing AudioContext");
              if (_context3 && _context3.state === 'running') {
                _context3.close(); // cierra el AudioContext
                console.log("[INFO] AudioContext cerrado en tab " + msg.tabId);
              } else {
                console.log("[Info] AudioContext already closed !");
              }
              if (staticFilters.has(msg.tabId)) {
                _f2 = staticFilters.get(msg.tabId);
                _f2.forEach(function (filtro) {
                  filtro.disconnect();
                });
              }
              if (filtrosDinamicos.has(msg.tabId) && filtrosDinamicos.get(msg.tabId).size > 0) {
                _f3 = filtrosDinamicos.get(msg.tabId);
                _f3.forEach(function (filtro) {
                  filtro.node.disconnect();
                  // filtrosDinamicos.get(msg.tabId).delete(filtro.id);
                });
              }

              // Desconectar el compresor si existe
              if (compressors.has(msg.tabId)) {
                compressors.get(msg.tabId).disconnect();
              }
              _volume = sources.get(msg.tabId + "_volume");
              if (_volume) {
                _volume.disconnect();
              }
              _media = medias.get(msg.tabId);
              if (_media) {
                _media.getTracks().forEach(function (track) {
                  return track.stop();
                });
              }
              medias["delete"](msg.tabId);
            }
          }
        case 77:
        case "end":
          return _context4.stop();
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
function setupEQ(context, msg) {
  staticFilters.set(msg.tabId, new Map());
  var filters = staticFilters.get(msg.tabId);
  filters.set("sub", context.createBiquadFilter());
  filters.get("sub").type = "lowshelf";
  filters.get("sub").frequency.value = 60;
  filters.get("sub").gain.value = msg.sub;
  filters.set("bass", context.createBiquadFilter());
  filters.get("bass").type = "peaking";
  filters.get("bass").frequency.value = 160;
  filters.get("bass").Q.value = 1;
  filters.get("bass").gain.value = msg.bass;
  filters.set("lowMid", context.createBiquadFilter());
  filters.get("lowMid").type = "peaking";
  filters.get("lowMid").frequency.value = 400;
  filters.get("lowMid").Q.value = 1;
  filters.get("lowMid").gain.value = msg.lowMid;
  filters.set("mid", context.createBiquadFilter());
  filters.get("mid").type = "peaking";
  filters.get("mid").frequency.value = 1000;
  filters.get("mid").Q.value = 1;
  filters.get("mid").gain.value = msg.mid;
  filters.set("highMid", context.createBiquadFilter());
  filters.get("highMid").type = "peaking";
  filters.get("highMid").frequency.value = 2500;
  filters.get("highMid").Q.value = 1;
  filters.get("highMid").gain.value = msg.highMid;
  filters.set("high", context.createBiquadFilter());
  filters.get("high").type = "peaking";
  filters.get("high").frequency.value = 6000;
  filters.get("high").Q.value = 1;
  filters.get("high").gain.value = msg.high;
  filters.set("air", context.createBiquadFilter());
  filters.get("air").type = "highshelf";
  filters.get("air").frequency.value = 10000;
  filters.get("air").gain.value = msg.air;

  // 🔗 Conectar filtros en cadena
  pre_viz.get(msg.tabId).connect(filters.get("sub"));
  filters.get("sub").connect(filters.get("bass"));
  filters.get("bass").connect(filters.get("lowMid"));
  filters.get("lowMid").connect(filters.get("mid"));
  filters.get("mid").connect(filters.get("highMid"));
  filters.get("highMid").connect(filters.get("high"));
  filters.get("high").connect(filters.get("air"));
  filters.get("air").connect(mid_viz.get(msg.tabId));
}
function reconectarCadena(tabId) {
  if (!contexts.has(tabId) || !sources.has(tabId)) {
    console.log("[ERROR] No hay contexto o fuente para reconectar");
    return;
  }
  var context = contexts.get(tabId);
  var source = sources.get(tabId);
  var volumeNode = sources.get(tabId + "_volume");

  // Desconectar todos los nodos
  source.disconnect();
  if (volumeNode) volumeNode.disconnect();
  if (pre_viz.has(tabId)) pre_viz.get(tabId).disconnect();
  if (mid_viz.has(tabId)) mid_viz.get(tabId).disconnect();
  if (post_viz.has(tabId)) post_viz.get(tabId).disconnect();

  // Desconectar todos los filtros
  if (filtrosDinamicos.has(tabId)) {
    filtrosDinamicos.get(tabId).forEach(function (filtro) {
      filtro.node.disconnect();
    });
  }

  // Desconectar el compresor si existe
  if (compressors.has(tabId)) {
    compressors.get(tabId).disconnect();
  }

  // Comenzar la cadena con la fuente conectada al volumen, que luego se conecta al pre-visualizador
  source.connect(volumeNode);
  volumeNode.connect(pre_viz.get(tabId));

  // Crear un array con los filtros activos (no en bypass)
  var filtrosActivos = [];
  if (filtrosDinamicos.has(tabId)) {
    var f = Array.from(filtrosDinamicos.get(tabId).values());
    f.forEach(function (filtro) {
      if (!filtro.bypass) {
        filtrosActivos.push(filtro.node);
        console.log("[INFO] Filtro ".concat(filtro.id, " a\xF1adido a la cadena (no est\xE1 en bypass)"));
      } else {
        console.log("[INFO] Filtro ".concat(filtro.id, " en bypass - no conectado"));
      }
    });
  }

  // Verificar si el compresor está activo
  var compresorActivo = compressorStates.get(tabId) || false;

  // Si no hay filtros activos
  if (filtrosActivos.length === 0) {
    if (compresorActivo && compressors.has(tabId)) {
      // Conectar pre_viz -> mid_viz -> compresor -> post_viz
      pre_viz.get(tabId).connect(mid_viz.get(tabId));
      mid_viz.get(tabId).connect(compressors.get(tabId));
      compressors.get(tabId).connect(post_viz.get(tabId));
      console.log("[INFO] No hay filtros activos, conectando a través del compresor");
    } else {
      // Conectar pre_viz -> mid_viz -> post_viz (sin compresor)
      pre_viz.get(tabId).connect(mid_viz.get(tabId));
      mid_viz.get(tabId).connect(post_viz.get(tabId));
      console.log("[INFO] No hay filtros activos ni compresor activo, cadena directa");
    }
  } else {
    // Hay filtros activos
    // Conectar pre_viz al primer filtro
    pre_viz.get(tabId).connect(filtrosActivos[0]);

    // Conectar cada filtro al siguiente
    for (var i = 0; i < filtrosActivos.length - 1; i++) {
      filtrosActivos[i].connect(filtrosActivos[i + 1]);
    }

    // Último nodo de la cadena de filtros
    var ultimoFiltro = filtrosActivos[filtrosActivos.length - 1];

    // Conectar el último filtro al mid_viz
    ultimoFiltro.connect(mid_viz.get(tabId));
    if (compresorActivo && compressors.has(tabId)) {
      // Conectar mid_viz -> compresor -> post_viz
      mid_viz.get(tabId).connect(compressors.get(tabId));
      compressors.get(tabId).connect(post_viz.get(tabId));
      console.log("[INFO] Cadena conectada con ".concat(filtrosActivos.length, " filtros y compresor activo"));
    } else {
      // Conectar mid_viz -> post_viz (sin compresor)
      mid_viz.get(tabId).connect(post_viz.get(tabId));
      console.log("[INFO] Cadena conectada con ".concat(filtrosActivos.length, " filtros sin compresor"));
    }
  }

  // Finalizar la cadena conectando el post-visualizador a la salida
  if (context) {
    post_viz.get(tabId).connect(context.destination);
  } else {
    console.error("[offscreen] No se pudo conectar el post-visualizador");
  }
  console.log("[INFO] Cadena de audio reconectada");
}
function clearAllData() {
  console.log("[INFO] Limpiando todas las estructuras de datos del offscreen");

  // Desconectar y limpiar todos los nodos de audio
  var _iterator = _createForOfIteratorHelper(contexts.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        tabId = _step$value[0],
        context = _step$value[1];
      try {
        // Detener todos los tracks de audio
        if (medias.has(tabId)) {
          var media = medias.get(tabId);
          media.getTracks().forEach(function (track) {
            return track.stop();
          });
        }

        // Cerrar el contexto de audio
        if (context && context.state === 'running') {
          context.close();
        }
      } catch (e) {
        console.error("[ERROR] Error al limpiar contexto para tab", tabId, e);
      }
    }

    // Limpiar todas las estructuras de datos
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  filtrosDinamicos.clear();
  contexts.clear();
  medias.clear();
  sources.clear();
  loops.clear();
  pre_viz.clear();
  mid_viz.clear(); // Limpiar el nuevo analizador
  post_viz.clear();
  staticFilters.clear();
  compressors.clear();
  compressorStates.clear();
  console.log("[INFO] Todas las estructuras de datos del offscreen han sido limpiadas");
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQzJJLEtBQUssQ0FBQyxDQUFDO0VBQ2Z6SSxLQUFLLENBQUN5SSxLQUFLLENBQUMsQ0FBQztFQUNieEksT0FBTyxDQUFDd0ksS0FBSyxDQUFDLENBQUM7RUFDZnZJLE9BQU8sQ0FBQ3VJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqQnRJLFFBQVEsQ0FBQ3NJLEtBQUssQ0FBQyxDQUFDO0VBQ2hCckksYUFBYSxDQUFDcUksS0FBSyxDQUFDLENBQUM7RUFDckJwSSxXQUFXLENBQUNvSSxLQUFLLENBQUMsQ0FBQztFQUNuQm5JLGdCQUFnQixDQUFDbUksS0FBSyxDQUFDLENBQUM7RUFFeEI3RyxPQUFPLENBQUM4QixHQUFHLENBQUMsd0VBQXdFLENBQUM7QUFDdkYsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL29mZnNjcmVlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaWx0cm9zRGluYW1pY29zID0gbmV3IE1hcCgpO1xuY29uc3QgY29udGV4dHM6IE1hcDxudW1iZXIsIEF1ZGlvQ29udGV4dD4gPSBuZXcgTWFwKCk7XG5jb25zdCBtZWRpYXMgPSBuZXcgTWFwKCk7XG5jb25zdCBzb3VyY2VzID0gbmV3IE1hcCgpO1xubGV0IHBvcHVwUG9ydDogY2hyb21lLnJ1bnRpbWUuUG9ydCB8IG51bGwgPSBudWxsO1xubGV0IGxvb3BzID0gbmV3IE1hcCgpO1xuY29uc3QgcHJlX3ZpeiA9IG5ldyBNYXAoKTtcbmNvbnN0IG1pZF92aXogPSBuZXcgTWFwKCk7IC8vIE51ZXZvIGFuYWxpemFkb3IgcGFyYSB2aXN1YWxpemFyIGFudGVzIGRlbCBjb21wcmVzb3JcbmNvbnN0IHBvc3Rfdml6ID0gbmV3IE1hcCgpO1xuY29uc3Qgc3RhdGljRmlsdGVycyA9IG5ldyBNYXAoKTtcbmNvbnN0IGNvbXByZXNzb3JzID0gbmV3IE1hcCgpOyAvLyBOb2RvcyBkZSBjb21wcmVzb3JcbmNvbnN0IGNvbXByZXNzb3JTdGF0ZXMgPSBuZXcgTWFwKCk7IC8vIEVzdGFkbyBkZSBhY3RpdmFjacOzbiBkZWwgY29tcHJlc29yXG4vLyBjb25zdCBiYW5kYXNfZmlsdHJvcyA9IFtcInN1YlwiLCBcImJhc3NcIiwgXCJsb3dNaWRcIiwgXCJtaWRcIiwgXCJoaWdoTWlkXCIsIFwiaGlnaFwiLCBcImFpclwiXTtcbmNvbnN0IHN0YXRpY0ZpbHRlcmluZyA9IGZhbHNlO1xubGV0IG9mZnNjcmVlbkluaXRpYWxpemVkID0gZmFsc2U7XG5cbi8vIERlZmluZSBDaHJvbWUtc3BlY2lmaWMgbWVkaWEgY29uc3RyYWludHMgaW50ZXJmYWNlXG50eXBlIENocm9tZU1lZGlhVHJhY2tDb25zdHJhaW50cyA9IE1lZGlhVHJhY2tDb25zdHJhaW50cyAmIHtcbiAgbWFuZGF0b3J5OiB7XG4gICAgY2hyb21lTWVkaWFTb3VyY2U6IHN0cmluZztcbiAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBzdHJpbmc7XG4gIH07XG59XG5cbnR5cGUgRGluYW15Y0ZpbHRlciA9IHtcbiAgbm9kZTogQmlxdWFkRmlsdGVyTm9kZTtcbiAgYnlwYXNzOiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xufTtcblxuLy8g8J+OpyBvZmZzY3JlZW4uanMg4oCUIGdlc3Rpw7NuIGRlIGZpbHRyb3MgZGluw6FtaWNvcyBkZSBlY3VhbGl6YWNpw7NuIPCfjpvvuI9cblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtc2cpID0+IHtcbiAgbGV0IGZpbHRybyA9IG51bGw7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlIFwiYWN0dWFsaXphci1maWx0cm8tZGluYW1pY29cIjpcbiAgICAgIGlmICghY29udGV4dHMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltvZmZzY3JlZW5dIEF1ZGlvQ29udGV4dCBubyBpbmljaWFsaXphZG9cIik7XG4gICAgICAgIGFsZXJ0KFwiW29mZnNjcmVlbl0gQXVkaW9Db250ZXh0IG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGV4dE1heWJlID0gY29udGV4dHMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICBpZiAoIWNvbnRleHRNYXliZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW29mZnNjcmVlbl0gQXVkaW9Db250ZXh0IG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgYWxlcnQoXCJbb2Zmc2NyZWVuXSBBdWRpb0NvbnRleHQgbm8gaW5pY2lhbGl6YWRvXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZXh0OiBBdWRpb0NvbnRleHQgPSBjb250ZXh0TWF5YmU7XG4gICAgICBpZiAoIXNvdXJjZXMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltvZmZzY3JlZW5dIE1lZGlhU3RyZWFtU291cmNlIG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgYWxlcnQoXCJbb2Zmc2NyZWVuXSBNZWRpYVN0cmVhbVNvdXJjZSBubyBpbmljaWFsaXphZG9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuZ2V0KG1zZy50YWJJZCk7XG5cbiAgICAgIGlmICghZmlsdHJvc0RpbmFtaWNvcy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICBmaWx0cm9zRGluYW1pY29zLnNldChtc2cudGFiSWQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG4gICAgICBmaWx0cm8gPSBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLmdldChtc2cuZmlsdHJvSWQpO1xuICAgICAgaWYgKCFmaWx0cm8pIHtcbiAgICAgICAgZmlsdHJvID0ge1xuICAgICAgICAgIG5vZGU6IGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCksXG4gICAgICAgICAgYnlwYXNzOiBtc2cuYnlwYXNzIHx8IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGZpbHRyby5ub2RlLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgICAgICAgc291cmNlLmNvbm5lY3QoZmlsdHJvLm5vZGUpO1xuICAgICAgICBmaWx0cm8ubm9kZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLnNldChtc2cuZmlsdHJvSWQsIGZpbHRybyk7XG4gICAgICAgIHJlY29uZWN0YXJDYWRlbmEobXNnLnRhYklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFjdHVhbGl6YXIgZWwgZXN0YWRvIGRlIGJ5cGFzc1xuICAgICAgICBmaWx0cm8uYnlwYXNzID0gbXNnLmJ5cGFzcztcbiAgICAgIH1cblxuICAgICAgZmlsdHJvLm5vZGUuZnJlcXVlbmN5LnZhbHVlID0gbXNnLmZyZXE7XG4gICAgICBmaWx0cm8ubm9kZS5RLnZhbHVlID0gbXNnLnE7XG4gICAgICBmaWx0cm8ubm9kZS5nYWluLnZhbHVlID0gZmlsdHJvLmJ5cGFzcyA/IDAgOiBtc2cuZ2FpbjsgLy8gU2kgZXN0w6EgZW4gYnlwYXNzLCBsYSBnYW5hbmNpYSBlcyAwXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZWxpbWluYXItZmlsdHJvLWRpbmFtaWNvXCI6XG4gICAgICBpZiAoIWZpbHRyb3NEaW5hbWljb3MuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5zZXQobXNnLnRhYklkLCBuZXcgTWFwKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZpbHRybyA9IGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuZ2V0KG1zZy5maWx0cm9JZCk7XG4gICAgICBpZiAoZmlsdHJvKSB7XG4gICAgICAgIGZpbHRyby5ub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5kZWxldGUobXNnLmZpbHRyb0lkKTtcbiAgICAgICAgcmVjb25lY3RhckNhZGVuYShtc2cudGFiSWQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImFqdXN0YXItY29tcHJlc29yXCI6XG4gICAgICBpZiAoIWNvbnRleHRzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2Zmc2NyZWVuXSBBdWRpb0NvbnRleHQgbm8gaW5pY2lhbGl6YWRvXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFNpIGVsIGNvbXByZXNvciBubyBleGlzdGUsIGNyZWFybG9cbiAgICAgIGlmICghY29tcHJlc3NvcnMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc3QgY29udGV4dDogQXVkaW9Db250ZXh0IHwgdW5kZWZpbmVkID0gY29udGV4dHMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2Zmc2NyZWVuXSBBdWRpb0NvbnRleHQgbm8gaW5pY2lhbGl6YWRvXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wcmVzc29yOiBEeW5hbWljc0NvbXByZXNzb3JOb2RlID0gY29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgICAgICAgY29tcHJlc3NvcnMuc2V0KG1zZy50YWJJZCwgY29tcHJlc3Nvcik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEd1YXJkYXIgZWwgZXN0YWRvIGRlIGFjdGl2YWNpw7NuXG4gICAgICBjb21wcmVzc29yU3RhdGVzLnNldChtc2cudGFiSWQsIG1zZy5hY3Rpdm8pO1xuICAgICAgXG4gICAgICAvLyBBY3R1YWxpemFyIHBhcsOhbWV0cm9zIGRlbCBjb21wcmVzb3JcbiAgICAgIGNvbnN0IGNvbXByZXNzb3IgPSBjb21wcmVzc29ycy5nZXQobXNnLnRhYklkKTtcbiAgICAgIGlmIChtc2cucGFyYW1zKSB7XG4gICAgICAgIGlmIChtc2cucGFyYW1zLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLnRocmVzaG9sZC52YWx1ZSA9IG1zZy5wYXJhbXMudGhyZXNob2xkO1xuICAgICAgICBpZiAobXNnLnBhcmFtcy5yYXRpbyAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLnJhdGlvLnZhbHVlID0gbXNnLnBhcmFtcy5yYXRpbztcbiAgICAgICAgaWYgKG1zZy5wYXJhbXMua25lZSAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLmtuZWUudmFsdWUgPSBtc2cucGFyYW1zLmtuZWU7XG4gICAgICAgIGlmIChtc2cucGFyYW1zLmF0dGFjayAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLmF0dGFjay52YWx1ZSA9IG1zZy5wYXJhbXMuYXR0YWNrO1xuICAgICAgICBpZiAobXNnLnBhcmFtcy5yZWxlYXNlICE9PSB1bmRlZmluZWQpIGNvbXByZXNzb3IucmVsZWFzZS52YWx1ZSA9IG1zZy5wYXJhbXMucmVsZWFzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gUmVjb25lY3RhciBsYSBjYWRlbmEgZGUgYXVkaW8gcGFyYSBhcGxpY2FyIGxvcyBjYW1iaW9zXG4gICAgICByZWNvbmVjdGFyQ2FkZW5hKG1zZy50YWJJZCk7XG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICBpZiAocG9ydC5uYW1lID09PSBcInBvcHVwLXZpc3VhbGl6ZXJcIikge1xuICAgIHBvcHVwUG9ydCA9IHBvcnQ7XG4gICAgY29uc29sZS5sb2coXCJbT0ZGU0NSRUVOXSBDb25lY3RhZG8gYWwgcG9wdXAg8J+lsFwiKTtcblxuXG4gICAgLy8gcG9ydC5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtc3RyZWFtXCIgfSk7XG5cbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBwb3B1cFBvcnQgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coXCJbT0ZGU0NSRUVOXSBQb3B1cCBjZXJyYWRvIPCfmKJcIik7XG4gICAgfSk7XG5cbiAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnKSA9PiB7XG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydC1zdHJlYW1cIjpcbiAgICAgICAgICBpZiAobWVkaWFzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJnaXZlLW1lLXZpelwiOlxuICAgICAgICAgIGlmICghcHJlX3Zpei5oYXMobXNnLnRhYklkKSB8fCAhbWlkX3Zpei5oYXMobXNnLnRhYklkKSB8fCAhcG9zdF92aXouaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBwcmVfdml6LCBtaWRfdml6IG8gcG9zdF92aXogbm8gaW5pY2lhbGl6YWRvc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSB0YWJJZDogXCIgKyBtc2cudGFiSWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIHByZV92aXo6IFwiICsgcHJlX3Zpeik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gbWlkX3ZpejogXCIgKyBtaWRfdml6KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBwb3N0X3ZpejogXCIgKyBwb3N0X3Zpeik7XG4gICAgICAgICAgICBhbGVydChcIltvZmZzY3JlZW5dIE5vIHNlIHB1ZWRlIGNhcHR1cmFyIGVsIGF1ZGlvIGVuIGVzdGUgbW9tZW50by4gSW50ZW50YSByZWNhcmdhciBsYSBww6FnaW5hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBVc2FyIEZsb2F0MzJBcnJheSBwYXJhIG9idGVuZXIgdmFsb3JlcyBlbiBkQlxuICAgICAgICAgIGNvbnN0IHByZV9iaW5zID0gbmV3IEZsb2F0MzJBcnJheShwcmVfdml6LmdldChtc2cudGFiSWQpLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICBwcmVfdml6LmdldChtc2cudGFiSWQpLmdldEZsb2F0RnJlcXVlbmN5RGF0YShwcmVfYmlucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbWlkX2JpbnMgPSBuZXcgRmxvYXQzMkFycmF5KG1pZF92aXouZ2V0KG1zZy50YWJJZCkuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICAgIG1pZF92aXouZ2V0KG1zZy50YWJJZCkuZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKG1pZF9iaW5zKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBwb3N0X2JpbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBvc3Rfdml6LmdldChtc2cudGFiSWQpLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICBwb3N0X3Zpei5nZXQobXNnLnRhYklkKS5nZXRGbG9hdEZyZXF1ZW5jeURhdGEocG9zdF9iaW5zKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAocG9wdXBQb3J0KSB7XG4gICAgICAgICAgICBwb3B1cFBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBcInZpc3VhbGl6ZXItZGF0YVwiLFxuICAgICAgICAgICAgICBkYXRhOiB7IFxuICAgICAgICAgICAgICAgIHByZTogQXJyYXkuZnJvbShwcmVfYmlucyksIFxuICAgICAgICAgICAgICAgIG1pZDogQXJyYXkuZnJvbShtaWRfYmlucyksXG4gICAgICAgICAgICAgICAgcG9zdDogQXJyYXkuZnJvbShwb3N0X2JpbnMpLFxuICAgICAgICAgICAgICAgIG1pbkRlY2liZWxzOiBwcmVfdml6LmdldChtc2cudGFiSWQpLm1pbkRlY2liZWxzLFxuICAgICAgICAgICAgICAgIG1heERlY2liZWxzOiBwcmVfdml6LmdldChtc2cudGFiSWQpLm1heERlY2liZWxzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gaXNzdWUgZW52aWFuZG8gbWVuc2FqZVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobXNnKSA9PiB7XG4gIGlmIChtc2cudGFyZ2V0ICE9PSBcIm9mZnNjcmVlblwiKSByZXR1cm47XG5cbiAgaWYgKG1zZy50eXBlID09PSBcIm9mZnNjcmVlbi13YWtldXBcIikge1xuICAgIGlmICghb2Zmc2NyZWVuSW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIFByaW1lcmEgaW5pY2lhbGl6YWNpw7NuIGRlbCBvZmZzY3JlZW4gLSBMaW1waWFuZG8gZGF0b3NcIik7XG4gICAgICBjbGVhckFsbERhdGEoKTtcbiAgICAgIG9mZnNjcmVlbkluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcIm9mZnNjcmVlbi1hbGl2ZVwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09IFwic3RhcnQtcHJvY2Vzc2luZ1wiKSB7XG4gICAgaWYgKG1lZGlhcy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIFRhYiBhbHJlYWR5IGNhcHR1cmluZyBhdWRpb1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWVkaWFTdHJlYW1Db25zdHJhaW50czogQ2hyb21lTWVkaWFUcmFja0NvbnN0cmFpbnRzID0ge1xuICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlOiBcInRhYlwiLFxuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBtc2cuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgbWVkaWE6IE1lZGlhU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgYXVkaW86IG1lZGlhU3RyZWFtQ29uc3RyYWludHNcbiAgICB9KTtcbiAgICBtZWRpYXMuc2V0KG1zZy50YWJJZCwgbWVkaWEpOyBcblxuICAgIGNvbnN0IGNvbnRleHQ6IEF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBjb250ZXh0cy5zZXQobXNnLnRhYklkLCBjb250ZXh0KTtcbiAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgICBzb3VyY2VzLnNldChtc2cudGFiSWQsIHNvdXJjZSk7XG4gICAgY29uc29sZS5sb2coXCJbSU5GT10gQXVkaW9Db250ZXh0IGluaWNpYWxpemFkbyBlbiB0YWIgXCIgKyBtc2cudGFiSWQpO1xuXG4gICAgcHJlX3Zpei5zZXQobXNnLnRhYklkLCBuZXcgQW5hbHlzZXJOb2RlKGNvbnRleHQsIHtcbiAgICAgIGZmdFNpemU6IDIwNDgsXG4gICAgICBtYXhEZWNpYmVsczogLTI1LFxuICAgICAgbWluRGVjaWJlbHM6IC0xMDAsXG4gICAgICBzbW9vdGhpbmdUaW1lQ29uc3RhbnQ6IDAuNCxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB2b2x1bWUgPSBjb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB2b2x1bWUuZ2Fpbi52YWx1ZSA9IG1zZy5sZXZlbDtcbiAgICBzb3VyY2VzLnNldChtc2cudGFiSWQgKyBcIl92b2x1bWVcIiwgdm9sdW1lKTtcblxuICAgIC8vIENyZWFyIGFuYWxpemFkb3IgaW50ZXJtZWRpbyAoYW50ZXMgZGVsIGNvbXByZXNvcilcbiAgICBtaWRfdml6LnNldChtc2cudGFiSWQsIG5ldyBBbmFseXNlck5vZGUoY29udGV4dCwge1xuICAgICAgZmZ0U2l6ZTogMjA0OCxcbiAgICAgIG1heERlY2liZWxzOiAtMjUsXG4gICAgICBtaW5EZWNpYmVsczogLTEwMCxcbiAgICAgIHNtb290aGluZ1RpbWVDb25zdGFudDogMC40LFxuICAgIH0pKTtcblxuICAgIHBvc3Rfdml6LnNldChtc2cudGFiSWQsIG5ldyBBbmFseXNlck5vZGUoY29udGV4dCwge1xuICAgICAgZmZ0U2l6ZTogMjA0OCxcbiAgICAgIG1heERlY2liZWxzOiAtMjUsXG4gICAgICBtaW5EZWNpYmVsczogLTEwMCxcbiAgICAgIHNtb290aGluZ1RpbWVDb25zdGFudDogMC40LFxuICAgIH0pKTtcbiAgICBzb3VyY2UuY29ubmVjdCh2b2x1bWUpO1xuICAgIHZvbHVtZS5jb25uZWN0KHByZV92aXouZ2V0KG1zZy50YWJJZCkpO1xuICAgIHByZV92aXouZ2V0KG1zZy50YWJJZCkuY29ubmVjdChtaWRfdml6LmdldChtc2cudGFiSWQpKTtcbiAgICBtaWRfdml6LmdldChtc2cudGFiSWQpLmNvbm5lY3QocG9zdF92aXouZ2V0KG1zZy50YWJJZCkpO1xuICAgIHBvc3Rfdml6LmdldChtc2cudGFiSWQpLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgY29uc29sZS5sb2coXCJbSU5GT10gQXVkaW9Db250ZXh0IGluaWNpYWxpemFkb1wiKVxuICAgIC8vIGNvbnNvbGUubG9nKFwic291cmNlOlwiKVxuXG4gICAgaWYgKHN0YXRpY0ZpbHRlcmluZylcbiAgICAgIHNldHVwRVEoY29udGV4dCwgbXNnKTtcblxuICAgIC8vIENyZWFyIG5vZG8gZGUgY29tcHJlc29yXG4gICAgY29uc3QgY29tcHJlc3NvciA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gICAgY29tcHJlc3Nvci50aHJlc2hvbGQudmFsdWUgPSAtMjQ7XG4gICAgY29tcHJlc3Nvci5yYXRpby52YWx1ZSA9IDQ7XG4gICAgY29tcHJlc3Nvci5rbmVlLnZhbHVlID0gMzA7XG4gICAgY29tcHJlc3Nvci5hdHRhY2sudmFsdWUgPSAwLjAwMztcbiAgICBjb21wcmVzc29yLnJlbGVhc2UudmFsdWUgPSAwLjI1O1xuICAgIGNvbXByZXNzb3JzLnNldChtc2cudGFiSWQsIGNvbXByZXNzb3IpO1xuICAgIGNvbXByZXNzb3JTdGF0ZXMuc2V0KG1zZy50YWJJZCwgZmFsc2UpOyAvLyBJbmljaWFsbWVudGUgZGVzYWN0aXZhZG9cblxuICAgIGlmIChwb3B1cFBvcnQpIHtcbiAgICAgIHBvcHVwUG9ydC5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtc3RyZWFtXCIgfSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBuZXdGaWx0cm9zOiBNYXA8c3RyaW5nLCBEaW5hbXljRmlsdGVyPiA9IG5ldyBNYXAoKTtcbiAgICBpZiAoZmlsdHJvc0RpbmFtaWNvcy5oYXMobXNnLnRhYklkKSAmJiBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLnNpemUgPiAwKSB7XG4gICAgICBjb25zdCBmOiBEaW5hbXljRmlsdGVyW10gPSBBcnJheS5mcm9tKGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkudmFsdWVzKCkpO1xuICAgICAgZi5mb3JFYWNoKChmaWx0cm8pID0+IHtcbiAgICAgICAgZmlsdHJvLm5vZGUuZGlzY29ubmVjdCgpO1xuICAgICAgICBjb25zdCBuZXdGaWx0cm86IERpbmFteWNGaWx0ZXIgPSB7XG4gICAgICAgICAgbm9kZTogY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSxcbiAgICAgICAgICBieXBhc3M6IGZpbHRyby5ieXBhc3MsXG4gICAgICAgICAgaWQ6IGZpbHRyby5pZFxuICAgICAgICB9O1xuICAgICAgICBuZXdGaWx0cm8ubm9kZS50eXBlID0gZmlsdHJvLm5vZGUudHlwZTtcbiAgICAgICAgbmV3RmlsdHJvLm5vZGUuZnJlcXVlbmN5LnZhbHVlID0gZmlsdHJvLm5vZGUuZnJlcXVlbmN5LnZhbHVlO1xuICAgICAgICBuZXdGaWx0cm8ubm9kZS5RLnZhbHVlID0gZmlsdHJvLm5vZGUuUS52YWx1ZTtcbiAgICAgICAgbmV3RmlsdHJvLm5vZGUuZ2Fpbi52YWx1ZSA9IGZpbHRyby5ub2RlLmdhaW4udmFsdWU7XG4gICAgICAgIG5ld0ZpbHRyb3Muc2V0KGZpbHRyby5pZCwgbmV3RmlsdHJvKTtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5kZWxldGUoZmlsdHJvLmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmaWx0cm9zRGluYW1pY29zLnNldChtc2cudGFiSWQsIG5ld0ZpbHRyb3MpO1xuICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIEZpbHRyb3MgZGluw6FtaWNvcyBpbmljaWFsaXphZG9zXCIpO1xuICAgIHJlY29uZWN0YXJDYWRlbmEobXNnLnRhYklkKTtcbiAgfVxuXG4gIGlmIChtc2cudHlwZSA9PT0gXCJhanVzdGFyLXZvbHVtZW5cIikge1xuICAgIGlmICghY29udGV4dHMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBObyBoYXkgY29udGV4dG8gZGUgYXVkaW8gcGFyYSBhanVzdGFyIGVsIHZvbHVtZW5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHZvbHVtZU5vZGUgPSBzb3VyY2VzLmdldChtc2cudGFiSWQgKyBcIl92b2x1bWVcIik7XG4gICAgaWYgKHZvbHVtZU5vZGUpIHtcbiAgICAgIHZvbHVtZU5vZGUuZ2Fpbi52YWx1ZSA9IG1zZy5sZXZlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIE5vIHNlIGVuY29udHLDsyBlbCBub2RvIGRlIHZvbHVtZW5cIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1zZy50eXBlID09PSBcImFqdXN0YXItZmlsdHJvXCIpIHtcbiAgICBjb25zdCBmID0gc3RhdGljRmlsdGVycy5nZXQobXNnLnRhYklkKTtcbiAgICBpZiAoIWYpIHJldHVybjtcblxuICAgIHN3aXRjaCAobXNnLmJhbmRhKSB7XG4gICAgICBjYXNlIFwidm9sdW1lblwiOlxuICAgICAgICBmLnZvbHVtZS5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdWJcIjpcbiAgICAgICAgZi5zdWIuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYmFzc1wiOlxuICAgICAgICBmLmJhc3MuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibG93TWlkXCI6XG4gICAgICAgIGYubG93TWlkLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pZFwiOlxuICAgICAgICBmLm1pZC5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoTWlkXCI6XG4gICAgICAgIGYuaGlnaE1pZC5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgIGYuaGlnaC5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJhaXJcIjpcbiAgICAgICAgZi5haXIuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChtc2cudHlwZSA9PT0gXCJzdG9wLXByb2Nlc3NpbmdcIikge1xuICAgIGlmIChjb250ZXh0cy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgbGV0IGNvbnRleHQgPSBjb250ZXh0cy5nZXQobXNnLnRhYklkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIENsb3NpbmcgQXVkaW9Db250ZXh0XCIpO1xuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5zdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgIGNvbnRleHQuY2xvc2UoKTsgLy8gY2llcnJhIGVsIEF1ZGlvQ29udGV4dFxuICAgICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBBdWRpb0NvbnRleHQgY2VycmFkbyBlbiB0YWIgXCIgKyBtc2cudGFiSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSW5mb10gQXVkaW9Db250ZXh0IGFscmVhZHkgY2xvc2VkICFcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0aWNGaWx0ZXJzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGNvbnN0IGYgOiBNYXA8c3RyaW5nLCBCaXF1YWRGaWx0ZXJOb2RlPiA9IHN0YXRpY0ZpbHRlcnMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICAgIGYuZm9yRWFjaCgoZmlsdHJvKSA9PiB7XG4gICAgICAgICAgZmlsdHJvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyhtc2cudGFiSWQpICYmIGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuc2l6ZSA+IDApIHtcbiAgICAgICAgY29uc3QgZjogTWFwPHN0cmluZywgRGluYW15Y0ZpbHRlcj4gPSBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpO1xuICAgICAgICBmLmZvckVhY2goKGZpbHRybykgPT4ge1xuICAgICAgICAgIGZpbHRyby5ub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAvLyBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLmRlbGV0ZShmaWx0cm8uaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVzY29uZWN0YXIgZWwgY29tcHJlc29yIHNpIGV4aXN0ZVxuICAgICAgaWYgKGNvbXByZXNzb3JzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGNvbXByZXNzb3JzLmdldChtc2cudGFiSWQpLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgdm9sdW1lID0gc291cmNlcy5nZXQobXNnLnRhYklkICsgXCJfdm9sdW1lXCIpO1xuICAgICAgaWYgKHZvbHVtZSkge1xuICAgICAgICB2b2x1bWUuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZWRpYSA9IG1lZGlhcy5nZXQobXNnLnRhYklkKTtcbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBtZWRpYS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjazogTWVkaWFTdHJlYW1UcmFjaykgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIG1lZGlhcy5kZWxldGUobXNnLnRhYklkKTtcbiAgICB9XG4gIH1cblxufSk7XG5cbmZ1bmN0aW9uIHNldHVwRVEoY29udGV4dDogQXVkaW9Db250ZXh0LCBtc2c6IHsgdGFiSWQ6IG51bWJlciwgc3ViOiBudW1iZXIsIGJhc3M6IG51bWJlciwgbG93TWlkOiBudW1iZXIsIG1pZDogbnVtYmVyLCBoaWdoTWlkOiBudW1iZXIsIGhpZ2g6IG51bWJlciwgYWlyOiBudW1iZXIgfSkge1xuICBzdGF0aWNGaWx0ZXJzLnNldChtc2cudGFiSWQsIG5ldyBNYXAoKSk7XG4gIGNvbnN0IGZpbHRlcnMgPSBzdGF0aWNGaWx0ZXJzLmdldChtc2cudGFiSWQpO1xuXG4gIGZpbHRlcnMuc2V0KFwic3ViXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcInN1YlwiKS50eXBlID0gXCJsb3dzaGVsZlwiO1xuICBmaWx0ZXJzLmdldChcInN1YlwiKS5mcmVxdWVuY3kudmFsdWUgPSA2MDtcbiAgZmlsdGVycy5nZXQoXCJzdWJcIikuZ2Fpbi52YWx1ZSA9IG1zZy5zdWI7XG5cbiAgZmlsdGVycy5zZXQoXCJiYXNzXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcImJhc3NcIikudHlwZSA9IFwicGVha2luZ1wiO1xuICBmaWx0ZXJzLmdldChcImJhc3NcIikuZnJlcXVlbmN5LnZhbHVlID0gMTYwO1xuICBmaWx0ZXJzLmdldChcImJhc3NcIikuUS52YWx1ZSA9IDE7XG4gIGZpbHRlcnMuZ2V0KFwiYmFzc1wiKS5nYWluLnZhbHVlID0gbXNnLmJhc3M7XG5cbiAgZmlsdGVycy5zZXQoXCJsb3dNaWRcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwibG93TWlkXCIpLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgZmlsdGVycy5nZXQoXCJsb3dNaWRcIikuZnJlcXVlbmN5LnZhbHVlID0gNDAwO1xuICBmaWx0ZXJzLmdldChcImxvd01pZFwiKS5RLnZhbHVlID0gMTtcbiAgZmlsdGVycy5nZXQoXCJsb3dNaWRcIikuZ2Fpbi52YWx1ZSA9IG1zZy5sb3dNaWQ7XG5cbiAgZmlsdGVycy5zZXQoXCJtaWRcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwibWlkXCIpLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgZmlsdGVycy5nZXQoXCJtaWRcIikuZnJlcXVlbmN5LnZhbHVlID0gMTAwMDtcbiAgZmlsdGVycy5nZXQoXCJtaWRcIikuUS52YWx1ZSA9IDE7XG4gIGZpbHRlcnMuZ2V0KFwibWlkXCIpLmdhaW4udmFsdWUgPSBtc2cubWlkO1xuXG4gIGZpbHRlcnMuc2V0KFwiaGlnaE1pZFwiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJoaWdoTWlkXCIpLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgZmlsdGVycy5nZXQoXCJoaWdoTWlkXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDI1MDA7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaE1pZFwiKS5RLnZhbHVlID0gMTtcbiAgZmlsdGVycy5nZXQoXCJoaWdoTWlkXCIpLmdhaW4udmFsdWUgPSBtc2cuaGlnaE1pZDtcblxuICBmaWx0ZXJzLnNldChcImhpZ2hcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaFwiKS50eXBlID0gXCJwZWFraW5nXCI7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaFwiKS5mcmVxdWVuY3kudmFsdWUgPSA2MDAwO1xuICBmaWx0ZXJzLmdldChcImhpZ2hcIikuUS52YWx1ZSA9IDE7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaFwiKS5nYWluLnZhbHVlID0gbXNnLmhpZ2g7XG5cbiAgZmlsdGVycy5zZXQoXCJhaXJcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwiYWlyXCIpLnR5cGUgPSBcImhpZ2hzaGVsZlwiO1xuICBmaWx0ZXJzLmdldChcImFpclwiKS5mcmVxdWVuY3kudmFsdWUgPSAxMDAwMDtcbiAgZmlsdGVycy5nZXQoXCJhaXJcIikuZ2Fpbi52YWx1ZSA9IG1zZy5haXI7XG5cblxuICAvLyDwn5SXIENvbmVjdGFyIGZpbHRyb3MgZW4gY2FkZW5hXG4gIHByZV92aXouZ2V0KG1zZy50YWJJZCkuY29ubmVjdChmaWx0ZXJzLmdldChcInN1YlwiKSk7XG4gIGZpbHRlcnMuZ2V0KFwic3ViXCIpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJiYXNzXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJiYXNzXCIpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJsb3dNaWRcIikpO1xuICBmaWx0ZXJzLmdldChcImxvd01pZFwiKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwibWlkXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJtaWRcIikuY29ubmVjdChmaWx0ZXJzLmdldChcImhpZ2hNaWRcIikpO1xuICBmaWx0ZXJzLmdldChcImhpZ2hNaWRcIikuY29ubmVjdChmaWx0ZXJzLmdldChcImhpZ2hcIikpO1xuICBmaWx0ZXJzLmdldChcImhpZ2hcIikuY29ubmVjdChmaWx0ZXJzLmdldChcImFpclwiKSk7XG4gIGZpbHRlcnMuZ2V0KFwiYWlyXCIpLmNvbm5lY3QobWlkX3Zpei5nZXQobXNnLnRhYklkKSk7XG5cbn1cblxuZnVuY3Rpb24gcmVjb25lY3RhckNhZGVuYSh0YWJJZDogbnVtYmVyKSB7XG4gIGlmICghY29udGV4dHMuaGFzKHRhYklkKSB8fCAhc291cmNlcy5oYXModGFiSWQpKSB7XG4gICAgY29uc29sZS5sb2coXCJbRVJST1JdIE5vIGhheSBjb250ZXh0byBvIGZ1ZW50ZSBwYXJhIHJlY29uZWN0YXJcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IGNvbnRleHRzLmdldCh0YWJJZCk7XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuZ2V0KHRhYklkKTtcbiAgY29uc3Qgdm9sdW1lTm9kZSA9IHNvdXJjZXMuZ2V0KHRhYklkICsgXCJfdm9sdW1lXCIpO1xuXG4gIC8vIERlc2NvbmVjdGFyIHRvZG9zIGxvcyBub2Rvc1xuICBzb3VyY2UuZGlzY29ubmVjdCgpO1xuICBpZiAodm9sdW1lTm9kZSkgdm9sdW1lTm9kZS5kaXNjb25uZWN0KCk7XG4gIFxuICBpZiAocHJlX3Zpei5oYXModGFiSWQpKSBwcmVfdml6LmdldCh0YWJJZCkuZGlzY29ubmVjdCgpO1xuICBpZiAobWlkX3Zpei5oYXModGFiSWQpKSBtaWRfdml6LmdldCh0YWJJZCkuZGlzY29ubmVjdCgpO1xuICBpZiAocG9zdF92aXouaGFzKHRhYklkKSkgcG9zdF92aXouZ2V0KHRhYklkKS5kaXNjb25uZWN0KCk7XG4gIFxuICAvLyBEZXNjb25lY3RhciB0b2RvcyBsb3MgZmlsdHJvc1xuICBpZiAoZmlsdHJvc0RpbmFtaWNvcy5oYXModGFiSWQpKSB7XG4gICAgZmlsdHJvc0RpbmFtaWNvcy5nZXQodGFiSWQpLmZvckVhY2goKGZpbHRybzogRGluYW15Y0ZpbHRlcikgPT4ge1xuICAgICAgZmlsdHJvLm5vZGUuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICAvLyBEZXNjb25lY3RhciBlbCBjb21wcmVzb3Igc2kgZXhpc3RlXG4gIGlmIChjb21wcmVzc29ycy5oYXModGFiSWQpKSB7XG4gICAgY29tcHJlc3NvcnMuZ2V0KHRhYklkKS5kaXNjb25uZWN0KCk7XG4gIH1cblxuICAvLyBDb21lbnphciBsYSBjYWRlbmEgY29uIGxhIGZ1ZW50ZSBjb25lY3RhZGEgYWwgdm9sdW1lbiwgcXVlIGx1ZWdvIHNlIGNvbmVjdGEgYWwgcHJlLXZpc3VhbGl6YWRvclxuICBzb3VyY2UuY29ubmVjdCh2b2x1bWVOb2RlKTtcbiAgdm9sdW1lTm9kZS5jb25uZWN0KHByZV92aXouZ2V0KHRhYklkKSk7XG4gIFxuICAvLyBDcmVhciB1biBhcnJheSBjb24gbG9zIGZpbHRyb3MgYWN0aXZvcyAobm8gZW4gYnlwYXNzKVxuICBjb25zdCBmaWx0cm9zQWN0aXZvczogQmlxdWFkRmlsdGVyTm9kZVtdID0gW107XG4gIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyh0YWJJZCkpIHtcbiAgICBjb25zdCBmOiBEaW5hbXljRmlsdGVyW10gPSBBcnJheS5mcm9tKGZpbHRyb3NEaW5hbWljb3MuZ2V0KHRhYklkKS52YWx1ZXMoKSk7XG4gICAgZi5mb3JFYWNoKChmaWx0cm8pID0+IHtcbiAgICAgIGlmICghZmlsdHJvLmJ5cGFzcykge1xuICAgICAgICBmaWx0cm9zQWN0aXZvcy5wdXNoKGZpbHRyby5ub2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBGaWx0cm8gJHtmaWx0cm8uaWR9IGHDsWFkaWRvIGEgbGEgY2FkZW5hIChubyBlc3TDoSBlbiBieXBhc3MpYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0lORk9dIEZpbHRybyAke2ZpbHRyby5pZH0gZW4gYnlwYXNzIC0gbm8gY29uZWN0YWRvYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8vIFZlcmlmaWNhciBzaSBlbCBjb21wcmVzb3IgZXN0w6EgYWN0aXZvXG4gIGNvbnN0IGNvbXByZXNvckFjdGl2byA9IGNvbXByZXNzb3JTdGF0ZXMuZ2V0KHRhYklkKSB8fCBmYWxzZTtcbiAgXG4gIC8vIFNpIG5vIGhheSBmaWx0cm9zIGFjdGl2b3NcbiAgaWYgKGZpbHRyb3NBY3Rpdm9zLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChjb21wcmVzb3JBY3Rpdm8gJiYgY29tcHJlc3NvcnMuaGFzKHRhYklkKSkge1xuICAgICAgLy8gQ29uZWN0YXIgcHJlX3ZpeiAtPiBtaWRfdml6IC0+IGNvbXByZXNvciAtPiBwb3N0X3ZpelxuICAgICAgcHJlX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QobWlkX3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIG1pZF92aXouZ2V0KHRhYklkKS5jb25uZWN0KGNvbXByZXNzb3JzLmdldCh0YWJJZCkpO1xuICAgICAgY29tcHJlc3NvcnMuZ2V0KHRhYklkKS5jb25uZWN0KHBvc3Rfdml6LmdldCh0YWJJZCkpO1xuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gTm8gaGF5IGZpbHRyb3MgYWN0aXZvcywgY29uZWN0YW5kbyBhIHRyYXbDqXMgZGVsIGNvbXByZXNvclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29uZWN0YXIgcHJlX3ZpeiAtPiBtaWRfdml6IC0+IHBvc3Rfdml6IChzaW4gY29tcHJlc29yKVxuICAgICAgcHJlX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QobWlkX3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIG1pZF92aXouZ2V0KHRhYklkKS5jb25uZWN0KHBvc3Rfdml6LmdldCh0YWJJZCkpO1xuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gTm8gaGF5IGZpbHRyb3MgYWN0aXZvcyBuaSBjb21wcmVzb3IgYWN0aXZvLCBjYWRlbmEgZGlyZWN0YVwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSGF5IGZpbHRyb3MgYWN0aXZvc1xuICAgIC8vIENvbmVjdGFyIHByZV92aXogYWwgcHJpbWVyIGZpbHRyb1xuICAgIHByZV92aXouZ2V0KHRhYklkKS5jb25uZWN0KGZpbHRyb3NBY3Rpdm9zWzBdKTtcbiAgICBcbiAgICAvLyBDb25lY3RhciBjYWRhIGZpbHRybyBhbCBzaWd1aWVudGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRyb3NBY3Rpdm9zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgZmlsdHJvc0FjdGl2b3NbaV0uY29ubmVjdChmaWx0cm9zQWN0aXZvc1tpICsgMV0pO1xuICAgIH1cbiAgICBcbiAgICAvLyDDmmx0aW1vIG5vZG8gZGUgbGEgY2FkZW5hIGRlIGZpbHRyb3NcbiAgICBjb25zdCB1bHRpbW9GaWx0cm8gPSBmaWx0cm9zQWN0aXZvc1tmaWx0cm9zQWN0aXZvcy5sZW5ndGggLSAxXTtcbiAgICBcbiAgICAvLyBDb25lY3RhciBlbCDDumx0aW1vIGZpbHRybyBhbCBtaWRfdml6XG4gICAgdWx0aW1vRmlsdHJvLmNvbm5lY3QobWlkX3Zpei5nZXQodGFiSWQpKTtcbiAgICBcbiAgICBpZiAoY29tcHJlc29yQWN0aXZvICYmIGNvbXByZXNzb3JzLmhhcyh0YWJJZCkpIHtcbiAgICAgIC8vIENvbmVjdGFyIG1pZF92aXogLT4gY29tcHJlc29yIC0+IHBvc3Rfdml6XG4gICAgICBtaWRfdml6LmdldCh0YWJJZCkuY29ubmVjdChjb21wcmVzc29ycy5nZXQodGFiSWQpKTtcbiAgICAgIGNvbXByZXNzb3JzLmdldCh0YWJJZCkuY29ubmVjdChwb3N0X3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbSU5GT10gQ2FkZW5hIGNvbmVjdGFkYSBjb24gJHtmaWx0cm9zQWN0aXZvcy5sZW5ndGh9IGZpbHRyb3MgeSBjb21wcmVzb3IgYWN0aXZvYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbmVjdGFyIG1pZF92aXogLT4gcG9zdF92aXogKHNpbiBjb21wcmVzb3IpXG4gICAgICBtaWRfdml6LmdldCh0YWJJZCkuY29ubmVjdChwb3N0X3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbSU5GT10gQ2FkZW5hIGNvbmVjdGFkYSBjb24gJHtmaWx0cm9zQWN0aXZvcy5sZW5ndGh9IGZpbHRyb3Mgc2luIGNvbXByZXNvcmApO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gRmluYWxpemFyIGxhIGNhZGVuYSBjb25lY3RhbmRvIGVsIHBvc3QtdmlzdWFsaXphZG9yIGEgbGEgc2FsaWRhXG4gIGlmIChjb250ZXh0KSB7XG4gICAgcG9zdF92aXouZ2V0KHRhYklkKS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbb2Zmc2NyZWVuXSBObyBzZSBwdWRvIGNvbmVjdGFyIGVsIHBvc3QtdmlzdWFsaXphZG9yXCIpO1xuICB9XG4gIFxuICBjb25zb2xlLmxvZyhcIltJTkZPXSBDYWRlbmEgZGUgYXVkaW8gcmVjb25lY3RhZGFcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWxsRGF0YSgpIHtcbiAgY29uc29sZS5sb2coXCJbSU5GT10gTGltcGlhbmRvIHRvZGFzIGxhcyBlc3RydWN0dXJhcyBkZSBkYXRvcyBkZWwgb2Zmc2NyZWVuXCIpO1xuICBcbiAgLy8gRGVzY29uZWN0YXIgeSBsaW1waWFyIHRvZG9zIGxvcyBub2RvcyBkZSBhdWRpb1xuICBmb3IgKGNvbnN0IFt0YWJJZCwgY29udGV4dF0gb2YgY29udGV4dHMuZW50cmllcygpKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIERldGVuZXIgdG9kb3MgbG9zIHRyYWNrcyBkZSBhdWRpb1xuICAgICAgaWYgKG1lZGlhcy5oYXModGFiSWQpKSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gbWVkaWFzLmdldCh0YWJJZCk7XG4gICAgICAgIG1lZGlhLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrOiBNZWRpYVN0cmVhbVRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDZXJyYXIgZWwgY29udGV4dG8gZGUgYXVkaW9cbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgICBjb250ZXh0LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gRXJyb3IgYWwgbGltcGlhciBjb250ZXh0byBwYXJhIHRhYlwiLCB0YWJJZCwgZSk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBMaW1waWFyIHRvZGFzIGxhcyBlc3RydWN0dXJhcyBkZSBkYXRvc1xuICBmaWx0cm9zRGluYW1pY29zLmNsZWFyKCk7XG4gIGNvbnRleHRzLmNsZWFyKCk7XG4gIG1lZGlhcy5jbGVhcigpO1xuICBzb3VyY2VzLmNsZWFyKCk7XG4gIGxvb3BzLmNsZWFyKCk7XG4gIHByZV92aXouY2xlYXIoKTtcbiAgbWlkX3Zpei5jbGVhcigpOyAvLyBMaW1waWFyIGVsIG51ZXZvIGFuYWxpemFkb3JcbiAgcG9zdF92aXouY2xlYXIoKTtcbiAgc3RhdGljRmlsdGVycy5jbGVhcigpO1xuICBjb21wcmVzc29ycy5jbGVhcigpO1xuICBjb21wcmVzc29yU3RhdGVzLmNsZWFyKCk7XG4gIFxuICBjb25zb2xlLmxvZyhcIltJTkZPXSBUb2RhcyBsYXMgZXN0cnVjdHVyYXMgZGUgZGF0b3MgZGVsIG9mZnNjcmVlbiBoYW4gc2lkbyBsaW1waWFkYXNcIik7XG59XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImZpbHRyb3NEaW5hbWljb3MiLCJNYXAiLCJjb250ZXh0cyIsIm1lZGlhcyIsInNvdXJjZXMiLCJwb3B1cFBvcnQiLCJsb29wcyIsInByZV92aXoiLCJtaWRfdml6IiwicG9zdF92aXoiLCJzdGF0aWNGaWx0ZXJzIiwiY29tcHJlc3NvcnMiLCJjb21wcmVzc29yU3RhdGVzIiwic3RhdGljRmlsdGVyaW5nIiwib2Zmc2NyZWVuSW5pdGlhbGl6ZWQiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJfcmVmIiwiX2NhbGxlZSIsIm1zZyIsImZpbHRybyIsImNvbnRleHRNYXliZSIsImNvbnRleHQiLCJzb3VyY2UiLCJfY29udGV4dCIsIl9jb21wcmVzc29yIiwiY29tcHJlc3NvciIsIl9jYWxsZWUkIiwiX2NvbnRleHQyIiwidDAiLCJoYXMiLCJ0YWJJZCIsImNvbnNvbGUiLCJlcnJvciIsImFsZXJ0IiwiZ2V0Iiwic2V0IiwiZmlsdHJvSWQiLCJub2RlIiwiY3JlYXRlQmlxdWFkRmlsdGVyIiwiYnlwYXNzIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwicmVjb25lY3RhckNhZGVuYSIsImZyZXF1ZW5jeSIsImZyZXEiLCJRIiwicSIsImdhaW4iLCJkaXNjb25uZWN0IiwiY3JlYXRlRHluYW1pY3NDb21wcmVzc29yIiwiYWN0aXZvIiwicGFyYW1zIiwidGhyZXNob2xkIiwidW5kZWZpbmVkIiwicmF0aW8iLCJrbmVlIiwiYXR0YWNrIiwicmVsZWFzZSIsIl94Iiwib25Db25uZWN0IiwicG9ydCIsImxvZyIsIm9uRGlzY29ubmVjdCIsInBvc3RNZXNzYWdlIiwicHJlX2JpbnMiLCJGbG9hdDMyQXJyYXkiLCJmcmVxdWVuY3lCaW5Db3VudCIsImdldEZsb2F0RnJlcXVlbmN5RGF0YSIsIm1pZF9iaW5zIiwicG9zdF9iaW5zIiwiZGF0YSIsInByZSIsIkFycmF5IiwiZnJvbSIsIm1pZCIsInBvc3QiLCJtaW5EZWNpYmVscyIsIm1heERlY2liZWxzIiwiX3JlZjIiLCJfY2FsbGVlMiIsIm1lZGlhU3RyZWFtQ29uc3RyYWludHMiLCJtZWRpYSIsInZvbHVtZSIsIm5ld0ZpbHRyb3MiLCJ2b2x1bWVOb2RlIiwiX2YiLCJfY29udGV4dDMiLCJfZjIiLCJfZjMiLCJfdm9sdW1lIiwiX21lZGlhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQ0IiwidGFyZ2V0IiwiY2xlYXJBbGxEYXRhIiwic2VuZE1lc3NhZ2UiLCJtYW5kYXRvcnkiLCJjaHJvbWVNZWRpYVNvdXJjZSIsImNocm9tZU1lZGlhU291cmNlSWQiLCJzdHJlYW1JZCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJBbmFseXNlck5vZGUiLCJmZnRTaXplIiwic21vb3RoaW5nVGltZUNvbnN0YW50IiwiY3JlYXRlR2FpbiIsImxldmVsIiwic2V0dXBFUSIsInNpemUiLCJuZXdGaWx0cm8iLCJpZCIsImJhbmRhIiwidmFsb3IiLCJzdWIiLCJiYXNzIiwibG93TWlkIiwiaGlnaE1pZCIsImhpZ2giLCJhaXIiLCJzdGF0ZSIsImNsb3NlIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJfeDIiLCJmaWx0ZXJzIiwiZmlsdHJvc0FjdGl2b3MiLCJjb25jYXQiLCJjb21wcmVzb3JBY3Rpdm8iLCJ1bHRpbW9GaWx0cm8iLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImVudHJpZXMiLCJfc3RlcCIsIl9zdGVwJHZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJlcnIiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=