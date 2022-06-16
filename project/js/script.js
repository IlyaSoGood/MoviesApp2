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
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');

    let base = movieDB.movies;

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(base);
            creatingFilmList(base, movieList);     
            
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
        }
        event.target.reset();
    });

    function creatingFilmList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach(function(film, i) {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film.length > 21 ? film.slice(0, 21)+'...' : film}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                base.splice(i, 1);

                creatingFilmList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    sortArr(base);
    creatingFilmList(base, movieList);
});