/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/offscreen.js ***!
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
                bypass: filtro.bypass
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
                _f3 = Array.from(filtrosDinamicos.get(msg.tabId).values());
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
    filtrosDinamicos.get(tabId).forEach(function (filtro, id) {
      if (!filtro.bypass) {
        filtrosActivos.push(filtro.node);
        console.log("[INFO] Filtro ".concat(id, " a\xF1adido a la cadena (no est\xE1 en bypass)"));
      } else {
        console.log("[INFO] Filtro ".concat(id, " en bypass - no conectado"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUFDLENBQUMsT0FBT3pPLENBQUMsRUFBRTtRQUNWNkksT0FBTyxDQUFDQyxLQUFLLENBQUMsNENBQTRDLEVBQUVGLEtBQUssRUFBRTVJLENBQUMsQ0FBQztNQUN2RTtJQUNGOztJQUVBO0VBQUEsU0FBQXdQLEdBQUE7SUFBQU4sU0FBQSxDQUFBbFAsQ0FBQSxDQUFBd1AsR0FBQTtFQUFBO0lBQUFOLFNBQUEsQ0FBQWpOLENBQUE7RUFBQTtFQUNBMkUsZ0JBQWdCLENBQUM2SSxLQUFLLENBQUMsQ0FBQztFQUN4QjNJLFFBQVEsQ0FBQzJJLEtBQUssQ0FBQyxDQUFDO0VBQ2hCMUksTUFBTSxDQUFDMEksS0FBSyxDQUFDLENBQUM7RUFDZHpJLE9BQU8sQ0FBQ3lJLEtBQUssQ0FBQyxDQUFDO0VBQ2Z2SSxLQUFLLENBQUN1SSxLQUFLLENBQUMsQ0FBQztFQUNidEksT0FBTyxDQUFDc0ksS0FBSyxDQUFDLENBQUM7RUFDZnJJLE9BQU8sQ0FBQ3FJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqQnBJLFFBQVEsQ0FBQ29JLEtBQUssQ0FBQyxDQUFDO0VBQ2hCbkksYUFBYSxDQUFDbUksS0FBSyxDQUFDLENBQUM7RUFDckJsSSxXQUFXLENBQUNrSSxLQUFLLENBQUMsQ0FBQztFQUNuQmpJLGdCQUFnQixDQUFDaUksS0FBSyxDQUFDLENBQUM7RUFFeEI1RyxPQUFPLENBQUM4QixHQUFHLENBQUMsd0VBQXdFLENBQUM7QUFDdkYsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luLy4vc3JjL29mZnNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaWx0cm9zRGluYW1pY29zID0gbmV3IE1hcCgpO1xuY29uc3QgY29udGV4dHMgPSBuZXcgTWFwKCk7XG5jb25zdCBtZWRpYXMgPSBuZXcgTWFwKCk7XG5jb25zdCBzb3VyY2VzID0gbmV3IE1hcCgpO1xubGV0IHBvcHVwUG9ydCA9IG51bGw7XG5sZXQgbG9vcHMgPSBuZXcgTWFwKCk7XG5jb25zdCBwcmVfdml6ID0gbmV3IE1hcCgpO1xuY29uc3QgbWlkX3ZpeiA9IG5ldyBNYXAoKTsgLy8gTnVldm8gYW5hbGl6YWRvciBwYXJhIHZpc3VhbGl6YXIgYW50ZXMgZGVsIGNvbXByZXNvclxuY29uc3QgcG9zdF92aXogPSBuZXcgTWFwKCk7XG5jb25zdCBzdGF0aWNGaWx0ZXJzID0gbmV3IE1hcCgpO1xuY29uc3QgY29tcHJlc3NvcnMgPSBuZXcgTWFwKCk7IC8vIE5vZG9zIGRlIGNvbXByZXNvclxuY29uc3QgY29tcHJlc3NvclN0YXRlcyA9IG5ldyBNYXAoKTsgLy8gRXN0YWRvIGRlIGFjdGl2YWNpw7NuIGRlbCBjb21wcmVzb3Jcbi8vIGNvbnN0IGJhbmRhc19maWx0cm9zID0gW1wic3ViXCIsIFwiYmFzc1wiLCBcImxvd01pZFwiLCBcIm1pZFwiLCBcImhpZ2hNaWRcIiwgXCJoaWdoXCIsIFwiYWlyXCJdO1xuY29uc3Qgc3RhdGljRmlsdGVyaW5nID0gZmFsc2U7XG5sZXQgb2Zmc2NyZWVuSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLy8g8J+OpyBvZmZzY3JlZW4uanMg4oCUIGdlc3Rpw7NuIGRlIGZpbHRyb3MgZGluw6FtaWNvcyBkZSBlY3VhbGl6YWNpw7NuIPCfjpvvuI9cblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtc2cpID0+IHtcbiAgbGV0IGZpbHRybyA9IG51bGw7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlIFwiYWN0dWFsaXphci1maWx0cm8tZGluYW1pY29cIjpcbiAgICAgIGlmICghY29udGV4dHMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltvZmZzY3JlZW5dIEF1ZGlvQ29udGV4dCBubyBpbmljaWFsaXphZG9cIik7XG4gICAgICAgIGFsZXJ0KFwiW29mZnNjcmVlbl0gQXVkaW9Db250ZXh0IG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGV4dCA9IGNvbnRleHRzLmdldChtc2cudGFiSWQpO1xuICAgICAgaWYgKCFzb3VyY2VzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbb2Zmc2NyZWVuXSBNZWRpYVN0cmVhbVNvdXJjZSBubyBpbmljaWFsaXphZG9cIik7XG4gICAgICAgIGFsZXJ0KFwiW29mZnNjcmVlbl0gTWVkaWFTdHJlYW1Tb3VyY2Ugbm8gaW5pY2lhbGl6YWRvXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLmdldChtc2cudGFiSWQpO1xuXG4gICAgICBpZiAoIWZpbHRyb3NEaW5hbWljb3MuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5zZXQobXNnLnRhYklkLCBuZXcgTWFwKCkpO1xuICAgICAgfVxuICAgICAgZmlsdHJvID0gZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5nZXQobXNnLmZpbHRyb0lkKTtcbiAgICAgIGlmICghZmlsdHJvKSB7XG4gICAgICAgIGZpbHRybyA9IHtcbiAgICAgICAgICBub2RlOiBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpLFxuICAgICAgICAgIGJ5cGFzczogbXNnLmJ5cGFzcyB8fCBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBmaWx0cm8ubm9kZS50eXBlID0gXCJwZWFraW5nXCI7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KGZpbHRyby5ub2RlKTtcbiAgICAgICAgZmlsdHJvLm5vZGUuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5zZXQobXNnLmZpbHRyb0lkLCBmaWx0cm8pO1xuICAgICAgICByZWNvbmVjdGFyQ2FkZW5hKG1zZy50YWJJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBY3R1YWxpemFyIGVsIGVzdGFkbyBkZSBieXBhc3NcbiAgICAgICAgZmlsdHJvLmJ5cGFzcyA9IG1zZy5ieXBhc3M7XG4gICAgICB9XG5cbiAgICAgIGZpbHRyby5ub2RlLmZyZXF1ZW5jeS52YWx1ZSA9IG1zZy5mcmVxO1xuICAgICAgZmlsdHJvLm5vZGUuUS52YWx1ZSA9IG1zZy5xO1xuICAgICAgZmlsdHJvLm5vZGUuZ2Fpbi52YWx1ZSA9IGZpbHRyby5ieXBhc3MgPyAwIDogbXNnLmdhaW47IC8vIFNpIGVzdMOhIGVuIGJ5cGFzcywgbGEgZ2FuYW5jaWEgZXMgMFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImVsaW1pbmFyLWZpbHRyby1kaW5hbWljb1wiOlxuICAgICAgaWYgKCFmaWx0cm9zRGluYW1pY29zLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGZpbHRyb3NEaW5hbWljb3Muc2V0KG1zZy50YWJJZCwgbmV3IE1hcCgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmaWx0cm8gPSBmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLmdldChtc2cuZmlsdHJvSWQpO1xuICAgICAgaWYgKGZpbHRybykge1xuICAgICAgICBmaWx0cm8ubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICAgIGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuZGVsZXRlKG1zZy5maWx0cm9JZCk7XG4gICAgICAgIHJlY29uZWN0YXJDYWRlbmEobXNnLnRhYklkKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJhanVzdGFyLWNvbXByZXNvclwiOlxuICAgICAgaWYgKCFjb250ZXh0cy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW29mZnNjcmVlbl0gQXVkaW9Db250ZXh0IG5vIGluaWNpYWxpemFkb1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBTaSBlbCBjb21wcmVzb3Igbm8gZXhpc3RlLCBjcmVhcmxvXG4gICAgICBpZiAoIWNvbXByZXNzb3JzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZXh0cy5nZXQobXNnLnRhYklkKTtcbiAgICAgICAgY29uc3QgY29tcHJlc3NvciA9IGNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gICAgICAgIGNvbXByZXNzb3JzLnNldChtc2cudGFiSWQsIGNvbXByZXNzb3IpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBHdWFyZGFyIGVsIGVzdGFkbyBkZSBhY3RpdmFjacOzblxuICAgICAgY29tcHJlc3NvclN0YXRlcy5zZXQobXNnLnRhYklkLCBtc2cuYWN0aXZvKTtcbiAgICAgIFxuICAgICAgLy8gQWN0dWFsaXphciBwYXLDoW1ldHJvcyBkZWwgY29tcHJlc29yXG4gICAgICBjb25zdCBjb21wcmVzc29yID0gY29tcHJlc3NvcnMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICBpZiAobXNnLnBhcmFtcykge1xuICAgICAgICBpZiAobXNnLnBhcmFtcy50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCkgY29tcHJlc3Nvci50aHJlc2hvbGQudmFsdWUgPSBtc2cucGFyYW1zLnRocmVzaG9sZDtcbiAgICAgICAgaWYgKG1zZy5wYXJhbXMucmF0aW8gIT09IHVuZGVmaW5lZCkgY29tcHJlc3Nvci5yYXRpby52YWx1ZSA9IG1zZy5wYXJhbXMucmF0aW87XG4gICAgICAgIGlmIChtc2cucGFyYW1zLmtuZWUgIT09IHVuZGVmaW5lZCkgY29tcHJlc3Nvci5rbmVlLnZhbHVlID0gbXNnLnBhcmFtcy5rbmVlO1xuICAgICAgICBpZiAobXNnLnBhcmFtcy5hdHRhY2sgIT09IHVuZGVmaW5lZCkgY29tcHJlc3Nvci5hdHRhY2sudmFsdWUgPSBtc2cucGFyYW1zLmF0dGFjaztcbiAgICAgICAgaWYgKG1zZy5wYXJhbXMucmVsZWFzZSAhPT0gdW5kZWZpbmVkKSBjb21wcmVzc29yLnJlbGVhc2UudmFsdWUgPSBtc2cucGFyYW1zLnJlbGVhc2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFJlY29uZWN0YXIgbGEgY2FkZW5hIGRlIGF1ZGlvIHBhcmEgYXBsaWNhciBsb3MgY2FtYmlvc1xuICAgICAgcmVjb25lY3RhckNhZGVuYShtc2cudGFiSWQpO1xuICAgICAgXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKHBvcnQpID0+IHtcbiAgaWYgKHBvcnQubmFtZSA9PT0gXCJwb3B1cC12aXN1YWxpemVyXCIpIHtcbiAgICBwb3B1cFBvcnQgPSBwb3J0O1xuICAgIGNvbnNvbGUubG9nKFwiW09GRlNDUkVFTl0gQ29uZWN0YWRvIGFsIHBvcHVwIPCfpbBcIik7XG5cblxuICAgIC8vIHBvcnQucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInN0YXJ0LXN0cmVhbVwiIH0pO1xuXG4gICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgcG9wdXBQb3J0ID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKFwiW09GRlNDUkVFTl0gUG9wdXAgY2VycmFkbyDwn5iiXCIpO1xuICAgIH0pO1xuXG4gICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZykgPT4ge1xuICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwic3RhcnQtc3RyZWFtXCI6XG4gICAgICAgICAgaWYgKG1lZGlhcy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtc3RyZWFtXCIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ2l2ZS1tZS12aXpcIjpcbiAgICAgICAgICBpZiAoIXByZV92aXouaGFzKG1zZy50YWJJZCkgfHwgIW1pZF92aXouaGFzKG1zZy50YWJJZCkgfHwgIXBvc3Rfdml6Lmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gcHJlX3ZpeiwgbWlkX3ZpeiBvIHBvc3Rfdml6IG5vIGluaWNpYWxpemFkb3NcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gdGFiSWQ6IFwiICsgbXNnLnRhYklkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBwcmVfdml6OiBcIiArIHByZV92aXopO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIG1pZF92aXo6IFwiICsgbWlkX3Zpeik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gcG9zdF92aXo6IFwiICsgcG9zdF92aXopO1xuICAgICAgICAgICAgYWxlcnQoXCJbb2Zmc2NyZWVuXSBObyBzZSBwdWVkZSBjYXB0dXJhciBlbCBhdWRpbyBlbiBlc3RlIG1vbWVudG8uIEludGVudGEgcmVjYXJnYXIgbGEgcMOhZ2luYVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVXNhciBGbG9hdDMyQXJyYXkgcGFyYSBvYnRlbmVyIHZhbG9yZXMgZW4gZEJcbiAgICAgICAgICBjb25zdCBwcmVfYmlucyA9IG5ldyBGbG9hdDMyQXJyYXkocHJlX3Zpei5nZXQobXNnLnRhYklkKS5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgICAgcHJlX3Zpei5nZXQobXNnLnRhYklkKS5nZXRGbG9hdEZyZXF1ZW5jeURhdGEocHJlX2JpbnMpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IG1pZF9iaW5zID0gbmV3IEZsb2F0MzJBcnJheShtaWRfdml6LmdldChtc2cudGFiSWQpLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICBtaWRfdml6LmdldChtc2cudGFiSWQpLmdldEZsb2F0RnJlcXVlbmN5RGF0YShtaWRfYmlucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgcG9zdF9iaW5zID0gbmV3IEZsb2F0MzJBcnJheShwb3N0X3Zpei5nZXQobXNnLnRhYklkKS5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgICAgcG9zdF92aXouZ2V0KG1zZy50YWJJZCkuZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKHBvc3RfYmlucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHBvcHVwUG9ydCkge1xuICAgICAgICAgICAgcG9wdXBQb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ2aXN1YWxpemVyLWRhdGFcIixcbiAgICAgICAgICAgICAgZGF0YTogeyBcbiAgICAgICAgICAgICAgICBwcmU6IEFycmF5LmZyb20ocHJlX2JpbnMpLCBcbiAgICAgICAgICAgICAgICBtaWQ6IEFycmF5LmZyb20obWlkX2JpbnMpLFxuICAgICAgICAgICAgICAgIHBvc3Q6IEFycmF5LmZyb20ocG9zdF9iaW5zKSxcbiAgICAgICAgICAgICAgICBtaW5EZWNpYmVsczogcHJlX3Zpei5nZXQobXNnLnRhYklkKS5taW5EZWNpYmVscyxcbiAgICAgICAgICAgICAgICBtYXhEZWNpYmVsczogcHJlX3Zpei5nZXQobXNnLnRhYklkKS5tYXhEZWNpYmVsc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRVJST1JdIGlzc3VlIGVudmlhbmRvIG1lbnNhamVcIilcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1zZykgPT4ge1xuICBpZiAobXNnLnRhcmdldCAhPT0gXCJvZmZzY3JlZW5cIikgcmV0dXJuO1xuXG4gIGlmIChtc2cudHlwZSA9PT0gXCJvZmZzY3JlZW4td2FrZXVwXCIpIHtcbiAgICBpZiAoIW9mZnNjcmVlbkluaXRpYWxpemVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBQcmltZXJhIGluaWNpYWxpemFjacOzbiBkZWwgb2Zmc2NyZWVuIC0gTGltcGlhbmRvIGRhdG9zXCIpO1xuICAgICAgY2xlYXJBbGxEYXRhKCk7XG4gICAgICBvZmZzY3JlZW5Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJvZmZzY3JlZW4tYWxpdmVcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zZy50eXBlID09PSBcInN0YXJ0LXByb2Nlc3NpbmdcIikge1xuICAgIGlmIChtZWRpYXMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBUYWIgYWxyZWFkeSBjYXB0dXJpbmcgYXVkaW9cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgYXVkaW86IHtcbiAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6IFwidGFiXCIsXG4gICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbXNnLnN0cmVhbUlkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtZWRpYXMuc2V0KG1zZy50YWJJZCwgbWVkaWEpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBjb250ZXh0cy5zZXQobXNnLnRhYklkLCBjb250ZXh0KTtcbiAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgICBzb3VyY2VzLnNldChtc2cudGFiSWQsIHNvdXJjZSk7XG4gICAgY29uc29sZS5sb2coXCJbSU5GT10gQXVkaW9Db250ZXh0IGluaWNpYWxpemFkbyBlbiB0YWIgXCIgKyBtc2cudGFiSWQpO1xuXG5cbiAgICBwcmVfdml6LnNldChtc2cudGFiSWQsIG5ldyBBbmFseXNlck5vZGUoY29udGV4dCwge1xuICAgICAgZmZ0U2l6ZTogMjA0OCxcbiAgICAgIG1heERlY2liZWxzOiAtMjUsXG4gICAgICBtaW5EZWNpYmVsczogLTEwMCxcbiAgICAgIHNtb290aGluZ1RpbWVDb25zdGFudDogMC40LFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHZvbHVtZSA9IGNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHZvbHVtZS5nYWluLnZhbHVlID0gbXNnLmxldmVsO1xuICAgIHNvdXJjZXMuc2V0KG1zZy50YWJJZCArIFwiX3ZvbHVtZVwiLCB2b2x1bWUpO1xuXG4gICAgLy8gQ3JlYXIgYW5hbGl6YWRvciBpbnRlcm1lZGlvIChhbnRlcyBkZWwgY29tcHJlc29yKVxuICAgIG1pZF92aXouc2V0KG1zZy50YWJJZCwgbmV3IEFuYWx5c2VyTm9kZShjb250ZXh0LCB7XG4gICAgICBmZnRTaXplOiAyMDQ4LFxuICAgICAgbWF4RGVjaWJlbHM6IC0yNSxcbiAgICAgIG1pbkRlY2liZWxzOiAtMTAwLFxuICAgICAgc21vb3RoaW5nVGltZUNvbnN0YW50OiAwLjQsXG4gICAgfSkpO1xuXG4gICAgcG9zdF92aXouc2V0KG1zZy50YWJJZCwgbmV3IEFuYWx5c2VyTm9kZShjb250ZXh0LCB7XG4gICAgICBmZnRTaXplOiAyMDQ4LFxuICAgICAgbWF4RGVjaWJlbHM6IC0yNSxcbiAgICAgIG1pbkRlY2liZWxzOiAtMTAwLFxuICAgICAgc21vb3RoaW5nVGltZUNvbnN0YW50OiAwLjQsXG4gICAgfSkpO1xuICAgIHNvdXJjZS5jb25uZWN0KHZvbHVtZSk7XG4gICAgdm9sdW1lLmNvbm5lY3QocHJlX3Zpei5nZXQobXNnLnRhYklkKSk7XG4gICAgcHJlX3Zpei5nZXQobXNnLnRhYklkKS5jb25uZWN0KG1pZF92aXouZ2V0KG1zZy50YWJJZCkpO1xuICAgIG1pZF92aXouZ2V0KG1zZy50YWJJZCkuY29ubmVjdChwb3N0X3Zpei5nZXQobXNnLnRhYklkKSk7XG4gICAgcG9zdF92aXouZ2V0KG1zZy50YWJJZCkuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBBdWRpb0NvbnRleHQgaW5pY2lhbGl6YWRvXCIpXG4gICAgLy8gY29uc29sZS5sb2coXCJzb3VyY2U6XCIpXG5cbiAgICBpZiAoc3RhdGljRmlsdGVyaW5nKVxuICAgICAgc2V0dXBFUShjb250ZXh0LCBtc2cpO1xuXG4gICAgLy8gQ3JlYXIgbm9kbyBkZSBjb21wcmVzb3JcbiAgICBjb25zdCBjb21wcmVzc29yID0gY29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgICBjb21wcmVzc29yLnRocmVzaG9sZC52YWx1ZSA9IC0yNDtcbiAgICBjb21wcmVzc29yLnJhdGlvLnZhbHVlID0gNDtcbiAgICBjb21wcmVzc29yLmtuZWUudmFsdWUgPSAzMDtcbiAgICBjb21wcmVzc29yLmF0dGFjay52YWx1ZSA9IDAuMDAzO1xuICAgIGNvbXByZXNzb3IucmVsZWFzZS52YWx1ZSA9IDAuMjU7XG4gICAgY29tcHJlc3NvcnMuc2V0KG1zZy50YWJJZCwgY29tcHJlc3Nvcik7XG4gICAgY29tcHJlc3NvclN0YXRlcy5zZXQobXNnLnRhYklkLCBmYWxzZSk7IC8vIEluaWNpYWxtZW50ZSBkZXNhY3RpdmFkb1xuXG4gICAgaWYgKHBvcHVwUG9ydCkge1xuICAgICAgcG9wdXBQb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzdGFydC1zdHJlYW1cIiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdGaWx0cm9zID0gbmV3IE1hcCgpO1xuICAgIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyhtc2cudGFiSWQpICYmIGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuc2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IGYgPSBBcnJheS5mcm9tKGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkudmFsdWVzKCkpO1xuICAgICAgZi5mb3JFYWNoKChmaWx0cm8pID0+IHtcbiAgICAgICAgZmlsdHJvLm5vZGUuZGlzY29ubmVjdCgpO1xuICAgICAgICBjb25zdCBuZXdGaWx0cm8gPSB7XG4gICAgICAgICAgbm9kZTogY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSxcbiAgICAgICAgICBieXBhc3M6IGZpbHRyby5ieXBhc3NcbiAgICAgICAgfTtcbiAgICAgICAgbmV3RmlsdHJvLm5vZGUudHlwZSA9IGZpbHRyby5ub2RlLnR5cGU7XG4gICAgICAgIG5ld0ZpbHRyby5ub2RlLmZyZXF1ZW5jeS52YWx1ZSA9IGZpbHRyby5ub2RlLmZyZXF1ZW5jeS52YWx1ZTtcbiAgICAgICAgbmV3RmlsdHJvLm5vZGUuUS52YWx1ZSA9IGZpbHRyby5ub2RlLlEudmFsdWU7XG4gICAgICAgIG5ld0ZpbHRyby5ub2RlLmdhaW4udmFsdWUgPSBmaWx0cm8ubm9kZS5nYWluLnZhbHVlO1xuICAgICAgICBuZXdGaWx0cm9zLnNldChmaWx0cm8uaWQsIG5ld0ZpbHRybyk7XG4gICAgICAgIGZpbHRyb3NEaW5hbWljb3MuZ2V0KG1zZy50YWJJZCkuZGVsZXRlKGZpbHRyby5pZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZmlsdHJvc0RpbmFtaWNvcy5zZXQobXNnLnRhYklkLCBuZXdGaWx0cm9zKTtcbiAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBGaWx0cm9zIGRpbsOhbWljb3MgaW5pY2lhbGl6YWRvc1wiKTtcbiAgICByZWNvbmVjdGFyQ2FkZW5hKG1zZy50YWJJZCk7XG4gIH1cblxuICBpZiAobXNnLnR5cGUgPT09IFwiYWp1c3Rhci12b2x1bWVuXCIpIHtcbiAgICBpZiAoIWNvbnRleHRzLmhhcyhtc2cudGFiSWQpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gTm8gaGF5IGNvbnRleHRvIGRlIGF1ZGlvIHBhcmEgYWp1c3RhciBlbCB2b2x1bWVuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2b2x1bWVOb2RlID0gc291cmNlcy5nZXQobXNnLnRhYklkICsgXCJfdm9sdW1lXCIpO1xuICAgIGlmICh2b2x1bWVOb2RlKSB7XG4gICAgICB2b2x1bWVOb2RlLmdhaW4udmFsdWUgPSBtc2cubGV2ZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0VSUk9SXSBObyBzZSBlbmNvbnRyw7MgZWwgbm9kbyBkZSB2b2x1bWVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtc2cudHlwZSA9PT0gXCJhanVzdGFyLWZpbHRyb1wiKSB7XG4gICAgY29uc3QgZiA9IHN0YXRpY0ZpbHRlcnMuZ2V0KG1zZy50YWJJZCk7XG4gICAgaWYgKCFmKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKG1zZy5iYW5kYSkge1xuICAgICAgY2FzZSBcInZvbHVtZW5cIjpcbiAgICAgICAgZi52b2x1bWUuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3ViXCI6XG4gICAgICAgIGYuc3ViLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJhc3NcIjpcbiAgICAgICAgZi5iYXNzLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxvd01pZFwiOlxuICAgICAgICBmLmxvd01pZC5nYWluLnZhbHVlID0gbXNnLnZhbG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaWRcIjpcbiAgICAgICAgZi5taWQuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGlnaE1pZFwiOlxuICAgICAgICBmLmhpZ2hNaWQuZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICBmLmhpZ2guZ2Fpbi52YWx1ZSA9IG1zZy52YWxvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYWlyXCI6XG4gICAgICAgIGYuYWlyLmdhaW4udmFsdWUgPSBtc2cudmFsb3I7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAobXNnLnR5cGUgPT09IFwic3RvcC1wcm9jZXNzaW5nXCIpIHtcbiAgICBpZiAoY29udGV4dHMuaGFzKG1zZy50YWJJZCkpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gY29udGV4dHMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICBjb25zb2xlLmxvZyhcIltJTkZPXSBDbG9zaW5nIEF1ZGlvQ29udGV4dFwiKTtcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgICBjb250ZXh0LmNsb3NlKCk7IC8vIGNpZXJyYSBlbCBBdWRpb0NvbnRleHRcbiAgICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gQXVkaW9Db250ZXh0IGNlcnJhZG8gZW4gdGFiIFwiICsgbXNnLnRhYklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0luZm9dIEF1ZGlvQ29udGV4dCBhbHJlYWR5IGNsb3NlZCAhXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGljRmlsdGVycy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICBjb25zdCBmID0gc3RhdGljRmlsdGVycy5nZXQobXNnLnRhYklkKTtcbiAgICAgICAgZi5mb3JFYWNoKChmaWx0cm8pID0+IHtcbiAgICAgICAgICBmaWx0cm8uZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRyb3NEaW5hbWljb3MuaGFzKG1zZy50YWJJZCkgJiYgZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5zaXplID4gMCkge1xuICAgICAgICBjb25zdCBmID0gQXJyYXkuZnJvbShmaWx0cm9zRGluYW1pY29zLmdldChtc2cudGFiSWQpLnZhbHVlcygpKTtcbiAgICAgICAgZi5mb3JFYWNoKChmaWx0cm8pID0+IHtcbiAgICAgICAgICBmaWx0cm8ubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgLy8gZmlsdHJvc0RpbmFtaWNvcy5nZXQobXNnLnRhYklkKS5kZWxldGUoZmlsdHJvLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlc2NvbmVjdGFyIGVsIGNvbXByZXNvciBzaSBleGlzdGVcbiAgICAgIGlmIChjb21wcmVzc29ycy5oYXMobXNnLnRhYklkKSkge1xuICAgICAgICBjb21wcmVzc29ycy5nZXQobXNnLnRhYklkKS5kaXNjb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZvbHVtZSA9IHNvdXJjZXMuZ2V0KG1zZy50YWJJZCArIFwiX3ZvbHVtZVwiKTtcbiAgICAgIGlmICh2b2x1bWUpIHtcbiAgICAgICAgdm9sdW1lLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVkaWEgPSBtZWRpYXMuZ2V0KG1zZy50YWJJZCk7XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgbWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgbWVkaWFzLmRlbGV0ZShtc2cudGFiSWQpO1xuICAgIH1cbiAgfVxuXG59KTtcblxuZnVuY3Rpb24gc2V0dXBFUShjb250ZXh0LCBtc2cpIHtcbiAgc3RhdGljRmlsdGVycy5zZXQobXNnLnRhYklkLCBuZXcgTWFwKCkpO1xuICBjb25zdCBmaWx0ZXJzID0gc3RhdGljRmlsdGVycy5nZXQobXNnLnRhYklkKTtcblxuICBmaWx0ZXJzLnNldChcInN1YlwiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJzdWJcIikudHlwZSA9IFwibG93c2hlbGZcIjtcbiAgZmlsdGVycy5nZXQoXCJzdWJcIikuZnJlcXVlbmN5LnZhbHVlID0gNjA7XG4gIGZpbHRlcnMuZ2V0KFwic3ViXCIpLmdhaW4udmFsdWUgPSBtc2cuc3ViO1xuXG4gIGZpbHRlcnMuc2V0KFwiYmFzc1wiLCBjb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpKTtcbiAgZmlsdGVycy5nZXQoXCJiYXNzXCIpLnR5cGUgPSBcInBlYWtpbmdcIjtcbiAgZmlsdGVycy5nZXQoXCJiYXNzXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDE2MDtcbiAgZmlsdGVycy5nZXQoXCJiYXNzXCIpLlEudmFsdWUgPSAxO1xuICBmaWx0ZXJzLmdldChcImJhc3NcIikuZ2Fpbi52YWx1ZSA9IG1zZy5iYXNzO1xuXG4gIGZpbHRlcnMuc2V0KFwibG93TWlkXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcImxvd01pZFwiKS50eXBlID0gXCJwZWFraW5nXCI7XG4gIGZpbHRlcnMuZ2V0KFwibG93TWlkXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDQwMDtcbiAgZmlsdGVycy5nZXQoXCJsb3dNaWRcIikuUS52YWx1ZSA9IDE7XG4gIGZpbHRlcnMuZ2V0KFwibG93TWlkXCIpLmdhaW4udmFsdWUgPSBtc2cubG93TWlkO1xuXG4gIGZpbHRlcnMuc2V0KFwibWlkXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcIm1pZFwiKS50eXBlID0gXCJwZWFraW5nXCI7XG4gIGZpbHRlcnMuZ2V0KFwibWlkXCIpLmZyZXF1ZW5jeS52YWx1ZSA9IDEwMDA7XG4gIGZpbHRlcnMuZ2V0KFwibWlkXCIpLlEudmFsdWUgPSAxO1xuICBmaWx0ZXJzLmdldChcIm1pZFwiKS5nYWluLnZhbHVlID0gbXNnLm1pZDtcblxuICBmaWx0ZXJzLnNldChcImhpZ2hNaWRcIiwgY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSk7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaE1pZFwiKS50eXBlID0gXCJwZWFraW5nXCI7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaE1pZFwiKS5mcmVxdWVuY3kudmFsdWUgPSAyNTAwO1xuICBmaWx0ZXJzLmdldChcImhpZ2hNaWRcIikuUS52YWx1ZSA9IDE7XG4gIGZpbHRlcnMuZ2V0KFwiaGlnaE1pZFwiKS5nYWluLnZhbHVlID0gbXNnLmhpZ2hNaWQ7XG5cbiAgZmlsdGVycy5zZXQoXCJoaWdoXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcImhpZ2hcIikudHlwZSA9IFwicGVha2luZ1wiO1xuICBmaWx0ZXJzLmdldChcImhpZ2hcIikuZnJlcXVlbmN5LnZhbHVlID0gNjAwMDtcbiAgZmlsdGVycy5nZXQoXCJoaWdoXCIpLlEudmFsdWUgPSAxO1xuICBmaWx0ZXJzLmdldChcImhpZ2hcIikuZ2Fpbi52YWx1ZSA9IG1zZy5oaWdoO1xuXG4gIGZpbHRlcnMuc2V0KFwiYWlyXCIsIGNvbnRleHQuY3JlYXRlQmlxdWFkRmlsdGVyKCkpO1xuICBmaWx0ZXJzLmdldChcImFpclwiKS50eXBlID0gXCJoaWdoc2hlbGZcIjtcbiAgZmlsdGVycy5nZXQoXCJhaXJcIikuZnJlcXVlbmN5LnZhbHVlID0gMTAwMDA7XG4gIGZpbHRlcnMuZ2V0KFwiYWlyXCIpLmdhaW4udmFsdWUgPSBtc2cuYWlyO1xuXG5cbiAgLy8g8J+UlyBDb25lY3RhciBmaWx0cm9zIGVuIGNhZGVuYVxuICBwcmVfdml6LmdldChtc2cudGFiSWQpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJzdWJcIikpO1xuICBmaWx0ZXJzLmdldChcInN1YlwiKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwiYmFzc1wiKSk7XG4gIGZpbHRlcnMuZ2V0KFwiYmFzc1wiKS5jb25uZWN0KGZpbHRlcnMuZ2V0KFwibG93TWlkXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJsb3dNaWRcIikuY29ubmVjdChmaWx0ZXJzLmdldChcIm1pZFwiKSk7XG4gIGZpbHRlcnMuZ2V0KFwibWlkXCIpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJoaWdoTWlkXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJoaWdoTWlkXCIpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJoaWdoXCIpKTtcbiAgZmlsdGVycy5nZXQoXCJoaWdoXCIpLmNvbm5lY3QoZmlsdGVycy5nZXQoXCJhaXJcIikpO1xuICBmaWx0ZXJzLmdldChcImFpclwiKS5jb25uZWN0KG1pZF92aXouZ2V0KG1zZy50YWJJZCkpO1xuXG59XG5cbmZ1bmN0aW9uIHJlY29uZWN0YXJDYWRlbmEodGFiSWQpIHtcbiAgaWYgKCFjb250ZXh0cy5oYXModGFiSWQpIHx8ICFzb3VyY2VzLmhhcyh0YWJJZCkpIHtcbiAgICBjb25zb2xlLmxvZyhcIltFUlJPUl0gTm8gaGF5IGNvbnRleHRvIG8gZnVlbnRlIHBhcmEgcmVjb25lY3RhclwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gY29udGV4dHMuZ2V0KHRhYklkKTtcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5nZXQodGFiSWQpO1xuICBjb25zdCB2b2x1bWVOb2RlID0gc291cmNlcy5nZXQodGFiSWQgKyBcIl92b2x1bWVcIik7XG5cbiAgLy8gRGVzY29uZWN0YXIgdG9kb3MgbG9zIG5vZG9zXG4gIHNvdXJjZS5kaXNjb25uZWN0KCk7XG4gIGlmICh2b2x1bWVOb2RlKSB2b2x1bWVOb2RlLmRpc2Nvbm5lY3QoKTtcbiAgXG4gIGlmIChwcmVfdml6Lmhhcyh0YWJJZCkpIHByZV92aXouZ2V0KHRhYklkKS5kaXNjb25uZWN0KCk7XG4gIGlmIChtaWRfdml6Lmhhcyh0YWJJZCkpIG1pZF92aXouZ2V0KHRhYklkKS5kaXNjb25uZWN0KCk7XG4gIGlmIChwb3N0X3Zpei5oYXModGFiSWQpKSBwb3N0X3Zpei5nZXQodGFiSWQpLmRpc2Nvbm5lY3QoKTtcbiAgXG4gIC8vIERlc2NvbmVjdGFyIHRvZG9zIGxvcyBmaWx0cm9zXG4gIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyh0YWJJZCkpIHtcbiAgICBmaWx0cm9zRGluYW1pY29zLmdldCh0YWJJZCkuZm9yRWFjaCgoZmlsdHJvKSA9PiB7XG4gICAgICBmaWx0cm8ubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8vIERlc2NvbmVjdGFyIGVsIGNvbXByZXNvciBzaSBleGlzdGVcbiAgaWYgKGNvbXByZXNzb3JzLmhhcyh0YWJJZCkpIHtcbiAgICBjb21wcmVzc29ycy5nZXQodGFiSWQpLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIC8vIENvbWVuemFyIGxhIGNhZGVuYSBjb24gbGEgZnVlbnRlIGNvbmVjdGFkYSBhbCB2b2x1bWVuLCBxdWUgbHVlZ28gc2UgY29uZWN0YSBhbCBwcmUtdmlzdWFsaXphZG9yXG4gIHNvdXJjZS5jb25uZWN0KHZvbHVtZU5vZGUpO1xuICB2b2x1bWVOb2RlLmNvbm5lY3QocHJlX3Zpei5nZXQodGFiSWQpKTtcbiAgXG4gIC8vIENyZWFyIHVuIGFycmF5IGNvbiBsb3MgZmlsdHJvcyBhY3Rpdm9zIChubyBlbiBieXBhc3MpXG4gIGNvbnN0IGZpbHRyb3NBY3Rpdm9zID0gW107XG4gIGlmIChmaWx0cm9zRGluYW1pY29zLmhhcyh0YWJJZCkpIHtcbiAgICBmaWx0cm9zRGluYW1pY29zLmdldCh0YWJJZCkuZm9yRWFjaCgoZmlsdHJvLCBpZCkgPT4ge1xuICAgICAgaWYgKCFmaWx0cm8uYnlwYXNzKSB7XG4gICAgICAgIGZpbHRyb3NBY3Rpdm9zLnB1c2goZmlsdHJvLm5vZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgW0lORk9dIEZpbHRybyAke2lkfSBhw7FhZGlkbyBhIGxhIGNhZGVuYSAobm8gZXN0w6EgZW4gYnlwYXNzKWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtJTkZPXSBGaWx0cm8gJHtpZH0gZW4gYnlwYXNzIC0gbm8gY29uZWN0YWRvYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8vIFZlcmlmaWNhciBzaSBlbCBjb21wcmVzb3IgZXN0w6EgYWN0aXZvXG4gIGNvbnN0IGNvbXByZXNvckFjdGl2byA9IGNvbXByZXNzb3JTdGF0ZXMuZ2V0KHRhYklkKSB8fCBmYWxzZTtcbiAgXG4gIC8vIFNpIG5vIGhheSBmaWx0cm9zIGFjdGl2b3NcbiAgaWYgKGZpbHRyb3NBY3Rpdm9zLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChjb21wcmVzb3JBY3Rpdm8gJiYgY29tcHJlc3NvcnMuaGFzKHRhYklkKSkge1xuICAgICAgLy8gQ29uZWN0YXIgcHJlX3ZpeiAtPiBtaWRfdml6IC0+IGNvbXByZXNvciAtPiBwb3N0X3ZpelxuICAgICAgcHJlX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QobWlkX3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIG1pZF92aXouZ2V0KHRhYklkKS5jb25uZWN0KGNvbXByZXNzb3JzLmdldCh0YWJJZCkpO1xuICAgICAgY29tcHJlc3NvcnMuZ2V0KHRhYklkKS5jb25uZWN0KHBvc3Rfdml6LmdldCh0YWJJZCkpO1xuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gTm8gaGF5IGZpbHRyb3MgYWN0aXZvcywgY29uZWN0YW5kbyBhIHRyYXbDqXMgZGVsIGNvbXByZXNvclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29uZWN0YXIgcHJlX3ZpeiAtPiBtaWRfdml6IC0+IHBvc3Rfdml6IChzaW4gY29tcHJlc29yKVxuICAgICAgcHJlX3Zpei5nZXQodGFiSWQpLmNvbm5lY3QobWlkX3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIG1pZF92aXouZ2V0KHRhYklkKS5jb25uZWN0KHBvc3Rfdml6LmdldCh0YWJJZCkpO1xuICAgICAgY29uc29sZS5sb2coXCJbSU5GT10gTm8gaGF5IGZpbHRyb3MgYWN0aXZvcyBuaSBjb21wcmVzb3IgYWN0aXZvLCBjYWRlbmEgZGlyZWN0YVwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSGF5IGZpbHRyb3MgYWN0aXZvc1xuICAgIC8vIENvbmVjdGFyIHByZV92aXogYWwgcHJpbWVyIGZpbHRyb1xuICAgIHByZV92aXouZ2V0KHRhYklkKS5jb25uZWN0KGZpbHRyb3NBY3Rpdm9zWzBdKTtcbiAgICBcbiAgICAvLyBDb25lY3RhciBjYWRhIGZpbHRybyBhbCBzaWd1aWVudGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRyb3NBY3Rpdm9zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgZmlsdHJvc0FjdGl2b3NbaV0uY29ubmVjdChmaWx0cm9zQWN0aXZvc1tpICsgMV0pO1xuICAgIH1cbiAgICBcbiAgICAvLyDDmmx0aW1vIG5vZG8gZGUgbGEgY2FkZW5hIGRlIGZpbHRyb3NcbiAgICBjb25zdCB1bHRpbW9GaWx0cm8gPSBmaWx0cm9zQWN0aXZvc1tmaWx0cm9zQWN0aXZvcy5sZW5ndGggLSAxXTtcbiAgICBcbiAgICAvLyBDb25lY3RhciBlbCDDumx0aW1vIGZpbHRybyBhbCBtaWRfdml6XG4gICAgdWx0aW1vRmlsdHJvLmNvbm5lY3QobWlkX3Zpei5nZXQodGFiSWQpKTtcbiAgICBcbiAgICBpZiAoY29tcHJlc29yQWN0aXZvICYmIGNvbXByZXNzb3JzLmhhcyh0YWJJZCkpIHtcbiAgICAgIC8vIENvbmVjdGFyIG1pZF92aXogLT4gY29tcHJlc29yIC0+IHBvc3Rfdml6XG4gICAgICBtaWRfdml6LmdldCh0YWJJZCkuY29ubmVjdChjb21wcmVzc29ycy5nZXQodGFiSWQpKTtcbiAgICAgIGNvbXByZXNzb3JzLmdldCh0YWJJZCkuY29ubmVjdChwb3N0X3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbSU5GT10gQ2FkZW5hIGNvbmVjdGFkYSBjb24gJHtmaWx0cm9zQWN0aXZvcy5sZW5ndGh9IGZpbHRyb3MgeSBjb21wcmVzb3IgYWN0aXZvYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbmVjdGFyIG1pZF92aXogLT4gcG9zdF92aXogKHNpbiBjb21wcmVzb3IpXG4gICAgICBtaWRfdml6LmdldCh0YWJJZCkuY29ubmVjdChwb3N0X3Zpei5nZXQodGFiSWQpKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbSU5GT10gQ2FkZW5hIGNvbmVjdGFkYSBjb24gJHtmaWx0cm9zQWN0aXZvcy5sZW5ndGh9IGZpbHRyb3Mgc2luIGNvbXByZXNvcmApO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gRmluYWxpemFyIGxhIGNhZGVuYSBjb25lY3RhbmRvIGVsIHBvc3QtdmlzdWFsaXphZG9yIGEgbGEgc2FsaWRhXG4gIHBvc3Rfdml6LmdldCh0YWJJZCkuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgXG4gIGNvbnNvbGUubG9nKFwiW0lORk9dIENhZGVuYSBkZSBhdWRpbyByZWNvbmVjdGFkYVwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBbGxEYXRhKCkge1xuICBjb25zb2xlLmxvZyhcIltJTkZPXSBMaW1waWFuZG8gdG9kYXMgbGFzIGVzdHJ1Y3R1cmFzIGRlIGRhdG9zIGRlbCBvZmZzY3JlZW5cIik7XG4gIFxuICAvLyBEZXNjb25lY3RhciB5IGxpbXBpYXIgdG9kb3MgbG9zIG5vZG9zIGRlIGF1ZGlvXG4gIGZvciAoY29uc3QgW3RhYklkLCBjb250ZXh0XSBvZiBjb250ZXh0cy5lbnRyaWVzKCkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRGV0ZW5lciB0b2RvcyBsb3MgdHJhY2tzIGRlIGF1ZGlvXG4gICAgICBpZiAobWVkaWFzLmhhcyh0YWJJZCkpIHtcbiAgICAgICAgY29uc3QgbWVkaWEgPSBtZWRpYXMuZ2V0KHRhYklkKTtcbiAgICAgICAgbWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDZXJyYXIgZWwgY29udGV4dG8gZGUgYXVkaW9cbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuc3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgICBjb250ZXh0LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltFUlJPUl0gRXJyb3IgYWwgbGltcGlhciBjb250ZXh0byBwYXJhIHRhYlwiLCB0YWJJZCwgZSk7XG4gICAgfVxuICB9XG4gIFxuICAvLyBMaW1waWFyIHRvZGFzIGxhcyBlc3RydWN0dXJhcyBkZSBkYXRvc1xuICBmaWx0cm9zRGluYW1pY29zLmNsZWFyKCk7XG4gIGNvbnRleHRzLmNsZWFyKCk7XG4gIG1lZGlhcy5jbGVhcigpO1xuICBzb3VyY2VzLmNsZWFyKCk7XG4gIGxvb3BzLmNsZWFyKCk7XG4gIHByZV92aXouY2xlYXIoKTtcbiAgbWlkX3Zpei5jbGVhcigpOyAvLyBMaW1waWFyIGVsIG51ZXZvIGFuYWxpemFkb3JcbiAgcG9zdF92aXouY2xlYXIoKTtcbiAgc3RhdGljRmlsdGVycy5jbGVhcigpO1xuICBjb21wcmVzc29ycy5jbGVhcigpO1xuICBjb21wcmVzc29yU3RhdGVzLmNsZWFyKCk7XG4gIFxuICBjb25zb2xlLmxvZyhcIltJTkZPXSBUb2RhcyBsYXMgZXN0cnVjdHVyYXMgZGUgZGF0b3MgZGVsIG9mZnNjcmVlbiBoYW4gc2lkbyBsaW1waWFkYXNcIik7XG59XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImZpbHRyb3NEaW5hbWljb3MiLCJNYXAiLCJjb250ZXh0cyIsIm1lZGlhcyIsInNvdXJjZXMiLCJwb3B1cFBvcnQiLCJsb29wcyIsInByZV92aXoiLCJtaWRfdml6IiwicG9zdF92aXoiLCJzdGF0aWNGaWx0ZXJzIiwiY29tcHJlc3NvcnMiLCJjb21wcmVzc29yU3RhdGVzIiwic3RhdGljRmlsdGVyaW5nIiwib2Zmc2NyZWVuSW5pdGlhbGl6ZWQiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJfcmVmIiwiX2NhbGxlZSIsIm1zZyIsImZpbHRybyIsImNvbnRleHQiLCJzb3VyY2UiLCJfY29udGV4dCIsIl9jb21wcmVzc29yIiwiY29tcHJlc3NvciIsIl9jYWxsZWUkIiwiX2NvbnRleHQyIiwidDAiLCJoYXMiLCJ0YWJJZCIsImNvbnNvbGUiLCJlcnJvciIsImFsZXJ0IiwiZ2V0Iiwic2V0IiwiZmlsdHJvSWQiLCJub2RlIiwiY3JlYXRlQmlxdWFkRmlsdGVyIiwiYnlwYXNzIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwicmVjb25lY3RhckNhZGVuYSIsImZyZXF1ZW5jeSIsImZyZXEiLCJRIiwicSIsImdhaW4iLCJkaXNjb25uZWN0IiwiY3JlYXRlRHluYW1pY3NDb21wcmVzc29yIiwiYWN0aXZvIiwicGFyYW1zIiwidGhyZXNob2xkIiwidW5kZWZpbmVkIiwicmF0aW8iLCJrbmVlIiwiYXR0YWNrIiwicmVsZWFzZSIsIl94Iiwib25Db25uZWN0IiwicG9ydCIsImxvZyIsIm9uRGlzY29ubmVjdCIsInBvc3RNZXNzYWdlIiwicHJlX2JpbnMiLCJGbG9hdDMyQXJyYXkiLCJmcmVxdWVuY3lCaW5Db3VudCIsImdldEZsb2F0RnJlcXVlbmN5RGF0YSIsIm1pZF9iaW5zIiwicG9zdF9iaW5zIiwiZGF0YSIsInByZSIsIkFycmF5IiwiZnJvbSIsIm1pZCIsInBvc3QiLCJtaW5EZWNpYmVscyIsIm1heERlY2liZWxzIiwiX3JlZjIiLCJfY2FsbGVlMiIsIm1lZGlhIiwidm9sdW1lIiwibmV3RmlsdHJvcyIsInZvbHVtZU5vZGUiLCJfZiIsIl9jb250ZXh0MyIsIl9mMiIsIl9mMyIsIl92b2x1bWUiLCJfbWVkaWEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDQiLCJ0YXJnZXQiLCJjbGVhckFsbERhdGEiLCJzZW5kTWVzc2FnZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwibWFuZGF0b3J5IiwiY2hyb21lTWVkaWFTb3VyY2UiLCJjaHJvbWVNZWRpYVNvdXJjZUlkIiwic3RyZWFtSWQiLCJBdWRpb0NvbnRleHQiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIkFuYWx5c2VyTm9kZSIsImZmdFNpemUiLCJzbW9vdGhpbmdUaW1lQ29uc3RhbnQiLCJjcmVhdGVHYWluIiwibGV2ZWwiLCJzZXR1cEVRIiwic2l6ZSIsIm5ld0ZpbHRybyIsImlkIiwiYmFuZGEiLCJ2YWxvciIsInN1YiIsImJhc3MiLCJsb3dNaWQiLCJoaWdoTWlkIiwiaGlnaCIsImFpciIsInN0YXRlIiwiY2xvc2UiLCJnZXRUcmFja3MiLCJ0cmFjayIsIl94MiIsImZpbHRlcnMiLCJmaWx0cm9zQWN0aXZvcyIsImNvbmNhdCIsImNvbXByZXNvckFjdGl2byIsInVsdGltb0ZpbHRybyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsImVyciIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==