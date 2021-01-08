import {hasNumbersInPwd} from './index';

export const validationCriteria = inputData => {
    let errors = {};
    if (inputData["lastName"]) {
        if (inputData["lastName"].length === 0) {
            errors["lastName"] = "Cannot be empty";
        }
        if (inputData["lastName"].length < 2) {
            errors["lastName"] = "LastName is to short.";
        }
    }

    if (inputData["firstName"]) {
        if (inputData["firstName"].length === 0) {
            errors["firstName"] = "Cannot be empty";
        }
        if (inputData["firstName"].length < 2) {
            errors["firstName"] = "LastName is to short.";
        }
    }

    if (inputData["password"]) {
        if (inputData["password"].length === 0) {
            errors["password"] = "Cannot be empty";
        }
        if (inputData["password"].length < 6) {
            errors["password"] = "Password needs at least 6 characters";
        }
        if (!hasNumbersInPwd(inputData["password"])) {
            errors["password"] = "Password needs at least 2 numbers.";
        }
    }

    if (inputData["password_re"]) {
        if (inputData["password_re"].length === 0) {
            errors["password_re"] = "Cannot be empty";
        }

    }

    if (inputData["password"] && inputData["password_re"]) {
        if (inputData["password"] !== inputData["password_re"]) {
            errors["password_re"] = "Both password fields must contain the same password.";
        }
    }

    if (inputData["zip"]) {
        if (inputData["zip"].length === 0) {
            errors["zip"] = "Cannot be empty";
        }
        if (inputData["zip"].length !== 5) {
            errors["zip"] = "Zip must be 5 characters long.";
        }
    }

    if (inputData["city"]) {
        if (inputData["city"].length === 0) {
            errors["city"] = "Cannot be empty";
        }
        if (inputData["city"].length < 4) {
            errors["city"] = "City must be at least 4 characters long.";
        }
    }

    if (inputData["street"]) {
        if (inputData["street"].length === 0) {
            errors["street"] = "Cannot be empty";
        }
        if (inputData["street"].length < 4) {
            errors["street"] = "Street must be at least 4 characters long.";
        }
    }

    if (inputData["zip"]) {
        if (inputData["zip"].length === 0) {
            errors["zip"] = "Cannot be empty";
        }
        if (inputData["zip"].length !== 5) {
            errors["zip"] = "Zip must be 5 characters long.";
        }
        if (isNaN(inputData["zip"])) {
            errors["zip"] = "Zip must be a number.";
        }
    }

    if (inputData["email"]) {
        if (inputData["email"].length === 0) {
            errors["email"] = "Cannot be empty";
        }
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(inputData["email"])) {
            errors["email"] = "Please enter valid email address.";
        }
    }
    return errors;
}