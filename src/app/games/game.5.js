(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .component('gameFive', {
      templateUrl: 'app/games/game.5.html',
      controller: GameCtrl,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function GameCtrl(toastr) {
    var vm = this;

    vm.wrongWords = ['Co---zon', 'Ba---dero', '---lanciin', 'Car---ro', 'Pa---tiempo', 'Com---tador'];
    vm.words = ['Corazón', 'Barrendero', 'Balancín', 'Cartero', 'Pasatiempo', 'Computador'];
    vm.correct = ['ra', 'rren', 'ba', 'te', 'sa', 'pu'];
    vm.suggestion = [['la', 'ra', 'pa'], ['rran', 'rrin', 'rren'], ['ba', 'pa', 'ca'], ['te', 'ta', 'pe'], ['la', 'sa', 'ca'], ['pu', 'tu', 'pa']];
    vm.valid = [[false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false], [false, false, false]];

    vm.actions = {check: check};

    function check(parentIndex, index) {
      if (vm.correct[parentIndex] === vm.suggestion[parentIndex][index]) {
        vm.valid[parentIndex][index] = vm.correct[parentIndex] === vm.suggestion[parentIndex][index];
      } else {
        vm.valid[parentIndex].forEach(function (_, i) {
          vm.valid[parentIndex][i] = false;
        })
      }
    }
  }
})();
