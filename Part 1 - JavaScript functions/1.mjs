/*
Implement the function validateProperty(obj, propValidator),
that returns true if it confirms the existence and validity of a given property in obj, or false otherwise.
The validity specification is provided in propValidator argument.

Arguments
obj: an object to validate a property
propValidator: an object that validates a property on obj, having the following properties:
name - the name of the property to validate
validators - an array of predicate functions that must be called with the property value. If any returns false the property is invalid.

Conditions
Do not create any unnecessary functions e.g. helpers.
*/

"use strict"

export function validateProperty(obj, propValidator) {

	// we read the obj value with the name give on validator
	let arg_value = obj[propValidator.name]
	// console.log(arg_value)

	// funtions validators we need check
	let arg_funs = propValidator.validators
	// console.log(arg_funs)

	// if we have incorrect or empty argument value finish validation
	// console.log(arg_value === undefined)
	if (arg_value === undefined) return false

	// For each property we validate the obj value
	for (let n in arg_funs){
		// console.log(arg_funs[n](arg_value))
		if (!arg_funs[n](arg_value)) return false
	}

	// Passed all validations
	return true
}

// Test Section

const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }
const validator2 = {}

const obj1 = { p1 : "abc" }
const obj2 = { p2 : 123 }
const obj3 = { p1 : "a" , p2 : 123 }
const obj4 = {}


console.log("Validation_1:")
console.log(validateProperty(obj1, validator) + " <--- ex_1 = true") //true

console.log("Validation_2:")
console.log(validateProperty(obj2, validator) + " <--- ex_1 = false") //false

console.log("Validation_3:")
console.log(validateProperty(obj3, validator) + " <--- ex_1 = false") //false

console.log("Validation_4:")
console.log(validateProperty(obj3, validator2) + " <--- ex_1 = false") //false

console.log("Validation_5:")
console.log(validateProperty(obj4, validator) + " <--- ex_1 = false") //false

