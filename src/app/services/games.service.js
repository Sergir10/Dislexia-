(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .service('gamesData', gamesData);

  /** @ngInject */
  function gamesData() {
    var data = [
      {
        'title': 'Busca la letra en el texto',
        'description': 'A continuación encontrarás un cuento corto el cual debes leer e identificar la letra que se pide',
      },
      {
        'title': 'Encuentra la diferencia',
        'description': 'A continuación encontrarás dos palabras similares en las cuales solo cambia una letra, debes identificar cual es la letra que cambia',
      },
      {
        'title': 'Contando sílabas',
        'description': 'A continuación encontrarás unas palabras divididas por sílabas, debes leer e indicar cuántas sílabas hay.',
      },
      {
        'title': 'Ordena las sílabas de manera correcta',
        'description': 'A continuación encontrarás las sílabas en desorden de una palabra,  debes organizarlas y descubrir qué palabra es.',
      },
      {
        'title': 'Indica qué sílaba falta',
        'description': 'A continuación encontrarás una palabra incompleta, debes escribir la sílaba que falta.',
      },
      {
        'title': 'Formando palabras',
        'description': 'A continuación van a salir sílabas, debes formar mínimo dos palabras con cada una de ellas.',
      },
      {
        'title': 'Cuántas palabras tiene la frase',
        'description': 'A continuación encontrarás diferentes frases, debes leerlas e indicar cuántas palabras tiene la frase.',
      },
      {
        'title': 'Sílabas en común',
        'description': 'A continuación te vas a encontrar con dos palabras, debes leerlas e indicar cuál es la sílaba que tienen en común.',
      },
    ];

    this.getGames = getGames;

    function getGames() {
      return data;
    }
  }

})();
