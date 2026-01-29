function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  alert("Thank you! We'll notify you at " + email);

  emailInput.value = "";
}
