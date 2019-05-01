$(document).ready(function() {
  $('#login-form"').form({
    fields: {
      username: {
        identifier  : 'username', //check
        rules: 
        [{
            type   : 'empty',
            prompt : 'Please enter your e-mail'
        }]
      },
      password: {
        identifier  : 'password',
        rules: 
        [{
            type   : 'empty',
            prompt : 'Please enter your password'
        }]
      }
    }
  });
});