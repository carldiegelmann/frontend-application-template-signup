import {hasAllInputsPresent, minimumListOfProperties, hasNumbersInPwd} from './index';

describe("hasAllInputsPresent", () => {
    test("it should return true if all input fields are there.", () => {
        var inputDataToTest = {
            lastName: "Diegelmann",
            firstName: "Carl2",
            email: "Carl.Diegelmann@gmail.com",
            password: "Kalle12",
            password_re: "Kalle12",
        };
        const valid = hasAllInputsPresent(minimumListOfProperties, inputDataToTest);
        expect(valid).toBeTruthy();
    });

    test("it should return false if input fields are missing.", () => {
        var inputDataToTest = {
            lastName: "Diegelmann",
            email: "Carl.Diegelmann@gmail.com",
            password: "Kalle12",
            password_re: "Kalle12",
        };
        const valid = hasAllInputsPresent(minimumListOfProperties, inputDataToTest);
        expect(valid).toBeFalsy();
    });
});

describe("hasNumber", () => {
    test("validates correct.", () => {
        const testPasswords = ["test12", "1test2", "1rrwer3"];
        testPasswords.forEach(item => expect(hasNumbersInPwd(item)).toBeTruthy());
    });

    test("validation fails.", () => {
        const testPasswords = ["teste2", "1st", "rrfdfdfwer"];
        testPasswords.forEach(item => expect(hasNumbersInPwd(item)).toBeFalsy());
    });
});