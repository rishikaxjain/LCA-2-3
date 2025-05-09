document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".submit-btn");
  
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      const name = document.querySelector("input[placeholder='Enter your name']").value.trim();
      const phone = document.querySelector("input[placeholder='Enter your phone number']").value.trim();
      const date = document.querySelector("input[type='date']").value;
      const time = document.querySelector("input[type='time']").value;
      const guests = document.querySelector("input[placeholder='Enter number of guest']").value.trim();
      const message = document.querySelector("textarea").value.trim();
      const offers = document.getElementById("offers").checked;
  
      // Basic validation
      if (!name || !phone || !date || !time || !guests) {
        alert("Please fill in all required fields.");
        return;
      }
  
      // Optional: validate phone number format or guest number
      if (isNaN(phone) || phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      if (isNaN(guests) || guests <= 0) {
        alert("Number of guests must be a positive number.");
        return;
      }
  
      // Simulate form submission
      alert(`Thank you, ${name}! Your table has been booked for ${date} at ${time}.`);
      
      // Reset the form
      document.querySelectorAll("input, textarea").forEach((field) => {
        if (field.type !== "checkbox") field.value = "";
      });
      document.getElementById("offers").checked = false;
    });
  
    // Set min date to today
    const today = new Date().toISOString().split("T")[0];
    document.querySelector("input[type='date']").setAttribute("min", today);
  });