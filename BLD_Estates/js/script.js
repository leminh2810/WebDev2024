document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.querySelector(".navigation a[href='home.html']");
    const aboutButton = document.querySelector(".navigation a[href='about.html']");
    const BuyPage = document.querySelector(".navigation a[href='buy_rent.html']");
    const RentPage = document.querySelector(".navigation a[href='buy_rent.html']");
    const ContactPage = document.querySelector(".navigation a[href='contact.html']");
    const SellPage = document.querySelector(".navigation a[href='sell.html']");
    if (homeButton) {
        homeButton.addEventListener("click", function(event) {
            console.log("Home button clicked");
        });
    }
    if (aboutButton) {
        aboutButton.addEventListener("click", function(event) {
            console.log("About button clicked");
        });
    }
    if (BuyPage) {
        aboutButton.addEventListener("click", function(event) {
            console.log("Buy Page clicked");
        });
    }
    if (RentPage) {
        aboutButton.addEventListener("click", function(event) {
            console.log("Rent Page clicked");
        });
    }
    if (SellPage) {
        aboutButton.addEventListener("click", function(event) {
            console.log("Rent Page clicked");
        });
    }
    if (ContactPage) {
        aboutButton.addEventListener("click", function(event) {
            console.log("Contact Page clicked");
        });
    }
});

document.getElementById("BuyPage").addEventListener("click", function() {
    window.location.href = "buy_rent.html";
});

document.getElementById("RentPage").addEventListener("click", function() {
    window.location.href = "buy_rent.html";
});

document.getElementById("SellPage").addEventListener("click", function() {
    window.location.href = "sell.html";
});

