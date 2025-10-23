function validateForm() {
	if (validateEmail() && 
		validateCarSelection() && 
		validateStartCity() && 
		validateDestinationCity() && 
		validatePickupDay() && 
		validatePickupMonth() && 
		validatePickupYear() && 
		validateReturnDay() && 
		validateReturnMonth() && 
		validateReturnYear() && 
		validateReturnTime() && 
		validateRadioButtons() && 
		validateFirstName() && 
		validateInitialMiddleName() && 
		validateLastName() && 
		validateAddress() && 
		validateCity() && 
		validateZipCode() && 
		validateTelephone() && 
		validateCardNumber() && 
		validateExpiryMonth() && 
		validateExpiryYear() && 
		validateCardBrand() ) {return true;} else {return false;}
	
}// validateForm function
// Validate Email input 
function validateEmail(email) {
		var regex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
		var email = document.getElementById('email').value;
		if (email == "" ) {
			alert("Your Email address is required!");
			return false;
		}else if (!regex.test(email)) {
			alert("Invalid email address");
			return false;
		} else {return true;}
}

// Validate Vehicle rental selection 
function validateCarSelection(vehicleSelection) {
	var vehicleSelection = document.getElementById('vehicleSelection');
	if (vehicleSelection.options[vehicleSelection.selectedIndex].value == "None") {
			alert("Please indicate your vehicle rental selection!");
			return false;
	}else {
		return true;
	}
}

// Validate start from city
function validateStartCity(from) {
	var from = document.getElementById('from').value;
	if(from == "") {
		alert("Please indicate the start from city");
		return false;
	}else {
		return true;
	}
}

//Validate destination city
function validateDestinationCity(to) {
	var to = document.getElementById('to').value;
	if(to == "") {
		alert("Please indicate a destination city");
		return false;
	} else {
		return true;
	}
}

// Validate pickup date
function validatePickupDay(day) {
	var day = document.getElementById('day');
	if (day.options[day.selectedIndex].value == "None") {
			alert("No pickup day selected. Please select a day");
			return false;
	}else {
		return true;
	}	
}
function validatePickupMonth(month) {
	var month = document.getElementById('month');
	if(month.options[month.selectedIndex].value == "None") {
		alert("No pickup month selected. Please select a month");
		return false;
	}else {return true;}
}
function validatePickupYear(year) {
	var year =document.getElementById('year');
	if(year.options[year.selectedIndex].value == "None"){
		alert("Please select a pickup year.");
		return false;
	}else{return true;}
}

//Validate return date
function validateReturnDay(returnDay) {
	var returnDay = document.getElementById('returnDay');
	if(returnDay.options[returnDay.selectedIndex].value == "None") {
		alert('No return day selected. Please select a day');
		return false;
	}else {return true;}
}
function validateReturnMonth(returnMonth) {
	var returnMonth = document.getElementById('returnMonth');
	if(returnMonth.options[returnMonth.selectedIndex].value == "None") {
		alert('No return month selected. Please, make a selection');
		return false;
	}else {return true;}
}
function validateReturnYear(returnYear) {
	var returnYear = document.getElementById('returnYear');
	if(returnYear.options[returnYear.selectedIndex].value == "None" ) {
		alert("Please select a return year");
		return false;
	}else {return true;}
}
// Validate return time
function validateReturnTime(returnTime) {
	var returnTime = document.getElementById('returnTime');
	if(returnTime.value == '') {
		alert('Please indicate the time you would like to return the vehicle');
		return false;
	}else {return true;}
}

// Validate radio buttons
function validateRadioButtons() {
	var OptionChosen = '';
	var len = document.carRental.Yes.length;
	var i;
	for (i = 0; i < len; i++) {
		if (document.carRental.Yes[i].checked) {
           OptionChosen = document.carRental.Yes[i].value;
           break;
        }
	}
	if(OptionChosen == '') {
		alert('Please indicate your option from the options available');
		return false;
	}else {return true;}
}

// Validate Billing Information
function validateFirstName(fname) {
	var fname = document.getElementById('fname').value;
	if(fname == '') {
		alert("Please enter your first name");
		return false;
	}else {return true;}
}
function validateInitialMiddleName(nInitial) {
	var middleName = document.getElementById('mInitial').value;
	if(middleName == '') {
		alert('Please indicate your middle initial name');
		return false;
	}else {return true;}	
}
function validateLastName(lname) {
	var lname = document.getElementById('lname').value;
	if(lname == '') {
		alert('Please enter your last name');
		return false;
	}else {return true;}
}
function validateAddress(address) {
	var address = document.getElementById('address').value;
	if (address == '') {
		alert('Your address is required!');
		return false;
	}else {return true;}
} 
function validateCity(city) {
	var city = document.getElementById('city').value;
	if(city == '') {
		alert('Please enter your city');
		return false;
	}else {return true;}
}
function validateZipCode(zip) {
	var zip = document.getElementById('zip').value
	if (zip == '') {
		alert('Please enter your zip code!');
		return false;
	}else {return true;}
}
function validateTelephone(telephone) {
	var telephone = document.getElementById('telephone').value;
	if(telephone == '') {
		alert('Please enter your contact number');
		return false;
	}else {return true;}
}

// Validate Credit/Debit Card Information

function validateCardNumber(cardNumber) {
	var cardNumber = document.getElementById('cardNumber').value;
	if(cardNumber == '') {
		alert('Please provide your card number!');
		return false;
	}
	if(isNaN(cardNumber) &&  cardNumber < 13) {
		alert('Invalid Card Number!');
		return false;
	}else {return true;}
}
function validateExpiryMonth(expiryMonth) {
	var expiryMonth = document.getElementById('expiryMonth');
	if(expiryMonth.options[expiryMonth.selectedIndex].value == "None") {
		alert("No expiry month selected! Please select the expiry month");
		return false;
	}else {return true;}
}
function validateExpiryYear(expiryYear) {
	var expiryYear = document.getElementById('expiryYear');
	if(expiryYear.options[expiryYear.selectedIndex].value == "None" ) {
		alert('No expiery year selected. Please select the expiry year.');
		return false;
	}else {return true;}
}
function validateCardBrand(cardBrand) {
	var cardBrand = document.getElementById('cardBrand').value;
	if(cardBrand == '') {
		alert('Please enter your card brand name');
		return false;
	}else {return true;}
}