/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
//  */
// var argumentsLength = function(...args) {
	
// };

// /**
//  * argumentsLength(1, 2, 3); // 3
//  */

// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
var argumentsLength = function(...args) {
  return args.length;
};

// // Examples
// console.log(argumentsLength(5)); // Output: 1
// console.log(argumentsLength({}, null, "3")); // Output: 3
// console.log(argumentsLength(1, 2, 3)); // Output: 3
