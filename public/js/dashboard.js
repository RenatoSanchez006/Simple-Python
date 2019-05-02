let username;

$(function () {
	username = getUser();
	getUserInfo(username);
});

function getUserInfo(username) {
	$.ajax({
		url: `./user/${username}`,
		method: "GET",
		dataType: 'json',
		async: false,
		success: responseJson => displayName(responseJson.user),
		error: err => console.log(err)
	});
}

function displayName(user) {
	$('#namePerson').append(`Welcome ${user.name}!`);

	let sc = user.score * 25;
	$('#score').progress({
		text: {
			active: `Done ${user.score} of 4 problems correctly`,
			success: `All problems done Correctly!`
		},
		percent: sc
	})

	let prog = user.progress * 100;
	$('#advancement').progress({
		text: {
			active: `Done ${prog}%`,
			success: `All problems done!`
		},
		percent: prog
	});
}

$("#dashboard").click(function () {
	window.location.href = "./dashboard.html";
});

$("#logout").click(function () {
	console.log('im login out ' + username);
	logout(username);
	window.location.href = "./index.html";
});

$("#learn").click(function () {
	window.location.href = "./learn.html";
});

$("#practice").click(function () {
	window.location.href = "./practice.html";
});
