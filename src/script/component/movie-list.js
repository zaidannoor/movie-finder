class MovieList extends HTMLElement{
    constructor(){
        super();
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
    }

    render(){
        /* Data didapatkan dari keyword searchbar */
        if(this._movies.length > 1){
            this.innerHTML = '';
            this.innerHTML += `
            <style>
            movie-list{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            </style>
                <nav aria-label="Page navigation example" class="my-4">
                    <ul class="pagination justify-content-center ">
                    <li class="page-item"><button class="page-link btn btn-primary next" type="button">&#129064; Previous</button></li>
                    <li class="page-item"><button class="page-link btn btn-primary prev" type="button">Next &#129062;</button></li>
                    </ul>
                </nav>
            `;
            this._movies.forEach((movie) => {
                this.innerHTML += `
                    <div class="col-md-3 mb-5">
                        <div class="card">
                            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}>
                            <div class="card-body">
                                <h5 class="card-title m-3">${movie.Title}</h5>
                                <p class="card-subtitle mx-3">${movie.Type}</p>
                                <p class="card-text mx-3"><small class="text-muted">${movie.Year}</small></p>
                                <button id="${movie.imdbID}" type="button" class="btn btn-primary button-detail">More detail</button>
                            </div>
                        </div>
                    </div>
                    `  
            });
            this.innerHTML += `
                <nav aria-label="Page navigation example" class="my-4">
                    <ul class="pagination justify-content-center ">
                    <li class="page-item"><button class="page-link btn btn-primary" type="button">&#129064; Previous</button></li>
                    <li class="page-item"><button class="page-link btn btn-primary" type="button">Next &#129062;</button></li>
                    </ul>
                </nav>
            `;
            const buttonDetail = this.querySelectorAll('.button-detail');
            buttonDetail.forEach(button => {
                button.addEventListener('click', this._clickEvent);
            })
        }
        /* Data didapatkan dari click button detail */
        else{
            this.innerHTML = '';
            this.innerHTML += `
            <style>
                .detailed-movie{
                    background-color: rgb(227,227,227);
                    padding: 0;
                }
            </style>
                <div class="card mb-3 detailed-movie">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this._movies.Poster}" class="img-fluid rounded-start" alt="${this._movies.Title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this._movies.Title} (${this._movies.Year})</h5>
                                <p class="card-text text-capitalize my-1">type: <strong>${this._movies.Type}</strong></p>
                                <p class="card-text my-2"><span class="border border-secondary p-1">${this._movies.Rated}</span> ${this._movies.Genre}</p>
                                <p class="card-text my-1">Released: ${this._movies.Released}</p>
                                <p class="card-text my-1">Language: ${this._movies.Language}</p>
                                <p class="card-text my-1">imdb Rating: ${this._movies.imdbRating}</p>
                                <p class="card-text">imdb Votes: ${this._movies.imdbVotes}</p>
                                <h4 card-text>Overview</h4>
                                <p class="card-text">${this._movies.Plot}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                `          
        } 
    }

    renderError(message) {
        this.innerHTML = `
        <style>
            .err-message {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.innerHTML = `<h2 class="err-message bg-danger">${message}</h2>`;
    }
}

customElements.define('movie-list', MovieList);