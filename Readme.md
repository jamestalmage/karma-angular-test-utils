karma-ng-test-utils
-------------------
Karma preprocessor support for [ng-test-utils](https://github.com/jamestalmage/angular-test-utils).
This is the recommended way to apply the transforms to your tests.

Install:
```
npm install --save-dev ng-test-utils karma-ng-test-utils
```

Here is an example excerpt from a `karma.conf.js` folder using both coffee and ng-test-utils.

```javascript
preprocessors: {
  'example/src/*-test.coffee':['coffee','ng-test-utils'],
  'example/src/*-test.js':['ng-test-utils']
},
ngTestUtilsPreprocessor:{
  sourceMap:true
},
coffeePreprocessor: {
  options: {
    bare: true,
    sourceMap: true
  }
}

```
