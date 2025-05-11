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
    var filtro, context, source, _context, _compressor, compressor;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          filtro = null;
          _context2.t0 = msg.type;
          _context2.next = _context2.t0 === "actualizar-filtro-dinamico" ? 4 : _context2.t0 === "eliminar-filtro-dinamico" ? 21 : _context2.t0 === "ajustar-compresor" ? 27 : 36;
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
          context = contexts.get(msg.tabId);
          if (sources.has(msg.tabId)) {
            _context2.next = 13;
            break;
          }
          console.error("[offscreen] MediaStreamSource no inicializado");
          alert("[offscreen] MediaStreamSource no inicializado");
          return _context2.abrupt("return");
        case 13:
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
          return _context2.abrupt("break", 37);
        case 21:
          if (filtrosDinamicos.has(msg.tabId)) {
            _context2.next = 24;
            break;
          }
          filtrosDinamicos.set(msg.tabId, new Map());
          return _context2.abrupt("return");
        case 24:
          filtro = filtrosDinamicos.get(msg.tabId).get(msg.filtroId);
          if (filtro) {
            filtro.node.disconnect();
            filtrosDinamicos.get(msg.tabId)["delete"](msg.filtroId);
            reconectarCadena(msg.tabId);
          }
          return _context2.abrupt("break", 37);
        case 27:
          if (contexts.has(msg.tabId)) {
            _context2.next = 30;
            break;
          }
          console.error("[offscreen] AudioContext no inicializado");
          return _context2.abrupt("return");
        case 30:
          // Si el compresor no existe, crearlo
          if (!compressors.has(msg.tabId)) {
            _context = contexts.get(msg.tabId);
            _compressor = _context.createDynamicsCompressor();
            compressors.set(msg.tabId, _compressor);
          }

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
          return _context2.abrupt("break", 37);
        case 36:
          return _context2.abrupt("break", 37);
        case 37:
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
    var media, context, source, volume, compressor, newFiltros, f, volumeNode, _f, _context3, _f2, _f3, _volume, _media;
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
            _context4.next = 46;
            break;
          }
          if (!medias.has(msg.tabId)) {
            _context4.next = 10;
            break;
          }
          console.log("[ERROR] Tab already capturing audio");
          return _context4.abrupt("return");
        case 10:
          _context4.next = 12;
          return navigator.mediaDevices.getUserMedia({
            audio: {
              mandatory: {
                chromeMediaSource: "tab",
                chromeMediaSourceId: msg.streamId
              }
            }
          });
        case 12:
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
        case 46:
          if (!(msg.type === "ajustar-volumen")) {
            _context4.next = 52;
            break;
          }
          if (contexts.has(msg.tabId)) {
            _context4.next = 50;
            break;
          }
          console.log("[ERROR] No hay contexto de audio para ajustar el volumen");
          return _context4.abrupt("return");
        case 50:
          volumeNode = sources.get(msg.tabId + "_volume");
          if (volumeNode) {
            volumeNode.gain.value = msg.level;
          } else {
            console.log("[ERROR] No se encontró el nodo de volumen");
          }
        case 52:
          if (!(msg.type === "ajustar-filtro")) {
            _context4.next = 75;
            break;
          }
          _f = staticFilters.get(msg.tabId);
          if (_f) {
            _context4.next = 56;
            break;
          }
          return _context4.abrupt("return");
        case 56:
          _context4.t0 = msg.banda;
          _context4.next = _context4.t0 === "volumen" ? 59 : _context4.t0 === "sub" ? 61 : _context4.t0 === "bass" ? 63 : _context4.t0 === "lowMid" ? 65 : _context4.t0 === "mid" ? 67 : _context4.t0 === "highMid" ? 69 : _context4.t0 === "high" ? 71 : _context4.t0 === "air" ? 73 : 75;
          break;
        case 59:
          _f.volume.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 61:
          _f.sub.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 63:
          _f.bass.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 65:
          _f.lowMid.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 67:
          _f.mid.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 69:
          _f.highMid.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 71:
          _f.high.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 73:
          _f.air.gain.value = msg.valor;
          return _context4.abrupt("break", 75);
        case 75:
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
        case 76:
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
  post_viz.get(tabId).connect(context.destination);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlvQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3FHLEtBQUssS0FBSyxTQUFTLEVBQUU7VUFDMUNyRyxPQUFPLENBQUNzRyxLQUFLLENBQUMsQ0FBQztRQUNqQjtNQUNGLENBQUMsQ0FBQyxPQUFPek8sQ0FBQyxFQUFFO1FBQ1Y2SSxPQUFPLENBQUNDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRUYsS0FBSyxFQUFFNUksQ0FBQyxDQUFDO01BQ3ZFO0lBQ0Y7O0lBRUE7RUFBQSxTQUFBd1AsR0FBQTtJQUFBTixTQUFBLENBQUFsUCxDQUFBLENBQUF3UCxHQUFBO0VBQUE7SUFBQU4sU0FBQSxDQUFBak4sQ0FBQTtFQUFBO0VBQ0EyRSxnQkFBZ0IsQ0FBQzZJLEtBQUssQ0FBQyxDQUFDO0VBQ3hCM0ksUUFBUSxDQUFDMkksS0FBSyxDQUFDLENBQUM7RUFDaEIxSSxNQUFNLENBQUMwSSxLQUFLLENBQUMsQ0FBQztFQUNkekksT0FBTyxDQUFDeUksS0FBSyxDQUFDLENBQUM7RUFDZnZJLEtBQUssQ0FBQ3VJLEtBQUssQ0FBQyxDQUFDO0VBQ2J0SSxPQUFPLENBQUNzSSxLQUFLLENBQUMsQ0FBQztFQUNmckksT0FBTyxDQUFDcUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pCcEksUUFBUSxDQUFDb0ksS0FBSyxDQUFDLENBQUM7RUFDaEJuSSxhQUFhLENBQUNtSSxLQUFLLENBQUMsQ0FBQztFQUNyQmxJLFdBQVcsQ0FBQ2tJLEtBQUssQ0FBQyxDQUFDO0VBQ25CakksZ0JBQWdCLENBQUNpSSxLQUFLLENBQUMsQ0FBQztFQUV4QjVHLE9BQU8sQ0FBQzhCLEdBQUcsQ0FBQyx3RUFBd0UsQ0FBQztBQUN2RixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vLi9zcmMvb2Zmc2NyZWVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpbHRyb3NEaW5hbWljb3MgPSBuZXcgTWFwKCk7XG5jb25zdCBjb250ZXh0cyA9IG5ldyBNYXAoKTtcbmNvbnN0IG1lZGlhcyA9IG5ldyBNYXAoKTtcbmNvbnN0IHNvdXJjZXMgPSBuZXcgTWFwKCk7XG5sZXQgcG9wdXBQb3J0OiBjaHJvbWUucnVudGltZS5Qb3J0IHwgbnVsbCA9IG51bGw7XG5sZXQgbG9vcHMgPSBuZXcgTWFwKCk7XG5jb25zdCBwcmVfdml6ID0gbmV3IE1hcCgpO1xuY29uc3QgbWlkX3ZpeiA9IG5ldyBNYXAoKTsgLy8gTnVldm8gYW5hbGl6YWRvciBwYXJhIHZpc3VhbGl6YXIgYW50ZXMgZGVsIGNvbXByZXNvclxuY29uc3QgcG9zdF92aXogPSBuZXcgTWFwKCk7XG5jb25zdCBzdGF0aWNGaWx0ZXJzID0gbmV3IE1hcCgpO1xuY29uc3QgY29tcHJlc3NvcnMgPSBuZXcgTWFwKCk7IC8vIE5vZG9zIGRlIGNvbXByZXNvclxuY29uc3QgY29tcHJlc3NvclN0YXRlcyA9IG5ldyBNYXAoKTsgLy8gRXN0YWRvIGRlIGFjdGl2YWNpw7NuIGRlbCBjb21wcmVzb3Jcbi8vIGNvbnN0IGJhbmRhc19maWx0cm9zID0gW1wic3ViXCIsIFwiYmFzc1wiLCBcImxvd01pZFwiLCBcIm1pZFwiLCBcImhpZ2hNaWRcIiwgXCJoaWdoXCIsIFwiYWlyXCJdO1xuY29uc3Qgc3RhdGljRmlsdGVyaW5nID0gZmFsc2U7XG5sZXQgb2Zmc2NyZWVuSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLy8gRGVmaW5lIENocm9tZS1zcGVjaWZpYyBtZWRpYSBjb25zdHJhaW50cyBpbnRlcmZhY2VcbnR5cGUgQ2hyb21lTWVkaWFUcmFja0NvbnN0cmFpbnRzID0gTWVkaWFUcmFja0NvbnN0cmFpbnRzICYge1xuICBtYW5kYXRvcnk6IHtcbiAgICBjaHJvbWVNZWRpYVNvdXJjZTogc3RyaW5nO1xuICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IHN0cmluZztcbiAgfTtcbn1cblxudHlwZSBEaW5hbXljRmlsdGVyID0ge1xuICBub2RlOiBCaXF1YWRGaWx0ZXJOb2RlO1xuICBieXBhc3M6IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG59O1xuXG4vLyDwn46nIG9mZnNjcmVlbi5qcyDigJQgZ2VzdGnDs24gZGUgZmlsdHJvcyBkaW7DoW1pY29zIGRlIGVjdWFsaXphY2nDs24g8J+Om++4j1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1zZykgPT4ge1xuICBsZXQgZmlsdHJvID0gbnVsbDtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgXCJhY3R1YWxpemFyLWZpbHRyby1kaW5hbWljb1wiOlxuICAgICAgaWYgKCFjb250ZXh0cy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW29mZnNjcmVlbl0gQXVkaW9Db250ZXh0IG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgYWxlcnQoXCJbb2Zmc2NyZWVuXSBBdWRpb0NvbnRleHQgbm8gaW5pY2lhbGl6YWRvXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZXh0ID0gY29udGV4dHMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICBpZiAoIXNvdXJjZXMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltvZmZzY3JlZW5dIE1lZGlhU3RyZWFtU291cmNlIG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgYWxlcnQoXCJbb2Zmc2NyZWVuXSBNZWRpYVN0cmVhbVNvdXJjZSBubyBpbmljaWFsaXphZG9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuZ2V0KG1zZy50YWJJZCk7XG5cbiAgICAgIGlmICghZmlsdHJvc0RpbmFtaWNvcy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICBmaWx0cm9zRGluYW1pY29zLnNldChtc2cudGFiSWQsIG5ldyBNYXAoKSk7XG4gICAgICB9XG4gICAgICBmaWx0cm8gPSBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLmdldChtc2cuZmlsdHJvSWQpO1xuICAgICAgaWYgKCFmaWx0cm8pIHtcbiAgICAgICAgZmlsdHJvID0ge1xuICAgICAgICAgIG5vZGU6IGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCksXG4gICAgICAgICAgYnlwYXNzOiBtc2cuYnlwYXNzIHx8IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGZpbHRyby5ub2RlLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgICAgICAgc291cmNlLmNvbm5lY3QoZmlsdHJvLm5vZGUpO1xuICAgICAgICBmaWx0cm8ubm9kZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLnNldChtc2cuZmlsdHJvSWQsIGZpbHRybyk7XG4gICAgICAgIHJlY29uZWN0YXJDYWRlbmEobXNnLnRhYklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFjdHVhbGl6YXIgZWwgZXN0YWRvIGRlIGJ5cGFzc1xuICAgICAgICBmaWx0cm8uYnlwYXNzID0gbXNnLmJ5cGFzcztcbiAgICAgIH1cblxuICAgICAgZmlsdHJvLm5vZGUuZnJlcXVlbmN5LnZhbHVlID0gbXNnLmZyZXE7XG4gICAgICBmaWx0cm8ubm9kZS5RLnZhbHVlID0gbXNnLnE7XG4gICAgICBmaWx0cm8ubm9kZS5nYWluLnZhbHVlID0gZmlsdHJvLmJ5cGFzcyA/IDAgOiBtc2cuZ2FpbjsgLy8gU2kgZXN0w6EgZW4gYnlwYXNzLCBsYSBnYW5hbmNpYSBlcyAwXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZWxpbWluYXItZmlsdHJvLWRpbmFtaWNvXCI6XG4gICAgICBpZiAoIWZpbHRyb3NEaW5hbWljb3MuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5zZXQobXNnLnRhYklkLCBuZXcgTWFwKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZpbHRybyA9IGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuZ2V0KG1zZy5maWx0cm9JZCk7XG4gICAgICBpZiAoZmlsdHJvKSB7XG4gICAgICAgIGZpbHRyby5ub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5kZWxldGUobXNnLmZpbHRyb0lkKTtcbiAgICAgICAgcmVjb25lY3RhckNhZGVuYShtc2cudGFiSWQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImFqdXN0YXItY29tcHJlc29yXCI6XG4gICAgICBpZiAoIWNvbnRleHRzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2Zmc2NyZWVuXSBBdWRpb0NvbnRleHQgbm8gaW5pY2lhbGl6YWRvXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFNpIGVsIGNvbXByZXNvciBubyBleGlzdGUsIGNyZWFybG9cbiAgICAgIGlmICghY29tcHJlc3NvcnMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNvbnRleHRzLmdldChtc2cudGFiSWQpO1xuICAgICAgICBjb25zdCBjb21wcmVzc29yID0gY29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgICAgICAgY29tcHJlc3NvcnMuc2V0KG1zZy50YWJJZCwgY29tcHJlc3Nvcik7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEd1YXJkYXIgZWwgZXN0YWRvIGRlIGFjdGl2YWNpw7NuXG4gICAgICBjb21wcmVzc29yU3RhdGVzLnNldChtc2cudGFiSWQsIG1zZy5hY3Rpdm8pO1xuICAgICAgXG4gICAgICAvLyBBY3R1YWxpemFyIHBhcsOhbWV0cm9zIGRlbCBjb21wcmVzb3JcbiAgICAgIGNvbnN0IGNvbXByZXNzb3IgPSBjb21wcmVzc29ycy5nZXQobXNnLnRhYklkKTtcbiAgICAgIGlmIChtc2cucGFyYW1zKSB7XG4gICAgICAgIGlmIChtc2cucGFyYW1zLnRocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLnRocmVzaG9sZC52YWx1ZSA9IG1zZy5wYXJhbXMudGhyZXNob2xkO1xuICAgICAgICBpZiAobXNnLnBhcmFtcy5yYXRpbyAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLnJhdGlvLnZhbHVlID0gbXNnLnBhcmFtcy5yYXRpbztcbiAgICAgICAgaWYgKG1zZy5wYXJhbXMua25lZSAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLmtuZWUudmFsdWUgPSBtc2cucGFyYW1zLmtuZWU7XG4gICAgICAgIGlmIChtc2cucGFyYW1zLmF0dGFjayAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLmF0dGFjay52YWx1ZSA9IG1zZy5wYXJhbXMuYXR0YWNrO1xuICAgICAgICBpZiAobXNnLnBhcmFtcy5yZWxlYXNlICE9PSB1bmRlZmluZWQpIGNvbXByZXNzb3IucmVsZWFzZS52YWx1ZSA9IG1zZy5wYXJhbXMucmVsZWFzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gUmVjb25lY3RhciBsYSBjYWRlbmEgZGUgYXVkaW8gcGFyYSBhcGxpY2FyIGxvcyBjYW1iaW9zXG4gICAgICByZWNvbmVjdGFyQ2FkZW5hKG1zZy50YWJJZCk7XG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICBpZiAocG9ydC5uYW1lID09PSBcInBvcHVwLXZpc3VhbGl6ZXJcIikge1xuICAgIHBvcHVwUG9ydCA9IHBvcnQ7XG4gICAgY29uc29sZS5sb2coXCJbT0ZGU0NSRUVOXSBDb25lY3RhZG8gYWwgcG9wdXAg8J+lsFwiKTtcblxuXG4gICAgLy8gcG9ydC5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtc3RyZWFtXCIgfSk7XG5cbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBwb3B1cFBvcnQgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coXCJbT0ZGU0NSRUVOXSBQb3B1cCBjZXJyYWRvIPCfmKJcIik7XG4gICAgfSk7XG5cbiAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnKSA9PiB7XG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydC1zdHJlYW1cIjpcbiAgICAgICAgICBpZiAobWVkaWFzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJnaXZlLW1lLXZpelwiOlxuICAgICAgICAgIGlmICghcHJlX3Zpei5oYXMobXNnLnRhYklkKSB8fCAhbWlkX3Zpei5oYXMobXNnLnRhYklkKSB8fCAhcG9zdF92aXouaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBwcmVfdml6LCBtaWRfdml6IG8gcG9zdF92aXogbm8gaW5pY2lhbGl6YWRvc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSB0YWJJZDogXCIgKyBtc2cudGFiSWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIHByZV92aXo6IFwiICsgcHJlX3Zpeik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gbWlkX3ZpejogXCIgKyBtaWRfdml6KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBwb3N0X3ZpejogXCIgKyBwb3N0X3Zpeik7XG4gICAgICAgICAgICBhbGVydChcIltvZmZzY3JlZW5dIE5vIHNlIHB1ZWRlIGNhcHR1cmFyIGVsIGF1ZGlvIGVuIGVzdGUgbW9tZW50by4gSW50ZW50YSByZWNhcmdhciBsYSBww6FnaW5hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBVc2FyIEZsb2F0MzJBcnJheSBwYXJhIG9idGVuZXIgdmFsb3JlcyBlbiBkQlxuICAgICAgICAgIGNvbnN0IHByZV9iaW5zID0gbmV3IEZsb2F0MzJBcnJheShwcmVfdml6LmdldChtc2cudGFiSWQpLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICBwcmVfdml6LmdldChtc2cudGFiSWQpLmdldEZsb2F0RnJlcXVlbmN5RGF0YShwcmVfYmlucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbWlkX2JpbnMgPSBuZXcgRmxvYXQzMkFycmF5KG1pZF92aXouZ2V0KG1zZy50YWJJZCkuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICAgIG1pZF92aXouZ2V0KG1zZy50YWJJZCkuZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKG1pZF9iaW5zKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBwb3N0X2JpbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBvc3Rfdml6LmdldChtc2cudGFiSWQpLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICBwb3N0X3Zpei5nZXQobXNnLnRhYklkKS5nZXRGbG9hdEZyZXF1ZW5jeURhdGEocG9zdF9iaW5zKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAocG9wdXBQb3J0KSB7XG4gICAgICAgICAgICBwb3B1cFBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBcInZpc3VhbGl6ZXItZGF0YVwiLFxuICAgICAgICAgICAgICBkYXRhOiB7IFxuICAgICAgICAgICAgICAgIHByZTogQXJyYXkuZnJvbShwcmVfYmlucyksIFxuICAgICAgICAgICAgICAgIG1pZDogQXJyYXkuZnJvbShtaWRfYmlucyksXG4gICAgICAgICAgICAgICAgcG9zdDogQXJyYXkuZnJvbShwb3N0X2JpbnMpLFxuICAgICAgICAgICAgICAgIG1pbkRlY2liZWxzOiBwcmVfdml6LmdldChtc2cudGFiSWQpLm1pbkRlY2liZWxzLFxuICAgICAgICAgICAgICAgIG1heERlY2liZWxzOiBwcmVfdml6LmdldChtc2cudGFiSWQpLm1heERlY2liZWxzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gaXNzdWUgZW52aWFuZG8gbWVuc2FqZVwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobXNnKSA9PiB7XG4gIGlmIChtc2cudGFyZ2V0ICE9PSBcIm9mZnNjcmVlblwiKSByZXR1cm47XG5cbiAgaWYgKG1zZy50eXBlID09PSBcIm9mZnNjcmVlbi13YWtldXBcIikge1xuICAgIGlmICghb2Zmc2NyZWVuSW5pdGlhbGl6ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIFByaW1lcmEgaW5pY2lhbGl6YWNpw7NuIGRlbCBvZmZzY3JlZW4gLSBMaW1waWFuZG8gZGF0b3NcIik7XG4gICAgICBjbGVhckFsbERhdGEoKTtcbiAgICAgIG9mZnNjcmVlbkluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcIm9mZnNjcmVlbi1hbGl2ZVwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09IFwic3RhcnQtcHJvY2Vzc2luZ1wiKSB7XG4gICAgaWYgKG1lZGlhcy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIFRhYiBhbHJlYWR5IGNhcHR1cmluZyBhdWRpb1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWVkaWEgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICBhdWRpbzoge1xuICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogXCJ0YWJcIixcbiAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBtc2cuc3RyZWFtSWQsXG4gICAgICAgIH0sXG4gICAgICB9IGFzIENocm9tZU1lZGlhVHJhY2tDb25zdHJhaW50cyxcbiAgICB9KTtcbiAgICBtZWRpYXMuc2V0KG1zZy50YWJJZCwgbWVkaWEpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBjb250ZXh0cy5zZXQobXNnLnRhYklkLCBjb250ZXh0KTtcbiAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgICBzb3VyY2VzLnNldChtc2cudGFiSWQsIHNvdXJjZSk7XG4gICAgY29uc29sZS5sb2coXCJbSU5GT10gQXVkaW9Db250ZXh0IGluaWNpYWxpemFkbyBlbiB0YWIgXCIgKyBtc2cudGFiSWQpO1xuXG5cbiAgICBwcmVfdml6LnNldChtc2cudGFiSWQsIG5ldyBBbmFseXNlck5vZGUoY29udGV4dCwge1xuICAgICAgZmZ0U2l6ZTogMjA0OCxcbiAgICAgIG1heERlY2liZWxzOiAtMjUsXG4gICAgICBtaW5EZWNpYmVsczogLTEwMCxcbiAgICAgIHNtb290aGluZ1RpbWVDb25zdGFudDogMC40LFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHZvbHVtZSA9IGNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHZvbHVtZS5nYWluLnZhbHVlID0gbXNnLmxldmVsO1xuICAgIHNvdXJjZXMuc2V0KG1zZy50YWJJZCArIFwiX3ZvbHVtZVwiLCB2b2x1bWUpO1xuXG4gICAgLy8gQ3JlYXIgYW5hbGl6YWRvciBpbnRlcm1lZGlvIChhbnRlcyBkZWwgY29tcHJlc29yKVxuICAgIG1pZF92aXouc2V0KG1zZy50YWJJZCwgbmV3IEFuYWx5c2VyTm9kZShjb250ZXh0LCB7XG4gICAgICBmZnRTaXplOiAyMDQ4LFxuICAgICAgbWF4RGVjaWJlbHM6IC0yNSxcbiAgICAgIG1pbkRlY2liZWxzOiAtMTAwLFxuICAgICAgc21vb3RoaW5nVGltZUNvbnN0YW50OiAwLjQsXG4gICAgfSkpO1xuXG4gICAgcG9zdF92aXouc2V0KG1zZy50YWJJZCwgbmV3IEFuYWx5c2VyTm9kZShjb250ZXh0LCB7XG4gICAgICBmZnRTaXplOiAyMDQ4LFxuICAgICAgbWF4RGVjaWJlbHM6IC0yNSxcbiAgICAgIG1pbkRlY2liZWxzOiAtMTAwLFxuICAgICAgc21vb3RoaW5nVGltZUNvbnN0YW50OiAwLjQsXG4gICAgfSkpO1xuICAgIHNvdXJjZS5jb25uZWN0KHZvbHVtZSk7XG4gICAgdm9sdW1lLmNvbm5lY3QocHJlX3Zpei5nZXQobXNnLnRhYklkKSk7XG4gICAgcHJlX3Zpei5nZXQobXNnLnRhYklkKS5jb25uZWN0KG1pZF92aXouZ2V0KG1zZy50YWJJZCkpO1xuICAgIG1pZF92aXouZ2V0KG1zZy50YWJJZCkuY29ubmVjdChwb3N0X3Zpei5nZXQobXNnLnRhYklkKSk7XG4gICAgcG9zdF92aXouZ2V0KG1zZy50YWJJZCkuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBBdWRpb0NvbnRleHQgaW5pY2lhbGl6YWRvXCIpXG4gICAgLy8gY29uc29sZS5sb2coXCJzb3VyY2U6XCIpXG5cbiAgICBpZiAoc3RhdGljRmlsdGVyaW5nKVxuICAgICAgc2V0dXBFUShjb250ZXh0LCBtc2cpO1xuXG4gICAgLy8gQ3JlYXIgbm9kbyBkZSBjb21wcmVzb3JcbiAgICBjb25zdCBjb21wcmVzc29yID0gY29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgICBjb21wcmVzc29yLnRocmVzaG9sZC52YWx1ZSA9IC0yNDtcbiAgICBjb21wcmVzc29yLnJhdGlvLnZhbHVlID0gNDtcbiAgICBjb21wcmVzc29yLmtuZWUudmFsdWUgPSAzMDtcbiAgICBjb21wcmVzc29yLmF0dGFjay52YWx1ZSA9IDAuMDAzO1xuICAgIGNvbXByZXNzb3IucmVsZWFzZS52YWx1ZSA9IDAuMjU7XG4gICAgY29tcHJlc3NvcnMuc2V0KG1zZy50YWJJZCwgY29tcHJlc3Nvcik7XG4gICAgY29tcHJlc3NvclN0YXRlcy5zZXQobXNnLnRhYklkLCBmYWxzZSk7IC8vIEluaWNpYWxtZW50ZSBkZXNhY3RpdmFkb1xuXG4gICAgaWYgKHBvcHVwUG9ydCkge1xuICAgICAgcG9wdXBQb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiB9KTtcbiAgICB9XG5cblxuICAgIGNvbnN0IG5ld0ZpbHRyb3M6IE1hcDxzdHJpbmcsIERpbmFteWNGaWx0ZXI+ID0gbmV3IE1hcCgpO1xuICAgIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyhtc2cudGFiSWQpICYmIGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuc2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IGY6IERpbmFteWNGaWx0ZXJbXSA9IEFycmF5LmZyb20oZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS52YWx1ZXMoKSk7XG4gICAgICBmLmZvckVhY2goKGZpbHRybykgPT4ge1xuICAgICAgICBmaWx0cm8ubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IG5ld0ZpbHRybzogRGluYW15Y0ZpbHRlciA9IHtcbiAgICAgICAgICBub2RlOiBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpLFxuICAgICAgICAgIGJ5cGFzczogZmlsdHJvLmJ5cGFzcyxcbiAgICAgICAgICBpZDogZmlsdHJvLmlkXG4gICAgICAgIH07XG4gICAgICAgIG5ld0ZpbHRyby5ub2RlLnR5cGUgPSBmaWx0cm8ubm9kZS50eXBlO1xuICAgICAgICBuZXdGaWx0cm8ubm9kZS5mcmVxdWVuY3kudmFsdWUgPSBmaWx0cm8ubm9kZS5mcmVxdWVuY3kudmFsdWU7XG4gICAgICAgIG5ld0ZpbHRyby5ub2RlLlEudmFsdWUgPSBmaWx0cm8ubm9kZS5RLnZhbHVlO1xuICAgICAgICBuZXdGaWx0cm8ubm9kZS5nYWluLnZhbHVlID0gZmlsdHJvLm5vZGUuZ2Fpbi52YWx1ZTtcbiAgICAgICAgbmV3RmlsdHJvcy5zZXQoZmlsdHJvLmlkLCBuZXdGaWx0cm8pO1xuICAgICAgICBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLmRlbGV0ZShmaWx0cm8uaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRyb3NEaW5hbWljb3Muc2V0KG1zZy50YWJJZCwgbmV3RmlsdHJvcyk7XG4gICAgY29uc29sZS5sb2coXCJbSU5GT10gRmlsdHJvcyBkaW7DoW1pY29zIGluaWNpYWxpemFkb3NcIik7XG4gICAgcmVjb25lY3RhckNhZGVuYShtc2cudGFiSWQpO1xuICB9XG5cbiAgaWYgKG1zZy50eXBlID09PSBcImFqdXN0YXItdm9sdW1lblwiKSB7XG4gICAgaWYgKCFjb250ZXh0cy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIE5vIGhheSBjb250ZXh0byBkZSBhdWRpbyBwYXJhIGFqdXN0YXIgZWwgdm9sdW1lblwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgdm9sdW1lTm9kZSA9IHNvdXJjZXMuZ2V0KG1zZy50YWJJZCArIFwiX3ZvbHVtZVwiKTtcbiAgICBpZiAodm9sdW1lTm9kZSkge1xuICAgICAgdm9sdW1lTm9kZS5nYWluLnZhbHVlID0gbXNnLmxldmVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gTm8gc2UgZW5jb250csOzIGVsIG5vZG8gZGUgdm9sdW1lblwiKTtcbiAgICB9XG4gIH1cblxuICBpZiAobXNnLnR5cGUgPT09IFwiYWp1c3Rhci1maWx0cm9cIikge1xuICAgIGNvbnN0IGYgPSBzdGF0aWNGaWx0ZXJzLmdldChtc2cudGFiSWQpO1xuICAgIGlmICghZikgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChtc2cuYmFuZGEpIHtcbiAgICAgIGNhc2UgXCJ2b2x1bWVuXCI6XG4gICAgICAgIGYudm9sdW1lLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN1YlwiOlxuICAgICAgICBmLnN1Yi5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJiYXNzXCI6XG4gICAgICAgIGYuYmFzcy5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsb3dNaWRcIjpcbiAgICAgICAgZi5sb3dNaWQuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWlkXCI6XG4gICAgICAgIGYubWlkLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hNaWRcIjpcbiAgICAgICAgZi5oaWdoTWlkLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgZi5oaWdoLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImFpclwiOlxuICAgICAgICBmLmFpci5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKG1zZy50eXBlID09PSBcInN0b3AtcHJvY2Vzc2luZ1wiKSB7XG4gICAgaWYgKGNvbnRleHRzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICBsZXQgY29udGV4dCA9IGNvbnRleHRzLmdldChtc2cudGFiSWQpO1xuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gQ2xvc2luZyBBdWRpb0NvbnRleHRcIik7XG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZSgpOyAvLyBjaWVycmEgZWwgQXVkaW9Db250ZXh0XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0lORk9dIEF1ZGlvQ29udGV4dCBjZXJyYWRvIGVuIHRhYiBcIiArIG1zZy50YWJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltJbmZvXSBBdWRpb0NvbnRleHQgYWxyZWFkeSBjbG9zZWQgIVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRpY0ZpbHRlcnMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc3QgZiA6IE1hcDxzdHJpbmcsIEJpcXVhZEZpbHRlck5vZGU+ID0gc3RhdGljRmlsdGVycy5nZXQobXNnLnRhYklkKTtcbiAgICAgICAgZi5mb3JFYWNoKChmaWx0cm8pID0+IHtcbiAgICAgICAgICBmaWx0cm8uZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRyb3NEaW5hbWljb3MuaGFzKG1zZy50YWJJZCkgJiYgZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5zaXplID4gMCkge1xuICAgICAgICBjb25zdCBmOiBNYXA8c3RyaW5nLCBEaW5hbXljRmlsdGVyPiA9IGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCk7XG4gICAgICAgIGYuZm9yRWFjaCgoZmlsdHJvKSA9PiB7XG4gICAgICAgICAgZmlsdHJvLm5vZGUuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIC8vIGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuZGVsZXRlKGZpbHRyby5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXNjb25lY3RhciBlbCBjb21wcmVzb3Igc2kgZXhpc3RlXG4gICAgICBpZiAoY29tcHJlc3NvcnMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29tcHJlc3NvcnMuZ2V0KG1zZy50YWJJZCkuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2b2x1bWUgPSBzb3VyY2VzLmdldChtc2cudGFiSWQgKyBcIl92b2x1bWVcIik7XG4gICAgICBpZiAodm9sdW1lKSB7XG4gICAgICAgIHZvbHVtZS5kaXNjb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lZGlhID0gbWVkaWFzLmdldChtc2cudGFiSWQpO1xuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIG1lZGlhLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrOiBNZWRpYVN0cmVhbVRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgbWVkaWFzLmRlbGV0ZShtc2cudGFiSWQpO1xuICAgIH1cbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gc2V0dXBFUShjb250ZXh0OiBBdWRpb0NvbnRleHQsIG1zZzogeyB0YWJJZDogbnVtYmVyLCBzdWI6IG51bWJlciwgYmFzczogbnVtYmVyLCBsb3dNaWQ6IG51bWJlciwgbWlkOiBudW1iZXIsIGhpZ2hNaWQ6IG51bWJlciwgaGlnaDogbnVtYmVyLCBhaXI6IG51bWJlciB9KSB7XG4gIHN0YXRpY0ZpbHRlcnMuc2V0KG1zZy50YWJJZCwgbmV3IE1hcCgpKTtcbiAgY29uc3QgZmlsdGVycyA9IHN0YXRpY0ZpbHRlcnMuZ2V0KG1zZy50YWJJZCk7XG5cbiAgZmlsdGVycy5zZXQoXCJzdWJcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwic3ViXCIpLnR5cGUgPSBcImxvd3NoZWxmXCI7XG4gIGZpbHRlcnMuZ2V0KFwic3ViXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDYwO1xuICBmaWx0ZXJzLmdldChcInN1YlwiKS5nYWluLnZhbHVlID0gbXNnLnN1YjtcblxuICBmaWx0ZXJzLnNldChcImJhc3NcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwiYmFzc1wiKS50eXBlID0gXCJwZWFraW5nXCI7XG4gIGZpbHRlcnMuZ2V0KFwiYmFzc1wiKS5mcmVxdWVuY3kudmFsdWUgPSAxNjA7XG4gIGZpbHRlcnMuZ2V0KFwiYmFzc1wiKS5RLnZhbHVlID0gMTtcbiAgZmlsdGVycy5nZXQoXCJiYXNzXCIpLmdhaW4udmFsdWUgPSBtc2cuYmFzcztcblxuICBmaWx0ZXJzLnNldChcImxvd01pZFwiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJsb3dNaWRcIikudHlwZSA9IFwicGVha2luZ1wiO1xuICBmaWx0ZXJzLmdldChcImxvd01pZFwiKS5mcmVxdWVuY3kudmFsdWUgPSA0MDA7XG4gIGZpbHRlcnMuZ2V0KFwibG93TWlkXCIpLlEudmFsdWUgPSAxO1xuICBmaWx0ZXJzLmdldChcImxvd01pZFwiKS5nYWluLnZhbHVlID0gbXNnLmxvd01pZDtcblxuICBmaWx0ZXJzLnNldChcIm1pZFwiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJtaWRcIikudHlwZSA9IFwicGVha2luZ1wiO1xuICBmaWx0ZXJzLmdldChcIm1pZFwiKS5mcmVxdWVuY3kudmFsdWUgPSAxMDAwO1xuICBmaWx0ZXJzLmdldChcIm1pZFwiKS5RLnZhbHVlID0gMTtcbiAgZmlsdGVycy5nZXQoXCJtaWRcIikuZ2Fpbi52YWx1ZSA9IG1zZy5taWQ7XG5cbiAgZmlsdGVycy5zZXQoXCJoaWdoTWlkXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcImhpZ2hNaWRcIikudHlwZSA9IFwicGVha2luZ1wiO1xuICBmaWx0ZXJzLmdldChcImhpZ2hNaWRcIikuZnJlcXVlbmN5LnZhbHVlID0gMjUwMDtcbiAgZmlsdGVycy5nZXQoXCJoaWdoTWlkXCIpLlEudmFsdWUgPSAxO1xuICBmaWx0ZXJzLmdldChcImhpZ2hNaWRcIikuZ2Fpbi52YWx1ZSA9IG1zZy5oaWdoTWlkO1xuXG4gIGZpbHRlcnMuc2V0KFwiaGlnaFwiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJoaWdoXCIpLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgZmlsdGVycy5nZXQoXCJoaWdoXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDYwMDA7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaFwiKS5RLnZhbHVlID0gMTtcbiAgZmlsdGVycy5nZXQoXCJoaWdoXCIpLmdhaW4udmFsdWUgPSBtc2cuaGlnaDtcblxuICBmaWx0ZXJzLnNldChcImFpclwiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJhaXJcIikudHlwZSA9IFwiaGlnaHNoZWxmXCI7XG4gIGZpbHRlcnMuZ2V0KFwiYWlyXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDEwMDAwO1xuICBmaWx0ZXJzLmdldChcImFpclwiKS5nYWluLnZhbHVlID0gbXNnLmFpcjtcblxuXG4gIC8vIPCflJcgQ29uZWN0YXIgZmlsdHJvcyBlbiBjYWRlbmFcbiAgcHJlX3Zpei5nZXQobXNnLnRhYklkKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwic3ViXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJzdWJcIikuY29ubmVjdChmaWx0ZXJzLmdldChcImJhc3NcIikpO1xuICBmaWx0ZXJzLmdldChcImJhc3NcIikuY29ubmVjdChmaWx0ZXJzLmdldChcImxvd01pZFwiKSk7XG4gIGZpbHRlcnMuZ2V0KFwibG93TWlkXCIpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJtaWRcIikpO1xuICBmaWx0ZXJzLmdldChcIm1pZFwiKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwiaGlnaE1pZFwiKSk7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaE1pZFwiKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwiaGlnaFwiKSk7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaFwiKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwiYWlyXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJhaXJcIikuY29ubmVjdChtaWRfdml6LmdldChtc2cudGFiSWQpKTtcblxufVxuXG5mdW5jdGlvbiByZWNvbmVjdGFyQ2FkZW5hKHRhYklkOiBudW1iZXIpIHtcbiAgaWYgKCFjb250ZXh0cy5oYXModGFiSWQpIHx8ICFzb3VyY2VzLmhhcyh0YWJJZCkpIHtcbiAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gTm8gaGF5IGNvbnRleHRvIG8gZnVlbnRlIHBhcmEgcmVjb25lY3RhclwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gY29udGV4dHMuZ2V0KHRhYklkKTtcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5nZXQodGFiSWQpO1xuICBjb25zdCB2b2x1bWVOb2RlID0gc291cmNlcy5nZXQodGFiSWQgKyBcIl92b2x1bWVcIik7XG5cbiAgLy8gRGVzY29uZWN0YXIgdG9kb3MgbG9zIG5vZG9zXG4gIHNvdXJjZS5kaXNjb25uZWN0KCk7XG4gIGlmICh2b2x1bWVOb2RlKSB2b2x1bWVOb2RlLmRpc2Nvbm5lY3QoKTtcbiAgXG4gIGlmIChwcmVfdml6Lmhhcyh0YWJJZCkpIHByZV92aXouZ2V0KHRhYklkKS5kaXNjb25uZWN0KCk7XG4gIGlmIChtaWRfdml6Lmhhcyh0YWJJZCkpIG1pZF92aXouZ2V0KHRhYklkKS5kaXNjb25uZWN0KCk7XG4gIGlmIChwb3N0X3Zpei5oYXModGFiSWQpKSBwb3N0X3Zpei5nZXQodGFiSWQpLmRpc2Nvbm5lY3QoKTtcbiAgXG4gIC8vIERlc2NvbmVjdGFyIHRvZG9zIGxvcyBmaWx0cm9zXG4gIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyh0YWJJZCkpIHtcbiAgICBmaWx0cm9zRGluYW1pY29zLmdldCh0YWJJZCkuZm9yRWFjaCgoZmlsdHJvOiBEaW5hbXljRmlsdGVyKSA9PiB7XG4gICAgICBmaWx0cm8ubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8vIERlc2NvbmVjdGFyIGVsIGNvbXByZXNvciBzaSBleGlzdGVcbiAgaWYgKGNvbXByZXNzb3JzLmhhcyh0YWJJZCkpIHtcbiAgICBjb21wcmVzc29ycy5nZXQodGFiSWQpLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIC8vIENvbWVuemFyIGxhIGNhZGVuYSBjb24gbGEgZnVlbnRlIGNvbmVjdGFkYSBhbCB2b2x1bWVuLCBxdWUgbHVlZ28gc2UgY29uZWN0YSBhbCBwcmUtdmlzdWFsaXphZG9yXG4gIHNvdXJjZS5jb25uZWN0KHZvbHVtZU5vZGUpO1xuICB2b2x1bWVOb2RlLmNvbm5lY3QocHJlX3Zpei5nZXQodGFiSWQpKTtcbiAgXG4gIC8vIENyZWFyIHVuIGFycmF5IGNvbiBsb3MgZmlsdHJvcyBhY3Rpdm9zIChubyBlbiBieXBhc3MpXG4gIGNvbnN0IGZpbHRyb3NBY3Rpdm9zOiBCaXF1YWRGaWx0ZXJOb2RlW10gPSBbXTtcbiAgaWYgKGZpbHRyb3NEaW5hbWljb3MuaGFzKHRhYklkKSkge1xuICAgIGNvbnN0IGY6IERpbmFteWNGaWx0ZXJbXSA9IEFycmF5LmZyb20oZmlsdHJvc0RpbmFtaWNvcy5nZXQodGFiSWQpLnZhbHVlcygpKTtcbiAgICBmLmZvckVhY2goKGZpbHRybykgPT4ge1xuICAgICAgaWYgKCFmaWx0cm8uYnlwYXNzKSB7XG4gICAgICAgIGZpbHRyb3NBY3Rpdm9zLnB1c2goZmlsdHJvLm5vZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgW0lORk9dIEZpbHRybyAke2ZpbHRyby5pZH0gYcOxYWRpZG8gYSBsYSBjYWRlbmEgKG5vIGVzdMOhIGVuIGJ5cGFzcylgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbSU5GT10gRmlsdHJvICR7ZmlsdHJvLmlkfSBlbiBieXBhc3MgLSBubyBjb25lY3RhZG9gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgLy8gVmVyaWZpY2FyIHNpIGVsIGNvbXByZXNvciBlc3TDoSBhY3Rpdm9cbiAgY29uc3QgY29tcHJlc29yQWN0aXZvID0gY29tcHJlc3NvclN0YXRlcy5nZXQodGFiSWQpIHx8IGZhbHNlO1xuICBcbiAgLy8gU2kgbm8gaGF5IGZpbHRyb3MgYWN0aXZvc1xuICBpZiAoZmlsdHJvc0FjdGl2b3MubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGNvbXByZXNvckFjdGl2byAmJiBjb21wcmVzc29ycy5oYXModGFiSWQpKSB7XG4gICAgICAvLyBDb25lY3RhciBwcmVfdml6IC0+IG1pZF92aXogLT4gY29tcHJlc29yIC0+IHBvc3Rfdml6XG4gICAgICBwcmVfdml6LmdldCh0YWJJZCkuY29ubmVjdChtaWRfdml6LmdldCh0YWJJZCkpO1xuICAgICAgbWlkX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QoY29tcHJlc3NvcnMuZ2V0KHRhYklkKSk7XG4gICAgICBjb21wcmVzc29ycy5nZXQodGFiSWQpLmNvbm5lY3QocG9zdF92aXouZ2V0KHRhYklkKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBObyBoYXkgZmlsdHJvcyBhY3Rpdm9zLCBjb25lY3RhbmRvIGEgdHJhdsOpcyBkZWwgY29tcHJlc29yXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb25lY3RhciBwcmVfdml6IC0+IG1pZF92aXogLT4gcG9zdF92aXogKHNpbiBjb21wcmVzb3IpXG4gICAgICBwcmVfdml6LmdldCh0YWJJZCkuY29ubmVjdChtaWRfdml6LmdldCh0YWJJZCkpO1xuICAgICAgbWlkX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QocG9zdF92aXouZ2V0KHRhYklkKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBObyBoYXkgZmlsdHJvcyBhY3Rpdm9zIG5pIGNvbXByZXNvciBhY3Rpdm8sIGNhZGVuYSBkaXJlY3RhXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBIYXkgZmlsdHJvcyBhY3Rpdm9zXG4gICAgLy8gQ29uZWN0YXIgcHJlX3ZpeiBhbCBwcmltZXIgZmlsdHJvXG4gICAgcHJlX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QoZmlsdHJvc0FjdGl2b3NbMF0pO1xuICAgIFxuICAgIC8vIENvbmVjdGFyIGNhZGEgZmlsdHJvIGFsIHNpZ3VpZW50ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdHJvc0FjdGl2b3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBmaWx0cm9zQWN0aXZvc1tpXS5jb25uZWN0KGZpbHRyb3NBY3Rpdm9zW2kgKyAxXSk7XG4gICAgfVxuICAgIFxuICAgIC8vIMOabHRpbW8gbm9kbyBkZSBsYSBjYWRlbmEgZGUgZmlsdHJvc1xuICAgIGNvbnN0IHVsdGltb0ZpbHRybyA9IGZpbHRyb3NBY3Rpdm9zW2ZpbHRyb3NBY3Rpdm9zLmxlbmd0aCAtIDFdO1xuICAgIFxuICAgIC8vIENvbmVjdGFyIGVsIMO6bHRpbW8gZmlsdHJvIGFsIG1pZF92aXpcbiAgICB1bHRpbW9GaWx0cm8uY29ubmVjdChtaWRfdml6LmdldCh0YWJJZCkpO1xuICAgIFxuICAgIGlmIChjb21wcmVzb3JBY3Rpdm8gJiYgY29tcHJlc3NvcnMuaGFzKHRhYklkKSkge1xuICAgICAgLy8gQ29uZWN0YXIgbWlkX3ZpeiAtPiBjb21wcmVzb3IgLT4gcG9zdF92aXpcbiAgICAgIG1pZF92aXouZ2V0KHRhYklkKS5jb25uZWN0KGNvbXByZXNzb3JzLmdldCh0YWJJZCkpO1xuICAgICAgY29tcHJlc3NvcnMuZ2V0KHRhYklkKS5jb25uZWN0KHBvc3Rfdml6LmdldCh0YWJJZCkpO1xuICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBDYWRlbmEgY29uZWN0YWRhIGNvbiAke2ZpbHRyb3NBY3Rpdm9zLmxlbmd0aH0gZmlsdHJvcyB5IGNvbXByZXNvciBhY3Rpdm9gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29uZWN0YXIgbWlkX3ZpeiAtPiBwb3N0X3ZpeiAoc2luIGNvbXByZXNvcilcbiAgICAgIG1pZF92aXouZ2V0KHRhYklkKS5jb25uZWN0KHBvc3Rfdml6LmdldCh0YWJJZCkpO1xuICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBDYWRlbmEgY29uZWN0YWRhIGNvbiAke2ZpbHRyb3NBY3Rpdm9zLmxlbmd0aH0gZmlsdHJvcyBzaW4gY29tcHJlc29yYCk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBGaW5hbGl6YXIgbGEgY2FkZW5hIGNvbmVjdGFuZG8gZWwgcG9zdC12aXN1YWxpemFkb3IgYSBsYSBzYWxpZGFcbiAgcG9zdF92aXouZ2V0KHRhYklkKS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuICBcbiAgY29uc29sZS5sb2coXCJbSU5GT10gQ2FkZW5hIGRlIGF1ZGlvIHJlY29uZWN0YWRhXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhckFsbERhdGEoKSB7XG4gIGNvbnNvbGUubG9nKFwiW0lORk9dIExpbXBpYW5kbyB0b2RhcyBsYXMgZXN0cnVjdHVyYXMgZGUgZGF0b3MgZGVsIG9mZnNjcmVlblwiKTtcbiAgXG4gIC8vIERlc2NvbmVjdGFyIHkgbGltcGlhciB0b2RvcyBsb3Mgbm9kb3MgZGUgYXVkaW9cbiAgZm9yIChjb25zdCBbdGFiSWQsIGNvbnRleHRdIG9mIGNvbnRleHRzLmVudHJpZXMoKSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBEZXRlbmVyIHRvZG9zIGxvcyB0cmFja3MgZGUgYXVkaW9cbiAgICAgIGlmIChtZWRpYXMuaGFzKHRhYklkKSkge1xuICAgICAgICBjb25zdCBtZWRpYSA9IG1lZGlhcy5nZXQodGFiSWQpO1xuICAgICAgICBtZWRpYS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjazogTWVkaWFTdHJlYW1UcmFjaykgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2VycmFyIGVsIGNvbnRleHRvIGRlIGF1ZGlvXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgICAgY29udGV4dC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRVJST1JdIEVycm9yIGFsIGxpbXBpYXIgY29udGV4dG8gcGFyYSB0YWJcIiwgdGFiSWQsIGUpO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gTGltcGlhciB0b2RhcyBsYXMgZXN0cnVjdHVyYXMgZGUgZGF0b3NcbiAgZmlsdHJvc0RpbmFtaWNvcy5jbGVhcigpO1xuICBjb250ZXh0cy5jbGVhcigpO1xuICBtZWRpYXMuY2xlYXIoKTtcbiAgc291cmNlcy5jbGVhcigpO1xuICBsb29wcy5jbGVhcigpO1xuICBwcmVfdml6LmNsZWFyKCk7XG4gIG1pZF92aXouY2xlYXIoKTsgLy8gTGltcGlhciBlbCBudWV2byBhbmFsaXphZG9yXG4gIHBvc3Rfdml6LmNsZWFyKCk7XG4gIHN0YXRpY0ZpbHRlcnMuY2xlYXIoKTtcbiAgY29tcHJlc3NvcnMuY2xlYXIoKTtcbiAgY29tcHJlc3NvclN0YXRlcy5jbGVhcigpO1xuICBcbiAgY29uc29sZS5sb2coXCJbSU5GT10gVG9kYXMgbGFzIGVzdHJ1Y3R1cmFzIGRlIGRhdG9zIGRlbCBvZmZzY3JlZW4gaGFuIHNpZG8gbGltcGlhZGFzXCIpO1xufVxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJmaWx0cm9zRGluYW1pY29zIiwiTWFwIiwiY29udGV4dHMiLCJtZWRpYXMiLCJzb3VyY2VzIiwicG9wdXBQb3J0IiwibG9vcHMiLCJwcmVfdml6IiwibWlkX3ZpeiIsInBvc3Rfdml6Iiwic3RhdGljRmlsdGVycyIsImNvbXByZXNzb3JzIiwiY29tcHJlc3NvclN0YXRlcyIsInN0YXRpY0ZpbHRlcmluZyIsIm9mZnNjcmVlbkluaXRpYWxpemVkIiwiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiX3JlZiIsIl9jYWxsZWUiLCJtc2ciLCJmaWx0cm8iLCJjb250ZXh0Iiwic291cmNlIiwiX2NvbnRleHQiLCJfY29tcHJlc3NvciIsImNvbXByZXNzb3IiLCJfY2FsbGVlJCIsIl9jb250ZXh0MiIsInQwIiwiaGFzIiwidGFiSWQiLCJjb25zb2xlIiwiZXJyb3IiLCJhbGVydCIsImdldCIsInNldCIsImZpbHRyb0lkIiwibm9kZSIsImNyZWF0ZUJpcXVhZEZpbHRlciIsImJ5cGFzcyIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInJlY29uZWN0YXJDYWRlbmEiLCJmcmVxdWVuY3kiLCJmcmVxIiwiUSIsInEiLCJnYWluIiwiZGlzY29ubmVjdCIsImNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvciIsImFjdGl2byIsInBhcmFtcyIsInRocmVzaG9sZCIsInVuZGVmaW5lZCIsInJhdGlvIiwia25lZSIsImF0dGFjayIsInJlbGVhc2UiLCJfeCIsIm9uQ29ubmVjdCIsInBvcnQiLCJsb2ciLCJvbkRpc2Nvbm5lY3QiLCJwb3N0TWVzc2FnZSIsInByZV9iaW5zIiwiRmxvYXQzMkFycmF5IiwiZnJlcXVlbmN5QmluQ291bnQiLCJnZXRGbG9hdEZyZXF1ZW5jeURhdGEiLCJtaWRfYmlucyIsInBvc3RfYmlucyIsImRhdGEiLCJwcmUiLCJBcnJheSIsImZyb20iLCJtaWQiLCJwb3N0IiwibWluRGVjaWJlbHMiLCJtYXhEZWNpYmVscyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJtZWRpYSIsInZvbHVtZSIsIm5ld0ZpbHRyb3MiLCJ2b2x1bWVOb2RlIiwiX2YiLCJfY29udGV4dDMiLCJfZjIiLCJfZjMiLCJfdm9sdW1lIiwiX21lZGlhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQ0IiwidGFyZ2V0IiwiY2xlYXJBbGxEYXRhIiwic2VuZE1lc3NhZ2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsIm1hbmRhdG9yeSIsImNocm9tZU1lZGlhU291cmNlIiwiY2hyb21lTWVkaWFTb3VyY2VJZCIsInN0cmVhbUlkIiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJBbmFseXNlck5vZGUiLCJmZnRTaXplIiwic21vb3RoaW5nVGltZUNvbnN0YW50IiwiY3JlYXRlR2FpbiIsImxldmVsIiwic2V0dXBFUSIsInNpemUiLCJuZXdGaWx0cm8iLCJpZCIsImJhbmRhIiwidmFsb3IiLCJzdWIiLCJiYXNzIiwibG93TWlkIiwiaGlnaE1pZCIsImhpZ2giLCJhaXIiLCJzdGF0ZSIsImNsb3NlIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJfeDIiLCJmaWx0ZXJzIiwiZmlsdHJvc0FjdGl2b3MiLCJjb25jYXQiLCJjb21wcmVzb3JBY3Rpdm8iLCJ1bHRpbW9GaWx0cm8iLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImVudHJpZXMiLCJfc3RlcCIsIl9zdGVwJHZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJlcnIiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=