let balance = 100;

document.getElementById('test').innerText = balance

const addFunds = () =>{
    let add = 0;
    add = parseInt(deposit.value)
    
    if(!add > 0 || add < 0){
        document.getElementById('deposit').value = ""
        document.getElementById("confirmDeposit").innerText = "Please enter a value greater than 0"
    } else {
    balance = add + balance
    document.getElementById("test").innerText = balance
    document.getElementById('deposit').value = ""
    document.getElementById("confirmDeposit").innerText = "Your funds have been deposited to your account"

    setTimeout(function(){
        document.getElementById("confirmDeposit").innerText =""

    }, 2000);
    }

}

const withdrawFunds = () =>{
    let sub = 0;
    sub = parseInt(withdraw.value)
    if( sub > balance){
        document.getElementById('withdraw').value = ""
        document.getElementById("confirmWithdraw").innerText = "You do not have enough money to cover this transaction"
    } else{
    if(!sub > 0 || sub < 0){
        document.getElementById('withdraw').value = ""
        document.getElementById("confirmWithdraw").innerText = "Please enter a value greater than 0"
    } else {
    balance = balance - sub
    document.getElementById("test").innerText = balance
    document.getElementById('withdraw').value = ""
    document.getElementById("confirmWithdraw").innerText = "Your funds have been withdrawn from your account"

    setTimeout(function(){
        document.getElementById("confirmWithdraw").innerText =""

    }, 2000);
    }}

}




const exit = () =>{
 
    location.replace('index.html')
}