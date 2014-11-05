'use strict';

angular.module('users').config(['$translateProvider', function(translate){
    translate.translations('en', {
      'PRUEBA': 'Test',
      'INICIO': 'Home'
    });
    //translate.preferredLanguage('en');
  }
]);