/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0RPLFNBQVNBLFlBQVlBLENBQUNDLE1BQWUsRUFBRUMsVUFBa0IsRUFBRUMsV0FBbUIsRUFBVztFQUM5RixJQUFJRixNQUFNLENBQUNHLE1BQU0sSUFBSUYsVUFBVSxFQUFFLE9BQU9ELE1BQU07RUFFOUMsSUFBTUksUUFBaUIsR0FBRyxFQUFFO0VBRTVCQSxRQUFRLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXhCLEtBQUssSUFBSU0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixNQUFNLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUVHLENBQUMsRUFBRSxFQUFFO0lBQzFDO0lBQ0EsSUFBTUMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FDN0IsQ0FBQyxFQUNERCxJQUFJLENBQUNFLEtBQUssQ0FBQ1QsVUFBVSxHQUFHTyxJQUFJLENBQUNHLEdBQUcsQ0FBRVgsTUFBTSxDQUFDTSxDQUFDLENBQUMsQ0FBQ00sQ0FBQyxHQUFHVixXQUFXLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUN0RSxDQUFDO0lBRUQsSUFBTVcsVUFBVSxHQUFHTCxJQUFJLENBQUNFLEtBQUssQ0FBQ0gsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUNqRCxJQUFNTyxRQUFRLEdBQUdOLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRUgsQ0FBQyxHQUFHTyxVQUFVLENBQUM7SUFDNUMsSUFBTUUsTUFBTSxHQUFHUCxJQUFJLENBQUNRLEdBQUcsQ0FBQ2hCLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRUcsQ0FBQyxHQUFHTyxVQUFVLENBQUM7SUFFMUQsSUFBSUksSUFBSSxHQUFHLENBQUM7SUFDWixLQUFLLElBQUlDLENBQUMsR0FBR0osUUFBUSxFQUFFSSxDQUFDLElBQUlILE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7TUFDdkNELElBQUksSUFBSWpCLE1BQU0sQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDQyxDQUFDO0lBQ3JCO0lBRUEsSUFBTUMsSUFBSSxHQUFHSCxJQUFJLElBQUlGLE1BQU0sR0FBR0QsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUMzQ1YsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFBRU8sQ0FBQyxFQUFFWixNQUFNLENBQUNNLENBQUMsQ0FBQyxDQUFDTSxDQUFDO01BQUVPLENBQUMsRUFBRUM7SUFBSyxDQUFDLENBQUM7RUFDNUM7RUFFQSxJQUFJcEIsTUFBTSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3JCQyxRQUFRLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDQSxNQUFNLENBQUNHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMxQztFQUVBLE9BQU9DLFFBQVE7QUFDakI7O0FBRUE7QUFDTyxTQUFTaUIsUUFBUUEsQ0FBQ0MsRUFBVSxFQUFVO0VBQzNDLE9BQU9kLElBQUksQ0FBQ0csR0FBRyxDQUFDLEVBQUUsRUFBRVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM5QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1wcm9mZXNzaW9uYWwtYXVkaW8tcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLXByb2Zlc3Npb25hbC1hdWRpby1wbHVnaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtcHJvZmVzc2lvbmFsLWF1ZGlvLXBsdWdpbi8uL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInR5cGUgUG9pbnQgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3RoUG9pbnRzKHBvaW50czogUG9pbnRbXSwgd2luZG93U2l6ZTogbnVtYmVyLCBjYW52YXNXaWR0aDogbnVtYmVyKTogUG9pbnRbXSB7XG4gIGlmIChwb2ludHMubGVuZ3RoIDw9IHdpbmRvd1NpemUpIHJldHVybiBwb2ludHM7XG5cbiAgY29uc3Qgc21vb3RoZWQ6IFBvaW50W10gPSBbXTtcblxuICBzbW9vdGhlZC5wdXNoKHBvaW50c1swXSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgLy8gY29uc3QgYWRhcHRpdmVXaW5kb3cgPSBNYXRoLm1pbihcbiAgICBjb25zdCBhZGFwdGl2ZVdpbmRvdyA9IE1hdGgubWF4KFxuICAgICAgMixcbiAgICAgIE1hdGguZmxvb3Iod2luZG93U2l6ZSAqIE1hdGgucG93KChwb2ludHNbaV0ueCAvIGNhbnZhc1dpZHRoKSwgMikgKiAzKVxuICAgICk7XG5cbiAgICBjb25zdCBoYWxmV2luZG93ID0gTWF0aC5mbG9vcihhZGFwdGl2ZVdpbmRvdyAvIDIpO1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gTWF0aC5tYXgoMCwgaSAtIGhhbGZXaW5kb3cpO1xuICAgIGNvbnN0IGVuZElkeCA9IE1hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgaGFsZldpbmRvdyk7XG5cbiAgICBsZXQgc3VtWSA9IDA7XG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0SWR4OyBqIDw9IGVuZElkeDsgaisrKSB7XG4gICAgICBzdW1ZICs9IHBvaW50c1tqXS55O1xuICAgIH1cblxuICAgIGNvbnN0IGF2Z1kgPSBzdW1ZIC8gKGVuZElkeCAtIHN0YXJ0SWR4ICsgMSk7XG4gICAgc21vb3RoZWQucHVzaCh7IHg6IHBvaW50c1tpXS54LCB5OiBhdmdZIH0pO1xuICB9XG5cbiAgaWYgKHBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgc21vb3RoZWQucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBzbW9vdGhlZDtcbn1cblxuLy8gRnVuY2nDs24gcGFyYSBjb252ZXJ0aXIgZEIgYSB2YWxvciBkZSBnYW5hbmNpYSBwYXJhIFdlYiBBdWRpbyBBUElcbmV4cG9ydCBmdW5jdGlvbiBkYlRvR2FpbihkYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KDEwLCBkYiAvIDIwKTtcbn0iXSwibmFtZXMiOlsic21vb3RoUG9pbnRzIiwicG9pbnRzIiwid2luZG93U2l6ZSIsImNhbnZhc1dpZHRoIiwibGVuZ3RoIiwic21vb3RoZWQiLCJwdXNoIiwiaSIsImFkYXB0aXZlV2luZG93IiwiTWF0aCIsIm1heCIsImZsb29yIiwicG93IiwieCIsImhhbGZXaW5kb3ciLCJzdGFydElkeCIsImVuZElkeCIsIm1pbiIsInN1bVkiLCJqIiwieSIsImF2Z1kiLCJkYlRvR2FpbiIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==