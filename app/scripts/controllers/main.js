'use strict';

/**
 * @ngdoc function
 * @name flatsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flatsApp
 */
angular.module('flatsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
