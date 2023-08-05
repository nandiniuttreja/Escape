function myFunction() {
  window.location.href = "./index.html"
}

function myFunction2() {
  window.location.href = "./index.html"
}

document.getElementById("signupp").style.display = "none"
document.getElementById("signup-toggle").style.backgroundColor = "#3a86f0"

function toggleSignup() {
  document.getElementById("login-toggle").style.backgroundColor = "#3a86f0"
  document.getElementById("signup-toggle").style.backgroundColor = "#181818"
  document.getElementById("loginn").style.display = "none"
  document.getElementById("signupp").style.display = "block"
}

function toggleLogin() {
  document.getElementById("login-toggle").style.backgroundColor = "#181818"
  document.getElementById("signup-toggle").style.backgroundColor = "#3a86f0"
  document.getElementById("signupp").style.display = "none"
  document.getElementById("loginn").style.display = "block"
}

const nameEl = document.querySelector("#fname")
const emailEl = document.querySelector("#femail")
const passwordEl = document.querySelector("#fpass")
const confirmPasswordEl = document.querySelector("#fcpass")
const form = document.querySelector("#signupp")

const emaillEl = document.querySelector("#femaill")
const passworddEl = document.querySelector("#fpasss")
const formm = document.querySelector("#loginn")

const checkName = () => {
  let valid = false

  const min = 3,
    max = 25

  const fname = nameEl.value.trim()

  if (!isRequired(fname)) {
    showError(nameEl, "*Name cannot be blank.")
  } else if (!isBetween(fname.length, min, max)) {
    showError(nameEl, `*Name must be between ${min} and ${max} characters.`)
  } else {
    showSuccess(nameEl)
    valid = true
  }
  return valid
}

const checkEmail = () => {
  let valid = false
  const email = emailEl.value.trim()
  if (!isRequired(email)) {
    showError(emailEl, "*Email cannot be blank.")
  } else if (!isEmailValid(email)) {
    showError(emailEl, "*Email is not valid.")
  } else {
    showSuccess(emailEl)
    valid = true
  }
  return valid
}

const checkPassword = () => {
  let valid = false

  const password = passwordEl.value.trim()

  if (!isRequired(password)) {
    showError(passwordEl, "*Password cannot be blank.")
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "*Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    )
  } else {
    showSuccess(passwordEl)
    valid = true
  }

  return valid
}

const checkConfirmPassword = () => {
  let valid = false
  // check confirm password
  const confirmPassword = confirmPasswordEl.value.trim()
  const password = passwordEl.value.trim()

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "*Please enter the password again.")
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "*The password does not match.")
  } else {
    showSuccess(confirmPasswordEl)
    valid = true
  }

  return valid
}

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  )
  return re.test(password)
}

const isRequired = (value) => (value === "" ? false : true)
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement
  // add the error class
  formField.classList.remove("success")
  formField.classList.add("error")

  // show the error message
  const error = formField.querySelector("small")
  error.textContent = message
}

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement

  // remove the error class
  formField.classList.remove("error")
  formField.classList.add("success")

  // hide the error message
  const error = formField.querySelector("small")
  error.textContent = ""
}

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault()

  // validate fields
  let isFnameValid = checkName(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword()

  let isFormValid =
    isFnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid

  // submit to the server if the form is valid
  if (isFormValid) {
  }
})

formm.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault()

  // validate fields
  let isEmaillValid = checkEmaill(),
    isPassworddValid = checkPasswordd()

  let isFormmValid = isEmaillValid && isPassworddValid

  // submit to the server if the form is valid
  if (isFormmValid) {
  }
})

const debounce = (fn, delay = 500) => {
  let timeoutId
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay)
  }
}

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "fname":
        checkName()
        break
      case "femail":
        checkEmail()
        break
      case "fpass":
        checkPassword()
        break
      case "fcpass":
        checkConfirmPassword()
        break
    }
  })
)

formm.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "femaill":
        checkEmaill()
        break
      case "fpasss":
        checkPasswordd()
        break
    }
  })
)

const checkEmaill = () => {
  let valid = false
  const emaill = emaillEl.value.trim()
  if (!isRequired(emaill)) {
    showError(emaillEl, "*Email cannot be blank.")
  } else if (!isEmailValid(emaill)) {
    showError(emaillEl, "*Email is not valid.")
  } else {
    showSuccess(emaillEl)
    valid = true
  }
  return valid
}

const checkPasswordd = () => {
  let valid = false

  const passwordd = passworddEl.value.trim()

  if (!isRequired(passwordd)) {
    showError(passworddEl, "*Password cannot be blank.")
  } else if (!isPasswordSecure(passwordd)) {
    showError(
      passworddEl,
      "*Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
    )
  } else {
    showSuccess(passworddEl)
    valid = true
  }

  return valid
}
