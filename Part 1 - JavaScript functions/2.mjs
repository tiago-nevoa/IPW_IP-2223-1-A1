/*
Implement the function validateProperties(obj, propValidators)
that returns an array with the name of the properties whose validation failed.
If an empty array is returned, the validation was successful.

Arguments
obj: an object to validate the properties
propValidators: an array of property validators, as defined in the previous exercise to validate the properties in obj

Conditions
Do not use any for/while loops or Array#forEach.
Do not create any unnecessary functions e.g. helpers.

Hints
The function must call validateProperty for each validator
*/

"use strict"
import { validateProperty } from "./1.mjs"

export function validateProperties(obj, propValidators){

	// console.log(propValidators)
	// filter the array with elements whose validation failed
	const ret = propValidators.filter( propValidators => {
		return !validateProperty(obj, propValidators)
	})
	// console.log(ret)

	// map the array only with names
	const ret1 = ret.map(propValidators => {
		return propValidators.name
	})
	// console.log(ret1)
	return ret1
}

// Test Section
/*
const validators = [
	{
	name : "p1" ,
	validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]
	},
	{
	name : "p2" ,
	validators: [s => Number.isInteger(s)]
	}
 ]
const obj1 = { p1 : "a" }
const obj2 = { p1 : 123  }
const obj3 = { p1 : "abc" , p2 : 123 }

console.log("Validation_1:")
console.log(validateProperties(obj1, validators) + " <--- ex_2 = [p1, p2]") // ["p1", "p2"]
console.log("Validation_2:")
console.log(validateProperties(obj2, validators) + " <--- ex_2 = [p1, p2]") // ["p1", "p2"]
console.log("Validation_3:")
console.log(validateProperties(obj3, validators) + " <--- ex_2 = []") // []

*/
