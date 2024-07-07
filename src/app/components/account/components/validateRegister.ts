const validateEmail = (email: any) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };


const validateRegisterForm = (form:any) => {
    const errors:any = {}
    if(form.name === ""){
      errors.name = 'Name required'
    }
    if(form.email === ""){
      errors.email = "Email Required"
    }else if(!(validateEmail(form.email))){
      errors.email = 'Enter valid Email'
      console.log("Email not valid")
    }
    if(form.password === ""){
      errors.password = "Please enter password"
    }else if (form.password.length < 4){
      errors.password = "Password should be at least 4 characters long"
    }else if(form.password.length > 8){
      errors.password = "Password should not exceed 8 characters"
    }
    if(form.confirmPassword === "" ){
      errors.confirmPassword = "Please Conform the password"
    }else if(form.confirmPassword !== form.password){
      errors.confirmPassword = "Passwords didn't match"
    }
    console.log(errors)
    if(Object.keys(errors).length>0){
      return errors
    }
    return null
  };

  export default validateRegisterForm;