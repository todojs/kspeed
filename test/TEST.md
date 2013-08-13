# TOC
   - [kspeed test](#kspeed-test)
     - [config the number of iterations](#kspeed-test-config-the-number-of-iterations)
     - [check the result](#kspeed-test-check-the-result)
<a name=""></a>
 
<a name="kspeed-test"></a>
# kspeed test
<a name="kspeed-test-config-the-number-of-iterations"></a>
## config the number of iterations
by default.

```js
function test_1(done) {
			var number = 0;
			kspeed('test_1', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
```

config to 100.

```js
function test_2(done) {
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
```

reset to 1.

```js
function test_1(done) {
			var number = 0;
			assert.equal(kspeed(1), 1);
			kspeed('test_4', function() {
				number++;
			}, function(){});
			assert.equal(number, 1);
			done();
```

run with 10 as first arg<ument and run after by default.

```js
function test_1(done) {
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
```

<a name="kspeed-test-check-the-result"></a>
## check the result
return.

```js
function test_1(done) {
			kspeed.reset();
			kspeed(10, 'test_6', function() {
			}, function(){});
			kspeed(10, 'test_7', function() {
			}, function(){});
			var aResult = kspeed();
			assert.equal(aResult.test_6, 0);
			assert.equal(aResult.test_7, 0);
			done();
```

