// const close = document.getElementById("close");
// const open = document.getElementById("open");
// const modal = document.getElementById("form-box");

// open.addEventListener("click", ()=>modal.classList.add("show-modal"));

// close.addEventListener("click", ()=>modal.classList.remove("show-modal"));

// window.addEventListener("click", (e)=>{
//     e.target === modal ? modal.classList.remove("show-modal") : false ;
// })

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

var closeBtn = document.querySelector('span');
closeBtn.addEventListener('click', closeModal);