var gulp = require('gulp');
var utils = require('angular-test-utils-test-utils');
var karma = require('karma').server;

gulp.task('math', function(cb) {
  karma.start(karmaConf(false, false), cb);
});

gulp.task('math-error', function(cb) {
  karma.start(karmaConf(false, true), utils.validateErrorMapping(
    './build/math-error-report.xml',
    /math-error-test.js:29:\d+/,
    cb
  ));
});

gulp.task('math-coffee', function(cb) {
  karma.start(karmaConf(true, false), cb);
});

gulp.task('math-coffee-error', function(cb) {
  karma.start(karmaConf(true, true), utils.validateErrorMapping(
    './build/math-coffee-error-report.xml',
    /math-coffee-error-test.coffee:24:\d+/,
    cb
  ));
});

gulp.task('default',[
  'math',
  'math-error',
  'math-coffee',
  'math-coffee-error'
],utils.success);

function karmaConf(coffee, error){
  const prefix = (coffee ? 'math-coffee' : 'math');
  return utils.karmaTemplate(prefix, error,
    [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'example/src/math.js',
      'example/src/{prefix}{error}-test.' + (coffee ? 'coffee' : 'js')
    ],
    {
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
      },
      plugins: [
        "karma-angular",
        "karma-chrome-launcher",
        "karma-coffee-preprocessor",
        "karma-firefox-launcher",
        "karma-junit-reporter",
        "karma-mocha",
        require('./index.js')
      ]
    }
  )
}