import router from "./services/router.js";

window.app={
    router,
};

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
})

document.addEventListener("click", () =>{
    const links = document.querySelectorAll(".navbar-list a");
    links.forEach(a =>{
        a.classList.remove("active");
    })
    const activePath = window.location.pathname;

    console.log(`.navbar-list li a[href="${activePath}"]`)

    const activeLink = document.querySelector(`.navbar-list li a[href="${activePath}"]`);

    activeLink.classList.add("active");
})

