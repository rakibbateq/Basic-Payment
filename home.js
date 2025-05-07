// Cash Out 
document.getElementById('Option_MinusMoney').addEventListener('click',function(){
    document.getElementById('input-amount').disabled = false;
    let CashOut = document.getElementById('add-Money');
    CashOut.innerText = 'Cash Out';
    document.getElementById('add-Money').addEventListener('click', function(event){
    
        event.preventDefault();
        const PinNumber = document.getElementById('money-pin').value;

    
        if( PinNumber === '000'){
    
        const currentAmountElement = document.getElementById('current-amount');
        // console.log(typeof(currentAmountElement.innerText));
        const currentAmount = parseFloat(currentAmountElement.innerText)
        const inputAmmountElement = document.getElementById('input-amount');
        console.log(inputAmmountElement)
        const inputAmmount = parseFloat(inputAmmountElement.value);

        const newAmount = currentAmount - inputAmmount;
        currentAmountElement.innerText = newAmount;
        // console.log(typeof(newAmount));
        inputAmmountElement.value = '';
    
        }else(
            alert('Enter pin or wrong pin')
        )
        
    
    })

})

// Cash In / add

document.getElementById('Option_addMoney').addEventListener('click',function(){
    document.getElementById('input-amount').disabled = false;
    let CashAdd = document.getElementById('add-Money');

    CashAdd.innerText = 'Add Money';
    document.getElementById('add-Money').addEventListener('click', function(event){
  
        event.preventDefault();
        const PinNumber = document.getElementById('money-pin').value;
    
        if( PinNumber === '000'){
    
            const currentAmountElement = document.getElementById('current-amount');
            // console.log(typeof(currentAmountElement.innerText));
            const currentAmount = parseFloat(currentAmountElement.innerText)
            const inputAmmountElement = document.getElementById('input-amount');
            const inputAmmount = parseFloat(inputAmmountElement.value);
    
            const newAmount = currentAmount + inputAmmount;
            currentAmountElement.innerText = newAmount;
            inputAmmountElement.value = '';
    
        }else(
            alert('Enter pin or wrong pin')
        )
        
    
    })

})

   