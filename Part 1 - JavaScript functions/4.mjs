/*
	Add the associateWith(transformation) method to the Array type.
	This function returns an Object in which the elements values of the original Array are properties names,
	and the corresponding values values are produced from them by the given transformation function.
	If two elements are equal, only the last one remains in the object.
*/

"use strict"

Array.prototype.associateWith = function(transformation) {
	// created empty object that we will fill later
	const obj = {}

	// console.log(this)
	// console.log(transformation)
	// for(let i = 0; i < this.length; ++i){
	// 	console.log(this[i], transformation(this[i]))
	// 	obj[this[i]] = transformation(this[i])
	// }

	// map the array on the this and fill object
	this.map( i => (obj[i] = transformation(i)))
	return obj
}

// Test Section

let numbers = ["one", "two", "three", "four"]
let numbers1 = ["1", "2", "3", "4", "5"]
let numbers2 = ["Grande", "Invicto", "Poderoso"]

console.log("Validation_1:")
console.log(numbers.associateWith(str => str.length), " <--- ex_4")
console.log("Validation_2:")
console.log(numbers1.associateWith( str => parseInt(str, 10)), " <--- ex_4")
console.log("Validation_3:")
console.log(numbers2.associateWith( str => str + " SLB"), " <--- ex_4")

// { one: 3, two: 3, three: 5, four: 4}
