const pin = 1234;
let count = 0;

const checkPin = () =>{
    console.log("Clicked")
    let userPin = document.getElementById('pin').value
    const outPut = document.getElementById('pin2')
    count++;

    for(var i = 0; i<3; i++){
        if(userPin == pin){
            outPut.innerText = "Access Granted"
            openMenu()
            {
                break;
            }
        }
        else if(count <=3)
        {
            outPut.innerText = "Incorrect, please try again"
            document.getElementById('attempts').innerText = "Attempts remaining " + (4 - count);
            document.getElementById('pin').value = "";
          
        }
        else{
            document.getElementById('pin2').innerText ="Locked out the system. please contact your bank"
            document.getElementById('attempts').innerText = "";
            document.getElementById('pin').disabled = true
            document.getElementById('b1').style.display = "none"
        }
    }
}

const openMenu = () =>{
    setTimeout(function(){
        location.replace('menu.html')
    }, 2000);
}