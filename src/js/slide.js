
class SlideShow {
    #container; 
    #slides; 
    #currentIndex = 0; 
    #isPlaying = true; 
    #interval = null;

    constructor(container, slides) {
        this.#container = container;
        this.#slides = slides;
        this.#render();
        this.#start();
    }

    #render() {
        this.#container.innerHTML = ''; // Clear the container

        const currentSlide = this.#slides[this.#currentIndex];

        // Create slide element
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide', 'active');

        // Injecting rich HTML content from the 'content' property
        slideElement.innerHTML = `
            <div class="slide-content">
                ${currentSlide.content}  <!-- This will inject the <h1>, <h2>, <p>, etc. -->
            </div>
            <div class="slide-footer">
                <p>Slide ${this.#currentIndex + 1} of ${this.#slides.length}</p>
            </div>
        `;

        // Create controls
        const controls = document.createElement('div');
        controls.classList.add('slide-controls');
        controls.innerHTML = `
            <button id="prev">Previous</button>
            <button id="play-pause">${this.#isPlaying ? 'Pause' : 'Play'}</button>
            <button id="next">Next</button>
        `;

        // Append slide and controls to the container
        this.#container.append(slideElement, controls);

        // Event listeners for controls
        controls.querySelector('#prev').addEventListener('click', () => this.#prevSlide());
        controls.querySelector('#next').addEventListener('click', () => this.#nextSlide());
        controls.querySelector('#play-pause').addEventListener('click', () => this.#togglePlayPause());
    }

    #start() {
        if (this.#isPlaying) {
            this.#interval = setInterval(() => this.#nextSlide(), 5000);
        }
    }

    #stop() {
        clearInterval(this.#interval);
    }

    #nextSlide() {
        this.#currentIndex = (this.#currentIndex + 1) % this.#slides.length;
        this.#render();
    }

    #prevSlide() {
        this.#currentIndex = (this.#currentIndex - 1 + this.#slides.length) % this.#slides.length;
        this.#render();
    }

    #togglePlayPause() {
        this.#isPlaying = !this.#isPlaying;
        this.#isPlaying ? this.#start() : this.#stop();
        this.#render();
    }
}


export {SlideShow};