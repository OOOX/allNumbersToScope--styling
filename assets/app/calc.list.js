(function() {
	'use strict';

	var LUMENS_LIST = [375, 600, 900, 1125, 1600];

	angular
		.module('myCalculator')
		.constant('LumensList', LUMENS_LIST);

})();
