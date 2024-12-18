/**
 * step -1 : add the event listener to add money button(form submit)
 * make sure to prevent so that page doesn't reload
 * 2. get the money user wants to add
 * ,also get the  pin number provided
 * 3 : verify the pin number -for the wrong pin number ===> failed to add
 * for right pin number ,allow to add the number to the account balance
 * 4 : get the current balance
 * 5: add money to be added current balance
 * 
 * 6 : display update the DOM/ul 
*/ 

document.getElementById('add-money-btn')
.addEventListener('click' ,function(event){
    event.preventDefault();
    console.log('added money ')

    const addMoney = document.getElementById('input-add-money').value ;
    const moneyInput = parseFloat(addMoney);
    const pinInput = document.getElementById('input-pin-number') .value ;

    console.log(addMoney , pinInput)

    if(pinInput==='12345'){
        console.log('added money to the btn')

        // add to the money

        const balanceInput = document.getElementById('balance')
        .innerText;
        
        const balanceNumber= parseFloat(balanceInput);

        // updated balance
        const newBalance = balanceNumber + moneyInput;
        
        //update new updated new dom balance
        document.getElementById('balance').innerText = newBalance
    }
    else{
        alert('incorrect password ! please try again')
    }
})