// one liner method
let isValidPassword = function (password) {
  return password.length >= 8 || !password.includes('password')
}

console.log(isValidPassword('asdf')) //false 
console.log(isValidPassword('abc123!$jsj')) //true
console.log(isValidPassword('password123')) //false 
