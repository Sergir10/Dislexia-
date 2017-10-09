(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameSeven', {
      templateUrl: 'app/games/game.7.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(gameSevenService, toastr, $scope) {
    var vm = this;

    vm.images = ['1', '2', '3', '4', '5', '6', '7', '8'];
    vm.data = [];
    vm.valid = [];

    vm.actions = {checkAnswer: checkAnswer};

    init();

    function init() {
      vm.data = gameSevenService.getData();
    }

    function checkAnswer() {
      if ($scope.countForm.$valid && $scope.countForm.innerForm.$valid) {
        vm.data.forEach(function (data, index) {
          vm.valid[index] = data.split(" ").length === vm.countWord[index];
          console.log(data.split(" ").length)
        })
      } else {
        toastr.error("Faltan campos por llenar, por favor verifica");
      }
    }


  }
})();
