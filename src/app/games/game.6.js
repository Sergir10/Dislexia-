(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameSix', {
      templateUrl: 'app/games/game.6.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(toastr, $scope) {
    var vm = this;

    vm.words = ['Ca', 'Pa', 'Lo', 'Re', 'No', 'Bra', 'Tra', 'Za', 'Cu', 'Me'];
    vm.valid = [];
    vm.actions = {checkAnswer: checkAnswer};

    function checkAnswer() {
      if ($scope.buildForm.innerForm.wordOne.$valid && $scope.buildForm.innerForm.wordTwo.$valid && $scope.buildForm.$valid) {
        vm.words.forEach(function (word, i) {
          vm.valid[i] = vm.word[i].one.toLowerCase().includes(word.toLowerCase()) && vm.word[i].two.toLowerCase().includes(word.toLowerCase());
        })
      } else {
        toastr.error("Faltan campos por completar");
      }
    }
  }
})();
