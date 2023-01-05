const burgerBtn = document.querySelector(".burger");
const barIco = document.querySelector(".fa-bars");
const xIco = document.querySelector(".fa-times");
const nav = document.querySelector("nav ul");

const hanleNav = () => {
	nav.classList.toggle("active");
	burgerBtn.classList.toggle("active");
	barIco.classList.toggle("hide");
	xIco.classList.toggle("hide");
};

burgerBtn.addEventListener("click", hanleNav);
