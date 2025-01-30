const mainMenu = {
  reply_markup: {
    keyboard: [
      ['⭐ Астрологія'],
      ['🔢 Нумерологія'],
      ['🔮 Таро']
    ],
    resize_keyboard: true
  }
};

const astrologyMenu = {
  reply_markup: {
    keyboard: [
      ['📅 На сьогодні', '📆 На тиждень'],
      ['📅 На місяць', '📆 На рік'],
      ['↩️ Назад до головного меню']
    ],
    resize_keyboard: true
  }
};

const numerologyMenu = {
  reply_markup: {
    keyboard: [
      ['1️⃣ Число життєвого шляху', '2️⃣ Число особистого року'],
      ['❤️ Нумерологічна сумісність', '👤 Число імені'],
      ['↩️ Назад до головного меню']
    ],
    resize_keyboard: true
  }
};

module.exports = {
  mainMenu,
  astrologyMenu,
  numerologyMenu
}; 