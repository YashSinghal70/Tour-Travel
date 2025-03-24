// conatct FOrm
function validdateForm() {
    //Name
        let name=document.getElementById('name').value;
    let nameerror=document.getElementById('nameerror');
    //Email
    
        var email = document.getElementById('email').value;
        let emailresult=document.getElementById('emailerror');
        var atposition = email.indexOf('@');
        var dotposition = email.lastIndexOf('.');
    //Password
      let password = document.getElementById('password').value;
      let Error = document.getElementById('passerror');
      let confirmpassword = document.getElementById('confirmpassword').value;
      let confirmerror = document.getElementById('confirmpasserror');
    
      let minLength = 8;
      let hasUpperCase = /[A-Z]/.test(password);
      let hasLowerCase = /[a-z]/.test(password);
      let hasNumber = /\d/.test(password);
      let hasSpecialChar = /[!@#$%^&*(),.?"{}:|<>]/.test(password);
    
    //Phone Number
    let numbererror=document.getElementById('numbererror');
    let number=document.getElementById('number').value;
    
    
    //return 
      let isValid = true;
    //To remove Error from the form when it s correct
      Error.innerHTML = '';
      numbererror.innerHTML=''; // Uncomment if using phone number validation
      nameerror.innerHTML='';
      emailresult.innerHTML=''; // Corrected this line
    
    
    
    // Name
      if(name.trim() === ""){
        nameerror.innerHTML +="Name cannot be empty"; 
         isValid=false;
    
           }
    
    // Email
     else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2
        >= email.length) {
            emailresult.innerHTML+="Email is not Correct";
          isValid = false; // prevent form submission if email is not correct
      }
    
    // Password
      // validate password length
      else if (password.length < minLength) {
        Error.innerHTML += "Password must be at least " + minLength + " characters long.<br>";
        // Error.innerHTML="Password must be at least " + minLength + " characters long.<br>";
        // Error.innerHTML='';
        isValid = false;
      }
    
    
      // Validate uppercase letter
      if (!hasUpperCase) {
        Error.innerHTML += 'Password must contain at least one uppercase letter <br>'
        isValid = false;
      }
    
      // Validate lowercase letter
      if (!hasLowerCase) {
        Error.innerHTML += 'Password must contain at least one lower letter <br>'
        isValid = false;
      }
    
    
      // Validate number 
      if (!hasNumber) {
        Error.innerHTML += 'Password must contain at least one Number  <br>'
        isValid = false;
      }
      // Validate special characters 
    
      if (!hasSpecialChar) {
        Error.innerHTML += 'Password must contain at least one special characters ( e.g, !@#$%^&*()?. )  <br>'
        isValid = false;
      }
    //   Confirm Password
      else if(password != confirmpassword)
      {
        confirmerror.innerHTML +='Password do not match!'
        isValid=false;
      }
    
    // Phone Number
      else if(number === ""){
        numbererror.innerHTML +="*Phone Number cannot be empty"; 
        isValid=false;
            }
       
           else if( number.length <10){
           numbererror.innerHTML+="*Phone Number must be 10 Digits"
           isValid=false;;
           }
    
      return isValid;
    }
    