// search: from submit reloading the page

// // step 1 : set the event handler
// document.getElementById('button-login').addEventListener('click', function (event) {

//     // step 2 : prevent default behavior (prevent reloading browser)
//     event.preventDefault();   //-------> vejal to beginners
//     // console.log('login finished')


//     // step 3 : get the phone number and pin Number

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber);
//     // step -4 : validate check

//     // this is temporary : you should not use this

//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in')

//         // step 5 : allow user to use this website
//     }
//     else{
//         alert('wrong phone and pin number')
//     }


// })

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
       
    // get the phone and pin number
     
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber)

    // wrong validate 

    if(phoneNumber === '5' && pinNumber === '12345'){
        console.log('your logged in this website')
        window.location.href = '/home page.html' ;
    }
    else{
        alert('wrong phone and pin number')
    }

})


