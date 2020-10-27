import * as  tf from '@tensorflow/tfjs-node-gpu';

const model = await tf.loadLayersModel('file:///dev/shm/brain/model.json');

// obscure looking tf operations taken from
// https://github.com/prouhard/tfjs-mountaincar/blob/master/src/js/model.js#L69-L74
const pred = model.predict(tf.tensor([ Array(400) ]));
const sigmoid = tf.sigmoid(pred);
const probs = tf.div(sigmoid, tf.sum(sigmoid));
const end = tf.multinomial(probs, 1).dataSync()[0] - 1;

console.log('probs', end);