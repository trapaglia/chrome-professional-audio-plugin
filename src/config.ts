import { Compresor, actualizarValorCompresor } from "./compressor.js";
export let activeFrequencyMarker: number | null = null;
export let activeQMarker: number | null = null;
export let compresorActivo: boolean = false;
export let staticFiltering: boolean = false;
export const filters = ["sub", "bass", "lowMid", "mid", "highMid", "high", "air"];
export let compresorParams: Compresor = {
  threshold: -24,
  ratio: 4,
  knee: 30,
  attack: 0.003,
  release: 0.25
};

export function setActiveFrequencyMarker(frequency: number | null) { activeFrequencyMarker = frequency; }
export function getActiveFrequencyMarker() { return activeFrequencyMarker; }
export function setActiveQMarker(q: number | null) { activeQMarker = q; }
export function getActiveQMarker() { return activeQMarker; }    
export function setCompresorActivo(activo: boolean) { compresorActivo = activo; }
export function getCompresorActivo() { return compresorActivo; }
export function setCompresorParam(param: keyof Compresor, value: number) { 
    compresorParams[param] = value; 
    actualizarValorCompresor(param, value);
}
export function getCompresorParam(param: keyof Compresor) { return compresorParams[param]; }
