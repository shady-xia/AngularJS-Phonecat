'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html', 
    controller: ['$routeParams', '$http',
      function PhoneDetailController($routeParams, $http) {
        var self = this,
            phoneId = $routeParams.phoneId;

        self.setImg = function(_url) {
              self.mainImageUrl = _url; 
            };

        $http.get('phones/' + phoneId + '.json').then(function(response) {
          self.phone = response.data;
          self.setImg(self.phone.images[0]);
        });
      }
    ]
  });
