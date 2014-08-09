'use strict';

/**
 * @ngdoc function
 * @name flatsApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the flatsApp
 */
var gems = [
	{
		name: 'Citrine',
		price: 1.95,
		description: 'A sparkling citrine',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'images/citrine.png'
			},
		]
	},
	{
		name: 'Diamond',
		price: 4.95,
		description: 'A dazzling diamond',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'images/diamond.png'
			},	
		]
	},
	{
		name: 'Emerald',
		price: 12.95,
		description: 'A prismatic emerald',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'images/emerald.png'
			},
		]
	},
];

angular.module('flatsApp')
  .controller('StoreCtrl', function () {
      this.products = gems;
  });

