const addMobie = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovie = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = ''; // not ideal

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info } = movie;
        const { title: movieTitle } = info;
        // movieEl.textContent = movie.info.title;
        let text = movieTitle + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
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
const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovie(filterTerm)
}

addMobie.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMovieHandler)