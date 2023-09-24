import { Burger } from "./modules/burger.js";

const burger = new Burger({
	nav: "nav",
	closeBtn: "closeNavBtn",
	openBth: "openNavBtn",
});
burger.init();
