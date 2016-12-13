'use strict';

// Register `phoneTest` component, along with its associated controller and template
angular.
	module('phoneTest').
	component('phoneTest', {
		templateUrl: 'phone-test/phone-test.template.html',
		controller: ['Phone', function PhoneTestController(Phone) {
      this.orderProp = 'age';
      this.phones = Phone.query();
    } ]
	});  