
## Common errors / workflow stuff

```sh
yarn build:tfjs
```

Problem: Binding errors from tensorflow

Solution: rebuild the package

npm rebuild @tensorflow/tfjs-node-gpu --build-from-source

https://github.com/tensorflow/tfjs/issues/2046#issuecomment-532033628