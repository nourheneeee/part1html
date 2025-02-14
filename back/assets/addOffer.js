function validateForm() {
    var title = document.getElementById('title').value;
    var destination = document.getElementById('destination').value;
    var departDate = document.getElementById('departure_date').value;
    var returnDate = document.getElementById('return_date').value;
    var price = document.getElementById('price').value;

    if (title.length < 3) {
        alert("The title must be at least 3 characters long pleasee.");
        return false;
    }

    var destinationValid = true;
    for (var i = 0; i < destination.length; i++) {
        var char = destination.charAt(i);
        if (!(char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' || char === ' ')) {
            destinationValid = false;
            break;
        }
    }

    if (destination.length < 3 || !destinationValid) {
        alert("The destination must contain only letters and spaces, and be at least 3 characters long please.");
        return false;
    }

  
    if (!departDate) {
        alert(" Oops! Please select a valid departure date.");
        return false;
    }

   
    var currentDate = new Date();
    var departureDate = new Date(departDate);
    if (departureDate <= currentDate) {
        alert("The departure date must be in the future.");
        return false;
    }

    if (!returnDate) {
        alert("Again,Please select a return date.");
        return false;
    }

    if (new Date(returnDate) <= new Date(departDate)) {
        alert("The return date must be later than the departure date.");
        return false;
    }

    if (isNaN(price) || price <= 0) {
        alert("The price must be a positive number ,We’re not giving away free trips HHHHHH.");
        return false;
    }

    alert("You did it ,Form successfully validated!");
    return true;
}
