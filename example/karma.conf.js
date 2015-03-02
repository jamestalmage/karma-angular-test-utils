module.exports = function(karma){
  karma.set({
    frameworks: ['mocha'],

    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "src/math.js",
      "src/math-test.js",
      "src/math-coffee-test.coffee"
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*-test.js': ['ng-inject'],
      '**/*-test.coffee': ['coffee', 'ng-inject']
    },

    ngInjectPreprocessor:{
      sourceMap:true
    },

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: true
      }
    },

    singleRun: true,
    autoWatch: false
  });
};