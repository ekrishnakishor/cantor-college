document.addEventListener("DOMContentLoaded", function () {
  const coursesRadio = document.getElementById("courses");
  const businessRadio = document.getElementById("business");
  const othersRadio = document.getElementById("others");

  const coursesDropdown = document.getElementById("courses-dropdown");
  const businessDropdown = document.getElementById("business-dropdown");
  const othersTextbox = document.getElementById("others-textbox");

  const form = document.getElementById("contact-form");

  function updateVisibility() {
    coursesDropdown.classList.add("hidden");
    businessDropdown.classList.add("hidden");
    othersTextbox.classList.add("hidden");

    if (coursesRadio.checked) {
      coursesDropdown.classList.remove("hidden");
    } else if (businessRadio.checked) {
      businessDropdown.classList.remove("hidden");
    } else if (othersRadio.checked) {
      othersTextbox.classList.remove("hidden");
    }
  }

  coursesRadio.addEventListener("change", updateVisibility);
  businessRadio.addEventListener("change", updateVisibility);
  othersRadio.addEventListener("change", updateVisibility);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contact-number").value;
    const reason = document.querySelector('input[name="reason"]:checked').value;
    let reasonDetails = "";
    if (reason === "courses") {
      reasonDetails = document.getElementById("courses-select").value;
    } else if (reason === "business") {
      reasonDetails = document.getElementById("business-select").value;
    } else if (reason === "others") {
      reasonDetails = document.getElementById("others-text").value;
    }
    const message = document.getElementById("message").value;
    const alertMessage = `Hello ${name}!\n\nHere are your form details:\n\nName: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nReason for Contact: ${reason}\n${
      reason === "others"
        ? "Details: " + reasonDetails
        : "Selected Option: " + reasonDetails
    }\nMessage: ${message}`;

    alert(alertMessage);
    form.reset();
  });
});
