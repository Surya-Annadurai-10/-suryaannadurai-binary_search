import binary_search  from "./index.js";

console.assert(binary_search([1,2,3,4,5,6,7] , 2) === 1);
console.assert(binary_search([1,2,3,4,5,6,7] , 6) === 5);
console.assert(binary_search([1,2,3,4,5,6,7] , 3) === 2);
console.assert(binary_search([1,2,3,4,5,6,7] , 1) === 0);
