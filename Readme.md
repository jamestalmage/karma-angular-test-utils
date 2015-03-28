karma-tang
-------------------
Karma preprocessor support for [tang](https://github.com/jamestalmage/tang).
This is the recommended way to apply the transforms to your tests.

Install:
```
npm install --save-dev tang karma-tang
```

Here is an example excerpt from a `karma` config using both coffee and ng-test-utils.

```javascript
preprocessors: {
  'example/src/*-test.coffee':['coffee','tang'],
  'example/src/*-test.js':['tang']
},
tang:{
  sourceMap:true
},
coffeePreprocessor: {
  options: {
    bare: true,
    sourceMap: true
  }
}

```
