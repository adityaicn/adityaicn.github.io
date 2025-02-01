
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



// Dashavatara Data (All 10 Avatars with Detailed Stories and Lessons)
const slides = [
    {
        title: "Matsya Avatar",
        content: `
            <h1>Matsya Avatar</h1>
            <h2>The Fish Incarnation – Savior of Knowledge</h2>
            <p>Matsya, the first incarnation of Lord Vishnu, appeared as a giant fish to save the sacred Vedas and humanity from a catastrophic flood. Guiding King Manu's boat, Matsya ensured that life and wisdom were preserved amidst chaos.</p>
            <p><strong>Lesson:</strong> Matsya teaches us the importance of preserving knowledge and trusting in divine guidance during turbulent times.</p>
        `
    },
    {
        title: "Kurma Avatar",
        content: `
            <h1>Kurma Avatar</h1>
            <h2>The Tortoise Incarnation – The Foundation of Support</h2>
            <p>In the second avatar, Vishnu took the form of Kurma, a tortoise, to support Mount Mandara during the cosmic churning of the ocean (Samudra Manthan). This allowed the gods and demons to retrieve the nectar of immortality.</p>
            <p><strong>Lesson:</strong> Kurma symbolizes the importance of a stable foundation and patience when striving for great achievements.</p>
        `
    },
    {
        title: "Varaha Avatar",
        content: `
            <h1>Varaha Avatar</h1>
            <h2>The Boar Incarnation – The Rescuer of Earth</h2>
            <p>Varaha, the mighty boar incarnation, dived into the cosmic ocean to rescue the Earth, personified as Bhudevi, from the demon Hiranyaksha. After a fierce battle, Varaha lifted the Earth on his tusks, restoring balance to the universe.</p>
            <p><strong>Lesson:</strong> Varaha teaches us the importance of environmental protection and the power of good triumphing over evil.</p>
        `
    },
    {
        title: "Narasimha Avatar",
        content: `
            <h1>Narasimha Avatar</h1>
            <h2>The Man-Lion Incarnation – Protector of Devotees</h2>
            <p>Narasimha, half-man and half-lion, emerged to protect his devotee Prahlada from his tyrannical father, Hiranyakashipu. Exploiting the loopholes in Hiranyakashipu's boon, Narasimha destroyed him at twilight, on a threshold, with his claws.</p>
            <p><strong>Lesson:</strong> Narasimha reminds us that faith in divine justice can overcome even the most formidable tyranny.</p>
        `
    },
    {
        title: "Vamana Avatar",
        content: `
            <h1>Vamana Avatar</h1>
            <h2>The Dwarf Incarnation – The Humility of the Divine</h2>
            <p>Vamana, the dwarf incarnation of Vishnu, approached the powerful demon king Bali and asked for three paces of land. When granted, he grew to a cosmic size, covering the universe in two strides and sending Bali to the netherworld with the third.</p>
            <p><strong>Lesson:</strong> Vamana shows that humility and wisdom can triumph over power and arrogance.</p>
        `
    },
    {
        title: "Parashurama Avatar",
        content: `
            <h1>Parashurama Avatar</h1>
            <h2>The Warrior with the Axe – The Destroyer of Corruption</h2>
            <p>Parashurama, the sixth avatar, wielded an axe to rid the world of corrupt Kshatriya rulers. His mission was to restore dharma by confronting injustice with righteous strength.</p>
            <p><strong>Lesson:</strong> Parashurama teaches us that courage and strength are necessary to combat corruption and uphold justice.</p>
        `
    },
    {
        title: "Rama Avatar",
        content: `
            <h1>Rama Avatar</h1>
            <h2>The Prince of Ayodhya – The Embodiment of Virtue</h2>
            <p>Rama, the seventh avatar and the hero of the Ramayana, exemplifies virtue, honor, and duty. His journey through exile, the rescue of Sita from the demon Ravana, and his unwavering commitment to dharma inspire millions.</p>
            <p><strong>Lesson:</strong> Rama embodies the values of integrity, loyalty, and righteousness, teaching us to uphold truth even in adversity.</p>
        `
    },
    {
        title: "Krishna Avatar",
        content: `
            <h1>Krishna Avatar</h1>
            <h2>The Divine Statesman – The Master of Life’s Mysteries</h2>
            <p>Krishna, the eighth incarnation, is a divine strategist and guide in the Mahabharata. His teachings in the Bhagavad Gita reveal profound truths about life, duty, and the path to spiritual enlightenment.</p>
            <p><strong>Lesson:</strong> Krishna teaches us the importance of balance in life—embracing both joy and responsibility while remaining connected to a higher purpose.</p>
        `
    },
    {
        title: "Buddha Avatar",
        content: `
            <h1>Buddha Avatar</h1>
            <h2>The Enlightened One – The Teacher of Compassion</h2>
            <p>Vishnu's ninth incarnation as Buddha brought the world teachings of compassion, detachment from material desires, and the path to enlightenment through mindfulness and self-awareness.</p>
            <p><strong>Lesson:</strong> Buddha teaches us to seek inner peace, compassion, and understanding, emphasizing that enlightenment lies within.</p>
        `
    },
    {
        title: "Kalki Avatar",
        content: `
            <h1>Kalki Avatar</h1>
            <h2>The Future Warrior – The Harbinger of a New Age</h2>
            <p>Kalki, the prophesied final avatar, will appear at the end of Kali Yuga riding a white horse with a blazing sword. He will destroy evil and restore dharma, heralding a new era of righteousness.</p>
            <p><strong>Lesson:</strong> Kalki symbolizes hope and renewal, teaching that even in the darkest times, light and righteousness will prevail.</p>
        `
    }
];


// Initialize the slideshow
const slideshowContainer = document.getElementById('slideshow');
new SlideShow(slideshowContainer, slides);

// =====================

