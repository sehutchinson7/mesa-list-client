const clearForms = function (data) {
  $('input[type=text]').val('')
  $('input[type=radio]').prop('checked', false)
  $('input[type=integer]').val('')
}

module.exports = {
  clearForms
}
