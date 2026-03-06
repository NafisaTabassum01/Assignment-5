document.getElementById("signIn-btn").addEventListener("click",function(){
    const inputUserName=document.getElementById("input-username");
    const userName=inputUserName.value;
console.log(userName)


    const inputPassword=document.getElementById("input-password");
    const pin=inputPassword.value
console.log(pin)

if(userName=="admin" && pin=="admin123"){
window.location.assign("home.html")
}
else{
    alert("Login failed");
    return;
}

})