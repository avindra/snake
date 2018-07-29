const context = new AudioContext();
const masterVolume = context.createGain();

masterVolume.gain.value = 0.3;
masterVolume.connect(context.destination);
let currentNote = -1;
let increasing = true;



/* walk up and down C major scale */
const scale = [
  16.35,
  18.35,
  20.60,
  21.83,
  24.50,
  27.50,
  30.87,
  32.70,
];

export default function beep() {
  const osc = context.createOscillator();
  const osc2 = context.createOscillator();

  if (increasing) {
    ++currentNote;
    if (currentNote === scale.length - 1) {
      increasing = false;
    }
  } else {
    --currentNote;
    if (currentNote === 0) {
      increasing = true;
    }
  }

  const frequency = scale[currentNote] * 10;

  osc.frequency.value = frequency;
  osc.type = 'sawtooth';

  osc2.frequency.value = frequency;
  osc2.type = 'triangle';

  osc.connect(masterVolume);
  osc2.connect(masterVolume);

  osc.start(context.currentTime);
  osc2.start(context.currentTime);

  osc.stop(context.currentTime + 0.25);
  osc2.stop(context.currentTime + 0.25);
}
