// FIRST-HOME
// typing text effect

const phrases = [
	"Innovation and Creativity ",
	"Client-Centric Solutions ",
	"Integrity and Transparency ",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function typeloop() {
	const typingText = document.getElementById("typing-text");
	typingText.innerHTML = currentPhrase.join("");
	typingText.style.color = "black";

	if (i < phrases.length) {
		if (!isDeleting && j <= phrases[i].length) {
			currentPhrase.push(phrases[i][j]);
			j++;
		}
		if (isDeleting && j > 0) {
			currentPhrase.pop();
			j--;
		}
		if (j === phrases[i].length && !isDeleting) {
			isDeleting = true;
			setTimeout(typeloop, 800);
			return;
		}
		if (isDeleting && j === 0) {
			currentPhrase = [];
			isDeleting = false;
			i = (i + 1) % phrases.length;
			if (i === phrases.length) {
				i = 0; //loops back to first phase
			}
		}
	}

	const speed = isDeleting ? 25 : 30;
	setTimeout(typeloop, speed);
}

typeloop();

// HOME-CLIENTS

// carousel

// top Slider: continuous autoplay, pauses on hover
const topSlider = new Swiper(".top-slider", {
	slidesPerView: 3, // Number of slides visible at once
	spaceBetween: 1, // Space between slides in px
	loop: true,
	autoplay: {
		delay: 0, // Continuous autoplay
		disableOnInteraction: false,
		pauseOnMouseEnter: true, // Pauses on hover
	},
	speed: 3000, // Adjust speed for continuous effect
	allowTouchMove: false, // Disable manual swiping
});

// bottom Slider: draggable and auto-advances after a certain interval
const bottomSlider = new Swiper(".bottom-slider", {
	slidesPerView: 3, // Number of slides visible at once
	spaceBetween: 5, // Space between slides in px
	loop: true,
	autoplay: {
		delay: 5000, // Advances every 5 seconds
		disableOnInteraction: false, // Continues autoplay after interaction
	},
	speed: 800, // Transition speed
	allowTouchMove: true, // Enable manual swiping
});
