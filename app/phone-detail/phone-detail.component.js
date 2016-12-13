'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html', 
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this,
            phoneId = $routeParams.phoneId;

        self.phone = Phone.get({phoneId: phoneId}, function(Phone) {
            self.setImg(self.phone.images[0]);
        })

        self.setImg = function(_url) {
          self.mainImageUrl = _url;   
        } 
      }
    ]
  });
