document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".FAQItem");

    faqItems.forEach(item => {
        const button = item.querySelector(".FAQItem_button");
        const answer = item.querySelector(".FAQItem_answer");
        const plusIcon = item.querySelector(".FAQItem_plus-icon");
        const minusIcon = item.querySelector(".FAQItem_minus-icon");

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-pressed") === "true";

            if (isExpanded) {
                button.setAttribute("aria-pressed", "false");
                answer.style.maxHeight = null; // Collapse the answer
                answer.classList.remove("active");
                plusIcon.style.display = "inline";  // Show plus icon
                minusIcon.style.display = "none";   // Hide minus icon
            } else {
                button.setAttribute("aria-pressed", "true");
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
                answer.classList.add("active");
                plusIcon.style.display = "none";    // Hide plus icon
                minusIcon.style.display = "inline"; // Show minus icon
            }
        });
    });
});
