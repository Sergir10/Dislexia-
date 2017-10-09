(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameFour', {
      templateUrl: 'app/games/game.4.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(toastr, $scope) {
    var vm = this;

    vm.wrongWords = ['li-po-cia', 'ver-di-do-ti', 'da-a-yu', 'por-de-te', 'vo-ri-fa-ta', 'qui-lla-ta'];
    vm.words = ['policia', 'divertido', 'ayuda', 'deporte', 'favorita', 'taquilla'];
    vm.valid = [];
    vm.images = ['1', '2', '3', '4', '5', '6'];

    vm.actions = {checkAnswer: checkAnswer};

    function checkAnswer() {
      if ($scope.orderForm.innerForm.order.$valid && $scope.orderForm.$valid) {
        vm.words.forEach(function (word, index) {
          vm.valid[index] = word === vm.orderWords[index].toLowerCase();
        });
      } else {
        toastr.error("Faltan campos por completar.");
      }
    }
  }
})();
