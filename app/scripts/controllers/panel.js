'use strict';

/**
 * @ngdoc function
 * @name flatsApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the flatsApp
 */
angular.module('flatsApp')
  .controller('PanelCtrl', function () {
    
    this.tab = 1;

    this.selectTab = function(setTab) {
    	this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
    	return this.tab === checkTab;
    };

  });
