const store = require('./store')
const showAnimalsTemplate = require('./templates/animal-listing.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function (data) {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) { // represents what the api is sending back (the api response)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('.content').removeClass('hidden')
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  // console.log('signInSuccess ran. Data is ', data)
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  // console.log('signInSuccess ran. Data is ', data)
  store.user = null
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('input[type=email]').val('')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  // console.log('signInSuccess ran. Data is ', data)
}

const changePasswordFailure = function (data) {
  $('#message').text('Failure changing password')
  $('#message').css('background-color', 'red')
  // console.log('signInSuccess ran. Data is ', data)
}

const getAnimalSuccess = function (data) {
  $('#message').text('Successfully retrieved animals')
  $('#message').css('background-color', 'green')
  //console.log(data)
  const showAnimalsHtml = showAnimalsTemplate({ animals: data.animals })
  $('.content').append(showAnimalsHtml)
}

const getAnimalFailure = function (data) {
  $('#message').text('Failure retrieving animals')
  $('#message').css('background-color', 'red')
}

const addAnimalSuccess = function (data) {
  $('#message').text('Successfully added an animal')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const addAnimalFailure = function (data) {
  $('#message').text('Successfully added an animal')
  $('#message').css('background-color', 'green')
}

const updateAnimalSuccess = function (data) {
  $('#message').text('Successfully updated database') // Go back here and tell user which animal they updated
  $('#message').css('background-color', 'green')
}

const updateAnimalFailure = function (data) {
  $('#message').text('Failure updating database')
  $('#message').css('background-color', 'red')
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
  getAnimalFailure,
  addAnimalSuccess,
  addAnimalFailure,
  updateAnimalSuccess,
  updateAnimalFailure,
}
