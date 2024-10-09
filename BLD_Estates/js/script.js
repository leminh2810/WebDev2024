document.addEventListener("DOMContentLoaded", function() {
    // Select the Home button
    const homeButton = document.querySelector(".navigation a[href='#home']");
    // Select the About button
    const aboutButton = document.querySelector(".navigation a[href='#about']");

    // Add a click event listener to the Home button
    homeButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action if it's an anchor
        // Redirect to the home page (you can replace the URL with your actual home page URL)
        window.location.href = "home.html"; // Assuming your home page is named index.html
    });

    // Add a click event listener to the About button
    aboutButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action
        // Redirect to the about page (replace with your actual About page URL)
        window.location.href = "about.html"; // Assuming your about page is named about.html
    });
});






const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLog');
const iconclose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-Log');
});

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-Log');
})