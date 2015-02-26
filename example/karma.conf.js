module.exports = function(karma){
  karma.set({
    frameworks: ['mocha'],

    files: [
      "../node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "src/math.js",
      "src/math-test.js"
    ],

    browsers: ['Chrome'],

    preprocessors: {
      '**/*-test.js': ['ng-inject']
    },

    ngInjectPreprocessor:{
      sourceMap:true
    },

    singleRun: false,
    autoWatch: true
  });
};