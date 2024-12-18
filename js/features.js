// show the cash out form

document.getElementById('btn-show-cash-out')
.addEventListener('click',function(){
    // show the cash out btn
    console.log('show cash out clicked')

    document.getElementById('cash-out-div').classList.remove('hidden')
    // hide the add money button
    document.getElementById('add-money-form').classList.add('hidden')
});

// show add money form and hide the cash out form
document.getElementById('btn-show-add-money')
.addEventListener('click',function(){
  document.getElementById('add-money-form').classList.remove('hidden');
  // hide the cash out button

  document.getElementById('cash-out-div').classList.add('hidden')
})