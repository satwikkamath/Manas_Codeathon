// modal is the element that pops up from the page
// for sign up form
function showModal() {
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.form-content').classList.add('show-form-content');
}
function closeModal() {
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.form-content').classList.remove('show-form-content');
}
var btnSignUp = document.querySelector('#btn-signup');
btnSignUp.addEventListener("click", showModal);
var closeBtn = document.querySelector('#span-signup');
closeBtn.addEventListener('click', closeModal);

// for login form
function showModal2() {
    // first show overlay
    document.querySelector('.overlay2').classList.add('show-overlay');
    // then content
    document.querySelector('.form-content2').classList.add('show-form-content');
}
function closeModal2() {
    // first show overlay
    document.querySelector('.overlay2').classList.remove('show-overlay');
    // then content
    document.querySelector('.form-content2').classList.remove('show-form-content');
}
var btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", showModal2);
var closeBtn = document.querySelector('#span-login');
closeBtn.addEventListener('click', closeModal2);