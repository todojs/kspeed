# kspeed

kspeed is a very simple JavaScript speed testing framework.  

kspeed is a project of [todojs.com](http://www.todojs.com) (Spanish web site about Javascript) with the special collaboration of [Kubide](http://www.kubide.es).

## Objective

You can test various functions or techniques and you know what is the fastest with an simple framework of speed testing.

## Usage

#### node.js

```js
var kspeed = require('kspeed.js');
```

#### Web page

```html
<script src="kspeed.js"></script>
```

#### Basic testing

```js
function t1() {
	// something code
}
function t2() {
	// something code
}
kspeed(1000);           // configure 1000 execution for the next tests
kspeed('test 1', t1);   // the result is output to console
kspeed('test 2', t2);   // the result is output to console
```

## Example

Compare clone techniques and show the result to console.

```js
// Basic object
 var library = [
	{	author: 'Miguel de Cervantes Saavedra',
		title: 'El ingenioso hidalgo don Quijote de la Mancha',
		date: '1605'
	},
	{	author: 'William Shakespeare',
		title: 'The Tragedy of Hamlet, Prince of Denmark',
		date: '1605'
	}];
// Test 1
function cloneWithJSON() {
	var newObject = JSON.parse(JSON.stringify(library));
	if (newObject[0].author !== library[0].author) {
		throw new Error("The object isn't clone");
	}
	newObject[0].author = "otro";
	if (newObject[0].author == library[0].author) {
		throw new Error("The object isn't clone");
	}
}
// Test 2
function clone(obj){
	if (obj == null || typeof(obj) != 'object') {
		return obj;
	}
	var copy = obj.constructor();
	for(var key in obj) {
		if (obj.hasOwnProperty(key)) {
			copy[key] = clone(obj[key]);
		}
	}
	return copy;
}
function cloneWithRecursiveFunction() {
	var newObject = clone(library);
	if (newObject[0].author !== library[0].author) {
		throw new Error("The object isn't clone");
	}
	newObject[0].author = "otro";
	if (newObject[0].author == library[0].author) {
		throw new Error("The object isn't clone");
	}
}
// Test 3
function cloneWithJQueryExtend() {
	var newObject = {};
	$.extend(true, newObject, library);
	if (newObject[0].author !== library[0].author) {
		throw new Error("The object isn't clone");
	}
	newObject[0].author = "otro";
	if (newObject[0].author == library[0].author) {
		throw new Error("The object isn't clone");
	}
}
// Tesing
function runTest() {
	kspeed(100000);
	kspeed('test1', cloneWithJSON);
	kspeed('test2', cloneWithRecursiveFunction);
	kspeed('test3', cloneWithJQueryExtend);
}
```

## Reference

#### Test

```js
kspeed([times,] description, functionTest[, functionEnd]);
```

`times`

> Optional. Number. Number of executions. By default is 1 or the value configure previously with `kspeed(times)`.

`description`

> String. Text with a description of this speed test.

`functionTest`

> Function. The function to test.

`functionEnd`

> Optional. Function. This function is called when the test is ended and receive this arguments:

> ```js
> functionEnd(error, times, description, totaltime)
> ```
>
> `error`
> >
> > Error on the test
>
> `times`
>
> > Number of execution.
>
> `description`
>
> > Text description of this test
>
> `totaltime`
>
> > Time for the total executions.
> 
> When the `functionEnd` is present `kspeed` don't display the result on the console.

#### Configure the number of executions

```js
kspeed(times)
```

'times'

> Number. Change the default number of executions and after this is unnecessary to use the argument `times` when you call `kspeed`.

Return the number of times.

#### Get an object with the result

```js
kspeed()
```

> Return the result of the last call of `kspeed`. 

#### Reset

```js
kspeed.reset()
```

> Reset all previous result and restore `times` value to 1. 

## Testing

How do I run the project's automated tests?

```
npm test
```

or 

```
mocha -R spec ./test/test.js
```

## To do

- Asynchronous function support.
- Calculate average between groups of calls
- Redesign the result object
- Include number of executions on 1 second as alternative way
