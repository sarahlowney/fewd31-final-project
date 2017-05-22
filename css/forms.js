$(document).ready(function(){

	$('form').submit(function(event){

		var firstName = $('#firstname').val();

		if (firstName === ""){
			alert("First Name must be filled out");
			event.preventDefault();
		}

			var lastName = $('#lastname').val();

		if (lastName === ""){
			alert("Last Name must be filled out");
			event.preventDefault();
		}
			var phoneNumber = $('#phonenumber').val();

		if (phoneNumber === ""){
			alert("Phone Number must be filled out");
			event.preventDefault();
		}
			var email = $('#email').val();

		if (email === ""){
			alert("Email must be filled out");
			event.preventDefault();
		}

		});

});