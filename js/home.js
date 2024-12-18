// add money button to account


// s-1 : add event handler
// prevent page reload 

// s-2 : get money to be added to the account balance
// get the pin number

// s-3 : verify pin number

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

   //step-3 : verify pin number
   // this is not right way to check pin number
   if(pinNumberInput === '1234'){
     console.log('adding money to your account')


     // Step-4 : get the current balance

     const balance = document.getElementById('balance').innerText;
     console.log(balance)

     // step-5 : added add money input with balance

     const addMoneyNumber = parseFloat(addMoneyInput);
     const balanceNumber = parseFloat(balance)
     
     const newBalance = addMoneyNumber + balanceNumber;
     console.log(newBalance)

     // step-5:  update the balance UI/Dom

     document.getElementById('balance').innerText = newBalance;

            
   }
   else{
    alert('failed to adding money ! please try again')
   }
})