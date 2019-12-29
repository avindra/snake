import {createModel} from './model';
import * as  tf from '@tensorflow/tfjs-node-gpu';
import {createWorld} from './../world';
import {worldToVector} from './worldToVector';

const width = 20;
const height = 20;

const inputVectorSize = width * height;
const model = createModel(inputVectorSize);

(async () => {
  const world = createWorld(width, height);
  const vector = worldToVector(world);

  console.log('world vector', vector.length, vector);
  // Generate some synthetic data for training.
  const gameData = tf.tensor([vector] );
  const resultantAction = tf.tensor([ [0,1,2,3,4] ]);

  // Train the model using the data.
  const history = await model.fit(gameData, resultantAction, {
    verbose: 2,
    epochs: 20,
    callbacks: tf.node.tensorBoard('/dev/shm/snake_tf_logs'),
  });
  console.log(history.validationData)

  const result = await model.save("file:///dev/shm/brain");
  if(result.errors) {
    console.log("error while saving model", result.errors);
  }

  console.log('prediction', model.predict(gameData));

})();

/**
 * Using the model
 * 
 * on a data point the model hasn't seen before:
 * see the output
 */
 //model.predict(tf.tensor2d([5], [1, 1])).print();