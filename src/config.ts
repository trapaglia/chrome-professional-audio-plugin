export let activeFrequencyMarker: number | null = null;
export let activeQMarker: number | null = null;

export function setActiveFrequencyMarker(frequency: number | null) { activeFrequencyMarker = frequency; }
export function getActiveFrequencyMarker() { return activeFrequencyMarker; }
export function setActiveQMarker(q: number | null) { activeQMarker = q; }
export function getActiveQMarker() { return activeQMarker; }    
