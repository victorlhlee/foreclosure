
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan(){
  var account = {
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaultsToForeclose: 5,
    foreclosed: false
  }
}

function missPayment(){
  account.defaulted += 1;
  if(account.defaulted >= account.defaultsToForeclose){
    return "set the value of the foreclosed property of the account object to true";
  }
}