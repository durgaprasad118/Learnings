## Password validation

- one uppercase atleast (A-Z)
- one lowercase atleast (a-z)
- one number at least (0-9)
- one special character (!@...)
- MIN length(6)
- password can't be blank

```js
let password = 'xy2c!dD'
if (password.length < 6) {
  console.log('Please enter characters >=6')
}

const smallerCheck = /[a-z]/

if (!smallerCheck.test(password)) {
  console.log('Please enter at least one lowerCase value')
}

const capCheck = /[A-Z]/

if (!capCheck.test(password)) {
  console.log('Please enter at least one upperCase value')
}

const numCheck = /[0-9]/

if (!numCheck.test(password)) {
  console.log('Please enter at least one Numerical value')
}

const charCheck = /[^a-zA-Z0-9]/
if (!charCheck.test(password)) {
  console.log('Please enter at least one special value')
}
```
<!-- BsFillEyeFill -->
