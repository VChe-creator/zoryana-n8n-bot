const zodiacSigns = {
  parameters: {
    jsCode: `
      return {
        keyboard: [
          [{text: "♈️ Овен"}, {text: "♉️ Телець"}, {text: "♊️ Близнюки"}],
          [{text: "♋️ Рак"}, {text: "♌️ Лев"}, {text: "♍️ Діва"}],
          [{text: "♎️ Терези"}, {text: "♏️ Скорпіон"}, {text: "♐️ Стрілець"}],
          [{text: "♑️ Козеріг"}, {text: "♒️ Водолій"}, {text: "♓️ Риби"}],
          [{text: "🔙 Назад"}]
        ],
        resize_keyboard: true
      };
    `
  },
  name: "Zodiac Signs Menu",
  type: "n8n-nodes-base.code"
}; 