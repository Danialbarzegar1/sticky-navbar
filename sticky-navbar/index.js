const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");
console.log(navbarEl.offsetHeight);
comsole.log(".bottom-containerEl.offsetTop")

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active");
    }
})