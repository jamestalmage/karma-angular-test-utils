var ngInject = require('ng-test-utils');
var path = require('path');

var createNgInjectPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.ng-test-utils');

  var defaultOptions = {
    sourceMap: false
  };
  var options = helper.merge(defaultOptions, args || {}, config || {});


  return function(content, file, done) {
    var result = null;
    var map;
    var datauri;

    log.debug('Processing "%s".', file.originalPath);
    file.path = file.originalPath;

    var opts = {};

    if(options.sourceMap){
      opts.sourceFileName = file.originalPath; // TODO: Should this just be file.path?
    }

    try {
      result = ngInject(content, opts);
    } catch (e) {
      log.error('%s\n  at %s:%d', e.message, file.originalPath, e.location.first_line);
      return done(e, null);
    }

    if (result.map) {
      map = result.map;
      map.sources[0] = path.basename(file.originalPath) ;
      map.sourcesContent = [content];
      map.file = path.basename(file.path);
      file.sourceMap = map;
      datauri = 'data:application/json;charset=utf-8;base64,' + new Buffer(JSON.stringify(map)).toString('base64')
      done(null, result.code + '\n//@ sourceMappingURL=' + datauri + '\n');
    } else {
      done(null, result.code)
    }
  };
};

createNgInjectPreprocessor.$inject = ['args', 'config.ngInjectPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:ng-inject': ['factory', createNgInjectPreprocessor]
};