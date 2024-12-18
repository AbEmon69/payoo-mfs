// add money button to account


// s-1 : add event handler
// prevent page reload 

// s-2 : get money to be added to the account balance


// step -01: add an event handler in added button inside the form

document.getElementById('add-money-btn')
.addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
  // step-2 : get money to be added to the account balance

  const addMoneyInput =document.getElementById('input-add-money').value;
  console.log(addMoneyInput);

  // get the pin number provided

   const pinNumberInput = document.getElementById('input-pin-number').value;
   console.log(pinNumberInput)
})