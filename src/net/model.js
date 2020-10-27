import * as tf from '@tensorflow/tfjs-node-gpu';

export const createModel = (inputVectorSize) => {
  const model = tf.sequential();
  const worldInput = tf.layers.dense({ units: 1,inputShape: [inputVectorSize], name: 'world'});
  model.add(worldInput);

  // 5 possible actions may be taken
  model.add(tf.layers.dense({ units: 5,  name: 'actions'}));


  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  model.summary();
  return model;
}