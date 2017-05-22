$(document).ready(function(){

	$('form').submit(function(event){

		var firstName = $('#firstname').val();
		var lastName = $('#lastname').val();
		var phoneNumber = $('#phonenumber').val();
		var email = $('#email').val();

		if (firstName === ""){
			alert("First Name must be filled out");
			event.preventDefault();
		} else if (lastName === ""){
			alert("Last Name must be filled out");
			event.preventDefault();
		} else if (phoneNumber === ""){
			alert("Phone Number must be filled out");
			event.preventDefault();
		} else if (email === ""){
			alert("Email must be filled out");
			event.preventDefault();
		} else {
			
		}

		return true;
		
		});


});