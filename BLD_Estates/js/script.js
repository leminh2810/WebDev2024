
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.querySelector(".navigation a[href='#home']");
    const aboutButton = document.querySelector(".navigation a[href='#about']");

    homeButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "home.html"; 
    });

    aboutButton.addEventListener("click", function(event) {
        event.preventDefault(); // 
        window.location.href = "about.html"; 
    });
});



const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelectorAll('.btnLog');
const iconclose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
function showLoginPopup() {
    wrapper.classList.add('active-Log');
}
btnLogin.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "home.html";
        sessionStorage.setItem('showLogin', 'true');
      
    });
});
if (sessionStorage.getItem('showLogin') === 'true') {
    sessionStorage.removeItem('showLogin');
    setTimeout(() => {
        showLoginPopup();
    }, 500); 
}

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-Log');
})
