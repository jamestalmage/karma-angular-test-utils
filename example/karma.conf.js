module.exports = function(karma){
  karma.set({
    frameworks: ['angular', 'mocha'],

    files: [
      "src/math.js",
      "src/math-test.js",
      "src/math-coffee-test.coffee"
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*-test.js': ['ng-test-utils'],
      '**/*-test.coffee': ['coffee', 'ng-test-utils']
    },

    ngTestUtilsPreprocessor:{
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