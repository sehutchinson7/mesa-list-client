const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('sign up ran!')

  const data = getFormFields(this)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran!')

  const data = getFormFields(this)
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')

  const data = getFormFields(this)
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetAnimals = function (event) {
  event.preventDefault()
  api.getAllAnimals()
    .then(ui.getAnimalSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-all').on('submit', onGetAnimals)
}

module.exports = {
  addHandlers
}
