karma-tang
-------------------
Karma preprocessor support for [tang](https://github.com/jamestalmage/tang).

[Tang](https://github.com/jamestalmage/tang) provides a series of annotations that make it easier
to test your angular code. See the [tang readme](https://github.com/jamestalmage/tang) to understand what
is possible.

This plugin is the recommended way to apply the `tang` annotations to your tests.

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
