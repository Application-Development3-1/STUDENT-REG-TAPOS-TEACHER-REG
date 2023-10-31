function checkPassword(){

  let password = document.getElementById("createPassword").value;

  let reEnterPassword = document.getElementById("re-enterStudentPassword").value;

  console.log(password, reEnterPassword);
  let message = document.getElementById("message");

  if(password.length != 0){
    if(password==reEnterPassword){
      message.textContent = "Password Match!";
      message.style.backgroundColor = "#3ae374";
    }
    else{
      message.textContent = "Password don't match!";
      message.style.backgroundColor = "#ff4d4d";
    }
  }

}
