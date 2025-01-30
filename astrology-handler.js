const openai = require('./openai-config');

async function generateHoroscope(sign, period) {
  try {
    const prompt = `Створи астрологічний прогноз для знаку ${sign} на ${period}. Прогноз має бути позитивним та мотивуючим.`;
    
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
      temperature: 0.7
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Помилка при генерації гороскопу:', error);
    return 'Вибачте, сталася помилка при генерації прогнозу. Спробуйте пізніше.';
  }
}

module.exports = { generateHoroscope }; 