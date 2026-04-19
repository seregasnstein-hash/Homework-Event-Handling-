const quotes = [
  "В JavaScript нет багов — есть неожиданные фичи, которые ты пока не понял.",
  "Я не пишу сложный код — я просто даю JavaScript шанс удивить меня.",
  "Работает? Не трогай. Не работает? Перезагрузи. Всё ещё не работает? Значит, это уже архитектура.",
  "Самый страшный момент — когда твой код работает, и ты не понимаешь почему.",
  "Объяснять замыкания в JavaScript — это как объяснять сон: вроде понял, но словами не передать.",
];

let btnQuote = document.querySelector(".btn__quote");
let text = document.querySelector(".text");

btnQuote.addEventListener("click", () => {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];

  for (let i = 0; i <= quote.length; i++) {
    setTimeout(() => {
      text.textContent = quote.slice(0, i);
    }, 50 * i);
  };
});
