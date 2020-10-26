import * as  tf from '@tensorflow/tfjs-node-gpu';

const model = await tf.loadLayersModel('file:///dev/shm/brain/model.json');
model.loadWeights()

console.log('prediction', model.predict(tf.tensor([ Array(400) ])));