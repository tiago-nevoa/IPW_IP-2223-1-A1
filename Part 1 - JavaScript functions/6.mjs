/*
	Override a specified method of an object with new functionality while still maintaining all of the old behaviour.
	Create a Spy function that returns an object that keeps track of how many times a function is called.

	Arguments
	target: an object containing the method method
	method: a string with the name of the method on target to spy on.

	Conditions
	Do not use any for/while loops or Array#forEach.
	Do not create any unnecessary functions e.g. helpers.

	Hint
	Functions have context, input and output. Make sure you consider the context, input to and output from the function you are spying on.
*/

"use strict"

function Spy(target, method) {

	// Counter that will counter number of time the function is called
    const obj_call_counter = { counter: 0 };
	console.log(obj_call_counter)
	// save the original funtion
    const fun_called = target[method];
	console.log(fun_called)
	// funtion that accept any number of values
    target[method] = function(...args){
		console.log(args,obj_call_counter.counter )
        obj_call_counter.counter++;
		//apply() method calls function with value and arguments provided as an array (or an array-like object).
        return fun_called.apply(target, args);
    }
	console.log(obj_call_counter.counter)
    return obj_call_counter;
}

// Test Section
console.log("Validation_1:")
var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.counter, " <--- ex_6 = 3") // 3
