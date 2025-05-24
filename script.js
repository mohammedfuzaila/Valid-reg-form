let name = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let conpassword = document.querySelector("#confirmpassword");
    let check = document.querySelector("#term");

    const process = () => {
      let nameval = name.value.trim();
      let emailval = email.value.trim();
      let passval = password.value.trim();
      let conpassval = conpassword.value.trim();
      let checkval = check.value.trim();
      let isvalid = true

      let nameare = document.querySelector("#usernamevalue")
      let emailare = document.querySelector("#emailvalue");
      let passwordare = document.querySelector("#passwordvalue");
      let conpasswordare = document.querySelector("#conpassvalue");
      let checkare = document.querySelector("#checkvalue");

      if (nameval === '') {
        name.style.borderColor = "#fa6666";
        nameare.innerHTML = "Enter Your Name";
        isvalid = false;
      } else {
        nameare.innerHTML = "";
        username.style.borderColor = "#ccc";
      }

      if (emailval === '') {
        email.style.borderColor = "#fa6666";
        emailare.innerHTML = "Enter Your email";
        isvalid = false;
      } else {
        emailare.innerHTML = "";
        email.style.borderColor = "#ccc";
      }

      if (passval === '') {
        password.style.borderColor = "#fa6666";
        passwordare.innerHTML = "Enter Your password";
        isvalid = false;
      } else {
        passwordare.innerHTML = "";
        password.style.borderColor = "#ccc";
      }

      if (conpassval === '') {
        conpassword.style.borderColor = "#fa6666";
        conpasswordare.innerHTML = "Enter confirm password";
        isvalid = false;
      } else {
        conpasswordare.innerHTML = "";
        conpassword.style.borderColor = "#ccc";
      }
      if (passval !== conpassval){
          conpassword.style.borderColor = "#fa6666";
          password.style.borderColor = "#fa6666";
          conpasswordare.innerHTML = "password and confirm password are does not equal ";
        isvalid = false;
      }


      if (!check.checked) {
        checkare.innerHTML = "Please accept the terms and conditions.";
        isvalid = false;
      } else {
        checkare.innerHTML = "";
      }

      if (isvalid) {
        setTimeout(() => {
          alert("Register Successfully");
        }, 500);
         setTimeout(() => {
          alert("Thank you for Register");
        }, 500);
      }

    }