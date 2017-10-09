(function () {
  'use strict';

  angular
    .module('dislexiaApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('games', {
        url: '/games',
        component: 'mainGame'
      })
      .state('games.2', {
        url: '/games/2',
        component: 'gameTwo'
      })
      .state('games.3', {
        url: '/games/3',
        component: 'gameThree'
      })
      .state('games.4', {
        url: '/games/4',
        component: 'gameFour'
      })
      .state('games.5', {
        url: '/games/5',
        component: 'gameFive'
      })
      .state('games.6', {
        url: '/games/6',
        component: 'gameSix'
      })
      .state('games.7', {
        url: '/games/7',
        component: 'gameSeven'
      })
      .state('games.8', {
        url: '/games/8',
        component: 'gameEight'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
