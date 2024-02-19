export default function isValidEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Use the test method of the regular expression to check if the email is valid
    return emailRegex.test(email);
}