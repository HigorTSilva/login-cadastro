const login_button = document.querySelector("#button-login");
const signup_button = document.querySelector("#button-signup");
const container = document.querySelector(".container");
const login_button2 = document.querySelector("#login-necessary");
const signup_button2 = document.querySelector("#signup-necessary");
signup_button.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
login_button.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
signup_button2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
login_button2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});