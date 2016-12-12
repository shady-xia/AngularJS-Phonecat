describe('phoneList', function() {

  // 加载主模板
  beforeEach(module('phonecatApp'));

  // 测试控制器
  describe('PhoneListController', function() {
    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('phoneList');
      
      expect(ctrl.phones.length).toBe(3);
    }));
  });

});