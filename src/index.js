import "./styles.css";

// import images
import firstSlide from "./assets/slide-1.avif";
import secondSlide from "./assets/slide-2.avif";
import thirdSlide from "./assets/slide-3.avif";
import fourthSlide from "./assets/slide-4.avif";

const firstSlideImg = document.querySelector("#slide-1");
firstSlideImg.src = firstSlide;

const secondSlideImg = document.querySelector("#slide-2");
secondSlideImg.src = secondSlide;

const thirdSlideImg = document.querySelector("#slide-3");
thirdSlideImg.src = thirdSlide;

const fourthSlideImg = document.querySelector("#slide-4");
fourthSlideImg.src = fourthSlide;

// import the Carousel class
import Carousel from "./carousel.js";

// create a new Carousel instance
const carousel = new Carousel();
carousel.init();
