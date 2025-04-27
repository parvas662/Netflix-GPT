
export const ValidateData = (toggleSignIn, fullname, email, password) => {
    const EmailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const PasswordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password);


    if (!toggleSignIn) {
        const nameValidation = /.{1,}$/.test(fullname.current.value)
        if (!nameValidation) {
            return "Full name is required."
        }
    }
    if (!EmailValidation) {
        return "Sorry, Email Address isn't Valid. Please try again."
    }
    if (!PasswordValidation) {
        return "Password must include uppercase, lowercase, number,special character and length must be greater than 5."
    }
    return null;
}