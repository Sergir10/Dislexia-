(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameThree', {
      templateUrl: 'app/games/game.3.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(toastr, $scope) {
    var vm = this;

    vm.words = ['Ro-sa-do', 'Co-lor', 'Pa-qui-ta', 'Ca-pe-ru-ci-ta', 'Di-no-sau-rio', 'Co-mi-sa-ri-a', 'Ca-mi-se-ta', 'A-mor', 'Bus'];
    vm.images = ['rosado', 'color', 'paquita', 'caperucita', 'dinosaurio', 'comisaria', 'camisa', 'amor', 'bus'];
    vm.realNumber = [3, 2, 3, 5, 4, 5, 4, 2, 1];
    vm.valid = [];

    vm.actions = {
      checkAnswer: checkAnswer
    };

    function checkAnswer() {
      if ($scope.countForm.$valid && $scope.countForm.innerForm.$valid) {
        vm.realNumber.forEach(function (num, index) {
          vm.valid[index] = num === vm.numberWord[index]
        });
      } else {
        toastr.error("Faltan campos por completar, por favor revisa.");
      }
    }
  }
})();
