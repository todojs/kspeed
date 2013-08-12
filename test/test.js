var assert = require('assert');
var kspeed = require('../kspeed.js');
describe('kspeed test', function() {
	describe('config the number of iterations', function () {
		it('by default', function test_1(done) {
			var number = 0;
			kspeed('test_1', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
		}
		);
		it('config to 100', function test_2(done) {
			assert.equal(kspeed(100), 100);
			var number = 0;
			kspeed('test_2', function() {
				number++;
			}, function(){});
			assert.equal(number, 100);
			number = 0;
			kspeed('test_3', function() {
				number++;
			}, function(){});
			assert.equal(number, 100);
			done();
		});
		it('reset to 1', function test_1(done) {
			var number = 0;
			assert.equal(kspeed(1), 1);
			kspeed('test_4', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
		});
		it('run with 10 as first argument and run after by default', function test_1(done) {
			var number = 0;
			kspeed(10, 'test_5', function() {
				number++;
			}, function(){});
			assert.equal(number, 10);
			number = 0;
			kspeed('test_6', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
		});
	});
});