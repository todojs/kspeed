//=======================
// speedTest
//=======================
var kspeed = (function() {

	"use strict";
	
	// memoize variable
	var aResults = {};
	var nDefaultTimes = 1;
	
	// returned orbect
	var kspeed = function (times, description, test, callback) {
	
		// local variables
		var error = null, 
			nTimes = nDefaultTimes,
			startTime = 0, 
			endTime = 0, 
			totalTime = 0,
			cDescription = '',
			fnTest = null,
			fnCallback = null;
			
		// without arguments: return the result
		if (arguments.length === 0) {
			return aResults;
			
		// with only one argument: configure times value
		} else if (arguments.length === 1) {
			nDefaultTimes = times;
			return nDefaultTimes;
			
		// with second argument as function: use the first argument as description
		} else if (typeof arguments[1] === 'function') {
			cDescription = arguments[0];
			fnTest = arguments[1];
			fnCallback = arguments[2] || null;
			
		// otherwise: use the first argument as times
		} else {
			nTimes = arguments[0];
			cDescription = arguments[1];
			fnTest = arguments[2];
			fnCallback = arguments[3] || null;
		}
		
		// Test loop
		startTime = new Date().getTime();
		try {
			for (var nCont = 0; nCont < nTimes; nCont++) {
				fnTest();
			}
		} catch (err) {
			error = err;
		}			
		endTime = new Date().getTime();
		
		// Calculate total time
		totalTime = endTime - startTime;
		
		// Return or show the value
		if (fnCallback) {
			fnCallback(error || null, nTimes, cDescription, totalTime);
		} else {
			if (error) {
				console.log('ERROR: "' + error.message + '" executing "' + cDescription + '"');
			} else {
				console.log((totalTime/1000).toFixed(3).toLocaleString() + ' seconds for ' + nTimes.toLocaleString() + ' executions of ' + cDescription );
			}
		}
		
		// Store the result
		aResults[cDescription] = error ? 'ERROR: ' + error.message : totalTime;
		
		// Return
		return totalTime;
	};
	
	// Reset the result object
	kspeed.reset = function() {
		nDefaultTimes = 1;
		aResults = {};
	};

	// Return the Function object
	return kspeed;
	
})();

if (typeof exports !== 'undefined') {
	module.exports = kspeed;
}
