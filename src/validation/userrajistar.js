import validator from 'validator'


const validatorreginput = (data) =>{
    let errors = {};
    const {name , email , password } = data;
  
   
    if(!validator.isEmail(email)){
        errors.email = 'Please Enter valid Email.'
    }

    if (validator.isEmpty(email)) {
        errors.email = 'email Fild is requird.'
    }
    if (validator.isEmpty(password)) {
        errors.password = 'password Fild is requird.'
    }
    return {
        isinvalid: Object.keys(errors).length>0,
        errors:errors,
    }

}

export default validatorreginput