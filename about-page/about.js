// Animations

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

// Hamburger Menu

document.addEventListener("DOMContentLoaded", () => {
	const hamMenu = document.querySelector(".ham-menu");
	const offScreenMenu = document.querySelector(".off-screen-menu");
	const menuOverlay = document.getElementById("menuOverlay");
	const menuLinks = document.querySelectorAll(".menu-item");

	hamMenu.addEventListener("click", () => {
		hamMenu.classList.toggle("active");
		offScreenMenu.classList.toggle("active");
		menuOverlay.classList.toggle("active");
	});

	function closeMenu() {
		hamMenu.classList.remove("active");
		offScreenMenu.classList.remove("active");
		menuOverlay.classList.remove("active");
	}

	// remove menu when the overlay is clicked
	menuOverlay.addEventListener("click", closeMenu);

	// remove menu when any menu-link is clicked
	menuLinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
	});
});
