function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Коэффициенты для конвертации
    var rubToUsd = 0.014;
    var rubToEur = 0.012;
    var usdToRub = 71.67;
    var usdToEur = 0.85;
    var eurToRub = 81.43;
    var eurToUsd = 1.18;

    var result;

    // Проверяем и выполняем конвертацию в зависимости от выбранных валют
    if (fromCurrency === 'RUB' && toCurrency === 'USD') {
        result = amount * rubToUsd;
    } else if (fromCurrency === 'RUB' && toCurrency === 'EUR') {
        result = amount * rubToEur;
    } else if (fromCurrency === 'USD' && toCurrency === 'RUB') {
        result = amount * usdToRub;
    } else if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        result = amount * usdToEur;
    } else if (fromCurrency === 'EUR' && toCurrency === 'RUB') {
        result = amount * eurToRub;
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        result = amount * eurToUsd;
    } else {
        // Если выбраны одинаковые валюты
        result = amount;
    }

    // Выводим результат
    document.getElementById('result').textContent = "Результат: " + result.toFixed(2) + " " + toCurrency;
}


//регистрация
const form = document.querySelector('.signin');

const usernameInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

 function validateForm() {
  // Удаляем предыдущие сообщения об ошибках, если они есть
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());

  // Проверяем, пустые ли поля ввода
  if (usernameInput.value === '') {
    showError(usernameInput, 'Username is required');
  }

  if (passwordInput.value === '') {
    showError(passwordInput, 'Password is required');
  }
}

// Функция для показа сообщения об ошибке рядом с полем ввода
function showError(input, message) {
  // Создаем элемент для отображения сообщения об ошибке
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.innerText = message;

  // Вставляем сообщение об ошибке после поля ввода
  alert(errorMessage);
}

 form.addEventListener('submit', function(event) {
  // Проверяем валидность полей
  validateForm();

  // Отменяем отправку формы, если есть ошибки
  if (form.querySelectorAll('.error-message').length > 0) {
    event.preventDefault();
  }
});