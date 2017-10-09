(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .service('gameSevenService', gamesData);

  /** @ngInject */
  function gamesData() {
    var data = [
      'La casa de pepito está muy lejos de la mía',
      'Carlitos es mi mejor amigo',
      'Mi mama prepara una deliciosa sopa de caracoles',
      'En la mochila llevo el cuaderno de geografía',
      'Comienza el día con una sonrisa',
      'La casa es azul',
      'Para llegar a mi cabaña tengo que subir las escaleras',
      'Cerca del colegio han montado un circo'
    ];

    this.getData = getData;

    function getData() {
      return data;
    }
  }

})();
