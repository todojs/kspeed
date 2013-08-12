# TOC
   - [speedtest test](#speedtest-test)
     - [config the number of iterations](#speedtest-test-config-the-number-of-iterations)
     - [show function](#speedtest-test-show-function)
<a name=""></a>
 
<a name="speedtest-test"></a>
# speedtest test
<a name="speedtest-test-config-the-number-of-iterations"></a>
## config the number of iterations
by default.

```js
function test_1(done) {
			var number = 0;
			speedtest('test_1', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
```

config to 100.

```js
function test_2(done) {
			var number = 0;
			assert.equal(speedtest(100), 100);
			speedtest('test_2', function() {
				number++;
			}, function(){});
			assert.equal(number, 100);
			number = 0;
			speedtest('test_3', function() {
				number++;
			}, function(){});
			assert.equal(number, 100);
			done();
```

reset to 1.

```js
function test_1(done) {
			var number = 0;
			assert.equal(speedtest(1), 1);
			speedtest('test_4', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
```

run with 10 as first argument and run after by default.

```js
function test_1(done) {
			var number = 0;
			speedtest(10, 'test_5', function() {
				number++;
			}, function(){});
			assert.equal(number, 10);
			number = 0;
			speedtest('test_6', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
```

