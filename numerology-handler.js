function calculateLifePath(birthdate) {
  // Перетворюємо дату у формат ДДММРРРР
  const dateStr = birthdate.replace(/[^0-9]/g, '');
  
  // Сумуємо всі цифри
  let sum = dateStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  
  // Зводимо до однозначного числа
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  return sum;
}

module.exports = {
  calculateLifePath
}; 