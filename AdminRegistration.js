function checkPassword(){

  let password = document.getElementById("createPassword").value;

  let reEnterPassword = document.getElementById("re-enterStudentPassword").value;

  console.log(password, reEnterPassword);
  let admin_message = document.getElementById("admin_message");

  if(password.length != 0){
    if(password==reEnterPassword){
      admin_message.textContent = "Password Match!";
      admin_message.style.backgroundColor = "#3ae374";
    }
    else{
      admin_message.textContent = "Password don't match!";
      admin_message.style.backgroundColor = "#ff4d4d";
    }
  }

}