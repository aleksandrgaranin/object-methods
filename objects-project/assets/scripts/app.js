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
        const { info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie)

        // movieEl.textContent = movie.info.title;
        // let text = movieTitle + ' - ';
        let text = getFormattedTitle.apply(movie) + ' - ';
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
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
            set title(val) {
                if (val === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue,
        },
        id: Math.random(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);


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