// --- global variables ---

// default values
let loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 

let loanWithInterest = 0;
let intAmt = 0;
let paymentTable;

// ==== JavaScript Function Useful for Formattting =====

//Makes items that are supposed to be currency formmated like currency
function toCurrency(value) {
  return "$" + parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //found this puppy on stack overflow
}//----------------------------------------------------------------------------------



//-----------Local Storage Bits--------------------------------
//will save the loans array in local storage 
function saveChanges ()  {
  localStorage.setItem(`asignment06`, JSON.stringify(loans));
}

//Load function to get the item if is found in local storage
function load() {
  if(localStorage.getItem(`asignment06`) != null){
     loans = JSON.parse(localStorage.getItem(`asignment06`));
     correctForm();
  } 
}


// ----- #5 ANGULAR Bits-----

let app = angular.module('myCollegeDebtEstimator', []);

app.controller('myController', function($scope) {
  $scope.paymentTable = [];
  $scope.displayForm = function () {
    
    correctForm();
    
    let intRate = loans[0].loan_int_rate;
    let periodicInterestRate = intRate / 12;
 
 //This is the number of payment periods desired
    let numberPaymentPeriods = 10;
	
	//multiply by 12 as there are 12 months in a year the rest of the calculation comes form https://www.kasasa.com/blog/how-to-calculate-loan-payments-in-3-easy-steps
    let yearlyPayments = 12 * (loanWithInterest / ((((1+periodicInterestRate)**(numberPaymentPeriods*12))-1)/(periodicInterestRate *(1+periodicInterestRate)**(numberPaymentPeriods*12))));
	
	//loops through the amount of payments made
    for (let i = 1; i <10; i++) {
		
	//subtreacts the loan with the interest added from the yearly payment made
      loanWithInterest -= yearlyPayments 
      
	  //calculates the interest amount accumulated for the new year
	  let intAmt = loanWithInterest * (intRate); 
      
	  //Creates payment table scope function that fills the table 
	  $scope.paymentTable[i] = {
        "year":loans[4].loan_year + i + 1,  //goes through all elements of payment table to add 1 to the year 
        "payment": toCurrency(yearlyPayments), //Makes the payments column look like actual currency
        "intAmount": toCurrency(intAmt), //makes interest amount look like currency
        "yeBal": toCurrency(loanWithInterest += intAmt)  //makes the end of the year balence look like currency after adding the interest amount to the loan amount with interest
      }
    }
	
	//Ensures that the last payment in the table is corrected so negative values dont come up
    $scope.paymentTable[10] = {
      "year":loans[4].loan_year + 11, //add 11 to the last year in loans as this will make it be 10 years paid off
      "payment": toCurrency(loanWithInterest),  //populates the final payment required for the 10th year 
      "intAmount": toCurrency(0), //sets thes values to 0 otherwise they would not be correct
      "yeBal":toCurrency(0)  //same as above
    }
	
  }
});


//load the document with the default info
function loadDoc() {
    
  // pre-fill defaults for first loan year
  
  let defaultYear = loans[0].loan_year;
  //The dollar sign is used to indicate jQuerry. These use the val to replace the loan year 
  $("#loan_year0" + 1).val(defaultYear++);
  
  let defaultInterestRate = loans[0].loan_int_rate;
  //replcaes the initial interest rates 
  $("#loan_int0" + 1).val(defaultInterestRate);
  
  
  let defaultLoanAmount = loans[0].loan_amount;
  //this replaces the initial loan amount
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
 
  
  //loan with interest calculated with the first loan amount 
  let loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toCurrency(loanWithInterest));
    
  // pre-fill defaults for other loan years+
  for(let i=2; i<6; i++) {
//Replace instances of getting the element with javascript to new jquery using .val to set value of the years column here
    $(`#loan_year0${i}`).val(defaultYear++);
	
	//makes all years boxes disabled besides the first one
    $(`#loan_year0${i}`).attr("disabled","true");
	//adds the css using jquery
    $(`#loan_year0${i}`).css({
      "backgroundColor":"grey","color":"white"});
	//sets default loan amount
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
	
	//sets default interest and gives the attributes via css and attr method
    $(`#loan_int0${i}`).val(defaultInterestRate);
    $(`#loan_int0${i}`).attr("disabled","true");
    $(`#loan_int0${i}`).css({
	"backgroundColor":"grey","color":"white"});
    
	//calculates loan with interest 
	loanWithInterest = (loanWithInterest + defaultLoanAmount)  * ( 1 + defaultInterestRate);
    
	//(1 + defaultInterestRate)
	
	//sets the text in the following id by adding i 0 to replace whats in each new id
	$("#loan_bal0" + i).text(toCurrency(loanWithInterest));
  } // end: "for" loop
  
  //when in focus the item turns yellow
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  
  //when in blur item goes back to white
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
	
	//updates the loans array to have change occur in front of user immedietly 
    updateLoansArray();
	
  });//finishes the on blur function
    
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();

} // end: function loadDoc()


function correctForm () {
  loanWithInterest = 0;
  let totalAmt = 0;
  
  //loops through to populate the form with the correct information
  for(i = 1; i < 6; i++) {
	 //populates all the year column correctly
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
    
	//used to populate the amount column in the form correctly
	let amountColumnElement = loans[i - 1].loan_amount;
    //populates the amount column 
	$(`#loan_amt0${i}`).val(amountColumnElement);
    
	//totals the amount owed by adding up each element as it loops through it
	totalAmt += parseFloat(amountColumnElement);
    
	//populates the loan interes rate column 
	$(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
	
	//calculates the loan with interest variable 
    loanWithInterest = (loanWithInterest + parseFloat(amountColumnElement)) * (1 + loans[0].loan_int_rate);
	
	//fills in the year balance in the form 
    $("#loan_bal0" + i).text(toCurrency(loanWithInterest));
  }
  //calculates the interest amount my subtracting loan with interest from the total 
  intAmt = loanWithInterest - totalAmt;
  
  //Tells how much interest was built up over the 5 year period
  $(`#loan_int_accrued`).text(toCurrency(intAmt));
  
} // end: function correctForm()

//Function to update the loans array for manipulation
function updateLoansArray() {
  //boolean used for validation
  let valid = true;
  
  let regexYear = /^(19|20)\d{2}$/;  //used to check if the year entered is valid with allowing only years that start with 19 or 20 and have two following numbers
  let regexAmountColumn = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
  let regexInterest = /^(0)+(.0\d{1,9})$/; //checks to see if the interest has a leading 0 as well as another 0 afrer the decimlal as 100% interest is ubsurd

  

  //Checks all elements in the amount column to see if they are valid 
if(regexAmountColumn.test($(`#loan_amt0${1}`).val()) == false) {
      valid = false;
      $(`#loan_amt0${1}`).css("background-color", "red");
  }
  
    if(regexAmountColumn.test($(`#loan_amt0${2}`).val()) == false ) {
      valid = false;
      $(`#loan_amt0${2}`).css("background-color", "red");
  }
  
    if(regexAmountColumn.test($(`#loan_amt0${3}`).val()) == false) {
      valid = false;
      $(`#loan_amt0${3}`).css("background-color", "red");
  }
  
    if(regexAmountColumn.test($(`#loan_amt0${4}`).val()) == false) {
      valid = false;
      $(`#loan_amt0${4}`).css("background-color", "red");
  }
  
    if(regexAmountColumn.test($(`#loan_amt0${5}`).val()) == false) {
      valid = false;
      $(`#loan_amt0${5}`).css("background-color", "red");
  }
  
    //Checks if year is valid with the above regex
  if(regexYear.test($(`#loan_year01`).val()) == false){
    valid = false;
    $(`#loan_year01`).css("background-color", "red");
  }
  
  
  //Checks to see if the loan interest entered is valid with the regex
  if(regexInterest.test($(`#loan_int01`).val()) == false) {
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }

//if all inputs are valid doe the following step
  if(valid) {
	 //replaces all the years with the first year input plus 1
    let startYear = loans[0].loan_year = parseInt($("#loan_year01").val());
    for(let i=1; i<5; i++) {
      loans[i].loan_year = startYear + i;
    }
	
	
	
	//updates the new loans amount into the array by looping through elements
    for(i = 1; i<6; i++){
      let amountColumnElement = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
      loans[i-1].loan_amount = amountColumnElement;
    }
  
  //Filst all the interest rates to the first value in the intRate input boxes
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = parseFloat($("#loan_int01").val());
    }
    
	//calls correctFormMethod to ensure that everything checks out
    correctForm();
    
  } // valid if block
  
} 
