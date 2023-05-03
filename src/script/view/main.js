import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');
     
    const onButtonSearchClicked = (event) => {
        DataSource.searchMovie(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult)
        event.preventDefault()
    };

    const onDetail = (event) => {
        DataSource.getMovieByID(event.target.id)
        .then(renderResult)
        .catch(fallbackResult);
    };
    
    const renderResult = (results) => {
        movieListElement.movies = results;
    };
    
    const fallbackResult = (message) => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    movieListElement.clickEvent = onDetail;

    /* Memanggil function untuk mengambil data yang digunakan
        sebagai awalan agar web tidak kosong*/
    DataSource.initialLoad()
    .then(renderResult)
    .catch(fallbackResult);
    
};

export default main;