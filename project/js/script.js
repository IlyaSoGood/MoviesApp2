'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          btn = document.querySelector('.add button'),
          input = document.querySelector('.add .adding__input'),
          checkbox = input.nextElementSibling.nextElementSibling;
    let base = movieDB.movies,
        arrDeleteByElements = [];
    
    adv.forEach(item => {
        item.remove();
    });
    genre.textContent = 'Драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    function creatingFilmList (a, callback) {
        base.sort();
        movieList.innerHTML = "";
        base.forEach(function(film, i) {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film.length > 21 ? film.slice(0, 21)+'...' : film}
                    <div class="delete"></div>
                </li>`;
        });
        callback(); 
    }
    function sub () {
        arrDeleteByElements = document.querySelectorAll('.promo__interactive-list .delete');
        base.forEach(function(film, i) {
            let deleteFunction = function() {
                console.log(base);
                delete(base[i]);
                base.sort();
                base.pop();
                creatingFilmList(null, function() {
                    console.log(base);
                    arrDeleteByElements = document.querySelectorAll('.promo__interactive-list .delete');
                    base.forEach(function(film, i) {
                        arrDeleteByElements[i].addEventListener('click', deleteFunction);
                    });
                });
            };
            arrDeleteByElements[i].addEventListener('click', deleteFunction);
            console.log(arrDeleteByElements);
        });
        console.log(base);
    }
    creatingFilmList (null, sub);
    
    function addingFilm () {
        event.preventDefault();
        if (input.value) {
            base.push(input.value);
            creatingFilmList (null, sub);
            if (checkbox.checked == true) {
                console.log('Добавляем любимый фильм');
            }
        }
    }
    btn.addEventListener('click', addingFilm);
});