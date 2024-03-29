const form = document.querySelector(".contact-form");
const nameInput = document.querySelector('input[name="name"]');
const phoneInput = document.querySelector('input[name="phone"]');
const emailInput = document.querySelector('input[name="email"]');
const agreementCheckbox = document.querySelector(
  'input[name="interest"][value="agreevment"]'
);

// Добавляем обработчик события submit на форму
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Отменяем отправку формы

  // Проверяем поле "Имя"
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Пожалуйста, введите ваше имя");
    return;
  }

  // Проверяем поле "Телефон"
  if (phoneInput.value.trim() === "") {
    showError(phoneInput, "Пожалуйста, введите ваш телефон");
    return;
  }

  // Проверяем поле "E-mail"
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Пожалуйста, введите ваш e-mail");
    return;
  }

  // Проверяем чекбокс "Я согласен с условиями"
  if (!agreementCheckbox.checked) {
    showError(agreementCheckbox, "Пожалуйста, согласитесь с условиями");
    return;
  }

   form.submit();
});

// Функция для отображения сообщения об ошибке
function showError(input, message) {
  const errorBox = document.createElement("div");
  errorBox.classList.add("error");
  errorBox.textContent = message;

  const inputBox = input.parentNode;
  inputBox.appendChild(errorBox);
}

 nameInput.addEventListener("input", function () {
  removeError(this);
});

phoneInput.addEventListener("input", function () {
  removeError(this);
});

emailInput.addEventListener("input", function () {
  removeError(this);
});

agreementCheckbox.addEventListener("change", function () {
  removeError(this);
});

// Функция для удаления сообщений об ошибках
function removeError(input) {
  const inputBox = input.parentNode; 
  const errorBox = inputBox.querySelector(".error");
  if (errorBox) {
    inputBox.removeChild(errorBox);
  }
}

//btns of product
document.querySelectorAll(".product-weigth-btn").forEach((element) => {
  element.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      document.querySelectorAll(".product-weigth-btn").forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    }
  });
});

//+
var minusButton = document.getElementById("minus");
var plusButton = document.getElementById("plus");
var amountInput = document.getElementById("amountproduct");

function minus() {
  var currentValue = parseInt(amountInput.value);
  if (currentValue > 1) {
    amountInput.value = currentValue - 1;
  }
}

 function plus() {
  var currentValue = parseInt(amountInput.value);
  amountInput.value = currentValue + 1;
} 



//calc
function calk() {
  const productOptions = document.querySelectorAll(
    ".product-options .product-weigth-btn"
  );
  const deliveryOptions = document.querySelectorAll(
    '.product-delivery-option input[type="radio"]'
  );
  const amountInput = Number(document.getElementById("amountProduct").value);
  const calculateBtn = document.querySelector("#calculateBtn");
  const totalPriceInput = document.getElementById("totalPrice");

  let selectedWeight = 5;  
  let selectedDelivery = "once";  
  let productPrice = 2300;  

  // Функция для обновления общей стоимости
  function updateTotalPrice() {
    let total = productPrice * selectedWeight* amountInput;
    if (selectedDelivery === "once") {
      total += 2300;  
    }
    else{
      total += 2200;  

    }
    totalPriceInput.value = total;
  }

  // Обработчики событий для выбора веса продукта
  productOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
      selectedWeight = [2, 5, 10, 15][index]; // Обновляем выбранный вес
      updateTotalPrice();
    });
  });

  //типы доставки
  deliveryOptions.forEach((option) => {
    option.addEventListener("change", () => {
      selectedDelivery = option.id.includes("once") ? "once" : "regular"; // Обновляем выбранный тип доставки
      updateTotalPrice();
    });
  });
  document.getElementById("calculateBtn").addEventListener("click", () => {
    updateTotalPrice();
  });

  // Обработчик события для кнопки "Рассчитать"
}
  document.getElementById("calculateBtn").addEventListener("click", () => {
    updateTotalPrice();
  });
