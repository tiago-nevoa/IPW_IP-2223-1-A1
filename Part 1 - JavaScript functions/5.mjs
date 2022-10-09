/*
	Implement checkUsersValid(goodUsers)function that return a function
	that takes a list of valid users in goodUsers, and
	returns true if all of the supplied users exist in the original list of users,
	or false otherwise.

	You only need to check that the user ids match. Example:

	Arguments
	goodUsers: a list of valid users

*/

"use strict"

function checkUsersValid(goodUsers) {
	// console.log(checkUsersValid)
	// console.log(goodUsers)

	// create permitted id user array
	const user_list = goodUsers.map(i => i.id)
	// console.log(user_list)

	// return function validate
	return validate => {
		// created array of user id to validate
		const user_check = validate.map(i => i.id)
		// console.log(user_check)

		// every() tests all elements in the array with conditions provided by the function
		// returns a Boolean value
		// includes() check array includes a certain value among its entries,
		// returning true or false as appropriate.
		return user_check.every(v => user_list.includes(v))
	}
  }

// Test Section

var goodUsers = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 }
 ]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

console.log("Validation_1:")
console.log(testAllValid([
	{ id: 2 },
	{ id: 1 }
]), " <--- ex_5 = true")
 // => true

 console.log("Validation_2:")
console.log(testAllValid([
	{ id: 2 },
	{ id: 4 },
	{ id: 1 }
]), " <--- ex_5 = false")
 // => false
