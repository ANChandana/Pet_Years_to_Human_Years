function choosingSection() {
    const radioCheck = document.getElementsByName("dogorcat");
    let selectedValue = "";

    for (let i = 0; i < radioCheck.length; i++) {
        if (radioCheck[i].checked) {
            selectedValue = radioCheck[i].value;
        }
    }

    const catSection = document.getElementById("catSection");
    const dogSection = document.getElementById("dogSection");
    const submitBtn = document.getElementById("submitbtn");

    catSection.style.display = selectedValue === "Cat Person" ? "block" : "none";
    dogSection.style.display = selectedValue === "Dog Person" ? "block" : "none";

    // Check if any required fields are empty before allowing form submission
    submitBtn.onclick = function() {
        if (selectedValue === "Dog Person" && (document.getElementById("dogName").value === "" || document.getElementById("dogAge").value === "" || document.getElementById("petWeight").value === "")) {
            errormsg();
        } else if (selectedValue === "Cat Person" && (document.getElementById("catName").value === "" || document.getElementById("catAge").value === "")) {
            errormsg();
        } else {
            // Allow form submission
            selectedValue === "Cat Person" ? catAgeConv() : dogAgeConv();
        }
    }
}


function calculateHumanAge(age, conversionFactor) {
    if (age <= 0) {
        return "Please enter a valid number and Try again!";
    } else {
        return age * conversionFactor;
    }
}

function calculateCatHumanAge(catAge) {
    const earlyYears = 2;
    const conversionFactor = 4;

    if (catAge <= 0) {
        return "Please enter a valid number and try again!";
    } else if (catAge === 1) {
        return 15;
    } else if (catAge === 2) {
        return 30;
    } else {
        let additionalYears = catAge-earlyYears;
        return (30+(additionalYears*conversionFactor));
    }
}


function dogAgeConv() {
    const humanName = document.getElementById("humanName").value;
    const dogName = document.getElementById("dogName").value;
    const dogAge = parseInt(document.getElementById("dogAge").value);
    const selectedWeight = document.getElementById("petWeight").value;

    // Check if dogAge is less than or equal to 0
    if (dogAge <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid age for your Pet.";
        return; // Exit the function to prevent further execution
    }

    let conversionFactor = 0;

    if (selectedWeight === "Small Breed") {
        conversionFactor = 4;
    } else if (selectedWeight === "Medium Breed") {
        conversionFactor = 5.5;
    } else if (selectedWeight === "Large Breed") {
        conversionFactor = 6;
    } else if (selectedWeight === "Giant Breed") {
        conversionFactor = 7;
    }

    const humanAge = dogAge * conversionFactor;
    document.getElementById("result").style.display="block"; 
    document.getElementById("result").innerHTML = `Hey ${humanName}, your beloved pet ${dogName}'s age in Human Years is ${humanAge}.`;
}


function catAgeConv() {
    const humanName = document.getElementById("humanName").value;
    const catName = document.getElementById("catName").value;
    const catAge = parseInt(document.getElementById("catAge").value);

    const humanAge = calculateCatHumanAge(catAge); // Cats have a fixed conversion factor of 4
    document.getElementById("result").style.display="block"; 
    document.getElementById("result").innerHTML = `Hey ${humanName}, your beloved pet ${catName}'s age in Human Years is ${humanAge}.`;
}

function errormsg() {
    alert("Hey, please give/choose all valid inputs and Try again!");
}
