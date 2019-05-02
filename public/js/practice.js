$(function() {
	let username = "ironman";

	$.ajax({
		url: `./user/${username}`,
		method: "GET",
		dataType: 'json',
		success: responseJson => authenticate(responseJson.user),
		error: err => console.log(err)
	});
});

function authenticate(user) {
	if( user.usertype != 0){
		$('.admin-section').hide();
	}
}

$("#home").click(function(){
  window.location.href = "./index.html";
});

$("#learn").click(function(){
  window.location.href = "./learn.html";
});

$("#dashboard").click(function(){
  window.location.href = "./dashboard.html";
});

$("#about").click(function(){
  window.location.href = "./aboutUs.html";
});