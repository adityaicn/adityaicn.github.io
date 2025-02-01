import { SlideShow } from "./slide.js";
import { Dashavatara, Tridev } from "./data.js";

// Initialize the slideshow
const showDashavatara = document.getElementById('dashavatara');
new SlideShow(showDashavatara, Dashavatara);

const showTridev = document.getElementById("tridev");
new SlideShow(showTridev, Tridev);
// ======================

class App {
    constructor() {
        this.copyright = `<p>&copy; Aditya - ${new Date().getFullYear()} </p>`;
        this.body = document.body;
        this.toggleButton = document.getElementById('dark-mode-toggle');
        this.initTheme();
        this.addEventListeners();
        this.init()
    }

    init() {
        const printCopy = document.querySelector(".footer");
        printCopy.innerHTML = this.copyright;

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