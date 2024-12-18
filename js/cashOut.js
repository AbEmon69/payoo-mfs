document.getElementById('cash-out-btn')
.addEventListener('click',function(event){
  event.preventDefault();
  console.log('cash out clicked')

  const cashOut =document.getElementById('input-cash-out').value ;
  const cashOutInput =parseFloat(cashOut);
  const cashOutNumber=document.getElementById('input-cash-out-number').value ;
  console.log(cashOut,cashOutNumber)

  // wrong way to verify pin number
  if(cashOutNumber ==='1234'){
      const balanceInput = document.getElementById('balance')
      .innerText;
      const balanceNumber = parseFloat(balanceInput);
    //  new balance 
    const newBalance = balanceNumber -cashOutInput;
    // update Dom/ui
    document.getElementById('balance').innerText =newBalance;
  }
  else{
    alert ('failed to cash out ,please   try again later')
  }
});