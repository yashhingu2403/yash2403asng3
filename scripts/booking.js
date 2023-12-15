/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyCost = 35;
let totalDays = 0;
let finalCost = 0;
let weekdays = document.querySelectorAll(".day-selector > li");
let fullElement = document.querySelector("#full");
let halfElement = document.querySelector("#half");
let calculateCost = document.querySelector("#calculated-cost");
let clearButton = document.querySelector("#clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
weekdays.forEach(function(element) {
    element.addEventListener("click", function() {
        element.classList.toggle("clicked");
        if (element.classList.contains("clicked")) {
            totalDays++;
        } else {
            totalDays--;
        }
        finalCost = dailyCost * totalDays;
        calculateCost.innerHTML = finalCost;
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function() {
    weekdays.forEach(function(element) {
        element.classList.remove("clicked");
    });
    totalDays = 0;
    finalCost = 0;
    calculateCost.innerHTML = finalCost;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfElement.addEventListener("click", function() {
    dailyCost = 20;
    fullElement.classList.remove("clicked");
    halfElement.classList.add("clicked");
    finalCost = dailyCost * totalDays;
    calculateCost.innerHTML = finalCost;
});

fullElement.addEventListener("click", function() {
    dailyCost = 35;
    halfElement.classList.remove("clicked");
    fullElement.classList.add("clicked");
    finalCost = dailyCost * totalDays;
    calculateCost.innerHTML = finalCost;
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

{
    const cost = dailyCost * totalDays;
    calculateCost.innerHTML = cost;
}
