// $('.ui.sidebar').sidebar('toggle');

// $('.menu .item').tab();

$('.item').click(function () {
	$('.active').removeClass('active');
	$(this).addClass('active');
});

//Progress bars:
$('.progress-bar')
  .progress('increment')
;

$('#score')
  .progress({
    text: {
      active  : 'Done {value} of {total} problems correctly',
      success : '{total} Problems Done Correctly! '
    }
  })
;

$('#advancement')
  .progress({
    text: {
      active  : 'Done {value} of {total} total problems',
      success : '{total} Problems Finished!'
    }
  })
;
/*
{percent}	Current percentage
{value}	Current value
{total}	Total value
{left}	Distance to total, or % progress left
*/

//Log in / Sign up button redirect
$("#login").click(function(){
  window.location.href = "./";
});

$("#signup").click(function(){
  window.location.href = "./";
});

$(document)
  .ready(function() {
    $('#login-form"')
      .form({
        fields: {
          email: {
            identifier  : 'email', //check
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your e-mail'
              }
            ]
          },
          password: {
            identifier  : 'password',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your password'
              }
            ]
          }
        }
      })
    ;
  })
;

