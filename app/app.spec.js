describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('手机数组中有三条记录', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
    expect(scope.name).toBe('world');
  }));

});