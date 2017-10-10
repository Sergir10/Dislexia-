(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameEight', {
      templateUrl: 'app/games/game.8.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(toastr, $scope) {
    var vm = this;

    vm.images = ['1', '2', '3', '4', '5', '6', '7', '8'];
    vm.words = [
      {one: 'Caracol', two: 'Colmena', three: 'col'},
      {one: 'Montaña', two: 'Araña', three: 'ña'},
      {one: 'Pollo', two: 'Zapote', three: 'po'},
      {one: 'Pelota', two: 'Arequipe', three: 'pe'},
      {one: 'Pocillo', two: 'Castillo', three: 'illo'},
      {one: 'Fotografía', two: 'Tomate', three: 'to'},
      {one: 'Lamina', two: 'Nación', three: 'na'},
      {one: 'Basura', two: 'Suculenta', three: 'su'}
    ];
    vm.valid = [];

    vm.actions = {checkAnswer: checkAnswer};

    function checkAnswer() {
      if ($scope.countForm.$valid && $scope.countForm.innerForm.$valid) {
        vm.words.forEach(function (date, index) {
          vm.valid[index] = vm.word[index] === vm.words[index].three;
        })
      } else {
        toastr.error("Faltan campos por llenar");
      }

    }
  }
})();
