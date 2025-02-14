document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('title').addEventListener('keyup', validateTitle);
    document.getElementById('destination').addEventListener('keyup', validateDestination);
    document.getElementById('price').addEventListener('keyup', validatePrice);  // Add event listener for price
  
    document.getElementById('addTravelOfferForm').addEventListener('submit', function (e) {
        e.preventDefault(); 
        
        resetMessages();
        
        if (validateForm()) {
            alert("Form successfully validated!");
        }
    });
});

function validateTitle() {
    var title = document.getElementById('title').value;
    var titleMessage = document.getElementById('titleMessage');
    
    if (title.length < 3) {
        showErrorMessage(titleMessage, "The title must be at least 3 characters long.");
    } else {
        showSuccessMessage(titleMessage, "Correct");
    }
}

function validateDestination() {
    var destination = document.getElementById('destination').value;
    var destinationMessage = document.getElementById('destinationMessage');
    var destinationValid = true;

    for (var i = 0; i < destination.length; i++) {
        var char = destination.charAt(i);
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
            destinationValid = false;
            break;
        }
    }

    if (destination.length < 3 || !destinationValid) {
        showErrorMessage(destinationMessage, "The destination must be at least 3 characters long and contain only letters and spaces.");
    } else {
        showSuccessMessage(destinationMessage, "Correct");
    }
}

function validatePrice() {
    var price = document.getElementById('price').value;
    var priceMessage = document.getElementById('priceError');

    if (price === "" || isNaN(price) || price <= 0) {
        showErrorMessage(priceMessage, "Please enter a valid price greater than 0.");
    } else {
        showSuccessMessage(priceMessage, "Correct");
    }
}

function showErrorMessage(element, message) {
    element.textContent = message;
    element.style.color = 'red';
}

function showSuccessMessage(element, message) {
    element.textContent = message;
    element.style.color = 'green';
}

function resetMessages() {
    var messages = document.querySelectorAll('.message');
    for (var i = 0; i < messages.length; i++) {
        messages[i].textContent = ''; 
    }
}

function validateForm() {
    var isValid = true;

    var title = document.getElementById('title').value;
    var titleMessage = document.getElementById('titleMessage');
    if (title.length < 3) {
        showErrorMessage(titleMessage, "The title must be at least 3 characters long.");
        isValid = false;
    }

    var destination = document.getElementById('destination').value;
    var destinationMessage = document.getElementById('destinationMessage');
    var destinationValid = true;
    for (var i = 0; i < destination.length; i++) {
        var char = destination.charAt(i);
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
            destinationValid = false;
            break;
        }
    }

    if (destination.length < 3 || !destinationValid) {
        showErrorMessage(destinationMessage, "The destination must be at least 3 characters long and contain only letters and spaces.");
        isValid = false;
    }

    
    var price = document.getElementById('price').value;
    var priceMessage = document.getElementById('priceError');
    if (price === "" || isNaN(price) || price <= 0) {
        showErrorMessage(priceMessage, "Please enter a valid price greater than 0.");
        isValid = false;
    }

    return isValid;
}
