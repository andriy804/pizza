function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }


  let value = 0;

  function updateValue(amount) {
    value += amount;
  
    // Обмеження значення в межах від 1 до 12
    value = Math.min(12, Math.max(1, value));
  
    displayValue();
  }
  
  function displayValue() {
    document.getElementById('display-value').textContent = value;
  }











function checkPromoCode() {
    const promoInput = document.getElementById('promo-input').value;
    const promoMessage = document.getElementById('promo-message');
  
    // Перевірка промокода (ваша логіка перевірки)
    if (promoInput.toLowerCase() === 'кот') {
      promoMessage.textContent = 'Промокод дійсний! Знижка 10%';
      promoMessage.classList.remove('animate__animated', 'animate__shakeX');
    } else {
      promoMessage.textContent = 'Невірний промокод. Спробуйте ще раз.';
      promoMessage.classList.add('animate__animated', 'animate__shakeX');
    }
  }






 