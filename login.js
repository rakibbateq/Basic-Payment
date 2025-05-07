// // console.log('ji')
// document.getElementById('login-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     // console.log('clicked')
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
  
//     // console.log(phoneNumber,pinNumber);

//     if(phoneNumber === '5' && pinNumber ==='1234'){
//         console.log('You are logged In')
//     }
//     else(console.log('Wrong number or pin'))


// })

document.getElementById('login-btn').addEventListener('click', function(event){
    // console.log('hi');
    event.preventDefault();
    const phoneNmber = document.getElementById('phone-number').value ;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNmber,pinNumber);

    if(phoneNmber === '023' && pinNumber ==='1234' ){
        console.log('Done');
        window.location.href ='/payo-Home.html'
    }else(
        alert('wrong phone number or pin')
    )


})