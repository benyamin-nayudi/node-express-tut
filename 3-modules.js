// commonJS => node uses commonJS library under the hood and every file in node is module (by default)
// modules => encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi('beny')
sayHi(names.john)
sayHi(names.peter)