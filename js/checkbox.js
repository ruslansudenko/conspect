// Получаем все чекбоксы с id, начинающимися с "romb"
const checkboxes = document.querySelectorAll('input[id^="romb"]');

// Добавляем обработчик события для каждого чекбокса
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Получаем ближайший родительский div с классом "red" относительно текущего чекбокса
    const div = this.nextElementSibling;

    // Проверяем, выбран ли чекбокс
    if (this.checked) {
      // Если чекбокс выбран, применяем стиль для перечеркивания текста
      div.style.textDecoration = "line-through";
    } else {
      // Если чекбокс не выбран, убираем стиль перечеркивания
      div.style.textDecoration = "none";
    }
  });
});
