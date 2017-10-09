(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('mainGame', {
      templateUrl: 'app/games/main.games.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(gamesData, toastr) {
    var vm = this;
    vm.games = [];

    vm.actions = {};

    init();

    function init() {
      vm.games = gamesData.getGames()
    }
  }
})();
