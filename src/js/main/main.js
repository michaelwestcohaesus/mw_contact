function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateName(name) {
  var re = /^[a-zA-Z ]{2,30}$/;
  return re.test(name);
}

function validate() {
  var email = $("#exampleInputEmail").val();
  var name = $("#exampleInputName").val();
  var textarea = $("#exampleTextarea").val();
  $("#nameInput").removeClass('has-danger has-success');
  $("#exampleInputName").removeClass('form-control-danger form-control-success');
  $("#emailInput").removeClass('has-danger has-success');
  $("#exampleInputEmail").removeClass('form-control-danger form-control-success');
  $("#textareaInput").removeClass('has-danger has-success');
  $("#exampleTextarea").removeClass('form-control-danger form-control-success');
  if (validateName(name)) {
    $("#nameInput").addClass('has-success');
    $("#exampleInputName").addClass('form-control-success');
  } else {
    $("#nameInput").addClass('has-danger');
    $("#exampleInputName").addClass('form-control-danger');
  }
  if (validateEmail(email)) {
    $("#emailInput").addClass('has-success');
    $("#exampleInputEmail").addClass('form-control-success');
  } else {
    $("#emailInput").addClass('has-danger');
    $("#exampleInputEmail").addClass('form-control-danger');
  }
  if (textarea.match(/\S/)) {
    $("#textareaInput").addClass('has-success');
    $("#exampleTextarea").addClass('form-control-success');
  } else {
    $("#textareaInput").addClass('has-danger');
    $("#exampleTextarea").addClass('form-control-danger');
  }
  return false;
}

$("form").bind("submit", validate);
