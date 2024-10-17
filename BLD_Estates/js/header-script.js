function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            let script = document.createElement('script');
            script.src = './js/script.js';  
            script.onload = function() {
                console.log('script.js loaded successfully');
                setupServicesLink();
                setHeaderClass();
                LoginSet();  // Now this is called after the header is loaded
            };
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading header:', error));
}

function setupScrollListener() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        var dropdownContent = document.querySelector(".dropdown-content");
        if (!header || !dropdownContent) return; // Exit if elements don't exist

        var viewportHeight = window.innerHeight;

        if (window.scrollY > viewportHeight * 0.75) {
            header.classList.add("sticky");
            dropdownContent.style.backgroundColor = "#e73b05";
        } else {
            header.classList.remove("sticky"); 
            if (!document.body.classList.contains('Home')) {
                dropdownContent.style.backgroundColor = "#e73b05";
            } else {
                dropdownContent.style.backgroundColor = "transparent";
            }
            dropdownContent.style.color = "white";
        }
    });
}

function setupServicesLink() {
    const servicesLink = document.getElementById('services-link');
    if (servicesLink) {
        servicesLink.addEventListener('click', function(event) {
            if (document.body.classList.contains('Home')) {
                event.preventDefault();
                const servicesSection = document.querySelector('.Services');
                if (servicesSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const offset = 50;
                    const totalOffset = headerHeight + offset;
                    const servicesPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
                    window.scrollTo({
                        top: servicesPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

function setHeaderClass() {
    const header = document.querySelector('header');
    if (header) {
        if (!document.body.classList.contains('Home')) {
            header.classList.add('others-header');
        } else {
            header.classList.remove('others-header');
        }
    } else {
        console.error('Header element not found');
    }
}
function LoginSet(){
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');
        const btnLogin = document.querySelectorAll('.btnLog');
        const iconClose = document.querySelector('.icon-close');
        function showLoginPopup() {
            wrapper.classList.add('active-Log');
        }
        function hideLoginPopup() {
            wrapper.classList.remove('active-Log');
        }
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });

        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
        btnLogin.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                const bgSection = document.querySelector('.bg');
                if (bgSection) {
                    const bgPosition = bgSection.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: bgPosition,
                        behavior: 'smooth'
                    });
                    setTimeout(() => {
                        showLoginPopup();
                    }, 300);
                } else {
                    console.error("Element with class 'bg' not found");
                    showLoginPopup();
                }
            });
        });
        iconClose.addEventListener('click', hideLoginPopup);
}
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    setupScrollListener();
});
