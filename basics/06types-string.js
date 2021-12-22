// # string type

// ## quotes
// 1. single quote
// 2. double quotes: supports excaping
// 3. back tick: allows interpolation

let address1 = '123 st'
console.log(address1)
address1 = "123 st"
console.log(address1)
address1 = `123 st`
console.log(address1)


let addressName = 'Parent"s address'
console.log(addressName)
addressName = "Parent's address"
console.log(addressName)

// ## escape notation
addressName = "Parent\"s address"
console.log(addressName)
addressName = 'Parent\'s address'
console.log(addressName)

addressName = 'Parent\"s address'
console.log(addressName)
addressName = 'Parent\'s address'
console.log(addressName)

address = `123 st,
apt a`
console.log(address)

// ## interpolation 
addressType = "parent"
addressName = `${addressType}'s address`
console.log(addressName)

// ## concatination

// ### concatination using +
address1="123 st,"
address2="apt A"
console.log(address1+address2)

// ### concatination using string methods
address1="123 st,"
address2="apt A"
console.log(address1.concat(address2))