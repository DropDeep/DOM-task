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

// 1)
const ads = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      filmContent = document.querySelector(".promo__interactive-list");
    //   listOfFilms = filmContent.getElementsByTagName('li');
  
 ads.forEach(img => {
    img.remove();
});

genre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("/img/bg.jpg")';

filmContent.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    filmContent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} - ${film}
            <div class="delete"></div>
        </li>
    `;
});

// for (let i = 0; i < listOfFilms.length; i++) {
//     listOfFilms[i].textContent = `${i + 1} - ${movieDB.movies[i]}`; 
// }

// 5)
// done in 4th


