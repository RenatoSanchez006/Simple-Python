$(function() {
	let username = "ironman";
	$.ajax({
		url: `./user/${username}`,
		method: "GET",
		dataType: 'json',
		success: responseJson => displayName(responseJson.user),
		error: err => console.log(err)
	});
});

function displayName(user) {
	$('#namePerson').append(`Welcome ${user.name}!`);

	let sc = user.score * 25;
	$('#score').progress({
	    text: {
	      active  : `Done ${user.score} of 4 problems correctly`,
	      success : `All problems done Correctly!`
	    },
	    percent: sc
	})

	let prog = user.progress * 100;
	$('#advancement').progress({
	    text: {
	      active  : `Done ${prog}%`,
	      success : `All problems done!`
	    },
	    percent: prog
	});
}

$("#home").click(function(){
  window.location.href = "./index.html";
});

$("#learn").click(function(){
  window.location.href = "./learn.html";
});

$("#practice").click(function(){
  window.location.href = "./practice.html";
});

$("#about").click(function(){
  window.location.href = "./aboutUs.html";
});
