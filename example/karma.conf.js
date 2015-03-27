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
      '**/*-test.js': ['tang'],
      '**/*-test.coffee': ['coffee', 'tang']
    },

    tang:{
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