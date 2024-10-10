export default class Carousel {
   constructor() {
      this.currentIndex = 0;
      this.slides = document.querySelectorAll(".carousel-slide img");
      this.totalSlides = this.slides.length;
      this.dots = document.querySelectorAll(".dot");
      this.intervalId = null;
   }

   // initialization on page load
   init() {
      this.addEventListeners();
      this.updateCarousel();
      this.startAutoSlide();
   }

   // start auto sliding
   startAutoSlide() {
      this.stopAutoSlide();
      this.intervalId = setInterval(() => this.moveSlideAuto(), 5000);
   }

   // stop auto sliding
   stopAutoSlide() {
      clearInterval(this.intervalId);
   }

   // move to next or previous slide
   moveSlide(direction) {
      this.currentIndex =
         (this.currentIndex + direction + this.totalSlides) % this.totalSlides;
      this.updateCarousel();
   }

   // move to a specific slide
   currentSlide(n) {
      this.currentIndex = (n + this.totalSlides) % this.totalSlides;
      this.updateCarousel();
   }

   // Auto movement
   moveSlideAuto() {
      this.moveSlide(1);
   }

   // event listeners
   addEventListeners() {
      document.querySelector(".prev").addEventListener("click", () => {
         this.moveSlide(-1);
         this.startAutoSlide();
      });

      document.querySelector(".next").addEventListener("click", () => {
         this.moveSlide(1);
         this.startAutoSlide();
      });

      this.dots.forEach((dot, i) => {
         dot.addEventListener("click", () => {
            this.currentSlide(i);
            this.startAutoSlide();
         });
      });
   }

   updateCarousel() {
      this.slides.forEach((slide, index) => {
         slide.style.display = index === this.currentIndex ? "block" : "none";
      });

      this.dots.forEach((dot, index) => {
         dot.classList.toggle("active", index === this.currentIndex);
      });
   }
}
