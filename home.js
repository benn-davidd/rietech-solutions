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
	slidesPerView: 1, // Number of slides visible at once
	spaceBetween: 2, // Space between slides in px
	loop: true,
	autoplay: {
		delay: 0, // Continuous autoplay
		disableOnInteraction: false,
		pauseOnMouseEnter: true, // Pauses on hover
	},

	breakpoints: {
		720: {
			slidesPerView: 2,
		},

		950: {
			slidesPerView: 3,
		},
	},

	speed: 3000, // Adjust speed for continuous effect
	allowTouchMove: false, // Disable manual swiping
});

// bottom Slider: draggable and auto-advances after a certain interval
const bottomSlider = new Swiper(".bottom-slider", {
	slidesPerView: 1, // Number of slides visible at once
	spaceBetween: 5, // Space between slides in px
	loop: true,
	autoplay: {
		delay: 5000, // Advances every 5 seconds
		disableOnInteraction: false, // Continues autoplay after interaction
	},

	breakpoints: {
		430: {
			slidesPerView: 2,
		},

		720: {
			slidesPerView: 3,
		},

		950: {
			slidesPerView: 4,
		},
	},

	speed: 800, // Transition speed
	allowTouchMove: true, // Enable manual swiping
});

// HOME-REVIEWS

const reviewsSlider = new Swiper(".reviews-slider", {
	slidesPerView: 1,
	spaceBetween: 5,
	loop: false,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	breakpoints: {
		430: {
			slidesPerView: 2,
		},

		720: {
			slidesPerView: 3,
		},

		950: {
			slidesPerView: 4,
		},
	},

	speed: 800,
	allowTouchMove: true,
});

// Copyright

const currentYear = new Date().getFullYear();

const copyright = document.getElementById("copyright");

function updateCopyright() {
	if (window.matchMedia("(max-width: 501px)").matches) {
		copyright.innerHTML = "&copy; " + currentYear + ". David Ben-Emu";
	} else {
		copyright.innerHTML =
			"Copyright&copy;" + currentYear + ". David Ben-Emu. All Rights Reserved";
	}
}

updateCopyright();

window.addEventListener("resize", updateCopyright);
