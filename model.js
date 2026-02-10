const modal = document.getElementById('ageModal');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const siteContent = document.getElementById('siteContent');

// Открываем модальное окно сразу при загрузке страницы
window.onload = () => {
  modal.showModal();
};

// Если нажато "НЕТ" — закрываем окно, сайт доступен
noBtn.onclick = () => {
  modal.close();
};

// Если нажато "ДА" — блокируем сайт
yesBtn.onclick = () => {
  // Вариант 1: Оставляем окно и меняем в нем текст
  modal.innerHTML = "<h2>Доступ ограничен</h2><p>Извините, вы дофига умненький</p>";
  
  // Вариант 2: Полностью блокируем основной контент визуально
  siteContent.style.filter = "blur(10px)";
  siteContent.style.pointerEvents = "none"; // Запрещает клики
  siteContent.style.userSelect = "none";    // Запрещает выделение текста
};
