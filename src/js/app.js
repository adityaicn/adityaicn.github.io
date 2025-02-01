import { SlideShow } from "./slide.js";
import { slides } from "./data.js";

// Initialize the slideshow
const slideshowContainer = document.getElementById('slideshow');
new SlideShow(slideshowContainer, slides);

// ======================

class App {
    constructor() {
        this.body = document.body;
        this.toggleButton = document.getElementById('dark-mode-toggle');
        this.initTheme();
        this.addEventListeners();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.body.classList.add('dark-mode');
            this.updateToggleButton('light');
        } else {
            this.updateToggleButton('dark');
        }
    }

    addEventListeners() {
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.body.classList.toggle('dark-mode');
        const isDarkMode = this.body.classList.contains('dark-mode');

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        this.updateToggleButton(isDarkMode ? 'light' : 'dark');
    }

    updateToggleButton(mode) {
        this.toggleButton.textContent = mode === 'dark' ? '🌙' : '☀️';
    }
}

let app = new App();