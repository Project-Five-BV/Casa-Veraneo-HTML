// Slide
class Slider {
    constructor(elem, delay) {
        this.slides = Array.from(document.querySelectorAll(elem));
        this.slidesCount = this.slides.length;
        this.delay = delay;
        this.loop = 0 + 1000 * this.slidesCount;

        this.init();
    }

    init() {
        this.setPositions('init');
        this.triggerSlideDelay();
    }

    setPositions(trigger) {
        this.slides.forEach((slide, index) => {
            const pos = trigger === 'init' ? index : index - this.loop % this.slidesCount;
            slide.style.opacity = pos ? 0 : 1;
        });
    }

    triggerSlideDelay() {
        setTimeout(() => this.slide(), this.delay);
    }

    slide() {
        this.loop++;
        this.setPositions('slide');
        this.triggerSlideDelay();
    }
}

new Slider('.slider li', 5000);

