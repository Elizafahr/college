<template>
  <h1>Разработать контактную форму с валидацией.</h1>
  <div
    class="contact-form"
    style="display: flex !important; flex-direction: column; gap: 30px"
  >
    <form id="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" />
        <div id="name-error" class="error-message"></div>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" />
        <div id="email-error" class="error-message"></div>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message"></textarea>
        <div id="message-error" class="error-message"></div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", this.submitForm);
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      const isNameValid = this.validateField(
        nameInput,
        "name-error",
        "Name is required."
      );
      const isEmailValid = this.validateField(
        emailInput,
        "email-error",
        "Email is required."
      );
      const isMessageValid = this.validateField(
        messageInput,
        "message-error",
        "Message is required."
      );

      if (isNameValid && isEmailValid && isMessageValid) {
        // Submit
        console.log("Form submitted:", {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        });
      }
    },
    validateField(input, errorId, errorMessage) {
      const errorElement = document.getElementById(errorId);

      if (!input.value.trim()) {
        errorElement.textContent = errorMessage;
        input.classList.add("is-invalid");
        return false;
      } else {
        errorElement.textContent = "";
        input.classList.remove("is-invalid");
        return true;
      }
    },
  },
};
</script>

<style scoped>
.is-invalid {
  border-color: red !important;
}
.error-message {
  color: red !important;
}
.contact-form {
   width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f5f5f514;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form .form-group {
  margin-bottom: 20px !important;
}

.contact-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form input.is-invalid,
.contact-form textarea.is-invalid {
  border-color: #dc3545 !important;
}

.contact-form .error-message {
  color: #dc3545 !important;
  font-size: 14px;
  margin-top: 5px;
}

.contact-form button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
