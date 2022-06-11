/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// document.querySelector('.promo__adv').remove(); // УДАЛЯЕТ ВЕСЬ БЛОК
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
    //   movieList = document.querySelectorAll('.promo__interactive-item'); МОЙ СПОСОБ
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

// poster.style.cssText = 'background: url("../img/bg.jpg") center center/cover no-repeat; background-position: top';
// poster.style.background = 'url("img/bg.jpg") center top/cover no-repeat';  //ПРИМЕР
poster.style.backgroundImage = 'url("img/bg.jpg")';

// МОЙ СПОСОБ: ПЕРЕЗАПИСЬ КАЖДОГО ЭЛЕМЕНТА ВЕРСТКИ ИЗ ЭЛЕМЕНТА МАССИВА.
// movieList.forEach(function(item, i) {
//     item.innerHTML = `${i + 1}. ${movieDB.movies.sort()[i]}<div class="delete"></div>`;
// }); 
// ИВАНА СПОСОБ: МАССИВ ФОРМИРУЕТ КАЖДЫЙ РАЗ СТРОКУ ВЕРСТКИ
movieDB.movies.sort();
movieList.innerHTML = "";
movieDB.movies.forEach(function(film, i) {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>`;
});

