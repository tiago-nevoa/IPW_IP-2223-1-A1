/*
	Add a validateProperties method to Object type.
	This method implementation should call the validateProperties function implemented in the previous exercise.
*/

"use strict"
import { validateProperties } from "./2.mjs"

Object.prototype.validateProperties = function(validators) {
	return validateProperties(this,validators)
}

// Test Section

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
console.log(obj1.validateProperties(validators) + " <--- ex_3 = [p1, p2]") // ["p1", "p2"]
console.log("Validation_2:")
console.log(obj2.validateProperties(validators) + " <--- ex_3 = [p1, p2]") // ["p1", "p2"]
console.log("Validation_3:")
console.log(obj3.validateProperties(validators) + " <--- ex_3 = []") // []
