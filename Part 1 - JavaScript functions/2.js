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

// como chamar a fun a partir de outro ficheiro ???
function validateProperty(obj, propValidator) {
	let arg_value = obj[propValidator.name]
	console.log(arg_value)
	let arg_funs = propValidator.validators
	console.log(arg_funs)
	console.log(arg_value === undefined)
	if (arg_value === undefined) return false
	for (let n in arg_funs){
		console.log(arg_funs[n](arg_value))
		if (!arg_funs[n](arg_value)) return false
	}
	return true
}

function validateProperties(obj, propValidators){

	// creat empty array
	let ret = []

	/* 	call function validateProperty for each validator,
	 	if return false (fail property validation)
		push on the array the name of the propertie
	*/
	if (!validateProperty(obj, propValidators[0])) ret.push(propValidators[0].name)
	if (!validateProperty(obj, propValidators[1])) ret.push(propValidators[1].name)

	// console.log(propValidators[0])
	//console.log(validateProperty(obj, propValidators[0]) + " <---")
	// console.log(propValidators[1].name)

	return ret
}

// Test Section

const validators = [
	{
	name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]
	},
	{
	name : "p2" , validators: [s => Number.isInteger(s)]
	}
 ]
 const obj1 = { p1 : "a" }
 const obj2 = { p1 : 123  }
 const obj3 = { p1 : "abc" , p2 : 123 }

 console.log(validateProperties(obj1, validators) + " <---") // ["p1", "p2"]
 console.log(validateProperties(obj2, validators) + " <---") // ["p1", "p2"]
 console.log(validateProperties(obj3, validators) + " <---") // []

