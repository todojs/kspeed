# kspeed

It's a project of [todojs.com](http://www.todojs.com)

## Objective

Encapsulate speed tests into a very simple function.

## Usage

#### node.js

```js
var kspeed = require('kspeed.js');
```

### Web page

```html
<script src="kspeed.js"></script>
```

### Basic example

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


## Reference

### Call test

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

### Config the number of executions

```js
kspeed(times)
```

'times'

> Number. Change the default number of executions and after this is unnecessary to use the argument `times` when you call `kspeed`.

Return the number of times.

### Get a object with the result

```js
kspeed()
```

> Return the result of the last call of `kspeed`. 

### Reset

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