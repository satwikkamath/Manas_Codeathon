function reveal1() {
    let r1 = document.querySelectorAll(".reveal1");
    for (i = 0; i < r1.length; i++) {
        let wh = window.innerHeight;     /*wh= window height */
        let th = r1[i].getBoundingClientRect().top;   /*th= top height */
        let vh = 150;    /*view height  */
        if (th < wh - vh) {
            r1[i].classList.add("active1");
        }
        else {
            r1[i].classList.remove("active1");
        }
    }
}

function reveal2() {
    let r2 = document.querySelectorAll(".reveal2");
    for (i = 0; i < r2.length; i++) {
        let wh = window.innerHeight;
        let th = r2[i].getBoundingClientRect().top;
        let vh = 150;
        if (th < wh - vh) {
            r2[i].classList.add("active2");
        }
        else {
            r2[i].classList.remove("active2");
        }
    }
}

window.addEventListener("scroll", reveal1);
window.addEventListener("scroll", reveal2);


// modal is the element that pops up from the page
// for sign up form
function showModal() {
    document.getElementById("mynavbar").style.zIndex="-5";
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.form-content').classList.add('show-form-content');
}
function closeModal() {
    document.getElementById("mynavbar").style.zIndex="5";
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.form-content').classList.remove('show-form-content');
}
var btnSignUp = document.querySelector('#btn-signup');
btnSignUp.addEventListener("click", showModal);
var closeBtn = document.querySelector('#span-signup');
closeBtn.addEventListener('click', closeModal);

// for login form
console.log(document.getElementById('mynavbar'));
function showModal2() {
    // first show overlay
    document.getElementById('mynavbar').style.zIndex="-5";
    document.querySelector('.overlay2').classList.add('show-overlay');
    // then content
    document.querySelector('.form-content2').classList.add('show-form-content');
}
function closeModal2() {
    // first show overlay
    document.getElementById("mynavbar").style.zIndex="5";
    document.querySelector('.overlay2').classList.remove('show-overlay');
    // then content
    document.querySelector('.form-content2').classList.remove('show-form-content');
}
var btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", showModal2);
var closeBtn = document.querySelector('#span-login');
closeBtn.addEventListener('click', closeModal2);
var playNowBtn = document.querySelector("#play-now-btn");
playNowBtn.addEventListener("click", showModal2);
const loginFromMain = async (sendData) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(sendData),
    }
    let p = await fetch('/checkLoginInfo', options)
    let response = await p.json()
    return response
}
document.getElementById('loginSubmit').addEventListener('click',function(e){
    e.preventDefault()
    let loginName = document.getElementById('loginName').value;
    let loginPassword = document.getElementById('loginPassword').value;
    const form = document.getElementById('loginForm');
    // let sendName = document.getElementById('sendName')
    let sendData 
    let response 
    const mainfunc = async ()=>{
        sendData ={
            name: loginName,
            password: loginPassword
        }
        
        response = await loginFromMain(sendData)

        console.log(response)

        if(response.found)
        {
            if(response.passwordCorrect)
            {

                form.action = '/loginAfterCheck'; 
                form.method = 'post'; 
                form.submit(); 
            }
            else
            {
                alert('Password Incorrect')
            }
           
        }
        else
        {
            alert('Account Does Not Exist, Sign Up First')
        }
    }
   
    mainfunc()
})


const signUpFromMain = async (sendData) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(sendData),
    }
    console.log(sendData)
    let p = await fetch('/checkSignUpInfo', options)
    let response = await p.json()
    return response
}

document.getElementById('signUpSubmit').addEventListener('click',function(e){
    e.preventDefault();
    console.log("hi")
    let signUpName=document.getElementById('signUpName').value
    let signUpAge=document.getElementById('signUpAge').value
   
    let signUpPassword = document.getElementById('signUpPassword').value;
    let signUpcpassword = document.getElementById('signUpcpassword').value;
    
    let sendData 
    let response 
    console.log(signUpPassword)
    console.log(signUpcpassword)
    if(signUpPassword== signUpcpassword)
    {
 
        const mainfunc = async ()=>{
            sendData ={
                name: signUpName,
                password: signUpPassword,
                userAge:signUpAge
            }
            console.log(sendData)
            response = await signUpFromMain(sendData)
    
            
    
            if(response.msg)
            {
                
                alert('User Name exists')
            }
            else
            {
                alert("Account created. Go to Login Page")
                
            }
        }
       
        mainfunc() 
        
    }
    else
    {
        alert('Password and Confirm password do not match')
    }
      
    

        
})