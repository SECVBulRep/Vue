import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'


export default (model) => {
    const errors = {};

    debugger;

    if (!Validator.isEmail(model.email)) {
        errors.status = 1;
        errors.email = 'wrong email!';
    }
    
    if (isEmpty(model.password)) {
        errors.status = 3;
        errors.password = 'wrong password!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}