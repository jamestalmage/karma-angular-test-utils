var testUtils = require('ng-test-utils');
var path     = require('path');

var createNgInjectPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.ng-test-utils');

  var defaultOptions = {
    sourceMap: false
  };
  var options = helper.merge(defaultOptions, args || {}, config || {});


  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path = file.originalPath;

    var opts = helper.merge({
      sourceFileName: file.originalPath,
      appendSourceMapComment: true
    },options);

    try {
      var result = testUtils(content, opts);
      if(result.map) file.sourceMap = result.map;
      done(null, result.code);
    } catch (e) {
      log.error('%s\n  at %s:%d', e.message, file.originalPath, e.location && e.location.first_line);
      return done(e, null);
    }
  };
};

createNgInjectPreprocessor.$inject = ['args', 'config.ngInjectPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:ng-inject': ['factory', createNgInjectPreprocessor]
};