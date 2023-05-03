class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Merriweather&display=swap');
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host{
               
                display: block;
                width: 100%;
                background-color: #21325E;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            nav{
                width: 90%;
                margin: auto; 
                padding: 15px;
            }
            h3{
                font-size: 24px;
                font-family: 'Merriweather', serif;
            }
        </style>

        <nav class="">
            <h3>Movies and TV Shows finder</h3>
        </nav>
        `
    }
}

customElements.define('nav-bar', NavBar);