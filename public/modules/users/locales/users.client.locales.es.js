'use strict';

angular.module('users').config(['$translateProvider', function(translate){
    translate.translations('es', {
      'PRUEBA': 'Prueba',
      'INICIO': 'Inicio'
    });
    translate.preferredLanguage('es');
  }
]);