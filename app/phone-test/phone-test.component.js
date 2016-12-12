'use strict';

// Register `phoneTest` component, along with its associated controller and template
angular.
	module('phoneTest').
	component('phoneTest', {
		templateUrl: 'phone-test/phone-test.template.html',
    //向控制器函数注入$http服务
		controller: ['$http', function PhoneTestController($http) {
      var self = this;
      self.orderProp = 'age';
      //http获取Json数据
      $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
    } ]
	});  