// inputs
const bill = document.getElementById("bill"); // number taken from the user all bill
const nOfPeople = document.getElementById("people-number"); // number of people

// tip and total showing places
const tip = document.getElementById("tip");  // show tip 
const total = document.getElementById("total"); // show total

// reset button
const reset = document.getElementById("reset"); // reset button

// tip buttons
const tipButtons = document.querySelectorAll(".tip"); // all tip buttons

// Custom input Doms
const customInput = document.getElementById("custom")
const customLabel = document.getElementById("custom-label")

/* 
    Global Vars
*/

let billNumber = 0;
let tipNumber = 0;
let numberOfPeople = 0;

// event lisener for tip buttons 
for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].addEventListener("click", handleTipButton)
}

// inputs On Change
bill.addEventListener("input", (e) => {
    billNumber = e.target.value;
    updateUI();
})

nOfPeople.addEventListener("input", (e) => {
    numberOfPeople = e.target.value;
    updateUI();

})

customInput.addEventListener("input", e => {
    let customTipValue = e.target.value;

    if (customTipValue >= 0) {
        tipNumber = customTipValue / 100
    }

    updateCustomButton(customTipValue)
    updateUI();

})

// updateUI every time input change
function updateUI() {
    if (numberOfPeople <= 0) {
        document.querySelector(".warning").style.display = "block";
        nOfPeople.style.border = "1px solid rgb(201, 9, 9)";
    } else if (numberOfPeople > 0) {

        const result = getResult(billNumber, tipNumber, numberOfPeople);


        total.innerHTML = `$${result.total.toFixed(2)}`;
        tip.innerHTML = `$${result.tipAmount.toFixed(2)}`;

        document.querySelector(".warning").style.display = "none";
        nOfPeople.style.border = "none";

    }

    updateDisableButton();
}


// get the result it get call every time input change
function getResult(bill, tipPercent, nOfP) {

    let tip = tipPercent * bill;
    let total = (parseFloat(bill) + parseFloat(tip)) / nOfP
    let tipAmount = tip / nOfP;

    return { total, tipAmount };
}

/* 
    helper Functions
*/


function updateCustomButton(customTipValue) {
    if (customTipValue >= 0 || customTipValue === "") {
        customLabel.style.display = "none";
        customInput.style.borderColor = "hsl(172, 70%, 45%)";
    } else if (customTipValue < 0) {
        customLabel.style.display = "block";
        customInput.style.borderColor = "#f3f8fb";
    }
}

// when tip button click put active class on it
function handleTipButton(e) {
    // remove class from every tip button before put the active class on the clicked one
    tipButtons.forEach(button =>
        button.classList.remove("active-tip")
    )

    // if the button isn't the custom remove the custom active class and the opposite
    if (e.target.id !== "custom") {
        customInput.value = ""
        customLabel.style.display = "block";
        customInput.style.borderColor = "#f3f8fb";
    } else if (e.target.id === "custom") {
        customLabel.style.display = "none";
        customInput.style.borderColor = "hsl(172, 70%, 45%)";
    }

    // add the active class for the clicked button
    e.target.classList.add("active-tip")

    // assign the tip number to it's chosen value
    let tipValue = e.target.value;
    switch (tipValue) {
        case "5%":
            tipNumber = 0.05
            break;
        case "10%":
            tipNumber = 0.1
            break;
        case "15%":
            tipNumber = 0.15
            break;
        case "25%":
            tipNumber = 0.25
            break;
        case "50%":
            tipNumber = 0.5
            break;
        default:
            break;
    }

    // update the UI with the chossen value
    updateUI();
}

/*
    RESET BUTTON
*/

// Reset button Functionality
reset.addEventListener("click", () => {

    // update state
    billNumber = 0;
    tipNumber = 0;
    numberOfPeople = 0;

    // update UI
    total.innerHTML = `$0.00`;
    tip.innerHTML = `$0.00`;

    // update input 
    bill.value = ``
    nOfPeople.value = ``

    // remove active style from tip Buttons
    tipButtons.forEach(button =>
        button.classList.remove("active-tip")
    )

    customInput.value = ""
    customLabel.style.display = "block";
    customInput.style.borderColor = "#f3f8fb";
})

function updateDisableButton() {
    // Disable the reset button if there it's no input
    if (numberOfPeople <= 0 || billNumber <= 0) {
        reset.disabled = true
    } else {
        reset.disabled = false
    }
}


