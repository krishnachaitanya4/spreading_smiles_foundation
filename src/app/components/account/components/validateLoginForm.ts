const validateEmail = (email: any) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };


  const validateLoginForm = (form:any) => {
    const errors:any = {}
    // Email validation
    if(form.email === ""){
      errors.email = "Email Required"
    }else if(!(validateEmail(form.email))){
      errors.email = 'Enter valid Email'
    }

    // Password validation
    if(form.password === ""){
      errors.password = "Please enter password"
    }else if (form.password.length < 4){
      errors.password = "Password should be at least 4 characters long"
    }else if(form.password.length > 8){
      errors.password = "Password should not exceed 8 characters"
    }
    console.log(errors)
    if(Object.keys(errors).length>0){
      return errors
    }
    return null
  };

  export default validateLoginForm;