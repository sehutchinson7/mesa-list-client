const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  document.getElementById('sign-in').reset()
  document.getElementById('create-animal').reset() // clear add animal form on sign in
  document.getElementById('update-animal').reset() // clear update animal form on sign in
  document.getElementById('delete-animal').reset() // clear delete animal form on sign in
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    // clear the table after a sign out so next user who signs in starts with no list being displayed
    .then(onClearAnimals())
    .catch(ui.signOutFailure)
}

const onGetAnimals = function (event) {
  event.preventDefault()
  api.getAllAnimals()
    .then(ui.getAnimalSuccess)
  // User can switch between "View All" and "View My" without hitting "Clear"
    .then(onClearAnimals())
    .catch(ui.getAnimalFailure)
}

const onGetUserAnimals = function (event) {
  event.preventDefault()
  api.getUserAnimals()
    .then(ui.getUserAnimalSuccess)
  // User can switch between "View All" and "View My" without hitting "Clear"
    .then(onClearAnimals())
    .catch(ui.getUserAnimalFailure)
}

const onAddAnimal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addAnimal(data)
    .then(ui.addAnimalSuccess)
    // clear the table after an animal is added
    .then(onClearAnimals())
    .catch(ui.addAnimalFailure)
}

const onUpdateAnimal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateAnimal(data)
    .then(ui.updateAnimalSuccess)
    // clear the table after an animal is updated
    .then(onClearAnimals())
    .catch(ui.updateAnimalFailure)
}

const onClearAnimals = function () {
  event.preventDefault()
  $('.handlebars').hide() // Clears the  get-all list when user clicks clear button
  $('.handlebars-mod').hide() // Clears the user list when user clicks clear button
  $('#clear-list').addClass('hidden') // Hide clear button after user clears list
}

const onDeleteAnimal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteAnimal(data)
    .then(ui.deleteAnimalSuccess)
    // clear the table after an animal is deleted
    .then(onClearAnimals())
    .catch(ui.deleteAnimalFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-all').on('submit', onGetAnimals)
  $('#get-user-animals').on('submit', onGetUserAnimals)
  $('#create-animal').on('submit', onAddAnimal)
  $('#update-animal').on('submit', onUpdateAnimal)
  $('#clear-list').on('submit', onClearAnimals)
  $('#delete-animal').on('submit', onDeleteAnimal)
}

module.exports = {
  addHandlers
}
