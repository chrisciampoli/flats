'use strict';

/**
 * @ngdoc function
 * @name flatsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flatsApp
 */
angular.module('flatsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
