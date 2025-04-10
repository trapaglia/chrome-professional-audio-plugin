// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabCapture.capture({ audio: true, video: false }, (stream) => {
//     const audioContext = new AudioContext();
//     const source = audioContext.createMediaStreamSource(stream);

//     const equalizer = audioContext.createBiquadFilter();
//     equalizer.type = "peaking";
//     equalizer.frequency.value = 1000; // Hz
//     equalizer.gain.value = 5; // dB

//     source.connect(equalizer);
//     equalizer.connect(audioContext.destination);
//   });
// });

chrome.action.onClicked.addListener((tab) => {
  chrome.tabCapture.capture({ audio: true, video: false }, (stream) => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);

    // Graves
    const low = audioContext.createBiquadFilter();
    low.type = "lowshelf";
    low.frequency.value = 60;
    low.gain.value = 15; // aumenta graves

    // Medios
    const mid = audioContext.createBiquadFilter();
    mid.type = "peaking";
    mid.frequency.value = 1000;
    mid.Q.value = 1; // ancho de banda medio
    mid.gain.value = -10; // reduce medios

    // Agudos
    const high = audioContext.createBiquadFilter();
    high.type = "highshelf";
    high.frequency.value = 8000;
    high.gain.value = 12; // aumenta agudos

    // Conexión de filtros en serie
    source.connect(low);
    low.connect(mid);
    mid.connect(high);
    high.connect(audioContext.destination);
  });
});
