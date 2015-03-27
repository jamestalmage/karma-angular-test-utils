var testUtils = require('tang');
var path     = require('path');

var createNgInjectPreprocessor = function(config, logger, helper) {

  var log = logger.create('preprocessor.tang');

  var defaultOptions = {
    sourceMap: false
  };
  var options = helper.merge(defaultOptions, config || {});


  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path = file.originalPath;

    var opts = helper.merge({
      sourceFileName: file.originalPath,
      appendSourceMapComment: true
    },options);

    try {
      var result = testUtils(content, opts);
      if(result.map){
        file.sourceMap = result.map.toObject();
      }
      done(null, result.code);
    } catch (e) {
      log.error('%s\n  at %s:%d', e.message, file.originalPath, e.location && e.location.first_line);
      return done(e, null);
    }
  };
};

createNgInjectPreprocessor.$inject = ['config.ngTestUtilsPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:tang': ['factory', createNgInjectPreprocessor]
};