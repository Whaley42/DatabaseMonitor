import router from "./services/Router.js";

window.app={
    router,
};

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    console.log("Hello")
})