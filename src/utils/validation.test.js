import {validationCriteria} from './validation';
describe("validationCriteria", () => {
    test("it should return no errors if .", () => {
        var validate = {
            lastName: "Diegelmann",
            firstName: "Carl2",
            email: "Carl.Diegelmann@gmail.com",
            password: "Kalle12",
            password_re: "Kalle12",
        };

        const errors = validationCriteria(validate);
        expect(errors).toEqual({}); // no errors
    });

    test("it should return errors if second password differs.", () => {
        var validate = {
            lastName: "Diegelmann",
            firstName: "Carl2",
            email: "Carl.Diegelmann@gmail.com",
            password: "Kalle12",
            password_re: "kalle12",
        };

        const errors = validationCriteria(validate);
        expect(errors.password_re).not.toBeNull() // error on password_re
    });
});
