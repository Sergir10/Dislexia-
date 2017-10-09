(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameTwo', {
      templateUrl: 'app/games/game.2.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(toastr, $scope) {
    var vm = this;

    vm.words = ['pato', 'maleta', 'caballo', 'falda', 'beso', 'rama', 'mapa', 'soga'];
    vm.wrongWords = ['palo', 'maceta', 'cabello', 'falta', 'peso', 'rima', 'masa', 'sopa'];
    vm.letterOne = ['t', 'l', 'a', 'd', 'b', 'a', 'p', 'g'];
    vm.letterTwo = ['l', 'c', 'e', 't', 'p', 'i', 's', 'p'];
    vm.valid = [];

    vm.actions = {checkAnswer: checkAnswer};

    function checkAnswer() {
      if ($scope.findForm.innerForm.wordOne.$valid && $scope.findForm.innerForm.wordTwo.$valid && $scope.findForm.$valid) {
        vm.words.forEach(function (word, index) {
          vm.valid[index] = vm.letterOne[index] === vm.word[index].one && vm.letterTwo[index] === vm.word[index].two
        });
      } else {
        toastr.error("Faltan campos para completar.")
      }
    }

  }
})();
