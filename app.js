// length is more than 8 and doesn't contain 'password' return true
//otherwise false

let isValidPassword = function (password) {
 if (password.length <= 8 || password.includes('password')) {
  return false 
} else {
  return true
}
}
