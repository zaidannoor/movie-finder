class HeroImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Merriweather&display=swap');
            hero-img{
                display: block;
                width: 100%;
                height: 300px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                background-image: url("./img/hero-img.jpg"); 
                background-repeat: no-repeat; 
                background-size: cover;
                color: white;
                opacity: 0.9;
            }
            h1,h2{
                padding-top: 30px;
                margin: auto;
                width: 90%;
                font-family: 'Merriweather', serif;
            }   
        </style>

        <h1>Welcome.</h1>
        <h2>Millions of movies,TV shows, and Games to discover. Explore now.</h2>
        <search-bar></search-bar>
        `
    }
}

customElements.define('hero-img', HeroImage);