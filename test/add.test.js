// add.test.js
var add = require('../add.js');
//安装本地chai。
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  
  it('测试应该5000毫秒后结束', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done(); // 通知Mocha测试结束
    };
    setTimeout(f, 4000);
  });










});
