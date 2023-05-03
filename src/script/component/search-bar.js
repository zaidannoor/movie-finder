class SearchBar extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <style>
            form{
                width: 70%;
                margin: auto;
                margin-top: 50px;
            }
            
        </style>
        <form class="d-flex" id="form">
            <input id="searchElement" class="form-control me-2" type="search" placeholder="Search">
            <button id="searchButton" class="btn btn-success" type="submit">Search</button>
        </form>
        `;
        this.querySelector('#searchButton').addEventListener('click', this._clickEvent);
    }
    
}

customElements.define('search-bar',SearchBar);