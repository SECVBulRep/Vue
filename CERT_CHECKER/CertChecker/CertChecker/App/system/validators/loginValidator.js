import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export const loginErrors = {
    WRONG_EMAIL: 1,
    EMPTY_PASSWORD: 2
};

export default (model) => {
    let errors = [];
    
    if (!Validator.isEmail(model.email)) {
        errors.push({ type: loginErrors.WRONG_EMAIL, message: "wrong email"});
    }

    if (isEmpty(model.password)) {
        errors.push({ type: loginErrors.EMPTY_PASSWORD, message: "empty password" });
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};