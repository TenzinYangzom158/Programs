let userName;
let email;
let password;
let password2;
let phoneno;


 onlyChar=(event)=> {
  let input = event.which;
  if (input > 47 && input < 58) return false;
  else return true;
}

onlyDigits = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return true;
  else return false;
};

validateForm = (event) => {
  event.preventDefault();
  checkName("firstname");
  checkAddress();
  checkPassword();
  confirmPassword();
  checkPhoneNo();
  checkEmail();
};

checkName = (id) => {
  const name = document.getElementById(id);
  //console.log(id)
  const nameVal = name.value.trim();
  if (nameVal === "") {
    //console.log(firstNameVal)
    return error(name, "Cannot be empty");
  } else if (id === "firstname" && nameVal.length < 3) {
    return error(name, " Cannot be less than 3 characters");
  } else {
    return success(name);
  }
};

checkAddress = () => {
  address = document.getElementById("address");
  const addressVal = address.value.trim();
  if(addressVal == "") {
    return error(address, "Cannot be empty");
  } else {
    return success(address);
  }
};

checkPassword = () => {
  password = document.getElementById("password");
  let passwordVal = password.value.trim();
  let passwordRegex1 = /[a-z]/;
  let passwordRegex2 = /[A-Z]/;
  let passwordRegex3 = /[0-9]/;
  let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
  let passwordRegex5 = /[-_+={}]/;
  let passwordRegex6 = /[(){}|]/;
  let passwordRegex7 = /[/]/;
  let passwordRegex8 = /[\[\]]/;

  if (
    (passwordVal.length >= 8 && passwordVal.length <=14) &&
    passwordRegex1.test(passwordVal) &&
    passwordRegex2.test(passwordVal) &&
    passwordRegex3.test(passwordVal) &&

    (passwordRegex4.test(passwordVal) ||
      passwordRegex5.test(passwordVal) ||
      passwordRegex6.test(passwordVal) ||
      passwordRegex7.test(passwordVal) ||
      passwordRegex8.test(passwordVal))
  )
    return success(password);
  else {
    return error(
      password,
      'Password must have atleast 8 characters that include atleast 1 lowercase, 1 uppercase, 1 number, and 1 special character'
    );
  }
};

confirmPassword = () => {
  password2 = document.getElementById("password2");
  password2Val = password2.value.trim();

  if (password2Val === "") {
    return error(password2, "Re-enter password");
  } else if (password2Val !== password.value) {
    return error(password2, "Passwords donot match");
  } else {
    return success(password2);
  }
};
checkPhoneNo = () => {
  phoneNo = document.getElementById("phoneno");
  const phoneNoVal = phoneNo.value.trim();
  const phoneRegex = /[0-9]{10}/;

  if (phoneRegex.test(phoneNoVal) && phoneNoVal.length === 10) {
    return success(phoneNo);
  } else {
    return error(phoneNo, "Should contain only 10 digits");
  }
};

checkEmail =()=>{
  email = document.getElementById('email');
  let emailVal = email.value.trim();
 
  const emailRegex = /([a-z0-9\.\-_]{5,25})@christuniversity.in$/;

  if(emailRegex.test(emailVal)){
    
    return success(email);
  }else {
    return error(email,"invalid email");
  }
  
}

success = (input) => {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
};

error = (input, message) => {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  if (document.getElementById("username") === input) {
    formControl.className = "form-control error username";
    //console.log(formControl.className);
  } else if (document.getElementById("password") === input) {
    formControl.className = "form-control error password";
  } else {
    formControl.className = "form-control error";
  }
};


