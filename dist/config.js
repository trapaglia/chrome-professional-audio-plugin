import { actualizarValorCompresor } from "./compressor.js";
export let activeFrequencyMarker = null;
export let activeQMarker = null;
export let compresorActivo = false;
export let staticFiltering = false;
export const filters = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
export let compresorParams = {
    threshold: -24,
    ratio: 4,
    knee: 30,
    attack: 0.003,
    release: 0.25
};
export function setActiveFrequencyMarker(frequency) { activeFrequencyMarker = frequency; }
export function getActiveFrequencyMarker() { return activeFrequencyMarker; }
export function setActiveQMarker(q) { activeQMarker = q; }
export function getActiveQMarker() { return activeQMarker; }
export function setCompresorActivo(activo) { compresorActivo = activo; }
export function getCompresorActivo() { return compresorActivo; }
export function setCompresorParam(param, value) {
    compresorParams[param] = value;
    actualizarValorCompresor(param, value);
}
export function getCompresorParam(param) { return compresorParams[param]; }
