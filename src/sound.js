const context = new AudioContext();
const masterVolume = context.createGain();

masterVolume.gain.value = 0.3;
masterVolume.connect(context.destination);
let frequency = 20;

export default function beep() {
  let osc = context.createOscillator();
  let osc2 = context.createOscillator();

  frequency += Math.random() > .5 ? 50 : 20;

  if(frequency > 150) frequency  = 20;

  osc.frequency.value = frequency;
  osc.type = 'sawtooth';

  osc2.frequency.value = frequency;
  osc2.type = 'triangle';

  osc.connect(masterVolume);
  osc2.connect(masterVolume);

  osc.start(context.currentTime);
  osc2.start(context.currentTime);

  osc.stop(context.currentTime + .25);
  osc2.stop(context.currentTime + .25);
}