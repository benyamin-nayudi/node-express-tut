// commonJS => node uses commonJS library under the hood and every file in node is module (by default)
// modules => encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// console.log(data)
// sayHi('beny')
// sayHi(names.john)
// sayHi(names.peter)




// we can also import the result of a specific function => when you import a module , you actually invoke it. when node export a module , it actually wraps it in a function thats why when we require it we invoke it
require('./7-mind-grenade')