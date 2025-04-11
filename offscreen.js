let contexts = new Map();
let gains = new Map();

chrome.runtime.onMessage.addListener(async (msg) => {
  if (msg.target !== "offscreen") return;

  if (msg.type === "start-processing") {
    const media = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: "tab",
          chromeMediaSourceId: msg.streamId,
        },
      },
    });

    const context = new AudioContext();
    const source = context.createMediaStreamSource(media);
    const gain = context.createGain();
    gain.gain.value = msg.level;

    source.connect(gain);
    gain.connect(context.destination);

    contexts.set(msg.tabId, context);
    gains.set(msg.tabId, gain);
  }

  if (msg.type === "adjust-volume") {
    const gain = gains.get(msg.tabId);
    if (gain) gain.gain.value = msg.level;
  }
});