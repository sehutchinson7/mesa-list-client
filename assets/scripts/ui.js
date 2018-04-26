const store = require('./store')
const showAnimalsTemplate = require('./templates/animal-listing.handlebars')
const showUserAnimalsTemplate = require('./templates/animal-mod.handlebars')
const global = require('./global')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', '#d5fdd5')
}

const signUpFailure = function (data) {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', '#ff6666')
}

const signInSuccess = function (data) { // represents what the api is sending back (the api response)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', '#d5fdd5')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('.content').removeClass('hidden')
  $('#create-animal').removeClass('hidden')
  $('#update-animal').removeClass('hidden')
  $('#delete-animal').removeClass('hidden')
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', '#ff6666')
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', '#d5fdd5')
  store.user = null
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('input[type=email]').val('')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('#create-animal').addClass('hidden')
  $('#update-animal').addClass('hidden')
  $('#delete-animal').addClass('hidden')
  $('.content').addClass('hidden')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', '#d5fdd5')
}

const changePasswordFailure = function (data) {
  $('#message').text('Failure changing password')
  $('#message').css('background-color', '#ff6666')
}

const getAnimalSuccess = function (data) {
  $('#message').text('Successfully retrieved animals')
  $('#message').css('background-color', '#d5fdd5')
  const showAnimalsHtml = showAnimalsTemplate({
    animals: data.animals
  })
  $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  $('.content').append(showAnimalsHtml)
}

const getAnimalFailure = function (data) {
  $('#message').text('Failure retrieving animals')
  $('#message').css('background-color', '#ff6666')
}

const getUserAnimalSuccess = function (data) {
  $('#message').text('Successfully retrieved animals')
  $('#message').css('background-color', '#d5fdd5')
  const showUserAnimalsHtml = showUserAnimalsTemplate({
    user: data.user
  })
  $('.handlebars-mod').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  $('.content').append(showUserAnimalsHtml)
  console.log(data.user)
  if (data.user.animals.length === 0) {
    $('#update-message').text("You haven't added any animals yet")
    $('#update-message').css('background-color', '#ff6666')
    setTimeout(() => {
      $('#update-message').text('')
    }, 5000)
  }
}

const addAnimalSuccess = function (data) {
  $('#message').text('Successfully added an animal')
  $('#message').css('background-color', '#d5fdd5')
  // clear form when user clicks "Add Animal"
  $('input[type=text]').val('')
  $('input[type=radio]').prop('checked', false)
  global.clearForms()
}

const addAnimalFailure = function (data) {
  $('#message').text('Failure adding an animal')
  $('#message').css('background-color', '#ff6666')
}

const updateAnimalSuccess = function (data) {
  $('#message').text('Successfully updated database') // Go back here and tell user which animal they updated
  $('#message').css('background-color', '#d5fdd5')
  global.clearForms()
}

const updateAnimalFailure = function (data) {
  $('#message').text('Failure updating database')
  $('#message').css('background-color', '#ff6666')
  global.clearForms()
}

const deleteAnimalSuccess = function (data) {
  $('#message').text('Successfully deleted')
  $('#message').css('background-color', '#d5fdd5')
  global.clearForms()
}

const deleteAnimalFailure = function (data) {
  $('#message').text('Cannot delete animal')
  $('#message').css('background-color', '#ff6666')
  global.clearForms()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  getAnimalSuccess,
  getUserAnimalSuccess,
  getAnimalFailure,
  addAnimalSuccess,
  addAnimalFailure,
  updateAnimalSuccess,
  updateAnimalFailure,
  deleteAnimalSuccess,
  deleteAnimalFailure
}
