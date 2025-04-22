export function smoothPoints(points, windowSize, canvasWidth) {
    if (points.length <= windowSize)
        return points;
    const smoothed = [];
    smoothed.push(points[0]);
    for (let i = 1; i < points.length - 1; i++) {
        // const adaptiveWindow = Math.min(
        const adaptiveWindow = Math.max(2, Math.floor(windowSize * Math.pow((points[i].x / canvasWidth), 2) * 3));
        const halfWindow = Math.floor(adaptiveWindow / 2);
        const startIdx = Math.max(0, i - halfWindow);
        const endIdx = Math.min(points.length - 1, i + halfWindow);
        let sumY = 0;
        for (let j = startIdx; j <= endIdx; j++) {
            sumY += points[j].y;
        }
        const avgY = sumY / (endIdx - startIdx + 1);
        smoothed.push({ x: points[i].x, y: avgY });
    }
    if (points.length > 1) {
        smoothed.push(points[points.length - 1]);
    }
    return smoothed;
}
// Función para convertir dB a valor de ganancia para Web Audio API
export function dbToGain(db) {
    return Math.pow(10, db / 20);
}
