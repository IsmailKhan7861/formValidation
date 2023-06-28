let btnSubmit = document.getElementById("btnSubmit");
let txtName = document.getElementById("txtName");
let txtEmail = document.getElementById("txtEmail");
let txtMobile = document.getElementById("txtMobile");
let txtMsg = document.getElementById("txtMsg");

// Name Validation
let validateName = () => {
  if (txtName.value == "") {
    txtName.nextSibling.textContent = "Please Enter Name";
    return false;
  } else {
    txtName.nextElementSibling.textContent = "";
    return true;
  }
};

//validate Mobile
let regexMobile = /^[0-9]*$/;
let validateMobile = () => {
  if (txtMobile.value == "") {
    txtMobile.nextElementSibling.textContent = "Please Enter Mobile Number";
    return false;
  } else if (txtMobile.value.length != 10) {
    txtMobile.nextElementSibling.textContent =
      "Please Enter Valid mobile Number";
    return false;
  } else if (!regexMobile.test(txtMobile.value)) {
    txtMobile.nextElementSibling.textContent = "Please Enter Valid Number1";
    return false;
  } else {
    txtMobile.nextElementSibling.textContent = "";
    return true;
  }
};

//validateEmail
let regeX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let validateEmail = () => {
  if (txtEmail.value == "") {
    txtEmail.nextElementSibling.textContent = "Please Enter email";
    return false;
  } else if (!regeX.test(txtEmail.value)) {
    txtEmail.nextElementSibling.textContent = "Please Enter Valid Email";
    return false;
  } else {
    txtEmail.nextElementSibling.textContent = "";
    return true;
  }
};

//validateMessage
let validateMessage = () => {
  if (txtMsg.value == "") {
    txtMsg.nextElementSibling.textContent = "Please Enter message to share";
    return false;
  } else if (txtMsg.value.length < 8) {
    txtMsg.nextElementSibling.textContent =
      "Message length must be greator then 8";
    return false;
  } else {
    txtMsg.nextElementSibling.textContent = "";
    return true;
  }
};

const isValidAll = () => {
  let isName = validateName();
  let isMobile = validateMobile();
  let isEmail = validateEmail();
  let isMsg = validateMessage();

  return isName && isMobile && isEmail && isMsg;
};

txtName.addEventListener("focusout", validateName);
txtEmail.addEventListener("focusout", validateEmail);
txtMobile.addEventListener("focusout", validateMobile);
txtMobile.addEventListener("focusout", validateMessage);

//for keyup automatic message
btnSubmit.addEventListener("click", (e) => {
  if (isValidAll() === false) {
    e.preventDefault();
  }
});
