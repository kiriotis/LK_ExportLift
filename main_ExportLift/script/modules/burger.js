export class Burger {
	constructor({ nav, closeBtn, openBth }) {
		this.nav = document.getElementById(nav);
		this.closeBtn = document.getElementById(closeBtn);
		this.openBth = document.getElementById(openBth);
	}
	//
	open = false;
	//
	isOpen() {
		return this.open;
	}

	openNav() {
		this.nav.classList.add("active");
		this.open = true;
	}
	closeNav() {
		this.nav.classList.remove("active");
		this.open = false;
	}
	init() {
		this.openBth.addEventListener("click", () => {
			this.openNav();
		});
		this.closeBtn.addEventListener("click", () => {
			this.closeNav();
		});
	}
}
