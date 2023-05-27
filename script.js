// Пример добавления анимации к заголовку сайта при наведении мыши
const title = document.querySelector('h1');
title.addEventListener('mouseover', () => {
 title.classList.add('animate__animated', 'animate__pulse');
});
title.addEventListener('animationend', () => {
 title.classList.remove('animate__animated', 'animate__pulse');
});