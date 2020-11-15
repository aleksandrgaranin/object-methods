const addMobie = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovie = () => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = ''; // not ideal

    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        let text = movie.info.title + '-';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + ` ${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }


    const newMovie = {
        info: {
            title, //same as title: title
            [extraName]: extraValue,
        },
        id: Math.random()
    };

    movies.push(newMovie);
    console.log(movies);
    renderMovie();
};

addMobie.addEventListener('click', addMovieHandler)