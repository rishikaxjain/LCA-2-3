document.addEventListener("DOMContentLoaded", () => {
    // Contact Form Submission Handler
    const contactForm = document.querySelector("#contactForm");
    const formInputs = contactForm.querySelectorAll("input, textarea");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
  
      // Check if all fields are filled
      formInputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red";
          isValid = false;
        } else {
          input.style.border = "1px solid #ccc";
        }
      });
  
      if (isValid) {
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
      } else {
        alert("Please complete all required fields.");
      }
    });
  
    // Newsletter Subscription Handler
    const subscribeBtn = document.querySelector(".subscribe button");
    const subscribeInput = document.querySelector(".subscribe input");
  
    subscribeBtn.addEventListener("click", () => {
      const email = subscribeInput.value.trim();
  
      if (validateEmail(email)) {
        alert("Subscribed successfully!");
        subscribeInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  
    // Email Validation Function
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  