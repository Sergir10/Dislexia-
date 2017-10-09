(function() {
  'use strict';

  angular
    .module('dislexiaApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
